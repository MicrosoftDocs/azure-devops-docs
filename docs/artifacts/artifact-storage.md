---
title: Monitor Artifacts storage consumption
description: How to monitor Azure Artifacts storage usage at Organization and Project levels.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 05/13/2024
ms.author: rabououn
ms.custom: engagement-fy23
author: ramiMSFT
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Monitor Artifacts storage consumption

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure Artifacts adopts a consumption-based billing model for all the package types it supports, such as NuGet, npm, Python, Maven, and Universal packages. The free-tier plan provides a storage capacity of two Gibibytes (GiB) to store various package types. If you exceed the storage limit, you can either upgrade to a paid subscription or remove some of your existing artifacts.

The artifact storage UI available in your organization/project settings allows you to monitor your storage usage at the organization and project levels. Storage is also grouped by project and artifact type.

## Organization-level storage

The organization-level view provides an overview of your total storage usage as well as the storage consumption by artifact type and by project.

1. Sign in to your Azure DevOps organization.

1. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**, and then select **Storage** from the left navigation pane.

    :::image type="content" source="media/artifact-storage-navigation.png" alt-text="A screenshot showing how to navigate to org-level storage.":::

1. You can view your total storage summary, storage by artifact type, and storage by projects in your organization.

    :::image type="content" source="media/org-level-storage.png" alt-text="A screenshot showing the storage consumption levels.":::

1. Select **View storage breakdown** from the **Storage by type** section to view the total storage for packages in your organization-scoped feeds.

    :::image type="content" source="media/packages-org-scoped-feeds.png" alt-text="A screenshot showing total storage for packages in organization-scoped feeds.":::

> [!NOTE]
> The list of **Storage by projects** only includes projects with the largest storage consumption and not the complete list of projects in your organization.

## Project-level storage

The project-level view provides an overview of your total storage usage as well as the storage consumption by artifact type.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select ![gear icon](../media/icons/gear-icon.png) **Project settings**, and then select **Storage** from the left navigation pane.

    :::image type="content" source="media/artifacts-storage-navigation-project-level.png" alt-text="A screenshot showing how to navigate to project-level storage.":::

1. You can view your total storage summary and storage consumption by artifact type for your project.

    :::image type="content" source="media/proj-level-storage.png" alt-text="A screenshot showing project level storage consumption.":::

1. Select **View storage breakdown** from the **Storage by type** section to view the total storage for packages in your project-scoped feeds.

    :::image type="content" source="media/packages-proj-scoped-feeds.png" alt-text="A screenshot showing the total storage for packages in project-scoped feeds.":::

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. This free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization starts handling more critical tasks, we recommend [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing) to ensure you have the appropriate resources.

## Increase Artifacts storage limit 

[!INCLUDE [](includes/increase-storage-limit.md)]

## FAQs

#### Q: What counts toward my total billed storage?

A: All package types: npm, NuGet, Python, Maven, Cargo, and Universal Packages are included in your billed storage. Packages saved from upstream sources also count toward your billed storage. However, Pipeline Artifacts and Pipeline Caching do not contribute to storage charges.

#### Q: Do packages in the recycle bin affect my storage usage?

A: Yes, packages in the recycle bin still count toward your total storage. They are automatically deleted after 30 days, but you can manually remove them earlier by deleting them from the recycle bin.

#### Q: What happens if I remove my Azure Subscription from my Azure DevOps organization?

A: Removing your Azure Subscription from your Azure DevOps organization limits your access to the free tier. If your storage usage exceeds 2 GiB, you will have read-only access to packages. To publish new packages, you must reduce your storage usage below 2 GiB, or reconnect your Azure subscription and set up billing to [upgrade your storage tier](#increase-artifacts-storage-limit).

#### Q: Why does my storage usage show as 0 GiB even though I have artifacts stored?

A: The smallest unit of storage measurement is 1 GiB. If your usage is below that threshold, it will display as 0 GiB.

#### Q: How long does it take for deleted artifacts to reflect in billed storage?

A: Storage metrics typically update within 24 hours, but it may take up to 48 hours. If you're unable to upload artifacts, a temporary workaround is to increase your usage level and reduce it again once metrics refresh.

> [!NOTE]
> The **Used** column in your **Organization settings** > **Billing** page is updated once a day, so changes may not be reflected right away. However, the **Artifacts** > **Storage** page in your **Organization settings** is updated more frequently, which could result in a slight discrepancy between the two pages.

#### Q: How can I manage retention for outdated packages?

A: You can configure retention policies to automatically delete outdated packages. However, packages promoted to a view are exempt from these policies. See [How to use retention policies to delete old packages](how-to/delete-and-recover-packages.md#delete-packages-automatically-with-retention-policies) for more details.

#### Q: How do I manually delete specific packages?

A: See [Delete and recover packages](how-to/delete-and-recover-packages.md) for step-by-step instructions.

## Related articles

- [Get started with NuGet packages in Azure Artifacts](get-started-nuget.md)
- [Publish NuGet packages with Azure Pipelines (YAML/classic)](../pipelines/artifacts/nuget.md)
- [Azure DevOps blog: Artifacts billing](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/)
