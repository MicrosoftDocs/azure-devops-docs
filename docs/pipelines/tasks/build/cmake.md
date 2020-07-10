---
title: CMake build and release task
ms.custom: seodec18
description: CMake build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: A0C6CAF5-E953-4705-80C5-896267A910AF
ms.author: whjenkin
author: wnjenkin
ms.date: 12/17/2019
monikerRange: '>= tfs-2015'
---


# CMake task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to build with the CMake cross-platform build system.

## Demands

cmake

> [!IMPORTANT]
> The [Microsoft-hosted agents](../../agents/hosted.md) have CMake installed by default so you don't 
> need to include a demand for CMake in your `azure-pipelines.yml` file. If you do include a demand
> for CMake you may receive an error. To resolve, remove the demand.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CMakeV1.md)]

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
      <td><code>cwd</code><br/>Working Directory</td>
      <td>
         <p>(Optional) Working directory when CMake is run. The default value is <code>build</code>.</p>
         <p>If you specify a relative path, then it is relative to your repo. For example, if you specify <code>build</code>, the result is the same as if you specified <code>$(Build.SourcesDirectory)\build</code>.</p>
         <p>You can also specify a full path outside the repo, and you can use <a href="../../build/variables.md" data-raw-source="[variables](../../build/variables.md)">variables</a>. For example: <code>$(Build.ArtifactStagingDirectory)\build</code></p>
         <p>If the path you specify does not exist, CMake creates it.</p><br/>Default value: build<br/>Argument aliases: <code>workingDirectory</code>
      </td>
   </tr>
   <tr>
      <td><code>cmakeArgs</code><br/>Arguments</td>
      <td>
         (Optional) Arguments that you want to pass to CMake.
      </td>
   </tr>
   <tr>
      <th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
   </tr>
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

### How do I enable CMake for Microsoft-hosted agents?

The [Microsoft-hosted agents](../../agents/hosted.md) have CMake installed already so you don't need to do anything. You do not need to add a demand for CMake in your `azure-pipelines.yml` file.


### How do I enable CMake for my on-premises agent?

1. [Deploy an agent](../../agents/agents.md#install).

1. [Install CMake](https://cmake.org/install/) and make sure to add it to the path of the user that the agent is running as on your agent machine.

1. In your web browser, navigate to Agent pools:

   [!INCLUDE [agent-pools-tab](../../agents/includes/agent-pools-tab.md)]

1. Navigate to the capabilities tab:
 
   [!INCLUDE [agent-capabilities](../../agents/includes/agent-capabilities-tab.md)]

1. Click **Add capability** and set the fields to `cmake` and `yes`.

1. Click **Save changes**.


### How does CMake work? What arguments can I use?

[About CMake](https://cmake.org/overview/)

[CMake Documentation](https://cmake.org/documentation/)


[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
