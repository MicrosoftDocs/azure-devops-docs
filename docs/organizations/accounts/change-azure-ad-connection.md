---
title: Switch to another Microsoft Entra ID
titleSuffix: Azure DevOps Services
ms.custom: engagement-fy23
description: Learn how to change or switch your organization connection to a different Microsoft Entra ID.
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 11/08/2024
monikerRange: 'azure-devops'
---

# Change your organization connection to a different Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article explains how to switch your organization's connection from one Microsoft Entra ID to another. When you change directories, your project resources remain unaffected.

You might want to switch to a different directory to align with organizational changes, such as mergers or acquisitions, or to consolidate multiple directories for better management and security.

For more information about using Microsoft Entra ID with Azure DevOps, see the [conceptual overview](access-with-azure-ad.md).

## Prerequisites

- **Permissions:** Be a member of the Project Collection Administrator group for the organization.

- **Access:**
  - Be a member in the destination Microsoft Entra ID. For more information, see how to [convert a Microsoft Entra guest into a member](faq-azure-access.yml).
  - Be a member or a guest in the source Microsoft Entra ID.

- **User management:** 
  - Confirm there are 100 or fewer users in your organization. If your organization has more than 100 users, [contact Support](https://azure.microsoft.com/support/devops/) to resolve any disconnected users. You can map them to their Microsoft Entra identities in the new tenant.
  - Don't add the users from the destination Microsoft Entra ID into the Azure DevOps organization.

- **SSH keys:** Request that SSH keys get manually cleared by [Support](https://azure.microsoft.com/support/devops/) before you switch directories. You can find the steps for how to recreate SSH keys [further in this article](#inform-users-microsoft-entra-change). For more information, see the [FAQ](faq-azure-access.yml).

### Custom domains

If you [add any new custom domains](/azure/active-directory/fundamentals/add-custom-domain) to your Microsoft Entra directory, contact [Support](https://azure.microsoft.com/support/devops/) before you migrate customers over to the new custom domain as this action breaks the mapping for existing identities.

> [!IMPORTANT]
> After the transfer, users and groups who inherit membership and permissions from a Microsoft Entra group no longer inherit those permissions. Microsoft Entra groups added to your Azure DevOps organization won't be transferred and cease to exist in your organization when the Microsoft Entra connection is changed. All permissions and membership relationships associated with these Microsoft Entra groups also cease to exist after the transfer.

<a name='change-the-azure-ad-connection'></a>

## Change the Microsoft Entra connection

1. Sign into your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing highlighted Organization settings button.":::

3. Select **Microsoft Entra ID**, and then **Switch directory**.

   :::image type="content" source="media/change-azure-ad-connection.md/select-switch-directory.png" alt-text="Screenshot showing Switch directory button emphasized.":::

4. Select a directory from the dropdown menu, and then select **Connect**.

   :::image type="content" source="media/shared/select-directory-connect.png" alt-text="Screenshot showing Microsoft Entra dropdown menu, and then Connect button emphasized.":::

   If you can't find your directory, contact your Microsoft Entra administrator to request to get added as a member to the Microsoft Entra ID.

5. Select **Sign out**.

   :::image type="content" source="media/shared/connect-success-dialog.png" alt-text="Screenshot showing Sign out button emphasized.":::

    Your organization connects to your Microsoft Entra ID.

6. Confirm that the process is complete by signing out. Open your browser in a private session and sign in to your organization using your Microsoft Entra ID or work credentials.

7. If some of your members are disconnected during this process, an error message like the following example appears on the Microsoft Entra page. Choose **Resolve** to map the disconnected users. For more information, see [FAQs](./faq-azure-access.yml#users-disconnected-after-tenant-switch).

   :::image type="content" source="media/shared/azure-ad-select-resolve-for-disconnected-users.png" alt-text="Screenshot showing Resolve button emphasized.":::

   :::image type="content" source="media/shared/resolve-disconnected-users.png" alt-text="Screenshot showing Resolve disconnected users dialog.":::

<a name='inform-users-microsoft-entra-change'></a>

[!INCLUDE [inform-users-microsoft-entra-change](includes/inform-users-microsoft-entra-change.md)]

## Related articles

- [Rename a project](../projects/rename-project.md)
- [Rename an organization](rename-organization.md)
- [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
- [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Disconnect your organization from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
