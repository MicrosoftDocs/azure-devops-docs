---
title: Azure Boards FAQs 
titleSuffix: Azure Boards
description: Answers to frequently asked questions about Azure Boards 
ms.technology: devops-agile
ms.prod: devops
ms.assetid:  
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 02/04/2020
---

# Azure Boards FAQs 

[!INCLUDE [temp](includes/version-vsts-tfs-all-versions.md)]
 

Find answers to frequently asked questions when using Azure Boards. For FAQs specific to Microsoft Excel integration to add or modify work items defined in Azure DevOps, see [FAQs: Work in Excel connected to Azure Boards](backlogs/office/faqs.md). 

You can view a list of features that are on our roadmap for Azure Boards from the [Features Timeline](/azure/devops/release-notes/features-timeline). 

To request a feature or up-vote a feature, go to our [Developer Community page](https://developercommunity.visualstudio.com/spaces/21/visual-studio-team-services.html?type=idea).
 

## Work items and work item templates

### Q: Can a work item be assigned to several users or a user group? 

**A:** No. Work items can only be assigned to a single user. 

Is this feature on the roadmap? No, this isn't on the roadmap. 

<!---   

### Q: What's the recommended method to group work? 

**A:** 


### Q: How can I best track dependencies?

**A:** 
--> 


### Q: Can I copy a work item including its subtasks? 

**A:** No. Cloning doesn't copy work item subtasks.  

Is this feature on the roadmap? Yes. See [Roadmap Item 1666194: Clone work item including subtasks](https://dev.azure.com/mseng/AzureDevOpsRoadmap/_backlogs/backlog/Boards/Roadmap%20Items/?workitem=1666194)

### Q: Can I create a work item template that creates links to other work items? 

**Example request**: *When creating a template I would like the Parent User Story to be defaulted. There is not a pre-determined field in the template. Would/could this be under a user defined selection?*

**A:** No, there is no native support for creating hierarchy templates.  In particular, you can't specify a default parent work item. However, you may find a solution To creating child work items by installing one of the following Marketplace extensions:  
- [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)  
- [1-Click Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)  
- [1-Click Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks)  

## Backlogs and boards

### Q: How do the three types of backlogs&mdash;product, portfolio, and sprint backlogs&mdash;differ?

**A:** Each backlog lists a filtered set of work items based on the team's selected area path, iteration paths, and work item types.  
- **Product backlog**: By default lists User Stories (Agile), Issues (Basic), Product Backlog Items and Bugs (Scrum), or Requirements (CMMI). Provides options to show **Parents**, **Forecast**, and **In Progress** or **Completed** child items.  
- **Portfolio backlog**: By default lists Features (all process models) for the Features backlog, and Epics (Agile, Scrum, and CMMI) for the Epic backlog. Provides options to show **Parents** and **In Progress** or **Completed** child items. 
- **Sprint backlog**: By default lists all product backlog items assigned to the selected iteration, regardless of status. Provides options to show **Work details**.   

To learn more, see [Tasks supported by Backlogs, Boards, Taskboards, and Plans](backlogs/backlogs-boards-plans.md).

### Q: How do I create a backlog or Kanban board? 

**A:** You create a backlog or Kanban board by adding a team. Each team gets their own backlog, Kanban board, sprint schedule with sprint backlogs and taskboards. Each team can customize these Agile tools. To learn more, see [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md). 

### Q: Can I define sprints and use with my Kanban board? 

**A:** Yes. You can assign sprints to work items and filter your Kanban board based on the iteration path. To learn more, see [Filter your Kanban board](boards/filter-kanban-board.md). 


<!--- 

### Q: How do I make H for hours or D for days appear on my Sprint backlogs and Taskboards? 

### Q: How do I migrate my existing backlog to Azure Boards?  

**A:** 

--> 

::: moniker range=">= azure-devops-2019"

## GitHub integration

Azure Boards integrates with GitHub. To learn more, see [Azure Boards & GitHub](github/index.md).


### Q: Can I specify the status when linking a work item to a GitHub commit or PR?

**A:** No. This feature is not supported at this time. 

::: moniker-end 

## Configuration and customizations  

### Q: What can I customize?  

**A:** Configuration and customization of Azure Boards occurs at the project and team level. For an overview of what you can configure and customize to support your business needs, see [Configuration and customization of Azure Boards](configure-customize.md). 


### Q: Can sub hubs within Azure Boards be disabled? 

**A:** No. While you can disable an entire service, you can't disable Individual pages within a service. To learn more, see [Turn a service on or off](../organizations/settings/set-services.md). 

### Q: Can I upload my own custom work item type icons?  

**Example request**: *When I create a new work item type I get an option to choose an icon, this icon set is limited and does not support the icons that we would prefer for our use case. Is there a way to associate custom icon to new work item type?* 

**A:** No. Uploading your custom icons isn't a supported feature at this time. 

::: moniker range="azure-devops"

### Q: Is it possible to change the Azure DevOps brand? 

**A:** No. Branding changes aren't supported.  

::: moniker-end 


<!--- 

## Integrations & extensions



-->

## Related articles

- [FAQs: Work in Excel connected to Azure Boards](backlogs/office/faqs.md)
- [Azure Boards extensions](extensions/index.md)
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md)

