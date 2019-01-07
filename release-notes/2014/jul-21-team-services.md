---
title: Visual Studio Online Updates - Jul 21
description: VSTS release notes for July 21 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: edebda1d-d3f2-4c89-9f3b-7f2b5712a397
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Visual Studio Online Updates - Jul 21

We have lots to share with you in this week’s deployment. So let’s get into it…

##Using corporate identities with existing accounts

A [popular request](http://visualstudio.uservoice.com/forums/121579-visual-studio/suggestions/2605763-adfs-federated-authentication-for-visual-studio-on) for the service has been corporate identity (Active Directory) support for accounts. A [couple of releases ago](may-20-team-services.md) we added the ability to create a new account and connect it to a directory. With this release you can now add a directory to your **existing** Visual Studio Online account.

Some of the key benefits of connecting a directory to your account include the ability to: leverage centralized identity management, enable single sign-on across cloud services, enforce multi-factor authentication, and integrate with an on-premises Active Directory. When you connect your account to a directory, we preserve your team members’ work item history and links, team memberships, and user plan.

To get going, head over to the Azure Management portal, link your account, and navigate to the Configure tab, where you set up the directory connection. This feature is in preview, so to activate it you must request access. We are approving these requests quickly and you will receive an email once you have been given access.

![Your account is connected to your directory](_img/7_21_01.png)

We have updated our getting started documentation for organizational access to help you get going.

[Manage Organizational Access for your account](https://visualstudio.microsoft.com/get-started/manage-organization-access-for-your-account-vs)

##Viewing existing projects in the Azure Preview Portal

At Build, the new Azure Preview portal was launched ([portal.azure.com](http://portal.azure.com/)). Brian has a [blog post](http://blogs.msdn.com/b/bharry/archive/2014/04/03/visual-studio-online-integration-in-the-azure-portal.aspx) covering the integration with Visual Studio Online. Up until now you could only use the Preview Portal with VS Online accounts created from the Preview portal itself. With this release, you can use your existing VS Online account and team projects as well. To get going, link your account to the Azure Management portal and add corporate identity support to it as outlined above. In the portal you can experience some of DevOps and cloud development scenarios we have enabled. This is just a start and there are many gaps, so we’d love to get your [feedback](http://feedback.azure.com/forums/223579-windows-azure-portal-preview) to help us shape what we do next.

![Viewing existing projects in the Azure Preview Portal](_img/7_21_02.png)

##Trend charts + aggregation

We’ve also enabled a new feature to create trend charts and do aggregation on work item queries. When you create a new work item chart, you’ll see three new chart types: Stacked Area, Area, and Line. These charts allow you to create trends across a one-week, two-week, or four-week time range. In addition, you can now sum a field value across work items returned in the query instead of just doing counts. Just like other charts, these new chart types can be pinned to your home pages to create rich team and project dashboards.

![create trends across a one-week, two-week, or four-week time range](_img/7_21_03.png)

##Test Hub added to the Advanced License

Brian [recently shared](http://blogs.msdn.com/b/bharry/archive/2014/07/09/upcoming-vs-online-licensing-changes.aspx) some licensing changes we are making in VS Online. Effective today, we are including web-based test case management (the Test Hub) for users with an Advanced license. As before, users with Visual Studio Test Professional with MSDN, Visual Studio Premium with MSDN and Visual Studio Ultimate with MSDN licenses will continue to have access to test management capabilities on Visual Studio Online. This change is something many of you asked for we hope you like it! The Stakeholder licensing changes Brian talked about will be coming in a future service update.

##Deleting your account

In this sprint we also added the ability for an account owner to [delete their account](https://visualstudio.microsoft.com/get-started/delete-your-account-vs). Simply navigate to account settings in the collection administration page. From there, select delete account and follow the instructions. **WARNING:** when you delete an account, it will be disabled and all users of the account will lose access immediately. If you have set up billing, it will be discontinued after the current billing cycle. All metered services like builds and load test runs will be stopped immediately. Your account will then be in this state for 90 days, after which it will be deleted permanently. If at any point during this time, you need to recover the account, you can [contact support](https://visualstudio.microsoft.com/support/cloud-services-assisted-support-vs) to re-enable the account.

![Delete your account](_img/7_21_04.png)

That’s the list for sprint 68. As Brian mentioned in [his blog](http://blogs.msdn.com/b/bharry/archive/2014/05/01/visual-studio-online-update-may-1st.aspx), the Visual Studio Online deployments are an event that takes a few days. Depending on your account, you may not see these new features until the deployment is complete. You can find the latest status of the deployment on the [Support](https://visualstudio.microsoft.com/support/support-overview-vs) page. Remember to visit our [User Voice](https://visualstudio.uservoice.com/forums/330519-vso) site to give us feedback on our priorities and investments.

Thank you!

Sean McBreen

















