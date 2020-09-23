---
title: Troubleshoot setting up Visual Studio with Azure DevOps
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Having problems installing Visual Studio, signing in, or handling an expired subscription? Learn answers to these frequently asked questions (FAQs). 
ms.technology: devops-accounts
ms.assetid: 985fcb48-0d9e-44ef-811d-7178df1cb09b
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 03/11/2020
monikerRange: 'azure-devops'
---

# Setting up Visual Studio with Azure DevOps FAQs

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Learn the answers to frequently asked questions (FAQs) about setting up Visual Studio with Azure DevOps.

## Visual Studio

<a name="why-sign-in"></a>

### Q: Why do I need to sign in?

A: Your Visual Studio settings, 
like automatic brace completion, 
are saved with your profile. 
These settings roam with your [personal Microsoft account](https://www.microsoft.com/account), 
or your [work or school account](https://azure.microsoft.com/documentation/articles/sign-up-organization/), 
when you sign in to Visual Studio on any computer. 

Sign in to Visual Studio during the 30-day 
trial period for these benefits:

*    Visual Studio Enterprise: Extend your trial for 90 days. When your trial expires, 
learn [how to unlock Visual Studio](https://msdn.microsoft.com/library/dn950037.aspx).
*    Visual Studio Express or Community: Continue to use this edition for free.

When you create your profile, you can also create an organization.

Learn more about [the benefits of signing in and creating a profile](https://msdn.microsoft.com/library/dn457348.aspx). 

<a name="cannot-sign-in"></a>

### Q: Why can't I sign in?

A: Sign in with a [personal Microsoft account](https://www.microsoft.com/account) 
or a [work or school account](https://azure.microsoft.com/documentation/articles/sign-up-organization/) 
that's managed by Azure Active Directory.

<a name="vs-versions"></a>

### Q: Which versions of Visual Studio can I use with Azure DevOps?

A: You can use the following versions:

* Visual Studio 2019
* Visual Studio 2017
* Visual Studio 2015
* Visual Studio 2013
* Visual Studio 2012
* Visual Studio 2010, 
which requires [Service Pack 1](https://www.microsoft.com/download/details.aspx?id=29082) 
and [KB2662296](https://support.microsoft.com/kb/2662296)
* Visual Studio 2008 SP1, which requires a [GDR update](https://support.microsoft.com/kb/2673642)

To connect to Azure DevOps with Visual Studio 2008 through Visual Studio 2012:

1.    Start Visual Studio.
2.    From the **Team** menu or Team Explorer, 
go to **Connect to Team Foundation Server** > **Select Team Projects** > **Servers**.
3.    Add your organization ({yourorganization}.visualstudio.com).
4.    Select your project and prepare connection.

If you get connection errors, try choosing HTTPS as your protocol.

To connect to Azure DevOps with Visual Studio 2015 and later, 
learn [how to connect to team projects](/azure/devops/organizations/projects/connect-to-projects). 

### Q: Can I use Visual Studio 2015 with Visual Studio 2013 and 2012 on the same computer?

A: Yes, you can run all of these versions on the same computer.

### Q: Can I use earlier versions of Visual Studio to connect to Azure DevOps?

A: Yes, you can use Visual Studio 2013 or 2012. You can also use Visual Studio 2010, 
but you need to install [Service Pack 1](https://www.microsoft.com/download/details.aspx?id=34677) 
and [KB2662296](https://support.microsoft.com/kb/2662296) first. Or, use Visual 
Studio 2008 SP1, with [this GDR update](https://support.microsoft.com/kb/2673642). 
Launch Visual Studio, and then connect to Azure DevOps  
and select your project.

### Q: My subscription expired. What do I do?

A: Here's [how to unlock Visual Studio](https://msdn.microsoft.com/library/dn950037.aspx). 
If you're having subscription problems, 
try [Subscription Support](https://visualstudio.microsoft.com/support/subscription-support-vs).

### Q: I'm having problems installing or signing in to Visual Studio. How do I get help? 

A: Learn more about:

*    [Installing Visual Studio](https://msdn.microsoft.com/library/e2h7fzkw.aspx).
*    [Signing in to Visual Studio](https://msdn.microsoft.com/library/dn457348.aspx).
*    [Managing multiple user organizations](https://msdn.microsoft.com/library/dn872465.aspx).

Or contact [Visual Studio Support](https://visualstudio.microsoft.com/support/support-overview-vs). 

## Related articles

- [Access with Azure AD FAQs](faq-azure-access.md)
- [Configure and customize organization FAQs](faq-configure-customize-organization.md)
- [User and permissions management FAQs](faq-user-and-permissions-management.md)

