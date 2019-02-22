---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Request Work Item Linking | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: BFED54AE-D618-48D7-9F0E-11D4C107232E
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request work item linking

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

## Get items linked to a pull request

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/workitems?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/workitems?api-version=3.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "1",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
    }
  ]
}
```


## Adding and removing work item links to a pull request

See [Work Item Tracking](../../wit/overview.md) for more information.

The URL is the artifact ID of a pull request which can be retrieved from the [Pull Request Details](./pull-requests.md)

### Adding a work item link

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workItems/1?api-version=3.0
```
```json
[
  {
    "op": 0,
    "path": "/relations/-",
    "value": {
      "attributes": {
        "name": "Pull Request"
      },
      "rel": "ArtifactLink",
      "url": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f21"
    }
  }
]
```

#### Sample response

```json
{
  "id": 1,
  "rev": 11,
  "fields": {
    "System.AreaPath": "2016_10_31",
    "System.TeamProject": "2016_10_31",
    "System.IterationPath": "2016_10_31",
    "System.WorkItemType": "User Story",
    "System.State": "New",
    "System.Reason": "New",
    "System.CreatedDate": "2016-11-01T14:10:49.41Z",
    "System.CreatedBy": "Normal Paulk <fabrikamfiber16@hotmail.com>",
    "System.ChangedDate": "2016-11-01T16:30:55.803Z",
    "System.ChangedBy": "Normal Paulk <fabrikamfiber16@hotmail.com>",
    "System.Title": "some story",
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "Microsoft.VSTS.Common.StateChangeDate": "2016-11-01T14:10:49.41Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.StackRank": 1000000000,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_9C20C5CC2E8A418C9FEB2B7DF50558E0_Kanban.Column": "New",
    "WEF_9C20C5CC2E8A418C9FEB2B7DF50558E0_Kanban.Column.Done": false
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/2",
      "attributes": {
        "isLocked": false
      }
    },
    {
      "rel": "ArtifactLink",
      "url": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f21",
      "attributes": {
        "authorizedDate": "2016-11-01T16:30:55.803Z",
        "id": 7,
        "resourceCreatedDate": "2016-11-01T16:30:55.803Z",
        "resourceModifiedDate": "2016-11-01T16:30:55.803Z",
        "revisedDate": "9999-01-01T00:00:00Z",
        "name": "Pull Request"
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=af9b720a-cd56-44fd-98d3-d0461c3110e1&id=1"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/a7573007-bbb3-4341-b726-0c4148a07853/_apis/wit/workItemTypes/User%20Story"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
}
```


### Remove a work item link

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/wit/workItems/1?api-version=3.0
```
```json
[
  {
    "op": 5,
    "path": "/relations/1/url",
    "value": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f21"
  },
  {
    "op": 1,
    "path": "/relations/1"
  }
]
```

#### Sample response

```json
{
  "id": 1,
  "rev": 12,
  "fields": {
    "System.AreaPath": "2016_10_31",
    "System.TeamProject": "2016_10_31",
    "System.IterationPath": "2016_10_31",
    "System.WorkItemType": "User Story",
    "System.State": "New",
    "System.Reason": "New",
    "System.CreatedDate": "2016-11-01T14:10:49.41Z",
    "System.CreatedBy": "Normal Paulk <fabrikamfiber16@hotmail.com>",
    "System.ChangedDate": "2016-11-01T16:30:56.803Z",
    "System.ChangedBy": "Normal Paulk <fabrikamfiber16@hotmail.com>",
    "System.Title": "some story",
    "System.BoardColumn": "New",
    "System.BoardColumnDone": false,
    "Microsoft.VSTS.Common.StateChangeDate": "2016-11-01T14:10:49.41Z",
    "Microsoft.VSTS.Common.Priority": 2,
    "Microsoft.VSTS.Common.StackRank": 1000000000,
    "Microsoft.VSTS.Common.ValueArea": "Business",
    "WEF_9C20C5CC2E8A418C9FEB2B7DF50558E0_Kanban.Column": "New",
    "WEF_9C20C5CC2E8A418C9FEB2B7DF50558E0_Kanban.Column.Done": false
  },
  "relations": [
    {
      "rel": "System.LinkTypes.Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/2",
      "attributes": {
        "isLocked": false
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/updates"
    },
    "workItemRevisions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/revisions"
    },
    "workItemHistory": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1/history"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=af9b720a-cd56-44fd-98d3-d0461c3110e1&id=1"
    },
    "workItemType": {
      "href": "https://mytfsserver/DefaultCollection/a7573007-bbb3-4341-b726-0c4148a07853/_apis/wit/workItemTypes/User%20Story"
    },
    "fields": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/1"
}
```


