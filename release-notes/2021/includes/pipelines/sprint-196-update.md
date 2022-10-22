---
author: gloridelmorales
ms.author: glmorale
ms.date: 12/6/2021
ms.topic: include
---

### Announcing retirement of macOS 10.14 Mojave images

Azure Pipelines is removing macOS 10.14 Mojave images (`macOS-1014`) from our hosted pools on December 10th. To learn more on how to identify pipelines using deprecated images including macOS-10.14, check out our blog post [Hosted Pipelines Image Deprecation](https://devblogs.microsoft.com/devops/hosted-pipelines-image-deprecation/).

### Brownout schedule for Windows 2016 hosted images

Windows 2016 `vs2017-win2016` images are [deprecated](/azure/devops/release-notes/2021/pipelines/sprint-194-update#announcing-a-deprecation-schedule-for-windows-2016-hosted-images) since November 15. The complete retirement of this image is planned for March 2022. This is an image used by many, and to help you better identify which pipelines are using the `vs2017-win2016` image, we are doing the following:

- Warning messages are displayed on pipeline runs using the `vs2017-win2016` image
- A [script](https://devblogs.microsoft.com/devops/hosted-pipelines-image-deprecation/#finding-impacted-pipelines) is available to help you find pipelines using deprecated images, including `vs2017-win2016`
- We are scheduling short "brownouts". Any `vs2017-win2016` runs will fail during the brownout period. Therefore, it is recommended to migrate your pipelines prior to the brownouts.

#### Brownout schedule
  * December, 15 3:00 PM - 4:30 PM UTC.   
  * January, 11 3:00 PM - 4:00 PM UTC.   
  * January, 21 3:00 PM - 5:00 PM UTC.   
  * February, 2 2:00 PM - 6:00 PM UTC.   
  * February, 14 2:00 PM - 8:00 PM UTC.   
  * February, 24 2:00 PM - 8:00 PM UTC.   
  * March, 9 2:00 PM - 8:00 PM UTC.