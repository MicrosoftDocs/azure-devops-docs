---
title: Manual Intervention task 
description: Pause an active deployment within a stage in a release pipeline in Azure Pipelines and TFS
ms.assetid: 2717783B-7754-4888-9A79-8DB5EC74626A
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '> tfs-2018'
---

# Manual Intervention task

**Azure Pipelines**

Use this task in a release pipeline to pause an active deployment within a stage,
typically to perform some manual steps or actions, and then continue the automated deployment tasks.

## Demands

Can be used in only an [agentless job](../../process/server-phases.md) of a release pipeline. This task is not supported in a build pipeline.

![Configuring a Manual Intervention task](_img/maninter-use-variables.png)

## Arguments

| Parameter | Comments |
| --- | --- |
| **Display name** | Required. The name to display for this task. |
| **Instructions** | Optional. The instruction text to display to the user when the task is activated. |
| **Notify users** | Optional. The list of users that will be notified that the task has been activated. |
| **On timeout** | Required. The action to take (reject or resume) if the task times out with no manual intervention. The default is to reject the deployment. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

The **Manual Intervention** task does not perform deployment actions directly.
Instead, it allows you to pause an active deployment within a stage, typically to perform some
manual steps or actions, and then continue the automated deployment tasks. For example, the user may
need to edit the details of the current release before continuing; perhaps by entering the values for
custom variables used by the tasks in the release.

The **Manual Intervention** task configuration includes an **Instructions** parameter that
can be used to provide related information, or to specify the manual steps
the user should execute during the agentless job. You can configure the task to
send email notifications to users and user groups when it is awaiting intervention,
and specify the automatic response (reject or resume the deployment) after a configurable
timeout occurs.


> You can use built-in and custom variables to generate portions of your instructions.

When the Manual Intervention task is activated during a deployment, it sets
the deployment state to **IN PROGRESS** and displays
a message bar containing  a link that opens the Manual Intervention dialog containing the instructions.
After carrying out the manual steps, the administrator or user can choose to resume the deployment, or reject it.
Users with **Manage deployment** permission on the stage can resume or reject the manual intervention.

For more information about using this task, see [Approvals and gates overview](../../release/approvals/index.md).
