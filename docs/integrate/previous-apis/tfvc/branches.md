---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: TFVC Branches | REST API Reference for Team Foundation Server
description: Work with TFVC branches programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 9C1923A9-4887-4DC4-9C20-153C19D453CE
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Branches

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a branch

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/branches/{path}?api-version={version}[&includeChildren={bool}&includeParent={bool}&includeDeleted={bool}]
```

| Parameter       | Type   | Default | Notes
|:----------------|:-------|:--------|:------------|
| URL
| instance        | string |         | TFS server name ({server:port}).
| path            | string | $/      | Full path to the branch.<br/>Examples: `$/`, `$/MyProject`, `$/MyProject/SomeFolder`.
| Query
| api-version     | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeChildren | bool   | false   | Return child branches, if there are any.
| includeParent   | bool   | false   | Return the parent branch, if there is one.
| includeDeleted  | bool   | false   | Return branches marked as deleted.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches/$/Fabrikam-Fiber-TFVC/AuthSample-Dev?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
  "description": "",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com"
  },
  "createdDate": "2014-03-24T16:46:48.253Z",
  "relatedBranches": [],
  "mappings": []
}
```


### With child branches
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches/$/Fabrikam-Fiber-TFVC/AuthSample-Dev?includeChildren=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample-Dev"
    },
    "childBranches": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample%2bSpecial"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  },
  "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
  "description": "",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
  },
  "createdDate": "2014-03-24T16:46:48.253Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample-Dev",
  "relatedBranches": [],
  "mappings": [],
  "children": [
    {
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample+Special",
      "description": "Branched from $/Fabrikam-Fiber-TFVC/AuthSample-dev",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T16:52:10.407Z",
      "relatedBranches": [],
      "mappings": [],
      "children": []
    }
  ]
}
```


### With the parent branch
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches/$/Fabrikam-Fiber-TFVC/AuthSample-Dev?includeParent=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
  "description": "",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com"
  },
  "createdDate": "2014-03-24T16:46:48.253Z",
  "parent": {
    "path": "$/Fabrikam-Fiber-TFVC/AuthSample"
  },
  "relatedBranches": [],
  "mappings": []
}
```


### Deleted branch
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches/$/Fabrikam-Fiber-TFVC/MyBranch?includeDeleted=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "path": "$/Fabrikam-Fiber-TFVC/MyBranch",
  "description": "Branched from $/Fabrikam-Fiber-TFVC/AuthSample",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com"
  },
  "createdDate": "2014-03-24T16:44:13.277Z",
  "isDeleted": true,
  "relatedBranches": [
    {
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample"
    }
  ],
  "mappings": []
}
```


## Get a list of root branches

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/branches?api-version={version}[&includeChildren={bool}&includeDeleted={bool}]
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|:------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeChildren  | bool   | false   | Return the child branches for each root branch.
| includeDeleted   | bool   | false   | Return deleted branches.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T16:25:17.39Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample",
      "relatedBranches": [],
      "mappings": []
    }
  ]
}
```


### With child branches
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches?includeChildren=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T16:25:17.39Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample",
      "relatedBranches": [],
      "mappings": [],
      "children": [
        {
          "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
          "description": "",
          "owner": {
            "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "displayName": "Chuck Reinhart",
            "uniqueName": "fabrikamfiber3@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
          },
          "createdDate": "2014-03-24T16:46:48.253Z",
          "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample-dev",
          "relatedBranches": [],
          "mappings": [],
          "children": [
            {
              "path": "$/Fabrikam-Fiber-TFVC/AuthSample+Special",
              "description": "Branched from $/Fabrikam-Fiber-TFVC/AuthSample-dev",
              "owner": {
                "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
                "displayName": "Chuck Reinhart",
                "uniqueName": "fabrikamfiber3@hotmail.com",
                "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
                "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
              },
              "createdDate": "2014-03-24T16:52:10.407Z",
              "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample%2bSpecial",
              "relatedBranches": [],
              "mappings": [],
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
```


### Including deleted branches
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/branches?includeDeleted=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T16:25:17.39Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/AuthSample",
      "relatedBranches": [
        {
          "path": "$/Fabrikam-Fiber-TFVC/MyBranch"
        }
      ],
      "mappings": []
    },
    {
      "path": "$/Fabrikam-Fiber-TFVC/MyBranch",
      "description": "Branched from $/Fabrikam-Fiber-TFVC/AuthSample",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T16:44:13.277Z",
      "isDeleted": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/branches/%24/Fabrikam-Fiber-TFVC/MyBranch",
      "relatedBranches": [
        {
          "path": "$/Fabrikam-Fiber-TFVC/AuthSample"
        }
      ],
      "mappings": []
    }
  ]
}
```



