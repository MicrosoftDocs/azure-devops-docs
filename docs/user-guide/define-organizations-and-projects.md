---
title: Defining organizations and projects
titleSuffix: Azure DevOps Services
description: Guidelines for defining your organizations and projects and what credentials you should use to create an organization 
ms.assetid: 
ms.prod: devops
ms.technology: devops-new-user
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 09/05/2018
ms.topic: conceptual
monikerRange: '>= tfs-2013'
---

# Defining your Azure DevOps organizations and projects

[!INCLUDE [dev15-version-header](../_shared/dev15-version-header.md)]

Consider the size and scope of your enterprise and team structure when you're defining your organizations and projects.

You can use one of the following approaches:

- Map Azure DevOps **organizations** to business units (consider a "business unit" a department within your enterprise/company)
- Mapping Azure DevOps **projects** to business units

Before you begin, understand [about projects and scaling your organization](../organizations/projects/about-projects.md) and know [what you get with Azure DevOps services or TFS](services.md).

## Choosing your organization admin account type

You can create one or more Azure DevOps organizations. These organizations can be created using a Microsoft Account or with an Azure Active Directory-backed account.This account provides the credentials you will sign in to your new Azure DevOps organization with at `https://dev.azure.com/{yourorganization}`.

### Microsoft account

Use your Microsoft account if you don't need to authenticate users for an organization with [Azure AD](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). All users must sign in to your Azure DevOps Services organization with a Microsoft account.

   If you don’t have an Azure Active Directory, you can either [create one for free](https://portal.azure.com) from the Azure portal, or use your Microsoft account (e.g. johndoe@outlook.com) to create an Azure DevOps organization.

### Azure Active Directory-backed account

Use your work or school account that's managed by your Azure Active Directory. If you use Azure or Office 365, you might have one already. If you don't, learn how to [sign up for Azure as an organization](https://azure.microsoft.com/documentation/articles/sign-up-organization/) to *automatically connect* your Azure DevOps Services organization to your Azure Active Directory. All users must be members in that directory to access your Azure DevOps Services organization. To add users from other organizations, use [Azure AD B2B collaboration capabilities](/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b).

## Defining organizations

An Azure DevOps organization is the set of services and users for a business unit you define. It can be for your whole company, a specific business unit within your enterprise, or just you. If you are setting up Azure DevOps for a large company or enterprise, you may want to create multiple organizations with different accounts (mostly likely Azure Active Directory accounts). Think about what groups and users in your enterprise or company share strategies and work, and group them into specific organizations. For example, the (fictional) Fabrikam company might create three Azure DevOps organizations: **Fabrikam-Marketing**, **Fabrikam-Engineering**, and **Fabrikam-Sales**. Each organization will have a separate URL, such as https://dev.azure.com/Fabrikam-Engineering, and will be mostly isolated from the others.

Settings at the Azure DevOps organization are managed by Administrators. As the creator of the organization, you are an Administrator by default. You can access those settings using the **Admin settings** button in the lower-left of your Azure DevOps organization portal.

![Open Admin settings](../_shared/_img/settings/open-admin-settings-vert.png)

For more information on configuring an Azure DevOps organization, read [Create an Azure DevOps organization](../organizations/accounts/create-organization-msa-or-work-student.md).

## Defining projects

Each Azure DevOps organization contains one or more projects and each project contains a set of features: boards and backlogs for Agile planning; pipelines for continuous integration and deployment; repos for version control and management of source code and artifacts; and continuous test integration throughout the DevOps life cycle.

Within an organization you can have one large single project or multiple projects. Choose either of the following:

- Create a single project that contains many repos and teams
- Create multiple projects, each containing its own set of teams, repos, builds, work items, etc.

Projects can be created or removed as you need or retire them. Think about the specific strategic work scoped to one of the Azure DevOps organizations you created prior, and who should have access to it. Use this information to name and create a project. This project will have a URL defined under the organization you created it in, and can be accessed at `https://dev.azure.com/{organization-name}/{project-name}`.

Configure your project by visiting its URL and selecting the **Project settings** button at the lower-right of the page.

![Open Project settings](../_shared/_img/settings/open-project-settings-vert-brn.png)

For more information on configuring a project, read [Create an Azure DevOps project](../organizations/projects/create-project.md).

### Single project

You may have a large product or service that is managed by many teams. Those teams have tight interdependencies on each other across the product life cycle. You would create a project and divide the work using teams and area paths. This allows your teams to have visibility into each other’s work so that the organization stays aligned. Your teams use the same taxonomy for work item tracking, making it easier to communicate and stay consistent.

  > ![Recommendation]
  > When multiple teams work on the same product, we recommend that you have all teams on the same iteration schedule. This will help keep your teams aligned and delivering value on the same cadence.

A high volume of queries and boards can make it difficult to find what you are looking for. Depending on the architecture of your product, this can bleed into other areas such as builds, releases, and repos. To help alleviate this, make sure you use good naming conventions and a simple folder structure. When you add a new repo to your project, it is a good time to reflect on your strategy and determine if that repo can be placed into its own project.

### Multiple projects

Most enterprises are working on several products or services at a time. In this case, we recommend having multiple projects. An Azure DevOps project is best determined by how you ship the product. Having several projects shifts the administration burden and allows your teams more autonomy to manage the project as the team decides. It also provides greater control of security and access to assets across the different projects.
Having team independence with multiple projects creates some alignment challenges. If each project is using a different process or iteration schedule, it can make communication and collaboration difficult if the taxonomies are not the same.

> ![Consider the following:]
> -	Use the same process across all your projects.
> -	Enforce the same iteration schedules across all projects.

Azure DevOps provides cross-project experiences when it comes to managing work. You can easily create cross-project queries and move work items from one project to another.

If the products stored in multiple repos are working on independent schedules and/or processes, then splitting into multiple projects might make the most sense.  When you’re considering multiple projects, note that Git repo portability makes it easy to move a repo between projects and still retain full-fidelity commit history.  Other history like push and pull request history cannot be migrated between projects.

## Try this next  

> [!div class="nextstepaction"]
> [Create an organization](../organizations/accounts/create-organization-msa-or-work-student.md)
> or
> [Create a project](../organizations/projects/create-project.md)

Or, after you've created a new organization and project in Azure DevOps Services, you can begin sharing your code with others - [Code with git](code-with-git.md)
