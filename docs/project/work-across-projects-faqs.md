---
title: Work across projects frequently asked questions
titleSuffix: Azure DevOps
description: Learn about tasks you can perform which involve multiple projects in Azure DevOps
ms.technology: devops-collab
ms.topic: conceptual
ms.author: kaelli   
author: KathrynEE
monikerRange: '>= tfs-2017'
ms.date: 09/15/2020
---


# Work across projects FAQs

[!INCLUDE [temp](../includes/version-tfs-2017-through-vsts.md)] 

Many enterprise organizations add multiple projects to support their business needs. While we recommend that you maintain a single project to keep things simple, there are instances where multiple projects are needed. In that event, several questions arise as to what tasks are supported when working with two or more projects. This article addresses these questions. 

To learn about specific cross-project features, see [Work across projects](navigation/work-across-projects.md).

## Azure DevOps

### Q: How many projects should I create? 

**A.** In general, we recommend that you create a single project. However, certain business needs, such as supporting a public project or applying security policies, may require creating more than one project. To learn more, see one of the following articles.  
- [About projects and scaling your organization](../organizations/projects/about-projects.md)
- [Plan your organizational structure](../user-guide/plan-your-azure-devops-org-structure.md)
- [What is a public project?](../organizations/public/about-public-projects.md)

### Q: Can I connect to more than one project at a time? 

**A.** When you connect from a web browser, you can connect to different projects from different browser tabs. When you connect from a client or IDE, you can only connect to a single project at a time. For more information, see [Connect to team projects](../organizations/projects/connect-to-projects.md).


### Q: How do I view all projects available to me? 

How do I switch to another project?  

**A.** See [Switch project, repository, team](navigation/go-to-project-repo.md).

### Q: Can I search across projects? 

**A.** When you install the free [Code search Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search), you can perform cross-project searches within your organization or a collection. To learn more, see [Search across your code base, work items, wiki, or artifacts](search/overview.md).

### Q: How do I turn off cross-project collaboration? 

**A.** If you want to limit users to view or modify select work items, you can by [setting permissions on Area Paths](../organizations/security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path).  However, there's no method for limiting users to linking work items that reside in different projects.  

## Dashboards and reports 

### Q: Can I create a dashboard with information that spans two or more projects? 

::: moniker range=">= azure-devops-2020"

**A:** Yes. Project dashboards allow you to add widgets for any project and any team. To learn more, see [Add, rename, and delete dashboards, Add a dashboard](../report/dashboards/dashboards.md#add-a-dashboard). 
::: moniker-end

::: moniker range="< azure-devops-2020"

**A:** Yes. Most dashboard widgets support configuration for the currently connected project. However, you can add query-based dashboard widgets&mdash;such as [Query results](../report/dashboards/widget-catalog.md#query-results) and [Chart for work items](../report/dashboards/charts.md#add-chart-widget)&mdash;to support cross-project queries. To learn how, see [Create and save managed queries, Query across projects](../boards/queries/using-queries.md#query-across-projects).  

::: moniker-end


::: moniker range=">= azure-devops-2019"

### Q: Can I create a report that spans two or more projects? 

**A:** Yes. The Analytics service and Power BI reports support creation of reports that span two or more projects. To learn more, see [Create a Power BI report with an OData Query](../report/powerbi/create-quick-report-odataq.md). 

::: moniker-end

## Azure Boards and work tracking

### Q: Can I query across projects? 

**A:** Yes. You can create work item queries that span all projects within an organization or filter for specific projects. Also, you can use the search tool to perform work item searches across all projects in an organization. To learn more, see one of the following articles: 

- [Create and save managed queries, Query across projects](../boards/queries/using-queries.md#across-projects) 
- [Search for work items](search/work-item-search.md)


### Q: Can I link work items across projects? 

**A:** Yes. You can use any link type you want to link work items that are defined in different projects. The projects must be defined within the same organization or project collection. To learn more, see [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md).


### Q: Can I query for work items linked across projects? 

**A:** No. There is a prohibitive performance cost for trying to execute such a query, so it isn't supported.  

::: moniker range=">= azure-devops-2019"

### Q: Can I export a cross-project query to Excel? 

**A.** No, cross-project queries won't open in Excel. However, you can export a cross-project query to a .csv file, open it in Excel, and import it to Azure Boards.  To learn more, see [Bulk import or update work items using CSV files](../boards/queries/import-work-items-from-csv.md).  

::: moniker-end

::: moniker range="<= tfs-2018"

### Q: Can I export a cross-project query to Excel? 

**A.** No, cross-project queries won't open in Excel.    

::: moniker-end

::: moniker range="azure-devops"

### Q: Can I link work items across organizations? 

**A:** Yes. See [Link user stories, issues, bugs, and other work items; Link to a remote work item](/azure/devops/boards/backlogs/add-link#link-to-a-remote-work-item).

::: moniker-end

::: moniker range="< azure-devops"

### Q: Can I link work items across project collections? 

**A:** No. This isn't a supported feature. 

::: moniker-end

### Q: Can I perform capacity planning across projects? 

**A:** No. Capacity planning data isn't stored in the work tracking data store or Analytics service. This isn't a supported feature.  


### Q: How do I manage dependencies across projects? 

**A:**  To manage dependencies in Azure Boards, you can link work items using the Predecessor/Successor link type. To learn how, see [Link user stories, issues, bugs, and other work items](../boards/backlogs/add-link.md).


 
### Q: Can I create a cross-project roadmap of Epics?   

**A:** You can create a cross-project query that spans more than one project. You can then add this query to a dashboard. To learn how, see [Create and save managed queries, Query across projects](../boards/queries/using-queries.md#query-across-projects).  


### Q: Can I create a cross-project Kanban board?  

**A:** Yes, using the [Query Based Boards Marketplace extension](https://marketplace.visualstudio.com/items?itemName=realdolmen.EdTro-AzureDevOps-Extensions-QueryBasedBoards-Public). This extension provides a View as Board tab for a flat-list query.  

> [!NOTE]   
> Marketplace extensions are not supported features of Azure Boards and therefore not supported by the product team. For questions, suggestions, or issues you have when using extensions, visit their corresponding extension page. 

 
<!--- 
### Q: How do I manage duplicate work items across projects? 

-->

## Azure Boards configuration and customization 



### Q: Can I apply an Inherited process defined in one organization to another organization?  

**A:** Yes. To perform this operation, you need to export the process and import it to the other organization. While there is no import/export user interface, you can use the [Process Migrator for Node.js](https://github.com/Microsoft/process-migrator) application.  
 

## Azure Repos 

::: moniker range=">= azure-devops-2020"

### Q: Can I set branch policies across repositories within a project? 

::: moniker-end

::: moniker range="azure-devops"

**A**. Yes. Cross-repository policies is designed to create policies which apply to all or a selection of the repositories in the projects. You do this from **Project Settings>Repositories>Policies**. Add a custom policy and specify if it is for all repositories or choose which repositories it should apply to. To learn more about branch policies, see [Improve code quality with branch policies](../repos/git/branch-policies.md).

::: moniker-end

::: moniker range="azure-devops-2020"

**A**. Yes. Cross-repository policies is designed to create policies which apply to all or a selection of the repositories in the projects.  You do this from **Project Settings>Cross-repo policies**. Add branch protection and specify if it is for all repositories or choose which repositories it should apply to. To learn more, see [Cross-repo branch policy administration](/azure/devops/release-notes/2019/sprint-160-update#cross-repo-branch-policy-administration) and [Improve code quality with branch policies](../repos/git/branch-policies.md).

::: moniker-end


### Q: How can I find all completed pull requests across projects? 

**A**. There is no user interface feature to extract this information. You can use the REST API to get this information as follows:  

1. Get all projects using [Projects-List](/rest/api/azure/devops/core/projects/list).
1. Get all repositories of each project using [Repositories - List](/rest/api/azure/devops/git/repositories/list).
1. Get all pull requests of each repository using [Pull Requests - Get Pull Requests](/rest/api/azure/devops/git/pull%20requests/get%20pull%20requests#pullrequeststatus). 
 


<!---

## Security across projects 

-->


## Related articles
 

- [Connect to team projects](../organizations/projects/connect-to-projects.md)  


<!---

1. how to centrally manage backlog items (Epic/Features) that are then distributed across multiple projects? So what is the best practice of managing cross-project backlog information?
2. how they can manage resources across projects inside Azure DevOps? Some team members are working in the same day on multiple projects and they would like to understand their capacity (completed work hours)  across those projects?
Is there any way to achieve this with Azure DevOps or better approach would be to bring that "organizational" project management one step higher to MS Project?


-->

