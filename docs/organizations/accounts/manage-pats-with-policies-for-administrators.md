---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs, turn off automatic revocation of leaked PATs.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 10/24/2024
monikerRange: 'azure-devops'
---

# Use policies to manage personal access tokens for users

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article provides guidance on how to use Microsoft Entra policies to manage personal access tokens (PATs) in Azure DevOps. It explains how to limit the creation, scope, and lifespan of new or renewed PATs, and how to handle the automatic revocation of leaked PATs. Each section details the default behavior of the respective policies, helping administrators effectively control and secure PAT usage within their organization.

> [!IMPORTANT]
> Existing PATs, created through both the UI and APIs, remain valid for the rest of their lifespan. Update your existing PATs to comply with the new restrictions to ensure successful renewal.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Entra Tenant**| Your organization's [linked to Microsoft Entra ID](connect-organization-to-azure-ad.md).|
|**Permissions** | For tenant policies, you need the [Azure DevOps Administrator in Microsoft Entra ID](/azure/active-directory/roles/permissions-reference). To check your role, sign in to the [Azure portal](https://ms.portal.azure.com/#home), and go to **Microsoft Entra ID** > **Roles and administrators**. If you're not an Azure DevOps administrator, you can't see the policies. Contact your administrator, if necessary.
For organization policies, you must be a [Project Collection Administrator](../security/look-up-project-collection-administrators.md). |

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Restrict creation of global PATs

The Azure DevOps Administrator in Microsoft Entra can restrict users from creating global Personal Access Tokens (PATs), which apply to all accessible organizations rather than a single organization. When this policy is enabled, new PATs must be associated with specific Azure DevOps organizations. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing Choose the gear icon, Organization settings.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra**, find the *Restrict global personal access token creation* policy and move the toggle *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Restrict global PAT creation policy.":::

## Restrict creation of full-scoped PATs

The Azure DevOps Administrator in Microsoft Entra can restrict users from creating full-scoped PATs. Enabling this policy requires new PATs to be limited to a specific, custom-defined set of scopes. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Microsoft Entra**, find the *Restrict full-scoped personal access token creation* policy and move the toggle *on*.

   :::image type="content" source="media/policies/restrict-full-scoped-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for the Restrict full-scoped PAT creation policy.":::

## Set maximum lifespan for new PATs

The Azure DevOps Administrator in Microsoft Entra ID can define the maximum lifespan of a PAT, specifying it in days. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Microsoft Entra**, find the *Enforce maximum personal access token lifespan* policy and move the toggle *on*.

   :::image type="content" source="media/policies/enforce-maximum-pat-lifespan-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Enforce maximum PAT lifespan policy.":::

4. Enter the number of maximum days, and then select **Save**.

<a name='add-azure-ad-users-or-groups-to-the-allowlist'></a>

## Add Microsoft Entra users or groups to the allowlist

> [!WARNING]
> We recommend using groups for your tenant policy allowlists. If you use a named user, a reference to their identity resides in the United States, Europe (EU), and Southeast Asia (Singapore).

Users or groups on the allowlist are exempt from the restrictions and enforcements of these policies when enabled. To add a user or group, select **Add Microsoft Entra user or group**, then select **Add**. Each policy has its own allowlist. If a user is on the allowlist for one policy, other activated policies still apply. Therefore, to exempt a user from all policies, add them to each allowlist.

## Revoke leaked PATs automatically

The [Azure DevOps Administrator in Microsoft Entra ID](azure-ad-tenant-policy-restrict-org-creation.md#prerequisites) can manage the policy that automatically revokes leaked PATs. This policy applies to all PATs within organizations linked to your Microsoft Entra tenant. By default, this policy is set to *on*. If Azure DevOps PATs are checked into public GitHub repositories, they're automatically revoked.

> [!WARNING]
> Disabling this policy means any PATs checked into public GitHub repositories remain active, potentially compromising your Azure DevOps organization and data, and putting your applications and services at significant risk. Even with the policy disabled, you still receive an email notification if a PAT is leaked, but it isn't revoked automatically.

### Turn off automatic revocation of leaked PATs

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Microsoft Entra**, find the *Automatically revoke leaked personal access tokens* policy and move the toggle to *off*.

The policy is disabled and any PATs checked into public GitHub repositories remain active.

## Next steps

> [!div class="nextstepaction"]
> [Change application access policies](change-application-access-policies.md)

## Related articles

- [Restrict organization creation with Microsoft Entra tenant policy](azure-ad-tenant-policy-restrict-org-creation.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Get list of organizations connected to Microsoft Entra ID](get-list-of-organizations-connected-to-azure-active-directory.md)
