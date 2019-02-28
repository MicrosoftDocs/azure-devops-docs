---
title: Service hooks event reference | Azure DevOps Services
description: Events supported by Azure DevOps Services and Team Foundation Server
ms.assetid: 1DC15791-5614-405E-8372-79A5ED6E66EE
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Azure DevOps Services service hooks events

## Available event types

* Build and release
  * [Build completed](#build.complete)
  * [Release created](#ms.vss-release.release-created-event)
  * [Release abandoned](#ms.vss-release.release-abandoned-event)
  * [Release deployment approval completed](#ms.vss-release.deployment-approval-completed-event)
  * [Release deployment approval pending](#ms.vss-release.deployment-approval-pending-event)
  * [Release deployment completed](#ms.vss-release.deployment-completed-event)
  * [Release deployment started](#ms.vss-release.deployment-started-event)

* Code
  * [Code checked in](#tfvc.checkin)
  * [Code pushed](#git.push)
  * [Pull request created](#git.pullrequest.created)
  * [Pull request merge commit created](#git.pullrequest.merged)
  * [Pull request updated](#git.pullrequest.updated)

* Work item 
  * [Work item commented on](#workitem.commented)
  * [Work item created](#workitem.created)
  * [Work item deleted](#workitem.deleted)
  * [Work item restored](#workitem.restored)
  * [Work item updated](#workitem.updated)

Deprecated event types:

* [Team room message posted](#message.posted)

> [!NOTE]
> The [Nuget WebHooks Receivers package](https://www.nuget.org/packages/Microsoft.AspNet.WebHooks.Receivers.vsts) provides support for receiving WebHooks from Azure DevOps Services.

## Build and release

<a name="build.complete"></a>
### Build completed

A build completes

* Publisher ID: `tfs`
* Event ID: `build.complete`

#### Settings
 * `definitionName`: Filter events to include only completed builds for the specified pipeline
 * `buildStatus`: Filter events to include only completed builds for the specified completion status
   * Valid values: 
      * `Succeeded` 
      * `PartiallySucceeded` 
      * `Failed` 
      * `Stopped` 

#### Sample payload
```json
{
  "id": "4a5d99d6-1c75-4e53-91b9-ee80057d4ce3",
  "eventType": "build.complete",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Build ConsumerAddressModule_20150407.2 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/build.aspx?pcguid=5023c10b-bef3-41c3-bf53-686c4e34ee9e&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f3\">ConsumerAddressModule_20150407.2</a> succeeded",
    "markdown": "Build [ConsumerAddressModule_20150407.2](https://dev.azure.com/fabrikam-fiber-inc/web/build.aspx?pcguid=5023c10b-bef3-41c3-bf53-686c4e34ee9e&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f3) succeeded"
  },
  "detailedMessage": {
    "text": "Build ConsumerAddressModule_20150407.2 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/build.aspx?pcguid=5023c10b-bef3-41c3-bf53-686c4e34ee9e&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f3\">ConsumerAddressModule_20150407.2</a> succeeded",
    "markdown": "Build [ConsumerAddressModule_20150407.2](https://dev.azure.com/fabrikam-fiber-inc/web/build.aspx?pcguid=5023c10b-bef3-41c3-bf53-686c4e34ee9e&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f3) succeeded"
  },
  "resource": {
    "uri": "vstfs:///pipelines/Build/2",
    "id": 2,
    "buildNumber": "ConsumerAddressModule_20150407.1",
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/71777fbc-1cf2-4bd1-9540-128c1c71f766/_apis/build-release/Builds/2",
    "startTime": "2015-04-07T18:04:06.83Z",
    "finishTime": "2015-04-07T18:06:10.69Z",
    "reason": "manual",
    "status": "succeeded",
    "dropLocation": "#/3/drop",
    "drop": {
      "location": "#/3/drop",
      "type": "container",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/resources/Containers/3/drop",
      "downloadUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/resources/Containers/3/drop?api-version=1.0&$format=zip&downloadFileName=ConsumerAddressModule_20150407.1_drop"
    },
    "log": {
      "type": "container",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/resources/Containers/3/logs",
      "downloadUrl": "https://dev.azure.com/fabrikam-fiber-inc/_apis/resources/Containers/3/logs?api-version=1.0&$format=zip&downloadFileName=ConsumerAddressModule_20150407.1_logs"
    },
    "sourceGetVersion": "LG:refs/heads/master:600c52d2d5b655caa111abfd863e5a9bd304bb0e",
    "lastChangedBy": {
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "retainIndefinitely": false,
    "hasDiagnostics": true,
    "definition": {
      "batchSize": 1,
      "triggerType": "none",
      "definitionType": "xaml",
      "id": 2,
      "name": "ConsumerAddressModule",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/71777fbc-1cf2-4bd1-9540-128c1c71f766/_apis/build-release/Definitions/2"
    },
    "queue": {
      "queueType": "buildController",
      "id": 4,
      "name": "Hosted Build Controller",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/build-release/Queues/4"
    },
    "requests": [
      {
        "id": 1,
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/71777fbc-1cf2-4bd1-9540-128c1c71f766/_apis/build-release/Requests/1",
        "requestedFor": {
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://dev.azure.com/fabrikam-fiber-inc/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      }
    ]
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:26.4285528Z"
}
```

<a name="ms.vss-release.release-abandoned-event"></a>
### Release abandoned

A release was abandoned

* Publisher ID: `rm`
* Event ID: `ms.vss-release.release-abandoned-event`

#### Settings
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload
```json
{
  "id": "b0497ad3-50c9-4722-96da-a8fa5b80d77f",
  "eventType": "ms.vss-release.release-abandoned-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Release Release-1 abandoned.",
    "html": "Release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> abandoned.",
    "markdown": "Release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) abandoned."
  },
  "detailedMessage": {
    "text": "Release Release-1 from release pipeline Fabrikam.CD abandoned.\\r\\nRelease description: QFE release for fixing title\\r\\nContinuousIntegration Requested for Chuck Reinhart\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>",
    "html": "Release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> from <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1'>Fabrikam.CD</a> release pipeline abandoned.\\r\\n<li>Release description: QFE release for fixing title</li>\\r\\n<li>ContinuousIntegration Requested for Chuck Reinhart</li>\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more <\\li>",
    "markdown": "Release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) from release pipeline [Fabrikam.CD](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1) abandoned.\\r\\n<li>Release description: QFE release for fixing title</li>\\r\\n<li>ContinuousIntegration Requested for Chuck Reinhart</li>\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>"
  },
  "resource": {
    "release": {
      "id": 4,
      "name": "Release-1",
      "status": "abandoned",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "modifiedBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "environments": [
        {
          "id": 5,
          "releaseId": 0,
          "name": "Dev",
          "status": "succeeded",
          "variables": {},
          "preDeployApprovals": [],
          "postDeployApprovals": [],
          "preApprovalsSnapshot": {
            "approvals": [],
            "approvalOptions": {
              "requiredApproverCount": 0,
              "releaseCreatorCanBeApprover": true
            }
          },
          "postApprovalsSnapshot": {
            "approvals": []
          },
          "deploySteps": [],
          "rank": 1,
          "definitionEnvironmentId": 1,
          "queueId": 1,
          "environmentOptions": {
            "emailNotificationType": "OnlyOnFailure",
            "emailRecipients": "release.environment.owner;release.creator",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0,
            "enableAccessToken": false
          },
          "demands": [],
          "conditions": [],
          "modifiedOn": "2016-01-21T08:19:17.26Z",
          "workflowTasks": [
            {
              "taskId": "00000000-0000-0000-0000-000000000000",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "4247c988-4060-4712-abca-ff44681dd78a",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 5,
            "name": "Release-1",
            "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5"
          }
        }
      ],
      "variables": {},
      "artifacts": [
        {
          "sourceId": "31419848-1780-4137-b7e3-62092e986fd6:1",
          "type": "Build",
          "alias": "Fabrikam.CI",
          "definitionReference": {
            "Definition": {
              "id": "1",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "31419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "description": "QFE release for fixing title",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "definitionSnapshotRevision": 0,
      "comment": "",
      "logsContainerUrl": null,
      "_links": {}
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:27.784654Z"
}
```

<a name="ms.vss-release.release-created-event"></a>
### Release created

A release was created

* Publisher ID: `rm`
* Event ID: `ms.vss-release.release-created-event`

#### Settings
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload
```json
{
  "id": "d4d69db4-18d4-413e-bc43-07f56b531160",
  "eventType": "ms.vss-release.release-created-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Release Release-1 created.",
    "html": "<a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> created.",
    "markdown": "Release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) created."
  },
  "detailedMessage": {
    "text": "Release Release-1 created from release pipeline Fabrikam.CD.\\r\\nRelease description: QFE release for fixing title\\r\\nContinuousIntegration Requested for Chuck Reinhart\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>",
    "html": "Release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> created from release pipeline <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1'>Fabrikam.CD</a>.\\r\\n<li>Release description: QFE release for fixing title</li>\\r\\n<li>ContinuousIntegration Requested for Chuck Reinhart</li>\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>",
    "markdown": "Release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) created from release pipeline [Fabrikam.CD](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1).\\r\\n<li>Release description: QFE release for fixing title</li>\\r\\n<li>ContinuousIntegrationRequested for Chuck Reinhart</li>\\r\\n<li>Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>"
  },
  "resource": {
    "release": {
      "id": 4,
      "name": "Release-1",
      "status": "active",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "modifiedBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "environments": [
        {
          "id": 5,
          "releaseId": 0,
          "name": "Dev",
          "status": "succeeded",
          "variables": {},
          "preDeployApprovals": [],
          "postDeployApprovals": [],
          "preApprovalsSnapshot": {
            "approvals": [],
            "approvalOptions": {
              "requiredApproverCount": 0,
              "releaseCreatorCanBeApprover": true
            }
          },
          "postApprovalsSnapshot": {
            "approvals": []
          },
          "deploySteps": [],
          "rank": 1,
          "definitionEnvironmentId": 1,
          "queueId": 1,
          "environmentOptions": {
            "emailNotificationType": "OnlyOnFailure",
            "emailRecipients": "release.environment.owner;release.creator",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0,
            "enableAccessToken": false
          },
          "demands": [],
          "conditions": [],
          "modifiedOn": "2016-01-21T08:19:17.26Z",
          "workflowTasks": [
            {
              "taskId": "00000000-0000-0000-0000-000000000000",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "4247c988-4060-4712-abca-ff44681dd78a",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 5,
            "name": "Release-1",
            "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5"
          }
        }
      ],
      "variables": {},
      "artifacts": [
        {
          "sourceId": "31419848-1780-4137-b7e3-62092e986fd6:1",
          "type": "Build",
          "alias": "Fabrikam.CI",
          "definitionReference": {
            "Definition": {
              "id": "1",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "31419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "description": "QFE release for fixing title",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "definitionSnapshotRevision": 0,
      "comment": "",
      "logsContainerUrl": null,
      "_links": {}
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:27.6570261Z"
}
```

<a name="ms.vss-release.deployment-approval-completed-event"></a>
### Release deployment approval completed

A deployment approval has been completed

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-approval-completed-event`

#### Settings
 * `releaseApprovalStatus`: Filter events to include only deployments with an approval of the specified status
   * Valid values: 
      * `2` - Approved
      * `4` - Rejected
 * `releaseApprovalType`: Filter events to include only deployments requesting an approval of the specified type
   * Valid values: 
      * `1` - Pre-deployment
      * `2` - Post-deployment
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified definition

#### Sample payload
```json
{
  "id": "106acb39-c61e-4efd-995e-a9f5e71ba3cd",
  "eventType": "ms.vss-release.deployment-approval-completed-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Pre Deployment approval for deployment of release Release-1 on environment Dev Succeeded.",
    "html": "Pre Deployment approval for release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1'>Dev</a> Succeeded.",
    "markdown": "Pre Deployment approval for deployment of release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1) Succeeded."
  },
  "detailedMessage": {
    "text": "Pre Deployment approval for release Release-1 on environment Dev Succeeded.\\r\\nApprover: Chuck Reinhart\\r\\nComment: Approving",
    "html": "Pre Deployment approval for release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1'>Dev</a>  Succeeded.\\r\\nApprover: Chuck Reinhart\\r\\nComment: Approving",
    "markdown": "Pre Deployment approval for release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1) Succeeded.\\r\\nApprover: Chuck Reinhart\\r\\nComment: Approving"
  },
  "resource": {
    "approval": {
      "id": 0,
      "revision": 0,
      "approver": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "approvedBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "approvalType": "preDeploy",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "status": "approved",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 0,
      "rank": 1,
      "release": {
        "id": 1,
        "name": "Release-1"
      },
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "releaseEnvironment": {
        "id": 8,
        "name": "Dev"
      }
    },
    "release": {
      "id": 1,
      "name": "Release-1",
      "status": "active",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "modifiedBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "environments": [
        {
          "id": 1,
          "releaseId": 0,
          "name": "Dev",
          "status": "succeeded",
          "variables": {},
          "preDeployApprovals": [],
          "postDeployApprovals": [],
          "preApprovalsSnapshot": {
            "approvals": [],
            "approvalOptions": {
              "requiredApproverCount": 0,
              "releaseCreatorCanBeApprover": true
            }
          },
          "postApprovalsSnapshot": {
            "approvals": []
          },
          "deploySteps": [],
          "rank": 1,
          "definitionEnvironmentId": 1,
          "queueId": 1,
          "environmentOptions": {
            "emailNotificationType": "OnlyOnFailure",
            "emailRecipients": "release.environment.owner;release.creator",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0,
            "enableAccessToken": false
          },
          "demands": [],
          "conditions": [],
          "modifiedOn": "2016-01-21T08:19:17.26Z",
          "workflowTasks": [
            {
              "taskId": "00000000-0000-0000-0000-000000000000",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "4247c988-4060-4712-abca-ff44681dd78a",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 1,
            "name": "Release-1",
            "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1"
          }
        }
      ],
      "variables": {},
      "artifacts": [
        {
          "sourceId": "31419848-1780-4137-b7e3-62092e986fd6:1",
          "type": "Build",
          "alias": "Fabrikam.CI",
          "definitionReference": {
            "Definition": {
              "id": "1",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "31419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "description": "QFE release for fixing title",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "definitionSnapshotRevision": 0,
      "comment": "",
      "logsContainerUrl": null,
      "_links": {}
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:28.1594606Z"
}
```

<a name="ms.vss-release.deployment-approval-pending-event"></a>
### Release deployment approval pending

A deployment approval has been requested

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-approval-pending-event`

#### Settings
 * `releaseApprovalType`: Filter events to include only deployments requesting an approval of the specified type
   * Valid values: 
      * `1` - Pre-deployment
      * `2` - Post-deployment
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload
```json
{
  "id": "a73e7272-e96d-4249-93ac-7404eacd6801",
  "eventType": "ms.vss-release.deployment-approval-pending-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.",
    "html": "Pre deployment approval pending for release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.",
    "markdown": "Pre deployment approval pending for release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1)."
  },
  "detailedMessage": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.\\r\\nPending on: Chuck Reinhart\\r\\nPending since: 09 May 2016 12:09:29 (UTC)",
    "html": "Pre deployment approval pending of release <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.\\r\\nPending on: Chuck Reinhart\\r\\nPending  since: 09 May 2016 12:09:29 (UTC)",
    "markdown": "Pre deployment approval pending for release [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1).\\r\\nPending on: Chuck Reinhart\\r\\nPending  since: 09 May 2016 12:09:29 (UTC)"
  },
  "resource": {
    "approval": {
      "id": 0,
      "revision": 0,
      "approver": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "approvalType": "preDeploy",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "status": "pending",
      "comments": "",
      "isAutomated": false,
      "isNotificationOn": true,
      "trialNumber": 1,
      "attempt": 0,
      "rank": 1,
      "release": {
        "id": 1,
        "name": "Release-1"
      },
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "releaseEnvironment": {
        "id": 8,
        "name": "Dev"
      }
    },
    "release": {
      "id": 1,
      "name": "Release-1",
      "status": "active",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "modifiedBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "environments": [
        {
          "id": 5,
          "releaseId": 0,
          "name": "Dev",
          "status": "succeeded",
          "variables": {},
          "preDeployApprovals": [],
          "postDeployApprovals": [],
          "preApprovalsSnapshot": {
            "approvals": [],
            "approvalOptions": {
              "requiredApproverCount": 0,
              "releaseCreatorCanBeApprover": true
            }
          },
          "postApprovalsSnapshot": {
            "approvals": []
          },
          "deploySteps": [],
          "rank": 1,
          "definitionEnvironmentId": 1,
          "queueId": 1,
          "environmentOptions": {
            "emailNotificationType": "OnlyOnFailure",
            "emailRecipients": "release.environment.owner;release.creator",
            "skipArtifactsDownload": false,
            "timeoutInMinutes": 0,
            "enableAccessToken": false
          },
          "demands": [],
          "conditions": [],
          "modifiedOn": "2016-01-21T08:19:17.26Z",
          "workflowTasks": [
            {
              "taskId": "00000000-0000-0000-0000-000000000000",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "4247c988-4060-4712-abca-ff44681dd78a",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 1,
            "name": "Release-1",
            "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1"
          }
        }
      ],
      "variables": {},
      "artifacts": [
        {
          "sourceId": "31419848-1780-4137-b7e3-62092e986fd6:1",
          "type": "Build",
          "alias": "Fabrikam.CI",
          "definitionReference": {
            "Definition": {
              "id": "1",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "31419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
      },
      "description": "QFE release for fixing title",
      "reason": "continuousIntegration",
      "releaseNameFormat": "Release-$(rev:r)",
      "keepForever": false,
      "definitionSnapshotRevision": 0,
      "comment": "",
      "logsContainerUrl": null,
      "_links": {}
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:28.0320509Z"
}
```

<a name="ms.vss-release.deployment-completed-event"></a>
### Release deployment completed

A deployment completed

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-completed-event`

#### Settings
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline
 * `releaseEnvironmentStatus`: Filter events to include only completed deployments with the specified status
   * Valid values: 
      * `8` - Canceled
      * `16` - Rejected
      * `4` - Succeeded
      * `128` - Partially Succeeded

#### Sample payload
```json
{
  "id": "c3e52c57-187a-45c4-abe2-184a48291bad",
  "eventType": "ms.vss-release.deployment-completed-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Deployment of release Release-1 on environment Dev Succeeded.",
    "html": "Deployment on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded.",
    "markdown": "Deployment on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded."
  },
  "detailedMessage": {
    "text": "Deployment of release Release-1 on environment Dev Succeeded. Time to deploy: 0.11 minutes.",
    "html": "Deployment on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded. Time to deploy: 0.11 minutes.",
    "markdown": "Deployment on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded. Time to deploy: 0.11 minutes."
  },
  "resource": {
    "environment": {
      "id": 5,
      "releaseId": 0,
      "name": "Dev",
      "status": "succeeded",
      "variables": {},
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [],
        "approvalOptions": {
          "requiredApproverCount": 0,
          "releaseCreatorCanBeApprover": true
        }
      },
      "postApprovalsSnapshot": {
        "approvals": []
      },
      "deploySteps": [],
      "rank": 1,
      "definitionEnvironmentId": 1,
      "queueId": 1,
      "environmentOptions": {
        "emailNotificationType": "OnlyOnFailure",
        "emailRecipients": "release.environment.owner;release.creator",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0,
        "enableAccessToken": false
      },
      "demands": [],
      "conditions": [],
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "workflowTasks": [
        {
          "taskId": "00000000-0000-0000-0000-000000000000",
          "version": "*",
          "name": "Deploy Website to Azure",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "timeoutInMinutes": 0,
          "definitionType": null,
          "inputs": {
            "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "Southeast Asia",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
          }
        }
      ],
      "deployPhasesSnapshot": [],
      "owner": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
      "schedules": [],
      "release": {
        "id": 1,
        "name": "Release-1",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1"
      }
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:28.5345098Z"
}
```

<a name="ms.vss-release.deployment-started-event"></a>
### Release deployment started

A deployment was started

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-started-event`

#### Settings
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified definition

#### Sample payload
```json
{
  "id": "055285c7-9d7a-4ca0-bbfe-5eb0529d312e",
  "eventType": "ms.vss-release.deployment-started-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Deployment of release Release-1 to environment Dev started.",
    "html": "Deployment on environment <a href='http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=4'>Dev</a> started.",
    "markdown": "Deployment on environment [Dev](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=4) started."
  },
  "detailedMessage": {
    "text": "Deployment of release Release-1 on environment Dev started.\\r\\nTrigger: Manual",
    "html": "Deployment on environment <a href='Dev'>http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=4</a> started.\\r\\nTrigger: Manual",
    "markdown": "Deployment on environment [Release-1](http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=4) started.\\r\\nTrigger: Dev"
  },
  "resource": {
    "environment": {
      "id": 5,
      "releaseId": 0,
      "name": "Dev",
      "status": "queued",
      "variables": {},
      "preDeployApprovals": [],
      "postDeployApprovals": [],
      "preApprovalsSnapshot": {
        "approvals": [],
        "approvalOptions": {
          "requiredApproverCount": 0,
          "releaseCreatorCanBeApprover": true
        }
      },
      "postApprovalsSnapshot": {
        "approvals": []
      },
      "deploySteps": [],
      "rank": 1,
      "definitionEnvironmentId": 1,
      "queueId": 1,
      "environmentOptions": {
        "emailNotificationType": "OnlyOnFailure",
        "emailRecipients": "release.environment.owner;release.creator",
        "skipArtifactsDownload": false,
        "timeoutInMinutes": 0,
        "enableAccessToken": false
      },
      "demands": [],
      "conditions": [],
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "workflowTasks": [
        {
          "taskId": "00000000-0000-0000-0000-000000000000",
          "version": "*",
          "name": "Deploy Website to Azure",
          "enabled": true,
          "alwaysRun": false,
          "continueOnError": false,
          "timeoutInMinutes": 0,
          "definitionType": null,
          "inputs": {
            "ConnectedServiceName": "b460b0f8-fe23-4dc2-a99c-fd8b0633fe1c",
            "WebSiteName": "$(webAppName)",
            "WebSiteLocation": "Southeast Asia",
            "Slot": "",
            "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
          }
        }
      ],
      "deployPhasesSnapshot": [],
      "owner": {
        "id": "4247c988-4060-4712-abca-ff44681dd78a",
        "displayName": "Chuck Reinhart"
      },
      "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
      "schedules": [],
      "release": {
        "id": 5,
        "name": "Release-1",
        "url": "http://vsrm.dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5"
      }
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:28.4539019Z"
}
```

## Code

<a name="tfvc.checkin"></a>
### Code checked in

A changeset is checked into TFVC.

* Publisher ID: `tfs`
* Event ID: `tfvc.checkin`

#### Settings
 * `path`: Filter to checkins that change one or more files under the specified path
   * Required

#### Sample payload
```json
{
  "id": "f9b4c23e-88dd-4516-b04d-849787304e32",
  "eventType": "tfvc.checkin",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Normal Paulk checked in changeset 18: Dropping in new Java sample",
    "html": "Normal Paulk checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&amp;cs=18\">18</a>: Dropping in new Java sample",
    "markdown": "Normal Paulk checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&cs=18): Dropping in new Java sample"
  },
  "detailedMessage": {
    "text": "Normal Paulk checked in changeset 18: Dropping in new Java sample",
    "html": "Normal Paulk checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&amp;cs=18\">18</a>: Dropping in new Java sample",
    "markdown": "Normal Paulk checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&cs=18): Dropping in new Java sample"
  },
  "resource": {
    "changesetId": 18,
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/tfvc/changesets/18",
    "author": {
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "checkedInBy": {
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "createdDate": "2014-05-12T22:41:16Z",
    "comment": "Dropping in new Java sample"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    }
  },
  "createdDate": "2016-09-19T13:03:26.2056408Z"
}
```

<a name="git.push"></a>
### Code pushed

Code is pushed to a Git repository

* Publisher ID: `tfs`
* Event ID: `git.push`

#### Settings
 * `branch`: The branch that code was pushed into
 * `pushedBy`: A group which has the pusher as its member
 * `repository`: The repository that code was pushed to
   * Data type: `guid`

#### Sample payload
```json
{
  "id": "03c164c2-8912-4d5e-8009-3707d5f83734",
  "eventType": "git.push",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett pushed updates to branch master of repository Fabrikam-Fiber-Git.",
    "html": "Jamal Hartnett pushed updates to branch master of repository Fabrikam-Fiber-Git.",
    "markdown": "Jamal Hartnett pushed updates to branch `master` of repository `Fabrikam-Fiber-Git`."
  },
  "detailedMessage": {
    "text": "Jamal Hartnett pushed 1 commit to branch master of repository Fabrikam-Fiber-Git.\n - Fixed bug in web.config file 33b55f7c",
    "html": "Jamal Hartnett pushed 1 commit to branch <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmaster\">master</a> of repository <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a>.\n<ul>\n<li>Fixed bug in web.config file <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74\">33b55f7c</a>\n</ul>",
    "markdown": "Jamal Hartnett pushed 1 commit to branch [master](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmaster) of repository [Fabrikam-Fiber-Git](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/).\n* Fixed bug in web.config file [33b55f7c](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74)"
  },
  "resource": {
    "commits": [
      {
        "commitId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74",
        "author": {
          "name": "Jamal Hartnett",
          "email": "fabrikamfiber4@hotmail.com",
          "date": "2015-02-25T19:01:00Z"
        },
        "committer": {
          "name": "Jamal Hartnett",
          "email": "fabrikamfiber4@hotmail.com",
          "date": "2015-02-25T19:01:00Z"
        },
        "comment": "Fixed bug in web.config file",
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74"
      }
    ],
    "refUpdates": [
      {
        "name": "refs/heads/master",
        "oldObjectId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
        "newObjectId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74"
      }
    ],
    "repository": {
      "id": "278d5cd2-584d-4b63-824a-2ba458937249",
      "name": "Fabrikam-Fiber-Git",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git"
    },
    "pushedBy": {
      "id": "00067FFED5C7AF52@Live.com",
      "displayName": "Jamal Hartnett",
      "uniqueName": "Windows Live ID\\fabrikamfiber4@hotmail.com"
    },
    "pushId": 14,
    "date": "2014-05-02T19:17:13.3309587Z",
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/14"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:27.0379153Z"
}
```

<a name="git.pullrequest.created"></a>
### Pull request created

Pull request is created in a Git repository

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.created`

#### Settings
 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group which has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload
```json
{
  "id": "2ab4e3d3-b7a6-425e-92b1-5a9982c1269e",
  "eventType": "git.pullrequest.created",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett created a new pull request",
    "html": "Jamal Hartnett created a new pull request",
    "markdown": "Jamal Hartnett created a new pull request"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett created a new pull request\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n",
    "html": "Jamal Hartnett created a new pull request\r\n<ul>\r\n<li>Merge status: Succeeded</li>\r\n<li>Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72\">eef717</a></li>\r\n</ul>",
    "markdown": "Jamal Hartnett created a new pull request\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n"
  },
  "resource": {
    "repository": {
      "id": "4bc14d40-c903-45e2-872e-0462c7748079",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "active",
    "createdBy": {
      "id": "54d125f7-69f7-4191-904f-c5b96b6261c8",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/54d125f7-69f7-4191-904f-c5b96b6261c8",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=54d125f7-69f7-4191-904f-c5b96b6261c8"
    },
    "creationDate": "2014-06-17T16:55:46.589889Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/master",
    "mergeStatus": "succeeded",
    "mergeId": "a10bb228-6ba6-4362-abd7-49ea21333dbd",
    "lastMergeSourceCommit": {
      "commitId": "53d54ac915144006c2c9e90d2c7d3880920db49c",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/53d54ac915144006c2c9e90d2c7d3880920db49c"
    },
    "lastMergeTargetCommit": {
      "commitId": "a511f535b1ea495ee0c903badb68fbc83772c882",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/a511f535b1ea495ee0c903badb68fbc83772c882"
    },
    "lastMergeCommit": {
      "commitId": "eef717f69257a6333f221566c1c987dc94cc0d72",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "vstfs:///Classification/TeamProject/f0811a3b-8c8a-4e43-a3bf-9a049b4835bd\\Mobile Team",
        "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:27.2879096Z"
}
```

<a name="git.pullrequest.merged"></a>
### Pull request merge commit created

Pull request - Created merge commit

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.merged`

#### Settings
 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group which has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload
```json
{
  "id": "6872ee8c-b333-4eff-bfb9-0d5274943566",
  "eventType": "git.pullrequest.merged",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett has created a pull request merge commit",
    "html": "Jamal Hartnett has created a pull request merge commit",
    "markdown": "Jamal Hartnett has created a pull request merge commit"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett has created a pull request merge commit\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n",
    "html": "Jamal Hartnett has created a pull request merge commit\r\n<ul>\r\n<li>Merge status: Succeeded</li>\r\n<li>Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72\">eef717</a></li>\r\n</ul>",
    "markdown": "Jamal Hartnett has created a pull request merge commit\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n"
  },
  "resource": {
    "repository": {
      "id": "4bc14d40-c903-45e2-872e-0462c7748079",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "completed",
    "createdBy": {
      "id": "54d125f7-69f7-4191-904f-c5b96b6261c8",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/54d125f7-69f7-4191-904f-c5b96b6261c8",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=54d125f7-69f7-4191-904f-c5b96b6261c8"
    },
    "creationDate": "2014-06-17T16:55:46.589889Z",
    "closedDate": "2014-06-30T18:59:12.3660573Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/master",
    "mergeStatus": "succeeded",
    "mergeId": "a10bb228-6ba6-4362-abd7-49ea21333dbd",
    "lastMergeSourceCommit": {
      "commitId": "53d54ac915144006c2c9e90d2c7d3880920db49c",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/53d54ac915144006c2c9e90d2c7d3880920db49c"
    },
    "lastMergeTargetCommit": {
      "commitId": "a511f535b1ea495ee0c903badb68fbc83772c882",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/a511f535b1ea495ee0c903badb68fbc83772c882"
    },
    "lastMergeCommit": {
      "commitId": "eef717f69257a6333f221566c1c987dc94cc0d72",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "vstfs:///Classification/TeamProject/f0811a3b-8c8a-4e43-a3bf-9a049b4835bd\\Mobile Team",
        "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:27.3156388Z"
}
```

<a name="git.pullrequest.updated"></a>
### Pull request updated

Pull request is updated; status, review list, reviewer vote changed or the source branch is updated with a push

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.updated`

#### Settings
 * `notificationType`: The type of pull request change
   * Valid values: 
      * `PushNotification` - Source branch updated
      * `ReviewersUpdateNotification` - Reviewers changed
      * `StatusUpdateNotification` - Status changed
      * `ReviewerVoteNotification` - Votes score changed
 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group which has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload
```json
{
  "id": "af07be1b-f3ad-44c8-a7f1-c4835f2df06b",
  "eventType": "git.pullrequest.updated",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett marked the pull request as completed",
    "html": "Jamal Hartnett marked the pull request as completed",
    "markdown": "Jamal Hartnett marked the pull request as completed"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett marked the pull request as completed\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n",
    "html": "Jamal Hartnett marked the pull request as completed\r\n<ul>\r\n<li>Merge status: Succeeded</li>\r\n<li>Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72\">eef717</a></li>\r\n</ul>",
    "markdown": "Jamal Hartnett marked the pull request as completed\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72)\r\n"
  },
  "resource": {
    "repository": {
      "id": "4bc14d40-c903-45e2-872e-0462c7748079",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079",
      "project": {
        "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/master",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "completed",
    "createdBy": {
      "id": "54d125f7-69f7-4191-904f-c5b96b6261c8",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/54d125f7-69f7-4191-904f-c5b96b6261c8",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=54d125f7-69f7-4191-904f-c5b96b6261c8"
    },
    "creationDate": "2014-06-17T16:55:46.589889Z",
    "closedDate": "2014-06-30T18:59:12.3660573Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/master",
    "mergeStatus": "succeeded",
    "mergeId": "a10bb228-6ba6-4362-abd7-49ea21333dbd",
    "lastMergeSourceCommit": {
      "commitId": "53d54ac915144006c2c9e90d2c7d3880920db49c",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/53d54ac915144006c2c9e90d2c7d3880920db49c"
    },
    "lastMergeTargetCommit": {
      "commitId": "a511f535b1ea495ee0c903badb68fbc83772c882",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/a511f535b1ea495ee0c903badb68fbc83772c882"
    },
    "lastMergeCommit": {
      "commitId": "eef717f69257a6333f221566c1c987dc94cc0d72",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/eef717f69257a6333f221566c1c987dc94cc0d72"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "vstfs:///Classification/TeamProject/f0811a3b-8c8a-4e43-a3bf-9a049b4835bd\\Mobile Team",
        "url": "https://vssps.dev.azure.com/fabrikam/_apis/Identities/2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=2ea2d095-48f9-4cd6-9966-62f6f574096c",
        "isContainer": true
      }
    ],
    "commits": [
      {
        "commitId": "53d54ac915144006c2c9e90d2c7d3880920db49c",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/commits/53d54ac915144006c2c9e90d2c7d3880920db49c"
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/4bc14d40-c903-45e2-872e-0462c7748079/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:27.2813828Z"
}
```

## Work item

<a name="workitem.created"></a>
### Work item created

Filter events to include only newly created work items.

* Publisher ID: `tfs`
* Event ID: `workitem.created`

#### Settings
 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload
```json
{
  "id": "d2d46fb1-dba5-403c-9373-427583f19e8c",
  "eventType": "workitem.created",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) created by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Assigned to: \r\n- Comment: \r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li>\r\n<li>Assigned to: </li>\r\n<li>Comment: </li>\r\n<li>Severity: 3 - Medium</li></ul>",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) created by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Assigned to: \r\n* Comment: \r\n* Severity: 3 - Medium\r\n"
  },
  "resource": {
    "id": 5,
    "rev": 1,
    "fields": {
      "System.AreaPath": "FabrikamCloud",
      "System.TeamProject": "FabrikamCloud",
      "System.IterationPath": "FabrikamCloud\\Release 1\\Sprint 1",
      "System.WorkItemType": "Bug",
      "System.State": "New",
      "System.Reason": "New defect reported",
      "System.CreatedDate": "2014-07-15T17:42:44.663Z",
      "System.CreatedBy": "Jamal Hartnett",
      "System.ChangedDate": "2014-07-15T17:42:44.663Z",
      "System.ChangedBy": "Jamal Hartnett",
      "System.Title": "Some great new idea!",
      "Microsoft.Azure DevOps Services.Common.Severity": "3 - Medium",
      "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": "New"
    },
    "_links": {
      "self": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:29.7688022Z"
}
```

<a name="workitem.deleted"></a>
### Work item deleted

Filter events to include only newly deleted work items.

* Publisher ID: `tfs`
* Event ID: `workitem.deleted`

#### Settings
 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload
```json
{
  "id": "72da0ade-0709-40ee-beb7-104287bf7e84",
  "eventType": "workitem.deleted",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.",
    "html": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.",
    "markdown": "[Bug #5](Some great new idea!) deleted by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n",
    "html": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li></ul>",
    "markdown": "[Bug #5](Some great new idea!) deleted by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n"
  },
  "resource": {
    "id": 5,
    "rev": 1,
    "fields": {
      "System.AreaPath": "FabrikamCloud",
      "System.TeamProject": "FabrikamCloud",
      "System.IterationPath": "FabrikamCloud\\Release 1\\Sprint 1",
      "System.WorkItemType": "Bug",
      "System.State": "New",
      "System.Reason": "New defect reported",
      "System.CreatedDate": "2014-07-15T17:42:44.663Z",
      "System.CreatedBy": "Jamal Hartnett",
      "System.ChangedDate": "2014-07-15T17:42:44.663Z",
      "System.ChangedBy": "Jamal Hartnett",
      "System.Title": "Some great new idea!",
      "Microsoft.Azure DevOps Services.Common.Severity": "3 - Medium",
      "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": "New"
    },
    "_links": {
      "self": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/recyclebin/5"
      },
      "workItemType": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/recyclebin/5"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:30.0657064Z"
}
```

<a name="workitem.restored"></a>
### Work item restored

Filter events to include only newly restored work items.

* Publisher ID: `tfs`
* Event ID: `workitem.restored`

#### Settings
 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload
```json
{
  "id": "1ca023d6-6cff-49dd-b3d1-302b69311810",
  "eventType": "workitem.restored",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) restored by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li>Severity: 3 - Medium</li></ul>",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) restored by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
  },
  "resource": {
    "id": 5,
    "rev": 1,
    "fields": {
      "System.AreaPath": "FabrikamCloud",
      "System.TeamProject": "FabrikamCloud",
      "System.IterationPath": "FabrikamCloud\\Release 1\\Sprint 1",
      "System.WorkItemType": "Bug",
      "System.State": "New",
      "System.Reason": "New defect reported",
      "System.CreatedDate": "2014-07-15T17:42:44.663Z",
      "System.CreatedBy": "Jamal Hartnett",
      "System.ChangedDate": "2014-07-15T17:42:44.663Z",
      "System.ChangedBy": "Jamal Hartnett",
      "System.Title": "Some great new idea!",
      "Microsoft.Azure DevOps Services.Common.Severity": "3 - Medium",
      "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": "New"
    },
    "_links": {
      "self": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      },
      "html": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=5"
      },
      "workItemHistory": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/history"
      }
    },
    "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:30.1456784Z"
}
```

<a name="workitem.updated"></a>
### Work item updated

Filter events to include only changed work items.

* Publisher ID: `tfs`
* Event ID: `workitem.updated`

#### Settings
 * `areaPath`: Filter events to include only work items under the specified area path.
 * `changedFields`: Filter events to include only work items with the specified field(s) changed.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload
```json
{
  "id": "27646e0e-b520-4d2b-9411-bba7524947cd",
  "eventType": "workitem.updated",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) updated by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- New State: Approved\r\n",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.<ul>\r\n<li>New State: Approved</li></ul>",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) updated by Jamal Hartnett.\r\n\r\n* New State: Approved\r\n"
  },
  "resource": {
    "id": 2,
    "workItemId": 0,
    "rev": 2,
    "revisedBy": null,
    "revisedDate": "0001-01-01T00:00:00",
    "fields": {
      "System.Rev": {
        "oldValue": "1",
        "newValue": "2"
      },
      "System.AuthorizedDate": {
        "oldValue": "2014-07-15T16:48:44.663Z",
        "newValue": "2014-07-15T17:42:44.663Z"
      },
      "System.RevisedDate": {
        "oldValue": "2014-07-15T17:42:44.663Z",
        "newValue": "9999-01-01T00:00:00Z"
      },
      "System.State": {
        "oldValue": "New",
        "newValue": "Approved"
      },
      "System.Reason": {
        "oldValue": "New defect reported",
        "newValue": "Approved by the Product Owner"
      },
      "System.AssignedTo": {
        "newValue": "Jamal Hartnet"
      },
      "System.ChangedDate": {
        "oldValue": "2014-07-15T16:48:44.663Z",
        "newValue": "2014-07-15T17:42:44.663Z"
      },
      "System.Watermark": {
        "oldValue": "2",
        "newValue": "5"
      },
      "Microsoft.Azure DevOps Services.Common.Severity": {
        "oldValue": "3 - Medium",
        "newValue": "2 - High"
      }
    },
    "_links": {
      "self": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates/2"
      },
      "parent": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      }
    },
    "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates/2",
    "revision": {
      "id": 5,
      "rev": 2,
      "fields": {
        "System.AreaPath": "FabrikamCloud",
        "System.TeamProject": "FabrikamCloud",
        "System.IterationPath": "FabrikamCloud\\Release 1\\Sprint 1",
        "System.WorkItemType": "Bug",
        "System.State": "New",
        "System.Reason": "New defect reported",
        "System.CreatedDate": "2014-07-15T16:48:44.663Z",
        "System.CreatedBy": "Jamal Hartnett",
        "System.ChangedDate": "2014-07-15T16:48:44.663Z",
        "System.ChangedBy": "Jamal Hartnett",
        "System.Title": "Some great new idea!",
        "Microsoft.Azure DevOps Services.Common.Severity": "3 - Medium",
        "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": "New"
      },
      "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions/2"
    }
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:30.6438544Z"
}
```


<a name="workitem.commented"></a>
### Work item commented on

Filter events to include only work items commented on.

* Publisher ID: `tfs`
* Event ID: `workitem.commented`

#### Settings
 * `areaPath`: Filter events to include only work items under the specified area path.
 * `commentPattern`: The string that must be found in the comment.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload
```json
{
  "id": "fb2617ed-60df-4518-81fa-749faa6c5cd6",
  "eventType": "workitem.commented",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) commented on by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\nThis is a great new idea",
    "html": "<a href=\"http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.<br/>This is a great new idea",
    "markdown": "[Bug #5](http://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) commented on by Jamal Hartnett.\r\nThis is a great new idea"
  },
  "resource": {
    "id": 5,
    "rev": 4,
    "fields": {
      "System.AreaPath": "FabrikamCloud",
      "System.TeamProject": "FabrikamCloud",
      "System.IterationPath": "FabrikamCloud\\Release 1\\Sprint 1",
      "System.WorkItemType": "Bug",
      "System.State": "New",
      "System.Reason": "New defect reported",
      "System.CreatedDate": "2014-07-15T17:42:44.663Z",
      "System.CreatedBy": "Jamal Hartnett",
      "System.ChangedDate": "2014-07-15T17:42:44.663Z",
      "System.ChangedBy": "Jamal Hartnett",
      "System.Title": "Some great new idea!",
      "Microsoft.Azure DevOps Services.Common.Severity": "3 - Medium",
      "WEF_EB329F44FE5F4A94ACB1DA153FDF38BA_Kanban.Column": "New",
      "System.History": "This is a great new idea"
    },
    "_links": {
      "self": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "http://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:28.9695265Z"
}
```

## Deprecated event types

<a name="message.posted"></a>
### Team room message posted

Triggers when a message is posted to a team room

* Publisher ID: `tfs`
* Event ID: `message.posted`

#### Settings
 * `messagePattern`: The string that must be found in the message
 * `roomId`: Filter events to include only messages sent to the specified Team room
   * Data type: `number`
   * Required

#### Sample payload
```json
{
  "id": "daae438c-296b-4512-b08e-571910874e9b",
  "eventType": "message.posted",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room\r\nHello",
    "html": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room\r\nHello",
    "markdown": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room\r\nHello"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room\r\nHello",
    "html": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room<p>Hello</p>",
    "markdown": "Jamal Hartnett posted a message to Fabrikam-Fiber-Git Team Room\r\nHello"
  },
  "resource": {
    "id": 0,
    "content": "Hello",
    "messageType": "normal",
    "postedTime": "2014-05-02T19:17:13.3309587Z",
    "postedRoomId": 1,
    "postedBy": {
      "id": "00067FFED5C7AF52@Live.com",
      "displayName": "Jamal Hartnett",
      "uniqueName": "Windows Live ID\\fabrikamfiber4@hotmail.com"
    }
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
    },
    "account": {
      "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
    },
    "project": {
      "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
    }
  },
  "createdDate": "2016-09-19T13:03:29.2506967Z"
}
```

## Resource containers

The event payload contains a `resourceContainers` dictionary that includes the IDs of the project, collection/account, or server that the event initiated from. Some products/environments also include a `baseUrl` field with each entry that provides the full URL to the container. This URL can be used to create a connection to the container in order to make REST API calls.

* **Team Foundation Server 2015**: includes project, collection, and server. Does not include `baseUrl`.
* **Team Foundation Server 2017**: includes project, collection, and server. Includes `baseUrl` for each.
* **Azure DevOps Services**: includes project and collection (account). Includes `baseUrl` for each.

