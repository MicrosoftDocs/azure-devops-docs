---
ms.topic: how-to
title: Building an Entra OAuth app for Azure DevOps
description: Use Entra authentication to integrate with Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/28/2024
---

# Building for Azure DevOps with Entra OAuth Apps

> [!IMPORTANT]
> When creating a new OAuth 2.0 app, use Entra OAuth apps as [Azure DevOps OAuth apps](azure-devops-oauth.md) are planned for deprecation in 2026. [Learn more in our blog post](https://devblogs.microsoft.com/devops/?p=69702).

## Microsoft Entra ID OAuth
When you create a Microsoft Entra ID OAuth app, your app is issued Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration.

### Why choose Entra?
As a leading identity and access management provider, Microsoft Entra ID has been heavily focused on the needs of companies looking to easily manage team members and safeguard company resources. 

**1. Broader reach inside and outside of Microsoft**

By building an app on Entra, you’ll have a much broader reach through the rest of the Microsoft ecosystem. One Entra app can be used to access multiple Microsoft products, making app credential management far simpler. Teams offering SaaS products may consider creating a preintegrated application that will appear alongaside other popular apps in the Microsoft Entra app gallery. 

**2. Greater admin visibility, consent, and management**
Azure tenants can be used to allow trusted admins to manage which apps access company resources, who in the organization can use the app, and how consent can be obtained for these apps. Azure DevOps OAuth doesn’t know knowledge of tenants or their admins, relying exclusively on users to authorize access to potentially sensitive data. Users may have previously authorized access to a long-forgotten app, leaving the door open for later potential infiltration. Admin oversight provides an additional set of eyes to make sure that any appropriate review processes are followed and adhered to and allowing them to even clean up unused or unauthorized apps. 

**3. Tighter conditional access controls**

Conditional access policies make it a breeze to set up the appropriate access controls on which users can and cannot access your organization through an Entra app. Our own Azure DevOps OAuth app sits outside of the Entra ecosystem and doesn’t adhere to all conditional access policies. 

**4. Self-serve app configuration**

Changing app scopes and app ownership on an Entra app is a relative breeze compared to Azure DevOps OAuth apps. We’ve had app developers reach out to our customer support team to make changes, but in Entra the power to change scopes is returned to the developer. App ownership can even be shared between multiple users and not restricted to a single user which may pose a problem if said user leaves the company in the future. 

**5. Sign-in logs available**

Entra logs all “sign-ins" into an Azure tenant, which includes your internal apps and resources. This additional information can offer some more insight into who is using your apps that is not available through our auditing.   

### Helpful resources
Building on a new platform can be overwhelming. We provide some helpful links we think might be useful to the OAuth app development process on Microsoft Entra. For folks migrating from Azure DevOps OAuth to Microsoft Entra OAuth, we provide helpful tips to consider during your migration effort.

#### Good resources for developers
* [OAuth 2.0 and OpenID Connect (OIDC) in the Microsoft identity platform](/entra/identity-platform/v2-protocols)
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow)
* [Understanding delegated access](/entra/identity-platform/delegated-access-primer) 
* [Quickstart: Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions to access Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph)
  * Helpful to understand how to add delegated permissions from the Azure DevOps resource, instead of Microsoft Graph. When you create an app, select `Azure DevOps` from the list of resources instead.
  * Azure DevOps OAuth doesn't support application permissions through Microsoft Entra. To learn more about application identity support for Azure DevOps, read more about [managed identities and service principal support](service-principal-managed-identity.md).
* [Scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc)
  * Read up on the `.default` scope.
* [Requesting permissions through consent](/entra/identity-platform/consent-types-developer)

* [Microsoft identity platform authentication libraries](/entra/identity-platform/reference-v2-libraries)
* [Microsoft identity platform code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Manage personal access tokens via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md)
  * A guide on setting up an Entra app used for our PAT lifecycle management APIs. This walkthrough and its [associated sample app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) might be helpful for you to get started with Microsoft Entra.
* [Support and help options for developers](/entra/identity-platform/developer-support-help-options)

#### Good resources for admins
* [What is application management in Microsoft Entra ID?](/entra/identity/enterprise-apps/what-is-application-management)
* [Quickstart: Add an enterprise application](/entra/identity/enterprise-apps/add-application-portal)
* [Consent experience for applications in Microsoft Entra ID](/entra/identity-platform/application-consent-experience)

#### Building & migrating tips
* **Good-to-know Azure DevOps IDs:**
  * Microsoft Entra resource identifier: `499b84ac-1321-427f-aa17-267ca6975798`
  * Resource Uri: `https://app.vssps.visualstudio.com`
  * Use the `.default` scope when requesting a token with all scopes that the app is permissioned for.
* When building an Azure DevOps OAuth app, you may be using Azure DevOps user identifiers that don't exist in Microsoft Entra. Use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities in use.

## App-only flows on Entra
Entra OAuth is the recommended solution for building apps to access Azure DevOps services on-behalf-of a consenting user.

If you're looking to build an application to act on-behalf-of itself, relying solely on its own permissions and access to resources, then look into our documentation on [service principal support](service-principal-managed-identity.md) on Entra, which elaborates more on how to set up an application service principal or managed identity that does not rely on user permissions to operate on organization resources. This is the recommended authentication for building out automated tooling for teams.
