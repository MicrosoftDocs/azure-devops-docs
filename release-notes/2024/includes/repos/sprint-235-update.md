---
author: ckanyika
ms.author: ckanyika
ms.date: 2/27/2023
ms.topic: include
---

###  SSH-RSA deprecation 

Azure Repos provides two methods for users to access a git repository in Azure Repos – HTTPS and SSH. To use SSH, you need to create a key pair using one of the supported encryption methods. In the past we’ve been supporting only SSH-RSA and we’ve asked users to enable the SSH-RSA here. This is not required to be done anymore as in 2022 we’ve added support for the RSA-SHA2-256 and RSA-SHA2-512 to Azure DevOps Service. Later that year, the same support was also added to Azure DevOps Server 2022 and in August 2023 to Azure DevOps Server 2020 and 2019. The relevant release notes are linked here:

* [Azure DevOps Server 2022](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops#azure-devops-server-2022-rc2-release-date-october-25-2022)
* [Azure DevOps Server 2020 Update 1.2 Patch 7](/azure/devops/server/release-notes/azuredevops2020u1?view=azure-devops#azure-devops-server-2020-update-12-patch-7-release-date-august-8-2023)
* [Azure DevOps Server 2019 Update 1.2 Patch 4](/azure/devops/server/release-notes/azuredevops2019u1?view=azure-devops#azure-devops-server-2019-update-12-patch-4-release-date-august-8-2023)

We are now announcing the deprecation of SSH-RSA as a supported encryption method for connecting to Azure Repos using SSH.
See details: [https://devblogs.microsoft.com/devops/ssh-rsa-deprecation/](https://devblogs.microsoft.com/devops/ssh-rsa-deprecation/) 
