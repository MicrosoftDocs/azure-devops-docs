---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 07/02/2025
---
 

> [!NOTE]
> - Changes made to **project readers** through group rules don't persist. To adjust project readers, consider alternative methods such as [direct assignment](../change-access-levels.md) or [custom security groups](../add-remove-manage-user-group-security-group.md).
> - Regularly review the rules listed on the "Group rules" tab of the "Users" page. Changes to Microsoft Entra ID group membership will appear in the next re-evaluation of the group rules, which can be done on-demand, when a group rule is modified, or automatically every 24 hours. Azure DevOps updates Microsoft Entra group membership every hour, but it may take up to 24 hours for Microsoft Entra ID to update [dynamic group membership](/azure/active-directory/enterprise-users/groups-dynamic-membership).
> - Group rules for licensing currently don't apply to service principals and managed identities. To assign an access level to a service principal or managed identity, assign it directly rather than through group membership. For more information, see [Use service principals & managed identities in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md#4-manage-a-service-principal).
 
