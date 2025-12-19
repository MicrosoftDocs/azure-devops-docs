---
ms.subservice: azure-devops-service-hooks
ms.topic: how-to
title: Authorize Services 
ms.custom: engagement-fy23
description: Find out how to use OpenID Connect (OIDC)-based authentication to grant a service access to your Azure DevOps work items, source code, and other resources.
ms.assetid: 314a28cd-b2ae-41a0-8dfb-330222c1aed0
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/24/2025
# customer intent: As a developer, I want to use OpenID Connect (OIDC)-based authentication to give an integrated service access to my Azure DevOps resources so that I don't have to give the service my Azure credentials.
---

#  Manage authorization of services to access Azure DevOps 

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

When you integrate a service with Azure DevOps, you can grant the service access to your Azure DevOps resources, such as work items, source code, and build results.

Azure DevOps uses OpenID Connect (OIDC)-based authentication to grant the service access to your resources.

- Authorizations are bound to your credentials, so the service can use an authorization to access your resources in Azure DevOps.
- You use your Microsoft account or your work account to authorize the service.
- The service that you authorize doesn't have access to your Azure DevOps credentials.

## Prerequisites

| Category | Requirement |
|--------------|-------------|
| **Project access** | [Project member](../organizations/security/add-users-team-project.md). |
| **Access levels** | At least **Basic** access. |
|**Permissions**| Member of the [Project Collection Administrators group](../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|

## Authentication frameworks

When you build an application on top of Azure DevOps REST APIs, you can use OIDC-based authentication by [registering your application in Microsoft Entra ID](/entra/identity-platform/quickstart-register-app). For more information, see [What is the Microsoft identity platform?](/entra/identity-platform/v2-overview).

Some older apps use an implementation of OAuth 2.0 to get access tokens for Azure DevOps resources. Registrations of these Azure DevOps OAuth applications are no longer supported, because Azure DevOps OAuth is slated for deprecation in 2026. For more information, see [No new Azure DevOps OAuth apps beginning April 2025](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps/).

## Authorize a service

A typical authorization flow might include the following steps:

1. You use a service that uses Azure DevOps resources, so the service requests authorization.

1. To initiate the authentication process for the service, the registered app opens a Microsoft Entra ID website that prompts you to select an account.

1. After you select an account, the authorization approval page appears.

   :::image type="content" source="media/authorize/authorize-azure-devops-permissions.png" alt-text="Screenshot of a Microsoft Permissions requested dialog. An app name, a list of requested permissions, and Cancel and Accept buttons are visible.":::

1. You review the request and approve the authorization.

1. The authorized service uses that authorization to access resources in your Azure DevOps organization.

To ensure an authorization request is legitimate, take the following precautions:

- Pay attention to any HTTPS-related security warnings in your browser.
- Don't give your credentials to other services directly. Enter your credentials only through the authorization approval page in Azure DevOps.

## Manage authorizations

When you register an app in Microsoft Entra ID, the app can request tokens from the Microsoft identity platform. An authenticated service can then use a token to access specific protected resources. The lifetime of each token is at most 90 minutes. After a token expires, the service's access to the resources is revoked. For more information, see [Token lifetime](/entra/identity-platform/access-tokens#token-lifetime).

In contrast, apps that are registered with Azure DevOps OAuth can authorize services to access Azure DevOps resources for longer periods of time. For a list of services that are currently authorized to access your account, go to [https://app.vssps.visualstudio.com/Profile/View](https://app.vssps.visualstudio.com/Profile/View) and select **Manage authorizations**.

:::image type="content" source="media/authorize/authorizations.png" alt-text="Screenshot of the Authorizations dialog. The permissions granted to the Zapier service are visible, and a Revoke link is available.":::

You can use this page to revoke authorizations so that services can't access your account on your behalf.
