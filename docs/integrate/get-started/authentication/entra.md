---
ms.topic: how-to
title: Authenticating to Azure DevOps with Microsoft Entra ID access tokens
description: Use Microsoft Entra authentication to access Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/11/2024
---

# Authenticate with Azure DevOps with Microsoft Entra

## Microsoft Entra ID
Microsoft Entra ID is a separate Microsoft product with its own platform. As a leading identity and access management (IAM) provider, [Microsoft Entra ID](/entra/fundamentals/whatis) is focused on the needs of companies that need to manage team members and safeguard company resources. Microsoft Entra ID offers many features, including application management. 

The Microsoft Entra application model offers a few advantages over the Azure DevOps OAuth app model that make them more appealing to app developers. On Microsoft Entra, you can register an application to access Azure tenants and define permissions needed from Azure resources, of which Azure DevOps is considered one. Azure DevOps exists outside of the construct of Azure tenants.

Microsoft Entra apps and Azure DevOps apps are separate entities with no knowledge of each other. The means to authenticate your application differs from Microsoft Entra OAuth to Azure DevOps OAuth. For one thing, [Microsoft Entra ID OAuth apps](/entra/identity-platform/v2-protocols) are issued Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration. 

### Why choose Microsoft Entra?

**1. Broader reach inside and outside of Microsoft**

By building an app on Microsoft Entra, you have a broader reach through the rest of the Microsoft ecosystem. One Microsoft Entra app can be used to access multiple Microsoft products, making app credential management far simpler. Teams offering SaaS products may consider creating a preintegrated application that appears alongside other popular apps in the [Microsoft Entra app gallery](/entra/identity/enterprise-apps/overview-application-gallery). 

**2. Greater admin visibility, consent, and management**

[Trusted tenant admins can manage](/entra/identity/enterprise-apps/what-is-application-management) which apps access company resources, who in the organization can use the app, and how consent can be obtained. Azure DevOps OAuth doesn’t know knowledge of tenants or their admins, relying exclusively on users to authorize access to potentially sensitive data. Users that previously authorized access to a long-forgotten app are leaving the door open for later potential infiltration. Admin oversight provides an extra set of eyes with appropriate review processes and helpful cleanup of unused or unauthorized apps. 

**3. Tighter conditional access controls**

[Conditional access policies](/azure/devops/organizations/accounts/change-application-access-policies) make it a breeze to set up the appropriate access controls on which users can and can't access your organization through a Microsoft Entra app. Azure DevOps OAuth app sits outside of the Microsoft Entra ecosystem and doesn’t adhere to all conditional access policies. 

**4. Self-serve app configuration**

Changing app scopes and app ownership on a Microsoft Entra app is a relative breeze compared to Azure DevOps OAuth apps. App developers reach out to our customer support team to make changes on Azure DevOps OAuth apps, but in Microsoft Entra the power to change scopes is returned to the developer. App ownership can even be shared between multiple users and not restricted to a single user which may pose a problem if said user leaves the company in the future. 

**5. Sign-in logs available**

Microsoft Entra logs [all “sign-ins"](/entra/identity/monitoring-health/concept-sign-ins) into an Azure tenant, which includes your internal apps and resources. This additional information can offer some more insight into who is using your apps that aren't available through our auditing.

### Developing on Entra

We recommend reading the Microsoft Entra documentation thoroughly to understand the new functionality available via Microsoft Entra and the [different expectations](/entra/identity-platform/application-model) of you during setup. 

We have also provided guides to support your app development for:
* [Microsoft Entra OAuth apps (on-behalf-of user apps)](entra-oauth.md)
* [Microsoft Entra service principals and managed identities (on-behalf-of itself apps)](service-principal-managed-identity.md)

Microsoft Entra OAuth is the recommended solution for building apps to access Azure DevOps services on-behalf-of a consenting user.

If you're looking to build an application to act on-behalf-of itself, then look into our documentation on [service principal support](service-principal-managed-identity.md). In these docs, we elaborate more on how to set up a service principal or managed identity that doesn't rely on user permissions to action on organization resources, instead relying solely on its own permissions. This authentication mechanism is the recommended authentication for building out automated tooling for teams.
