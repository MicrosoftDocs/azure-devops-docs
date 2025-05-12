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
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Assign an owner to an orphaned organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When the organization owner and all project collection administrators are inactive, the organization is considered orphaned. An orphaned organization doesn't have an administrator, so there's no way to transfer administrator rights to another user.

But, organizations connected to Microsoft Entra ID can transfer ownership to an active user.

> [!NOTE]
> If your organization isn't considered orphaned and you want to change the owner, see [Change organization owner](change-organization-ownership.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|[Azure DevOps Administrator in Microsoft Entra ID](../security/look-up-azure-devops-administrator.md). If using [Privileged Identity Management](/azure/active-directory/privileged-identity-management/pim-configure?msclkid=303229fdc6c111ecaf0f666b2dd9cd6f), the Azure DevOps Administrator should be of type [Active](/azure/active-directory/privileged-identity-management/pim-how-to-add-role-to-user?msclkid=5cdc55f5c6c011eca737e344cbe17b42).|

> [!NOTE]
> Claim ownership of organizations only when the current owner and all members of the Project Collection Administrators group are inactive in the backing Microsoft Entra ID. Azure DevOps and Microsoft Entra ID define inactive user accounts the same way. For more information, see [What are inactive user accounts?](/azure/active-directory/reports-monitoring/howto-manage-inactive-user-accounts).

### Find your Azure DevOps Administrator

The Azure DevOps Administrator can [change the Azure DevOps owner](change-organization-ownership.md) to claim ownership of the target Azure DevOps organization. 

    > [!NOTE]
    > Any changes to role membership might take up to an hour to propagate to Azure DevOps.  

## When your Azure DevOps Administrator is a member of the target organization

When your Azure DevOps Administrator in Microsoft Entra ID *is* a member of the target Azure DevOps organization, do the following steps.

1. As the Azure DevOps Administrator, sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select **Organization settings** > **Overview**.

3. In the warning message, select **Change owner**.

    ![Screenshot of warning, PCA and Owner inactive in Microsoft Entra ID.](media/change-organization-ownership/warning-message-change-owner.png)

4. Select a user from the dropdown menu, or search for a user by entering the user's name, provide a short justification, and then select **Change**.

    ![Screenshot of button highlighted by red box, Change owner.](media/change-organization-ownership/change-organization-owner.png)

A notification of the ownership transfer with your provided justification gets sent to all Azure DevOps Administrators in your Microsoft Entra ID.

## When your Azure DevOps Administrator isn't a member of the target organization

When your Azure DevOps Administrator in Microsoft Entra ID *isn't* a member of the target Azure DevOps organization, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) using the credentials granted to the Azure DevOps Administrator role in Microsoft Entra ID.
    
    An error page appears where you can claim ownership.

    ![Screenshot of 401 message: Microsoft Entra Administrator not member of organization.](media/change-organization-ownership/error-message-administrator-not-member-of-organization.png)

2. Select **Claim Ownership**, provide a short justification, and then select **Claim Ownership** once again. 
   
    A notification of the ownership transfer with your provided justification gets sent to all Azure DevOps Administrators in your Microsoft Entra ID.

   ![Screenshot showing empty box, where you enter justification and claim ownership of the organization.](media/change-organization-ownership/claim-ownership.png)

   You're redirected to the organization overview page. To transfer ownership to another user, see [Change organization owner](change-organization-ownership.md).

## Related articles

- [Change the organization owner](change-organization-ownership.md)
- [Review administrator role permissions in Microsoft Entra ID](/azure/active-directory/users-groups-roles/directory-assign-admin-roles)
- [Delete an organization](delete-your-organization.md)
- [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
