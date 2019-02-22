---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Process Configuration | REST API Reference for Team Foundation Server
description: Work with Process Configuration programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 086ce0df-bb60-4cd0-99de-4d54cf348985
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

[!INCLUDE [latest](./_data/see-latest.md)]

# Process Configuration

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a project's process configuration 
<a id="GetProcessConfiguration"></a>

[Projects](../tfs/projects.md) have process configuration, process configuration defines the behavior of backlogs and boards.  

| Setting Name       | Description 
|:------------------ |:---------   
| typeFields         | Specifies a collection of TypeFields. TypeFields are abstractions of customizable fields. For example, the type of the "Story points" field is "Effort". 
| taskBacklog        | Specifies the state and work item types for sprint backlog. 
| requirementBacklog | Specifies the state and work item types for requirement backlog. 
| portfolioBacklogs  | Specifies the state and work item types for portfolio backlogs. 
| bugWorkItems       | Specifies the state and work item types for bugs.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/Work/ProcessConfiguration?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber/_apis/work/processconfiguration?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "typeFields": {
    "Effort": {
      "referenceName": "Microsoft.VSTS.Scheduling.StoryPoints",
      "name": "Story Points",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.StoryPoints"
    },
    "Order": {
      "referenceName": "Microsoft.VSTS.Common.StackRank",
      "name": "Stack Rank",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.StackRank"
    },
    "RemainingWork": {
      "referenceName": "Microsoft.VSTS.Scheduling.RemainingWork",
      "name": "Remaining Work",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Scheduling.RemainingWork"
    },
    "Team": {
      "referenceName": "System.AreaPath",
      "name": "Area Path",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/System.AreaPath"
    },
    "Activity": {
      "referenceName": "Microsoft.VSTS.Common.Activity",
      "name": "Activity",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/fields/Microsoft.VSTS.Common.Activity"
    }
  },
  "taskBacklog": {
    "name": "Tasks",
    "referenceName": "Microsoft.TaskCategory",
    "workItemTypes": [
      {
        "name": "Task",
        "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/wit/workItemTypes/Task"
      }
    ]
  },
  "requirementBacklog": {
    "name": "Stories",
    "referenceName": "Microsoft.RequirementCategory",
    "workItemTypes": [
      {
        "name": "User Story",
        "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/wit/workItemTypes/User%20Story"
      }
    ]
  },
  "portfolioBacklogs": [
    {
      "name": "Epics",
      "referenceName": "Microsoft.EpicCategory",
      "workItemTypes": [
        {
          "name": "Epic",
          "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/wit/workItemTypes/Epic"
        }
      ]
    },
    {
      "name": "Features",
      "referenceName": "Microsoft.FeatureCategory",
      "workItemTypes": [
        {
          "name": "Feature",
          "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/wit/workItemTypes/Feature"
        }
      ]
    }
  ],
  "bugWorkItems": {
    "name": "Bugs",
    "referenceName": "Microsoft.BugCategory",
    "workItemTypes": [
      {
        "name": "Bug",
        "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/wit/workItemTypes/Bug"
      }
    ]
  },
  "url": "https://mytfsserver/DefaultCollection/60a4cee6-bcb6-4c30-9699-5e76c0d064ce/_apis/work/processconfiguration"
}
```
