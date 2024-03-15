---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 03/05/2024
---
 

> [!NOTE]
> - Changes made to **project readers** through group rules don't persist. If you need to adjust project readers, consider alternative methods, such as [direct assignment](../change-access-levels.md) or [custom security groups](../add-remove-manage-user-group-security-group.md).
> - We recommend that you regularly review the rules listed on the "Group rules" tab of the "Users" page. If any changes get made to the Microsoft Entra ID group membership, these changes show up in the next re-evaluation of the group rules, which can be done on-demand, when a group rule gets modified, or automatically every 24 hours. Azure DevOps updates Microsoft Entra group membership every hour, but it may take up to 24 hours for Microsoft Entra ID to update [dynamic group membership](/azure/active-directory/enterprise-users/groups-dynamic-membership).
 
