---
title: New Build Editor | VSTS or Team Foundation Server
description: Preview this version of a new experience for creating and editing build definitions for Team Foundation Build (TFBuild) on VSTS
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 01/03/2017
monikerRange: 'tfs-2017 || vsts'
---


# New Build Editor

**VSTS | TFS 2017.3**

> [!IMPORTANT]
>
> Our thanks to those of you who tried the early previews of our new build editor and gave us feedback. We're getting ready to retire the old build editor. So if you haven't yet gotten familiar with the new build editor, we encourage you to do so now.

We have launched a preview version of a new experience for creating and editing build definitions in VSTS. 
You can explore this experience by creating a new build definition, or by opening your existing build definitions in the new editor after turning it on 
from the Build Definitions page. 

 ![Schematic showing tasks](_img/2017-user-experience/opt-in.png)
 
You can also enable this editor from the [preview features](../../../project/navigation/preview-features.md) menu. 

## What's in the new build editor

* **Quickly get started by searching for templates.** You can search for one of the out-of-the-box or customized templates and choose
'Apply', or simply choose 'empty template' to get started.

 ![Schematic showing template selection](_img/2017-user-experience/apply-template.png)


* **Working with tasks is now a breeze.** You can now search for tasks and add them to a specified location (indicated by the blue line) by using the 'Add' button or you can 
directly drag and drop them to your desired location. You can also reorder tasks in the build definition by using drag and drop or clone them using Ctrl + drag and drop.

 ![Schematic showing tasks](_img/2017-user-experience/tasks.png)

* **Getting started made easy with 'Process parameters'.** When you start with one of the out-of-the-box templates, 
the most important fields across all tasks in the template are displayed in a single view called "Process". You can also link additional fields across all tasks to new or existing 
process parameters to bubble them to the Process view. [More details](#what-are-process-parameters)

 ![Schematic showing tasks](_img/2017-user-experience/process-parameters-view.png)

* **Configuring sources is now in-context.** 
You can configure the sources to build along with tasks. If you're pulling sources from GitHub, external
Git, or subversion repos, you can configure connections to those endpoints in-line - without going to Services tab in Admin hub.

 ![Schematic showing tasks](_img/2017-user-experience/configuring-sources.png)
 

<a name="parameters"></a>
## What are process parameters?

You can link all important fields for tasks used across the build definition as process parameters, which are then shown at one place - the Process view. 
This means you can quickly edit these fields without needing to click through all the tasks, making getting started simple. 
* Out-of-the-box templates come with a set of pre-defined process parameters. 

 ![Schematic showing tasks](_img/2017-user-experience/process-parameters-view-1.png)

* You can also link additional fields across all tasks to new or existing process parameters. 

 ![Schematic showing tasks](_img/2017-user-experience/tasks-linking.png)
 
 ![Schematic showing tasks](_img/2017-user-experience/process-parameters-view-2.png)
  
* Similarly, you can also unlink fields from process parameters.

 ![Schematic showing tasks](_img/2017-user-experience/tasks-unlinking.png)

## How are process parameters different from variables?
Process parameters differ from variables in the kind of input supported by them. Variables only take in string inputs while process parameters in addition to string inputs support 
additional data types like checkboxes and picklists. 

Process parameters can be only be created and edited using the new build editor. They are not available in the existing build editor.

**Please Note:** Currently support for adding dependent tasks fields as process parameters is not available. This support will get added in the coming sprints. 


