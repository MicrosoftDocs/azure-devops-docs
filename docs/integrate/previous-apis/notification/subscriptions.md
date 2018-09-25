---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Notification subscriptions | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/07/2017
---

# Notification subscriptions
[!INCLUDE [API_version](../_data/version3-2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

Manage and query notification subscriptions. A subscription defines the conditions by which a user or team should be notified when an event occurs and where notifications should be sent. A user or group can be the subscriber for a subscription.

<a name="Create"></a>

## Create
Create a new subscription.


```no-highlight
POST https://{instance}/_apis/notification/subscriptions?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification_write | Notifications (write) | Provides read/write access to subscriptions and read access to event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | [NotificationSubscriptionCreateParameters](./contracts.md#NotificationSubscriptionCreateParameters) | Required.  Parameters for creating a new subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.

#### Response

| Type       | Notes
|:-----------|:---------
| [NotificationSubscription](./contracts.md#NotificationSubscription) | A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.

### For a user
[!code-REST [POST__notification_subscriptions.json](./_data/subscriptions/POST__notification_subscriptions.json)]

### For a team
[!code-REST [POST__notification_subscriptions2.json](./_data/subscriptions/POST__notification_subscriptions2.json)]

<a name="Get"></a>

## Get
Get a notification subscription by its ID.


```no-highlight
GET https://{instance}/_apis/notification/subscriptions/{subscriptionId}?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>subscriptionId</code> | URL | string | Required.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| <code>queryFlags</code> | Query | [SubscriptionQueryFlags](./contracts.md#SubscriptionQueryFlags) | Optional.

#### Response

| Type       | Notes
|:-----------|:---------
| [NotificationSubscription](./contracts.md#NotificationSubscription) | A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.

[!code-REST [GET__notification_subscriptions__subscriptionId_.json](./_data/subscriptions/GET__notification_subscriptions__subscriptionId_.json)]

<a name="Query"></a>

## Query
Query for subscriptions. A subscription is returned if it matches one or more of the specified conditions.


```no-highlight
POST https://{instance}/_apis/notification/subscriptionquery?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | [SubscriptionQuery](./contracts.md#SubscriptionQuery) | Required.  Notification subscriptions query input.

#### Response

| Type       | Notes
|:-----------|:---------
| VssJsonCollectionWrapper&lt;array ([NotificationSubscription](./contracts.md#NotificationSubscription))&gt; |

### By subscriber
[!code-REST [POST__notification_subscriptionQuery.json](./_data/subscriptions/POST__notification_subscriptionQuery.json)]

<a name="List"></a>

## List

```no-highlight
GET https://{instance}/_apis/notification/subscriptions?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification | Notifications (read) | Provides read access to subscriptions and event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| <code>targetId</code> | Query | GUID | Optional.
| <code>ids</code> | Query | array (string) | Optional.
| <code>queryFlags</code> | Query | [SubscriptionQueryFlags](./contracts.md#SubscriptionQueryFlags) | Optional.

#### Response

| Type       | Notes
|:-----------|:---------
| VssJsonCollectionWrapper&lt;array ([NotificationSubscription](./contracts.md#NotificationSubscription))&gt; |

[!code-REST [GET__notification_subscriptions.json](./_data/subscriptions/GET__notification_subscriptions.json)]

<a name="Update"></a>

## Update
Update an existing subscription. Depending on the type of subscription and permissions, the caller can update the description, filter settings, channel (delivery) settings and more.


```no-highlight
PATCH https://{instance}/_apis/notification/subscriptions/{subscriptionId}?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification_write | Notifications (write) | Provides read/write access to subscriptions and read access to event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>subscriptionId</code> | URL | string | Required.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | [NotificationSubscriptionUpdateParameters](./contracts.md#NotificationSubscriptionUpdateParameters) | Required.  Parameters for updating an existing subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events. Note: only the fields to be updated should be set.

#### Response

| Type       | Notes
|:-----------|:---------
| [NotificationSubscription](./contracts.md#NotificationSubscription) | A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.

### Change description
[!code-REST [PATCH__notification_subscriptions__subscriptionId_.json](./_data/subscriptions/PATCH__notification_subscriptions__subscriptionId_.json)]

### Disable
[!code-REST [PATCH__notification_subscriptions__subscriptionId_2.json](./_data/subscriptions/PATCH__notification_subscriptions__subscriptionId_2.json)]

<a name="Delete"></a>

## Delete
Delete a subscription.


```no-highlight
DELETE https://{instance}/_apis/notification/subscriptions/{subscriptionId}?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification_write | Notifications (write) | Provides read/write access to subscriptions and read access to event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>subscriptionId</code> | URL | string | Required.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.

[!code-REST [DELETE__notification_subscriptions__subscriptionId_.json](./_data/subscriptions/DELETE__notification_subscriptions__subscriptionId_.json)]

<a name="Update subscription user settings"></a>

## Update subscription user settings
Update the specified users' settings for the specified subscription. User settings can only be applied to shared subscriptions, like team subscriptions or default subscriptions. This API is typically used to opt in or out of a shared subscription.


```no-highlight
PUT https://{instance}/_apis/notification/Subscriptions/{subscriptionId}/usersettings/{userId}?api-version={version}
```


#### Authorization scopes
For more details, see section on how to [authorize access to REST APIs](../../get-started/authentication/oauth.md).

| Scope | Name | Notes
|:------|:-----|:-----
| vso.notification_write | Notifications (write) | Provides read/write access to subscriptions and read access to event metadata, including filterable field values.


#### Request parameters
| Name | In  | Type | Notes
|:--------------|:-----------|:---------|:------------
| <code>instance</code> | URL | string | Required. TFS server name ({server:port}).
| <code>subscriptionId</code> | URL | string | Required.
| <code>userId</code> | URL | GUID | Optional. ID of the user or "me" to indicate the calling user
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.
| | Body | [SubscriptionUserSettings](./contracts.md#SubscriptionUserSettings) | Required.  User-managed settings for a group subscription.

#### Response

| Type       | Notes
|:-----------|:---------
| [SubscriptionUserSettings](./contracts.md#SubscriptionUserSettings) | User-managed settings for a group subscription.

### Opt out
[!code-REST [PUT__notification_subscriptions__sharedSubscriptionId__userSettings_me.json](./_data/subscriptions/PUT__notification_subscriptions__sharedSubscriptionId__userSettings_me.json)]