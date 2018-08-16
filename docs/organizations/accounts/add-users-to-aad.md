---
title: Add Azure DevOps Services organization users to your Azure Active Directory
description: Add Azure DevOps Services organization users to your Azure Active Directory
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 22ed079f-0321-4c8b-ab06-a289450fb557
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: 'vsts'
---

<a name="SetUpCurrentUsers"></a>

# Add Azure DevOps Services organization users to your Azure Active Directory

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

If your Azure DevOps Services organization was created with a Microsoft account, you can connect your Azure DevOps Services organization to your organization's directory (tenant) in [Azure Active Directory (Azure AD)](https://azure.microsoft.com/documentation/articles/active-directory-whatis/). Then you can sign in to Azure DevOps Services with the same user name and password that you use with these Microsoft services. You can also enforce policies for accessing your team's critical resources and key assets.

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with Azure DevOps Services.

If your users don't already exist in Azure AD:

1. Sign in to the [Azure classic portal](https://manage.windowsazure.com/) or the [Azure portal](https://portal.azure.com) as global administrator for your organization's directory. See these topics for information about how to sign in:

   * [Add users in the Azure classic portal](https://docs.microsoft.com/azure/active-directory/active-directory-create-users)
   * [Add users in the Azure portal](https://docs.microsoft.com/azure/active-directory/active-directory-users-create-azure-portal)
   * [Why am I asked to choose between a "work or school account" and a "personal account"?](faq-azure-access.md#ChooseOrgAcctMSAcct)

1. Add the sign-in addresses for all of your Azure DevOps Services organization users to your directory. Include yourself as the Azure DevOps Services organization owner, if you're not already in the directory. 

   What does an example directory look like?
  
   Suppose Jamal is an Azure AD global administrator at Fabrikam and is listed in the Fabrikam directory with his work account (jamalhartnett@fabrikam.com). He's also the Azure DevOps Services organization owner and a user with a Microsoft account (jamalhartnett@live.com). He wants to keep his work history, so he adds his Microsoft account to the Fabrikam directory. If Jamal doesn't need his work history, he can use his work account with Azure DevOps Services. To free up the access used by his Microsoft account, he must change the Azure DevOps Services organization owner to his work account. 

   Nicole is user at Fabrikam. She has a work organization account (nicolezamora@fabrikam.com) that shares the same sign-in address as her Microsoft account. Nicole continues to work seamlessly with the same sign-in address.

   Here's what the Fabrikam directory might look like in the Azure classic portal after Jamal adds users from his Azure DevOps Services organization:
    
   ![Directory after adding users](_img/manage-work-access/azureaddmembers3.png)

   For more information about how to set up users, see this [FAQ](faq-azure-access.md#faq-users).

1. After adding your organization users to your directory, connect your Azure DevOps Services organization to your directory. 

