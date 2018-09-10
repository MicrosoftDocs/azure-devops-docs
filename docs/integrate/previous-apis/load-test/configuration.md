---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Cloud Load Configuration | REST API Reference for VSTS 
description: Work with Cloud Load Test programmatically using the REST APIs for VSTS .
ms.assetid: c2183aa1-f768-43ed-b720-378d35030902
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Configuration
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get configuration

Gets a list of valid geo-locations ([Azure regions](https://azure.microsoft.com/regions)) available for your account

```no-highlight
GET https://{account}.vsclt.visualstudio.com/_apis/clt/configuration
```

[!code-REST [GET__TestDrops__testDropId__json](./_data/configuration/GET__Configuration_.json)]
