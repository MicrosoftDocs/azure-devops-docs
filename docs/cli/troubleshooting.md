---
title: Troubleshoot Azure DevOps command line interface
titleSuffix: Azure DevOps 
description: Azure DevOps extension command line interface troubleshooting 
ms.topic: troubleshooting 
ms.manager: jillfra
ms.prod: devops 
ms.technology: devops-ref
ms.manager: jillfra 
ms.author: geverghe
author: KathrynEE
ms.date: 06/18/2019
---

# Troubleshoot common errors in Azure DevOps CLI

## Boards - Iterations and Area commands

| Command group        | Error                                                                                                                                                                | Scenario                                                                                                                                                                                               | Fix/Workaround                                                                                                                                                                                                                                                                                                                   |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Team level iterations| `VS1530019: Cannot find iteration with id 'b1e33737-e943-xxxx-xxxx-e3f1cbaxxxx'. The iteration might have been deleted, or it might not be selected for your team.` | Cannot find iteration:  When you try to add a backlog iteration to a team. | You can only add child iterations of backlog iteration to your team. Create child iterations of your backlog iteration using command `az boards iteration project create --name "child_iteration_name" --path <BacklogIterationPath>`. Get the identifier of this iteration and add it to your team using `az boards iteration team add -h` command.|
| Team level Areas     | `DefaultValue`  | If you are trying to add your first area to a team without passing the flag --set-as-default. |Pass `--set-as-default` when adding an area to a team or use `az boards area team update` command to change the default area for the team. Refer help for `az boards area team add -h`|
| Team level Areas     | `TF400499: You have not set your team field.`| Adding/removing/updating area to team                      | Be cautious while working with team areas, --path parameter for team area must be `\ProjectName\RootAreaName\ChildArea1` and not `\ProjectName\Area\RootAreaName\ChildArea1`. Team area commands don't expect 'Area' keyword to be passed in the --path parameter. |