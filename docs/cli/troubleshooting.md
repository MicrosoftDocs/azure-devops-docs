---
title: Troubleshoot Azure DevOps command line interface
titleSuffix: Azure DevOps 
description: Azure DevOps extension command line interface troubleshooting 
ms.topic: troubleshooting 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Troubleshoot common errors in Azure DevOps CLI

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

You can resolve most common errors encountered when running the team-level `az devops boards area` and `az devops boards iteration` commands by following the guidance provided in this article. 

## Team-level areas 

### Error: DefaultValue

You receive the `DefaultValue` error message when you try to add your first area path to a team without passing the flag `--set-as-default`.

**Resolution:** 

Include the `--set-as-default` argument when adding an area to a team or use `az boards area team update` command to change the default area for the team. Enter `az boards area team add -h` for command usage. 


### Error: TF400499 

You may encounter the following error when you add, remove, or update a team area. 

`TF400499: You have not set your team field.`
 
**Resolution:** 

The `--path parameter` for a team area must be `\ProjectName\RootAreaName\ChildArea1` and not `\ProjectName\Area\RootAreaName\ChildArea1`. Team area commands don't expect the `Area` keyword to be passed in the `--path` parameter.

## Team-level iterations


### Error: VS1530019: Cannot find iteration  

When you try to add a backlog iteration to a team, you may encounter the following error:

`VS1530019: Cannot find iteration with id 'b1e33737-e943-xxxx-xxxx-e3f1cbaxxxx'. The iteration might have been deleted, or it might not be selected for your team.`

**Resolution:** 

You can only add child iterations of a backlog iteration to your team. Create child iterations of your backlog iteration using the following command: 

`az boards iteration project create --name "child_iteration_name" --path <BacklogIterationPath>`

Get the identifier of the iteration and add it to your team using `az boards iteration team add -h` command.
 

## Related articles
- [az boards area](/cli/azure/boards/area)
- [az boards iteration](/cli/azure/boards/iteration)
- [Define area paths and assign to a team](../organizations/settings/set-area-paths.md)
- [Define Iteration Paths and configure team iterations](../organizations/settings/set-iteration-paths-sprints.md) 