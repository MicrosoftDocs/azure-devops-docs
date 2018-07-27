---
title: Configure team settings
titleSuffix: VSTS & TFS
description: Manage team-specific tools such as sprint settings, backlogs, Kanban boards, and more as well as add team administrators 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 6BF2B72D-9160-4140-B8DE-B2C7C42AC338  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 10/17/2017
---

# Configure team settings 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<!--- Still needs work, versioning, and other team settings from the admin context, add something about something, team-specific widgets--> 

<a id="team-settings"></a>

Within a project, you [add teams](multiple-teams.md) to support the needs of several feature teams, or an enterprise organized to deliver different products. Each team is then able to configure the Agile tools the way that works for their team, supporting each team to collaborate most effectively in planning and managing their work.  

As a team administrator, you can configure, customize, and manage all team-related activities for your team. These include being able to add team members, add team admins, and configure Agile tools and team assets. Members of the Project Administrators group can manage all team-related activities for all teams. 

Team admin permissions are role-based, unlike project admin permissions which are set through the user interface. Also, because team administrators are members of the Contributor role they have permissions assigned to that role.  

You can configure most of your team settings from the common configuration dialog. 

> [!NOTE]
> **Feature availability:** The common configuration dialog is available from VSTS and the web portal for TFS 2015.1 and later versions.  

1. To open, click ![gear icon](../_img/icons/team-settings-gear-icon.png), the gear icon, from any team backlog or board to set one or more team settings.  

	For example, from the Kanban board ...  

	<img src="../customize/_img/kanban-card-customize-open-settings.png" alt="Kanban board, open common configuration settings" style="border: 2px solid #C3C3C3;" /><br/>  

2. Click a tab under Cards or Board to configure card and Kanban board settings.  

	![Common configuration dialog team settings](_img/manage-team-assets-common-configuration-dialog.png)

	For details on each configuration option, see one of these topics:  


> [!div class="mx-tdBreakAll"]  
> |Cards  | Board  | Charts & widgets |  General  | 
> |-------------|----------|---------|---------|   
> |- [Fields](../customize/customize-cards.md)<br/>- [Styles](../customize/customize-cards.md#style-rule)<br/>- [Tag colors](../customize/customize-cards.md#color-tags)<br/>- [Annotations](../customize/customize-cards.md#annotations)<br/>- [Tests](../customize/customize-cards.md#tests) |- [Columns](../kanban/add-columns.md)<br/>- [Swimlanes](../kanban/expedite-work.md)<br/>- [Card reordering](../customize/reorder-cards.md) |- [Cumulative flow chart & widget](../../report/dashboards/cumulative-flow.md#configure)<br/> -[Lead & Cycle time widgets](../../report/dashboards/cycle-time-and-lead-time.md)<br/> -[Velocity chart and widget](../../report/dashboards/velocity-chart-data-store.md) |-[Backlogs](../customize/select-backlog-navigation-levels.md)<br/>- [Working days](../kanban/expedite-work.md)<br/>- [Working with bugs](../customize/show-bugs-on-backlog.md) |


## Related articles 

To create additional teams, see [Add teams and team members](multiple-teams.md).  

If team members don't have access to all the features they want, check that they have [the permissions needed for those features](../../organizations/security/set-permissions-access-work-tracking.md).  



### Team name, description, and picture

Team settings also include the team name, description, and team profile image.  

To add a team picture. Open the team administration page and choose the picture icon under Team Profile. The maximum file size is 4 MB. 




