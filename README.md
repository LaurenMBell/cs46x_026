# CS46x Project 026

<!-- TODO: rename once the team picks an app name -->

A mobile app similar to Pokémon Go, with a gamified approach to citizen science. Users take photos of plants and animals, and the app identifies the species (or users pick it themselves). Sightings go into the user's collection, show up on a map, and earn badges and levels. Users can also keep a scrapbook of favorite finds, add friends, and join community challenges.

## Why

Existing species identification apps like iNaturalist are built for scientific accuracy. We want to keep that science, using iNaturalist for identification, while making the experience more like a game.

## Project status

Early development (fall term, Sprint 2). The repository currently holds the Expo starter scaffold with basic navigation and a lint check in CI. The features below are planned, not built yet. See [`docs/requirements.md`](docs/requirements.md) for the full requirements and what is still undecided.

## Planned features

- Identify a species from a photo taken in the app or uploaded from the camera roll, or pick the species manually
- Scroll a feed of sightings from friends or everyone nearby
- Add friends, like and comment on their sightings
- Map of nearby sightings, with icons by taxonomic family and filters
- Badges, achievements, and levels for sightings, with rarity based on existing species datasets
- A profile scrapbook with pinned favorite sightings
- Community verification of species IDs
- Community events and challenges

User locations are never shown publicly.

## Tech stack

- [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) for iOS, Android, and web
- Species identification through the [iNaturalist](https://www.inaturalist.org/) API or datasets
- Backend: being decided in Sprint 2, with [Firebase](https://firebase.google.com/) as the leading option
- Maps: being decided in Sprint 2, between [Mapbox](https://www.mapbox.com/) and [OpenFreeMap](https://openfreemap.org/)

<!-- TODO: update the backend and map lines once those decisions are made -->

## Quickstart

<!-- TODO: run these steps yourself from a fresh clone before submitting. Graders follow them first. -->

### Prerequisites

- [Node.js](https://nodejs.org/) LTS and npm
- Git
- One of these, to run the app:
  - The **Expo Go** app on an iOS or Android phone
  - An Android emulator ([Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/)) or the iOS Simulator (Xcode, macOS only)
  - A web browser

> **Windows:** if PowerShell says `npm.ps1 cannot be loaded because running scripts is disabled`, run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then reopen the terminal.

### Run the app

```bash
git clone https://github.com/LaurenMBell/cs46x_026.git
cd cs46x_026
npm install
npx expo start
```

Then do one of these from the terminal output:

- Scan the QR code with Expo Go (Android) or the Camera app (iOS)
- Press `a` to open the Android emulator, or `i` to open the iOS Simulator
- Press `w` to open it in a web browser

### Lint and test

```bash
npx expo lint
```

<!-- TODO: add the test command once tests exist, e.g. `npm test` (Expo's Jest guide: https://docs.expo.dev/develop/unit-testing/) -->

## Repository layout

The project was created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and uses [Expo Router](https://docs.expo.dev/router/introduction), so each file in `src/app/` is a screen.

```
.github/      CI workflows
assets/       Images, icons, and fonts
docs/         Requirements, design, risks, and RFCs
src/app/      Screens (file-based routing)
app.json      Expo configuration
```

## Documentation

- [`docs/requirements.md`](docs/requirements.md): problem statement, requirements, constraints, open questions
- [`docs/design.md`](docs/design.md): system design and deployment target
- [`docs/risks.md`](docs/risks.md): risk register
- [`docs/rfcs/`](docs/rfcs/): design decisions
- [`CONTRIBUTING.md`](CONTRIBUTING.md): branching, pull requests, and review

<!-- TODO: remove any link above whose file doesn't exist yet when this merges -->

## Team

- Nat Rurka
- Annie Luse
- Lauren Bell

## License

See [`LICENSE`](LICENSE).
