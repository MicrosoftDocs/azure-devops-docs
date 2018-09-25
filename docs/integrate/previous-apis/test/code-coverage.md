---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Code coverage | REST API Reference for Team Foundation Server
description: Work with code coverage programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 459B4485-EAFB-445D-BAA1-EF7A913BD282
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Code coverage
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get code coverage data for a build

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/codeCoverage?api-version={version}[&buildId={int}&flags={int}]
```

| Parameter   | Type                                   | Notes
|:------------|:---------------------------------------|:------------------------
| URL
| instance    | string                                 | TFS server name ({server:port}).
| project     | string                                 | Name or ID of the project.
| Query
| api-version | string                                 | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| buildId     | int                                    | ID of the build for which code coverage data needs to be fetched.
| flags       | enum { Modules, Functions, BlockData } | Value of flags determine the level of code coverage details to be fetched.<br/>Flags are additive.                  

[!code-REST [GET__test_codeCoverage_buildId-_buildIdParam__flags-7_json](./_data/codeCoverage/GET__test_codeCoverage_buildId-_buildIdParam__flags-7.json)]

## Get code coverage data for a test run

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/test/runs/{run}/codeCoverage?api-version={version}[&flags={int}]
```

| Parameter   | Type                                   | Notes
|:------------|:---------------------------------------|:------------------------
| URL
| instance    | string                                 | TFS server name ({server:port}).
| project     | string                                 | Name or ID of the project.
| run         | int                                    | ID of the test run for which code coverage data needs to be fetched.
| Query
| api-version | string                                 | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| flags       | enum { Modules, Functions, BlockData } | Value of flags determine the level of code coverage details to be fetched.<br/>Flags are additive.                  

[!code-REST [GET__test_runs__runId__codeCoverage_flags-7_json](./_data/codeCoverage/GET__test_runs__runId__codeCoverage_flags-7.json)]