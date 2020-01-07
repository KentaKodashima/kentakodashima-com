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
  - appLink:
      linkType: iOS
      url: 'https://apps.apple.com/us/app/id1416443046'
about: >-
  Amtrip is a traveler's journal app. Using this app, users can easily make
  records of their trips.


  The app adopts MVC architecture and Realm is used as the database. Although
  Realm is very fast and easy to structure models, it has the the memory limit
  of 16MB. In order to save memory space, the app copies the uploaded images
  into the app sandbox, and only the paths to the copied images are stored into
  the database.
technologies:
  - Swift
  - Realm
  - Google Places Autocomplete API
---

