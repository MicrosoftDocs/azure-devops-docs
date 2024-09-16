---
ms.topic: how-to
title: Building an Azure DevOps Entra OAuth app
description: Helpful guide for migrating away from Azure DevOps OAuth and building an Entra OAuth app instead
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 09/16/2024
---

# Building an Azure DevOps Entra OAuth app

Moving to a new platform can be overwhelming. In this guide, we provide some helpful tips and links we think might be useful to the migration effort.

## Learning more about Entra applications

### Good content for developers
* [OAuth 2.0 and OpenID Connect (OIDC) in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols)
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow)
* [Understanding delegated access](https://learn.microsoft.com/en-us/entra/identity-platform/delegated-access-primer) 
* [Quickstart: Register an application with the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate)
* [Add permissions to access Microsoft Graph](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph)
  * Helpful to understand how to add delegatd permissions from the Azure DevOps resource, instead of Microsoft Graph.
  * Azure DevOps OAuth does not support application permissions through Entra. To learn more about application identity support for Azure DevOps, read more about [managed identities and service principal support](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/service-principal-managed-identity?view=azure-devops).
* [Scopes and permissions in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc)
  * Read up on how to use the `.default` scope
* [Requesting permissions through consent](https://learn.microsoft.com/en-us/entra/identity-platform/consent-types-developer)

* [Microsoft identity platform authentication libraries](https://learn.microsoft.com/en-us/entra/identity-platform/reference-v2-libraries)
* [Microsoft identity platform code samples](https://learn.microsoft.com/en-us/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Support and help options for developers](https://learn.microsoft.com/en-us/entra/identity-platform/developer-support-help-options)

### Good resources for admins
* [What is application management in Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management)
* [Quickstart: Add an enterprise application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal)
* [Consent experience for applications in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/application-consent-experience)

## Migration considerations


### Identifying users


## Related articles

* [Choosing the right authentication method](authentication-guidance.md)
* [Use Microsoft Entra ID OAuth](oauth.md)
* [Manage authorizations](../../../organizations/settings/manage-authorizations.md)
* [Deleting unused Azure DevOps OAuth apps]()
