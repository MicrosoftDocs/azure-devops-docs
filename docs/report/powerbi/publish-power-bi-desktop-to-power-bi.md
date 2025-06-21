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
ms.date: 06/13/2025
---

# Publish a Power BI Desktop file to Power BI 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article explains how to share your Power BI Desktop file, along with its datasets, measures, and charts, by creating a dashboard in Power BI.  

## Prerequisites

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]

## Publish to Power BI

1. If you're using an [Analytics view](what-are-analytics-views.md), make sure the view is set to **Shared**, not **Private**.

2. Open your **Power BI Desktop** file that contains the data you want to publish.

3. On the **Home** tab, select **Publish**.

   :::image type="content" source="media/publish-1.png" alt-text="Screenshot shows highlighted Publish button for Power BI Desktop file.":::

4. Follow the prompts for signing in. If you don't have a Power BI account, create one when prompted. Select **Sign in**.

5. After publishing, to view your report in Power BI, select the **Open 'file name' in Power BI** link.

   :::image type="content" source="media/publish-2.png" alt-text="Screenshot shows successful publish and link to open pbix file.":::

## Configure refresh schedule

Scheduled refresh allows datasets to be updated automatically at specified intervals, ensuring that reports and dashboards reflect the most current data.

1. Ensure that your Power BI report is saved to your Power BI workspace.
2. In your Power BI workspace, select the ellipsis (**...**) next to your dataset and select **Schedule Data Refresh**.
3. On the schedule refresh page, choose which data connections you want to refresh.
4. Set the refresh frequency and specify the time of day for the refresh to occur. The refresh can start as early as five minutes before the scheduled time, but delays of up to one hour might occur.

5. Find the dataset for your report, named after your file, and select the ellipsis **...** next to it.

    :::image type="content" source="media/publish-3.png" alt-text="Select the dataset":::


6. Under Data source credentials, select the **Edit credentials** link next to ODATA.

    :::image type="content" source="media/publish-4.png" alt-text="Update odata credentials":::

7. Choose the appropriate authentication method:
   
      [!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

    - **oAuth2** (recommended) for Microsoft Entra ID.
    
    ![Configure Areas dialog](media/aad-auth-power-bi.png)

    - Basic for Personal Access Token (PAT) credentials.

    > [!IMPORTANT]
    > If you use a PAT, remember it expires after a set interval. When it expires, [update the credentials](client-authentication-options.md#update-credentials). Otherwise, the report stops updating with the latest data, even though it still displays existing data.

8. Select **Sign in**.

After you complete these steps, Power BI refreshes your data on the schedule you configure, using the credentials you provided.

> [!IMPORTANT]
> Any data included in the Analytics view and published to Power BI is accessible to all users with access to the report, regardless of the project permissions set in Azure DevOps.    

## Related articles

- [Learn about Power BI integration](overview.md)  
- [Access data through Excel](access-analytics-excel.md)  
- [Access data through Power BI desktop](access-analytics-power-bi.md)  
