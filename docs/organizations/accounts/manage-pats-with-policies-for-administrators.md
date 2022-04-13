---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs and automatically revoke leaked PATs.
ms.technology: devops-accounts
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 04/13/2022
monikerRange: 'azure-devops'
---

# Use policies to manage personal access tokens for users

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Learn how to turn on the Azure Active Directory (Azure AD) policies that restrict the creation, scope, and lifespan of new or renewed personal access tokens (PATs) for users in Azure DevOps. You can also manage automatic revocation of leaked PATs. These policies can be turned on or off. By default, they're set to *off*.

> [!IMPORTANT]
> Existing PATs, created via both the UI and APIs, apply per the remainder of their lifespan. Before these existing PATs can be successfully renewed, they must be updated to comply with the new restriction.

## Prerequisites

- Your organization must be [linked to Azure AD](connect-organization-to-azure-ad.md).
- You must be an [Azure DevOps Administrator in Azure AD](/azure/active-directory/roles/permissions-reference) to manage your organization policies.

To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Azure Active Directory** > **Roles and administrators**. If you're not an Azure DevOps administrator, contact your administrator.

## Restrict creation of global PATs

The Azure DevOps Administrator in Azure AD restricts users from creating global PATs. Global tokens apply to all accessible organizations, rather than a single organization. Enabling this policy means that new PATs must be associated with specific Azure DevOps organizations.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Restrict global personal access token creation" policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Restrict global PAT creation policy.":::

## Restrict creation of full-scoped PATs

The Azure DevOps Administrator in Azure AD restricts users from creating full-scoped PATs. Enabling this policy means new PATs must be limited to a specific custom defined set of scopes.

[!INCLUDE [warning-api-scopes](includes/warning-api-scopes.md)]

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

## Add Azure AD users or groups to the allowlist

> [!WARNING]
> We recommend using groups with your tenant policy allow list(s). If you use a named user, be aware that a reference to the named user's identity will reside in the United States, Europe (EU), and Southeast Asia (Singapore).

Users or groups on the allowlist are exempt from the restrictions and enforcements created by these policies when they're turned on. Select **Add AAD user or group** to add the user or group to the list, and then select **Add**. Each policy has its own allowlist. If a user is on the allowlist for one policy, any other activated policies still apply. In other words, if you want a user to be exempt from all policies, you should add them to each allowlist.

## Revoke leaked PATs automatically

The [Azure DevOps Administrator in Azure AD](azure-ad-tenant-policy-restrict-org-creation.md#prerequisites) can manage the policy that automatically revokes leaked PATs. This policy applies to all PATs within all organizations linked to your Azure AD tenant. Enabling this policy means that Azure DevOps PATs checked into public GitHub repositories will be automatically revoked. Disabling this policy means that PATs checked into public GitHub repositories will remain and could compromise your Azure DevOps account and data, putting your applications and services at significant risk.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../media/settings/open-admin-settings-vert.png)

3. In the Azure Active Directory tab, find the "Automatically revoke leaked personal access tokens" policy and move the toggle to *on*.

   :::image type="content" source="media/tenant-policy-automatically-revoke-leaked-pats.png" alt-text="Image of policy with toggled moved to ON position for automatically revoking leaked PATs.":::

## Next steps

> [!div class="nextstepaction"]
> [Change application access policies](change-application-access-policies.md)

## Related articles

- [Restrict organization creation with Azure AD tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Get list of organizations connected to Azure AD](get-list-of-organizations-connected-to-azure-active-directory.md)
