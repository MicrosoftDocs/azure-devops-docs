---
title: Dashboards | REST API Reference for Team Foundation Server
description: Work with dashboard programmatically using the REST APIs for VSTS.
ms.assetid: EE46001A-8B9C-4E09-B99B-4F104013DFAD
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Dashboards

**Team Services**

[!INCLUDE [temp](../_data/disclaimer.md)]

[!INCLUDE [API_version](../_data/version3-preview2.md)]


## Dashboard
<a id="Dashboard"></a>
Each dashboard entry has the following fields.

| Field            | Type             | Notes                                            
| :-----------     | :--------        | :--------                                        
| id               | string           | The ID of the dashboard.
| name             | string           | The name of the dashboard.
| position         | int              | The unique position of the dashboard in the group of dashboards for the team.
| eTag             | string           | The concurrency eTag of the dashboard
| widgets          | Widget[]         | Array of widgets in the dashboard      


## Get a dashboard list
<a id="GetDashboards"></a>
Get list of dashboards in the given team.

```no-highlight
GET https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/?api-version={version}
```

| Parameter    | Type         | Default    | Notes
| :----------- | :----------- | :--------- | :-----------------
| URL
| account      | string       |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string       |            | Your Visual Studio Project.
| teamId       | string       |            | Your Team ID.
| Query
| api-version  | string       |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET_dashboards](./_data/GET_dashboards.json)]

## Adding a dashboard to the team
<a id="AddDashboard"></a>
<a name="addingadashboardtotheteam" />

```no-highlight
POST https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/?api-version={version}
```

| Parameter    | Type       | Default   | Notes
| :----------- | :--------- | :-------- | :-----------------------------------------------------
| URL
| account      | string     |           | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |           | Your Visual Studio Project.
| teamId       | string     |           | Your Team ID.
| Query
| api-version  | string     |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [POST_dashboard](./_data/POST_dashboard.json)]

## Get a dashboard
<a id="GetDashboard"></a>
Get a specified dashboard in the given team.

```no-highlight
GET https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{id}?api-version={version}
```

| Parameter    | Type         | Default    | Notes
| :----------- | :----------- | :--------- | :-----------------
| URL
| account      | string       |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string       |            | Your Visual Studio Project.
| teamId       | string       |            | Your Team ID.
| id           | string       |            | ID of the dashboard.
| Query
| api-version  | string       |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET_dashboard](./_data/GET_dashboard.json)]

## Delete a dashboard
<a id="DeleteDashboard"></a>
Delete a dashboard given its ID. This also deletes the widgets associated with this dashboard.

```no-highlight
DELETE https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{id}?api-version={version}
```

| Parameter    | Type       | Default    | Notes
| :----------- | :--------- | :--------- | :-----------------
| URL
| account      | string     |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |            | Your Visual Studio Project.
| teamId       | string     |            | Your Team ID.
| id           | string     |            | ID of the dashboard.
| Query
| api-version  | string     |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.
