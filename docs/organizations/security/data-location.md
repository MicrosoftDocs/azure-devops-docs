---
title: Data locations for Azure DevOps 
titleSuffix: Azure DevOps Services
description: Learn where your data is stored for Azure DevOps.
ms.topic: concept-article
ai-usage: ai-assisted
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.reviewer: jominana
ms.date: 03/17/2026
monikerRange: 'azure-devops'
---

# Data locations for Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you create an Azure DevOps organization, you choose where to store your data. This article describes the available locations, how customer and profile data is stored, and when Azure DevOps might transfer data outside your selected region.

## Data locations

You can access Azure DevOps data in the following geographical locations:

- Australia
- Brazil
- Canada
- Asia Pacific
- Europe (EU)
- India
- United Kingdom (UK)
- United States (US)

By default, your organization uses the closest location. However, you can choose a different location when you create your organization. If you change your mind later, you can [migrate your organization to a different location](../accounts/change-organization-location.md).

## Customer data

Azure DevOps keeps all customer data within your selected geographical location, with [limited exceptions](#transferring-your-data). Customer data includes source code, work items, test results, geo-redundant mirrors, and offsite backups.

For more information about customer data retention by location, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).  

### Profile data

Azure DevOps stores global information such as user identities and profile data based on user location:

| User location | Datacenter |
|---------------|------------|
| United States | US |
| Europe | EU |
| United Kingdom | UK |
| All other countries and regions | US |

### Token data

Azure DevOps stores token data, such as personal access tokens and Secure Shell (SSH) keys, in a US datacenter.

## Azure DevOps MCP Server

The [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md) runs instances in both Europe and the United States. When you connect, Azure DevOps routes your traffic to the instance with the lowest latency. When you invoke MCP tools, the server calls the Azure DevOps APIs in the region where your organization is hosted and returns the results. The MCP server acts as a pass-through and doesn't store your data.

## Allowlist data for tenant policies

Use groups with your tenant policy allowlists. If you use a named user, the reference to the named user's identity resides in the US, EU, and Southeast Asia (Singapore).

## Transferring your data

Azure DevOps doesn't transfer your data outside your selected location unless it needs to:

- Provide customer support
- Troubleshoot the service
- Comply with legal requirements

Preview, beta, or other prerelease services typically store data in the United States but might store it globally.

> [!NOTE]
> - For builds and releases that run on Microsoft-provided macOS agents, Azure DevOps transfers your data to a GitHub datacenter in the United States. GitHub owns and manages this datacenter with compliance certifications such as [SOC 1 Type 2 and SOC 2 Type 2](https://github.com/security).
> - Because there's only one region in Brazil, Azure DevOps replicates customer data to the South Central US region for disaster recovery and load balancing. For more information, see [Data residency in Azure](https://azure.microsoft.com/global-infrastructure/data-residency/).

Microsoft doesn't control or limit the locations from which you or your users access your data.

## Related content

- [Get started with Azure DevOps](../../get-started/index.yml)
- [Data protection overview](data-protection.md)
