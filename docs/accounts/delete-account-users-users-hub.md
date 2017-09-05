---
title: Delete users using the user hub for Visual Studio Team Services
description: Delete users using the user hub for Visual Studio Team Services
ms.prod: vs-devops-alm
ms.technology: vsts-sub-accounts
ms.service: vsts-admin
ms.assetid: d3a31878-a869-45a9-9bca-f46cc2682596
ms.manager: douge
ms.author: estfan
ms.date: 8/1/2017
---

#	Delete users using the user hub for Visual Studio Team Services

**VSTS Streamlined User Management Preview**

If you are a Project Collection Administrator, you can now navigate to the new Users page by turning on "Streamlined User Management" under "Preview features".
 
![Choose Preview features from your user menu in the upper right corner](_img/user-hub/preview-features.png)


## How does *access* differ from *permissions*?

Access levels control which features are available to users, while permissions control their access to account resources. 
[Can't access some features?](#feature-access) 
For TFS, learn [how to change access levels](../security/change-access-levels.md) 
or [buy more access to TFS or the Test hub](../billing/buy-access-tfs-test-hub.md). 

To control access to account resources instead, learn [how to add permissions](add-users.md) or 
[restrict permissions](restrict-access-tfs.md).  To change how many users can access paid extensions in your 
VSTS account, 
learn [how to change paid extension users](../billing/change-number-paid-extension-users.md).


## Required permissions

You'll need [VSTS project collection administrator or account owner permissions](faq-add-delete-users.md#find-owner). 


##  Delete users from your Visual Studio Team Services account

0. Sign in to your Visual Studio Team Services account (```https://{youraccount}.visualstudio.com```).

 [Why am I asked to choose between my "work or school account" and my "personal account"?](#ChooseOrgAcctMSAcct)

0. Go to the users hub. Select the user, choose **...** in the name column, then choose **Remove**.

 ![Account level table of users with key information per user](_img/user-hub/acct-level-users.jpg)

0. To make sure that you've removed the user completely, make sure they are not in any of your [security groups](add-users.md). 

 [Why don't users appear or disappear promptly in VSTS after I add or delete them in the Users hub?](#users-delay)

0. If you deleted paid users who had Basic features, and you don't want to pay for these users, you must also 
[reduce these users in the Visual Studio Marketplace](../billing/buy-basic-access-add-users.md), 
so you're not charged in your next Azure billing cycle.

 > To reduce or cancel these users for the next month, you must make updates before the last day of the current month. 
 > Your bill won't show these change until the next month because paid users are monthly purchases. 


## Troubleshooting

[Troubleshooting](faq-add-delete-users.md)

