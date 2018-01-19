---
description: Service Fabric PowerShell Utility task
title: Service Fabric PowerShell build task VSTS and TFS 
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: EE9455CD-5E1A-42C8-AC6D-8CF44878F090
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
---

# Utility: Service Fabric PowerShell 
 
![icon](_img/azure-service-fabric.png) Run a PowerShell script within the context of an Azure Service Fabric cluster connection.

Runs any PowerShell command or script in a PowerShell session that has a Service Fabric cluster connection initialized.

## Prerequisites

### Service Fabric

* This task uses a Service Fabric installation to connect and 
deploy to a Service Fabric cluster.  

* [Azure Service Fabric Core SDK](http://www.microsoft.com/web/handlers/webpi.ashx?command=getinstallerredirect&appid=MicrosoftAzure-ServiceFabric-CoreSDK) on the build agent.

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Cluster Connection** | The Azure Service Fabric service endpoint to use to connect and authenticate to the cluster. |
| **Script Type** | Specify whether the script is provided as a file or inline in the task. |
| **Script Path** | Path to the PowerShell script to run. Can include wildcards and variables. Example: `$(system.defaultworkingdirectory)/**/drop/projectartifacts/**/docker-compose.yml`. **Note**: combining compose files is not supported as part of this task. |
| **Script Arguments** | Additional parameters to pass to the PowerShell script. Can be either ordinal or named parameters. |
| **Inline Script** | The PowerShell commands to run on the build agent. [More information](../utility/powershell.md) |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Also see: [Service Fabric Compose Deploy task](../deploy/service-fabric-compose-deploy.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
