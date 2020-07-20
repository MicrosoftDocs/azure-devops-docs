---
ms.technology: devops-ecosystem
title: How to Call a REST API | Extensions for Azure DevOps Services
description: How to call a REST API in your extension for Azure DevOps Services.
ms.assetid: 99794e1e-0127-4e65-83fb-93a71f496d93
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 10/18/2019
---

# Call a REST API

To call a REST API from your extension, get the client service first, and then use that to call the API.

[!INCLUDE [rest-api-docs-rollout](../../includes/rest-api-docs-rollout.md)]

## Client services

You can find the [full list of available REST clients and their references here](/previous-versions/azure/devops/docs/extend/reference/client/rest-clients).

## Call an API

> You'll have to add the scope `"scopes": ["vso.work"],` to your `vss-extension.json` to use the work item tracking client.

[!INCLUDE [REST](../includes/procedures/call-rest-api-js.md)]

## Try this next

Display the results of your REST API call [in a Grid](/previous-versions/azure/devops/docs/extend/develop/ui-controls/grido).