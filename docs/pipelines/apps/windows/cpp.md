---
title: C++
titleSuffix: Azure Pipelines & TFS
description: Build your C++ app using Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 49886DF3-3689-48B3-8F1C-CA99DAFD1E49
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/27/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# C++

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

This guidance explains how to build C++ projects.

::: moniker range="tfs-2017"

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.

::: moniker-end

## Example

This example shows how to build a C++ project. To start, import (into Azure Repos or TFS) or fork (into GitHub) this repo:

```
https://github.com/adventworks/cpp-sample
```

::: moniker range="< vsts"
> [!NOTE]
> This scenario works on TFS, but some of the following instructions might not exactly match the version of TFS that you are using. Also, you'll need to set up a self-hosted agent, possibly also installing software. If you are a new user, you might have a better learning experience by trying this procedure out first using a free Azure DevOps organization. Then change the selector in the upper-left corner of this page from Team Foundation Server to **Azure DevOps**.
::: moniker-end

* After you have the sample code in your own repository, create a pipeline using the instructions in [Use the designer](../../get-started-designer.md) and select the **.NET Desktop** template. This automatically adds the tasks required to build the code in the sample repository.

* Save the pipeline and queue a build to see it in action.

## Build multiple configurations

It is often required to build your app in multiple configurations. The following steps extend the example above to build the app on four configurations: [Debug, x86], [Debug, x64], [Release, x86], [Release, x64].

1. Click the **Variables** tab and modify these variables:

 * `BuildConfiguration` = `debug, release`

 * `BuildPlatform` = `x86, x64`

1. Select **Tasks** and click on the **agent job** to change the options for the job:

 * Select **Multi-configuration**.

 * Specify **Multipliers:** `BuildConfiguration, BuildPlatform`

1. Select **Parallel** if you have multiple build agents and want to build your configuration/platform pairings in parallel.

## Copy output

To copy the results of the build to Azure Pipelines or TFS, perform these steps:

1. Click the **Copy Files** task. Specify the following arguments:

 * **Contents:** `**\$(BuildConfiguration)\**\?(*.exe|*.dll|*.pdb)`

