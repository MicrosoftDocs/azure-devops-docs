---
title: TFS/DistributedTask/Contracts TaskExecution API | Extensions for Azure DevOps Services
ms.assetid: a3374279-ec5b-de03-3609-3650d3610de5
ms.prod: devops
ms.technology: devops-ecosystem
generated: true
ms.manager: jillfra
author: elbatk
ms.topic: article
ms.author: elbatk
ms.date: 08/04/2016
---

# TaskExecution

Module path: `TFS/DistributedTask/Contracts`


### Members

* `execTask`: [TaskReference](../../../TFS/DistributedTask/Contracts/TaskReference.md). The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline

* `platformInstructions`: {[key: string]: {[key: string]: string}}. If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask&quot;, assemblyName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll&quot; } net20: { typeName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask&quot;, assemblyName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll&quot; } java: { jar: &quot;powershelltask.tasks.automation.teamfoundation.microsoft.com&quot;, } node: { script: &quot;powershellhost.js&quot;, }

