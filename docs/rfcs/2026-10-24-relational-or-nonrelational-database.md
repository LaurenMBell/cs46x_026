# RFC: Relational or Non-relational Database

Project 026  
Annie Luse   
lusean@oregonstate.edu

| Author | Annie Luse |
| :---- | :---- |
| Date | 2026-10-24 |
| Status | Proposed |
| Decision Date | (fill when decided)  |
| Deciders | (who agreed to the outcome)  |
| Superseded By | (link, if applicable)  |

## Problem and Context

Our app will be similar to the app Pokémon Go, with a gamified approach to citizen science. Inside the app, users can “collect” plants or species that they see in real life by taking photographs of plants they see, which will be uploaded and analyzed to detect the species. They can see rankings for how many times a species has been spotted. Almost every feature in our proposal reads from or writes to shared data. That data includes user profiles and friendships, sightings with photos and GPS coordinates, species, community identification votes, badges and levels earned from repeat sightings. We need to choose the database that holds all of it.

Our team needs to decide whether to use a relational or non-relational database for our project. This means that our choice is between either PostgreSQL hosted on Supabase (the relational database) or Cloud Firestore, part of Firebase (the non-relational database). This is a choice we need to make now, because relational databases and non-relational databases store and organize data differently, making each better suited for specific types of applications. 

The database determines how we model data, how we write every query, how we enforce access rules, and how authentication and photo storage connect to everything else. Undoing it later means redesigning all of our data management and schema and rewriting the screens and APIs built on top of it. It needs to be made now because the backend work for sightings, the map, and the profile depends on it, and every feature built on the wrong choice adds to the cost of switching.

If we do nothing, we don't end up with no database. The first teammate who needs to persist data will likely reach for Firebase because it is in our proposal, and our data model will be decided implicitly by that first feature. The cost arrives later, when a feature like "nearby sightings from my friends" turns out to be awkward in the model we fell into. 

## Options

### Option A: Relational (PostgreSQL on Supabase) 

Store app data in Postgres tables with foreign keys (users, friendships, sightings, species, families, votes, badges, events), with PostGIS for location queries, Supabase Auth for sign-in, and Supabase Storage for photos.

Costs: We must design a schema up front and write SQL, including functions for geographic queries. Supabase's free plan pauses projects after one week of inactivity and allows only two active projects, so a dev/production split uses both slots. The free plan's 1 GB of file storage is our tightest limit. Offline support is not built in, so queued uploads from places with poor signal would be our own code.

Right choice if our core features depend on queries across entities (friends' sightings nearby, leaderboards by species, verification counts) and we want to stay on a free plan with no billing account.

### Option B: Non-relational (Cloud Firestore on Firebase) 

Store data as documents in collections, duplicating data where needed for fast reads (for example, keeping a per-species sighting counter on the species document). Use geohashes for location queries, Firebase Auth for sign-in, and Cloud Storage for Firebase for photos.

Costs: Nearby queries need a geohash workaround: several range queries plus client-side filtering of false positives. Counters and leaderboards need duplicated data kept in sync, usually with Cloud Functions. Cloud Storage and Cloud Functions both require the pay-as-you-go Blaze plan, so a teammate must link a payment method and is responsible for any overage.

Right choice if most reads are a single user's own data (profile, scrapbook), real-time updates and offline use in the field matter more than flexible queries, and if my team is comfortable putting a billing account on the project.

### Option C: Do Nothing

Keep building the UI this term against local mock data and choose a database in winter, or let the first backend feature default to Firebase as named in the proposal.

Costs: Mock data encodes an unagreed data model, so screens built against it need rework later. An implicit default to Firebase takes on Option B's costs without weighing them. The cost arrives with the first real backend feature, likely early winter term, when time is shorter.

Right choice if the feature list is still unstable. If community verification, events, and friend feeds might be cut, most of the cross-entity querying that favors Option A disappears, and deferring until scope settles would be reasonable.

## Analysis

Fit to our data and queries:  
Location is the deciding case. Firestore can range-filter on only one field per query, so Firebase's geoqueries guide combines several geohash range queries and discards false positives. Supabase supports PostGIS, with indexable geographic types and nearest-neighbor sorting by distance.

Performance, complexity, and security:  
At our scale (dozens of users, thousands of sightings), both will be fast enough. The one real difference is that Firestore bills per document read, including the false positives a geohash query discards; the verification plan measures how much that matters for us. Firestore is faster to start but leaves duplicated data for our code to keep consistent, while Postgres front-loads schema design and then enforces it, with reviewable migrations. Both rely on access rules we write (row-level security or Security Rules), and the risk either way is a missing rule.

Cost and limits:  
Photos are central to our app, so Firebase means Blaze: still likely \$0, but a teammate's card covers any overage. Firebase holds about 5,000 photos at \~1 MB each versus about 1,000 on Supabase, and Supabase's pause is a risk before demos.

|  | Supabase Free | Firebase Spark | Firebase Blaze |
| :---- | :---- | :---- | :---- |
| Billing Account | No | No | Yes |
| Database | 500 MB | 1 GiB; 50K reads, 20K writes/day | Same, then pay-as-you-go |
| Photo storage | 1 GB | Not available (requires Blaze) | 5 GB stored free (bucket must be in a US region) |
| Inactivity | Paused after 1 week; 2 active projects | Not paused | Not paused |

Uncertainty: If verification or friend feeds are cut, the relational advantage narrows. Our compressed photo size is unknown, so storage estimates are rough. If offline field use becomes a requirement, Firestore's built-in offline support becomes a real advantage.

## Recommendation and Verification Plan

I recommend Option A: PostgreSQL on Supabase, using PostGIS for location queries, Supabase Auth, and Supabase Storage for photos.

It wins on the deciding factor: most of our features query across related entities, and the most important one, nearby sightings, is native in PostGIS rather than a workaround. It also keeps us on a free plan with no billing account. Its main costs, the inactivity pause and the 1 GB photo limit, are predictable and manageable. Firestore's advantages, offline support and faster setup, matter less to us than query fit.

Supabase fails if we build the “nearby sightings” query with 5,000 test sightings and the query takes over 1 second, or if the “friends’ nearby sightings” feature needs more than one database call.

## Constraints

Licensing: PostgreSQL and PostGIS are open source, and Supabase's platform is open source and can be self-hosted, so choosing Option A doesn't lock our data into one vendor: the database could be exported and moved to any Postgres host. Firestore is proprietary to Google; leaving it means an export and a rewrite.

Data use: iNaturalist’s developer page also shapes our schema. Each iNaturalist photo has a license: CC0 (free to use), CC BY (credit the creator), or CC BY-NC (credit the creator, no commercial use). Our database must store each item’s license and creator so the app can show the right credit. CC BY-NC photos are fine for a class project but would have to be removed if the app ever made money. Because iNaturalist limits API use and heavy downloads, we should store iNaturalist links rather than copies of their photos. iNaturalist also publishes its full taxonomic tree as a monthly download. This is naturally table-shaped data that we can load directly into our species and family tables, which fits a relational database well.

We are a student-proposed project, so the partner confidentiality boundary is not applicable. Our team owns its code, and the database choice doesn’t change that.

## Delegation and Validation

What I handed to AI tools. I used Claude (Anthropic) to suggest framing the decision as Firestore versus Postgres on Supabase rather than abstract categories, to search for pricing and feature documentation, and to draft prose for each section of this RFC from my notes and our project proposal.

I checked every pricing and limit figure myself on the official Supabase and Firebase pricing pages and Firebase's Cloud Storage FAQ. My checks caught real errors. A third-party source the AI found listed Supabase's free file storage as 500 MB; the official page says 1 GB. Firebase's product list implies Cloud Storage has a free quota on any plan, but the official pricing table and Storage FAQ show it requires Blaze.

Our repository has no automated checks yet: no CI, branch protection, or required reviews, because we haven’t started building. Since nothing would catch an AI mistake automatically, I limited what I delegated to research and drafting, kept the decision itself for the team, and checked every fact myself against official sources.

## Decision

Proposed, until our team decides. 

## Sources

Project proposal, Nat Rurka, Annie Luse, and Lauren Bell, 10-13-26.

Supabase pricing, https\://supabase.com/pricing, accessed 2026-10-24.

Firebase pricing, https\://firebase.google.com/pricing, accessed 2026-10-24.

Firebase pricing plans, https\://firebase.google.com/docs/projects/billing/firebase-pricing-plans, accessed 2026-10-24.

FAQs about changes to Cloud Storage for Firebase, https\://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024, accessed 2026-10-24.

Firebase, Geo queries with Cloud Firestore, https\://firebase.google.com/docs/firestore/solutions/geoqueries.

Supabase, PostGIS: Geo queries,   
https\://supabase.com/docs/guides/database/extensions/postgis.

iNaturalist, Developers, https\://www\.inaturalist.org/pages/developers, accessed 2026-10-24.  
