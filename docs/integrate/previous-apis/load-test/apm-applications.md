---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test APM Applications | REST API Reference for Visual Studio Team Services 
description: Work with cloud load testing programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: 467c323a-30a3-4565-8e96-806b158b88b0
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# APM applications
[!INCLUDE [API_version](../_data/version.md)]

Application Performance Management ([APM](https://en.wikipedia.org/wiki/Application_performance_management)) systems are
commonly used in conjunction with load testing solutions to
monitor performance and availability of software applications under realistic load scenarios, and helps in diagnosing
and fixing problems to maintain an expected level of service.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of applications

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/apm/applications
```

Returns a list of application components that can be monitored by load test runs.

| Parameter       | Type    | Notes
|:----------------|:--------|:-------------------------------------------------------------------------------------------------------------
| account         | string  | Visual Studio Team Services account.
|Query
| pluginType      | string  | Filters the results based on the plugin type. See [APM Plugins](./apm-plugins.md).

[!code-REST [GET__ApmApplications__type__json](./_data/apmapplications/GET__ApmApplications__type_.json)]

