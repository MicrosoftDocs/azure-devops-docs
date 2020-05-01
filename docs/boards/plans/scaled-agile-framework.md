---
title: Scaled Agile Framework
titleSuffix: Azure Boards
description: How to implement the Scaled Agile Framework to support epics, release trains, and multiple backlogs in Azure Boards, Azure DevOps, & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: C8E9CFD2-F08A-4FB8-AC53-B9B6B49A22A3
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 05/01/2020
---



# Implement Scaled Agile Framework&reg; to support epics, release trains, and multiple backlogs  

[!INCLUDE [temp](../includes/version-vsts-tfs-all-versions.md)]

As enterprises are benefiting from individual agile teams, the question now is how do we scale these practices across teams and gain a portfolio view of the progress of agile teams throughout the enterprise? To address these needs, many businesses are using the Scaled Agile Framework&reg; (SAFe&reg;). 

If you're familiar with Scrum but not familiar with SAFe, [these videos at Scaled Agile Framework Foundations](http://scaledagileframework.com/foundations) from Inbar Oren, the Lean Samurai, are a good way to orient yourself.  

## The Scaled Agile Framework

The SAFe big picture addresses how a portfolio vision is met by a hierarchy of teams, all concerned with specific objectives. This framework breaks down epics into features and stories, which teams work on in Sprints and deliver through Program Increments (PIs) and Release Trains. Also, the portfolio backlog can track how deliverables map to value streams and associated budgets.  


::: moniker range=">= azure-devops-2019" 

![SAFe architectural overview &copy; D. Leffing..](media/safe-concepts-poster-v4.0.png) 

::: moniker-end

::: moniker range="<= tfs-2018" 

![SAFe architectural overview &copy; D. Leffing..](https://www.scaledagileframework.com/wp-content/uploads/2018/07/46BP-PORTFOLIO.png) 

::: moniker-end

Reproduced with permission from &#169; 2011-2016  [Scaled Agile Inc.](http://www.scaledagile.com/). All rights reserved.  

SAFe and Scaled Agile Framework are registered trademarks of [Scaled Agile Inc.](http://www.scaledagile.com/) 



## Azure Boards, Agile tools and SAFe support 

If you're interested in using SAFe, you can configure projects created with the [Scrum](../work-items/guidance/scrum-process.md), [Agile](../work-items/guidance/agile-process.md), or [CMMI](../work-items/guidance/cmmi-process.md) processes to track SAFe criteria. Moreover, just as Azure Boards supports Scrum and Agile practices, it can support SAFe and large numbers of teams to work together on epics that span releases. 

The following image illustrates how you can configure Azure Boards to support a three-level team hierarchy and map teams to their respective area and iteration paths. The examples build from the [Agile process](../work-items/guidance/agile-process.md), However, the changes can be applied to any project and process hosted on Azure Boards.

![Agiletool  structure to support SAFe](media/safe-objects-map-to-vso-objects.png)  


## SAFe

Essential SAFe

Portfolio 

Large Solution SAFe


Scale SAFe


Full SAFe 




## Implementation 

The following articles provide details on how SAFe concepts map to your Agile tools, how to plan and track SAFe projects using your Agile tools, and how to configure and customize Azure Boards to support SAFe.  

>[!div class="checklist"]  
> * [How SAFe&reg; concepts map to Azure Boards artifacts](safe-concepts.md) 
> * [How to plan and track SAFe® projects using Azure Boards](safe-plan-track-boards.md) 
> * [How to configure Azure Boards to support SAFe® practices](safe-configure-boards.md)

<!---
How to customize Azure Boards to support SAFe® practices
How to configure team dashboards to view SAFe® metrics
-->

## Quick reference mapping



:::row:::
   :::column span="":::
      **SAFe term or artifact**
   :::column-end:::
   :::column span="":::
      **Azure Boards term or artifact** 
   :::column-end:::
   :::column span="2":::
      **Notes**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Agile teams
   :::column-end:::
   :::column span="":::
      [Teams](safe-concepts.md#teams)
   :::column-end:::
   :::column span="2":::
      You define a hierarchy of teams to meet the needs of feature or development teams, program and portfolio teams, or solution train teams. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Budgets
   :::column-end:::
   :::column span="":::
      [Tags, Value Area](safe-concepts.md#tags) 
   :::column-end:::
   :::column span="2":::
      You can use tags or the *Value Area* field to track work associated with a specific budget or value stream. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Capabilities
   :::column-end:::
   :::column span="":::
      [Work item](safe-concepts.md#work-items)  
   :::column-end:::
   :::column span="2":::
      You define, plan, and track Capabilities similar to Epics, Features, and Stories. You capture them in work items and within various team backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Enablers
   :::column-end:::
   :::column span="":::
      [Work item](safe-concepts.md#work-items)  
   :::column-end:::
   :::column span="2":::
      You define, plan, and track Enablers similar to Epics, Features, and Stories. You capture them in work items and within various team backlogs. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Epics
   :::column-end:::
   :::column span="":::
      [Epic work item](safe-concepts.md#work-items)  
   :::column-end:::
   :::column span="2":::
      You define an Epic using the Epic work item type. Epics are at the top of the work item hierarchy of Epics, Features, and Stories.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Features
   :::column-end:::
   :::column span="":::
      [Feature work item](safe-concepts.md#work-items) 
   :::column-end:::
   :::column span="2":::
      You define a Feature using the Feature work item type. Features are a container for a number of Stories and are represented in their own portfolio backlog.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Innovation and Planning (IP) Iteration 
   :::column-end:::
   :::column span="":::
      [Iteration Path](safe-concepts.md#iterations)
   :::column-end:::
   :::column span="2":::
      You define Iteration Paths for a project and set their start and end dates. Each team subscribes to the iterations they work with.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Iteration 
   :::column-end:::
   :::column span="":::
      [Iteration Path](safe-concepts.md#iterations)
   :::column-end:::
   :::column span="2":::
      You define Iteration Paths for a project and set their start and end dates. Each team subscribes to the iterations they work with.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Milestones
   :::column-end:::
   :::column span="":::
      TBD
   :::column-end:::
   :::column span="2":::
      TBD 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Backlog
   :::column-end:::
   :::column span="":::
      [Portfolio backlog](safe-concepts.md#backlogs-boards)  
   :::column-end:::
   :::column span="2":::
      A portfolio backlog lists the epics associated with a portfolio with the option to expand and display the child Features and Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Kanban
   :::column-end:::
   :::column span="":::
      [Epic Board](safe-concepts.md#backlogs-boards)  
   :::column-end:::
   :::column span="2":::
      The Epics board displays Epics as cards that supports viisualizing and managing the flow of Epics and Features from concept to completion. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Portfolio Vision 
   :::column-end:::
   :::column span="":::
      [Wiki](safe-concepts.md#wiki)  
   :::column-end:::
   :::column span="2":::
      Use the project wiki to share broadly within the organization information related to strategy, solutions, and how teams will collaborate to produce portfolio and program deliverables.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Backlog
   :::column-end:::
   :::column span="":::
      [Feature backlog](safe-concepts.md#backlogs-boards)  
   :::column-end:::
   :::column span="2":::
      A Feature backlog lists the Features associated with a progream with the option to expand and display the child Stories.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Kanban
   :::column-end:::
   :::column span="":::
      [Features Board](safe-concepts.md#backlogs-boards)  
   :::column-end:::
   :::column span="2":::
      The Features board displays Features as cards that supports viisualizing and managing the flow of Features and Stories from concept to completion.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Program Increment (PI) 
   :::column-end:::
   :::column span="":::
      [Iteration Path](safe-capture.md#iterations)
   :::column-end:::
   :::column span="2":::
      Iteration Paths define a timebox for a project with start and end dates. Iteration Paths can be defined from one week to 12 weeks long. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Retrospectives and reviews 
   :::column-end:::
   :::column span="":::
      [Retrospectives](safe-concepts.md#retrospectives) 
   :::column-end:::
   :::column span="2":::
      Each team can add a board to capture, prioritize, and create action items to support their improvement processes. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Roadmap
   :::column-end:::
   :::column span="":::
      [Delivery Plans, Feature Timeline](safe-concepts.md#roadmap) 
   :::column-end:::
   :::column span="2":::
      TBD 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Shared Services
   :::column-end:::
   :::column span="":::
      TBD 
   :::column-end:::
   :::column span="2":::
      TBD 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Solution
   :::column-end:::
   :::column span="":::
      TBD 
   :::column-end:::
   :::column span="2":::
      TBD 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Strategic Themes 
   :::column-end:::
   :::column span="":::
      [Wiki](safe-concepts.md#wiki)  
   :::column-end:::
   :::column span="2":::
      Strategic Themes, similar to Portfolio Vision, can be captured in a project wiki.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Stories
   :::column-end:::
   :::column span="":::
      [User Story work item](safe-concepts.md#work-items) 
   :::column-end:::
   :::column span="2":::
      User Stories capture the desired functionality to be delivered and are typically sized so as to be completed with a single iteration.    
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Team Backlog
   :::column-end:::
   :::column span="":::
      [Stories backlog](safe-concepts.md#backlogs-boards)  
   :::column-end:::
   :::column span="2":::
      The Stories backlog lists the User Stories assigned to the area path associated with the team.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Value Streams
   :::column-end:::
   :::column span="":::
      [Tags, Value Area](safe-concepts.md#tags) 
   :::column-end:::
   :::column span="2":::
      You can use tags or the Value Area field to track work associated with a specific budget or value stream. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Weighted Shortest Job First (WSJF)
   :::column-end:::
   :::column span="":::
      [WSJF extension field](safe-customize.md#wsjf)
   :::column-end:::
   :::column span="2":::
      You can add the WSJF calculated field to work items to  compute and store WSJF. 
   :::column-end:::
:::row-end:::



## Try this next

> [!div class="nextstepaction"]
> [How SAFe&reg; concepts map to Azure Boards artifacts](safe-concepts.md)





## Resources

Resources mentioned earlier in this article and a few more are provided here for convenient reference.  
- SAFe enabled processes: Link to a download of the three Agile tool processes: [Scrum](../work-items/guidance/scrum-process.md), [Agile](../work-items/guidance/agile-process.md), and [CMMI](../work-items/guidance/cmmi-process.md).  

- [Scaled Agile Framework](http://scaledagileframework.com/): SAFe resource site.  
- [SAFe in 7 minutes](http://www.youtube.com/watch?feature=player_embedded&v=RXzurBazN-I): video from Inbar Oren, the Lean Samurai (also viewable from the [Scaled Agile Framework Foundations](http://scaledagileframework.com/foundations/)).
- [Scaling Agile and SAFe Metrics with TFS](http://www.incyclesoftware.com/2014/08/scaling-agile-and-safe-metrics-with-tfs/): Blog post that illustrates a SQL Server report developed by InCycle to illustrate how TFS can be used to support scaled agile or SAFe.  
- Agile Portfolio Management: Using TFS to support backlogs across multiple teams : white paper that shows how to configure TFS to support multiple teams and multiple backlogs.  
- [Support rollup of work and other fields](../../reference/xml/support-rollup-of-work-and-other-fields.md): Describes how to configure TFS to support rollup, the summed values of select fields for all child work items of a parent. Because TFS supports multiple levels of nesting, when you perform rollup, you want to make sure you don't double-count values.  
- [Out of the box Reports (SQL Server Reporting Services)](../../report/sql-reports/reporting-services-reports.md): Summarizes the reports TFS provides to monitor progress and code quality.  
- [Track your work when assigned to two or more teams](../sprints/set-capacity.md#track-capacity-per-team): Shows how a developer or tester can track work when they support more than one feature team.  

### About the authors

This article has been updated from the previous white paper developed in collaboration with the following authors:  
- Gordon Beeming is a Software Developer at Derivco in the sunny city of Durban, South Africa. He spends most his time hacking away at the keyboard in Visual Studio or with his family relaxing. His blog is at [31og.com](https://lazy-developer.xyz/) and you can follow him on Twitter at [twitter.com/gordonbeeming](http://twitter.com/gordonbeeming).  
- Brian Blackman is a principal consultant with Microsoft Premier Developer, focusing on affecting ISV partners and Enterprises success in engineering and the marketplace. He has an MBA, and is a CSM, CSP, MCSD (C++), and MCTS and is a Visual Studio ALM Ranger. When he is not Ruck Mastering and contributing to Visual Studio ALM Ranger projects, he spends his time writing code, creating and delivering workshops, and consulting in various concentrations, especially helping organizations in their quest for business agility.  
- Gregg Boer is a principal program manager at Microsoft. Gregg is the product owner for the Agile management experience provided by Azure DevOps and on-premises TFS.
- Kathryn Elliott is a senior technical writer at Microsoft.  
- Susan Ferrell is a senior technical writer and a Visual Studio ALM Ranger.  
- Willy-Peter Schaub is a former program manager with the Visual Studio ALM Rangers at the Microsoft Canada Development Center. Since the mid-'80s, he has been striving for simplicity and maintainability in software engineering. You can follow him on Twitter at [twitter.com/wpschaub](https://twitter.com/wpschaub).  
- Special thanks to the following technical experts for reviewing this article: Mike Douglas (independent consultant, ALM Ranger), Richard Hundhausen (independent consultant, ALM Ranger) and Bill Heys (independent consultant, ALM Ranger), Hosam Kamel (technology solution professional for Microsoft and ALM Ranger).  


