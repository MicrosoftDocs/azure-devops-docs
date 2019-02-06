---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Backlog Configuration | REST API Reference for Team Foundation Server
description: Work with Backlog Configuration programmatically using the REST APIs for Team Foundation Server.
ms.contentid: D128FEC4-75F9-432E-8140-091C535C514B
ms.prod: devops
ms.date: 04/28/2017
---

# Backlog Configuration

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


<b>Team Services</b> 

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

There are three classes of backlogs:
1. Portfolio backlogs that track high-level features, scenarios, or epics.
2. A product or requirement backlog that contains a prioritized list of user stories, deliverables, or work you plan to build or fix.
3. An iteration or sprint backlog that each team is working on during a scheduled sprint.

The hierarchy of work items follows the order above. Work item types on the portfolio levels (e.g. Scenarios) are at the top and work item types on the iteration backlog are on the bottom (e.g. Tasks). For more information on backlogs, see [Backlogs, boards, and plans](https://visualstudio.microsoft.com/docs/work/backlogs-boards-plans).

## Get a project's backlog configuration 

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/Work/BacklogConfiguration?api-version={version}
```

| Setting Name       | Description 
|:------------------ |:---------   
| taskBacklog        | Specifies the work item types for iteration or sprint backlog. 
| requirementBacklog | Specifies the work item types for requirement backlog. 
| portfolioBacklogs  | Specifies the work item types for portfolio backlogs. 
| addPanelFields     | These are the fields that appear in the add work item experience on the backlog.
| columnFields       | These are the fields that appear as columns on the backlog.
| workItemCountLimit | The maximum number of work items that can be on a backlog level.
| rank               | Rank refers to the backlog level's order in the work item type hierarchy. A lower rank means it is a lower level backlog.
| workItemTypeMappedStates | Gives the state category mapping for the states of each work item type.
| backlogFields      | Specifies a collection of typeFields, which are abstractions of customizable fields. For example, the type of the "Story points" field is "Effort". For a complete index of these fields see [Process Configuration XML element reference](https://visualstudio.microsoft.com/docs/work/reference/process-configuration-xml-element#fields).

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/backlogconfiguration?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "taskBacklog": {
    "id": "Microsoft.TaskCategory",
    "name": "Tasks",
    "rank": 1,
    "workItemCountLimit": 1000,
    "addPanelFields": [
      {
        "referenceName": "System.Title",
        "name": "Title",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
      }
    ],
    "columnFields": [
      {
        "columnFieldReference": {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 400
      },
      {
        "columnFieldReference": {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 100
      },
      {
        "columnFieldReference": {
          "referenceName": "System.AssignedTo",
          "name": "Assigned To",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 100
      },
      {
        "columnFieldReference": {
          "referenceName": "Microsoft.VSTS.Scheduling.RemainingWork",
          "name": "Remaining Work",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 50
      }
    ],
    "workItemTypes": [
      {
        "name": "Task",
        "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Task"
      }
    ],
    "defaultWorkItemType": {
      "name": "Task",
      "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Task"
    },
    "color": "F2CB1D"
  },
  "requirementBacklog": {
    "id": "Microsoft.RequirementCategory",
    "name": "Stories",
    "rank": 2,
    "workItemCountLimit": 1000,
    "addPanelFields": [
      {
        "referenceName": "System.Title",
        "name": "Title",
        "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
      }
    ],
    "columnFields": [
      {
        "columnFieldReference": {
          "referenceName": "System.WorkItemType",
          "name": "Work Item Type",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 100
      },
      {
        "columnFieldReference": {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 400
      },
      {
        "columnFieldReference": {
          "referenceName": "System.State",
          "name": "State",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 100
      },
      {
        "columnFieldReference": {
          "referenceName": "Microsoft.VSTS.Scheduling.StoryPoints",
          "name": "Story Points",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 50
      },
      {
        "columnFieldReference": {
          "referenceName": "Microsoft.VSTS.Common.ValueArea",
          "name": "Value Area",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 100
      },
      {
        "columnFieldReference": {
          "referenceName": "System.IterationPath",
          "name": "Iteration Path",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 200
      },
      {
        "columnFieldReference": {
          "referenceName": "System.Tags",
          "name": "Tags",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        },
        "width": 200
      }
    ],
    "workItemTypes": [
      {
        "name": "Ticket",
        "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Ticket"
      },
      {
        "name": "User Story",
        "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/User%20Story"
      }
    ],
    "defaultWorkItemType": {
      "name": "User Story",
      "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/User%20Story"
    },
    "color": "009CCC"
  },
  "portfolioBacklogs": [
    {
      "id": "Microsoft.EpicCategory",
      "name": "My level",
      "rank": 4,
      "workItemCountLimit": 1000,
      "addPanelFields": [
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        }
      ],
      "columnFields": [
        {
          "columnFieldReference": {
            "referenceName": "System.WorkItemType",
            "name": "Work Item Type",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "System.Title",
            "name": "Title",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 400
        },
        {
          "columnFieldReference": {
            "referenceName": "System.State",
            "name": "State",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Scheduling.Effort",
            "name": "Effort",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 50
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Common.BusinessValue",
            "name": "Business Value",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 50
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Common.ValueArea",
            "name": "Value Area",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "System.Tags",
            "name": "Tags",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 200
        }
      ],
      "workItemTypes": [
        {
          "name": "Epic",
          "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Epic"
        }
      ],
      "defaultWorkItemType": {
        "name": "Epic",
        "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Epic"
      },
      "color": "60af49"
    },
    {
      "id": "Microsoft.FeatureCategory",
      "name": "Features",
      "rank": 3,
      "workItemCountLimit": 1000,
      "addPanelFields": [
        {
          "referenceName": "System.Title",
          "name": "Title",
          "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
        }
      ],
      "columnFields": [
        {
          "columnFieldReference": {
            "referenceName": "System.WorkItemType",
            "name": "Work Item Type",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "System.Title",
            "name": "Title",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 400
        },
        {
          "columnFieldReference": {
            "referenceName": "System.State",
            "name": "State",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Scheduling.Effort",
            "name": "Effort",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 50
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Common.BusinessValue",
            "name": "Business Value",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 50
        },
        {
          "columnFieldReference": {
            "referenceName": "Microsoft.VSTS.Common.ValueArea",
            "name": "Value Area",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 100
        },
        {
          "columnFieldReference": {
            "referenceName": "System.Tags",
            "name": "Tags",
            "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields"
          },
          "width": 200
        }
      ],
      "workItemTypes": [
        {
          "name": "Feature",
          "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Feature"
        }
      ],
      "defaultWorkItemType": {
        "name": "Feature",
        "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/wit/workItemTypes/Feature"
      },
      "color": "773B93"
    }
  ],
  "workItemTypeMappedStates": [
    {
      "workItemTypeName": "User Story",
      "states": {
        "New": "Proposed",
        "Active": "InProgress",
        "Resolved": "InProgress",
        "In Progress": "InProgress",
        "Closed": "Completed"
      }
    },
    {
      "workItemTypeName": "Ticket",
      "states": {
        "New": "Proposed",
        "Active": "InProgress",
        "Closed": "Completed"
      }
    },
    {
      "workItemTypeName": "Feature",
      "states": {
        "New": "Proposed",
        "Active": "InProgress",
        "Resolved": "InProgress",
        "Closed": "Completed"
      }
    },
    {
      "workItemTypeName": "Epic",
      "states": {
        "New": "Proposed",
        "Active": "InProgress",
        "Closed": "Completed"
      }
    },
    {
      "workItemTypeName": "Task",
      "states": {
        "New": "Proposed",
        "Active": "InProgress",
        "Closed": "Completed"
      }
    },
    {
      "workItemTypeName": "Bug",
      "states": {
        "Proposed": "Proposed",
        "Testing": "InProgress",
        "Resolved": "Resolved",
        "Closed": "Completed"
      }
    }
  ],
  "backlogFields": {
    "typeFields": {
      "Order": "Microsoft.VSTS.Common.StackRank",
      "Effort": "Microsoft.VSTS.Scheduling.StoryPoints",
      "RemainingWork": "Microsoft.VSTS.Scheduling.RemainingWork",
      "Activity": "Microsoft.VSTS.Common.Activity"
    }
  },
  "bugsBehavior": "asTasks",
  "hiddenBacklogs": [
    "Microsoft.EpicCategory"
  ],
  "url": "https://mytfsserver/DefaultCollection/c3b6da71-2b4a-497b-9137-ba8695203871/_apis/work/backlogconfiguration"
}
```
