---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Test Plans | REST API Reference for Team Foundation Server
description: Work with test plans programmatically using the REST APIs for Team Foundation Server.
ms.assetid: B07716A0-0420-49F8-95B9-880105FADDA3
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Test plans
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of test plans

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans?api-version={version}[&owner={string}&includePlanDetails={bool}&filterActivePlans={bool}&$skip={int}&$top={int}]
```

| Parameter          | Type    | Default | Notes
|:-------------------|:--------|:--------|:---------------------
| URL
| instance           | string  |         | TFS server name ({server:port}).
| project            | string  |         | Name or ID of the project.
| Query
| api-version        | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| owner              | string  |         | Filter for test plan by owner ID or name.
| includePlanDetails | bool    | false   | Get all properties of the test plan.
| filterActivePlans  | bool    | false   | Get just the active plans.
| $skip				 | int     |         | Number of test plans to skip.
| $top               | int     |         | Number of test plans to return.

[!code-REST [GET_test_arvind_plans_json](./_data/plans/GET_test_arvind_plans.json)]

### With details

[!code-REST [GET__test__projectName__plans_includePlanDetails-true_json](./_data/plans/GET__test__projectName__plans_includePlanDetails-true.json)]

### Just active plans

[!code-REST [GET__test__projectName__plans_filterActivePlans-true_json](./_data/plans/GET__test__projectName__plans_filterActivePlans-true.json)]

### A page at a time

[!code-REST [GET__test__projectName__plans__top-3_json](./_data/plans/GET__test__projectName__plans__top-3.json)]

## Get a test plan

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:---------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| project            | string  | Name or ID of the project.
| plan               | int     | ID of the test plan to get.
| Query
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET_testmanagement_testplan_id_json](./_data/plans/GET_testmanagement_testplan_id.json)]

## Create a testplan
<a name="createatestplan" />

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/test/plans?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "area": {"name" : string},
  "iteration": {string},
  "startDate": {DateTime},
  "endDate": {DateTime}
}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| Query
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string   |                             | Name of the new test plan.
| description | string   |                             | Description of the new test plan.
| area.name   | string   | Project root area      | Name of the area in which to create the test plan.
| iteration   | string   | Project root iteration | Name of the iteration in which to create the test plan.
| startDate   | DateTime | Current date                | Start date for test plan.
| endDate     | DateTime | Start date + 7 days         | End date for test plan.

[!code-REST [POST_testmanagement_testplan_json](./_data/plans/POST_testmanagement_testplan.json)]

### With a description

[!code-REST [POST__test__plans_description_json](./_data/plans/POST__test__plans_description.json)]

### In an area and iteration
[!code-REST [POST__test__plans_areaiteration_json](./_data/plans/POST__test__plans_areaiteration.json)]

### To start on a date and finish on a date
[!code-REST [POST__test__plans_startdateenddate_json](./_data/plans/POST__test__plans_startdateenddate.json)]

## Update a testplan

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/test/plans/{plan}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
  "name": {string},
  "description": {string},
  "area": {"name" : string},
  "iteration": {string},
  "startDate": {DateTime},
  "endDate": {DateTime},
  "build": {int},
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
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string   |                             | Name of the new test plan.
| description | string   |                             | Description of the new test plan.
| area.name   | string   | Project root area      | Name of the area in which to create the test plan.
| iteration   | string   | Project root iteration | Name of the iteration in which to create the test plan.
| startDate   | DateTime | Current date                | Start date for test plan.
| endDate     | DateTime | Start date + 7 days         | End date for test plan.
| build       | int      |                             | ID of the build to test.
| state       | enum { Active, Inactive } |            | State of the test plan.

### Name

[!code-REST [PATCH_testmanagement_testplan_id_json](./_data/plans/PATCH_testmanagement_testplan_id.json)]

### Description

[!code-REST [PATCH__test__projectName__plans__planId_namedescription_json](./_data/plans/PATCH__test__projectName__plans__planId_namedescription.json)]

### Area and iteration
[!code-REST [PATCH__test__projectName__plans__planId_2areaiteration_json](./_data/plans/PATCH__test__projectName__plans__planId_2areaiteration.json)]

### State

[!code-REST [PATCH__test__projectName__plans__planId_23state_json](./_data/plans/PATCH__test__projectName__plans__planId_23state.json)]

## Delete a testplan

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/test/plans/{planId}?api-version={version}
```

| Parameter   | Type     | Default                     | Notes
|:------------|:---------|:----------------------------|:---------------------
| URL
| instance    | string   |                             | TFS server name ({server:port}).
| project     | string   |                             | Name or ID of the project.
| planId      | int      |                             | ID of the test plan to delete.
| Query
| api-version | string   |                             | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__test_plans__planId__json](./_data/plans/DELETE__test_plans__planId_.json)]