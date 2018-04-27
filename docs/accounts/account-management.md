---
title: Create and manage your VSTS account 
description: Collaborate with others to develop apps using our cloud service, plan and track work, integrate with other services, and get more features or extensions
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: overview
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: '>= tfs-2013'
---


# About account management

**VSTS|TFS 2018|TFS 2017|TFS 2015|TFS 2013**

With a Visual Studio Team Services (VSTS) account, you gain access to the platform in which you can:

* Collaborate with others to develop applications using our cloud service
* Plan and track your work as well as code defects and issues
* Set up continuous integration and deployment
* Integrate with other services using service hooks
* Obtain additional features through Marketplace extensions

## Create your account

To get started, you'll want to [create your VSTS account](create-account-msa-or-work-student.md) and then invite others so they can access your account.

Choose Git or Team Foundation as your version control,
so that VSTS can create your team project for code and other assets,
like builds, tests, and work items. If you're starting with Visual Studio
as your development environment, you can create your VSTS account when you
[set up Visual Studio](set-up-vs.md).

Your VSTS account includes 5 free users
with Basic access plus unlimited Visual Studio
subscribers and Stakeholders at no extra charge.
Your account also includes free monthly amounts
of additional services, like build and deployment,
and cloud-based load testing.

## Connect to your account

After VSTS creates your account,
[connect to your account](../user-guide/connect-team-projects.md)
with tools like Xcode, Eclipse, or Visual Studio,
and add code to your team project.

Some clients, like Xcode, Git, and NuGet, require basic credentials
(a username and password) for you to access VSTS.
To connect these clients to VSTS,
create personal access tokens to authenticate your identity.
Use a credential manager to create, store, and secure your tokens,
so you don't have to reenter them every time you push.
Or if you don't want to use a credential manager, you can
[create personal access tokens manually](use-personal-access-tokens-to-authenticate.md).

## Add users and assign access

To share work with others,
[add users and assign access](add-account-users-assign-access-levels.md).
That way, you control the access that each user gets.
Or [add users to your team project](add-team-members-vs.md),
and let VSTS assign the next available access to them.

## Try extensions for free

Help your team do more with [Marketplace extensions](https://marketplace.visualstudio.com/).
For example, VSTS account owners can
try the Test Manager extension free for 90 days.
During the trial, all users with Basic access can
[try Test Manager for free](../billing/try-additional-features-vs.md).

## Set up billing

If you need more than the free users and amounts
of services included with your account,
[set up billing for your account](../billing/set-up-billing-for-your-account-vs.md).
You can then pay for more users with Basic access,
buy more services, and purchase extensions for your account.

## Access with Azure AD

VSTS works with Azure Active Directory (Azure AD),
so that you can control access the same way that you do
with Microsoft services like Office 365 and Microsoft Azure.
If your organization uses a directory (tenant) managed by Azure AD,
your VSTS account can also
[use your directory to authenticate access](access-with-azure-ad.md).
Or [change your Azure AD](change-azure-active-directory-vsts-account.md),
if you're already connected to an existing directory.
