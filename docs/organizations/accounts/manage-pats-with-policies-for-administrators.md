---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs, turn off automatic revocation of leaked PATs.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 08/19/2024
monikerRange: 'azure-devops'
---

# Use policies to manage personal access tokens for users

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article explains how to limit the creation, scope, and lifespan of new or renewed personal access tokens (PATs) for users in Azure DevOps using Microsoft Entra policies. It also covers managing the automatic revocation of leaked PATs. Each policy's default behavior is detailed in its respective section.

> [!IMPORTANT]
> Existing PATs, created through both the UI and APIs, remain valid for the rest of their lifespan. Update your existing PATs to comply with the new restrictions to ensure successful renewal.

## Prerequisites

- **Organization requirements:** Your organization must be [linked to Microsoft Entra ID](connect-organization-to-azure-ad.md).
- **Roles:** You must be an [Azure DevOps Administrator in Microsoft Entra ID](/azure/active-directory/roles/permissions-reference) to manage your organization policies. To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and then choose **Microsoft Entra ID** > **Roles and administrators**. If you're not an Azure DevOps administrator, contact your administrator. If you're not an admin, you can't see the policies.

## Restrict creation of global PATs

The Azure DevOps Administrator in Microsoft Entra can restrict users from creating global PATs, which apply to all accessible organizations rather than a single organization. Enabling this policy requires new PATs to be associated with specific Azure DevOps organizations. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing Choose the gear icon, Organization settings.](../../media/settings/open-admin-settings-vert.png)

3. In the Microsoft Entra ID tab, find the *Restrict global personal access token creation* policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Restrict global PAT creation policy.":::

## Restrict creation of full-scoped PATs

The Azure DevOps Administrator in Microsoft Entra can restrict users from creating full-scoped PATs. Enabling this policy requires new PATs to be limited to a specific, custom-defined set of scopes. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. In the Microsoft Entra ID tab, find the *Restrict full-scoped personal access token creation* policy and move the toggle to *on*.

   :::image type="content" source="media/policies/restrict-full-scoped-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for the Restrict full-scoped PAT creation policy.":::

## Set maximum lifespan for new PATs

The Azure DevOps Administrator in Microsoft Entra ID can define the maximum lifespan of a PAT, specifying it in days. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. In the Microsoft Entra ID tab, find the *Enforce maximum personal access token lifespan* policy and move the toggle to *on*.

   :::image type="content" source="media/policies/enforce-maximum-pat-lifespan-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Enforce maximum PAT lifespan policy.":::

4. Enter the number of maximum days, and then select **Save**.

<a name='add-azure-ad-users-or-groups-to-the-allowlist'></a>

## Add Microsoft Entra users or groups to the allowlist

> [!WARNING]
> We recommend using groups for your tenant policy allow lists. If you use a named user, note that a reference to their identity will reside in the United States, Europe (EU), and Southeast Asia (Singapore).

Users or groups on the allowlist are exempt from the restrictions and enforcements of these policies when enabled. To add a user or group, select **Add Microsoft Entra user or group**, then select **Add**. Each policy has its own allowlist. If a user is on the allowlist for one policy, other activated policies still apply. Therefore, to exempt a user from all policies, add them to each allowlist.

## Revoke leaked PATs automatically

The [Azure DevOps Administrator in Microsoft Entra ID](azure-ad-tenant-policy-restrict-org-creation.md#prerequisites) can manage the policy that automatically revokes leaked PATs. This policy applies to all PATs within organizations linked to your Microsoft Entra tenant. By default, this policy is set to *on*. If Azure DevOps PATs are checked into public GitHub repositories, they're automatically revoked.

> [!WARNING]
> Disabling this policy means any PATs checked into public GitHub repositories will remain active, potentially compromising your Azure DevOps organization and data, and putting your applications and services at significant risk. Even with the policy disabled, you will still receive an email notification if a PAT is leaked, but it will not be revoked automatically.

### Turn off automatic revocation of leaked PATs

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. In the Microsoft Entra ID tab, find the *Automatically revoke leaked personal access tokens* policy and move the toggle to *off*.

The policy is disabled and any PATs checked into public GitHub repositories remain active.

## Next steps

> [!div class="nextstepaction"]
> [Change application access policies](change-application-access-policies.md)

## Related articles

- [Restrict organization creation with Microsoft Entra tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Get list of organizations connected to Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
