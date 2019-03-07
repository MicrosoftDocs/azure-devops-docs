---
title: About creating and managing organization - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Collaborate with others to develop apps by using our cloud service, plan and track work, integrate with other services, and get more features or extensions.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: overview
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
monikerRange: '>= tfs-2013'
---

# About organization management in Azure DevOps

[!INCLUDE [version-vsts-tfs-all-versions](../../_shared/version-vsts-tfs-all-versions.md)]

With an organization, you gain access to the platform in which you can do the following:

* Collaborate with others to develop applications by using our cloud service.
* Plan and track your work as well as code defects and issues.
* Set up continuous integration and deployment.
* Integrate with other services by using service hooks.
* Obtain additional features through Azure Marketplace extensions.

## Create your organization

Before you get started, read [Plan your organizational structure in Azure DevOps](../../user-guide/plan-your-azure-devops-org-structure.md). Then, you can [create your organization](create-organization.md) and invite others so they can access your organization.

Choose Git or Team Foundation Server as your version control,
so that Azure DevOps can create your project for code and other assets,
like builds, tests, and work items. If you're starting with Visual Studio
as your development environment, you can create your organization when you
[set up Visual Studio](set-up-vs.md).

Your organization includes five free users
with Basic access, plus unlimited Visual Studio
subscribers and stakeholders at no extra charge.
Your organization also includes free monthly amounts
of additional services such as build and deployment.

## Connect to your organization

When your organization is created,
[connect to your projects](../../organizations/projects/connect-to-projects.md)
with tools like Xcode, Eclipse, or Visual Studio,
and add code to your project.

Some clients, like Xcode, Git, and NuGet, require basic credentials
(a username and password) for you to access Azure DevOps.
To connect these clients to Azure DevOps,
create personal access tokens to authenticate your identity.
Use a credential manager to create, store, and secure your tokens,
so you don't have to reenter them every time you push.
Or if you don't want to use a credential manager, you can
[create personal access tokens manually](use-personal-access-tokens-to-authenticate.md).

## Add users and assign access

To share work with others,
[add users and assign access](add-organization-users.md).
That way, you control each user's access.
Or [add users to your project](add-team-members.md),
and let Azure DevOps assign the next available access to them.

## Try extensions for free

Help your team do more with [Marketplace extensions](https://marketplace.visualstudio.com/).
For example, organization owners can
try the Test Manager extension for Azure Test Plans free for 90 days.
During the trial, all users with Basic access can
[try Test Manager for free](../billing/try-additional-features-vs.md).

## Set up billing

If you need more than the free users and amounts
of services included with your organization,
[set up billing for your organization](../billing/set-up-billing-for-your-organization-vs.md).
You can then pay for more users with Basic access,
buy more services, and purchase extensions for your organization.

## Access with Azure AD

Azure DevOps works with Azure Active Directory (Azure AD),
so that you can control access the same way that you do
with Microsoft services like Office 365 and Microsoft Azure.
If your enterprise uses a directory managed by Azure AD,
your organization can also
[use your directory to authenticate access](access-with-azure-ad.md).
Or [change your Azure AD instance](change-organization-location.md),
if you're already connected to an existing directory.
