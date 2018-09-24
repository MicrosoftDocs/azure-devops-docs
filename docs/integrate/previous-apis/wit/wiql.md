---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Query Language | REST API Reference for Team Foundation Server
description: Work with the work item query language programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: C98285FE-3882-4F35-9E19-9A6E109EED66
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/04/2017
---

# Work item query language
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]



## Run a query 

```no-highlight
POST https://{instance}/DefaultCollection/[{project}/]_apis/wit/wiql?api-version={version}
```
```http
Content-type: application/json
```
```json
{
  "query": string
}
```

| Parameter     | Type    | Default | Notes	
|:--------------|:--------|:--------|:------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Filter the results to this project.<br/>If your query string uses the @project macro ([System.TeamProject] = @project, for example), you must specify the project in the URL.
| Query
| api-version   | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| timePrecision | boolean | false   | True if time precision is allowed in the date time comparisons.
| Body
| query         | string  |         | The [query string](http://msdn.microsoft.com/library/bb130306.aspx) to run.

[!code-REST [POST__wit_wiql_json](./_data/wiql/POST__wit_wiql.json)]

## Run a stored query

```no-highlight
GET https://{instance}/DefaultCollection/[{project}/]_apis/wit/wiql/{id}?api-version={version}
```

| Parameter     | Type    | Default | Notes	
|:--------------|:--------|:--------|:------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Filter the results to this project.<br/>If the query uses the @project macro ([System.TeamProject] = @project, for example), you must specify the project in the URL.
| id            | GUID    |         | ID of a [stored query](./queries.md).
| Query
| version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| timePrecision | boolean | false   | True if time precision is allowed in the date time comparisons.

[!code-REST [GET__wit_wiql__queryId__json](./_data/wiql/GET__wit_wiql__queryId_.json)]

## Get work items

After executing a query, [get the work items using the IDs](./work-items.md#byids) that are returned in the query results response. You can get up to 200 work items at a time.

### A flat query

##### 1. Get results of a flat work item query.  

[!code-REST [POST__wit_wiql2_json](./_data/wiql/POST__wit_wiql2.json)]

##### 2. Get data for each work item returned.

[!code-REST [GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_2_json](./_data/workitems/GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_2.json)]

### A one-hop query
![Results of the one-hop query](./_img/wit-onehop.png)

##### 1. Get results of a one-hop work item query.

[!code-REST [POST__wit_wiql3_json](./_data/wiql/POST__wit_wiql3.json)]

##### 2. Get data for each work item returned.

[!code-REST [GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_3_json](./_data/workitems/GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_3.json)]

### A tree query
![Results of the tree query](./_img/wit-tree.png)

##### 1. Get results of a tree work item query.

[!code-REST [POST__wit_wiql4_json](./_data/wiql/POST__wit_wiql4.json)]

##### 2. Get data for each work item returned.

[!code-REST [GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_4_json](./_data/workitems/GET__wit_WorkItems_ids-_ids__fields-_columns__asOf-_asof_4.json)]


## Limits on WIQL length  

For queries made against Team Services, the WIQL length must not exceed 32K characters. The system won't allow you to create or run queries that exceed that length. 

## WIQL extension

See [Wiql Editor, a Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ottostreifel.wiql-editor).