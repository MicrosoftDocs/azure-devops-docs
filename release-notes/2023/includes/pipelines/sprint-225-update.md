---
author: ckanyika
ms.author: ckanyika
ms.date: 8/1/2023
ms.topic: include
---

### No classic build pipelines for new organizations

To improve the security of newly-created organizations,you can only create YAML pipelines, by default starting next Sprint (Sprint 226). This is because these organizations have the _Disable creation of classic build pipelines_ and _Disable creation of classic release pipelines_ toggles on upon creation. 

The changes will not impact existing projects and organizations.

### Maximum Azure Resource Manager (ARM) template size is now 4 MB

You can use the [AzureResourceManagerTemplateDeployment](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines&preserve-view=true) task to create Azure infrastructure. While ARM Templates can have a [maximum size of 4 MB](/azure/azure-resource-manager/templates/best-practices#template-limits&preserve-view=true), Azure Pipelines had a lower limit. We have now increased the maximum size to the [ARM limit](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines&preserve-view=true).