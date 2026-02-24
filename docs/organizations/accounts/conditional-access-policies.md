---
title: Conditional Access policies on Azure DevOps
titleSuffix: Azure DevOps Services
description: Set up Microsoft Entra Conditional Access policies to grant or restrict access to tenant resources
ms.subservice: azure-devops-organizations
ms.assetid: 2fdfbfe2-b9b2-4d61-ad3e-45f11953ef3e
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/24/2026
ai-usage: ai-assisted
monikerRange: 'azure-devops'
---

# Set up Conditional Access policies on Azure DevOps

With Microsoft Entra ID, tenant admins control which users access Microsoft resources through [Conditional Access policies](/entra/identity/conditional-access/overview). Admins set specific conditions users must meet to gain access, such as:

- Membership in a specific Microsoft Entra security group
- Location or network requirements
- Use of a particular operating system
- Use of a managed and enabled device

Based on these conditions, you can grant access, require more checks like multifactor authentication, or block access entirely. For more information, see [Conditional Access policies](/entra/identity/conditional-access/concept-conditional-access-policies) in the Microsoft Entra documentation.

## Prerequisites

| Category | Requirements |
|----------|-------------|
| **Permissions** | At least **Conditional Access Administrator** in your tenant. For more information, see [Create a Conditional Access policy](/entra/identity/conditional-access/policy-all-users-mfa-strength). |

## Create a Conditional Access policy for Azure DevOps

> [!WARNING]
> [External authentication methods](/entra/identity/authentication/how-to-authentication-external-method-manage) aren't currently compatible with authentication strength. Use the **[Require multifactor authentication](/entra/identity/conditional-access/concept-conditional-access-grant#require-multifactor-authentication)** grant control. This example uses the [built-in multifactor authentication strength](/entra/identity/authentication/concept-authentication-strengths), but some organizations might choose to use a stronger authentication strength like passwordless or phishing-resistant.

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com) as at least a [Conditional Access Administrator](/entra/identity/role-based-access-control/permissions-reference#conditional-access-administrator).
1. Browse to **Entra ID** > **Conditional Access** > **Policies**.
1. Select **New policy**.
1. Enter a name for your policy. Create a meaningful standard for the names of your policies.
1. Under **Assignments**, select **Users or workload identities**.
   1. Under **Include**, select **All users**.
   1. Under **Exclude**: 
      - Select **Users and groups**. 
         - Choose your organization's emergency access or break-glass accounts.
1. Under **Target resources** > **Resources (formerly cloud apps)** > **Include**, **Select resources**, add _"Azure DevOps"_ or _"Microsoft Visual Studio Team Services"_ resource (resource ID: 499b84ac-1321-427f-aa17-267ca6975798) to the list of target resources.
1. Under **Access controls** > **Grant**, select **Grant access**, **Require authentication strength**, select **Multifactor authentication**, and then select **Select**.
1. Confirm your settings and set **Enable policy** to **Report-only**.
1. Select **Create** to enable your policy.

After confirming your settings by using [policy impact or report-only mode](/entra/identity/conditional-access/concept-conditional-access-report-only#reviewing-results), move the **Enable policy** toggle from **Report-only** to **On**.

:::image type="content" source="./media/setup-ado-cap.png" border="true" alt-text="Microsoft Entra admin center, showing how to add Azure DevOps as a target resource on a new Conditional Access policy.":::

## Conditional Access behavior on web

When you sign in to the web portal of a Microsoft Entra ID-backed organization, Microsoft Entra ID validates all Conditional Access policies set by tenant administrators. After [modernizing the web authentication stack to use Microsoft Entra tokens](https://devblogs.microsoft.com/devops/full-web-support-for-conditional-access-policies-across-azure-devops-and-partner-web-properties/), Azure DevOps enforces Conditional Access policy validation on all interactive (web) flows.

- Meet sign-in policies when you use [personal access tokens (PATs)](use-personal-access-tokens-to-authenticate.md) on REST API calls that rely on Microsoft Entra.
- Remove Azure DevOps as a resource from the Conditional Access policy to prevent Conditional Access policies from applying.
- Enforce MFA policies on web flows only. Block access for non-interactive flows if users don't meet a Conditional Access policy.

## IP-based conditions

| Category | Requirements |
|--------------|-------------|
|**Permissions**| You must be an [Project Collection Administrator](../security/look-up-project-collection-administrators.md) to enable this policy.|

If you enable the **IP Conditional Access policy validation on non-interactive flows** organization policy on the **Organization Settings** page, Azure DevOps checks IP fencing policies on non-interactive flows, such as when you use a PAT to make a REST API call.

Azure DevOps supports IP-fencing Conditional Access policies for both IPv4 and IPv6 addresses. If Conditional Access policies block your IPv6 address, ask your tenant administrator to update the policy to allow your IPv6 address. Also, consider including the IPv4-mapped address for any default IPv6 address in all Conditional Access policy conditions.

If users access the Microsoft Entra sign-in page from a different IP address than the one used to access Azure DevOps resources (common with VPN tunneling), review your VPN configuration or networking setup. Confirm that your tenant administrator includes all relevant IP addresses in the Conditional Access policies.

## Azure Resource Manager audience

> [!NOTE]
> These changes took effect in September 2025. For more information, see the [Azure DevOps blog post](https://devblogs.microsoft.com/devops/removing-azure-resource-manager-reliance-on-azure-devops-sign-ins/).

Azure DevOps doesn't depend on the Azure Resource Manager (ARM) resource (`https://management.azure.com`) when you sign in or refresh Microsoft Entra access tokens. Previously, Azure DevOps required the Azure Resource Manager audience during sign-in and token refresh flows, which meant administrators had to allow all Azure DevOps users to bypass Azure Resource Manager Conditional Access policies.

If you previously set up a Conditional Access policy for Azure Resource Manager or the associated [Microsoft Azure classic deployment model application](/entra/identity/conditional-access/concept-conditional-access-cloud-apps#windows-azure-service-management-api), that policy no longer covers Azure DevOps sign-ins. Set up a new Azure DevOps Conditional Access policy for continued coverage.

The following groups still require access to Azure Resource Manager. Consider adding them as exclusions to any Azure Resource Manager or Microsoft Azure classic deployment model Conditional Access policies.
- **Billing administrators** need access to Azure Resource Manager to set up billing and access subscriptions.
- **Service Connection creators** require access to Azure Resource Manager for Azure Resource Manager role assignments and updates to managed service identities (MSIs).

## Continuous Access Evaluation

Azure DevOps supports [Continuous Access Evaluation (CAE) via Microsoft Entra ID](/entra/identity/conditional-access/concept-continuous-access-evaluation), which enables near real-time enforcement of Conditional Access policies. With CAE, access tokens can be revoked immediately when critical events occur—such as when a user is disabled, a password changes, or a location/IP shift happens—without waiting for token expiration. This approach enhances security, reduces operational overhead, and improves resilience during identity service outages.

App developers who use the latest [.NET client library version](../../integrate/concepts/dotnet-client-libraries.md) (20.259.0-preview and later) should support CAE-enabled tokens by [gracefully handling claims challenges](/entra/identity-platform/claims-challenge?tabs=dotnet).

<!-- TODO: Verify CAE support status for Python and Go client libraries — the original target was latter half of 2025. Update or remove this comment once confirmed. -->

## Related content
* [Change application connection & security policies for your organization](change-application-access-policies.md)
