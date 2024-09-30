---
title: Service hooks events
titleSuffix: Azure DevOps  
description: Reference article for service hook events. 
ms.assetid: 1DC15791-5614-405E-8372-79A5ED6E66EE
ms.custom: engagement-fy23
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 09/18/2024
---

# Service hooks events

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

## Available event types

* **Build and release**
  * [Build completed](#build.complete)
  * [Release created](#ms.azure-devops-release.release-created-event)
  * [Release abandoned](#ms.azure-devops-release.release-abandoned-event)
  * [Release deployment approval completed](#ms.azure-devops-release.deployment-approval-completed-event)
  * [Release deployment approval pending](#ms.azure-devops-release.deployment-approval-pending-event)
  * [Release deployment completed](#ms.azure-devops-release.deployment-completed-event)
  * [Release deployment started](#ms.azure-devops-release.deployment-started-event)

::: moniker range=">= azure-devops-2020 < azure-devops"

* **Pipelines**
  * [Run state changed](#run.statechanged)
  *	[Run stage state changed](#run.stagestatechanged)
  * [Run stage waiting for approval](#run.stageapprovalpending)
  * [Run stage approval completed](#run.stageapprovalcompleted)

::: moniker-end

::: moniker range="=azure-devops"

* **Pipelines**
  * [Check updated](#check-updated)
  * [Elastic agent pool resized](#elastic-agent-pool-resized)
  * [Manual intervention pending](#manual-intervention-pending)
  * [Project-level agent pool created](#project-level-agent-pool-created)
  * [Project-level agent pool updated](#project-level-agent-pool-updated)
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
  * [Pull request merge attempted](#git.pullrequest.merge.attempted)
  * [Pull request approved](#git.pullrequest.approved)
  * [Pull request updated](#git.pullrequest.updated)
  * [Pull request commented on](#git.pullrequest.commented-on)
  * [Repository created](#repository-created)
  * [Repository deleted](#repository-deleted)
  * [Repository forked](#repository-forked)
  * [Repository renamed](#repository-renamed)
  * [Repository status changed](#repository-status-changed)

* **Service Connections**
  * [Service connection created](#service-connection-created)
  * [Service connection updated](#service-connection-updated)

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

* Publisher ID: `azure-devops`
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
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "build.complete",
  "publisherId": "azure-devops",
  "message": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "detailedMessage": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "resource": {
    "id": 2727068,
    "buildNumber": "20241202.1",
    "status": "completed",
    "result": "succeeded",
    "url": "https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068",
    "definition": {
      "id": 1,
      "name": "FabrikamFiber CI"
    },
    "project": {
      "id": "54d02617-2ebd-42b0-b1e2-257059c4c03d",
      "name": "FabrikamFiber"
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}{
  "subscriptionId": "4f6e6328-0251-4814-a009-c01dfa368e3f",
  "notificationId": 1,
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "build.complete",
  "publisherId": "azure-devops",
  "message": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "detailedMessage": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=54d02617-2ebd-42b0-b1e2-257059c4c03d&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "resource": {
    "_links": {
      "self": {
        "href": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/Builds/2727068"
      },
      "web": {
        "href": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_build/results?buildId=2727068"
      },
      "sourceVersionDisplayUri": {
        "href": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/builds/2727068/sources"
      },
      "timeline": {
        "href": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/builds/2727068/Timeline"
      },
      "badge": {
        "href": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/status/4658"
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
    "buildNumber": "20241202.1",
    "status": "completed",
    "result": "succeeded",
    "queueTime": "2024-12-02T12:18:45.7367977Z",
    "startTime": "2024-12-02T12:18:56.6205723Z",
    "finishTime": "2024-12-02T12:21:08.520904Z",
    "url": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/Builds/2727068",
    "definition": {
      "drafts": [],
      "id": 4658,
      "name": "MainRepo (1)",
      "url": "https://dev.azure.com/FabrikamFiber/00000000-0000-0000-0000-000000000000/_apis/build/Definitions/4658?revision=1",
      "uri": "azure-devops:///Build/Definition/4658",
      "path": "\\",
      "type": "build",
      "queueStatus": "enabled",
      "revision": 1,
      "project": {
        "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
        "name": "FabrikamFiberChat",
        "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/00000000-0000-0000-0000-000000000000",
        "state": "wellFormed",
        "revision": 876,
        "visibility": "organization",
        "lastUpdateTime": "2024-04-06T14:51:16.337Z"
      }
    },
    "buildNumberRevision": 1,
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "FabrikamFiberChat",
      "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/00000000-0000-0000-0000-000000000000",
      "state": "wellFormed",
      "revision": 876,
      "visibility": "organization",
      "lastUpdateTime": "2024-04-06T14:51:16.337Z"
    },
    "uri": "azure-devops:///Build/Build/2727068",
    "sourceBranch": "refs/heads/main",
    "sourceVersion": "00000000-0000-0000-0000-000000000000",
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
      "displayName": "Fabrikam Fiber",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9985ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/57a5d794-9773-6c32-bbb6-550585695119",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "00000000-0000-0000-0000-000000000000",
      "uniqueName": "chuck@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "requestedBy": {
      "displayName": "Chuck Reinhart",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9985ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/57a5d794-9773-6c32-bbb6-550585695119",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "00000000-0000-0000-0000-000000000000",
      "uniqueName": "chuck@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "lastChangedDate": "2024-12-02T12:21:08.96Z",
    "lastChangedBy": {
      "displayName": "Microsoft.VisualStudio.Services.TFS",
      "url": "https://spsprodwus22.vssps.visualstudio.com/A9982ce4a-0206-43df-a8ea-076ae68596a9/_apis/Identities/00000000-0000-0000-0000-000000000000",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC02ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
        }
      },
      "id": "00000000-0000-0000-0000-0000000000000-0000-0000-0000-000000000000",
      "uniqueName": "00000000-0000-0000-0000-000000000000@00000000-0000-0000-0000-000000000000",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA",
      "descriptor": "s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
    },
    "orchestrationPlan": {
      "planId": "00000000-0000-0000-0000-000000000000"
    },
    "logs": {
      "id": 0,
      "type": "Container",
      "url": "https://dev.azure.com/FabrikamFiber//_apis/build/builds/00000000-0000-0000-0000-000000000000/logs"
    },
    "repository": {
      "id": "00000000-0000-0000-0000-000000000000",
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
      "id": "00000000-0000-0000-0000-000000000000",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}
```

<a name="ms.azure-devops-release.release-abandoned-event"></a>

### Release abandoned

Event: A release is abandoned.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.release-abandoned-event`
* Resource Name: `resource`

#### Settings

* `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "ms.azure-devops-release.release-abandoned-event",
  "publisherId": "rm",
  "scope": "all",
  "resource": {
    "release": {
      "id": "release-id",
      "name": "release-name",
      "status": "abandoned",
      "releaseDefinition": {
        "id": "release-definition-id",
        "name": "release-definition-name"
      },
      "project": {
        "id": "project-id",
        "name": "project-name"
      }
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}
```

<a name="ms.azure-devops-release.release-created-event"></a>

### Release created

Event: A release is created.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.release-created-event`
* Resource Name: `resource`

#### Settings

 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000d4d69db4-18d4-413e-bc43-07f56b531160",
  "eventType": "ms.azure-devops-release.release-created-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Release Release-1 created.",
    "html": "<a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> created.",
    "markdown": "Release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) created."
  },
  "detailedMessage": {
    "text": "Release Release-1 created from release pipeline Fabrikam.CD.\\r\\nRelease description: QFE release for fixing title\\r\\nContinuousIntegration Requested for Chuck Reinhart\\r\\n- Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>",
    "html": "Release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5'>Release-1</a> created from release pipeline <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1'>Fabrikam.CD</a>.\\r\\n- Release description: QFE release for fixing title</br>\\r\\n- ContinuousIntegration Requested for Chuck Reinhart</br>\\r\\n- Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>",
    "markdown": "Release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5) created from release pipeline [Fabrikam.CD](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releasedefinitions/1).\\r\\n- Release description: QFE release for fixing title</br>\\r\\n- ContinuousIntegrationRequested for Chuck Reinhart</br>\\r\\n- Build: fabrikam.Bd.2016.04.10 & 2 more<\\li>"
  },
  "resource": {
    "release": {
      "id": 4,
      "name": "Release-1",
      "status": "active",
      "createdOn": "2016-01-21T08:19:17.26Z",
      "modifiedOn": "2016-01-21T08:19:17.26Z",
      "modifiedBy": {
        "id": "00000000-0000-0000-0000-000000000000",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "00000000-0000-0000-0000-000000000000",
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
            "id": "00000000-0000-0000-0000-000000000000",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 5,
            "name": "Release-1",
            "url": "http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/5"
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
              "id": "00000000-0000-0000-0000-0000000000001",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "00000000-0000-0000-0000-00000000000031419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
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
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.6570261Z"
}
```

<a name="ms.azure-devops-release.deployment-approval-completed-event"></a>

### Release deployment approval completed

Event: A deployment approval is completed.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-approval-completed-event`
* Resource Name: `resource`

#### Settings

 * `releaseApprovalStatus`: Filter events to include only deployments with an approval of the specified status
   * Valid values: 
      * `2` - Approved
      * `4` - Rejected
 * `releaseApprovalType`: Filter events to include only deployments requesting an approval of the specified type
   * Valid values: 
      * `1` - Predeployment
      * `2` - Post-deployment
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified definition

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000106acb39-c61e-4efd-995e-a9f5e71ba3cd",
  "eventType": "ms.azure-devops-release.deployment-approval-completed-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Pre Deployment approval for deployment of release Release-1 on environment Dev Succeeded.",
    "html": "Pre Deployment approval for release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1'>Dev</a> Succeeded.",
    "markdown": "Pre Deployment approval for deployment of release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1) Succeeded."
  },
  "detailedMessage": {
    "text": "Pre Deployment approval for release Release-1 on environment Dev Succeeded.\r\nApprover: Chuck Reinhart\r\nComment: Approving",
    "html": "Pre Deployment approval for release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1'>Dev</a> Succeeded.<br>Approver: Chuck Reinhart<br>Comment: Approving",
    "markdown": "Pre Deployment approval for release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1) Succeeded.\r\nApprover: Chuck Reinhart\r\nComment: Approving"
  },
  "resource": {
    "approval": {
      "id": 1,
      "revision": 1,
      "approvalType": "preDeploy",
      "status": "approved",
      "createdOn": "2024-12-02T12:21:13.8866607Z",
      "modifiedOn": "2024-12-02T12:21:13.8866607Z",
      "comments": "Approving",
      "isAutomated": false,
      "isNotificationOn": false,
      "trialNumber": 1,
      "attempt": 1,
      "approver": {
        "displayName": "Chuck Reinhart",
        "id": "00000000-0000-0000-0000-000000000000"
      }
    },
    "environment": {
      "id": 1,
      "name": "Dev"
    },
    "release": {
      "id": 1,
      "name": "Release-1",
      "releaseDefinition": {
        "id": 1,
        "name": "Release Definition"
      },
      "project": {
        "id": "project-id",
        "name": "project-name"
      }
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}
```

<a name="ms.azure-devops-release.deployment-approval-pending-event"></a>

### Release deployment approval pending

Event: A deployment approval is requested.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-approval-pending-event`
* Resource Name: `resource`

#### Settings

 * `releaseApprovalType`: Filter events to include only deployments requesting an approval of the specified type
   * Valid values: 
      * `1` - Predeployment
      * `2` - Post-deployment
 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified pipeline

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000a73e7272-e96d-4249-93ac-7404eacd6801",
  "eventType": "ms.azure-devops-release.deployment-approval-pending-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.",
    "html": "Pre deployment approval pending for release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.",
    "markdown": "Pre deployment approval pending for release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1)."
  },
  "detailedMessage": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.\r\nPending on: Chuck Reinhart\r\nPending since: 09 May 2016 12:09:29 (UTC)",
    "html": "Pre deployment approval pending for release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.<br>Pending on: Chuck Reinhart<br>Pending since: 09 May 2016 12:09:29 (UTC)",
    "markdown": "Pre deployment approval pending for release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1).\r\nPending on: Chuck Reinhart\r\nPending since: 09 May 2016 12:09:29 (UTC)"
  },
  "resource": {
    "approval": {
      "id": 1,
      "revision": 1,
      "approvalType": "preDeploy",
      "status": "pending",
      "createdOn": "2016-05-09T12:09:29Z",
      "modifiedOn": "2016-05-09T12:09:29Z",
      "isAutomated": false,
      "isNotificationOn": false,
      "trialNumber": 1,
      "attempt": 1,
      "approver": {
        "displayName": "Chuck Reinhart",
        "id": "00000000-0000-0000-0000-000000000000"
      }
    },
    "environment": {
      "id": 8,
      "name": "Dev"
    },
    "release": {
      "id": 1,
      "name": "Release-1",
      "releaseDefinition": {
        "id": 1,
        "name": "Release Definition"
      },
      "project": {
        "id": "project-id",
        "name": "project-name"
      }
    }
  },
  "createdDate": "2016-05-09T12:09:29Z"
}{
  "id": "00000000-0000-0000-0000-000000000000a73e7272-e96d-4249-93ac-7404eacd6801",
  "eventType": "ms.azure-devops-release.deployment-approval-pending-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.",
    "html": "Pre deployment approval pending for release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.",
    "markdown": "Pre deployment approval pending for release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1)."
  },
  "detailedMessage": {
    "text": "Pre deployment approval pending for release Release-1 on environment Dev.\\r\\nPending on: Chuck Reinhart\\r\\nPending since: 09 May 2016 12:09:29 (UTC)",
    "html": "Pre deployment approval pending of release <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1'>Release-1</a> on environment <a href='http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a>.\\r\\nPending on: Chuck Reinhart\\r\\nPending  since: 09 May 2016 12:09:29 (UTC)",
    "markdown": "Pre deployment approval pending for release [Release-1](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1) on environment [Dev](http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1).\\r\\nPending on: Chuck Reinhart\\r\\nPending  since: 09 May 2016 12:09:29 (UTC)"
  },
  "resource": {
    "approval": {
      "id": 0,
      "revision": 0,
      "approver": {
        "id": "00000000-0000-0000-0000-000000000000",
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
        "url": "http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
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
        "id": "00000000-0000-0000-0000-000000000000",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "00000000-0000-0000-0000-000000000000",
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
            "id": "00000000-0000-0000-0000-000000000000",
            "displayName": "Chuck Reinhart"
          },
          "scheduledDeploymentTime": "2016-01-21T08:19:17.26Z",
          "schedules": [],
          "release": {
            "id": 1,
            "name": "Release-1",
            "url": "http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/releases/1"
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
              "id": "00000000-0000-0000-0000-0000000000001",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "00000000-0000-0000-0000-00000000000031419848-1780-4137-b7e3-62092e986fd6",
              "name": "Fabrikam"
            }
          },
          "isPrimary": true
        }
      ],
      "releaseDefinition": {
        "id": 1,
        "name": "Fabrikam.CD",
        "url": "http://dev.azure.com/fabfiber/DefaultCollection/Fabrikam-Fiber-Git/_apis/Release/definitions/1"
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
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:28.0320509Z"
}
```

<a name="ms.azure-devops-release.deployment-completed-event"></a>

### Release deployment completed

Event: A deployment completed.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-completed-event`
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
  "id": "00000000-0000-0000-0000-000000000000c3e52c57-187a-45c4-abe2-184a48291bad",
  "eventType": "ms.azure-devops-release.deployment-completed-event",
  "publisherId": "rm",
  "scope": "all",
  "message": {
    "text": "Deployment of release Release-1 on environment Dev Succeeded.",
    "html": "Deployment on environment <a href='http://fabfiber.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded.",
    "markdown": "Deployment on environment [Dev](http://fabfiber.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded."
  },
  "detailedMessage": {
    "text": "Deployment of release Release-1 on environment Dev Succeeded. Time to deploy: 0.11 minutes.",
    "html": "Deployment on environment <a href='http://fabfiber.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1'>Dev</a> Succeeded. Time to deploy: 0.11 minutes.",
    "markdown": "Deployment on environment [Dev](http://fabfiber.visualstudio.com/DefaultCollection/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=8&definitionId=1) Succeeded. Time to deploy: 0.11 minutes."
  },
  "resource": {
    "deployment": {
      "id": 1,
      "status": "succeeded",
      "release": {
        "id": 1,
        "name": "Release-1",
        "releaseDefinition": {
          "id": 1,
          "name": "Release Definition"
        },
        "project": {
          "id": "project-id",
          "name": "project-name"
        }
      },
      "environment": {
        "id": 8,
        "name": "Dev"
      }
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}
```

<a name="ms.azure-devops-release.deployment-started-event"></a>

### Release deployment started

Event: A deployment started.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-started-event`
* Resource Name: `resource`

#### Settings

 * `releaseEnvironmentId`: Filter events to include only completed deployments for the specified environment
 * `releaseDefinitionId`: Filter events to include only completed deployments for the specified definition

#### Sample payload

```json
{
    "id": "00000000-0000-0000-0000-0000000000001f04688d-98bb-4206-850f-43389f4c8cb4",
    "eventType": "ms.azure-devops-release.deployment-started-event",
    "publisherId": "rm",
    "message": {
        "text": "Deployment of release Release-5 to stage Dev started.",
        "html": "Deployment on stage <a href='http://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4'>Dev</a> started.",
        "markdown": "Deployment on stage [Dev](https://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4) started."
    },
    "detailedMessage": {
        "text": "Deployment of release Release-5 on stage Dev started.\r\nTrigger: Manual",
        "html": "Deployment on stage <a href='Dev'>http://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4</a> started.<br>Trigger: Manual",
        "markdown": "Deployment on stage [Release-1](https://fabfiber.visualstudio.com/Fabrikam-Fiber-Git/_apps/hub/ms.azure-devops-releaseManagement-web.hub-explorer?_a=environment-summary&definitionEnvironmentId=1&definitionId=4) started.\r\nTrigger: Dev"
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
                "id": "00000000-0000-0000-0000-000000000000"
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
            "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
            "name": "Fabrikam"
        }
    },
    "resourceVersion": "3.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "account": {
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "project": {
            "id": "00000000-0000-0000-0000-000000000000"
        }
    },
    "createdDate": "2019-10-10T17:49:39.157Z"
}
```

::: moniker range=">= azure-devops-2020"

## Pipeline

<a name="check.updated"></a>

### Check updated

Event: A check is updated.

* Publisher ID: `azure-devops`
* Event ID: `check.updated`
* Resource Name: `check`

#### Settings

* `project`: Filter events to include only checks updated within the specified project.
* `checkType`: Filter events to include only checks of the specified type.
* `status`: Filter events to include only checks with the specified status.

#### Sample payload

```json
{
  "publisherId": "azure-devops",
  "eventId": "check.updated",
  "resource": {
    "check": {
      "id": "00000000-0000-0000-0000-000000000000check-id",
      "type": "check-type",
      "status": "check-status",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000project-id",
        "name": "project-name"
      }
    }
  },
  "updatedDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="elastic-agent-pool-resized"></a>

### Elastic agent pool resized

Event: An elastic agent pool is resized.

* Publisher ID: `azure-devops`
* Event ID: `elasticagentpool.resized`
* Resource Name: `elasticagentpool`

#### Settings

* `project`: Filter events to include only elastic agent pools resized within the specified project.
* `poolName`: Filter events to include only elastic agent pools with the specified name pattern.
* `oldSize`: Filter events to include only elastic agent pools with the specified old size.
* `newSize`: Filter events to include only elastic agent pools with the specified new size.

#### Sample payload

```json
{
  "publisherId": "azure-devops",
  "eventId": "elasticagentpool.resized",
  "resource": {
    "elasticAgentPool": {
      "id": "00000000-0000-0000-0000-000000000000pool-id",
      "name": "pool-name",
      "oldSize": "old-size",
      "newSize": "new-size",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000project-id",
        "name": "project-name"
      }
    }
  },
  "resizedDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="manual-intervention-pending"></a>

### Manual intervention pending

Event: A manual intervention is pending.

* Publisher ID: `azure-devops`
* Event ID: `manualintervention.pending`
* Resource Name: `manualintervention`

#### Settings

* `project`: Filter events to include only manual interventions pending within the specified project.
* `interventionName`: Filter events to include only manual interventions with the specified name pattern.
* `status`: Filter events to include only manual interventions with the specified status.

#### Sample payload

```json
{
  "publisherId": "azure-devops",
  "eventId": "manualintervention.pending",
  "resource": {
    "manualIntervention": {
      "id": "00000000-0000-0000-0000-000000000000intervention-id",
      "name": "intervention-name",
      "status": "pending",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000project-id",
        "name": "project-name"
      }
    }
  },
  "createdDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="project-level-agent-pool-created"></a>

### Project-level agent pool created

Event: A project-level agent pool is created.

* Publisher ID: `azure-devops`
* Event ID: `projectlevelagentpool.created`
* Resource Name: `projectlevelagentpool`

#### Settings

* `project`: Filter events to include only project-level agent pools created within the specified project.
* `poolName`: Filter events to include only project-level agent pools with the specified name pattern.

#### Sample payload

```json
{
  "publisherId": "azure-devops",
  "eventId": "projectlevelagentpool.created",
  "resource": {
    "projectLevelAgentPool": {
      "id": "00000000-0000-0000-0000-000000000000pool-id",
      "name": "pool-name",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000project-id",
        "name": "project-name"
      }
    }
  },
  "createdDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="project-level-agent-pool-updated"></a>

### Project-level agent pool updated

Event: A project-level agent pool is updated.

* Publisher ID: `azure-devops`
* Event ID: `projectlevelagentpool.updated`
* Resource Name: `projectlevelagentpool`

#### Settings

* `project`: Filter events to include only project-level agent pools updated within the specified project.
* `poolName`: Filter events to include only project-level agent pools with the specified name pattern.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "projectlevelagentpool.updated",
    "resource": {
        "projectLevelAgentPool": {
            "id": "00000000-0000-0000-0000-000000000000pool-id",
            "name": "pool-name",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "updatedDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="run.statechanged"></a>

### Run state changed

Event: Overall statuses of a pipeline run changed. A new run started, or a run transitioned to canceling, canceled, failed, partially succeeded or succeeded state.

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
  "id": "00000000-0000-0000-0000-000000000000000",
  "eventType": "ms.vss-pipelines.run-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=11) succeeded."
  },
  "detailedMessage": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=11) succeeded."
  },
  "resource": {
    "run": {
      "_links": {
        "self": {
          "href": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_apis/Pipelines/1/runs/11"
        },
        "web": {
          "href": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=11"
        }
      },
      "pipeline": {
        "id": 1,
        "name": "Pipeline-Name"
      },
      "state": "completed",
      "result": "succeeded",
      "createdDate": "2024-07-17T21:34:22.338Z",
      "finishedDate": "2024-07-17T21:45:22.338Z",
      "url": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_apis/Pipelines/1/runs/11"
    }
  },
  "createdDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="run.stagestatechanged"></a>

### Run stage state changed

Event: A new stage started, or a stage transitioned to canceling, canceled, failed, partially succeeded, or succeeded.

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
  "id": "00000000-0000-0000-0000-000000000000ac1dd6da-af30-43cb-8434-e1005864b0a3",
  "eventType": "ms.vss-pipelines.stage-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=2) succeeded."
  },
  "detailedMessage": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=2) succeeded."
  },
  "resource": {
    "stage": {
      "_links": {
        "web": {
          "href": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/results?buildId=2"
        },
        "pipeline.web": {
          "href": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_build/definition?definitionId=2"
        }
      },
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "name": "__default",
      "displayName": null,
      "state": "completed",
      "result": "succeeded"
    },
    "run": {
      "pipeline": {
        "url": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_apis/Pipelines/2?revision=2",
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
      "url": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_apis/Pipelines/2?revision=2",
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
            "date": "2024-11-11T15:09:21Z"
          },
          "committer":
          {
            "name": "Fabrikam John",
            "email": "john@fabrikamfiber.com",
            "date": "2024-11-11T15:09:21Z"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
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
  "id": "00000000-0000-0000-0000-00000000000055382df7-24fa-453c-9173-3369b2417a5b",
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
      "id": "00000000-0000-0000-0000-0000000000000f027b05-0942-4a35-9218-26fa07d8760a",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "00000000-0000-0000-0000-000000000000743f73b7-cdeb-4de7-80b7-00cee17476b8"
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
          "id": "00000000-0000-0000-0000-000000000000d651e716-a205-4b37-a803-e373df09fea6"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
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
  "id": "00000000-0000-0000-0000-0000000000005810cce3-55e9-46dc-ad4f-681c57cf620e",
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
      "id": "00000000-0000-0000-0000-0000000000000f027b05-0942-4a35-9218-26fa07d8760a",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "00000000-0000-0000-0000-000000000000f8482ec0-3e2f-489b-ba62-ea01cf84afa8"
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
          "id": "00000000-0000-0000-0000-00000000000023241e2e-59af-4b58-842e-5604d508c6b5"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2019-12-13T06:18:22.487Z"
}
```
::: moniker-end


::: moniker range="=azure-devops"

### Run job state changed

Event: A new job is running, or it completed, or is waiting for an agent.

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
    "id": "00000000-0000-0000-0000-000000000000ac1dd6da-af30-43cb-8434-e1005864b0a3",
    "eventType": "ms.vss-pipelines.job-state-changed-event",
    "publisherId": "pipelines",
    "message":
    {
        "text": "Run 20241121.5 stage Build job Compile succeeded.",
        "html": "Run 20241121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20241121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
    },
    "detailedMessage":
    {
        "text": "Run 20241121.5 stage Build job Compile succeeded.",
        "html": "Run 20241121.5 stage Build job <a href=\"https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088\">Compile</a> succeeded.",
        "markdown": "Run 20241121.5 stage Build job [Compile](https://dev.azure.com/fabrikamfiber/fabrikamfiber-viva/_build/results?buildId=2710088) succeeded."
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
            "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
            "name": "__default",
            "state": "completed",
            "result": "succeeded",
            "startTime": "2024-11-21T16:42:52.7761408Z",
            "finishTime": "2024-11-21T16:42:52.7761408Z"
        },
        "stage":
        {
            "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
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
                "url": "https://codedev.ms/org/1234/_apis/Pipelines/2?revision=2",
                "id": 2,
                "revision": 2,
                "name": "TEST-CI",
                "folder": "\\"
            },
            "state": "completed",
            "result": "succeeded",
            "createdDate": "2024-11-21T16:42:52.7761408Z",
            "finishedDate": "2024-11-21T16:42:52.7761408Z",
            "id": 2,
            "name": "2"
        },
        "pipeline":
        {
            "url": "https://codedev.ms/org/00000000-0000-0000-0000-000000000000/_apis/Pipelines/2?revision=2",
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
                        "date": "2024-11-11T15:09:21Z"
                    },
                    "committer":
                    {
                        "name": "Fabrikam John",
                        "email": "john@fabrikamfiber.com",
                        "date": "2024-11-11T15:09:21Z"
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
                        "date": "2024-08-11T15:05:20Z"
                    },
                    "committer":
                    {
                        "name": "Fabrikam John",
                        "email": "john@github.com",
                        "date": "2024-08-11T15:05:20Z"
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
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "account":
        {
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "project":
        {
            "id": "00000000-0000-0000-0000-000000000000"
        }
    },
    "createdDate": "2024-11-21T16:42:53.5254422Z"
}
```

::: moniker-end

## Code

<a name="tfvc.checkin"></a>

### Code checked in

Event: A changeset is checked into Team Foundation Version Control (TFVC).

* Publisher ID: `azure-devops`
* Event ID: `tfvc.checkin`
* Resource Name: `changeset`

#### Settings

 * `path`: Filter to checkins that change one or more files under the specified path
   * Required

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "tfvc.checkin",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Normal Paulk checked in changeset 18: Dropping in new Java sample",
    "html": "Normal Paulk checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=000-0000-0000\">18</a>: Dropping in new Java sample",
    "markdown": "Chuck Reinhart checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=000-0000-0000): Dropping in new Java sample"
  },
  "detailedMessage": {
    "text": "Chuck Reinhart checked in changeset 18: Dropping in new Java sample",
    "html": "Chuck Reinhart checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=d81542e4-cdfa-4333-b082-1ae2d6c3ad16&amp;cs=18\">18</a>: Dropping in new Java sample",
    "markdown": "Chuck Reinhart checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=000-0000-0000): Dropping in new Java sample"
  },
  "resource": {
    "changesetId": 18,
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/tfvc/changesets/18",
    "author": {
      "id": "00000000-0000-0000-0000-000000000000",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "checkedInBy": {
      "id": "00000000-0000-0000-0000-000000000000",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "createdDate": "2014-05-12T22:41:16Z",
    "comment": "Dropping in new Java sample"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:26.2056408Z"
}
```

<a name="git.push"></a>

### Code pushed

Event: Code is pushed to a Git repository.

* Publisher ID: `azure-devops`
* Event ID: `git.push`
* Resource Name: `push`

#### Settings

 * `branch`: The branch that code is pushed into
 * `pushedBy`: A group that has the pusher as its member
 * `repository`: The repository that code is pushed to
   * Data type: `guid`

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-0000000000000",
  "eventType": "git.push",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett pushed updates to branch master of repository Fabrikam-Fiber-Git.",
    "html": "Jamal Hartnett pushed updates to branch master of repository Fabrikam-Fiber-Git.",
    "markdown": "Jamal Hartnett pushed updates to branch `master` of repository `Fabrikam-Fiber-Git`."
  },
  "detailedMessage": {
    "text": "Jamal Hartnett pushed 1 commit to branch master of repository Fabrikam-Fiber-Git.\n - Fixed bug in web.config file 33b55f7c",
    "html": "Jamal Hartnett pushed 1 commit to branch <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmaster\">master</a> of repository <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a>.\n<ul>\n- Fixed bug in web.config file <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/00000000-0000-0000-0000-000000000000\">33b55f7c</a>\n</ul>",
    "markdown": "Jamal Hartnett pushed 1 commit to branch [master](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmaster) of repository [Fabrikam-Fiber-Git](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/).\n* Fixed bug in web.config file [33b55f7c](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/00000000-0000-0000-0000-000000000000)"
  },
  "resource": {
    "commits": [
      {
        "commitId": "00000000-0000-0000-0000-000000000000",
        "author": {
          "name": "Jamal Hartnett",
          "email": "fabrikamfiber4@hotmail.com",
          "date": "2024-02-25T19:01:00Z"
        },
        "committer": {
          "name": "Jamal Hartnett",
          "email": "fabrikamfiber4@hotmail.com",
          "date": "2024-02-25T19:01:00Z"
        },
        "comment": "Fixed bug in web.config file",
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/00000000-0000-0000-0000-000000000000"
      }
    ],
    "refUpdates": [
      {
        "name": "refs/heads/main",
        "oldObjectId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
        "newObjectId": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "repository": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam-Fiber-Git",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/abcd-1234-efgh-5678",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/projects/abcd-1234-efgh-5678",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git"
    },
    "pushedBy": {
      "id": "00000000-0000-0000-0000-000000000000@Live.com",
      "displayName": "Jamal Hartnett",
      "uniqueName": "Windows Live ID\\fabrikamfiber4@hotmail.com"
    },
    "pushId": 14,
    "date": "2014-05-02T19:17:13.3309587Z",
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/abcd-1234-efgh-5678/pushes/14"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.0379153Z"
}
```

<a name="git.pullrequest.created"></a>

### Pull request created

Event: A pull request is created in a Git repository.

* Publisher ID: `azure-devops`
* Event ID: `git.pullrequest.created`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that code is pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "git.pullrequest.created",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett created a new pull request",
    "html": "Jamal Hartnett created a new pull request",
    "markdown": "Jamal Hartnett created a new pull request"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett created a new pull request\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n",
    "html": "Jamal Hartnett created a new pull request\r\n<ul>\r\n- Merge status: Succeeded</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000\">eef717</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett created a new pull request\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n"
  },
  "resource": {
    "repository": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/abcd-1234-efgh-5678",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "active",
    "createdBy": {
      "id": "00000000-0000-0000-0000-000000000000",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
    },
    "creationDate": "2024-06-17T11:22:33.456789Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "succeeded",
    "mergeId": "a1234567-abcde-1234-abc",
    "lastMergeSourceCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeTargetCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "00000000-0000-0000-0000-000000000000",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/00000000-0000-0000-0000-000000000000\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.2879096Z"
}
```

<a name="git.pullrequest.merge.attempted"></a>

### Pull request merge attempted

Event: A pull request merge is attempted in a Git repository.

* Publisher ID: `azure-devops`
* Event ID: `git.pullrequest.merge.attempted`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that code is pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request


#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "git.pullrequest.merge.attempted",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett attempted to merge a pull request",
    "html": "Jamal Hartnett attempted to merge a pull request",
    "markdown": "Jamal Hartnett attempted to merge a pull request"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett attempted to merge a pull request\r\n\r\n- Merge status: Attempted\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n",
    "html": "Jamal Hartnett created a new pull request\r\n<ul>\r\n- Merge status: Attempted</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000\">eef717</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett created a new pull request\r\n\r\n+ Merge status: Attempted\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n"
  },
  "resource": {
    "repository": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000abcd-1234-efgh-5678",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/00000000-0000-0000-0000-000000000000",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "active",
    "createdBy": {
      "id": "00000000-0000-0000-0000-000000000000",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
    },
    "creationDate": "2024-06-17T11:22:33.456789Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "attempted",
    "mergeId": "00000000-0000-0000-0000-000000000000",
    "lastMergeSourceCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeTargetCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "00000000-0000-0000-0000-000000000000",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/00000000-0000-0000-0000-000000000000\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.2879096Z"
}
```

<a name="git.pullrequest.approved"></a>

### Pull request approved

Event: A merge commit is approved on a pull request.

* Publisher ID: `azure-devops`
* Event ID: `git.pullrequest.approved`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that code is pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "git.pullrequest.merged",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett has created a pull request merge approved",
    "html": "Jamal Hartnett has created a pull request merge approved",
    "markdown": "Jamal Hartnett has created a pull request merge approved"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett has created a pull request merge approved\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n",
    "html": "Jamal Hartnett has created a pull request merge approved\r\n<ul>\r\n- Merge status: Succeeded</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000\">eef717</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett has created a pull request merge approved\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n"
  },
  "resource": {
    "repository": {
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000abcd-1234-efgh-5678",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/abcd-1234-efgh-5678",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "completed",
    "createdBy": {
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
    },
    "creationDate": "2024-06-17T11:22:33.456789Z",
    "closedDate": "2024-06-30T18:59:12.3660573Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "succeeded",
    "mergeId": "a1234567-abcde-1234-abc",
    "lastMergeSourceCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeTargetCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/00000000-0000-0000-0000-000000000000\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.3156388Z"
}
```

<a name="git.pullrequest.updated"></a>

### Pull request updated

Event: A pull request is updated; status, review list, reviewer vote changed, or the source branch is updated with a push.

* Publisher ID: `azure-devops`
* Event ID: `git.pullrequest.updated`
* Resource Name: `pullrequest`

#### Settings

 * `notificationType`: The type of pull request change
   * Valid values: 
      * `PushNotification` - Source branch updated
      * `ReviewersUpdateNotification` - Reviewers changed
      * `StatusUpdateNotification` - Status changed
      * `ReviewerVoteNotification` - Votes score changed
 * `repository`: The repository that code is pushed to
   * Data type: `guid`
 * `pullrequestCreatedBy`: A group that has the requester as a member
 * `pullrequestReviewersContains`: A group included in the reviewers list
 * `branch`: The target branch of the pull request

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "git.pullrequest.updated",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett marked the pull request as completed",
    "html": "Jamal Hartnett marked the pull request as completed",
    "markdown": "Jamal Hartnett marked the pull request as completed"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett marked the pull request as completed\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: eef717(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n",
    "html": "Jamal Hartnett marked the pull request as completed\r\n<ul>\r\n- Merge status: Succeeded</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000\">eef717</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett marked the pull request as completed\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [eef717](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000)\r\n"
  },
  "resource": {
    "repository": {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000",
      "project": {
        "id": "00000000-0000-0000-0000-000000000000",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/00000000-0000-0000-0000-000000000000",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "completed",
    "createdBy": {
      "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/00000000-0000-0000-0000-000000000000",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
    },
    "creationDate": "2024-06-17T16:55:46.589889Z",
    "closedDate": "2024-06-30T18:59:12.3660573Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "succeeded",
    "mergeId": "00000000-0000-0000-0000-000000000000",
    "lastMergeSourceCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/abc-defg-123-4567/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeTargetCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/abc-defg-123-4567/commits/00000000-0000-0000-0000-000000000000"
    },
    "lastMergeCommit": {
      "commitId": "00000000-0000-0000-0000-000000000000",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/abc-defg-123-4567/commits/00000000-0000-0000-0000-000000000000"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/00000000-0000-0000-0000-000000000000\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/abcdefg1234567",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=abcdefg1234567",
        "isContainer": true
      }
    ],
    "commits": [
      {
        "commitId": "00000000-0000-0000-0000-000000000000",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:27.2813828Z"
}
```

<a name="git.pullrequest.commented-on"></a>

### Pull request commented on

Event: A pull request is commented on.

* Publisher ID: `azure-devops`
* Event ID: `ms.vss-code.git-pullrequest-comment-event`
* Resource Name: `pullrequest`

#### Settings

 * `repository`: The repository that pull request is commented on
   * Data type: `guid`
 * `branch`: The target branch of the pull request

#### Sample payload

```json
{
    "id": "00000000-0000-0000-0000-000000000000af07be1b-f3ad-44c8-a7f1-c4835f2df06b",
    "eventType": "ms.vss-code.git-pullrequest-comment-event",
    "publisherId": "azure-devops",
    "message": {
        "text": "Jamal Hartnett has edited a pull request comment",
        "html": "Jamal Hartnett has <a href=\"https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1?discussionId=5\">edited</a> a pull request comment",
        "markdown": "Jamal Hartnett has [edited](https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1?discussionId=5) a pull request comment"
    },
    "detailedMessage": {
        "text": "Jamal Hartnett has edited a pull request comment\r\nThis is my comment.\r\n",
        "html": "Jamal Hartnett has <a href=\"https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1?discussionId=5\">edited</a> a pull request comment<p>This is my comment.</p>",
        "markdown": "Jamal Hartnett has [edited](https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1?discussionId=5) a pull request comment\r\nThis is my comment.\r\n"
    },
    "resource": {
        "comment": {
            "id": 2,
            "parentCommentId": 1,
            "author": {
                "displayName": "Jamal Hartnett",
                "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/00000000-0000-0000-0000-000000000000",
                "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
                "uniqueName": "fabrikamfiber4@hotmail.com",
                "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
            },
            "content": "This is my comment.",
            "publishedDate": "2024-06-17T11:22:33.456789Z",
            "lastUpdatedDate": "2024-06-17T16:58:33.123889Z",
            "lastContentUpdatedDate": "2024-06-17T16:58:33.123889Z",
            "commentType": "text",
            "_links": {
                "self": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1/threads/5/comments/2"
                },
                "repository": {
                    "href": "http://joscol2/DefaultCollection/ebed510c-62eb-474b-965f-fd151ebb82e4/_apis/git/repositories/00000000-0000-0000-0000-000000000000"
                },
                "threads": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1/threads/5"
                }
            }
        },
        "pullRequest": {
            "repository": {
                "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
                "name": "Fabrikam",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000",
                "project": {
                    "id": "00000000-0000-0000-0000-000000000000abcd-1234-efgh-5678",
                    "name": "Fabrikam",
                    "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/projects/abcd-1234-efgh-5678",
                    "state": "wellFormed",
                    "visibility": "unchanged",
                    "lastUpdateTime": "0001-01-01T00:00:00"
                },
                "defaultBranch": "refs/heads/master",
                "remoteUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam"
            },
            "pullRequestId": 1,
            "status": "active",
            "createdBy": {
                "displayName": "Jamal Hartnett",
                "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/00000000-0000-0000-0000-000000000000",
                "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
                "uniqueName": "fabrikamfiber4@hotmail.com",
                "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000"
            },
            "creationDate": "2024-06-17T11:22:33.456789Z",
            "title": "my first pull request",
            "description": " - test2\r\n",
            "sourceRefName": "refs/heads/mytopic",
            "targetRefName": "refs/heads/master",
            "mergeStatus": "succeeded",
            "mergeId": "a1234567-abcde-1234-abc",
            "lastMergeSourceCommit": {
                "commitId": "00000000-0000-0000-0000-000000000000",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
            },
            "lastMergeTargetCommit": {
                "commitId": "00000000-0000-0000-0000-000000000000",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
            },
            "lastMergeCommit": {
                "commitId": "00000000-0000-0000-0000-000000000000",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
            },
            "reviewers": [
                {
                    "reviewerUrl": null,
                    "vote": 0,
                    "displayName": "[Mobile]\\Mobile Team",
                    "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/00000000-0000-0000-0000-000000000000",
                    "id": "00000000-0000-0000-0000-00000000000000000000-0000-0000-0000-000000000000",
                    "uniqueName": "azure-devops:///Classification/TeamProject/00000000-0000-0000-0000-000000000000\\Mobile Team",
                    "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=00000000-0000-0000-0000-000000000000",
                    "isContainer": true
                }
            ],
            "commits": [
                {
                    "commitId": "00000000-0000-0000-0000-000000000000",
                    "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/commits/00000000-0000-0000-0000-000000000000"
                }
            ],
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1",
            "_links": {
                "web": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1#view=discussion"
                },
                "statuses": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/00000000-0000-0000-0000-000000000000/pullRequests/1/statuses"
                }
            }
        }
    },
    "resourceVersion": "2.0",
    "resourceContainers": {
        "collection": {
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "account": {
            "id": "00000000-0000-0000-0000-000000000000"
        },
        "project": {
            "id": "00000000-0000-0000-0000-000000000000"
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository created

Event: A new repository is created.

* Publisher ID: `azure-devops`
* Event ID: `git.repository.created`
* Resource Name: `repository`

#### Settings

* `project`: Filter events to include only repositories created within the specified project.
* `repositoryName`: Filter events to include only repositories with the specified name pattern.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "git.repository.created",
    "resource": {
        "repository": {
            "id": "00000000-0000-0000-0000-000000000000repository-id",
            "name": "repository-name",
            "url": "repository-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository deleted

Event: A repository is deleted.

* Publisher ID: `azure-devops`
* Event ID: `git.repository.deleted`
* Resource Name: `repository`

#### Settings

* `project`: Filter events to include only repositories deleted within the specified project.
* `repositoryName`: Filter events to include only repositories with the specified name pattern.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "git.repository.deleted",
    "resource": {
        "repository": {
            "id": "00000000-0000-0000-0000-000000000000repository-id",
            "name": "repository-name",
            "url": "repository-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository forked

Event: A repository is forked.

* Publisher ID: `azure-devops`
* Event ID: `git.repository.forked`
* Resource Name: `repository`

#### Settings

* `project`: Filter events to include only repositories forked within the specified project.
* `sourceRepositoryName`: Filter events to include only forks of repositories with the specified source repository name pattern.
* `forkedRepositoryName`: Filter events to include only repositories with the specified forked repository name pattern.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "git.repository.forked",
    "resource": {
        "repository": {
            "id": "00000000-0000-0000-0000-000000000000forked-repository-id",
            "name": "forked-repository-name",
            "url": "forked-repository-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            },
            "sourceRepository": {
                "id": "00000000-0000-0000-0000-000000000000source-repository-id",
                "name": "source-repository-name",
                "url": "source-repository-url"
            }
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository renamed

Filter events to include only renamed repositories.

* Publisher ID: `azure-devops`
* Event ID: `git.repository.renamed`
* Resource Name: `repository`

#### Settings

* `project`: Filter events to include only repositories renamed within the specified project.
* `oldRepositoryName`: Filter events to include only repositories with the specified old name pattern.
* `newRepositoryName`: Filter events to include only repositories with the specified new name pattern.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "git.repository.renamed",
    "resource": {
        "repository": {
            "id": "00000000-0000-0000-0000-000000000000repository-id",
            "oldName": "old-repository-name",
            "newName": "new-repository-name",
            "url": "repository-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository status changed

Event: A repository status is changed.

* Publisher ID: `azure-devops`
* Event ID: `git.repository.statusChanged`
* Resource Name: `repository`

#### Settings

* `project`: Filter events to include only repositories within the specified project.
* `repositoryName`: Filter events to include only repositories with the specified name pattern.
* `oldStatus`: Filter events to include only repositories with the specified old status.
* `newStatus`: Filter events to include only repositories with the specified new status.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "git.repository.statusChanged",
    "resource": {
        "repository": {
            "id": "00000000-0000-0000-0000-000000000000repository-id",
            "name": "repository-name",
            "url": "repository-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            },
            "oldStatus": "old-status",
            "newStatus": "new-status"
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Service connection created

Event: A new service connection is created.

* Publisher ID: `azure-devops`
* Event ID: `serviceendpoint.created`
* Resource Name: `serviceendpoint`

#### Settings

* `project`: Filter events to include only service connections created within the specified project.
* `serviceConnectionType`: Filter events to include only service connections of the specified type.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "serviceendpoint.created",
    "resource": {
        "serviceEndpoint": {
            "id": "00000000-0000-0000-0000-000000000000service-connection-id",
            "name": "service-connection-name",
            "type": "service-connection-type",
            "url": "service-connection-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Service connection updated

Event: A service connection is updated.

* Publisher ID: `azure-devops`
* Event ID: `serviceendpoint.updated`
* Resource Name: `serviceendpoint`

#### Settings

* `project`: Filter events to include only service connections updated within the specified project.
* `serviceConnectionType`: Filter events to include only service connections of the specified type.

#### Sample payload

```json
{
    "publisherId": "azure-devops",
    "eventId": "serviceendpoint.updated",
    "resource": {
        "serviceEndpoint": {
            "id": "00000000-0000-0000-0000-000000000000service-connection-id",
            "name": "service-connection-name",
            "type": "service-connection-type",
            "url": "service-connection-url",
            "project": {
                "id": "00000000-0000-0000-0000-000000000000project-id",
                "name": "project-name"
            }
        }
    },
    "updatedDate": "2024-07-17T21:34:22.338Z"
}
```

## Work item

<a name="workitem.created"></a>

### Work item created

Event: A new work item is created.

* Publisher ID: `azure-devops`
* Event ID: `workitem.created`
* Resource Name: `workitem`

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "eventType": "workitem.created",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) created by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Assigned to: \r\n- Comment: \r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>\r\n- Assigned to: </br>\r\n- Comment: </br>\r\n- Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) created by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Assigned to: \r\n* Comment: \r\n* Severity: 3 - Medium\r\n"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:29.7688022Z"
}
```

<a name="workitem.deleted"></a>

### Work item deleted

Event: A work item is deleted.

* Publisher ID: `azure-devops`
* Event ID: `workitem.deleted`
* Resource Name: `resource`

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-00000000000072da0ade-0709-40ee-beb7-104287bf7e84",
  "eventType": "workitem.deleted",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.",
    "html": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.",
    "markdown": "[Bug #5](Some great new idea!) deleted by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n",
    "html": "Bug #5 (Some great new idea!) deleted by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br></ul>",
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:30.0657064Z"
}
```

<a name="workitem.restored"></a>

### Work item restored

Event: A work item is newly restored.

* Publisher ID: `azure-devops`
* Event ID: `workitem.restored`
* Resource Name: `resource`

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-0000000000001ca023d6-6cff-49dd-b3d1-302b69311810",
  "eventType": "workitem.restored",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) restored by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) restored by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:30.1456784Z"
}
```

<a name="workitem.updated"></a>

### Work item updated

Event: A work item is changed.

* Publisher ID: `azure-devops`
* Event ID: `workitem.updated`
* Resource Name: `workitem`

> [!NOTE]
> You can't create a Service Hooks subscription with multiple fields through the UI. But, you can do so in the following ways: 
> - [Create a custom payload through the API](/rest/api/azure/devops/hooks/subscriptions/create)
> - [Create separate Service Hooks subscriptions for each field](#create-a-service-hooks-subscription)

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `changedFields`: Filter events to include only work items with the specified field changed.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-0000000000001ca023d6-6cff-49dd-b3d1-302b69311810",
  "eventType": "workitem.updated",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) updated by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) updated by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:30.1456784Z"
}
```

#### Create a service hooks subscription

Do the following steps to create a service hooks subscription for each work item field.
1. Go to your **Project settings**.
2. Select **Service Hooks** > + **Create subscription**.
3. Choose **Web Hooks** as the type of event > **Next**. 
4. Select **Work item updated** as the type of trigger event.
5. Specify the field you want to monitor for changes in the subscription configuration dialog. For example, if you want to track changes in the **State** field, set the filter to **Field: State**. You can also filter events to include only items under a specified area path, only specified work item types, and only work items containing a specified tag.
6. Select **Next**.
7. Continue in the SETTINGS dialog, and then **Test** or **Finish** creating your subscription.

<a name="workitem.commented"></a>

### Work item commented on

Event: A work item is commented on.

* Publisher ID: `azure-devops`
* Event ID: `workitem.commented`
* Resource Name: `workitem`

#### Settings

 * `areaPath`: Filter events to include only work items under the specified area path.
 * `commentPattern`: The string that must be found in the comment.
 * `workItemType`: Filter events to include only work items of the specified type.

#### Sample payload

```json
{
  "id": "00000000-0000-0000-0000-000000000000fb2617ed-60df-4518-81fa-749faa6c5cd6",
  "eventType": "workitem.commented",
  "publisherId": "azure-devops",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) commented on by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000)\r\nThis is a great new idea",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=74e918bf-3376-436d-bd20-8e8c1287f465&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.<br/>This is a great new idea",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=00000000-0000-0000-0000-000000000000) (Some great new idea!) commented on by Jamal Hartnett.\r\nThis is a great new idea"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/00-00-00/workItemTypes/Bug"
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
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "account": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "project": {
      "id": "00000000-0000-0000-0000-000000000000"
    }
  },
  "createdDate": "2024-09-19T13:03:28.9695265Z"
}
```
## Resource containers

The event payload contains a `resourceContainers` dictionary that includes the IDs of the project, collection/account, or server that the event initiated from. 

Some products/environments also include a `baseUrl` field with each entry that provides the full URL to the container. You can use this URL to create a connection to the container to make REST API calls.
