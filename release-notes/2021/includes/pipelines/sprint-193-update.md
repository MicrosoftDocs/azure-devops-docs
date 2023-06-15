---
author: gloridelmorales
ms.author: glmorale
ms.date: 09/28/2021
ms.topic: include
---

### macOS-latest label will soon point to macOS-11 image

`macOS-11` is ready to be the default version for the `macos-latest` label in Microsoft-hosted agents. Until now, this label pointed to `macOS-10.15` agents. This change will be rolled out over a period of several weeks beginning on September 15. We plan to complete the migration by November 3.

Azure Pipelines has supported macOS-11 for several months now. During this period, we have monitored customer feedback to improve the macOS-11 image stability and now we are ready to set it as the latest.

The macOS-11 image has a different set of software than macOS-10.15. If you use macos-latest label in your Pipelines and if your application is not written with these differences in mind, then you may experience pipeline failures. For a full list of differences between macOS-10.15 and macOS-11, visit the [GitHub issue](https://github.com/actions/virtual-environments/issues/4060) tracking this rollout. If you experience failures, change your pipeline to explicitly use macos-10.15 instead of macos-latest so that you can get more time to address your failures.

### Updated schedule for removal of Ubuntu 16.04 image on Microsoft-hosted agents

In the [last release notes](/azure/devops/release-notes/2021/sprint-192-update#removal-of-ubuntu-1604-image-on-microsoft-hosted-agents), we communicated a schedule for the brownout of pipelines using Ubuntu 16.04 image and the eventual removal of this image. According to that schedule, we ran a first brownout on September 7th. Since `ubuntu-latest` image label in Azure Pipelines still pointed to `ubuntu-16.04`, the brownout unfortunately affected customers that did not explicitly set a pool in their pipeline or those that used ubuntu-latest. As a result, we had to halt that brownout. We have been working on addressing this issue since then.

The second brownout is now scheduled for October 11, 2021 4:00pm UTC – 10:00pm UTC. The removal of the image is planned for October 18th. Please note the updated schedule.