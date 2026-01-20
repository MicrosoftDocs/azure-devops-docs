---
title: Microsoft-hosted agent lifecycle for Azure Pipelines
description: Learn about the lifecycle of Microsoft-hosted agents provided in Azure Pipelines
ms.topic: concept-article
ms.date: 01/20/2026
monikerRange: 'azure-devops'
---

# Microsoft-hosted agent lifecycle

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

The Azure Pipelines team supports (at maximum) 2 GA hosted images and 1 hosted beta image at a time. We begin the deprecation process of the oldest image label once the newest OS image label has been released to GA. This article provides the deprecation schedule for the oldest hosted images to allow time for planning and migration to the newer images.

For more information on the software lifecycle and deprecation schedule of images and software, see [GitHub Actions Runner Images - Software and Image Support](https://github.com/actions/runner-images/tree/main?tab=readme-ov-file#software-and-image-support).

#### [Windows images](#tab/windows-images/)

#### Windows Server 2019 hosted image deprecation schedule

The Windows Server 2019 image deprecation schedule:
* Deprecation start date: June 1, 2025
* Brownout period: June 3, 2025 to June 24, 2025
* Scheduled removal date for Windows Server 2019 hosted image: December 31, 2025

For more information, see [Upcoming Updates for Azure Pipelines Agents Images - Windows](https://aka.ms/azdo-windows)

#### Windows image updates

* [[Windows & Ubuntu] .NET 6 was removed from the images on August 1, 2025.](https://github.com/actions/runner-images/issues/12241)

#### [Linux images](#tab/linux-images/)

#### Ubuntu 22.04 hosted image deprecation schedule

The Ubuntu 22.04 hosted image deprecation affects Azure DevOps customers using the Ubuntu 22.04 agent image in their Microsoft-hosted pipelines. This deprecation does not impact customers using Ubtuntu 22.04 agents in self-hosted agents, including scale set agents or Managed DevOps Pools.

The Ubuntu 22.04 image deprecation schedule:
* Deprecation start date: TBD
* Brownout period: TBD
  * TBD date: 21:00 - 5:00 UTC
  * TBD data: 5:00 - 13:00 UTC
* Scheduled removal date: TBD

Starting from TBD, organizations using the Ubuntu 22.04 image will begin to see a banner indicating the upcoming deprecation. To raise awareness about the upcoming deprecation we will temporarily fail jobs (brownout) using Ubuntu 22.04 from TBD to TBD. From TBD, the Ubuntu 22.04 image will be fully removed from our hosted agents, and any pipelines still using this image will fail to run.

###### Recommended action

To avoid disruptions, we recommend updating your pipelines to use the Ubuntu 24.04 image. The updated Ubuntu images offer improved performance, security, and support for the latest tools and libraries.

To indentify your pipelines that are using the Ubuntu 22.04 image, follow the instructions in the [How to identify pipelines using a deprecated hosted image](#how-to-identify-pipelines-using-a-deprecated-hosted-image) section.

#### Linux images updates

* [[Windows & Ubuntu] .NET 6 was removed from the images on August 1, 2025.](https://github.com/actions/runner-images/issues/12241)
* [The Ubuntu 20.04 image is retired](https://devblogs.microsoft.com/devops/upcoming-updates-for-azure-pipelines-agents-images/#ubuntu).

#### [macOS images](#tab/macos-images/)

#### macOS 14 Sonoma hosted image deprecation schedule

The macOS 14 Sonoma hosted image deprecation affects Azure DevOps customers using the macOS 14 Sonoma agent image in their Microsoft-hosted pipelines. This deprecation does not impact customers using macOS 14 Sonoma agents in self-hosted agents.

The macOS 14 Sonoma image deprecation schedule:
* Deprecation start date: July 6, 2026.
* Scheduled removal date: November 2, 2026.

To raise awareness of the upcoming removal, we will temporarily fail jobs using the macOS 14 Sonoma hosted image. Builds that are scheduled to run during the brownout periods will fail. The brownouts are scheduled for the following dates and times:

* October 5, 14:00 UTC - October 6, 00:00 UTC
* October 12, 14:00 UTC - October 13, 00:00 UTC
* October 16, 14:00 UTC - October 17, 00:00 UTC
* October 19, 14:00 UTC - October 20, 00:00 UTC
* October 23, 14:00 UTC - October 24, 00:00 UTC
* October 26, 14:00 UTC - October 27, 00:00 UTC
* October 29, 14:00 UTC - October 30, 00:00 UTC
* October 30, 14:00 UTC - October 31, 00:00 UTC

Workflows using the macOS 14 Sonoma hosted image should be updated to `macos-latest` or `macos-15` prior to the scheduled removal date to avoid disruptions.

To identify your pipelines that are using the macOS 14 Sonoma hosted image, follow the instructions in the [How to identify pipelines using a deprecated hosted image](#how-to-identify-pipelines-using-a-deprecated-hosted-image) section.

To update your affected YAML pipelines to a new image, see [](). To update your classic pipelines see []().

#### macOS images updates

* The macOS 15 Sequoia ARM64 Azure Pipelines hosted agent image is in preview.
* The macOS 13 Ventura image was deprecated starting September 1, 2025, and was retired on December 4, 2025. For more information, see [Upcoming Updates for Azure Pipelines Agents Images - macOS 13 Ventura](https://devblogs.microsoft.com/devops/upcoming-updates-for-azure-pipelines-agents-images/#mac-os).
* [[macOS] Starting August 11, 2025, if your workflow is running on a macOS 15 based image and depends on one of the platform versions (iOS/watchOS/tvOS/visionOS) lower than Xcode 16.3 compatible, they will be broken](https://github.com/actions/runner-images/issues/12541).
* [[macOS] Xcode 15.4 was removed from macOS15 images on May 29, 2025](https://github.com/actions/runner-images/issues/12195)

* * *

### How to identify pipelines using a deprecated hosted image

To identify pipelines that are using a deprecated image, browse to the following location in your organization: `https://dev.azure.com/{organization}/{project}/_settings/agentqueues`, and filter on the image name to check. The following example checks the `vs2017-win2016` image.

:::image type="content" source="media/pool-filter-vs2017-win2016.png" alt-text="Screenshot of filtering pipelines by image name.":::

You can also query job history for deprecated images across projects using the script located [here](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindPipelinesUsingRetiredImages), as shown in the following example.

```powershell
./QueryJobHistoryForRetiredImages.ps1 -accountUrl https://dev.azure.com/{org} -pat {pat}
```



