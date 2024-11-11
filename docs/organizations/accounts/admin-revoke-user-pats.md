---
title: Revoke personal access tokens for users
titleSuffix: Azure DevOps
description: Administrators can revoke personal access tokens (PATs) for users when they're compromised, protecting the organization.
ms.subservice: azure-devops-security
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.date: 10/22/2024
monikerRange: '<= azure-devops'
---

# Revoke personal access tokens for organization users

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If a Personal Access Token (PAT) is compromised, it's crucial to act swiftly. Administrators can revoke a user's PAT to safeguard the organization. Disabling a user's account also revokes their PAT.

## Why revoke user PATs?

Revoking user PATs is essential for the following reasons:
- **Compromised token**: Prevent unauthorized access if a token is compromised.
- **User leaves the organization**: Ensure former employees no longer have access.
- **Permission changes**: Invalidate tokens reflecting old permissions.
- **Security breach**: Mitigate unauthorized access during a breach.
- **Regular security practices**: Regularly revoke and reissue tokens as part of a security policy.

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

> [!TIP]
> To create or revoke your own PATs, see [Create or revoke PATs](use-personal-access-tokens-to-authenticate.md).

## Revoke PATs

1. To revoke OAuth authorizations, including PATs, for your organization's users, see [Token revocations - Revoke authorizations](/rest/api/azure/devops/tokenadministration/token%20revocations/revoke%20authorizations?view=azure-devops-rest-5.0&preserve-view=true).
2. To automate calling the REST API, use this [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin), which passes a list of user principal names (UPNs). If you don't know the UPN of the user who created the PAT, use this script with a specified date range.

> [!NOTE]
> When you use a date range any JSON web tokens (JWTs) are also revoked. Any tooling that relies on these tokens doesn't work until refreshed with new tokens.

3. After you successfully revoke the affected PATs, inform your users. They can recreate their tokens as necessary.

There might be a delay of up to one hour before the PAT becomes inactive, as this latency period persists until the disable or delete operation is fully processed in Microsoft Entra ID.

<a id="token-expiration"></a>

## FedAuth token expiration

A FedAuth token gets issued when you sign in. It's valid for a seven-day sliding window. The expiry automatically extends another seven days whenever you refresh it within the sliding window. If users access the service regularly, only an initial sign-in is needed. After a period of inactivity extending seven days, the token becomes invalid and the user must sign in again.

## PAT expiration

Users can choose an expiry date for their PAT, not to exceed one year. We recommend using shorter time periods and generating new PATs upon expiry. Users receive a notification email one week before the token expires. Users can generate a new token, extend the expiry of the existing token, or change the scope of the existing token if needed.

:::moniker range="azure-devops"

## Auditing logs

If your organization is connected to Microsoft Entra ID, you have access to audit logs that track various events, including permissions changes, deleted resources, and log access. These audit logs are valuable for checking revocations or investigating any activity. For more information, see [Access, export, and filter audit logs](../audit/azure-devops-auditing.md).

:::moniker-end

## Frequently asked questions (FAQs)

### Q: What happens to a PAT if a user leaves my company?

A: Once a user gets removed from Microsoft Entra ID, the PATs and FedAuth tokens invalidate within an hour, since the refresh token is valid only for one hour.

### Q: Should I revoke JSON web tokens (JWTs)?

A: If you have JWTs that you believe should be revoked, we recommend doing so promptly. Revoke JWTs issued as part of the OAuth flow using the [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin). Be sure to use the date range option in the script.

## Related articles

- [Learn how Microsoft protects your projects and data in Azure DevOps](../../organizations/security/data-protection.md)
- [Create or revoke PATs](use-personal-access-tokens-to-authenticate.md)
