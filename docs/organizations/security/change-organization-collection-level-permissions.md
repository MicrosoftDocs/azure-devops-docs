---
title: Manage organization or collection level permissions
titleSuffix: Azure DevOps
description: Learn how to manage permissions at the organization or collection level in Azure DevOps.
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 10/29/2025
---

# Manage organization or collection-level permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"
This article shows you how to manage permissions that are set at the organization level if you are a member of the **Project Collection Administrators** group. An organization is a container for multiple projects that share resources. For more information, see [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
::: moniker-end

::: moniker range="< azure-devops"
This article shows you how to manage permissions that are set at the project collection level if you are a member of the **Project Collection Administrators** group. A project collection is a container for multiple projects that share resources. For more information, see [About projects and scaling your organization](../../organizations/projects/about-projects.md).
::: moniker-end

## Organization or collection-level permissions

[!INCLUDE [collection-level-permissions](./includes/collection-level-permissions.md)]

> [!NOTE]
> **Project Collection Administrators** can manage organization or collection-level security groups and group membership, and edit permission access control lists (ACLs). This permission isn't controlled through the Azure DevOps user interface.

## Prerequisites

|Category  | Requirements |
|-------------|-------------|
| **Permissions** | Member of the [Project Collection Administrators](look-up-project-collection-administrators.md) group. The creator of the organization or collection is automatically a member of this group. |
| **Directory services** | Security groups defined in Microsoft Entra ID or Active Directory before being added to Azure DevOps. For more information, see [Add an Active Directory / Microsoft Entra group to a built-in security group](add-ad-aad-built-in-security-groups.md). |

> [!NOTE]
> Users with **Stakeholder** access can't access some features even if they have permissions to those features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).

::: moniker range="azure-devops"

> [!NOTE]
> Members of the **Project-scoped Users** group can't access most organization settings or permissions. For more information, see [Limit user visibility](../../user-guide/manage-organization-collection.md#project-scoped-user-group).

::: moniker-end

### Security groups

Adding security groups to a collection is similar to adding them to a project. To add a custom security group, first [define it in Microsoft Entra ID or Active Directory](add-ad-aad-built-in-security-groups.md) and then [create the group](add-remove-manage-user-group-security-group.md) in Azure DevOps.

For more information, see [Use security groups to manage users and groups](add-remove-manage-user-group-security-group.md) and [About permissions and security groups](about-permissions.md#permission-states).

[!INCLUDE [hidden-security-groups](includes/hidden-security-groups.md)]

<a id="add-user-group"></a>
## Add members to the Project Collection Administrators group 

The following process adds users to the **Project Collection Administrators** group or any other organization- or collection-level group.

::: moniker range="azure-devops"

The user interface and process differ depending on whether you have the **Organization Permissions Settings Page v2** preview page enabled. To enable this feature, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Permissions**.

   :::image type="content" source="media/permissions/open-project-settings-permissions-preview.png" alt-text="Screenshot showing Organization settings and Permissions selections.":::

1. Select the **Project Collection Administrators** group, and on the **Members** tab, select **Add**.  

   :::image type="content" source="media/project-collection/project-admin-members-add.png" alt-text="Screenshot showing Add member.":::

1. Enter single or multiple user account or custom security group names into the **Add users, groups, service principals, and managed identities** text box. The system automatically searches for matches. Select the appropriate results.

   :::image type="content" source="media/project-collection/add-member-project-admin.png" alt-text="Screenshot showing Add users and group dialog.":::

1. Select **Save**. 

#### [Current page](#tab/current-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Security**.

   :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" alt-text="Screenshot showing selections, Project Settings and Security.":::

1. Select the **Project Collection Administrators** group, and on the **Members** tab, select **Add**.  

   :::image type="content" source="media/project-collection/admin-members-add.png"  alt-text="Screenshot of Project Settings, Security, Add member selections.":::

1. Enter single or multiple user account or custom security group names into the **User or group** text box. The system automatically searches for matches. Select the appropriate results.

   :::image type="content" source="media/project-collection/add-user.png" alt-text="Screenshot showing Add users and group dialog, current page.":::

1. Select **Save changes**.

---

::: moniker-end 

::: moniker range="< azure-devops"

1. Open the web portal and choose the collection where you want to add users or groups.

1. Select **Collection Settings** > **Security**.

1. Select **Project Collection Administrators** > **Members** > **Add**.  

1. Enter single or multiple user account or custom security group names into the **User or group** text box. The system automatically searches for matches. Select the appropriate results.

   :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Screenshot of Add users and group dialog, on-premises.":::

1. Select **Save changes**.

::: moniker-end 

## Change permissions for a group 

You can change the permissions for any organization or collection-level group except the **Project Collection Administrators** group. You can't change the permission settings for the **Project Collection Administrators** group by design.

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Permissions**.

1. Select the group whose permissions you want to change. 

1. Select the new permission settings from the dropdown list next to each permission. Changes automatically save as you set them. The following example changes several permissions for the **Stakeholder limited** group.

   :::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-group.png" alt-text="Screenshot of collection-level permissions for a selected group, preview page.":::  

#### [Current page](#tab/current-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Security**.

1. Select the group whose permissions you want to change. 

   Toggle through the settings next to each permission to select the new setting. The following example changes several permissions for the **Stakeholders Limited** group.

   :::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Permissions for a selected group, current page.":::  

1. After making all changes, select **Save changes**.

---

::: moniker-end

::: moniker range="< azure-devops"

1. In the left navigation menu of your Azure DevOps organization, select **Collection settings** > **Security**.

1. Select the group whose permissions you want to change. 

   Toggle through the settings next to each permission to select the new setting. The following example changes several permissions for the **Stakeholders Limited** group.

   :::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Permissions for a selected group, current page.":::  

1. After making all changes, select **Save changes**.

::: moniker-end

## Change permissions for a user 
 
You can change the collection-level permissions for a specific user. For more information, see [Permission states](about-permissions.md#permission-states).

::: moniker range="azure-devops"

#### [Preview page](#tab/preview-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Permissions**.

1. Select the **Users** tab, and then search for and select the user whose permissions you want to change.

   :::image type="content" source="media/change-project-level/choose-users-select-user.png" alt-text="Screenshot of Users tab, choose a user.":::

1. Change the setting for one or more permissions by selecting from the dropdown list next to the permission. Changes automatically save as you set them. The following example changes several permissions for user **fabrikamfiber1@hotmail.com**.

   :::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user.png" alt-text="Screenshot of selected users, Permissions.":::

#### [Current page](#tab/current-page) 

1. In the left navigation menu of your Azure DevOps organization, select **Organization settings** > **Security**.

1. In the **Filter users and groups** text box, search for and select the name of the user whose permissions you want to change.

1. Change the assignment for one or more permissions. The following example changes several permissions for the user **fabrikamfiber1@hotmail.com**. 

   :::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user, change Edit project-level information permission level.":::   

1. Select **Save changes**.

---

::: moniker-end

::: moniker range="< azure-devops"

1. In the left navigation menu of your Azure DevOps organization, select **Collection settings** > **Security**.

1. In the **Filter users and groups** text box, search for and select the name of the user whose permissions you want to change.

1. Change the assignment for one or more permissions. The following example changes several permissions for the user **fabrikamfiber1@hotmail.com**. 

   :::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user, change Edit project-level information permission level.":::   

1. Select **Save changes**.

## On-premises deployments

For more information about on-premises deployments, see the following articles: 

- [Add a user as an Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator) 
- [Azure DevOps Server service account groups](/azure/devops/server/admin/service-accounts-dependencies)  

If your on-premises deployment is integrated with SQL Server Reports, manage membership for those products separately from their websites. For more information, see [Grant permissions to view or create SQL Server reports](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

## FAQs

#### When do I need to add someone to the Project Collection Administrator role?

It varies, but in most organizations, **Project Collection Administrators** manage the collections created by the **Team Foundation Administrators** group. **Project Collection Administrators** don't create collections but handle tasks like creating team projects, adding users to groups, and modifying collection settings.

#### What are the optimal permissions to administer a project collection across all of its components and dependencies?

**Project Collection Administrators** need the following permissions:

- For Team Foundation Server: Members of the **Project Collection Administrators** group, or have the necessary [collection-level permissions](../../organizations/security/permissions.md#collection) set to **Allow**.
- For SharePoint products: Members of the **Site Collection Administrators** group if the collection includes a site collection resource.
- For Reporting Services: Members of the **Team Foundation Content Manager** group if the collection includes reporting resources.

#### I'm an admin, but I don't have permission to add a Project Collection Administrator. What permissions do I need?

You need the following permissions:
- **Project Collection Administrator** membership, or **View Server-Level Information** and **Edit Server-Level Information** permissions set to **Allow**.
- For SharePoint products, membership in the **Site Collection Administrators** or **Farm Administrators** group.
- For Reporting Services, membership in the **Content Managers** or **Team Foundation Content Managers** group.

> [!IMPORTANT]
> To create project collections and do other administrative tasks, users need administrative permissions. The service account for the Team Foundation Background Job Agent must also have specific permissions. For more information, see [Service accounts and dependencies in Team Foundation Server](/azure/devops/server/admin/service-accounts-dependencies) and [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).

::: moniker-end 
 
## Next step

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related content

- [Look up a project collection administrator](look-up-project-collection-administrators.md)
- [Manage users, groups, and security groups](add-remove-manage-user-group-security-group.md)
- [Request an increase in permission levels](request-changes-permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Set object-level permissions](set-object-level-permissions.md)

