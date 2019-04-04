---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: Integrating custom apps and third party services with Azure DevOps Services and Team Foundation Server
description: Overview of integrating with Azure DevOps Services and Team Foundation Server
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
ms.manager: jillfra
monikerRange: ">= tfs-2013"
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Integrating with Azure DevOps Services and Team Foundation Server

You can build custom applications or services that integrate with your Azure DevOps Services and Team Foundation Server (TFS) accounts by using the **REST APIs** to make direct HTTP calls, or utilize our **.NET Client Libraries**.

Along with interacting with Azure DevOps Services or TFS in your application, you can also integrate with popular third-party services such as Slack or Jenkins.

## 5-Minute Quickstarts

Check out the quick starts to get you started:

- [Create a bug](./quickstarts/create-bug-quickstart.md)
- [Get work items using queries](./quickstarts/work-item-quickstart.md)

## Concepts

- [Best practices](./concepts/integration-bestpractices.md)
- [.NET client libraries](./concepts/dotnet-client-libraries.md)
- [Authentication](./get-started/authentication/authentication-guidance.md)
- [Service hooks](./concepts/service-hooks.md)
- [REST API Versioning](./concepts/rest-api-versioning.md)
- [Cross-origin resource sharing](./concepts/cross-origin-resource-sharing.md)
- [Rate limits](./concepts/rate-limits.md)
- [Deprecation of Work Item Tracking (WIT) & Test Client OM](./concepts/wit-client-om-deprecation.md)
- [Migration Guide](./concepts/migration-guide.md)

## Samples

- [Custom application samples](./get-started/client-libraries/samples.md)
- [.NET samples for Azure DevOps on GitHub](https://github.com/Microsoft/vsts-dotnet-samples)

## How-to Guides

- [Authenticate with PATs](./get-started/authentication/pats.md)
- [Authenticate with OAuth 2.0](./get-started/authentication/oauth.md)
- [Create service hooks subscriptions programmatically](../service-hooks/create-subscription.md?toc=/azure/devops/integrate/toc.json)

## Reference

- [Service hooks consumers and action reference](../service-hooks/consumers.md?toc=/azure/devops/integrate/toc.json)
- [Service hooks events reference](../service-hooks/events.md?toc=/azure/devops/integrate/toc.json)

## Resources

- [REST API reference](/rest/api/vsts/)
