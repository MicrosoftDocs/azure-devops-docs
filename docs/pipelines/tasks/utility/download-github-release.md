---
title: Download GitHub Release task
description: Download assets from your GitHub release as part of your pipeline
ms.topic: reference
ms.manager: gopinach
ms.author: ashkir
author: ashokirla
ms.date: 02/03/2020
monikerRange: 'azure-devops'
---

# Download GitHub Release task

[!INCLUDE [version-team-services](../../includes/version-team-services.md)]

Use this task in your pipeline to download assets from your [GitHub release](https://help.github.com/categories/releases/) as part of your CI/CD pipeline.

## Prerequisites

### GitHub service connection
This task requires a [GitHub service connection](../../library/service-endpoints.md#sep-github) with **Read** permission to the GitHub repository. You can create a GitHub service connection in your Azure Pipelines project. Once created, use the name of the service connection in this task's settings.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DownloadGitHubReleaseV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`connection` <br/>GitHub Connection|(Required) Enter the service connection name for your GitHub connection. Learn more about service connections [here](../../library/service-endpoints.md).|
|`userRepository` <br/>Repository|(Required) Select the name of GitHub repository in which GitHub releases will be downloaded from.|
|`defaultVersionType` <br/>Default version|(Required) The version of the GitHub Release from which the assets are downloaded. The version type can be 'Latest Release', 'Specific Version' or 'Specific Tag'<br/>Default value: `latest`|
|`version` <br/> Release|(Required) This option shows up if 'Specific Version' or 'Specific Tag' is selected as Default Release version type. Based on the version type selected, Release name or the Tag needs to be provided.|
|`itemPattern` <br/> Item pattern|(Optional) Minimatch pattern to filter files to be downloaded from the available release assets. To download all files within release use \*\*.|
|`downloadPath` <br/>Destination directory|(Required) Path on the agent machine where the release assets will be downloaded. <br/>Default value: `$(System.ArtifactsDirectory)`|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
