---
title: Service Fabric Application Deployment task 
description: Service Fabric Application Deployment task
ms.assetid: 82493BC9-241C-491F-9B42-075FD0E33b52
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Service Fabric Application Deployment task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to deploy a Service Fabric application to a cluster.
This task deploys an Azure Service Fabric application to a cluster 
according to the settings defined in the publish profile.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## Prerequisites

### Service Fabric
This task uses a Service Fabric installation to connect and 
deploy to a Service Fabric cluster.  
[Download and install Service Fabric](https://aka.ms/servicefabric) on the build agent.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ServiceFabricDeployV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Publish Profile** | The location of the publish profile that specifies the settings to use for deployment, including the location of the target Service Fabric cluster. Can include wildcards and variables. Example:<br />`$(system.defaultworkingdirectory)/**/drop/projectartifacts/**/PublishProfiles/Cloud.xml` |
| **Application Package** | The location of the Service Fabric application package to be deployed to the cluster. Can include wildcards and variables. Example: `$(system.defaultworkingdirectory)/**/drop/applicationpackage` |
| **Cluster Connection** | The name of the Azure Service Fabric service connection defined in the TS/TFS project that describes the connection to the cluster. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see: [Update Service Fabric App Versions task](../utility/service-fabric-versioning.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
