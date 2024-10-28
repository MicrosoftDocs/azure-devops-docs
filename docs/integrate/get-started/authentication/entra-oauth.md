---
ms.topic: how-to
title: Building a Microsoft Entra OAuth app for Azure DevOps
description: Use Microsoft Entra authentication to integrate with Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/28/2024
---

# Building for Azure DevOps with Microsoft Entra OAuth Apps

> [!IMPORTANT]
> When creating a new OAuth 2.0 app, start here with Entra OAuth apps as [Azure DevOps OAuth apps](azure-devops-oauth.md) are planned for deprecation in 2026. [Learn more in our blog post](https://devblogs.microsoft.com/devops/?p=69702).

## Microsoft Entra ID OAuth
When you create a [Microsoft Entra ID OAuth app](/entra/identity-platform/v2-protocols), your app is issued Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration. 

Microsoft Entra ID is a separate Microsoft product with its own platform. On Microsoft Entra, you can register an application to access Azure tenants and define permissions needed from Azure resources, of which Azure DevOps is considered one. Microsoft Entra apps and Azure DevOps apps are separate entities with no knowledge of each other. The means to authenticate your application differs from Microsoft Entra OAuth to Azure DevOps OAuth and we recommend reading the Microsoft Entra documentation thoroughly to understand the new functionality available via Microsoft Entra and the [different expectations](/entra/identity-platform/application-model) of you during setup.

### Why choose Microsoft Entra?
As a leading identity and access management (IAM) provider, [Microsoft Entra ID](/entra/fundamentals/whatis) is focused on the needs of companies that need to manage team members and safeguard company resources. Entra ID offers many features, of which application development and management is one of them. The Microsoft Entra application model offers a few advantages over the Azure DevOps OAuth app model that make them more appealing to app developers.

**1. Broader reach inside and outside of Microsoft**

By building an app on Microsoft Entra, you have a broader reach through the rest of the Microsoft ecosystem. One Microsoft Entra app can be used to access multiple Microsoft products, making app credential management far simpler. Teams offering SaaS products may consider creating a preintegrated application that appears alongside other popular apps in the [Microsoft Entra app gallery](/entra/identity/enterprise-apps/overview-application-gallery). 

**2. Greater admin visibility, consent, and management**

[Trusted tenant admins can manage](/entra/identity/enterprise-apps/what-is-application-management) which apps access company resources, who in the organization can use the app, and how consent can be obtained. Azure DevOps OAuth doesn’t know knowledge of tenants or their admins, relying exclusively on users to authorize access to potentially sensitive data. Users that previously authorized access to a long-forgotten app are leaving the door open for later potential infiltration. Admin oversight provides an extra set of eyes with appropriate review processes and helpful cleanup of unused or unauthorized apps. 

**3. Tighter conditional access controls**

[Conditional access policies](/azure/devops/organizations/accounts/change-application-access-policies) make it a breeze to set up the appropriate access controls on which users can and can't access your organization through an Entra app. Azure DevOps OAuth app sits outside of the Microsoft Entra ecosystem and doesn’t adhere to all conditional access policies. 

**4. Self-serve app configuration**

Changing app scopes and app ownership on an Entra app is a relative breeze compared to Azure DevOps OAuth apps. App developers reach out to our customer support team to make changes on Azure DevOps OAuth apps, but in Microsoft Entra the power to change scopes is returned to the developer. App ownership can even be shared between multiple users and not restricted to a single user which may pose a problem if said user leaves the company in the future. 

**5. Sign-in logs available**

Entra logs [all “sign-ins"](/entra/identity/monitoring-health/concept-sign-ins) into an Azure tenant, which includes your internal apps and resources. This additional information can offer some more insight into who is using your apps that aren't available through our auditing.

### Helpful resources
Building on a new platform can be overwhelming. We provide some helpful links we think might be useful to the OAuth app development process on Microsoft Entra. For developers switching over from Azure DevOps OAuth to Microsoft Entra OAuth, we provide helpful tips to consider during your migration effort.

#### Good resources for developers
* [Microsoft identity platform and OAuth 2.0 On-Behalf-Of flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow)
* [Understanding delegated access](/entra/identity-platform/delegated-access-primer) 
* [Quickstart: Register an application with the Microsoft identity platform](/entra/identity-platform/quickstart-register-app)
* [Add permissions to access Microsoft Graph](/entra/identity-platform/quickstart-configure-app-access-web-apis#add-permissions-to-access-microsoft-graph): Useful to learn how to add delegated permissions from an Azure resource. Instead of Microsoft Graph, select `Azure DevOps` from the list of resources instead.
* [Scopes and permissions in the Microsoft identity platform](/entra/identity-platform/scopes-oidc): Read up on the `.default` scope. See the scopes available for Azure DevOps in [our list of scopes](oauth.md#scopes).
* [Requesting permissions through consent](/entra/identity-platform/consent-types-developer)
* [Authentication libraries](/entra/identity-platform/reference-v2-libraries) and [code samples](/entra/identity-platform/sample-v2-code?tabs=apptype)
* [Manage personal access tokens via API](../../../organizations/accounts/manage-personal-access-tokens-via-api.md): Using the PAT lifecycle management APIs requires Entra tokens and our docs and the [associated sample app](https://github.com/microsoft/azure-devops-auth-samples/tree/master/PersonalAccessTokenAPIAppSample) might be a helpful example for setting up a Microsoft Entra app to use Azure DevOps REST APIs.
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
* When migrating an existing app, you may be using Azure DevOps user identifiers that don't exist in Microsoft Entra. Use the [ReadIdentities API](/rest/api/azure/devops/ims/identities/read-identities) to resolve and match the different identities in use.

## App-only flows on Microsoft Entra
Microsoft Entra OAuth is the recommended solution for building apps to access Azure DevOps services on-behalf-of a consenting user.

If you're looking to build an application to act on-behalf-of itself, then look into our documentation on [service principal support](service-principal-managed-identity.md). In these docs, we elaborate more on how to set up a service principal or managed identity that doesn't rely on user permissions to action on organization resources, instead relying solely on its own permissions. This authentication mechanism is the recommended authentication for building out automated tooling for teams.
