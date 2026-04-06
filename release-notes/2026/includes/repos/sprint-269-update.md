---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 2/11/2026
ms.topic: include
---

### Improved Git policy configuration API

The policy configuration APIs are improved to make it easier and more efficient to retrieve all policies that apply to a specific repository. You can now query policies defined at the repository level and policies applied to any branches or ReFS within that repository, without needing to scan the entire project. This enhancement reduces unnecessary API calls and improves performance for services that manage policies at scale. Existing policy behavior remains unchanged.

[Policy Configurations - Get - REST API (Azure DevOps Git)](/rest/api/azure/devops/git/policy-configurations/get?view=azure-devops-rest-7.2&preserve-view=true)
