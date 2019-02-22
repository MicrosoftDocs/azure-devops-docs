---
title: Release Definitions | VSTS REST API Reference
description: Get release definitions programmatically using the REST APIs for VSTS.
ms.assetid: e61ec615-19fb-4ce9-a704-5b5e27221d5e
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Release definitions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview1.md)]

**On-premises use** : An earlier, and slightly different version of the Release Management API is available in Team Foundation Server 2015 Update 2. To use this earlier version, you must specify an API version of **2.2-preview.1**.   

## Get a list of release definitions

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions?api-version={version}[&$expand={enum}]
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand		| enum {<br/>&nbsp;&nbsp;environments,<br/>&nbsp;&nbsp;artifacts,<br/>&nbsp;&nbsp;none<br/>} | The property that should be expanded in the list of Release Definition.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 11,
      "revision": 2,
      "name": "MyShuttle.CD",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T09:59:37.937Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:28:00.643Z",
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    },
    {
      "id": 12,
      "revision": 13,
      "name": "Fabrikam-Website",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T10:00:12.077Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:34:20.31Z",
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    }
  ]
}
```


### With environments details expanded
#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions?$expand=environments&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 11,
      "revision": 2,
      "name": "MyShuttle.CD",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T09:59:37.937Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:28:00.643Z",
      "environments": [
        {
          "id": 18,
          "name": "Dev",
          "rank": 1,
          "runOptions": {
            "EnvironmentOwnerEmailNotificationType": "Always",
            "skipArtifactsDownload": "False",
            "TimeoutInMinutes": "0"
          },
          "environmentOptions": {
            "emailNotificationType": "Always",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0
          }
        }
      ],
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    },
    {
      "id": 12,
      "revision": 13,
      "name": "Fabrikam-Website",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T10:00:12.077Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:34:20.31Z",
      "environments": [
        {
          "id": 19,
          "name": "Dev",
          "rank": 1,
          "runOptions": {
            "EnvironmentOwnerEmailNotificationType": "Always",
            "skipArtifactsDownload": "False",
            "TimeoutInMinutes": "0"
          },
          "environmentOptions": {
            "emailNotificationType": "Always",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0
          }
        },
        {
          "id": 20,
          "name": "QA",
          "rank": 2,
          "runOptions": {
            "EnvironmentOwnerEmailNotificationType": "Always",
            "skipArtifactsDownload": "False",
            "TimeoutInMinutes": "0"
          },
          "environmentOptions": {
            "emailNotificationType": "Always",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0
          }
        },
        {
          "id": 21,
          "name": "Pre-Prod",
          "rank": 3,
          "runOptions": {
            "EnvironmentOwnerEmailNotificationType": "Always",
            "skipArtifactsDownload": "False",
            "TimeoutInMinutes": "0"
          },
          "environmentOptions": {
            "emailNotificationType": "Always",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0
          }
        }
      ],
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    }
  ]
}
```


### With artifacts details expanded
#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions?$expand=artifacts&api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "id": 11,
      "revision": 2,
      "name": "MyShuttle.CD",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T09:59:37.937Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:28:00.643Z",
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
            }
          }
        }
      ],
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    },
    {
      "id": 12,
      "revision": 13,
      "name": "Fabrikam-Website",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "createdOn": "2016-04-11T10:00:12.077Z",
      "modifiedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "modifiedOn": "2016-04-11T10:34:20.31Z",
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
            }
          }
        }
      ],
      "releaseNameFormat": "Release-$(rev:r)",
      "retentionPolicy": {
        "daysToKeep": 60
      }
    }
  ]
}
```


## Get a release definition

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| account      | string | Your VSTS organization.
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the release definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions/12?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": 12,
  "revision": 13,
  "name": "Fabrikam-Website",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdOn": "2016-04-11T10:00:12.077Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "modifiedOn": "2016-04-11T10:34:20.31Z",
  "variables": {
    "webAppName": {
      "value": "fabrikam"
    }
  },
  "environments": [
    {
      "id": 19,
      "name": "Dev",
      "rank": 1,
      "owner": {
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
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 65
          }
        ]
      },
      "deployStep": {
        "tasks": [
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
        "id": 66
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 67
          }
        ]
      },
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
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    },
    {
      "id": 20,
      "name": "QA",
      "rank": 2,
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabrikamwebqaag"
        }
      },
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 68
          }
        ]
      },
      "deployStep": {
        "tasks": [
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
        "id": 71
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 72
          }
        ]
      },
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
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    },
    {
      "id": 21,
      "name": "Pre-Prod",
      "rank": 3,
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {
        "webAppName": {
          "value": "fabfiberweb"
        }
      },
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 69
          }
        ]
      },
      "deployStep": {
        "tasks": [
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
        "id": 70
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 73
          }
        ]
      },
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
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    }
  ],
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
        }
      }
    }
  ],
  "triggers": [
    {
      "artifactAlias": "Fabrikam.CI",
      "triggerType": "artifactSource"
    }
  ],
  "releaseNameFormat": "Release-$(rev:r)",
  "retentionPolicy": {
    "daysToKeep": 60
  }
}
```


## Create a release definition

```no-highlight
POST https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| account      | string | Your VSTS organization.
| project      | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions?api-version=3.0-preview.1
```
```json
{
  "name": "Fabrikam.CD",
  "environments": [
    {
      "name": "Dev",
      "queueId": 2,
      "rank": 1,
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true
          }
        ]
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true
          }
        ]
      },
      "deployStep": {
        "tasks": []
      }
    }
  ]
}
```

#### Sample response

```json
{
  "id": 28,
  "revision": 1,
  "name": "Fabrikam.CD",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdOn": "2016-04-11T13:25:00.213Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "modifiedOn": "2016-04-11T13:25:00.213Z",
  "variables": {},
  "environments": [
    {
      "id": 45,
      "name": "Dev",
      "rank": 1,
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {},
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 143
          }
        ]
      },
      "deployStep": {
        "tasks": [],
        "id": 144
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 145
          }
        ]
      },
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
      "demands": [],
      "conditions": [],
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    }
  ],
  "artifacts": [],
  "triggers": [],
  "releaseNameFormat": "",
  "retentionPolicy": {
    "daysToKeep": 60
  }
}
```


## Update a release definition

```no-highlight
PUT https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions/28?api-version=3.0-preview.1
```
```json
{
  "id": 28,
  "name": "Fabrikam.CD",
  "createdOn": "2016-04-11T11:04:05.197Z",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "environments": [
    {
      "name": "Dev",
      "rank": 1,
      "deployStep": {
        "tasks": []
      },
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "queueId": 2,
      "demands": [],
      "conditions": [],
      "variables": {},
      "runOptions": {},
      "environmentOptions": {
        "emailNotificationType": "Always",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0
      },
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      },
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false
          }
        ],
        "approvalOptions": null
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false
          }
        ],
        "approvalOptions": null
      }
    }
  ],
  "artifacts": [
    {
      "alias": "FabrikamCI",
      "type": "Build",
      "definitionReference": {
        "project": {
          "name": "Fabrikam",
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364"
        },
        "definition": {
          "name": "Fabrikam.CI",
          "id": "1"
        }
      },
      "isPrimary": false
    }
  ],
  "variables": {},
  "triggers": [],
  "revision": 1,
  "releaseNameFormat": "",
  "retentionPolicy": {
    "daysToKeep": 60
  }
}
```

#### Sample response

```json
{
  "id": 28,
  "revision": 2,
  "name": "Fabrikam.CD",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdOn": "2016-04-11T13:25:00.213Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "modifiedOn": "2016-04-11T13:25:02.78Z",
  "variables": {},
  "environments": [
    {
      "id": 46,
      "name": "Dev",
      "rank": 1,
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {},
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 146
          }
        ]
      },
      "deployStep": {
        "tasks": [],
        "id": 147
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 148
          }
        ]
      },
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
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    }
  ],
  "artifacts": [
    {
      "id": 1,
      "type": "Build",
      "alias": "FabrikamCI",
      "definitionReference": {
        "definition": {
          "id": "1",
          "name": "Fabrikam.CI"
        },
        "project": {
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364",
          "name": "Fabrikam"
        }
      }
    }
  ],
  "triggers": [],
  "releaseNameFormat": "",
  "retentionPolicy": {
    "daysToKeep": 60
  }
}
```


## Delete a release definition

```no-highlight
DELETE https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions/28?api-version=3.0-preview.1
```
```json
{}
```


## Get revision history for a release definition

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}/revisions?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions/28/revisions?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "definitionId": 28,
      "revision": 1,
      "changedDate": "2016-04-11T13:25:00.213Z",
      "changeType": "add",
      "definitionUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/28/revisions/1",
      "changedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    },
    {
      "definitionId": 28,
      "revision": 2,
      "changedDate": "2016-04-11T13:25:02.78Z",
      "changeType": "update",
      "definitionUrl": "https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/Release/definitions/28/revisions/2",
      "changedBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      }
    }
  ]
}
```


## Get a particular revision history

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}/revisions/{revisionid}?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| revisionId  | int    | ID of the revision
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/release/definitions/28/revisions/2?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "id": 28,
  "revision": 2,
  "name": "Fabrikam.CD",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "createdOn": "2016-04-11T13:25:00.213Z",
  "modifiedBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
  },
  "modifiedOn": "2016-04-11T13:25:02.78Z",
  "variables": {},
  "environments": [
    {
      "id": 46,
      "name": "Dev",
      "rank": 1,
      "owner": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=52a5bc8d-4730-400a-95c7-7276d4ae5953"
      },
      "variables": {},
      "preDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 146
          }
        ]
      },
      "deployStep": {
        "tasks": [],
        "id": 147
      },
      "postDeployApprovals": {
        "approvals": [
          {
            "rank": 1,
            "isAutomated": true,
            "isNotificationOn": false,
            "id": 148
          }
        ]
      },
      "queueId": 2,
      "runOptions": {
        "environmentOwnerEmailNotificationType": "Always",
        "skipArtifactsDownload": "False",
        "timeoutInMinutes": "0"
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
      "executionPolicy": {
        "concurrencyCount": 0,
        "queueDepthCount": 0
      }
    }
  ],
  "artifacts": [
    {
      "id": 1,
      "type": "Build",
      "alias": "FabrikamCI",
      "definitionReference": {
        "definition": {
          "id": "1",
          "name": "Fabrikam.CI"
        },
        "project": {
          "id": "ff213d65-d61d-447c-b39d-d16f21b18364",
          "name": "Fabrikam"
        }
      }
    }
  ],
  "triggers": [],
  "releaseNameFormat": "",
  "retentionPolicy": {
    "daysToKeep": 60
  }
}
```
