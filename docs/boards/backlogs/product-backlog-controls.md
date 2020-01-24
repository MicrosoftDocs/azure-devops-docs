---
title: Backlog controls to switch views or enable options
titleSuffix: Azure Boards 
description: Switch views and turn controls on or off from your product or portfolio backlogs for Azure Boards or TFS 
ms.custom: "boards-backlogs, seodec18" 
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 02/14/2019
---




# Product backlog controls  

[!INCLUDE [temp](../includes/version-vsts-tfs-all-versions.md)]

<a id="backlog-controls">  </a>

Once you've defined your product backlog, you can use the following controls to change or filter the view. 

::: moniker range=">= azure-devops-2019"

| Icon  | Control                  | Function              |
|---------|------------------------|--------------------|
| ![backlogs](../../media/icons/backlogs.png) | Backlog options  | [Switch backlog view](create-your-backlog.md)<br/>![backlogs menu](media/backlogs-menu.png)    |  
| ![view options](../../media/icons/view-options-icon.png) | View options |- [Turn Parents on/off](organize-backlog.md)<br/>- [Turn Forecasting on/off](../sprints/forecast.md)<br/>- [Turn In Progress items on/off](../sprints/forecast.md)<br/>- [Show Mapping](organize-backlog.md)<br/>- [Show Planning](../sprints/assign-work-sprint.md)<br/>![view options](media/view-options.png) |  
| ![Filter](../media/icons/filter-icon.png) |  Filter | [Turn filtering On/Off](filter-backlogs.md)  |   
| ![Settings icon](../../media/icons/blue-gear.png) | Settings   | [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  |  
| ![full screen](../../media/icons/full-screen-icon.png) / ![exit full screen](../../media/icons/exit-full-screen-icon.png)  | Full screen | Enter or exit full screen mode  |  
| ![expand icon](../media/icons/expand_icon.png) / ![collapse icon](../media/icons/collapse_icon.png) | Expand/Collapse | Expand or collapse one level of the tree hierarchy |   
| ![actions](../../media/icons/actions-icon.png) | Actions options |- [Set column options](set-column-options.md)<br/>-[Create query](../queries/using-queries.md)<br/>- [Email](../work-items/email-work-items.md)  |  



> [!IMPORTANT]  
> If you turn the **In Progress** control off, then items that are in the *Active*, *Committed*, or *Resolved* states or in the In Progress category state won't appear in the backlog. 

<!---
| In progress items | [Show/Hide in progress items](../sprints/forecast.md)   |
| Board    | [Switch to Kanban board view](../boards/kanban-quickstart.md)  |
| ![mail icon](../media/icons/mail_icon.png)  | Email a copy of your backlog      |
 
-->

::: moniker-end


::: moniker range="<= tfs-2018"

| Control                  | Function                      |
|--------------------------|-------------------------------|
| Backlog  | [Switch to backlog view](create-your-backlog.md)    |
| Board    | [Switch to Kanban board view](../boards/kanban-quickstart.md)  |
| Forecast | [Turn forecasting Off/On](../sprints/forecast.md) |
| Mapping | [Turn mapping Off/On](organize-backlog.md)   |
| Parents | [Show/Hide parents](organize-backlog.md) |
| In progress items | [Show/Hide in progress items](../sprints/forecast.md)   |
| ![Settings icon](../media/icons/team-settings-gear-icon.png)    | [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)  |
| ![full screen icon](../media/icons/fullscreen_icon.png) / ![exit full screen icon](../media/icons/exitfullscreen_icon.png)  | Enter or exit full screen mode      |
| ![expand icon](../media/icons/expand_icon.png) / ![collapse icon](../media/icons/collapse_icon.png)   | Expand or collapse one level of the tree hierarchy    |
| ![mail icon](../media/icons/mail_icon.png)  | Email a copy of your backlog      |
| ![Filter](../media/icons/filter-icon.png)  | [Turn filtering On/Off](filter-backlogs.md)  |  


> [!IMPORTANT]  
> If you set the **In progress** control to **Hide**, then items that are in the *Active*, *Committed*, or *Resolved* states or in the In Progress category state won't appear in the backlog. 

::: moniker-end


Even if you have show parents turned on, the **Create query** and mail ![mail icon](../media/icons/mail_icon.png) controls will only list items at the currently selected level. 
 

## Related articles

- [Backlogs, portfolios, and Agile project management](backlogs-overview.md)  
- [Workflow states and state categories](../work-items/workflow-and-state-categories.md)
