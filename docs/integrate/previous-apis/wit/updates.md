---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Updates | REST API Reference for Team Foundation Server
description: Work with updates to work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: B4C07EF4-535A-4479-803D-C181553613EE
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item updates

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Updates represent changes made to work items over time.

To get the entire work item at a point in time, use [revisions](./revisions.md).

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work items updates

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/updates?api-version={version}[&$top={int}&$skip={int}]
```

| Parameter | Type    | Default | Notes	
|:----------|:--------|:--------|:--------------------------------------
| URL
| instance  | string  |         | TFS server name ({server:port}).
| id        | int     |         | ID of the work item.
| Query
| api-version | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | integer | 200     | Number of updates to return, up to 200.
| $skip     | integer | 0       | Number of updates to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/updates?api-version=1.0
```

#### Sample response

```json
{
  "count": 9,
  "value": [
    {
      "id": 1,
      "rev": 1,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:23.933Z",
      "fields": {
        "System.Id": {
          "newValue": 299
        },
        "System.AreaId": {
          "newValue": 3570
        },
        "System.AreaPath": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.NodeName": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.TeamProject": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.AreaLevel1": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.Rev": {
          "newValue": 1
        },
        "System.AuthorizedDate": {
          "newValue": "2014-12-29T20:49:21.617Z"
        },
        "System.RevisedDate": {
          "newValue": "2014-12-29T20:49:23.933Z"
        },
        "System.IterationId": {
          "newValue": 3570
        },
        "System.IterationPath": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.IterationLevel1": {
          "newValue": "Fabrikam-Fiber-Git"
        },
        "System.WorkItemType": {
          "newValue": "Task"
        },
        "System.State": {
          "newValue": "To Do"
        },
        "System.Reason": {
          "newValue": "New task"
        },
        "System.AssignedTo": {},
        "System.CreatedDate": {
          "newValue": "2014-12-29T20:49:21.617Z"
        },
        "System.CreatedBy": {
          "newValue": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.ChangedDate": {
          "newValue": "2014-12-29T20:49:21.617Z"
        },
        "System.ChangedBy": {
          "newValue": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.AuthorizedAs": {
          "newValue": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
        },
        "System.PersonId": {
          "newValue": 77331
        },
        "System.Watermark": {
          "newValue": 609
        },
        "System.Title": {
          "newValue": "JavaScript implementation for Microsoft Account"
        },
        "Microsoft.VSTS.Scheduling.RemainingWork": {
          "newValue": 4
        },
        "System.Description": {
          "newValue": "Follow the code samples from MSDN"
        },
        "System.History": {
          "newValue": "Jim has the most context around this."
        },
        "System.Tags": {
          "newValue": ""
        }
      },
      "relations": {
        "added": [
          {
            "rel": "System.LinkTypes.Hierarchy-Reverse",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/297",
            "attributes": {
              "isLocked": false,
              "comment": "decomposition of work"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/1"
    },
    {
      "id": 2,
      "rev": 2,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:24.67Z",
      "fields": {
        "System.AreaId": {
          "oldValue": 3570,
          "newValue": 4486
        },
        "System.AreaPath": {
          "oldValue": "Fabrikam-Fiber-Git",
          "newValue": "Fabrikam-Fiber-Git\\Website"
        },
        "System.NodeName": {
          "oldValue": "Fabrikam-Fiber-Git",
          "newValue": "Website"
        },
        "System.AreaLevel2": {
          "newValue": "Website"
        },
        "System.Rev": {
          "oldValue": 1,
          "newValue": 2
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:21.617Z",
          "newValue": "2014-12-29T20:49:23.933Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:21.617Z",
          "newValue": "2014-12-29T20:49:23.933Z"
        },
        "System.Watermark": {
          "oldValue": 609,
          "newValue": 611
        },
        "System.History": {
          "oldValue": "Jim has the most context around this.",
          "newValue": "Moving to the right area path"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/2"
    },
    {
      "id": 3,
      "rev": 3,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:26.99Z",
      "fields": {
        "System.Rev": {
          "oldValue": 2,
          "newValue": 3
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:24.67Z",
          "newValue": "2014-12-29T20:49:26.99Z"
        },
        "System.AssignedTo": {
          "newValue": "Johnnie McLeod <fabrikamfiber2@hotmail.com>"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.Watermark": {
          "oldValue": 611,
          "newValue": 612
        },
        "System.History": {
          "oldValue": "Moving to the right area path",
          "newValue": "Johnnie is going to take this work over."
        }
      },
      "relations": {
        "added": [
          {
            "rel": "System.LinkTypes.Related",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
            "attributes": {
              "isLocked": false,
              "comment": "adding another task"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/3"
    },
    {
      "id": 4,
      "rev": 3,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:25.623Z",
      "relations": {
        "added": [
          {
            "rel": "System.LinkTypes.Dependency-Forward",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
            "attributes": {
              "isLocked": false,
              "comment": "Adding traceability to dependencies"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/4"
    },
    {
      "id": 5,
      "rev": 3,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:26.523Z",
      "relations": {
        "removed": [
          {
            "rel": "System.LinkTypes.Dependency-Forward",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
            "attributes": {
              "isLocked": false,
              "comment": "Adding traceability to dependencies"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/5"
    },
    {
      "id": 6,
      "rev": 4,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:27.48Z",
      "fields": {
        "System.Rev": {
          "oldValue": 3,
          "newValue": 4
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:24.67Z",
          "newValue": "2014-12-29T20:49:26.99Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:26.99Z",
          "newValue": "2014-12-29T20:49:27.48Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:24.67Z",
          "newValue": "2014-12-29T20:49:26.99Z"
        },
        "System.Watermark": {
          "oldValue": 612,
          "newValue": 613
        },
        "System.History": {
          "oldValue": "Johnnie is going to take this work over.",
          "newValue": "Adding the necessary spec"
        }
      },
      "relations": {
        "added": [
          {
            "rel": "AttachedFile",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/098a279a-60b9-40a8-868b-b7fd00c0a439",
            "attributes": {
              "authorizedDate": "2014-12-29T20:49:26.99Z",
              "id": 65274,
              "resourceCreatedDate": "2014-12-29T20:49:26.99Z",
              "resourceModifiedDate": "2014-12-29T20:49:26.99Z",
              "revisedDate": "2014-12-29T20:49:27.48Z",
              "comment": "Spec for the work",
              "name": "Spec.txt"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/6"
    },
    {
      "id": 7,
      "rev": 5,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:27.98Z",
      "fields": {
        "System.Rev": {
          "oldValue": 4,
          "newValue": 5
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:26.99Z",
          "newValue": "2014-12-29T20:49:27.48Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:27.48Z",
          "newValue": "2014-12-29T20:49:27.98Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:26.99Z",
          "newValue": "2014-12-29T20:49:27.48Z"
        },
        "System.Watermark": {
          "oldValue": 613,
          "newValue": 614
        }
      },
      "relations": {
        "removed": [
          {
            "rel": "AttachedFile",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/attachments/098a279a-60b9-40a8-868b-b7fd00c0a439",
            "attributes": {
              "authorizedDate": "2014-12-29T20:49:26.99Z",
              "id": 65274,
              "resourceCreatedDate": "2014-12-29T20:49:26.99Z",
              "resourceModifiedDate": "2014-12-29T20:49:26.99Z",
              "revisedDate": "2014-12-29T20:49:27.48Z",
              "comment": "Spec for the work",
              "name": "Spec.txt"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/7"
    },
    {
      "id": 8,
      "rev": 6,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:28.74Z",
      "fields": {
        "System.Rev": {
          "oldValue": 5,
          "newValue": 6
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:27.48Z",
          "newValue": "2014-12-29T20:49:27.98Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:27.98Z",
          "newValue": "2014-12-29T20:49:28.74Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:27.48Z",
          "newValue": "2014-12-29T20:49:27.98Z"
        },
        "System.Watermark": {
          "oldValue": 614,
          "newValue": 615
        },
        "System.History": {
          "newValue": "Linking to a blog article for context"
        }
      },
      "relations": {
        "added": [
          {
            "rel": "Hyperlink",
            "url": "http://blogs.msdn.com/b/bharry/archive/2014/05/12/a-new-api-for-visual-studio-online.aspx",
            "attributes": {
              "authorizedDate": "2014-12-29T20:49:27.98Z",
              "id": 65275,
              "resourceCreatedDate": "2014-12-29T20:49:27.98Z",
              "resourceModifiedDate": "2014-12-29T20:49:27.98Z",
              "revisedDate": "9999-01-01T00:00:00Z"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/8"
    },
    {
      "id": 9,
      "rev": 7,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "9999-01-01T00:00:00Z",
      "fields": {
        "System.Rev": {
          "oldValue": 6,
          "newValue": 7
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:27.98Z",
          "newValue": "2014-12-29T20:49:28.74Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:28.74Z",
          "newValue": "9999-01-01T00:00:00Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:27.98Z",
          "newValue": "2014-12-29T20:49:28.74Z"
        },
        "System.Watermark": {
          "oldValue": 615,
          "newValue": 616
        },
        "System.Tags": {
          "oldValue": "",
          "newValue": "Tag1; Tag2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/9"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfWorkItemUpdates method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L19)

### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/updates?$skip=1&$top=2&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 2,
      "rev": 2,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:24.67Z",
      "fields": {
        "System.AreaId": {
          "oldValue": 3570,
          "newValue": 4486
        },
        "System.AreaPath": {
          "oldValue": "Fabrikam-Fiber-Git",
          "newValue": "Fabrikam-Fiber-Git\\Website"
        },
        "System.NodeName": {
          "oldValue": "Fabrikam-Fiber-Git",
          "newValue": "Website"
        },
        "System.AreaLevel2": {
          "newValue": "Website"
        },
        "System.Rev": {
          "oldValue": 1,
          "newValue": 2
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:21.617Z",
          "newValue": "2014-12-29T20:49:23.933Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:21.617Z",
          "newValue": "2014-12-29T20:49:23.933Z"
        },
        "System.Watermark": {
          "oldValue": 609,
          "newValue": 611
        },
        "System.History": {
          "oldValue": "Jim has the most context around this.",
          "newValue": "Moving to the right area path"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/2"
    },
    {
      "id": 3,
      "rev": 3,
      "revisedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "revisedDate": "2014-12-29T20:49:26.99Z",
      "fields": {
        "System.Rev": {
          "oldValue": 2,
          "newValue": 3
        },
        "System.AuthorizedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.RevisedDate": {
          "oldValue": "2014-12-29T20:49:24.67Z",
          "newValue": "2014-12-29T20:49:26.99Z"
        },
        "System.AssignedTo": {
          "newValue": "Johnnie McLeod <fabrikamfiber2@hotmail.com>"
        },
        "System.ChangedDate": {
          "oldValue": "2014-12-29T20:49:23.933Z",
          "newValue": "2014-12-29T20:49:24.67Z"
        },
        "System.Watermark": {
          "oldValue": 611,
          "newValue": 612
        },
        "System.History": {
          "oldValue": "Moving to the right area path",
          "newValue": "Johnnie is going to take this work over."
        }
      },
      "relations": {
        "added": [
          {
            "rel": "System.LinkTypes.Related",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
            "attributes": {
              "isLocked": false,
              "comment": "adding another task"
            }
          }
        ]
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/3"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfWorkItemUpdatesPaged method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L43)

## Get a work item update

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workitems/{id}/updates/{revisionId}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the work item.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/updates/2?api-version=1.0
```

#### Sample response

```json
{
  "id": 2,
  "rev": 2,
  "revisedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "revisedDate": "2014-12-29T20:49:24.67Z",
  "fields": {
    "System.AreaId": {
      "oldValue": 3570,
      "newValue": 4486
    },
    "System.AreaPath": {
      "oldValue": "Fabrikam-Fiber-Git",
      "newValue": "Fabrikam-Fiber-Git\\Website"
    },
    "System.NodeName": {
      "oldValue": "Fabrikam-Fiber-Git",
      "newValue": "Website"
    },
    "System.AreaLevel2": {
      "newValue": "Website"
    },
    "System.Rev": {
      "oldValue": 1,
      "newValue": 2
    },
    "System.AuthorizedDate": {
      "oldValue": "2014-12-29T20:49:21.617Z",
      "newValue": "2014-12-29T20:49:23.933Z"
    },
    "System.RevisedDate": {
      "oldValue": "2014-12-29T20:49:23.933Z",
      "newValue": "2014-12-29T20:49:24.67Z"
    },
    "System.ChangedDate": {
      "oldValue": "2014-12-29T20:49:21.617Z",
      "newValue": "2014-12-29T20:49:23.933Z"
    },
    "System.Watermark": {
      "oldValue": 609,
      "newValue": 611
    },
    "System.History": {
      "oldValue": "Jim has the most context around this.",
      "newValue": "Moving to the right area path"
    }
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/2"
    },
    "workItemUpdates": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/2"
}
```


#### Sample code

* [C# (GetWorkItemUpdate method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/UpdatesSample.cs#L68)

If the update included changes to the links or attachments, those are included, too.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitems/299/updates/4?api-version=1.0
```

#### Sample response

```json
{
  "id": 4,
  "rev": 3,
  "revisedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "name": "Jamal Hartnett <fabrikamfiber4@hotmail.com>",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
  },
  "revisedDate": "2014-12-29T20:49:25.623Z",
  "relations": {
    "added": [
      {
        "rel": "System.LinkTypes.Dependency-Forward",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/300",
        "attributes": {
          "isLocked": false,
          "comment": "Adding traceability to dependencies"
        }
      }
    ]
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItems/299/updates/4"
}
```
