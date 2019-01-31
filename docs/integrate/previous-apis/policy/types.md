---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Policy Types | REST API Reference for Team Foundation Server
description: Work with policy types programmatically using the REST APIs for Team Foundation Server.
ms.assetid: c7025882-81ca-4d4a-a879-416560546992
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of policy types

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/types?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | The name or ID of the project.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/types?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "description": "This policy will require a successful build has been performed before updating protected refs.",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241"
        }
      },
      "id": "0609b952-1397-4640-95ec-e00a01b2c241",
      "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241",
      "displayName": "Build"
    },
    {
      "description": "This policy will reject pushes to a repository for files which exceed the specified size.",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/2e26e725-8201-4edd-8bf5-978563c34a80"
        }
      },
      "id": "2e26e725-8201-4edd-8bf5-978563c34a80",
      "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/2e26e725-8201-4edd-8bf5-978563c34a80",
      "displayName": "File size restriction"
    },
    {
      "description": "This policy will ensure that required reviewers are added for files with certain extensions.",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
        }
      },
      "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
      "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
      "displayName": "Required reviewers"
    },
    {
      "description": "This policy will ensure that a minimum number of reviewers have approved a pull request before completion.",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd"
        }
      },
      "id": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
      "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
      "displayName": "Minimum approval count"
    }
  ]
}
```


## Get a policy type

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/types/{id}?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string | TFS server name ({server:port}).
| project       | string | The name or ID of the project.
| id            | guid   | The ID of the policy type.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241?api-version=2.0-preview
```

#### Sample response

```json
{
  "description": "This policy will require a successful build has been performed before updating protected refs.",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241"
    }
  },
  "id": "0609b952-1397-4640-95ec-e00a01b2c241",
  "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241",
  "displayName": "Build"
}
```
