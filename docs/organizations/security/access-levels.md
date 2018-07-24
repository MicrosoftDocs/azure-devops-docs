---
title: What access levels does VSTS & TFS support?
titleSuffix: VSTS & TFS
description: Understand how access levels are used to support stakeholder, basic, advanced, or VS Enterprise access  
ms.technology: devops-security
ms.prod: devops
ms.assetid: E2C63C7B-6273-41D7-BD14-BFB340DF8D65
ms.topic: conceptual
ms.manager: douge
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
ms.date: 11/28/2017
monikerRange: '>= tfs-2013'
---

# About access levels

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Access levels enable administrators the ability to provide their user base access to the features they need and only pay for those features. To connect and use the functions and features that TFS provides, users must be added to a group with the appropriate permissions. To use select web portal features, they must also belong to the access level that enables access to that feature.

Make sure to set each user's access level based on what you've purchased for that user. Basic access includes all Stakeholder features. Advanced and Visual Enterprise access levels include all Basic features. 

To add user accounts or groups to specific access levels, see the following topics: 

- For VSTS: [Manage users and access in VSTS](../accounts/add-organization-users-from-user-hub.md)
- For on-premises TFS: [Change access levels](change-access-levels.md). 

When you add a user or group to a team or team project, they're automatically granted access to those features supported by the default access level, which is Basic. This provides most users all the features they need. For a simplified overview of the permissions assigned to the most common groups&#151;Readers, Contributors, and Project Administrators&#151;as well as the Stakeholder access group, see [Permissions and access](permissions-access.md).  

The systems employ these access levels:

- Stakeholders: provides limited access, unlimited assignments  
- Basic: provides access to most features  
- VS Enterprise (TFS 2017.1 and later versions): provides access to premium features
- Advanced (TFS 2017 and earlier versions): provides access to premium features 

## Basic access

Assign **Basic** access to all users with a Visual Studio subscriptions and paid VSTS users, including a TFS client access license (CAL). Basic provides access to most features, except for Test and other premium features.

<img src="_img/access-levels-2017-basic.png" alt="Basic access features" style="border: 1px solid #CCCCCC;" /> 

## Stakeholder

Assign **Stakeholder** access to those users who need to enter bugs, view backlogs, boards, charts, and dashboards, but who don't have a TFS CAL. Stakeholders can also view releases and manage release approvals. Stakeholder access is free. 

<img src="_img/access-levels-2017-stakeholder.png" alt="Stakeholder access features" style="border: 1px solid #CCCCCC;" />  

See [Stakeholder access](../../organizations/security/get-started-stakeholder.md) for details of features available to stakeholders.

## VS Enterprise

Assign **VS Enterprise** to those users for whom you've purchased Visual Studio Enterprise. These include a TFS CAL plus the rights to access VS Enterprise features. (For users with MSDN Platforms subscriptions or Test Professional, assign the Basic access level and the Test Manager extension.) To learn more, see [Get extensions for TFS, Assign paid extension access to users](../../marketplace/how-to/assign-paid-extension-access.md). For example, for users with Visual Studio Test Professional or Visual Studio Enterprise, assign them [access to the Test Manager extension](../../marketplace/how-to/assign-paid-extension-access.md).

**TFS 2017.2**

<img src="_img/access-levels-2017-vs.png" alt="VS Enterprise access features" style="border: 1px solid #CCCCCC;" />  

## Advanced 
For TFS 2017 and earlier versions, you should assign the **Advanced** level to those users for whom you've purchased the full Test feature set. Here are the purchasing options:  
- Higher-level Visual Studio subscriptions: Visual Studio Test Professional, Visual Studio Enterprise, or MSDN Platforms subscriptions.
These include a TFS CAL plus the rights to access the full set of Test features.  
- A paid VSTS user (which includes a TFS CAL) plus the [Test Manager extension](change-access-levels.md#test-manager). 

For TFS 2017.2, Assign **Advanced** access to those users for whom you've purchased MSDN Platforms or Visual Studio Test Professional subscriptions. These include a TFS CAL plus the rights to access Test Manager. To learn more, see [Get extensions for TFS, Assign paid extension access to users](../../marketplace/how-to/assign-paid-extension-access.md).
	

**TFS 2017.2**

<img src="_img/access-levels-2017-update2-vs-t.png" alt="TFS 2017.2, Advanced Access" style="border: 1px solid #CCCCCC;" />

**TFS 2017.1**

> [!NOTE]   
> With TFS 2017.1, the Advanced access level was temporarily disabled. Updating to TFS 2017.2 will re-enable it. If you are on TFS 2017.1 and have users with Visual Studio Test Professional or MSDN Platforms subscriptions, you should assign them Basic access level. In addition, you need to open the **Users** hub for the project collections in which they are a member and [assign them the Test Manager extension](../../marketplace/assign-paid-extensions.md). To learn more, see [Buy access to TFS or the TFS Test hub](../../billing/buy-access-tfs-test-hub.md). 

**TFS 2017, TFS 2015, TFS 2013**

<img src="_img/access-levels-2015-advanced.png" alt="Advanced access features" style="border: 1px solid #CCCCCC;" />  

> [!NOTE]   
> The **Advanced** access level is deprecated for TFS 2017 and later versions of TFS. Use the **VS Enterprise** access level only for active Visual Studio Enterprise subscribers. For MSDN Platforms and Visual Studio Test Professional with MSDN subscribers needing access to the Test hub, assign them to the **Advanced** access level and the Test Manager extension.  
 
 
<a id="test-manager"  >  </a>
## Access to the Test hub and Marketplace extensions

Full access to the Test hub requires Advanced (TFS 2015) or VS Enterprise (TFS 2017) access. Visual Studio Test Professional plus the Test hub features in the TFS web portal are managed through VSTS, Azure billing services, and purchase of Test Manager extensions from the Marketplace.  

To learn how to grant access to an extension, see [Get extensions for TFS](../../marketplace/get-tfs-extensions.md).  

## What features are accessible to users who belong to two different groups?
If a user belongs to a group that has Basic access and another group that has Advanced access, the user has access to all features available through Advanced, which is a superset of Basic.

## Service account access  
[TFS service accounts](/tfs/server/admin/service-accounts-dependencies-tfs) are added to the default access level. If you make Stakeholder the default access level, you must set the TFS service accounts to Basic or Advanced/VS Enterprise access.  

Service accounts don't require a TFS CAL or other purchase.  

## Related notes  

- [Manage users and access in VSTS](../accounts/add-organization-users-from-user-hub.md)
- [Change access levels (TFS)](change-access-levels.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access for VSTS and TFS](permissions-access.md)
- [Navigation basics](../../project/navigation/index.md)  
