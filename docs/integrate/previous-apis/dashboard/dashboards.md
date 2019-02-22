---
title: Dashboards | REST API Reference for Team Foundation Server
description: Work with dashboard programmatically using the REST APIs for VSTS.
ms.assetid: EE46001A-8B9C-4E09-B99B-4F104013DFAD
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Dashboards

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


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


#### Sample request

```
GET http://localhost:8080/tfs/DefaultCollection/83e53972-81cd-434e-b15a-6fafcf405ac7/ac3cf153-3ae1-44ea-8663-e75006873f81/_apis/Dashboard/Dashboards/?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "dashboardEntries": [
    {
      "id": "29653dd2-c18a-4d19-8333-e556c5b8d025",
      "name": "Overview",
      "refreshInterval": 0,
      "position": 1,
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
    },
    {
      "id": "ad633947-f99b-4813-bfc6-b67b7e687b0e",
      "name": "t2",
      "refreshInterval": 0,
      "position": 2,
      "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/ad633947-f99b-4813-bfc6-b67b7e687b0e"
    }
  ],
  "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards"
    },
    "dashboard": [
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/ad633947-f99b-4813-bfc6-b67b7e687b0e"
      }
    ]
  }
}
```


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

#### Sample request

```
POST http://localhost:8080/tfs/DefaultCollection/83e53972-81cd-434e-b15a-6fafcf405ac7/ac3cf153-3ae1-44ea-8663-e75006873f81/_apis/Dashboard/Dashboards/?api-version=3.0-preview.2
```
```json
{
  "name": "test",
  "position": 5,
  "widgets": [
    {
      "name": "Team Members renamed",
      "position": {
        "row": 2,
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
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget"
    }
  ]
}
```

#### Sample response

```json
{
  "id": "29653dd2-c18a-4d19-8333-e556c5b8d025",
  "name": "test",
  "position": 5,
  "eTag": "1",
  "widgets": [
    {
      "name": "Team Members renamed",
      "position": {
        "row": 2,
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
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget"
    }
  ],
  "url": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/Dashboards"
    },
    "widget": [
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/99755c45-cb33-4ab4-9f36-e5920cec7ba9/dc0d32d0-be95-4385-9df6-1176d698be22/_apis/Dashboard/dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025/Widgets/456afb86-ecf6-49cf-bbcc-1ab7d0fc14b2"
      }
    ]
  }
}
```


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

#### Sample request

```
GET http://localhost:8080/tfs/DefaultCollection/83e53972-81cd-434e-b15a-6fafcf405ac7/ac3cf153-3ae1-44ea-8663-e75006873f81/_apis/Dashboard/Dashboards/29653dd2-c18a-4d19-8333-e556c5b8d025?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "id": "759b486a-e22a-4692-bf40-e2deec0de530",
  "name": "Overview",
  "refreshInterval": 0,
  "position": 1,
  "eTag": "2",
  "widgets": [
    {
      "id": "c64731a0-8c47-4b6e-92dc-25668e004e1d",
      "eTag": "1",
      "name": "Team Members",
      "position": {
        "row": 1,
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
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/c64731a0-8c47-4b6e-92dc-25668e004e1d",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/c64731a0-8c47-4b6e-92dc-25668e004e1d"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.TeamMembersWidget"
    },
    {
      "id": "3e55ea7a-46c6-43c5-ba0d-475093d4e483",
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
      "settings": "{\"query\":{\"queryId\":\"3c242d67-38f1-41d8-b8af-1f7fb218940d\", \"queryName\": \"Open User Stories\"}}",
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/3e55ea7a-46c6-43c5-ba0d-475093d4e483",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/3e55ea7a-46c6-43c5-ba0d-475093d4e483"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-mywork-web.Microsoft.VisualStudioOnline.MyWork.WitViewWidget"
    },
    {
      "id": "615c113e-becc-48fa-8f86-5acf2cb6c0cd",
      "eTag": "1",
      "name": "Work Links",
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
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/615c113e-becc-48fa-8f86-5acf2cb6c0cd",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/615c113e-becc-48fa-8f86-5acf2cb6c0cd"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.WorkLinksWidget"
    },
    {
      "id": "13635e90-277f-40f0-b601-7a08de067279",
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
      "settings": "{\"queryId\":\"3c242d67-38f1-41d8-b8af-1f7fb218940d\", \"queryName\": \"Open User Stories\"}",
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "artifactId": "",
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/13635e90-277f-40f0-b601-7a08de067279",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/13635e90-277f-40f0-b601-7a08de067279"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.QueryScalarWidget"
    },
    {
      "id": "673670cc-8efc-4bf8-9dd8-7c83804bdf75",
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
      "artifactId": "",
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/673670cc-8efc-4bf8-9dd8-7c83804bdf75",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/673670cc-8efc-4bf8-9dd8-7c83804bdf75"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.NewWorkItemWidget",
      "configurationContributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.NewWorkItemWidget.Configuration"
    },
    {
      "id": "abd84deb-2c64-4df1-9b8b-92f9a7e29f77",
      "eTag": "1",
      "name": "Markdown",
      "position": {
        "row": 1,
        "column": 8
      },
      "size": {
        "rowSpan": 1,
        "columnSpan": 2
      },
      "settings": "#####Markdown\nAdd content using the markdown widget.\n- **Bold**\n- *Italic*\n- [Links]()",
      "settingsVersion": {
        "major": 1,
        "minor": 0,
        "patch": 0
      },
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/abd84deb-2c64-4df1-9b8b-92f9a7e29f77",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/abd84deb-2c64-4df1-9b8b-92f9a7e29f77"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.MarkdownWidget",
      "configurationContributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.MarkdownWidget.Configuration"
    },
    {
      "id": "07c1d6e4-ff3c-421a-a165-9fabd10ab623",
      "eTag": "1",
      "name": "Visual Studio Shortcuts",
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
      "artifactId": "",
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/07c1d6e4-ff3c-421a-a165-9fabd10ab623",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/07c1d6e4-ff3c-421a-a165-9fabd10ab623"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.VSLinksWidget"
    },
    {
      "id": "af696a7f-2e1e-4068-92a6-af164de70cd5",
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
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/af696a7f-2e1e-4068-92a6-af164de70cd5",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/af696a7f-2e1e-4068-92a6-af164de70cd5"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.SprintBurndownWidget"
    },
    {
      "id": "f2329867-71ea-4a77-a676-e1a98263e4bd",
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
      "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/f2329867-71ea-4a77-a676-e1a98263e4bd",
      "_links": {
        "self": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/f2329867-71ea-4a77-a676-e1a98263e4bd"
        },
        "group": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets"
        },
        "dashboard": {
          "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
        }
      },
      "contributionId": "ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.HowToLinksWidget"
    }
  ],
  "url": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530",
  "_links": {
    "self": {
      "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards/759b486a-e22a-4692-bf40-e2deec0de530"
    },
    "group": {
      "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/Dashboards"
    },
    "widget": [
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/c64731a0-8c47-4b6e-92dc-25668e004e1d"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/3e55ea7a-46c6-43c5-ba0d-475093d4e483"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/615c113e-becc-48fa-8f86-5acf2cb6c0cd"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/13635e90-277f-40f0-b601-7a08de067279"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/673670cc-8efc-4bf8-9dd8-7c83804bdf75"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/abd84deb-2c64-4df1-9b8b-92f9a7e29f77"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/07c1d6e4-ff3c-421a-a165-9fabd10ab623"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/af696a7f-2e1e-4068-92a6-af164de70cd5"
      },
      {
        "href": "http://localhost:8080/tfs/DefaultCollection/969d9ce2-8aa1-40b5-86e6-2eb7f583d6c4/c21744ff-6194-4860-80ff-0baaf853baca/_apis/Dashboard/dashboards/759b486a-e22a-4692-bf40-e2deec0de530/Widgets/f2329867-71ea-4a77-a676-e1a98263e4bd"
      }
    ]
  }
}
```


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
