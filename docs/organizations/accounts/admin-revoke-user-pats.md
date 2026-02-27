---
title: Revoke personal access tokens for users
titleSuffix: Azure DevOps
description: Administrators can revoke personal access tokens (PATs) for users when they're compromised, protecting the organization.
ms.subservice: azure-devops-security
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 02/24/2026
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.custom: pat-reduction
---

# Revoke personal access tokens for organization users (for admins)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If a personal access token (PAT) is compromised, act swiftly.
Administrators can revoke a user's PAT to safeguard the organization.
Disabling a user's account also revokes their PAT.

> [!TIP]
> To create or revoke your own PAT, go to your [Personal access token page](use-personal-access-tokens-to-authenticate.md#revoke-a-pat).

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Why revoke user PATs?

Revoking user PATs is essential for the following reasons:
- **Compromised token** - Prevent unauthorized access if a token is compromised.
- **User leaves the organization** - Ensure former employees no longer have access.
- **Permission changes** - Invalidate tokens that reflect old permissions.
- **Security breach** - Mitigate unauthorized access during a breach.
- **Regular security practices** - Regularly revoke and reissue tokens as part of a security policy.

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Revoke PATs

1. To revoke OAuth authorizations, including PATs, for your organization's users, see [Token revocations - Revoke authorizations](/rest/api/azure/devops/tokenadministration/token%20revocations/revoke%20authorizations?view=azure-devops-rest-5.0&preserve-view=true).
2. To automate calling the REST API, use this [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin), which passes a list of user principal names (UPNs).
   If you don't know the UPN of the user who created the PAT, use this script with a specified date range.

> [!NOTE]
> When you use a date range, any JSON web tokens (JWTs) are also revoked.
> Any tooling that relies on these tokens doesn't work until refreshed with new tokens.

3. After you successfully revoke the affected PATs, inform your users.
   They can recreate their tokens as necessary.

There might be a delay of up to one hour before the PAT becomes inactive.
This latency period persists until the disable or delete operation is fully processed in Microsoft Entra ID.

<a id="token-expiration"></a>

## FedAuth token expiration

A FedAuth token gets issued when you sign in.
It's valid for a seven-day sliding window.
The expiry automatically extends another seven days whenever you refresh it within the sliding window.
If users access the service regularly, only an initial sign-in is needed.
After a period of inactivity extending seven days, the token becomes invalid and the user must sign in again.

## PAT expiration

Users can choose an expiry date for their PAT, not to exceed one year.
Use shorter time periods and generate new PATs upon expiry.
Users receive a notification email one week before the token expires.
Users can generate a new token, extend the expiry of the existing token, or change the scope of the existing token if needed.

:::moniker range="azure-devops"

## Auditing logs

If your organization is connected to Microsoft Entra ID, you have access to audit logs that track various events, including permissions changes, deleted resources, and log access.
These audit logs are valuable for checking revocations or investigating any activity.
For more information, see [Access, export, and filter audit logs](../audit/azure-devops-auditing.md).

:::moniker-end

## Frequently asked questions (FAQs)

### Q: What happens to a PAT if a user leaves my company?

A: After a user is removed from Microsoft Entra ID, the PATs and FedAuth tokens invalidate within an hour, since the refresh token is valid only for one hour.

### Q: Should I revoke JSON web tokens (JWTs)?

A: If you have JWTs that you believe should be revoked, revoke them promptly.
Revoke JWTs issued as part of the OAuth flow using the [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin).
Be sure to use the date range option in the script.

## Related content

- [Learn how Microsoft protects your projects and data in Azure DevOps](../../organizations/security/data-protection.md)
- [Use personal access tokens to authenticate](use-personal-access-tokens-to-authenticate.md)
- [Manage personal access tokens with policies (for admins)](manage-pats-with-policies-for-administrators.md)
- [Authenticate to Azure DevOps with Microsoft Entra](../../integrate/get-started/authentication/entra.md)
