---
title: Supported roles for software development
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Understand how Azure DevOps tools support various software development roles
ms.technology: devops-new-user 
ms.assetid: 4600B0D9-3799-4902-814B-F6EC9098C4CE
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 06/28/2021
monikerRange: '<= azure-devops'
---

# Software development roles supported by Azure DevOps

[!INCLUDE [version-vsts-tfs-all-versions](../includes/version-vsts-tfs-all-versions.md)]

If you're a sole developer or work in a small setting, you track issues, plan features, code, test, build, and deploy.  

If you work in a large setting, you might be more focused on a specific set of tasks that aligns with specific roles. These specific roles could be software development, product and scrum management, or DevOps.

The following article describes the features and tasks available to you, based on your role.  

## Contributor roles

Team members are contributors who have access to the following areas and more:

- code base
- work item tracking
- Agile tools
- build pipelines
- test tools

If you need to lock down specific areas to a select set of contributors, see [permission management](../organizations/security/permissions.md).

### Software developers

Developers use Visual Studio or other [tools](tools.md) to develop their applications. They then check in their changes to a Git or Team Foundation Version Control (TFVC) repository hosted in Azure DevOps. From the web portal or a supported IDE, they can view repositories, check history, and more.

To get started with using Git, see one of the following resources:

- [Share your code with Git and Visual Studio](../repos/git/share-your-code-in-git-vs.md)
- [Share your code in Git by using Eclipse](../repos/git/share-your-code-in-git-eclipse.md)
- [Share your code in Git by using Xcode](../repos/git/share-your-code-in-git-xcode.md)
- [Share your code in Git by using IntelliJ](/previous-versions/azure/devops/java/download-intellij-plug-in)
- [Get started with using Git and Azure DevOps Services](../repos/git/gitquickstart.md)
  
To get started with using TFVC, see one of the following resources:

- [Develop and share your code in TFVC by using Visual Studio](../repos/tfvc/share-your-code-in-tfvc-vs.md)
- [Share your code in TFVC by using Eclipse](../repos/tfvc/share-your-code-in-tfvc-eclipse.md)
- [Share your code in TFVC by using Xcode](../repos/tfvc/share-your-code-in-tfvc-xcode.md)

### Product owners

Product owners typically plan the feature set to deliver, set priorities, and track the status of work, code defects, and customer issues. The suite of web-based Agile tools in Azure DevOps provides product owners with the views and features that they need to do these tasks. All work gets captured within a work item. Each work item represents a specific type such as a user story, task, or bug.

- Use the product backlog to quickly define and prioritize user stories, features, and other work items
- Use the sprint backlog and task board to implement Scrum practices
- Use the Kanban board to work with Kanban methods
- Use queries to list and update work items, create status and trend charts, and post charts to dashboards
- Use dashboards to share information, status, and trends with your team or organization
  
For more information about getting started, see [About Azure Boards and Agile tools](../boards/get-started/what-is-azure-boards.md).  

You can integrate Microsoft Excel and Microsoft Project with Azure DevOps to plan and track your work. For more information, see [Bulk modify by using Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md) and [Create your backlog and tasks by using Project](../boards/backlogs/office/create-your-backlog-tasks-using-project.md).

### Scrum masters

Scrum masters help to facilitate scrum to the larger team by ensuring the scrum framework gets followed. They're committed to the practices, but stay flexible and open to opportunities for the team to improve their workflow. Scrum masters utilize the same features as [product owners](#product-owners).
### DevOps: builders, testers, and release managers

An advantage of working with Azure DevOps is the suite of tools and integrated functionality that support build, testing, and deploying software applications. See the following general DevOps-associated tasks that Azure DevOps supports.

- Define builds
- Unit test your code
- Run tests with your builds
- Perform exploratory tests
- Define, manage, track, and approve releases
- Deploy applications to Azure, a virtual machine, Docker containers, and more  

To get started, see the overviews in [Azure Pipelines](../pipelines/get-started/what-is-azure-pipelines.md) and [Azure Test Plans](../test/overview.md).

### Stakeholders

With Stakeholder access, anyone in your organization can check project status and provide feedback. Stakeholders can track project priorities and provide direction, feature ideas, and business alignment to a team. Stakeholders also contribute to plans by adding and modifying work items. They can't, however, contribute to the code base or exercise test tools.

Stakeholder access essentially provides free access to a limited set of feature to project sponsors and supporters. To learn more, see [Work as a Stakeholder](../organizations/security/get-started-stakeholder.md).

<a id="admin-roles">  </a>

## Administrator roles

A distinct advantage to working in Azure DevOps Services is the reduced overhead of server maintenance. But there are several administrative tasks required to support a collaborative, integrated software development environment.

The main tasks are grouped as follows by membership in a security group or role.

### Team administrators

Responsible for configuring team settings, which include:

- Backlog and board settings
- Team areas and iterations (sprints)
- Team members
- Team dashboards
- Team work item templates
- Team alerts

To get started, see [Manage teams and configure team tools](../organizations/settings/manage-teams.md).

### Project administrators

Responsible for configuring project-level resources, including:

::: moniker range="azure-devops"

- [Area paths](../organizations/settings/set-area-paths.md) and [iteration paths](../organizations/settings/set-iteration-paths-sprints.md)  
- [Project permissions and repository security](../organizations/security/permissions.md)  
- [Build agents, pools, and service connections](../pipelines/get-started/what-is-azure-pipelines.md)  
- [Test](../test/how-long-to-keep-test-results.md) and [release](../pipelines/policies/retention.md) retention policies  
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2018"

- [Area paths](../organizations/settings/set-area-paths.md) and [iteration paths](../organizations/settings/set-iteration-paths-sprints.md)  
- [Project permissions and repository security](../organizations/security/permissions.md)  
- [Customizing work tracking objects](../reference/customize-work.md)  
- [Build agents, pools, and service connections](../pipelines/get-started/what-is-azure-pipelines.md)  
- [Test](../test/how-long-to-keep-test-results.md) and [release](../pipelines/policies/retention.md) retention policies
::: moniker-end  

::: moniker range="azure-devops"

### Organization Owners and Project Collection Administrators

Responsible for configuring organization-level resources, including the following tasks:

- Manage billing  
- Add and manage projects
- Manage collection-level permissions
- Customize work tracking processes  
- Install and manage extensions

To get started, see [Manage organizations](../organizations/accounts/organization-management.md) and [Settings](../organizations/settings/about-settings.md#project-administrator-role-and-managing-projects).
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

### Project Collection Administrators

Responsible for configuring collection-level resources. These tasks include:  

- Add and manage projects
- Manage collection-level permissions
- Install and manage extensions

To get started, see [Settings](../organizations/settings/about-settings.md#project-administrator-role-and-managing-projects).

### Azure DevOps Server administrators

Responsible for installing, upgrading, and maintaining an on-premises Azure DevOps Server deployment, including the:

- Install Azure DevOps Server
- Update servers running Azure DevOps Server
- Manage database backups
- Manage server administrative settings and permissions
- Build retention policies
- Add and manage project collections
  
To get started, see [Server Administration (Azure DevOps Server)](/azure/devops/server/index).

::: moniker-end

## Related articles

- [A tour of services](services.md)
- [Plan your organizational structure in Azure DevOps](plan-your-azure-devops-org-structure.md)
