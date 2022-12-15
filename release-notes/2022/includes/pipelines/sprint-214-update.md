---
author: ckanyika
ms.author: ckanyika
ms.date: TBD
ms.topic: include
---
### TBD



### New Predefined System Variable

We introduced a new predefined system variable, named `Build.DefinitionFolderPath`, whose value is the folder path of a build pipeline definition. The variable is available in both YAML and classic build pipelines. 

For example, if your pipeline is housed under the `FabrikamFiber\Chat` folder in Azure Pipelines, then the value of `Build.DefinitionFolderPath` is `FabrikamFiber\Chat`.


### New PAT Scope for Managing Pipeline Authorization and Approvals & Checks

To limit damage done by leaking a PAT token, we've added a new PAT scope, named `Pipeline Resources`, to be used when managing pipeline authorization to use a [protected resource](https://learn.microsoft.com/azure/devops/pipelines/security/resources?view=azure-devops#protected-resources), such as a service connection, or to manage [Approvals and Checks](https://learn.microsoft.com/azure/devops/pipelines/process/approvals) for that resource.

> [!div class="mx-imgBorder"]
> ![Pipelines REST API Updates](../../media/214-pipelines-01.png)

Starting with Sprint 215, REST API calls to:
[Update an Approval](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/approvals/update) will require a PAT with scope `Pipeline Resources Use` 
[Manage Checks](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/check-configurations) will require a PAT with scope `Pipeline Resources Use and Manage` 
[Update Pipeline Permisions For Resources](https://learn.microsoft.com/rest/api/azure/devops/approvalsandchecks/pipeline-permissions/update-pipeline-permisions-for-resources) will require a PAT with scope `Pipeline Resources Use and Manage` 
[Authorize Definition Resources](https://learn.microsoft.com/rest/api/azure/devops/build/resources/authorize-definition-resources) will require a PAT with scope `Pipeline Resources Use and Manage` 
[Authorize Project Resources](https://learn.microsoft.com/rest/api/azure/devops/build/authorizedresources/authorize-project-resources) will require a PAT with scope `Pipeline Resources Use and Manage`

### TBD2


### TBD3

