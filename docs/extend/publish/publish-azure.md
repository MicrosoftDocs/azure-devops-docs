---
ms.subservice: azure-devops-ecosystem
ms.custom: UpdateFrequency3
title: Deploy extension backend to Azure
description: Host your Azure DevOps extension's backend logic on Azure App Service or Azure Functions.
ms.assetid: 86c9d7d9-51ea-4169-bf2e-f95138679a00
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Deploy extension backend to Azure

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If your extension requires backend logic (REST APIs, webhooks, or server-side processing), host that backend on Azure. For extensions that only use client-side code, use [content hosting](../develop/static-content.md) instead—no Azure deployment is needed.

## Choose a hosting option

| Option | Best for |
|--------|----------|
| [Azure App Service](/azure/app-service/overview) | Web APIs and full web applications |
| [Azure Functions](/azure/azure-functions/functions-overview) | Event-driven, serverless backend logic |

## Deploy your backend

1. Create the Azure resource (App Service or Functions app) in the [Azure portal](https://portal.azure.com) or with the [Azure CLI](/cli/azure/).
2. Deploy your backend code using one of these methods:
   - [GitHub Actions](/azure/app-service/deploy-github-actions)
   - [Azure Pipelines](/azure/devops/pipelines/targets/azure-web-app)
   - [Azure CLI](/azure/app-service/deploy-local-git)
3. Update your extension manifest to point to your Azure-hosted backend:

   ```json
   "baseUri": "https://your-app-name.azurewebsites.net/"
   ```

4. [Repackage and update your extension](overview.md) with the new manifest.

## Related content

- [Content hosting](../develop/static-content.md)
- [Develop a web extension](../get-started/node.md)
- [Extension manifest reference](../develop/manifest.md)
