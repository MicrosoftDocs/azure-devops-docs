---
title: Functions available in Power BI Data Connector | VSTS  
description: Description of functions available from the Power BI Data Connector and the Analytics Service for VSTS
ms.assetid: EC735BA2-24C9-4BA3-B35E-2CE9D2F1D7F1
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: stansw
ms.date: 01/17/2017
---

# Functions available in Power BI Data Connector

<b>VSTS</b>

[!INCLUDE [temp](../_shared/analytics-preview.md)]

The Data Connector for VSTS contributes functions which can be used by query authors.  For example, VSTS.Feed adds to the functionality of OData.Feed by handling unique requirements of the VSTS OData feed such as authentication.  We strongly recommend using VSTS.Feed and using the latest version of Power BI when possible.


<table>
    <tr>
        <th>Function</th>
        <th>Description</th>
    </tr>
	<tr>
        <td><a href="#vstsfeed"><code>VSTS.Feed</code></a></td>
        <td>Allows for users to easily execute OData queries against Analytics in VSTS.</td>
    </tr>
    <tr>
        <td><a href="#vstscontents"><code>VSTS.Contents</code></a></td>
        <td>Intended for more advanced scenarios, VSTS.Contents returns the contents downloaded from the URL for the Analytics Service for VSTS as a binary value.</td>
    </tr>

</table>

## VSTS.Feed
Allows for users to easily execute OData queries against Analytics in VSTS.

The `VSTS.Feed` function is similar to the standard `OData.Feed` function in terms of the arguments it accepts and the format of the returned value. For more information, see  [Power Query (M) Formula Reference - OData.Feed](https://msdn.microsoft.com/library/mt260868.aspx).

> [!TIP]
> If you are already using `OData.Feed` to access data from VSTS, then just replace it with `VSTS.Feed` to leverage Data Connector authentication.
> This will also inform Power BI that these requests are referencing the same data source and you'll be able to combine the data without violating the single data source constraints for refreshing data sets in the Power BI.com.

### Arguments for VSTS.Feed

<table width="100%">
    <tr>
        <th width="20%">Argument</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>url</code></td>
        <td>A URL to the OData endpoint of the Analytics Service.</td>
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

1. Create a new blank query and click on "Advanced Editor" in the Power BI Query Editor
2. In the editor add the text below to load the feed for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
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

1. Create a new blank query and click on "Advanced Editor" in the Power BI Query Editor
2. In the editor add the text below to load the feed for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
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
2. In the editor add the text below to load the feed for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
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
Advanced function which returns the contents downloaded from the URL for the Analytics Service for VSTS as a binary value.

The `VSTS.Contents` function is similar to the standard `Web.Contents` function in terms of the arguments it accepts and the format of the returned value.
For more information please refer to: [Power Query (M) Formula Reference - Web.Contents](https://msdn.microsoft.com/library/mt260892.aspx).

> [!TIP]
> If you are already using `Web.Contents` to access data from VSTS (REST API or OData), then just replace it with `VSTS.Contents` to leverage Data Connector authentication.
> This will also inform Power BI that these requests are referencing the same data source and you'll be able to combine the data without violating the single data source constraints in Power BI Service.


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



## Related notes
* [Power Query (M) Formula Reference](https://msdn.microsoft.com/library/mt270235.aspx)
* [Power Query (M) Formula Reference - Accessing data functions](https://msdn.microsoft.com/library/mt296615.aspx)