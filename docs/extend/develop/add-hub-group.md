---
ms.prod: devops
ms.technology: devops-ecosystem
title: Add a Hub Group | Extensions for Azure DevOps Services
description: Add a hub group in Azure DevOps Services for your extension.
ms.assetid: 8186f578-27a0-4130-ace0-0279c863b1a5
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Add a hub group

We'll create a hub group and add hub to it.
If you haven't already, [create the Hello hub](./add-hub.md) first,
then follow these steps to create the hub group.

[!INCLUDE [Hub_group](../_shared/procedures/create-hub-group.md)]

Here's the complete extension manifest with Hello in the samples hub group.

```json
{
	"namespace": "Fabrikam.myextension",
	"name": "My Extension",
	"description": "This is my first extension",
	"version": "1.0",
	"provider": {
		"name": "Fabrikam Fiber Inc"
	},
	"baseUri": "https://localhost:port",
	"icon": "images/logo.png",
	"links": {
		"info": "info.html",
		"support": "support.html",
		"termsOfService": "terms-of-service.html"
	},
	"contributions": {
		"vss.web#hubGroups.project": [
			{
				"id": "samples",
				"name": "Samples",
				"order":  30
			}
		],
		"vss.web#hubs": [
			{
				"id": "myhub",
				"name": "Hello",
				"groupId": "samples",
				"uri": "hello-world.html"
			}
		]
	}
}
```