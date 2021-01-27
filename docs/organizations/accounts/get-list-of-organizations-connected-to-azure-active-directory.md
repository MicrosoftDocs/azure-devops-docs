---
title: Get list of organizations connected to Azure Active Directory
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn how to download a complete list of organizations backed by or connected to Azure Active Directory (Azure AD).
ms.technology: devops-accounts
ms.assetid: 629a48b6-b2ab-4706-8256-d187c8ed5ce7
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 04/28/2020
monikerRange: 'azure-devops'
---

# Get list of organizations backed by Azure AD

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Learn how to download a complete list of organizations backed by an Azure Active Directory (Azure AD) tenant. 
On this list, you can find the following information:
- organization IDs
- organization names
- organization URLs
- organization owners

## Prerequisites

You must be a [Project Collection Administrator or an organization Owner](../security/lookup-organization-owner-admin.md).

## Get list of organizations

Using any organization backed by your Azure AD, complete the following steps. If you don't have access to an organization, create one by signing in to [Start.VisualStudio.com](https://start.visualstudio.com/) with your Azure AD identity. You can [delete the organization](delete-your-organization.md) when you're done.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../../media/settings/open-admin-settings-vert.png)

3. Select **Azure Active Directory**, and then **Download**.

   :::image type="content" source="media/shared/select-azure-ad-download.png" alt-text="Select Azure Active Directory, and then Download":::

## Next steps

> [!div class="nextstepaction"]
> [Restrict organization creation with tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)

## Related articles

* [Resolve orphaned organization](resolve-orphaned-organization.md)
* [Disconnect from Azure AD](disconnect-organization-from-azure-ad.md)
* [Change Azure AD connection](change-azure-ad-connection.md)
* [Enforce Conditional Access policies](change-application-access-policies.md)
* [Manage access with Azure AD groups](./manage-azure-active-directory-groups.md)