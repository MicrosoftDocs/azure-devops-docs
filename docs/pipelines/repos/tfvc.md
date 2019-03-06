---
title: Build TFVC repositories
description: Using a TFVC repository with Azure Pipelines
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: d88333c9-e964-4f91-9532-5d014edb8277
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.custom: seodec18
ms.date: 03/06/2019
monikerRange: '>= tfs-2015'
---

# Build TFVC repositories

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

## TFVC options

While editing a pipeline that uses a TFVC repo, you have the following options.

| Feature | Azure Pipelines, TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|---------|-------------------------------------------------|--------------|
| Clean              |Yes|Yes|
| Specify local path |Yes|No|
| Label sources      |Yes|No|

> [!NOTE]
> **Azure Pipelines, TFS 2017.2 and newer:** Click **Advanced settings** to see some of the following options.

### Repository name

Ignore this text box (**TFS 2017 RTM** or older).

### Mappings (workspace)

Include with a type value of **Map** only the folders that your build pipeline requires. If a subfolder of a mapped folder contains files that the build pipeline does not require, map it with a type value of **Cloak**.

Make sure that you **Map** all folders that contain files that your build pipeline requires. For example, if you add another project, you might have to add another mapping to the workspace.

**Cloak** folders you don't need. By default the root folder of project is mapped in the workspace. This configuration results in the build agent downloading all the files in the version control folder of your project. If this folder contains lots of data, your build could waste build system resources and slow down your build pipeline by downloading large amounts of data that it does not require.

When you remove projects, look for mappings that you can remove from the workspace.

If this is a CI build, in most cases you should make sure that these mappings match the filter settings of your CI trigger on the [Triggers tab](../build/triggers.md).

For more information on how to optimize a TFVC workspace, see [Optimize your workspace](../../repos/tfvc/optimize-your-workspace.md).

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

::: moniker range="azure-devops"
> [!NOTE]
> Cleaning is not relevant if you are using a [Microsoft-hosted agent](../agents/hosted.md) because you get a new agent every time in that case.
::: moniker-end

::: moniker range=">= tfs-2017"

#### Azure Pipelines, TFS 2018, TFS 2017.2

If you want to clean the repo, then select **true**, and then select one of the following options:

* **Sources**: The build pipeline performs an undo of any changes and scorches the current workspace under `$(Build.SourcesDirectory)`.

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

#### TFS 2017 RTM, TFS 2015.4

If you select **True** then the build pipeline performs an undo of any changes and scorches the workspace.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range="tfs-2015"

#### TFS 2015 RTM

[//]: # (TODO: confirm this is correct for TFVC; clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [include](_shared/label-sources.md)]

The build pipeline labels your sources with a [TFVC label](../../repos/tfvc/use-labels-take-snapshot-your-files.md).

::: moniker-end

::: moniker range=">= tfs-2015"
## Q & A  

<!-- BEGINSECTION class="md-qanda" -->

### What is scorch?

Scorch is a TFVC power tool that ensures source control on the server and the local disk are identical. See [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power).

<!-- ENDSECTION -->
::: moniker-end
