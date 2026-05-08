---
title: Build Azure DevOps integrations with Microsoft Entra OAuth apps
description: "Microsoft Entra OAuth apps: Discover how to build secure Azure DevOps integrations using delegated authentication and enhance your development process."
ms.subservice: azure-devops-security
ms.custom: pat-reduction, UpdateFrequency3
ms.topic: overview
monikerRange: 'azure-devops'
ms.author: chcomley
ms.reviewer: chcomley
author: chcomley
ms.date: 04/02/2026
---

# Build Azure DevOps integrations with Microsoft Entra OAuth apps

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

The Microsoft identity platform offers many ways to authenticate users through [the OAuth 2.0 protocol](/entra/identity-platform/v2-protocols). In this article, *OAuth tokens* refers to [on-behalf-of user flows](/entra/identity-platform/v2-oauth2-on-behalf-of-flow), also known as [delegated flows](/entra/identity-platform/delegated-access-primer), where apps request tokens to perform actions for their users. 

This approach differs from apps that perform actions on-behalf-of themselves. For that approach, use [service principals and managed identities](service-principal-managed-identity.md).
 
## Resources for developers

* [Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions for access to Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph): Learn how to add delegated permissions from an Azure resource. Instead of Microsoft Graph, select `Azure DevOps` from the list of resources.
* [Read about scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc): Understand the `.default` scope. See the scopes available for Azure DevOps in [our list of scopes](oauth.md#available-scopes).
* [Request permissions through consent](/entra/identity-platform/consent-types-developer)
* [Use authentication libraries](/entra/identity-platform/reference-v2-libraries) and [code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Explore support and help options for developers](/entra/identity-platform/developer-support-help-options)

## Resources for admins

* [Understand application management in Microsoft Entra ID](/entra/identity/enterprise-apps/what-is-application-management)
* [Add an enterprise application](/entra/identity/enterprise-apps/add-application-portal)
* [Explore the consent experience for applications in Microsoft Entra ID](/entra/identity-platform/application-consent-experience)

## Tips for building and migrating

* Microsoft Entra apps don't natively support Microsoft account (MSA) users for the Azure DevOps resource. If you're building an app that must cater to MSA users or support both Microsoft Entra and MSA users, [Azure DevOps OAuth apps](azure-devops-oauth.md) remain your best option. Microsoft is currently working on native support for MSA users through Microsoft Entra OAuth.
* Azure DevOps' resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
* Azure DevOps' resource URI: `https://app.vssps.visualstudio.com`
* Use the `.default` scope when requesting a token with all scopes that the app is permissioned for.
* In a previous Azure DevOps OAuth app, you might have used Azure DevOps user identifiers that don't exist in Microsoft Entra. When migrating to Microsoft Entra, use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities used by each identity provider.

## Related content

- [Authenticate to Azure DevOps with Microsoft Entra](entra.md)
- [Use service principals & managed identities in Azure DevOps](service-principal-managed-identity.md)
