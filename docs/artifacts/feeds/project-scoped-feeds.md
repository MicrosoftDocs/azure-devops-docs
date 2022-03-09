---
title: Project scoped feeds
description: Understand the difference between project-scoped and organization-scoped feeds
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 02/22/2022
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Project-scoped feeds

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Previously, Azure Artifacts feeds used to be scoped to an organization. To enable public feeds and for more consistency with other services in Azure DevOps, feeds that are created through the web interface are now scoped to a project. 

New organizations will automatically have one feed scoped to the organization and all subsequent feeds created will be scoped to a project. All existing organization-scoped feeds will remain scoped to an organization.

## Project-scoped vs organization-scoped feeds

A project-scoped feed is scoped to a project instead of an organization. Here are the main differences between the two types of feeds:

1. **Visibility**:

    * Project-scoped feeds inherit the visibility of the project.
    * Organization-scoped feeds are always private by default.

1. **Links**:

    * The URL of a project-scoped feed includes the project.
        * Example: `https://pkgs.dev.azure.com/<ORG_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json`

    * The URL of an organization-scoped feed doesn't include a project.
        * Example: `https://pkgs.dev.azure.com/<ORG_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json`

1. **User interface**:
    * All organization-scoped feeds are available from the feeds' dropdown menu. To see a project-scoped feed in the list of feeds, you have to navigate to the project hosting that feed.

    > [!IMPORTANT]
    > Creating new organization-scoped feeds is not recommended.

1. **Connection**:
    * When connecting to a private project scoped feed from an Azure DevOps pipeline that is in the same organization but in a different project, the project that the feed is scoped to must allow access to the other project's build service. The build service must also be separately added to the feed permissions, regardless of the scope of the feed. See [Package permissions](./feed-permissions.md#pipelines-permissions) for more details.

## Security policies

if you want to add an extra layer of security to your project-scoped feed and protect your feed's visibility, you can disable the **Allow public projects** policy from the [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md).

Alternatively, you can use the [Create Feed API](/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1&preserve-view=true) to manually create a new organization-scoped feed. You will have to set the default permissions for the new feed manually either by using the [Feed Permission API](/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1&preserve-view=true) or the Artifacts feed settings.

> [!IMPORTANT]
> If a user has permissions to access a specific view, and they don't have permissions to the feed, they will still be able to access and download packages through that view.  
> If you want to completely hide your packages, you must restrict access to both the feed and the view. See [Feeds and views permissions](feed-permissions.md) for more details.

## Related articles

- [Configure permissions](./feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Use feed views to share packages](./views.md)