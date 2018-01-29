---
title: Add backup billing managers for your VSTS account
description: Add backup billing managers for your VSTS account
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: bd87ec5c-84f2-4efa-bc37-a6999cb9532e
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

#  Add backup billing managers for your VSTS account

**VSTS**



To let others manage billing or make purchases through Visual Studio Marketplace for your VSTS account, 
add **owner** or **contributor** roles to users in the Azure subscription that's linked to your VSTS account.

For for information on billing, see [VSTS billing overview](overview.md).


[Sign in to the Azure portal](https://portal.azure.com/) as the Azure subscription administrator.

Choose the Subscriptions blade, and if there are more than one, choose the subscription to modify.

Then in the IAM screen (shown below) follow the numbered steps:

![access control adding owners and contributors](_img/set-up-billing/ap-add-owncontrib.png)

Owners and contributors of the Azure subscription linked to your VSTS account can make purchases in the 
Marketplace.  Owners can also add these roles to other users.

Learn more about [viewing access level assignments for users](https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-control-manage-assignments#view-access-assignments).

If needed, you can [pay for more users](buy-basic-access-add-users.md).

Learn more about [adding roles in the Azure portal](https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-control-configure#add-access).


[Troubleshooting](faq-billing-setup.md)
