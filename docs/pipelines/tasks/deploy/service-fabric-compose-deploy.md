---
description: Service Fabric Compose Deploy Deployment task
title: Service Fabric Compose Deploy task for use in the phases of all of your build and release definitions in Microsoft VSTS and TFS
ms.assetid: 891A8845-6EC1-4A70-B187-BBF9416AB41F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# Deploy: Service Fabric Compose Deploy

**VSTS**

![icon](_img/azure-service-fabric.png) Deploy a Docker-compose application to a Service Fabric cluster.

This task deploys an Azure Service Fabric application to a cluster according to the settings defined in the compose file.

## Prerequisites

NOTE: This task is currently in preview and requires a preview version of Service Fabric that supports compose deploy. 
See [https://docs.microsoft.com/azure/service-fabric/service-fabric-docker-compose](https://docs.microsoft.com/azure/service-fabric/service-fabric-docker-compose).

### Service Fabric

* This task uses a Service Fabric installation to connect and deploy to a Service Fabric cluster.  

* [Azure Service Fabric Core SDK](http://www.microsoft.com/web/handlers/webpi.ashx?command=getinstallerredirect&appid=MicrosoftAzure-ServiceFabric-CoreSDK) on the build agent.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/ServiceFabricComposeDeploy.0.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Cluster Connection** | The Azure Service Fabric service endpoint to use to connect and authenticate to the cluster. |
| **Compose File Path** | Path to the compose file that is to be deployed. Can include wildcards and variables. Example: `$(System.DefaultWorkingDirectory)/**/drop/projectartifacts/**/docker-compose.yml`. **Note**: combining compose files is not supported as part of this task. |
| **Application Name** | The Service Fabric Application Name of the application being deployed. Use `fabric:/` as a prefix. Application Names within a Service Fabric cluster must be unique. |
| **Registry Credentials Source** | Specifies how credentials for the Docker container registry will be provided to the deployment task:<br />**Azure Resource Manager Endpoint**: An Azure Resource Manager service endpoint and Azure subscription to be used to obtain a service principal ID and key for an Azure Container Registry.<br />**Container Registry Endpoint**: A Docker registry connection endpoint. If a certificate matching the Server Certificate Thumbprint in the Cluster Connection is installed on the build agent, it will be used to encrypt the password; otherwise the password will not be encrypted and sent in clear text.<br />**Username and Password**: Username and password to be used. We recommend you encrypt your password using `Invoke-ServiceFabricEncryptText` (Check **Password Encrypted**). If you do not, and a certificate matching the Server Certificate Thumbprint in the Cluster Connection is installed on the build agent, it will be used to encrypt the password; otherwise the password will not be encrypted and sent in clear text.<br />**None**: No registry credentials are provided (used for accessing public container registries). |
| **Deploy Timeout (s)** | Timeout in seconds for deploying the application. |
| **Remove Timeout (s)** | Timeout in seconds for removing an existing application. |
| **Get Status Timeout (s)** | Timeout in seconds for getting the status of an existing application. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see: [Service Fabric PowerShell Utility ](../utility/service-fabric-powershell.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
