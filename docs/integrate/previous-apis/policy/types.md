---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Policy Types | REST API Reference for Team Foundation Server
description: Work with policy types programmatically using the REST APIs for Team Foundation Server.
ms.assetid: c7025882-81ca-4d4a-a879-416560546992
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy types
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


[!code-REST [GetTypesListExample](./_data/types/GET__policy_types.json)]

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

[!code-REST [GetOneTypeExample](./_data/types/GET__policy_types__policyId_.json)]