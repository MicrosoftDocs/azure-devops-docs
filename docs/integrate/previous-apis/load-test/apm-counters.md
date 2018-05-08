---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test APM Counters | REST API Reference for Visual Studio Team Services 
description: Work with Cloud Load Test programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: 95d612be-2069-4a36-8b1d-7a4c287abae7
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Application performance management (APM) counters
[!INCLUDE [API_version](../_data/version.md)]

Application Performance Management ([APM](https://en.wikipedia.org/wiki/Application_performance_management)) systems are
commonly used in conjunction with load testing solutions to
monitor performance and availability of software applications under realistic load scenarios, and helps in diagnosing
and fixing problems to maintain an expected level of service.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of counters

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/apm/counters
```

Returns counters for application component that can be monitored by load test runs.

| Parameter     | Type    | Notes
|:--------------|:--------|:-------------------------------------------------------------------------------------------------------------
| account       | string  | Visual Studio Team Services account.
| Query
| applicationId | string  | Filter by APM application identifier. See [APM Applications](./apm-applications.md). applicationId should be of the form pluginType~YourSpecificApplicationId

[!code-REST [GET__ApmCounters_json](./_data/apmcounters/GET__ApmCounters.json)]
