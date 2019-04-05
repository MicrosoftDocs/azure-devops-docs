---
title: Connect using Power Query and Azure DevOps functions 
titleSuffix: Azure DevOps 
description: Describes the available functions that the Power BI Data Connector and the Analytics service support for Azure DevOps 
ms.assetid: EC735BA2-24C9-4BA3-B35E-2CE9D2F1D7F1
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.reviewer: stansw
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2019'
ms.date: 2/14/2018
---

# Connect using Power Query and Azure DevOps functions 

[!INCLUDE [temp](../_shared/version-azure-devops.md)]

The Data Connector for Azure DevOps includes Power Query M functions which can be used by query authors. These functions can handle Azure DevOps specific requirements, such as authentication for you. This article describes the arguments for the functions and how to use them to connect to the Analytics service. 

The following functions are provided:

| Function | Description |
|-|-|
| VSTS.Feed | Replacement for Power Query M function [OData.feed](https://msdn.microsoft.com/query-bi/m/odata-feed). Allows users to easily execute OData queries against the Analytics service.  |
| VSTS.Contents | Deprecated. Instead use VSTS.AccountContents. |
| VSTS.AccountContents | Replacement for Power Query M function [Web.Contents](https://msdn.microsoft.com/query-bi/m/web-contents). Intended for more advanced scenarios, VSTS.AccountContents returns the contents downloaded from the URL for the Analytics service as a binary value.  |


## VSTS.Feed
Allows for users to easily execute OData queries against the Analytics service.

The `VSTS.Feed` function has the same arguments, options and return value format as `OData.Feed`. For more information, see  [Power Query (M) Formula Reference - OData.Feed](https://msdn.microsoft.com/library/mt260868.aspx).

If you are already using `OData.Feed` to access data from the Analytics service, you can replace it with `VSTS.Feed` to leverage Data Connector authentication.  
This will also inform Power BI that these requests are referencing the same data source and you will be able to combine the data without violating the single data source constraints for refreshing datasets in the PowerBI.com.

'VSTS.Feed' provides a subset of the arguments and options available through 'OData.Feed'. The specific limitations are outlined in the following table:

### Arguments for VSTS.Feed

<table width="100%">
    <tr>
        <th width="20%">Argument</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>url</code></td>
        <td>A URL to the OData endpoint of the Analytics service.</td>
    </tr>
    <tr>
        <td><code>options</code></td>
        <td>An options record to control the behavior of this function.</td>
    </tr>
</table>

### Options fields for VSTS.Feed

<table width="100%">
    <tr>
        <th width="20%">Field</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>MaxSize</code></td>
        <td>
            Controls the max size of the table the client is interested in.
            If request exceeds this limit then the server can fail the request immediately.
            Default value is zero, which tells the server to use its default value.
        </td>
    </tr>
    <tr>
        <td><code>Query</code></td>
        <td>Programmatically add query parameters to the URL without having to worry about escaping.</td>
    </tr>
    <tr>
        <td><code>ShowHidden</code></td>
        <td>Flag which indicates if all tables (including snapshot) should be shown.</td>
    </tr>
    <tr>
        <td><code>ShowOnlyReportingViews</code></td>
        <td>Flag which indicates if only <code>EntitySets</code> with <code>IsReportingView</code> annotation should be returned.</td>
    </tr>
    <tr>
        <td><code>Timeout</code></td>
        <td>Specifying this value as a duration will change the timeout for an HTTP request. The default value is 600 seconds.</td>
    </tr>
    <tr>
        <td><code>Version</code></td>
        <td>Version of the data model. This option is primary for diagnostics.</td>
    </tr>
</table>

### Examples for VSTS.Feed

Use `VSTS.Feed` function to count the number of work items in a project.

1. Create a new blank query and choose "Advanced Editor" in the Power BI Query Editor.
2. In the editor add the text below to load the feed for the `fabrikam-fiber-inc` organization and `Fabrikam-Fiber-Git` for the project name using full URL to OData endpoint.
3. Select relevant columns using "Choose Columns", in this case select `Count`.

Basic Query:
```
let
    Source = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$apply=aggregate($count as Count)")
in
    Source
```

Query with Columns Selected:
```
let
    Source = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$apply=aggregate($count as Count)"),
    #"Removed Other Columns" = Table.SelectColumns(Source,{"Count"})
in
    #"Removed Other Columns"
```

Use `VSTS.Feed` function to load a count of User Stories for each Iteration Path.

1. Create a new blank query and click on "Advanced Editor" in the Power BI Query Editor.
2. In the editor add the text below to load the feed for the `fabrikam-fiber-inc` organization and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
3. Select relevant columns using "Choose Columns", in this case expand 'Iteration' and select 'Iteration Path' then select `Count`.

Basic Query:
```
let
    #"Source" = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$apply=groupby((Iteration/IterationPath), aggregate($count as Count))")
in
    #"Source"
```

Query with Columns Selected:
```
let
    #"Source" = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$apply=groupby((Iteration/IterationPath), aggregate($count as Count))"),
    #"Expanded Iteration" = Table.ExpandRecordColumn(Source, "Iteration", {"IterationPath"}, {"Iteration.IterationPath"}),
    #"Removed Other Columns" = Table.SelectColumns(#"Expanded Iteration",{"Count", "Iteration.IterationPath"})
in
    #"Removed Other Columns"
```

Use VSTS.Feed function to load detailed information about bugs.

1. Create a new blank query and click on "Advanced Editor" in the Power BI Query Editor
2. In the editor, add the text below to load the feed for the `fabrikam-fiber-inc` organization and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
3. Select relevant columns using "Choose Columns", in this case select `WorkItemID` and `State`.

Basic Query:
```
let
    #"Source" = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$select=WorkItemId,State&$filter=WorkItemType eq 'Bug'")
in
    #"Source"
```
Query with Columns Selected:
```
let
    #"Source" = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata/v1.0-preview/"
        & "WorkItems?$select=WorkItemId,State&$filter=WorkItemType eq 'Bug'"),
    #"Removed Other Columns" = Table.SelectColumns(Source,{"WorkItemId", "State"})
in
    #"Removed Other Columns"
```

## VSTS.Contents

VSTS.Contents is deprecated and will be removed in an upcoming release. Instead, use VSTS.AccountContents.  

## VSTS.AccountContents

Advanced function which returns the contents downloaded from the URL for the Analytics service as a binary value.

The `VSTS.AccountContents` function has the same arguments, options and return value format as `Web.Concents`. For more information please refer to: [Power Query (M) Formula Reference - Web.Contents](https://msdn.microsoft.com/library/mt260892.aspx).

If you are already using `Web.Contents` to access data from the Analytics service (REST API or OData), you can replace it with `VSTS.AccountContents` to leverage Data Connector authentication.
This will also inform Power BI that these requests are referencing the same data source and you'll be able to combine the data without violating the single data source constraints in Power BI Service.

'VSTS.AccountContents' provides a subset of the Arguments and Options available through 'OData.Contents'. The specific limitations are outlined in the table below:

### Arguments for VSTS.Contents

<table width="100%">
    <tr>
        <th width="20%">Argument</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>url</code></td>
        <td>URL to one of the VSTS service endpoints.</td>
    </tr>
    <tr>
        <td><code>options</code></td>
        <td>An options record to control the behavior of this function.</td>
    </tr>
</table>

### Options fields for VSTS.Contents

<table width="100%">
    <tr>
        <th width="20%">Field</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>IsRetry</code></td>
        <td>Specifying this logical value as true will ignore any existing response in the cache when fetching data.</td>
    </tr>
    <tr>
        <td><code>ManualStatusHandling	</code></td>
        <td>Specifying this value as a list will prevent any builtin handling for HTTP requests whose response has one of these status codes.</td>
    </tr>
    <tr>
        <td><code>MaxSize</code></td>
        <td>
            Controls the max size of the table the client is interested in.
            If request exceeds this limit then server can fail the request immediately.
            Default value is zero, which tells the servers server to use its default value.
        </td>
    </tr>
    <tr>
        <td><code>Query</code></td>
        <td>Programmatically add query parameters to the URL.</td>
    </tr>
    <tr>
        <td><code>RelativePath	</code></td>
        <td>Specifying this value as text appends it to the base URL before making the request.</td>
    </tr>
    <tr>
        <td><code>Timeout</code></td>
        <td>Specifying this value as a duration will change the timeout for an HTTP request. The default value is 600 seconds.</td>
    </tr>
    <tr>
        <td><code>Version</code></td>
        <td>Version of the data model. This option is primary for diagnostics.</td>
    </tr>
</table>

## Related articles

* [Power Query (M) Formula Reference](https://msdn.microsoft.com/library/mt270235.aspx)
* [Power Query (M) Formula Reference - Accessing data functions](https://msdn.microsoft.com/query-bi/m/accessing-data-functions)
