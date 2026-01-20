---
title: Connect organization to Microsoft Entra ID
titleSuffix: Azure DevOps Services
description: Connect Azure DevOps to Microsoft Entra ID for enterprise security, single sign-on, centralized user management, and seamless authentication.
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 01/13/2026
monikerRange: 'azure-devops'
ms.custom: sfi-image-nochange
---

# Connect your organization to Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Connect your Azure DevOps organization to [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis) to enable enterprise-grade security, streamlined user management, and unified authentication across your organization's Microsoft services.

**Key benefits of connecting to Microsoft Entra ID:**
- **Single sign-on**: Users authenticate with their existing work credentials
- **Centralized user management**: Use your organization's existing identity infrastructure
- **Enhanced security**: Apply conditional access policies and security controls
- **Seamless collaboration**: Add existing organization members without separate account creation
- **Compliance**: Meet enterprise security and governance requirements

This article provides step-by-step guidance for connecting your Azure DevOps organization to Microsoft Entra ID, including preparation, connection procedures, and post-connection validation.

> [!TIP]
> For comprehensive information about using Microsoft Entra ID with Azure DevOps, see the [conceptual overview](access-with-azure-ad.md).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|
|**Access levels**|- Member in the destination Microsoft Entra ID. For more information, see how to [convert a Microsoft Entra guest into a member](faq-azure-access.yml).<br>- Member or a guest in the source Microsoft Entra ID.|
|**User management** |- 100 or fewer users in your organization. If your organization has more than 100 users, [contact Support](https://azure.microsoft.com/support/devops/) to resolve any disconnected users. You can map them to their Microsoft Entra identities in the new tenant.<br>- Don't add the users from the destination Microsoft Entra ID into the Azure DevOps organization.<br>- Delete unwanted users from your organization. For example, you can remove a user who left the company and is no longer an employee.<br>- Inform users of the upcoming change. There's no downtime during this change, but users are affected. Let them know before you begin that there's a short [series of steps](#inform-users-microsoft-entra-change) they need to complete. As your company transitions from Microsoft account (MSA) to Microsoft Entra identities, your users' benefits continue with their new identity, as long as their emails match.<br>- Compare your Azure DevOps email list with your Microsoft Entra ID email list. Create a Microsoft Entra ID email address entry for every user who's in the Azure DevOps organization and not in the Microsoft Entra ID. Afterward, you can [invite users as guests](add-external-user.md) who don't have Microsoft Entra ID email addresses.|
|**SSH keys** |Request that SSH keys get manually cleared by [Support](https://azure.microsoft.com/support/devops/) before you switch directories. Find the steps for how to recreate SSH keys [further in this article](#inform-users-microsoft-entra-change). For more information, see the [FAQ](faq-azure-access.yml).|
    
> [!NOTE]
> Ensure you're using Microsoft Entra Public. Connecting Azure DevOps Services organizations to Microsoft Entra Government and accessing Azure DevOps Services with user accounts from Microsoft Entra Government isn't supported.

<a name='connect-your-organization-to-azure-ad'></a>

## Connect your organization to Microsoft Entra ID

Follow these steps to establish the connection between your Azure DevOps organization and Microsoft Entra ID:

1. **Access organization settings**: Sign in to your organization at `https://dev.azure.com/{yourorganization}` and select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot showing highlighted Organization settings button.":::

1. **Initiate directory connection**: In the organization settings, select **Microsoft Entra ID** from the left navigation, then select **Connect directory** to begin the connection process.

   :::image type="content" source="media/shared/select-azure-ad-connect-directory.png" alt-text="Screenshot shows the Connect directory button for connecting your organization to Microsoft Entra ID.":::

1. **Configure directory connection**: From the dropdown menu, select your target Microsoft Entra ID directory, then select **Connect** to establish the connection.

   :::image type="content" source="media/shared/select-directory-connect.png" alt-text="Screenshot shows your Microsoft Entra ID selection, and then the Connect button.":::
   
   > [!NOTE]
   > If your directory doesn't appear in the dropdown, contact your Microsoft Entra administrator to request membership in the Microsoft Entra ID.

1. **Complete the connection**: When prompted, select **Sign out** to finalize the connection.

   :::image type="content" source="media/shared/connect-success-dialog.png" alt-text="Screenshot shows Connect success dialog - select Sign out.":::

   Your organization is now connected to your Microsoft Entra ID.

1. **Resolve user mapping**: Sign back in to Azure DevOps with your Microsoft Entra ID credentials. Navigate to **Organization settings** > **Users** to review user status. For any disconnected members, select **Resolve** to map them to their Microsoft Entra identities or invite them as guests.

   :::image type="content" source="media/shared/azure-ad-select-resolve-for-disconnected-users.png" alt-text="Screenshot shows selecting the Resolve button to invite unmapped users.":::

   :::image type="content" source="media/shared/resolve-disconnected-users.png" alt-text="Screenshot shows mapping disconnected users.":::

> [!TIP]
> For detailed guidance on resolving user mapping issues, see the [connection FAQs](./faq-azure-access.yml#faq-connect).

<a name='inform-users-microsoft-entra-change'></a>
[!INCLUDE [inform-users-microsoft-entra-change](includes/inform-users-microsoft-entra-change.md)]

## Post-connection validation

After successfully connecting your organization to Microsoft Entra ID, verify these key aspects:

### Security and access validation

> [!div class="checklist"]
> * **Authentication testing**: Sign out completely, then open a private browser session and sign in to your organization using your Microsoft Entra ID credentials
> * **Access verification**: Confirm you can access your organization at `https://dev.azure.com/{yourorganization}` with your work credentials
> * **Single sign-on functionality**: Users can sign in with their existing work credentials
> * **User mapping completeness**: All active users are properly mapped to Microsoft Entra identities
> * **Permissions integrity**: User roles and permissions remain intact after connection
> * **External user access**: Guest users can still access resources as intended

### Operational verification

> [!div class="checklist"]
> * **Project access**: Teams can access their projects and repositories without issues
> * **Service connections**: Build and release pipelines function correctly
> * **Integrations**: Non-microsoft tools and extensions continue working
> * **SSH access**: Users recreated SSH keys if needed

### Administrative monitoring

> [!div class="checklist"]
> * **Audit logs**: Review connection events in Microsoft Entra ID audit log
> * **User feedback**: Monitor for any authentication or access issues
> * **Support requests**: Address any user questions or connection problems

> [!TIP]
> Keep communication channels open with your users for the first few days after connection to quickly address any issues.

## Related content

* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-microsoft-entra-id.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
* [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
* [Change Microsoft Entra connection](change-azure-ad-connection.md)
* [View frequently asked questions (FAQs) about connecting, disconnecting, or changing your Microsoft Entra ID](./faq-azure-access.yml)
