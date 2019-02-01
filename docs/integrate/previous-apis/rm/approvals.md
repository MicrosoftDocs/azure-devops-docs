---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Release approvals | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 06-09-2017
---

# Release approvals

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
#### Sample request

```
GET https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals?continuationToken=0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 2,
      "revision": 1,
      "approver": {
        "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabfiber@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
      },
      "approvalType": "preDeploy",
      "createdOn": "2017-05-31T16:40:14.47Z",
      "modifiedOn": "2017-05-31T16:40:14.47Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 1,
      "rank": 1,
      "release": {
        "id": 2,
        "name": "Release-2",
        "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/2",
        "_links": {}
      },
      "releaseDefinition": {
        "id": 1,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        "_links": {}
      },
      "releaseEnvironment": {
        "id": 5,
        "name": "Dev",
        "_links": {}
      },
      "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/2"
    },
    {
      "id": 1,
      "revision": 1,
      "approver": {
        "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabfiber@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
      },
      "approvalType": "preDeploy",
      "createdOn": "2017-05-31T16:40:04.577Z",
      "modifiedOn": "2017-05-31T16:40:04.577Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 1,
      "rank": 1,
      "release": {
        "id": 1,
        "name": "Release-1",
        "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/1",
        "_links": {}
      },
      "releaseDefinition": {
        "id": 1,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        "_links": {}
      },
      "releaseEnvironment": {
        "id": 1,
        "name": "Dev",
        "_links": {}
      },
      "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/1"
    }
  ]
}
```


### Pending for a specific user
#### Sample request

```
GET https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals?assignedToFilter=Chuck Reinhart&continuationToken=0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 2,
      "revision": 1,
      "approver": {
        "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabfiber@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
      },
      "approvalType": "preDeploy",
      "createdOn": "2017-05-31T16:40:14.47Z",
      "modifiedOn": "2017-05-31T16:40:14.47Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 1,
      "rank": 1,
      "release": {
        "id": 2,
        "name": "Release-2",
        "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/2",
        "_links": {}
      },
      "releaseDefinition": {
        "id": 1,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        "_links": {}
      },
      "releaseEnvironment": {
        "id": 5,
        "name": "Dev",
        "_links": {}
      },
      "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/2"
    },
    {
      "id": 1,
      "revision": 1,
      "approver": {
        "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabfiber@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
      },
      "approvalType": "preDeploy",
      "createdOn": "2017-05-31T16:40:04.577Z",
      "modifiedOn": "2017-05-31T16:40:04.577Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 1,
      "rank": 1,
      "release": {
        "id": 1,
        "name": "Release-1",
        "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/1",
        "_links": {}
      },
      "releaseDefinition": {
        "id": 1,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        "_links": {}
      },
      "releaseEnvironment": {
        "id": 1,
        "name": "Dev",
        "_links": {}
      },
      "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/1"
    }
  ]
}
```


### Pending for a specific release
#### Sample request

```
GET https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals?releaseIdsFilter=14&continuationToken=0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": 134,
      "revision": 1,
      "approver": {
        "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabfiber@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
      },
      "approvalType": "preDeploy",
      "createdOn": "2017-06-01T09:42:16.053Z",
      "modifiedOn": "2017-06-01T09:42:16.053Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 1,
      "rank": 1,
      "release": {
        "id": 14,
        "name": "Release-14",
        "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/14",
        "_links": {}
      },
      "releaseDefinition": {
        "id": 1,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
        "_links": {}
      },
      "releaseEnvironment": {
        "id": 53,
        "name": "Dev",
        "_links": {}
      },
      "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/134"
    }
  ]
}
```


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
| vso.release_manage | Release (read, write, execute and manage) | Grants the ability to read, update and delete release artifacts, including releases, release definitions and release environment, and the ability to queue and approve a new release.


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
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/20
```
```json
{
  "status": "approved",
  "comments": "Good to go!"
}
```

#### Sample response

```json
{
  "id": 20,
  "revision": 1,
  "approver": {
    "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabfiber@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
  },
  "approvedBy": {
    "id": "4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    "displayName": "Chuck Reinhart",
    "uniqueName": "fabfiber@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/4adb1680-0eac-6149-b5ee-fc8b4f6ca227",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=4adb1680-0eac-6149-b5ee-fc8b4f6ca227"
  },
  "approvalType": "preDeploy",
  "createdOn": "2017-05-31T18:07:40.45Z",
  "modifiedOn": "2017-05-31T18:08:09.577Z",
  "status": "approved",
  "comments": "Good to go!",
  "isAutomated": false,
  "isNotificationOn": true,
  "trialNumber": 1,
  "attempt": 1,
  "rank": 1,
  "history": [],
  "release": {
    "id": 3,
    "name": "Release-3",
    "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/releases/3",
    "_links": {}
  },
  "releaseDefinition": {
    "id": 1,
    "name": "MyShuttle.CD",
    "url": "https://mytfsserver/DefaultCollection/d07908bc-118f-47d2-8a13-ff75601a6b1a/_apis/Release/definitions/1",
    "_links": {}
  },
  "releaseEnvironment": {
    "id": 9,
    "name": "Dev",
    "_links": {}
  },
  "url": "https://mytfsserver/DefaultCollection/MyFirstProject/_apis/Release/approvals/20"
}
```
