---
title: Releases | VSTS REST API Reference
description: Get Releases programmatically using the REST APIs for VSTS.
ms.assetid: 3eb13243-f504-4cfd-a97e-638d8a0690d2
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Releases

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview2.md)]

**On-premises use** : An earlier, and slightly different version of the Release Management API is available in Team Foundation Server 2015 Update 2. To use this earlier version, you must specify an API version of **2.2-preview.1**.   

## Get a list of releases

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases?api-version={version}[&definitionId={int}&createdBy={string}&maxCreatedTime={datetime}&minCreatedTime={datetime}&statusFilter={string}&$expand={enum}&$top={string}&queryOrder={string}&continuationToken={string}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| account       | string   | Your VSTS organization.
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| definitionId  | int   | Releases for this definition.
| createdBy     | string   | Releases created by this user.<br/>Alias of the user. `chuckreinhart@outlook.com`, for example.
| minCreatedTime | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | Releases that were created after this time.
| maxCreatedTime | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) | Releases that were created before this time.
| statusFilter        | enum {<br/>&nbsp;&nbsp;Draft,<br/>&nbsp;&nbsp;Active,<br/>&nbsp;&nbsp;Abandoned<br/>} | Releases that have this status.
| $expand		| enum {<br/>&nbsp;&nbsp;environments,<br/>&nbsp;&nbsp;artifacts,<br/>&nbsp;&nbsp;approvals,<br/>&nbsp;&nbsp;none<br/>} | The property that should be expanded in the list of releases.
| $top		| int | Number of releases to get
| queryOrder		| enum {<br/>&nbsp;&nbsp;ascending,<br/>&nbsp;&nbsp;descending<br/>} | Gets the results in the defined order of created date for releases
| continuationToken		| string | Gets the releases after the continuation token provided .

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "count": 5,
  "value": [
    {
      "id": 115,
      "name": "Release-13",
      "status": "active",
      "createdOn": "2016-04-12T06:57:46.69Z",
      "modifiedOn": "2016-04-12T06:57:46.69Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikam"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "M 98 release",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/115/logs"
    },
    {
      "id": 108,
      "name": "Release-1",
      "status": "active",
      "createdOn": "2016-04-12T05:19:00.883Z",
      "modifiedOn": "2016-04-12T05:19:00.883Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {},
      "releaseDefinition": {
        "id": 11,
        "name": "MyShuttle.CD",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/11"
      },
      "description": "",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/108/logs"
    },
    {
      "id": 107,
      "name": "Release-6",
      "status": "active",
      "createdOn": "2016-04-12T03:01:02.73Z",
      "modifiedOn": "2016-04-12T05:23:13.077Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "1d7b4130-028b-4334-a754-2f13c83343e3",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/IdentityDomain/a3148d07-5064-4f40-a967-227c7de1cf9e\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/1d7b4130-028b-4334-a754-2f13c83343e3",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=1d7b4130-028b-4334-a754-2f13c83343e3",
        "isContainer": true
      },
      "variables": {
        "webAppName": {
          "value": "fabrikam"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Triggered by Fabrikam.CI 20160412.1.",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": true,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/107/logs"
    },
    {
      "id": 105,
      "name": "Release-4",
      "status": "active",
      "createdOn": "2016-04-11T10:19:44.6Z",
      "modifiedOn": "2016-04-11T10:19:44.6Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Fabrikam website release - M6",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/105/logs"
    },
    {
      "id": 103,
      "name": "Release-2",
      "status": "active",
      "createdOn": "2016-04-11T10:14:50.14Z",
      "modifiedOn": "2016-04-11T10:14:50.14Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Release FabFiber Website for M5",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/103/logs"
    }
  ]
}
```


### For a release definition
#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases?definitionId=12&api-version=3.0-preview.2
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "id": 115,
      "name": "Release-13",
      "status": "active",
      "createdOn": "2016-04-12T06:57:46.69Z",
      "modifiedOn": "2016-04-12T06:57:46.69Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikam"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "M 98 release",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/115/logs"
    },
    {
      "id": 107,
      "name": "Release-6",
      "status": "active",
      "createdOn": "2016-04-12T03:01:02.73Z",
      "modifiedOn": "2016-04-12T05:23:13.077Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "1d7b4130-028b-4334-a754-2f13c83343e3",
        "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
        "uniqueName": "vstfs:///Framework/IdentityDomain/a3148d07-5064-4f40-a967-227c7de1cf9e\\Project Collection Service Accounts",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/1d7b4130-028b-4334-a754-2f13c83343e3",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=1d7b4130-028b-4334-a754-2f13c83343e3",
        "isContainer": true
      },
      "variables": {
        "webAppName": {
          "value": "fabrikam"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Triggered by Fabrikam.CI 20160412.1.",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": true,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/107/logs"
    },
    {
      "id": 105,
      "name": "Release-4",
      "status": "active",
      "createdOn": "2016-04-11T10:19:44.6Z",
      "modifiedOn": "2016-04-11T10:19:44.6Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Fabrikam website release - M6",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/105/logs"
    },
    {
      "id": 103,
      "name": "Release-2",
      "status": "active",
      "createdOn": "2016-04-11T10:14:50.14Z",
      "modifiedOn": "2016-04-11T10:14:50.14Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "releaseDefinition": {
        "id": 12,
        "name": "Fabrikam-Website",
        "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
      },
      "description": "Release FabFiber Website for M5",
      "reason": "manual",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/103/logs"
    }
  ]
}
```


## Get a release
<a name="getreleasedetails" />

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseId}?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId   | int    | ID of the release.
| Query
| version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases/116?api-version=3.0-preview.2
```

#### Sample response

```json
{
  "id": 116,
  "name": "Release-14",
  "status": "active",
  "createdOn": "2016-04-12T07:15:26.9Z",
  "modifiedOn": "2016-04-12T07:15:26.9Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "environments": [
    {
      "id": 248,
      "releaseId": 116,
      "name": "Dev",
      "status": "inProgress",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "preDeployApprovals": [
        {
          "id": 228,
          "revision": 1,
          "approvalType": "preDeploy",
          "createdOn": "2016-04-12T07:15:27.143Z",
          "modifiedOn": "2016-04-12T07:15:27.153Z",
          "status": "approved",
          "comments": "",
          "isAutomated": true,
          "isNotificationOn": false,
          "trialNumber": 1,
          "attempt": 1,
          "rank": 1,
          "release": {
            "id": 116,
            "name": "Release-14",
            "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/116"
          },
          "releaseDefinition": {
            "id": 12,
            "name": "Fabrikam-Website",
            "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
          },
          "releaseEnvironment": {
            "id": 248,
            "name": "Dev"
          }
        }
      ],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [
        {
          "id": 229,
          "attempt": 1,
          "tasks": [],
          "runPlanId": "00000000-0000-0000-0000-000000000000"
        }
      ],
      "rank": 1,
      "definitionEnvironmentId": 19,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [
        {
          "name": "ReleaseStarted",
          "conditionType": "event",
          "value": ""
        }
      ],
      "createdOn": "2016-04-12T07:15:27.143Z",
      "modifiedOn": "2016-04-12T07:15:27.323Z",
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 249,
      "releaseId": 116,
      "name": "QA",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebqaag"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 2,
      "definitionEnvironmentId": 20,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 250,
      "releaseId": 116,
      "name": "Pre-Prod",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabfiberweb"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 3,
      "definitionEnvironmentId": 21,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [
        {
          "name": "Dev",
          "conditionType": "environmentState",
          "value": "4"
        },
        {
          "name": "QA",
          "conditionType": "environmentState",
          "value": "4"
        }
      ],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    }
  ],
  "variables": {
    "webAppName": {
      "value": "fabrikam"
    }
  },
  "artifacts": [
    {
      "id": 1,
      "type": "Build",
      "alias": "Fabrikam.CI",
      "definitionReference": {
        "definition": {
          "id": "1",
          "name": "Fabrikam.CI"
        },
        "project": {
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364",
          "name": "Fabrikam"
        },
        "version": {
          "id": "90",
          "name": null
        },
        "branch": {
          "id": "refs/heads/master",
          "name": "refs/heads/master"
        }
      },
      "isPrimary": true
    }
  ],
  "releaseDefinition": {
    "id": 12,
    "name": "Fabrikam-Website",
    "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
  },
  "description": "M 98 release",
  "reason": "manual",
  "releaseNameFormat": "Release-$(rev:r)",
  "keepForever": false,
  "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/116/logs"
}
```


## Create a release

```no-highlight
POST https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	definitionId: {int},
	description: {string}
	artifacts: [
		{
			   alias: {string},
				 instanceReference: {
						name: {string},
						id: {string},
						sourceBranch: {string}
				 }
		}		
	]
}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| definitionId    | int  | ID of the Release definition for which release will be created.
| description    | string  | Description of the given release
| alias		 | string | Alias of the artifact associated with the release definition
| name  | string | (optional) Name of the artifact instance
| id 		 | string		| ID of the artifact
| sourceBranch | string | (optional) Source branch off which the artifact got created. Eg. For Build it mentions the branch that got built


#### Sample request

```
POST https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases?api-version=3.0-preview.2
```
```json
{
  "definitionId": 12,
  "description": "M 98 release",
  "artifacts": [
    {
      "alias": "Fabrikam.CI",
      "instanceReference": {
        "id": "90"
      }
    }
  ]
}
```

#### Sample response

```json
{
  "id": 116,
  "name": "Release-14",
  "status": "active",
  "createdOn": "2016-04-12T07:15:26.9Z",
  "modifiedOn": "2016-04-12T07:15:26.9Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "environments": [
    {
      "id": 248,
      "releaseId": 116,
      "name": "Dev",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 1,
      "definitionEnvironmentId": 19,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [
        {
          "name": "ReleaseStarted",
          "conditionType": "event",
          "value": ""
        }
      ],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 249,
      "releaseId": 116,
      "name": "QA",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebqaag"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 2,
      "definitionEnvironmentId": 20,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 250,
      "releaseId": 116,
      "name": "Pre-Prod",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabfiberweb"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 3,
      "definitionEnvironmentId": 21,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [
        {
          "name": "Dev",
          "conditionType": "environmentState",
          "value": "4"
        },
        {
          "name": "QA",
          "conditionType": "environmentState",
          "value": "4"
        }
      ],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    }
  ],
  "variables": {
    "webAppName": {
      "value": "fabrikam"
    }
  },
  "artifacts": [
    {
      "id": 1,
      "type": "Build",
      "alias": "Fabrikam.CI",
      "definitionReference": {
        "definition": {
          "id": "1",
          "name": "Fabrikam.CI"
        },
        "project": {
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364",
          "name": "Fabrikam"
        },
        "version": {
          "id": "90",
          "name": null
        }
      },
      "isPrimary": true
    }
  ],
  "releaseDefinition": {
    "id": 12,
    "name": "Fabrikam-Website",
    "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
  },
  "description": "M 98 release",
  "reason": "manual",
  "releaseNameFormat": "Release-$(rev:r)",
  "keepForever": false,
  "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/116/logs"
}
```


## Modify the status of a release

```no-highlight
PATCH https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	"status": {string}
}
```

| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| account     | string  | Your VSTS organization.
| project     | string  | [Project](../tfs/projects.md) ID or name.
| releaseId     | int     | ID of the release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | enum {<br/>&nbsp;&nbsp;Active,<br/>&nbsp;&nbsp;Abandoned<br/>}  | The new status.


### Abandoning an active release
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases/118?api-version=3.0-preview.2
```
```json
{
  "status": "abandoned"
}
```

#### Sample response

```json
{
  "id": 118,
  "name": "Release-16",
  "status": "abandoned",
  "createdOn": "2016-04-12T07:56:41.25Z",
  "modifiedOn": "2016-04-12T07:56:42.57Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "environments": [
    {
      "id": 254,
      "releaseId": 118,
      "name": "Dev",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebdevag"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 1,
      "definitionEnvironmentId": 19,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 255,
      "releaseId": 118,
      "name": "QA",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabrikamwebqaag"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 2,
      "definitionEnvironmentId": 20,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "id": 256,
      "releaseId": 118,
      "name": "Pre-Prod",
      "status": "notStarted",
      "variables": {
        "webAppName": {
          "value": "fabfiberweb"
        }
      },
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "postApprovalsSnapshot": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 0
          }
        ]
      },
      "deploySteps": [],
      "rank": 3,
      "definitionEnvironmentId": 21,
      "queueId": 2,
      "runOptions": {
        "EnvironmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "TimeoutInMinutes": "0"
      },
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "demands": [
        "Agent.Version -gtVersion 1.87"
      ],
      "conditions": [
        {
          "name": "Dev",
          "conditionType": "environmentState",
          "value": "4"
        },
        {
          "name": "QA",
          "conditionType": "environmentState",
          "value": "4"
        }
      ],
      "workflowTasks": [
        {
          "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
          "version": "*",
          "name": "Azure Deployment: FabrikamWeb",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "definitionType": "task",
          "inputs": {
            "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "South Central US",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
            "doNotDelete": "false",
            "AdditionalArguments": ""
          }
        }
      ],
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    }
  ],
  "variables": {
    "webAppName": {
      "value": "fabrikam"
    }
  },
  "artifacts": [
    {
      "id": 1,
      "type": "Build",
      "alias": "Fabrikam.CI",
      "definitionReference": {
        "definition": {
          "id": "1",
          "name": "Fabrikam.CI"
        },
        "project": {
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364",
          "name": "Fabrikam"
        },
        "version": {
          "id": "90",
          "name": null
        },
        "branch": {
          "id": "refs/heads/master",
          "name": "refs/heads/master"
        }
      },
      "isPrimary": true
    }
  ],
  "releaseDefinition": {
    "id": 12,
    "name": "Fabrikam-Website",
    "url": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/12"
  },
  "description": "M 98 release",
  "reason": "manual",
  "releaseNameFormat": "Release-$(rev:r)",
  "keepForever": false,
  "logsContainerUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/releases/118/logs"
}
```



## Change the status of a release environment

```no-highlight
PATCH https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/environments/{environmentId}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
	"status": {string}
}
```


| Parameter   | Type    | Notes
|:------------|:--------|:------------
| URL
| account     | string  | Your VSTS organization.
| project     | string  | [Project](../tfs/projects.md) ID or name.
| releaseId     | int     | ID of the release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| status      | enum {<br/>&nbsp;&nbsp;InProgress,<br/>&nbsp;&nbsp;Canceled,<br/>} | The new status.

### Start deployment on an environment
#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/releases/116/environments/249?api-version=3.0-preview.2
```
```json
{
  "status": "inprogress"
}
```

#### Sample response

```json
{
  "id": 249,
  "releaseId": 116,
  "name": "QA",
  "status": "queued",
  "variables": {
    "webAppName": {
      "value": "fabrikamwebqaag"
    }
  },
  "preDeployApprovals": [],
  "postDeployApprovals": [],
  "preApprovalsSnapshot": {
    "approvals": [
      {
        "rank": 1,
        "isAutomated": true,
        "isNotificationOn": false,
        "id": 0
      }
    ]
  },
  "postApprovalsSnapshot": {
    "approvals": [
      {
        "rank": 1,
        "isAutomated": true,
        "isNotificationOn": false,
        "id": 0
      }
    ]
  },
  "deploySteps": [],
  "rank": 2,
  "definitionEnvironmentId": 20,
  "queueId": 2,
  "runOptions": {
    "EnvironmentOwnerEmailNotificationType": "Always",
    "skipArtifactsDownload": "False",
    "TimeoutInMinutes": "0"
  },
  "environmentOptions": {
    "emailNotificationType": "Always",
    "skipArtifactsDownload": false,
    "timeoutInMinutes": 0
  },
  "demands": [
    "Agent.Version -gtVersion 1.87"
  ],
  "conditions": [],
  "workflowTasks": [
    {
      "taskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
      "version": "*",
      "name": "Azure Deployment: FabrikamWeb",
      "enabled": true,
      "alwaysRun": false,
      "continueOnError": false,
      "definitionType": "task",
      "inputs": {
        "ConnectedServiceName": "c39562bd-fe8f-4eca-a587-fe9817be5f30",
        "WebSiteName": "$(webAppName)",
        "WebSiteLocation": "South Central US",
        "Slot": "",
        "Package": "$(System.DefaultWorkingDirectory)/Fabrikam.CI/drop/Mvc4Bootstrap.zip",
        "doNotDelete": "false",
        "AdditionalArguments": ""
      }
    }
  ],
  "owner": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  }
}
```


## Get logs for a release

Get a zip file of all the tasks' logs for a release

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/logs?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId | int    | Logs for this release.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


## Get log for a task of a release

This gets the task log of a release as a plain text file.

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/releases/{releaseid}/environments/{environment}/tasks/{taskId}/logs?api-version={version}
```

| Parameter | Type   | Notes
|:----------|:-------|:------------
| URL
| account   | string | Your VSTS organization.
| project   | string | [Project](../tfs/projects.md) ID or name.
| releaseId | int |	Release ID for which this approval belongs to.
| environmentId | string |	Environment ID for which this approval belongs to.
| taskId	| int |	Task iD for the log.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
