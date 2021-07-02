---
title: Scaled Agile Framework (SAFe®) and Azure Boards  
titleSuffix: Azure Boards
description: Understand how Scaled Agile Framework concepts map to Azure Boards artifacts
ms.technology: devops-agile
ms.prod: devops
ms.author: kaelli
author: KathrynEE
ms.topic: tutorial
monikerRange: '>= tfs-2013'
ms.date: 05/28/2020
---


# How SAFe&reg; concepts map to Azure Boards artifacts 

[!INCLUDE [temp](../includes/version-azure-boards-plus-azure-devops-server-2020.md)]

<!--- Intro To be provided --> 

If you're interested in using SAFe, you can configure your Azure Boards project to track SAFe® deliverables. Just as Azure Boards supports Scrum and Agile practices, it can support SAFe® and large numbers of teams to work together on Epics that span releases. 

This tutorial illustrates how the following SAFe® artifacts map to specific Azure Boards artifacts. 

>[!div class="checklist"]  
> * SAFe® Agile, program, and portfolio teams  
> * SAFe® deliverables such as epics, features, and stories  
> * SAFe® Product, program, and portfolio views  
> * SAFe® Release trains, sprints, and other timeboxes  
> * SAFe® Iteration goals and objectives 
> * SAFe® Value streams and budgets  
> * SAFe® Portfolio Vision and Strategic Themes  
> * SAFe® Roadmaps  
> * SAFe® Milestones and events  
> * SAFe® Retrospectives and reviews  

For an overview of how Azure Boards implements Scrum and Kanban, see [About Sprints, Scrum and project management](../sprints/scrum-overview.md) and [About Boards and Kanban](../boards/kanban-overview.md).


[!INCLUDE [temp](../includes/note-safe-articles.md)]

The following image illustrates how you can configure Azure Boards to support a three-level team hierarchy and map teams to their respective area and iteration paths. The examples build from the [Agile process](../work-items/guidance/agile-process.md), However, the changes can be applied to any project and process hosted on Azure Boards.

![Agile tool structure to support SAFe®](media/safe-objects-map-to-vso-objects.png)  

Examples provided below illustrate how a three-level team hierarchy is configured using hierarchical area paths. The examples build from the [Agile process](../work-items/guidance/agile-process.md), However, you can apply these changes to any project hosted on Azure Boards.

<a id="teams" />    


## Agile feature, program, and portfolio teams 

Azure Boards supports each team to have its own view their work. By configuring a hierarchical team structure, each team can focus on their work, and have their work roll up to the next level within the team hierarchy.   

![SAFe® roles map to a hierarchy of teams](media/safe/portfolio-programs-teams-area-paths-mapping.png)

To support SAFe® teams, you reconfigure the default team as the Portfolio team to manage your epics. You then create sub-teams for program-level work and team-level work. Work can be tracked across teams and throughout each of the levels.



<a id="work-items" />

## Stories, Features, Epics, Enablers, and Capabilities  

All work and deliverables are captured in work items. Each work item is associated with a specific work item type with a predefined workflow. Each Azure Boards process provides support for specific  work item types which you can use to track any of the SAFe® deliverables. 

The work item types available to you are based on the [process used when your project was created](../../boards/work-items/guidance/choose-process.md)&mdash;Agile, Basic, Scrum, or CMMI&mdash;as illustrated in the following images.  

[!INCLUDE [temp](../includes/work-item-types.md)]

The items in your backlog may be called *User Stories* (Agile) *Issues* (Basic), *Product backlog items* (Scrum), or *Requirements* (CMMI). All four are similar: they describe the customer value to be delivered and the work to be performed.   

You can track Enablers using User Stories or Features, and Capabilities using Features or Epics. Or, you if you have specific tracking and reporting needs, you can add custom work item types to track these types of deliverables. For more information, see [Customize Azure Boards, Add custom work item types](safe-customize.md#customize-wits).  

Work items provide support for the following tasks: 
- Add description and acceptance criteria
- Assign to a team or area path and to a project member
- Update status and assign to an iteration or sprint
- Link work items, attach files, add tags 
- Add comments and view a discussion thread

Product and portfolio backlogs enable teams to quickly add and prioritize their User Stories, Features, and Epics. For more information about work items and work item types, see [Track work with user stories, issues, bugs, features, and epics](../work-items/about-work-items.md).  

<a id="backlogs-boards" />

## Team backlogs and boards

SAFe® backlogs map to team, program, and portfolio backlogs. Out of the box, the Agile process supports User Story, Feature, and Epic backlog levels. The hierarchical backlog structure shows work done to support Features and User Stories in the progress of an Epic.  

![Hierarchical backlog: epics, features, and stories](media/safe/epic-feature-story-mapping.png)

You can customize your backlog and boards, even adding portfolio backlogs, as described in [Customize Azure Boards, Customize backlogs](safe-customize.md#custom-backlog).  

The Kanban board view of each backlog is configurable by each team. 





<a id="iterations" />

## PIs, releases, and sprints  

SAFe® Release Trains, Releases, Iterations, Program Increments (PIs), and Sprints map easily to your iteration paths. By sharing iterations across the team hierarchy, you manage the releases in a cohesive manner. 

![SAFe® release trains map to iterations](media/safe/iteration-mapping.png)  

Because epics can span several release trains, the Portfolio team isn't associated with any specific iterations. Program teams track their Feature deliverables, which ship with a PI. And Feature teams work in Sprints to complete several stories. Each team chooses which iterations will support them to track their focused set of deliverables.

![Teams track deliverables using iterations](media/safe/program-iterations.png) 


<a id="misc-artifacts" />

## Iteration goals and objectives 

SAFe® practices include Agile release teams defining their iteration goals and objectives. We recommend using the project wiki or team dashboards to capture team information. The project wiki and team dashboards both support markdown to add and format information. 

To learn more, see [Share information](#share-information) later in this article. 


<a id="tags" />

## Value streams and budgets 
 
You can use tags for a quick and easy way to map Features and Epics to their Value Streams, Strategic Themes, and associated Budgets. You can add custom fields to capture budget estimates for Features which can then roll up to Epics. 

![Tags can track value streams or associated budgets](media/safe/epic-value-area-tags.png)  

With tags that you add to work items, you can:

- Filter any backlog or Kanban board
- Create queries based on tags, and filter query results by tags
- Create progress and trend charts or reports based on tags 

For a more robust mapping of work to architecture or business features, you can specify the Value Area for each Epic, Feature, or Story.  

![Value Area tracks Business or Architectural work](media/safe/value-area-mapping.png)  

With rollup, you can get Budget Estimates for Epics from a rollup of the estimates defined to their child Features, as shown in the following image. 

> [!div class="mx-imgBorder"]
> ![Budget estimate rollup](media/safe/budget-estimate-rollup.png)

To add custom fields, see [Customize Azure Boards, Add a custom field](safe-customize.md#add-custom-field). 

<a id="wiki" />

## Portfolio Vision, Strategic Themes

Information can be widely shared with an organization using the Azure DevOps project wiki. The wiki is a similar to a git repository that supports adding and editing pages using markdown and a WYSIWYG editor. It versions each page so that it is easy to track who made changes and recover past versions.   

Use your project wiki to support sharing the following SAFe® artifacts: 

- Portfolio Vision
- Strategic Themes 
- Taxonomy 
- Goals
- Objectives
- Customer-centric practices 

To learn more about the project wiki, see [Share information](#share-information) later in this article. 


<a id="milestones" />

## Milestones and key events  

The end of each Program Increment, Sprint, Release Train, or Innovation and Planning (IP) Iteration represent natural SAFe® milestones. Many milestones are associated with specific ceremonies or practices, such as conducting retrospectives or demonstrating working software. 

In Azure Boards, you can track other types of milestones or key events in the following ways. 

- Custom field, such as Milestone or Release field with predefined picklist 
- As a tag added to work items 
- As a work item that specifies a target date 
- As a one-day Iteration Path 

With custom fields and tags, you can quickly filter backlogs, boards, and queries based on a specific milestone. 

<a id="shared-services" />

## Shared services team structure

Resources that are shared across teams can be represented through their own Agile feature team, such as a UX Design team or a Security Compliance team. They can manage their backlog while having their work also appear in the backlogs of the teams they support. 

Here we show how area paths are assigned to the UX Design team, and then selective sub-area paths to other Agile teams. Work items that appear on shared area paths appear on the backlogs and boards of the associated teams. 

> [!div class="mx-imgBorder"]
> ![Shared services area path and team structure](media/safe/shared-services-team-structure.png)


<a id="retrospectives" />

## Retrospectives and reviews

To support teams performing retrospectives and reviews, we recommend using the [Retrospectives extension by Microsoft DevLabs](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives). 

> [!div class="mx-imgBorder"]
> ![Retrospective board](media/safe/retrospective-board.png)


This extension allows teams to create their own retrospective boards and capture the following tasks: 
- Collect feedback on project milestones
- Organize and prioritize that feedback
- Create and track actionable tasks to help each team in their improvement processes.
 
<a id="share-information" />

## Share information   

Azure Boards provides a number of ways to share information. 

- Work item forms provide rich-text fields to capture descriptions, acceptance criteria and more. File attachments can be added to work items or links to network file shares. 
- Project and team dashboards can be used to share information as well as status and progress charts and widgets. To learn more, see [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md). 
- The Project wiki provides a central repository with versioning control built-in to share information with all project members. Additional wikis can be created as needed. To learn more, see [About Wikis, READMEs, and Markdown](../../project/wiki/about-readme-wiki.md). 

For details on supported Markdown features, see the following articles.  
- [Syntax guidance for Markdown usage in Wiki](../../project/wiki/wiki-markdown-guidance.md)
- [Syntax guidance for basic Markdown usage](../../project/wiki/markdown-guidance.md)

## Try this next

> [!div class="nextstepaction"]
> [Configure Azure Boards to support SAFe®](safe-configure-boards.md)

<a id="related-articles" /> 


## Related articles

- [Agile process](../work-items/guidance/agile-process.md)
- [Scrum process](../work-items/guidance/scrum-process.md)
- [CMMI](../work-items/guidance/cmmi-process.md) 
- [View SAFe® progress, roadmaps, and metrics](safe-review-roadmaps-progress.md)

### Culture and scale

- [Agile culture](agile-culture.md)  
- [Practices that scale](practices-that-scale.md)  
- [Scale Agile to Large Teams](/devops/plan/scaling-agile)



<!---

::: moniker range="<= tfs-2018"

![SAFe® roles map to a hierarchy of teams](media/safe-roles-to-vso-roles.png)  

![Hierarchical backlog: epics, features, and stories](media/safe-epics-to-stories-value-area.png)

![SAFe® release trains map to iterations](media/safe-release-trains-map.png)  

![Teams track deliverables using iterations](media/safe-teams-track-deliverables.png)  


![Tags can track value streams or associated budgets](media/save-epics-value-stream-tags.png)    


![Value Area tracks Business or Architectural work](media/safe-epic-to-stories-map-to-value-area.png)    

::: moniker-end


::: moniker range="<= tfs-2018"

> [!NOTE]  
> The [Retrospectives extension by Microsoft DevLabs](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.team-retrospectives) is supported on TFS 2018 and later versions. 

::: moniker-end


::: moniker range="<= tfs-2018"
> [!NOTE]  
> The Project Wiki is available with TFS 2018 and later versions. 
::: moniker-end

-->
