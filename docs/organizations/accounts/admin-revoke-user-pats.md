---
title: Revoke personal access tokens for organization users - Admin
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Administrators can revoke organization users' personal access tokens (PATs).
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 03/06/2019
monikerRange: '>= tfs-2017'
---

# Revoke personal access tokens for organization users

[!INCLUDE [version-tfs-2017-through-vsts](../../_shared/version-tfs-2017-through-vsts.md)]

If an organization user's personal access token (PAT) has been compromised, we recommend taking immediate action. Revoke their access tokens, as a precaution to protect your organization. In this article, we show you how administrators of Azure DevOps organizations can revoke PATs for users.

## Prerequisites

Only an organization administrator or project collection administrator (PCA) can revoke user PATs. If you're not a member of the **Project Collection Administrators** group, [get added as one](../../organizations/security/set-project-collection-level-permissions.md). To learn how to find your organization's admin, see [Look up administrators and organization owner](../security/lookup-organization-owner-admin.md).

For users, if you want to create or revoke your own PATs, see [Create or revoke personal access tokens](use-personal-access-tokens-to-authenticate.md).

## Revoke PATs

1. To revoke the OAuth authorizations, including PATs, for your organization's users, see [Token revocations - Revoke authorizations](https://docs.microsoft.com/en-us/rest/api/azure/devops/tokenadministration/token%20revocations/revoke%20authorizations?view=azure-devops-rest-5.0).
2. Use this [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin) to automate calling the new REST API by passing a list of user principal names (UPNs). If you don't know the UPN of the user who created the PAT, use this script, however it must be based on a date range.

> [!NOTE]
> Keep in mind that when you use a date range any JSON web tokens (JWTs) are also revoked. Also be aware that any tooling that relies on these tokens won't work until refreshed with new tokens.

3. After you've successfully revoked the affected PATs, let your users know. They can recreate their tokens, as needed.

<a id="token-expiration" />

## Token expiration

### FedAuth tokens

A FedAuth token is issued when you sign-in. It is valid for a seven day sliding window. The expiry automatically extends another seven days whenever you refresh it within the sliding window. If users access the service regularly, only an initial sign-in is needed. After a period of inactivity extending seven days, the token becomes invalid and the user must sign in again.

### Personal access tokens

Users can choose an expiry date for their personal access token, not to exceed one year. We recommend you use shorter time periods, generating new PATs upon expiry. Users receive a notification email one week before token expiry. Users can generate a new token, extend expiry of the existing token, or change the scope of the existing token, if needed.

## Frequently asked questions (FAQs)

### What if a user leaves my company?

A: Once a user is removed from Azure AD, the PATs and FedAuth tokens are invalidated within an hour, since the refresh token is valid only for one hour.

### What about JSON web tokens (JWTs)?

A: Revoke JWTs, issued as part of the OAuth flow, via the [PowerShell script](https://github.com/Microsoft/vsts-script-samples/tree/master/PowerShell/TokenAdmin). However, you must use the date range option in the script.

## Related articles

- [How Microsoft protects your projects and data in Azure DevOps](../../organizations/security/data-protection.md)
- [Create or revoke your personal access tokens](use-personal-access-tokens-to-authenticate.md)
