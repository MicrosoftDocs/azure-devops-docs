---
ms.technology: devops-ecosystem
title: Add a Hub Group | Extensions for Azure DevOps
description: Add a hub group in Azure DevOps for your extension.
ms.assetid: 8186f578-27a0-4130-ace0-0279c863b1a5
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 08/04/2016
---

# Add a hub group

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

We'll create a hub group and add a hub to it.
If you haven't already, [create the Hello hub](./add-hub.md) first, and then follow these steps to create the hub group.

[!INCLUDE [Hub_group](../includes/procedures/create-hub-group.md)]

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
