---
title: Differences and limitations 
titleSuffix: Azure DevOps Services Public Project
description: Differences and limitations for non-members
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid: 
ms.reviewer:
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 02/14/2019
monikerRange: 'azure-devops'
---

# How access to services are limited for non-members of a public project

[!INCLUDE [temp](_shared/version-public-projects.md)]  

In a public project, most features work the same for members and non-members.
Today, non-members get read-only access to public projects and members get access based on their access level and permissions. Over time, we give non-members more features, for example commenting on work items.
This page walks through features that non-members can't access or that work differently than members.  

## Access levels and unavailable features

A project member has access to features based on the access level assigned. Non-members are granted limited access automatically. The following user interface elements are hidden for non-members.

* **Boards**: **Work items** are available, but **Backlogs**, **Boards**, **Sprints**, **Queries**, and **Plans** are hidden. 
* **Repos**: Team Foundation Version Control (TFVC) repositories are hidden 
* **Pipelines**: **Builds** and **Releases** are available, but **Library**, **Task Groups**, **Deployment Groups**, **Packages**, and XAML build system are hidden.
	* Pipeline and task editors for build and release pipelines are unavailable  
	* Only the new **Releases*** page, which is in Public preview, is available.
* **Test Plans**: **Test Plans** and its associated manual and cloud load testing features are hidden.
* **Analytics**: **Analytics views** is hidden, and the Analytics OData feed is not supported for non-members.
* Settings and administrative pages are hidden.
* Paid extensions are hidden.

> [!NOTE]
> When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Pipeline** features. Without this feature enabled, stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](../security/provide-stakeholder-pipeline-access.md).

In addition, non-members have no access or limited access to the following features:

* Any form of editing or creating artifacts such as files, work items, and pipelines
* Favoriting and following existing artifacts
* Information about members of a project is limited to their name and picture. Email addresses and other contact information aren't available. Also, lists of artifacts cannot be filtered by identity.
* The ability to switch between two public projects in the same organization; non-members must navigate directly to a public project using a URL.
* The ability to perform code or work item semantic searches across an organization isn't supported.

## Feature and functional support based on permissions

Azure DevOps has a permissions-driven user interface. For an overview of the main permissions assigned by default to security groups and access levels, see [Default permissions and access](../security/permissions-access.md).

If a user doesn't have the permissions needed to complete an action, the feature is hidden or disabled. By default, inaccessible commands are disabled, minimizing the layout changes that would be needed if elements could appear and disappear.
For example, a user who lacks permission to create pull requests, sees a disabled  **Create pull request** button.

When marking a project public, there are two changes which affect all members of the project:

* Permissions marked **Deny** aren't honored. The permissions automatically granted to a non-member act as a "floor" on the capabilities that can be assigned to any member in the project.
* If a build pipeline specifies a Project Collection scope, it runs with Project scope instead. This reduces the risks of a malicious user obtaining the build service's authentication token.

## Version control support

Git repositories can be browsed and cloned, but only via HTTPS.
SSH and GVFS endpoints are unavailable.
Clients like Visual Studio and IntelliJ work with the HTTPS clone URL but don't offer the connected experience linking to work items and other collateral.

<a id="dashboard-widget-support" />

## Dashboard widget support

The following dashboard widgets won't display any useful information for non-members.

[!INCLUDE [temp](_shared/unavailable-widgets.md)]  
