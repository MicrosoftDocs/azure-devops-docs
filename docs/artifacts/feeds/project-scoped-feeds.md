---
title: Project scoped feeds
description: Project scoped feeds in Azure Artifacts in Azure DevOps Services or Team Foundation Server
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 05/07/2020
monikerRange: '>= tfs-2017'
---

# Project-scoped feeds

Historically, all feeds used to be scoped to an organization. However, to enable public feeds and to become more consistent with the rest of Azure DevOps, feeds created through the new create feed panel will now be scoped to a project. New organization will automatically have one feed scoped to the organization and all subsequent feeds created will be scoped to a project. All existing organization-scoped feeds will remain organization-scoped.

## The differences between an organization-scoped feed and a project-scoped feed

A project-scoped feed is scoped to a project instead of an organization. Here are the main differences between the two feed types.

* Project-scoped feeds will always use the visibility of the project. If a project is public, the feed is also public and if the project is private, the feed is also private. Organization-scoped feeds will always remain private.

* The URL of a project-scoped feed includes the project. The URL of an organization-scoped feed doesn't include a project.

    * Project-scoped feed: `https://feeds.dev.azure.com/contoso/projectId/_apis/Packaging/Feeds`

    * Organization-scoped feed: `https://feeds.dev.azure.com/contoso/_apis/Packaging/Feeds`

* All organization-scoped feeds will show up in the feed list of the Artifacts feed UI. To see a project-scoped feed in the list you have to be navigated to the project the feed is scoped to.

* All new feeds are recommended to be project-scoped. Creating a new feed through the create feed panel will create a project-scoped feed.

* When connecting to a private project scoped feed from an Azure DevOps pipeline that is in the same organization but in a different project, the project that the feed is scoped to must allow access to the other project's build service. The build service must also be separately added to the feed permissions, regardless of the scope of the feed.

### What can I do if I'm concerned about my project-scoped feed's visibility

There is an option to not allow public projects in an organization. It can be set under Security policies in [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md). If you're concerned that your project will be turned public in the future and you want your feed remain private, you can use the organization-scoped feed that's automatically created when a new organization is created. Alternatively, you can use the [Create Feed API](https://docs.microsoft.com/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1) to manually create a new organization-scoped feed. You will have to set the default permissions for the new feed manually either by using the [Feed Permission API](https://docs.microsoft.com/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1) or the Artifacts feed settings. Creating new organization-scoped feeds is not recommended.

> [!NOTE]
> If you want to share a package in your feed with all the users in your organization, you can promote that package to a `view` and set its visibility to `People in my organization`. See [Get started with feed views](./views.md#get-started-with-feed-views) for more information.

