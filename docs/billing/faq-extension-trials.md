---
title: Troubleshooting paid extensions trials for VSTS
description: Troubleshooting paid extensions trials for VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: 4a6f0af1-aee7-404a-a566-da7922127c69
ms.manager: douge
ms.author: chcomley
ms.date: 1/22/2018
---

# Troubleshooting paid extensions trials for VSTS

**VSTS**


<a name="account-trial"></a>
####Q:   What happened to the account trial?

A:	VSTS replaced the account trial with the 
[Test Manager extension trial](https://marketplace.visualstudio.com/items/ms.vss-testmanager-web), 
which also offers the same integrated, 
comprehensive manual and exploratory testing features. 

####Q:		How many times can I start an extension trial?

A:  You can start an extension trial only once per account. 

<a name="no-accounts"></a>

[!INCLUDE [no-accounts](_shared/qa-no-accounts.md)]

<a name="no-permissions"></a>
####Q:		Why can't I start an extension trial for the selected VSTS account?

A:	You must be the VSTS [account owner or project collection administrator](faq-billing-setup.md#find-owner) 
to start an extension trial for the selected VSTS account. If you don't have permissions, 
you can [request the extension](../marketplace/request-vsts-extension.md) instead. 

<a name="check-trial"></a>
####Q:		How do I check an extension's trial status?

A:	Check the extension pane in your Users hub.

![Check extension trial](_img/try-additional-features/check-extension-trial-updated-ui.png)

####Q:   How do I cancel my trial?

A: To stop your trial, just 
[uninstall the extension](../marketplace/uninstall-disable-vsts-extensions.md) 
from your VSTS account.

<a name="feature-access"></a>

[!INCLUDE [no-access-existing-features](../_shared/qa-no-access-existing-features.md)]

<a name="extension-access"></a>

[!INCLUDE [no-access-extension-features](../_shared/qa-no-access-extension-features.md)]

[!INCLUDE [extension-trial-ending-expiring-free-users](../_shared/qa-extension-trial-ending-expiring-free-users.md)]

<a name="ChooseOrgAcctMSAcct"></a>

[!INCLUDE [choose-msa-azuread-account](../_shared/qa-choose-msa-azuread-account.md)]

[!INCLUDE [choose-msa-azuread-account2](../_shared/qa-choose-msa-azuread-account2.md)]

[!INCLUDE [why-cant-sign-in-msa-azuread-account](../_shared/qa-why-cant-sign-in-msa-azuread-account.md)]


<a name="get-support"></a>

[!INCLUDE [get-team-services-support](../_shared/qa-get-vsts-support.md)]
