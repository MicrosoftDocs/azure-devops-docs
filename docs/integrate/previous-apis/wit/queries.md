---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Queries | REST API Reference for Team Foundation Server
description: Work with work item queries programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: F91A2D76-3586-4552-A9F4-AC9E5CBB46D4
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item queries and query folders
[!INCLUDE [API_version](../_data/version.md)]

The queries in a project are organized in folders.

A sample structure of queries and folders might appear as shown here.

* **My Queries**
* **Shared Queries**
	* Feedback (Query)
	* **Current Sprint**
		* Blocked Tasks (Query)
		* Open Impediments (Query)
		* Test Cases (Query)
		* Unfinished Work (Query)
		* Work in Progress (Query)

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of queries

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/queries[/{folderPath}]?api-version={version}[&$depth={int}&$expand={enum{none,all,clauses,wiql}} ]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| project   | string  |         | Name or ID of a project that contains the queries.
| folderPath    | string  |         | Path to the folder you want to enumerate
| Query
| api-version | string  |       | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $depth    | int     | 0       | In the folder of queries, return child queries and folders to this depth.  The maximum depth you can query is 2.
| $expand   | enum { none, all, clauses, wiql } | none    | Include the query string (wiql), clauses, query result columns, and sort options in the results. 
| $includeDeleted={ true, false } | boolean |    |  Include deleted queries and folders

[!code-REST [GET__wit_queries__depth-1_json](./_data/queries/GET__wit_queries__depth-1.json)]

#### Sample code

* [C# (GetListOfQueries method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L187)
* [C# (GetListOfQueriesAndFoldersWithOptions method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L223)

### By folder path

[!code-REST [GET__wit_queries_Shared Queries_Current Sprint__depth-1_json](./_data/queries/GET__wit_queries_Shared Queries_Current Sprint__depth-1.json)]

### Just the root query folders
[!code-REST [GET__wit_queries_json](./_data/queries/GET__wit_queries.json)]

### With the query string and columns and sort options
[!code-REST [GET__wit_queries__depth-1__expand-all_json](./_data/queries/GET__wit_queries__depth-1__expand-all.json)]

### Including deleted queries
[!code-REST [GET__wit_queries__depth-2__includeDeleted-true_json](./_data/queries/GET__wit_queries__depth-2__includeDeleted-true.json)]

#### Sample code

* [C# (GetListOfQueriesAndFoldersIncludeDeleted method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L187)

## Get a query or folder

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{folderPath}?api-version={version}[&$depth={int}&$expand={enum{none,all,clauses,wiql}} ]
```
| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| project   | string  |         | Name or ID of a project that contains the queries.
| folderPath    | string  |         | ID or path to the query or folder you want to retrieve
| Query
| api-version | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $depth    | int     | 0       | In the folder of queries, return child queries and folders to this depth.  
| $expand   | enum { none, all, clauses, wiql } | none    | Include the query string (wiql), clauses, query result columns, and sort options in the results. 
| $includeDeleted={ true, false } | boolean |    |  Include deleted queries and folders

### Query by ID

[!code-REST [GET__wit_queries__queryId__json](./_data/queries/GET__wit_queries__queryId_.json)]

#### Sample code

* [C# (GetQueryOrFolderById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L160)

### Query by Name

[!code-REST [GET__wit_queries_Shared Queries__folderName___queryName__json](./_data/queries/GET__wit_queries_Shared Queries__folderName___queryName_.json)]

#### Sample code

* [C# (GetQueryByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L130)

### Folder by ID

[!code-REST [GET__wit_queries__folderId__json](./_data/queries/GET__wit_queries__folderId_.json)]

#### Sample code

* [C# (GetQueryOrFolderById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L160)

### Folder by Name

[!code-REST [GET__wit_queries_Shared Queries__folderName__json](./_data/queries/GET__wit_queries_Shared Queries__folderName_.json)]

#### Sample code

* [C# (GetFolderByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L100)

### Deleted query by ID
[!code-REST [GET__wit_queries__queryId___includeDeleted-true_json](./_data/queries/GET__wit_queries__queryId___includeDeleted-true.json)]

#### Sample code

* [C# (GetDeletedQueryById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L440)

### Flat query with expanded clauses
[!code-REST [GET__wit_queries__queryId___expand-clauses_json](./_data/queries/GET__wit_queries__queryId___expand-clauses.json)]

### Hierarchical query with expanded clauses
[!code-REST [GET__wit_queries__hierarchicalQueryId___expand-clauses_json](./_data/queries/GET__wit_queries__hierarchicalQueryId___expand-clauses.json)]

## Create a query

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/wit/queries[/{folderPath}]?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string },
  "wiql": { string }
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| folderPath | string  | ID or Path to the folder you want to create the query in
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name      | string  | Name of the query.
| wiql      | string  | [Query string](http://msdn.microsoft.com/library/bb130306.aspx).

[!code-REST [POST__wit_queries_Shared Queries__folderName__json](./_data/queries/POST__wit_queries_Shared Queries__folderName_.json)]

#### Sample code

* [C# (CreateQuery method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L59)

## Create a folder

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/wit/queries[/{folderPath}]?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string },
  "isFolder": true
}
```

| Parameter | Type     | Notes	
|:----------|:---------|:------------------------------
| URL
| instance  | string   | TFS server name ({server:port}).
| project   | string   | Name or ID of a project that contains the queries.
| folderPath    | string  | ID or Path to the folder you want to create the folder in
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| isFolder  | boolean  | Set to true if you want the created query hierarchy item to be a folder.
| name      | string   | Name of the query.

[!code-REST [POST__wit_queries_Shared Queries_json](./_data/queries/POST__wit_queries_Shared Queries.json)]

#### Sample code

* [C# (CreateFolder method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L18)

## Update a query

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/queries[/{folderPath}]/{query}?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "wiql": { string }
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| query     | string  | ID of the query to update.
| folderPath    | string  | Path to the folder you want to enumerate
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| wiql      | string  | New [query string](http://msdn.microsoft.com/library/bb130306.aspx).

[!code-REST [PATCH__wit_queries_Shared Queries__folderName___queryNameNew__json](./_data/queries/PATCH__wit_queries_Shared Queries__folderName___queryNameNew_.json)]

#### Sample code

* [C# (UpdateQuery method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L259)

## Rename a query

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{queryPath}?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string }
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| queryPath    | string  | ID or Path of the query to rename.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name      | string  | New name of the query.

[!code-REST [PATCH__wit_queries__queryId__json](./_data/queries/PATCH__wit_queries__queryId_.json)]

#### Sample code

* [C# (RenameQueryOrFolder method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L291)

## Rename a folder

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{folderPath}?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string }
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| folderPath    | string  | ID or Path of the folder to update.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name      | string  | New name of the query.

[!code-REST [PATCH__wit_queries_Shared Queries__folderName__json](./_data/queries/PATCH__wit_queries_Shared Queries__folderName_.json)]

#### Sample code

* [C# (RenameQueryOrFolder method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L291)

## Move a query or folder

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{folderPath}?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "Id": { GUID }
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| folderPath    | string  | ID or Path to the folder you want to enumerate
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| Id  | GUID    | ID of the folder to move.

[!code-REST [POST__wit_queries_My Queries_json](./_data/queries/POST__wit_queries_My Queries.json)]

## Delete a query or folder

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{queryPath}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| queryPath | string  | ID or path of the query or folder to delete.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By ID

[!code-REST [DELETE__wit_queries__queryId__json](./_data/queries/DELETE__wit_queries__queryId_.json)]

#### Sample code

* [C# (DeleteQueryById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L363)

### By folder path

[!code-REST [DELETE__wit_queries_My Queries__folderNameNew__json](./_data/queries/DELETE__wit_queries_My Queries__folderNameNew_.json)]

#### Sample code

* [C# (DeleteQueryByPath method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L383)

## Undelete a query or folder

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/queries/{id}?api-version={version}[&$undeleteDescendants=true]
```
```http
Content-type: Application/json
```
```json
{
  "isDeleted": false
}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Name or ID of a project that contains the queries.
| id    | string  | ID of the folder or query to undelete.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $undeleteDescendants={ true, false } | boolean | Undelete the children of this folder.
| Request body
| isDeleted      | boolean | Archival state of the folder or query.

[!code-REST [PATCH__wit_queries__folderId___undeleteDescendants-true_json](./_data/queries/PATCH__wit_queries__folderId___undeleteDescendants-true.json)]

#### Sample code

* [C# (UnDeleteFolder method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L467)
* [C# (UnDeleteQuery method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L486)
