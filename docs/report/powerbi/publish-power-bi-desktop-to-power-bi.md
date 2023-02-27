---
title: Publish a Power BI Desktop file to Power BI  
titleSuffix: Azure DevOps 
description: Learn how to publish and enable refresh of a Power BI Desktop file to Power BI that uses Analytics for Azure DevOps. 
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.assetid: C03A04EC-F011-4043-A38E-5C5394F777CE 
ms.author: chcomley
monikerRange: '>=azure-devops-2019'
author: chcomley
ms.date: 10/05/2021
---

# Publish a Power BI Desktop file to Power BI 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Once you've [created a Power BI Desktop file](access-analytics-power-bi.md) and the associated datasets, measures, and charts, you can share them with others by creating a dashboard on Power BI. This article shows you how.   

## Publish to Power BI

1. If using an [Analytics View](what-are-analytics-views.md), verify that the view is Shared and not Private.

1. Open the **Power BI Desktop** file with your data.  

1. Select **Publish** on the **Home** tab. 

    :::image type="content" source="media/publish-1.png" alt-text="Publish Power BI Desktop file":::

4. Respond to the prompts to sign in. If you don't already have a Power BI account, you'll need to create one. Select **Sign in**.
  
    :::image type="content" source="media/publish-2.png" alt-text="Publishing successful":::

1. Select the **Open \<file name\> in Power BI** link.

## Configure refresh schedule

1. Expand the navigation pane in Power BI and select the work space that you selected when you published the report.  

1. Select **Datasets** in the upper right corner.

8. Select the ellipsis next to the dataset that represents the report you just loaded. It's typically the file name.

    :::image type="content" source="media/publish-3.png" alt-text="Select the dataset":::

1. Select **Schedule Refresh**.  

1. Select the **Edit credentials** link next to ODATA under Data source credentials as shown here:

    :::image type="content" source="media/publish-4.png" alt-text="Update odata credentials":::

1. Select the appropriate authentication option. 

	* Use **oAuth2**  for Azure Active Directory (Azure AD) or Windows credentials.

      ![Configure Areas dialog](media/aad-auth-power-bi.png)
 
	* Use **Basic** for PAT credentials.   

      ![Configure Fabrikam Data dialog, Enter credentials](media/publish-5.png)

      > [!IMPORTANT]  
      > If you are using a Personal Access Token, remember that the token expires on a set interval. When it expires you'll need to [update the credentials](client-authentication-options.md#update-credentials). Otherwise the report, while still displaying data, won't update with the latest data.

1. Select **Sign in**.  

At this point, the data will update on your scheduled basis using the credentials entered.

> [!IMPORTANT]   
> Any data included in the Analytics view and published Power BI will be accessible to all users with access to the report, regardless of the project permissions configured in Azure DevOps.    


## Related articles

- [About Power BI integration](overview.md)  
- [Authenticate your identity with personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md)  
- [Access data through Excel](access-analytics-excel.md)  
- [Access data through Power BI desktop](access-analytics-power-bi.md)  


