---
title: Quickstart guide to customizing your Kanban boards
titleSuffix: Azure Boards 
description: Customize your issues board to show fields, add columns, and change card color
ms.custom: boards-get-started
ms.technology: devops-new-user 
ms.prod: devops
robots: NOINDEX, NOFOLLOW
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: 'azure-devops'
ms.date: 01/11/2019
---


# Customize your boards

[!INCLUDE [temp](../_shared/version-vsts-only.md)]

This article shows how to customize a Kanban board for the Agile process. You have one Kanban board for each active product or portfolio backlog. 

You can configure your Kanban board in several ways to support specific tracking needs. For example:  
- Update fields directly from the card  
- Highlight cards based on field assignments  
- Add columns to track other workflow states  
- Add swimlanes to expedite work or differentiate work assigned to different service classes. 

Each team can customize their Issues and Epics boards and sprint Taskboards. 

<!---
## Prerequisites

- To configure a board, you must connect to a project. If you don't have a project yet, [create one in Azure DevOps](sign-up-invite-teammates.md). 
- Also, you must be added as a team administrator for your team, or be a member of the Project Administrators or Project Collection Administrators group. If you created the project, then you have permissions. 
- If you have been granted **Stakeholder** access, you can configure team settings as long as you have been added to one of the administrator roles or groups.  

For details, see [Default permissions and access for Azure Boards](permissions-access-boards.md)

-->


## Open Settings for the board 

1. [Open your Kanban board](plan-track-work.md). <!--- If you're not a team admin, [get added as one](../../organizations/settings/add-team-administrator.md). Only team and project admins can customize the Kanban board. -->

1. Choose the ![ ](../../_img/icons/blue-gear.png) gear icon to configure the board setting settings.  

	> [!div class="mx-imgBorder"]
	> ![Open board settings](_img/customize-boards/open-settings-agile.png)  

	The Settings dialog opens. 
	
	> [!div class="mx-imgBorder"]
	> ![Settings,Fields dialog](_img/customize-boards/settings-fields-agile-dialog.png) 
	
2. Choose one of the following tabs based on what you want to customize:  

	**Common customizations:**  
	<ul>
    <li><strong>Fields</strong>: Set what fields appear on cards.</li>
    <li><strong>Columns</strong>: Add, rename, and configure columns for the board.</li>
    <li><strong>Swimlanes</strong>: Add swimlanes to a board to easily track high priority levels, distinguish different service classes, or track blocked items.</li>
    <li><strong>Backlogs</strong>: Enable or disable issues or epics from being tracked on backlogs and boards.</li>
    <li><strong>Show bugs</strong>: Choose how bugs are displayed on backlogs and boards.  </li>
	</ul>
    <strong>Less common customizations:</strong>  
	<ul>
    <li><strong>Styles</strong>: Specify the card color to display based on field criteria you specify.</li>
    <li><strong>Tag colors</strong>: Specify the tag color to display based on tag criteria you specify.</li>
    <li><strong>Annotations</strong>: Enable or disable task or test annotations.</li>
    <li><strong>Tests</strong>: Configure how you want tests to appear and behave on the cards.</li>
    <li><strong>Card reordering</strong>: Choose to enable/disable changing of the backlog priority when dragging and dropping cards on the board.</li>
    <li><strong>Cumulative flow</strong>: Set how you want the cumulative flow diagram to display.</li>
    <li><strong>Working days</strong>: Set the active weekdays to use when tracking capacity and burndown.</li>
	</ul>

## Customize fields

To quickly assign fields from the card without having to open the work item, add them to display on the card. 

1. To configure the fields displayed on cards, choose the **Fields** tab. 

1. Check or uncheck those fields you want to display or not display on the board.

2. To add a field, choose ![plus icon](../../_img/icons/green_plus_icon.png) **Field** to add a field. 

	For example, here we uncheck **Show ID**, remove the **State** field, and add the **Priority** field. 

	> [!div class="mx-imgBorder"]
	> ![Settings, Fields dialog, Add Priority field](_img/customize-boards/settings-fields-agile-change-priority.png) 
	
3. To remove a field, choose the ![ ](../../_img/icons/delete-icon.png) delete icon next to the field.

4. Choose **Save and close** when done. To learn more, see [Customize cards](../boards/customize-cards.md). 


## Customize columns

1. To add a column or change column settings, choose **Columns** tab.

	Here we choose ![plus icon](../../_img/icons/green_plus_icon.png) **Column**, and then specify the name as **Research**.  

	> [!div class="mx-imgBorder"]
	> ![Settings,Columns dialog, Add Research column](_img/customize-boards/settings-columns-agile-add-research-column.png) 

1. Choose **Save and close** when done. To learn more about column settings, see [Add columns to your Kanban board](../boards/add-columns.md). 

## Customize swimlanes 

1. To add a swimlane, choose **Swimlanes** tab and choose ![plus icon](../../_img/icons/green_plus_icon.png) **Swimlane**, and then specify the name.  

	Here we label the swimlane **Expedite**. 

	> [!div class="mx-imgBorder"]
	> ![Settings,Swimlanes dialog, Add Expedite swimlane](_img/customize-boards/settings-swimlanes-dialog-expedite.png) 

1. Choose **Save and close** when done. To learn more about working with swimlanes , see [Expedite work with swimlanes](../boards/expedite-work.md). 

## Add or remove backlog levels

If you decide you want to use Epics to track work, you can turn it on and it will show up as a board or backlog. By default, it isn't enabled for new projects.  

1. Choose the **Backlogs** tab and uncheck the work item type you no longer want to track on backlogs and boards.

	> [!div class="mx-imgBorder"]
	> ![Settings,Backlogs dialog, Turn Epics on ](_img/customize-boards/settings-backlogs-agile-dialog.png) 

1. Choose **Save and close** when done. 

<!---
	> [!NOTE]   
	> Contributors will still be able to create Epics from other views, they just won't be able to view Epics within a backlog or board. To completely disable the Epic work item type, see [Add and manage work item types, Enable or disable a WIT](../../organizations/settings/work/customize-process-wit.md#enable-disable)

-->

## Review your changes 

After you close the settings dialog, refresh (F5) your board to view your changes. Verify that all changes appear as expected, or revisit the Settings dialog to make a change. 

Here we show the customizations made in this article. The following image also shows a style applied to the color when the Priority=1. 

> [!div class="mx-imgBorder"]
> ![Settings,Backlogs dialog, Turn Epics off ](_img/customize-boards/boards-agile-customized-view.png) 


## Try this next  
 
> [!div class="nextstepaction"]
> [Manage your project](manage-boards.md) 


## Related articles

* [Customize cards](../boards/customize-cards.md) (addresses **Styles**, **Tag colors**, **Annotations** and **Tests**)  
* [Card reordering](../boards/reorder-cards.md)
* [Work in Progress limits](../boards/wip-limits.md)  
* [Split columns](../boards/split-columns.md)   
* [Definition of Done](../boards/definition-of-done.md)  
* [Show bugs on backlogs and boards ](../../organizations/settings/show-bugs-on-backlog.md)  
* [Set working days](../../organizations/settings/set-working-days.md)  
* [Cumulative flow](../../report/dashboards/cumulative-flow.md)  