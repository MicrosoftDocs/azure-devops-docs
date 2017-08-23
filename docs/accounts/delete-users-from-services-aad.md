---
title: Delete users from Team Services connected to Azure AD
description: Delete users from Team Services connected to Azure AD
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: eb0d51c2-fb28-4c55-9fcd-33a5942130f0
ms.manager: douge
ms.author: estfan
ms.date: 1/19/2017
---

#	Delete users from Team Services connected to Azure AD

**Team Services**

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.


You can just [delete the user from each Team Services account](delete-account-users.md) 
where you need to remove them. If you delete the user only from Azure AD, they may still show up in Team Services, but 
they won't be able to sign in.

0.  [Sign in to the Azure classic portal](https://manage.windowsazure.com/) 
as the directory administrator in Azure.

	> [!NOTE]
	> You can find the connected Azure AD 
	> only through the Azure classic portal.

0.  Go to **Visual Studio Team Services**. 
Find the Azure AD that's connected to your 
Team Services account.

    ![Find the directory connected to your account](_img/manage-work-access/azurefindconnecteddirectory.png)

###	Delete users from Azure AD

0.	Follow [these steps](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-delete-user-azure-portal) on the azure portal.

0.  [Remove the user](delete-account-users.md) 
from your Team Services account and reassign their access levels, if necessary.



[Troubleshooting Q&A](faq-azure-access.md)

