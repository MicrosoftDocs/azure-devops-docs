---
title: Process parameters
ms.custom: seodec18
description: You can link all important fields for tasks used across the build definition as process parameters
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 9/21/2018
monikerRange: '>= tfs-2017'
---

# Process parameters

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

> [!NOTE]
> 
> This guidance applies to TFS version 2017.3 and newer.
> 
> This guidance applies only to designer pipelines. It does not apply to YAML pipelines.

You can link all important arguments for tasks used across the build definition as process parameters, which are then shown at one place - the Pipeline view.
This means you can quickly edit these arguments without needing to click through all the tasks.

Templates come with a set of predefined process parameters.
::: moniker range="<= tfs-2018"

![Schematic showing tasks](_img/2017-user-experience/process-parameters-view-1.png)
::: moniker-end

::: moniker range="> tfs-2018"
To link additional arguments across all tasks to new or existing process parameters, select **Link** from the task argument.
::: moniker-end
::: moniker range="<= tfs-2018"
You can link additional arguments across all tasks to new or existing process parameters.

![Schematic showing tasks](_img/2017-user-experience/tasks-linking.png)

![Schematic showing tasks](_img/2017-user-experience/process-parameters-view-2.png)
::: moniker-end

::: moniker range="> tfs-2018"
Select **Unlink** if you need to disconnect an argument from a process parameter.
::: moniker-end
::: moniker range="<= tfs-2018"
You can also unlink arguments from process parameters.

![Schematic showing tasks](_img/2017-user-experience/tasks-unlinking.png)
::: moniker-end

Process parameters differ from variables in the kind of input supported by them. Variables only take in string inputs while process parameters in addition to string inputs support additional data types like check boxes and drop-down list boxes.
