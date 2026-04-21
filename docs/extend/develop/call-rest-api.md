---
ms.subservice: azure-devops-ecosystem
ms.custom: devx-track-js, UpdateFrequency3
title: Call a REST API
titleSuffix: Azure DevOps
description: Call Azure DevOps REST APIs from your extension using the REST client services.
ms.assetid: 99794e1e-0127-4e65-83fb-93a71f496d93
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Call a REST API

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

To call a REST API from your extension, get the client service first, and then use that to call the API.

[!INCLUDE [rest-api-docs-rollout](../../includes/rest-api-docs-rollout.md)]

## Call an API

Add the scope `"scopes": ["vso.work"],` to your `vss-extension.json` to use the work item tracking client.

[!INCLUDE [REST](../includes/procedures/call-rest-api-js.md)]

## Related content

- [Azure DevOps REST API reference](/rest/api/azure/devops/)
- [Extension manifest reference](manifest.md)
