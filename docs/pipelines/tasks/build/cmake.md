---
title: CMake build and release task
ms.custom: seodec18
description: CMake build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: A0C6CAF5-E953-4705-80C5-896267A910AF
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# CMake task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to build with the CMake cross-platform build system.

## Demands

cmake

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/CMakeV1.md)]
::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Working Directory</td>
<td>
<p>Working directory when CMake is run. The default value is `build`.</p>
<p>If you specify a relative path, then it is relative to your repo. For example, if you specify `build`, the result is the same as if you specified `$(Build.SourcesDirectory)\build`.</p>
<p>You can also specify a full path outside the repo, and you can use [variables](../../build/variables.md). For example: `$(Build.ArtifactStagingDirectory)\build`</p>
 <p>If the path you specify does not exist, CMake creates it.</p>
</td>
</tr>
<tr>
<td>cmakeArgs</td>
<td>
Arguments that you want to pass to CMake.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### How do I enable CMake for Microsoft-hosted agents?

The [Microsoft-hosted agents](../../agents/hosted.md) have CMake installed, but you must manually add the [capability](../../agents/agents.md#capabilities) to use the CMake build task.

<ol>
<li><p>Open the Agent Pools control panel tab:
[!INCLUDE [agent-pools-tab](../../agents/_shared/agent-pools-tab.md)]
</li>

<li>In the left column, click the name of the Microsoft-hosted pool that you are using. In the right column click **Capabilities**.</li>

<li>Click **Add capability** and set the fields to `cmake` and `yes`.</li>

<li>Click **Save changes**</li>
</ol>

### How do I enable CMake for my on-premises agent?

<ol>
<li>[Deploy an agent](../../agents/agents.md#install).</li>

<li>[Install CMake](https://cmake.org/install/) and make sure to add it to the path of the user that the agent is running as on your agent machine.</li>


<li><p>In your web browser, navigate to the **Agent pools** control panel tab:</p>

[!INCLUDE [agent-pools](../../agents/_shared/agent-pools-tab.md)]

</li>

<li>In the left column, click the name of your agent pool. In the right column click **Capabilities**. </li>

<li>Click **Add capability** and set the fields to `cmake` and `yes`.</li>

<li>Click **Save changes**</li>
</ol>


### How does CMake work? What arguments can I use?

[About CMake](https://cmake.org/overview/)

[CMake Documentation](https://cmake.org/documentation/)


[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
