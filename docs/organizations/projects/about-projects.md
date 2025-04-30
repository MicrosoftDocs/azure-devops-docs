---
title: About projects and scaling your organization
titleSuffix: Azure DevOps
ms.custom: engagement-fy23  
description: Learn about projects and how to structure them to support collaboration on building software solutions.
ms.subservice: azure-devops-projects
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley 
ms.topic: conceptual
monikerRange: "<=azure-devops"
ms.date: 03/12/2025
--- 

# About projects and scaling your organization

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

A project in Azure DevOps provides a space for users to plan, track progress, and collaborate on building software solutions. It serves as a fundamental container for storing data and source code.

When you create a project, Azure DevOps automatically creates a team with the same name, which is sufficient for small organizations. For enterprise-level organizations, you might need to scale up by creating more teams and projects. Azure DevOps supports up to 1,000 projects within an organization.

An organization with multiple projects allows teams to configure tools to suit their needs and complete administrative tasks at the appropriate levels. As your organization grows, your tools can scale to support a [culture of team autonomy and organizational alignment](../../boards/plans/agile-culture.md).

For more information, see [Work tracking, process, and project limits](../settings/work/object-limits.md) and [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).

<a id="scale">  </a>
<a id="collection-project-team-structure">  </a>

## Manage work across your organization

When you connect to Azure DevOps, you connect to an organization. Within this organization, you can define one or more projects. At least one project must be created to use the system.

::: moniker range="azure-devops"
You can scale your organization in the following ways:

- **Add projects**: Support different business units.
- **Add teams**: Create teams within a project.
- **Add repositories and branches**: Manage your source code.
- **Add agents, agent pools, and deployment pools**: Support continuous integration and deployment.
- **Manage access**: Use Microsoft Entra ID to handle a large number of users.
::: moniker-end

::: moniker range="< azure-devops"
You can scale your on-premises Azure DevOps deployment in the following ways:

- **Add server instances**: Increase performance.
- **Add project collections and projects**: Support different business units.
- **Add teams**: Create teams within a project.
- **Add repositories and branches**: Manage your source code.
- **Add agents, agent pools, and deployment pools**: Support continuous integration and deployment.
- **Manage access**: Use Active Directory to handle a large number of users.
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

By default, users added to an organization can view all organization and project information and settings. For more information, see [Limit user visibility for projects and more](../../user-guide/manage-organization-collection.md#limit-user-visibility-for-projects-and-more) and [Change project visibility to public or private](make-project-public.md).

### View historical data

All project members can view identities added to comments, discussions, or assignments. For example, everyone in the project (even users with new restrictions) can still see a user's name assigned to a work item when the user is no longer part of the project. The same applies to @mentions in PRs, comments, discussions, and more.

::: moniker-end

## Use a single project

One recommended approach is to use a single project to support your organization or enterprise. A single project can help minimize the maintenance of administrative tasks and provides the most optimized and flexible [cross-link object](../../boards/backlogs/add-link.md) experience.

Even if you have many teams working on hundreds of different applications and software projects, you can easily manage them within a single project. A project isolates the data stored within it, and moving data from one project to another results in the loss of associated history.

For more information, see [How many projects do you need?](../../user-guide/plan-your-azure-devops-org-structure.md#how-many-projects-do-you-need).

## Add another project

::: moniker range="azure-devops"

Another feasible approach is to have multiple projects. This approach is recommended if your organization needs to:

- Prohibit or manage access to the information contained within a project for select groups
- Support custom work tracking processes for specific business units within your organization
- Support entirely separate business units that have their own administrative policies and administrators
- Test customization activities or add extensions before rolling out changes to the working project
- Support an open-source software (OSS) project

::: moniker-end

::: moniker range="< azure-devops"

You might want to add another project in the following instances:

- Prohibit or manage access to the information contained within a project
- Support custom work tracking processes for specific business units within your organization
- Support entirely separate business units that have their own administrative policies and administrators
- Test customization activities or add extensions before rolling out changes to the working project

::: moniker-end

::: moniker range="azure-devops"

## Use private and public projects

You can have both private and public projects. You can also [change the visibility of a project from either one to the other](make-project-public.md).

**Private projects**:
- Require adding and managing user access.
- Require users to sign in to gain access even for read-only access.
- Provide all project members access to the project and organization information.

For more information, see [Resources granted to project members](resources-granted-to-project-members.md).

**Public projects**:
- Don't require users to sign in for read-only access to many services.
- Support sharing code with others.
- Support continuous integration/continuous deployment (CI/CD) of open-source software.

For more information, see [Change visibility of a project](make-project-public.md).

## Version control support

Git repositories can be browsed and cloned only via HTTPS. SSH and GVFS endpoints are unavailable. Clients like Visual Studio and IntelliJ work with the HTTPS clone URL but don't offer the connected experience linking to work items and other collateral.

<a id="dashboard-widget-support"></a>

## Dashboard widget support

The following dashboard widgets don't display any useful information for nonmembers.

[!INCLUDE [temp](includes/unavailable-widgets.md)]

For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md) and [FAQs about dashboards, charts, and reports](../../report/dashboards/faqs.yml).

::: moniker-end

## Structure your project

Use the following elements to structure your project to support your business needs:

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
- [Search across projects](../../project/search/get-started-search.md)  
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
- [Search across projects](../../project/search/get-started-search.md)  
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
- [Navigate the web portal](../../project/navigation/index.md)
- [Understand what you get with a project](../../user-guide/services.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
- [Understand differences between Azure DevOps](../../user-guide/about-azure-devops-services-tfs.md?toc=/azure/devops/organizations/projects/toc.json&bc=/azure/devops/organizations/projects/breadcrumb/toc.json)
