---
title: Widgets | REST API Reference for Team Foundation Server 
description: Work with widgets programmatically using the REST APIs for Visual Studio Online.
ms.assetid: 8dbe828d-e90b-40c8-bd7b-2becaf7f7752
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Widgets

**Team Services**

[!INCLUDE [temp](../_data/disclaimer.md)]

[!INCLUDE [API_version](../_data/version3-preview2.md)]

## Widget 
<a id="WidgetDefinition"></a>
Each widget will have the following fields.

| Field                       | Type                | Notes
| :-----------                | :--------           | :--------
| id                          | string              | The unique identifier of the widget.
| name                        | string              | The name of the widget.
| position                    | WidgetPosition      | The position of the widget in the dashboard.
| size                        | WidgetSize          | The size of the widget in the dashboard.
| settings                    | string              | The configuration settings for the widget.
| settingsVersion             | SemanticVersion     | The version of configuration settings for the widget.
| contributionId              | string              | The contribution ID of the widget.
| eTag                        | string              | The concurrency eTag of the widget settings
| dashboard                   | Dashboard           | Optional: for updates, partial payload of parent dashboard, with only eTag field filled out


## WidgetPosition 
<a id="WidgetPosition"></a>
Position of a widget

| Field                       | Type                | Notes
| :-----------                | :--------           | :--------
| row                         | number              | 1-based row position of the widget
| column                      | number              | 1-based column position of the widget

## WidgetSize 
<a id="WidgetSize"></a>
Size of a widget

| Field                       | Type                | Notes
| :-----------                | :--------           | :--------
| rowSpan                     | number              | Height of the widget expressed in grid cells
| columnSpan                  | number              | Width of the widget expressed in grid cells

## SemanticVersion 
<a id="SemanticVersion"></a>
Version of widget settings

| Field                  | Type                | Notes
| :-----------           | :--------           | :--------
| major                  | number              | Major version when you make incompatible API changes
| minor                  | number              | Minor version when you add functionality in a backwards-compatible manner
| patch                  | number              | Patch version when you make backwards-compatible bug fixes


## Add a widget to the dashboard
<a id="AddNewWidget"></a>
Note that you must populate **dashboard** property of **Widget** with **eTag** field to participate in dashboard versioning.
See [data versioning](./overview.md#dataversioning).

```no-highlight
POST https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets?api-version={version}
```

| Parameter    | Type       | Default   | Notes
| :----------- | :--------- | :-------- | :-----------------------------------------------------
| URL
| account      | string     |           | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |           | Your Visual Studio Project.
| teamId       | string     |           | Your Team ID.
| dashboardId  | string     |           | ID of the dashboard to add this widget.
| Query
| api-version  | string     |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [POST_widgets_json](./_data/POST_widgets.json)]

## Get a widget
<a id="GetWidget"></a>

```no-highlight
GET https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/{id}?api-version={version}
```

| Parameter    | Type       | Default    | Notes
| :----------- | :--------- | :--------- | :--------------------------------------
| URL
| account      | string     |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |            | Your Visual Studio Project.
| teamId       | string     |            | Your Team ID.
| dashboardId  | string     |            | ID of the dashboard.
| id           | string     |            | ID of the widget.
| Query
| api-version  | string     |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET_widgets_widgetid_json](./_data/GET_widgets_widgetid.json)]

## Update a widget
<a id="UpdateWidget"></a>
Update the widget. 

Note the following: 

* You must populate the eTag field of the **Widget** to participate in widget settings versioning.
* You must populate **dashboard** property of **Widget** with **eTag** field to participate in dashboard versioning.
* This is not compliant with the JSON PATCH standard, and as such, nulling of the fields is not supported (null/missing value is considered no change).

See [data versioning](./overview.md#dataversioning).

```no-highlight
PATCH https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/{id}?api-version={version}
```

| Parameter    | Type         | Default    | Notes
| :----------- | :----------- | :--------- | :---------------------------------------------
| URL
| account      | string       |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string       |            | Your Visual Studio Project.
| teamId       | string       |            | Your Team ID.
| dashboardId  | string       |            | ID of the dashboard.
| id           | string       |            | ID of the widget.
| Query
| api-version  | string       |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [PATCH_widgets_widgetid_json](./_data/PATCH_widgets_widgetid.json)]

## Replace a widget
<a id="ReplaceWidget"></a>
Replace the widget.

Note the following: 
* You must populate the eTag field of the **Widget** to participate in widget settings versioning.
* You must populate **dashboard** property of **Widget** with **eTag** field to participate in dashboard versioning.

See [data versioning](./overview.md#dataversioning).

```no-highlight
PUT https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/{id}?api-version={version}
```

| Parameter    | Type         | Default    | Notes
| :----------- | :----------- | :--------- | :---------------------------------------------
| URL
| account      | string       |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string       |            | Your Visual Studio Project.
| teamId       | string       |            | Your Team ID.
| dashboardId  | string       |            | ID of the dashboard.
| id           | string       |            | ID of the widget.
| Query
| api-version  | string       |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.



[!code-REST [PUT_widgets_widgetid_json](./_data/PUT_widgets_widgetid.json)]

## Delete a widget
<a id="DeleteWidget"></a>
Delete a widget given its ID.

```no-highlight
DELETE https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/{id}?api-version={version}
```

| Parameter    | Type         | Default    | Notes
| :----------- | :----------- | :--------- | :-----------------------------------------------------
| URL
| account      | string       |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string       |            | Your Visual Studio Project.
| teamId       | string       |            | Your Team ID.
| dashboardId  | string       |            | ID of the dashboard.
| id           | string       |            | ID of the widget.
| Query
| api-version  | string       |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.


## Widgets List
<a id="WidgetsDefinition"></a>
List of widgets.

Note that list versioning is communicated via an ETag header present in all methods operating on a list of widgets. See [data versioning](./overview.md#dataversioning).

| Field                       | Type                | Notes
| :-----------                | :--------           | :--------
| count                       | number              | Number of widgets in the list
| value                       | Widget[]            | Array of widgets
| **Headers**
| ETag                        | string              | Concurrency eTag of widget list

## Get widgets List
<a id="GetWidgets"></a>
Get the list of widgets for a dashboard.

```no-highlight
GET https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/?api-version={version}
```

| Parameter    | Type       | Default    | Notes
| :----------- | :--------- | :--------- | :--------------------------------------
| URL
| account      | string     |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |            | Your Visual Studio Project.
| teamId       | string     |            | Your Team ID.
| dashboardId  | string     |            | ID of the dashboard.
| Query
| api-version  | string     |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Headers**
| ETag         | string     |            | (out) Concurrency eTag of the dashboard

[!code-REST [GET_widgets_json](./_data/GET_widgets.json)]

## Update widgets list
<a id="UpdateWidgets"></a>
Update the provided list of widgets. Partial array of widgets can be provided, and only those will be updated.
If any of provided widgets doesn't already exist in the dashboard an exception will be thrown.

Note the following: 
* You must provide ETag header when updating the list. See [data versioning](./overview.md#dataversioning).
* This is not compliant with JSON PATCH standard, and as such adding/removing widgets is not supported.

```no-highlight
PATCH https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/?api-version={version}
```

| Parameter    | Type       | Default    | Notes
| :----------- | :--------- | :--------- | :--------------------------------------
| URL
| account      | string     |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |            | Your Visual Studio Project.
| teamId       | string     |            | Your Team ID.
| dashboardId  | string     |            | ID of the dashboard.
| Query
| api-version  | string     |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Headers**
| ETag         | string     |            | (in/out) Concurrency eTag of the dashboard


[!code-REST [PATCH_widgets_json](./_data/PATCH_widgets.json)]


## Replace widgets list
<a id="ReplaceWidgets"></a>
Replace all widgets with a new list.

Note that you must provide ETag header when updating the list. See [data versioning](./overview.md#dataversioning).

```no-highlight
PUT https://{account}.VisualStudio.com/DefaultCollection/{project}/{teamId}/_apis/dashboard/dashboards/{dashboardId}/widgets/?api-version={version}
```

| Parameter    | Type       | Default    | Notes
| :----------- | :--------- | :--------- | :--------------------------------------
| URL
| account      | string     |            | Your [VS Team Services account](../../get-started/rest/basics.md).
| project      | string     |            | Your Visual Studio Project.
| teamId       | string     |            | Your Team ID.
| dashboardId  | string     |            | ID of the dashboard.
| Query
| api-version  | string     |            | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Headers**
| ETag         | string     |            | (in/out) Concurrency eTag of the dashboard

[!code-REST [PUT_widgets_json](./_data/PUT_widgets.json)]
