---
title: Scaled Agile Framework®
titleSuffix: Azure Boards
description: How to implement the Scaled Agile Framework® to support epics, release trains, and multiple backlogs in Azure Boards 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: C8E9CFD2-F08A-4FB8-AC53-B9B6B49A22A3
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 05/28/2020
---



# Implement Scaled Agile Framework&reg; 

[!INCLUDE [temp](../includes/version-azure-boards-plus-azure-devops-server-2020.md)]

With many enterprises benefiting from individual Agile teams, greater interest grows to scale Agile practices as the organization grows. The need for enterprises to view progress of many Agile teams and across a portfolio  continues to increase. To address these needs, many businesses have adopted the Scaled Agile Framework&reg; (SAFe&reg;). 

If you're familiar with Scrum but not familiar with SAFe®, [these videos at Scaled Agile](https://www.scaledagileframework.com/videos-and-presentations/) are a good way to orient yourself.  

Azure Boards supports SAFe® practices through its autonomous teams, backlogs, boards, reports, and metrics. This article introduces you to how Azure Boards artifacts support SAFe practices and artifacts.  
>[!div class="checklist"]  
> * The Scaled Agile Framework®
> * Essential SAFe®
> * Portfolio SAFe®
> * Large Solution SAFe®
> * Quick reference mapping
> * Azure Boards implementation of SAFe®

[!INCLUDE [temp](../includes/note-safe-articles.md)]

## The Scaled Agile Framework®

The SAFe® addresses how a portfolio vision is met by a hierarchy of teams, all concerned with specific objectives. This framework breaks down Epics into Features and Stories, which teams work on in Sprints and deliver through Program Increments (PIs) and Release Trains. Additionally, the portfolio backlog can track deliverables that map to value streams and associated budgets.  

### SAFe® architectural overview version 5.0 

[![SAFe® architectural overview version 5 &copy; D. Leffingwell](media/safe/safe-concepts-poster-v5.0-a.png)](https://www.scaledagileframework.com/)  

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](https://www.scaledagile.com/). All rights reserved.  

SAFe® and Scaled Agile Framework are registered trademarks of [Scaled Agile Inc.](http://www.scaledagile.com/) 

### SAFe® 5.0 Business Agility 

Many SAFe® practices include growing a culture that supports agility, alignment, and autonomy, all while being customer-centric. 

[![SAFe® overview 5.0 &copy; D. Leffingwell](media/safe/safe-overview-v5.0.png)](https://www.scaledagileframework.com/) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

Some of the ways Azure Boards supports business agility and agile culture are discussed in the following articles: 
- [Agile culture](agile-culture.md)
- [Practices that scale](practices-that-scale.md)

## Essential SAFe®

Essential SAFe&reg; requires support for the artifacts and practices illustrated in the following poster. 

[![Essential SAFe® poster architectural overview &copy; D. Leffingwell](media/safe/essential-poster.png)](https://www.scaledagileframework.com/) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  
 
All of these artifacts and practices are supported by Azure Boards. 

- **Stories, Features**, and **Enablers**: Implemented as work items that capture information and status of work. These work items automatically appear on team backlogs and Kanban boards. 
- **Team Backlogs** and **Program Backlogs**: Implemented as team backlogs that filter work items assigned to a team and support prioritizing and grouping of work.  
- **Scrum** and **Kanban**: Practices that are fully supported using Kanban boards, Sprint backlogs and Taskboards, teams, and sprint cadences. 
- **Iterations**, **Innovation and Planning (IP) Iteration**, **Program Increments (PI)**, **Milestones**, and **Release Trains**: Implemented via a flat-list or a hierarchical configuration of Iteration Paths. 
- **Agile Release Train**: Implemented by a set of Agile teams and Program teams configured to support specific team and program views. 
- **PI Objectives**, **Team Goals**, and  **Solution context**: Teams can use the built-in project wiki to share objectives, goals, customer information, and solution requirements.   

For an overview of how Azure Boards implements Scrum and Kanban, see [About Sprints, Scrum, and project management](../sprints/scrum-overview.md) and [About Boards and Kanban](../boards/kanban-overview.md).


## Portfolio SAFe®

Portfolio SAFe® adds support for managing portfolios through epics, enablers, and value streams.  

[![Portfolio SAFe® poster architectural overview &copy; D. Leffingwell](media/safe/portfolio-safe-poster.png)](https://www.scaledagileframework.com/) 

Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

Azure Boards provides supports for the following portfolio components:

- **Epics**: Map to the Epic work item type and allow tracking, grouping, and rollup of child items. 
- **Portfolio backlogs**: Implemented as a portfolio backlog that supports filtering of work based on review of business needs.  
- **Portfolio Vision** and **Strategic Themes**: Business owners and portfolio managers can use the built-in project wiki to share their vision, objectives, and goals. 
- **Value Streams**: Value streams can be tracked using tags or custom fields. 
- **Lean budgets**: Budget information can be captured in custom fields and rolled up to gain visibility to the Feature and Epic levels. 
- **KPIs**: Several reports and dashboard widgets provide out-of-the box metrics. Power BI and the Analytics service provide support to create custom reports quickly. 

## Large Solution SAFe®

Large Solutions SAFe® includes support for a Solution Backlog, Solution Trains, and Capabilities.   

[![Large Solution SAFe® poster architectural overview &copy; D. Leffingwell](media/safe/large-solution-poster.png)](https://www.scaledagileframework.com/)   
Reproduced with permission from &#169; 2011-2020  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

You can implement large solutions in much the same way as you implement Portfolio SAFe®. However, you can also add custom work item types and custom backlogs to support additional solution requirements.       


### Full SAFe® 

Full SAFe® includes the three levels of Essential SAFe®, Large Solution SAFe®, and Portfolio SAFe®. 

[![Full SAFe® poster architectural overview &copy; D. Leffingwell](media/safe/safe-concepts-poster-v5.0-a.png)](https://www.scaledagileframework.com/) 


## How SAFe® artifacts map to Azure Boards  

The following table maps SAFe® terms or artifacts to the equivalent Azure Boards term or artifact. Choose the link to learn about implementation details. 

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
      [**Teams**](safe-concepts.md#teams). You define a hierarchy of teams to meet the needs of feature or development teams, program and portfolio teams, or solution train teams. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Agile Release Train (ART) 
   :::column-end:::
   :::column span="3":::
       [**Teams**](safe-concepts.md#teams). Agile teams manage the work of deliverables for a set of Features. Each Agile team has a [set of Agile tools](../../organizations/settings/about-teams-and-settings.md) to support the flow of work and review progress and deliverables. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Budgets
   :::column-end:::
   :::column span="3":::
      [**Tags, Value Area**](safe-concepts.md#tags). You can use tags or the *Value Area* field to track work associated with a specific budget or value stream. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Capabilities
   :::column-end:::
   :::column span="3":::
      [**Work item**](safe-concepts.md#work-items). You define, plan, and track Capabilities similar to Epics and Features. You capture them in work items and within various team backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Enablers
   :::column-end:::
   :::column span="3":::
      [**Work item**](safe-concepts.md#work-items). You define, plan, and track Enablers similar to Epics, Features, and Stories. You capture them in work items and within various team backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Epics
   :::column-end:::
   :::column span="3":::
      [**Epic work item**](safe-concepts.md#work-items). You define an Epic using the Epic work item type. Epics are at the top of the work item hierarchy of Epics, Features, and Stories.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Features
   :::column-end:::
   :::column span="3":::
      [**Feature work item**](safe-concepts.md#work-items). You define a Feature using the Feature work item type. Features are a container for a number of Stories and are represented in their own portfolio backlog.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Innovation and Planning (IP) Iteration 
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). You define Iteration Paths for a project and set their start and end dates. Each team subscribes to the iterations they work with. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Iteration 
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). You define Iteration Paths for a project and set their start and end dates. Each team subscribes to the iterations they work with.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Milestones
   :::column-end:::
   :::column span="3":::
      [**Milesones and key events**](safe-concepts.md#milestones). Milestones occur at the end of each iteration. Custom fields and tags can also be used to associate work with milestones and key events.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Backlog
   :::column-end:::
   :::column span="3":::
      [**Portfolio backlog**](safe-concepts.md#backlogs-boards). A portfolio backlog lists the Epics associated with a portfolio with the option to expand and display the child Features and Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Kanban
   :::column-end:::
   :::column span="3":::
      [**Portfolio Epics board**](safe-plan-track-boards.md#portfolio-team-board). The Portfolio team's board displays the Epics backlog as cards in an interactive, configurable, and filterable Kanban board.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Vision 
   :::column-end:::
   :::column span="3":::
      [**Wiki**](safe-concepts.md#wiki). Use the project wiki to share broadly within the organization information related to strategy, solutions, and how teams will collaborate to produce portfolio and program deliverables.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Backlog
   :::column-end:::
   :::column span="3":::
      [**Feature backlog**](safe-concepts.md#backlogs-boards). A Feature backlog lists the Features associated with a program with the option to expand and display the child Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Kanban
   :::column-end:::
   :::column span="3":::
      [**Program Features board**](safe-plan-track-boards.md#program-team-board). The Program board displays the Features backlog as cards in an interactive, configurable, and filterable Kanban board.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Increment (PI) Iteration Path
   :::column-end:::
   :::column span="3":::
      [**Iteration Path**](safe-concepts.md#iterations). Iteration Paths define a timebox for a project with start and end dates. Iteration Paths can be defined from one week to 12 weeks or longer.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Retrospectives and reviews 
   :::column-end:::
   :::column span="3":::
      [**Retrospectives**](safe-concepts.md#retrospectives). Each team can add a board to capture, prioritize, and create action items to support their improvement processes. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Roadmap
   :::column-end:::
   :::column span="3":::
      [**Delivery Plans, Feature Timeline**](safe-review-roadmaps-progress.md#roadmaps). Azure Boards provides configurable and interactive views to review roadmaps and team deliverables.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Shared Services
   :::column-end:::
   :::column span="3":::
      [**Shared services team structure**](safe-concepts.md#shared-services): Resources that are shared across teams can be represented through their own Agile feature team. Each can manage their backlog while having their work also appear in the backlogs of the teams they support.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Solutions
   :::column-end:::
   :::column span="3":::
      [**Solutions**](safe-customize.md#custom-wit): Solutions can be represented through a custom Solution work item type. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Solution Backlog
   :::column-end:::
   :::column span="3":::
      [**Solution portfolio backlog**](safe-customize.md#custom-backlog). You can define a custom work item type and portfolio backlog to capture special business requirements of large solutions, or use Epics and Epic portfolio backlogs to capture solutions. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Strategic Themes 
   :::column-end:::
   :::column span="3":::
      [**Wiki**](safe-concepts.md#wiki). Strategic Themes, similar to Portfolio Vision, can be captured in a project wiki.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Stories
   :::column-end:::
   :::column span="3":::
      [**User Story work item**](safe-concepts.md#work-items). User Stories capture the desired functionality to be delivered and are typically sized so as to be completed with a single iteration.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team Backlog
   :::column-end:::
   :::column span="3":::
      [**Stories backlog**](safe-concepts.md#backlogs-boards). The Stories backlog lists the User Stories assigned to the area path associated with the team.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team Kanban
   :::column-end:::
   :::column span="3":::
      [**Stories board**](safe-plan-track-boards.md#agile-team-board). The Stories board displays the Stories backlog as cards in an interactive, configurable, and filterable Kanban board.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Value Streams
   :::column-end:::
   :::column span="3":::
      [**Tags, Value Area**](safe-concepts.md#tags). You can use tags or the Value Area field to track work associated with a specific budget or value stream. 
   :::column-end:::
:::row-end:::



## Azure Boards implementation of SAFe® 

Each of the following articles within this suite of tutorials provide details on how you can configure, customize, and use Azure Boards to implement your SAFe® programs and projects.   

>[!div class="checklist"]  
> * [How SAFe® concepts map to Azure Boards artifacts](safe-concepts.md)  
> * [Configure Azure Boards to support SAFe®](safe-configure-boards.md )  
> * [Customize Azure Boards to support SAFe®](safe-customize.md)   
> * [Plan and track SAFe® programs and portfolios](safe-plan-track-boards.md) 
> * [View SAFe® progress, roadmaps, and metrics](safe-review-roadmaps-progress.md)  


## Try this next

> [!div class="nextstepaction"]
> [How SAFe&reg; concepts map to Azure Boards artifacts](safe-concepts.md)


## Related articles

- [Scale Agile to Large Teams](/devops/plan/scaling-agile)
- [Agile culture](agile-culture.md)
- [Practices that scale](practices-that-scale.md)
- [About Sprints, Scrum and project management](../sprints/scrum-overview.md)
- [About Boards and Kanban](../boards/kanban-overview.md) 
- [Scaled Agile Framework](http://scaledagileframework.com/): SAFe® resource site.  
- [SAFe® in 7 minutes](http://www.youtube.com/watch?feature=player_embedded&v=RXzurBazN-I): video from Inbar Oren, the Lean Samurai.
- [Scaling Agile and SAFe® Metrics with TFS](http://www.incyclesoftware.com/2014/08/scaling-agile-and-safe-metrics-with-tfs/): Blog post that illustrates a SQL Server report developed by InCycle to illustrate how TFS can be used to support scaled agile or SAFe.    

<!---
[Out of the box Reports (SQL Server Reporting Services)](../../report/sql-reports/reporting-services-reports.md): Summarizes the reports TFS provides to monitor progress and code quality.  
-->

### About the authors

Many thanks to the following contributors for their review and feedback to the current content. 

- Phillip Eng is a Senior Architect at Microsoft, Digital Pursuit and Guidance. 
- Hosam Kamel is a technology solution professional for Microsoft and ALM Ranger.
- Willy-Peter Schaub is a former program manager with the Visual Studio ALM Rangers at the Microsoft Canada Development Center. You can follow him on Twitter at [twitter.com/wpschaub](https://twitter.com/wpschaub).  


The articles in this series were updated from a previous white paper developed in collaboration with the following authors:  
 
- Gordon Beeming is a Software Developer at Derivco in the sunny city of Durban, South Africa. He spends most his time hacking away at the keyboard in Visual Studio or with his family relaxing. His blog is at [gordonbeeming.xyz](https://gordonbeeming.xyz/) and you can follow him on Twitter at [twitter.com/gordonbeeming](https://twitter.com/gordonbeeming).  
- Brian Blackman is a principal consultant with Microsoft Premier Developer, focusing on affecting ISV partners and Enterprises success in engineering and the marketplace. He has an MBA, and is a CSM, CSP, MCSD (C++), and MCTS and is a Visual Studio ALM Ranger. When he is not Ruck Mastering and contributing to Visual Studio ALM Ranger projects, he spends his time writing code, creating and delivering workshops, and consulting in various concentrations, especially helping organizations in their quest for business agility.  
- Gregg Boer is a principal program manager at Microsoft. Gregg is the product owner for the Agile management experience provided by Azure DevOps and on-premises TFS.
- Kathryn Elliott is a senior technical writer at Microsoft.  
- Susan Ferrell is a senior technical writer and a Visual Studio ALM Ranger.  
- Willy-Peter Schaub is a former program manager with the Visual Studio ALM Rangers at the Microsoft Canada Development Center. Since the mid-'80s, he has been striving for simplicity and maintainability in software engineering. You can follow him on Twitter at [twitter.com/wpschaub](https://twitter.com/wpschaub).  
- Special thanks to the following technical experts for reviewing this article: Mike Douglas (independent consultant, ALM Ranger), Richard Hundhausen (independent consultant, ALM Ranger) and Bill Heys (independent consultant, ALM Ranger).  





<!---
::: moniker range="<= tfs-2018" 

![SAFe® architectural overview &copy; D. Leffingwell](https://www.scaledagileframework.com/wp-content/uploads/2018/07/46BP-PORTFOLIO.png) 

### SAFe® 5.0 

![SAFe® overview 5.0 &copy; D. Leffingwell](media/safe/safe-overview-v5.0.png) 

Business Agility 
Enterprise Solution Delivery
Agile Product Delivery 

::: moniker-end

-->