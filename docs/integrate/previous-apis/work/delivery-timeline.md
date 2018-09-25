---
title: Delivery Timeline | REST API Reference for Team Foundation Server
description: Work with delivery timeline plans programmatically using the REST APIs for Team Foundation Server. 
ms.contentid: D7B8FEC4-75F9-432E-8140-091C535C514B
ms.prod: devops
---

# Delivery timeline
[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

> **Prerequisite**: You need to install [Delivery Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans) extension to be able to access these endpoints.

## Get a list of workitems included in the given timeline window

```httprequest
GET https://{instance}/DefaultCollection/{project}/_apis/work/plans/{id}/deliverytimeline?revision={revision}&startDate={startDate}&endDate={endDate}&api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| id        | string  | | ID of the specific plan.
| Query
| revision  | string  | Latest revision of the plan | Current revision of the plan
| startDate | string  | 2 weeks prior to the current date | Start date of the snapshot for which the data is to be requested. The date is expected to be in the UTC format (YYYY-MM-DD). Only the date component is respected, the time component will be ignored.
| endDate   | string  | 7 weeks after the current date | End date of the snapshot for which the data is to be requested. The date is expected to be in the UTC format (YYYY-MM-DD). Only the date component is respected, the time component will be ignored.
| api-version | string  | | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET__work_plans_deliverytimeline_json](./_data/GET__work_plans_deliverytimeline_.json)]
