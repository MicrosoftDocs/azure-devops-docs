---
title: Install or enable Analytics
titleSuffix: Azure DevOps Server
description: Learn how to add or enable Analytics for your Azure DevOps Server collection.
ms.topic: how-to
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
monikerRange: "<azure-devops"
ms.date: 10/25/2024
---

# Install or enable the Analytics service

[!INCLUDE [version-gt-eq-2019-lt-azure-devops](../../includes/version-gt-eq-2019-lt-azure-devops.md)]

::: moniker range=">= azure-devops-2020" 

For Azure DevOps Server 2020 and later versions, the Analytics service is generally available and automatically enabled for all new project collections added to your server. For project collections upgraded from a previous version, you might need to [manually enable it](#enable-analytics). You enable Analytics for each project collection for which you want to generate Analytics reports. 

::: moniker-end

> [!NOTE]
> The Analytics Marketplace extension and Analytics are **not supported** for TFS 2018 or earlier versions.

Analytics supports access to Analytics widgets for all projects defined in the project collection. For more information, see [What is Analytics?](../powerbi/what-is-analytics.md) and [Widgets based on Analytics](analytics-widgets.md). Data available in Analytics is summarized in [Data available from Analytics](../powerbi/data-available-in-analytics.md).

## Prerequisites

**For Azure DevOps Server 2019.1 and greater:**

|Category  | Requirements |
|-------------|-------------|
| **Project collection**   |[Project collection](/azure/devops/server/admin/manage-project-collections).    |
| **Permissions** | To enable, pause, disable, or resume Analytics: Member of the [Project Collection Administrators group](../../organizations/security/change-organization-collection-level-permissions.md) with [Edit collection-level information permissions](../../organizations/security/permissions.md#collection). For more information about other prerequisites regarding service and feature enablement and general data tracking activities, see [Permissions and prerequisites to access Analytics](../analytics/analytics-permissions-prerequisites.md). |
| **Tools** |Azure DevOps Server [installed and configured](/azure/devops/server/install/get-started).  |

<a name="enable-analytics"></a>

## Enable Analytics

> [!NOTE]
> Analytics is automatically enabled for all newly created project collections.

1. From a web browser, select (1) the project collection, (2) **Collection Settings** or **Admin settings**, and then (3) **Analytics**.  

   > [!div class="mx-imgBorder"]  
   > ![Open Collection>Admin settings>Analytics](media/enable-analytics/open-collection-admin-extensions.png) 
1. Select **Enable Analytics**.  

   > [!div class="mx-imgBorder"]  
   > ![Enable Analytics](media/enable-analytics/enable-analytics.png) 

    Once enabled, Analytics staging jobs begin to populate the Analytics data tables. This process could take some time depending on the size of your collection. For more information about the data tables, see [Analytics data model](../extend-analytics/data-model-analytics-service.md).

## Pause or disable Analytics

You can only pause or disable previously enabled Analytics.  

1. From the **Analytics** settings page, select **Pause Analytics** or **Disable Analytics**. 

   > [!div class="mx-imgBorder"]  
   > ![Pause or Disable Analytics](media/enable-analytics/pause-analytics.png) 
2. Confirm that you want to pause or disable the service. 

   > [!div class="mx-imgBorder"]  
   > ![Confirm Pause dialog.](media/enable-analytics/confirm-pause.png)   ![Confirm  Disable](media/enable-analytics/confirm-disable.png)

<a name="resume-analytics"></a>

## Resume Analytics

1. From the **Analytics** settings page, select **Resume Analytics**. 

   > [!div class="mx-imgBorder"]  
   > ![Enable Analytics](media/enable-analytics/enable-analytics.png) 
2. Confirm that you want to resume the service. 

   > [!div class="mx-imgBorder"]  
   > ![Confirm Resume dialog.](media/enable-analytics/confirm-resume.png) 

    Once enabled, Analytics staging jobs begin to populate the Analytics data tables. This process could take some time depending on the size of your collection. 

## What happens if I pause or disable Analytics?

When you pause or disable the Analytics extension (2019), the following features get disabled:

- [Analytics widgets](analytics-widgets.md)
- [Analytics in-context reports, such as pipeline and test reports](overview.md)
- [Power BI integration using Analytics views](../powerbi/what-are-analytics-views.md)
- [OData endpoint queries](../extend-analytics/quick-ref.md) 

Pausing Analytics preserves your data but stops staging jobs from updating your data. You can resume the service later and then your data updates. 

When you disable or remove the Analytics extension (2019), it turns off all Analytics staging jobs and deletes the Analytics data that is stored in the Analytics tables. All Analytics data that captures historical trends is lost. It doesn't delete any other data stored in your collection. You can't undo this action. Once historical data and trending data is deleted, you can't restore it. Re-enabling Analytics doesn't restore the historical data. 

With Analytics disabled or removed, the following actions occur: 

- No staging jobs run, and the Analytics tables information doesn't get updated.  
- Table data is deleted, and if Analytics is re-enabled, all data must get repopulated from scratch.

For more information about the data tables, see [Analytics data model](../extend-analytics/data-model-analytics-service.md).

## Related articles

- [What is Analytics](../powerbi/what-is-analytics.md)
- [Data available from Analytics](../powerbi/data-available-in-analytics.md)
- [Grant permissions for accessing Analytics](../powerbi/analytics-security.md)
- [The Reporting Roadmap](../powerbi/reporting-roadmap.md) 
- [Extension FAQs](../../marketplace/faq-extensions.yml) 

<!--- QUESTION: when would an admin want to pause the service? when they are performing maintenance or moving a server? --> 