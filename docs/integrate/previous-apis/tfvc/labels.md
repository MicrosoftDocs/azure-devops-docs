---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: TFVC Labels | REST API Reference for Team Foundation Server
description: Work with TFVC labels programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 6E87D313-19A9-4271-AB5B-4B4CA1ADA9BA
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Labels

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of labels

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels?api-version={version}[&name={srtring}&owner={string}&itemLabelFilter={string}&$top={int}&$skip={int}]
```

| Parameter       | Type   | Default | Notes
|:----------------|:-------|:--------|:------
| URL
| instance        | string |         | TFS server name ({server:port}).
| Query
| api-version     | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| name            | string |         | Name of the label.<br/>Wildcards are supported.
| owner           | string |         | Display name, unique name, or ID of the label owner.
| itemLabelFilter | string |         | Path of item that has these labels.
| $top            | int    | 100     | Maximum number of labels to return.
| $skip           | int    | 0       | Number of labels to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 2884,
      "name": "Another label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T19:10:53.22Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2884"
    },
    {
      "id": 2883,
      "name": "That label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:32.097Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    },
    {
      "id": 2882,
      "name": "This label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:21.77Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2882"
    }
  ]
}
```


### By name
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels?name=Th*Label&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 2883,
      "name": "That label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:32.097Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    },
    {
      "id": 2882,
      "name": "This label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:21.77Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2882"
    }
  ]
}
```


### By person
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels?owner=fabrikamfiber3@hotmail.com&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": 2884,
      "name": "Another label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T19:10:53.22Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2884"
    },
    {
      "id": 2883,
      "name": "That label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:32.097Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    },
    {
      "id": 2882,
      "name": "This label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:21.77Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2882"
    }
  ]
}
```


### By item
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels?itemLabelFilter=$/Fabrikam-Fiber-TFVC/AuthSample-Dev/Code/AuthSample.cs&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 2883,
      "name": "That label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:32.097Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    }
  ]
}
```


### A page at a time
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels?$skip=2&$top=2&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 2882,
      "name": "This label",
      "description": "",
      "labelScope": "$/Fabrikam-Fiber-TFVC",
      "modifiedDate": "2014-03-24T18:56:21.77Z",
      "owner": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2882"
    }
  ]
}
```


## Get label
Retrieves details for a label. A list of items under this label can be included by setting maxItemCount to a positive integer. 

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels/{labelId}?api-version={version}[&maxItemCount={int}]
```

| Parameter    | Type   | Default | Notes
|:-------------|:-------|:--------|:------
| URL
| instance     | string |         | TFS server name ({server:port}).
| labelId      | int    |         | ID of label.
| Query
| api-version  | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| maxItemCount | int    | 0       | Maximum number of labeled items to return.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    },
    "items": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883/items"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  },
  "id": 2883,
  "name": "That label",
  "description": "",
  "labelScope": "$/Fabrikam-Fiber-TFVC",
  "modifiedDate": "2014-03-24T18:56:32.097Z",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
}
```


### With items

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883?maxItemCount=100&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
    },
    "items": {
      "href": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883/items"
    },
    "owner": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    }
  },
  "id": 2883,
  "name": "That label",
  "description": "",
  "labelScope": "$/Fabrikam-Fiber-TFVC",
  "modifiedDate": "2014-03-24T18:56:32.097Z",
  "owner": {
    "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabrikamfiber3@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
  },
  "items": [
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.sln",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.sln?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.vssscc",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.vssscc?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.cs",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.cs?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj.vspscc",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj.vspscc?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties/AssemblyInfo.cs",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties/AssemblyInfo.cs?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev?versionType=Changeset&version=12"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883"
}
```


## Get list of labelled items

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/labels/{labelId}/items?api-version={version}[&$top={int}&$skip={int}]
```

| Parameter    | Type   | Default | Notes
|:-------------|:-------|:--------|:------
| URL
| instance     | string |         | TFS server name ({server:port}).
| labelId      | int    |         | ID of the label.
| Query
| Query
| api-version  | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top         | int    | 100     |  Maximum number of items to return.
| $skip        | int    | 0       |  Number of items to skip.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883/items?api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 10,
  "value": [
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.sln",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.sln?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.vssscc",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/AuthSample.vssscc?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.cs",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.cs?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj.vspscc",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj.vspscc?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/AuthSample.csproj?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties/AssemblyInfo.cs",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/Properties/AssemblyInfo.cs?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev?versionType=Changeset&version=12"
    }
  ]
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tfvc/labels/2883/items?$top=2&$skip=2&api-version=1.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code",
      "isFolder": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code?versionType=Changeset&version=12"
    },
    {
      "version": 12,
      "path": "$/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config",
      "url": "https://mytfsserver/DefaultCollection/_apis/tfvc/items/%24/Fabrikam-Fiber-TFVC/AuthSample-dev/Code/App.config?versionType=Changeset&version=12"
    }
  ]
}
```


