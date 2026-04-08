---
title: Publish a Power BI Desktop file to Power BI
titleSuffix: Azure DevOps
description: Learn how to publish and enable refresh of a Power BI Desktop file to Power BI that uses Analytics for Azure DevOps.
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.assetid: C03A04EC-F011-4043-A38E-5C5394F777CE
ms.author: chcomley
monikerRange: "<=azure-devops"
author: chcomley
ai-usage: ai-assisted
ms.date: 04/07/2026
ms.custom: sfi-image-nochange, pat-reduction
---

# Publish a Power BI Desktop file to Power BI 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how to share your Power BI Desktop file, along with its datasets, measures, and charts, by creating a dashboard in Power BI.

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Publish to Power BI

1. If you're using an [Analytics view](what-are-analytics-views.md), make sure the view is set to **Shared**, not **Private**.

1. Open your **Power BI Desktop** file that contains the data you want to publish.

1. On the **Home** tab, select **Publish**.

   :::image type="content" source="media/publish-1.png" border="true" alt-text="Screenshot of highlighted Publish button for Power BI Desktop file.":::

1. Follow the prompts for signing in. If you don't have a Power BI account, create one when prompted. Select **Sign in**.

1. After publishing, to view your report in Power BI, select the **Open 'file name' in Power BI** link.

   :::image type="content" source="media/publish-2.png" border="true" alt-text="Screenshot of successful publish and link to open the .pbix file.":::

## Configure refresh schedule

Scheduled refresh automatically updates datasets at specified intervals, so reports and dashboards always show the most current data.

1. Save your Power BI report to your Power BI workspace.
1. In your Power BI workspace, select the ellipsis (**...**) next to your dataset and select **Schedule Data Refresh**.
1. On the schedule refresh page, choose which data connections you want to refresh.
1. Set the refresh frequency and specify the time of day for the refresh to occur.
   The refresh can start as early as five minutes before the scheduled time, but delays of up to one hour might occur.

1. Find the dataset for your report, named after your file, and select the ellipsis **...** next to it.

    :::image type="content" source="media/publish-3.png" border="true" alt-text="Screenshot of the dataset for your report in Power BI.":::

1. Under **Data source credentials**, select the **Edit credentials** link next to **ODATA**.

    :::image type="content" source="media/publish-4.png" border="true" alt-text="Screenshot of Edit credentials link next to OData.":::

1. Choose the appropriate authentication method:
   
      [!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

    - **OAuth2** (recommended) for Microsoft Entra ID. This method provides the most secure and seamless experience, with automatic token refresh and no manual credential rotation.

    :::image type="content" source="media/aad-auth-power-bi.png" border="true" alt-text="Screenshot of OAuth2 authentication configuration for Microsoft Entra ID.":::

    - **Basic** for personal access token (PAT) credentials.

    > [!IMPORTANT]
    > We recommend OAuth2 with Microsoft Entra ID instead of PATs. PATs expire after a set interval and require manual rotation to maintain data refresh. When a PAT expires, the report stops updating with the latest data, even though it still displays existing data. If you must use a PAT, see [Update credentials](client-authentication-options.md#update-credentials) for renewal steps.

1. Select **Sign in**.

After you complete these steps, Power BI refreshes your data on the schedule you configure, using the credentials you provide.

> [!IMPORTANT]
> Any data included in the Analytics view and published to Power BI is accessible to all users with access to the report, regardless of the project permissions set in Azure DevOps.

## Related content

- [Power BI integration overview](overview.md)
- [Access data through Excel](access-analytics-excel.md)
- [Access data through Power BI Desktop](access-analytics-power-bi.md)
