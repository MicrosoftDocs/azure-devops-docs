---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 8/12/2022
ms.topic: include
---

### Improved error message when failing to load pipelines

Azure Pipelines provides several types of triggers to configure how your pipeline starts. One way to run a pipeline is by using scheduled triggers. Sometimes, the Scheduled Run information of a pipeline gets corrupted and can cause a load to fail. Previously, we were displaying a misleading error message, claiming that the pipeline was not found. With this update, we resolved this issue and are returning an informative error message. Going forward you will received the message similar to: *Build schedule data is corrupted* if a pipeline fails to load.  

### General availability of Ubuntu 22.04 for Azure Pipelines hosted pools

The Ubuntu 22.04 image is now generally available for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'ubuntu-22.04'`:  

```yaml
- job: ubuntu2204
  pool:
    vmImage: 'ubuntu-22.04'
  steps:
  - bash: |
      echo Hello from Ubuntu 22.04
      lsb_release -d
```

Please note, the ubuntu-latest image label will continue to point to ubuntu-20.04.

### Announcing deprecation of Ubuntu 18.04 images

Azure Pipelines is deprecating the Ubuntu 18.04 image (`ubuntu-18.04`) on our hosted pools. This image will be retired December 1st. You may start to see longer queue times.

There are several ways you can identify which pipelines are using the ubuntu-18.04 image, including:

* Starting soon, warning messages will be displayed in pipeline runs using the ubuntu-18.04 image.
* This [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindPipelinesUsingRetiredImages) can be run to help you find pipelines using deprecated images, including ubuntu-18.04.
* We are scheduling short "brownouts". Any ubuntu-18.04 runs will fail during the brownout period. Therefore, it is recommended to migrate your pipelines prior to the brownouts.

#### Brownout schedule
* August 22, 12:00 UTC - August 22, 16:00 UTC
* August 30, 12:00 UTC - August 30, 18:00 UTC
* September 7, 12:00 UTC - September 7, 20:00 UTC
* September 15, 10:00 UTC - September 15, 20:00 UTC
* September 23, 10:00 UTC - September 23, 22:00 UTC
* October 3, 0:00 UTC - October 4, 0:00 UTC
* October 11, 0:00 UTC - October 12, 0:00 UTC
* October 19, 0:00 UTC - October 20, 0:00 UTC
* October 31, 0:00 UTC - November 1, 0:00 UTC
* November 8, 0:00 UTC - November 9, 0:00 UTC
* November 16, 0:00 UTC - November 17, 0:00 UTC
* November 24, 0:00 UTC - November 25, 0:00 UTC
