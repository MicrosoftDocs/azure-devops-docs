---
title: CMake build and release task
description: CMake build and release task for Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: A0C6CAF5-E953-4705-80C5-896267A910AF
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Build: CMake

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/cmake.png) Build with the CMake cross-platform build system

## Demands

cmake

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
<p>You can also specify a full path outside the repo, and you can use [variables](../../concepts/definitions/build/variables.md). For example: `$(Build.ArtifactStagingDirectory)\build`</p>
 <p>If the path you specify does not exist, CMAke creates it.</p>
</td>
</tr>
<tr>
<td>Arguments</td>
<td>
Arguments that you want to pass to CMake.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

### How do I enable CMake for hosted agents?

The [hosted agents](../../concepts/agents/hosted.md) have CMake installed, but you must manually add the [capability](../../concepts/agents/agents.md#capabilities) to use the CMake build step.

<ol>
<li><p>Open the Agent Pools control panel tab:
[!INCLUDE [agent-pools-tab](../../concepts/agents/_shared/agent-pools-tab.md)]
</li>

<li>In the left column, click the name of the hosted pool that you are using. In the right column click **Capabilities**.</li>

<li>Click **Add capability** and set the fields to `cmake` and `yes`.</li>

<li>Click **Save changes**</li>
</ol>

### How do I enable CMake for my on-premises agent?

<ol>
<li>[Deploy an agent](../../concepts/agents/agents.md#install).</li>

<li>[Install CMake](https://cmake.org/install/) and make sure to add it to the path of the user that the agent is running as on your agent machine.</li>


<li><p>In your web browser, navigate to the **Agent pools** control panel tab:</p>

[!INCLUDE [agent-pools](../../concepts/agents/_shared/agent-pools-tab.md)]

</li>

<li>In the left column, click the name of your agent pool. In the right column click **Capabilities**. </li>

<li>Click **Add capability** and set the fields to `cmake` and `yes`.</li>

<li>Click **Save changes**</li>
</ol>


### How does CMake work? What arguments can I use?

[About CMake](https://cmake.org/overview/)

[CMake Documentation](https://cmake.org/documentation/)


[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
