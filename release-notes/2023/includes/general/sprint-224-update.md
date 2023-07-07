---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/11/2023
ms.topic: include
---

### Lift secret expiration check on Azure DevOps OAuth

Azure DevOps OAuth secrets are set to expire every 5 years. At this moment, we do not have a self-service way for customers to rotate these secrets on their own. Customers are advised to reach out to Support when they want to extend these secrets further for another 5 years. Given the lengthy duration of these secret lifetimes and the frequency of which these secret extensions are needed, we've opted to lift the secret expiration check on all Azure DevOps OAuth apps for the time-being.

We recommend that all apps that require more secure secret controls to explore using the [Microsoft Identity platform, aka Azure Active Directory OAuth apps](/azure/active-directory/fundamentals/auth-oauth2), which require more regular secret rotation and have self-service tooling to allow app owners to do so. Azure AD OAuth apps support access to Azure DevOps REST APIs.