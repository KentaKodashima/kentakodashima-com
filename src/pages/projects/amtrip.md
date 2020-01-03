---
templateKey: project-detail
title: Amtrip
priority: 3
categoryType: Mobile
thumbnail: /assets/amtrip-thumbnail.png
thumbnailSubtitle: Swift / Realm
mainImages:
  - /assets/top_multi_thumbs.png
  - /assets/creation_page.jpg
  - /assets/creation_google_places_api.png
appLinks:
  - appLink:
      linkType: GitHub
      url: 'https://github.com/KentaKodashima/Amtrip'
about: >-
  Amtrip is a traveler's journal app. Using this app, users can easily make
  records of their trips.


  The app adopts MVC architecture and Realm is used as the database. Although
  Realm is very fast and easy to structure models, it has the the memory limit
  of 16MB. Therefore, the app copies the images and store them into the app
  sandbox when the user uploads images. I store only the paths to the images in
  the database to save memory space.
technologies:
  - Swift
  - Realm
  - Google Places Autocomplete API
---

