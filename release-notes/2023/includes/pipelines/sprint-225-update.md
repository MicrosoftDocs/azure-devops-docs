---
author: ckanyika
ms.author: ckanyika
ms.date: 8/2/2023
ms.topic: include
---

###  No classic build pipelines for new organizations (_Pre-announcement_)

To improve the security of newly created organizations, we will be disabling the _classic build and release pipelines_ for new organizations. We will be enabling YAML pipelines as the default setting beginning next Sprint (Sprint 226). In contrast to the classic build and release pipelines, YAML pipelines can undergo code review, provide resource access management and support runtime parameters, enhancing overall security with an extra layer of protection.

The changes will not impact existing projects and organizations.

### Increased Azure Pipeline limits to align with the 4 MB maximum Azure Resource Manager (ARM) template size. 

You can use the [Azure Resource Manager Template Deployment](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines&preserve-view=true) task to create Azure infrastructure. In response to your feedback, we have increased the Azure Pipelines integration limit of 2 MB to 4 MB. This will align with the ARM Templates [maximum size of 4 MB](/azure/azure-resource-manager/templates/best-practices#template-limits) resolving size constraints during integration of large templates.