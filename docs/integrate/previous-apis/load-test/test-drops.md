---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test Drops | REST API Reference for Visual Studio Team Services 
description: Work with Cloud Load Test programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: c97501dd-e51d-41ba-a1c0-345c738e7bc0
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Load test drops
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a test drop

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/testdrops/{testdropid}
```

| Parameter      | Type     | Required | Description |
|:---------------|:---------|:---------|:------------|
|URL
| account        | string   | Yes      | Visual Studio Team Services account.
| testDropId     | string   | Yes      | Identifier of the test drop. |

[!code-REST [GET__TestDrops__testDropId__json](./_data/testdrops/GET__TestDrops__testDropId_.json)]

## Create a test drop

Creates a new test drop. Refer to [Test Drop Type](types.md#testdrop) for the detailed description of the test drop resource type.
The test drop enables users to upload test specific data, such as binaries, data files and configuration.
The upload of all the necessary test files must be complete before a test run can be queued. If some of the required files are missing
or incomplete, the test run creation can fail.

```no-highlight
POST https://{account}.vsclt.visualstudio.com/_apis/clt/testdrops
```

| Parameter      | Type    | Required | Description |
|:---------------|:--------|:---------|:------------|
|URL
| account        | string  | Yes      | Visual Studio Team Services account.
|Payload
| dropType       | string  | No       | The type of the test drop. Currently, only ```TestServiceBlobDrop``` is supported. |

[!code-REST [POST__TestDrops__dropType__json](./_data/testdrops/POST__TestDrops__dropType_.json)]
