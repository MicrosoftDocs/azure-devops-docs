---
title: Functions available in Power BI Data Connector | Team Services  
description: Description of functions available from the Power BI Data Connector and the Analytics Service for Visual Studio Team Services
ms.assetid: EC735BA2-24C9-4BA3-B35E-2CE9D2F1D7F1
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.manager: douge
ms.author: stansw
ms.topic: get-started-article 
ms.date: 01/17/2017
---

# Functions available in Power BI Data Connector

<b>Team Services</b>

[!INCLUDE [temp](../_shared/analytics-preview.md)]

The Data Connector for Team Services contributes several functions which can be used by query authors.


<table>
    <tr>
        <th>Function</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="#vstscontents"><code>VSTS.Contents</code></a></td>
        <td>Returns the contents downloaded from the URL for the Analytics Service for Team Services as a binary value.</td>
    </tr>
    <tr>
        <td><a href="#vstsfeed"><code>VSTS.Feed</code></a></td>
        <td>Returns a table of OData feeds available from Visual Studio Team Services.</td>
    </tr>
    <tr>
        <td><a href="#vstsviews"><code>VSTS.Views</code></a></td>
        <td>
            Returns a table of OData view feeds available from Visual Studio Team Services.
            These views have been designed for people who are getting started with the Data Connector.
            They are much easier to work with than a low level feed offered by <code>VSTS.Feed</code>.
        </td>
    </tr>
</table>

## VSTS.Contents
Returns the contents downloaded from the URL for the Analytics Service for Team Services as a binary value.

The `VSTS.Contents` function is similar to the standard `Web.Contents` function in terms of the arguments it accepts and the format of the returned value.
For more information please refer to: [Power Query (M) Formula Reference - Web.Contents](https://msdn.microsoft.com/library/mt260892.aspx).

> [!TIP]
> If you are already using `Web.Contents` to access data from Team Services (REST API or OData), then just replace it with `VSTS.Contents` to leverage Data Connector authentication.
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

### Examples for VSTS.Contents
Use `VSTS.Contents` to load the total number of all work items in the selected project.
Please notice that this function returns value of type `binary` and it is necessary to parse it (e.g. with [`Json.Document`](https://msdn.microsoft.com/library/mt260861.aspx)).

1. Get binary content of an OData query for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project.
2. Parse result to extract the result.

```
let
    #"Get content" = VSTS.Contents("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata", 
        [ RelativePath = "WorkItems/$count" ]),
    #"Parse content" = Json.Document(#"Get content")
in
    #"Parse content"
```


## VSTS.Feed
Returns a table of OData feeds offered by Visual Studio Team Services.

The `VSTS.Feed` function is similar to the standard `OData.Feed` function in terms of the arguments it accepts and the format of the returned value. For more information, see  [Power Query (M) Formula Reference - OData.Feed](https://msdn.microsoft.com/library/mt260868.aspx).

> [!TIP]
> If you are already using `OData.Feed` to access data from Team Services, then just replace it with `VSTS.Feed` to leverage Data Connector authentication.
> This will also inform Power BI that these requests are referencing the same data source and you'll be able to combine the data without violating the single data source constraints in Power BI Service.

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
Use `VSTS.Feed` function to load information about new bugs.

1. Load feed for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project using full URL to OData endpoint.
2. Select `Work Items - Today` table. 
3. Select rows where `Work Item Type` is equal to "Bug" and `State` is equal to "New"
4. Select relevant columns.

```
let
    #"Get feed" = VSTS.Feed("https://fabrikam-fiber-inc.analytics.visualstudio.com/Fabrikam-Fiber-Git/_odata", []),
    #"Get table" = #"Get feed"{[Name="Work Items - Today"]}[Data],
    #"Filter rows" = Table.SelectRows(#"Get table",
        each [Work Item Type] = "Bug" and [State] = "New"),
    #"Select columns" = Table.SelectColumns(#"Filter rows",
        { "Work Item Id", "Title", "State", "Priority", "Assigned To User Name", "Area Path" })
in
    #"Select columns"
```


## VSTS.Views
Returns a table of OData view feeds offered by Visual Studio Team Services.
These views have been designed for people who are getting started with the Data Connector.
They are much easier to work with than a low level feed offered by <code>VSTS.Feed</code>.

The `VSTS.Views` function is similar to the standard `OData.Feed` function in terms of the arguments it accepts and the format of the returned value.
For more information, see [Power Query (M) Formula Reference - OData.Feed](https://msdn.microsoft.com/library/mt260868.aspx).

### Arguments for VSTS.Views

<table width="100%">
    <tr>
        <th width="20%">Argument</th>
        <th width="80%">Description</th>
    </tr>
    <tr>
        <td><code>account</code></td>
        <td>Name of the account (if you are working with <code>https://fabrikam-fiber-inc.visualstudio.com</code> URL, then account name is <code>fabrikam-fiber-inc</cod>.</td>
    </tr>
    <tr>
        <td><code>project</code></td>
        <td>Name of the project (if you are working with <code>https://fabrikam-fiber-inc.visualstudio.com/Fabrikam-Fiber-Git</code> URL, then project name is <code>Fabrikam-Fiber-Git</code>).
        </td>
    </tr>
    <tr>
        <td><code>areaPath</code></td>
        <td>
            Filters data included in the model to a specific Area Path or Area Paths (separated by a "|" character).
            Add a "\*" at the end of the path to include all children.
            Leave the parameter blank if you want to load data for all Areas.
        </td>
    </tr>
    <tr>
        <td><code>options</code></td>
        <td>An options record to control the behavior of this function.</td>
    </tr>
</table>

### Options fields for VSTS.Views

<table width="100%">
    <tr>
        <th width="20%">Field</th>
        <th width="80%">Description</th>
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
        <td><code>Timeout</code></td>
        <td>Specifying this value as a duration will change the timeout for an HTTP request. The default value is 600 seconds.</td>
    </tr>
    <tr>
        <td><code>Version</code></td>
        <td>Version of the data model. This option is primary for diagnostics.</td>
    </tr>
</table>

### Examples for VSTS.Views
Use `VSTS.Views` function to load information about new bugs.

1. Load feed for `fabrikam-fiber-inc` account and `Fabrikam-Fiber-Git` project.
2. Select `Work Items - Today` table 
3. Select rows where `Work Item Type` is equal to "Bug" and `State` is equal to "New"
4. Select relevant columns.

```
let
    #"Get feed" = VSTS.Views("fabrikam-fiber-inc", "Fabrikam-Fiber-Git", null, []),
    #"Get table" = #"Get feed"{[Name="Work Items - Today"]}[Data],
    #"Filter rows" = Table.SelectRows(#"Get table",
        each [Work Item Type] = "Bug" and [State] = "New"),
    #"Select columns" = Table.SelectColumns(#"Filter rows",
        { "Work Item Id", "Title", "State", "Priority", "Assigned To User Name", "Area Path" })
in
    #"Select columns"
```

## Related notes
* [Power Query (M) Formula Reference](https://msdn.microsoft.com/library/mt270235.aspx)
* [Power Query (M) Formula Reference - Accessing data functions](https://msdn.microsoft.com/library/mt296615.aspx)