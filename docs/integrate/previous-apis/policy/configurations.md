---
title: Policy Configurations | REST API Reference for Team Foundation Server
description: Work with policy configurations programmatically using the REST APIs for Team Foundation Server.
ms.assetid: ddcf1e33-29c3-42b0-ae44-673643e07e38
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy configurations

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of policy configurations

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations?api-version={version}[&$top={top}&$skip={skip}]
```

| Parameter     | Type    | Default | Notes
|:--------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| Query
| api-version   | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top          | integer | 100     | Number of policy configurations to return.
| $skip         | integer | 0       | Number of policy configurations to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.85754Z",
      "isEnabled": true,
      "isBlocking": true,
      "isDeleted": false,
      "settings": {
        "requiredReviewerIds": [
          "1d1dad71-f27c-4370-810d-838ec41efd41",
          "13272ea3-92ef-46d1-b77e-608ebbf3428b"
        ],
        "filenamePatterns": [
          "*/API*.cs",
          "sql/tables/*"
        ],
        "addedFilesOnly": false,
        "message": null,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/releases/",
            "matchKind": "Prefix",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/adventureworks",
            "matchKind": "Exact",
            "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "revision": 2,
      "id": 17,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
      "type": {
        "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
        "displayName": "Required reviewers"
      }
    },
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.8887894Z",
      "isEnabled": true,
      "isBlocking": false,
      "settings": {
        "minimumApproverCount": 1,
        "creatorVoteCounts": false,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd"
        }
      },
      "revision": 1,
      "id": 18,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18",
      "type": {
        "id": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
        "displayName": "Minimum approval count"
      }
    },
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.935666Z",
      "isEnabled": true,
      "isBlocking": false,
      "settings": {
        "buildDefinitionId": 5,
        "scope": [
          {
            "refName": "refs/heads/features/",
            "matchKind": "Prefix",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241"
        }
      },
      "revision": 1,
      "id": 19,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19",
      "type": {
        "id": "0609b952-1397-4640-95ec-e00a01b2c241",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241",
        "displayName": "Build"
      }
    }
  ]
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?$top=1&$skip=1&api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.85754Z",
      "isEnabled": true,
      "isBlocking": true,
      "isDeleted": false,
      "settings": {
        "requiredReviewerIds": [
          "1d1dad71-f27c-4370-810d-838ec41efd41",
          "13272ea3-92ef-46d1-b77e-608ebbf3428b"
        ],
        "filenamePatterns": [
          "*/API*.cs",
          "sql/tables/*"
        ],
        "addedFilesOnly": false,
        "message": null,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/releases/",
            "matchKind": "Prefix",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/adventureworks",
            "matchKind": "Exact",
            "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "revision": 2,
      "id": 17,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
      "type": {
        "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
        "displayName": "Required reviewers"
      }
    },
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.8887894Z",
      "isEnabled": true,
      "isBlocking": false,
      "settings": {
        "minimumApproverCount": 1,
        "creatorVoteCounts": false,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd"
        }
      },
      "revision": 1,
      "id": 18,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18",
      "type": {
        "id": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
        "displayName": "Minimum approval count"
      }
    },
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.935666Z",
      "isEnabled": true,
      "isBlocking": false,
      "settings": {
        "buildDefinitionId": 5,
        "scope": [
          {
            "refName": "refs/heads/features/",
            "matchKind": "Prefix",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241"
        }
      },
      "revision": 1,
      "id": 19,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19",
      "type": {
        "id": "0609b952-1397-4640-95ec-e00a01b2c241",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241",
        "displayName": "Build"
      }
    }
  ]
}
```


## Get a policy configuration

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```

| Parameter     | Type    | Notes
|:--------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  | TFS server name ({server:port}).
| project       | string  | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer | ID of the policy configuration.
| Query
| api-version   | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17?api-version=2.0-preview
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.85754Z",
  "isEnabled": true,
  "isBlocking": true,
  "isDeleted": false,
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41",
      "13272ea3-92ef-46d1-b77e-608ebbf3428b"
    ],
    "filenamePatterns": [
      "*/API*.cs",
      "sql/tables/*"
    ],
    "addedFilesOnly": false,
    "message": null,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/releases/",
        "matchKind": "Prefix",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/adventureworks",
        "matchKind": "Exact",
        "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
    }
  },
  "revision": 2,
  "id": 17,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
    "displayName": "Required reviewers"
  }
}
```


## Get a list of historical revisions

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}/revisions?api-version={version}[&$top={top}&$skip={skip}]
```

| Parameter     | Type    | Default | Notes
|:--------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer |         | ID of the policy configuration.
| Query
| api-version   | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top          | integer | 100     | Number of policy configurations to return.
| $skip         | integer | 0       | Number of policy configurations to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17/revisions?api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.85754Z",
      "isEnabled": true,
      "isBlocking": true,
      "isDeleted": false,
      "settings": {
        "requiredReviewerIds": [
          "1d1dad71-f27c-4370-810d-838ec41efd41",
          "13272ea3-92ef-46d1-b77e-608ebbf3428b"
        ],
        "filenamePatterns": [
          "*/API*.cs",
          "sql/tables/*"
        ],
        "addedFilesOnly": false,
        "message": null,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/releases/",
            "matchKind": "Prefix",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/adventureworks",
            "matchKind": "Exact",
            "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "revision": 2,
      "id": 17,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
      "type": {
        "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
        "displayName": "Required reviewers"
      }
    },
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.8106632Z",
      "isEnabled": true,
      "isBlocking": true,
      "isDeleted": false,
      "settings": {
        "requiredReviewerIds": [
          "1d1dad71-f27c-4370-810d-838ec41efd41"
        ],
        "filenamePatterns": [
          "*/API*.cs"
        ],
        "addedFilesOnly": false,
        "message": null,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/releases/",
            "matchKind": "Prefix",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "revision": 1,
      "id": 17,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
      "type": {
        "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
        "displayName": "Required reviewers"
      }
    }
  ],
  "count": 2
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17/revisions?$top=1&$skip=1&api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2015-02-23T12:51:06.8106632Z",
      "isEnabled": true,
      "isBlocking": true,
      "isDeleted": false,
      "settings": {
        "requiredReviewerIds": [
          "1d1dad71-f27c-4370-810d-838ec41efd41"
        ],
        "filenamePatterns": [
          "*/API*.cs"
        ],
        "addedFilesOnly": false,
        "message": null,
        "scope": [
          {
            "refName": "refs/heads/master",
            "matchKind": "Exact",
            "repositoryId": null
          },
          {
            "refName": "refs/heads/releases/",
            "matchKind": "Prefix",
            "repositoryId": null
          }
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
        },
        "type": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "revision": 1,
      "id": 17,
      "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
      "type": {
        "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
        "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
        "displayName": "Required reviewers"
      }
    }
  ],
  "count": 1
}
```


## Get a specific historical revision 

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}/revisions/{revision}?api-version={version}
```

| Parameter     | Type    | Notes
|:--------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  | TFS server name ({server:port}).
| project       | string  | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer | ID of the policy configuration.
| revision      | integer | ID of the specific revision of the configuration
| Query
| api-version   | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17/revisions/1?api-version=2.0-preview
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.8106632Z",
  "isEnabled": true,
  "isBlocking": true,
  "isDeleted": false,
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41"
    ],
    "filenamePatterns": [
      "*/API*.cs"
    ],
    "addedFilesOnly": false,
    "message": null,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/releases/",
        "matchKind": "Prefix",
        "repositoryId": null
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
    }
  },
  "revision": 1,
  "id": 17,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
    "displayName": "Required reviewers"
  }
}
```


## Create a policy configuration

```no-highlight
POST https://{instance}/defaultcollection/{project}/_apis/policy/configurations?api-version={version}
```
```json
{
   "isEnabled": {bool},
   "isBlocking": {bool},
   "type": {
      "id": {guid}
   },
   "settings": {object}
}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Body**
| isEnabled   | bool        | If `true`, the policy is initially enabled.
| isBlocking  | bool        | If `false`, the policy will not block artifacts from being committed even if the policy rejects the artifact.
| type.id     | guid        | ID of the [type](./types.md) of policy to create.
| settings    | JSON object | Object containing settings for the policy. [Format varies by type](./settings.md)

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": true,
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e"
  },
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41"
    ],
    "filenamePatterns": [
      "*/API*.cs"
    ],
    "addedFilesOnly": false,
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/master",
        "matchKind": "exact"
      },
      {
        "repositoryId": null,
        "refName": "refs/heads/releases/",
        "matchKind": "prefix"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.8106632",
  "isEnabled": true,
  "isBlocking": true,
  "isDeleted": false,
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41"
    ],
    "filenamePatterns": [
      "*/API*.cs"
    ],
    "addedFilesOnly": false,
    "message": null,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/releases/",
        "matchKind": "Prefix",
        "repositoryId": null
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
    }
  },
  "revision": 1,
  "id": 17,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
    "displayName": "Required reviewers"
  }
}
```


## Update a policy configuration

```no-highlight
PUT https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```
```json
{
   "isEnabled": {bool},
   "isBlocking": {bool},
   "type": {
      "id": {guid}
   },
   "settings": {object}
}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id          | integer     | ID of the policy configuration.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Body**
| isEnabled   | bool        | If `true`, the policy is enabled.
| isBlocking  | bool        | If `false`, the policy will not block artifacts from being committed even if the policy rejects the artifact.
| type.id     | guid        | ID of the [type](./types.md) of policy. This must be the same as the configuration's existing type.
| settings    | JSON object | Object containing settings for the policy. [Format varies by type](./settings.md)

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": true,
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e"
  },
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41",
      "13272ea3-92ef-46d1-b77e-608ebbf3428b"
    ],
    "filenamePatterns": [
      "*/API*.cs",
      "sql/tables/*"
    ],
    "addedFilesOnly": false,
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/master",
        "matchKind": "exact"
      },
      {
        "repositoryId": null,
        "refName": "refs/heads/releases/",
        "matchKind": "prefix"
      },
      {
        "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257",
        "refName": "refs/heads/adventureworks",
        "matchKind": "exact"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.85754Z",
  "isEnabled": true,
  "isBlocking": true,
  "isDeleted": false,
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41",
      "13272ea3-92ef-46d1-b77e-608ebbf3428b"
    ],
    "filenamePatterns": [
      "*/API*.cs",
      "sql/tables/*"
    ],
    "addedFilesOnly": false,
    "message": null,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/releases/",
        "matchKind": "Prefix",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/adventureworks",
        "matchKind": "Exact",
        "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
    }
  },
  "revision": 2,
  "id": 17,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
    "displayName": "Required reviewers"
  }
}
```


## Delete a policy configuration

```no-highlight
DELETE https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id          | integer     | ID of the policy configuration.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17?api-version=2.0-preview
```

