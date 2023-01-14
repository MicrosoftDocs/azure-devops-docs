---
author: gloridelmorales
ms.author: glmorale
ms.date: 1/17/2023
ms.topic: include
---
### New PAT Scope for managing pipeline authorization and approvals and checks

To limit damage done by leaking a PAT token, we've added a new PAT scope, named `Pipeline Resources`. You can use this PAT scope when managing pipeline authorization using a [protected resource](https://learn.microsoft.com/azure/devops/pipelines/security/resources?view=azure-devops#protected-resources), such as a service connection, or to manage [approvals and checks](https://learn.microsoft.com/azure/devops/pipelines/process/approvals) for that resource.

> [!div class="mx-imgBorder"]
> ![Pipelines REST API Updates](../../media/215-pipelines-01.png)

### Upcoming REST API call changes

In the next sprint, REST API call will changes as follows:

* [Update an Approval](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/approvals/update) will require a PAT with scope `Pipeline Resources Use` 
* [Manage Checks](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/check-configurations) will require a PAT with scope `Pipeline Resources Use and Manage` 
* [Update Pipeline Permisions For Resources](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/pipeline-permissions/update-pipeline-permisions-for-resources) will require a PAT with scope `Pipeline Resources Use and Manage` 
* [Authorize Definition Resources](https://learn.microsoft.com/rest/api/azure/devops/build/resources/authorize-definition-resources) will require a PAT with scope `Pipeline Resources Use and Manage` 
* [Authorize Project Resources](https://learn.microsoft.com/rest/api/azure/devops/build/authorizedresources/authorize-project-resources) will require a PAT with scope `Pipeline Resources Use and Manage`