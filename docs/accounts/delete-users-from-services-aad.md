---
title: Delete users from VSTS connected to Azure AD
description: Steps for how to delete users from Visual Studio Team Services connected to Azure Active Directory via the Azure portal
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: eb0d51c2-fb28-4c55-9fcd-33a5942130f0
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: 'vsts'
---

#	Delete users from VSTS connected to Azure AD

**VSTS**

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.

You can simply [delete the user from each VSTS account](delete-account-users.md) 
where you need to remove them. If you delete the user only from Azure AD, they may still show up in VSTS, but 
they won't be able to sign in.

0.  [Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
as the directory administrator in Azure.

	> [!NOTE]
	> You can find the connected Azure AD 
	> only through the Azure classic portal.

0.  Go to **VSTS**. 
Find the Azure AD that's connected to your 
VSTS account.

    ![Find the directory connected to your account](_img/manage-work-access/azurefindconnecteddirectory.png)

###	Delete users from Azure AD

0.	Follow [these steps](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-delete-user-azure-portal) on the Azure portal.

0.  [Remove the user](delete-account-users.md) 
from your VSTS account and reassign their access levels, if necessary.


