---
author: ckanyika
ms.author: ckanyika
ms.date: 7/2/2024
ms.topic: include
---

### AzureFileCopy, AzurePowerShell and SqlAzureDacpacDeployment tasks can no longer use AzureRM modules

As of February 2024, the AzureRM Powershell module was deprecated and is no longer supported. Although the AzureRM module may still function, it's no longer maintained or supported, placing any continued use at your discretion. Please transition to the Az module for tasks accessing Azure with PowerShell. Ensure that self-hosted agents have PowerShell Az pre-installed. Migration resources are available for guidance.

Tasks that use PowerShell modules to access Azure could still use either PowerShell AzureRM or PowerShell Az modules. PowerShell AzureRM has been replaced by Az modules in August 2018 and has been [deprecated since February 2024](https://learn.microsoft.com/powershell/azure/migrate-from-azurerm-to-az). Customers using these tasks on self-hosted agents need to have PowerShell Az pre-installed on their images.


In August 2018, PowerShell Az modules replaced the older PowerShell AzureRM modules. As of February 2024, AzureRM has been deprecated. Customers using tasks that access Azure via PowerShell on self-hosted agents must ensure that PowerShell Az modules are pre-installed on their images. For more details, refer to the official migration guide.


As of February 2024, the AzureRM PowerShell module was deprecated and is no longer supported. While the AzureRM module may still function, it’s no longer maintained, placing any continued use at your discretion. We recommend transitioning to the [Az module](https://learn.microsoft.com/en-us/powershell/azure/migrate-from-azurerm-to-az?view=azps-12.0.0) for tasks accessing Azure with PowerShell. Ensure self-hosted agents have PowerShell Az pre-installed on their image. 

##### Use Workload identity federation for container jobs, resources & tasks

Docker service connections that target Azure Container Registry can now avoid the use of secrets by using Workload identity federation. An updated list of tasks that support workload identity federation can be found in [our documentation](https://aka.ms/azdo-rm-workload-identity-tasks).

> [!div class="mx-imgBorder"]
> ![Screenshot of oidc collaboration.](../../media/241-pipelines-01.png "Screenshot of oidc collaboration")
