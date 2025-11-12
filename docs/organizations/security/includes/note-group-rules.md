---
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: include
ms.date: 11/12/2025
---
 

> [!NOTE]
> - zure DevOps applies resources granted by group rules to all members of the configured group. However, access and permissions take effect only after the user signs in to the organization for the first time.  
> - Changes made to **project readers** through group rules don't persist. To adjust project readers, consider alternative methods such as [direct assignment](../change-access-levels.md) or [custom security groups](../add-remove-manage-user-group-security-group.md).
> - Regularly review the rules listed on the **Group rules** tab of the **Users** page. Changes to Microsoft Entra ID group membership appear during the next group rule re-evaluation, which occurs:
>     - On-demand when you trigger it manually
>     - Automatically when you modify a group rule
>     - Automatically every 24 hours. Azure DevOps updates Microsoft Entra group membership every hour, but Microsoft Entra ID might take up to 24 hours to update [dynamic group membership](/azure/active-directory/enterprise-users/groups-dynamic-membership).
> - Group rules for licensing currently don't apply to service principals and managed identities. To assign an access level to a service principal or managed identity, assign it directly rather than through group membership. For more information, see [Use service principals & managed identities in Azure DevOps](../../../integrate/get-started/authentication/service-principal-managed-identity.md).
 
