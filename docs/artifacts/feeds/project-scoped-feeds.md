---
title: Project scoped feeds
description: Understand the difference between project-scoped and organization-scoped feeds
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 08/05/2020
monikerRange: '>= tfs-2017'
---

# Project-scoped feeds

Historically, all feeds used to be scoped to an organization. However, to enable public feeds and to become more consistent with the rest of Azure DevOps, feeds created through the new create feed web UI will now be scoped to a project. 

New organizations will automatically have one feed scoped to the organization and all subsequent feeds created will be scoped to a project. All existing organization-scoped feeds will remain organization-scoped.

## Understanding the difference between an organization-scoped feed and a project-scoped feed

A project-scoped feed is scoped to a project instead of an organization. 

Here are the main differences between the two feed types:

1. **Visibility**:

    * Project-scoped feeds will always use the visibility of the project. If a project is public, the feed is also public and if the project is private, the feed is also private. 
    * Organization-scoped feeds will always remain private.

1. **Links**:

    * The URL of a project-scoped feed includes the project.
        * Project-scoped feed: `https://feeds.dev.azure.com/contoso/projectId/_apis/Packaging/Feeds`

    * The URL of an organization-scoped feed doesn't include a project.
        * Organization-scoped feed: `https://feeds.dev.azure.com/contoso/_apis/Packaging/Feeds`

1. **User interface**:
    * All organization-scoped feeds will show up in the feed list of the Artifacts feed UI. To see a project-scoped feed in the list you have to be navigated to the project the feed is scoped to.

    * All new feeds are recommended to be project-scoped. Creating a new feed through the create feed web UI will create a project-scoped feed.

1. **Connection**:
    * When connecting to a private project scoped feed from an Azure DevOps pipeline that is in the same organization but in a different project, the project that the feed is scoped to must allow access to the other project's build service. The build service must also be separately added to the feed permissions, regardless of the scope of the feed. See [Package permissions](/feed-permissions.md#package-permissions-in-azure-pipelines) for more details.

## What can I do if I'm concerned about my project-scoped feed's visibility?

There is an option to not allow public projects in an organization. It can be set under Security policies in [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md).

If you're concerned that your project will be turned public in the future and you want your feed remain private, you can use the organization-scoped feed that's automatically created when a new organization is created.

Alternatively, you can use the [Create Feed API](/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1&preserve-view=true) to manually create a new organization-scoped feed. You will have to set the default permissions for the new feed manually either by using the [Feed Permission API](/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1&preserve-view=true) or the Artifacts feed settings.

> [!IMPORTANT]
> Creating new organization-scoped feeds is not recommended.

> [!NOTE]
> If you want to share a package in your feed with all the users in your organization, you can promote that package to a `view` and set its visibility to `People in my organization`. See [Get started with feed views](./views.md#get-started-with-feed-views) for more information.

> [!IMPORTANT]
> If a user have permission to a specific view, and even if they don't have permission to the feed, they will still be able to access and download packages through that view.  
> If you want to completely hide your packages, you must restrict both feeds and views permissions. See [Feeds and views permissions](feed-permissions.md) for more information.
