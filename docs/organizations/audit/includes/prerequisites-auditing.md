---
ms.topic: include
ms.subservice: azure-devops-audit
ms.author: chcomley
author: chcomley
---

Auditing is turned off by default for all Azure DevOps Services organizations. Ensure that only authorized personnel have access to sensitive auditing information.

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - Member of the [**Project Collection Administrators** group](../../security/look-up-project-collection-administrators.md) (organization owners are automatically members), *or* <br> - The following auditing permissions set to **Allow** per user or group: **Manage audit streams**, **View audit log**. <br><br> Project Collection Administrators can grant these permissions to any users or groups for managing organization streams, including **Delete audit streams**. |

> [!NOTE]
> If the **Limit user visibility and collaboration to specific projects** preview feature is enabled for the organization, users in the **Project-Scoped Users** group can't access **Auditing** and have limited access to **Organization settings** pages. For more information and important security-related details, see [Limit user visibility for projects and more](../../../user-guide/manage-organization-collection.md#limit-user-visibility-for-projects-and-more).
