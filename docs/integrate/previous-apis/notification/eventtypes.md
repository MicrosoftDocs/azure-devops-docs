---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Notification event types | REST API Reference for Team Foundation Server
description: REST APIs for Team Foundation Server.
ms.assetid: 70F8A8F8-474C-4664-A26C-A5DC714E6242
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/13/2017
---

# Notification event types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-2-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

<a name="Get"></a>

## Get
Get a specific event type.


```no-highlight
GET https://{instance}/_apis/notification/eventtypes/{eventType}?api-version={version}
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
| <code>eventType</code> | URL | string | Required.
| <code>api-version</code> | Query | string | Required. [Version](../../concepts/rest-api-versioning.md) of the API to use.  This should be set to '3.2-preview' to use this version of the API.

#### Response

| Type       | Notes
|:-----------|:---------
| [NotificationEventType](./contracts.md#NotificationEventType) | Encapsulates the properties of an event type. It defines the fields, that can be used for filtering, for that event type.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/notification/eventTypes/ms.vss-build.build-completed-event?api-version=3.2-preview
```

#### Sample response

```json
{
  "id": "ms.vss-build.build-completed-event",
  "name": "Build completed",
  "url": null,
  "eventPublisher": {
    "id": "ms.vss-build.build-event-publisher",
    "subscriptionManagementInfo": {
      "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
    }
  },
  "category": {
    "id": "ms.vss-build.build-and-release-event-category",
    "name": "Build"
  },
  "fields": {
    "ms.vss-build.build-controller-event-field": {
      "id": "ms.vss-build.build-controller-event-field",
      "name": "Build controller",
      "fieldType": {
        "id": "ms.vss-build.build-controller-field-type",
        "operators": [
          "=",
          "<>"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Controller/@Name",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.build-reason-event-field": {
      "id": "ms.vss-build.build-reason-event-field",
      "name": "Build reason",
      "fieldType": {
        "id": "ms.vss-build.build-reason-field-type",
        "operators": [
          "=",
          "<>",
          "Contains",
          "Does not contain"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Build/@Reason",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.compilation-status-event-field": {
      "id": "ms.vss-build.compilation-status-event-field",
      "name": "Compilation status",
      "fieldType": {
        "id": "ms.vss-build.phase-status-field-type",
        "operators": [
          "=",
          "<>",
          "Contains",
          "Does not contain"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Build/@CompilationStatus",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.definition-name-event-field": {
      "id": "ms.vss-build.definition-name-event-field",
      "name": "Definition name",
      "fieldType": {
        "id": "ms.vss-build.definition-name-field-type",
        "operators": [
          "=",
          "<>",
          "Contains"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Definition/@FullPath",
      "supportedScopes": [
        "project"
      ]
    },
    "ms.vss-build.requested-by-event-field": {
      "id": "ms.vss-build.requested-by-event-field",
      "name": "Requested by",
      "fieldType": {
        "id": "ms.vss-notifications.identity-array-field-type",
        "operators": [
          "Contains",
          "Does not contain"
        ],
        "operatorConstraints": []
      },
      "path": "RequestedBy",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.requested-for-event-field": {
      "id": "ms.vss-build.requested-for-event-field",
      "name": "Requested for",
      "fieldType": {
        "id": "ms.vss-notifications.identity-array-field-type",
        "operators": [
          "Contains",
          "Does not contain"
        ],
        "operatorConstraints": []
      },
      "path": "RequestedFor",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.status-event-field": {
      "id": "ms.vss-build.status-event-field",
      "name": "Status",
      "fieldType": {
        "id": "ms.vss-build.status-field-type",
        "operators": [
          "=",
          "<>"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Build/@Status",
      "supportedScopes": [
        "project",
        "collection"
      ]
    },
    "ms.vss-build.team-project-event-field": {
      "id": "ms.vss-build.team-project-event-field",
      "name": "Team project",
      "fieldType": {
        "id": "ms.vss-tfs.project-field-type",
        "operators": [
          "=",
          "<>"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Build/@TeamProject",
      "supportedScopes": [
        "collection"
      ]
    },
    "ms.vss-build.test-status-event-field": {
      "id": "ms.vss-build.test-status-event-field",
      "name": "Test status",
      "fieldType": {
        "id": "ms.vss-build.phase-status-field-type",
        "operators": [
          "=",
          "<>",
          "Contains",
          "Does not contain"
        ],
        "operatorConstraints": []
      },
      "path": "tb1:Build/@TestStatus",
      "supportedScopes": [
        "project",
        "collection"
      ]
    }
  },
  "roles": [
    {
      "id": "lastChangedBy",
      "name": "Last changed by"
    },
    {
      "id": "requestedBy",
      "name": "Requested by"
    },
    {
      "id": "requestedFor",
      "name": "Requested for"
    }
  ],
  "supportedScopes": [
    "project",
    "collection"
  ],
  "hasInitiator": false,
  "customSubscriptionsAllowed": true,
  "icon": "css://bowtie-icon bowtie-build",
  "color": "#748189"
}
```


<a name="List"></a>

## List
List available event types for this service. Optionally filter by only event types for the specified publisher.


```no-highlight
GET https://{instance}/_apis/notification/eventtypes?api-version={version}
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
| <code>publisherId</code> | Query | string | Optional. Limit to event types for this publisher

#### Response

| Type       | Notes
|:-----------|:---------
| VssJsonCollectionWrapper&lt;array ([NotificationEventType](./contracts.md#NotificationEventType))&gt; |

### All
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/notification/eventTypes?api-version=3.2-preview
```

#### Sample response

```json
{
  "count": 19,
  "value": [
    {
      "id": "ms.vss-build.build-completed-event",
      "name": "Build completed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-completed-event",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-build.build-and-release-event-category",
        "name": "Build"
      },
      "roles": [
        {
          "id": "lastChangedBy",
          "name": "Last changed by"
        },
        {
          "id": "requestedBy",
          "name": "Requested by"
        },
        {
          "id": "requestedFor",
          "name": "Requested for"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-build",
      "color": "#748189"
    },
    {
      "id": "ms.vss-build.build-completion-legacy-event",
      "name": "Build completed (legacy)",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-completion-legacy-event",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-build.build-and-release-event-category",
        "name": "Build"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": false,
      "icon": "css://bowtie-icon bowtie-build",
      "color": "#748189"
    },
    {
      "id": "ms.vss-build.build-completion-legacy-event2",
      "name": "Build completedV2 (legacy)",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-completion-legacy-event2",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-build.build-and-release-event-category",
        "name": "Build"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": false,
      "icon": "css://bowtie-icon bowtie-build",
      "color": "#748189"
    },
    {
      "id": "ms.vss-build.build-definition-changed-event",
      "name": "Build definition changed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-definition-changed-event",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-build.build-resource-changed-event",
      "name": "Build resource changed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-resource-changed-event",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-build.build-and-release-event-category",
        "name": "Build"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-build.build-status-change-event",
      "name": "Build status change",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-build.build-status-change-event",
      "eventPublisher": {
        "id": "ms.vss-build.build-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-build.build-and-release-event-category",
        "name": "Build"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-build",
      "color": "#748189"
    },
    {
      "id": "ms.vss-code.checkin-event",
      "name": "Code checked in",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.checkin-event",
      "eventPublisher": {
        "id": "ms.vss-code.code-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-tfvc-event-category",
        "name": "Code (TFVC)"
      },
      "roles": [
        {
          "id": "committer",
          "name": "Committer"
        },
        {
          "id": "owner",
          "name": "Owner"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-tfvc",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-push-event",
      "name": "Code pushed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-push-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [
        {
          "id": "pusher",
          "name": "Pushed by"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-commit",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-created-event",
      "name": "Repository created",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-created-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-renamed-event",
      "name": "Repository renamed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-renamed-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-deleted-event",
      "name": "Repository deleted",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-deleted-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-import-succeeded-event",
      "name": "Import successful",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-import-succeeded-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "collection",
        "project"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-code.git-import-failed-event",
      "name": "Import failed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-import-failed-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "collection",
        "project"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-code.git-pullrequest-event",
      "name": "Pull request created or updated",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-pullrequest-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [
        {
          "id": "author",
          "name": "Authored by"
        },
        {
          "id": "reviewer",
          "name": "Reviewer"
        },
        {
          "id": "changedReviewers",
          "name": "Changed reviewers"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-pull-request",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-pullrequest-merge-event",
      "name": "Pull request merged",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-pullrequest-merge-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-merge",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-codereview.codereview-changed-event",
      "name": "Code review changed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-codereview.codereview-changed-event",
      "eventPublisher": {
        "id": "ms.vss-codereview.codereview-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-tfvc-event-category",
        "name": "Code (TFVC)"
      },
      "roles": [
        {
          "id": "requestedBy",
          "name": "Requested by"
        },
        {
          "id": "newReviewer",
          "name": "New reviewer"
        },
        {
          "id": "reviewer",
          "name": "Reviewer"
        },
        {
          "id": "declinedReviewer",
          "name": "Declined reviewer"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-pull-request",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-notifications.subscription-disabled-event",
      "name": "Subscription disabled",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-notifications.subscription-disabled-event",
      "eventPublisher": {
        "id": "ms.vss-notifications.notifications-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00000000-0000-0000-0000-000000000000"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "collection",
        "project"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": false,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-tfs.message-sent-event",
      "name": "Team room message",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-tfs.message-sent-event",
      "eventPublisher": {
        "id": "ms.vss-tfs.chat-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": false,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-work.workitem-changed-event",
      "name": "Work item created or updated",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-work.workitem-changed-event",
      "eventPublisher": {
        "id": "ms.vss-work.work-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-work.work-event-category",
        "name": "Work"
      },
      "roles": [
        {
          "id": "System.AssignedTo",
          "name": "Assigned To"
        },
        {
          "id": "System.AssignedTo.Old",
          "name": "Previous Assignee"
        },
        {
          "id": "System.AssignedTo.New",
          "name": "Current Assignee"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-work-item",
      "color": "#009CCC"
    }
  ]
}
```


### By publisher
#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/notification/eventTypes?publisherId=ms.vss-code.git-event-publisher&api-version=3.2-preview
```

#### Sample response

```json
{
  "count": 8,
  "value": [
    {
      "id": "ms.vss-code.git-push-event",
      "name": "Code pushed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-push-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [
        {
          "id": "pusher",
          "name": "Pushed by"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-commit",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-created-event",
      "name": "Repository created",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-created-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-renamed-event",
      "name": "Repository renamed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-renamed-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-repository-deleted-event",
      "name": "Repository deleted",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-repository-deleted-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-repo-git",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-import-succeeded-event",
      "name": "Import successful",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-import-succeeded-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "collection",
        "project"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-code.git-import-failed-event",
      "name": "Import failed",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-import-failed-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": null,
      "roles": [],
      "supportedScopes": [
        "collection",
        "project"
      ],
      "hasInitiator": false,
      "customSubscriptionsAllowed": true,
      "icon": "",
      "color": ""
    },
    {
      "id": "ms.vss-code.git-pullrequest-event",
      "name": "Pull request created or updated",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-pullrequest-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [
        {
          "id": "author",
          "name": "Authored by"
        },
        {
          "id": "reviewer",
          "name": "Reviewer"
        },
        {
          "id": "changedReviewers",
          "name": "Changed reviewers"
        }
      ],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-pull-request",
      "color": "#68217A"
    },
    {
      "id": "ms.vss-code.git-pullrequest-merge-event",
      "name": "Pull request merged",
      "url": "https://mytfsserver/DefaultCollection/_apis/notification/Subscriptions/ms.vss-code.git-pullrequest-merge-event",
      "eventPublisher": {
        "id": "ms.vss-code.git-event-publisher",
        "subscriptionManagementInfo": {
          "serviceInstanceType": "00025394-6065-48ca-87d9-7f5672854ef7"
        }
      },
      "category": {
        "id": "ms.vss-code.code-git-event-category",
        "name": "Code (Git)"
      },
      "roles": [],
      "supportedScopes": [
        "project",
        "collection"
      ],
      "hasInitiator": true,
      "customSubscriptionsAllowed": true,
      "icon": "css://bowtie-icon bowtie-tfvc-merge",
      "color": "#68217A"
    }
  ]
}
```
