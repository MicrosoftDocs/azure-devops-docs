---
author: ckanyika
ms.author: ckanyika
ms.date: 8/2/2023
ms.topic: include
---

### Disable creation of classic pipelines for new organizations (pre-announcement)

To improve the security of newly created organizations, we will disable creating _classic build and release pipelines_ for new organizations, beginning next sprint. By default, you'll be able to create only YAML pipelines. In contrast to the classic build and release pipelines, YAML pipelines can undergo code review, provide resource access management and support runtime parameters, enhancing overall security with an extra layer of protection. You can enable creation of classic build and release pipelines in your organization's and projects' settings, using the [toggles](/azure/devops/release-notes/2023/sprint-224-update?#new-toggles-to-control-creation-of-classic-pipelines) introduced last sprint.

The changes will not impact existing projects and organizations.

### Increased Azure Pipeline limits to align with the 4 MB maximum Azure Resource Manager (ARM) template size. 

You can use the [Azure Resource Manager Template Deployment](/azure/devops/pipelines/tasks/reference/azure-resource-manager-template-deployment-v3?view=azure-pipelines&preserve-view=true) task to create Azure infrastructure. In response to your feedback, we have increased the Azure Pipelines integration limit of 2 MB to 4 MB. This will align with the ARM Templates [maximum size of 4 MB](/azure/azure-resource-manager/templates/best-practices#template-limits) resolving size constraints during integration of large templates.
