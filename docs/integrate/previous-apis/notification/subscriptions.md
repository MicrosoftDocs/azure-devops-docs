---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Notification subscriptions | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 04/07/2017
---

# Notification subscriptions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/notification/subscriptions?api-version=3.2-preview
```
```json
{
  "description": "All changes to work items in the Fabrikam project",
  "filter": {
    "eventType": "ms.vss-work.workitem-changed-event",
    "criteria": {
      "clauses": [],
      "groups": [],
      "maxGroupLevel": 0
    },
    "type": "Expression"
  },
  "channel": {
    "type": "EmailHtml"
  },
  "scope": {
    "id": "19980dff-b50a-463e-ad01-2c93628490ff"
  }
}
```

#### Sample response

```json
{
  "id": "114711",
  "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114711",
  "description": "All changes to work items in the Fabrikam project",
  "subscriber": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "status": "enabled",
  "flags": "none",
  "modifiedDate": "2017-03-13T04:46:13.663Z",
  "lastModifiedBy": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "scope": {
    "type": "none",
    "id": "19980dff-b50a-463e-ad01-2c93628490ff"
  },
  "filter": {
    "type": "Expression",
    "criteria": {
      "clauses": [
        {
          "logicalOperator": "",
          "fieldName": "",
          "operator": "=",
          "value": "",
          "index": 1
        }
      ],
      "groups": [],
      "maxGroupLevel": 0
    },
    "eventType": "ms.vss-work.workitem-changed-event"
  },
  "channel": {
    "type": "EmailHtml",
    "useCustomAddress": false
  },
  "_links": {
    "edit": {
      "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114711&publisherId=ms.vss-work.work-event-publisher&action=view"
    }
  },
  "permissions": "view, edit, delete"
}
```


### For a team
#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/notification/subscriptions?api-version=3.2-preview
```
```json
{
  "description": "A new work item enters our area path",
  "filter": {
    "eventType": "ms.vss-work.workitem-changed-event",
    "criteria": {
      "clauses": [],
      "groups": [],
      "maxGroupLevel": 0
    },
    "type": "Expression"
  },
  "subscriber": {
    "id": "552e2388-e9bb-429e-ad71-c2fef2ad085f"
  },
  "channel": {
    "type": "EmailHtml",
    "address": "myteam@fabrikam.org",
    "useCustomAddress": true
  }
}
```

#### Sample response

```json
{
  "id": "114712",
  "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114712",
  "description": "A new work item enters our area path",
  "subscriber": {
    "id": "552e2388-e9bb-429e-ad71-c2fef2ad085f",
    "displayName": "[FabrikamCloud]\\Fab",
    "uniqueName": "vstfs:///Classification/TeamProject/3b3ae425-0079-421f-9101-bcf15d6df041\\Fab",
    "isContainer": true
  },
  "status": "enabled",
  "flags": "groupSubscription",
  "modifiedDate": "2017-03-13T04:46:18.027Z",
  "lastModifiedBy": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "scope": {
    "type": "none",
    "id": "00000000-0000-636f-6c6c-656374696f6e"
  },
  "filter": {
    "type": "Expression",
    "criteria": {
      "clauses": [
        {
          "logicalOperator": "",
          "fieldName": "",
          "operator": "=",
          "value": "",
          "index": 1
        }
      ],
      "groups": [],
      "maxGroupLevel": 0
    },
    "eventType": "ms.vss-work.workitem-changed-event"
  },
  "channel": {
    "type": "EmailHtml",
    "address": "myteam@fabrikam.org",
    "useCustomAddress": true
  },
  "_links": {},
  "permissions": "view, edit, delete"
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/notification/subscriptions/114711?api-version=3.2-preview
```

#### Sample response

```json
{
  "id": "114711",
  "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114711",
  "description": "All changes to work items in the Fabrikam project",
  "subscriber": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "status": "enabled",
  "flags": "none",
  "modifiedDate": "2017-03-13T04:46:13.663Z",
  "lastModifiedBy": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "scope": {
    "type": "none",
    "id": "19980dff-b50a-463e-ad01-2c93628490ff"
  },
  "filter": {
    "type": "Expression",
    "criteria": {
      "clauses": [
        {
          "logicalOperator": "",
          "fieldName": "",
          "operator": "=",
          "value": "",
          "index": 1
        }
      ],
      "groups": [],
      "maxGroupLevel": 0
    },
    "eventType": "ms.vss-work.workitem-changed-event"
  },
  "channel": {
    "type": "EmailHtml",
    "useCustomAddress": false
  },
  "_links": {
    "edit": {
      "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114711&publisherId=ms.vss-work.work-event-publisher&action=view"
    }
  },
  "permissions": "view, edit, delete"
}
```


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
#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/notification/subscriptionQuery?api-version=3.2-preview
```
```json
{
  "conditions": [
    {
      "subscriber": "552e2388-e9bb-429e-ad71-c2fef2ad085f"
    }
  ]
}
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "105645",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/105645",
      "description": "A pull request is created or updated",
      "subscriber": {
        "id": "552e2388-e9bb-429e-ad71-c2fef2ad085f",
        "displayName": "[FabrikamCloud]\\Fab",
        "uniqueName": "vstfs:///Classification/TeamProject/3b3ae425-0079-421f-9101-bcf15d6df041\\Fab",
        "isContainer": true
      },
      "status": "enabled",
      "flags": "groupSubscription, canOptOut",
      "modifiedDate": "2017-01-10T17:53:24.337Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "00000000-0000-636f-6c6c-656374696f6e"
      },
      "filter": {
        "type": "Actor",
        "inclusions": [
          "author",
          "reviewer",
          "changedReviewers"
        ],
        "exclusions": [
          "initiator"
        ],
        "criteria": {
          "clauses": [],
          "groups": [],
          "maxGroupLevel": 0
        },
        "eventType": "ms.vss-code.git-pullrequest-event"
      },
      "channel": {
        "type": "User",
        "useCustomAddress": false
      },
      "adminSettings": {
        "blockUserOptOut": false
      },
      "subscriptionUserSettings": {
        "optedOut": false
      },
      "_links": {},
      "permissions": "view, edit, delete"
    },
    {
      "id": "105936",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/105936",
      "description": "A build completes",
      "subscriber": {
        "id": "552e2388-e9bb-429e-ad71-c2fef2ad085f",
        "displayName": "[FabrikamCloud]\\Fab",
        "uniqueName": "vstfs:///Classification/TeamProject/3b3ae425-0079-421f-9101-bcf15d6df041\\Fab",
        "isContainer": true
      },
      "status": "enabled",
      "flags": "groupSubscription",
      "modifiedDate": "2017-01-25T02:09:42.863Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "3b3ae425-0079-421f-9101-bcf15d6df041"
      },
      "filter": {
        "type": "Expression",
        "eventType": "ms.vss-build.build-completed-event"
      },
      "channel": {
        "type": "EmailHtml",
        "address": "tasd@boo.com",
        "useCustomAddress": true
      },
      "_links": {},
      "permissions": "view, edit, delete"
    },
    {
      "id": "114712",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114712",
      "description": "A new work item enters our area path",
      "subscriber": {
        "id": "552e2388-e9bb-429e-ad71-c2fef2ad085f",
        "displayName": "[FabrikamCloud]\\Fab",
        "uniqueName": "vstfs:///Classification/TeamProject/3b3ae425-0079-421f-9101-bcf15d6df041\\Fab",
        "isContainer": true
      },
      "status": "enabled",
      "flags": "groupSubscription",
      "modifiedDate": "2017-03-13T04:46:18.027Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "00000000-0000-636f-6c6c-656374696f6e"
      },
      "filter": {
        "type": "Expression",
        "eventType": "ms.vss-work.workitem-changed-event"
      },
      "channel": {
        "type": "EmailHtml",
        "address": "myteam@fabrikam.org",
        "useCustomAddress": true
      },
      "_links": {},
      "permissions": "view, edit, delete"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/notification/subscriptions?api-version=3.2-preview
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": "105852",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/105852",
      "description": "A commit is pushed by me",
      "subscriber": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "status": "enabled",
      "flags": "none",
      "modifiedDate": "2017-01-04T16:14:15.487Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "473139fc-10c2-419d-ad16-d18610b76be3"
      },
      "filter": {
        "type": "Expression",
        "criteria": {
          "clauses": [
            {
              "logicalOperator": "",
              "fieldName": "Pushed by",
              "operator": "=",
              "value": "[Me]",
              "index": 1
            }
          ],
          "groups": [],
          "maxGroupLevel": 0
        },
        "eventType": "ms.vss-code.git-push-event"
      },
      "channel": {
        "type": "EmailHtml",
        "useCustomAddress": false
      },
      "_links": {
        "edit": {
          "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=105852&publisherId=ms.vss-code.git-event-publisher&action=view"
        }
      },
      "permissions": "view, edit, delete"
    },
    {
      "id": "105897",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/105897",
      "description": "Code is pushed to the Ops repo",
      "subscriber": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "status": "disabled",
      "flags": "none",
      "modifiedDate": "2017-01-07T20:49:54.307Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "00000000-0000-636f-6c6c-656374696f6e"
      },
      "filter": {
        "type": "Expression",
        "criteria": {
          "clauses": [
            {
              "logicalOperator": "",
              "fieldName": "Pushed by",
              "operator": "=",
              "value": "[Me]",
              "index": 1
            }
          ],
          "groups": [],
          "maxGroupLevel": 0
        },
        "eventType": "ms.vss-code.git-push-event"
      },
      "channel": {
        "type": "EmailHtml",
        "useCustomAddress": false
      },
      "_links": {
        "edit": {
          "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=105897&publisherId=ms.vss-code.git-event-publisher&action=view"
        }
      },
      "permissions": "view, edit, delete"
    },
    {
      "id": "114710",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114710",
      "description": "All changes to work items in the Fabrikam project",
      "subscriber": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "status": "enabled",
      "flags": "none",
      "modifiedDate": "2017-03-13T04:45:51.343Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "19980dff-b50a-463e-ad01-2c93628490ff"
      },
      "filter": {
        "type": "Expression",
        "criteria": {
          "clauses": [
            {
              "logicalOperator": "",
              "fieldName": "",
              "operator": "=",
              "value": "",
              "index": 1
            }
          ],
          "groups": [],
          "maxGroupLevel": 0
        },
        "eventType": "ms.vss-work.workitem-changed-event"
      },
      "channel": {
        "type": "EmailHtml",
        "useCustomAddress": false
      },
      "_links": {
        "edit": {
          "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114710&publisherId=ms.vss-work.work-event-publisher&action=view"
        }
      },
      "permissions": "view, edit, delete"
    },
    {
      "id": "114711",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114711",
      "description": "All changes to work items in the Fabrikam project",
      "subscriber": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "status": "enabled",
      "flags": "none",
      "modifiedDate": "2017-03-13T04:46:13.663Z",
      "lastModifiedBy": {
        "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber16@outlook.com"
      },
      "scope": {
        "type": "none",
        "id": "19980dff-b50a-463e-ad01-2c93628490ff"
      },
      "filter": {
        "type": "Expression",
        "criteria": {
          "clauses": [
            {
              "logicalOperator": "",
              "fieldName": "",
              "operator": "=",
              "value": "",
              "index": 1
            }
          ],
          "groups": [],
          "maxGroupLevel": 0
        },
        "eventType": "ms.vss-work.workitem-changed-event"
      },
      "channel": {
        "type": "EmailHtml",
        "useCustomAddress": false
      },
      "_links": {
        "edit": {
          "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114711&publisherId=ms.vss-work.work-event-publisher&action=view"
        }
      },
      "permissions": "view, edit, delete"
    }
  ]
}
```


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
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/notification/subscriptions/114711?api-version=3.2-preview
```
```json
{
  "description": "All changes to work items in this account",
  "scope": {
    "id": null
  }
}
```

#### Sample response

```json
{
  "id": "114711",
  "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114711",
  "description": "All changes to work items in this account",
  "subscriber": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "status": "enabled",
  "flags": "none",
  "modifiedDate": "2017-03-13T04:46:15.21Z",
  "lastModifiedBy": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "scope": {
    "type": "none",
    "id": "00000000-0000-636f-6c6c-656374696f6e"
  },
  "filter": {
    "type": "Expression",
    "criteria": {
      "clauses": [
        {
          "logicalOperator": "",
          "fieldName": "",
          "operator": "=",
          "value": "",
          "index": 1
        }
      ],
      "groups": [],
      "maxGroupLevel": 0
    },
    "eventType": "ms.vss-work.workitem-changed-event"
  },
  "channel": {
    "type": "EmailHtml",
    "useCustomAddress": false
  },
  "_links": {
    "edit": {
      "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114711&publisherId=ms.vss-work.work-event-publisher&action=view"
    }
  },
  "permissions": "view, edit, delete"
}
```


### Disable
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/notification/subscriptions/114711?api-version=3.2-preview
```
```json
{
  "status": "disabled"
}
```

#### Sample response

```json
{
  "id": "114711",
  "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/114711",
  "description": "All changes to work items in this account",
  "subscriber": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "status": "disabled",
  "flags": "none",
  "modifiedDate": "2017-03-13T04:46:15.743Z",
  "lastModifiedBy": {
    "id": "cd49a245-51cc-493a-ab1a-5c0feb5afaa3",
    "displayName": "Jamal Hartnett",
    "uniqueName": "fabrikamfiber16@outlook.com"
  },
  "scope": {
    "type": "none",
    "id": "00000000-0000-636f-6c6c-656374696f6e"
  },
  "filter": {
    "type": "Expression",
    "criteria": {
      "clauses": [
        {
          "logicalOperator": "",
          "fieldName": "",
          "operator": "=",
          "value": "",
          "index": 1
        }
      ],
      "groups": [],
      "maxGroupLevel": 0
    },
    "eventType": "ms.vss-work.workitem-changed-event"
  },
  "channel": {
    "type": "EmailHtml",
    "useCustomAddress": false
  },
  "_links": {
    "edit": {
      "href": "https://mytfsserver/DefaultCollection/_notifications?subscriptionId=114711&publisherId=ms.vss-work.work-event-publisher&action=view"
    }
  },
  "permissions": "view, edit, delete"
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/notification/subscriptions/114711?api-version=3.2-preview
```


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
#### Sample request

```
PUT https://mytfsserver/DefaultCollection/_apis/notification/subscriptions/ms.vss-code.pull-request-updated-subscription/userSettings/me?api-version=3.2-preview
```
```json
{
  "optedOut": true
}
```

#### Sample response

```json
{
  "optedOut": true
}
```
