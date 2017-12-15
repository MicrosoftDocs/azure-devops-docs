---
title: Delete users for Visual Studio Team Services
description: Delete users for Visual Studio Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-setup
ms.assetid: d3a31878-a869-45a9-9bca-f46cc2682596
ms.manager: douge
ms.author: billchi
ms.date: 11/13/2017
---

#	Delete users for Visual Studio Team Services (VSTS)

**VSTS**

## How does *access* differ from *permissions*?

Access levels control which features are available to users, while permissions control their access to account resources. 
[Can't access some features?](faq-add-delete-users.md#feature-access) 
For TFS, learn [how to change access levels](../security/change-access-levels.md) 
or [buy more access to TFS or the Test hub](../billing/buy-access-tfs-test-hub.md). 

To control access to account resources instead, learn [how to add permissions](../security/add-users-team-project.md) or 
[restrict permissions](restrict-access-tfs.md).  To change how many users can access paid extensions in your 
VSTS account, 
learn [how to change paid extension users](../billing/change-number-paid-extension-users.md).


## Required permissions

You'll need [VSTS project collection administrator or account owner permissions](faq-add-delete-users.md#find-owner). 


##  Delete users from your VSTS account

0. Sign in to your VSTS account (```https://{youraccount}.visualstudio.com```).

 [Why am I asked to choose between my "work or school account" and my "personal account"?](faq-add-delete-users.md#ChooseOrgAcctMSAcct)

0. Go to the users hub.  

 ![go to the user hub](_img/_shared/users-hub-updated.png)

0. Choose the user, and then above the table of users, choose **Remove from account**.  Alternatively, 
you can choose **...** for the chosen user, and then choose **Remove from account** in the pop-up menu.

 ![Account level table of users with key information per user](_img/user-hub/acct-level-users-718.png)

0. Choose **Remove** in the confirmation dialog.

0. To make sure that you've removed the user completely, make sure they are not in any of your [security groups](../security/add-users-team-project.md). 

 [Why don't users appear or disappear promptly in VSTS after I add or delete them in the Users hub?](faq-add-delete-users.md#users-delay)

0. If you deleted paid users who had Basic features, and you don't want to pay for these users, you must also 
[reduce these users in the Visual Studio Marketplace](../billing/buy-basic-access-add-users.md), 
so you're not charged in your next Azure billing cycle.

 > To reduce or cancel these users for the next month, you must make updates before the last day of the current month. 
 > Your bill won't show these change until the next month because paid users are monthly purchases. 

