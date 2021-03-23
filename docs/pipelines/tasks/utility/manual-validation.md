---
title: Manual Validation task 
description: Pause a YAML pipeline run in a stage
ms.assetid: 2717783B-7754-4888-9A79-8DB5EC74626A
ms.topic: reference
ms.custom: seodec18
ms.author: moala
author: Raiyan
ms.date: 11/30/2020
---

# Manual Validation task

**Azure Pipelines**

Use this task in a YAML pipeline to pause a run within a stage, typically to perform some manual actions or validations, and then resume/reject the run.

## Demands

This task is supported only in YAML pipelines. Can be used only in an [agentless job](../../process/phases.md#server-jobs) of a YAML pipeline. 

## Arguments

| Parameter | Comments |
| --- | --- |
| **instructions** | Optional. The instruction text to display to the user when the task is activated. |
| **notifyUsers** | Optional. The list of users that will be notified that the task has been activated. |
| **onTimeout** | Required. The action to take (reject or resume) if the task times out. Defaults to reject. |
| **Control options** | See [Control options](../../process/tasks.md#controloptions) |

The **Manual Validation** task allows you to pause a pipeline run within a stage, typically to perform some
manual steps or actions, and then continue with the pipeline. For example, the user may
need to manually validate  certain deployment configurations before the pipeline starts a long running computational intensive job.

The **Manual Validation** task configuration includes an **instructions** parameter that
can be used to provide related information, or to specify the manual steps
the user should execute during the pause. You can configure the task to
send email notifications to users and user groups when it is awaiting a review,
and specify the automatic response (reject or resume) after a configurable
timeout occurs.

You can specify the timeout value for the task using the `timeoutInMinutes` parameter available in control options. This parameter is optional. 

> [!NOTE]
> For the task to run completely, the timeout value of the job should be higher than the timeout value of the task. See [default job timeout values](../../process/phases.md#timeouts). 

> [!TIP]
> You can use variables to specify email addresses in the `notifyUsers` parameter.

When the Manual validation task is activated during a pipeline, it displays
a message bar containing  a link that opens the Manual validation dialog containing the instructions.
After carrying out the manual steps, the administrator or user can choose to resume the run, or reject it.
Users with 'Queue builds' permission on the pipeline can resume or reject the run.

## Example

#### [YAML](#tab/yaml/)
```yaml
  jobs:
  - job: waitForValidation
    displayName: Wait for external validation
    pool: server
    timeoutInMinutes: 4320 # job times out in 3 days
    steps:
    - task: ManualValidation@0
      timeoutInMinutes: 1440 # task times out in 1 day
      inputs:
        notifyUsers: |
          test@test.com
          example@example.com
        instructions: 'Please validate the build configuration and resume'
        onTimeout: 'resume'
```
   
#### [Classic](#tab/classic/)

This task is not supported in classic pipelines.
