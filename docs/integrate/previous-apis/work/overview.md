---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Overview | REST API Reference for Team Foundation Server
description: Work with work tooling programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: fe538cca-d062-445e-8dc2-852a6758f5c3
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

## Work resources

* [Boards](./boards.md)
  * [Columns](./columns.md)
  * [Rows](./rows.md)    
  * [Card fields](./card-fields.md)
  * [Card rules](./card-rules.md)
  * [Chart](./charts.md)
* [Team settings](./team-settings.md)
  * [Team field values](./team-field-values.md)
  * [Team iterations](./iterations.md)
  *  [Team capacity](./capacity.md)
  * [Team days off](./team-days-off.md)
* [Backlog Configuration](./backlog-configuration.md)
* [Process Configuration](./process-configuration.md) (Deprecated)
* [Plans](./plans.md)
  * [Delivery timeline](./delivery-timeline.md)

## Common tasks with the board API

### Add a column to a board
1. Look up the [boards](./boards.md#getalistofboards) for a team.
2. Get [column settings](./columns.md#getcolumnsonaboard) for a board.
3. Add [a column](./columns.md#updatecolumnsonaboard) to a board by including the new column's data to existing columns received in get column settings.

### Update board row settings
1. Look up the [boards](./boards.md#getalistofboards) for a team.
2. Get [row settings](./rows.md#getrowsonaboard) for a board.
3. Update [row settings](./rows.md#updaterowsonaboard) for a board.

### Update card fields on a board
1. Get [card fields](./card-fields.md#getcardfieldsforaboard) for a board.
2. Update [card fields](./card-fields.md#updatecardfieldsonaboard) for a board.

### Update card style rules on a board
1. Get [card styling rules](./card-rules.md#getcardstylingrulesforaboard) for a board.
2. Update [card styling rules](./card-rules.md#updatecardstylingrulesonaboard) for a board.

### Update chart settings
1. List all the [charts](./charts.md#getchartsonaboard) for a board.
2. Get a [specific chart](./charts.md#getachartbyname) by name a board.
3. Update [chart settings](./charts.md#updateacumulativeflowchart) for a specific chart.

## Team settings

[Projects](../tfs/projects.md) have one or more [teams](../tfs/teams.md) that contribute to that project. This API enables editing of team settings (not project or process settings). 

| Setting Name  | Description | Reference
|:-----------   |:---------   |:---------
| backlogIteration | The base iteration used for portfolio backlogs. | [Team Settings](./team-settings.md)
| bugsBehavior  | Change the way bugs behave on the boards and in the backlogs (AsRequirements, AsTasks, Off). | [Team Settings](./team-settings.md)
| workingDays   | The days of the week that a team's members work. | [Team Settings](./team-settings.md)
| backlogVisibilities | Which backlogs are visible in the team's backlog navigation. | [Team Settings](./team-settings.md)
| teamFieldValues | The list of the team field values selected by a team. This defines what items are owned by a team. | [Team Field Values](./team-field-values.md)
| defaultValue  | The default value for the team field. | [Team Field Values](./team-field-values.md)
| iterations    | The list of iterations to which the team is subscribed. | [Team Iterations](./iterations.md)
| teamDaysOff   | The a team's days off within an iteration. | [Team Days Off](./team-days-off.md)
| capacities    | The list of team members' capacity information. | [Team Capacity](./capacity.md#GetTeamMembersCapacity)
| activity      | The type of work being done by a team member. | [Team Capacity](./capacity.md#GetTeamMemberCapacity)
| capacityPerDay| The amount of work a team member can do in a day (per activity). | [Team Capacity](./capacity.md#GetTeamMemberCapacity)
| daysOff       | The days in a sprint that a team member is taking off. | [Team Capacity](./capacity.md#GetTeamMemberCapacity)


## Common tasks with the Team Settings API

### Change the [bug behavior](./team-settings.md#SetTeamSettings) for the team

1. Get a list of [teams](../tfs/projects.md) in a project.
2. Get the [team settings](./team-settings.md#GetTeamSettings) of a team.
3. Set the [team settings](./team-settings.md#SetTeamSettings) of a team.



### Get the list of areas or team field values that a team owns

1. Get a list of [teams](../tfs/projects.md) in a project.
2. Get the [areas or team field values](./team-field-values.md#GetTeamFieldValues) of a team.



### Change a team's ownership of areas or team field values

1. Get a list of [teams](../tfs/projects.md) in a project.
2. Get a list of [areas or team field values](./team-field-values.md) of a team.
3. Set the [areas or team field values](./team-field-values.md#UpdateTeamFieldValues) of a team.



### Add an iteration to the set of team iterations

1. Get a list of [teams](../tfs/projects.md) in a project.
2. Get a list of [iterations](./iterations.md) of a team.
3. Set the [iterations](./iterations.md#AddTeamIteration) of a team.



### Change a team member's capacity per day

1. Get a list of [teams](../tfs/projects.md) in a project.
2. Get a list of [iterations](./iterations.md) of a team.
3. Get the [capacity](./capacity.md#GetTeamMembersCapacity) information for that iteration.
3. Set the [capacity](./capacity.md#UpdateTeamMemberCapacity) of one team member for that iteration.



## Common tasks with the Process Configuration API

### Investigate what field maps to "Effort" in the agile experiences
1. Get a list of [projects](../tfs/projects.md) in a collection
2. Get the [process configuration](./process-configuration.md) for a project.
3. Find the typeField mapping for "Effort".
