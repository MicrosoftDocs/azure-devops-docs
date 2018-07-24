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
ms.date: 06/04/2018
monikerRange: 'vsts'
---

# Delete users from VSTS connected to Azure AD

**VSTS**

For more information, see the [conceptual overview](access-with-azure-ad.md) for using Azure AD with VSTS.

You can simply [delete the user from each VSTS organization](delete-organization-users.md) 
where you need to remove them. If you delete the user only from Azure AD, they may still show up in VSTS, but 
they won't be able to sign in.

1. [Sign in to the Azure classic portal](https://manage.windowsazure.com/) as the directory administrator in Azure.

    > [!NOTE]
    > You can find the connected Azure AD 
    > only through the Azure classic portal.

2. Go to **Azure Active Directory**. Find the Azure AD that's connected to your VSTS organization.

    ![Find the directory connected to your organization](_img/manage-work-access/azurefindconnecteddirectory.png)

3. Follow [these steps](https://docs.microsoft.com/en-us/azure/active-directory/active-directory-users-delete-user-azure-portal) on the Azure portal.

4. [Remove the user](delete-organization-users.md) from your VSTS organization and reassign their access levels, if necessary.
