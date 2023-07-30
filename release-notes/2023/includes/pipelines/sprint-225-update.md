---
author: ckanyika
ms.author: ckanyika
ms.date: 7/31/2023
ms.topic: include
---

### No classic build pipelines for new organizations

To improve the security of newly-created organizations, one can create only YAML pipelines, by default. This is because such organizations have the _Disable creation of classic build pipelines_ and _Disable creation of classic release pipelines_ toggles on upon creation. 

Existing projects and organizations aren't affected.

### Maximum ARM template size is now 4 MB

You can use the [AzureResourceManagerTemplateDeployment](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines) task to create Azure infrastructure. While ARM Templates can have a [maximum size of 4 MB](/azure/azure-resource-manager/templates/best-practices#template-limits), Azure Pipelines had a lower limit. We have now increased the maximum size to the [ARM limit](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines).