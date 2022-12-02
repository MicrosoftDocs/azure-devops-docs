---
title: View Artifacts storage consumption
description: View Azure Artifacts storage consumption at organization and project levels.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 12/02/2022
ms.author: rabououn
author: ramiMSFT
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Artifacts storage consumption

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts uses a consumption-based billing for all the supported package types (NuGet, npm, Python, Maven, and Universal packages). With Azure Artifacts free-tier plan, you get two Gibibytes (GiB) of free storage to store different types of packages. When you reach your maximum storage limit, you can either upgrade to a paid subscription or delete some of your existing artifacts.

Using the artifact storage UI from your organization/project settings, you can view your storage consumption at both the organization level and the project level. Storage is also grouped by project and/or by artifact type.

## Organization-level storage

The organization-level view shows your total storage summary and your storage consumption by artifact type and by project.

1. From within your organization, select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

1. Select **Storage** from the left pane.

    :::image type="content" source="media/artifact-storage-navigation.png" alt-text="A screenshot showing how to navigate to org-level storage.":::

1. You can view your total storage summary, storage by artifact type, and storage by projects in your organization.

    :::image type="content" source="media/org-level-storage.png" alt-text="A screenshot showing the storage consumption levels.":::

1. Select **View storage breakdown** from **Storage by type** to view the total storage for packages in your organization-scoped feeds.

    :::image type="content" source="media/packages-org-scoped-feeds.png" alt-text="A screenshot showing total storage for packages in organization-scoped feeds.":::

> [!NOTE]
> **Storage by projects** only list projects with the largest storage consumption and not the full list of projects in your organization.

## Project-level storage

The project-level view shows your total storage summary and your storage consumption by artifact type.

1. From within your project, select ![gear icon](../media/icons/gear-icon.png) **Project settings**.

1. Select **Storage** from the left pane.

    :::image type="content" source="media/artifacts-storage-navigation-project-level.png" alt-text="A screenshot showing how to navigate to project-level storage.":::

1. You can view your total storage summary and storage consumption by artifact type for your project.

    :::image type="content" source="media/proj-level-storage.png" alt-text="A screenshot showing project level storage consumption.":::

1. Select **View storage breakdown** from **Storage by type** to view the total storage for packages in project-scoped feeds.

    :::image type="content" source="media/packages-proj-scoped-feeds.png" alt-text="A screenshot showing the total storage for packages in project-scoped feeds.":::

> [!NOTE]
> Azure Artifacts offers 2GiB of free storage for every organization. Once the maximum storage limit is reached, you must [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

## Related articles

- [Artifacts feeds](concepts/feeds.md)
- [Feed views](concepts/views.md)
- [Get started with NuGet packages in Azure Artifacts](get-started-nuget.md)
- [Publish NuGet packages with Azure Pipelines (YAML/classic)](../pipelines/artifacts/nuget.md)
- [Azure DevOps blog: Artifacts billing](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/)
