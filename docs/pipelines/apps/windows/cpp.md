---
title: Build C++ Windows apps
ms.custom: seodec18, devdivchpfy22
ms.date: 06/08/2022
description: Automatically build your C++ Windows app with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.assetid: 49886DF3-3689-48B3-8F1C-CA99DAFD1E49
ms.topic: quickstart
monikerRange: '<= azure-devops'
---

# Build C++ Windows apps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"
[!INCLUDE [temp](../../includes/concept-rename-note.md)]
::: moniker-end

This article explains how to build C++ projects on Windows automatically.

## Example

This example shows how to build a C++ project. To start, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/MicrosoftDocs/pipelines-cpp
```

::: moniker range="< azure-devops"

> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. You'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure DevOps organization. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.

::: moniker-end

* After you have the sample code in your own repository, create a pipeline using the instructions in [Create your first pipeline](../../create-first-pipeline.md) and select the **.NET Desktop** template. This automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

## Build multiple configurations

It's often required to build your app in multiple configurations. The following steps extend the example above to build the app on four configurations: [Debug, x86], [Debug, x64], [Release, x86], [Release, x64].

1. Select the **Variables** tab and modify these variables:

   * `BuildConfiguration` = `debug, release`

   * `BuildPlatform` = `x86, x64`

1. Select **Tasks** and click on the **agent job**. From the **Execution plan** section, select **Multi-configuration** to change the options for the job:

   * Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

   * Specify **Maximum number of agents**

1. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.

## Copy output

To copy the results of the build to Azure Pipelines select the [Copy Files task](/azure/devops/pipelines/tasks/reference/copy-files-v2). Specify the following arguments:

```
   contents: '**\$(BuildConfiguration)\**\?(*.exe|*.dll|*.pdb)' 
```
