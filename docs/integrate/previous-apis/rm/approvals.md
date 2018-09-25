---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Release approvals | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 06-09-2017
---

# Release approvals
[!INCLUDE [API_version](../_data/version4-0-preview2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

<a name="List"></a>

## List
Get a list of approvals


```no-highlight
GET https://{instance}/{project}/_apis/release/approvals?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.release | Release (read) | Grants the ability to read release artifacts, including releases, release definitions and release environment.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>project</code> | URL | string | Required. Project ID or project name
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '4.0-preview' to use this version of the API.
| <code>assignedToFilter</code> | Query | string | Optional. Approvals assigned to this user.
| <code>statusFilter</code> | Query | [ApprovalStatus](./contracts.md#ApprovalStatus) | Optional. Approvals with this status. Default is 'pending'.
| <code>releaseIdsFilter</code> | Query | array (int32) | Optional. Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
| <code>typeFilter</code> | Query | [ApprovalType](./contracts.md#ApprovalType) | Optional. Approval with this type.
| <code>top</code> | Query | int32 | Optional. Number of approvals to get. Default is 50.
| <code>continuationToken</code> | Query | int32 | Optional. Gets the approvals after the continuation token provided.
| <code>queryOrder</code> | Query | [ReleaseQueryOrder](./contracts.md#ReleaseQueryOrder) | Optional. Gets the results in the defined order of created approvals.Default is 'descending'.
| <code>includeMyGroupApprovals</code> | Query | boolean | Optional. 'true' to include my group approvals. Default is 'false'.

#### Response

| Type       | Notes
|:-----------|:---------
| VssJsonCollectionWrapper&lt;array ([ReleaseApproval](./contracts.md#ReleaseApproval))&gt; | List of approval objects.

### Pending for all users
[!code-REST [GET__ListAllPendingApprovals.json](./_data/approvals/GET__ListAllPendingApprovals.json)]

### Pending for a specific user
[!code-REST [GET__ListPendingApprovalsForASpecificUser.json](./_data/approvals/GET__ListPendingApprovalsForASpecificUser.json)]

### Pending for a specific release
[!code-REST [GET__ListPendingApprovalsForASpecificARelease.json](./_data/approvals/GET__ListPendingApprovalsForASpecificARelease.json)]

<a name="Update"></a>

## Update
Update status of an approval


```no-highlight
PATCH https://{instance}/{project}/_apis/release/approvals/{approvalId}?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.release_manage | Release (read, write, execute and manage) | Grants the ability to read, update and delete release artifacts, including releases, release definitions and release envrionment, and the ability to queue and approve a new release.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>project</code> | URL | string | Required. Project ID or project name
| <code>approvalId</code> | URL | int32 | Required. Id of the approval.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '4.0-preview' to use this version of the API.
| | Body | [ReleaseApproval](./contracts.md#ReleaseApproval) | Required.  ReleaseApproval object having status, approver and comments.

#### Response

| Type       | Notes
|:-----------|:---------
| [ReleaseApproval](./contracts.md#ReleaseApproval) | Updated ReleaseApproval object.

### Approve a release
[!code-REST [PATCH__UpdateStatusOfAnApprovalFromPendingToApproved.json](./_data/approvals/PATCH__UpdateStatusOfAnApprovalFromPendingToApproved.json)]