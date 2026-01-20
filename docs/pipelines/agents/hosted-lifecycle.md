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

The following hosted agent images are scheduled for deprecation:

* [macOS 14 Sonoma hosted image deprecation schedule](?tabs=macos-images#macos-14-sonoma-hosted-image-deprecation-schedule)

For more information on the software lifecycle and deprecation schedule of images and software, see [GitHub Actions Runner Images - Software and Image Support](https://github.com/actions/runner-images/tree/main?tab=readme-ov-file#software-and-image-support).

#### [Windows images](#tab/windows-images/)

#### Windows image updates

* Windows 2019 hosted image was retired on December 31, 2025.
* [[Windows & Ubuntu] .NET 6 was removed from the images on August 1, 2025.](https://github.com/actions/runner-images/issues/12241)

#### [Linux images](#tab/linux-images/)

#### Linux images updates

* [[Windows & Ubuntu] .NET 6 was removed from the images on August 1, 2025.](https://github.com/actions/runner-images/issues/12241)
* [The Ubuntu 20.04 image is retired](https://devblogs.microsoft.com/devops/upcoming-updates-for-azure-pipelines-agents-images/#ubuntu).

#### [macOS images](#tab/macos-images/)

#### macOS 14 Sonoma hosted image deprecation schedule

The macOS 14 Sonoma hosted image deprecation affects Azure DevOps customers using the macOS 14 Sonoma agent image in their Microsoft-hosted pipelines. This deprecation does not impact customers using macOS 14 Sonoma agents in self-hosted agents.

The macOS 14 Sonoma image deprecation schedule:
* Deprecation start date: July 6, 2026.
* [Brownout schedule](#macos-brownout-schedule): October 5, 2026 to October 31, 2026.
* Scheduled removal date: November 2, 2026.

<a name="macos-brownout-schedule"></a>

##### Brownout schedule

To raise awareness of the upcoming removal, we will temporarily fail jobs using the macOS 14 Sonoma hosted image. Builds that are scheduled to run during the brownout periods will fail. The brownouts are scheduled for the following dates and times:

* October 5, 14:00 UTC - October 6, 00:00 UTC
* October 12, 14:00 UTC - October 13, 00:00 UTC
* October 16, 14:00 UTC - October 17, 00:00 UTC
* October 19, 14:00 UTC - October 20, 00:00 UTC
* October 23, 14:00 UTC - October 24, 00:00 UTC
* October 26, 14:00 UTC - October 27, 00:00 UTC
* October 29, 14:00 UTC - October 30, 00:00 UTC
* October 30, 14:00 UTC - October 31, 00:00 UTC

##### Recommended action

Workflows using the macOS 14 Sonoma hosted image should be updated to `macos-latest` or `macos-15` prior to the scheduled removal date to avoid disruptions.

To identify your pipelines that are using the macOS 14 Sonoma hosted image, follow the instructions in the [How to identify pipelines using a deprecated hosted image](#how-to-identify-pipelines-using-a-deprecated-hosted-image) section.

To update your affected YAML pipelines to a new image, see [](). To update your classic pipelines see []().

#### macOS images updates

* The macOS 15 Sequoia ARM64 Azure Pipelines hosted agent image is in preview.
* The macOS 13 Ventura image was deprecated starting September 1, 2025, and was retired on December 4, 2025. For more information, see [Upcoming Updates for Azure Pipelines Agents Images - macOS 13 Ventura](https://devblogs.microsoft.com/devops/upcoming-updates-for-azure-pipelines-agents-images/#mac-os).
* [[macOS] Starting August 11, 2025, if your workflow is running on a macOS 15 based image and depends on one of the platform versions (iOS/watchOS/tvOS/visionOS) lower than Xcode 16.3 compatible, they will be broken](https://github.com/actions/runner-images/issues/12541).
* [[macOS] Xcode 15.4 was removed from macOS15 images on May 29, 2025](https://github.com/actions/runner-images/issues/12195)

* * *

## How to identify pipelines using a deprecated hosted image

To identify pipelines that are using a deprecated image, browse to the following location in your organization: `https://dev.azure.com/{organization}/{project}/_settings/agentqueues`, and filter on the image name to check. The following example checks the `vs2017-win2016` image.

:::image type="content" source="media/pool-filter-vs2017-win2016.png" alt-text="Screenshot of filtering pipelines by image name.":::

You can also query job history for deprecated images across projects using the script located [here](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindPipelinesUsingRetiredImages), as shown in the following example.

```powershell
./QueryJobHistoryForRetiredImages.ps1 -accountUrl https://dev.azure.com/{org} -pat {pat}
```

## Update YAML pipelines to use a new image

To update your YAML pipelines to use a new image:

1. [Open your pipeline YAML file](../get-started/yaml-pipeline-editor.md#edit-a-yaml-pipeline).
2. Locate the `vmImage` property.
3. Change the value from to the new image. For example, to replace an older version of a Linux agent with the latest, change:

   ```yaml
   pool:
     vmImage: 'ubuntu-20.04'
   ```

   to:

   ```yaml
   pool:
     vmImage: 'ubuntu-latest'
   ```

4. Save and run your pipeline to validate the changes.

## Update classic pipelines to use a new image

To update classic pipelines:
- Navigate to the pipeline settings in the Azure DevOps portal.
- Locate the agent specification and update the **Agent Specification** to the newer version.
- Save and queue a new run to verify the update.

## Alternative methods to use a deprecated image

If you still need to use ImageX after its deprecation, consider the following alternatives:
- Use a container job to specify the ImageX container independently of the hosted image.
Example:

```yml
  jobs:
  - job: ubuntu20
    container: ubuntu:20.04
    displayName: Use Ubuntu 20.04 container image
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - script: printenv
```

## FAQ

Q: How to know if my Azure DevOps organization or pipelines are impacted?
A: Use the detection script or check the agent queues as described above.

Q: I am using ImageX in Self Hosted Agents. Is my pipeline impacted?
A: No, only Microsoft Hosted images are impacted.

Q: I am using ImageX in MDP. Is my pipeline impacted?
A: No, MDP usage is not impacted.

Q: I am using ImageX in classic pipeline. Is my pipeline impacted?
A: Yes, classic pipelines using ImageX are impacted.

Q: I am using ImageX container image. Is my pipeline impacted?
A: No, container images are not impacted by the hosted image deprecation.

