# Requirements

## Problem statement
Popular species identification apps offer very functional design and scientific interfaces, but users have expressed a want for a more gamified experience. We want to create a species identification app with video game-based experiences for users where users can not only identify the plant/animal in their photo, but share photos with other users, friend other users, gain cosmetics, and participate in challenges and events. 

## Functional requirements
Priority labels below use stack ranking (1 is most important, 2 next most important, etc).
- FR-1 (Must: supports core concept of the app): Users can take a photo and have the species identified. 
- FR-2 (Must: it supports the social aspect of the app): Users can view other users' uploaded photos. 
- FR-3 (Must: it supports the social aspect of the app): Users can ‘friend’ other users.
- FR-4 (Must: supports scientific contribution aspect of app): Users can edit details of their uploaded photo metadata, including location, species, and caption the observation. 
- FR-5 (Must: supports key visualization): Users can view a map with nearby sightings and filter map for given criteria. 
- FR-6 (Must: supports game experience): Users can earn cosmetics (badges/XP) for different achievements (number of observations, rare sightings, participating in events, etc). 
- FR-7 (Must: supports personalized experience): Users can create profiles with favorite sightings pinned as well as all recent sightings. 
- FR-8 (Must: supports scientific rigor): Users can propose alternative identified species names as opposed to the selected title. 
- FR-9 (Must: supports citizen science): Users can participate in community events and challenges.


## Non-functional requirements
- NFR-1 (Must: user privacy): User location is not shown publicly. 
- NFR-2 (Must: storage): Images are stored in an optimal way, TBD. 

## Constraints
- C-1: Built with React Native and Expo via JavaScript. 
- C-2: Backend services and map functionality must be low-cost. 
- C-3: Species identification depends on iNaturalist API or datasets. 

## Success metrics
- By week 10, a user outside the team can install the app from the production target and complete the walking skeleton: take or upload a photo, get a species suggestion, save the sighting, and see it on the map.
- Species identification returns a suggestion for a clear photo of a common plant or animal.
- No other user can see a sighting's exact location (NFR-1), checked by an automated test.
- CI runs on every pull request and passes on the submitted commit.

## Non-goals
Training our own species identification model. We rely on the iNaturalist API or datasets (C-3).
- Replacing iNaturalist as a scientific record or research database.
- Implementing every planned feature in fall term. Fall term targets the MVP; the rest of the FRs follow in later terms.
- Web support beyond what Expo provides by default. iOS and Android are the focus.


## Open questions
What backend service do we want to use? Owner: Nat Rurka, end of Sprint 2
What are the specific gamified experiences we want to include in our Fall term MVP? Owner: Lauren Bell, end of Sprint 2
What map provider do we want to use? Owner: Annie Luse, end of Sprint 2
Relational or non-relational database? Owner: Lauren Bell
How will users sign in (SSO or new accounts)? Owner: Annie Luse
Plants only, or plants and animals?
How precise can shown locations be while still keeping user locations private (NFR-1)?
How does iNaturalist handle inappropriate uploads, filtering, and storage, and what should we do the same way?
What decides when an observation's displayed species changes after others propose alternatives (FR-8)?
Jest or Mocha for testing?

