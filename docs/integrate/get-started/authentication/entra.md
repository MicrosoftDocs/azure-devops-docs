---
ms.topic: how-to
title: Authenticate to Azure DevOps with Microsoft Entra ID
description: Use Microsoft Entra ID authentication for secure access to Azure DevOps Services with modern identity management capabilities.
ms.subservice: azure-devops-security
ms.custom: pat-reduction
ai-usage: ai-assisted
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 09/18/2026
---

# Authenticate to Azure DevOps with Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

[!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

Use this article to choose a Microsoft Entra ID authentication flow for applications that access Azure DevOps Services.

## Overview

[Microsoft Entra ID](/entra/fundamentals/whatis) is Microsoft's cloud-based identity and access management platform that lets organizations:

- Manage user identities and control access to resources.
- Apply security policies such as multifactor authentication and Microsoft Entra Conditional Access to supported sign-in scenarios.
- Integrate with thousands of applications, including Azure DevOps Services.
- Provide single sign-on across Microsoft and non-Microsoft services.

Many Azure DevOps enterprise customers [connect their Azure DevOps organization to Microsoft Entra ID](../../../organizations/accounts/connect-organization-to-azure-ad.md) to use these capabilities and [enhanced security features](../../../organizations/accounts/access-with-azure-ad.md).

> [!NOTE]
> Microsoft Entra ID was previously known as [Azure Active Directory (Azure AD)](/entra/fundamentals/new-name). You might still see references in some Microsoft products and documentation.

## Authentication options

The [Microsoft Identity platform](/entra/identity-platform/) provides two primary authentication patterns for Azure DevOps access.

### User delegation (OAuth)

**Best for**: Interactive applications that act for users

- Users sign in with their Microsoft Entra ID credentials.
- Applications act within the signed-in user's Azure DevOps access level and permissions.
- Multifactor authentication and Microsoft Entra Conditional Access policies evaluate user sign-ins.
- This pattern works well for web applications, desktop apps, and other user-facing tools.

**Get started**: [Microsoft Entra ID OAuth implementation](entra-oauth.md)

### Application identity (service principals and managed identities)

**Best for**: Background services and automation scenarios

- Applications authenticate by using their own identity (not user credentials).
- This pattern works well for continuous integration and continuous delivery (CI/CD) pipelines, background services, and automated tools.
- Add the identity to the Azure DevOps organization and assign the required access level and permissions.
- Use managed identities for Azure-hosted applications. Use service principals with workload identity federation, certificates, or client secrets for other applications.

**Get started**: [Service principals and managed identities](service-principal-managed-identity.md)

## Why use Microsoft Entra ID authentication

Microsoft Entra ID centralizes identity lifecycle and access controls for users and applications.

### Identity and credential controls

- User authentication can use single sign-on, multifactor authentication, and supported Conditional Access policies.
- Managed identities and workload identity federation can avoid stored application secrets in supported scenarios.
- Administrators can disable an identity or change its Azure DevOps access without updating each application.

Conditional Access behavior depends on the identity and authentication flow. For workload identity limitations, see [Service principals and managed identities](service-principal-managed-identity.md#conditional-access).

### Enterprise integration

- Single sign-on across Microsoft and non-Microsoft applications
- Centralized identity management for users and applications
- Policy enforcement for supported identities and sign-in scenarios
- Audit and compliance capabilities for governance requirements

### Developer experience

- Microsoft authentication libraries that acquire and cache tokens
- Consistent identity platform across all Microsoft services
- Rich documentation and samples for quick implementation
- Active support and development with regular feature updates

## Handle access tokens

Treat Microsoft Entra access tokens as sensitive, opaque credentials. Don't parse a token or hard-code its lifetime. Use the expiration information returned with the token, and use Microsoft Authentication Library (MSAL) or Azure Identity to cache tokens and acquire another token when needed. Whether a token can be renewed without user interaction depends on the authentication flow, session state, and applicable policies.

## Migrate from legacy authentication

Azure DevOps OAuth is deprecated, and Microsoft no longer accepts new app registrations as of April 2025. Use [Microsoft Entra ID OAuth](entra-oauth.md) for new applications and migrate existing Azure DevOps OAuth applications. For current deprecation milestones, see the [Azure DevOps OAuth deprecation announcement](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/).

> [!IMPORTANT]
> Microsoft Entra access tokens and Azure DevOps OAuth access tokens aren't interchangeable. Applications that migrate to Microsoft Entra ID OAuth require user reauthorization.

Organizations increasingly adopt [security policies that restrict personal access token (PAT) creation](../../../organizations/accounts/manage-pats-with-policies-for-administrators.md) because of security risks. Microsoft Entra ID authentication provides secure alternatives for common PAT scenarios.

| PAT scenario | Microsoft Entra alternative |
|------------|------------|
| Authenticate with Git Credential Manager (GCM) | Configure GCM to use Microsoft identity OAuth tokens by setting the credential type to `oauth`. GCM normally defaults to PATs, although some cloud-hosted environments default to OAuth. For more information, see [Use Git Credential Manager](../../../repos/git/set-up-credential-managers.md#configure-microsoft-entra-id-authentication-recommended). |
| Authenticate in a build or release pipeline | Use an [Azure DevOps service connection with workload identity federation](../../../pipelines/library/add-devops-entra-service-connection.md) for Azure DevOps resources, or a [service connection with Workload Identity Federation](../../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) for Azure resources. |
| Ad hoc requests to Azure DevOps REST APIs | Issue a [one-off Microsoft Entra token by using the Azure CLI](../../../cli/entra-tokens.md).  |

> [!TIP]
> Do you have an Azure DevOps PAT scenario with no clear Microsoft Entra token alternative? Share your scenario in the [Developer Community](https://developercommunity.visualstudio.com/AzureDevOps).
