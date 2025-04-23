---
title: Look Up Your Azure DevOps Platform and Version
titleSuffix: Azure DevOps
description: Learn how to find your Azure DevOps Services or Azure DevOps Server platform and version by using the About page.
ms.subservice: azure-devops-new-user
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 04/24/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to access the About page for Azure DevOps systems so I can look up my platform and platform version.
---

# Look up your Azure DevOps platform and version

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The **About** page for Azure DevOps Services or Azure DevOps Server shows the platform and version in use. You can access the **About** page from the UI or by using a URL to look up your platform and version.

## Azure DevOps Services

Look up the version number for Azure DevOps Server by following these steps:

1. Open a browser window.

1. Enter the following URL. Replace the `\<Organization>` placeholder with the name of your organization:

   `https://dev.azure.com/<Organization>/_home/About` 

A page similar to the following example opens showing the platform in use and the version number:
 
:::image type="content" source="media/provide-feedback/version-azure-devops.png" alt-text="Screenshot of the About page for Azure DevOps Services showing the platform in use by the organization and the version number.":::

## Azure DevOps Server 

Look up the version number for Azure DevOps Server by following these steps in the UI:

1. In Azure DevOps, go to the **Overview** page for your organization.

1. Open the **Profile** menu by selecting your user picture, and then select **Help** > **About**.

A page similar to the following example opens showing the platform in use and the version number:

:::image type="content" source="media/provide-feedback/about-menu-selection-on-premises.png" alt-text="Screenshot that shows how to open the About page for Azure DevOps Server from the user Profile menu in Azure DevOps." lightbox="media/provide-feedback/about-menu-selection-on-premises.png":::

You can also find the version number by using a URL in the browser:

1. Open a browser window.

1. Enter the following URL. Replace the `\<Server>` placeholder with the name of your server, and the `\<Collection>` placeholder with the name of your collection:

   `https://<Server>/<Collection>/_home/About` 

A page similar to the following example opens showing the platform in use and the version number:

:::image type="content" source="media/provide-feedback/version-azure-devops-on-premises.png" alt-text="Screenshot of the About page for Azure DevOps Server on-premises showing the platform in use and the platform version number.":::

## Access server release notes

The following table provides links to the Release to Web (RTW) Release Notes for the most recent versions of Azure DevOps Server. You can also access notes for specific Release Updates and SHA hash values to verify download integrity.

|Version            |RTW notes |Update notes |SHA values |
|-------------------|----------|-------------|-----------|
| **Azure DevOps Server 2022** | [Release](/azure/devops/server/release-notes/azuredevops2022?view=azure-devops&preserve-view=true) | [Update 2](/azure/devops/server/release-notes/azuredevops2022u2?view=azure-devops&tabs=yaml&preserve-view=true) <br> [Update 1](/azure/devops/server/release-notes/azuredevops2022u1?view=azure-devops&tabs=yaml&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2022-sha?view=azure-devops&preserve-view=true) |
| **Azure DevOps Server 2020** | [Release](/azure/devops/server/release-notes/azuredevops2020?view=azure-devops&preserve-view=true) | [Update 1](/azure/devops/server/release-notes/azuredevops2020u1?view=azure-devops&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2020-sha?view=azure-devops&preserve-view=true) |
| **Azure DevOps Server 2019** | [Release](/azure/devops/server/release-notes/azuredevops2019?view=azure-devops&preserve-view=true) | [Update 1](/azure/devops/server/release-notes/azuredevops2019u1?view=azure-devops&preserve-view=true) | [SHA](/azure/devops/server/release-notes/azuredevops2019-sha?view=azure-devops&preserve-view=true) |

<!--- 
Removed 3/6/2024
|**On-premises release**|**Version**|**About help page version**| **Build number** | 
|-------------------|-------|-----------------------| -----------------------|  
|Azure DevOps Server 2022|RC1|(AzureDevOpsServer_20220720.1)|19.205.34309.3 |  
|Azure DevOps Server 2020|Update 1.1|Version Azure DevOps Server 2020 Update 1.2| 18.181.31230.2|   
|Azure DevOps Server 2020|RTW|Version Dev 18.M170.9| 18.170.30830.2  |
|Azure DevOps Server 2019|Update 1|Version Dev17.M153.6| 17.153.29522.3 |  

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

## Related content

* [Azure DevOps features timeline](/azure/devops/release-notes/features-timeline)
* [Report a problem with Visual Studio](/visualstudio/ide/how-to-report-a-problem-with-visual-studio-2017)
