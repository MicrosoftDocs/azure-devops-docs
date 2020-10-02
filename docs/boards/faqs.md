---
title: Azure Boards FAQs 
description: Answers to frequently asked questions about Azure Boards 
ms.technology: devops-agile
ms.assetid:  
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 02/07/2020
---

# Azure Boards FAQs 

[!INCLUDE [temp](includes/version-all.md)]
 

Find answers to frequently asked questions when using Azure Boards. For FAQs specific to Microsoft Excel integration to add or modify work items defined in Azure DevOps, see [FAQs: Work in Excel connected to Azure Boards](backlogs/office/faqs.md). 

You can view a list of features that are on our roadmap for Azure Boards from the [Features Timeline](/azure/devops/release-notes/features-timeline). 

To request a feature or up-vote a feature, go to our [Developer Community page](https://developercommunity.visualstudio.com/spaces/21/visual-studio-team-services.html?type=idea).
 

## Access and permissions

As a member of an Azure Boards project, you can use the majority of features to track work. Limitations to select features are based on the access level and security group to which a user is assigned. To learn more, see [Default permissions and access for Azure Boards](get-started/permissions-access-boards.md).

### Q: How can I provide access to non-contributors to view or modify work items?  

::: moniker range="azure-devops"

**A:** For private projects, you can grant access to an unlimited number of users by assigning them Stakeholder access. For public projects, anonymous users&mdash;ones who don't sign into the project&mdash;can view all work items. To learn more, see [About access levels](../organizations/security/access-levels.md) and [About public projects](../organizations/public/about-public-projects.md).

Also, if your organization uses Azure Active Directory to manage user access, you can [add external users to your organization](../organizations/accounts/add-external-user.md).
 
::: moniker-end

::: moniker range="< azure-devops"

**A:** You can grant access to an unlimited number of users by assigning them Stakeholder access. To learn more, see [About access levels](../organizations/security/access-levels.md).

::: moniker-end

### Q: How can I restrict viewing or modifying select work items?  

You can restrict access by setting permissions for an area path. To learn more, see the following articles: 
- [Set work tracking and plan permissions](../organizations/security/set-permissions-access-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
- [Grant or restrict permissions to select tasks](../organizations/security/restrict-access.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json) 

### Q: What client tools support work tracking with Azure Boards? 

**A:** See [Tools and clients that connect to Azure DevOps](../user-guide/tools.md).

## Work items and templates 

For an introduction to work items, see [About work items](work-items/about-work-items.md). To define work item templates to specify defaults for select fields, see [Use templates to add and update work items](backlogs/work-item-template.md).

### Q: Can a work item be assigned to several users or a user group? 

**A:** No. Work items can only be assigned to a single user. Also, that user must have been [added to a project or team](../organizations/security/add-users-team-project.md).  

### Q: What's the recommended method to group work? 

**A:** The main method to group work is to assign it to the same area path. Area paths are used to group work items by product, feature, or business areas and to support teams responsible for work assigned to those areas. In addition, you can group work under a parent work item using parent-child links, referred to as a hierarchical grouping. 

For a discussion of these two usages and the tools they support, see [Configuration and customization of Azure Boards, Area paths, product teams, and portfolio management](configure-customize.md#area-path).

[!INCLUDE [temp](includes/faq-milestone-marker.md)] 

### Q: How can I best track dependencies?

**A:** You can track dependencies between work items by linking them using a related or other link type. See [Link work items](backlogs/add-link.md) and [Linking, traceability, and managing dependencies](queries/link-work-items-support-traceability.md). 

If you are tracking dependencies across one or more organizations, you may want to use the [Dependency Tracker](extensions/dependency-tracker.md).


### Q: Can I copy a work item including its subtasks? 

::: moniker range="azure-devops"
**A:** Yes. Azure Boards (cloud service) now supports copying child work items when copying a work item. For details, see [Copy or clone work items](backlogs/copy-clone-work-items.md#copy-clone).  

::: moniker-end
::: moniker range="< azure-devops"

**A:** No. Cloning doesn't copy work item subtasks for on-premises deployments. 

Is this feature on the roadmap? Yes. In fact, it has been released on Azure Boards (cloud service).  

::: moniker-end

### Q: Can I create a work item template that creates links to other work items? 

**Example request**: *When creating a template, I would like the Parent User Story to be defaulted. There is not a pre-determined field in the template. Would/could this be under a user-defined selection?*

**A:** No, there is no native support for creating hierarchy templates. In particular, you can't specify a default parent work item. However, you may find a solution To creating child work items by installing one of the following Marketplace extensions:  
- [Work item form one click actions](https://marketplace.visualstudio.com/items?itemName=mohitbagra.witoneclickactions)  
- [1-Click Child-Links](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-child-links)  
- [1-Click Tasks](https://marketplace.visualstudio.com/items?itemName=ruifig.vsts-work-item-one-click-tasks)  

[!INCLUDE [temp](includes/faq-copy-clone.md)]


::: moniker range=">= azure-devops-2019"

## GitHub integration

Azure Boards integrates with GitHub. To learn more, see [Azure Boards & GitHub](github/index.md).


### Q: Can I specify the status when linking a work item to a GitHub commit or PR?

**A:** No. This feature isn't supported at this time. 

::: moniker-end 

## Backlogs and boards 

Each backlog and board represents a filtered list of work items based on area path and iteration path assignments. To understand how the filtering is applied, see [About teams and Agile tools, Team defaults referenced by backlogs and boards](../organizations/settings/about-teams-and-settings.md#team-defaults).

### Q: How do I add a backlog or board?  

**A:** To add a backlog or board, you add a team. Each team is configured with it's own set of it's own set of backlogs and boards as described in [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md). 

### Q: How do I migrate my existing backlog to Azure Boards?  

**A:** See [Azure Boards migration and integration](extensions/migrate-integrate.md).

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

[!INCLUDE [temp](includes/faq-critical-path.md)]


## Queries 

[!INCLUDE [temp](includes/faq-view-all-work-items.md)] 


## Configuration and customizations  

Configuration and customization of Azure Boards occurs at the project and team level. For an overview of what you can configure and customize to support your business needs, see [Configuration and customization of Azure Boards](configure-customize.md). 

[!INCLUDE [temp](includes/faq-picklists.md)] 

### Q: Can I add or rename a portfolio backlog?  

**A:** Yes. You can add up to a total of five portfolio backlogs. And, you can rename a portfolio backlog and add custom work item types to a portfolio backlog. 

To learn how, see [Customize your backlogs or boards (Inheritance process)](../organizations/settings/work/customize-process-backlogs-boards.md) or [Add a portfolio backlog level (On-premises XML process)](../reference/add-portfolio-backlogs.md).


### Q: Can sub hubs within Azure Boards be disabled? 

**A:** No. While you can disable an entire service, you can't disable individual pages within a service. To learn more, see [Turn a service on or off](../organizations/settings/set-services.md). 

### Q: Can I upload my own custom work item type icons?  

**Example request**: *When I create a new work item type, I get an option to choose an icon. The icon set is limited and doesn't support the icons that we would prefer for our use case. Is there a way to associate custom icon to new work item type?* 

**A:** No. Uploading your custom icons isn't a supported feature at this time. 

::: moniker range="azure-devops"

### Q: Is it possible to change the Azure DevOps brand? 

**A:** No. Branding changes aren't supported.  

::: moniker-end 



## Related articles

- [FAQs: Work in Excel connected to Azure Boards](backlogs/office/faqs.md)
- [Azure Boards extensions](extensions/index.md)
- [About teams and Agile tools](../organizations/settings/about-teams-and-settings.md)


*Have a question that didn't get answered? Feel free to ask it through one of the feedback links provided below.*