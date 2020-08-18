---
title: Customize backlogs and boards 
titleSuffix: Azure DevOps Services 
description: Modify the work item types that appear on backlogs and boards, add portfolio backlogs for the Inheritance process model 
ms.custom: inherited-process
ms.technology: devops-agile
ms.assetid: 4B6014AA-5CD8-47B9-A1E3-BFB0CCA721AF  
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.topic: conceptual
ms.date: 08/18/2020
---

# Customize your backlogs or boards (Inheritance process)  

[!INCLUDE [temp](../../../boards/includes/version-vsts-plus-azdevserver-2019.md)]    

You can customize your backlogs to add more levels or add custom work item types to them. As shown below, we've added a third level portfolio backlog labeled *Initiatives* which tracks the custom *Initiative* work item type, and we've renamed the product backlog to *Stories and Tickets* to indicate that we not only track *User Stories*, but also *Customer Tickets* on the product backlog. 
 
> [!div class="mx-imgBorder"]  
> ![Changes made to the backlog levels](media/process/portfolio-backlogs-modified.png) 

Your project defines two portfolio backlogs: Features and Epics. However, if you need one or more additional portfolio backlogs, you can add them.   

[!INCLUDE [temp](../includes/note-on-prem-link.md)]


Portfolio backlogs are useful for organizing your backlog under various business initiatives and user scenarios. When you [organize your backlogs into portfolios](../../../boards/backlogs/organize-backlog.md), you can gain a hierarchical view of the work defined in lower-level backlogs, including work in progress across several teams. Program managers can track the status of those backlog items of interest and drill down to ensure that all work is represented.  

To learn more about what you can customize, see [About process customization and inherited processes](inheritance-process-model.md). 

> [!NOTE]   
> You can't add or remove an inherited work item type to or from a backlog, for example, you can't add the Issue work item type to the product backlog.  
 
::: moniker range="< azure-devops"
> [!NOTE]    
> You can't add an inherited work item type to any backlog level. For example, you can't add the Issue or Impediment work item type to the product backlog. 
 
::: moniker-end 

## Supported customizations

[!INCLUDE [temp](../includes/process-customize-backlogs.md)]

<a id="add-oob-to-backlog" /> 

::: moniker range="azure-devops"

## Add a system work item type to a backlog  

If you want to track Issues or Impediments along with your requirements or a portfolio backlog, you can by editing the corresponding backlog.    
::: moniker-end 

[!INCLUDE [temp](../includes/process-prerequisites.md)] 

[!INCLUDE [temp](../includes/open-process-admin-context-ts.md)]
 
[!INCLUDE [temp](../includes/automatic-update-project.md)] 


<a id="portfolio-backlogs">  </a>

## Add or edit portfolio backlogs 

The Agile, Scrum, and CMMI system processes defines two default portfolio backlogs, Epics and Features. Each is associated with their corresponding work item types, Epic and Feature. The Basic process only defines the Epics backlog and Epic work item type. For more information about each process, see [Choose a process](../../../boards/work-items/guidance/choose-process.md).

You can add a custom work item type when adding or editing a portfolio backlog, or you can choose a work item type you've previously added. Only those work item types that don't belong to another backlog level appear for selection. 
 

<a id="add-portfolio-backlog">  </a>

### Add a portfolio backlog 
	
1. From the  **Backlog levels** page, choose :::image type="icon" source="../../../media/icons/blue-add-icon.png" border="false"::: **New top level portfolio backlog**. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Admin context, Process page, select Process](media/process/process-new-portfolio-backlog.png) 

1. Name the backlog level, select the backlog level color, and add the work item type  to associate with this level. Click Add. 

	> [!div class="mx-imgBorder"]  
	> ![Web portal, Add a portfolio backlog dialog, Add new work item type](media/process/process-add-portfolio-backlog-dialog.png) 

1. If you are associating only one work item type with the backlog, then click Save to save your changes. Otherwise, you can add more work item types as needed. 

	![Web portal, Add a portfolio backlog dialog, Save changes](media/process/process-add-portfolio-backlog-dialog-save.png)


<a id="edit-portfolio-backlog">  </a>

### Edit, rename, or delete a portfolio backlog 

From the **Backlog levels** page, choose the :::image type="icon" source="../../../media/icons/actions-icon.png" border="false":::  context menu of a portfolio backlog to edit, rename, or delete it.  


![Web portal, Add a portfolio backlog dialog, Save changes](media/process/process-portfolio-backlog-context-menu.png)

Deleting a backlog level removes the backlog and board associated with the level for all teams, including customizations made to them. The work items defined with the associated work item types are not deleted or affected in any way. 

![Web portal, Add a portfolio backlog dialog, Save changes](media/process/process-edit-portfolio-backlog-dialog.png)  

> [!NOTE]    
> You can't remove the default, inherited work item type from the Epics or Features portfolio backlogs.  

<a id="edit-product-backlog">  </a>

## Edit or rename the requirement backlog 

The Requirement backlog, also referred to as the product backlog, defines the work item types that appear on the product backlog and Kanban board. The default work item type for Agile is User Story; for Basic, Issue; for Scrum, Product Backlog Item; and for CMMI, Requirement. 

You can rename the backlog, change the color, add work item types, and change the default work item type. Open the Edit backlog dialog from the context menu for the Requirements backlog. 
 

::: moniker range="azure-devops"

Here, we've renamed the backlog, added **Customer Ticket** and **Issue**, and changed the default type to *Customer Ticket*. Simply check those boxes of the work item types to include on the backlog. 

:::image type="content" source="media/backlogs/add-oob-issue-to-backlog.png" alt-text="Web portal, Add a portfolio backlog dialog, Save changes":::

The **Edit backlog level** dialog automatically includes inherited and custom work item types which haven't been assigned to other backlog levels. You can't remove the default, inherited work item type from the Requirements backlog, but you can disable that work item type. 

::: moniker-end  

::: moniker range="< azure-devops"

Here, we've renamed the backlog, added *Customer Ticket*, and changed the default type to *Customer Ticket*. 

![Web portal, Add a portfolio backlog dialog, Save changes](media/process/process-edit-backlog-dialog-modified.png)  
::: moniker-end  
 

> [!NOTE]    
> You can't remove the default, inherited work item type from the Requirements backlog, but you can disable that work item type. 

<a id="edit-iteration-backlog">  </a>

## Edit the iteration backlog 

The Iteration backlog, also referred to as the sprint backlogs, defines the work item types that are displayed on the sprint backlogs and Taskboards. The default work item type for all processes is Task.  

For the iteration backlog, you can add work item types and change the default work item type. Open the Edit backlog dialog from the context menu for the Iteration backlog. 

Here, we've added the *Ticket* work item type which is tracked along with tasks. 

![Web portal, Add a portfolio backlog dialog, Save changes](media/process/process-edit-iteration-backlog-dialog-modified.png)  

> [!NOTE]    
> You can't remove the default, inherited work item type from the Iteration backlog. 




## Related articles  

[!INCLUDE [temp](../includes/note-audit-log-support-process.md)]

- [Add a custom work item type](add-custom-wit.md)  
- [Customize a project using an inherited process](customize-process.md)  
- [Backlogs, boards, and plans](../../../boards/backlogs/backlogs-boards-plans.md)  
- [Create your backlog](../../../boards/backlogs/create-your-backlog.md)  
- [Organize your backlog, work with portfolio backlogs](../../../boards/backlogs/organize-backlog.md)  







