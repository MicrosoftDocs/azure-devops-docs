---
author: gloridelmorales
ms.author: glmorale
ms.date: 6/6/2023
ms.topic: include
---

###  Resolved issue that allowed users to bypass restrict global personal access token (PAT) creation

Resolved an issue that allowed users to bypass the ["Restrict global personal access token creation" organization policy](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators#restrict-creation-of-global-pats) by using the Visual Studio client.

Any global PATs, i.e. PATs that can access multiple organizations, that have been created using this API will remain active after this gap has been closed. If you are a tenant admin (an Azure DevOps Administrator in Azure AD), you can deactivate these PATs using the Token Administration APIs.

To ensure that you can continue creating global PATs, make sure to reach out to your tenant admin that manages organization policies to add you to the allow list for this policy. If you are not on the allow list moving forward, you will not be able to continue creating global PATs.
