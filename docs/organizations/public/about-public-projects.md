---
title: About public projects 
titleSuffix: Azure DevOps Services
description: Understand the benefits of creating a public project, provide anonymous users ability to view your projects.
ms.technology: devops-public-projects
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 02/19/2019
monikerRange: 'azure-devops'
---

# What is a public project?

[!INCLUDE [temp](includes/version-public-projects.md)]  

Create a public project, make an existing project public, or work in a public project to support your development of software applications.  

An Azure DevOps Services public project provides support to share code with others and to support continuous integration/continuous deployment (CI/CD) of open-source software. Users aren't required to sign in to gain read-only access to many of the services.  

## Public versus private projects

Projects provide a repository for source code and a place for a group of developers and teams to plan, track progress, and collaborate on building software solutions. One or more projects can be defined within an organization in Azure DevOps.  

Users that aren't signed into the service have read-only access to public projects on Azure DevOps. Private projects require users to be granted access to the project and signed in to access the services.

## Supported services  

Non-members of a public project have read-only access to a limited set of services, specifically:

* [Browse the code base, download code, view commits, branches, and pull requests](browse-code-public.md)
* [View and filter work items](view-filter-work-items-public.md)
* [View a project page or dashboard](view-project-dashboard-public.md)
* [View the project Wiki](view-wiki-public.md) 
* Do search of the [code](code-search-public.md) or [work items](work-item-search-public.md) 

For more information, see [Differences and limitations for non-members of a public project](feature-differences.md).

To add or modify code, work items, pipelines, or more, [add the user as a member of the project](invite-users-public.md). For an overview of services contributors have access to, see [What do I get with Azure DevOps?](../../user-guide/services.md)

## Get started with a public project  

**To get started:**
* [Create a public project](create-public-project.md)
* [Invite users to contribute to your public project](invite-users-public.md)
* [Define a README for your project](../projects/project-vision-status.md)

**To share code:**
* [Share your code](../../repos/git/gitquickstart.md)

**To define pipelines:** 
* [Build OSS repositories](../../pipelines/repos/index.md?bc=%252fazure%252fdevops%252forganizations%252fpublic%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252forganizations%252fpublic%252ftoc.json)

## Migrate a private project to public

As the creator of a project, you can [change your project's visibility from public to private and the other way around](make-project-public.md). When you choose to make a project public, all of its contents are included. You can't choose specific repositories, area paths, or build folders to keep private. 

Before you change the visibility of your private project, we recommend you review [Private-to-public migration checklist](migration-checklist.md).

## Related articles

- [Differences and limitations for non-members of a public project](feature-differences.md)
- [Public projects glossary](glossary-public.md)