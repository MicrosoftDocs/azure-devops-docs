---
title: Project scoped feeds
description: Understand the difference between project-scoped and organization-scoped feeds
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/03/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Project-scoped feeds

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When creating a new Azure Artifacts feed, you can choose to scope your feed to your project or your organization depending on your needs. Feeds that are created through the web interface are project-scoped by default.

## Create a new feed

::: moniker range=">= azure-devops-2019"

Follow the instructions below and select the appropriate scope for your need to create a project-scoped or an organization-scoped feed.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="A screenshot showing the create feed button.":::

1. Give your feed a **Name** and choose its **visibility**. Select **upstream sources** if you want to include packages from public registries.

1. Select **Project** if you want to create a project-scoped feed, otherwise select **Organization**.

1. Select **Create** when you're done.

    :::image type="content" source="../media/proj-org-scoped-feed.png" alt-text="A screenshot showing how to create project and organization scoped feeds.":::

::: moniker-end

::: moniker range="tfs-2018"

1. Navigate to **Build & Release**, and then select **Packages**.

    :::image type="content" source="../media/goto-feed-hub.png" alt-text="A screenshot showing how to navigate to feeds in TFS.":::

1. Select the dropdown menu, and then select **New feed**.

    :::image type="content" source="../media/new-feed-button.png" alt-text="A screenshot showing how to create a new feed in TFS.":::

1. Give your feed a **Name**, a **Description**, and then select who can read and contribute to your feed. Select **Include external packages** if you want to use packages from public registries.

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog-azure-tfs.png" alt-text="A screenshot showing how to set up a new feed in TFS.":::

::: moniker-end

> [!NOTE]
> Organization-scoped feeds cannot be converted into project-scoped feeds.

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

1. **Connection**:
    * When connecting to a private project scoped feed from an Azure DevOps pipeline that is in the same organization but in a different project, the project that the feed is scoped to must allow access to the other project's build service. The build service must also be separately added to the feed permissions, regardless of the scope of the feed. See [Package permissions](./feed-permissions.md#pipelines-permissions) for more details.

## Security policies

if you want to add an extra layer of security to your project-scoped feed and protect your feed's visibility, you can disable the **Allow public projects** policy from the [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md).

Alternatively, you can use the [Create Feed API](/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1&preserve-view=true) to manually create a new organization-scoped feed. You will have to set the default permissions for the new feed manually either by using the [Feed Permission API](/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1&preserve-view=true) or the Artifacts feed settings.

> [!IMPORTANT]
> If a user has permissions to access a specific view, and they don't have permissions to the feed, they will still be able to access and download packages through that view.  
> If you want to completely hide your packages, you must restrict access to both the feed and the view. See [Feeds and views permissions](feed-permissions.md) for more details.

## Q&A

#### Q: How to access a project-scoped feed in another project using Azure Pipelines?

In order for a pipeline to access a project-scoped feed in a different project, it is necessary to grant the pipeline access to both the project where the feed is scoped and the feed itself.

- Project setup: navigate to the project hosting the feed, select **Project settings** > **Permissions** and then add your pipeline's *project build service* to the Contributors group or any other suitable group that provides contributor access to its users.

- Feed setup: Navigate to the feed you want to access, select  **Settings** > **Feed permissions** and then add your *project build service* as a **Collaborator**. Your *Project build service* identity is displayed in the following format: `[Project name] Build Service ([Organization name])` (e.g. FabrikamFiber Build Service (codesharing-demo))

## Related articles

- [Configure permissions](./feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Use feed views to share packages](./views.md)