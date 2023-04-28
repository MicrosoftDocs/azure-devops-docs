---
title: Service hooks events
titleSuffix: Azure DevOps  
description: Reference for service hook events. 
ms.assetid: 1DC15791-5614-405E-8372-79A5ED6E66EE
ms.custom: engagement-fy23
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/06/2023
---

# Service hooks events

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

## Available event types

* **Build and release**
  * [Build completed](#build.complete)
  * [Release created](#ms.vss-release.release-created-event)
  * [Release abandoned](#ms.vss-release.release-abandoned-event)
  * [Release deployment approval completed](#ms.vss-release.deployment-approval-completed-event)
  * [Release deployment approval pending](#ms.vss-release.deployment-approval-pending-event)
  * [Release deployment completed](#ms.vss-release.deployment-completed-event)
  * [Release deployment started](#ms.vss-release.deployment-started-event)



::: moniker range=">= azure-devops-2020 < azure-devops"

* **Pipelines**
  * [Run state changed](#run.statechanged)
  *	[Run stage state changed](#run.stagestatechanged)
  * [Run stage waiting for approval](#run.stageapprovalpending)
  * [Run stage approval completed](#run.stageapprovalcompleted)

::: moniker-end

::: moniker range="=azure-devops"

* **Pipelines**
  * [Run state changed](#run.statechanged)
  *	[Run stage state changed](#run.stagestatechanged)
  * [Run stage waiting for approval](#run.stageapprovalpending)
  * [Run stage approval completed](#run.stageapprovalcompleted)
  * [Run job state changed](#run-job-state-changed)

::: moniker-end

* **Code**
  * [Code checked in](#tfvc.checkin)
  * [Code pushed](#git.push)
  * [Pull request created](#git.pullrequest.created)
  * [Pull request merge commit created](#git.pullrequest.merged)
  * [Pull request updated](#git.pullrequest.updated)

* **Work items**
  * [Work item commented on](#workitem.commented)
  * [Work item created](#workitem.created)
  * [Work item deleted](#workitem.deleted)
  * [Work item restored](#workitem.restored)
  * [Work item updated](#workitem.updated)

> [!NOTE]
> The [Nuget WebHooks Receivers package](https://www.nuget.org/packages/Microsoft.AspNet.WebHooks.Receivers.vsts) provides support for receiving Webhooks from Azure DevOps.

## Build and release

<a name="build.complete"></a>

### Build completed

Event: A build completes.

* Publisher ID: `tfs`
* Event ID: `build.complete`
* Resource Name: `build`

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
  "subscriptionId": "4f6e6328-0251-4814-a009-c01dfa368e3f",
  "notificationId": 1,
  "id": "33433986-7f56-4969-bfd4-3e59774c75ad",
  "eventType": "build.complete",
  "publisherId": "tfs",
  "message": {
    "text": "Build 20221202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20221202.1</a> succeeded",
    "markdown": "Build [20221202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "detailedMessage": {
    "text": "Build 20221202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20221202.1</a> succeeded",
    "markdown": "Build [20221202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=vstfs%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "resource": {
    "_links": {
      "self": {
        "href": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/Builds/2727068"
      },
      "web": {
        "href": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_build/results?buildId=2727068"
      },
      "sourceVersionDisplayUri": {
        "href": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/builds/2727068/sources"
      },
      "timeline": {
        "href": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/builds/2727068/Timeline"
      },
      "badge": {
        "href": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/status/4658"
      }
    },
    "properties": {},
    "tags": [],
    "validationResults": [],
    "plans": [
      {
        "planId": "cd96240e-881a-49e9-8135-89a4ad458a6d"
      }
    ],
    "triggerInfo": {},
    "id": 2727068,
    "buildNumber": "20221202.1",
    "status": "completed",
    "result": "succeeded",
    "queueTime": "2022-12-02T12:18:45.7367977Z",
    "startTime": "2022-12-02T12:18:56.6205723Z",
    "finishTime": "2022-12-02T12:21:08.520904Z",
    "url": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/Builds/2727068",
    "definition": {
      "drafts": [],
      "id": 4658,
      "name": "MainRepo (1)",
      "url": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d8fd-495c-917b-fec46cb44fbb/_apis/build/Definitions/4658?revision=1",
      "uri": "vstfs:///Build/Definition/4658",
      "path": "\\",
      "type": "build",
      "queueStatus": "enabled",
      "revision": 1,
      "project": {
        "id": "16dcfeeb-d8fd-495c-917b-fec46cb44fbb",
        "name": "FabrikamFiberChat",
        "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/16dcfeeb-d8fd-495c-917b-fec46cb44fbb",
        "state": "wellFormed",
        "revision": 876,
        "visibility": "organization",
        "lastUpdateTime": "2022-04-06T14:51:16.337Z"
      }
    },
    "buildNumberRevision": 1,
    "project": {
      "id": "16dcfeeb-d8fd-495c-917b-fec46cb44fbb",
      "name": "FabrikamFiberChat",
      "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/16dcfeeb-d8fd-495c-917b-fec46cb44fbb",
      "state": "wellFormed",
      "revision": 876,
      "visibility": "organization",
      "lastUpdateTime": "2022-04-06T14:51:16.337Z"
    },
    "uri": "vstfs:///Build/Build/2727068",
    "sourceBranch": "refs/heads/main",
    "sourceVersion": "6e12f6141917f66a2964af55952ee33914d2d91f",
    "queue": {
      "id": 4799,
      "name": "Azure Pipelines",
      "pool": {
        "id": 112,
        "name": "Azure Pipelines",
        "isHosted": true
      }
    },
    "priority": "normal",
    "reason": "manual",
    "requestedFor": {
      "displayName": "Jack Fabrikam",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9985ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/57a5d794-9773-6c32-bbb6-550585695119",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "57a5d794-9473-6c32-bbb6-550585695119",
      "uniqueName": "jack@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "requestedBy": {
      "displayName": "Jack Fabrikam",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9985ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/57a5d794-9773-6c32-bbb6-550585695119",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "57a5d794-9473-6c32-bbb6-550585695119",
      "uniqueName": "jack@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "lastChangedDate": "2022-12-02T12:21:08.96Z",
    "lastChangedBy": {
      "displayName": "Microsoft.VisualStudio.Services.TFS",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9982ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/00000002-0000-8888-8000-000000000000",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC02ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
        }
      },
      "id": "00000002-0000-8888-8000-000000000000",
      "uniqueName": "00000002-0000-8888-8000-000000000000@2c895908-04e0-4952-89fd-54b0046d6288",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA",
      "descriptor": "s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
    },
    "orchestrationPlan": {
      "planId": "cd96240e-881a-42e9-8135-89a4ad458a6d"
    },
    "logs": {
      "id": 0,
      "type": "Container",
      "url": "https://dev.azure.com/FabrikamFiber/16dcfeeb-d2fd-495c-917b-fec46cb44fbb/_apis/build/builds/2727068/logs"
    },
    "repository": {
      "id": "e5994ecb-b917-4d23-aa75-d52205c3c19b",
      "type": "TfsGit",
      "name": "MainRepo",
      "url": "https://dev.azure.com/FabrikamFiber/FabrikamFiberChat/_git/FabrikamFiberChat",
      "clean": null,
      "checkoutSubmodules": false
    },
    "retainedByRelease": false,
    "triggeredByBuild": null,
    "appendCommitMessageToRunName": true
  },
  "resourceVersion": "2.0",
  "resourceContainers": {
    "collection": {
      "id": "54d02617-2e2d-42b0-b1e2-257059c4c03d",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "account": {
      "id": "998ace4a-0206-432f-a8ea-076ae68596a9",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "project": {
      "id": "16dc2eeb-d8fd-495c-917b-fec46cb44fbb",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    }
  },
  "createdDate": "2022-12-02T12:21:13.8866607Z"
}
```

<a name="ms.vss-release.release-abandoned-event"></a>

### Release abandoned

Event: A release was abandoned.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.release-abandoned-event`
* Resource Name: `resource`

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

Event: A release was created.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.release-created-event`
* Resource Name: `resource`

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

Event: A deployment approval is completed.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-approval-completed-event`
* Resource Name: `resource`

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

Event: A deployment approval is requested.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-approval-pending-event`
* Resource Name: `resource`

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

Event: A deployment completed.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-completed-event`
* Resource Name: `resource`

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
    "html": "Deployment on environment <a href='http://fabfiber.vsrm.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded.",
    "markdown": "Deployment on environment [Dev](http://fabfiber.vsrm.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded."
  },
  "detailedMessage": {
    "text": "Deployment of release Release-1 on environment Dev Succeeded. Time to deploy: 0.11 minutes.",
    "html": "Deployment on environment <a href='http://fabfiber.vsrm.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded. Time to deploy: 0.11 minutes.",
    "markdown": "Deployment on environment [Dev](http://fabfiber.vsrm.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded. Time to deploy: 0.11 minutes."
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
        "url": "http://fabfiber.vsrm.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1"
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

Event: A deployment started.

* Publisher ID: `rm`
* Event ID: `ms.vss-release.deployment-started-event`
* Resource Name: `resource`

#### Settings

 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified definition

#### Sample payload

```json
{
    "id": "1f04688d-98bb-4206-850f-43389f4c8cb4",
    "eventType": "ms.vss-release.deployment-started-event",
    "publisherId": "rm",
    "message": {
        "text": "Deployment of release Release-5 to stage Dev started.",
        "html": "Deployment on stage <a href='http://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4'>Dev</a> started.",
        "markdown": "Deployment on stage [Dev](https://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4) started."
    },
    "detailedMessage": {
        "text": "Deployment of release Release-5 on stage Dev started.\r\nTrigger: Manual",
        "html": "Deployment on stage <a href='Dev'>http://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4</a> started.<br>Trigger: Manual",
        "markdown": "Deployment on stage [Release-1](https://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.vss-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4) started.\r\nTrigger: Dev"
    },
    "resource": {
        "environment": {
            "id": 5,
            "releaseId": 0,
            "name": "Dev",
            "status": "queued",
            "variables": {},
            "variableGroups": [],
            "preDeployApprovals": [],
            "postDeployApprovals": [],
            "preApprovalsSnapshot": {
                "approvals": [],
                "approvalOptions": {
                    "requiredApproverCount": 0,
                    "releaseCreatorCanBeApprover": true,
                    "autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped": false,
                    "enforceIdentityRevalidation": false,
                    "timeoutInMinutes": 0,
                    "executionOrder": "beforeGates"
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
                "enableAccessToken": false,
                "publishDeploymentStatus": false,
                "badgeEnabled": false,
                "autoLinkWorkItems": false,
                "pullRequestDeploymentEnabled": false
            },
            "demands": [],
            "conditions": [],
            "modifiedOn": "2016-01-21T08:19:17.26Z",
            "workflowTasks": [],
            "deployPhasesSnapshot": [],
            "owner": {
                "displayName": "Chuck Reinhart",
                "id": "4247c988-4060-4712-abca-ff44681dd78a"
            },
            "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
            "schedules": [],
            "release": {
                "id": 5,
                "name": "Release-5",
                "_links": {
                    "web": {
                        "href": "https://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_release?releaseId=1&_a=release-summary"
                    }
                }
            },
            "preDeploymentGatesSnapshot": {
                "id": 0,
                "gatesOptions": null,
                "gates": []
            },
            "postDeploymentGatesSnapshot": {
                "id": 0,
                "gatesOptions": null,
                "gates": []
            }
        },
        "release": {
            "id": 0,
            "name": null,
            "status": "undefined",
            "createdOn": "0001-01-01T00:00:00",
            "modifiedOn": "0001-01-01T00:00:00",
            "modifiedBy": null,
            "createdBy": null,
            "environments": [],
            "variables": {},
            "variableGroups": [],
            "artifacts": [],
            "releaseDefinition": {
                "id": 1,
                "name": "Fabrikam.CD",
                "projectReference": null,
                "_links": {}
            },
            "releaseDefinitionRevision": 0,
            "reason": "none",
            "releaseNameFormat": null,
            "keepForever": false,
            "definitionSnapshotRevision": 0,
            "logsContainerUrl": null,
            "_links": {},
            "tags": [],
            "triggeringArtifactAlias": null,
            "projectReference": null
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
        },
        "project": {
            "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
        }
    },
    "createdDate": "2019-10-10T17:49:39.157Z"
}
```

::: moniker range=">= azure-devops-2020"
## Pipelines

> [!NOTE]
> Enable the preview feature, [Multi-stage pipelines](../pipelines/get-started/multi-stage-pipelines-experience.md), for these events.

<a name="run.statechanged"></a>

### Run state changed

Event: Overall statuses of a pipeline run changed. A new run has started, or a run has transitioned to canceling, canceled, failed, partially succeeded or succeeded state.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.run-state-changed-event`
* Resource Name: `resource`

#### Settings
 * `PipelineId`: Filter to include only events for the specified pipeline
 * `runStateId`: Filter events based on the new state of the run
   * Valid values: 
      * `InProgress` 
      * `Canceling` 
      * `Completed` 

#### Sample payload
```json
{
  "id": "62e4351f-1c24-40f9-8510-7af03692ab45",
  "eventType": "ms.vss-pipelines.run-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=11) succeeded."
  },
  "detailedMessage": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=11) succeeded."
  },
  "resource": {
    "run": {
      "_links": {
        "self": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_apis/Pipelines/1/runs/11"
        },
        "web": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=11"
        },
        "pipeline.web": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/definition?definitionId=1"
        },
        "pipeline": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_apis/Pipelines/1?revision=1"
        }
      },
      "pipeline": {
        "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/1?revision=1",
        "id": 11,
        "revision": 1,
        "name": "TEST-CI",
        "folder": "\\"
      },
      "state": "completed",
      "result": "succeeded",
      "createdDate": "2019-12-13T04:46:13.613Z",
      "finishedDate": "2019-12-13T04:46:13.613Z",
      "url": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_apis/Pipelines/1/runs/11",
      "id": 11,
      "name": "11"
    },
    "pipeline": {
      "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/1?revision=1",
      "id": 11,
      "revision": 1,
      "name": "TEST-CI",
      "folder": "\\"
    },
    "repositories": [
      {
        "type": "Git",
        "change":
        {
          "author":
          {
            "name": "Fabrikam John",
            "email": "john@fabrikamfiber.com",
            "date": "2022-11-11T15:09:21Z"
          },
          "committer":
          {
            "name": "Fabrikam John",
            "email": "john@fabrikamfiber.com",
            "date": "2022-11-11T15:09:21Z"
          },
          "message": "Added Viva support"
        },
        "url": "https://fabrikamfiber@dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_git/fabrikamfiber"
      }
    ]
  },
  "resourceVersion": "5.1-preview.1",
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
  "createdDate": "2019-12-13T04:46:13.683Z"
}
```

<a name="run.stagestatechanged"></a>

### Run stage state changed

Event: A new stage has started, or a stage has transitioned to canceling, canceled, failed, partially succeeded, or succeeded.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.stage-state-changed-event`
* Resource Name: `resource`

#### Settings

 * `PipelineId`: Filter to include only events for the specified pipeline
 * `stageNameId`: Filter events to a specific stage name
 * `stageStateId`: Filter events based on the new state of the stage
   * Valid values: 
      * `NotStarted` 
      * `Waiting` 
      * `Running`
      * `Completed`

#### Sample payload

```json
{
  "id": "ac1dd6da-af30-43cb-8434-e1005864b0a3",
  "eventType": "ms.vss-pipelines.stage-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=2) succeeded."
  },
  "detailedMessage": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=2) succeeded."
  },
  "resource": {
    "stage": {
      "_links": {
        "web": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/results?buildId=2"
        },
        "pipeline.web": {
          "href": "https://codedev.ms/org/863d0a5b-3c91-4bf3-8ad7-7f33736b7f4c/_build/definition?definitionId=2"
        }
      },
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "__default",
      "displayName": null,
      "state": "completed",
      "result": "succeeded"
    },
    "run": {
      "pipeline": {
        "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/2?revision=2",
        "id": 2,
        "revision": 2,
        "name": "TEST-CI",
        "folder": "\\"
      },
      "state": "completed",
      "result": "succeeded",
      "createdDate": "2019-12-13T06:10:10.164Z",
      "finishedDate": "2019-12-13T06:10:10.164Z",
      "id": 2,
      "name": "2"
    },
    "pipeline": {
      "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/2?revision=2",
      "id": 2,
      "revision": 2,
      "name": "TEST-CI",
      "folder": "\\"
    },
    "repositories": [
      {
        "type": "Git",
        "change":
        {
          "author":
          {
            "name": "Fabrikam John",
            "email": "john@fabrikamfiber.com",
            "date": "2022-11-11T15:09:21Z"
          },
          "committer":
          {
            "name": "Fabrikam John",
            "email": "john@fabrikamfiber.com",
            "date": "2022-11-11T15:09:21Z"
          },
          "message": "Added Viva support"
        },
        "url": "https://fabrikamfiber@dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_git/fabrikamfiber"
      }
    ]
  },
  "resourceVersion": "5.1-preview.1",
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
  "createdDate": "2019-12-13T06:10:10.186Z"
}
```

<a name="run.stageapprovalpending"></a>

### Run stage waiting for approval

Event: An approval is created for a run stage.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelinechecks-events.approval-pending`
* Resource Name: `resource`

#### Settings

 * `PipelineId`: Filter to include only events for the specified pipeline
 * `stageName`: Filter events to a specific stage name
 * `environmentName`: Filter events to approvals for deployments to a specified environment
 
#### Sample payload

```json
{
  "id": "55382df7-24fa-453c-9173-3369b2417a5b",
  "eventType": "ms.vss-pipelinechecks-events.approval-pending",
  "publisherId": "pipelines",
  "message": {
    "text": "Approval pending for deployment of pipeline run1 to environment env1.",
    "html": "Approval pending for deployment of pipeline <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results> run1 </a> to environment <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources>env1</a>.",
    "markdown": "Approval pending for deployment of pipeline [https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results](run1) to environment [env1](https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources)"
  },
  "detailedMessage": {
    "text": "Approval pending for deployment of pipeline run1 to environment env1.",
    "html": "Approval pending for deployment of pipeline <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results> run1 </a> to environment <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources>env1</a>.",
    "markdown": "Approval pending for deployment of pipeline [https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results](run1) to environment [env1](https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources)"
  },
  "resource": {
    "approval": {
      "id": "0f027b05-0942-4a35-9218-26fa07d8760a",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "743f73b7-cdeb-4de7-80b7-00cee17476b8"
          },
          "status": "pending",
          "comment": "Sample comment",
          "initiatedOn": "2019-12-13T06:14:11.642Z"
        }
      ],
      "status": "pending",
      "createdOn": "2019-12-13T06:14:11.642Z",
      "lastModifiedOn": "2019-12-13T06:14:11.642Z",
      "instructions": "Instructions",
      "minRequiredApprovers": 2,
      "blockedApprovers": [
        {
          "displayName": null,
          "id": "d651e716-a205-4b37-a803-e373df09fea6"
        }
      ],
      "_links": {}
    },
    "projectId": "00000000-0000-0000-0000-000000000000",
    "pipeline": null,
    "stage": null,
    "run": null,
    "resource": null,
    "id": 0,
    "url": null,
    "stageName": null,
    "attemptId": 0
  },
  "resourceVersion": "5.1-preview.1",
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
  "createdDate": "2019-12-13T06:14:11.671Z"
}
```

<a name="run.stageapprovalcompleted"></a>

### Run stage approval completed

Event: An approval completed for a run stage.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelinechecks-events.approval-completed`
* Resource Name: `resource`

#### Settings

 * `PipelineId`: Filter to include only events for the specified pipeline
 * `stageName`: Filter events to a specific stage name
 * `environmentName`: Filter events to approvals for deployments to a specified environment
 
#### Sample payload

```json
{
  "id": "5810cce3-55e9-46dc-ad4f-681c57cf620e",
  "eventType": "ms.vss-pipelinechecks-events.approval-completed",
  "publisherId": "pipelines",
  "message": {
    "text": "Approval completed for deployment of pipeline run1 to environment env1.",
    "html": "Approval completed for deployment of pipeline <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results> run1 </a> to environment <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources>env1</a>.",
    "markdown": "Approval completed for deployment of pipeline [https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results](run1) to environment [env1](https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources)"
  },
  "detailedMessage": {
    "text": "Approval completed for deployment of pipeline run1 to environment env1.",
    "html": "Approval completed for deployment of pipeline <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results> run1 </a> to environment <a href=https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources>env1</a>.",
    "markdown": "Approval completed for deployment of pipeline [https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_build/results?buildId=2&view=results](run1) to environment [env1](https://dev.azure.com/fabfiber/Fabrikam-Fiber-Git/_environments/1?view=resources)"
  },
  "resource": {
    "approval": {
      "id": "0f027b05-0942-4a35-9218-26fa07d8760a",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "f8482ec0-3e2f-489b-ba62-ea01cf84afa8"
          },
          "status": "approved",
          "comment": "Sample comment",
          "initiatedOn": "2019-12-13T06:18:22.460Z"
        }
      ],
      "status": "approved",
      "createdOn": "2019-12-13T06:18:22.460Z",
      "lastModifiedOn": "2019-12-13T06:18:22.460Z",
      "instructions": "Instructions",
      "minRequiredApprovers": 2,
      "blockedApprovers": [
        {
          "displayName": null,
          "id": "23241e2e-59af-4b58-842e-5604d508c6b5"
        }
      ],
      "_links": {}
    },
    "projectId": "00000000-0000-0000-0000-000000000000",
    "pipeline": null,
    "stage": null,
    "run": null,
    "resource": null,
    "id": 0,
    "url": null,
    "stageName": null,
    "attemptId": 0
  },
  "resourceVersion": "5.1-preview.1",
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
  "createdDate": "2019-12-13T06:18:22.487Z"
}
```
::: moniker-end


::: moniker range="=azure-devops"

### Run job state changed

Event: A new job is running, or it has completed, or is waiting for an agent.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.job-state-changed-event`
* Resource Name: `resource`

#### Settings

 * `pipelineId`: Filter to include only events for the specified pipeline
 * `stageNameId`: Filter events to a specific stage name
 * `jobNameId`: Filter events to a specific job name
 * `jobStateId`: Filter events based on the new state of the job
   * Valid values: 
      * `Waiting` 
      * `Running`
      * `Completed`
 * `jobResultId`: Filter events based on the result of the job
   * Valid values:
      * `Succeeded`
      * `Skipped`
      * `Rejected`
      * `Failed`
      * `Canceled`

#### Sample payload

```json
{
    "subscriptionId": "00000000-0000-0000-0000-000000000000",
    "notificationId": 3,
    "id": "ac1dd6da-af30-43cb-8434-e1005864b0a3",
    "eventType": "ms.vss-pipelines.job-state-changed-event",
    "publisherId": "pipelines",
    "message":
    {
        "text": "Run 20221121.5 stage Build job Compile succeeded.",
        "html": "Run 20221121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20221121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
    },
    "detailedMessage":
    {
        "text": "Run 20221121.5 stage Build job Compile succeeded.",
        "html": "Run 20221121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20221121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
    },
    "resource":
    {
        "job":
        {
            "_links":
            {
                "web":
                {
                    "href": "https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2"
                },
                "pipeline.web":
                {
                    "href": "https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/definition?definitionId=2"
                }
            },
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "__default",
            "state": "completed",
            "result": "succeeded",
            "startTime": "2022-11-21T16:42:52.7761408Z",
            "finishTime": "2022-11-21T16:42:52.7761408Z"
        },
        "stage":
        {
            "id": "00000000-0000-0000-0000-000000000000",
            "name": "__default",
            "displayName": null,
            "state": "completed",
            "result": "succeeded",
            "startTime": null,
            "finishTime": null
        },
        "run":
        {
            "pipeline":
            {
                "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/2?revision=2",
                "id": 2,
                "revision": 2,
                "name": "TEST-CI",
                "folder": "\\"
            },
            "state": "completed",
            "result": "succeeded",
            "createdDate": "2022-11-21T16:42:52.7761408Z",
            "finishedDate": "2022-11-21T16:42:52.7761408Z",
            "id": 2,
            "name": "2"
        },
        "pipeline":
        {
            "url": "https://codedev.ms/org/091d79ee-dc21-465e-86a2-b4006b9d0921/_apis/Pipelines/2?revision=2",
            "id": 2,
            "revision": 2,
            "name": "TEST-CI",
            "folder": "\\"
        },
        "repositories":
        [
            {
                "type": "Git",
                "change":
                {
                    "author":
                    {
                        "name": "Fabrikam John",
                        "email": "john@fabrikamfiber.com",
                        "date": "2022-11-11T15:09:21Z"
                    },
                    "committer":
                    {
                        "name": "Fabrikam John",
                        "email": "john@fabrikamfiber.com",
                        "date": "2022-11-11T15:09:21Z"
                    },
                    "message": "Added Viva support"
                },
                "url": "https://fabrikamfiber@dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_git/fabrikamfiber"
            },
            {
                "type": "GitHub",
                "change":
                {
                    "author":
                    {
                        "name": "Fabrikam John",
                        "email": "john@github.com",
                        "date": "2022-08-11T15:05:20Z"
                    },
                    "committer":
                    {
                        "name": "Fabrikam John",
                        "email": "john@github.com",
                        "date": "2022-08-11T15:05:20Z"
                    },
                    "message": "Added Viva open source REST API library"
                },
                "url": "https://api.github.com/repos/FabrikamFiber/Viva"
            }
        ]
    },
    "resourceVersion": "5.1-preview.1",
    "resourceContainers":
    {
        "collection":
        {
            "id": "c12d0eb8-e382-443b-9f9c-c52cba5014c2"
        },
        "account":
        {
            "id": "f844ec47-a9db-4511-8281-8b63f4eaf94e"
        },
        "project":
        {
            "id": "be9b3917-87e6-42a4-a549-2bc06a7a878f"
        }
    },
    "createdDate": "2022-11-21T16:42:53.5254422Z"
}
```

::: moniker-end

## Code

<a name="tfvc.checkin"></a>

### Code checked in

Event: A changeset is checked into TFVC.

* Publisher ID: `tfs`
* Event ID: `tfvc.checkin`
* Resource Name: `changeset`

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

Event: Code was pushed to a Git repository.

* Publisher ID: `tfs`
* Event ID: `git.push`
* Resource Name: `push`

#### Settings

 * `branch`: The branch that code was pushed into
 * `pushedBy`: A group that has the pusher as its member
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
        "name": "refs/heads/main",
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
      "defaultBranch": "refs/heads/main",
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

Event: A pull request is created in a Git repository.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.created`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
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
      "defaultBranch": "refs/heads/main",
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
    "targetRefName": "refs/heads/main",
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

Event: A merge commit was created on a pull request.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.merged`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
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
      "defaultBranch": "refs/heads/main",
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
    "targetRefName": "refs/heads/main",
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

Event: A pull request is updated; status, review list, reviewer vote changed, or the source branch is updated with a push.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.updated`
* Resource Name: `pullrequest`

#### Settings

 * `notificationType`: The type of pull request change
   * Valid values: 
      * `PushNotification` - Source branch updated
      * `ReviewersUpdateNotification` - Reviewers changed
      * `StatusUpdateNotification` - Status changed
      * `ReviewerVoteNotification` - Votes score changed
 * `repository`: The repository that code was pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
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
      "defaultBranch": "refs/heads/main",
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
    "targetRefName": "refs/heads/main",
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
* Resource Name: `workitem`

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
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) created by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Assigned to: \r\n- Comment: \r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li>\r\n<li>Assigned to: </li>\r\n<li>Comment: </li>\r\n<li>Severity: 3 - Medium</li></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) created by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Assigned to: \r\n* Comment: \r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
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
* Resource Name: `resource`

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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/recyclebin/5"
      },
      "workItemType": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/recyclebin/5"
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
* Resource Name: `resource`

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
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) restored by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li>Severity: 3 - Medium</li></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) restored by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      },
      "html": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=5"
      },
      "workItemHistory": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/history"
      }
    },
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
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
* Resource Name: `workitem`

> [!NOTE]
> Creating a Service Hooks subscription with multiple fields is not supported through the UI, but you can achieve this by either [creating a custom payload through the API](/rest/api/azure/devops/hooks/subscriptions/create), or by creating separate Service Hooks subscriptions for each field.

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `changedFields`: Filter events to include only work items with the specified field(s) changed.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "1ca023d6-6cff-49dd-b3d1-302b69311810",
  "eventType": "workitem.updated",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) updated by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.<ul>\r\n<li>Area: FabrikamCloud</li>\r\n<li>Iteration: FabrikamCloud\\Release 1\\Sprint 1</li>\r\n<li>State: New</li>Severity: 3 - Medium</li></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) updated by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      },
      "html": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&id=5"
      },
      "workItemHistory": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/history"
      }
    },
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
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


<a name="workitem.commented"></a>

### Work item commented on

Filter events to include only work items commented on.

* Publisher ID: `tfs`
* Event ID: `workitem.commented`
* Resource Name: `workitem`

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
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) commented on by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5)\r\nThis is a great new idea",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.<br/>This is a great new idea",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&id=5) (Some great new idea!) commented on by Jamal Hartnett.\r\nThis is a great new idea"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
      },
      "workItemUpdates": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/updates"
      },
      "workItemRevisions": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5/revisions"
      },
      "workItemType": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/ea830882-2a3c-4095-a53f-972f9a376f6e/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      }
    },
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/workItems/5"
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
## Resource containers

The event payload contains a `resourceContainers` dictionary that includes the IDs of the project, collection/account, or server that the event initiated from. 

Some products/environments also include a `baseUrl` field with each entry that provides the full URL to the container. You can use this URL to create a connection to the container to make REST API calls.
