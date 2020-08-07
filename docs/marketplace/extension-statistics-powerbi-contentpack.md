---
title: Extension Statistics Power BI Content pack  | Visual Studio Marketplace
titleSuffix: Visual Studio Marketplace
description: Get started using Power BI to analyze data collected for your extension on Visual Studio Marketplace 
ms.technology: devops-marketplace
ms.assetid: 435be0b3-ec45-41dd-a804-03b9342fa7cc
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.topic: conceptual
ms.date: 11/25/2019
---

# Extension Statistics Power BI content pack

[!INCLUDE [version-ts-tfs-2015-2016](../includes/version-ts-tfs-2015-2016.md)]

Gain insight and analyze the progress of your extension by using Extension Statistics Power BI content pack. All data elements in the extension hub are also available in Power BI content pack.
The content pack has a complete analytic data model, (tables, relationships, and measures), a set of default reports, and a default dashboard. Reports and dashboards are fully customizable, but the data model isn't.

## Connect to Power BI and get the content pack

1. Open a web browser and go to [https://powerbi.com](https://powerbi.microsoft.com/).

2. Choose **Sign in** in the upper right corner to sign in to Power BI.

   If you don't have a Power BI account you can create one by entering your email address and choosing **Start free**, and then **Download free**.

3. In the lower left corner, select **Get Data**.

   ![Power BI get data](media/power-bi-get-data.png)

4. Select **Get** under **Services** on the Get Data page.

    ![get-data-final.png](media/get-data-final.png)

5. Search for Marketplace and select the Visual Studio Marketplace Extension Statistics and **Get it now**.

    ![connector](media/search.png)
    ![connector](media/content-pack-details.png)

6. Enter the Marketplace publisher ID that you want data for, and then select **Next**.

    ![Enter the publisher ID used in Marketplace](media/addpublisherid.png)  

    **Important**: Sign in to Power BI using the same credentials you use on the Marketplace, and you have access to the Publisher ID. 

7. Specify the authentication method. Only oAuth2 is supported. Choose **Sign in** to continue.

    ![Sign in with oAuth2](media/connect-to-vs-team-services-auth.png)  

    **Important**: You can't connect if your organization administrator disabled third-party application access via OAuth. When enabled, it appears as follows on the Administration > Control panel > Settings page:  

    ![Third-party oAuth enabled](media/Screen5.png)  

    Contact your organization administrator to determine if it needs to be enabled.

8. Successful authorization displays the following authorization dialog, which allows Power BI to retrieve data from your organization. Scroll down to the bottom and select **Accept**.

    ![Azure DevOpsAuthorization page](media/Screen6.png)  

9. You're presented with a loading screen until the data is loaded. Depending on how much data there is, it may take a few minutes to complete the data load. All extension data associated with this publisher is downloaded.

## Available data and reports

Once you're connected, you see an initial dashboard with details on all of your extensions. All data available in the Marketplace extension hub is available in the content pack. For more information about the extension, see [Extension reporting hub](/azure/devops/extend/extension-report).

The Power BI content pack provides data for all extensions and you can use the filters to view data for an extension or use the extension report to compare data between extensions.

At a high level, the following data is available:

1. Acquisition
2. Uninstall
3. Rating and review

Using the report and available data elements, you can create your required reports and pin them to the dashboard.

To get started using Power BI, see the [knowledge base of articles](https://support.powerbi.com/).
