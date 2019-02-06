---
title: REST Clients | Extensions for Azure DevOps Services
description: Libraries for calling Azure DevOps Services REST APIs.
ms.assetid: 7cf04c04-4e20-442f-a108-293294a591ad
ms.prod: devops
ms.technology: devops-ecosystem
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# REST Clients

[!INCLUDE [disclaimer](./api/_data/disclaimer.md)]

A REST client simplifies calling [Azure DevOps Services REST APIs](/rest/api/vsts/) from your client-side (JavaScript/TypeScript) extension code.

### Get started

To get started with calling client methods from your extension, see [how to call a REST API](../../develop/call-rest-api.md). In general, the steps are:

1. Construct or acquire an instance of a client
2. Call the method on the client instance, passing any necessary parameters
3. Wait for the response
 * All REST client methods are non-blocking and return a Promise object. A promise represents a future return value (or exception). Typically you will call `then()` on the returned object, passing a function that you want to have called when the response is received.

### Available clients

* [Build](./api/TFS/Build/RestClient/BuildHttpClient2_2.md)
* [Git](./api/TFS/VersionControl/GitRestClient/GitHttpClient2_2.md)
* [Project and team](./api/TFS/Core/RestClient/CoreHttpClient2_2.md)
* [Test management](./api/TFS/TestManagement/RestClient/TestHttpClient2_2.md)
* [Version Control](./api/TFS/VersionControl/TfvcRestClient/TfvcHttpClient2_2.md)
* [Work (agile)](./api/TFS/Work/RestClient/WorkHttpClient2_2.md)
* [Work item tracking](./api/TFS/WorkItemTracking/RestClient/WorkItemTrackingHttpClient2_2.md)

