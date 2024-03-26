---
title: Switch project, repository, or team
titleSuffix: Azure DevOps
description: Open another project or repository for Azure DevOps
ms.custom: "navigation, cross-project, cross-service"
ms.subservice: azure-devops-projects 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# Switch project, repository, team 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 


Several features depend on the project, repository, or team that you have selected. For example, dashboards, backlogs, and board views will change depending on the project and team you select.

Also, when you add a work item, the system references the default area and iteration paths defined for the team context. Work items you add from the team dashboard (new work item widget) and queries page are assigned the team default iteration. Work items you add from a team backlog or board, are assigned the team default backlog iteration. To learn more, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md).  

## Prerequisites 
 
* You must be added to a project as a member of the **Contributors** or administrator security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
 
::: moniker range="azure-devops"  

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users added to the **Project-Scoped Users** group won't be able to access projects that they haven't been added to. For more information including important security-related call-outs, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 

::: moniker-end  

<a id="projects">  </a>

## View and open a project 

From the **Projects** page you can quickly navigate to a project that you have permissions to view. 

::: moniker range=">= azure-devops-2019"

1. Choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps logo to open **Projects**.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing web portal, Azure DevOps logo.](../../media/settings/open-projects-page-vert-brn.png)

	The projects you most recently viewed are displayed, followed by a list of all projects in alphabetic order. 

1. Hover over the dots and you can open the service of interest for that project. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing opening the service of interest for that project.](media/projects-page/projects-page-vert.png)

1. You can filter the project and team list using the *Filter projects* search box. Simply type a keyword contained within the name of a project or team. Here we type **Fabrikam** to find all projects or teams with *Fabrikam* in their name. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing Projects page, filter on Fabrikam.](media/projects-page/filter-projects-vert.png) 

1. Choose **Create Project** to add a project. You must be an account administrator or a member of the Project Collection Administrators group to [add a project](../../organizations/projects/create-project.md).

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing selection of account home, Projects page, New project.](../../organizations/projects/media/create-project/projects-hub-vert-create-project.png) 

::: moniker-end




## View and open a repository 

::: moniker range=">= azure-devops-2019"

1. Choose **Repos>Files**.

	> [!div class="mx-imgBorder"]
	> ![Screenshot showing Open Code, new nav.](../../organizations/projects/media/browse-code/open-code-vert-brn.png) 

1. Select the repository of interest from the repository selector.  
	> [!div class="mx-imgBorder"]
	> ![Screenshot showing selecting repository.](../../organizations/projects/media/browse-code/select-repository-vert.png) 

::: moniker-end


  


<a id="switch-to-a-different-team">  </a>
<a id="switch-team-context">  </a>

## Switch to a different team 

::: moniker range=">= azure-devops-2019"

From a user page, one under&mdash;**Boards**, **Repos**, **Pipelines**, or **Test Plans**&mdash;you can't switch to a different team, you can [only select team artifacts](use-breadcrumbs-selectors.md). 

From a **Project Settings>Work>Team configuration** page, you select a team from the team selector breadcrumb. 

> [!div class="mx-imgBorder"]  
> ![Screenshot showing selected team from the breadcrumb.](media/breadcrumbs/choose-team-selector.png)

::: moniker-end




## Related articles
- [Work across projects](work-across-projects.md)
- [Add teams](../../organizations/settings/add-teams.md?toc=/azure/devops/project/navigation/toc.json&bc=/azure/devops/project/navigation/breadcrumb/toc.json)