---
title: Connect organization to Microsoft Entra ID
titleSuffix: Azure DevOps Services
description: Learn how to connect your organization to your Microsoft Entra ID
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: 'azure-devops'
ms.custom: sfi-image-nochange
---

# Connect your organization to Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article shows how to connect your Azure DevOps organization to [Microsoft Entra ID](/azure/active-directory/fundamentals/active-directory-whatis). You can sign in with the same credentials that you use with Microsoft services. Add members to your Azure DevOps organization who are already a part of your work organization. You can also enforce policies for accessing your team's critical resources and key assets. 

For more information about using Microsoft Entra ID with Azure DevOps, see the [conceptual overview](access-with-azure-ad.md).

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

To connect your organization to Microsoft Entra ID, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)
3. Select **Microsoft Entra ID**, and then select **Connect directory**.

   ![Select Connect directory to connect your organization to Microsoft Entra ID](media/shared/select-azure-ad-connect-directory.png)

4. Select a directory from the dropdown menu, and then select **Connect**.

   ![Select your Microsoft Entra ID, and then Connect](media/shared/select-directory-connect.png)
   
   If you can't find your directory, contact your Microsoft Entra administrator and request that they add you as a member to the Microsoft Entra ID.

5. Select **Sign out**.

   ![Connect success dialog - select Sign out](media/shared/connect-success-dialog.png)

    Your organization is connected to your Microsoft Entra ID.

6. Confirm that the process is complete. Sign out, and then open your browser in a private session and sign in to your organization with your Microsoft Entra ID or work credentials.

7. Sign back in to Azure DevOps and map any disconnected members to their Microsoft Entra identities. Or, you can invite them as guests into the Microsoft Entra ID. For more information, see the [FAQs](./faq-azure-access.yml#faq-connect).

   ![Select Resolve to invite unmapped users](media/shared/azure-ad-select-resolve-for-disconnected-users.png)

   ![Mapping disconnected users](media/shared/resolve-disconnected-users.png)

<a name='inform-users-microsoft-entra-change'></a>
[!INCLUDE [inform-users-microsoft-entra-change](includes/inform-users-microsoft-entra-change.md)]

## Related articles

* [Get a list of organizations backed by Microsoft Entra ID](get-list-of-organizations-connected-to-microsoft-entra-id.md)
* [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
* [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
* [Change Microsoft Entra connection](change-azure-ad-connection.md)
* [View frequently asked questions (FAQs) about connecting, disconnecting, or changing your Microsoft Entra ID](./faq-azure-access.yml)
