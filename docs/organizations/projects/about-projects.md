---
title: About projects and scaling your organization
titleSuffix: Azure DevOps
ms.custom: engagement-fy23  
description: Learn about projects and how to structure them to support collaboration on building software solutions.
ms.subservice: azure-devops-projects
ms.author: chcomley
author: chcomley 
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 12/05/2023
--- 

# About projects and scaling your organization

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

A project in Azure DevOps provides a place for users to plan, track progress, and collaborate on building software solutions. A project represents a fundamental container where you can store data and source code.

When you create your project, Azure DevOps automatically creates a team of the same name, which is sufficient for small organizations. For enterprise-level organizations, you might need to scale up and create more teams and projects. You can have up to 1000 projects within an organization in Azure DevOps. 

The following diagram shows one project and team versus multiple projects and teams in an organization or collection.

---
:::row:::
   :::column span="2":::
      **One project + team**
   :::column-end:::
   :::column span="2":::
      **Multiple projects + teams**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      :::image type="content" source="media/about-projects/project-concept.png" alt-text="Conceptual image, Single collection-project-team.":::
   :::column-end:::
   :::column span="2":::
      :::image type="content" source="media/about-projects/multiple-projects-concept.png" alt-text="Conceptual image, Scaled collection-project-team.":::
   :::column-end:::
:::row-end:::
---

This structure allows teams to configure the tools in ways that work for them and complete administrative tasks at the appropriate levels. As your organization grows, your tools can grow to support a [culture of team autonomy and organizational alignment](../../boards/plans/agile-culture.md).

For more information, see [Work tracking, process, and project limits](../settings/work/object-limits.md) and [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).

<a id="scale">  </a>
<a id="collection-project-team-structure">  </a>

## Manage work across your organization

When you connect to Azure DevOps, you connect to an organization. Within that container, you can define one or more projects. At least one project must be created to use the system.

::: moniker range="azure-devops"
You can scale your organization in the following ways:

- Add projects to support different business units
- Add teams within a project
- Add repositories and branches
- Add agents, agent pools, and deployment pools to support continuous integration and deployment
- Manage access through Microsoft Entra ID to manage a large number of users
::: moniker-end

::: moniker range="< azure-devops"
You can scale your on-premises Azure DevOps deployment in the following ways:

- Add server instances to increase performance
- Add project collections and projects to support different business units
- Add teams within a project
- Add repositories and branches
- Add agents, agent pools, and deployment pools to support continuous integration and deployment
- Manage access through Active Directory to manage a large number of users
::: moniker-end

## View projects in your organization 

View the projects defined for your organization by opening the **Projects** page.

1. Select :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: **Azure DevOps** to open **Projects**.

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing projects page.](media/about-projects/projects-hub-vert.png)  

2. Choose a project from the list of projects. 

For more information, see [Create a project](create-project.md).  

<a id="project-scoped-user-group"></a> 

::: moniker range="azure-devops"

## Limit project visibility

By default, users added to an organization can view all organization and project information and settings. 

For more information, see [Limit user visibility for projects and more](../../user-guide/manage-organization-collection.md#limit-user-visibility-for-projects-and-more) and [Change project visibility to public or private](make-project-public.md). 

### View historical data

All project members can view identities that were added to a comment, discussion, or assignment. For example, everyone in the project (even users with the new restriction) can still see a user's name assigned to a work item when the user's no longer part of the project. The same is true for @mentions in PRs, comments, discussions, and more.  

::: moniker-end

## Use a single project

One recommended approach is to use a single project to support your organization or enterprise. A single project can help minimize the maintenance of administrative tasks and supports the most optimized and full-flexibility [cross-link object](../../boards/backlogs/add-link.md) experience.  

Even if you have many teams working on hundreds of different applications and software projects, you can easily manage them within a single project. A project serves to isolate data stored within it and you can't easily move data from one project to another. When you move data from one project to another, you typically lose the history associated with that data.

For more information, see [How many projects do you need?](../../user-guide/plan-your-azure-devops-org-structure.md#how-many-projects-do-you-need).

## Add another project

::: moniker range="azure-devops"

Another feasible approach is to have multiple projects, which is a recommend approach if your organization is looking to accommodate the following scenarios:

- To prohibit or manage access to the information contained within a project to select groups
- To support custom work tracking processes for specific business units within your organization  
- To support entirely separate business units that have their own administrative policies and administrators  
- To support testing customization activities or adding extensions before rolling out changes to the working project
- To support an open-source software (OSS) project
::: moniker-end

::: moniker range="< azure-devops"
You might want to add another project in following instances:
- To prohibit or manage access to the information contained within a project
- To support custom work tracking processes for specific business units within your organization  
- To support entirely separate business units that have their own administrative policies and administrators
- To support testing customization activities or adding extensions before rolling out changes to the working project

::: moniker-end

::: moniker range="azure-devops"

## Use private and public projects

You can have both private and public projects. You can also [change the visibility of a project from either one to the other](make-project-public.md).

**Private projects** require that you add and manage user access. Users must sign in to gain access to a project, even if it's read-only access. All project members have access to the project and organization information. For more information, see [Resources granted to project members](resources-granted-to-project-members.md).

**Public projects** don't require users to sign in to gain read-only access to many of the following services. Public projects provide support to share code with others and to support continuous integration/continuous deployment (CI/CD) of open-source software.

For more information, see [Change visibility of a project.](make-project-public.md)

## Version control support

Git repositories can be browsed and cloned, but only via HTTPS.
SSH and GVFS endpoints are unavailable.
Clients like Visual Studio and IntelliJ work with the HTTPS clone URL but don't offer the connected experience linking to work items and other collateral.

<a id="dashboard-widget-support"></a>

## Dashboard widget support

The following dashboard widgets don't display any useful information for nonmembers.

[!INCLUDE [temp](includes/unavailable-widgets.md)]

::: moniker-end

## Structure your project

Use the following elements to structure your project to support your business needs.

- [Create a Git repository](../../repos/git/creatingrepo.md) for each subproject or application, or [create root folders within a TFVC repository](../../repos/tfvc/branch-folders-files.md) for each subproject. If you're using TFVC and heading toward a combined project model, create root folders for different teams and projects, just as you would create separate repos in Git. Secure folders as needed and control which segments of the repo you're actively using with workplace mappings. 
- [Define area paths](../settings/set-area-paths.md) to support different subprojects, products, features, or teams.
- [Define iteration paths (also known as sprints)](../settings/set-iteration-paths-sprints.md) that can be shared across teams.
- [Add a team](../../organizations/settings/add-teams.md) for each product team that develops a set of features for a product. Each team you create automatically creates a security group for that team, which you can use to manage permissions for a team. For more information, see [Portfolio management](../../boards/plans/portfolio-management.md).
- [Manage access to specific features and functions](../security/restrict-access.md) using custom security groups.
- [Create query folders](../../boards/queries/organize-queries.md) to organize queries for teams or product areas into folders.
- [Define or modify notifications](../../organizations/notifications/about-notifications.md) set at the project level.

## Customize and configure your project

You can configure and customize most services and applications to support your business needs or the way your teams work. Within each project, you can do the following tasks. For a comprehensive view of which resources can be configured, see [About team, project, and organizational-level settings](../settings/about-settings.md).

- **Dashboards**: Each team can [configure their set of dashboards](../../report/dashboards/dashboards.md) to share information and monitor progress.
- **Source control**: For each [Git repository](../../repos/git/index.yml), you can apply branch policies and define branch permissions. For TFVC repositories, you can [set check-in policies](../../repos/tfvc/add-check-policies.md).
- **Work tracking**: You can add fields, change the workflow, add custom rules, and add custom pages to the work item form of most work item types. You can also add custom work item types. For more information, see [Customize an inheritance process](../settings/work/inheritance-process-model.md).
- **Azure Pipelines**: You can fully customize your build and release pipelines, and define build steps, release environments, and deployment schedule. For more information, see [Build and release](../../pipelines/index.yml).  
- **Azure Test Plans**: You can define and configure test plans, test suites, test cases, and test environments. You can also add test steps within your build pipelines. For more information, see [Exploratory and manual testing](../../test/index.yml) and [continuous testing for your builds](../../pipelines/ecosystems/dotnet-core.md#run-your-tests).

## Add a team

As your organization grows, you can add teams equipped with configurable Agile tools to meet each team's workflow. For more information, see the following articles.  

- [Scale Agile to large teams](/devops/plan/scaling-agile)
- [About teams and Agile tools](../settings/about-teams-and-settings.md)
- [Manage a portfolio of backlogs](../../boards/plans/portfolio-management.md) and see progress.  
- [Use delivery plans](../../boards/plans/review-team-plans.md) to scheduled work items by sprint (iteration path) of selected teams against a calendar view.
- [Incrementally adopt practices that scale](../../boards/plans/practices-that-scale.md) to create greater rhythm and flow within your organization, engage customers, improve project visibility, and develop a productive workforce.
- [Structure projects to gain visibility across teams](../../boards/plans/visibility-across-teams.md) or to support [epics, release trains, and multiple backlogs to support the Scaled Agile Framework](../../boards/plans/scaled-agile-framework.md).

<a id="clients">  </a>

## Connect to a project with other clients

Aside from connecting via a web browser, you can connect to a project from the following clients:

- [Visual Studio (Professional, Enterprise, Test Professional)](https://visualstudio.microsoft.com/vs/compare/)
- [Visual Studio Code](https://code.visualstudio.com/Docs)
- [Visual Studio Community](https://www.visualstudio.com/products/visual-studio-community-vs.aspx)
- [Office Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md) 
- [Test & Feedback extension](../../test/request-stakeholder-feedback.md)
- [Microsoft Feedback Client](/previous-versions/azure/devops/project/feedback/give-feedback)

For more information, see [Compatibility with Azure DevOps Server versions](/azure/devops/server/compatibility).

## Key concepts

Use the following index to quickly access concepts and tasks related to managing projects and teams.  

::: moniker range="azure-devops"

:::row:::
   :::column span="":::
- [About projects](about-projects.md)  
- [About teams](../settings/about-teams-and-settings.md)  
- [Access levels](../security/access-levels.md)  
- [Area paths](../settings/about-areas-iterations.md)  
- [Dashboards](../../report/dashboards/overview.md)  
- [Notifications and subscriptions](../../organizations/notifications/about-notifications.md)  
- [GitHub connections](../../boards/github/connect-to-github.md)  
- [Iteration paths](../settings/about-areas-iterations.md)  
   :::column-end:::
   :::column span="":::
- [Permissions](../security/about-permissions.md)  
- [Process (Inherited)](../settings/work/inheritance-process-model.md)  
- [Project resources viewable by members](resources-granted-to-project-members.md)  
- [Project Wiki](../../project/wiki/provisioned-vs-published-wiki.md)  
- [Project-level permissions](../security/permissions.md#project-level-permissions)  
- [Project-level security groups](../security/permissions.md#project-level-groups)  
   :::column-end:::
   :::column span="":::
- [Project and process object limits](../settings/work/object-limits.md)  
- [Projects page](../../project/navigation/work-across-projects.md)  
- [Public vs private projects](about-projects.md)  
- [Security groups](../security/about-permissions.md)  
- [Service hooks](../../service-hooks/overview.md)  
- [Service visibility](../settings/set-services.md)  
- [Summary page](project-vision-status.md) 
   :::column-end:::
:::row-end:::

::: moniker-end

::: moniker range="< azure-devops"

:::row:::
   :::column span="":::
- [About projects](about-projects.md)  
- [About teams](../settings/about-teams-and-settings.md)  
- [Access levels](../security/access-levels.md)  
- [Area paths](../settings/about-areas-iterations.md)  
- [Dashboards](../../report/dashboards/overview.md)  
- [Notifications and subscriptions](../../organizations/notifications/about-notifications.md)  
- [GitHub connections](../../boards/github/connect-to-github.md)  
- [Iteration paths](../settings/about-areas-iterations.md)  
   :::column-end:::
   :::column span="":::
- [Permissions](../security/about-permissions.md)  
- [Process (Inherited)](../settings/work/inheritance-process-model.md)  
- [Process (On-premises XML)](../../reference/on-premises-xml-process-model.md)  
- [Project and process object limits](../settings/work/object-limits.md)  
- [Project resources viewable by members](resources-granted-to-project-members.md)  
- [Project Wiki](../../project/wiki/provisioned-vs-published-wiki.md)  
   :::column-end:::
   :::column span="":::
- [Project-level permissions](../security/permissions.md#project-level-permissions)  
- [Project-level security groups](../security/permissions.md#project-level-groups)  
- [Projects page](../../project/navigation/work-across-projects.md)  
- [Security groups](../security/about-permissions.md)  
- [Service hooks](../../service-hooks/overview.md)  
- [Service visibility](../settings/set-services.md)  
- [Summary page](project-vision-status.md) 
   :::column-end:::
:::row-end:::

::: moniker-end

## User and administrative tasks  

Several of the following tasks require permissions granted to a member of the Project Administrators group or a team administrator. 

::: moniker range="azure-devops"

:::row:::
   :::column span="":::
- [Add Git repository](../../repos/git/create-new-repo.md)  
- [Add project administrators](../security/change-project-level-permissions.md)
- [Add project dashboard](../../report/dashboards/dashboards.md#add-a-dashboard)  
- [Add project members](../security/add-users-team-project.md)  
- [Add security groups](../security/add-ad-aad-built-in-security-groups.md)  
- [Add team administrators](../settings/add-team-administrator.md)  
- [Add team members](../security/add-users-team-project.md)  
- [Add/manage service hooks](../../service-hooks/overview.md)
- [Connect to a project](connect-to-projects.md)  
- [Connect to GitHub](../../boards/github/connect-to-github.md)    
   :::column-end:::
   :::column span="":::
- [Create project](create-project.md)  
- [Delete project](delete-project.md)  
- [Edit project Summary](project-vision-status.md)
- [Enable/disable project services](../settings/set-services.md)  
- [Export list of projects](create-project.md)  
- [Export list of teams](../settings/add-teams.md#list-teams)  
- [Manage notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)  
- [Manage your project](../../user-guide/project-admin-tutorial.md)  
- [Navigate the Web portal](../../project/navigation/index.md)  
- [Remove team](../settings/rename-remove-team.md)  
   :::column-end:::
   :::column span="":::
- [Rename project](create-project.md)  
- [Rename team](../settings/rename-remove-team.md)  
- [Restore project](delete-project.md#restore-a-deleted-project)  
- [Change user access levels](../accounts/add-organization-users.md) 
- [Search across project(s)](../../project/search/get-started-search.md)  
- [Set area paths](../settings/set-area-paths.md)  
- [Set favorites](../../project/navigation/set-favorites.md)  
- [Set iteration paths](../settings/set-iteration-paths-sprints.md)  
- [Set project-level permissions](../security/change-project-level-permissions.md) 
- [Set project visibility](../projects/make-project-public.md)  
- [Switch project, repository, team](../../project/navigation/go-to-project-repo.md)  
   :::column-end:::
:::row-end:::

::: moniker-end

::: moniker range="< azure-devops"

:::row:::
   :::column span="":::
- [Add Git repository](../../repos/git/create-new-repo.md)  
- [Add project administrators](../security/change-project-level-permissions.md)
- [Add project members](../security/add-users-team-project.md)  
- [Add security groups](../security/add-ad-aad-built-in-security-groups.md)  
- [Add team members](../security/add-users-team-project.md)  
- [Add team administrators](../settings/add-team-administrator.md)  
- [Add/manage service hooks](../../service-hooks/overview.md)
- [Change access levels](../security/change-access-levels.md)   
- [Connect to a project](connect-to-projects.md)  
- [Connect to GitHub](../../boards/github/connect-to-github.md)  
   :::column-end:::
   :::column span="":::
- [Create project](create-project.md)  
- [Delete project](delete-project.md)  
- [Edit project Summary](project-vision-status.md)
- [Enable/disable project services](../settings/set-services.md)  
- [Manage notifications](../../organizations/notifications/manage-team-group-global-organization-notifications.md)  
- [Manage your project](../../user-guide/project-admin-tutorial.md)  
- [Navigate the Web portal](../../project/navigation/index.md)  
- [Remove team](../settings/rename-remove-team.md)  
   :::column-end:::
   :::column span="":::
- [Rename project](create-project.md)  
- [Rename team](../settings/rename-remove-team.md)  
- [Restore project](delete-project.md#restore-a-deleted-project)  
- [Search across project(s)](../../project/search/get-started-search.md)  
- [Set area paths](../settings/set-area-paths.md)  
- [Set favorites](../../project/navigation/set-favorites.md)  
- [Set iteration paths](../settings/set-iteration-paths-sprints.md)  
- [Set project-level permissions](../security/change-project-level-permissions.md)
- [Switch project, repository, team](../../project/navigation/go-to-project-repo.md)  
   :::column-end:::
:::row-end:::

::: moniker-end

## Frequently asked questions (FAQs)

### Q: Can I move or transfer a project to another organization or collection? 

**A:** Yes, but not without losing data. You can manually copy resources and leave some behind, or use a non-Microsoft tool. 

### Q: What programmatic tools support projects?

**A.** See [Projects REST API](/rest/api/azure/devops/core/projects). 

::: moniker range="azure-devops"
You can also use the [**az devops project** CLI](/cli/azure/devops/project).  
::: moniker-end

## Related articles

- [Get started as an administrator](../../user-guide/project-admin-tutorial.md)
- [Web portal navigation](../../project/navigation/index.md)
- [What do I get with a project?](../../user-guide/services.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
- [Understand differences between Azure DevOps](../../user-guide/about-azure-devops-services-tfs.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
