---
description: Service Fabric Application Deployment task
title: Service Fabric Application Deployment build and release task for VSTS TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 82493BC9-241C-491F-9B42-075FD0E33b52
ms.manager: douge
ms.author: ahomer
ms.date: 01/19/2018
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

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Publish Profile** | The location of the publish profile that specifies the settings to use for deployment, including the location of the target Service Fabric cluster. Can include wildcards and variables. Example:<br />`$(system.defaultworkingdirectory)/**/drop/projectartifacts/**/PublishProfiles/Cloud.xml` |
| **Application Package** | The location of the Service Fabric application package to be deployed to the cluster. Can include wildcards and variables. Example: `$(system.defaultworkingdirectory)/**/drop/applicationpackage` |
| **Cluster Connection** | The name of the Azure Service Fabric service endpoint defined in the TS/TFS project that describes the connection to the cluster. |
| **Control options** | See [Control options](../../concepts/process/tasks.md#controloptions) |

Also see: [Update Service Fabric App Versions task](../utility/service-fabric-versioning.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

[!INCLUDE [qa-versions](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
