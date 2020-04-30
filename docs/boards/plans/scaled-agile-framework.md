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
- Gordon Beeming is a Software Developer at Derivco in the sunny city of Durban, South Africa. He spends most his time hacking away at the keyboard in Visual Studio or with his family relaxing. His blog is at [31og.com](http://31og.com) and you can follow him on Twitter at [twitter.com/gordonbeeming](http://twitter.com/gordonbeeming).  
- Brian Blackman is a principal consultant with Microsoft Premier Developer, focusing on affecting ISV partners and Enterprises success in engineering and the marketplace. He has an MBA, and is a CSM, CSP, MCSD (C++), and MCTS and is a Visual Studio ALM Ranger. When he is not Ruck Mastering and contributing to Visual Studio ALM Ranger projects, he spends his time writing code, creating and delivering workshops, and consulting in various concentrations, especially helping organizations in their quest for business agility.  
- Gregg Boer is a principal program manager at Microsoft. Gregg is the product owner for the Agile management experience provided by Azure DevOps and on-premises TFS.
- Kathryn Elliott is a senior technical writer at Microsoft.  
- Susan Ferrell is a senior technical writer and a Visual Studio ALM Ranger.  
- Willy-Peter Schaub is a program manager with the Visual Studio ALM Rangers at the Microsoft Canada Development Center. Since the mid-'80s, he has been striving for simplicity and maintainability in software engineering. You can follow him on Twitter at [twitter.com/wpschaub](https://twitter.com/wpschaub).  
- Special thanks to the following technical experts for reviewing this article: Mike Douglas (independent consultant, ALM Ranger), Richard Hundhausen (independent consultant, ALM Ranger) and Bill Heys (independent consultant, ALM Ranger), Hosam Kamel (technology solution professional for Microsoft and ALM Ranger).  


