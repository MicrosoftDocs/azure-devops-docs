---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs.
ms.technology: devops-accounts
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 06/01/2021
monikerRange: '>= tfs-2017'
---

# Use policies to manage users' personal access tokens (PATs)

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

Learn how to turn on the Azure Active Directory (Azure AD) policies that restrict the scope and lifespan of new user PATs created for Azure DevOps. An Azure DevOps Administrator in Azure AD can define the maximum lifespan of PATs.

The following policies can be turned on or off. By default, these policies are set to *off*.

- Restrict creation of global PATs
- Set maximum lifespan for new PATs
- Restrict creation of full-scoped PATs

> [!IMPORTANT]
> Existing PATs, created via both the UI and APIs, apply per the remainder of their lifespan. Before these existing PATs can be successfully renewed, they must be updated to comply with the new restriction.

## Prerequisites

- Your organization must be [linked to Azure AD](connect-organization-to-azure-ad.md).
- You must be an [Azure DevOps Administrator in Azure AD](/azure/active-directory/roles/permissions-reference) to manage these policies for your organization in Azure DevOps.

To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Azure Active Directory** > **Roles and administrators**. If you're not an Azure DevOps administrator, talk to your administrator.

## Restrict creation of global PATs

Global tokens apply to all accessible organizations, rather than a single organization. Enabling this policy means that new PATs must be associated with specific Azure DevOps organizations.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Restrict global personal access token creation" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to On position for Restrict globlal PAT creation.":::

## Restrict creation of full-scoped PATs


1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Restrict full-scoped personal access token creation" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-full-scoped-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to On position for Restrict full-scoped PAT creation.":::

## Set maximum lifespan for new PATs

The Azure DevOps Administrator in Azure AD defines the maximum lifespan of the PAT.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Enforce maximum personal access token lifespan" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/enforce-maximum-pat-lifespan-policy-toggle-on.png" alt-text="Screenshot of toggle moved to On position for Enforce maximum PAT lifespan policy.":::

## Next steps

> [!div class="nextstepaction"]
> [Change application access policies](change-application-access-policies.md)

## Related articles

- [Restrict organization creation with Azure AD tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Get list of organizations connected to Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
