---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Queries | REST API Reference for Team Foundation Server
description: Work with work item queries programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: F91A2D76-3586-4552-A9F4-AC9E5CBB46D4
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item queries and query folders

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries?$depth=1&api-version=2.2
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3c65fbc1-d427-48ce-9091-633dde9e27e2",
      "name": "My Queries",
      "path": "My Queries",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "createdDate": "2014-03-18T17:18:36.06Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2014-03-18T17:18:36.06Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "c85c2f70-178e-472a-8987-c2b5c95ee03e",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-05-26T23:45:34.75Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-05-26T23:48:08.983Z",
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
        }
      ],
      "isPublic": false,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3c65fbc1-d427-48ce-9091-633dde9e27e2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    },
    {
      "id": "eb5c1e25-9b3e-4416-a833-e500122882c7",
      "name": "Shared Queries",
      "path": "Shared Queries",
      "createdDate": "2014-01-24T19:19:12.33Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "139a3503-6ac6-4fa0-9a91-f76f180e7b65",
          "name": "Current Sprint",
          "path": "Shared Queries/Current Sprint",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "isFolder": true,
          "hasChildren": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        {
          "id": "7662ea76-d42d-43db-abb0-19e6f1d0be9b",
          "name": "Feedback",
          "path": "Shared Queries/Feedback",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
        }
      ],
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=eb5c1e25-9b3e-4416-a833-e500122882c7"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfQueries method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L187)
* [C# (GetListOfQueriesAndFoldersWithOptions method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L223)

### By folder path

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Current%20Sprint?$depth=1&api-version=2.2
```

#### Sample response

```json
{
  "id": "139a3503-6ac6-4fa0-9a91-f76f180e7b65",
  "name": "Current Sprint",
  "path": "Shared Queries/Current Sprint",
  "createdDate": "2014-01-24T19:19:12.79Z",
  "lastModifiedBy": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
  },
  "lastModifiedDate": "2014-01-24T19:19:12.79Z",
  "isFolder": true,
  "hasChildren": true,
  "children": [
    {
      "id": "6e511ae8-aafe-455a-b318-a4158bbd0f1e",
      "name": "Test Cases",
      "path": "Shared Queries/Current Sprint/Test Cases",
      "createdDate": "2014-01-24T19:19:12.79Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=6e511ae8-aafe-455a-b318-a4158bbd0f1e"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
    },
    {
      "id": "7fabe7bd-1f50-4be1-a021-6cb655eec86f",
      "name": "Blocked Tasks",
      "path": "Shared Queries/Current Sprint/Blocked Tasks",
      "createdDate": "2014-01-24T19:19:12.79Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7fabe7bd-1f50-4be1-a021-6cb655eec86f"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
    },
    {
      "id": "2469c406-13af-4e41-8315-290f9bd0efd6",
      "name": "Work in Progress",
      "path": "Shared Queries/Current Sprint/Work in Progress",
      "createdDate": "2014-01-24T19:19:12.79Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2015-05-26T23:44:31.843Z",
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2469c406-13af-4e41-8315-290f9bd0efd6"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=2469c406-13af-4e41-8315-290f9bd0efd6"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/2469c406-13af-4e41-8315-290f9bd0efd6"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2469c406-13af-4e41-8315-290f9bd0efd6"
    },
    {
      "id": "5219b150-9c7e-4d42-9fa6-07546a67aae3",
      "name": "Open Impediments",
      "path": "Shared Queries/Current Sprint/Open Impediments",
      "createdDate": "2014-01-24T19:19:12.79Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5219b150-9c7e-4d42-9fa6-07546a67aae3"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=5219b150-9c7e-4d42-9fa6-07546a67aae3"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/5219b150-9c7e-4d42-9fa6-07546a67aae3"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5219b150-9c7e-4d42-9fa6-07546a67aae3"
    },
    {
      "id": "03fe5df2-f88a-4f1d-a29e-05c5588920d2",
      "name": "Unfinished Work",
      "path": "Shared Queries/Current Sprint/Unfinished Work",
      "createdDate": "2014-01-24T19:19:12.79Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2014-03-18T17:28:44.177Z",
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=03fe5df2-f88a-4f1d-a29e-05c5588920d2"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
    }
  ],
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=139a3503-6ac6-4fa0-9a91-f76f180e7b65"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
}
```


### Just the root query folders
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries?api-version=2.2
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3c65fbc1-d427-48ce-9091-633dde9e27e2",
      "name": "My Queries",
      "path": "My Queries",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "createdDate": "2014-03-18T17:18:36.06Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2014-03-18T17:18:36.06Z",
      "isFolder": true,
      "hasChildren": true,
      "isPublic": false,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3c65fbc1-d427-48ce-9091-633dde9e27e2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    },
    {
      "id": "eb5c1e25-9b3e-4416-a833-e500122882c7",
      "name": "Shared Queries",
      "path": "Shared Queries",
      "createdDate": "2014-01-24T19:19:12.33Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isFolder": true,
      "hasChildren": true,
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=eb5c1e25-9b3e-4416-a833-e500122882c7"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  ]
}
```


### With the query string and columns and sort options
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries?$depth=1&$expand=all&api-version=2.2
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3c65fbc1-d427-48ce-9091-633dde9e27e2",
      "name": "My Queries",
      "path": "My Queries",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "createdDate": "2014-03-18T17:18:36.06Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2014-03-18T17:18:36.06Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "c85c2f70-178e-472a-8987-c2b5c95ee03e",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-05-26T23:45:34.75Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-05-26T23:48:08.983Z",
          "queryType": "flat",
          "columns": [
            {
              "referenceName": "System.Id",
              "name": "ID",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
            },
            {
              "referenceName": "System.WorkItemType",
              "name": "Work Item Type",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
            },
            {
              "referenceName": "System.Title",
              "name": "Title",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
            },
            {
              "referenceName": "System.AssignedTo",
              "name": "Assigned To",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
            },
            {
              "referenceName": "System.State",
              "name": "State",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
            },
            {
              "referenceName": "System.Tags",
              "name": "Tags",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
            },
            {
              "referenceName": "System.IterationPath",
              "name": "Iteration Path",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.IterationPath"
            },
            {
              "referenceName": "Microsoft.VSTS.Common.Priority",
              "name": "Priority",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
            }
          ],
          "wiql": "select [System.Id], [System.WorkItemType], [System.Title], [System.AssignedTo], [System.State], [System.Tags], [System.IterationPath], [Microsoft.VSTS.Common.Priority] from WorkItems where [System.TeamProject] = @project and [System.WorkItemType] = 'Product Backlog Item' and [System.State] <> 'Removed'",
          "isPublic": false,
          "clauses": {
            "logicalOperator": "and",
            "clauses": [
              {
                "field": {
                  "referenceName": "System.TeamProject",
                  "name": "Team Project",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
                },
                "operator": {
                  "referenceName": "SupportedOperations.Equals",
                  "name": "="
                },
                "value": "@project"
              },
              {
                "field": {
                  "referenceName": "System.WorkItemType",
                  "name": "Work Item Type",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
                },
                "operator": {
                  "referenceName": "SupportedOperations.Equals",
                  "name": "="
                },
                "value": "Product Backlog Item"
              },
              {
                "field": {
                  "referenceName": "System.State",
                  "name": "State",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
                },
                "operator": {
                  "referenceName": "SupportedOperations.NotEquals",
                  "name": "<>"
                },
                "value": "Removed"
              }
            ]
          },
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
        }
      ],
      "isPublic": false,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3c65fbc1-d427-48ce-9091-633dde9e27e2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    },
    {
      "id": "eb5c1e25-9b3e-4416-a833-e500122882c7",
      "name": "Shared Queries",
      "path": "Shared Queries",
      "createdDate": "2014-01-24T19:19:12.33Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "139a3503-6ac6-4fa0-9a91-f76f180e7b65",
          "name": "Current Sprint",
          "path": "Shared Queries/Current Sprint",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "isFolder": true,
          "hasChildren": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        {
          "id": "7662ea76-d42d-43db-abb0-19e6f1d0be9b",
          "name": "Feedback",
          "path": "Shared Queries/Feedback",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "queryType": "flat",
          "columns": [
            {
              "referenceName": "System.Id",
              "name": "ID",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
            },
            {
              "referenceName": "System.Title",
              "name": "Title",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
            },
            {
              "referenceName": "System.State",
              "name": "State",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
            },
            {
              "referenceName": "System.CreatedBy",
              "name": "Created By",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedBy"
            },
            {
              "referenceName": "Microsoft.VSTS.Common.Rating",
              "name": "Rating",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Rating"
            }
          ],
          "sortColumns": [
            {
              "field": {
                "referenceName": "System.Id",
                "name": "ID",
                "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
              },
              "descending": false
            }
          ],
          "wiql": "select [System.Id], [System.Title], [System.State], [System.CreatedBy], [Microsoft.VSTS.Common.Rating] from WorkItems where [System.TeamProject] = @project and [System.WorkItemType] in group 'Microsoft.FeedbackResponseCategory' and [System.State] = 'Active' order by [System.Id]",
          "isPublic": true,
          "clauses": {
            "logicalOperator": "and",
            "clauses": [
              {
                "field": {
                  "referenceName": "System.TeamProject",
                  "name": "Team Project",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
                },
                "operator": {
                  "referenceName": "SupportedOperations.Equals",
                  "name": "="
                },
                "value": "@project"
              },
              {
                "field": {
                  "referenceName": "System.WorkItemType",
                  "name": "Work Item Type",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
                },
                "operator": {
                  "referenceName": "SupportedOperations.InGroup",
                  "name": "In Group"
                },
                "value": "Microsoft.FeedbackResponseCategory"
              },
              {
                "field": {
                  "referenceName": "System.State",
                  "name": "State",
                  "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
                },
                "operator": {
                  "referenceName": "SupportedOperations.Equals",
                  "name": "="
                },
                "value": "Active"
              }
            ]
          },
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
        }
      ],
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=eb5c1e25-9b3e-4416-a833-e500122882c7"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  ]
}
```


### Including deleted queries
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries?$depth=2&$includeDeleted=true&api-version=2.2
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": "3c65fbc1-d427-48ce-9091-633dde9e27e2",
      "name": "My Queries",
      "path": "My Queries",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "createdDate": "2014-03-18T17:18:36.06Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2014-03-18T17:18:36.06Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "4da0b91e-a751-44ed-85e8-f57cd8564957",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:14:39.513Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T00:14:46.893Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "314ddfda-34bc-41c9-9acf-71ebfc8b8d9a",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T00:14:39.977Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:14:46.893Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/314ddfda-34bc-41c9-9acf-71ebfc8b8d9a"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=314ddfda-34bc-41c9-9acf-71ebfc8b8d9a"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4da0b91e-a751-44ed-85e8-f57cd8564957"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/314ddfda-34bc-41c9-9acf-71ebfc8b8d9a"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/314ddfda-34bc-41c9-9acf-71ebfc8b8d9a"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4da0b91e-a751-44ed-85e8-f57cd8564957"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=4da0b91e-a751-44ed-85e8-f57cd8564957"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4da0b91e-a751-44ed-85e8-f57cd8564957"
        },
        {
          "id": "e47e5930-e93d-4cc0-b049-f2dfb645fd07",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T00:55:03.293Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T00:55:13.01Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "d6eda571-e862-425a-baf0-506730513ce3",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T00:55:03.65Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T00:55:13.01Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6eda571-e862-425a-baf0-506730513ce3"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=d6eda571-e862-425a-baf0-506730513ce3"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e47e5930-e93d-4cc0-b049-f2dfb645fd07"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/d6eda571-e862-425a-baf0-506730513ce3"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6eda571-e862-425a-baf0-506730513ce3"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e47e5930-e93d-4cc0-b049-f2dfb645fd07"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=e47e5930-e93d-4cc0-b049-f2dfb645fd07"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e47e5930-e93d-4cc0-b049-f2dfb645fd07"
        },
        {
          "id": "49a97016-3d6a-4c86-9858-efefacf6fbe9",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T18:23:39.793Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T18:23:52.583Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/49a97016-3d6a-4c86-9858-efefacf6fbe9"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=49a97016-3d6a-4c86-9858-efefacf6fbe9"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/49a97016-3d6a-4c86-9858-efefacf6fbe9"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/49a97016-3d6a-4c86-9858-efefacf6fbe9"
        },
        {
          "id": "4bac6574-3852-4c7b-a273-ef9409c7b384",
          "name": "Onehop",
          "path": "My Queries/Onehop",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:39:24.37Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:44:24.01Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4bac6574-3852-4c7b-a273-ef9409c7b384"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=4bac6574-3852-4c7b-a273-ef9409c7b384"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/4bac6574-3852-4c7b-a273-ef9409c7b384"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4bac6574-3852-4c7b-a273-ef9409c7b384"
        },
        {
          "id": "46a4cb0b-5dd8-423d-89bd-ef8c4dd34037",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-31T03:18:43.683Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-31T03:18:51.413Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "ec9f83e8-2732-4745-ad28-aaf0f300d1bf",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-31T03:18:44.07Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-31T03:18:51.413Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ec9f83e8-2732-4745-ad28-aaf0f300d1bf"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=ec9f83e8-2732-4745-ad28-aaf0f300d1bf"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/46a4cb0b-5dd8-423d-89bd-ef8c4dd34037"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/ec9f83e8-2732-4745-ad28-aaf0f300d1bf"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ec9f83e8-2732-4745-ad28-aaf0f300d1bf"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/46a4cb0b-5dd8-423d-89bd-ef8c4dd34037"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=46a4cb0b-5dd8-423d-89bd-ef8c4dd34037"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/46a4cb0b-5dd8-423d-89bd-ef8c4dd34037"
        },
        {
          "id": "7b72512b-4c07-4d08-b61a-e71d99e79e51",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-12-29T19:29:34.79Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-12-29T19:29:47.897Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7b72512b-4c07-4d08-b61a-e71d99e79e51"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7b72512b-4c07-4d08-b61a-e71d99e79e51"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7b72512b-4c07-4d08-b61a-e71d99e79e51"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7b72512b-4c07-4d08-b61a-e71d99e79e51"
        },
        {
          "id": "72e37d90-04b3-437c-8a3a-e6d56d1c66ff",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:23:43.303Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:16:25.28Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/72e37d90-04b3-437c-8a3a-e6d56d1c66ff"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=72e37d90-04b3-437c-8a3a-e6d56d1c66ff"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/72e37d90-04b3-437c-8a3a-e6d56d1c66ff"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/72e37d90-04b3-437c-8a3a-e6d56d1c66ff"
        },
        {
          "id": "df241e29-d7c1-4b23-aebb-e3b1e7fe7258",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T00:51:48.717Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T00:51:56.093Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "a0b69d8b-eba0-4865-b16b-9e06132499da",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T00:51:49.067Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T00:51:56.093Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a0b69d8b-eba0-4865-b16b-9e06132499da"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a0b69d8b-eba0-4865-b16b-9e06132499da"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df241e29-d7c1-4b23-aebb-e3b1e7fe7258"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/a0b69d8b-eba0-4865-b16b-9e06132499da"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a0b69d8b-eba0-4865-b16b-9e06132499da"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df241e29-d7c1-4b23-aebb-e3b1e7fe7258"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=df241e29-d7c1-4b23-aebb-e3b1e7fe7258"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df241e29-d7c1-4b23-aebb-e3b1e7fe7258"
        },
        {
          "id": "eaa77225-f81f-46b6-8b37-e38424606fc0",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:34:36.77Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:35:49.407Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eaa77225-f81f-46b6-8b37-e38424606fc0"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=eaa77225-f81f-46b6-8b37-e38424606fc0"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/eaa77225-f81f-46b6-8b37-e38424606fc0"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eaa77225-f81f-46b6-8b37-e38424606fc0"
        },
        {
          "id": "93ca504e-a23c-4287-91b6-dfbd75b928c7",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T00:50:55.387Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T00:51:02.99Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "8d3eb18f-f7f9-4456-87b7-e36b013f8c82",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T00:50:55.75Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T00:51:02.99Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8d3eb18f-f7f9-4456-87b7-e36b013f8c82"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8d3eb18f-f7f9-4456-87b7-e36b013f8c82"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/93ca504e-a23c-4287-91b6-dfbd75b928c7"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/8d3eb18f-f7f9-4456-87b7-e36b013f8c82"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8d3eb18f-f7f9-4456-87b7-e36b013f8c82"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/93ca504e-a23c-4287-91b6-dfbd75b928c7"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=93ca504e-a23c-4287-91b6-dfbd75b928c7"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/93ca504e-a23c-4287-91b6-dfbd75b928c7"
        },
        {
          "id": "8c805af7-f3c1-4d59-bb92-df8d6359d1ef",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-03-20T22:45:43.757Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-03-20T23:59:39.093Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8c805af7-f3c1-4d59-bb92-df8d6359d1ef"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8c805af7-f3c1-4d59-bb92-df8d6359d1ef"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/8c805af7-f3c1-4d59-bb92-df8d6359d1ef"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8c805af7-f3c1-4d59-bb92-df8d6359d1ef"
        },
        {
          "id": "59963d0a-b108-445e-aa01-df670147e443",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-07-08T18:06:39.89Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-07-08T18:06:44.453Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "cc229a52-76ce-4030-b627-1fcdf8895e22",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-07-08T18:06:40.327Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-07-08T18:06:44.123Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cc229a52-76ce-4030-b627-1fcdf8895e22"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=cc229a52-76ce-4030-b627-1fcdf8895e22"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/59963d0a-b108-445e-aa01-df670147e443"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/cc229a52-76ce-4030-b627-1fcdf8895e22"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cc229a52-76ce-4030-b627-1fcdf8895e22"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/59963d0a-b108-445e-aa01-df670147e443"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=59963d0a-b108-445e-aa01-df670147e443"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/59963d0a-b108-445e-aa01-df670147e443"
        },
        {
          "id": "15efe5f7-4a02-4cb3-83a5-d9e4c4d9058b",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-12-29T20:47:16.9Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-12-29T20:47:30.927Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/15efe5f7-4a02-4cb3-83a5-d9e4c4d9058b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=15efe5f7-4a02-4cb3-83a5-d9e4c4d9058b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/15efe5f7-4a02-4cb3-83a5-d9e4c4d9058b"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/15efe5f7-4a02-4cb3-83a5-d9e4c4d9058b"
        },
        {
          "id": "acce688c-8aeb-47e1-b6fd-d43174e92181",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:23:28.647Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:44:20.887Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/acce688c-8aeb-47e1-b6fd-d43174e92181"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=acce688c-8aeb-47e1-b6fd-d43174e92181"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/acce688c-8aeb-47e1-b6fd-d43174e92181"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/acce688c-8aeb-47e1-b6fd-d43174e92181"
        },
        {
          "id": "950259eb-4708-4685-95ec-cffda0b1f0b2",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T01:09:39.3Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T01:09:47.45Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "ce8da3e2-40c0-435c-8aea-eece82f27779",
              "name": "Hierarchical Query",
              "path": "My Queries/Website/Hierarchical Query",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T01:09:40.107Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T01:09:47.45Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ce8da3e2-40c0-435c-8aea-eece82f27779"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=ce8da3e2-40c0-435c-8aea-eece82f27779"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/950259eb-4708-4685-95ec-cffda0b1f0b2"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/ce8da3e2-40c0-435c-8aea-eece82f27779"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ce8da3e2-40c0-435c-8aea-eece82f27779"
            },
            {
              "id": "47b8cd19-6d59-4f12-8a75-12060d743dc4",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T01:09:39.72Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T01:09:47.45Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/47b8cd19-6d59-4f12-8a75-12060d743dc4"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=47b8cd19-6d59-4f12-8a75-12060d743dc4"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/950259eb-4708-4685-95ec-cffda0b1f0b2"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/47b8cd19-6d59-4f12-8a75-12060d743dc4"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/47b8cd19-6d59-4f12-8a75-12060d743dc4"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/950259eb-4708-4685-95ec-cffda0b1f0b2"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=950259eb-4708-4685-95ec-cffda0b1f0b2"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/950259eb-4708-4685-95ec-cffda0b1f0b2"
        },
        {
          "id": "c85c2f70-178e-472a-8987-c2b5c95ee03e",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-05-26T23:45:34.75Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-05-26T23:48:08.983Z",
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c85c2f70-178e-472a-8987-c2b5c95ee03e"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c85c2f70-178e-472a-8987-c2b5c95ee03e"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c85c2f70-178e-472a-8987-c2b5c95ee03e"
        },
        {
          "id": "1e4e5b17-f212-4ba2-9c2f-a95600ef50a5",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-12-29T20:49:22.583Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-12-29T20:49:38.28Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1e4e5b17-f212-4ba2-9c2f-a95600ef50a5"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=1e4e5b17-f212-4ba2-9c2f-a95600ef50a5"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/1e4e5b17-f212-4ba2-9c2f-a95600ef50a5"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1e4e5b17-f212-4ba2-9c2f-a95600ef50a5"
        },
        {
          "id": "c9298b6d-ba9f-44ce-99e9-a7907895fcd8",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T00:56:56.287Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T00:57:08.23Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c9298b6d-ba9f-44ce-99e9-a7907895fcd8"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c9298b6d-ba9f-44ce-99e9-a7907895fcd8"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c9298b6d-ba9f-44ce-99e9-a7907895fcd8"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c9298b6d-ba9f-44ce-99e9-a7907895fcd8"
        },
        {
          "id": "1db695fe-321f-46d3-b5f7-a201dae15856",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-31T20:55:12.11Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-31T20:55:23.86Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "163f9faa-2e00-49f9-b9b3-c94e87771884",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-31T20:55:13.04Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-31T20:55:23.86Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/163f9faa-2e00-49f9-b9b3-c94e87771884"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=163f9faa-2e00-49f9-b9b3-c94e87771884"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1db695fe-321f-46d3-b5f7-a201dae15856"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/163f9faa-2e00-49f9-b9b3-c94e87771884"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/163f9faa-2e00-49f9-b9b3-c94e87771884"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1db695fe-321f-46d3-b5f7-a201dae15856"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=1db695fe-321f-46d3-b5f7-a201dae15856"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1db695fe-321f-46d3-b5f7-a201dae15856"
        },
        {
          "id": "8fa88050-b185-45cb-b764-9d08c718a72e",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:05:57.107Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:06:04.343Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "bea6df2c-219f-4f47-bad0-0d21f32da392",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-08-29T17:05:57.64Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-08-29T17:06:04.343Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/bea6df2c-219f-4f47-bad0-0d21f32da392"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=bea6df2c-219f-4f47-bad0-0d21f32da392"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8fa88050-b185-45cb-b764-9d08c718a72e"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/bea6df2c-219f-4f47-bad0-0d21f32da392"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/bea6df2c-219f-4f47-bad0-0d21f32da392"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8fa88050-b185-45cb-b764-9d08c718a72e"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8fa88050-b185-45cb-b764-9d08c718a72e"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8fa88050-b185-45cb-b764-9d08c718a72e"
        },
        {
          "id": "c4d40ade-cbe1-4a3e-bb7f-9baf30163f17",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2016-06-01T16:50:44.357Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2016-06-01T16:50:59.593Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "ae3574ec-e088-4caa-8754-7c55199c2d23",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2016-06-01T16:50:44.78Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2016-06-01T16:50:59.593Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ae3574ec-e088-4caa-8754-7c55199c2d23"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=ae3574ec-e088-4caa-8754-7c55199c2d23"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c4d40ade-cbe1-4a3e-bb7f-9baf30163f17"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/ae3574ec-e088-4caa-8754-7c55199c2d23"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ae3574ec-e088-4caa-8754-7c55199c2d23"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c4d40ade-cbe1-4a3e-bb7f-9baf30163f17"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c4d40ade-cbe1-4a3e-bb7f-9baf30163f17"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c4d40ade-cbe1-4a3e-bb7f-9baf30163f17"
        },
        {
          "id": "8b3e86a5-a133-45a7-8f08-977c81bd4f7c",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T00:53:15.793Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T00:53:21.847Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "3b61d4df-44b6-4596-835d-8109730a626f",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-04T00:53:16.217Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-04T00:53:21.847Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3b61d4df-44b6-4596-835d-8109730a626f"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3b61d4df-44b6-4596-835d-8109730a626f"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8b3e86a5-a133-45a7-8f08-977c81bd4f7c"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/3b61d4df-44b6-4596-835d-8109730a626f"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3b61d4df-44b6-4596-835d-8109730a626f"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8b3e86a5-a133-45a7-8f08-977c81bd4f7c"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8b3e86a5-a133-45a7-8f08-977c81bd4f7c"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8b3e86a5-a133-45a7-8f08-977c81bd4f7c"
        },
        {
          "id": "af7a03f7-17ec-46ba-9017-974093cc024b",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2016-01-26T17:29:24.22Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2016-01-26T17:29:33.22Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "127d7479-6dc4-42ae-bf62-d20e032b7d0b",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2016-01-26T17:29:24.78Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2016-01-26T17:29:33.22Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/127d7479-6dc4-42ae-bf62-d20e032b7d0b"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=127d7479-6dc4-42ae-bf62-d20e032b7d0b"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af7a03f7-17ec-46ba-9017-974093cc024b"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/127d7479-6dc4-42ae-bf62-d20e032b7d0b"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/127d7479-6dc4-42ae-bf62-d20e032b7d0b"
            },
            {
              "id": "55836b9f-fca8-4a39-a9eb-84f2a98b7135",
              "name": "Active stories with tasks",
              "path": "My Queries/Website/Active stories with tasks",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2016-01-26T17:29:25.49Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2016-01-26T17:29:33.22Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/55836b9f-fca8-4a39-a9eb-84f2a98b7135"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=55836b9f-fca8-4a39-a9eb-84f2a98b7135"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af7a03f7-17ec-46ba-9017-974093cc024b"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/55836b9f-fca8-4a39-a9eb-84f2a98b7135"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/55836b9f-fca8-4a39-a9eb-84f2a98b7135"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af7a03f7-17ec-46ba-9017-974093cc024b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=af7a03f7-17ec-46ba-9017-974093cc024b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af7a03f7-17ec-46ba-9017-974093cc024b"
        },
        {
          "id": "e2250d1d-3e35-47db-a1de-945491626caa",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T00:41:20.35Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T00:41:26.637Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "f4fef4c1-23d7-48ca-b22d-260149e23cb2",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T00:41:20.803Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T00:41:26.637Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f4fef4c1-23d7-48ca-b22d-260149e23cb2"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=f4fef4c1-23d7-48ca-b22d-260149e23cb2"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e2250d1d-3e35-47db-a1de-945491626caa"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/f4fef4c1-23d7-48ca-b22d-260149e23cb2"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f4fef4c1-23d7-48ca-b22d-260149e23cb2"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e2250d1d-3e35-47db-a1de-945491626caa"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=e2250d1d-3e35-47db-a1de-945491626caa"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e2250d1d-3e35-47db-a1de-945491626caa"
        },
        {
          "id": "230c4643-9e22-4123-b66f-84087ef43b99",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-07T00:56:04.867Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-07T00:56:17.57Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/230c4643-9e22-4123-b66f-84087ef43b99"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=230c4643-9e22-4123-b66f-84087ef43b99"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/230c4643-9e22-4123-b66f-84087ef43b99"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/230c4643-9e22-4123-b66f-84087ef43b99"
        },
        {
          "id": "7b691b2f-e75f-43e7-82e5-821c5f72af98",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:31:00.777Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:31:07.573Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "a4a80fa0-0b5c-445f-9fbb-9bb59bcd0779",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:31:02.127Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:31:07.573Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a4a80fa0-0b5c-445f-9fbb-9bb59bcd0779"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a4a80fa0-0b5c-445f-9fbb-9bb59bcd0779"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7b691b2f-e75f-43e7-82e5-821c5f72af98"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/a4a80fa0-0b5c-445f-9fbb-9bb59bcd0779"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a4a80fa0-0b5c-445f-9fbb-9bb59bcd0779"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7b691b2f-e75f-43e7-82e5-821c5f72af98"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7b691b2f-e75f-43e7-82e5-821c5f72af98"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7b691b2f-e75f-43e7-82e5-821c5f72af98"
        },
        {
          "id": "0864108d-4d78-451c-b9d0-7c4240ac7109",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:07:01.703Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:07:20.363Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0864108d-4d78-451c-b9d0-7c4240ac7109"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=0864108d-4d78-451c-b9d0-7c4240ac7109"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/0864108d-4d78-451c-b9d0-7c4240ac7109"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0864108d-4d78-451c-b9d0-7c4240ac7109"
        },
        {
          "id": "af30c48c-b5de-4cc8-823b-74715ffdafd2",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:05:46.04Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:05:51.917Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "d6413bea-7802-4492-af06-b4fdf94181d8",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:05:46.413Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:05:51.917Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6413bea-7802-4492-af06-b4fdf94181d8"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=d6413bea-7802-4492-af06-b4fdf94181d8"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af30c48c-b5de-4cc8-823b-74715ffdafd2"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/d6413bea-7802-4492-af06-b4fdf94181d8"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6413bea-7802-4492-af06-b4fdf94181d8"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af30c48c-b5de-4cc8-823b-74715ffdafd2"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=af30c48c-b5de-4cc8-823b-74715ffdafd2"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/af30c48c-b5de-4cc8-823b-74715ffdafd2"
        },
        {
          "id": "e339288b-e832-4ad0-9816-64bb555e8068",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-03-06T21:18:13.757Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-03-06T21:18:33.193Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e339288b-e832-4ad0-9816-64bb555e8068"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=e339288b-e832-4ad0-9816-64bb555e8068"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/e339288b-e832-4ad0-9816-64bb555e8068"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e339288b-e832-4ad0-9816-64bb555e8068"
        },
        {
          "id": "fb73d45f-d854-4012-9521-62e09ed31211",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T22:50:52.983Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T22:51:06.087Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "cc010893-0d82-4d49-b98a-2553aeb1bd95",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-04T22:50:53.853Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-04T22:51:06.087Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cc010893-0d82-4d49-b98a-2553aeb1bd95"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=cc010893-0d82-4d49-b98a-2553aeb1bd95"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb73d45f-d854-4012-9521-62e09ed31211"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/cc010893-0d82-4d49-b98a-2553aeb1bd95"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cc010893-0d82-4d49-b98a-2553aeb1bd95"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb73d45f-d854-4012-9521-62e09ed31211"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=fb73d45f-d854-4012-9521-62e09ed31211"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb73d45f-d854-4012-9521-62e09ed31211"
        },
        {
          "id": "deb94c27-67bd-4607-9c11-6297bcbb9576",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-03-06T21:19:02.043Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-03-06T21:19:17.77Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/deb94c27-67bd-4607-9c11-6297bcbb9576"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=deb94c27-67bd-4607-9c11-6297bcbb9576"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/deb94c27-67bd-4607-9c11-6297bcbb9576"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/deb94c27-67bd-4607-9c11-6297bcbb9576"
        },
        {
          "id": "2f0b8b70-8737-4c22-a9ac-605683b86993",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-03-06T21:29:48.177Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-03-06T21:30:02.623Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2f0b8b70-8737-4c22-a9ac-605683b86993"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=2f0b8b70-8737-4c22-a9ac-605683b86993"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/2f0b8b70-8737-4c22-a9ac-605683b86993"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2f0b8b70-8737-4c22-a9ac-605683b86993"
        },
        {
          "id": "0ea88f4d-5585-41a1-be58-5f1c6b9c2853",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:32:47.91Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-12-29T19:29:27.95Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0ea88f4d-5585-41a1-be58-5f1c6b9c2853"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=0ea88f4d-5585-41a1-be58-5f1c6b9c2853"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/0ea88f4d-5585-41a1-be58-5f1c6b9c2853"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0ea88f4d-5585-41a1-be58-5f1c6b9c2853"
        },
        {
          "id": "edc2c037-9337-43c5-97a7-5cb19ae6407c",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-03-06T21:26:44.817Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-03-06T21:26:53.173Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/edc2c037-9337-43c5-97a7-5cb19ae6407c"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=edc2c037-9337-43c5-97a7-5cb19ae6407c"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/edc2c037-9337-43c5-97a7-5cb19ae6407c"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/edc2c037-9337-43c5-97a7-5cb19ae6407c"
        },
        {
          "id": "76afbb50-6005-4e9d-b1f7-599b1d0673c4",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T18:28:06.743Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T18:28:33.36Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/76afbb50-6005-4e9d-b1f7-599b1d0673c4"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=76afbb50-6005-4e9d-b1f7-599b1d0673c4"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/76afbb50-6005-4e9d-b1f7-599b1d0673c4"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/76afbb50-6005-4e9d-b1f7-599b1d0673c4"
        },
        {
          "id": "1efeed4d-282f-423f-aad4-595524560af8",
          "name": "Tree",
          "path": "My Queries/Tree",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:39:38.583Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:44:59.31Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1efeed4d-282f-423f-aad4-595524560af8"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=1efeed4d-282f-423f-aad4-595524560af8"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/1efeed4d-282f-423f-aad4-595524560af8"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/1efeed4d-282f-423f-aad4-595524560af8"
        },
        {
          "id": "ba12ad2b-40c4-4a41-ac04-590c4ff16e7b",
          "name": "Website team",
          "path": "My Queries/Website team",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-05-19T23:00:04.437Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-05-19T23:00:15.437Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "85915dc8-9508-4e5b-80de-37131206a574",
              "name": "Active Bugs",
              "path": "My Queries/Website team/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-05-19T23:00:08.793Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-05-19T23:00:13.627Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/85915dc8-9508-4e5b-80de-37131206a574"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=85915dc8-9508-4e5b-80de-37131206a574"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ba12ad2b-40c4-4a41-ac04-590c4ff16e7b"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/85915dc8-9508-4e5b-80de-37131206a574"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/85915dc8-9508-4e5b-80de-37131206a574"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ba12ad2b-40c4-4a41-ac04-590c4ff16e7b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=ba12ad2b-40c4-4a41-ac04-590c4ff16e7b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/ba12ad2b-40c4-4a41-ac04-590c4ff16e7b"
        },
        {
          "id": "3595591b-8e54-4970-a0c2-52cb58d86ce1",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-01-07T18:10:18.09Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-01-07T18:10:32.603Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3595591b-8e54-4970-a0c2-52cb58d86ce1"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3595591b-8e54-4970-a0c2-52cb58d86ce1"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/3595591b-8e54-4970-a0c2-52cb58d86ce1"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3595591b-8e54-4970-a0c2-52cb58d86ce1"
        },
        {
          "id": "addcb8b3-12d0-4f2c-b6ca-52bb584ae286",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:38:47.947Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:38:54.673Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "f0ade206-32f8-4360-9254-ad33f906cd2e",
              "name": "Active stories with tasks",
              "path": "My Queries/Website/Active stories with tasks",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:38:48.653Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:38:54.673Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f0ade206-32f8-4360-9254-ad33f906cd2e"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=f0ade206-32f8-4360-9254-ad33f906cd2e"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/f0ade206-32f8-4360-9254-ad33f906cd2e"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f0ade206-32f8-4360-9254-ad33f906cd2e"
            },
            {
              "id": "df60fdf6-3b5f-4928-aae8-29ee63df6e31",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:38:48.297Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:38:54.673Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=df60fdf6-3b5f-4928-aae8-29ee63df6e31"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
        },
        {
          "id": "7a1dd116-ae9a-4494-8389-49170f697681",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-03-06T21:34:18.587Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-03-06T21:34:34.88Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7a1dd116-ae9a-4494-8389-49170f697681"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7a1dd116-ae9a-4494-8389-49170f697681"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7a1dd116-ae9a-4494-8389-49170f697681"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7a1dd116-ae9a-4494-8389-49170f697681"
        },
        {
          "id": "439c3873-64ac-4e28-852b-491522436370",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-31T03:13:59.79Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-31T03:14:08.547Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "a519a725-4098-489a-b307-27b5d58c5423",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-31T03:14:01.323Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-31T03:14:08.547Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a519a725-4098-489a-b307-27b5d58c5423"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a519a725-4098-489a-b307-27b5d58c5423"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/439c3873-64ac-4e28-852b-491522436370"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/a519a725-4098-489a-b307-27b5d58c5423"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a519a725-4098-489a-b307-27b5d58c5423"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/439c3873-64ac-4e28-852b-491522436370"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=439c3873-64ac-4e28-852b-491522436370"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/439c3873-64ac-4e28-852b-491522436370"
        },
        {
          "id": "e424a08b-cc6b-422b-a16f-44a9747916f6",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-01-07T18:12:12.61Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-01-07T18:12:25.553Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e424a08b-cc6b-422b-a16f-44a9747916f6"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=e424a08b-cc6b-422b-a16f-44a9747916f6"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/e424a08b-cc6b-422b-a16f-44a9747916f6"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e424a08b-cc6b-422b-a16f-44a9747916f6"
        },
        {
          "id": "813ec271-5e98-469e-8082-436ec2ac0c87",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:32:13.203Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:32:22.617Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "cf0a939b-ee9d-4d16-9392-d73dacb6289e",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:32:13.557Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:32:22.617Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cf0a939b-ee9d-4d16-9392-d73dacb6289e"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=cf0a939b-ee9d-4d16-9392-d73dacb6289e"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/813ec271-5e98-469e-8082-436ec2ac0c87"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/cf0a939b-ee9d-4d16-9392-d73dacb6289e"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/cf0a939b-ee9d-4d16-9392-d73dacb6289e"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/813ec271-5e98-469e-8082-436ec2ac0c87"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=813ec271-5e98-469e-8082-436ec2ac0c87"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/813ec271-5e98-469e-8082-436ec2ac0c87"
        },
        {
          "id": "3015f8ed-d2d9-444f-aad2-3f981e5216e9",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-08-29T17:08:14.327Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-08-29T17:08:37.437Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3015f8ed-d2d9-444f-aad2-3f981e5216e9"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3015f8ed-d2d9-444f-aad2-3f981e5216e9"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/3015f8ed-d2d9-444f-aad2-3f981e5216e9"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3015f8ed-d2d9-444f-aad2-3f981e5216e9"
        },
        {
          "id": "e0b24d70-c86d-4692-b712-3cca4ec27e5c",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-04T00:56:12.447Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-04T00:56:25.62Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e0b24d70-c86d-4692-b712-3cca4ec27e5c"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=e0b24d70-c86d-4692-b712-3cca4ec27e5c"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/e0b24d70-c86d-4692-b712-3cca4ec27e5c"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/e0b24d70-c86d-4692-b712-3cca4ec27e5c"
        },
        {
          "id": "c146922d-c8c6-49b6-a674-3a0eaf5c80c8",
          "name": "OneHop",
          "path": "My Queries/OneHop",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-03-20T23:59:35.06Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-06-03T20:40:36.71Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c146922d-c8c6-49b6-a674-3a0eaf5c80c8"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c146922d-c8c6-49b6-a674-3a0eaf5c80c8"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c146922d-c8c6-49b6-a674-3a0eaf5c80c8"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c146922d-c8c6-49b6-a674-3a0eaf5c80c8"
        },
        {
          "id": "457583b8-ac58-4115-9969-2a148636a45f",
          "name": "ALL",
          "path": "My Queries/ALL",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-03-24T23:08:31.85Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-06-03T20:40:32.877Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/457583b8-ac58-4115-9969-2a148636a45f"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=457583b8-ac58-4115-9969-2a148636a45f"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/457583b8-ac58-4115-9969-2a148636a45f"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/457583b8-ac58-4115-9969-2a148636a45f"
        },
        {
          "id": "7132d977-302c-4239-a120-2509e0dc3320",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:36:12.377Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:36:19.24Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "f3e165d9-13ba-476e-98ac-d4b4af902803",
              "name": "Active stories with tasks",
              "path": "My Queries/Website/Active stories with tasks",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:36:13.177Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:36:19.24Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f3e165d9-13ba-476e-98ac-d4b4af902803"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=f3e165d9-13ba-476e-98ac-d4b4af902803"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7132d977-302c-4239-a120-2509e0dc3320"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/f3e165d9-13ba-476e-98ac-d4b4af902803"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f3e165d9-13ba-476e-98ac-d4b4af902803"
            },
            {
              "id": "b78ee1c2-3191-4d2d-a09c-7fc8c950aa3f",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:36:12.72Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:36:19.24Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/b78ee1c2-3191-4d2d-a09c-7fc8c950aa3f"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=b78ee1c2-3191-4d2d-a09c-7fc8c950aa3f"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7132d977-302c-4239-a120-2509e0dc3320"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/b78ee1c2-3191-4d2d-a09c-7fc8c950aa3f"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/b78ee1c2-3191-4d2d-a09c-7fc8c950aa3f"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7132d977-302c-4239-a120-2509e0dc3320"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7132d977-302c-4239-a120-2509e0dc3320"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7132d977-302c-4239-a120-2509e0dc3320"
        },
        {
          "id": "6266d29b-1614-441e-b6dd-24831b118e91",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-26T22:16:31.5Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-26T22:16:37.977Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "0c47fd0e-d85c-4acb-bf88-74f7c7826ee2",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-26T22:16:31.867Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-26T22:16:37.977Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0c47fd0e-d85c-4acb-bf88-74f7c7826ee2"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=0c47fd0e-d85c-4acb-bf88-74f7c7826ee2"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6266d29b-1614-441e-b6dd-24831b118e91"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/0c47fd0e-d85c-4acb-bf88-74f7c7826ee2"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/0c47fd0e-d85c-4acb-bf88-74f7c7826ee2"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6266d29b-1614-441e-b6dd-24831b118e91"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=6266d29b-1614-441e-b6dd-24831b118e91"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6266d29b-1614-441e-b6dd-24831b118e91"
        },
        {
          "id": "22e7b5fd-e55e-49b0-a902-1ffb3e3fc957",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-02-06T23:14:43.723Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-02-06T23:15:01.04Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/22e7b5fd-e55e-49b0-a902-1ffb3e3fc957"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=22e7b5fd-e55e-49b0-a902-1ffb3e3fc957"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/22e7b5fd-e55e-49b0-a902-1ffb3e3fc957"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/22e7b5fd-e55e-49b0-a902-1ffb3e3fc957"
        },
        {
          "id": "6a9b4c6c-da63-4041-98f0-1eb51edebf31",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-07-03T22:16:51.557Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-07-03T22:16:59.95Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "793944d2-8d47-4f3c-8c78-8e6a953c1647",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-07-03T22:16:52.65Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-07-03T22:16:59.523Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/793944d2-8d47-4f3c-8c78-8e6a953c1647"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=793944d2-8d47-4f3c-8c78-8e6a953c1647"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6a9b4c6c-da63-4041-98f0-1eb51edebf31"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/793944d2-8d47-4f3c-8c78-8e6a953c1647"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/793944d2-8d47-4f3c-8c78-8e6a953c1647"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6a9b4c6c-da63-4041-98f0-1eb51edebf31"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=6a9b4c6c-da63-4041-98f0-1eb51edebf31"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6a9b4c6c-da63-4041-98f0-1eb51edebf31"
        },
        {
          "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2016-06-01T16:58:56.323Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2016-06-01T16:58:59.407Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2016-06-01T16:58:56.64Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2016-06-01T16:58:59.71Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
            }
          ],
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
        },
        {
          "id": "fb503623-f44c-4689-bca2-1be74b0485fa",
          "name": "Tree",
          "path": "My Queries/Tree",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-03-20T23:58:39.73Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-06-03T20:40:40.177Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb503623-f44c-4689-bca2-1be74b0485fa"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=fb503623-f44c-4689-bca2-1be74b0485fa"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/fb503623-f44c-4689-bca2-1be74b0485fa"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb503623-f44c-4689-bca2-1be74b0485fa"
        },
        {
          "id": "6e7ee208-0830-425f-bb50-1b8601d43d37",
          "name": "New Query 1",
          "path": "My Queries/New Query 1",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-07-03T22:31:14.65Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-07-03T22:48:56.067Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e7ee208-0830-425f-bb50-1b8601d43d37"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=6e7ee208-0830-425f-bb50-1b8601d43d37"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/6e7ee208-0830-425f-bb50-1b8601d43d37"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e7ee208-0830-425f-bb50-1b8601d43d37"
        },
        {
          "id": "a563e69b-c05b-4454-9676-1b53f0f80624",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-30T22:04:14.533Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-30T22:04:23.59Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "05e06f3d-d509-4b56-b8ac-53fe49872f0b",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-30T22:04:15.36Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-30T22:04:23.59Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/05e06f3d-d509-4b56-b8ac-53fe49872f0b"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=05e06f3d-d509-4b56-b8ac-53fe49872f0b"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a563e69b-c05b-4454-9676-1b53f0f80624"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/05e06f3d-d509-4b56-b8ac-53fe49872f0b"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/05e06f3d-d509-4b56-b8ac-53fe49872f0b"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a563e69b-c05b-4454-9676-1b53f0f80624"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a563e69b-c05b-4454-9676-1b53f0f80624"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a563e69b-c05b-4454-9676-1b53f0f80624"
        },
        {
          "id": "f36bd889-2154-4044-9916-1971e93c0ea7",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:29:59.42Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T00:30:08.217Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "5352de4c-f08f-4add-8ea7-bed905e6a313",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T00:29:59.843Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:30:08.217Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5352de4c-f08f-4add-8ea7-bed905e6a313"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=5352de4c-f08f-4add-8ea7-bed905e6a313"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f36bd889-2154-4044-9916-1971e93c0ea7"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/5352de4c-f08f-4add-8ea7-bed905e6a313"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5352de4c-f08f-4add-8ea7-bed905e6a313"
            },
            {
              "id": "00138d42-a355-4a64-9f42-6e2082c4a69e",
              "name": "Hierarchical Query",
              "path": "My Queries/Website/Hierarchical Query",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T00:30:00.237Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:30:08.217Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/00138d42-a355-4a64-9f42-6e2082c4a69e"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=00138d42-a355-4a64-9f42-6e2082c4a69e"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f36bd889-2154-4044-9916-1971e93c0ea7"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/00138d42-a355-4a64-9f42-6e2082c4a69e"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/00138d42-a355-4a64-9f42-6e2082c4a69e"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f36bd889-2154-4044-9916-1971e93c0ea7"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=f36bd889-2154-4044-9916-1971e93c0ea7"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f36bd889-2154-4044-9916-1971e93c0ea7"
        },
        {
          "id": "c0252e69-f101-4850-9285-17c6f7354ada",
          "name": "All Work",
          "path": "My Queries/All Work",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2015-01-07T18:13:04.037Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2015-01-07T18:13:18.23Z",
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c0252e69-f101-4850-9285-17c6f7354ada"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c0252e69-f101-4850-9285-17c6f7354ada"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c0252e69-f101-4850-9285-17c6f7354ada"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c0252e69-f101-4850-9285-17c6f7354ada"
        },
        {
          "id": "2f55f0a4-0fbe-42a8-8907-0e72b12dbe4f",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:10:00.53Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T00:10:08.83Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "fb230123-988d-495d-b021-5152bd0eb4a3",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T00:10:01.573Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:10:08.83Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb230123-988d-495d-b021-5152bd0eb4a3"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=fb230123-988d-495d-b021-5152bd0eb4a3"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2f55f0a4-0fbe-42a8-8907-0e72b12dbe4f"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/fb230123-988d-495d-b021-5152bd0eb4a3"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb230123-988d-495d-b021-5152bd0eb4a3"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2f55f0a4-0fbe-42a8-8907-0e72b12dbe4f"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=2f55f0a4-0fbe-42a8-8907-0e72b12dbe4f"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2f55f0a4-0fbe-42a8-8907-0e72b12dbe4f"
        },
        {
          "id": "bd8cbee0-3e43-4928-9fdc-088321e79c9c",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T01:08:15.6Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T01:08:22.98Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "c5df567b-7780-4ac1-afa8-5a01b38935f9",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T01:08:16.007Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T01:08:22.98Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c5df567b-7780-4ac1-afa8-5a01b38935f9"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=c5df567b-7780-4ac1-afa8-5a01b38935f9"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/bd8cbee0-3e43-4928-9fdc-088321e79c9c"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/c5df567b-7780-4ac1-afa8-5a01b38935f9"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/c5df567b-7780-4ac1-afa8-5a01b38935f9"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/bd8cbee0-3e43-4928-9fdc-088321e79c9c"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=bd8cbee0-3e43-4928-9fdc-088321e79c9c"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/bd8cbee0-3e43-4928-9fdc-088321e79c9c"
        },
        {
          "id": "356c7c68-1061-458c-8617-046812be14e8",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-10-28T00:53:00.45Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-10-28T00:53:07.417Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "71f39623-7205-4123-99a3-2cc969154401",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-10-28T00:53:00.803Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-10-28T00:53:07.417Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/71f39623-7205-4123-99a3-2cc969154401"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=71f39623-7205-4123-99a3-2cc969154401"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/356c7c68-1061-458c-8617-046812be14e8"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/71f39623-7205-4123-99a3-2cc969154401"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/71f39623-7205-4123-99a3-2cc969154401"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/356c7c68-1061-458c-8617-046812be14e8"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=356c7c68-1061-458c-8617-046812be14e8"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/356c7c68-1061-458c-8617-046812be14e8"
        },
        {
          "id": "15d7497e-a4ad-4194-a442-032d6eb0f04e",
          "name": "Website",
          "path": "My Queries/Website",
          "createdBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "createdDate": "2014-11-11T00:11:40.94Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T00:11:48.237Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "4e64fd81-42f8-44ae-8860-f04cd3858107",
              "name": "Active Bugs",
              "path": "My Queries/Website/Active Bugs",
              "createdBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "createdDate": "2014-11-11T00:11:41.347Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:11:48.237Z",
              "isDeleted": true,
              "isPublic": false,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4e64fd81-42f8-44ae-8860-f04cd3858107"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=4e64fd81-42f8-44ae-8860-f04cd3858107"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/15d7497e-a4ad-4194-a442-032d6eb0f04e"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/4e64fd81-42f8-44ae-8860-f04cd3858107"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/4e64fd81-42f8-44ae-8860-f04cd3858107"
            }
          ],
          "isDeleted": true,
          "isPublic": false,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/15d7497e-a4ad-4194-a442-032d6eb0f04e"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=15d7497e-a4ad-4194-a442-032d6eb0f04e"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/15d7497e-a4ad-4194-a442-032d6eb0f04e"
        }
      ],
      "isPublic": false,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=3c65fbc1-d427-48ce-9091-633dde9e27e2"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    },
    {
      "id": "eb5c1e25-9b3e-4416-a833-e500122882c7",
      "name": "Shared Queries",
      "path": "Shared Queries",
      "createdDate": "2014-01-24T19:19:12.33Z",
      "lastModifiedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
      },
      "lastModifiedDate": "2014-01-24T19:19:12.79Z",
      "isFolder": true,
      "hasChildren": true,
      "children": [
        {
          "id": "139a3503-6ac6-4fa0-9a91-f76f180e7b65",
          "name": "Current Sprint",
          "path": "Shared Queries/Current Sprint",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "47d90993-13fb-4691-a3e2-dde8cd47d9f8",
              "name": "Sprint Backlog",
              "path": "Shared Queries/Current Sprint/Sprint Backlog",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-03-20T21:28:11.273Z",
              "isDeleted": true,
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/47d90993-13fb-4691-a3e2-dde8cd47d9f8"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=47d90993-13fb-4691-a3e2-dde8cd47d9f8"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/47d90993-13fb-4691-a3e2-dde8cd47d9f8"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/47d90993-13fb-4691-a3e2-dde8cd47d9f8"
            },
            {
              "id": "6e511ae8-aafe-455a-b318-a4158bbd0f1e",
              "name": "Test Cases",
              "path": "Shared Queries/Current Sprint/Test Cases",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
                "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
              },
              "lastModifiedDate": "2014-01-24T19:19:12.79Z",
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=6e511ae8-aafe-455a-b318-a4158bbd0f1e"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/6e511ae8-aafe-455a-b318-a4158bbd0f1e"
            },
            {
              "id": "7fabe7bd-1f50-4be1-a021-6cb655eec86f",
              "name": "Blocked Tasks",
              "path": "Shared Queries/Current Sprint/Blocked Tasks",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
                "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
              },
              "lastModifiedDate": "2014-01-24T19:19:12.79Z",
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7fabe7bd-1f50-4be1-a021-6cb655eec86f"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7fabe7bd-1f50-4be1-a021-6cb655eec86f"
            },
            {
              "id": "2469c406-13af-4e41-8315-290f9bd0efd6",
              "name": "Work in Progress",
              "path": "Shared Queries/Current Sprint/Work in Progress",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2015-05-26T23:44:31.843Z",
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2469c406-13af-4e41-8315-290f9bd0efd6"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=2469c406-13af-4e41-8315-290f9bd0efd6"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/2469c406-13af-4e41-8315-290f9bd0efd6"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/2469c406-13af-4e41-8315-290f9bd0efd6"
            },
            {
              "id": "5219b150-9c7e-4d42-9fa6-07546a67aae3",
              "name": "Open Impediments",
              "path": "Shared Queries/Current Sprint/Open Impediments",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
                "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
              },
              "lastModifiedDate": "2014-01-24T19:19:12.79Z",
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5219b150-9c7e-4d42-9fa6-07546a67aae3"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=5219b150-9c7e-4d42-9fa6-07546a67aae3"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/5219b150-9c7e-4d42-9fa6-07546a67aae3"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/5219b150-9c7e-4d42-9fa6-07546a67aae3"
            },
            {
              "id": "03fe5df2-f88a-4f1d-a29e-05c5588920d2",
              "name": "Unfinished Work",
              "path": "Shared Queries/Current Sprint/Unfinished Work",
              "createdDate": "2014-01-24T19:19:12.79Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-03-18T17:28:44.177Z",
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=03fe5df2-f88a-4f1d-a29e-05c5588920d2"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/03fe5df2-f88a-4f1d-a29e-05c5588920d2"
            }
          ],
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=139a3503-6ac6-4fa0-9a91-f76f180e7b65"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/139a3503-6ac6-4fa0-9a91-f76f180e7b65"
        },
        {
          "id": "955eb00e-83d7-42ea-9278-f051c15ee9d0",
          "name": "Website team",
          "path": "Shared Queries/Website team",
          "createdDate": "2014-11-11T00:16:11.653Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-11-11T00:29:11.37Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "fe2c589b-e714-48c3-941c-e1b9fb6a866c",
              "name": "All Bugs",
              "path": "Shared Queries/Website team/All Bugs",
              "createdDate": "2014-11-11T00:16:12.063Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-11-11T00:29:11.37Z",
              "isDeleted": true,
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fe2c589b-e714-48c3-941c-e1b9fb6a866c"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=fe2c589b-e714-48c3-941c-e1b9fb6a866c"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/955eb00e-83d7-42ea-9278-f051c15ee9d0"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/fe2c589b-e714-48c3-941c-e1b9fb6a866c"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fe2c589b-e714-48c3-941c-e1b9fb6a866c"
            }
          ],
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/955eb00e-83d7-42ea-9278-f051c15ee9d0"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=955eb00e-83d7-42ea-9278-f051c15ee9d0"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/955eb00e-83d7-42ea-9278-f051c15ee9d0"
        },
        {
          "id": "d6d5c8dd-2901-4876-9ef4-c88b5049d616",
          "name": "Parents and Children",
          "path": "Shared Queries/Parents and Children",
          "createdDate": "2014-03-19T20:20:05.097Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-03-20T21:44:34.367Z",
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6d5c8dd-2901-4876-9ef4-c88b5049d616"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=d6d5c8dd-2901-4876-9ef4-c88b5049d616"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/d6d5c8dd-2901-4876-9ef4-c88b5049d616"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/d6d5c8dd-2901-4876-9ef4-c88b5049d616"
        },
        {
          "id": "a6a14cf5-3c47-4297-87d9-57bc4abc8ac8",
          "name": "Website Team",
          "path": "Shared Queries/Website Team",
          "createdDate": "2014-04-25T16:08:19.603Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-04-25T16:08:39.167Z",
          "isFolder": true,
          "hasChildren": false,
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a6a14cf5-3c47-4297-87d9-57bc4abc8ac8"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a6a14cf5-3c47-4297-87d9-57bc4abc8ac8"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a6a14cf5-3c47-4297-87d9-57bc4abc8ac8"
        },
        {
          "id": "fb1c8967-e9f0-46fa-9cac-1cbb05f414fe",
          "name": "All Bugs",
          "path": "Shared Queries/All Bugs",
          "createdDate": "2014-04-25T16:06:47.283Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-04-25T16:07:09.81Z",
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb1c8967-e9f0-46fa-9cac-1cbb05f414fe"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=fb1c8967-e9f0-46fa-9cac-1cbb05f414fe"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/fb1c8967-e9f0-46fa-9cac-1cbb05f414fe"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/fb1c8967-e9f0-46fa-9cac-1cbb05f414fe"
        },
        {
          "id": "7662ea76-d42d-43db-abb0-19e6f1d0be9b",
          "name": "Feedback",
          "path": "Shared Queries/Feedback",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-01-24T19:19:12.79Z",
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/7662ea76-d42d-43db-abb0-19e6f1d0be9b"
        },
        {
          "id": "95cd9466-84e9-4d41-bebd-17b7a897f1e5",
          "name": "Product Backlog",
          "path": "Shared Queries/Product Backlog",
          "createdDate": "2014-01-24T19:19:12.79Z",
          "lastModifiedBy": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart <fabrikamfiber3@hotmail.com>"
          },
          "lastModifiedDate": "2014-03-20T21:28:15.19Z",
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/95cd9466-84e9-4d41-bebd-17b7a897f1e5"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=95cd9466-84e9-4d41-bebd-17b7a897f1e5"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            },
            "wiql": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/95cd9466-84e9-4d41-bebd-17b7a897f1e5"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/95cd9466-84e9-4d41-bebd-17b7a897f1e5"
        },
        {
          "id": "761fdaab-173f-490f-844b-041352e12a46",
          "name": "Website team",
          "path": "Shared Queries/Website team",
          "createdDate": "2014-04-25T16:09:19.873Z",
          "lastModifiedBy": {
            "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
            "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
          },
          "lastModifiedDate": "2014-04-25T16:09:28.65Z",
          "isFolder": true,
          "hasChildren": true,
          "children": [
            {
              "id": "a361e0f3-34e1-41b6-9c37-c36eb6bda320",
              "name": "Active Bugs",
              "path": "Shared Queries/Website team/Active Bugs",
              "createdDate": "2014-04-25T16:09:21.48Z",
              "lastModifiedBy": {
                "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
                "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
              },
              "lastModifiedDate": "2014-04-25T16:09:27.853Z",
              "isDeleted": true,
              "isPublic": true,
              "_links": {
                "self": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a361e0f3-34e1-41b6-9c37-c36eb6bda320"
                },
                "html": {
                  "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=a361e0f3-34e1-41b6-9c37-c36eb6bda320"
                },
                "parent": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/761fdaab-173f-490f-844b-041352e12a46"
                },
                "wiql": {
                  "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/a361e0f3-34e1-41b6-9c37-c36eb6bda320"
                }
              },
              "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/a361e0f3-34e1-41b6-9c37-c36eb6bda320"
            }
          ],
          "isDeleted": true,
          "isPublic": true,
          "_links": {
            "self": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/761fdaab-173f-490f-844b-041352e12a46"
            },
            "html": {
              "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=761fdaab-173f-490f-844b-041352e12a46"
            },
            "parent": {
              "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
            }
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/761fdaab-173f-490f-844b-041352e12a46"
        }
      ],
      "isPublic": true,
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=eb5c1e25-9b3e-4416-a833-e500122882c7"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb?api-version=2.2
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "All Bugs",
  "path": "Shared Queries/Website team/All Bugs",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.64Z",
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


#### Sample code

* [C# (GetQueryOrFolderById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L160)

### Query by Name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Website%20team/All%20Bugs?api-version=2.2
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "All Bugs",
  "path": "Shared Queries/Website team/All Bugs",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.64Z",
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


#### Sample code

* [C# (GetQueryByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L130)

### Folder by ID

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581?api-version=2.2
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website team",
  "path": "Shared Queries/Website team",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.323Z",
  "isFolder": true,
  "hasChildren": true,
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


#### Sample code

* [C# (GetQueryOrFolderById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L160)

### Folder by Name

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Website%20team?api-version=2.2
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website team",
  "path": "Shared Queries/Website team",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.323Z",
  "isFolder": true,
  "hasChildren": true,
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


#### Sample code

* [C# (GetFolderByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L100)

### Deleted query by ID
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb?$includeDeleted=true&api-version=2.2
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "Active Bugs",
  "path": "My Queries/Website/Active Bugs",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:59.71Z",
  "isDeleted": true,
  "isPublic": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


#### Sample code

* [C# (GetDeletedQueryById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L440)

### Flat query with expanded clauses
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/df60fdf6-3b5f-4928-aae8-29ee63df6e31?$expand=clauses&api-version=1.0
```

#### Sample response

```json
{
  "id": "df60fdf6-3b5f-4928-aae8-29ee63df6e31",
  "name": "All Bugs",
  "path": "Shared Queries/Website team/All Bugs",
  "queryType": "flat",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    }
  ],
  "sortColumns": [
    {
      "field": {
        "referenceName": "Microsoft.VSTS.Common.Priority",
        "name": "Priority",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
      },
      "descending": false
    },
    {
      "field": {
        "referenceName": "System.CreatedDate",
        "name": "Created Date",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
      },
      "descending": true
    }
  ],
  "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc",
  "isPublic": true,
  "clauses": {
    "field": {
      "referenceName": "System.WorkItemType",
      "name": "Work Item Type",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    "operator": {
      "referenceName": "SupportedOperations.Equals",
      "name": "="
    },
    "value": "Bug"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=df60fdf6-3b5f-4928-aae8-29ee63df6e31"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/df60fdf6-3b5f-4928-aae8-29ee63df6e31"
}
```


### Hierarchical query with expanded clauses
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/f0ade206-32f8-4360-9254-ad33f906cd2e?$expand=clauses&api-version=1.0
```

#### Sample response

```json
{
  "id": "f0ade206-32f8-4360-9254-ad33f906cd2e",
  "name": "Active stories with tasks",
  "path": "Shared Queries/Website team/Active stories with tasks",
  "queryType": "tree",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.WorkItemType",
      "name": "Work Item Type",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.AssignedTo",
      "name": "Assigned To",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AssignedTo"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    },
    {
      "referenceName": "System.Tags",
      "name": "Tags",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Tags"
    }
  ],
  "wiql": "SELECT [System.Id],[System.WorkItemType],[System.Title],[System.AssignedTo],[System.State],[System.Tags] FROM WorkItemLinks WHERE ([Source].[System.TeamProject] = @project AND [Source].[System.WorkItemType] = 'Product Backlog Item' AND [Source].[System.State] <> 'Removed') AND ([System.Links.LinkType] = 'System.LinkTypes.Hierarchy-Forward') AND ([Target].[System.WorkItemType] = 'Task') mode(Recursive)",
  "isPublic": true,
  "linkClauses": {
    "logicalOperator": "and",
    "clauses": [
      {
        "field": {
          "referenceName": "System.Links.LinkType",
          "name": "Link Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Links.LinkType"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "System.LinkTypes.Hierarchy-Forward"
      }
    ]
  },
  "filterOptions": "linksRecursiveMayContain",
  "sourceClauses": {
    "logicalOperator": "and",
    "clauses": [
      {
        "field": {
          "referenceName": "System.TeamProject",
          "name": "Team Project",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.TeamProject"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "@project"
      },
      {
        "field": {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "Product Backlog Item"
      },
      {
        "field": {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        "operator": {
          "referenceName": "SupportedOperations.NotEquals",
          "name": "<>"
        },
        "value": "Removed"
      }
    ]
  },
  "targetClauses": {
    "logicalOperator": "and",
    "clauses": [
      {
        "field": {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "Task"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f0ade206-32f8-4360-9254-ad33f906cd2e"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=f0ade206-32f8-4360-9254-ad33f906cd2e"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/addcb8b3-12d0-4f2c-b6ca-52bb584ae286"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/f0ade206-32f8-4360-9254-ad33f906cd2e"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/f0ade206-32f8-4360-9254-ad33f906cd2e"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Website%20team?api-version=2.2
```
```json
{
  "name": "All Bugs",
  "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
}
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "All Bugs",
  "path": "Shared Queries/Website team/All Bugs",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.64Z",
  "queryType": "flat",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    }
  ],
  "sortColumns": [
    {
      "field": {
        "referenceName": "Microsoft.VSTS.Common.Priority",
        "name": "Priority",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
      },
      "descending": false
    },
    {
      "field": {
        "referenceName": "System.CreatedDate",
        "name": "Created Date",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
      },
      "descending": true
    }
  ],
  "wiql": "select [System.Id], [System.Title], [System.State] from WorkItems where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc",
  "isPublic": true,
  "clauses": {
    "field": {
      "referenceName": "System.WorkItemType",
      "name": "Work Item Type",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    "operator": {
      "referenceName": "SupportedOperations.Equals",
      "name": "="
    },
    "value": "Bug"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries?api-version=2.2
```
```json
{
  "name": "Website team",
  "isFolder": true
}
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website team",
  "path": "Shared Queries/Website team",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:56.323Z",
  "isFolder": true,
  "hasChildren": false,
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Website%20team/Active%20Bugs?api-version=2.2
```
```json
{
  "wiql": "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Bug' AND [System.State] = 'Active' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc"
}
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "Active Bugs",
  "path": "Shared Queries/Website team/Active Bugs",
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:58.44Z",
  "queryType": "flat",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    }
  ],
  "sortColumns": [
    {
      "field": {
        "referenceName": "Microsoft.VSTS.Common.Priority",
        "name": "Priority",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
      },
      "descending": false
    },
    {
      "field": {
        "referenceName": "System.CreatedDate",
        "name": "Created Date",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
      },
      "descending": true
    }
  ],
  "wiql": "select [System.Id], [System.Title], [System.State] from WorkItems where [System.WorkItemType] = 'Bug' and [System.State] = 'Active' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc",
  "isPublic": true,
  "clauses": {
    "logicalOperator": "and",
    "clauses": [
      {
        "field": {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "Bug"
      },
      {
        "field": {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        },
        "operator": {
          "referenceName": "SupportedOperations.Equals",
          "name": "="
        },
        "value": "Active"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb?api-version=2.2
```
```json
{
  "name": "Active Bugs"
}
```

#### Sample response

```json
{
  "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
  "name": "Active Bugs",
  "path": "Shared Queries/Website team/Active Bugs",
  "createdDate": "2016-06-01T16:58:56.64Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:58.04Z",
  "queryType": "flat",
  "columns": [
    {
      "referenceName": "System.Id",
      "name": "ID",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
    },
    {
      "referenceName": "System.Title",
      "name": "Title",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
    },
    {
      "referenceName": "System.State",
      "name": "State",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
    }
  ],
  "sortColumns": [
    {
      "field": {
        "referenceName": "Microsoft.VSTS.Common.Priority",
        "name": "Priority",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
      },
      "descending": false
    },
    {
      "field": {
        "referenceName": "System.CreatedDate",
        "name": "Created Date",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
      },
      "descending": true
    }
  ],
  "wiql": "select [System.Id], [System.Title], [System.State] from WorkItems where [System.WorkItemType] = 'Bug' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc",
  "isPublic": true,
  "clauses": {
    "field": {
      "referenceName": "System.WorkItemType",
      "name": "Work Item Type",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
    },
    "operator": {
      "referenceName": "SupportedOperations.Equals",
      "name": "="
    },
    "value": "Bug"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "wiql": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/Shared%20Queries/Website%20team?api-version=2.2
```
```json
{
  "name": "Website"
}
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website",
  "path": "Shared Queries/Website",
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:59.077Z",
  "isFolder": true,
  "hasChildren": true,
  "isPublic": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/eb5c1e25-9b3e-4416-a833-e500122882c7"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/My%20Queries?api-version=2.2
```
```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website",
  "path": "My Queries/Website",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:58:59.407Z",
  "isFolder": true,
  "hasChildren": true,
  "isPublic": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb?api-version=2.2
```


#### Sample code

* [C# (DeleteQueryById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L363)

### By folder path

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/My%20Queries/Website?api-version=2.2
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581?$undeleteDescendants=true&api-version=2.2
```
```json
{
  "isDeleted": false
}
```

#### Sample response

```json
{
  "id": "8a8c8212-15ca-41ed-97aa-1d6fbfbcd581",
  "name": "Website",
  "path": "My Queries/Website",
  "createdBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "createdDate": "2016-06-01T16:58:56.323Z",
  "lastModifiedBy": {
    "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
    "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
  },
  "lastModifiedDate": "2016-06-01T16:59:01.86Z",
  "isFolder": true,
  "hasChildren": true,
  "children": [
    {
      "id": "342f0f44-4069-46b1-a940-3d0468979ceb",
      "name": "Active Bugs",
      "path": "My Queries/Website/Active Bugs",
      "createdBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "createdDate": "2016-06-01T16:58:56.64Z",
      "lastModifiedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett <fabrikamfiber4@hotmail.com>"
      },
      "lastModifiedDate": "2016-06-01T16:59:01.82Z",
      "queryType": "flat",
      "columns": [
        {
          "referenceName": "System.Id",
          "name": "ID",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Id"
        },
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.Title"
        },
        {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
        }
      ],
      "sortColumns": [
        {
          "field": {
            "referenceName": "Microsoft.VSTS.Common.Priority",
            "name": "Priority",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Priority"
          },
          "descending": false
        },
        {
          "field": {
            "referenceName": "System.CreatedDate",
            "name": "Created Date",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.CreatedDate"
          },
          "descending": true
        }
      ],
      "wiql": "select [System.Id], [System.Title], [System.State] from WorkItems where [System.WorkItemType] = 'Bug' and [System.State] = 'Active' order by [Microsoft.VSTS.Common.Priority] asc, [System.CreatedDate] desc",
      "isPublic": false,
      "clauses": {
        "logicalOperator": "and",
        "clauses": [
          {
            "field": {
              "referenceName": "System.WorkItemType",
              "name": "Work Item Type",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.WorkItemType"
            },
            "operator": {
              "referenceName": "SupportedOperations.Equals",
              "name": "="
            },
            "value": "Bug"
          },
          {
            "field": {
              "referenceName": "System.State",
              "name": "State",
              "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.State"
            },
            "operator": {
              "referenceName": "SupportedOperations.Equals",
              "name": "="
            },
            "value": "Active"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
        },
        "html": {
          "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=342f0f44-4069-46b1-a940-3d0468979ceb"
        },
        "parent": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
        },
        "wiql": {
          "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/wiql/342f0f44-4069-46b1-a940-3d0468979ceb"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/342f0f44-4069-46b1-a940-3d0468979ceb"
    }
  ],
  "isPublic": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "html": {
      "href": "https://mytfsserver/DefaultCollection/web/qr.aspx?pguid=6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c&qid=8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/3c65fbc1-d427-48ce-9091-633dde9e27e2"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/queries/8a8c8212-15ca-41ed-97aa-1d6fbfbcd581"
}
```


#### Sample code

* [C# (UnDeleteFolder method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L467)
* [C# (UnDeleteQuery method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/QueriesSample.cs#L486)
