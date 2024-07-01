---
author: ckanyika
ms.author: ckanyika
ms.date: 7/2/2024
ms.topic: include
---

### AzureFileCopy, AzurePowerShell and SqlAzureDacpacDeployment tasks can no longer use AzureRM modules

Tasks that use PowerShell modules to access Azure could still use either PowerShell AzureRM or PowerShell Az modules. PowerShell AzureRM has been replaced by Az modules in August 2018 and has been [deprecated since February 2024](https://learn.microsoft.com/powershell/azure/migrate-from-azurerm-to-az). Customers using these tasks on self-hosted agents need to have PowerShell Az pre-installed on their images.



##### Use Workload identity federation for container jobs, resources & tasks

Docker service connections that target Azure Container Registry can now avoid the use of secrets by using Workload identity federation. An updated list of tasks that support workload identity federation can be found in [our documentation](https://aka.ms/azdo-rm-workload-identity-tasks).

> [!div class="mx-imgBorder"]
> ![Screenshot of oidc collaboration.](../../media/241-pipelines-01.png "Screenshot of oidc collaboration")
