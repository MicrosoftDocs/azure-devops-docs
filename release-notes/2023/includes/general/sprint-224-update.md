---
author: gloridelmorales
ms.author: glmorale
ms.date: 7/11/2023
ms.topic: include
---

### Lift secret expiration check on Azure DevOps OAuth

Azure DevOps OAuth secrets are set to expire every 5 years. At this moment, we do not have a self-service way for customers to rotate these secrets on their own. Customers are advised to reach out to Support when they want to extend these secrets further for another 5 years. Given the lengthy duration of these secret lifetimes and the frequency of which these secret extensions are needed, we've opted to lift the secret expiration check on all Azure DevOps OAuth apps for the time-being.

We recommend that all apps that require more secure secret controls to explore using the [Microsoft Identity platform, aka Azure Active Directory OAuth apps](/azure/active-directory/fundamentals/auth-oauth2), which require more regular secret rotation and have self-service tooling to allow app owners to do so. Azure AD OAuth apps support access to Azure DevOps REST APIs. 


### Alert dismissals for dependency scanning alerts in Advanced Security 

You can dismiss any dependency scanning alerts you believe to be a false positive or acceptable risk. These are the same dismissal options for secret scanning and code scanning alerts in Advanced Security that customers can currently use. 

> [!div class="mx-imgBorder"]
> ![Dismiss a dependency scanning alert](../../media/224-general-01.png "image showing how to dismiss a dependency scanning alert")

Customers may need to re-run their detection pipeline with the dependency scanning task as well as ensure they have the `Advanced Security: dismiss alerts` permissions in order to dismiss these alerts. To learn more about alert dismissals, see [Dismiss dependency scanning alerts](../../../../docs/repos/security/github-advanced-security-dependency-scanning.md#dismiss-dependency-scanning-alerts).