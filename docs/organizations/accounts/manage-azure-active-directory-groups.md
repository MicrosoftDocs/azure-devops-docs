---
title: Manage access with Microsoft Entra groups
titleSuffix: Azure DevOps Services
description: Learn how to control who can access Azure DevOps with Microsoft Entra groups
ms.subservice: azure-devops-organizations
ms.assetid: 882E6E07-F407-478A-9DCC-9324493CBE11
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 03/17/2025
monikerRange: 'azure-devops'
---


# Manage access with Microsoft Entra groups

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

To control access to your team's critical resources and key business assets in Azure DevOps Services, use Microsoft services like Microsoft 365 or [Microsoft Entra ID](/entra/fundamentals/whatis). [Microsoft Entra ID works with your organization](access-with-azure-ad.md) to control access and authenticate users.

Organize your directory members with [Microsoft Entra groups](/azure/active-directory/fundamentals/active-directory-manage-groups) and manage permissions in bulk for your organization. Add these groups to built-in groups like Project Collection Administrators or Contributors, or to custom groups like your project management team. Microsoft Entra group members inherit permissions from the Azure DevOps group, so you don't have to manage group members individually.

For more information on [Microsoft Entra ID benefits](/azure/active-directory/fundamentals/active-directory-whatis) and how to [control organization access with Microsoft accounts or Microsoft Entra ID](access-with-azure-ad.md), see the provided links.

> [!NOTE]
> Due to a functional limitation on Microsoft Graph, [service principals](../../integrate/get-started/authentication/service-principal-managed-identity.md) don't appear in any list of Microsoft Entra group members on Azure DevOps. Permissions set on any Microsoft Entra groups still apply to any service principals in the group that were added to the organizations, even if they aren't displaying on the web UI.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| - Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.<br>- Microsoft Entra Administrator in the [Azure portal](https://portal.azure.com).|
|**Access levels**| At least **Basic** access.|

<a name='add-an-azure-ad-group-to-an-azure-devops-group'></a>

## Add a Microsoft Entra group to an Azure DevOps group

> [!NOTE]   
> To enable the preview feature, **Organization Permissions Settings Page v2**, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

    [Why am I asked to choose between my work or school account and my personal account?](faq-user-and-permissions-management.yml#ChooseOrgAcctMSAcct)

2.  Go to **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Choose **Permissions**, and then select the group you want to add a member to.

   ![Add a member to your selected group](media/user-hub/choose-permissions-select-group.png)

4. Select **Members**, and then select **Add**.

    ![Select Members, and then Add](media/user-hub/select-members-add.png)

    You [invite guests into Microsoft Entra ID](https://devblogs.microsoft.com/devops/inviting-directory-guests-to-aad-backed-vsts-accounts/) and into your Microsoft Entra ID-backed organizations, without waiting for them to accept. This invitation allows you to add those guests to your organization, grant access to projects, assign extensions, and more.

5. Add users or groups, and then **Save** your changes.

   ![Save add users or groups](media/user-hub/save-add-users-groups.png)

#### [Current page](#tab/current-page)

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

    [Why am I asked to choose between my work or school account and my personal account?](faq-user-and-permissions-management.yml#ChooseOrgAcctMSAcct)

2.  Go to **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Choose **Security**, select the group you want to add a member to, select **Members**, and then select **Add**.

   ![Add a member to your selected group](media/manage-azure-ad-groups/admin-settings-security-choose-group-add-member.png)
4. Add groups, and then **Save** your changes.

    ![Bulk adds members to a group](media/manage-azure-ad-groups/bulk-add-groups.png)

    You [invite guests into Microsoft Entra ID](https://devblogs.microsoft.com/devops/inviting-directory-guests-to-aad-backed-vsts-accounts/) and into your Microsoft Entra ID-backed organizations, without waiting for them to accept. This invitation allows you to add those guests to your organization, grant access to projects, assign extensions, and more.

5. Add more users or groups if needed, and then **Save** your changes.

* * *

Microsoft Entra ID changes might take up to 1 hour to be visible in Azure DevOps, but you can immediately [reevaluate your permissions](../security/request-changes-permissions.md#refresh-or-reevaluate-your-permissions).

## Configure just-in-time-access for admin groups

If you have [Project Collection Administrator](../../user-guide/manage-organization-collection.md) and [Project Administrator](../../user-guide/project-admin-tutorial.md) access, you can modify the configuration of your organization or project. To enhance security for these built-in administrator groups, consider implementing just-in-time access using a Microsoft Entra [Privileged Identity Management (PIM) group](/azure/active-directory/privileged-identity-management/concept-pim-for-groups). This approach allows you to grant elevated permissions only when needed, reducing the risk associated with permanent access.

### Configure access 

1. [Create a role-assignable group in Microsoft Entra ID](/azure/active-directory/roles/groups-create-eligible?tabs=ms-powershell&branch=main).
2. [Add your Microsoft Entra group to the Azure DevOps group](/azure/devops/organizations/security/add-ad-aad-built-in-security-groups?view=azure-devops&branch=main&tabs=preview-page&preserve-view=true). 

> [!NOTE]
>  When you configure just-in-time access using a Microsoft Entra Privileged Identity Management (PIM) group, ensure that any user with elevated access also retains standard access to the organization. This way, they can view the necessary pages and refresh their permissions as needed.

### Use access 

1. [Activate your access](/azure/active-directory/privileged-identity-management/groups-activate-roles). 
2. [Refresh your permissions](../security/request-changes-permissions.md#refresh-or-reevaluate-your-permissions) in Azure DevOps. 
3. Take the action requiring administrator access. 

> [!NOTE]
> Users have elevated access in Azure DevOps for up to 1 hour after their PIM group access gets deactivated.

## Related articles

- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Manage conditional access](change-application-access-policies.md)
