---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: How to Call a REST API | Extensions for VSTS
description: How to call a REST API in your extension for VSTS.
ms.assetid: 99794e1e-0127-4e65-83fb-93a71f496d93
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Call a REST API

To call a REST API from your extension, get the client service first, and then use that to call the API.

## Client services

You can find the [full list of available REST clients and their references here](https://www.visualstudio.com/en-us/docs/integrate/extensions/reference/client/rest-clients).

## Call an API

[!INCLUDE [REST](../_shared/procedures/call-rest-api-js.md)]

## Try this next

Display the results of your REST API call [in a Grid](./ui-controls/grido.md).