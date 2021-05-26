---
title: Deprecation of the Work Item Tracking (WIT) and Test Client OM
titleSuffix: Azure DevOps
description: With deprecation of the WIT Client OM, you need to update your code to use REST APIs
ms.technology: devops-agile
ms.assetid: 2C636EA8-6A10-48C1-9620-F792915EBB65
ms.author: liho
author: KathrynEE
ms.topic: reference
monikerRange: "azure-devops"
ms.date: 08/29/2018
---

# Deprecation of the Work Item Tracking (WIT) and Test Client OM

[!INCLUDE [version](../../includes/version-vsts-only.md)]

WIT and Test Client OM are part of the broader TFS SDK. They are a set of SOAP-based APIs that can be used to create tools to run operations against the Azure DevOps. These SOAP-based APIs have been replaced by the set of modern REST-based endpoints. Therefore we are in the process of deprecating the SOAP-based APIs (Client OM) for WIT and Test.

> [!NOTE]
> WIT and Test Client OM for Azure DevOps has been deprecated in latest version Visual Studio 2019 and the [Microsoft.TeamFoundationServer.ExtendedClient](https://www.nuget.org/packages/Microsoft.TeamFoundationServer.ExtendedClient) package. This means, there's no new work item tracking or test functionality included into the Client OM.

## Affected object models

Only the WIT and Test Client OM are being deprecated. Other areas like build and source control aren't on a deprecation schedule at this time.

## Impact

If your organization is using the WIT Client OM in tools that run against Azure DevOps, we recommend you start migrating those tools to stop using the WIT Client OM and start using the new [REST](../index.md) based endpoints.

Updating your code to use REST is vital to ensure your tools work as we release new functionality into Azure Boards and Azure Test.

## Visual Studio warnings

Any references to the latest versions of WIT Client OM result in an obsolete warning. This includes the dlls that come with Visual Studio 2019 and Azure DevOps 2019. Here is an example warning you may receive...

**CS0618: 'WorkItemType' is obsolete: 'for more information, see documentation at <https://aka.ms/witclientom>'**

![warning message in Visual Studio](media/wit-client-om-deprecation-vs.png)

## Q&A

### How do I fix my tools?

First thing you should investigate and determine if the tool is still needed. We have found that many organizations create a tool for a specific reason for a short period of time. Then for one reason or another, that tool continues to run when it's no longer needed. For this scenario, you can shut down the tool.

If the tool is still of use, you need to re-refactor that tool using the REST based [.NET client libraries](./dotnet-client-libraries.md). Refactoring requires some reaction work on your part to remove references to the old WIT Client OM and replace them with the appropriate .NET Client Libraries.

We have also put together this handy [migration guide](./migration-guide.md) with [sample code](https://github.com/Microsoft/azure-devops-wit-client-om-migration-guide) to aid your transition from WIT Client OM to the REST-based .NET Client libraries.

## Resources

- [Migration Guide](./migration-guide.md)
- [Azure DevOps Services REST API Reference](../index.md)
- [.NET client libraries for Azure DevOps](./dotnet-client-libraries.md)
- [Understanding Rate limits](./rate-limits.md?tabs=new-nav)
- [Integration Best Practices](./integration-bestpractices.md)
- [Sample Code on GitHub](https://github.com/Microsoft/vsts-dotnet-samples)
