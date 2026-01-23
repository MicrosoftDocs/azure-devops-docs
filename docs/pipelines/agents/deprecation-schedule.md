---
title: Microsoft-hosted image deprecations for Azure Pipelines
description: Learn about the lifecycle and deprecation schedule of Microsoft-hosted images provided in Azure Pipelines
ms.topic: concept-article
ms.date: 01/21/2026
monikerRange: '<=azure-devops'
---

# Microsoft-hosted image deprecation schedule

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

::: moniker range="< azure-devops"

Microsoft-hosted agents are only available with Azure DevOps Services, which is hosted in the cloud. You can't use Microsoft-hosted agents or the Azure Pipelines agent pool with on-premises Azure DevOps Server. With these on-premises versions, you must use [self-hosted agents](agents.md).

[!INCLUDE [include](../../includes/version-selector.md)]

::: moniker-end

::: moniker range="azure-devops"

The Azure Pipelines team supports (at maximum) 2 GA hosted images and 1 hosted beta image at a time. We begin the deprecation process of the oldest image label once the newest OS image label has been released to GA. This article provides the deprecation schedule for the oldest hosted images to allow time for planning and migration to the newer images.

For more information on the software lifecycle and deprecation schedule of images and software, see [GitHub Actions Runner Images - Software and Image Support](https://github.com/actions/runner-images/tree/main?tab=readme-ov-file#software-and-image-support).

## Deprecation schedules

The following hosted agent images are scheduled for deprecation:

* [macOS 14 Sonoma hosted image deprecation schedule](?tabs=macos-images#macos-14-sonoma-hosted-image-deprecation-schedule)

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

Pipelines using the macOS 14 Sonoma hosted image should be updated to `macos-latest` or `macos-15` prior to the scheduled removal date to avoid disruptions.

To identify your pipelines that are using the macOS 14 Sonoma hosted image, follow the instructions in the [How to identify pipelines using a deprecated hosted image](#how-to-identify-pipelines-using-a-deprecated-hosted-image) section.

To update your affected YAML pipelines to a new image, see [Update YAML pipelines to use a new image](#update-yaml-pipelines-to-use-a-new-image). To update your classic pipelines see [Update classic pipelines to use a new image](#update-classic-pipelines-to-use-a-new-image).

#### [Windows images](#tab/windows-images/)

No Windows hosted agent images are currently scheduled for deprecation.

#### [Linux images](#tab/linux-images/)

No Linux hosted agent images are currently scheduled for deprecation.

* * *

## How to identify pipelines using a deprecated hosted image

To identify pipelines that are using a deprecated image, browse to the following location in your organization: `https://dev.azure.com/{organization}/{project}/_settings/agentqueues`, and filter on the image name to check. The following example checks the `macos-13` image.

:::image type="content" source="media/pool-filter.png" alt-text="Screenshot of filtering pipelines by image name.":::

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

If you still need to use an image scheduled to be deprecated after its deprecation, consider the following alternatives:

- Use a container job to specify the container independently of the hosted image. In the following example, an Ubuntu 20.04 container that's hosted on the `ubuntu-latest` image is used to run the pipeline.

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

### How to know if my Azure DevOps organization or pipelines are impacted?

Use the detection script or check the agent queues as described in [How to identify pipelines using a deprecated hosted image](#how-to-identify-pipelines-using-a-deprecated-hosted-image).

### I am using an image scheduled to be deprecated in self-hosted agents. Is my pipeline impacted?

No, only Microsoft Hosted images are impacted.

### I am using an image scheduled to be deprecated in Managed DevOps Pools. Is my pipeline impacted?

Managed DevOps Pools does offer [Azure Pipelines images](../../managed-devops-pools/configure-images.md#azure-pipelines-images), but they are not directly impacted by the Microsoft-hosted image deprecations. Managed DevOps Pools images have their own lifecycle and deprecation schedule. For more information, see [Azure Pipelines images: Image lifecycle](../../managed-devops-pools/configure-images.md#image-lifecycle).

### I am using an image scheduled to be deprecated in classic pipeline. Is my pipeline impacted?

Yes, if your classic pipeline is using a Microsoft-hosted image that is scheduled for deprecation, it is impacted.

### I am using a container image with an image scheduled to be deprecated. Is my pipeline impacted?

No, container images are not impacted by the hosted image deprecation.

::: moniker-end