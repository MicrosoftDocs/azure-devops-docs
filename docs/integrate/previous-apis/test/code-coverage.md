---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Code coverage | REST API Reference for Team Foundation Server
description: Work with code coverage programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 459B4485-EAFB-445D-BAA1-EF7A913BD282
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Code coverage

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/codeCoverage?buildId=363&flags=7&api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "configuration": {
        "id": 51,
        "flavor": "Debug",
        "platform": "Any CPU",
        "uri": "vstfs:///Build/Build/363",
        "project": {}
      },
      "state": "0",
      "lastError": "",
      "modules": [
        {
          "blockCount": 2,
          "blockData": "Aw==",
          "name": "fabrikamunittests.dll",
          "signature": "c27c5315-b4ec-3748-9751-2a20280c37d5",
          "signatureAge": 1,
          "statistics": {
            "blocksCovered": 2,
            "linesCovered": 4
          },
          "functions": []
        }
      ],
      "codeCoverageFileUrl": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_api/_build/ItemContent?buildUri=vstfs%3A%2F%2F%2FBuild%2FBuild%2F363&path=%2FBuildCoverage%2FFabrikamUnitTests_20150609.2.Debug.Any%20CPU.51.coverage"
    }
  ],
  "count": 1
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/runs/51/codeCoverage?flags=7&api-version=2.0-preview
```

#### Sample response

```json
{
  "value": [
    {
      "testRun": {
        "id": "51",
        "name": "buildguest@BUILD-0002 2015-06-09 10:32:28_Any CPU_Debug",
        "url": "https://mytfsserver/DefaultCollection/Fabrikam-Fiber-TFVC/_apis/test/Runs/51"
      },
      "state": "0",
      "lastError": "",
      "modules": [
        {
          "blockCount": 2,
          "blockData": "Aw==",
          "name": "fabrikamunittests.dll",
          "signature": "c27c5315-b4ec-3748-9751-2a20280c37d5",
          "signatureAge": 1,
          "statistics": {
            "blocksCovered": 2,
            "linesCovered": 4
          },
          "functions": []
        }
      ]
    }
  ],
  "count": 1
}
```
