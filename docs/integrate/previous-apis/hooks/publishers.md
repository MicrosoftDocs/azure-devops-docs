---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Hook Publishers | REST API Reference for Team Foundation Server
description: Work with service hook publishers programmatically using the REST APIs for Team Foundation Server.
ms.assetid: F61EDE31-0F8D-4C4E-AE03-B4480C51C5FD
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hook publishers

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

A publisher is a service that publishes events to service hooks. For example, Team Foundation Server is a publisher which sends code, build, work item, and other events.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of publishers
<a name="getalistofpublishers" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/publishers?api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "tfs",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs",
      "name": "Team Foundation Server",
      "description": "Publishes Team Foundation Server events",
      "supportedEvents": [
        {
          "publisherId": "tfs",
          "id": "build.complete",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/build.complete",
          "name": "Build completed",
          "description": "A build completes",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "definitionName",
              "name": "Build Definition",
              "description": "Filter events to include only completed builds for the specified definition",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "buildStatus",
              "name": "Build Status",
              "description": "Filter events to include only completed builds for the specified completion status",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  },
                  {
                    "value": "Succeeded",
                    "displayValue": "Succeeded"
                  },
                  {
                    "value": "PartiallySucceeded",
                    "displayValue": "Partially Succeeded"
                  },
                  {
                    "value": "Failed",
                    "displayValue": "Failed"
                  },
                  {
                    "value": "Stopped",
                    "displayValue": "Stopped"
                  }
                ],
                "isLimitedToPossibleValues": true
              }
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "message.posted",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/message.posted",
          "name": "Team room message posted",
          "description": "Triggers when a message is posted to a team room",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "roomId",
              "name": "Team room",
              "description": "Filter events to include only messages sent to the specified Team room",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "number",
                "isRequired": true
              },
              "values": {
                "defaultValue": "",
                "possibleValues": []
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "messagePattern",
              "name": "Message contains string",
              "description": "The string that must be found in the message",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^[^&<>'\"]*$",
                "patternMismatchErrorMessage": "Value cannot contain any of characters: &, <, >, ' (apostrophe), or \\\" (quote).",
                "maxLength": 1024
              },
              "values": {
                "defaultValue": "",
                "possibleValues": []
              }
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "git.pullrequest.created",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.pullrequest.created",
          "name": "Pull request created",
          "description": "Pull request is created in a git repository",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "repository",
              "name": "Repository",
              "description": "The repository that code was pushed to",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "guid"
              },
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "branch",
              "name": "Target branch",
              "description": "The target branch of the pull request",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "dependencyInputIds": [
                "repository"
              ],
              "hasDynamicValueInformation": true
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "git.pullrequest.updated",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.pullrequest.updated",
          "name": "Pull request updated",
          "description": "Pull request is updated – status, review list, reviewer vote changed or the source branch is updated with a push",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "repository",
              "name": "Repository",
              "description": "The repository that code was pushed to",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "guid"
              },
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "branch",
              "name": "Target branch",
              "description": "The target branch of the pull request",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "dependencyInputIds": [
                "repository"
              ],
              "hasDynamicValueInformation": true
            },
            {
              "id": "notificationType",
              "name": "Change",
              "description": "The type of pull request change",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  },
                  {
                    "value": "PushNotification",
                    "displayValue": "Source branch updated"
                  },
                  {
                    "value": "ReviewersUpdateNotification",
                    "displayValue": "Reviewers changed"
                  },
                  {
                    "value": "StatusUpdateNotification",
                    "displayValue": "Status changed"
                  },
                  {
                    "value": "ReviewerVoteNotification",
                    "displayValue": "Votes score changed"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              }
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "git.push",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.push",
          "name": "Code pushed",
          "description": "Code is pushed to a git repository",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "repository",
              "name": "Repository",
              "description": "The repository that code was pushed to",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "guid"
              },
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "branch",
              "name": "Branch",
              "description": "The branch that code was pushed into",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "values": {
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true
              },
              "dependencyInputIds": [
                "repository"
              ],
              "hasDynamicValueInformation": true
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "tfvc.checkin",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/tfvc.checkin",
          "name": "Code checked in",
          "description": "A changeset is checked into version control.",
          "supportedResourceVersions": [
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "path",
              "name": "Under path",
              "description": "Filter to checkins that change one or more files under the specified path",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "isRequired": true,
                "pattern": "^\\$\\/[^&<>'\"]*$"
              },
              "values": {
                "defaultValue": "$/"
              }
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "workitem.created",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.created",
          "name": "Work item created",
          "description": "Filter events to include only newly created work items.",
          "supportedResourceVersions": [
            "1.0-preview.2",
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "areaPath",
              "name": "Area path",
              "description": "Filter events to include only work items under the specified area path.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "workItemType",
              "name": "Work item type",
              "description": "Filter events to include only work items of the specified type.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "workitem.commented",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.commented",
          "name": "Work item commented on",
          "description": "Filter events to include only work items commented on.",
          "supportedResourceVersions": [
            "1.0-preview.2",
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "areaPath",
              "name": "Area path",
              "description": "Filter events to include only work items under the specified area path.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "workItemType",
              "name": "Work item type",
              "description": "Filter events to include only work items of the specified type.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "commentPattern",
              "name": "Contains string",
              "description": "The string that must be found in the comment.",
              "inputMode": "textBox",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string",
                "pattern": "^\\s*[^\\s&<>'\"][^&<>'\"]*$",
                "patternMismatchErrorMessage": "Value should contain at least one non whitespace character and cannot contain any of characters: &, <, >, ' (apostrophe), or \" (quote).",
                "minLength": 1,
                "maxLength": 1024
              },
              "values": {
                "defaultValue": "",
                "possibleValues": []
              }
            }
          ]
        },
        {
          "publisherId": "tfs",
          "id": "workitem.updated",
          "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.updated",
          "name": "Work item updated",
          "description": "Filter events to include only changed work items.",
          "supportedResourceVersions": [
            "1.0-preview.2",
            "1.0-preview.1"
          ],
          "inputDescriptors": [
            {
              "id": "areaPath",
              "name": "Area path",
              "description": "Filter events to include only work items under the specified area path.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "workItemType",
              "name": "Work item type",
              "description": "Filter events to include only work items of the specified type.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "hasDynamicValueInformation": true
            },
            {
              "id": "changedFields",
              "name": "Field",
              "description": "Filter events to include only work items with the specified field(s) changed.",
              "inputMode": "combo",
              "isConfidential": false,
              "useInDefaultDescription": false,
              "validation": {
                "dataType": "string"
              },
              "values": {
                "defaultValue": "",
                "possibleValues": [
                  {
                    "value": "",
                    "displayValue": "[Any]"
                  }
                ],
                "isLimitedToPossibleValues": true,
                "isReadOnly": true
              },
              "dependencyInputIds": [
                "workItemType"
              ],
              "hasDynamicValueInformation": true
            }
          ]
        }
      ],
      "inputDescriptors": [
        {
          "id": "projectId",
          "name": "Project",
          "description": "Project to restrict events to",
          "inputMode": "none",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "guid"
          }
        },
        {
          "id": "teamId",
          "name": "Team",
          "description": "Team that the subscription is associated with",
          "inputMode": "none",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "guid"
          }
        }
      ]
    }
  ]
}
```


## Get supported events

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes?api-version=1.0
```

#### Sample response

```json
{
  "count": 9,
  "value": [
    {
      "publisherId": "tfs",
      "id": "build.complete",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/build.complete",
      "name": "Build completed",
      "description": "A build completes",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "definitionName",
          "name": "Build Definition",
          "description": "Filter events to include only completed builds for the specified definition",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "buildStatus",
          "name": "Build Status",
          "description": "Filter events to include only completed builds for the specified completion status",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              },
              {
                "value": "Succeeded",
                "displayValue": "Succeeded"
              },
              {
                "value": "PartiallySucceeded",
                "displayValue": "Partially Succeeded"
              },
              {
                "value": "Failed",
                "displayValue": "Failed"
              },
              {
                "value": "Stopped",
                "displayValue": "Stopped"
              }
            ],
            "isLimitedToPossibleValues": true
          }
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "message.posted",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/message.posted",
      "name": "Team room message posted",
      "description": "Triggers when a message is posted to a team room",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "roomId",
          "name": "Team room",
          "description": "Filter events to include only messages sent to the specified Team room",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "number",
            "isRequired": true
          },
          "values": {
            "defaultValue": "",
            "possibleValues": []
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "messagePattern",
          "name": "Message contains string",
          "description": "The string that must be found in the message",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "pattern": "^[^&<>'\"]*$",
            "patternMismatchErrorMessage": "Value cannot contain any of characters: &, <, >, ' (apostrophe), or \\\" (quote).",
            "maxLength": 1024
          },
          "values": {
            "defaultValue": "",
            "possibleValues": []
          }
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "git.pullrequest.created",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.pullrequest.created",
      "name": "Pull request created",
      "description": "Pull request is created in a git repository",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "repository",
          "name": "Repository",
          "description": "The repository that code was pushed to",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "guid"
          },
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "branch",
          "name": "Target branch",
          "description": "The target branch of the pull request",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "dependencyInputIds": [
            "repository"
          ],
          "hasDynamicValueInformation": true
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "git.pullrequest.updated",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.pullrequest.updated",
      "name": "Pull request updated",
      "description": "Pull request is updated – status, review list, reviewer vote changed or the source branch is updated with a push",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "repository",
          "name": "Repository",
          "description": "The repository that code was pushed to",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "guid"
          },
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "branch",
          "name": "Target branch",
          "description": "The target branch of the pull request",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "dependencyInputIds": [
            "repository"
          ],
          "hasDynamicValueInformation": true
        },
        {
          "id": "notificationType",
          "name": "Change",
          "description": "The type of pull request change",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              },
              {
                "value": "PushNotification",
                "displayValue": "Source branch updated"
              },
              {
                "value": "ReviewersUpdateNotification",
                "displayValue": "Reviewers changed"
              },
              {
                "value": "StatusUpdateNotification",
                "displayValue": "Status changed"
              },
              {
                "value": "ReviewerVoteNotification",
                "displayValue": "Votes score changed"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          }
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "git.push",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/git.push",
      "name": "Code pushed",
      "description": "Code is pushed to a git repository",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "repository",
          "name": "Repository",
          "description": "The repository that code was pushed to",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "guid"
          },
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "branch",
          "name": "Branch",
          "description": "The branch that code was pushed into",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "values": {
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true
          },
          "dependencyInputIds": [
            "repository"
          ],
          "hasDynamicValueInformation": true
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "tfvc.checkin",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/tfvc.checkin",
      "name": "Code checked in",
      "description": "A changeset is checked into version control.",
      "supportedResourceVersions": [
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "path",
          "name": "Under path",
          "description": "Filter to checkins that change one or more files under the specified path",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "isRequired": true,
            "pattern": "^\\$\\/[^&<>'\"]*$"
          },
          "values": {
            "defaultValue": "$/"
          }
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "workitem.created",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.created",
      "name": "Work item created",
      "description": "Filter events to include only newly created work items.",
      "supportedResourceVersions": [
        "1.0-preview.2",
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "areaPath",
          "name": "Area path",
          "description": "Filter events to include only work items under the specified area path.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "workItemType",
          "name": "Work item type",
          "description": "Filter events to include only work items of the specified type.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "workitem.commented",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.commented",
      "name": "Work item commented on",
      "description": "Filter events to include only work items commented on.",
      "supportedResourceVersions": [
        "1.0-preview.2",
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "areaPath",
          "name": "Area path",
          "description": "Filter events to include only work items under the specified area path.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "workItemType",
          "name": "Work item type",
          "description": "Filter events to include only work items of the specified type.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "commentPattern",
          "name": "Contains string",
          "description": "The string that must be found in the comment.",
          "inputMode": "textBox",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string",
            "pattern": "^\\s*[^\\s&<>'\"][^&<>'\"]*$",
            "patternMismatchErrorMessage": "Value should contain at least one non whitespace character and cannot contain any of characters: &, <, >, ' (apostrophe), or \" (quote).",
            "minLength": 1,
            "maxLength": 1024
          },
          "values": {
            "defaultValue": "",
            "possibleValues": []
          }
        }
      ]
    },
    {
      "publisherId": "tfs",
      "id": "workitem.updated",
      "url": "https://mytfsserver/DefaultCollection/_apis/hooks/publishers/tfs/eventTypes/workitem.updated",
      "name": "Work item updated",
      "description": "Filter events to include only changed work items.",
      "supportedResourceVersions": [
        "1.0-preview.2",
        "1.0-preview.1"
      ],
      "inputDescriptors": [
        {
          "id": "areaPath",
          "name": "Area path",
          "description": "Filter events to include only work items under the specified area path.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "workItemType",
          "name": "Work item type",
          "description": "Filter events to include only work items of the specified type.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "hasDynamicValueInformation": true
        },
        {
          "id": "changedFields",
          "name": "Field",
          "description": "Filter events to include only work items with the specified field(s) changed.",
          "inputMode": "combo",
          "isConfidential": false,
          "useInDefaultDescription": false,
          "validation": {
            "dataType": "string"
          },
          "values": {
            "defaultValue": "",
            "possibleValues": [
              {
                "value": "",
                "displayValue": "[Any]"
              }
            ],
            "isLimitedToPossibleValues": true,
            "isReadOnly": true
          },
          "dependencyInputIds": [
            "workItemType"
          ],
          "hasDynamicValueInformation": true
        }
      ]
    }
  ]
}
```



