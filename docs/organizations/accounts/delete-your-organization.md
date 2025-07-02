---
title: Delete or remove an organization
titleSuffix: Azure DevOps Services
description: Learn how to permanently delete an Azure DevOps organization, what happens to users and data, recovery options, and administrator deletion capabilities for Microsoft Entra ID administrators.
ms.subservice: azure-devops-organizations
ms.assetid: 82433ad3-d665-4a11-95b7-82178f493fb5
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 07/02/2025
monikerRange: 'azure-devops'
#customer intent: As an Azure DevOps administrator, I want to permanently delete an organization I no longer need while understanding the impact on users, data recovery options, and administrator deletion capabilities.
---

# Delete an organization

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you no longer need an organization, you can delete it from Azure DevOps. If you change your mind within 28 days, you can [recover your organization](./recover-your-organization.md).
After 28 days, your organization and all associated data get permanently deleted.

When you delete your organization, the following results occur:

- **Loss of access:** Users immediately lose access to organization services and resources.
- **URL availability:** Your organization URL becomes available for anyone to use, which might take up to one hour.
- **Organization disabled:** Your organization is disabled and appears deleted in your profile for 28 days.
- **Billing unlinking:** If your organization is linked to an Azure subscription for billing, you must unlink it before deletion. You're still charged for any paid users and services used during the current billing cycle. Billing stops after the current cycle ends.
- **Azure account access:** Deleting an organization in Azure DevOps doesn't directly affect users' access to their Azure accounts in portal.azure.com. Users still retain access to Azure accounts and other services, as the deletion is specific to the Azure DevOps organization and its associated data.

> [!CAUTION]
> In rare cases, our deletion process might take up to 70 days due to backend retries and the need to delete data from multiple sources.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.|
|**Access levels**| At least **Basic** access.|
|**Subscription** |If your organization uses an Azure subscription for billing, [remove billing from your organization](../billing/change-azure-subscription.md#remove-your-billing-subscription) before deleting it in Azure DevOps.|

## Delete organization

To delete an organization, do the following steps:

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Overview** > **Delete**.

   ![Screenshot of organization settings, with Overview and Delete highlighted](media/delete-organization/organization-overview-settings.png)

4. In the resulting dialog box, enter the name of the organization, and then select **Delete**.

   ![Screenshot of Delete Account dialog box](media/delete-organization/delete-organization-popup.png)

5. To review your organizations, go to your [Visual Studio profile](https://app.vsaex.visualstudio.com/profile/view), where you can see your deleted organization.

   [Need help?](faq-configure-customize-organization.yml#get-support)

The organization is deleted.

## Delete an organization - for Microsoft Entra ID administrators

If your organization is connected to Microsoft Entra ID, **Global Administrators** and **Application Administrators** in your Microsoft Entra ID tenant can view and manage Azure DevOps organizations connected to their tenant. These administrators can delete organizations even if they weren't the original creator. Do the following steps, for Microsoft Entra ID administrators:

1. Sign in to the [Azure portal](https://portal.azure.com) as a Global Administrator or Application Administrator.
2. Go to **Microsoft Entra ID** > **Manage** > **Enterprise applications**
3. Search for and select **Azure DevOps**.
4. View connected Azure DevOps organizations under **Users and groups** or **Properties**.
5. Access the Azure DevOps organization using your administrator privileges.
6. Follow the standard deletion process [previously outlined](#delete-organization).

## Related articles

- [Recover your deleted organization](recover-your-organization.md)
- [Resolve an orphaned organization](resolve-orphaned-organization.md)
- [Create a new organization](create-organization.md)
