---
title: Project-scoped vs organization-scoped feeds
description: Learn the differences between project-scoped and organization-scoped feeds in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/24/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Project-scoped vs organization-scoped feeds

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to manage their dependencies from a single feed. A feed acts as an organizational space to host various types of packages, giving you control over who can access it, whether it's team members within your organization or even public users.

When creating a new feed in Azure Artifacts, you can choose to scope it to either a project or your organization, depending on your scenario. However, Azure Artifacts recommends scoping new feeds to a project. In this article, you'll learn about the key differences between the two types of feeds.

## Create a new feed

::: moniker range=">= azure-devops-2019"

Follow these instructions and select the appropriate scope for your need to create a project-scoped or an organization-scoped feed.

1. Select **Artifacts**, and then select **Create Feed**.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="A screenshot showing the create feed button.":::

1. Give your feed a **Name** and choose its **visibility**. Select **upstream sources** if you want to include packages from public registries.

1. Select **Project** if you want to create a project-scoped feed, otherwise select **Organization**.

1. Select **Create** when you're done.

    :::image type="content" source="../media/proj-org-scoped-feed.png" alt-text="A screenshot showing how to create project and organization scoped feeds.":::

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
    * When connecting to a private project scoped feed from an Azure Pipelines pipeline that is in the same organization but in a different project, the project that the feed is scoped to must allow access to the other project's build service. The build service must also be separately added to the feed permissions, regardless of the scope of the feed. For more information, see [Package permissions](./feed-permissions.md#pipelines-permissions).

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > Select the ellipsis button on the right for the specified view > **Edit** .

## Security policies

If you want to add an extra layer of security to your project-scoped feed and protect your feed's visibility, you can disable the **Allow public projects** policy from the [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md).

Alternatively, you can use the [Create Feed API](/rest/api/azure/devops/artifacts/feed%20%20management/create%20feed?view=azure-devops-rest-5.1&preserve-view=true) to manually create a new organization-scoped feed. You'll have to set the default permissions for the new feed manually either by using the [Feed Permission API](/rest/api/azure/devops/artifacts/feed%20%20management/set%20feed%20permissions?view=azure-devops-rest-5.1&preserve-view=true) or the Artifacts feed settings.

> [!IMPORTANT]
> If a user has permissions to access a specific view, and they don't have permissions to the feed, they will still be able to access and download packages through that view.  
> If you want to completely hide your packages, you must restrict access to both the feed and the view. For more information, see [Feeds and views permissions](feed-permissions.md).

## Q&A

#### Q: How can I share packages with all users in my organization?

A: If you want to make certain packages in your feed available to all users in your organization, create or select a [view](views.md) that contains the packages you want to share and ensure its visibility is set to **People in my organization**.

#### Q: How to access a project-scoped feed in another project using Azure Pipelines?

In order for a pipeline to access a project-scoped feed in a different project, it's necessary to grant the pipeline access to both the project where the feed is scoped and the feed itself.

- Project setup: navigate to the project hosting the feed, select **Project settings** > **Permissions** and then add your pipeline's *project build service* to the Contributors group or any other suitable group that provides contributor access to its users.

- Feed setup: Navigate to the feed you want to access, select  **Settings** > **Feed permissions**, and then add your *project build service* as a **Feed and Upstream Reader (Collaborator)**. Your *Project build service* identity is displayed in the following format: `[Project name] Build Service ([Organization name])` (for example, FabrikamFiber Build Service (codesharing-demo)).

#### Q: I want to download a pipeline artifact from another project but my pipeline is failing?

A: If you want to download a pipeline artifact from another project within the same organization, make sure that the following permissions are set for both your downstream project and the pipeline generating the artifact:

On the pipeline generating the artifact (downstream project): select the ellipsis for more options > **Manage security** > search for your upstream project's build service and allow the following: **Update build information**, **View build pipeline**, and **View builds**.

On the downstream project: **Project Settings** > **Permissions** > **Users** > search for your upstream project's name and then select **Expand search** > select your upstream project's build service and allow the following: **View project-level information**.

#### Q: If I enable upstream sources in a new feed and set its visibility to 'Members of your Microsoft Entra tenant,' do I still need to add Entra users to the Azure DevOps Organization that contains the feed?
A: Yes, you'll still need to add users to the Azure DevOps Organization for them to access the packages in the feed. You can add them as **Project Collection Valid Users** from **Organization Settings** > **Security** > **Permissions**. All standard Azure DevOps identity and licensing requirements will apply. 

## Related articles

- [Configure permissions](./feed-permissions.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
- [Use feed views to share packages](./views.md)
