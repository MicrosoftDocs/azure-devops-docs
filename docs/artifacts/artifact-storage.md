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

For the current release, you can view the storage breakdown for **Packages** and for projects listed in the **Storage by projects** section.

The **Packages** storage breakdown lists packages in organization-scoped feeds.

> [!div class="mx-imgBorder"]
> ![Screenshot that shows packages in organization-scoped feeds.](media/packages-org-scoped-feeds.png)

> [!NOTE]
> The **Storage by projects** section shows only projects with the largest storage consumption and not the full list of projects in your organization.

## Project-level storage

The project-level view shows your total storage summary and your storage consumption by artifact type.

1. From within your project, select ![gear icon](../media/icons/gear-icon.png) **Project settings**.

1. Under **Artifacts**, select **Storage** on the left pane.

    > [!div class="mx-imgBorder"]
    > ![Screenshot that shows a menu in project settings with artifact storage highlighted.](media/artifacts-storage-navigation-project-level.png)

1. View your total storage summary and your storage by artifact type.

    > [!div class="mx-imgBorder"]
    > ![Screenshot of project-level artifact storage, with sections for summary and type.](media/project-level-storage.png)

The total storage summary shows your total billable stored artifacts. The **Storage by type** section lists your storage consumption by artifact type. For the current release, you can view your storage breakdown for the **Packages** section only.

> [!NOTE]
> Azure Artifacts offers 2GiB of free storage for every organization. Once the maximum storage limit is reached, you must [set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md) for your organization.

## Related articles

- [What are feeds?](concepts/feeds.md)
- [What are feed views?](concepts/views.md)
- [Get started with NuGet packages](get-started-nuget.md)
- [Publish to NuGet feeds (YAML/classic)](../pipelines/artifacts/nuget.md)
- [Azure Artifacts billing: blog post](https://devblogs.microsoft.com/devops/azure-artifacts-billing-changes-coming-october-2020/)
