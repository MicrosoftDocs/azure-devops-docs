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

### GA of templates support in YAML editor

[Templates](https://docs.microsoft.com/azure/devops/pipelines/process/templates?view=azure-devops) are a commonly used feature in YAML pipelines. They are an easy way to share pipeline snippets. They are also a powerful mechanism in verifying or enforcing [security and governance](https://docs.microsoft.com/azure/devops/pipelines/security/templates?view=azure-devops) through your pipeline.

Azure Pipelines supports a YAML editor, which can be quite handy when editing your pipeline. However the editor did not support templates until now. Authors of YAML pipelines could not get assistance through intellisense when using a template. Template authors could not make use of the YAML editor.  In this release, we are adding support for templates in the YAML editor. 

As you edit your main Azure Pipelines YAML file, you can either _include_ or _extend_ a template. When you type in the name of your template, you will be prompted to validate your template. Once validated, the YAML editor understands the schema of the template including the input parameters.

> [!div class="mx-imgBorder"]
> ![Pipelines REST API Updates](../../media/214-pipelines-02.png)

Post validation, you can choose to navigate into the template. You will be able to make changes to the template using all the features of the YAML editor.

There are known limitations:
If the template has required parameters that are not provided as inputs in the main YAML file, then the validation fails and prompts you to provide those inputs. In an ideal experience, the validation should not be blocked and you should be able to fill in the input parameters using intellisense.
You cannot create a new template from the editor. You can only use or edit existing templates.