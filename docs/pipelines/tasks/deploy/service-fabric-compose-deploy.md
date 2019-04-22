---
title: Service Fabric Compose Deploy task
description: Service Fabric Compose Deploy Deployment task
ms.assetid: 891A8845-6EC1-4A70-B187-BBF9416AB41F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Service Fabric Compose Deploy task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy a Docker-compose application to a Service Fabric cluster.
This task deploys an Azure Service Fabric application to a cluster according to the settings defined in the compose file.

## Prerequisites

NOTE: This task is currently in preview and requires a preview version of Service Fabric that supports compose deploy.
See [/azure/service-fabric/service-fabric-docker-compose](/azure/service-fabric/service-fabric-docker-compose).

### Service Fabric

* This task uses a Service Fabric installation to connect and deploy to a Service Fabric cluster.  

* [Azure Service Fabric Core SDK](http://www.microsoft.com/web/handlers/webpi.ashx?command=getinstallerredirect&appid=MicrosoftAzure-ServiceFabric-CoreSDK) on the build agent.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/ServiceFabricComposeDeployV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Cluster Connection** | The Azure Service Fabric service connection to use to connect and authenticate to the cluster. |
| **Compose File Path** | Path to the compose file that is to be deployed. Can include wildcards and variables. Example: `$(System.DefaultWorkingDirectory)/**/drop/projectartifacts/**/docker-compose.yml`. **Note**: combining compose files is not supported as part of this task. |
| **Application Name** | The Service Fabric Application Name of the application being deployed. Use `fabric:/` as a prefix. Application Names within a Service Fabric cluster must be unique. |
| **Registry Credentials Source** | Specifies how credentials for the Docker container registry will be provided to the deployment task:<br />**Azure Resource Manager Endpoint**: An Azure Resource Manager service connection and Azure subscription to be used to obtain a service principal ID and key for an Azure Container Registry.<br />**Container Registry Endpoint**: A Docker registry service connection. If a certificate matching the Server Certificate Thumbprint in the Cluster Connection is installed on the build agent, it will be used to encrypt the password; otherwise the password will not be encrypted and sent in clear text.<br />**Username and Password**: Username and password to be used. We recommend you encrypt your password using `Invoke-ServiceFabricEncryptText` (Check **Password Encrypted**). If you do not, and a certificate matching the Server Certificate Thumbprint in the Cluster Connection is installed on the build agent, it will be used to encrypt the password; otherwise the password will not be encrypted and sent in clear text.<br />**None**: No registry credentials are provided (used for accessing public container registries). |
| **Deploy Timeout (s)** | Timeout in seconds for deploying the application. |
| **Remove Timeout (s)** | Timeout in seconds for removing an existing application. |
| **Get Status Timeout (s)** | Timeout in seconds for getting the status of an existing application. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

Also see: [Service Fabric PowerShell Utility](../utility/service-fabric-powershell.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
