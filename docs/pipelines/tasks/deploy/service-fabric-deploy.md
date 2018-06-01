---
description: Service Fabric Application Deployment task
title: Service Fabric Application Deployment task for use in the phases of all of your build and release definitions in Microsoft VSTS and TFS 
ms.assetid: 82493BC9-241C-491F-9B42-075FD0E33b52
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: '>= tfs-2017'
---

# Deploy: Service Fabric Application Deployment

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/azure-service-fabric.png) Deploy a Service Fabric application to a cluster.

This task deploys an Azure Service Fabric application to a cluster 
according to the settings defined in the publish profile.

## Prerequisites

### Service Fabric
This task uses a Service Fabric installation to connect and 
deploy to a Service Fabric cluster.  
[Download and install Service Fabric](https://aka.ms/servicefabric) on the build agent.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/ServiceFabricDeploy.1.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Publish Profile** | The location of the publish profile that specifies the settings to use for deployment, including the location of the target Service Fabric cluster. Can include wildcards and variables. Example:<br />`$(system.defaultworkingdirectory)/**/drop/projectartifacts/**/PublishProfiles/Cloud.xml` |
| **Application Package** | The location of the Service Fabric application package to be deployed to the cluster. Can include wildcards and variables. Example: `$(system.defaultworkingdirectory)/**/drop/applicationpackage` |
| **Cluster Connection** | The name of the Azure Service Fabric service endpoint defined in the TS/TFS project that describes the connection to the cluster. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see: [Update Service Fabric App Versions task](../utility/service-fabric-versioning.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
