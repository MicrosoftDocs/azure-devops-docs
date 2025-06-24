---
ms.subservice: azure-devops-service-hooks
ms.topic: how-to
title: Authorize Services 
ms.custom: engagement-fy23
description: Find out how to use the OAuth 2.0 standard to grant a service access your Azure DevOps resources when you integrate that service with Azure DevOps.
ms.assetid: 314a28cd-b2ae-41a0-8dfb-330222c1aed0
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/24/2025
# customer intent: As a developer, I want to use OAuth 2.0 to give an integrated service access to my Azure DevOps resources so that I don't have to give the service my Azure credentials.
---

#  Manage authorization of services to access Azure DevOps 

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

When you integrate a service with Azure DevOps, you can grant the service access to your Azure DevOps resources, such as work items, source code, and build results.

Azure DevOps uses the industry-standard OAuth 2.0 authorization framework to grant the service access to your resources.

- Authorizations are bound to your credentials, so the service can use an authorization to access your resources in Azure DevOps.
- You use your Microsoft account or your work account to authorize the service.
- The service that you authorize doesn't have access to your Azure DevOps credentials.
- You can revoke any authorizations that you grant to other services.

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | At least **Basic** access. |
|**Permissions**| Member of the [Project Collection Administrators group](../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|

## Authorize a service

A typical authorization flow might include the following steps:

1. You're using a service that uses Azure DevOps resources, so the service requests authorization.

1. If you're not already signed in, Azure DevOps prompts you for your credentials.

   :::image type="content" source="media/authorize/vso-sign-in.png" alt-text="Screenshot of a Visual Studio Codespaces sign-in page with fields for a Microsoft email address and password.":::

1. After you sign in, the authorization approval page appears.

   :::image type="content" source="media/authorize/vso-authorize.png" alt-text="Screenshot of the Visual Studio Codespaces Authorize application page. An app name and description and a list of requested permissions are visible.":::

   Services can only request full access to all the resources that are available to you through the REST APIs, so the authorization request might not be specific.

1. You review the request and approve the authorization.

1. The authorized service uses that authorization to access resources in your Visual Studio account.

To ensure an authorization request is legitimate, take the following precautions:

- Look for Azure DevOps branding across the upper portion of the authorization approval page.
- Ensure the authorization approval page URL begins with `https://app.vssps.visualstudio.com/`.
- Pay attention to any HTTPS-related security warnings in your browser.
- Don't give your credentials to other services directly. Enter your credentials only through the authorization approval page in Azure DevOps.

## Manage authorizations

For a list of services that are authorized to access your account, go to [https://app.vssps.visualstudio.com/Profile/View](https://app.vssps.visualstudio.com/Profile/View)
and select **Manage authorizations**.

:::image type="content" source="media/authorize/authorizations.png" alt-text="Screenshot of the Authorizations dialog. The permissions granted to the Zapier service are visible, and a Revoke link is available.":::

You can use this page to revoke authorizations so that services can't access your account on your behalf.
