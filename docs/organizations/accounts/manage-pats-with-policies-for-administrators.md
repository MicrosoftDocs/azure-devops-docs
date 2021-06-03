---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs.
ms.technology: devops-accounts
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 06/03/2021
monikerRange: '>= tfs-2017'
---

# Use policies to manage users' personal access tokens

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

Learn how to turn on the Azure Active Directory (Azure AD) policies that restrict the creation, scope, and lifespan of new or renewed personal access tokens (PATs) for users in Azure DevOps.

The following policies can be turned on or off. By default, these policies are set to *off*.

- [Use policies to manage users' personal access tokens](#use-policies-to-manage-users-personal-access-tokens)
  - [Prerequisites](#prerequisites)
  - [Restrict creation of global PATs](#restrict-creation-of-global-pats)
  - [Restrict creation of full-scoped PATs](#restrict-creation-of-full-scoped-pats)
  - [Set maximum lifespan for new PATs](#set-maximum-lifespan-for-new-pats)
  - [Add Azure AD users or groups to the Allow list](#add-azure-ad-users-or-groups-to-the-allow-list)
  - [Next steps](#next-steps)
  - [Related articles](#related-articles)

> [!IMPORTANT]
> Existing PATs, created via both the UI and APIs, apply per the remainder of their lifespan. Before these existing PATs can be successfully renewed, they must be updated to comply with the new restriction.

## Prerequisites

- Your organization must be [linked to Azure AD](connect-organization-to-azure-ad.md).
- You must be an [Azure DevOps Administrator in Azure AD](/azure/active-directory/roles/permissions-reference) to manage your organization policies.

To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Azure Active Directory** > **Roles and administrators**. If you're not an Azure DevOps administrator, talk to your administrator.

## Restrict creation of global PATs

The Azure DevOps Administrator in Azure AD restricts users from creating global PATs. Global tokens apply to all accessible organizations, rather than a single organization. Enabling this policy means that new PATs must be associated with specific Azure DevOps organizations.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Restrict global personal access token creation" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Restrict global PAT creation policy.":::

## Restrict creation of full-scoped PATs

The Azure DevOps Administrator in Azure AD restricts users from creating full-scoped PATs. Enabling this policy means that new PATs must be limited to a specific, custom defined set of scopes.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Restrict full-scoped personal access token creation" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-full-scoped-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for the Restrict full-scoped PAT creation policy.":::

## Set maximum lifespan for new PATs

The Azure DevOps Administrator in Azure AD defines the maximum lifespan of a PAT. The maximum lifespan for new tokens can be specified in number of days.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Enforce maximum personal access token lifespan" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/enforce-maximum-pat-lifespan-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Enforce maximum PAT lifespan policy.":::

4. Enter the number of maximum days, and then select **Save**.

## Add Azure AD users or groups to the Allow list

Users or groups on the Allow list are exempt from the restrictions and enforcements created by these policies when they're turned on. Select **Add AAD user or group** to add the user or group to the list, and then select **Add**. Each policy has its own Allow list. If a user is on the Allow list for one policy, any other activated policies still apply. In other words, if you want a user to be exempt from all policies, you should add them to each Allow list.

## Next steps

> [!div class="nextstepaction"]
> [Change application access policies](change-application-access-policies.md)

## Related articles

- [Restrict organization creation with Azure AD tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Get list of organizations connected to Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
