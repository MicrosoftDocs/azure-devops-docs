---
author: ckanyika
ms.author: ckanyika
ms.date: 2/28/2023
ms.topic: include
---

### SSH-RSA deprecation

Azure Repos offers two ways for users to access a git repository in Azure Repos – HTTPS and SSH. To use SSH, you need to generate a key pair with one of the supported encryption methods. Previously, we only supported SSH-RSA and we required users to enable the SSH-RSA here. This is no longer necessary as in 2022 we added support for the RSA-SHA2-256 and RSA-SHA2-512 to Azure DevOps Service. Later that year, we also extended the same support to Azure DevOps Server 2022 and in August 2023 to Azure DevOps Server 2020 and 2019. You can find the relevant release notes here:

* [Azure DevOps Server 2022](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops#azure-devops-server-2022-rc2-release-date-october-25-2022)
* [Azure DevOps Server 2020 Update 1.2 Patch 7](/azure/devops/server/release-notes/azuredevops2020u1?view=azure-devops#azure-devops-server-2020-update-12-patch-7-release-date-august-8-2023)
* [Azure DevOps Server 2019 Update 1.2 Patch 4](/azure/devops/server/release-notes/azuredevops2019u1?view=azure-devops#azure-devops-server-2019-update-12-patch-4-release-date-august-8-2023)

We would like to inform you that SSH-RSA will no longer be supported as an encryption method for SSH connections to Azure Repos. 
For more information, see [https://devblogs.microsoft.com/devops/ssh-rsa-deprecation/](https://devblogs.microsoft.com/devops/ssh-rsa-deprecation/) 
