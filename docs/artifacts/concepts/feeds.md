---
title: What are feeds? | Azure Artifacts
description: Feeds manage and set permissions for packages in Azure DevOps Services or Team Foundation Server
ms.assetid: 21673f53-68a3-4d44-866e-ad29435a3fde
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 09/25/2020
monikerRange: '>= tfs-2017'
---

# What are feeds?

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Artifacts Feeds are organizational constructs that allow you to store, manage, and group your packages and control who to share it with using [feeds permissions](../feeds/feed-permissions.md).

Feeds are not package-type dependent. You can store all the following package types in a single feed: npm, NuGet, Maven, Python, and Universal packages. 

::: moniker range=">= azure-devops-2019"

## Project-scoped feeds vs. Organization-scoped feeds

Previously, all feeds were scoped to an organization, they could be viewed and accessed in the Azure Artifacts hub from any project within an organization. With the introduction of public feeds, we also introduced **project-scoped feeds**, which live inside the project that they were created in, and can only be seen when accessing the Azure Artifacts hub within that project. 

Only project-scoped feeds can be made public, see the following section on [public feeds](#public-feeds). [Learn more](../feeds/project-scoped-feeds.md) about the differences between project-scoped and organization-scoped feeds.T

> [!NOTE]
> To access a feed in a different organization, a user must be given access to the project hosting that feed.

## Public feeds

Public feeds can be used to share your packages publicly with anyone on the Internet. Users won't have to be a member of your organization or your enterprise. They can access the packages even if they don't have an Azure DevOps account. 

Public feeds are **project-scoped feeds** and it will inherit the visibility settings of the hosting project.

There some important things to note regarding public feeds:

* Public feeds can only be created inside of public projects.
* Public feeds aren't intended as a replacement for existing registries of record (NuGet.org, npmjs.com, etc.).
* Public feeds cannot have upstream sources.
* Public users cannot currently download universal packages. All other package types are supported for public access.

## Create a feed

[!INCLUDE [](../includes/create-feed.md)]

## Restoring a deleted feed

If you accidentally delete a feed, Azure Artifacts provides a 30 days window to recover your feed to its original state. After the 30 days, the feed will be deleted permanently. During the recovery window, the feed name will be reserved, package download unavailable and write access suspended for that feed.

You can view the feeds pending permanent deletion in your **Feeds** dropdown list under the **Deleted Feeds** tab.

1. Under **Deleted feeds** select your feed.

    > [!div class="mx-imgBorder"] 
    > ![Deleted feeds dropdown](media/deleted-feeds-dropdown.png)

1. Select **Feed Settings**.

    > [!div class="mx-imgBorder"] 
    > ![Feed settings button](media/feed-settings-button.png)

1. Select **Restore Feed**.

    > [!div class="mx-imgBorder"] 
    > ![Restore feed](media/restore-feed.png)

## Permanently deleting a feed

A feed pending deletion will still use storage space. If you want to permanently delete your feed before the pending period is up, you can do this in the pending feeds settings. 

1. In the feed pending deletion, click **Feed Settings**

2. Select **Permanently delete** and confirm the deletion

Once the feed is permanently deleted, the feed and all of its packages cannot be viewed or restored. The feed name will be available for reuse fifteen minutes after permanent deletion.

::: moniker-end
