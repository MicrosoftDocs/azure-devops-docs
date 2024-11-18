---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/8/2022
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

### Announcing deprecation of Ubuntu 18.04 images (updated)

Azure Pipelines is deprecating the Ubuntu 18.04 image (`ubuntu-18.04`) on our hosted pools. This image will be retired December 1st. You may start to see longer queue times.

There are several ways you can identify which pipelines are using the ubuntu-18.04 image, including:

* Starting soon, warning messages will be displayed in pipeline runs using the ubuntu-18.04 image.
* This [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindPipelinesUsingRetiredImages) can be run to help you find pipelines using deprecated images, including ubuntu-18.04.
* We are scheduling short "brownouts". Any ubuntu-18.04 runs will fail during the brownout period. Therefore, it is recommended to migrate your pipelines prior to the brownouts.

#### Brownout schedule (updated)
* October 3, 12:00 UTC - October 3, 14:00 UTC
* October 18, 14:00 UTC - October 18, 16:00 UTC
* November 15, 18:00 UTC - November 15, 20:00 UTC
* November 30, 20:00 UTC - November 30, 22:00 UTC
* December 15, 20:00 UTC - December 16 00:00 UTC
* January 5, 10.00 UTC - January 5, 14.00 UTC
* January 13, 12.00 UTC - January 13, 16.00 UTC
* January 18, 14.00 UTC - January 18, 18.00 UTC
* January 24, 16.00 UTC - January 24, 20.00 UTC
* February 1, 18.00 UTC - February 1, 22.00 UTC
* February 7, 16.00 UTC - February 7, 22.00 UTC
* February 13, 14.00 UTC - February 13, 22.00 UTC
* February 21, 10.00 UTC - February 21, 22.00 UTC
* February 28, 10.00 UTC - February 28, 22.00 UTC
* March 6, 00.00 UTC - March 7, 00.00 UTC
* March 13, 00.00 UTC - March 14, 00.00 UTC
* March 21, 00.00 UTC - March 22, 00.00 UTC