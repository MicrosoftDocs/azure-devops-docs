---
title: Add a widget to a team dashboard 
titleSuffix: VSTS & TFS
description: Choose and configure widgets that you add to a team dashboard  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 0869DB42-6983-49A2-855C-2678CFFF4967
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 08/22/2017
---

# Add widgets to a dashboard

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.1**


::: moniker range="tfs-2013"
> [!NOTE]   
> Multiple team dashboards and widgets are not supported features in TFS 2013, instead, you can [pin items to a team homepage](team-dashboard.md). Consider [upgrading to the latest TFS version](https://www.visualstudio.com/downloads/) to get access to the widget catalog and [multiple team dashboards](dashboards.md). For information on SharePoint dashboards, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).    
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

Widgets smartly format data to provide access to easily consumable data. You add widgets to your team dashboards to gain visibility into the status and trends occurring as you develop your software project. 

Each widget provides access to a chart, user-configurable information, or a set of links that open a feature or function. 

You can add one or more charts or widgets to your dashboard. You add several widgets at a time simply by selecting each one. See [Manage dashboards](dashboards.md#manage) to determine the permissions you need to add and remove widgets from a dashboard.    

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
<a id="permissions">  </a>
## Prerequisites  
::: moniker-end

::: moniker range="vsts"
* You must be a member of a team project. If you don't have a team project yet, create one in [VSTS](/vsts/accounts/set-up-vs). 
* If you haven't been added as a team member, [get added now](/vsts/accounts/add-account-users-assign-access-levels).
* Anyone with access to the team project, including [stakeholders](../../security/get-started-stakeholder.md), can view dashboards.
* To add, edit, or manage a team dashboard, you must be a team admin, a project admin, or have [dashboard permissions](dashboard-permissions.md). In general, you need to be a team admin for the currently selected team to edit dashboards. Request your current team or project admin to add you as a [team admin](../../work/scale/add-team-administrator.md).
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
* You must be a member of a team project. If you don't have a team project yet, create one in an [on-premises TFS](/vsts/accounts/create-team-project). 
* If you haven't been added as a team member, [get added now](/vsts/security/add-users-team-project).
* Anyone with access to the team project, including [stakeholders](../../security/get-started-stakeholder.md), can view dashboards.
* To add a widget to a team dashboard, you must be a team admin, a project admin, or have  [dashboard permissions](dashboard-permissions.md). In general, you need to be a team admin for the currently selected team to edit dashboards. Request your current team or project admin to add you as a [team admin](../../work/scale/add-team-administrator.md).  
::: moniker-end

::: moniker range="tfs-2015"
* You must be a member of a team project. If you don't have a team project yet, create one in an [on-premises TFS](/vsts/accounts/create-team-project). 
* If you haven't been added as a team member, [get added now](/vsts/security/add-users-team-project).
* Anyone with access to the team project, including [stakeholders](../../security/get-started-stakeholder.md), can view dashboards.
* To add, move, configure, or remove a widget to/from a team dashboard, you must be added to the [team administrator role for the team](../../work/scale/add-team-administrator.md).  

> [!NOTE]  
> You can access the [widget catalog](widget-catalog.md) from the web portal for TFS 2015.1 or later version. The widget catalog provides widgets for all tiles supported in previous releases of TFS for the team homepage. For on-premises TFS 2015, you can add select charts to the team home page using the [Pin to home page](team-dashboard.md) feature.   
>
>To determine the platform and version you're on, see [Provide product and content feedback, Platforms and version support](../../user-guide/provide-feedback.md#platform-version).   
 
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

## Connect to the web portal for your team project 

To add a widget to a dashboard, you connect to your team project using a [supported web browser](../../tfs-server/requirements.md#supported-browsers).  If you don't have a team project yet, create one in [VSTS](../../accounts/create-account-msa-or-work-student.md)<!--- or set one up in an [on-premises TFS](../../accounts/create-team-project.md)-->.

Open a browser window and click the **Dashboards** hub. If you haven't been added as a team member, [get added now](../../work/scale/multiple-teams.md#add-team-members).

![Open the Dashboards hub](_img/dashboards-go-to.png) 

If you don't see the team or team project you want, click the ![project icon](../../work/_img/icons/project-icon.png) project icon to [browse all team projects and teams](../../user-guide/account-home-pages.md).  


## Add a widget to a dashboard  
 
Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify a dashboard. Click ![add a widget icon](_img/add-widget-icon.png) to add a widget to the dashboard.  

The [widget catalog](widget-catalog.md) describes all the available widgets, many of which are scoped to the selected team context.  

::: moniker-end

::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
Or, you can drag and drop a widget from the catalog onto the dashboard.    



<!---
Widget images may vary depending on which platform you access. This topic shows images that appear in VSTS. However, the widget title and functionality described in this topic are valid for both VSTS and TFS. For example, dashboard edit mode controls shown below are valid for VSTS and TFS 2015.2 and later version. Some functionality differs when you connect to TFS 2015.1 or earlier versions.  
-->

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Configure a widget  

To configure a widget, add the widget to a dashboard and then click the ![configure icon](_img/icons/configure-icon.png) configure icon. 

![Work item chart unconfigured widget](_img/add-widget-configure-initial.png)  

Click the delete icon to remove the tile from the dashboard. 
 
Once you've configured the widget, you can edit it by opening the actions menu. 

<img src="_img/add-widget-configure.png" alt="Edit configured widget " style="border: 2px solid #C3C3C3;" /> 


## Move or delete a widget from a dashboard   

Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify your dashboard. You can then drag tiles to reorder their sequence on the dashboard. 

To remove a widget, click the widget's ![Trash icon](_img/dashboard-trash-icon.png) or ![Delete icon](_img/dashboard-delete-icon.png) delete icons.  

When you're finished with your changes, click ![Exit edit-dashboard-mode icon](_img/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

<!---
Just as you have to be a team or project admin to add items to a dashboard, you must have admin permissions to remove items. 
-->

::: moniker-end



::: moniker range="vsts || >= tfs-2018"

## Copy a widget 

<!---
> [!NOTE]  
> This feature is only available from VSTS.    
-->

To copy a configured widget to another team dashboard, click the ![Actions icon](../../work/_img/icons/actions-icon.png) actions icon and select **Add to dashboard**. 

<img src="_img/dashboards-copy-widget.png" alt="Copy a widget to another team dashboard" style="border: 2px solid #C3C3C3;" />  

::: moniker-end

::: moniker range="vsts"
## Analytics Service widgets 
The Analytics Service is in preview and provides access to several widgets. To learn more, see these topics: 
- [Widgets based on the Analytics Service](../analytics/analytics-widgets-vsts.md)
- [Add an Analytics widget to a dashboard](../analytics/enable-analytics-velocity.md)
- [What is the Analytics Service?](../analytics/what-is-analytics.md)

::: moniker-end


::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

## Try this next 

> [!div class="nextstepaction"]
> [Review the widget catalog](widget-catalog.md)
> or
> [Review Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


### Extensibility  
In addition to the widgets described in the Widget catalog, you can create your own widgets using the [Widget REST APIs](../../extend/develop/add-dashboard-widget.md). 

### Widget size

Some widgets are pre-sized and can't be changed. Others are configurable through their configuration dialog. 

For example, the Chart for work items widget allows you to select an area size ranging from 2 x 2  to 4 x 4 (tiles).  

<img src="_img/add-widget-size.png" alt="Change widget size" style="border: 2px solid #C3C3C3;" />  


### Disabled Marketplace widget 

If your account or project collection administrator disables a marketplace widget, you'll see the following image: 

<img src="_img/widget-catalog-disabled-widget.png" alt="Disabled widget extension notification" style="border: 2px solid #C3C3C3;" />   

To regain access to it, request your admin to reinstate or reinstall the widget.  

::: moniker-end