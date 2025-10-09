---
title: Implement Scaled Agile Framework® (SAFe) in Azure Boards
titleSuffix: Azure Boards
description: How to implement the Scaled Agile Framework® to support epics, release trains, and multiple backlogs in Azure Boards. 
ms.service: azure-devops-boards
ms.assetid: C8E9CFD2-F08A-4FB8-AC53-B9B6B49A22A3
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---


# Implement Scaled Agile Framework&reg; in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Many organizations use individual Agile teams; as they grow, they often need to scale Agile practices across programs and portfolios. To meet those needs, many businesses adopt the Scaled Agile Framework&reg; (SAFe&reg;).

If you're familiar with Scrum but not SAFe®, visit [SAFe Studio Framework](https://www.scaledagileframework.com).  

Azure Boards supports SAFe® practices through teams, backlogs, boards, reports, and metrics. This article introduces how Azure Boards artifacts support SAFe practices and artifacts.  
>[!div class="checklist"]  
> * The Scaled Agile Framework®
> * Essential SAFe®
> * Portfolio SAFe®
> * Large Solution SAFe®
> * Quick reference mapping
> * Azure Boards implementation of SAFe®

[!INCLUDE [temp](../includes/note-safe-articles.md)]

## Scaled Agile Framework®

SAFe® describes how a portfolio vision maps to a hierarchy of teams that focus on specific goals. The framework breaks Epics into Features and Stories. Teams work on those items in sprints and deliver through Program Increments (PIs) and Release Trains. The portfolio backlog can track deliverables that map to value streams and budgets.  

### SAFe® architectural overview version 5.0 

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the SAFe architectural overview poster version 5.0.](media/safe/safe-concepts-poster-v5.0-a.png)  

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](https://www.scaledagile.com/). All rights reserved.  

SAFe® and Scaled Agile Framework are registered trademarks of [Scaled Agile Inc.](http://www.scaledagile.com/) 

### SAFe® 5.0 Business Agility 

SAFe® practices help organizations build a culture of agility, alignment, and autonomy while remaining customer-centric. 

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows SAFe overview version 5.0.](media/safe/safe-overview-v5.0.png) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

See these related articles for how Azure Boards supports business agility and agile culture:
- [Agile culture](agile-culture.md)
- [Practices that scale](practices-that-scale.md)

## Essential SAFe®

Essential SAFe&reg; requires support for the artifacts and practices shown in the following poster. 

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Essential SAFe poster architectural overview.](media/safe/essential-poster.png) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  
 
Azure Boards supports the following Essential SAFe artifacts and practices:

- Stories, Features, and Enablers: represent them as work items that capture details and status. Those work items appear automatically on team backlogs and boards. 
- Team and Program Backlogs: implement them as team backlogs that filter work items assigned to teams and support prioritization and grouping.  
- Scrum and Kanban: use boards, sprint backlogs, and taskboards to support those practices. 
- Iterations, IP Iteration, Program Increments (PI), Milestones, and Release Trains: model them with a flat-list or hierarchical configuration of Iteration Paths. 
- Agile Release Train: represent it as a set of Agile teams and program teams configured for the required team and program views. 
- PI Objectives, Team Goals, and Solution context: share objectives, goals, and solution information in the project wiki.   

For an overview of Scrum and Kanban in Azure Boards, see [About Sprints, Scrum, and project management](../sprints/scrum-overview.md) and [About Boards and Kanban](../boards/kanban-overview.md).

## Portfolio SAFe®

Portfolio SAFe® adds portfolio management through epics, enablers, and value streams.  

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Portfolio SAFe poster architectural overview.](media/safe/portfolio-safe-poster.png) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

Azure Boards provides the following portfolio capabilities:

- Epics: use the Epic work item to track and roll up child items. 
- Portfolio backlogs: use a portfolio backlog to review and filter Epics based on business needs.  
- Portfolio Vision and Strategic Themes: capture vision and objectives in the project wiki. 
- Value Streams: track them using tags or custom fields.
- Lean budgets: capture budget information in custom fields and roll it up to Feature and Epic levels. 
- KPIs: use built-in reports and dashboard widgets for common metrics; use Power BI and Analytics to create custom reports.

## Large Solution SAFe®

Large Solution SAFe® covers Solution Backlogs, Solution Trains, and Capabilities.   

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Large Solution SAFe poster architectural overview.](media/safe/large-solution-poster.png) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

You implement Large Solution SAFe similarly to Portfolio SAFe but you can also add custom work item types and custom backlogs to meet specific solution requirements.       


### Full SAFe® 

Full SAFe® includes Essential, Large Solution, and Portfolio levels.

> [!div class="mx-imgBorder"]  
> ![Screenshot that shows the Full SAFe poster architectural overview.](media/safe/safe-concepts-poster-v5.0-a.png) 


## How SAFe® artifacts map to Azure Boards  

The following table maps SAFe® terms and artifacts to equivalent Azure Boards terms and artifacts. Use the links to learn implementation details.

:::row:::
   :::column span="":::
      **SAFe® term or artifact**
   :::column-end:::
   :::column span="3":::
      **Azure Boards term or artifact** 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Agile teams
   :::column-end:::
   :::column span="3":::
      [**Teams**](safe-concepts.md#teams). Define a hierarchy of teams to support feature teams, program and portfolio teams, or solution train teams. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Agile Release Train (ART) 
   :::column-end:::
   :::column span="3":::
       [**Teams**](safe-concepts.md#teams). Agile teams manage deliverables for Features. Each Agile team has a [set of Agile tools](../../organizations/settings/about-teams-and-settings.md) to support flow and progress review. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Budgets
   :::column-end:::
   :::column span="3":::
      [**Tags, Value Area**](safe-concepts.md#tags). Use tags or the *Value Area* field to track work associated with a budget or value stream. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Capabilities
   :::column-end:::
   :::column span="3":::
      [**Work item**](safe-concepts.md#work-items). Define, plan, and track Capabilities like Epics and Features using work items and backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Enablers
   :::column-end:::
   :::column span="3":::
      [**Work item**](safe-concepts.md#work-items). Define and track Enablers as work items in team backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Epics
   :::column-end:::
   :::column span="3":::
      [**Epic work item**](safe-concepts.md#work-items). Use the Epic work item type at the top of the hierarchy to track large initiatives.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Features
   :::column-end:::
   :::column span="3":::
      [**Feature work item**](safe-concepts.md#work-items). Use Feature work items to group Stories and represent a portfolio backlog.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Innovation and Planning (IP) Iteration 
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). Define Iteration Paths and set their start and end dates. Teams subscribe to iterations they work with. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Iteration 
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). Define Iteration Paths for a project and set their start and end dates. Teams subscribe to the iterations they use.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Milestones
   :::column-end:::
   :::column span="3":::
      [**Milestones and key events**](safe-concepts.md#milestones). Use milestones at iteration boundaries; custom fields and tags can also associate work with specific events.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Backlog
   :::column-end:::
   :::column span="3":::
      [**Portfolio backlog**](safe-concepts.md#backlogs-boards). Use a portfolio backlog to list Epics with options to expand child Features and Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Kanban
   :::column-end:::
   :::column span="3":::
      [**Portfolio Epics board**](safe-plan-track-boards.md#portfolio-team-board). Use the Portfolio board to display Epics as interactive, filterable cards.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Vision 
   :::column-end:::
   :::column span="3":::
      [**Wiki**](safe-concepts.md#wiki). Use the project wiki to share strategy, solutions, and collaboration information across the organization.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Backlog
   :::column-end:::
   :::column span="3":::
      [**Feature backlog**](safe-concepts.md#backlogs-boards). Use a Feature backlog to list Features for a program and optionally expand child Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Kanban
   :::column-end:::
   :::column span="3":::
      [**Program Features board**](safe-plan-track-boards.md#program-team-board). Use the Program board to display Features as interactive, configurable, and filterable cards.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Increment (PI) Iteration Path
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). Use Iteration Paths to define timeboxes (one week to 12+ weeks) for planning. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Retrospectives and reviews 
   :::column-end:::
   :::column span="3":::
      [**Retrospectives**](safe-concepts.md#retrospectives). Add a board per team to capture, prioritize, and track improvement action items. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Roadmap
   :::column-end:::
   :::column span="3":::
      [**Delivery Plans, Feature Timeline**](safe-review-roadmaps-progress.md#roadmaps). Use Delivery Plans and Feature Timeline to review roadmaps and team deliverables.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Shared Services
   :::column-end:::
   :::column span="3":::
      [**Shared services team structure**](safe-concepts.md#shared-services): Represent shared resources with their own Agile teams so they can manage their backlog while appearing on the backlogs of teams they support.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Solutions
   :::column-end:::
   :::column span="3":::
      [**Solutions**](safe-customize.md#custom-wit): Represent large solutions with a custom Solution work item type if needed. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Solution Backlog
   :::column-end:::
   :::column span="3":::
      [**Solution portfolio backlog**](safe-customize.md#custom-backlog). Define a custom work item type and portfolio backlog to capture special requirements, or use Epics and Epic portfolio backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Strategic Themes 
   :::column-end:::
   :::column span="3":::
      [**Wiki**](safe-concepts.md#wiki). Capture Strategic Themes in the project wiki similar to Portfolio Vision.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Stories
   :::column-end:::
   :::column span="3":::
      [**User Story work item**](safe-concepts.md#work-items). Use User Stories to capture desired functionality; size them so teams can complete them in a single iteration.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team Backlog
   :::column-end:::
   :::column span="3":::
      [**Stories backlog**](safe-concepts.md#backlogs-boards). Use the Stories backlog to list User Stories assigned to the team's area path.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team Kanban
   :::column-end:::
   :::column span="3":::
      [**Stories board**](safe-plan-track-boards.md#agile-team-board). Use the Stories board to display Stories as interactive, configurable, and filterable cards.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Value Streams
   :::column-end:::
   :::column span="3":::
      [**Tags, Value Area**](safe-concepts.md#tags). Use tags or the Value Area field to track work associated with a specific value stream. 
   :::column-end:::
:::row-end:::



## Azure Boards implementation of SAFe® 

The following articles in this suite explain how to configure, customize, and use Azure Boards to implement SAFe® programs and projects.   

>[!div class="checklist"]  
> * [How SAFe® concepts map to Azure Boards artifacts](safe-concepts.md)  
> * [Configure Azure Boards to support SAFe®](safe-configure-boards.md )  
> * [Customize Azure Boards to support SAFe®](safe-customize.md)   
> * [Plan and track SAFe® programs and portfolios](safe-plan-track-boards.md) 
> * [View SAFe® progress, roadmaps, and metrics](safe-review-roadmaps-progress.md)  


## Next step

> [!div class="nextstepaction"]
> [How SAFe&reg; concepts map to Azure Boards artifacts](safe-concepts.md)

## Related content

- [Scale Agile to Large Teams](/devops/plan/scaling-agile)
- [Agile culture](agile-culture.md)
- [Practices that scale](practices-that-scale.md)
- [About Sprints, Scrum and project management](../sprints/scrum-overview.md)
- [About Boards and Kanban](../boards/kanban-overview.md) 
- [Scaled Agile Framework](http://scaledagileframework.com/)

