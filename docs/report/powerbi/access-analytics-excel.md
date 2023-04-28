---
title: Access Analytics data through Excel
titleSuffix: Azure DevOps
description: Learn how to access Analytics OData from Excel for Azure DevOps. 
ms.subservice: azure-devops-analytics
ms.assetid: E661D20C-073E-44F1-A91C-B1460A93E2B2 
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: ">= azure-devops-2019" 
ms.date: 10/01/2021
---

# Access data through Excel 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

You can access data through Excel, generate reports, and then publish the charts to Power BI or use the Excel file
as a basis for Power BI reports. At this time, you'll need to have alternate credentials enabled to access data
Analytics via Excel.

[!INCLUDE [temp](../includes/analytics-preview.md)]

1. To get started, Open Excel 2016. 

   It will work with earlier versions of Excel. You'll need to have installed the Power Query add-in that you can do from [Microsoft Power Query for Excel](https://www.microsoft.com/download/details.aspx?id=39379&CorrelationId=3f2bb5d7-8db9-4e8f-ad58-bfa2789c877c). 

2. Create a blank workbook.

3. In the **Data** tab, choose **New Query>From Other Sources>From OData Feed**.

	![Excel Get Data ](media/excel1.png) 


4. Enter the URL in the format below and choose **OK**:  
	::: moniker range="azure-devops"

    ```
	https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/
    ```  

	If the *OrganizationName* is **fabrikam** and the *version* is **v1.0**, then the URL is `https://analytics.dev.azure.com/fabrikam/_odata/v1.0/`.

	![Select OData Feed ](media/pbi3.png)  

	> [!NOTE]  
	> Alternatively, you can enter the URL with the *ProjectName* specified which will trim the results by the specified project across all entities related to that project. 
	>
	> `https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/` 
	
	::: moniker-end

	::: moniker range="azure-devops-2019"

    ```
	https://{ServerName}:{Port}/tfs/{CollectionName}/_odata/{version}/
    ```  

	If the *CollectionName* is **fabrikam** and the *version* is **v1.0**, then the URL is 
	`https://{ServerName}:{Port}/tfs/fabrikam/_odata/{v1.0}/`.

	![Select OData Feed ](media/pbi3-onprem.png)  

	> [!NOTE]  
	> Alternatively, you can enter the URL with the *ProjectName* specified which will trim the results by the specified project across all entities related to that project. 
	>
	> `https://{ServerName}:{Port}/tfs/{CollectionName}/{ProjectName}/_odata/{version}/` 
	
	::: moniker-end

5. At this point, you'll be prompted to authenticate against the service. If you haven't done so previously, see [Client authentication options](client-authentication-options.md).

6. Either select a single entity to retrieve the data for or check **Select multiple items** and choose the data to return.

    ![Excel Navigator](media/excel2.png)

	At this point, if you select **Load**, Excel will load all of the data in each entity into Power Query. However, it may be more data than you want (or than Excel can handle). 
    To filter the data, select the entity to filter and choose **Edit** to bring up the Query Editor. For each column you want to filter on, select it and set your filter. When it's complete, choose **Close & Apply** in the upper left corner.

	> [!IMPORTANT]  
    > Do *not* select any entity with the name **Snapshot** in it. These entities contain the state of every work item
    on every day since each work item was created. For repositories of any size this will lead to tens or hundreds of millions of work items which will
    not load correctly. In order to perform trend analysis, narrow the scope of data being retrieved to the specific items and time frame and pull this information in with a separate OData query. 

As an alternative to loading the data into Power Query, you can choose the drop-down arrow next to **Load** and select **Load To** instead.
This action allows the following options:

* Load the data to table that is Power Query.
* Create a connection without loading the data (essentially deferring the data load until later).
* To a worksheet that will just load the one entity per worksheet.
* To a model (which you can select with the other options) that loads the data into PowerPivot.

More information on these options can be found in the [Excel documentation](https://support.office.com/article/Add-a-query-to-an-Excel-worksheet-Power-Query-ca69e0f0-3db1-4493-900c-6279bef08df4?ui=en-US&rs=en-US&ad=US#querytoworksheet).

## Handling relationships
 
By default, when basic data is returned from Analytics, the data is related as shown in the figure below:

![Entity relationships](media/pbi-relationships.png)  

The Tags, Teams, and Users aren't related to any of the other data. It's because of how those entities
are related. They're related by either many-to-many relationships that aren't easily handled in these models or 
there are multiple relationships between the entities such as between users and work items (they're related by Assigned To,
Created By, Changed By, and others).

Multiple relationships can be handled in fairly simply. For example, in the default model you can edit the query, select the
AssignedTo column of the WorkItems table and expand the column to include all of the data from the Users table and you can repeat
this process for the Created By and Changed By columns as well. It gets you around having multiple links from one table to another
which isn't allowed.

## Related articles

- [Client authentication options](client-authentication-options.md)
- [Microsoft Power Query for Excel](https://www.microsoft.com/download/details.aspx?id=39379&CorrelationId=3f2bb5d7-8db9-4e8f-ad58-bfa2789c877c)
- [Excel documentation](https://support.office.com/article/Add-a-query-to-an-Excel-worksheet-Power-Query-ca69e0f0-3db1-4493-900c-6279bef08df4?ui=en-US&rs=en-US&ad=US#querytoworksheet)
