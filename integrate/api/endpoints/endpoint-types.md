---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Service Endpoint Types | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Get the available service endpoint types
ms.ContentId: 81A52B66-E3EB-4212-91A0-60B4430B64BC
---

# Service endpoint types

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of service endpoint types

```no-highlight
GET https://{instance}/defaultcollection/_apis/distributedtask/serviceendpointtypes?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| version       | string   | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [listEndpoints](./_data/endpointTypes/GET__distributedtask_serviceendpointtypes.json)]