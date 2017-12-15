---
title: Add and manage team dashboards in VSTS & TFS  
description: View progress and gain quick access to code, builds, and work items by creating multiple team dashboards in Visual Studio Team Services (VSTS)  and Team Foundation Server (TFS)  
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: B080CEFA-4D94-44B2-99E3-0E3E85616D04  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 11/15/2017
---

# Add and manage dashboards

<b>VSTS | TFS 2018 | TFS 2017 | TFS 2015.1-2015.4</b>

Share progress and status with your team using configurable team dashboards. Dashboards provide easy-to-read, easy access, real-time information. At a glance, you can make informed decisions without having to drill down into other parts of your team project site. 

The Overview page provides access to a default team dashboard which you can customize by adding, removing, or rearranging the tiles. Each tile corresponds to a widget that provides access to one or more features or functions.   

> [!NOTE]   
> **Feature availability:** Multiple team dashboards and the [widget catalog](widget-catalog.md) are available from Visual Studio Team Services (VSTS) and from the web portal for TFS 2015.1 or later version. 
>
> If you connect to an on-premises TFS running TFS 2015 or earlier version, you don't have access to multiple team dashboards. Instead, your home page serves as a [single team dashboard](team-dashboard.md). For information on SharePoint dashboards, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md).  


Anyone with access to the team project, including [stakeholders](../../security/get-started-stakeholder.md), can view dashboards. However, only team admins can add or modify dashboards. 

If you need to add a team first, see [add teams and team members](../../work/scale/multiple-teams.md). 

## Connect to the web portal for your team project 

To add and manage dashboards, you connect to your team project using a [supported web browser](../../tfs-server/requirements.md#supported-browsers). If you don't have a team project yet, create one in [VSTS](../../accounts/create-account-msa-or-work-student.md) or set one up in an [on-premises TFS](../../accounts/create-team-project.md).  

Open a browser window and click the **Dashboards** hub. 

![Open the Dashboards hub](_img/dashboards-go-to.png) 

<!---The URL follows this pattern: 
- VSTS: ```https://{account name}.visualstudio.com/{project name}/_backlogs```  
- Team Foundation Server (on-premises): ```http://{server}:8080/tfs/DefaultCollection/{project name}/_backlogs```  
-->
If you don't see the team or team project you want, click the ![project icon](../../work/_img/icons/project-icon.png) project icon to [browse all team projects and teams](../../user-guide/account-home-pages.md).    

## Add and name your dashboard 

From the dashboards tab, click the ![plus icon](../../Work/_img/icons/green_plus_icon.png) and enter a dashboard name. 

![Add and name a dashboard](_img/dashboards-new-ts.png) 

If you don't see the ![plus icon](../../work/_img/icons/green_plus_icon.png), then you're not a team admin for the currently selected team. Either [switch the context to your team](../../teams/switch-team-context.md?toc=/vsts/report/toc.json&bc=/vsts/report/breadcrumb/toc.json), or request you be added as a [team admin](../../work/scale/add-team-administrator.md). 

With the dashboard selected, you can add [widgets and charts to the dashboard](add-widget-to-dashboard.md). Or, you can [add charts to a team dashboard from the Work, Build, or Test hubs](add-charts-to-dashboard.md).

<a id="manage">  </a> 
## Manage dashboards

>[!NOTE]  
>**Feature availability:**  You can  configure the auto-refresh setting for each dashboard on VSTS and for TFS 2015.2 and later versions. For VSTS and TFS 2017.1 and later versions, you can [set dashboard permissions](dashboard-permissions.md). 

You can rename, reorder, or delete a dashboard. Also, you can enable auto-refresh, and the dashboard will automatically update every 5 minutes.  

From VSTS and TFS 2017, you can also [manage dashboard permissions](dashboard-permissions.md).   

<!---
### VSTS, TFS 2017
-->
To manage dashboards, click the ![configure icon](_img/icons/configure-icon.png) wrench icon.

<img src="_img/dashboards-configure-ts.png" alt="Open manage dashboards dialog" style="border: 2px solid #C3C3C3;" />   


### Reorder and auto-refresh 

1. Drag and drop the dashboards into the sequence you want them to appear.  

	<img src="_img/manage-dashboards-ts.png" alt="Manage dashboards - VSTS" style="border: 2px solid #C3C3C3;" />  

2. Click ![delete icon](_img/icons/delete_icon.png) to delete a dashboard and then click Save.  

3. Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. 

 
<a id="permissions">  </a>
### Required permissions
 
If you don't see the ![plus icon](../../work/_img/icons/green_plus_icon.png), then you don't have permission to edit your team dashboards. In general, you need to be a team admin for the currently selected team to edit dashboards. Request your current team or project admin to add you as a [team admin](../../work/scale/add-team-administrator.md). 

If you work in VSTS, you can ask your team admin to change dashboard permissions to allow you and other team members to edit dashboards as described in [Set permissions](dashboard-permissions.md). 

## Move or delete a widget from a dashboard  

> [!NOTE]  
> Just as you have to be a team or project admin to add items to a dashboard, you must have admin permissions to remove items.  

Click ![Edit dashboard icon](_img/edit-dashboard-icon.png) to modify your dashboard. You can then drag tiles to reorder their sequence on the dashboard. 

To remove a widget, click the widget's ![Trash icon](_img/dashboard-trash-icon.png) or ![Delete icon](_img/dashboard-delete-icon.png) delete icons. 

When you're finished with your changes, click ![Exit edit-dashboard-mode icon](_img/exit-edit-dashboard-mode-icon.png) to exit dashboard editing.

<!---
### TFS 2015.1 - TFS 2015.3 

1. Click the ![gear icon](../../work/_img/icons/team-settings-gear-icon.png) gear icon to open manage dashboards.</p>  

	<img src="_img/dashboards-open-manage-dashboards-tfs.png" alt="Open manage dashboards dialog - TFS web portal" style="border: 2px solid #C3C3C3;" />  

2.  Drag and drop the dashboards into the sequence you want them to appear.  

	![Manage dashboards](_img/manage-dashboards.png)  

3. Click ![delete icon](../../work/_img/icons/delete-icon.png) to delete a dashboard and then click Done.   

4. Select the Auto-refresh checkbox when you want the dashboard to refresh every five minutes. 

	> [!NOTE]  
	> Feature availability: </b>The Auto-refresh feature is available from TFS 2015 Update 2 or later version.  </blockquote>  

-->

## Try this next 

As you can see, you can use team dashboards to provide guidance and keep your team in sync, providing visibility across the org as to status, trends, and progress. 

> [!div class="nextstepaction"]
> [Add a widget to a dashboard](add-widget-to-dashboard.md)


See these additional resources to help you support your team:  
- [Review the widget catalog](widget-catalog.md)
- [Review Marketplace widgets](https://marketplace.visualstudio.com/search?term=widget&target=VSTS&category=All%20categories&sortBy=Relevance)


### Extensibility 

Using the REST API service, you can [create a dashboard widget](../../extend/develop/add-dashboard-widget.md). To learn more about the REST APIs for dashboards and widgets, see [Dashboards (API)](https://www.visualstudio.com/docs/integrate/api/dashboard/overview).  


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

 
> [!TIP]   
> When you're in dashboard edit mode, you can remove, rearrange, and configure widgets, as well as add new widgets. Once you leave edit mode, the widget tiles remain locked, reducing the chances of accidentally moving a widget.  


### Configure a widget  
After you add the widget, you may need to configure it. For example, to configure the Query tile widget, click the ![Configure widget icon](_img/icons/configure-icon.png) or the ![Actions icon](_img/icons/actions-icon.png) to open the configuration dialog.

![Query tile unconfigured widget](_img/widget-query-tile-unconfigured.png)

And then select the query and specify any rules you want. (For TFS 2015.1 and later versions, you can only specify the green and red flag limits.)  

#### Configuration dialog for query tile  

<img src="_img/dashboards-query-tile-config-ts.png" alt="Query tile configuration dialog" style="border: 2px solid #C3C3C3;" />  

--> 




[!INCLUDE [temp](../_shared/help-support-shared.md)]  