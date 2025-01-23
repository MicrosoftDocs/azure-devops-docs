---
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
title: Integrating custom apps and third party services with Azure DevOps
description: Overview of integrating with Azure DevOps.
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/15/2021
---

# Integrate applications  

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

You can build custom applications or services that integrate with Azure DevOps by using the **REST APIs** to make direct HTTP calls, or use our **.NET Client Libraries**.

Along with interacting with Azure DevOps in your application, you can also integrate with popular third-party services such as Slack or Jenkins.

To get started, see: 

- [Create a bug](./quickstarts/create-bug-quickstart.md)
- [Get work items using queries](./quickstarts/work-item-quickstart.md)

# Integrating Applications with Azure DevOps

Integrating Azure DevOps with other tools and services not only enhances team collaboration but also streamlines workflows across the software development lifecycle. Whether you're building custom integrations or using off-the-shelf services, understanding the prerequisites is essential.

# Prerequisites for Integration

Before starting the integration process, ensure the following: 

- **Access:** Ensure proper permissions and use secure authentication (PATs or OAuth)
- **API knowledge:** Understand Azure DevOps REST API and the target tool’s API 
- **Data mapping:** Identify and align fields and data types between systems, ensuring compatibility in field names, formats, and value ranges 
- **Network and Connectivity:** Ensure your network supports API calls, webhook notifications, and connectivity between Azure DevOps and self-hosted tools

[OpsHub Integration Manager (OIM)](https://www.opshub.com/products/opshub-integration-manager/) allows you to integrate Azure DevOps (Server and Services) with other systems. The tool: 

- Integrates work items (standard and custom), test entities, areas, iterations, pipelines 
- Syncs comments, attachments, links, images, mentions, project movements, and entity deletions  
- Scales across 1000+ projects 
- Supports custom integrations  
- Deploys on-premise or on-cloud 
- Preserves history
- Supports bidirectional integration

## Resources

- [REST API reference](/rest/api/azure/devops/)
