---
title: Assign an owner to an orphaned organization
titleSuffix: Azure DevOps Services
description: Learn how to assign a new owner to an organization when the current owner's inactive.
ms.subservice: azure-devops-organizations
ms.assetid: b81adafa-adac-4e80-baa6-140fb58fbeff
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 10/10/2024
monikerRange: 'azure-devops'
---

# Assign an owner to an orphaned organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When the organization owner and all project collection administrators are inactive, the organization is considered orphaned. An orphaned organization doesn't have an administrator, so there's no way to transfer administrator rights to another user.

But, organizations connected to Microsoft Entra ID can transfer ownership to an active user.

> [!NOTE]
> If your organization isn't considered orphaned and you want to change the owner, see [Change organization owner](change-organization-ownership.md).

## Prerequisites

- **Permissions:** Be an [Azure DevOps Administrator](/azure/active-directory/users-groups-roles/directory-assign-admin-roles#azure-devops-administrator) in Microsoft Entra ID. If using [Privileged Identity Management,](/azure/active-directory/privileged-identity-management/pim-configure?msclkid=303229fdc6c111ecaf0f666b2dd9cd6f) the Azure DevOps Administrator should be of type [Active](/azure/active-directory/privileged-identity-management/pim-how-to-add-role-to-user?msclkid=5cdc55f5c6c011eca737e344cbe17b42). Being a Project Collection Administrator isn't required.
  - The Azure DevOps Administrator role can only claim ownership of organizations when the current owner and all members of the Project Collection Administrators group are inactive in the backing Microsoft Entra ID. Azure DevOps and Microsoft Entra ID define inactive user accounts the same way. For more information, see [What are inactive user accounts?](/azure/active-directory/reports-monitoring/howto-manage-inactive-user-accounts).

### Find your Azure DevOps Administrator

If you don't know who the Azure DevOps Administrator is for your organization, follow these steps to find out:

1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Go to the Microsoft Entra ID section as described in [View and assign administrator roles in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-manage-roles-portal).
3. In the Microsoft Entra ID section, look for users assigned to the Azure DevOps Administrator role. For more information about Microsoft Entra roles, see [Administrator role permissions in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-assign-admin-roles).

Once you identify the Azure DevOps Administrator, they can follow the steps in [Change Azure DevOps owner](change-organization-ownership.md) to claim ownership of the target Azure DevOps organization. 

## When you don't have an Azure DevOps Administrator

When your Microsoft Entra tenant doesn't have an Azure DevOps Administrator, do the following steps:

1. Find your Microsoft Entra Global Administrator or Privileged Role Administrator. These administrators can be found in the [Azure portal](https://portal.azure.com/), as described in [View and assign administrator roles in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-manage-roles-portal). To learn more about Microsoft Entra roles, see [Administrator role permissions in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-assign-admin-roles).  
2. Ask your Privileged Role Administrator to assign the Azure DevOps Administrator role to the appropriate users.

    > [!NOTE]
    > Any changes to role membership may take up to an hour to propagate to Azure DevOps.  

3. The Azure DevOps Administrator can now complete the steps in [Change Azure DevOps owner](change-organization-ownership.md) to claim ownership of the target Azure DevOps organization.  

## When your Azure DevOps Administrator is a member of the target organization

When your Azure DevOps Administrator in Microsoft Entra ID *is* a member of the target Azure DevOps organization, do the following steps.

1. As the Azure DevOps Administrator, sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select **Organization settings**, and then **Overview**.

3. In the warning message, select **Change owner**.

    ![Screenshot of warning, PCA and Owner inactive in Microsoft Entra ID.](media/change-organization-ownership/warning-message-change-owner.png)

4. Select a user from the dropdown menu, or search for a user by entering the user's name, provide a short justification, and then select **Change**.

    ![Screenshot of button highlighted by red box, Change owner.](media/change-organization-ownership/change-organization-owner.png)

A notification of the ownership transfer with your provided justification gets sent to all Azure DevOps Administrators in your Microsoft Entra ID.

## When your Azure DevOps Administrator isn't a member of the target organization

When your Azure DevOps Administrator in Microsoft Entra ID *isn't* a member of the target Azure DevOps organization, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) using the credentials granted to the Azure DevOps Administrator role in Microsoft Entra ID.
    An error page appears where you can Claim Ownership.

      ![Screenshot of 401 message: Microsoft Entra Administrator not member of organization.](media/change-organization-ownership/error-message-administrator-not-member-of-organization.png)

2. Select **Claim Ownership**. Provide a short justification, and then select **Claim Ownership** once again. All Azure DevOps Administrators in your Microsoft Entra ID receive a notification of the ownership transfer, which includes your provided justification.

   ![Screenshot showing empty box, where you enter justification and claim ownership of the organization.](media/change-organization-ownership/claim-ownership.png)

   A notification of the ownership transfer with your provided justification is sent to all Azure DevOps Administrators in your Microsoft Entra ID.

   You're redirected to the organization overview page. To transfer ownership to another user, see [Change organization owner](change-organization-ownership.md).

## Related articles

- [Change the organization owner](change-organization-ownership.md)
- [Review administrator role permissions in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-assign-admin-roles)
- [Delete an organization](delete-your-organization.md)
- [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)