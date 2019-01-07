---
title: Visual Studio Online Updates - May 20
description: VSTS release notes for May 20 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 764a35d1-3785-45ef-b339-8c2714b4f836
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Visual Studio Online updates – May 20

##Using corporate identities

For a while now, one of the [top customer requests](http://visualstudio.uservoice.com/forums/121579-visual-studio/suggestions/2605763-adfs-federated-authentication-for-visual-studio-on) for Visual Studio Online has been the ability to connect with corporate (Active Directory) identities rather than Microsoft accounts (Live IDs). Today we are taking an important next step on that journey. With this deployment you can now create a new Visual Studio Online account linked to an Azure Active Directory (Azure AD) tenant. Linking to an Azure Active Directory allows customers to centralize identity management, enable single sign-on across a broad array of cloud services, enforce multi-factor authentication and integrate with an on-premises Active Directory. This also allows you to use the same identity management across your Office 365 deployment and Visual Studio Online.

**Important:** Unfortunately, we do not yet support linking an existing VS Online account to AAD, and therefore there’s no way to use your AD credentials to log into an account you’ve already created. However, that scenario is next on our list and we are hard at work and will enable it as soon as we can.

[Find out more about Azure Active Directory](http://azure.microsoft.com/documentation/services/active-directory/)

###Create a new account and connect it to Azure Active Directory

You can create a new account linked to an AAD tenant either from within the Azure portal or from the Visual Studio Online account creation experience. We’ve provided a [tutorial](https://visualstudio.microsoft.com/get-started/connect-to-vs) on how to do it.

![Logging into VS Online](_img/5_20_01.png)

Once created, everything that you can do with a Visual Studio Online account works as you would expect including full clients support: i.e., clients and tools that support Visual Studio Online can connect to AAD-backed accounts. One nice thing about Azure Active Directory is that it supports linking to other AAD tenants and “external users” for enabling Microsoft account (Live ID) access to your AAD—meaning that it’s easy for you to work with people outside your organization by linking them to your AAD tenant but still maintaining central control.

It’s also possible to create an Azure Active Directory–connected Visual Studio Online account from the Azure Management Portal:

![Azure Management Portal](_img/5_20_02.png)

If you want to find out more, head over to:

[Connecting to an Azure Active Directory based account](https://visualstudio.microsoft.com/get-started/connect-to-vs)

###Leverage your MSDN Visual Studio Online benefit with organizational credentials

One benefit of an MSDN subscription is access to Visual Studio Online accounts. However, MSDN subscriptions require sign-in with a Microsoft account (Live ID). With the introduction of Azure Active Directory support for VS Online, we’ve added the ability to associate your Visual Studio Online MSDN benefit with work or school account, enabling you to get VS Online “credit” for your MSDN subscription when you log into VS Online with those credentials.

![Accessing VS Online from My Account on MSDN Subscriptions](_img/5_20_03.png)

[Associating your Visual Studio Online benefit with a work account](https://msdn.microsoft.com/subscriptions/dn531048.aspx)

[Which MSDN Subscriptions include the Visual Studio Online benefit](https://azure.microsoft.com/pricing/details/visual-studio-team-services/)

##Copy/Paste Shared Parameter Data between VS Online and Excel

With [Shared Parameters for Test Cases](apr-03-team-services.md), we introduced the ability to share test parameter data across test cases. You could get started with shared parameters by authoring new data or converting existing local parameters to shared parameters, but importing existing data from sources such as Excel was not possible. To enable the import scenario, with this deployment, we are enabling copy-paste functionality from Excel to shared parameter grid and vice versa. You can also copy-paste parameter data across grids.

![Copying and pasting shared parameters in Excel](_img/5_20_04.png)

##End of data export period

Finally, the window for data export functionality is coming to a close on **May 20 th, 2014**. As Brian detailed in his [blog post](http://blogs.msdn.com/b/bharry/archive/2014/02/21/vs-online-early-adopter-program-extended-to-may-7-2014.aspx), we scoped the capability, for now, to aiding people through the transition; but we will remain attentive to customer feedback in the space. Even though we are discontinuing high-fidelity data export, we still maintain the promise that your data is yours. If you cancel your account or need to get your data out, please feel free to use our TFS features and APIs to extract any and all of your data at any time.

That’s the list for Sprint 65. As Brian mentioned in [his blog](http://blogs.msdn.com/b/bharry/archive/2014/05/01/visual-studio-online-update-may-1st.aspx), the Visual Studio Online deployments are an event that takes a few days. Depending on your account, you may not see these new features until the deployment is complete. You can find the latest status of the deployment on the [Support](https://visualstudio.microsoft.com/support/support-overview-vs) page. Remember to visit our [User Voice](https://visualstudio.uservoice.com/forums/330519-vso) site to give us feedback on our priorities and investments.

Thank you

Sean McBreen
























