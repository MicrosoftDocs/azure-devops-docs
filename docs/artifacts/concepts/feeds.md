---
title: What are feeds? | Azure Artifacts
description: Feeds manage and set permissions for packages in Azure DevOps Services or Team Foundation Server
ms.assetid: 21673f53-68a3-4d44-866e-ad29435a3fde
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.manager: mijacobs
ms.author: phwilson
author: chasewilson
ms.date: 10/28/2019
monikerRange: '>= tfs-2017'
---

# What are feeds?

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

In Azure Artifacts, packages are stored in *feeds*. Feeds are an organizational construct that allow you to group packages and control who has access to them with [permissions](../feeds/feed-permissions.md).

Feeds are not package type dependent. You can store every package type (npm, NuGet, Maven, Python, and Universal) in a single feed.

::: moniker range="azure-devops"

## Project-scoped feeds vs. Organization-scoped feeds

Until now, all feeds were scoped to an organization, they could be viewed and accessed in the Azure Artifacts hub from any project within an organization. With the introduction of public feeds, we also introduced **project-scoped feeds**, which live inside the project that they were created in, and can only be seen when accessing the Azure Artifacts hub within that project. 

Only project-scoped feeds can be made public, see the following section on [public feeds](#public-feeds). [Learn more](../feeds/project-scoped-feeds.md) about the differences between project-scoped and organization-scoped feeds.

## Public feeds

Public feeds can be used to share your packages publicly, with anyone on the Internet; these users don't have to be a member of your organization or enterprise, or even have an Azure DevOps account at all. 

Public feeds are **project-scoped feeds** that live inside a public project. The feed will follow the visibility of the project it lives in— if the project is private, the feed will be private; if the project is public, the feed will be public.

There some important things to note regarding public feeds:
* Public feeds can only be created inside of public projects
* Public feeds aren't intended as a replacement for existing registries of record (NuGet.org, npmjs.com, etc.)
* Public feeds can't have upstream sources
* Public users cannot currently download universal packages. All other package protocol types are supported for public access.

::: moniker-end
