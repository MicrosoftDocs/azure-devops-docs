---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Projects and Teams Overview | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with teams, team projects, and project collections programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 2FFBCD08-28E6-4EB4-86E4-557E416E4380
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Projects and teams

A Visual Studio Team Services account has one or more [team projects](./projects.md). Each team project has one or more [teams](./teams.md) that contribute to that project.

![Project and team resources](./_img/projects-and-teams.png)

* [Project Collections](./project-collections.md)
* [Projects](./projects.md)
* [Teams](./teams.md)
* [Processes](./processes.md)

## Common tasks

### Get a list of team projects

Get the [team projects](./projects.md) in the account.

### Get a project's source control provider

Get a [team project's capabilities](./projects.md#withcapabilities) to see whether it uses Git or TFVC for source control.

### Get the teams in a team project

1. Get a list of [teams](./teams.md) in a team project.
2. Get the [members](./teams.md#GetaTeamMembers) of a team.

### Get the project collection

Each team project is in a project collection.
Right now, a Visual Studio Team Services account just has one project collection named "DefaultCollection" so you can use that assumption when you call other APIs.
You can also look up the [collection](./project-collections.md).

### Create a team project

Create a [team project](./projects.md#createateamproject) in a Visual Studio Team Services account. Currently, this is only supported on Visual Studio Team Services, but not on Team Foundation Server.

### Update a team project

Team projects can be updated:

1. Update the team project [description](./projects.md#UpdateDescription) or [name](./projects.md#UpdateName)
2. The update is asynchronous, so use the returned [operation](./projects.md#GetOperation)
to get the status of the update.

An operation can be in one of the following states:

| State Name    | Explanation
|:--------------|:-----------------
| Queued           | Team project update has been queued to run. 
| InProgress | Team project update currently being executed. 
| Succeeded      | Team project update was successfully completed. 
| Failed    | Team project updated did not succeed. 

