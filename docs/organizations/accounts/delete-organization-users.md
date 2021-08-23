---
title: Delete, remove users from team, project, organization
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Steps for how to delete or remove organization users from Azure DevOps and remove users from a team or project.
ms.technology: devops-accounts
ms.topic: conceptual
ms.assetid: d3a31878-a869-45a9-9bca-f46cc2682596
ms.author: chcomley
author: chcomley
ms.date: 12/08/2020
monikerRange: '>= azure-devops-2019'
---

# Remove users from Azure DevOps  

[!INCLUDE [version-azure-devops-plus-azure-devops-server-2020](../../includes/version-azure-devops-plus-azure-devops-server-2020.md)]

If users no longer require access to a team, project, or your organization, you can remove their access. Work items that are assigned to the users aren't affected by removing user access.

## Prerequisites  

- You need [Project Collection Administrator or organization Owner permissions](../../organizations/security/set-project-collection-level-permissions.md?toc=/azure/devops/organizations/accounts/toc.json&bc=/azure/devops/organizations/accounts/breadcrumb/toc.json).

## Remove users from your organization

::: moniker range=">= azure-devops-2020"

> [!NOTE]   
> To enable the new user interface for the New user hub, see [Enable preview features](../../project/navigation/preview-features.md).

::: moniker-end

#### [Preview page](#tab/preview-page) 

::: moniker range=">= azure-devops-2020"

1. Sign in to your organization: ```https://dev.azure.com/{yourorganization}```.

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

    ![Organization settings > Users](../../media/open-organization-settings-users-preview.png)

4. Select **...**  for the user to be removed. Select **Remove from organization**.

   ![Remove a user from your organization](media/delete-user/remove-user-from-organization-preview.png)

5. Choose **Remove** in the confirmation dialog.

   ![Confirm removing an existing user](media/delete-user/confirm-remove-existing-user-preview.png)

6. Removing a user from the organization doesn't remove their memberships to any security groups. If the user is a member of an access-granting security group, then the user still has access to Azure DevOps, even after you remove them from the organization. If you'd like to completely remove the user from the organization, make sure they aren't in any of your [security groups](../../organizations/security/add-users-team-project.md). 

   [Why don't users appear or disappear promptly after I add or delete them in the Users Services page?](faq-user-and-permissions-management.yml#users-delay)

7. If you deleted paid users who had Basic or higher features, also [reduce the users in Organization settings](../billing/buy-basic-access-add-users.md#reduce-charges-for-users-who-no-longer-need-access). Then you're not charged in your next Azure billing cycle.

   To reduce or cancel users for the next month, make updates before the last day of the current month.
   Your bill won't show the changes until the next month because paid users are monthly purchases.

> [!NOTE]
> - Azure Active Directory (Azure AD)-backed organizations: After you remove a user from Azure AD, you can't assign artifacts to that user anymore. Examples are work items and pull requests. However, we preserve the history of artifacts that were already assigned to the user.
> - Managed service account (MSA)-backed organizations: After you remove a user from your MSA-backed organization, the user remains within the tenant and can be re-added at any time.

::: moniker-end

Choose the **Current page** tab for instructions. 

#### [Current page](#tab/current-page)

::: moniker range="azure-devops-2019 || azure-devops"

1. Sign in to your organization: ```https://dev.azure.com/{yourorganization}```.

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Users**.

    ![Organization settings, users](../../media/settings/open-organization-settings-users-vert.png)

4. Open the context menu **...**  for the user to be removed. Select **Remove from organization**.

   ![Remove user from organization](media/delete-user/remove-user-from-organization-new.png)

5. Choose **Remove** in the confirmation dialog.

   ![Confirm to remove an existing user](media/delete-user/confirm-remove-existing-user.png)

6. To confirm that you've removed the users completely, make sure they aren't in any of your [security groups](../../organizations/security/add-users-team-project.md). 

   [Why don't users appear or disappear promptly after I add or delete them in the Users Services page?](faq-user-and-permissions-management.yml#users-delay)

7. If you deleted paid users who had Basic or higher features, also [reduce the users in Organization settings](../billing/buy-basic-access-add-users.md#reduce-charges-for-users-who-no-longer-need-access). Then you're not charged in your next Azure billing cycle.

   To reduce or cancel users for the next month, make updates before the last day of the current month.
   Your bill won't show the changes until the next month because paid users are monthly purchases.

> [!NOTE]
> - Azure Active Directory (Azure AD)-backed organizations: After you remove a user from Azure AD, you can't assign artifacts to that user anymore. Examples are work items and pull requests. However, we preserve the history of artifacts that were already assigned to the user.
> - Managed service account (MSA)-backed organizations: After you remove a user from your MSA-backed organization, the user remains within the tenant and can be re-added at any time.

::: moniker-end

The **Users page** isn't available for on-premises server instances. However, you can use Azure DevOps CLI to manage users for Azure DevOps Server 2020.

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range=">= azure-devops-2020"

[Add a user](add-organization-users.md#add-user) | [List users](../security/export-users-audit-log.md#list-users) | [Remove a user](#remove-user) | [Update a user](add-organization-users.md#update-user) | [Show users](add-organization-users.md#show-users)

<a id="remove-user" /> 

### Remove a user 

You can remove a user from an organization by using the [az devops user remove](/cli/azure/devops/user#ext-azure-devops-az-devops-user-remove) command. To get started, see [Azure DevOps CLI](../../cli/index.md).

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

To remove users from a project, remove them from the **Teams** groups they belong to or the **Contributors** group for the project. See [Add users to a project or specific team](../../organizations/security/add-users-team-project.md). You can remove a user from the **Members** page of a team group or security group.

![Remove a user from a security group, new navigation](media/delete-user/remove-user-vert.png)

## Related articles

- [Set permissions at the project level or project collection level](../../organizations/security/set-project-collection-level-permissions.md). 
- [Change individual permissions and grant select access to specific functions](../../organizations/security/change-individual-permissions.md)
- [Grant or restrict access to select features and functions](../../organizations/security/restrict-access.md)
- [Troubleshoot adding and deleting organization users](faq-user-and-permissions-management.yml)
- [Export a list of users and their access levels](../security/export-users-audit-log.md)
