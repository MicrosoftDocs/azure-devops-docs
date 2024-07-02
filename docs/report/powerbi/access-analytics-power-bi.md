---
title: Access Analytics data from Power BI Desktop
titleSuffix: Azure DevOps
description: Learn how to access Analytics OData from a Power BI Desktop OData feed for Azure DevOps.  
ms.subservice: azure-devops-analytics
ms.topic: how-to
ms.assetid: b26f1d04-95ca-43d5-8333-176780f3980a  
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 05/01/2024
---

# Connect to Analytics data using the Power BI OData feed

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

Learn how to access Analytics data through the Power BI Desktop OData feed.

> [!IMPORTANT]  
> The method demonstrated in this article works for small organizations, because it always pulls in all the data into Power BI. Most of the filtering that's specified in the Power Query Editor is done client-side. For information about other approaches, see [Power BI integration Overview](overview.md). 

[!INCLUDE [prerequisites-simple](../includes/analytics-prerequisites-simple.md)]
- [Install Power BI Desktop](https://powerbi.microsoft.com/desktop).

## Access the Analytics OData feed

::: moniker range="azure-devops-2019"

> [!IMPORTANT]  
> Make sure that you [enabled or installed the Analytics extension](../dashboards/analytics-extension.md).  

::: moniker-end  

1. [Configure the permissions required to access Analytics](analytics-security.md).

2. Open Power BI Desktop.

3. On the Power BI Desktop welcome page or home ribbon, select **Get data**.

	:::image type="content" source="media/data-connector/get-data-splash-screen.png" alt-text="Screenshot of Power BI Desktop splash screen, Get data button."::: 

4. Select **Other** > **OData Feed** > **Connect**.  
    
    :::image type="content" source="media/pbi2.png" alt-text="Screenshot showing the OData Feed button."::: 

5. In a supported browser, enter the URL in the following format 
`https://analytics.dev.azure.com/{OrganizationName}/_odata/{version}/`.  

   For example, if {*OrganizationName*} is **fabrikam** and {*version*} is **v1.0**, the URL is `https://analytics.dev.azure.com/fabrikam/_odata/v1.0/`.

    :::image type="content" source="media/pbi3.png" alt-text="Screenshot of Enter OData Feed URL.":::

   > [!NOTE]  
   > Alternatively, you can enter the URL with the *ProjectName* specified, as shown in the following example:  
   >`https://analytics.dev.azure.com/{OrganizationName}/{ProjectName}/_odata/{version}/`
   >Using this format trims the results by the specified project across all entities related to that project.

6. At the prompt, [authenticate against the service](client-authentication-options.md).

7. Select the check boxes next to the entities whose data you want to retrieve.

	> [!IMPORTANT]  
	> Do not select entities whose name includes *Snapshot*. Such entities contain the state of every work item on each day since the work item was created. For repositories of any size, selecting these entities causes tens to hundreds of millions of work items to fail to load. *Snapshot* tables are intended only for [aggregation queries](../extend-analytics/odata-query-guidelines.md).

    :::image type="content" source="media/pbi4.png" alt-text="Screenshot of the Entities list on the Navigator page.":::

8. Select **Transform Data**. *Don't* select **Load**. 

   > [!IMPORTANT]
   > For each entity that you've selected, Power Query creates a query. You must manually update each query to *prevent throttling errors*. Power Query attempts to resolve null values as errors by generating an additional query for every null value it encounters. This action can result in thousands of queries, which can quickly exceed your usage threshold, beyond which your user account gets throttled.
   >   
   > To prevent this issue:  
   > - Instruct Power BI to reference OData v4.
   > - Instruct the Analytics service to omit any values that are null, which improves query performance.

9. For each entity that you selected in the preceding steps, do the following steps:

    a. In the **Queries** list, select an entity whose query you want to. In this example, **Areas** is selected.
    
    :::image type="content" source="media/pbi5.png" alt-text="Screenshot of the Power BI OData Feed Queries list.":::
    
    b. In the ribbon, select **Advanced Editor**.
    
    :::image type="content" source="media/AdvancedEditor.png" alt-text="Screenshot of the Power BI OData Feed Advanced Editor button.":::
    
    c. In the **Query** pane, scroll horizontally to view the `[Implementation="2.0"]` parameter.
    
    :::image type="content" source="media/odataquery-powerbi-advancededitor1.png" alt-text="Screenshot of the Advanced Editor Query pane.":::
    
    d. Replace `[Implementation="2.0"]` with the following string: `[Implementation="2.0",OmitValues = ODataOmitValues.Nulls,ODataVersion = 4]` 
    
    :::image type="content" source="media/odataquery-powerbi-advancededitor2.png" alt-text="Screenshot showing the replaced string.":::
    
10. Select **Close & Apply**. 

## Related content

- [Get dataset design for the Power BI Connector for Azure DevOps](data-connector-dataset.md)
- [See Data Connector - Example reports](data-connector-examples.md)
