---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Build Definition Templates | REST API Reference for Team Foundation Server
description: Get build definition templates programmatically using the REST APIs for Team Foundation Server.
ms.assetid: E7D635DE-CDAB-449A-80C5-EC89610A5A5A
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Build definition templates
[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definition templates

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_definitions_templates_json](./_data/definitionTemplates/GET__build_definitions_templates.json)]

## Get a build definition template

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definition/templates/{templateId}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| templateId   | int    | ID of the build definition template.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__build_definitions_templates__templateId__json](./_data/definitionTemplates/GET__build_definitions_templates__templateId_.json)]


## Create or update a build definition template

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates/{templateId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| templateId    | int                  | ID of the build definition template.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [PUT__build_definitions_templates__templateId__json](./_data/definitionTemplates/PUT__build_definitions_templates__templateId_.json)]


## Delete a build definition template

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates/{templateId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| templateId    | int                  | ID of the build definition template.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__build_definitions_templates__templateId__json](./_data/definitionTemplates/DELETE__build_definitions_templates__templateId_.json)]
