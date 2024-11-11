---
ms.topic: include
ms.subservice: azure-devops-audit
ms.author: chcomley
author: chcomley
---

Auditing is turned off by default for all Azure DevOps Services organizations. Ensure that only authorized personnel have access to sensitive auditing information.

**Permissions:** Be a member of the Project Collection Administrators (PCA) group (organization owners are automatically members of this group) or have the following auditing permissions per user or group:
- Manage audit streams
- View audit log

:::image type="content" source="../media/auditing-streaming/auditing-permissions.png" alt-text="Screenshot shows settings audit permissions to Allow.":::

PCAs can grant these permissions to any users or groups for managing organization streams via **Organization settings** > **Security > Permissions**. PCAs can also assign the *Delete audit streams* permission. 

> [!NOTE]  
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users in the **Project-Scoped Users** group can't view **Auditing** and have limited visibility to **Organization settings** pages. For more information and important security-related details, see [Limit user visibility for projects and more](../../../user-guide/manage-organization-collection.md#limit-user-visibility-for-projects-and-more).
