---
title: Revoke personal access tokens for users
titleSuffix: Azure DevOps
description: Administrators can revoke personal access tokens (PATs) for users when they're compromised, protecting the organization.
ms.subservice: azure-devops-security
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 07/16/2024
monikerRange: '<= azure-devops'
---

# Revoke personal access tokens for organization users

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If a Personal Access Token (PAT) is compromised, it's crucial to act swiftly. Administrators can revoke a user's PAT as a security measure to safeguard the organization. Additionally, disabling a user's account also revokes their PAT. There's a delay, up to one hour, before the PAT becomes inactive. This latency period persists until the disable or delete operation is fully processed in Microsoft Entra ID.

## Prerequisites

**Access level:** [**Organization owner**](../security/look-up-organization-owner.md) or [member of the **Project Collection Administrators** group](../../organizations/security/change-organization-collection-level-permissions.md)

> [!TIP]
> For users, if you want to create or revoke your own PATs, see [Create or revoke personal access tokens](use-personal-access-tokens-to-authenticate.md).

## Revoke PATs

1. To revoke the OAuth authorizations, including PATs, for your organization's users, see [Token revocations - Revoke authorizations](/rest/api/azure/devops/tokenadministration/token%20revocations/revoke%20authorizations?view=azure-devops-rest-5.0&preserve-view=true).
2. Use this [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin) to automate calling the new REST API by passing a list of user principal names (UPNs). If you don't know the UPN of the user who created the PAT, use this script, however it must be based on a date range.

> [!NOTE]
> When you use a date range any JSON web tokens (JWTs) are also revoked. Any tooling that relies on these tokens won't work until refreshed with new tokens.

3. After you successfully revoke the affected PATs, inform your users. They can recreate their tokens as necessary.

<a id="token-expiration"></a>

## FedAuth token expiration

A FedAuth token gets issued when you sign in. It's valid for a seven-day sliding window. The expiry automatically extends another seven days whenever you refresh it within the sliding window. If users access the service regularly, only an initial sign-in is needed. After a period of inactivity extending seven days, the token becomes invalid and the user must sign in again.

## Personal access token expiration

Users can choose an expiry date for their personal access token, not to exceed one year. We recommend you use shorter time periods, generating new PATs upon expiry. Users receive a notification email one week before token expiry. Users can generate a new token, extend expiry of the existing token, or change the scope of the existing token, if needed.

:::moniker range="azure-devops"

## Auditing logs

If your organization is connected to Microsoft Entra ID, you have access to audit logs that track various events, including permissions changes, deleted resources, and log access, among other things. If you need to check for revocations or investigate any activity, the audit logs are a valuable resource. For more information, see [Access, export, and filter audit logs](../audit/azure-devops-auditing.md).

:::moniker-end

## Frequently asked questions (FAQs)

### Q: What happens to a PAT if a user leaves my company?

A: Once a user gets removed from Microsoft Entra ID, the PATs and FedAuth tokens invalidate within an hour, since the refresh token is valid only for one hour.

### Q: Should I revoke JSON web tokens (JWTs)?

A: If you have JWTs that you believe should be revoked, we suggest you do so. Revoke JWTs, issued as part of the OAuth flow, via the [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin). However, you must use the date range option in the script.

## Related articles

- [How Microsoft protects your projects and data in Azure DevOps](../../organizations/security/data-protection.md)
- [Create or revoke your personal access tokens](use-personal-access-tokens-to-authenticate.md)
