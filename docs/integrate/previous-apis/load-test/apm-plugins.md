---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test APM Plugins | REST API Reference for Visual Studio Team Services 
description: Work with Cloud Load Test programmatically using the REST APIs for Visual Studio Team Services .
ms.assetid: 3f589e93-8035-4e8b-91dd-701710e03d72
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# APM plugins
[!INCLUDE [API_version](../_data/version.md)]

Application Performance Management ([APM](https://en.wikipedia.org/wiki/Application_performance_management)) systems are
commonly used in conjunction with load testing solutions to
monitor performance and availability of software applications under realistic load scenarios, and helps in diagnosing
and fixing problems to maintain an expected level of service.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of plugins

Returns the list of applications types that can be monitored by the load test runs.

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/apm/plugins
```

| Parameter       | Type    | Notes
|:----------------|:--------|:-------------------------------------------------------------------------------------------------------------
| account         | string  | Visual Studio Team Services account.

[!code-REST [GET__ApmPlugins_json](./_data/apmplugins/GET__ApmPlugins.json)]

## Get a plugin

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/apm/plugins/{type}
```

| Parameter       | Type    | Notes
|:----------------|:--------|:-------------------------------------------------------------------------------------------------------------
| account         | string  | Visual Studio Team Services account.
| type            | string  | Currently ```ApplicationInsights``` is the only available plugin type.

[!code-REST [GET__ApmPlugins__type__json](./_data/apmplugins/GET__ApmPlugins__type_.json)]

