---
title: View Artifacts storage consumption
description: View Azure Artifacts storage consumption at organization and project levels.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/10/2023
ms.author: rabououn
ms.custom: engagement-fy23
author: ramiMSFT
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Artifacts storage consumption

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts adopts a consumption-based billing model for all the package types it supports, such as NuGet, npm, Python, Maven, and Universal packages. The free-tier plan provides a storage capacity of two Gibibytes (GiB) to store various package types. If you exceed the storage limit, you can either upgrade to a paid subscription or remove some of your existing artifacts.

The artifact storage UI available in your organization/project settings allows you to monitor your storage usage at the organization and project levels. Storage is also grouped by project and artifact type.

## Organization-level storage

The organization-level view provides an overview of your total storage usage as well as the storage consumption by artifact type and by project.

1. Sign in to your Azure DevOps organization.

1. From within your organization, select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

1. Select **Storage** from the left pane.

    :::image type="content" source="media/artifact-storage-navigation.png" alt-text="A screenshot showing how to navigate to org-level storage.":::

1. You can view your total storage summary, storage by artifact type, and storage by projects in your organization.

    :::image type="content" source="media/org-level-storage.png" alt-text="A screenshot showing the storage consumption levels.":::

1. Select **View storage breakdown** from **Storage by type** to view the total storage for packages in your organization-scoped feeds.

    :::image type="content" source="media/packages-org-scoped-feeds.png" alt-text="A screenshot showing total storage for packages in organization-scoped feeds.":::

> [!NOTE]
> The list of **Storage by projects** only includes projects with the largest storage consumption and not the complete list of projects in your organization.

## Project-level storage

The project-level view provides an overview of your total storage usage as well as the storage consumption by artifact type.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. From within your project, select ![gear icon](../media/icons/gear-icon.png) **Project settings**.

1. Select **Storage** from the left pane.

    :::image type="content" source="media/artifacts-storage-navigation-project-level.png" alt-text="A screenshot showing how to navigate to project-level storage.":::

1. You can view your total storage summary and storage consumption by artifact type for your project.

    :::image type="content" source="media/proj-level-storage.png" alt-text="A screenshot showing project level storage consumption.":::

1. Select **View storage breakdown** from **Storage by type** to view the total storage for packages in project-scoped feeds.

    :::image type="content" source="media/packages-proj-scoped-feeds.png" alt-text="A screenshot showing the total storage for packages in project-scoped feeds.":::

> [!NOTE]
> Azure Artifacts provides 2GiB of free storage for each organization. After reaching the maximum storage limit, you need to [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

## Related articles

- [Get started with NuGet packages in Azure Artifacts](get-started-nuget.md)
- [Publish NuGet packages with Azure Pipelines (YAML/classic)](../pipelines/artifacts/nuget.md)
- [Azure DevOps blog: Artifacts billing](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/)
