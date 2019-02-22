---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: TFVC Shelvesets | REST API Reference for Team Foundation Server
description: Work with TFVC shelvesets programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 01032D9F-ECAA-401A-8ECA-C857073876B9
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Shelvesets

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of shelvesets

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets?api-version={version}[&owner={string}&maxContentLength={int}&$top={int}&$skip={int}]
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| maxCommentLength | int    | 80      | Return only this many characters of each comment.
| $top             | int    | 100     | Maximum number of shelvesets to return.
| $skip            | int    | 0       | Number of shelvesets to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "name": "My first shelveset",
      "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:37:52.277Z",
      "comment": "Here is a really long comment describing this shelveset.",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "More changes",
      "id": "More changes;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:29:45.91Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/More%20changes%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Doc updates",
      "id": "Doc updates;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:27:25.18Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Doc%20updates%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Set this aside for now",
      "id": "Set this aside for now;8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T20:32:25.37Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Set%20this%20aside%20for%20now%3b8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  ]
}
```


### By person
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets?owner=Normal Paulk&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "name": "My first shelveset",
      "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:37:52.277Z",
      "comment": "Here is a really long comment describing this shelveset.",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "More changes",
      "id": "More changes;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:29:45.91Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/More%20changes%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Doc updates",
      "id": "Doc updates;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:27:25.18Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Doc%20updates%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ]
}
```


### With more or less comments
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets?maxCommentLength=6&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "name": "My first shelveset",
      "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:37:52.277Z",
      "comment": "Here i",
      "commentTruncated": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "More changes",
      "id": "More changes;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:29:45.91Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/More%20changes%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Doc updates",
      "id": "Doc updates;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:27:25.18Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Doc%20updates%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Set this aside for now",
      "id": "Set this aside for now;8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T20:32:25.37Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Set%20this%20aside%20for%20now%3b8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  ]
}
```


### A page at a time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets?$top=2&$skip=2&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "name": "Doc updates",
      "id": "Doc updates;d6245f20-2af8-44f4-9451-8107cb2767db",
      "owner": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "createdDate": "2014-07-18T03:27:25.18Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Doc%20updates%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    {
      "name": "Set this aside for now",
      "id": "Set this aside for now;8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "createdDate": "2014-03-24T20:32:25.37Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/Set%20this%20aside%20for%20now%3b8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  ]
}
```



## Get a shelveset

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeDetails   | bool   | false   | Return policy overrides and notes.
| includeWorkItems | bool   | false   | Return work items.
| maxChangeCount   | int    | 0       | Maximum number of changes to return. 
| maxCommentLength | int    | 2000    | Maximum number of characters in the comment to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "name": "My first shelveset",
  "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
  "owner": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-07-18T03:37:52.277Z",
  "comment": "Here is a really long comment describing this shelveset.",
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/changes"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/workitems"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


### With policy overrides and notes
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db?includeDetails=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "policyOverride": {
    "policyFailures": []
  },
  "notes": [],
  "name": "My first shelveset",
  "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
  "owner": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-07-18T03:37:52.277Z",
  "comment": "Here is a really long comment describing this shelveset.",
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/changes"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/workitems"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


### With work items
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db?includeWorkItems=true&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "workItems": [
    {
      "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=22",
      "id": 22,
      "title": "Wrong output",
      "workItemType": "Bug",
      "state": "Done"
    }
  ],
  "name": "My first shelveset",
  "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
  "owner": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-07-18T03:37:52.277Z",
  "comment": "Here is a really long comment describing this shelveset.",
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/changes"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/workitems"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


### With changes
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db?maxChangeCount=100&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "changes": [
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/App.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/App.config?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/AuthSample.csproj",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/AuthSample.csproj?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "add, edit, encoding"
    },
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "delete"
    }
  ],
  "name": "My first shelveset",
  "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
  "owner": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-07-18T03:37:52.277Z",
  "comment": "Here is a really long comment describing this shelveset.",
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/changes"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/workitems"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


### With more or less comments
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db?maxCommentLength=6&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "name": "My first shelveset",
  "id": "My first shelveset;d6245f20-2af8-44f4-9451-8107cb2767db",
  "owner": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2014-07-18T03:37:52.277Z",
  "comment": "Here i",
  "commentTruncated": true,
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/changes"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset%3bd6245f20-2af8-44f4-9451-8107cb2767db/workitems"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


## Get shelveset changes
Retrieves a list of changes included in a shelveset. Paging is supported using $top and $skip.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}/changes?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top             | int    | 100     | Maximum number of shelvesets to return.
| $skip            | int    | 0       | Number of shelvesets to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db/changes?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/App.config",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/App.config?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/AuthSample.csproj",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/AuthSample.csproj?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "edit"
    },
    {
      "item": {
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "add, edit, encoding"
    },
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "delete"
    }
  ]
}
```


### A page at a time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db/changes?$top=2&$skip=2&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "item": {
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/FabrikamEngine.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "add, edit, encoding"
    },
    {
      "item": {
        "version": 9,
        "path": "$/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs",
        "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample/Code/Properties/AssemblyInfo.cs?versionType=Shelveset&version=My%20first%20shelveset%3Bfabrikamfiber16%40hotmail.com"
      },
      "changeType": "delete"
    }
  ]
}
```


## Get shelveset work items

Retrieves the work items associated with the shelveset. 

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}/workitems?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/shelvesets/My%20first%20shelveset;d6245f20-2af8-44f4-9451-8107cb2767db/workitems?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "webUrl": "https://mytfsserver/DefaultCollection/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=22",
      "id": 22,
      "title": "Wrong output",
      "workItemType": "Bug",
      "state": "Done"
    }
  ]
}
```

