---
title: Widgets | REST API Reference for Team Foundation Server 
description: Work with widgets programmatically using the REST APIs for Visual Studio Online.
ms.assetid: 8dbe828d-e90b-40c8-bd7b-2becaf7f7752
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Widgets

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


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

#### Sample request

```
POST http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/Widgets?api-version=3.0-preview.2
```
```json
{
  "name": "Other Links",
  "position": {
    "row": 1,
    "column": 1
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "18"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget"
}
```

#### Sample response

```json
{
  "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "eTag": "1",
  "name": "Other Links",
  "position": {
    "row": 1,
    "column": 1
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "19"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget",
  "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
    },
    "dashboard": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
    }
  }
}
```


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

#### Sample request

```
GET http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/Widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "eTag": "5",
  "name": "Other Links",
  "position": {
    "row": 1,
    "column": 1
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "18"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget",
  "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
    },
    "dashboard": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
    }
  }
}
```


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

#### Sample request

```
PATCH http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf?api-version=3.0-preview.2
```
```json
{
  "id": "456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2",
  "eTag": "2",
  "name": "Team Members",
  "position": {
    "row": 2,
    "column": 6
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "6"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget"
}
```

#### Sample response

```json
{
  "id": "456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2",
  "eTag": "3",
  "name": "Team Members",
  "position": {
    "row": 2,
    "column": 6
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "7"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget",
  "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
    },
    "dashboard": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
    }
  }
}
```


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



#### Sample request

```
PUT http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf?api-version=3.0-preview.2
```
```json
{
  "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "eTag": "2",
  "name": "Other Links",
  "position": {
    "row": 1,
    "column": 1
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "18"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget"
}
```

#### Sample response

```json
{
  "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "eTag": "3",
  "name": "Other Links",
  "position": {
    "row": 1,
    "column": 1
  },
  "size": {
    "rowSpan": 1,
    "columnSpan": 2
  },
  "settings": null,
  "settingsVersion": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "dashboard": {
    "eTag": "19"
  },
  "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget",
  "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
    },
    "dashboard": {
      "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
    }
  }
}
```


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

#### Sample request

```
GET http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/Widgets/?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "count": 8,
  "value": [
    {
      "id": "456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2",
      "eTag": "2",
      "name": "Team Members",
      "position": {
        "row": 2,
        "column": 6
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget"
    },
    {
      "id": "15baf28a-2745-46eb-9597-3d5e512798a1",
      "eTag": "1",
      "name": "New Work Item",
      "position": {
        "row": 3,
        "column": 3
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/15baf28a-2745-46eb-9597-3d5e512798a1",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/15baf28a-2745-46eb-9597-3d5e512798a1"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.NewWorkItemWidget"
    },
    {
      "id": "4b96050d-b065-4b68-9a38-4701aeca15f4",
      "eTag": "1",
      "name": "Open User Stories",
      "position": {
        "row": 3,
        "column": 5
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 1
      },
      "settings": "{\"queryId\":\"e98c0831-1acb-458e-b2ac-1e7f841e0007\", \"queryName\": \"Open User Stories\"}",
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/4b96050d-b065-4b68-9a38-4701aeca15f4",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/4b96050d-b065-4b68-9a38-4701aeca15f4"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.QueryScalarWidget"
    },
    {
      "id": "1b124d3a-ebad-413a-aca4-af14f7af87b6",
      "eTag": "1",
      "name": "Sprint Burndown",
      "position": {
        "row": 3,
        "column": 1
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/1b124d3a-ebad-413a-aca4-af14f7af87b6",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/1b124d3a-ebad-413a-aca4-af14f7af87b6"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.SprintBurndownWidget"
    },
    {
      "id": "a5095720-c007-42df-8041-b50077b85313",
      "eTag": "1",
      "name": "Welcome",
      "position": {
        "row": 1,
        "column": 1
      },
      "size": {
        "rowSpan": 2,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/a5095720-c007-42df-8041-b50077b85313",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/a5095720-c007-42df-8041-b50077b85313"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.HowToLinksWidget"
    },
    {
      "id": "6bbef381-e10d-4cd1-884f-b7455acaae13",
      "eTag": "2",
      "name": "Visual Studio Shortcuts",
      "position": {
        "row": 1,
        "column": 7
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/6bbef381-e10d-4cd1-884f-b7455acaae13",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/6bbef381-e10d-4cd1-884f-b7455acaae13"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.VSLinksWidget"
    },
    {
      "id": "9dca1328-6811-4639-ba39-c20618731f73",
      "eTag": "1",
      "name": "Open User Stories",
      "position": {
        "row": 1,
        "column": 3
      },
      "size": {
        "rowSpan": 2,
        "columnSpan": 3
      },
      "settings": "{\"query\":{\"queryId\":\"e98c0831-1acb-458e-b2ac-1e7f841e0007\", \"queryName\": \"Open User Stories\"}}",
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/9dca1328-6811-4639-ba39-c20618731f73",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/9dca1328-6811-4639-ba39-c20618731f73"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-mywork-web.Microsoft.VisualStudioOnline.MyWork.WitViewWidget"
    },
    {
      "id": "5e419d89-3e9d-4cfd-a101-ffa5453e657c",
      "eTag": "2",
      "name": "Work Links",
      "position": {
        "row": 3,
        "column": 6
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/5e419d89-3e9d-4cfd-a101-ffa5453e657c",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/5e419d89-3e9d-4cfd-a101-ffa5453e657c"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.WorkLinksWidget"
    }
  ]
}
```


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


#### Sample request

```
PATCH http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets?api-version=3.0-preview.2
```
```json
[
  {
    "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
    "eTag": "5",
    "name": "Other Links",
    "position": {
      "row": 1,
      "column": 2
    },
    "size": {
      "rowSpan": 1,
      "columnSpan": 2
    },
    "settings": null,
    "settingsVersion": {
      "major": 1,
      "minor": 0,
      "patch": 0
    },
    "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget"
  }
]
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
      "eTag": "5",
      "name": "Other Links",
      "position": {
        "row": 1,
        "column": 2
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget",
      "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
        }
      }
    }
  ]
}
```



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

#### Sample request

```
PUT http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets?api-version=3.0-preview.2
```
```json
[
  {
    "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
    "eTag": "1",
    "name": "Other Links",
    "position": {
      "row": 1,
      "column": 2
    },
    "size": {
      "rowSpan": 1,
      "columnSpan": 2
    },
    "settings": null,
    "settingsVersion": {
      "major": 1,
      "minor": 0,
      "patch": 0
    },
    "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget"
  }
]
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
      "eTag": "2",
      "name": "Other Links",
      "position": {
        "row": 1,
        "column": 2
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": null,
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget",
      "url": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets/69f6c5b7-0eb0-4067-b75f-6edff74d0fcf"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a/widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/6c9633e5-5633-4b1d-8081-02b35e39258e/8b69d2eb-2e18-4c75-a1ca-4c1820800e2e/_apis/Dashboard/Dashboards/e17c2ae9-c35c-4ddd-9d4b-6aa47aa4d01a"
        }
      }
    }
  ]
}
```

