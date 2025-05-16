---
title: Delete, remove users from team, project, organization
titleSuffix: Azure DevOps
description: Steps for how to delete or remove organization users from Azure DevOps and remove users from a team or project.
ms.subservice: azure-devops-organizations
ms.topic: conceptual
ms.assetid: d3a31878-a869-45a9-9bca-f46cc2682596
ms.author: chcomley
author: chcomley
ms.date: 10/23/2024
monikerRange: "<=azure-devops"
---

# Remove users from Azure DevOps  

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

If users no longer require access to a team, project, or organization, you can remove their access. Removing access ensures that only authorized users can view and interact with your organization's data and resources. This article provides step-by-step instructions on how to remove user access from a team, project, or organization in Azure DevOps. By following these guidelines, you can ensure that your organization's security and resource management practices remain robust and up-to-date. 

> [!IMPORTANT]
> - Removing a user from a team or project doesn’t remove them from the organization.
> - Work items assigned to the user aren't affected by removing their access.
> - For Microsoft Entra ID-backed organizations:
>    - Removing a user from Microsoft Entra ID prevents assigning new artifacts (for example, work items or pull requests) to that user. However, the history of already assigned artifacts is preserved.
>    - Removing a user from the organization doesn't remove their memberships in any Microsoft Entra groups. If the user is a member of an access-granting Microsoft Entra group, they still have access to Azure DevOps. To completely remove the user, ensure they aren't in any access-granting Microsoft Entra groups. For more information, see [Manage access with Microsoft Entra groups](manage-azure-active-directory-groups.md).
> - For Managed Service Account (MSA)-backed organizations: Removing a user from your MSA-backed organization doesn't remove them from the tenant, and they can be re-added at any time.

## Prerequisites  

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Remove users from your organization

[!INCLUDE [image-differences](../../includes/image-differences.md)]

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2020"

1. Sign in to your organization: ```https://dev.azure.com/{yourorganization}```.

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

    ![Screenshot showing highlighted Users button within Organization settings.](../../media/open-organization-settings-users-preview.png)

4. Select **...** next to the user you want to remove. Then, choose **Remove from organization**. If this option isn't available, see the [prerequisites](#prerequisites).
   
   ![Screenshot showing removal of a user from your organization.](media/delete-user/remove-user-from-organization-preview.png)

5. Select **Remove** in the confirmation dialog.

6. If you deleted paid users with Basic or higher features, [reduce the users in Organization settings](../billing/buy-basic-access-add-users.md#reduce-charges-for-users-with-no-access) to avoid charges in your next Azure billing cycle.

To reduce or cancel users for the next month, make updates before the last day of the current month. Your bill reflects these changes in the following month, as paid users get billed monthly.

::: moniker-end

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range=" azure-devops"

> [!NOTE]
> The Azure DevOps CLI does not support adding and removing service principals.

[Add a user](add-organization-users.md#add-user) | [List users](../security/export-users-audit-log.md#list-users) | [Remove a user](#remove-user) | [Update a user](add-organization-users.md#update-user) | [Show users](add-organization-users.md#show-users)

<a id="remove-user"></a> 

### Remove a user 

You can remove a user from an organization by using the [az devops user remove](/cli/azure/devops/user#az-devops-user-remove) command. To get started, see [Azure DevOps CLI](../../cli/index.md).

```azurecli
az devops user remove --user
                      [--org]
                      [--yes]
```

#### Parameters

- **user**: The email address or ID of the user. 
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **yes**: Don't prompt for confirmation.

#### Example

The following command removes the user with the email address contoso@contoso.com from the contoso organization.  

```azurecli
az devops user remove --user contoso@contoso.com --org https://dev.azure.com/contoso/ --yes
```

::: moniker-end

[!INCLUDE [note-cli-not-supported](../../includes/note-cli-not-supported.md)]

* * * 

## Remove users from a team or project

To remove users from a project, remove them from the **Teams** groups they belong to or the **Contributors** group for the project. For more information, see [Add users to a project or specific team](../../organizations/security/add-users-team-project.md). You can remove a user from the **Members** page of a team group or security group.

![Screenshot showing removal of a user from a security group, new navigation.](media/delete-user/remove-user-vert.png)

## Related articles

- [Change project collection-level permissions](../security/change-organization-collection-level-permissions.md)  
- [Request an increase in permission levels](../../organizations/security/request-changes-permissions.md)
- [Manage access to specific features and functions](../../organizations/security/restrict-access.md)
- [Troubleshoot adding and deleting organization users](faq-user-and-permissions-management.yml)
- [Export a list of users and their access levels](../security/export-users-audit-log.md)
