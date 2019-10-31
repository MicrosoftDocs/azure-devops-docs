---
title: Extension Statistics Power BI Content pack  | Visual Studio Marketplace
description: Get started using Power BI to analyze data collected for your extension on Visual Studio Marketplace 
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 06/12/2017
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.assetid: 435be0b3-ec45-41dd-a804-03b9342fa7cc
---

# Extension Statistics Power BI Content pack

You can gain insight and analyze the progress of your extension by using Extension Statistics Power BI Content pack. All data elements available in the extension hub are also available in Power BI content pack. 
The content pack contains a complete analytic data model (tables, relationships and measures), a set of default reports, and a default dashboard. Reports and dashboards are fully customizable but the data model is not.

## Connect to Power BI and get the Content Pack


1. Open a web browser and go to [https://powerbi.com](https://powerbi.microsoft.com/).

2. Select **Sign In** in the upper right corner to log in to Power BI.

3. In the lower left corner,select**Get Data**.

	If you don't have a Power BI organization you can create one by entering your email address and select **Use it free**.

4. Select **Get** under **Services** on the Get Data page.

	![get-data-final.png](_img/get-data-final.png)

5. Search for Marketplace and select the Visual Studio Marketplace Extension Statistics and select **Get it now**.

	![connector](_img/search.png)
	![connector](_img/content-pack-details.png)

6. Enter the Marketplace publisher id for the publisher you want data for and select **Next**.

	![Enter the publisher id used in Marketplace](_img/addpublisherid.png)  
	
	**Important**: Ensure you are logged in power BI using the same credentials you use on the Marketplace and you have access to the Publisher Id. 

7. The next step specifies the authentication method. Only oAuth2 is supported. Select **Sign In** to continue.

    ![Login with oAuth2](_img/connect-to-vs-team-services-auth.png)  

	**Important**: You won't be able to connect if your organization administrator disabled third party application access via OAuth. When enabled, it appears as follows on the Administration > Control panel > Settings page:  

	![Third-party oAuth enabled](_img/Screen5.png)  

	Contact your organization administrator to determine if it needs to be enabled. 

8. Successful authorization displays the following authorization dialog which allows Power BI to retrieve data from your organization. Scroll down to the bottom and select**Accept**.

	![VS Azure DevOps Services Authorization page](_img/Screen6.png)  

9. Once Power BI is authorized, data begins to load and you're presented with a loading screen until the data is complete. Depending on how much data there is, it may take a few minutes to complete the data load. All extension data associated with this publisher is downloaded. 


## Available data and reports 

After connecting you see an initial dashboard with details on all of your extensions. All data available in the Marketplace extension hub is available in the content pack. Details on the extension hub are available [here](./extension-report.md). 

The power BI content pack gives data for all extensions and you can use the filters to view data for an extension or use the extension report to compare data between extensions. 

At high level, data available is: 

1. Acquisition 
2. Uninstall
3. Rating and review

Using the report and available data elements, you can create the required reports and pin them to the dashboard. 

To get started using Power BI, see the [knowledge base of articles](https://support.powerbi.com/).