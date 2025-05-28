---
title: Get list of organizations connected to Microsoft Entra ID
titleSuffix: Azure DevOps Services
description: Learn how to download a complete list of organizations backed by or connected to Microsoft Entra ID.
ms.subservice: azure-devops-organizations
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 05/28/2025
monikerRange: 'azure-devops'
---

# Get list of organizations backed by Microsoft Entra ID

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to download a comprehensive list of organizations backed by a Microsoft Entra ID tenant. This list includes essential information such as:

- Organization IDs
- Organization names
- Organization URLs
- Organization owners

By accessing this information, you can efficiently manage and oversee the organizations connected to your Microsoft Entra ID tenant.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|Organization connection |Member of an Azure DevOps organization [connected to Microsoft Entra ID](connect-organization-to-azure-ad.md).|
|Azure DevOps CLI | Have a Microsoft Entra token. For more information, see [Issue Microsoft Entra tokens with Azure CLI](../../cli/entra-tokens.md).|

## Get list of organizations

#### [Browser](#tab/browser)

Using any organization backed by your Microsoft Entra ID, complete the following steps. If you don't have access to an organization, create one by signing in to [Start.VisualStudio.com](https://start.visualstudio.com/) with your Microsoft Entra identity. You can [delete the organization](delete-your-organization.md) when you're done.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing highlighted Organization settings button.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra ID**, and then **Download**.

   :::image type="content" source="media/shared/select-azure-ad-download.png" alt-text="Select Microsoft Entra ID, and then Download":::

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

You can get a list of organizations backed by Microsoft Entra ID by using the [az account list](/cli/azure/devops/user#az-devops-user-add) command. To get started, see [Azure DevOps CLI](../../cli/index.md).

1. To get a list of Microsoft Entra ID tenants, use the following command:

   ```azurecli
   az account list --output table
   ```

   This command lists all the tenants you have access to.

2.  Currently, there's no direct Azure CLI command to list Azure DevOps organizations connected to a specific Microsoft Entra ID tenant. But, you can use the Azure DevOps REST API in combination with the Azure CLI to do so.

   1. Set the Azure DevOps organization and project:
   
      ```azurecli
      az devops configure --defaults organization=https://dev.azure.com/{My_Organization}/
      ```

   2. Use the REST API to list organizations. Ensure you have a Microsoft Entra token. You can [issue Microsoft Entra tokens with the Azure CLI](../../cli/entra-tokens.md). Use the following command to list the projects in an organization:

      ```azurerestapi
      az rest --method get --uri https://dev.azure.com/{My_Organization}/_apis/projects?api-version=6.0 --headers "Authorization=Bearer {12346918273649182376491823764}"
      ```

   This process should correctly authenticate and retrieve the list of organizations connected to your Microsoft Entra ID.

* * *

## Next steps

> [!div class="nextstepaction"]
> [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)

## Related articles

* [Resolve orphaned organization](resolve-orphaned-organization.md)
* [Disconnect from Microsoft Entra ID](disconnect-organization-from-azure-ad.md)
* [Change Microsoft Entra connection](change-azure-ad-connection.md)
* [Enforce Conditional Access policies](change-application-access-policies.md)
* [Manage access with Microsoft Entra groups](./manage-azure-active-directory-groups.md)
