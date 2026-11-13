# Design

## Overview
Plant/animal identification game and social app. Users can photograph plants/animals, get a species-level ID, share their findings with others and see others findings, earn cosmetics, and compete in challenges. React Native/Expo app with Firebase backend.

## Architecture
- Mobile app (React Native, Expo): iOS, Android, and web user interface and reusable UI components
- Backend (Firebase): auth and data storage
- API integrations: iNaturalist API for species identification
- Data model: relational, to be decided in more detail by the end of Sprint 2

## Interfaces
- iNaturalist REST API: species identification, need to further research what is publicly available by the iNat team

## Data
- User image data: reference to object id, user metadata, species classification 

## Deployment
Deployment details will be decided by the end of sprint 2

## Open questions
Are iNaturatalist models open to the public? Are there alternative open-source options on Hugging Face? 
Deployment details: best means of hosting application and service with current backend scope. 

## Deferred decisions
