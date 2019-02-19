---
title: Download GitHub Release task
description: Download assets from your GitHub release as part of your pipeline
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: gopinach
ms.author: ashkir
author: ashokirla
ms.date: 02/15/2019
monikerRange: 'azure-devops'
---

# Download GitHub Release task

[!INCLUDE [version-team-services](../../_shared/version-team-services.md)]

Use this task in your pipeline to download assets from your [GitHub release](https://help.github.com/categories/releases/) as part of your CI/CD pipeline.

## Prerequisites

### GitHub service connection
This task requires a [GitHub service connection](../../library/service-endpoints.md#sep-github) with **Read** permission to the GitHub repository. You can create a GitHub service connection in your Azure Pipelines project. Once created, use the name of the service connection in this task's settings.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/DownloadGitHubReleaseV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>GitHub Connection</td><td>(Required) Enter the service connection name for your GitHub connection. Learn more about service connections [here.](https://aka.ms/AA3am5s)</td></tr>
<tr><td>Repository</td><td>(Required) Select the name of GitHub repository in which GitHub releases will be created.</td></tr>
<tr><td>Default Release version type</td><td>(Required) The version of the GitHub Release from which the assets are downloaded. The version type can be 'Latest Release', 'Specific Version' or 'Specific Tag'.</td></tr>
<tr><td>Release</td><td>(Required) This options shows up if 'Specific Version' or 'Specific Tag' is selected as Default Release version type. Based on the version type selected, Release name or the Tag needs to be provided.</td></tr>
<tr><td>Item pattern</td><td>(Required) Minimatch pattern to filter files to be downloaded from the available release assets. To download all files within release use **.</td></tr>
<tr><td>Destination directory</td><td>(Required) Path on the agent machine where the release assets will be downloaded.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
