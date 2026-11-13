# Contributing Guide
How to set up, code, test, review, and release so contributions meet our Definition of Done.

## Code of Conduct
The aim of this project is to make a fun space for citizen scientists and hobbyists to share their exciting finds about the world around them. As such developing this project requires respect for others and a respect for the environment we plan to document.

## Getting Started
Requirements: 
- Node.js: ^22.x
- npm package manager
- Expo SDK ^58.0.x
- React Native ^0.88.x / React & React DOM ^19.3.0
- TypeScript ^6.0.x
- Expo Router ^58.0.x
- ESLint ^9.x (configured with eslint-config-expo)

After cloning: 
npm install 

To start development server: 
npx expo start 

From there, you can open the app in iOS, Android, or web. 

## Branching & Workflow
A description of the workflow (ie: (e.g., trunk-based or GitFlow), default branch, branch naming, and when to rebase vs. merge) will be included in this document after the first sprint. 

Main holds production code, sprints developed on specific branches 'sprint_X_dev', which are then merged to main when the sprint is complete. Any work done during that sprint can be branched from the dedicated sprint dev branch. 

## Issues & Planning
Issues are tracked on the associated GitHub Project board, where corresponding UAT/FR/NFR labels can be noted. 

## Commit Messages
We will be using Conventional Commits, where commit messages have the format: 
<type>: description, with an optional body for more detail. Issues being fixed or updated will be referenced by ID in the footer of the commit message. 

## Code Style, Linting & Formatting
Information on the formatter/linter, config file locations, and the exact commands to check/fix locally will be included in this document after Sprint 1. 

## Testing
Required test types, how to run tests, expected coverage thresholds, and when new/updated tests are mandatory will be added to this document after implemention. Current CI gate is a clean eslint run and manual review of the PR from another contributer. 

## Definition of Done
From the start of Sprint 1, any committed code must be documented through in-file comments and team notes. We will be implementing a test suite that commits must pass during later sprints, based on the prototype we build during our Sprints 1/2. 

Additions to the codebase must pass the CI gate (currently an eslint run, will be more strigent as codebase grows), and any PR must be reivewed by another contributer. 

## Contribution Norm
Each sprint, we will each determine a portion we will contribute individually, which will require 1 other teammate to review before submitting a pull request to main (or passing implemented gates as time goes on). We will be using GitHub Projects to organize work done by the team. 

## Pull Requests & Reviews
We will not be enforcing a PR template, however, before approval one other team member must review the proposed changes. 

## CI/CD
CI gate currently consists of an eslint run, however, in following sprints and as our codebase grows, we will be using a Cypress/Jest testing framework for unit, e2e, and integration testing. 

## Security & Secrets
Communicating security risks within the team can be done through our agreed communication channels, or through the GitHub Project associated with the repository. 

## Documentation Expectations
README must be updated with changes to features, and documenting technical details through inline comments is required. 

## Release Process
Information on the versioning scheme, tagging, changelog generation, packaging/publishing steps, and rollback process will be included in this document after our Fall release. 

## Support & Contact
Lauren Bell <bellla@oregonstate.edu>
Annie Loren Luse <lusean@oregonstate.edu>
Nat Rurka <rurkan@oregonstate.edu>
