---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Backlog Configuration | REST API Reference for Team Foundation Server
description: Work with Backlog Configuration programmatically using the REST APIs for Team Foundation Server.
ms.contentid: D128FEC4-75F9-432E-8140-091C535C514B
ms.prod: devops
ms.date: 04/28/2017
---

# Backlog Configuration

<b>Team Services</b> 

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

There are three classes of backlogs:
1. Portfolio backlogs that track high-level features, scenarios, or epics.
2. A product or requirement backlog that contains a prioritized list of user stories, deliverables, or work you plan to build or fix.
3. An iteration or sprint backlog that each team is working on during a scheduled sprint.

The hierarchy of work items follows the order above. Work item types on the portfolio levels (e.g. Scenarios) are at the top and work item types on the iteration backlog are on the bottom (e.g. Tasks). For more information on backlogs, see [Backlogs, boards, and plans](https://visualstudio.microsoft.com/en-us/docs/work/backlogs-boards-plans).

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
| backlogFields      | Specifies a collection of typeFields, which are abstractions of customizable fields. For example, the type of the "Story points" field is "Effort". For a complete index of these fields see [Process Configuration XML element reference](https://visualstudio.microsoft.com/en-us/docs/work/reference/process-configuration-xml-element#fields).

[!code-REST [GET__work_backlogconfiguration__JSON](./_data/GET__work_backlogconfiguration.json)]