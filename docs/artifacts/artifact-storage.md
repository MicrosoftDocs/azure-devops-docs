---
title: Monitor Artifacts storage consumption
description: Learn how to monitor Azure Artifacts storage usage at Organization and Project levels.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 02/03/2026
ms.author: rabououn
ms.custom: engagement-fy23
author: ramiMSFT
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Monitor Artifacts storage consumption

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure Artifacts uses a consumption‑based billing model and supports storing various package types, including NuGet, npm, Python, Maven, Cargo, and Universal Packages. The free tier provides 2 GiB of storage but if you exceed this limit, you can either upgrade to a paid subscription or delete existing artifacts.
The artifact storage UI in your organization and project settings lets you monitor storage usage at both the organization and project levels. Storage is also grouped by project and artifact type.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](start-using-azure-artifacts.md#create-a-new-feed). |


## Organization-level storage

The organization‑level storage view provides an overview of total storage usage, including storage consumption by artifact type and by project.

1. Sign in to your Azure DevOps organization.

1. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**, and then select **Storage** from the left navigation pane.

    :::image type="content" source="media/artifact-storage-navigation.png" alt-text="A screenshot displaying how to navigate to the organization-level storage view.":::

1. You can view your **Total storage summary**, **Storage by artifact type**, and **Storage by projects** in your organization.

    :::image type="content" source="media/org-level-storage.png" alt-text="A screenshot showing the storage consumption levels.":::

1. Select **View storage breakdown** from the **Storage by type** section to view total storage for packages in your organization-scoped feeds.

    :::image type="content" source="media/packages-org-scoped-feeds.png" alt-text="A screenshot showing the total storage for packages in organization-scoped feeds.":::

> [!NOTE]
> The **Storage by projects** list includes only projects with the largest storage consumption, not the complete list of projects in your organization.

## Project-level storage

The project-level storage view provides an overview of total storage usage, including storage consumption by artifact type.

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. From the left navigation pane, select ![gear icon](../media/icons/gear-icon.png) **Project settings**, then **Storage**.

    :::image type="content" source="media/artifacts-storage-navigation-project-level.png" alt-text="A screenshot displaying how to navigate to project-level storage view.":::

1. You can view your **Total storage summary** and **Storage by artifact type** for your project.

    :::image type="content" source="media/proj-level-storage.png" alt-text="A screenshot showing project level storage consumption.":::

1. Select **View storage breakdown** from the **Storage by type** section to view the total storage for packages in your project-scoped feeds.

    :::image type="content" source="media/packages-proj-scoped-feeds.png" alt-text="A screenshot showing the total storage for packages in project-scoped feeds.":::

> [!NOTE]
> Azure Artifacts provides 2 GiB of free storage for each organization. The free tier is designed to help you evaluate if Azure Artifacts fits your workflow. As your organization starts handling more critical tasks, we recommend [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing) to ensure you have the appropriate resources.

## Size and count limits

The following table illustrates the supported size and count limits for each package type:

| Package type       | Package size limit (per file)                                     | Version count limit                | Package ID limit (per feed) |
|--------------------|-------------------------------------------------------------------|------------------------------------|-----------------------------|
| NuGet              | 500 MiB                                                           | 5,000 versions per package ID      | Unlimited                   |
| npm                | 500 MiB                                                           | 5,000 versions per package ID      | Unlimited                   |
| Maven              | 500 MiB                                                           | 5,000 versions per package ID      | Unlimited                   |
| Python             | 500 MiB                                                           | 5,000 versions per package ID      | Unlimited                   |
| Cargo              | 500 MiB                                                           | 5,000 versions per package ID      | Unlimited                   |
| Universal Packages | 4 TiB                                                             | 5,000 versions per package ID      | Unlimited                   |

> [Note]
> Azure Artifacts enforces a hard limit of **375 KB** for *package.json* files in npm projects.

## Increase Artifacts storage limit 

Azure Artifacts includes 2 GiB of free storage per organization. Once your organization reaches the storage limit, you won’t be able to publish new artifacts. To continue, you can either delete some of your existing artifacts or increase your storage limit by following these steps:

1. [Set up billing for your organization](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing-for-your-organization).

1. Sign in to your Azure DevOps organization, select **Organization settings** > **Billing**, then select **No limit, pay for what you use** from the **Usage limit** dropdown.

1. Select **Save** when you're done.

   :::image type="content" source="media/increase-usage-limit.png" alt-text="A screenshot displaying how to increase Artifacts storage limit." lightbox="media/increase-usage-limit.png":::

## FAQs

#### Q: What counts toward my total billed storage?

A: All package types, including npm, NuGet, Python, Maven, Cargo, and Universal Packages count toward your billed storage. Packages saved from upstream sources also count toward your billed storage. However, Pipeline Artifacts and Pipeline Caching do not contribute to storage charges.

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

## Related content

- [Delete and recover packages](how-to/delete-and-recover-packages.md)

- [Set up upstream sources](how-to/set-up-upstream-sources.md)

- [Azure DevOps blog: Artifacts billing](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/)
