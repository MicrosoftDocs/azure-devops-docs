---
title: Building Azure DevOps integrations with Microsoft Entra OAuth apps
description: Use Microsoft Entra authentication to integrate with Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 01/08/2025
---

# Build Azure DevOps integrations with Microsoft Entra OAuth apps

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

The Microsoft identity platform offers many ways to authenticate users via [the OAuth 2.0 protocol](/entra/identity-platform/v2-protocols). In these docs, we use OAuth tokens to colloquially refer to [on-behalf-of user flows](/entra/identity-platform/v2-oauth2-on-behalf-of-flow), also known as [delegated flows](/entra/identity-platform/delegated-access-primer), for apps that request tokens to perform actions for their users. 

This differs from apps that perform actions on-behalf-of themselves. For that, you would use service principals and managed identities](service-principal-managed-identity.md).
 
## Resources for developers

* [Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions for access to Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph): Learn how to add delegated permissions from an Azure resource. Instead of Microsoft Graph, select `Azure DevOps` from the list of resources.
* [Read about scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc): Understand the `.default` scope. See the scopes available for Azure DevOps in [our list of scopes](oauth.md#scopes).
* [Request permissions through consent](/entra/identity-platform/consent-types-developer)
* [Use authentication libraries](/entra/identity-platform/reference-v2-libraries) and [code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Explore support and help options for developers](/entra/identity-platform/developer-support-help-options)

## Resources for admins

* [Understand application management in Microsoft Entra ID](/entra/identity/enterprise-apps/what-is-application-management)
* [Add an enterprise application](/entra/identity/enterprise-apps/add-application-portal)
* [Explore the consent experience for applications in Microsoft Entra ID](/entra/identity-platform/application-consent-experience)

## Tips for building & migrating

* Microsoft Entra apps don't natively support Microsoft account (MSA) users for the Azure DevOps resource. If you're building an app that must cater to MSA users or support both Microsoft Entra and MSA users, [Azure DevOps OAuth apps](azure-devops-oauth.md) remain your best option. We're currently working on native support for MSA users through Microsoft Entra OAuth.
* Azure DevOps' resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
* Azure DevOps' resource URI: `https://app.vssps.visualstudio.com`
* Use the `.default` scope when requesting a token with all scopes that the app is permissioned for.
* In a previous Azure DevOps OAuth app, you might have use Azure DevOps user identifiers that don't exist in Microsoft Entra. When migrating to Microsoft Entra, use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities used by each identity provider.

## Related articles

- [Authenticate to Azure DevOps with Microsoft Entra](entra.md)
- [Use service principals & managed identities in Azure DevOps](service-principal-managed-identity.md)
