---
title: Service Hook Events
titleSuffix: Azure DevOps  
description: Find information about events in Azure DevOps projects that service hooks can trigger on. See sample payloads and settings to use during subscription creation. 
ms.assetid: 1DC15791-5614-405E-8372-79A5ED6E66EE
ms.custom: engagement-fy23
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 06/16/2025
# customer intent: As a developer, I want to access reference information about events in Azure DevOps projects so that I can programmatically create service hook subscriptions that take action when events happen.
---

# Service hook events

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

You can use service hooks to run tasks on other services when events happen in your Azure DevOps project. This article provides information about the Azure DevOps events that a service hook can trigger on.

For each event, the article lists the ID values and settings that you use when you create a subscription for the event programmatically. Each event section also provides an example of a payload that's sent when the service hook for the event is triggered.

## Available event types

The following types of events are available for use in service hooks. For a list of the events that each target service supports, see [Available services](overview.md#available-services).

* **Build and release**
  * [Build completed](#build.complete)
  * [Release abandoned](#ms.azure-devops-release.release-abandoned-event)
  * [Release created](#ms.azure-devops-release.release-created-event)
  * [Release deployment approval completed](#ms.azure-devops-release.deployment-approval-completed-event)
  * [Release deployment approval pending](#ms.azure-devops-release.deployment-approval-pending-event)
  * [Release deployment completed](#ms.azure-devops-release.deployment-completed-event)
  * [Release deployment started](#ms.azure-devops-release.deployment-started-event)

::: moniker range=">= azure-devops-2020 < azure-devops"

* **Pipeline**
  * [Run state changed](#run.statechanged)
  *	[Run stage state changed](#run.stagestatechanged)
  * [Run stage waiting for approval](#run.stageapprovalpending)
  * [Run stage approval completed](#run.stageapprovalcompleted)

::: moniker-end

::: moniker range="=azure-devops"

* **Pipeline**
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
  * [Pull request updated](#git.pullrequest.updated)
  * [Pull request commented on](#git.pullrequest.commented-on)
  * [Repository created](#repository-created)
  * [Repository deleted](#repository-deleted)
  * [Repository forked](#repository-forked)
  * [Repository renamed](#repository-renamed)
  * [Repository status changed](#repository-status-changed)

* **Service connection**
  * [Service connection created](#service-connection-created)
  * [Service connection updated](#service-connection-updated)

* **Work item**
  * [Work item created](#workitem.created)
  * [Work item deleted](#workitem.deleted)
  * [Work item restored](#workitem.restored)
  * [Work item updated](#workitem.updated)
  * [Work item commented on](#workitem.commented)

::: moniker range="=azure-devops"

* **Advanced security**
  * [Advanced security alert created](#advanced-security-alert-created)
  * [Advanced security alert state changed](#advanced-security-alert-state-changed)
  * [Advanced security alert updated](#advanced-security-alert-updated)

::: moniker-end

> [!NOTE]
> The [NuGet WebHooks Receivers package](https://www.nuget.org/packages/Microsoft.AspNet.WebHooks.Receivers.vsts) provides support for receiving webhook notifications from Azure DevOps.

## Build and release

The following build and release events are available for use in service hooks.

<a name="build.complete"></a>

### Build completed

Event: A build finishes.

* Publisher ID: `tfs`
* Event ID: `build.complete`
* Resource name: `build`

#### Settings

* `definitionName`: Include only events for completed builds for a specific pipeline.
* `buildStatus`: Include only events for completed builds that have a specific completion status.
  * Valid values: 
    * `Succeeded` 
    * `PartiallySucceeded` 
    * `Failed` 
    * `Stopped` 

#### Sample payload
```json
{
  "subscriptionId": "aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e",
  "notificationId": 1,
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "build.complete",
  "publisherId": "tfs",
  "message": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "detailedMessage": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "resource": {
    "id": 2727068,
    "buildNumber": "20241202.1",
    "status": "completed",
    "result": "succeeded",
    "url": "https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068",
    "definition": {
      "id": 1,
      "name": "FabrikamFiber CI"
    },
    "project": {
      "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "name": "FabrikamFiber"
    }
  },
  "createdDate": "2024-12-02T12:21:13.8866607Z"
}{
  "subscriptionId": "aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e",
  "notificationId": 1,
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "build.complete",
  "publisherId": "azure-devops",
  "message": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "detailedMessage": {
    "text": "Build 20241202.1 succeeded",
    "html": "Build <a href=\"https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068\">20241202.1</a> succeeded",
    "markdown": "Build [20241202.1](https://dev.azure.com/FabrikamFiber/web/build.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&builduri=azure-devops%3a%2f%2f%2fBuild%2fBuild%2f2727068) succeeded"
  },
  "resource": {
    "_links": {
      "self": {
        "href": "https://dev.azure.com/FabrikamFiber/e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5/_apis/build/Builds/2727068"
      },
      "web": {
        "href": "https://dev.azure.com/FabrikamFiber/e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5/_build/results?buildId=2727068"
      },
      "sourceVersionDisplayUri": {
        "href": "https://dev.azure.com/FabrikamFiber/e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5/_apis/build/builds/2727068/sources"
      },
      "timeline": {
        "href": "https://dev.azure.com/FabrikamFiber/e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5/_apis/build/builds/2727068/Timeline"
      },
      "badge": {
        "href": "https://dev.azure.com/FabrikamFiber/e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5/_apis/build/status/4658"
      }
    },
    "properties": {},
    "tags": [],
    "validationResults": [],
    "plans": [
      {
        "planId": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa"
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
    "url": "https://dev.azure.com/FabrikamFiber/33dd33dd-ee44-ff55-aa66-77bb77bb77bb/_apis/build/Builds/2727068",
    "definition": {
      "drafts": [],
      "id": 4658,
      "name": "MainRepo (1)",
      "url": "https://dev.azure.com/FabrikamFiber/33dd33dd-ee44-ff55-aa66-77bb77bb77bb/_apis/build/Definitions/4658?revision=1",
      "uri": "azure-devops:///Build/Definition/4658",
      "path": "\\",
      "type": "build",
      "queueStatus": "enabled",
      "revision": 1,
      "project": {
        "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
        "name": "FabrikamFiberChat",
        "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
        "state": "wellFormed",
        "revision": 876,
        "visibility": "organization",
        "lastUpdateTime": "2024-04-06T14:51:16.337Z"
      }
    },
    "buildNumberRevision": 1,
    "project": {
      "id": "33dd33dd-ee44-ff55-aa66-77bb77bb77bb",
      "name": "FabrikamFiberChat",
      "url": "https://dev.azure.com/FabrikamFiber/_apis/projects/33dd33dd-ee44-ff55-aa66-77bb77bb77bb",
      "state": "wellFormed",
      "revision": 876,
      "visibility": "organization",
      "lastUpdateTime": "2024-04-06T14:51:16.337Z"
    },
    "uri": "azure-devops:///Build/Build/2727068",
    "sourceBranch": "refs/heads/main",
    "sourceVersion": "a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
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
      "url": "https://spsprodwus22.vssps.visualstudio.com/ffff5f5f-aa6a-bb7b-cc8c-dddddd9d9d9d/_apis/Identities/33dd33dd-ee44-ff55-aa66-77bb77bb77bb",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "66aa66aa-bb77-cc88-dd99-00ee00ee00ee",
      "uniqueName": "chuck@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "requestedBy": {
      "displayName": "Chuck Reinhart",
      "url": "https://spsprodwus22.vssps.visualstudio.com/ffff5f5f-aa6a-bb7b-cc8c-dddddd9d9d9d/_apis/Identities/33dd33dd-ee44-ff55-aa66-77bb77bb77bb",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc3My03YzMyLQJiYjYtNTUwNTg1Njk1MTE5"
        }
      },
      "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
      "uniqueName": "chuck@FabrikamFiber.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/aad.NTdhNWQ3OTQtOTc1My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5",
      "descriptor": "aad.NTdhNWQ3OTQtOTc6My03YzMyLWJiYjYtNTUwNTg1Njk1MTE5"
    },
    "lastChangedDate": "2024-12-02T12:21:08.96Z",
    "lastChangedBy": {
      "displayName": "Microsoft.VisualStudio.Services.TFS",
      "url": "https://spsprodwus22.vssps.visualstudio.com/ffff5f5f-aa6a-bb7b-cc8c-dddddd9d9d9d/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "_links": {
        "avatar": {
          "href": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC02ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
        }
      },
      "id": "44ee44ee-ff55-aa66-bb77-88cc88cc88cc",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "imageUrl": "https://dev.azure.com/FabrikamFiber/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA",
      "descriptor": "s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA2ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
    },
    "orchestrationPlan": {
      "planId": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4"
    },
    "logs": {
      "id": 0,
      "type": "Container",
      "url": "https://dev.azure.com/FabrikamFiber//_apis/build/builds/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/logs"
    },
    "repository": {
      "id": "a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
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
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f",
      "baseUrl": "https://dev.azure.com/FabrikamFiber/"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
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
* Resource name: `resource`

#### Settings

* `releaseDefinitionId`: Include only events for completed deployments for a specific pipeline.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
* Resource name: `resource`

#### Settings

* `releaseDefinitionId`: Include only events for completed deployments for a specific pipeline.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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
              "taskId": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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
          "sourceId": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4:1",
          "type": "Build",
          "alias": "Fabrikam.CI",
          "definitionReference": {
            "Definition": {
              "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b46",
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
      "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b46",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
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
* Resource name: `resource`

#### Settings

* `releaseApprovalStatus`: Include only events for deployments with an approval of a specific status.
  * Valid values: 
    * `2` - Approved
    * `4` - Rejected
* `releaseApprovalType`: Include only events for deployments for which an approval of a specific type is requested.
  * Valid values: 
    * `1` - Predeployment
    * `2` - Post-deployment
* `releaseEnvironmentId`: Include only events for completed deployments for a specific environment.
* `releaseDefinitionId`: Include only events for completed deployments for a specific definition.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
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
* Resource name: `resource`

#### Settings

* `releaseApprovalType`: Include only events for deployments for which an approval of a specific type is requested.
  * Valid values: 
    * `1` - Predeployment
    * `2` - Post-deployment
* `releaseEnvironmentId`: Include only events for completed deployments for a specific environment.
* `releaseDefinitionId`: Include only events for completed deployments for a specific pipeline.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
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
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "displayName": "Chuck Reinhart"
      },
      "createdBy": {
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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
              "taskId": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
              "version": "*",
              "name": "Deploy Website to Azure",
              "enabled": true,
              "alwaysRun": false,
              "continueOnError": false,
              "timeoutInMinutes": 0,
              "definitionType": null,
              "inputs": {
                "ConnectedServiceName": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
                "WebSiteName": "$(webAppName)",
                "WebSiteLocation": "Southeast Asia",
                "Slot": "",
                "Package": "$(System.DefaultWorkingDirectory)\\**\\*.zip"
              }
            }
          ],
          "deployPhasesSnapshot": [],
          "owner": {
            "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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
              "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
              "name": "Fabrikam.CI"
            },
            "Project": {
              "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
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
      "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
      "name": "Fabrikam"
    }
  },
  "resourceVersion": "3.0-preview.1",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    }
  },
  "createdDate": "2024-09-19T13:03:28.0320509Z"
}
```

<a name="ms.azure-devops-release.deployment-completed-event"></a>

### Release deployment completed

Event: A deployment finishes.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-completed-event`
* Resource name: `resource`

#### Settings

* `releaseEnvironmentId`: Include only events for completed deployments for a specific environment.
* `releaseDefinitionId`: Include only events for completed deployments for a specific pipeline.
* `releaseEnvironmentStatus`: Include only events for completed deployments with a specific status.
  * Valid values: 
    * `8` - Canceled
    * `16` - Rejected
    * `4` - Succeeded
    * `128` - Partially succeeded

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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

Event: A deployment starts.

* Publisher ID: `rm`
* Event ID: `ms.azure-devops-release.deployment-started-event`
* Resource name: `resource`

#### Settings

* `releaseEnvironmentId`: Include only events for completed deployments for a specific environment.
* `releaseDefinitionId`: Include only events for completed deployments for a specific definition.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
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
            "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
            "name": "Fabrikam"
        }
    },
    "resourceVersion": "3.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2019-10-10T17:49:39.157Z"
}
```

## Pipeline

The following pipeline events are available for use in service hooks.

::: moniker range="=azure-devops"

<a name="check.updated"></a>

### Check updated

Event: A check is updated.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelinechecks-events.check-updated-event`
* Resource name: `check`

#### Settings

* `resourceType`: Include only events for checks updated for a specific resource type.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-pipelinechecks-events.check-updated-event",
    "publisherId": "pipelines",
    "message": {
        "text": "Check with configuration ID 1 updated for resource queue:1",
        "html": "Check with configuration ID 1 updated for resource queue:1",
        "markdown": "Check with configuration ID 1 updated for resource queue:1"
    },
    "detailedMessage": {
        "text": "Check with configuration ID 1 updated for resource queue:1",
        "html": "Check with configuration ID 1 updated for resource queue:1",
        "markdown": "Check with configuration ID 1 updated for resource queue:1"
    },
    "resource": {
        "resource": {
            "type": "queue",
            "id": "1"
        },
        "checkConfigurationId": 1,
        "projectId": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T18:52:30.863Z"
}
```

<a name="elastic-agent-pool-resized"></a>

### Elastic agent pool resized

Event: An elastic agent pool is resized.

* Publisher ID: `distributedtask`
* Event ID: `elasticagentpool.resized`
* Resource name: `elasticagentpool`

#### Settings

* `poolId`: Include only events for an elastic agent pool with a specific ID.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "elasticagentpool.resized",
    "publisherId": "distributedtask",
    "message": {
        "text": "\"Resizing pool Sample pool from 1 to 5 VMs.",
        "html": "\"Resizing pool Sample pool from 1 to 5 VMs.",
        "markdown": "\"Resizing pool Sample pool from 1 to 5 VMs."
    },
    "detailedMessage": {
        "text": "\"Resizing pool Sample pool from 1 to 5 VMs.",
        "html": "\"Resizing pool Sample pool from 1 to 5 VMs.",
        "markdown": "\"Resizing pool Sample pool from 1 to 5 VMs."
    },
    "resource": {
        "poolId": 1,
        "poolName": "Sample pool",
        "resourceId": "VM Scale Set Id",
        "previousSize": 1,
        "newSize": 5
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T19:13:58.458Z"
}
```

<a name="manual-intervention-pending"></a>

### Manual intervention pending

Event: A pipeline run starts waiting for manual intervention.

* Publisher ID: `azure-devops`
* Event ID: `manualintervention.pending`
* Resource name: `manualintervention`

#### Settings

* `project`: Include only events for manual interventions pending in a specific project.
* `interventionName`: Include only events for manual interventions with a specific name pattern.
* `status`: Include only events for manual interventions with a specific status.

#### Sample payload

```json
{
  "publisherId": "azure-devops",
  "eventId": "manualintervention.pending",
  "resource": {
    "manualIntervention": {
      "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
      "name": "intervention-name",
      "status": "pending",
      "project": {
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
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

* Publisher ID: `distributedtask`
* Event ID: `agentqueue.created`
* Resource name: `projectlevelagentpool`

#### Settings

* `project`: Include only events for project-level agent pools created in a specific project.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "agentqueue.created",
    "publisherId": "distributedtask",
    "message": {
        "text": "Creating project-level agent pool Sample pool with id 1.",
        "html": "Creating project-level agent pool Sample pool with id 1.",
        "markdown": "Creating project-level agent pool Sample pool with id 1."
    },
    "detailedMessage": {
        "text": "Creating project-level agent pool Sample pool with id 1.",
        "html": "Creating project-level agent pool Sample pool with id 1.",
        "markdown": "Creating project-level agent pool Sample pool with id 1."
    },
    "resource": {
        "queueId": 1,
        "queueName": "Sample pool",
        "projectId": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T19:25:19.515Z"
}
```

<a name="project-level-agent-pool-updated"></a>

### Project-level agent pool updated

Event: A project-level agent pool is updated.

* Publisher ID: `distributedtask`
* Event ID: `agentqueue.updated`
* Resource name: `projectlevelagentpool`

#### Settings

* `queueId`: Include only events for project-level agent pools with a specific ID.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "agentqueue.updated",
    "publisherId": "distributedtask",
    "message": {
        "text": "Updating project-level agent pool Sample pool with id 1.",
        "html": "Updating project-level agent pool Sample pool with id 1.",
        "markdown": "Updating project-level agent pool Sample pool with id 1."
    },
    "detailedMessage": {
        "text": "Updating project-level agent pool Sample pool with id 1.",
        "html": "Updating project-level agent pool Sample pool with id 1.",
        "markdown": "Updating project-level agent pool Sample pool with id 1."
    },
    "resource": {
        "queueId": 1,
        "queueName": "Sample pool",
        "projectId": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T19:30:24.500Z"
}
```

::: moniker-end

<a name="run.statechanged"></a>

### Run state changed

Event: The overall status of a pipeline run changes. A new run starts, or a run transitions to a canceling, canceled, failed, partially succeeded, or succeeded state.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.run-state-changed-event`
* Resource name: `resource`

#### Settings

* `pipelineId`: Include only events for a specific pipeline.
* `runStateId`: Include only events for runs with a specific new state.
  * Valid values: 
    * `InProgress` 
    * `Canceling` 
    * `Completed` 
* `runResultId`: Include only events for runs with a specific result.
  * Valid values: 
    * `Canceled` 
    * `Failed` 
    * `Succeeded`

#### Sample payload
```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "ms.vss-pipelines.run-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_build/results?buildId=11) succeeded."
  },
  "detailedMessage": {
    "text": "Run 11 succeeded.",
    "html": "Run <a href=\"https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_build/results?buildId=11\">11</a> succeeded.",
    "markdown": "Run [11](https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_build/results?buildId=11) succeeded."
  },
  "resource": {
    "run": {
      "_links": {
        "self": {
          "href": "https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_apis/Pipelines/1/runs/11"
        },
        "web": {
          "href": "https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_build/results?buildId=11"
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
      "url": "https://codedev.ms/org/11bb11bb-cc22-dd33-ee44-55ff55ff55ff/_apis/Pipelines/1/runs/11"
    }
  },
  "createdDate": "2024-07-17T21:34:22.338Z"
}
```

<a name="run.stagestatechanged"></a>

### Run stage state changed

Event: A new stage starts in a pipeline run, or a stage transitions to a canceling, canceled, failed, partially succeeded, or succeeded state.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.stage-state-changed-event`
* Resource name: `resource`

#### Settings

* `pipelineId`: Include only events for a specific pipeline.
* `stageNameId`: Include only events for a specific stage name.
* `stageStateId`: Include only events for a stage in a specific new state.
  * Valid values: 
    * `NotStarted` 
    * `Waiting` 
    * `Running`
    * `Completed`
* `stageResultId`: Include only events for stages with a specific result.
  * Valid values: 
    * `Canceled`
    * `Failed`
    * `Rejected`
    * `Skipped`
    * `Succeeded`

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "ms.vss-pipelines.stage-state-changed-event",
  "publisherId": "pipelines",
  "message": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/results?buildId=2) succeeded."
  },
  "detailedMessage": {
    "text": "Run 2 stage __default succeeded.",
    "html": "Run 2 stage <a href=\"https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/results?buildId=2\">__default</a> succeeded.",
    "markdown": "Run 2 stage [__default](https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/results?buildId=2) succeeded."
  },
  "resource": {
    "stage": {
      "_links": {
        "web": {
          "href": "https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/results?buildId=2"
        },
        "pipeline.web": {
          "href": "https://codedev.ms/org/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/_build/definition?definitionId=2"
        }
      },
      "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
      "name": "__default",
      "displayName": null,
      "state": "completed",
      "result": "succeeded"
    },
    "run": {
      "pipeline": {
        "url": "https://codedev.ms/org/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4/_apis/Pipelines/2?revision=2",
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
      "url": "https://codedev.ms/org/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4/_apis/Pipelines/2?revision=2",
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
            "name": "Himani Maharjan",
            "email": "himani@fabrikamfiber.com",
            "date": "2024-11-11T15:09:21Z"
          },
          "committer":
          {
            "name": "Himani Maharjan",
            "email": "himani@fabrikamfiber.com",
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
      "id": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2019-12-13T06:10:10.186Z"
}
```

<a name="run.stageapprovalpending"></a>

### Run stage waiting for approval

Event: An approval is created for a stage in a pipeline run.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelinechecks-events.approval-pending`
* Resource name: `resource`

#### Settings

* `pipelineId`: Include only events for a pipeline with a specific ID.
* `stageName`: Include only events for deployment approvals for a specific stage name.
* `environmentName`: Include only events for deployment approvals in a specific environment.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
      "id": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3"
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
          "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4"
        }
      ],
      "_links": {}
    },
    "projectId": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
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
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2019-12-13T06:14:11.671Z"
}
```

<a name="run.stageapprovalcompleted"></a>

### Run stage approval completed

Event: An approval is completed for a stage in a pipeline run.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelinechecks-events.approval-completed`
* Resource name: `resource`

#### Settings

* `pipelineId`: Include only events for a pipeline with a specific ID.
* `stageName`: Include only events for a specific stage name.
* `environmentName`: Include only events for deployment approvals in a specific environment.
 
#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
      "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
      "steps": [
        {
          "assignedApprover": {
            "displayName": null,
            "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4"
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
          "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5"
        }
      ],
      "_links": {}
    },
    "projectId": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
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
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2019-12-13T06:18:22.487Z"
}
```

::: moniker range="=azure-devops"

### Run job state changed

Event: A new job starts running, finishes, or starts waiting for an agent.

* Publisher ID: `pipelines`
* Event ID: `ms.vss-pipelines.job-state-changed-event`
* Resource name: `resource`

#### Settings

* `pipelineId`: Include only events for a specific pipeline.
* `stageNameId`: Include only events for a specific stage name.
* `jobNameId`: Include only events for a specific job name.
* `jobStateId`: Include only events for a job in a specific state.
  * Valid values: 
    * `Waiting` 
    * `Running`
    * `Completed`
* `jobResultId`: Include only events for a job that has a specific result.
  * Valid values:
    * `Succeeded`
    * `Skipped`
    * `Rejected`
    * `Failed`
    * `Canceled`

#### Sample payload

```json
{
    "subscriptionId": "aaaa0a0a-bb1b-cc2c-dd3d-eeeeee4e4e4e",
    "notificationId": 3,
    "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
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
            "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
            "name": "__default",
            "state": "completed",
            "result": "succeeded",
            "startTime": "2024-11-21T16:42:52.7761408Z",
            "finishTime": "2024-11-21T16:42:52.7761408Z"
        },
        "stage":
        {
            "id": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
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
                "url": "https://codedev.ms/org/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/_apis/Pipelines/2?revision=2",
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
            "url": "https://codedev.ms/org/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/_apis/Pipelines/2?revision=2",
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
                        "name": "Himani Maharjan",
                        "email": "himani@fabrikamfiber.com",
                        "date": "2024-11-11T15:09:21Z"
                    },
                    "committer":
                    {
                        "name": "Himani Maharjan",
                        "email": "himani@fabrikamfiber.com",
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
                        "name": "Himani Maharjan",
                        "email": "himani@github.com",
                        "date": "2024-08-11T15:05:20Z"
                    },
                    "committer":
                    {
                        "name": "Himani Maharjan",
                        "email": "himani@github.com",
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
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account":
        {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project":
        {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2024-11-21T16:42:53.5254422Z"
}
```

::: moniker-end

## Code

The following code events are available for use in service hooks.

<a name="tfvc.checkin"></a>

### Code checked in

Event: A changeset is checked into Team Foundation Version Control (TFVC).

* Publisher ID: `tfs`
* Event ID: `tfvc.checkin`
* Resource name: `changeset`

#### Settings

* `path`: Include only events for check-ins that change files under a specific path.
  * Required

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "tfvc.checkin",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Normal Paulk checked in changeset 18: Dropping in new Java sample",
    "html": "Normal Paulk checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">18</a>: Dropping in new Java sample",
    "markdown": "Chuck Reinhart checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3): Dropping in new Java sample"
  },
  "detailedMessage": {
    "text": "Chuck Reinhart checked in changeset 18: Dropping in new Java sample",
    "html": "Chuck Reinhart checked in changeset <a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3&amp;cs=18\">18</a>: Dropping in new Java sample",
    "markdown": "Chuck Reinhart checked in changeset [18](https://dev.azure.com/fabrikam-fiber-inc/web/cs.aspx?pcguid=c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3): Dropping in new Java sample"
  },
  "resource": {
    "changesetId": 18,
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/tfvc/changesets/18",
    "author": {
      "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "checkedInBy": {
      "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber16@hotmail.com"
    },
    "createdDate": "2014-05-12T22:41:16Z",
    "comment": "Dropping in new Java sample"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    }
  },
  "createdDate": "2024-09-19T13:03:26.2056408Z"
}
```

<a name="git.push"></a>

### Code pushed

Event: Code is pushed to a Git repository.

* Publisher ID: `tfs`
* Event ID: `git.push`
* Resource name: `push`

#### Settings

* `branch`: Include only events for code pushes to a specific branch.
* `pushedBy`: Include only events for code pushes by users in a specific group.
* `repository`: Include only events for code pushes to a specific repository.
  * Data type: `guid`

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "git.push",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett pushed updates to branch main of repository Fabrikam-Fiber-Git.",
    "html": "Jamal Hartnett pushed updates to branch main of repository Fabrikam-Fiber-Git.",
    "markdown": "Jamal Hartnett pushed updates to branch `main` of repository `Fabrikam-Fiber-Git`."
  },
  "detailedMessage": {
    "text": "Jamal Hartnett pushed 1 commit to branch main of repository Fabrikam-Fiber-Git.\n - Fixed bug in web.config file 33b55f7c",
    "html": "Jamal Hartnett pushed 1 commit to branch <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmain\">main</a> of repository <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a>.\n<ul>\n- Fixed bug in web.config file <a href=\"https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/4444eeee455ff5aaaaabb66ccccccccc7777cccc\">33b55f7c</a>\n</ul>",
    "markdown": "Jamal Hartnett pushed 1 commit to branch [main](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/#version=GBmain) of repository [Fabrikam-Fiber-Git](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/).\n* Fixed bug in web.config file [33b55f7c](https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/4444eeee455ff5aaaaabb66ccccccccc7777cccc)"
  },
  "resource": {
    "commits": [
      {
        "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
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
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
      }
    ],
    "refUpdates": [
      {
        "name": "refs/heads/main",
        "oldObjectId": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
        "newObjectId": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5"
      }
    ],
    "repository": {
      "id": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
      "name": "Fabrikam-Fiber-Git",
      "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
      "project": {
        "id": "a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/projects/a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_git/Fabrikam-Fiber-Git"
    },
    "pushedBy": {
      "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff@Live.com",
      "displayName": "Jamal Hartnett",
      "uniqueName": "Windows Live ID\\fabrikamfiber4@hotmail.com"
    },
    "pushId": 14,
    "date": "2014-05-02T19:17:13.3309587Z",
    "url": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/repos/git/repositories/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/pushes/14"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2024-09-19T13:03:27.0379153Z"
}
```

<a name="git.pullrequest.created"></a>

### Pull request created

Event: A pull request is created in a Git repository.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.created`
* Resource name: `pullrequest`

#### Settings

* `repository`: Include only events for pull requests in a specific repository.
  * Data type: `guid`
* `pullrequestCreatedBy`: Include only events for pull requests created by users in a specific group.
* `pullrequestReviewersContains`: Include only events for pull requests with reviewers in a specific group.
* `branch`: Include only events for pull requests in a specific branch.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "git.pullrequest.created",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett created a new pull request",
    "html": "Jamal Hartnett created a new pull request",
    "markdown": "Jamal Hartnett created a new pull request"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett created a new pull request\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: 6666aa(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee)\r\n",
    "html": "Jamal Hartnett created a new pull request\r\n<ul>\r\n- Merge status: Succeeded</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee\">6666aa</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett created a new pull request\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [6666aa](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee)\r\n"
  },
  "resource": {
    "repository": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2",
      "project": {
        "id": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
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
      "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
    },
    "creationDate": "2024-06-17T11:22:33.456789Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "succeeded",
    "mergeId": "a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
    "lastMergeSourceCommit": {
      "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
    },
    "lastMergeTargetCommit": {
      "commitId": "5555ffff566aa6bbbbbcc77ddddddd888888dddd",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/5555ffff566aa6bbbbbcc77ddddddd888888dddd"
    },
    "lastMergeCommit": {
      "commitId": "6666aaaa677bb7cccccdd88eeeeeee999999eeee",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/22cc22cc-dd33-ee44-ff55-66aa66aa66aa\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
        "isContainer": true
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2024-09-19T13:03:27.2879096Z"
}
```

<a name="git.pullrequest.merge.attempted"></a>

### Pull request merge attempted

Event: A pull request merge is attempted in a Git repository.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.merged`
* Resource name: `pullrequest`

#### Settings

* `repository`: Include only events for pull requests in a specific repository.
  * Data type: `guid`
* `pullrequestCreatedBy`: Include only events for pull requests created by users in a specific group.
* `pullrequestReviewersContains`: Include only events for pull requests with reviewers in a specific group.
* `branch`: Include only events for pull requests in a specific branch.
* `mergeResult`: Include only events for pull requests with a specific merge result.
  * Valid values:
    * `Succeeded`
    * `Unsuccessful`
    * `Conflicts`
    * `Failure`
    * `RejectedByPolicy`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.pullrequest.merged",
    "publisherId": "tfs",
    "message": {
        "text": "Jamal Hartnett has created a pull request merge commit",
        "html": "Jamal Hartnett has created a pull request merge commit",
        "markdown": "Jamal Hartnett has created a pull request merge commit"
    },
    "detailedMessage": {
        "text": "Jamal Hartnett has created a pull request merge commit\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: 4444ee(https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc)\r\n",
        "html": "Jamal Hartnett has created a pull request merge commit\r\n<ul>\r\n<li>Merge status: Succeeded</li>\r\n<li>Merge commit: <a href=\"https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc\">4444ee</a></li>\r\n</ul>",
        "markdown": "Jamal Hartnett has created a pull request merge commit\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [4444ee](https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc)\r\n"
    },
    "resource": {
        "repository": {
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "name": "Fabrikam",
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "project": {
                "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
                "name": "Fabrikam",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/projects/00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
                "state": "wellFormed",
                "visibility": "unchanged",
                "lastUpdateTime": "0001-01-01T00:00:00"
            },
            "defaultBranch": "refs/heads/main",
            "remoteUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam"
        },
        "pullRequestId": 1,
        "status": "completed",
        "createdBy": {
            "displayName": "Jamal Hartnett",
            "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
            "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
            "uniqueName": "fabrikamfiber4@hotmail.com",
            "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=22cc22cc-dd33-ee44-ff55-66aa66aa66aa"
        },
        "creationDate": "2014-06-17T16:55:46.589889Z",
        "closedDate": "2014-06-30T18:59:12.3660573Z",
        "title": "my first pull request",
        "description": " - test2\r\n",
        "sourceRefName": "refs/heads/mytopic",
        "targetRefName": "refs/heads/main",
        "mergeStatus": "succeeded",
        "mergeId": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
        "lastMergeSourceCommit": {
            "commitId": "6666aaaa677bb7cccccdd88eeeeeee999999eeee",
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee"
        },
        "lastMergeTargetCommit": {
            "commitId": "5555ffff566aa6bbbbbcc77ddddddd888888dddd",
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/5555ffff566aa6bbbbbcc77ddddddd888888dddd"
        },
        "lastMergeCommit": {
            "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
        },
        "reviewers": [
            {
                "reviewerUrl": "https://fabrikam.visualstudio.com/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1/reviewers/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "vote": 0,
                "displayName": "[Mobile]\\Mobile Team",
                "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "uniqueName": "vstfs:///Classification/TeamProject/00aa00aa-bb11-cc22-dd33-44ee44ee44ee\\Mobile Team",
                "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "isContainer": true
            }
        ],
        "commits": [
            {
                "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
            }
        ],
        "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1",
        "_links": {
            "web": {
                "href": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1#view=discussion"
            },
            "statuses": {
                "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1/statuses"
            }
        }
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T19:57:30.694Z"
}
```

<a name="git.pullrequest.updated"></a>

### Pull request updated

Event: A pull request is updated: the status, review list, or a reviewer vote changes, or the source branch is updated by a push.

* Publisher ID: `tfs`
* Event ID: `git.pullrequest.updated`
* Resource name: `pullrequest`

#### Settings

* `notificationType`: Include only events for pull requests with a specific change.
  * Valid values: 
    * `PushNotification` - The source branch is updated.
    * `ReviewersUpdateNotification` - The reviewers change.
    * `StatusUpdateNotification` - The status changes.
    * `ReviewerVoteNotification` - The votes score changes.
* `repository`: Include only events for pull requests in a specific repository.
  * Data type: `guid`
* `pullrequestCreatedBy`: Include only events for pull requests created by users in a specific group.
* `pullrequestReviewersContains`: Include only events for pull requests with reviewers in a specific group.
* `branch`: Include only events for pull requests in a specific branch.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "git.pullrequest.updated",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Jamal Hartnett marked the pull request as completed",
    "html": "Jamal Hartnett marked the pull request as completed",
    "markdown": "Jamal Hartnett marked the pull request as completed"
  },
  "detailedMessage": {
    "text": "Jamal Hartnett marked the pull request as completed\r\n\r\n- Merge status: Succeeded\r\n- Merge commit: 4444ee(https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc)\r\n",
    "html": "Jamal Hartnett marked the pull request as completed\r\n<ul>\r\n- Merge status: Succeeded</br>\r\n- Merge commit: <a href=\"https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc\">4444ee</a></br>\r\n</ul>",
    "markdown": "Jamal Hartnett marked the pull request as completed\r\n\r\n+ Merge status: Succeeded\r\n+ Merge commit: [4444ee](https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc)\r\n"
  },
  "resource": {
    "repository": {
      "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
      "name": "Fabrikam",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
      "project": {
        "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
        "name": "Fabrikam",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/projects/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
        "state": "wellFormed"
      },
      "defaultBranch": "refs/heads/main",
      "remoteUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam"
    },
    "pullRequestId": 1,
    "status": "completed",
    "createdBy": {
      "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
      "displayName": "Jamal Hartnett",
      "uniqueName": "fabrikamfiber4@hotmail.com",
      "url": "https://dev.azure.com/fabrikam/_apis/Identities/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
      "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=22cc22cc-dd33-ee44-ff55-66aa66aa66aa"
    },
    "creationDate": "2024-06-17T16:55:46.589889Z",
    "closedDate": "2024-06-30T18:59:12.3660573Z",
    "title": "my first pull request",
    "description": " - test2\r\n",
    "sourceRefName": "refs/heads/mytopic",
    "targetRefName": "refs/heads/main",
    "mergeStatus": "succeeded",
    "mergeId": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
    "lastMergeSourceCommit": {
      "commitId": "5555ffff566aa6bbbbbcc77ddddddd888888dddd",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/5555ffff566aa6bbbbbcc77ddddddd888888dddd"
    },
    "lastMergeTargetCommit": {
      "commitId": "6666aaaa677bb7cccccdd88eeeeeee999999eeee",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee"
    },
    "lastMergeCommit": {
      "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
      "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
    },
    "reviewers": [
      {
        "reviewerUrl": null,
        "vote": 0,
        "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "displayName": "[Mobile]\\Mobile Team",
        "uniqueName": "azure-devops:///Classification/TeamProject/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4\\Mobile Team",
        "url": "https://dev.azure.com/fabrikam/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "imageUrl": "https://dev.azure.com/fabrikam/DefaultCollection/_api/_common/identityImage?id=11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
        "isContainer": true
      }
    ],
    "commits": [
      {
        "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
        "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
      }
    ],
    "url": "https://dev.azure.com/fabrikam/DefaultCollection/_apis/repos/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1"
  },
  "resourceVersion": "1.0",
  "resourceContainers": {
    "collection": {
      "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
    },
    "account": {
      "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
    },
    "project": {
      "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
    }
  },
  "createdDate": "2024-09-19T13:03:27.2813828Z"
}
```

<a name="git.pullrequest.commented-on"></a>

### Pull request commented on

Event: A pull request is commented on.

* Publisher ID: `tfs`
* Event ID: `ms.vss-code.git-pullrequest-comment-event`
* Resource name: `pullrequest`

#### Settings

* `repository`: Include only events for pull requests in a specific repository.
  * Data type: `guid`
* `branch`: Include only events for pull requests in a specific branch.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-code.git-pullrequest-comment-event",
    "publisherId": "tfs",
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
                "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "uniqueName": "fabrikamfiber4@hotmail.com",
                "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
            },
            "content": "This is my comment.",
            "publishedDate": "2024-06-17T11:22:33.456789Z",
            "lastUpdatedDate": "2024-06-17T16:58:33.123889Z",
            "lastContentUpdatedDate": "2024-06-17T16:58:33.123889Z",
            "commentType": "text",
            "_links": {
                "self": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1/threads/5/comments/2"
                },
                "repository": {
                    "href": "http://joscol2/DefaultCollection/ebed510c-62eb-474b-965f-fd151ebb82e4/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3"
                },
                "threads": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1/threads/5"
                }
            }
        },
        "pullRequest": {
            "repository": {
                "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
                "name": "Fabrikam",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
                "project": {
                    "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
                    "name": "Fabrikam",
                    "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/projects/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
                    "state": "wellFormed",
                    "visibility": "unchanged",
                    "lastUpdateTime": "0001-01-01T00:00:00"
                },
                "defaultBranch": "refs/heads/main",
                "remoteUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam"
            },
            "pullRequestId": 1,
            "status": "active",
            "createdBy": {
                "displayName": "Jamal Hartnett",
                "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "uniqueName": "fabrikamfiber4@hotmail.com",
                "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=11bb11bb-cc22-dd33-ee44-55ff55ff55ff"
            },
            "creationDate": "2024-06-17T11:22:33.456789Z",
            "title": "my first pull request",
            "description": " - test2\r\n",
            "sourceRefName": "refs/heads/mytopic",
            "targetRefName": "refs/heads/main",
            "mergeStatus": "succeeded",
            "mergeId": "e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5",
            "lastMergeSourceCommit": {
                "commitId": "4444eeee455ff5aaaaabb66ccccccccc7777cccc",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/4444eeee455ff5aaaaabb66ccccccccc7777cccc"
            },
            "lastMergeTargetCommit": {
                "commitId": "5555ffff566aa6bbbbbcc77ddddddd888888dddd",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/5555ffff566aa6bbbbbcc77ddddddd888888dddd"
            },
            "lastMergeCommit": {
                "commitId": "6666aaaa677bb7cccccdd88eeeeeee999999eeee",
                "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee"
            },
            "reviewers": [
                {
                    "reviewerUrl": null,
                    "vote": 0,
                    "displayName": "[Mobile]\\Mobile Team",
                    "url": "https://fabrikam.vssps.visualstudio.com/_apis/Identities/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
                    "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
                    "uniqueName": "azure-devops:///Classification/TeamProject/22cc22cc-dd33-ee44-ff55-66aa66aa66aa\\Mobile Team",
                    "imageUrl": "https://fabrikam.visualstudio.com/DefaultCollection/_api/_common/identityImage?id=22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
                    "isContainer": true
                }
            ],
            "commits": [
                {
                    "commitId": "6666aaaa677bb7cccccdd88eeeeeee999999eeee",
                    "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/commits/6666aaaa677bb7cccccdd88eeeeeee999999eeee"
                }
            ],
            "url": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1",
            "_links": {
                "web": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam/pullrequest/1#view=discussion"
                },
                "statuses": {
                    "href": "https://fabrikam.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3/pullRequests/1/statuses"
                }
            }
        }
    },
    "resourceVersion": "2.0",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2024-07-17T21:34:22.338Z"
}
```

### Repository created

Event: A repository is created.

* Publisher ID: `tfs`
* Event ID: `git.repo.created`
* Resource name: `repository`

#### Settings

* `projectId`: Include only events for pull requests in a specific project.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.repo.created",
    "publisherId": "tfs",
    "message": {
        "text": "A new Git repository was created with name Fabrikam-Fiber-Git and ID c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3.",
        "html": "A new Git repository was created with name <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a> and ID c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3.",
        "markdown": "A new Git repository was created with name [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/) and ID `c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3`."
    },
    "detailedMessage": {
        "text": "A new Git repository was created with name Fabrikam-Fiber-Git and ID c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3.",
        "html": "A new Git repository was created with name <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a> and ID c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3.",
        "markdown": "A new Git repository was created with name [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/) and ID `c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3`."
    },
    "resource": {
        "repository": {
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "name": "Fabrikam-Fiber-Git",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "project": {
                "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
                "name": "Fabrikam-Fiber-Git",
                "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
                "state": "wellFormed",
                "revision": 11,
                "visibility": "private",
                "lastUpdateTime": "2025-06-12T20:22:53.7494088+00:00"
            },
            "defaultBranch": "refs/heads/main",
            "size": 728,
            "remoteUrl": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git",
            "sshUrl": "ssh://git@ssh.fabrikam-fiber-inc.visualstudio.com/v3/DefaultCollection/Fabrikam-Fiber-Git",
            "isDisabled": false
        },
        "initiatedBy": {
            "displayName": "Ivan Yurev",
            "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
            "uniqueName": "user@fabrikamfiber.com"
        },
        "utcTimestamp": "2022-12-12T12:34:56.5498459Z"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:22:53.818Z"
}
```

### Repository deleted

Event: A repository is deleted.

* Publisher ID: `tfs`
* Event ID: `git.repo.deleted`
* Resource name: `repository`

#### Settings

* `repository`: Include only events for pull requests in repositories with a specific name pattern.
  * Data type: `guid`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.repo.deleted",
    "publisherId": "tfs",
    "message": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted.",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted.",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted."
    },
    "detailedMessage": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted.\r\nProject name: Contoso\r\n\r\nRepository name: Fabrikam-Fiber-Git\r\n\r\nRepository can be restored: true\r\n",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted.<p>Project name: Contoso</p><p>Repository name: Fabrikam-Fiber-Git</p><p>Repository can be restored: true</p>",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was deleted.\r\nProject name: Contoso\r\n\r\nRepository name: Fabrikam-Fiber-Git\r\n\r\nRepository can be restored: true\r\n"
    },
    "resource": {
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
            "name": "Contoso",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/00aa00aa-bb11-cc22-dd33-44ee44ee44ee",
            "state": "wellFormed",
            "revision": 11,
            "visibility": "private",
            "lastUpdateTime": "2025-06-12T20:33:32.4370396+00:00"
        },
        "repositoryId": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
        "repositoryName": "Fabrikam-Fiber-Git",
        "isHardDelete": false,
        "initiatedBy": {
            "displayName": "Himani Maharjan",
            "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
            "uniqueName": "himani@fabrikamfiber.com"
        },
        "utcTimestamp": "2022-12-12T12:34:56.5498459Z"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:33:32.512Z"
}
```

### Repository forked

Event: A repository is forked.

* Publisher ID: `tfs`
* Event ID: `git.repo.forked`
* Resource name: `repository`

#### Settings

* `repository`: Include only events for pull requests in repositories with a specific name pattern.
  * Data type: `guid`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.repo.forked",
    "publisherId": "tfs",
    "message": {
        "text": "Git repository Fabrikam-Fiber-Git was forked by Ivan Yurev.",
        "html": "Git repository <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a> was forked by Ivan Yurev.",
        "markdown": "Git repository [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/) was forked by Ivan Yurev."
    },
    "detailedMessage": {
        "text": "Git repository Fabrikam-Fiber-Git was forked by Ivan Yurev.\r\nSource Repository\r\n\r\nProject name: Fabrikam-Fiber-Git\r\nRepository Id: c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\r\nRepository Name: Fabrikam-Fiber-Git\r\nDefault branch: refs/heads/main\r\nSize: 729\r\nRepository link(https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n\r\nFork\r\n\r\nProject name: Forked-fiber-inc\r\nRepository Id: d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4\r\nRepository Name: Forked-fiber-inc\r\nDefault branch: refs/heads/main\r\nRepository link(https://forked-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4)",
        "html": "Git repository <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git/\">Fabrikam-Fiber-Git</a> was forked by Ivan Yurev.\r\n<h3>Source Repository</h3>\r\n<p>Project name: Fabrikam-Fiber-Git</p>\r\n<p>Repository Id: c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3</p>\r\n<p>Repository Name: Fabrikam-Fiber-Git</p>\r\n<p>Default branch: refs/heads/main</p>\r\n<p>Size: 729</p>\r\n<p><a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Repository link</a></p>\r\n<h3>Fork</h3>\r\n<p>Project name: Another-Great-Project</p>\r\n<p>Repository Id: d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4</p>\r\n<p>Repository Name: Forked-fiber-inc</p>\r\n<p>Default branch: refs/heads/main</p>\r\n<p><a href=\"https://forked-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4\">Repository link</a></p>",
        "markdown": "Git repository [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3) was forked by Ivan Yurev.\r\n### Source Repository\r\n\r\nProject name: Fabrikam-Fiber-Git\r\nRepository Id: c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\r\nRepository Name: Fabrikam-Fiber-Git\r\nDefault branch: refs/heads/main\r\nSize: 729\r\n[Repository link](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n\r\n### Fork\r\n\r\nProject name: Another-Great-Project\r\nRepository Id: d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4\r\nRepository Name: Forked-Fiber-Git\r\nDefault branch: refs/heads/main\r\n[Repository link](https://forked-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4)"
    },
    "resource": {
        "targetRepository": {
            "id": "d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
            "name": "Forked-Fiber-Git",
            "url": "https://forked-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4",
            "project": {
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "name": "Another-Great-Project",
                "url": "https://another-great-inc.visualstudio.com/DefaultCollection/_apis/projects/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "state": "wellFormed",
                "revision": 11,
                "visibility": "private",
                "lastUpdateTime": "2025-06-12T20:39:05.1186682+00:00"
            },
            "defaultBranch": "refs/heads/main",
            "size": 728,
            "remoteUrl": "https://another-great-inc.visualstudio.com/DefaultCollection/_git/Forked-Fiber-Git",
            "sshUrl": "ssh://git@ssh.another-great-inc.visualstudio.com/v3/DefaultCollection/Forked-Fiber-Git",
            "isDisabled": false
        },
        "sourceRepository": {
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "name": "Fabrikam-Fiber-Git",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "project": {
                "id": "22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
                "name": "Fabrikam-Fiber-Git",
                "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/22cc22cc-dd33-ee44-ff55-66aa66aa66aa",
                "state": "wellFormed",
                "revision": 11,
                "visibility": "private",
                "lastUpdateTime": "2025-06-12T20:39:05.1186682+00:00"
            },
            "defaultBranch": "refs/heads/main",
            "size": 728,
            "remoteUrl": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git",
            "sshUrl": "ssh://git@ssh.fabrikam-fiber-inc.visualstudio.com/v3/DefaultCollection/Fabrikam-Fiber-Git",
            "isDisabled": false
        },
        "initiatedBy": {
            "displayName": "Ivan Yurev",
            "id": "66aa66aa-bb77-cc88-dd99-00ee00ee00ee",
            "uniqueName": "user@fabrikamfiber.com"
        },
        "utcTimestamp": "2023-01-25T12:34:56.5498459Z"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:39:05.382Z"
}
```

### Repository renamed

Event: A repository is renamed.

* Publisher ID: `tfs`
* Event ID: `git.repo.renamed`
* Resource name: `repository`

#### Settings

* `repository`: Include only events for pull requests in repositories with a specific name pattern.
  * Data type: `guid`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.repo.renamed",
    "publisherId": "tfs",
    "message": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to Fabrikam-Fiber-Git.",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to  <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Fabrikam-Fiber-Git</a>.",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)."
    },
    "detailedMessage": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to Fabrikam-Fiber-Git.\r\nProject name: Contoso\r\n\r\nRepository name before renaming: Diber-Git\r\n\r\nDefault branch: refs/heads/main\r\n\r\nRepository link(https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to  <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Fabrikam-Fiber-Git</a>.<p>Project name: Contoso</p><p>Repository name before renaming: Diber-Git</p><p>Default branch: refs/heads/main</p><p><a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Repository link</a></p>",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 was renamed to [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3).\r\nProject name: Contoso\r\n\r\nRepository name before renaming: Diber-Git\r\n\r\nDefault branch: refs/heads/main\r\n\r\n[Repository link](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n"
    },
    "resource": {
        "oldName": "Diber-Git",
        "newName": "Fabrikam-Fiber-Git",
        "repository": {
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "name": "Fabrikam-Fiber-Git",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "project": {
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "name": "Contoso",
                "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "state": "wellFormed",
                "revision": 11,
                "visibility": "private",
                "lastUpdateTime": "2025-06-12T20:48:38.8174565+00:00"
            },
            "defaultBranch": "refs/heads/main",
            "size": 728,
            "remoteUrl": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git",
            "sshUrl": "ssh://git@ssh.fabrikam-fiber-inc.visualstudio.com/v3/DefaultCollection/Fabrikam-Fiber-Git",
            "isDisabled": false
        },
        "initiatedBy": {
            "displayName": "Himani Maharjan",
            "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
            "uniqueName": "himani@fabrikamfiber.com"
        },
        "utcTimestamp": "2022-12-12T12:34:56.5498459Z"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:48:38.859Z"
}
```

### Repository status changed

Event: A repository status changes.

* Publisher ID: `tfs`
* Event ID: `git.repo.statuschanged`
* Resource name: `repository`

#### Settings

* `repository`: Include only events for repositories with a specific name pattern.
  * Data type: `guid`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "git.repo.statuschanged",
    "publisherId": "tfs",
    "message": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name Fabrikam-Fiber-Git status was changed: enabled.",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Fabrikam-Fiber-Git</a> status was changed: enabled.",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3) status was changed: enabled."
    },
    "detailedMessage": {
        "text": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name Fabrikam-Fiber-Git status was changed: enabled.\r\nProject name: Contoso\r\n\r\nRepository name: Fabrikam-Fiber-Git\r\n\r\nDefault branch: refs/heads/main\r\n\r\nIsFork: false\r\n\r\nIsDisabled: false\r\n\r\nIsInMaintenance: false\r\n\r\nClone link(https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n",
        "html": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name <a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Fabrikam-Fiber-Git</a> status was changed: enabled.<p>Project name: Contoso</p><p>Repository name: Fabrikam-Fiber-Git</p><p>Default branch: refs/heads/main</p><p>IsFork: false</p><p>IsDisabled: false</p><p>IsInMaintenance: false</p><p><a href=\"https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3\">Clone link</a></p>",
        "markdown": "Git repository c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3 with name [Fabrikam-Fiber-Git](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3) status was changed: enabled.\r\nProject name: Contoso\r\n\r\nRepository name: Fabrikam-Fiber-Git\r\n\r\nDefault branch: refs/heads/main\r\n\r\nIsFork: false\r\n\r\nIsDisabled: false\r\n\r\nIsInMaintenance: false\r\n\r\n[Clone link](https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3)\r\n"
    },
    "resource": {
        "disabled": false,
        "repository": {
            "id": "c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "name": "Fabrikam-Fiber-Git",
            "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/git/repositories/c2c2c2c2-dddd-eeee-ffff-a3a3a3a3a3a3",
            "project": {
                "id": "11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "name": "Fabrikam-Fiber-Git",
                "url": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_apis/projects/11bb11bb-cc22-dd33-ee44-55ff55ff55ff",
                "state": "wellFormed",
                "revision": 11,
                "visibility": "private",
                "lastUpdateTime": "2025-06-12T20:55:07.6222336+00:00"
            },
            "defaultBranch": "refs/heads/main",
            "size": 728,
            "remoteUrl": "https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection/_git/Fabrikam-Fiber-Git",
            "sshUrl": "ssh://git@ssh.fabrikam-fiber-inc.visualstudio.com/v3/DefaultCollection/Fabrikam-Fiber-Git",
            "isDisabled": false
        },
        "initiatedBy": {
            "displayName": "Himani Maharjan",
            "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
            "uniqueName": "himani@fabrikamfiber.com"
        },
        "utcTimestamp": "2022-12-12T12:34:56.5498459Z"
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:55:07.812Z"
}
```

## Service connection

The following service connection events are available for use in service hooks.

### Service connection created

Event: A service connection is created.

* Publisher ID: `tfs`
* Event ID: `ms.vss-endpoint.endpoint-created`
* Resource name: `serviceendpoint`

#### Settings

* `project`: Include only events for service connections created in a specific project.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-endpoint.endpoint-created",
    "publisherId": "tfs",
    "message": {
        "text": "Generic service connection created: Sample service connection",
        "html": "Generic service connection created: Sample service connection",
        "markdown": "Generic service connection created: Sample service connection"
    },
    "detailedMessage": {
        "text": "Generic service connection created: Sample service connection",
        "html": "Generic service connection created: Sample service connection",
        "markdown": "Generic service connection created: Sample service connection"
    },
    "resource": {
        "id": "a6a6a6a6-bbbb-cccc-dddd-e7e7e7e7e7e7",
        "name": "Sample service connection",
        "type": "Generic",
        "authorization": null,
        "projectIds": []
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-12T20:59:01.867Z"
}
```

### Service connection updated

Event: A service connection is updated.

* Publisher ID: `tfs`
* Event ID: `ms.vss-endpoint.endpoint-updated`
* Resource name: `serviceendpoint`

#### Settings

* `project`: Include only events for service connections updated in a specific project.

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-endpoint.endpoint-updated",
    "publisherId": "tfs",
    "message": {
        "text": "Generic service connection updated: Sample service connection",
        "html": "Generic service connection updated: Sample service connection",
        "markdown": "Generic service connection updated: Sample service connection"
    },
    "detailedMessage": {
        "text": "Generic service connection updated: Sample service connection",
        "html": "Generic service connection updated: Sample service connection",
        "markdown": "Generic service connection updated: Sample service connection"
    },
    "resource": {
        "id": "f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6",
        "name": "Sample service connection",
        "type": "Generic",
        "authorization": null,
        "projectIds": []
    },
    "resourceVersion": "1.0-preview.1",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-13T12:58:59.908Z"
}
```

## Work item

The following work item events are available for use in service hooks.

<a name="workitem.created"></a>

### Work item created

Event: A work item is created.

* Publisher ID: `tfs`
* Event ID: `workitem.created`
* Resource name: `workitem`

#### Settings

* `areaPath`: Include only events for work items under a specific area path.
* `workItemType`: Include only events for work items of a specific type.
* `linksChanged`: Include only events for work items with one or more links added or removed.
* `tag`: Include only events for work items that contain a specific tag.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "workitem.created",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) created by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) created by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Assigned to: \r\n- Comment: \r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) created by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>\r\n- Assigned to: </br>\r\n- Comment: </br>\r\n- Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) created by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Assigned to: \r\n* Comment: \r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4/workItemTypes/Bug"
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
          "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "account": {
          "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
      },
      "project": {
          "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
      }
  },
  "createdDate": "2024-09-19T13:03:29.7688022Z"
}
```

<a name="workitem.deleted"></a>

### Work item deleted

Event: A work item is deleted.

* Publisher ID: `tfs`
* Event ID: `workitem.deleted`
* Resource name: `resource`

#### Settings

* `areaPath`: Include only events for work items under a specific area path.
* `workItemType`: Include only events for work items of a specific type.
* `tag`: Include only events for work items that contain a specific tag.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4/workItemTypes/Bug"
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
          "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "account": {
          "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
      },
      "project": {
          "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
      }
  },
  "createdDate": "2024-09-19T13:03:30.0657064Z"
}
```

<a name="workitem.restored"></a>

### Work item restored

Event: A work item is restored.

* Publisher ID: `tfs`
* Event ID: `workitem.restored`
* Resource name: `resource`

#### Settings

* `areaPath`: Include only events for work items under a specific area path.
* `workItemType`: Include only events for work items of a specific type.
* `tag`: Include only events for work items that contain a specific tag.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "workitem.restored",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) restored by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) restored by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) restored by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) restored by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      },
      "html": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4&id=5"
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
          "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "account": {
          "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
      },
      "project": {
          "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
      }
  },
  "createdDate": "2024-09-19T13:03:30.1456784Z"
}
```

<a name="workitem.updated"></a>

### Work item updated

Event: A work item changes.

* Publisher ID: `tfs`
* Event ID: `workitem.updated`
* Resource name: `workitem`

#### Settings

* `areaPath`: Include only events for work items under a specific area path.
* `changedFields`: Include only events for work items with a change in a specific field.
* `workItemType`: Include only events for work items of a specific type.
* `linksChanged`: Include only events for work items with one or more links added or removed.
* `tag`: Include only events for work items that contain a specific tag.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "workitem.updated",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) updated by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) updated by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)\r\n\r\n- Area: FabrikamCloud\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n- State: New\r\n- Severity: 3 - Medium\r\n",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) updated by Jamal Hartnett.<ul>\r\n- Area: FabrikamCloud</br>\r\n- Iteration: FabrikamCloud\\Release 1\\Sprint 1</br>\r\n- State: New</br>Severity: 3 - Medium</br></ul>",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) updated by Jamal Hartnett.\r\n\r\n* Area: FabrikamCloud\r\n* Iteration: FabrikamCloud\\Release 1\\Sprint 1\r\n* State: New\r\n* Severity: 3 - Medium\r\n"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/workItemTypes/Bug"
      },
      "fields": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/fields"
      },
      "html": {
        "href": "https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=d3d3d3d3-eeee-ffff-aaaa-b4b4b4b4b4b4&id=5"
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
          "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "account": {
          "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
      },
      "project": {
          "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
      }
  },
  "createdDate": "2024-09-19T13:03:30.1456784Z"
}
```

#### Filter on multiple work item fields

If you want to trigger on a change in more than one work item field, you have a few possibilities:

* To trigger on a change in any field, remove the `changedFields` filter.

* To trigger on multiple fields, but not all fields, use one of the following options:

  * Use the Azure DevOps Services REST API to create a custom payload for each field of interest. For more information, see [Subscriptions - Create](/rest/api/azure/devops/hooks/subscriptions/create).

  * To create a service hook subscription for each field of interest, take the following steps for each field:

    1. Go to your project, select **Project settings**, and then select **Service hooks**.

    1. Select **Create subscription**.

    1. Select **Web Hooks**, and then select **Next**.

    1. Under **Trigger on this type of event**, select **Work item updated**.

    1. Under **Field**, select a field you want to trigger on. For example, if you want to track changes in the work item state, select **State**.

    1. Configure any other filters you want to use by specifying an area path, a work item type, or a tag, and then select **Next**.

    1. In the **Action** dialog, configure the settings, and then select **Test** or **Finish**.

<a name="workitem.commented"></a>

### Work item commented on

Event: A work item is commented on.

* Publisher ID: `tfs`
* Event ID: `workitem.commented`
* Resource name: `workitem`

#### Settings

* `areaPath`: Include only events for work items under a specific area path.
* `commentPattern`: Include only events for work items with a comment that contains a specific string.
* `workItemType`: Include only events for work items of a specific type.
* `tag`: Include only events for work items that contain a specific tag.

#### Sample payload

```json
{
  "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
  "eventType": "workitem.commented",
  "publisherId": "tfs",
  "scope": "all",
  "message": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) commented on by Jamal Hartnett."
  },
  "detailedMessage": {
    "text": "Bug #5 (Some great new idea!) commented on by Jamal Hartnett.\r\n(https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5)\r\nThis is a great new idea",
    "html": "<a href=\"https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5&amp;id=5\">Bug #5</a> (Some great new idea!) commented on by Jamal Hartnett.<br/>This is a great new idea",
    "markdown": "[Bug #5](https://dev.azure.com/fabrikam-fiber-inc/web/wi.aspx?pcguid=e4e4e4e4-ffff-aaaa-bbbb-c5c5c5c5c5c5) (Some great new idea!) commented on by Jamal Hartnett.\r\nThis is a great new idea"
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
        "href": "https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection/_apis/wit/f5f5f5f5-aaaa-bbbb-cccc-d6d6d6d6d6d6/workItemTypes/Bug"
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
          "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
      },
      "account": {
          "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
      },
      "project": {
          "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
      }
  },
  "createdDate": "2024-09-19T13:03:28.9695265Z"
}
```

::: moniker range="=azure-devops"

## Advanced security

The following advanced security events are available for use in service hooks that you create by using the UI.

### Advanced security alert created

Event: An advanced security alert is created.

* Publisher ID: `advsec`
* Event ID: `ms.vss-alerts.alert-created-event`
* Resource name: `resource`

#### Settings

* `repository`: Include only events for alerts that are created in a specific repository.
* `branch`: Include only events for alerts that are created in a specific branch.
* `alertType`: Include only events for alerts of a specific type.
  * Valid values: 
    * `Unknown` 
    * `Dependency` 
    * `Secret` 
    * `Code` 
* `severity`: Include only events for alerts with a specific severity.
  * Valid values: 
    * `Low` 
    * `Medium` 
    * `High` 
    * `Critical` 
    * `Note` 
    * `Warning` 
    * `Error` 
    * `Undefined` 

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-alerts.alert-created-event",
    "publisherId": "advsec",
    "message": {
        "text": "New alert is created",
        "html": "New alert is created",
        "markdown": "New alert is created"
    },
    "detailedMessage": {
        "text": "New alert is created\r\n\r\n- Alert status: Created\r\n",
        "html": "New alert is created\r\n\r\n- Alert status: Created\r\n",
        "markdown": "New alert is created\r\n\r\n- Alert status: Created\r\n"
    },
    "resource": {
        "alertId": 1,
        "severity": "critical",
        "title": "Alert title",
        "tools": [
            {
                "name": "codeql",
                "rules": [
                    {
                        "opaqueId": null,
                        "friendlyName": "codeql rule",
                        "description": null,
                        "resources": null,
                        "helpMessage": "update the version",
                        "tags": null,
                        "additionalProperties": null
                    }
                ]
            }
        ],
        "dismissal": {
            "dismissalId": 1,
            "message": "Fixed",
            "stateChangedBy": "66aa66aa-bb77-cc88-dd99-00ee00ee00ee",
            "stateChangedByIdentity": null,
            "requestedOn": null,
            "dismissalType": "fixed"
        },
        "repositoryUrl": "https://dev.azure.com/test/test/_git/test",
        "gitRef": "testRef",
        "alertType": "code",
        "firstSeenDate": null,
        "lastSeenDate": null,
        "fixedDate": null,
        "introducedDate": null,
        "state": "fixed",
        "physicalLocations": null,
        "logicalLocations": null
    },
    "resourceVersion": "1.0",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-09T18:22:39.862Z"
}
```

### Advanced security alert state changed

Event: The state of an advanced security alert changes.

* Publisher ID: `advsec`
* Event ID: `ms.vss-alerts.alert-state-changed-event`
* Resource name: `resource`

#### Settings

* `repository`: Include only events for alerts that are associated with a specific repository.
* `branch`: Include only events for alerts that are associated with a specific branch.
* `alertType`: Include only events for alerts of a specific type.
  * Valid values: 
    * `Unknown` 
    * `Dependency` 
    * `Secret` 
    * `Code` 
* `severity`: Include only events for alerts with a specific severity.
  * Valid values: 
    * `Low` 
    * `Medium` 
    * `High` 
    * `Critical` 
    * `Note` 
    * `Warning` 
    * `Error` 
    * `Undefined` 
* `state`: Include only events for alerts with a specific new state.
  * Valid values: 
    * `Unknown`
    * `Active`
    * `Dismissed`
    * `Fixed`
    * `AutoDismissed`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-alerts.alert-state-changed-event",
    "publisherId": "advsec",
    "message": {
        "text": "Alert's state is changed",
        "html": "Alert's state is changed",
        "markdown": "Alert's state is changed"
    },
    "detailedMessage": {
        "text": "Alert's state is changed\r\n\r\n- Alert status: State Changed\r\n",
        "html": "Alert's state is changed\r\n\r\n- Alert status: State Changed\r\n",
        "markdown": "Alert's state is changed\r\n\r\n- Alert status: State Changed\r\n"
    },
    "resource": {
        "alertId": 1,
        "severity": "critical",
        "title": "Alert title",
        "tools": [
            {
                "name": "codeql",
                "rules": [
                    {
                        "opaqueId": null,
                        "friendlyName": "codeql rule",
                        "description": null,
                        "resources": null,
                        "helpMessage": "update the version",
                        "tags": null,
                        "additionalProperties": null
                    }
                ]
            }
        ],
        "dismissal": {
            "dismissalId": 1,
            "message": "Fixed",
            "stateChangedBy": "66aa66aa-bb77-cc88-dd99-00ee00ee00ee",
            "stateChangedByIdentity": null,
            "requestedOn": null,
            "dismissalType": "fixed"
        },
        "repositoryUrl": "https://dev.azure.com/test/test/_git/test",
        "gitRef": "testRef",
        "alertType": "code",
        "firstSeenDate": null,
        "lastSeenDate": null,
        "fixedDate": null,
        "introducedDate": null,
        "state": "fixed",
        "physicalLocations": null,
        "logicalLocations": null
    },
    "resourceVersion": "1.0",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-09T18:26:56.647Z"
}
```

### Advanced security alert updated

Event: An advanced security alert is updated.

* Publisher ID: `advsec`
* Event ID: `ms.vss-alerts.alert-updated-event`
* Resource name: `resource`

#### Settings

* `repository`: Include only events for alerts associated with a specific repository.
* `branch`: Include only events for alerts associated with a specific branch.
* `alertType`: Include only events for alerts of a specific type.
  * Valid values: 
    * `Unknown` 
    * `Dependency` 
    * `Secret` 
    * `Code` 
* `severity`: Include only events for alerts with a specific severity.
  * Valid values: 
    * `Low` 
    * `Medium` 
    * `High` 
    * `Critical` 
    * `Note` 
    * `Warning` 
    * `Error` 
    * `Undefined`

#### Sample payload

```json
{
    "id": "a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1",
    "eventType": "ms.vss-alerts.alert-updated-event",
    "publisherId": "advsec",
    "message": {
        "text": "New alert is updated",
        "html": "New alert is updated",
        "markdown": "New alert is updated"
    },
    "detailedMessage": {
        "text": "New alert is updated\r\n\r\n- Alert status: Updated\r\n",
        "html": "New alert is updated\r\n\r\n- Alert status: Updated\r\n",
        "markdown": "New alert is updated\r\n\r\n- Alert status: Updated\r\n"
    },
    "resource": {
        "alertId": 1,
        "severity": "critical",
        "title": "Alert title",
        "tools": [
            {
                "name": "codeql",
                "rules": [
                    {
                        "opaqueId": null,
                        "friendlyName": "codeql rule",
                        "description": null,
                        "resources": null,
                        "helpMessage": "update the version",
                        "tags": null,
                        "additionalProperties": null
                    }
                ]
            }
        ],
        "dismissal": {
            "dismissalId": 1,
            "message": "Fixed",
            "stateChangedBy": "66aa66aa-bb77-cc88-dd99-00ee00ee00ee",
            "stateChangedByIdentity": null,
            "requestedOn": null,
            "dismissalType": "fixed"
        },
        "repositoryUrl": "https://dev.azure.com/test/test/_git/test",
        "gitRef": "testRef",
        "alertType": "code",
        "firstSeenDate": null,
        "lastSeenDate": null,
        "fixedDate": null,
        "introducedDate": null,
        "state": "fixed",
        "physicalLocations": null,
        "logicalLocations": null
    },
    "resourceVersion": "1.0",
    "resourceContainers": {
        "collection": {
            "id": "b1b1b1b1-cccc-dddd-eeee-f2f2f2f2f2f2"
        },
        "account": {
            "id": "bbbb1b1b-cc2c-dd3d-ee4e-ffffff5f5f5f"
        },
        "project": {
            "id": "00aa00aa-bb11-cc22-dd33-44ee44ee44ee"
        }
    },
    "createdDate": "2025-06-09T18:31:56.933Z"
}
```

::: moniker-end

## Resource containers

Each event payload contains a `resourceContainers` dictionary that includes the IDs of the project, collection, account, or server where the event originates. 

In some products and environments, the dictionary also includes a `baseUrl` field for each entry. That field provides the full URL to the container. You can use this URL to create a connection to the container to make REST API calls.

## Related content

* [Integrate with service hooks](overview.md)
* [Create a service hook subscription programmatically](create-subscription.md)
* [Service hook consumers](consumers.md)