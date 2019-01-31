---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Projects and Teams Overview | REST API Reference for Team Foundation Server
description: Work with teams, projects, and project collections programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 2FFBCD08-28E6-4EB4-86E4-557E416E4380
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Projects and teams

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


A VSTS organization has one or more [projects](./projects.md). Each project has one or more [teams](./teams.md) that contribute to that project.

![Project and team resources](./_img/projects-and-teams.png)

* [Project Collections](./project-collections.md)
* [Projects](./projects.md)
* [Teams](./teams.md)
* [Processes](./processes.md)

## Common tasks

### Get a list of projects

Get the [projects](./projects.md) in the organization. 

### Get a project's source control provider

Get a [project's capabilities](./projects.md#withcapabilities) to see whether it uses Git or TFVC for source control.

### Get the teams in a project

1. Get a list of [teams](./teams.md) in a project.
2. Get the [members](./teams.md#GetaTeamMembers) of a team.

### Get the project collection

Each project is in a project collection.
Right now, a VSTS organization just has one project collection named "DefaultCollection" so you can use that assumption when you call other APIs.
You can also look up the [collection](./project-collections.md).

### Create a project

Create a [project](./projects.md#createateamproject) in a VSTS organization. Currently, this is only supported on VSTS, but not on Team Foundation Server.

### Update a project

Projects can be updated:

1. Update the project [description](./projects.md#UpdateDescription) or [name](./projects.md#UpdateName)
2. The update is asynchronous, so use the returned [operation](./projects.md#GetOperation)
to get the status of the update.

An operation can be in one of the following states:

| State Name    | Explanation
|:--------------|:-----------------
| Queued           | Project update has been queued to run. 
| InProgress | Project update currently being executed. 
| Succeeded      | Project update was successfully completed. 
| Failed    | Project updated did not succeed. 

