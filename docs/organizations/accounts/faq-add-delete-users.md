---
title: Troubleshoot adding, removing users in an organization
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), like the permissions that are required to manage users and user access, find the organization owner, manage Visual Studio subscriptions, and more.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 7107fb6c-c132-45c2-a0d1-d44e9270e907
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: 'azdevops'
---

# Troubleshoot adding and deleting organization users

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

## Permissions

#### Q: Why can't I manage users?

A: To access and manage users, you must have Azure DevOps [project collection administrator or organization owner permissions](#find-owner).

<a name="find-owner"></a>

[!INCLUDE [find-project-collection-administrator](../../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-organization-owner](../../_shared/qa-find-organization-owner.md)]

<a name="users-delay"></a>

[!INCLUDE [user-delay](../../_shared/qa-user-delay.md)]

## Visual Studio subscriptions

<a name="MSDNSubscriber"></a>

#### Q: When do I select "Visual Studio/MSDN Subscriber"?

A: Assign this access level to users who have active, valid [Visual Studio subscriptions](#EligibleMSDNSubscriptions). Azure DevOps automatically recognizes and validates Visual Studio subscribers who have Azure DevOps as a benefit. You need the email address that's associated with the subscription.

For example, if a user selects **Visual Studio/MSDN Subscriber** but the user doesn't have a valid, active Visual Studio subscription, the user can work only [as a stakeholder](../../organizations/security/get-started-stakeholder.md).

<a name="EligibleMSDNSubscriptions"></a>

#### Q: Which Visual Studio subscriptions can I use with Azure DevOps?

A:  See [Azure DevOps benefits for Visual Studio subscribers](/visualstudio/subscriptions/vs-vsts).

<a name="enterprise-professional"></a>

<a name="ValidateMSDNSubscription"></a>

#### Q: Why won't my Visual Studio subscription validate?

A: See [Why won't Azure DevOps recognize my Visual Studio subscription?](/visualstudio/subscriptions/vs-alternate-identity#faq)

<a name="why-access-changed"></a>

#### Q: Why do Visual Studio subscriber access levels change after a subscriber signs in?

A: Azure DevOps recognizes Visual Studio subscribers. Azure DevOps automatically assigns a user access that's based on the user's subscription and not on the current access level that's assigned to the user.

<a name="subscription-expired"></a>

#### Q: What happens if a user's subscription expires?

A: If no other access levels are available, users can [work as stakeholders](../../organizations/security/get-started-stakeholder.md). To restore access, a user must renew their subscription.

<a name="extension-transition"></a>

#### Q: What happened to Visual Studio Online Professional?

A: On December 1, 2015, we replaced Visual Studio Online Professional with the [Visual Studio Professional monthly subscription](https://marketplace.visualstudio.com/items/ms.vs-professional-monthly). Users are transitioned automatically to the subscription.

Although a Visual Studio Online Professional purchase now appears on your monthly invoice as a Visual Studio Professional monthly subscription, we haven't determined when users are transitioned systematically. The transition provides an upgrade by offering access to unlimited organizations (not just one organization) like Visual Studio Online Professional.

The rest stays the same. You get monthly access to the Visual Studio Professional IDE. Pricing remains the same at $45 per user, per month. Learn more about [Visual Studio subscriptions](https://visualstudio.microsoft.com/products/how-to-buy-vs).

If you're purchasing user access to Visual Studio Professional for a specific organization (possible only if you purchased before November 2015) and want to upgrade, do the following:

1. Before the last day of the calendar month, sign in to the [Azure portal](https://portal.azure.com). Reduce the number of paid Visual Studio Online Professional users to 0. 

	This change takes effect on the first day of the next month. For the rest of the current calendar month, you aren't billed for any Visual Studio Online Professional users.

1. On the first day of the next calendar month, [go to the Visual Studio Marketplace](https://marketplace.visualstudio.com/items/ms.vs-professional-monthly), Azure DevOps tab, and buy Visual Studio Professional monthly subscriptions for the same users. Learn [how to buy Visual Studio subscriptions](/visualstudio/subscriptions/vscloud-overview).

   > [!NOTE]
   > If you want to use your monthly Azure credits as a Visual Studio subscriber to pay for users, make sure that you remove the default spending limit for your subscription indefinitely. [Learn more](../billing/billing-faq.md).

## User access

#### Q: What does "Last Access" mean in the All Users view?

The value in **Last Access** is the last date a user accessed any resources or services. Accessing Azure DevOps includes using *organizationname*.visualstudio.com directly and using resources or services indirectly. For example, you might use the [Azure Artifacts](https://https://azure.microsoft.com/services/devops/artifacts/) extension, or you might access the service by pushing code to Azure DevOps from a Git command line or IDE.

<a name="paid-basic-access-join-other-organizations"></a>

[!INCLUDE [can-paid-Basic-users-join-other-organizations](../../_shared/qa-can-paid-basic-users-join-other-organizations.md)]

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../../_shared/qa-no-access-existing-features.md)]

<a name="stopped-features"></a>

#### Q: Why does a user lose access to some features?

A: This might happen for different reasons (although the user can continue to [work as a stakeholder](../../organizations/security/get-started-stakeholder.md)):

*	The user's Visual Studio subscription has expired. Meanwhile, the user can [work as a stakeholder](../../organizations/security/get-started-stakeholder.md), or you can give the user Basic access until the user renews their subscription. After the user signs in, Azure DevOps restores access automatically.

*	The Azure subscription used for billing is no longer active. This affects all purchases made with this subscription, including Visual Studio subscriptions. To fix this issue, visit the [Azure account portal](https://portal.azure.com).

*	The Azure subscription used for billing was unlinked from your organization. Learn more about [linking your organization](../../billing/set-up-billing-for-your-organization-vs.md).

*	Your organization has more users with Basic access than the number of users that you're paying for in Azure. Your organization includes five free users with Basic access. If you need to add more users with Basic access, you can [pay for these users](../../billing/buy-basic-access-add-users.md). 

	Otherwise, on the first day of the calendar month, users who haven't signed in to your organization for the longest time lose access first. If your organization has users who don't need access anymore, [remove them from your organization](delete-organization-users.md).

*	The user no longer has access to [features that are available only as extensions](https://visualstudio.microsoft.com/team-services/compare-features/). This might happen for different reasons:

	*	The user's access level no longer meets the extension's requirements. Most extensions require at least Basic access, not Stakeholder access. For more information, see the extension's description in the [Marketplace](https://marketplace.visualstudio.com).

	*	The extension was uninstalled. Users can reinstall the extension by visiting the extension page in the [Marketplace](https://marketplace.visualstudio.com).

	*	If the extension is a paid extension, the Azure subscription used for billing might be unlinked from your organization or might no longer be active. Learn more about [linking your organization](../../billing/set-up-billing-for-your-organization-vs.md) or visit the [Azure portal](https://account.windowsazure.com/subscriptions) to check payment details.

### Azure Active Directory and your organization

<a name="AddUserDirectory"></a>

#### Q: Why do I have to add users to a directory?

A: Your organization authenticates users and controls access through Azure Active Directory (Azure AD). All users must be directory members to get access.

If you're a directory administrator, you can [add users to the directory](https://msdn.microsoft.com/library/azure/hh967632.aspx). If you're not an administrator, work with your directory administrator to add users. Learn more about [how to control access by using a directory](access-with-azure-ad.md).

<a name="ConnectedDirectory"></a>

[!INCLUDE [does-organization-use-azuread](../../_shared/qa-does-organization-use-azuread.md)]

<a name="DeleteFromDirectory"></a>

#### Q: My organization controls access by using Azure Active Directory. Can I just delete users from the directory?

A: Yes, but deleting a user from the directory removes the user's access to all organizations and other assets associated with that directory. You must have Azure AD global administrator permissions to [delete a user from your Azure AD directory](delete-users-from-services-aad.md).

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]

###	More support

[!INCLUDE [get-team-services-support](../../_shared/qa-get-vsts-support.md)]
