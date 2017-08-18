---
title: Access levels | TFS 
description: Understand how access levels are used to support stakeholder, basic, advanced, or VS Enterprise  
ms.technology: vs-devops-agile-wit
ms.topic: get-started-article
ms.prod: vs-devops-alm
ms.assetid: E2C63C7B-6273-41D7-BD14-BFB340DF8D65
ms.manager: douge
ms.author: kaelli
ms.date: 07/20/2017
---

# Access levels

**Team Services | TFS 2017 | TFS 2015 | TFS 2013**  

!!! WORK IN PROGRESS !!! 

This topic should address the concept of access levels, differentiate it from permissions, and address the commonality and differences between VSTS and TFS. 

!!! WORK IN PROGRESS !!! 

Access levels enable administrators the ability to provide their user base access to the features they need and only pay for those features. To connect and use the functions and features that TFS provides, users must be added to a group with the appropriate permissions. To use select web portal features, they must also belong to the access level that enables access to that feature.

Three access levels are used: 

- **Basic**: Should be assigned to all users with a TFS client access license (CAL). Basic provides access to most features, except for Test.
All Visual Studio subscriptions and paid Team Services users include a TFS CAL.
- **Stakeholder**: Should be assigned to those users who need to enter bugs, view backlogs, boards, charts, and dashboards, but who don't have a TFS CAL. Stakeholders can also view releases and manage release approvals. Stakeholder access is free. 
- **VS Enterprise**: Should be assigned to those users for whom you've purchased Visual Studio Enterprise. These include a TFS CAL plus the rights to access VS Enterprise features. (For users with MSDN subscriptions or Test Professional, assign the Basic access level and the Test Manager extension.) To learn more, see [Get extensions for TFS, Assign paid extension access to users](../marketplace/get-tfs-extensions.md#assign-extension). For example, for users with Visual Studio Test Professional or Visual Studio Enterprise, assign them [access to the Test Manager extension](../marketplace/get-tfs-extensions.md#assign-extension).

For TFS 2017 and earlier versions, the **Advanced** level should be assigned to those users for whom you've purchased the full Test feature set. Here are the purchasing options:  
- Higher-level Visual Studio subscriptions: Visual Studio Test Professional, Visual Studio Enterprise, or MSDN platform subscriptions.
These include a TFS CAL plus the rights to access the full set of Test features.  
- A paid Visual Studio Team Services user (which includes a TFS CAL) plus the [Test Manager extension](#test-manager). 

For TFS 2017.2, Assign **Advanced** access to those users for whom you've purchased MSDN Platform or Visual Studio Test Professional subscriptions. These include a TFS CAL plus the rights to access Test Manager. To learn more, see [Get extensions for TFS, Assign paid extension access to users](../marketplace/get-tfs-extensions.md#assign-extension).


> [!NOTE]   
> The **Advanced** access level is deprecated for TFS 2017 and later versions of TFS. Use the **VS Enterprise** access level only for active Visual Studio Enterprise subscribers. For MSDN Platforms and Visual Studio Test Professional with MSDN subscribers needing access to the Test hub, assign them to the Advanced access level and the Test Manager extension.  
 
When you add a user or group to a team or team project, they're automatically granted access to those features supported by the default access level, which is Basic. This provides most users all the features they need. For a simplified overview of the permissions assigned to the most common groups&#151;Readers, Contributors, and Project Administrators&#151;as well as the Stakeholder access group, see [Permissions and access](permissions-access.md).  

Make sure to set each user's access level based on what you've purchased for that user. Basic access includes all Stakeholder features. Advanced and Visual Enterprise access levels include all Basic features.  
 
See [Stakeholder access](../quickstart/get-started-stakeholder.md) for details of features available to stakeholders.

