---
title: Group/organize backlog items - define features and epics
titleSuffix: Azure Boards
description: Define features and epics to organize your product and portfolio backlogs  
ms.custom: "boards-backlogs, seodec18"    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 9B517FEE-14FA-41FA-87CD-99D33168D01E  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2015'
ms.date: 02/14/2019
---

# Define features and epics  

[!INCLUDE [temp](../_shared/version-vsts-tfs-2015-on.md)]


While many teams can work with a flat list of items, sometimes it helps to group related items into a hierarchical structure. 
Perhaps you like to start with a big picture and break it down into smaller deliverables. 
Or, you've got an existing backlog and now need to organize it.   

No matter your starting point, you can use portfolio backlogs to bring more order to your backlog. 
Use your backlogs to plan your project and to:  
*	Manage a portfolio of features that are supported by different development and management teams  
*	Group items into a release train  
*	Minimize size variability of your deliverables by breaking down a large feature into smaller backlog items     

Use this article to learn how to: 
>[!div class="checklist"]      
> * Determine what is a good feature or epic
> * View a backlog or portfolio backlog  
> * Add features and epics  
> * Add child items   

With portfolio backlogs you can quickly add and group items into a hierarchy, drill up or down within the hierarchy, reorder and reparent items, and filter hierarchical views. Portfolio backlogs are one of three classes of backlogs available to you. For an overview of the features supported on each backlog and the two types of boards, see [Backlogs, boards, and plans](backlogs-boards-plans.md). To learn how to track progress across teams, see [Visibility across teams](../plans/visibility-across-teams.md).     

[!INCLUDE [temp](../_shared/prerequisites.md)]

## What comprises a feature or epic?  

The epics and features that you create should reflect your business focus. As user stories or product backlog items roll up into features, and features roll up into epics&mdash;you'll want to name your features and epics with that in mind. 

A feature typically represents a shippable component of software. An epic represents a business initiative to be accomplished. Here are a few examples of each. 

**Features**
- Add view options to the new work hub 
- Add mobile shopping cart 
- Support text alerts
- Refresh the web portal with new look and feel 

**Epics**
- Increase customer engagement
- Improve and simplify the user experience
- Implement new architecture to improve performance 
- Engineer the application to support future growth
- Support integration with external services 
- Support mobile apps

[!INCLUDE [temp](../_shared/prerequisites.md)]

<a id="view-portfolio-backlog" />
## View a backlog or portfolio backlog 
To focus on one level of a backlog at a time, choose the name of the backlog you want to view. If you don't see all three backlog levels&mdash;
Epics, Features, and Backlog items&mdash;
you can [enable them for your team](../../organizations/settings/select-backlog-navigation-levels.md). 

For example, when you choose **Epics**, you'll see a list of all Epics in your team's active area paths. From there, you can drill down to see child features and backlog items.  

::: moniker range=">= azure-devops-2019"

0. (1) Check that you have selected the right project, (2) choose **Boards>Backlogs**, and then (3) select the correct team from the team selector menu. 

	![Open Work, Backlogs, for a team](../sprints/_img/assign-items-sprint/open-work-backlogs-agile.png)

	To choose another team, open the selector and select a different team or choose the ![home-icon](../../_img/icons/home-icon.png) **Browse all sprints** option. Or, you can enter a keyword in the search box to filter the list of team backlogs for the project.

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../sprints/_img/assign-items-sprint/team-selector-backlogs-agile.png) 

0. Choose the portfolio backlog that you want, **Features** or **Epics**. 

	> [!div class="mx-imgBorder"]  
	> ![Choose product backlog level, Backlog items, Stories, or Requirements](_img/features-epics/choose-features-epics-agile.png) 

0. (Optional) To choose which columns should display and in what order, choose the ![ ](../../_img/icons/actions-icon.png) actions icon and select **Column options**. You may want to add the Iteration Path to the set of columns that appear on your backlog. To learn more, see [Change column options](../backlogs/set-column-options.md). 

	> [!div class="mx-imgBorder"]  
	> ![Open Column Options](../sprints/_img/assign-items-sprint/open-work-backlogs-column-options-agile.png) 

::: moniker-end

::: moniker range="<= tfs-2018"

0. From your web browser, open your team's backlog. (1) Select the team from the project/team selector, choose (2) **Work**, (3) **Backlogs**, and then (4) the portfolio backlog of interest, which is **Features**  or **Epics**. 

	> [!div class="mx-imgBorder"]
	> ![Open the Boards>Backlogs>Features](_img/features-epics/open-features-epics.png) 

	To choose another team, open the project/team selector and select a different team or choose the **Browse** option. 

	> [!div class="mx-imgBorder"]  
	> ![Choose another team](../sprints/_img/assign-items-sprint/team-selector-backlogs-standard.png) 

0.	Choose **Epics** to see a list of all epics defined in your team's active area paths.  

	![Hierarchical view of backlogs](_img/org-backlog-epics-ts-new-nav.png) 

::: moniker-end


> [!TIP]  
> Each team can choose the backlog levels that are active as described in [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md).  


<a name="add-features-epics"></a>
<a name="add-features"></a>
## Add features and epics 
Just as you can [add items to your product backlog](create-your-backlog.md), you can add items to your features and epics backlogs. 

::: moniker range=">= azure-devops-2019"

0. To add a feature, choose the ![plus-icon](../../_img/icons/blue-add-icon.png)**New Work Item**, enter a title and then press the Enter key or choose **Add to top**. 

	> [!div class="mx-imgBorder"]
	> ![Add a product backlog item](_img/features-epics/add-new-items-agile.png) 

0. Repeat this step to capture all your ideas as work items.  

	Here, we've added six features.  

	> [!div class="mx-imgBorder"]
	> ![Add a feature](_img/features-epics/features-backlog-agile.png) 

	You can add epics in the same way. Simply open the **Epics** backlog from the backlogs selector.  

::: moniker-end


::: moniker range=">= tfs-2013 <= tfs-2018"

0. To add a feature, enter a title and choose **Add**. If you don't see the **Add** link, choose **New** to open the quick add panel. 

	> [!div class="mx-imgBorder"]
	> ![Add a feature](_img/features-epics/add-feature-standard.png) 

0. 	Repeat this step until you've captured all your main ideas. 

	Here, we've added six features.  

	![Features backlog](_img/org-backlog-features-ts-new-nav.png) 

::: moniker-end

## Add details to a feature or epic 

Open each item (double-click, or press Enter to open the selected item) and add all the info you want to track. Enter as much detail as the team needs to understand the scope, estimate the work required, develop tests, and ensure that the end product meets acceptance criteria.

[!INCLUDE [temp](../_shared/image-differences-with-wits.md)]  

> [!div class="mx-imgBorder"]  
> ![Feature work item form, Agile process, Add details to a feature](_img/features-epics/feature-work-item-form.png)
 
<table>
<tbody valign="top">
<tr>
<th width="20%">Field</th>
<th width="80%">Usage</th>
</tr>
<tr>
<td>
[Value Area](../queries/planning-ranking-priorities.md)
</td>
<td>The area of customer value addressed by the epic, feature, or backlog item. Values include:  
<ul>
<li><b>Architectural</b> &mdash;technical services to implement business features that deliver solution </li> 
<li><b>Business</b> (Default) &mdash;services that fulfill customers or stakeholder needs that directly deliver customer value to support the business </li>
</ul>
</td>
</tr>
<tr>
<td>
[Effort](../queries/query-numeric.md)<br/>
[Story Points](../queries/query-numeric.md)<br/>
[Size](../queries/query-numeric.md)
</td>
<td>
Provide a relative estimate of the amount of work required to complete a Feature or Epic. Use any numeric unit of measurement your team prefers. Some options are [story points, time, or other relative unit](create-your-backlog.md#estimates). 
</td>
</tr>

<tr>
<td>

[Business Value](../queries/query-numeric.md)
</td>
<td>
Specify a priority that captures the relative value of an Epic, Feature, or backlog item compared to other items of the same type. The higher the number, the greater the business value.<br />Use this field when you want to capture a priority separate from the changeable backlog stack ranking.

</td>
</tr>

<tr>
<td>
[Time Criticality](../queries/planning-ranking-priorities.md)
</td>
<td>
A subjective unit of measure that captures the how the business value decreases over time. Higher values indicate that the Epic or Feature is inherently more time critical than those items with lower values. 
</td>
</tr>
<tr>
	<td><p>[Target Date](../queries/query-by-date-or-current-iteration.md)</p></td>
	<td><p>Specify the date by which the feature should be implemented.</p></td></tr>

</tbody>
</table>


## Add child items
With your features defined, you're able to add child items to them. From any backlog, you can add child items. 
You can add features to epics, and backlog items to features. 

> [!TIP]  
> You can also add child user stories (Agile), or product backlog items (Scrum) or requirements (CMMI) from the Kanban board for Features. And, you can add child features from the Epic board. For details, see [Kanban board features and epics](../boards/kanban-epics-features-stories.md). Also, you can quickly parent or reparent children from a backlog using the mapping pane as described in [Organize your backlog, map child work items to parents](organize-backlog.md).


::: moniker range=">= azure-devops-2019"

To add a work item, choose the ![plus-icon](../../_img/icons/blue-add-icon.png) and choose from the options provided.

Here we add a product backlog item as a child to the Customer Web - Phase 1 feature. 

> [!div class="mx-imgBorder"]
> ![Add a product backlog item as a child to a feature](_img/features-epics/add-child-item-to-feature.png) 

Whenever you see the plus ![plus-icon](../../_img/icons/blue-add-icon.png), you can add a child item. The work item always corresponds to the hierarchy of work item types that are defined for your project.


::: moniker-end


::: moniker range="<= tfs-2018"

To add a work item, choose the ![plus icon](../_img/icons/green_plus_icon.png) and choose from the options provided.

Here we add a product backlog item as a child to the Customer Web - Phase 1 feature. 

![Add a child item to a backlog work item](_img/org-backlog-features-add-child-ts.png)

Whenever you see the plus ![plus icon](../_img/icons/green_plus_icon.png), you can add a child item. 
The work item always corresponds to the hierarchy of work item types that are defined for your project.   

::: moniker-end


For Scrum projects, your hierarchy is as shown: 

![Hierarchical view of backlogs](_img/ALM_OB_Scrum_WIT_Hier_C.png) 

Because [teams can also set bugs as tasks](../../organizations/settings/show-bugs-on-backlog.md), bugs can be added as children of PBIs. 

The work item types you'll see depends on the [process you selected to create your project](../work-items/guidance/choose-process.md). 

If you want bugs to show up on your backlog and you're not seeing them, [enable them for your team](../../organizations/settings/show-bugs-on-backlog.md). 


[!INCLUDE [temp](../_shared/add-portfolio-backlogs.md)]

## Try this next  

Portfolio backlogs are not only a great way to organize your project plan, but also a great way to provide visibility of project plans across enterprise teams. With portfolio backlogs, management teams can gain insight into project status across all their development teams. 

> [!div class="nextstepaction"]
> [Organize your backlog](organize-backlog.md)


## Related articles  

- [Product backlog controls](product-backlog-controls.md)
- [Filter product and portfolio backlogs](filter-backlogs.md)
- [Select backlog navigation levels for your team](../../organizations/settings/select-backlog-navigation-levels.md)   
- [Work with multi-team ownership of backlog items](backlogs-overview.md#multi-team)  
- [Product backlog controls](product-backlog-controls.md)
- [Backlog keyboard shortcuts](backlogs-keyboard-shortcuts.md)
