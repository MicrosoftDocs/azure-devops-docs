---
title: Build TFVC repositories
description: Using a TFVC repository with Azure Pipelines
ms.topic: reference
ms.assetid: d88333c9-e964-4f91-9532-5d014edb8277
ms.date: 08/18/2023
monikerRange: '<= azure-devops'
---

# Build TFVC repositories

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

> [!IMPORTANT]
> TFVC is supported by classic pipelines only, and does not support YAML.

::: moniker range="tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

## Choose the repository to build

While editing a pipeline that uses a TFVC repo, you have the following options.

* Clean
* Specify local path
* Label sources

### Repository name

Name of the TFVC repository.

### Mappings (workspace)

Include with a type value of **Map** only the folders that your build pipeline requires. If a subfolder of a mapped folder contains files that the build pipeline does not require, map it with a type value of **Cloak**.

Make sure that you **Map** all folders that contain files that your build pipeline requires. For example, if you add another project, you might have to add another mapping to the workspace.

**Cloak** folders you don't need. By default the root folder of project is mapped in the workspace. This configuration results in the build agent downloading all the files in the version control folder of your project. If this folder contains lots of data, your build could waste build system resources and slow down your build pipeline by downloading large amounts of data that it does not require.

When you remove projects, look for mappings that you can remove from the workspace.

If this is a CI build, in most cases you should make sure that these mappings match the filter settings of your CI trigger on the [Triggers tab](../build/triggers.md).

For more information on how to optimize a TFVC workspace, see [Optimize your workspace](../../repos/tfvc/optimize-your-workspace.md).

### Clean the local repo on the agent

[!INCLUDE [include](includes/build-clean-intro.md)]

::: moniker range="azure-devops"
> [!NOTE]
> Cleaning is not relevant if you are using a [Microsoft-hosted agent](../agents/hosted.md) because you get a new agent every time in that case.
::: moniker-end


If you want to clean the repo, then select **true**, and then select one of the following options:

* **Sources**: The build pipeline performs an undo of any changes and scorches the current workspace under `$(Build.SourcesDirectory)`.

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`.

## CI triggers

Select **Enable continuous integration** on the **Triggers** tab to enable this trigger if you want the build to run whenever someone checks in code.

:::image type="content" source="media/tfvc-ci-trigger.png" alt-text="CI trigger." :::

### Batch changes

Select this check box if you have many team members uploading changes often and you want to reduce the number of builds you are running. If you select this option, when a build is running, the system waits until the build is completed and then queues another build of all changes that have not yet been built.

> You can batch changes and build them together.

### Path filters

Select the version control paths you want to include and exclude. In most cases, you should make sure that these filters are consistent with your TFVC mappings. You can use path filters to reduce the set of files that you want to trigger a build.

> **Tips:**
>  * Paths are always specified relative to the root of the workspace.
>  * If you don't set path filters, then the root folder of the workspace is implicitly included by default.
>  * If you exclude a path, you cannot also include it unless you qualify it to a deeper folder. For example if you exclude _/tools_ then you could include _/tools/trigger-runs-on-these_
>  * The order of path filters doesn't matter.

<h2 id="gated">Gated check-in</h2>

You can use gated check-in to protect against breaking changes.

By default **Use workspace mappings for filters** is selected. Builds are triggered whenever a change is checked in under a path specified in your source mappings.

Otherwise, you can clear this check box and specify the paths in the trigger.

### How it affects your developers

When developers try to check-in, they are prompted to build their changes.

![Gated check-in prompt](media/tfvc-gated-check-in-prompt.png)

The system then creates a shelveset and builds it.

> [!NOTE]
> If you receive an error such as `The shelveset _Build_95;Build\6bc8a077-3f27-4936-82e6-415fbd53ba07 could not be found for check-in`, check the [Limit job authorization scope to current project for non-release pipelines](../process/access-tokens.md#job-authorization-scope) setting and ensure it is not enabled.

For details on the gated check-in experience, see [Check in to a folder that is controlled by a gated check-in build pipeline](../../repos/tfvc/check-folder-controlled-by-gated-check-build-process.md).

### Option to run CI builds

By default, CI builds are not run after the gated check-in process is complete and the changes are checked in.

However, if you **do** want CI builds to run after a gated check-in, select the **Run CI triggers for committed changes** check box. When you do this, the build pipeline does not add **&#42;&#42;&#42;NO_CI&#42;&#42;&#42;** to the changeset description. As a result, CI builds that are affected by the check-in are run.

### A few other things to know

* Make sure the folders you include in your trigger are also included in your workspace mappings.
* You can run gated builds on either a [Microsoft-hosted agent](../agents/hosted.md) or a [self-hosted agent](../agents/agents.md).

## FAQ  

<!-- BEGINSECTION class="md-qanda" -->

### I get the following error when running a pipeline: 

`The shelveset <xyz> could not be found for check-in`

- Is your [job authorization scope](../process/access-tokens.md#job-authorization-scope) set to **collection**? TFVC repositories are usually spread across the projects in your collection. You may be reading or writing to a folder that can only be accessed when the scope is the entire collection. You can set this in organization settings or in project setting under the **Pipelines** tab.

### I get the following error when running a pipeline:

`The underlying connection was closed: An unexpected error occurred on a receive.
##[error]Exit code 100 returned from process: file name 'tf', arguments 'vc workspace /new /location:local /permission:Public`

- This is usually an intermittent error caused when the service is experiencing technical issues. Please re-run the pipeline.

### What is scorch?

Scorch is a TFVC power tool that ensures source control on the server and the local disk are identical. See [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power).

<!-- ENDSECTION -->

