---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Variables | REST API Reference for Team Foundation Server
description: Work with test variables programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 0ac1da87-798b-47cf-8426-8fc08d230e7f
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

#Test variables
[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test variables

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/variables?api-version={version}[&$skip={int}&$top={int}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | Version of the API to use.
| $skip				 | int     |         | Number of test variables to skip.
| $top               | int     |         | Number of test variables to return.

[!code-REST [GET__test_variables_json](./_data/variables/GET__test_variables.json)]

### A page at a time

[!code-REST [GET__test_variables__top-2_json](./_data/variables/GET__test_variables__top-2.json)]

## Get a test variable

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| variableId               | int     | ID of the test variable to get.
| Query
| api-version        | string  | Version of the API to use.

[!code-REST [GET__test_variables__variableId__json](./_data/variables/GET__test_variables__variableId_.json)]

## Create a test variable

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/variables?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {Array of string}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the new test variable.
| description | string   |                             | Description of the new test variable.
| values      | string   |                             | List of values allowed for the test variable.

[!code-REST [POST__test_variables_json](./_data/variables/POST__test_variables.json)]

## Update a test variable

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {Array of string}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| variableId               | int     |                 | ID of the test variable to update.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the test variable.
| description | string   |                             | Description of the test variable.
| values      | string   |                             | List of values allowed for the test variable.


[!code-REST [PATCH__test_variables__variableId__json](./_data/variables/PATCH__test_variables__variableId_.json)]

## Delete a test variable

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/variables/{variableId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| variableId               | int     | ID of the test variable to delete.
| Query
| api-version        | string  | Version of the API to use.

[!code-REST [DELETE__test_variables__variableId__json](./_data/variables/DELETE__test_variables__variableId_.json)]
