---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Configurations | REST API Reference for Team Foundation Server
description: Work with test configurations programmatically using the REST APIs for Team Foundation Server.
ms.assetid: b551e771-0315-4cfc-a3bd-ddfa3bb6b71f
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

#Test configurations
[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test configurations

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/configurations?api-version={version}[&$skip={int}&$top={int}&continuationToken={string}&includeAllProperties={boolean}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | Version of the API to use.
| $skip				 | int     |         | Number of test configurations to skip.
| $top               | int     |         | Number of test configurations to return.
| continuationToken               | string     |         | If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
| includeAllProperties | boolean | false | If true, it returns all properties of the test configurations. Otherwise, it returns the skinny version.

[!code-REST [GET__test_configurations_json](./_data/configurations/GET__test_configurations.json)]

```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 4;0
}
```

### A page at a time

[!code-REST [GET__test_configurations__top-2_json](./_data/configurations/GET__test_configurations__top-2.json)]

```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 4;2
}

```

### With continuation token

[!code-REST [GET__test_configurations__continuationToken_json](./_data/configurations/GET__test_configurations__continuationToken.json)]

```json
response header contains continuation token (considering batchSize is 3)

{
    "x-ms-continuationtoken": 17;9
}

```

### Include all properties of the test configurations

[!code-REST [GET__test_configurations__includeAllProperties_json](./_data/configurations/GET__test_configurations__includeAllProperties.json)]

## Get a test configuration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| configurationId    | int     | ID of the test configuration to get.
| Query
| api-version        | string  | Version of the API to use.

[!code-REST [GET__test_configurations__configurationId__json](./_data/configurations/GET__test_configurations__configurationId_.json)]

## Create a test configuration

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/configurations?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {NameValuePair}
  "area": {string},
  "state": {
	enum { Active, Inactive }
	}
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
| name        | string   |                             | Name of the new test configuration.
| description | string   |                             | Description of the new test configuration.
| values      | NameValuePair|                             | An array of test variable name and corresponding selected value pairs.
| area        | string | Project root area | Name of the area under which the configuration is created.
| state       | enum { Active, Inactive } | Active       | State of the test configuration.

[!code-REST [POST__test_configurations_json](./_data/configurations/POST__test_configurations.json)]

### With Area

[!code-REST [POST__test_configurations2_json](./_data/configurations/POST__test_configurations2.json)]

## Update a test configuration

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "values": {NameValuePair},
  "area": {string},
  "state": {
	enum { Active, Inactive }
	}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| configurationId               | int     |            | ID of the test configuration to update.
| Query
| api-version | string   |                             | Version of the API to use.
| Body
| name        | string   |                             | Name of the test configuration.
| description | string   |                             | Description of the test configuration.
| values      | NameValuePair|                             | An array of test variable name and corresponding selected value pairs.
| area        | string| Project root area | Name of the area under which the configuration is created.
| state       | enum { Active, Inactive } | Active       | State of the test configuration.

[!code-REST [PATCH__test_configurations__configurationId__json](./_data/configurations/PATCH__test_configurations__configurationId_.json)]

## Delete a test configuration

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/configurations/{configurationId}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| configurationId               | int     | ID of the test configuration to get.
| Query
| api-version        | string  | Version of the API to use.

[!code-REST [DELETE__test_configurations__configurationId__json](./_data/configurations/DELETE__test_configurations__configurationId_.json)]
