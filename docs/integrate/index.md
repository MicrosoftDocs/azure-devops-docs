---
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
title: Building custom apps and third party services with Azure DevOps
description: Overview of building apps with Azure DevOps.
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 01/27/2025
---

# Build applications  

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Build custom applications or services that integrate with Azure DevOps to access a user's Azure DevOps resources and perform actions programmatically, instead of needing access through a UI. 

This can be helpful for writing a script to automate a regular to-do item for your team, or building a product offering for customers that pulls the latest status for Azure DevOps. Consider building with Azure DevOps to help you with:
* [Creating new bugs](./quickstarts/create-bug-quickstart.md) discovered by customers
* [Tracking your team's open work items](./quickstarts/work-item-quickstart.md) on a dashboard

To get started, check out the following resources:
* Learn about the different [authentication mechanisms](./get-started/authentication-guidance.md) available to you.
* [Explore the Microsoft Entra Identity platform](./get-started/authentication/entra.md) when integrating with Azure DevOps to build more secure, enterprise-level applications.
* Read up on the basics to use the [Azure DevOps REST API](./how-to/call-rest-api.md), or
* See if our [client libraries](./concepts/dotnet-client-libraries.md) might be a more suitable alternative to making direct API calls.
* [Integrate with a webhook](../service-hooks/overview.md) to receive and action on events.
* [Develop and publish extensions](../extend/overview.md) on the Visual Studio Marketplace to customize or extend the Azure DevOps platform for your team or customers.
* Review our [app development](./concepts/integration-bestpractices.md) and [security best practices](../organizations/security/security-overview.md)
