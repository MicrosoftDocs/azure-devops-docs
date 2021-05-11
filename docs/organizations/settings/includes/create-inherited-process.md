---
ms.topic: include
ms.author: kaelli
author: KathrynEE
ms.date: 07/17/2020
---

<a id="create-inherited-process"></a>

## Create an inherited process 

The first step is to create an inherited process that you can customize. The default, system processes are locked from being customized. 

1. From the **Process** page, open the **&hellip;** context menu of the process you'll use to create an inherited process, and then choose **Create inherited process**. Choose the same system process&mdash;[Agile](/azure/devops/boards/work-items/guidance/agile-process), [Basic](/azure/devops/boards/get-started/plan-track-work), [Scrum](/azure/devops/boards/work-items/guidance/scrum-process), or [CMMI](/azure/devops/boards/work-items/guidance/cmmi-process)&mdash;that was used to create the project that you want to customize.  

	Here, we create an inherited process from the Agile system process.   
	::: moniker range="azure-devops"
	> [!div class="mx-imgBorder"]  
	> ![Context menu, Choose Create inherited process, Azure DevOps.](/azure/devops/organizations/settings/work/media/process/create-inherited-process-menu-agile.png) 
	::: moniker-end 
	::: moniker range="azure-devops-2020"
	> [!div class="mx-imgBorder"]  
	> ![Context menu, Choose Create inherited process, Azure DevOps Server 2020.](/azure/devops/organizations/settings/work/media/process/create-inherited-process-2020.png) 
	::: moniker-end 
	::: moniker range="azure-devops-2019"
	> [!div class="mx-imgBorder"]  
	> ![Context menu, Choose Create inherited process, Azure DevOps Server 2019.](/azure/devops/organizations/settings/work/media/process/create-inherited-process-menu-agile.png) 
	::: moniker-end 
	::: moniker range=">= azure-devops-2019 < azure-devops"
	> [!IMPORTANT]  
	> If you don't see the **Create inherited process** menu option, then the collection you've selected is set to work with the On-premises XML process model. You can import and export process templates and use the features supported for the [On-premises XML process model](/azure/devops/reference/customize-work).
	::: moniker-end 

2.	Enter a name for your process and optionally a description. Process names must be unique and no more than 128 characters. For additional restrictions, see [Create and manage inheritance processes, Process name restrictions](/azure/devops/organizations/settings/work/inheritance-process-model#process-naming). Optionally, add a description.   

	![Create inherited process dialog](/azure/devops/organizations/settings/work/media/process/create-inherited-process-dialog.png)