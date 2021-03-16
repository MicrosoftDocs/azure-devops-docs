---
title: Revoke personal access tokens for users
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Administrators can revoke personal access tokens (PATs) for users when they're compromised, protecting the organization.
ms.technology: devops-accounts
ms.assetid: 
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 07/28/2020
monikerRange: '>= tfs-2017'
---

# Revoke personal access tokens for organization users

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

If your personal access token (PAT) is compromised, take immediate action. Learn how an administrator can revoke a user's PAT, as a precaution to protect your organization. You can also disable a user, which revokes their PAT. There's latency (up to an hour) before the PAT stops working however, once the disable or delete function completes in Azure Active Directory (Azure AD). 

## Prerequisites

Only an organization administrator or Project Collection Administrator (PCA) can revoke user PATs. If you're not a member of the **Project Collection Administrators** group, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). To learn how to find your organization's admin, see [Look up administrators and organization Owner](../security/lookup-organization-owner-admin.md).

For users, if you want to create or revoke your own PATs, see [Create or revoke personal access tokens](use-personal-access-tokens-to-authenticate.md).

## Revoke PATs

1. To revoke the OAuth authorizations, including PATs, for your organization's users, see [Token revocations - Revoke authorizations](/rest/api/azure/devops/tokenadministration/token%20revocations/revoke%20authorizations?view=azure-devops-rest-5.0&preserve-view=true).
2. Use this [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin) to automate calling the new REST API by passing a list of user principal names (UPNs). If you don't know the UPN of the user who created the PAT, use this script, however it must be based on a date range.

> [!NOTE]
> Keep in mind that when you use a date range any JSON web tokens (JWTs) are also revoked. Also be aware that any tooling that relies on these tokens won't work until refreshed with new tokens.

3. After you've successfully revoked the affected PATs, let your users know. They can recreate their tokens, as needed.

<a id="token-expiration" />

## FedAuth token expiration

A FedAuth token gets issued when you sign in. It's valid for a seven-day sliding window. The expiry automatically extends another seven days whenever you refresh it within the sliding window. If users access the service regularly, only an initial sign-in is needed. After a period of inactivity extending seven days, the token becomes invalid and the user must sign in again.

## Personal access token expiration

Users can choose an expiry date for their personal access token, not to exceed one year. We recommend you use shorter time periods, generating new PATs upon expiry. Users receive a notification email one week before token expiry. Users can generate a new token, extend expiry of the existing token, or change the scope of the existing token, if needed.

## Frequently asked questions (FAQs)

### Q: What if a user leaves my company?

A: Once a user's removed from Azure AD, the PATs and FedAuth tokens invalidate within an hour, since the refresh token is valid only for one hour.

### Q: What about JSON web tokens (JWTs)?

A: Revoke JWTs, issued as part of the OAuth flow, via the [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin). However, you must use the date range option in the script.

## Related articles

- [How Microsoft protects your projects and data in Azure DevOps](../../organizations/security/data-protection.md)
- [Create or revoke your personal access tokens](use-personal-access-tokens-to-authenticate.md)