---
title: Look up your Azure DevOps platform and version
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Learn how to find the Azure DevOps platform and version you're using. 
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 09/30/2022
monikerRange: '<= azure-devops'
---

# Look up your Azure DevOps platform and version

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

<a id="platform-version" />

You can tell what platform you use by opening the **About** page for Azure DevOps Services or Azure DevOps Server. 
 

## Azure DevOps Services

Enter the following URL for your organization, specifying the organization name. 

```https://dev.azure.com/YourOrganizationName/_home/About```. 

A page similar to the following example opens showing the version number.
 
:::image type="content" source="media/provide-feedback/version-azure-devops.png" alt-text="Screenshot of About page for Azure DevOps Services.":::


## Azure DevOps Server 

Open the **About** page from the profile menu as shown in the following image. 

:::image type="content" source="media/provide-feedback/about-menu-selection-on-premises.png" alt-text="Screenshot of profile menu":::

The corresponding browser URL is:

```https://ServerName/CollectionName/_home/About```

A page similar to the following image opens showing the version number.

:::image type="content" source="media/provide-feedback/version-azure-devops-on-premises.png" alt-text="Screenshot of About page for Azure DevOps Server on-premises.":::
 
## Version numbers

|**On-premises release**|**Version**|**About help page version**| **Build number** | 
|-------------------|-------|-----------------------| -----------------------|  
|Azure DevOps Server 2022|RC1|(AzureDevOpsServer_20220720.1)|19.205.32728.1 |  
|Azure DevOps Server 2020|Update 1.1|Version Azure DevOps Server 2020 Update 1.2| 18.181.31230.2|   
|Azure DevOps Server 2020|RTW|Version Dev 18.M170.9| 18.170.30830.2  |
|Azure DevOps Server 2019|Update 1|Version Dev17.M153.6| 17.153.29522.3 |  
 

<!--- 

> [!div class="mx-tdCol2BreakAll"]  
> 
> |On-premises release | Update | Version number |  
> |-------------|--------|----------------|
> |**Azure DevOps Server 2022** | RC1| 19.205.32720.1 |
> |**Azure DevOps Server 2020** | 2020.1.1 | 18.181.31230.2 |
> |  | 2020.1 | 18.181.31230.2 |
> |  | 2020.0.1 Patch 3  | 18.170.31228.1 |
> |  | 2020.0.1 Patch 2  | 18.170.31123.3  |
> |  | RTW  | 18.170.30830.2  |
> |  | RC2  | 18.170.30331.4  |
> |  | RC1  | 18.170.30308.2  |
> |**Azure DevOps Server 2019** | 2019.1  | 17.153.29522.3 |
> |  | RTW  | 17.143.28511.3  |
> |**Azure DevOps Server 2018** |2018.3 |16.131.28106.2 |
> |  |2018.2 |16.131.27701.1 |
> |  |2018.1 |16.122.27409.2 |
> |  | RTW | 16.122.27102.1 |
> |  | RC2 | 16.122.26918.3 |
> |  | RC1 | 16.121.26818.0 |
> |**Azure DevOps Server 2017**  | Update 3 | 15.117.27024.0 |
> |  | Update 3 RC | 15.117.26912.0 |
> |  | Update 2 | 15.117.26714.0 |
> |  | Update 1 | 15.112.26307.0 |
> |  | RTW | 15.105.25910.0 |
> |  | RC1 | 15.103.25603.0 | 
> |**Azure DevOps Server 2015**   | Update 3 | 14.102.25423.0 | 
> |  | Update 2.1 | 14.95.25229.0  | 
> |   | Update 2  | 14.95.25122.0  | 
> |   | Update 2 RC 2  | 14.95.25029.0  | 
> |   | Update 2 RC 1  | 14.95.25005.0  | 
> |   | Update 1  | 14.0.24712.0  | 
> |   | Update 1 RC 2  | 14.0.24626.0  | 
> |   | Update 1 RC 1  | 14.0.24606.0  | 
> |   | RTM  | 14.0.23128.0  | 
> |   | RC2  | 14.0.23102.0  | 
> |   | RC  | 14.0.22824.0  | 
> |   | CTP  | 14.0.22604.0  | 
> | **Azure DevOps Server 2013**  | Update 5  | 12.0.40629.0 | 
> |   | Update 4  | 12.0.31101.0 |  
> |   | Update 4 RC  | 12.0.31010.0 |   
> |   | Update 3  | 12.0.30723.0 | 
> |   | Update 3 RC | 12.0.30626.0 | 
> |   | Update 2  | 12.0.30324.0 | 
> |   | RTM  | 12.0.21005.1 | 
> |   | RC  | 12.0.20827.3 | 
> | **Azure DevOps Server 2012**  | Update 4  | 11.0.61030.0| 
> |   | Update 3  | 11.0.60610.1 | 
> |   | Update 2 | 11.0.60315.1 | 
> |   | CU 1  | 11.0.60123.100 | 
> |   | Update 1  | 11.0.51106.1| 
> |   | RTM   | 11.0.50727.1 | 
> | **Azure DevOps Server 2010** |  CU 2  | 10.0.40219.371 | 
> |   | SP1  | 10.0.40219.1| 
> |   | RTM   | 10.0.30319.1| 
> | **Azure DevOps Server 2008**|  SP1  | 9.0.30729.1 | 
> |           | RTM   | 9.0.21022.8| 
> | **Azure DevOps Server 2005** | SP1    | 8.0.50727.762| 
> |          |  RTM  | 8.0.50727.147| 

-->

## Related articles

* [Azure DevOps features timeline](/azure/devops/release-notes/features-timeline)
* [Report a problem with Visual Studio](/visualstudio/ide/how-to-report-a-problem-with-visual-studio-2017)
