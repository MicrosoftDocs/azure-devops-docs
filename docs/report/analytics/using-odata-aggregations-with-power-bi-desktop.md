---
title: Using OData aggregations with Power BI Desktop | Team Services  
description: Describes how to call the Analytics Service using aggregations extensions for the most flexibility 
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: 48FFCA0B-D30B-4C59-B057-0B130577912F
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2016
---

#Using OData Aggregations with Power BI desktop  

**Team Services**  

[!INCLUDE [temp](../_shared/analytics-preview.md)]

Currently, Power Query (the underlying technology in both Power BI Desktop and Excel) does not support OData Aggregation Extensions.
However, Power Query is extremely flexible and as such has an easy mechanism for allowing this content to be used. This article
walks you through this process.

In order to use Aggregation Extensions with Power BI Desktop, you must create the URL by hand which requires knowledge of [OData](wit-analytics.md) and the
[Aggreation Extensions](aggregated-data-analytics.md) specifically. Please review these two topics before continuing.

For the purposes of this walkthrough, we'll create a simple aggregation query which returns the count of work items by Work Item Type and State. The URL for this query is shown below.

```
https://[account].analytics.visualstudio.com/DefaultCollection/[project name]/_odata/WorkItems?$apply=groupby((WorkItemType,State), aggregate(Count with sum as Count))  
```

Execute this query in your browser to make sure it works first. Replace the account and project names with the appropriate values.

Now that we have the query, it's time to make use of it. Follow these steps to be able to retrieve this data in Power BI Desktop:

1. Open **Power BI Desktop**  

2. Click **Get Data**  

    ![Power BI Get Data](_img/access-analytics-pbi-get-data.png)  

3. Select **Other** > **Web**  

    ![Select Web](_img/aggregated-1.png)  

4. In the **From Web** dialog, paste the URL for the query and click **OK**  

    ![From Web dialog](_img/aggregated-2.png)  

5. If prompted for credentials, see the article [Client Authentication Options](client-authentication-options.md) and enter the appropriate credentials.  

	The query editor will open and look like the following:  

    ![Initial query results](_img/aggregated-3.png)  

6. Click the **list** link in the query results.  

7. Click **To Table** from the **Transform** tab.  

    ![Turn the results into a list](_img/aggregated-4.png)  

8. Click **OK** on the **To Table** dialog.  

    ![Transform the results into a table](_img/aggregated-5.png)  

9. Click the **Column Expander** in the query results.  

	![Results as a table](_img/aggregated-6.png)

10. In the Expand dialog, uncheck @odata.id and uncheck the Use original column name as prefix checkbox and click **OK**.  

    ![Expand the column](_img/aggregated-7.png)  
   
    This will result in the data being shown, nicely formatted in columns without any extraneous information. At this point, you can rename the query (on the right under Properties) to something more meaningful but that isn't required.  

    ![Expand the column options](_img/aggregated-8.png)

11. Finally, change the data type of the Count column from Any to Whole Number.

    ![Change count data type](_img/aggregated-9.png)  

12. Click **Close & Apply** from the **Home** tab.

At this point you can now create charts and graphs based on the data and publish this file to Power BI by following the topic [Publishing Power BI Desktop to Power BI](publishing-power-bi-desktop-to-power-bi.md).