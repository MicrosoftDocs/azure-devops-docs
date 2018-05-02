---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test Counter Samples | REST API Reference for Visual Studio Team Services 
description: Work with Cloud Load Test programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: 77c82d0a-99e9-48ba-a027-b216fddabe76
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Load test counter samples
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of counter samples

```no-highlight
POST https://{account}.vsclt.VisualStudio.com/_apis/clt/testruns/{testrunId}/countersamples
```
```json
{
    "count": 2,
    "value": [
        {
          "counterInstanceId": "Els~-1662214188",
          "fromInterval": 0,
          "toInterval": 5
        },
        {
          "counterInstanceId": "ApplicationInsights~0",
          "fromInterval": 0,
          "toInterval": 2
        }
    ]
}
```

Returns a list of counter samples that are collected by the load test run matching specified instance query filters.

| Parameter            | Type    | Notes
|:---------------------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account              | string  | Visual Studio Team Services account.
| testrunId            | string  | The test run identifier.
| Request Body
| fromInterval         | int     | The offset in seconds from start of the run from which samples are required. Default indicates the beginning.
| toInterval           | int     | The offset in seconds from start of the run to which samples are required. Default indicates the end.

[!code-REST [POST__CounterSamples__run__json](./_data/countersamples/POST__CounterSamples__run_.json)]



