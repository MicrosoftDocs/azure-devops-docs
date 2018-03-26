---
title: Add backup billing managers for your VSTS account
description: Add backup billing managers for your VSTS account (Visual Studio Team Services)
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: bd87ec5c-84f2-4efa-bc37-a6999cb9532e
ms.manager: douge
ms.author: chcomley
ms.date: 3/26/2018
---
[//]: # (monikerRange: 'vsts')

#  Add backup billing managers for your VSTS account

**VSTS**

To let others manage billing or make purchases through Visual Studio Marketplace for your VSTS account, 
add **owner** or **contributor** roles to users in the Azure subscription that's linked to your VSTS account.

>[!Note]
>If you're giving access to a user who isn't already in your directory, this user must accept their invitation, received via email, before they have access to the Azure subscription.

1. [Sign in to the Azure portal](https://portal.azure.com/) as the Azure subscription administrator.

2. Choose the Subscriptions blade, and if there are more than one, choose the subscription to modify.

3. In the IAM screen (shown below) follow the numbered steps:

   ![access control adding owners and contributors](_img/set-up-billing/ap-add-owncontrib.png)

   Owners and contributors of the Azure subscription linked to your VSTS account can make purchases in the Marketplace.  Owners can also add these roles to other users.

Learn more about [viewing access level assignments for users](https://docs.microsoft.com/en-us/azure/active-directory/role-based-access-control-manage-assignments#view-access-assignments).

If needed, you can [pay for more users](buy-basic-access-add-users.md).

Learn more about [adding roles in the Azure portal](https://docs.microsoft.com/azure/active-directory/role-based-access-control-configure#add-access).

## Related information

* [VSTS billing overview](overview.md)
* [Set up billing](set-up-billing-for-your-account-vs.md)
* [VSTS billing FAQ] (vsts-billing-faq.md)
* [Change the Azure subscription for billing](change-azure-subscription.md)
* [VSTS pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
* [VSTS billing support](https://www.visualstudio.com/team-services/support/)