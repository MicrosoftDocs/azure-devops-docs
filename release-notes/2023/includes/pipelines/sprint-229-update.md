---
author: ckanyika
ms.author: ckanyika
ms.date: 10/26/2023
ms.topic: include
---
### Improvements to Approvals REST API

We've made the search for user-assigned approvals more comprehensive by including approvals assigned to the groups the user belongs to.

In addition, we made it easier to approve pending approvals by including information about the associated pipeline run.

### Building PRs from forked GitHub repositories

To improve the security of your pipelines, Azure Pipelines no longer automatically builds pull requests from forked GitHub repositories for new projects and organizations. Now, the default value of the _Limit building pull requests from forked GitHub repositories_ setting is _Disable building pull requests from forked repositories_ for new projects and organizations.