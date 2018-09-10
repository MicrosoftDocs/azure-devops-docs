---
title: Frequently asked questions about trials for Azure DevOps
description:  Frequently asked questions about extensions and trials for Azure DevOps, including number of allowed users, get status, and how to cancel 
ms.prod: devops
ms.technology: devops-billing
ms.assetid: 4a6f0af1-aee7-404a-a566-da7922127c69
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 03/28/2018
monikerRange: 'vsts'
---


# Frequently asked questions about trials for Azure DevOps  

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

<a name="organization-trial"></a>

## Trial basics 

### Q: Is there an organization trial? 

A: Instead of offering an organization trial, Azure DevOps provides an ongoing **free tier** of service. It includes the following features so that customers can try out the service: 
* 5 Azure DevOps users: Basic.
* 5 Package Management users. 
* Free tier of Microsoft-hosted continuous integration/continuous deployment (CI/CD): one concurrent job, up to 30 hours per month. 
* One self-hosted CI/CD concurrent job. 
* 20,000 virtual user minutes of cloud-based load testing per month.  

You can also do a 30-day trial of [Test Manager](https://marketplace.visualstudio.com/items/ms.vss-testmanager-web), [Package Management](https://marketplace.visualstudio.com/items?itemName=ms.feed), and a number of extensions offered by 
partners in the Visual Studio Marketplace. 

### Q: How many times can I do a trial for Test Manager, Package Management, or paid extensions offered by partners? 

A:  You can try a feature or extension only once per organization. Most trials are 30 days, and you can choose when to start the trial. Each trial is independent. For example, you can try Test Manager this month and Package Management several months later.

### Q: How many users can use a feature or extension that's in a trial?

A:  All users who have the Basic access level, but not Stakeholders, can use Test Manager, Package Management, or extensions offered by partners during the trial period. There's no need to assign the feature or extension to your end users during the trial. They get access automatically. Some partner extensions might also be available to Stakeholders during the trial.

When the trial is over and you choose to purchase, then you can [assign the feature or extension to your users](../../marketplace/assign-paid-extensions.md) from within the **Users** Services page. 

### Q: Who can start a trial?

A: You must be the Azure DevOps [organization owner or project collection administrator](vsts-billing-faq.md#find-owner) to start a trial. If you don't have permissions, you can [request the extension](../../marketplace/request-vsts-extension.md) instead.

### Q: How do I cancel my trial?

A: To stop your trial, just [uninstall the extension](../../marketplace/uninstall-disable-vsts-extensions.md) from your organization.

<a name="check-trial"></a>

### Q: How do I check an extension's trial status?

A: Check the extension pane in your **Users** Services page.

![Check extension trial](_img/try-additional-features/check-extension-trial-updated-ui.png)

### Q:	What should I do when the trial is almost expired or ends for extensions that include free users?

A: After a trial expires, only those users to whom the extension or feature has been assigned in the **Users** Services page can use it. You can assign only up to the number of free plus paid users included in your organization. For example, Package Management includes 5 free users. So you can assign Package Management to 5 users at any time. If you buy 6 extra Package Management users, then you can assign Package Management to 11 total users in your organization.

## Related articles

- [Assign features or extensions to users](../../marketplace/assign-paid-extensions.md)
- [Buy or change the number of paid users for a feature or extension](../billing/change-number-paid-extension-users.md)
- [Set up billing](set-up-billing-for-your-organization-vs.md)
- [Change the Azure subscription for billing](change-azure-subscription.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)