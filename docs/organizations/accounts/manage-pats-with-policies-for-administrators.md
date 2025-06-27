---
title: Manage personal access tokens using policies
titleSuffix: Azure DevOps
description: Learn how to turn on policies that restrict the scope and lifespan of newly created user PATs, turn off automatic revocation of leaked PATs.
ms.subservice: azure-devops-organizations
ms.topic: how-to
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 06/12/2025
monikerRange: 'azure-devops'
---

# Manage personal access tokens using policies (for administrators)

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article provides guidance on how to use our tenant and organization policies to manage personal access tokens (PATs) in Azure DevOps. It explains how to limit the creation, scope, and lifespan of new or renewed PATs, and how to handle the automatic revocation of leaked PATs. 

Each section details the default behavior of the respective policies, helping administrators effectively control and secure PAT usage within their organization.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

Existing PATs, created through both the UI and APIs, remain valid for the rest of their lifespan. Update your existing PATs to comply with the new restrictions to ensure successful renewal.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Microsoft Entra tenant**| Your organization is [linked to a Microsoft Entra tenant](connect-organization-to-azure-ad.md).|
|**Permissions**| <ul><li>Org-level policies: [Project Collection Administrator](../security/look-up-project-collection-administrators.md)</li><li>Tenant-level policies: [Azure DevOps Administrator](../security/look-up-azure-devops-administrator.md)</li></ul>|


### Add Microsoft Entra users or groups to policy allowlists

> [!WARNING]
> We generally recommend using groups for your allowlists. If you list a named user, a reference to their identity resides in the United States, Europe (EU), and Southeast Asia (Singapore).

Users or groups on the allowlist for any of these policies are exempt from the restrictions and enforcements when policies are enabled. 

Each policy has its own unique allowlist. To exempt a user from all policies, they must be added to each allowlist. For the tenant policies, select **Add Microsoft Entra user or group**, then select **Add**. 

## Restrict creation of global PATs (tenant policy)

Azure DevOps Administrators can restrict users from creating global PATs, which can be used in all accessible organizations rather than a single organization. When this policy is enabled, new PATs must be associated with specific Azure DevOps organizations. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing Choose the gear icon, Organization settings.](../../media/settings/open-admin-settings-vert.png)

3. Select **Microsoft Entra**, find the *Restrict global personal access token creation* policy and move the toggle *on*.

   :::image type="content" source="media/policies/restrict-global-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Restrict global PAT creation policy.":::

## Restrict creation of full-scoped PATs (tenant policy)

Azure DevOps Administrators can restrict users from creating full-scoped PATs. Enabling this policy requires new PATs to be limited to a specific, custom-defined set of scopes. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Microsoft Entra**, find the *Restrict full-scoped personal access token creation* policy and move the toggle *on*.

   :::image type="content" source="media/policies/restrict-full-scoped-pat-creation-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for the Restrict full-scoped PAT creation policy.":::

## Set maximum lifespan for new PATs (tenant policy)

Azure DevOps Administrators can define the maximum lifespan of a PAT, specifying it in days. By default, this policy is set to *off*.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Microsoft Entra**, find the *Enforce maximum personal access token lifespan* policy and move the toggle *on*.

   :::image type="content" source="media/policies/enforce-maximum-pat-lifespan-policy-toggle-on.png" alt-text="Screenshot of toggle moved to on position for Enforce maximum PAT lifespan policy.":::

4. Enter the number of maximum days, and then select **Save**.

<a name='add-azure-ad-users-or-groups-to-the-allowlist'></a>

## Restrict personal access token creation (organization policy)

> [!NOTE]
> - This policy is in public preview.
> - This policy is only available for Microsoft Entra-backed organizations.

Project Collection Administrators are able to control who can create and regenerate PATs in the organizations they manage. By default, this policy is set to *off*. Existing PATs continue working until the PAT's expiration date.

> [!TIP]
> Combine this policy with a short duration set for the "Set maximum lifespan for new PATs" policy to drive down PAT usage in your organization.

The policy also blocks global PAT usage in the organization. Global PAT users must be added to the allowlist to continue to use their global PAT in the organization.

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

3. Select **Policies**, find the *Restrict personal access token (PAT) creation* policy.

   :::image type="content" source="media/disable-pat-policy/disable-pat-policy.png" alt-text="Screenshot of toggle moved to on position and subpolicies checked for Restrict personal access token creation policy.":::

4. If your organization members regularly use packaging PATs, select the *Allow creation of PAT with packaging scope only* checkbox. Many packaging scenarios still rely on PATs and haven't fully transitioned to Microsoft Entra-based authentication. When this policy is enabled, users who aren't on the allowlist have access only to packaging scopes on their "Personal access tokens" page.

   :::image type="content" source="media/disable-pat-policy/disable-pat-packaging-only.png" alt-text="Screenshot of packaging scopes available only on the user's Create a new personal access token modal.":::

6. If any Microsoft Entra users or groups require continued access to PATs, add them to the allowlist by selecting *Manage* and searching for the user or group in the dropdown. Once allowlist updates are complete, select the checkbox next to *Allow creation of PAT of any scope for selected Microsoft Entra users and groups*.

7. Move the toggle to *on* in order for the restriction policy to apply. Selected subpolicies don't apply until the toggle is on.

## Revoke leaked PATs automatically (tenant policy)

Azure DevOps Administrators can manage the policy that automatically revokes leaked PATs. This policy applies to all PATs within organizations linked to your Microsoft Entra tenant. By default, this policy is set to *on*. If Azure DevOps PATs are checked into public GitHub repositories, they're automatically revoked.

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
- [Revoke organization users' personal access tokens (for admins)](admin-revoke-user-pats.md)
- [Authenticate to Azure DevOps with Microsoft Entra](../../integrate/get-started/authentication/entra.md)
