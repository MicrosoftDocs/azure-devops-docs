---
title: Features and services included
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Understand the services provided by in Azure DevOps Services and Team Foundation Server 
ms.technology: devops-new-user 
ms.prod: devops
ms.topic: overview
ms.assetid: D861983F-CC66-4314-A3C6-E2F30A37923D
ms.manager: chcomley
ms.author: chcomley
author: chcomley
ms.date: 04/05/2019
monikerRange: '>= tfs-2013'
---

# What features and services do I get with Azure DevOps?

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

With Azure DevOps, you gain an integrated set of services and tools to manage your software projects, from planning and development through testing and deployment. Services are delivered through a client/server model. Many of them are delivered through an easy-to-use web interface that you can access from all major browsers. Some services, such as source control, build pipelines, and work tracking, can also be managed through a client.  

Access web services through the following areas, as shown in the following image.

::: moniker range=">= azure-devops-2019"

![Azure DevOps Services, main](_img/services-hubs-vert.png)

::: moniker-end

::: moniker range="<= tfs-2018"

![Azure DevOps Services, main](../_img/services-hubs.png)  

::: moniker-end

Many of our services are either free for small teams or available through a subscription model or per-use model. You can do a hybrid approach where you use an on-premises deployment to manage your code and work. Then,  you purchase cloud build or testing services on an as-needed basis.  

For information about client tools, see [Tools](tools.md).

<!---
###Video overview
 (Video ala Robert's 1.5 min Commit)
-->

## Dashboards

From **Dashboards**, you gain access to user-configurable dashboards.

::: moniker range=">= azure-devops-2019"

![Azure DevOps Services, main](_img/dashboard-overview.png)

::: moniker-end

::: moniker range="<= tfs-2018"

<img src="../report/dashboards/_img/dashboard-view-with-widgets.png" alt="Dashboard, Overview" style="border: 2px solid #C3C3C3;" />

::: moniker-end

You can do the following tasks in **Dashboards**:

- Add, configure, and manage dashboards
- Configure widgets that you add to dashboards
- Quickly navigate to different areas of your project

To learn more, see [Dashboards](../report/dashboards/dashboards.md).

## Source control

Source or version control systems allow developers to collaborate on code and track changes made to the code base. Source control is an essential tool for multi-developer projects.

Our systems support two types of source control: Git (distributed) or Team Foundation Version Control (TFVC), a centralized, client-server system. Both systems enable you to check in files and organize files within folders, branches, and repositories.

With Git, each developer has a copy on their dev machine of the source repository, including all branch and history information. Each developer works directly with their own local repository and changes are shared between repositories as a separate step.

Developers commit each set of changes and do version control operations like history and compare without a network connection. Branches are lightweight. When developers need to switch contexts, they create a private local branch and can switch from one branch to another to pivot among different variations of the codebase. Later, they merge, publish, or dispose of the branch.

> [!NOTE]
> Git in Azure DevOps is standard Git. You can use Visual Studio with third-party Git services. You can also use third-party Git clients with Azure DevOps Server.

With TFVC, developers have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server

::: moniker range=">= azure-devops-2019"

From **Repos**, you gain access to your source control Git-based or Team Foundation Version Control (TFVC) repositories to support version control of your software projects. These repositories are private.

![Azure Repos, Git files page](_img/repos-git-hub.png)

::: moniker-end

::: moniker range="<= tfs-2018"

From **Code**, you gain access to your source control Git-based or TFVC repositories to support version control of your software projects. These repositories are private.

<img src="_img/services/code-git-hub.png" alt="Code, Git, files page" style="border: 2px solid #C3C3C3;" />

::: moniker-end

From Azure Repos for Git, you can do the following tasks:

- Review, download, and edit files, and review the change history for a file  
- Review and manage commits that have been pushed
- Review, create, approve, comment on, and complete pull requests  
- Add and manage Git tags

To learn more, see the overviews for [Git](../repos/git/overview.md) or [TFVC](../repos/tfvc/overview.md).

## Plan and track work

Software development projects require ways to easily share information and track the status of work, tasks, issues, or code defects. In the past, perhaps you used one or more tools. For example, Microsoft Excel, Microsoft Project, a bug tracking system, or a combination of tools. Now, many teams have adopted Agile methods and practices to support planning and development.

Our systems provide several types of work items that you use to track features, requirements, user stories, tasks, bugs, and issues. Each work item is associated with a work item type and a set of fields that can be updated, as progress is made.

For planning purposes, you have access to several types of backlogs and boards to support the main Agile methods—Scrum, Kanban, or Scrumban.

- Product backlog: Used to create and rank stories or requirements.
- Kanban: Used to visualize and manage the flow of work as it moves from beginning, to in-progress, to done.
- Sprint backlogs: Used to plan work to complete during a sprint cycle, a regular two to four-week cadence that teams use when implementing Scrum.
- Task board: Used during daily Scrum meetings to review work that's completed, remaining, or blocked.

Project managers and developers share information by tracking work items on the backlogs and boards. Useful charts and dashboards complete the picture and help teams monitor progress and trends.

::: moniker range=">= azure-devops-2019"

From **Boards**, you gain access to Agile tools to support planning and tracking work.

![Azure Boards backlogs](_img/boards-backlogs.png)

::: moniker-end

::: moniker range="<= tfs-2018"

From **Work**, you gain access to Agile tools to support planning and tracking work.

<img src="_img/services/work-hub-backlogs.png" alt="Work, Backlogs page" style="border: 2px solid #C3C3C3;" />

::: moniker-end

Specifically, you can do the following tasks:

- Add and update work items
- Define work item queries, and create status and trend charts based on those queries
- Manage your product backlog
- Plan sprints by using sprint backlogs
- Review sprint tasks and update tasks through the task boards
- Visualize the workflow and update the status by using Kanban boards
- Manage portfolios by grouping stories under features and grouping features under epics

See [Backlogs, boards, and plans](../boards/backlogs/backlogs-boards-plans.md) for an overview of each.

## Continuous integration and deployment  

The rapid and reliable release of software comes from automating as many processes as possible. Our systems support build, test, and release automation.

- You can define builds to automatically run whenever a team member checks in code changes.
- Your build pipelines can include instructions to run tests after the build runs.
- Release pipelines support managing deployment of your software builds to staging or production environments.

::: moniker range=">= azure-devops-2019"

**Azure Pipelines** provides an integrated set of features to support building and deploying your applications.

![Builds, Azure Pipelines page](_img/builds-pipelines-page.png)

::: moniker-end

::: moniker range="<= tfs-2018"

**Azure Pipelines** provides an integrated set of features to support building and deploying your applications.

<img src="_img/services/build-release-hub.png" alt="Build-Release, Build pipelines page" style="border: 2px solid #C3C3C3;" />

::: moniker-end

Use pipelines to implement continuous integration and continuous delivery.

- **Build automation**: Define the steps to take during build and the triggers that start a build.
- **Release management**: Supports a rapid release cadence and management of simultaneous releases. You can configure release pipelines that represent your environments from development to production. Run automation to deploy your app to each environment. Add approvers to confirm that the app has been successfully deployed in an environment. Create your release manually or automatically from a build. Then track your releases as they're deployed to various environments.

To learn more, see [Continuous integration on any platform](../pipelines/overview.md).

## Manual and exploratory testing  

Test features support manual and exploratory testing, and continuous testing.  

::: moniker range=">= azure-devops-2019"

**Test Plans** supports creating and managing manual tests.

![Test Plans](_img/test-plans-vert.png)

::: moniker-end

::: moniker range="<= tfs-2018"

**Test** supports creating and managing manual tests.

<img src="_img/services/test-hub.png" alt="Test" style="border: 2px solid #C3C3C3;" />

::: moniker-end

With test features, you gain access to the following features:

- Customization of workflows with test plan, test suite, and test case work items  
- End-to-end traceability from requirements to test cases and bugs with requirement-based test suites  
- Criteria-based test selection with query-based test suites
- Excel-like interface with the grid for easy creation of test cases  
- Reusable test steps and test data with shared steps and shared parameters
- Sharable test plans, test suites, and test cases for reviewing with stakeholders  
- Browser-based test execution on any platform  
- Real-time charts for tracking test activity

To learn more, see [Testing overview](../test/index.md).

## Collaboration services

The following services work across the previously mentioned services to support:

::: moniker range=">= azure-devops-2019"

- Team dashboards
- Project wiki
- Discussion within work item forms
- Linking of work items, commits, pull requests, and other artifacts to support traceability
- Alerts and change notifications managed per user, team, project, or organization
- Ability to request and manage feedback
- Analytics service, analytic views, and Power BI reporting

::: moniker-end

::: moniker range="tfs-2018"

- Dashboards 
- Project wiki
- Discussion within work item forms
- Linking of work items, commits, pull requests, and other artifacts to support traceability
- Alerts and change notifications managed per user, team, project, or project collection
- Ability to request and manage feedback
- SQL Server Reporting

::: moniker-end

::: moniker range="tfs-2017"

- Dashboards
- Discussion within work item forms
- Linking of work items, commits, pull requests and other artifacts to support traceability
- Alerts and change notifications managed per user, team, project, or project collection  
- Ability to request and manage feedback
- Team (chat) rooms
- SQL Server Reporting

> [!NOTE]  
> Team rooms are deprecated for TFS 2017.2. Instead, we recommend that you [use service hooks to integrate with Microsoft Teams](../service-hooks/services/teams.md).
::: moniker-end

::: moniker range="tfs-2015"

- Dashboards
- Linking of work items, commits, pull requests, and other artifacts to support traceability
- Alerts and change notifications managed per user or for teams  
- Ability to request and manage feedback
- Team (chat) rooms
- SQL Server Reporting

::: moniker-end

::: moniker range="tfs-2013"

- Team home page  
- Linking of work items, commits, pull requests, and other artifacts to support traceability
- Alerts and change notifications managed per user or for teams  
- Ability to request and manage feedback
- Team (chat) rooms
- SQL Server Reporting

::: moniker-end

## Service hooks

Service hooks enable you to complete tasks on other services when events happen within your project hosted on Azure DevOps. For example, you can send a push notification to your team's mobile devices when a build fails. You can also use service hooks in custom apps and services as a more efficient way to drive activities in your projects.

The following services are available as the target of service hooks. To learn about other apps and services that integrate with Azure DevOps, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

For the latest set of supported services, see [Integrate with service hooks](../service-hooks/index.md).

## Cloud-hosted services based on usage

The following services support your DevOps operations:

- Cloud-based, Microsoft-hosted build and deployment agents  
- On-premises self-hosted agents to support build and deployment  

To learn more, see [Pricing](https://visualstudio.microsoft.com/team-services/pricing/).

## Azure cloud-hosted services

Azure provides cloud-hosted services to support application development and deployment. You can make use of these services solely or in combination with Azure DevOps.

To browse the directory of integrated services, features, and bundled suites, see [Azure products](https://azure.microsoft.com/services/).  

For continuous delivery to Azure from Azure DevOps Services, see [Automatically build and deploy to Azure web apps or cloud services](https://azure.microsoft.com/documentation/articles/cloud-services-continuous-delivery-use-vso/).

## Administrative services

There are features and tasks associated with administering a collaborative software development environment. You complete most of these tasks through the web portal. To learn more, see [About user, team, project, and organization-level settings](../organizations/settings/about-settings.md).

::: moniker range=">= azure-devops-2019"

![Project settings](_img/project-settings.png)

::: moniker-end

::: moniker range="<= tfs-2018"

<img src="_img/tour-admin-project-level.png" alt="Product backlog" style="border: 2px solid #C3C3C3;" />

::: moniker-end

## Related articles

- [Understand differences between Azure DevOps Services and Azure DevOps Server](about-azure-devops-services-tfs.md)
- [Client-server tools](tools.md)
- [Software development roles](roles.md)  
- [Azure DevOps pricing](https://visualstudio.microsoft.com/team-services/pricing/)
- [Azure DevOps data protection overview](../organizations/security/data-protection.md)

<!---
**System Center integration**: Enables a release pipeline to connect to a System Center Virtual Machine Manager (SCVMM) server to easily provision virtual machines and perform actions on them such as managing checkpoints, starting and **VMware Resource Deployment**: Connect to a VMware vCenter Server from Azure DevOps Services or Azure DevOps Server to provision, start, stop, or snapshot VMware virtual machines. 
-->
