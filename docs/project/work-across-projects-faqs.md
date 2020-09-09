---
title: Work across projects frequently asked questions
titleSuffix: Azure DevOps
description: Learn about tasks you can perform which involve multiple projects in Azure DevOps
ms.technology: devops-collab
ms.topic: conceptual
ms.author: kaelli   
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 09/08/2020
---


# Work across projects

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)] 

Many enterprise organizations add multiple projects to support their business needs. While we recommend that you maintain a single project to keep things simple, there are instances where multiple projects are needed. 

In that event, several questions arise as to what tasks are supported when working with two or more projects. 

## Azure DevOps

### Q: How many projects should I create? 

- [About projects and scaling your organization](../organizations/projects/about-projects.md)
- [Plan your organizational structure](../user-guide/plan-your-azure-devops-org-structure.md)


### Q: Can I connect to more than one project at a time? 

When you connect from a client or IDE, you can only connect to a single project at a time. 
When you connect from a web browser, you can connect to different projects from different browser tabs. 

- [Connect to team projects](../../organizations/projects/connect-to-projects.md)  


### Q: How do I view all projects available to me?  



### Q: How do I switch to another project?  

- [Switch project, repository, team](navigation/go-to-project-repo.md)

## Azure Boards and work tracking

### Q: Can I query across projects? 

**A:** Yes. You can create work item queries that span all projects within an organization or filter for specific projects. Also, you can use the search tool to perform work item searches across all projects in an organization. To learn more, see one of the following articles: 

- [Create and save managed queries, Query across projects](../boards/queries/using-queries.md#across-projects) 
- [Search for work items](search/work-item-search.md)


### Q: Can I link work items across projects? 

**A:** Yes. You can use any link type you want to link work items that are defined in different projects. The projects must be defined within the same organization or project collection. To learn more, see [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md).


### Q: Can I query for work items linked across projects? 

**A:** No. There is a prohibitive performance cost for trying to execute such a query, so it isn't supported.  


::: moniker range="azure-devops"

### Q: Can I link work items across organizations? 

**A:** Yes. See [Link user stories, issues, bugs, and other work items; Link to a remote work item](/azure/devops/boards/backlogs/add-link?view=azure-devops&preserve-view=true#link-to-a-remote-work-item).

::: moniker-end

::: moniker range="< azure-devops"

### Q: Can I link work items across project collections? 

**A:** No. 

::: moniker-end

### Q: Can I perform capacity planning across projects? 

**A:** No.  


### Q: How do I manage dependencies across projects? 


### Q: How do I manage duplicate work items across projects? 


## Dashboards and reports 

### Q: Can I create a dashboard with information that spans two or more projects? 

**A:** Most dashboard widgets support configuration for the currently connected project. Exceptions are: 
Create a query that spans more than one project. 



### Q: Can I create a report that spans two or more projects? 

**A:** Yes. The Analytics service and Power BI reports support creation of reports that span two or more projects. 

## Azure Boards configuration and customization 



### Q: Can I apply an Inherited process defined in one organization to another organization?  

**A:** Yes. To perform this operation, you need to export the process and import it to the other organization. While there is no import/export user interface, you can use the [Process Migrator for Node.js](https://github.com/Microsoft/process-migrator) application.  
 

## Security across projects 




## Related articles
 

- [Connect to team projects](../../organizations/projects/connect-to-projects.md)  
