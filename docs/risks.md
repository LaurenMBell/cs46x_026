# Risks

Objective: risks associated with a social app with image uploading from users.
Rank: likelihood/impact (H/M/L) and why.

R-1 technical, H/H:
  Species identification: iNat's public API to their image model
  may not be available to the public, and 
  if so we will have to identify an alternative option through Hugging Face or 
  another model provider. Hosting and deploying our own model isn't feasible, so 
  finding an alternative if iNatuaralist isn't an option is critical since FR-1 depends on it.  
  Owner: Lauren Bell.
  Mitigate: try iNat API, and if it fails identify an alterative and test it.   
R-2 safety, M/H: 
  Users can upload inappropriate images by the nature of an image upload app, we 
  need to research how the iNaturalist team and other photo-sharing apps mitigate this risk
  and adopt their approach. 
  Owner: Nat Rurka.
  Mitigate: report button for photos, and implementation of an illicit image screen using 
  a small open-source model or library. 
R-3 privacy, H/H: 
  Location sharing is inherently a little unsafe and could be used to idetnify user locations 
  or locations of rare animals and put them at risk, therefore we need to obscure exact location slightly or have a level of generality above exact coords. 
  Owner: Annie Luse. 
  Mitigate: show higher-level locations by default, and hide
  or blur locations for rare species and private profiles.