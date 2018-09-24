---
title: Plans | REST API Reference for Team Foundation Server
description: Work with agile plans programmatically using the REST APIs for Team Foundation Server. 
ms.contentid: D7B8FEC4-75F9-432E-8140-091C535C514B
ms.prod: devops
---

# Plans
[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

> **Prerequisite**: You need to install [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans) extension to be able to access these endpoints.

## Get a list of plans for the project

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET__work_plans_json](./_data/GET__work_plans_.json)]

## Get a plan associated with the project

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__work_plans__planId_json](./_data/GET__work_plans__planId_.json)]

## Add a plan for the project

```httprequest
POST https://{instance}/DefaultCollection/{project}/_apis/work/plans?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Add a new "Delivery Plan"

[!code-REST [POST__work_plans_json](./_data/POST__work_plans_.json)]

## Update an existing plan

```httprequest
PUT https://{instance}/DefaultCollection/{project}/_apis/work/plans{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [PUT__work_plans_json](./_data/PUT__work_plans_.json)]

## Delete a plan associated with the project

```httprequest
DELETE https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  || ID of the specific plan.
| Query
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__work_plans__planId_json](./_data/DELETE__work_plans__planId_.json)]
