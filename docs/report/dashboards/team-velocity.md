---
title: View and configure team velocity based on Analytics data
titleSuffix: Azure DevOps Services 
description: Track team velocity across several sprints using the in-context Analytics report or velocity widget    
ms.custom: dashboards   
ms.technology: devops-analytics  
ms.prod: devops
ms.assetid: 31CBF001-CFF2-49CF-97A1-FDFFEFDDF3AB
ms.topic: tutorial
ms.reviewer: greggboe
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013' 
ms.date: 07/22/2019
---


# View or configure team velocity

[!INCLUDE [temp](../_shared/version-azure-devops-all.md)]

::: moniker range=">= azure-devops-2019" 

Teams track their velocity to help them determine how much work they can perform sprint-over-sprint. Velocity provides an indication of how much work a team can complete during a sprint based either on a count of work items completed or the sum of estimates made to Effort (PBIs), Story Points (user stories), or Size (requirements). There are two velocity charts: the in-context report you can view from a team backlog or Kanban board and the Velocity widget you can add to a dashboard. 

**Example: Velocity widget showing six sprints of velocity**  
![6 sprint velocity widget](_img/team-velocity-six-iterations.png) 

> [!NOTE]
> The Velocity widget is based on Analytics data. Analytics is generally available for Azure DevOps Services and in preview as an extension for Azure DevOps Server 2019. For TFS 2018 and earlier versions, you have access to the [velocity chart provided by the work tracking data store](#velocity-chart).

::: moniker-end  

::: moniker range="<= tfs-2018"

Velocity provides a useful metric for gaining insight into how much work your team can complete during a sprint cycle. Each team is associated with one and only one velocity chart.  

Velocity will vary depending on team capacity, sprint over sprint. However, over time, the velocity should indicate a reliable average that can be used to forecast the full backlog.  

**Example Velocity chart from the work tracking data store**  
![3 sprint velocity chart](_img/ALM_DS_Velocity_Chrt_S.png) 

::: moniker-end  

Once your team has completed a few sprints, they can use their velocity to [forecast](../../boards/sprints/forecast.md) how much of the backlog they can finish within upcoming sprints. For usage guidance, see [Velocity metrics and usage guidance](velocity-guidance.md).

[!INCLUDE [temp](../../boards/_shared/image-differences-with-wits.md)]  

Use this article to learn: 

::: moniker range="azure-devops" 

> [!div class="checklist"]
> * How to configure the Velocity widget (Analytics)
> * How to view the Velocity in-context report (Analytics) 
> * Required and recommended team activities to support velocity tracking      

::: moniker-end

::: moniker range="azure-devops-2019" 

> [!div class="checklist"] 
> * How to configure the Velocity widget (Analytics)
> * How to view the Velocity in-context report (work tracking data store) 
> * Required and recommended team activities to support velocity tracking   

::: moniker-end

::: moniker range="<= tfs-2018" 

> [!div class="checklist"] 
> * How to view the Velocity in-context report (work tracking data store) 
> * Required and recommended team activities to support velocity tracking   

::: moniker-end

[!INCLUDE [temp](../_shared/analytics-widgets-prerequisites.md)]


## Open your backlog from the web portal

::: moniker range=">= azure-devops-2019"

1. Check that you selected the right project, and select **Boards** > **Backlogs**. Then select the correct team from the team selector menu. 

	![Open Boards > Backlogs, for a team](/azure/devops/boards/sprints/_img/assign-items-sprint/open-work-backlogs-agile.png)

    To select another backlog, open the selector and then choose a different team or select the ![home icon](../../_img/icons/home-icon.png) **Browse all backlogs** option. Or, enter a keyword in the search box to filter the list of team backlogs for the project.

    > [!div class="mx-imgBorder"]  
    > ![Select another team](/azure/devops/boards/sprints/_img/assign-items-sprint/team-selector-backlogs-agile.png) 

1. To view the in-context reports for the product backlog, check that you selected **Stories** for Agile, **Issues** for Basic, **Backlog items** for Scrum, or **Requirements** for CMMI as the backlog level. Or

    > [!div class="mx-imgBorder"]  
    > ![Select product backlog level, Backlog items, Stories, or Requirements](/azure/devops/boards/sprints/_img/assign-items-sprint/select-product-backlog-agile.png) 

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

On your web browser, open your team's product backlog and select the team from the project and team selector. Then select **Work** > **Backlogs**. Select the product backlog, which is **Backlog items** for Scrum, **Stories** for Agile, or **Requirements** for CMMI. 

> [!div class="mx-imgBorder"]
> ![Open the Boards > Backlogs page](/azure/devops/boards/sprints/_img/assign-items-sprint/open-work-backlogs-standard.png) 

To select another team, open the project and team selector. Select a different team, or select the **Browse** option. 

> [!div class="mx-imgBorder"]  
> ![Select another team](/azure/devops/boards/sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png) 

::: moniker-end

::: moniker range="<= tfs-2015"

On your web browser, open your team's product backlog. Select **Boards** > **Backlogs**. 

![Boards > backlogs, TFS 2015, 2013 web portal](/azure/devops/boards/backlogs/_img/backlogs-boards-plans/open-backlog-tfs-2015.png)

::: moniker-end

<a id="velocity-chart">   </a>


## View the Velocity in-context report   

::: moniker range="azure-devops"

Velocity reports are available for each backlog level, both product and portfolio backlogs. Each report provides interactive controls to provide each user the view of interest to them.  

1. You open the Velocity report for your product or portfolio backlog by choosing **Analytics**. 

	> [!div class="mx-imgBorder"]  
	> ![Open Analytics](_img/cfd/analytics-summary-cfd-velocity.png)

1. To change to a different backlog, choose from the backlog selector.  
1. Next, choose **View full report** for Velocity.  

1. Use the interactive controls to choose the count or sum field and number of iterations. Choose **Custom iterations** to specify any number of iterations between 1 and 15. 

	Hover over a column area to show a summary of planned and completed work items. 

	For example, for the 07_2019 sprint, 131 items are planned.

	> [!div class="mx-imgBorder"]  
	> ![Open Velocity Analytics](_img/velocity/analytics-velocity-azure-devops.png)

	The selections you make are only set for you, and persist across sessions until you change them. 

1. To return to the Analytics summary, choose the ![ ](../../_img/icons/back-arrow.png) back arrow.

::: moniker-end

::: moniker range="azure-devops-2019"

1. From the web portal, open your product backlog.  

1. (1) Check that you have selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Boards, Backlogs, for a team](../../boards/sprints/_img/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the ![home-icon](../../_img/icons/home-icon.png) **Browse all backlogs** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]
	> ![Choose another team](../../boards/sprints/_img/assign-items-sprint/team-selector-backlogs-agile.png) 

	> [!TIP]    
	> Choose the ![ ](../../_img/icons/icon-favorite-star.png) star icon to favorite a team backlog. Favorited artifacts (![ ](../../_img/icons/icon-favorited.png) favorited icon) appear at the top of the team selector list. 

1. Check that you have selected **Backlog items** (for Scrum), **Stories** (for Agile), or **Requirements** (for CMMI) as the backlog level. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](../../boards/sprints/_img/assign-items-sprint/select-product-backlog-agile.png) 

2. Open the velocity chart.  

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](_img/velocity/velocity-forecast-open-chart-vert.png) 

	For charts to appear, your team must perform these activities: 
	- Select sprints for your team  
	- Assign backlog items to sprints   
	- Estimate backlog items by defining the Effort, Story Points, or Size.
 
3. The chart tracks your estimated backlog work (sum of Effort, Story Points, or Size) that your team has completed (green) in the previous sprints, or that are still in progress (blue).  

   As this chart shows, velocity will fluctuate from sprint-to-sprint for a variety of reasons. However, you can quickly determine the average velocity by averaging the values shown in green for each sprint. You can then plug the average into the Forecast tool.

   ![Web portal, Velocity chart showing seven sprints of in progress and completed work](_img/team-velocity-chart-web-7-iterations.png)  

   > [!NOTE]  
   > Work items based on the [Scrum process](../../boards/work-items/guidance/scrum-process.md) get counted in the chart once their State is set to Committed, whereas items based on the [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) processes get counted once their State is set to Active. This behavior is set through the [workflow states to category state mappings](../../boards/work-items/workflow-and-state-categories.md).
   ::: moniker-end



::: moniker range="<= tfs-2018"

1.	From the web portal, open the product backlog and then choose the velocity chart.  

	![Choose the velocity chart in the upper right area of the page](_img/velocity/velocity-forecast-open-chart.png)  

	For charts to appear, your team must perform these activities: 
	- Select sprints for your team  
	- Assign backlog items to sprints   
	- Estimate backlog items by defining the Effort, Story Points, or Size.
 
2.	The report tracks your estimated backlog work (sum of Effort, Story Points, or Size) that your team has completed (green) in the previous sprints, or that are still in progress (blue).  

	As this chart shows, velocity will fluctuate from sprint-to-sprint for a variety of reasons. However, you can quickly determine the average velocity by averaging the values shown in green for each sprint. You can then plug the average into the Forecast tool.

	![Web portal, Velocity chart showing seven sprints of in progress and completed work](_img/team-velocity-chart-web-7-iterations.png)  

	> [!NOTE]  
	> Work items based on the [Scrum process](../../boards/work-items/guidance/scrum-process.md) get counted in the chart once their State is set to Committed, whereas items based on the [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) processes get counted once their State is set to Active. This behavior is set through the [workflow states to category state mappings](../../boards/work-items/workflow-and-state-categories.md).
	
::: moniker-end



::: moniker range=">= azure-devops-2019" 

## Add the Velocity widget to your dashboard   

::: moniker-end

::: moniker range="azure-devops"

- If you haven't yet [added the Velocity widget to your dashboard](../add-widget-to-dashboard.md), do that now.  

::: moniker-end

::: moniker range="azure-devops-2019"

1. If you haven't yet [enabled or installed Analytics](analytics-extension.md)], do that now.    

1. If you haven't yet [added the Velocity widget to your dashboard](../add-widget-to-dashboard.md), do that now.  

::: moniker-end


<a id="configure-widget"></a>

::: moniker range=">= azure-devops-2019"

## Configure the Velocity widget    

You configure your velocity widget for a single team. If you want to view the velocity for several teams, then you must configure a portfolio management team which rolls up from several teams. To learn more about teams, see [Add teams](../../organizations/settings/add-teams.md).  

1. Choose the ![Actions icon](../_img/icons/actions-icon.png) actions icon and choose the Configure option to open the configuration dialog. 
	
	Modify the title, select the team, and then choose either the backlog level or work item type to track. Select whether you want to track a count of work items or a sum of a numeric field. The most common summed field is that of Effort, Story Points, or Size.     

	<img src="_img/team-velocity-config-dialog.png" alt="Configure dialog, Velocity widget" style="border: 2px solid #C3C3C3;" />    

1. Specify the number of sprints you want to view. The default is 6 and the maximum is 15.    

2. (Optional) Select the check boxes to show additional information for work completed later than planned for each sprint. 

	**Displayed planned work for iterations:** Check this box to
	display the amount of work planned for an iteration at the start of the iteration. 
	This is useful for comparing your planned work to actual deliverables.
	By default, the count of planned work begins as of the start date of the iteration. <br/> 
	
   - <b><i>Days past start date of iteration when planned work is final:</i></b>  Specify a number of days past the start date to count planned work. For example, if the first 2 days of an iteration are for planning, then you can enter "3", and planned work will be counted on the 3rd day. 
	
       For example, if the Iteration starts on 01/01/2018, and 3 backlog items are assigned to the iteration on 01/01/2018 end-of-day, then those 3 backlog item items will be considered as Planned. If your team doesn't complete planning until a few days into the iteration, then you can update the Days past start date of iteration when planned work is final.  

     > [!NOTE]
     > Work is considered Planned if it is assigned to the iteration as-of the Iteration Start Date.  <br/>

     <hr/>

     **Highlight work completed late:** Work items marked complete after the iteration end date are considered to be completed late and will show as light green. 
     This is useful for spotting a trend where work items are marked complete after the iteration is complete.

   - <b><i>Days past end date of iteration after which work is late:</i></b>  Specify a number of days past which a work item is considered late if it's status is still new or in progress.  

       For example, entering 3 days will give the team 3 days after the end of an iteration to mark work items complete or done, before they are considered late.

     > [!NOTE]  
     > A work item is considered late when the work item's Completed Date is later than End Date of the Iteration the work item is _currently_ assigned to.
     > 
     > It will take into account the value you enter for <i>Days past end date of iteration after which work is late<i>.  

3. Choose **Save** when done. The following image shows Velocity based on Story Points and 8 sprints of data. 
   
	<img src="_img/commerce-team-velocity-eight-iterations.png" alt="Example Velocity widget, 8 iterations" style="border: 2px solid #C3C3C3;" />  

::: moniker-end

[!INCLUDE [temp](../_shared/velocity-activities.md)] 

[!INCLUDE [temp](../_shared/add-teams.md)] 

## Try this next

> [!div class="nextstepaction"]
> [Velocity guidance](velocity-guidance.md)
