---
ms.topic: how-to
title: Authenticate to Azure DevOps with Microsoft Entra ID
description: Use Microsoft Entra ID authentication for secure access to Azure DevOps Services with modern identity management capabilities.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
ai-usage: ai-assisted
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# Authenticate to Azure DevOps with Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]
> **Microsoft Entra ID authentication is the recommended approach** for new applications integrating with Azure DevOps Services. It provides enhanced security, enterprise identity integration, and modern authentication capabilities.

This article explains the benefits of Microsoft Entra ID authentication and guides you through implementing it in your applications.

## Overview

[Microsoft Entra ID](/entra/fundamentals/whatis) is Microsoft's cloud-based identity and access management platform that lets organizations:

- **Manage user identities** and control access to resources
- **Implement enterprise security policies** like multi-factor authentication and Conditional Access
- **Integrate with thousands of applications** including Azure DevOps Services
- **Provide single sign-on (SSO)** across Microsoft and non-Microsoft services

Many Azure DevOps enterprise customers [connect their Azure DevOps organization to Microsoft Entra ID](../../../organizations/accounts/connect-organization-to-azure-ad.md) to use these capabilities and [enhanced security features](../../../organizations/accounts/access-with-azure-ad.md).

> [!NOTE]
> Microsoft Entra ID was previously known as [Azure Active Directory (Azure AD)](/entra/fundamentals/new-name). You might still see references in some Microsoft products and documentation.

## Authentication options

The [Microsoft Identity platform](/entra/identity-platform/) provides two primary authentication patterns for Azure DevOps access:

### User delegation (OAuth)
**Best for**: Interactive applications that act on behalf of users

- Users sign in with their Microsoft Entra ID credentials
- Applications receive delegated permissions to act as the signed-in user
- Supports multi-factor authentication and Conditional Access policies
- Ideal for web applications, desktop apps, and user-facing tools

**Get started**: [Microsoft Entra ID OAuth implementation](entra-oauth.md)

### Application identity (Service principals and managed identities)
**Best for**: Background services and automation scenarios

- Applications authenticate using their own identity (not user credentials)
- Suitable for CI/CD pipelines, background services, and automated tools
- More secure for service-to-service communication
- Supports both service principals and Azure managed identities

**Get started**: [Service principals and managed identities](service-principal-managed-identity.md)

## Benefits of Microsoft Entra ID authentication

Microsoft Entra ID authentication provides significant advantages over legacy Azure DevOps authentication methods:

### Enhanced security
- **Short-lived tokens** (1 hour expiration) reduce risk from compromised credentials
- **Conditional Access policies** protect against token theft and unauthorized access
- **Multi-factor authentication** support for other security layers
- **Advanced threat protection** with real-time risk assessment

### Enterprise integration
- **Single sign-on** across Microsoft and non-Microsoft applications
- **Centralized identity management** for users and applications
- **Policy enforcement** at the organizational level
- **Audit and compliance** capabilities for governance requirements

### Developer experience
- **Modern authentication libraries** (MSAL) with automatic token refresh
- **Consistent identity platform** across all Microsoft services
- **Rich documentation and samples** for quick implementation
- **Active support and development** with regular feature updates

### Comparison with legacy methods

| Feature | Microsoft Entra ID | Personal Access Tokens | Azure DevOps OAuth |
|---------|-------------------|------------------------|-------------------|
| **Token lifespan** | 1 hour (auto-refresh) | Up to 1 year | Configurable |
| **Multi-factor authentication** | ✅ Native support | ❌ Not supported | ❌ Not supported |
| **Conditional Access** | ✅ Full support | ❌ Not supported | ❌ Not supported |
| **Enterprise policies** | ✅ Enforced | ⚠️ Limited | ⚠️ Limited |
| **Audit logging** | ✅ Comprehensive | ⚠️ Basic | ⚠️ Basic |
| **Future investment** | ✅ Active development | ⚠️ Maintenance mode | ❌ Deprecated |

> [!IMPORTANT]
> **Token compatibility**: Microsoft Entra ID tokens and Azure DevOps tokens aren't interchangeable. Applications migrating from Azure DevOps OAuth to Microsoft Entra ID OAuth require user reauthorization.

### Migration from legacy authentication

Organizations increasingly adopt [security policies that restrict Personal Access Token (PAT) creation](../../../organizations/accounts/manage-pats-with-policies-for-administrators.md) due to security risks. Microsoft Entra ID authentication provides secure alternatives for common PAT scenarios.

| PAT scenario | Microsoft Entra alternative |
|------------|------------|
| Authenticate with Git Credential Manager (GCM) | GCM defaults to authenticating with PATs. Set the default credential type to `oauth`. Learn more on our [Git Credential Manager (GCM) page](../../../repos/git/set-up-credential-managers.md) . |
| Authenticate in a build or release pipeline | Use a [service connection with Workload Identity Federation](../../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation). |
| Ad-hoc requests to Azure DevOps REST APIs | Issue a [one-off Microsoft Entra token using Azure CLI](../../../cli/entra-tokens.md).  |

> [!TIP]
> **Have an Azure DevOps PAT scenario with no clear Microsoft Entra token alternative?** Share your scenario in the [Developer Community](https://developercommunity.visualstudio.com/AzureDevOps)!

