---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Test Counter Instances | REST API Reference for VSTS 
description: Work with Cloud Load Test programmatically using the REST APIs for VSTS .
ms.assetid: a50ec456-6c46-4f74-928d-4f5a0404574f
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Load test counter instances
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of counter instances

```no-highlight
GET https://{account}.vsclt.VisualStudio.com/_apis/clt/testruns/{testrunId}/counterinstances
```

Returns a list of counter instances that are being monitored by the load test run.

| Parameter       | Type    | Notes
|:----------------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account         | string  | VSTS organization.
| testrunid       | string  | The test run identifier.
| Query
| groupNames      | string  | Comma separated names of counter groups, such as 'Application', 'Performance' and 'Throughput'

[!code-REST [GET__CounterInstances__run__json](./_data/counterinstances/GET__CounterInstances__run_.json)]
