---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/6/2023
ms.topic: include
---

### GitHub Advanced Security for Azure DevOps (public preview)

GitHub Advanced Security for Azure DevOps is now in public preview! Through Advanced Security, secret scanning, dependency scanning, and code scanning abilities are integrated directly into Azure DevOps. To sign up for the public preview, visit [https://aka.ms/advancedsecurity-signup](https://aka.ms/advancedsecurity-signup). You can learn more about Advanced Security features at [https://aka.ms/advanced-security](https://aka.ms/advanced-security).  

###  Resolved issue that allowed users to bypass restrict global personal access token (PAT) creation

Resolved an issue that allowed users to bypass the ["Restrict global personal access token creation" organization policy](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators?view=azure-devops#restrict-creation-of-global-pats) by using the Visual Studio client.

Any global PATs, i.e. PATs that can access multiple organizations, that have been created using this API will remain active after this gap has been closed. If you are a tenant admin (an Azure DevOps Administrator in Azure AD), you can deactivate these PATs using the [Token Administration APIs](https://learn.microsoft.com/rest/api/azure/devops/tokenadmin/?view=azure-devops-rest-7.0).

To ensure that you can continue creating global PATs, make sure to reach out to your tenant admin that manages organization policies to add you to the allow list for this policy. If you are not on the allow list moving forward, you will not be able to continue creating global PATs.