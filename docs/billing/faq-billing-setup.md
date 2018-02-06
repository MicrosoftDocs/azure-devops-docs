---
title: Troubleshoot VSTS billing  
description: Solutions for resolving VSTS billing issues  
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: b59c53fb-aaa5-408c-8c7d-ab72974ee922
ms.manager: douge
ms.author: chcomley
ms.date: 1/29/2018
---

# Billing troubleshooting

**VSTS**


[!INCLUDE [browser-problems-azure](../_shared/qa-browser-problems-azure.md)]

<a name="find-owner"></a>

[!INCLUDE [find project collection administrator](../_shared/qa-find-project-collection-administrator.md)]

[!INCLUDE [find-account-owner](../_shared/qa-find-account-owner.md)]

[!INCLUDE [why-no-owned-accounts](../_shared/qa-why-no-owned-accounts.md)]

<a name="EligibleAzureSubscriptions"></a>

[!INCLUDE [azure-subscriptions-for-billing](../_shared/qa-azure-subscriptions-for-billing.md)]

<a name="SettingsDescription"></a>

####Q: Why don't my options look the same?

A: Your options might look different based on the VSTS account that you select 
and how that account is set up:

* **URL**: This list shows only the VSTS accounts that you own. 
[Why don't I see any accounts?](#CannotLinkVSOAccount)

* **Directory**: The name of a directory appears here only when a directory is 
connected to the VSTS account selected in the **URL** box. 
This directory controls access and authenticates users for the 
selected VSTS account. Learn more about 
[why a directory is connected to your account](#WhyDirectory).

* **Subscription**: Appears only when you have more 
than one Azure subscription. These subscriptions are 
also filtered by the directories selected in the Azure 
classic portal's **Subscriptions** list:

    ![Subscriptions filter](_img/set-up-billing/azuresubscriptionsfilter.png)

<a name="WhyDirectory"></a>

####Q: Why is a directory connected to my account?

A: Your VSTS account authenticates users through a directory, 
which is managed through [Azure Active Directory (Azure AD)](http://azure.microsoft.com/en-us/documentation/articles/active-directory-whatis/). 
This directory controls who can get access to your account 
by requiring that all users belong to the directory to get access. 
Your VSTS account was connected to a directory when the 
account owner created the account or sometime after that. 

Your directory administrator controls who can 
[join the directory](https://msdn.microsoft.com/library/azure/hh967632.aspx) 
and get access. Otherwise, the VSTS account owner 
is solely responsible for managing access. Learn more about 
[managing work access](../accounts/access-with-azure-ad.md) 
for your account.

<a name="CannotLinkVSOAccount"></a>

####Q: Why can't I link my VSTS account?

A:  This might happen because:

* You're not the VSTS account owner.

*   You're not at least co-administrator 
on the Azure subscription that you want to link.

* If you don't see any VSTS accounts, 
your account might already linked to another Azure subscription. 

*   If your VSTS account uses Azure Active Directory (Azure AD) 
    to authenticate users, you might have a different directory 
    selected in the Azure portal than the directory that's connected 
    to your VSTS account.

    To select the directory that your VSTS account uses, 
    open the Azure portal's **Subscriptions** list:

 ![Filter your subscriptions to the connected directory ](_img/set-up-billing/azuresubscriptionsfilter.png)

<a name="BillingRestriction"></a>

####Q: Why is my VSTS account already linked to an Azure subscription?

A: This happens if someone already set up billing for your VSTS account, either  
through the Azure portal or while purchasing something for this account via the 
[Visual Studio Marketplace](../marketplace/index.md). Each VSTS account can only use one Azure subscription for billing, 
charges cannot be split across multiple Azure subscriptions.

####Q:  Can I use the same Azure subscription for billing across multiple VSTS accounts?

A:  Yes, you can use the same Azure subscription for billing across multiple VSTS accounts. But you can't link a single VSTS account to multiple Azure subscriptions.

<a id="azure-billing"></a>

####Q: How does Azure billing work?

A: When you set up billing for your VSTS account to an Azure subscription, 
you select an eligible [Azure subscription](#EligibleAzureSubscriptions) 
where you have co-administrator permissions or greater. 
If you don't have an Azure subscription, you can either 
[sign up](https://portal.azure.com) for a new one, 
or have an Azure administrator [add you as co-administrator](add-backup-billing-managers.md) 
to an Azure subscription that you can use to bill purchases. 

Payment is set up with a credit card, or by invoice in some cases. 
Charges for your purchases will show up on your monthly Azure bill.

**Note**: You must keep your Azure subscription in good standing 
to use your VSTS purchases. If your Azure subscription 
is canceled or becomes disabled, for example, because the 
[credit card used for payment expires](#cc-expires), then any purchases with this 
Azure subscription will be deactivated on the 1st day of next month.
To avoid losing access to your VSTS purchases, 
please keep your Azure subscription active and updated.

For example, if you paid for users with an Azure subscription that becomes disabled, 
those users will lose access on the 1st of next month.

<a name="WhenSetUpBilling"></a>

####Q: When do I get billed?

A: You're charged only after you've paid for users 
or used VSTS above the free limits. 
Your charges are prorated during the 1st month. 
After that, you're billed automatically on the 
1st day of the calendar month. 
Learn more about [pricing here](https://www.visualstudio.com/products/visual-studio-team-services-pricing-vs).

[!INCLUDE [azure-bill-larger](../_shared/qa-azure-bill-larger.md)]

####Q: How do I stop billing?

A: Sign in to the [Azure classic portal](https://manage.windowsazure.com/) 
or the [Azure portal](https://portal.azure.com/) 
as the VSTS account owner or at least Azure subscription co-administrator. 
Select your VSTS account, reduce any paid users to zero, and turn off any 
paid VSTS. Your VSTS account and bill won't show any changes 
in paid users or VSTS until next month when these changes take effect. 
You're still charged for VSTS that you've already used.

####Q: What happens if I cancel my Azure subscription?

A: Your VSTS account goes back to the free monthly limits, 
but you'll keep any paid users or VSTS until next month. 
Your account stays linked to your Azure subscription until you unlink your account, 
or until your account unlinks automatically when your Azure subscription is disabled.

<a name="cc-expires"></a>
####Q: What happens if my credit card expires?

A: Your VSTS account goes back to the free monthly limits, 
but you'll keep any paid users or VSTS until next month. 
Your Azure subscription will eventually become disabled, but 
fixing this issue reactivates your subscription and restores your account's paid settings.

<a name="AzureSubscriptionDisabled"></a>

[!INCLUDE [azure-subscription-disabled-team-services](../_shared/qa-azure-subscription-disabled.md)]

<a name="unlinking"></a>
####Q: What happens if I unlink my VSTS account?

A: Your account will revert to the free number 
of users and pipelines on the 1st of next month, 
but cloud-based load testing **immediately** 
reverts to your free monthly limits. 
Unlinking will cancel paid non-Microsoft 
extensions **without refund or credit**.

You can relink your VSTS account 
to another Azure subscription by going to 
the Visual Studio Marketplace and repurchasing 
VSTS users, pipelines, 
or other extensions that you paid for this month. 
You can also relink by going to the Azure portal.  If
you've paid for any Microsoft resources this month, 
those resources won't be billed again.  Buying non-Microsoft extensions again will be treated as 
new purchases, and the Marketplace will bill immediately to your 
new Azure subscription.

If you wait until the 1st of next month to relink, 
your VSTS account will revert to the free amounts. 
Any paid users will appear expired in your account's 
Users hub. Make sure that you repurchase any paid users 
so they don't lose access on the 1st of the next month.

<a name="get-support"></a>

[!INCLUDE [azure-account-billing-support](../_shared/qa-azure-account-billing-support.md)]

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]

