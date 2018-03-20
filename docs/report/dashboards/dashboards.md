---
title: Add and manage team dashboards in VSTS & TFS  
description: View progress and gain quick access to code, builds, and work items by creating multiple team dashboards in Visual Studio Team Services (VSTS)  and Team Foundation Server (TFS)  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: B080CEFA-4D94-44B2-99E3-0E3E85616D04  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 03/20/2018
---

# Add and manage dashboards

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.1**

::: moniker range="tfs-2013"
> [!NOTE]   
> Multiple team dashboards and widgets are not supported features in TFS 2013, instead, you can [pin items to a team homepage](team-dashboard.md). Consider [upgrading to the latest TFS version](https://www.visualstudio.com/downloads/) to get access to the widget catalog and [multiple team dashboards](dashboards.md). For information on SharePoint dashboards, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).    
::: moniker-end


::: moniker range="vsts || >= tfs-2015 <= tfs-2018"

Share progress and status with your team using configurable team dashboards. Dashboards provide easy-to-read, easy access, real-time information. At a glance, you can make informed decisions without having to drill down into other parts of your team project site. 

The Overview page provides access to a default team dashboard which you can customize by adding, removing, or rearranging the tiles. Each tile corresponds to a widget that provides access to one or more features or functions.   
::: moniker-end

::: moniker range="tfs-2015"
> [!NOTE]   
> Multiple team dashboards and the [widget catalog](widget-catalog.md) are available from TFS 2015.1 or later version. For TFS 2015 and earlier versions, you don't have access to multiple team dashboards. Instead, your home page serves as a [single team dashboard](team-dashboard.md). For information on SharePoint dashboards, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).  
::: moniker-end

::: moniker range="tfs-2017"
> [!NOTE]   
> For information on SharePoint dashboards, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).  
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
* To add a widget to a team dashboard, you must be added to the [team administrator role for the team](../../work/scale/add-team-administrator.md).    
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Connect to the web portal for your team project 

Open a browser window and click the **Dashboards** hub. 

![Open the Dashboards hub](_img/dashboards-go-to.png) 

<!---The URL follows this pattern: 
- VSTS: ```https://{account name}.visualstudio.com/{project name}/_backlogs```  
- Team Foundation Server (on-premises): ```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```  
-->
If you don't see the team or team project you want, click the ![project icon](../../work/_img/icons/project-icon.png) project icon to [browse all team projects and teams](../../user-guide/account-home-pages.md).    
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Add and name your dashboard 

From the dashboards tab, click the ![plus icon](../../Work/_img/icons/green_plus_icon.png) and enter a dashboard name. 

![Add and name a dashboard](_img/dashboards-new-ts.png) 

If you don't see the ![plus icon](../../work/_img/icons/green_plus_icon.png), then you're not a team admin for the currently selected team, or you don't have permissions to add and edit dashboards. Either [switch the context to your team](../../settings/switch-team-context.md?toc=/vsts/report/toc.json&bc=/vsts/report/breadcrumb/toc.json), or request you be added as a [team admin](../../work/scale/add-team-administrator.md). 

With the dashboard selected, you can add [widgets and charts to the dashboard](add-widget-to-dashboard.md). Or, you can [add charts to a team dashboard from the Work, Build, or Test hubs](add-charts-to-dashboard.md).

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
<a id="manage">  </a> 
## Manage dashboards, reorder and enable auto-refresh

You can rename, reorder, or delete a dashboard. Also, you can enable auto-refresh, and the dashboard will automatically update every 5 minutes.  

<!---
>[!NOTE]  
>**Feature availability:**  You can  configure the auto-refresh setting for each dashboard on VSTS and for TFS 2015.2 and later versions. For VSTS and TFS 2017.1 and later versions, you can [set dashboard permissions](dashboard-permissions.md). 
-->
::: moniker-end


::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
<!---
### VSTS, TFS 2017
-->
1. To manage dashboards, click the ![configure icon](_img/icons/configure-icon.png) wrench icon.

	![Open Manage dashboards dialog](_img/dashboards-configure-ts.png) 

2. Drag and drop the dashboards into the sequence you want them to appear.  

	![Manage dashboards dialog](_img/manage-dashboards-ts.png) 

3. (Optional) Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. 
 
4. To delete a dashboard, click the  ![delete icon](_img/icons/delete_icon.png).

5. Click Save to save your changes. 

You can also [manage dashboard permissions](dashboard-permissions.md).   
::: moniker-end

::: moniker range="tfs-2015"
<!---
### TFS 2015
-->
1. To manage dashboards, click the ![gear icon](../../_img/icons/admin-gear-icon.png) gear icon.
 
	![Open Manage dashboards dialog](_img/dashboards-open-manage-dashboards-tfs.png) 

2. Drag and drop the dashboards into the sequence you want them to appear.  

	![Manage dashboards dialog](_img/manage-dashboards.png)   

3. (Optional) Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. The Auto-refresh feature requires TFS 2015.2 or later version.   

4. To delete a dashboard, click the  ![delete icon](_img/icons/delete_icon.png).

5. Click Save to save your changes. 

::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Move or delete a widget from a dashboard  

> [!NOTE]  
> Just as you have to be a team admin, a project admin, or have the necessary permissions to add items to a dashboard, you must have the [necessary permissions](#permissions) to remove items.  

Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify your dashboard. You can then drag tiles to reorder their sequence on the dashboard. 

To remove a widget, click the widget's ![Trash icon](_img/dashboard-trash-icon.png) or ![Delete icon](_img/dashboard-delete-icon.png) delete icons. 

When you're finished with your changes, click ![Exit edit-dashboard-mode icon](_img/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

> [!TIP]   
> When you're in dashboard edit mode, you can remove, rearrange, and configure widgets, as well as add new widgets. Once you leave edit mode, the widget tiles remain locked, reducing the chances of accidentally moving a widget.  

::: moniker-end
::: moniker range="vsts || >= tfs-2017 <= tfs-2018"
Note that you can drag and drop a widget from the catalog onto the dashboard.
::: moniker-end

::: moniker range="vsts || >= tfs-2015 <= tfs-2018"
## Try this next 

As you can see, you can use team dashboards to provide guidance and keep your team in sync, providing visibility across your org about status, trends, and progress. 

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)

See these additional resources to help you support your team:  
- [Review the widget catalog](widget-catalog.md)
- [Review Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


### Extensibility 

Using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). To learn more about the REST APIs for dashboards and widgets, see [Dashboards (API)](https://docs.microsoft.com/en-us/rest/api/vsts/dashboard/dashboards).  
::: moniker-end

<!---  
Only dashboard owners can change the configuration of their dashboards.  

To add a widget, click ![add a widget icon](_img/add-widget-icon.png). The [Widget catalog](widget-catalog.md) provides descriptions of each available widget.   
To add an item, see [add items to the dashboard](#pin-items). 

You can reorder dashboard widgets through drag-and-drop. And remove widgets or items.

Click ![add icon](../../Work/_img/icons/green_plus_icon.png) to [add another dashboard.  

 Or add items to this dashboard and re-sequence tiles. Each tile provides team members quick access to the progress of their builds, work item status and trends, Git repositories or version control folders.

## Add items to a dashboard 

You add an item to the team dashboard from the code, work, and build pages.  

1.  If you aren't a team administrator, [get added as one](#add-team-admin).  

2.	Add a work item query from its context menu.</p>

	![Add a query to a dashboard](_img/vso-pin-query-from-context-menu.png)

	To add a source control folder or a build definition, open the corresponding page and access the pin feature in the same way.    

3.	To add a chart, go to the query's Charts page and add it to your selected dashboard or the team homepage.  

	![Chart context menu, add to a dashboard](_img/pin-chart-to-a-dashboard.png)  

4.	Drag tiles or widgets to reorder their sequence on the dashboard.    

	Using Internet Explorer 10 or Internet Explorer 11, you can also tab to a tile and press Shift+L or Shift+R to move the selected tile to the left or to the right.

5.	Click a tile, widget, or link to open it. 



<a id="pin-items">  </a> 
### Add an item or a chart to your dashboard 

You add an item to a dashboard from the code, work, and build pages. 

First, make sure you have the team context selected from the Queries page to which you want to add a query or chart. 

For example, select the context menu of a query that you want to add to the dashboard. This is the same as adding a query tile widget. 

![Add a shared query to a team dashboard](_img/add-to-dashboard-shared-query.png)  

And, you can add a chart to a team dashboard in a similar way.  

<img src="_img/add-to-dashboard-shared-query-chart.png" alt="Add a chart to a team dashboard" style="border: 2px solid #C3C3C3;" />  


<a id="edit-dashboard"></a>
## Add widgets to your dashboard

>[!NOTE]  
><b>Feature availability: </b>Dashboard edit mode controls shown appear from VSTS or TFS 2015.2 or later version. Some functionality differs when you connect to an application server running TFS 2015.1 or later version.   

### Add a widget  

Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify a dashboard. Click ![add a widget icon](_img/add-widget-icon.png) to add a widget to the dashboard.
  
> [!NOTE]  
> **Feature availability:**  From VSTS and TFS 2017 and later versions, you can drag and drop a widget from the catalog onto the dashboard. 

The [widget catalog](widget-catalog.md) describes all the available widgets, many of which are scoped to the selected team context.  

 

### Configure a widget  
After you add the widget, you may need to configure it. For example, to configure the Query tile widget, click the ![Configure widget icon](_img/icons/configure-icon.png) or the ![Actions icon](_img/icons/actions-icon.png) to open the configuration dialog.

![Query tile unconfigured widget](_img/widget-query-tile-unconfigured.png)

And then select the query and specify any rules you want. (For TFS 2015.1 and later versions, you can only specify the green and red flag limits.)  

#### Configuration dialog for query tile  

<img src="_img/dashboards-query-tile-config-ts.png" alt="Query tile configuration dialog" style="border: 2px solid #C3C3C3;" />  

--> 
