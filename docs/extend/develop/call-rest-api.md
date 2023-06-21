---
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-js
title: How to Call a REST API | Extensions for Azure DevOps 
description: How to call a REST API in your extension for Azure DevOps.
ms.assetid: 99794e1e-0127-4e65-83fb-93a71f496d93
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/18/2019
---

# Call a REST API

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To call a REST API from your extension, get the client service first, and then use that to call the API.

[!INCLUDE [rest-api-docs-rollout](../../includes/rest-api-docs-rollout.md)]

## Client services

You can find the [full list of available REST clients and their references here](/previous-versions/azure/devops/extend/reference/client/rest-clients).

## Call an API

> You'll have to add the scope `"scopes": ["vso.work"],` to your `vss-extension.json` to use the work item tracking client.

[!INCLUDE [REST](../includes/procedures/call-rest-api-js.md)]

## Next steps

Display the results of your REST API call [in a Grid](/previous-versions/azure/devops/extend/develop/ui-controls/grido).
