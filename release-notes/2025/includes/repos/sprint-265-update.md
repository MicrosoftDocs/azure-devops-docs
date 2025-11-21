---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 11/25/2025
ms.topic: include
---

### Required upgrade of TFVC Proxy when used with hosted (cloud) TFVC repositories  
  
Due to security enhancements, customers using a TFVC Proxy for TFVC repositories hosted in Azure DevOps Services (cloud) are required to upgrade their TFVC Proxies to [Azure DevOps Server 2022.2 Patch 7](https://learn.microsoft.com/en-us/azure/devops/server/release-notes/azuredevops2022u2?view=azure-devops#azure-devops-server-2022-update-2-patch-7-release-date-november-11-2025) or later. Once [Azure DevOps Server RTW](https://learn.microsoft.com/en-us/azure/devops/server/release-notes/azuredevopsserver?view=azure-devops) is available, its Proxy will also be compatible with Azure DevOps Services.

Other TFVC scenarios (usage without a Proxy, or usage with a Proxy for Azure DevOps Server/on-premises) do not require any changes.

### Improved Comment Navigation by the Link in Pull Requests

We’ve improved the behavior of comment navigation within the Pull Request experience. When accessing a specific comment via a direct link, the system now handles focus better for Pull Requests with a large number of comments.

### Target Branches in Branch Dropdown

Customers using [Pull Request Targets](https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-request-targets) will now have their target branches highlighted in the new "Targets" section in the branch dropdown, appearing between the "Mine" and "All" section.

![image.png](https://dev.azure.com/mseng/b924d696-3eae-4116-8443-9a18392d8544/_apis/wit/attachments/2ef8780d-16a6-406b-9e32-aa9118a762c0?fileName=image.png) 

Visit [Pull Requests Targets](https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-request-targets?view=azure-devops) to get started with target branches.