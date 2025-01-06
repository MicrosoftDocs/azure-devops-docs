---
title: Project-scoped vs organization-scoped feeds
description: Learn the differences between project-scoped and organization-scoped feeds in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/24/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Feed scopes: Project vs organization feeds

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to manage their dependencies from a single feed. A feed acts as an organizational space to host various types of packages, giving you control over who can access it, whether it's team members within your organization or even public users.

When creating a new feed in Azure Artifacts, you can choose to scope it to either a project or your organization, depending on your scenario. However, Azure Artifacts recommends scoping new feeds to a project. In this article, you'll learn about the key differences between the two types of feeds.

## Create a feed

1. Sign in to your Azure DevOps organization and navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a **Name** for your feed, choose its **Visibility** to specify who can view your packages, and check the **Include packages from common public sources** checkbox if you want to include packages from public sources such as *nuget.org*.

1. Under **Scope**, select **Project** to create a project-scoped feed, or **Organization** if you want an organization-scoped feed.

1. Select **Create** when you're done.

    :::image type="content" source="../media/proj-org-scoped-feed.png" alt-text="A screenshot showing how to create project and organization scoped feeds.":::

> [!NOTE]
> Organization-scoped feeds cannot be converted to project-scoped feeds.

## Project-scoped vs organization-scoped feeds

A project-scoped feed is scoped to a project instead of an organization. Here are the main differences between the two types of feeds:

| **Category**      | **Project-Scoped Feed**                                                                                      | **Organization-Scoped Feed**                                                      |
|-------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Visibility**    | Inherits the visibility of the project.                                                                       | Always private by default.                                                        |
| **Links**         | The URL includes the project name.<br>Example: `https://pkgs.dev.azure.com/<ORG_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json` | The URL does not include a project.<br>Example: `https://pkgs.dev.azure.com/<ORG_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json` |
| **User Interface**| Visible only after navigating to the project that hosts the feed.                                              | Always available from the feeds dropdown menu.                                     |
| **Connection**    | To access a feed from a pipeline running in a different project within the same organization, the **Project Collection Build Service** and the project's **Build Service** identity of the project running the pipeline must be granted the **Feed Publisher (Contributor)** role in feed settings. | You only need to assign the **Project Collection Build Service** the **Feed Publisher (Contributor)** role in feed settings. |

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > selecting the ellipsis button on the right for the specified view > then selecting **Edit**.

> [!TIP]
> If you want to add an extra layer of security to your project-scoped feed and protect your feed's visibility, you can disable the **Allow public projects** policy from the [Organization Policy Settings](../../organizations/accounts/change-application-access-policies.md).

## Q&A

#### Q: How can I share packages with all users in my organization?

A: To make specific packages in your feed accessible to all users in your organization, create or select a [view](views.md) that contains the packages you want to share and  set its visibility to **People in my organization**.

> [!IMPORTANT]
> If a user has access to a specific view, they will still be able to view and download packages from that view even without feed-level permissions.
> If you want to fully restrict access to your packages, ensure permissions are limited for both the feed and its views. See [Feeds and views permissions](feed-permissions.md) for more details.

#### Q: How can I access a project-scoped feed in another project from my pipeline?

To allow a pipeline to access a project-scoped feed in a different project, you need to grant the pipeline access to both the project where the feed is scoped and to the feed itself.

- **Project permissions**: navigate to the project hosting the feed, select **Project settings** > **Permissions** and then add your pipeline's *project build service* to the Contributors group or any group that grants contributor access.

- **Feed permissions**: navigate to the feed you want to access, select  **Settings** > **Feed permissions**, and then add your *project build service* as a **Feed and Upstream Reader (Collaborator)**. The *Project build service* identity is formatted as follows: `[Project name] Build Service ([Organization name])` (for example, FabrikamFiber Build Service (codesharing-demo)).

#### Q: How can I download a pipeline artifact from another project within the same organization?

A: If your pipeline is failing to download an artifact from another project, ensure the following permissions are set for both the downstream project and the pipeline generating the artifact:

- **On the pipeline generating the artifact** (upstream project): select the ellipsis for more options > **Manage security** > search for your downstream project's build service, then allow the following permissions: **Update build information**, **View build pipeline**, and **View builds**.

- **On the downstream project**: navigate to **Project Settings** > **Permissions** > **Users** > search for your upstream project's name, then select **Expand search** > select your upstream project's build service and enable **View project-level information**.

#### Q: If I enable upstream sources in a new feed and set its visibility to 'Members of your Microsoft Entra tenant,' do I still need to add Microsoft Entra users to the Azure DevOps Organization that contains the feed?

A: Yes, adding users to the Azure DevOps organization is still required for them to access the packages in the feed. You can add them as **Project Collection Valid Users** from **Organization Settings** > **Security** > **Permissions**.

## Related content

- [Configure feed permissions](./feed-permissions.md)
- [Use feed views to share packages](./views.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)
