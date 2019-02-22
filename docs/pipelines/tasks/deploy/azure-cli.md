---
title: Azure CLI task
description: Azure Pipelines and Team Foundation Server build task to run a shell or batch script containing Microsoft Azure CLI commands
ms.assetid: C6F8437B-FF52-4EA1-BCB0-F34924303CA8
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

# Azure CLI task

**Azure Pipelines**

Use this task in a build or release pipeline to run a shell or batch 
script containing Azure CLI commands against an Azure subscription.

This task is used to run Azure CLI commands on 
cross-platform agents running on Linux, macOS, or Windows operating systems.
 
This task is under development. If you encounter problems, or wish to
share feedback about the task and features you would like to see,
please [contact us](mailto:RM_Customer_Queries@microsoft.com).

### What's new in Version 1.0

- Supports the new [AZ CLI 2.0](/cli/azure/overview), which is Python based
- Works with agents on Linux, macOS, and Windows
- To work with [Azure CLI 1.0](/azure/cli-install-nodejs), which is node based, switch to task version 0.0
- Both versions of Azure-CLI can coexist in the same system, but task V1.0 logs into the Python based AZ CLI using the user's subscription, whereas task V0.0 logs into the node based Azure CLI. Therefore, scripts should include only the appropriate corresponding commands.
- Limitations:
  - No support for Classic subscriptions. AZ CLI 2.0 supports only Azure Resource Manager (ARM) subscriptions
  - Currently, Microsoft-hosted agents do not have the AZ CLI installed. You can either install it using `npm install -g azure-cli` (on Microsoft-hosted Linux agents, use `sudo npm install -g azure-cli`) or use a self-hosted agent with the AZ CLI pre-installed.

## Demands

None

## Prerequisites

* A Microsoft Azure subscription
* A service connection to your Azure account. You can use either:
  - [Azure Classic service connection](../../library/service-endpoints.md#sep-azure-classic)
  - [Azure Resource Manager service connection](../../library/connect-to-azure.md)
* Azure CLI installed on the computer(s) that run the build and release agent.
  See [Install the Azure CLI](https://azure.microsoft.com/documentation/articles/xplat-cli-install/).
  If an agent is already running on the machine on which the Azure CLI is installed, restart the agent to ensure all the relevant stage variables are updated.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureCLIV1.md)]
::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| **Azure Connection Type** | Required. Select the type of service connection used to define the connection to Azure. Choose **Azure Classic** or **Azure Resource Manager**. This parameter is shown only when the selected task version is 0.* as Azure CLI task v1.0 supports only Azure Resource Manager (ARM) subscriptions.
| **Azure Classic Subscription** | Required if you select **Azure Classic** for the **Azure Connection Type** parameter. The name of an [Azure Classic service connection](../../library/service-endpoints.md#sep-azure-classic) configured for the subscription where the target Azure service, virtual machine, or storage account is located. |
| **Azure RM Subscription** | Required if you select **Azure Resource Manager** for the **Azure Connection Type** parameter. The name of an [Azure Resource Manager service connection](../../library/connect-to-azure.md) configured for the subscription where the target Azure service, virtual machine, or storage account is located. See [Azure Resource Manager overview](https://azure.microsoft.com/documentation/articles/resource-group-overview/) for more details. |
| **Script Location** | Required. The way that the script is provided. Choose **Inline Script** or **Script Path** (the default). |
| **Inline Script** | Required if you select **Inline Script** for the **Script Location** parameter. Type or copy the script code to execute here. You can include [default variables](../../release/variables.md#default-variables), global variables, and stage variables. |
| **Script Path** | Required if you select **Script Path** for the **Script Location** parameter. The path to a linked artifact that is the **.bat**, **.cmd**, or **.sh** script you want to run. It can be a fully-qualified path, or a valid path relative to the default working directory. |
| **Arguments** | Optional. Any arguments you want to pass to the script. |
| **Advanced - Working Directory** | Optional. The working directory in which the script will execute. If not specified, this will be the folder containing the script file. |
| **Advanced - Fail on Standard Error** | Set this option if you want the build to fail if errors are written to the **StandardError** stream. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

## Related tasks

* [Azure Resource Group Deployment](azure-resource-group-deployment.md)
* [Azure Cloud Service Deployment](azure-cloud-powershell-deployment.md)
* [Azure Web App Deployment](azure-rm-web-app-deployment.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [qa-agents](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
