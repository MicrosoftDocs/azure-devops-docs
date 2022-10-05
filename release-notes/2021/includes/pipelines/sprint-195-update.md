---
author: gloridelmorales
ms.author: glmorale
ms.date: 11/16/2021
ms.topic: include
---

### Automatic retries for a task

When you have a flaky task that fails intermittently in a pipeline, you may have to re-run the pipeline to have it succeed. In most cases, the best way to address a flaky task or script is by fixing the task or script itself. For instance, if your test task fails in a pipeline because of flaky tests, it is always a good idea to fix the flaky tests and make them more reliable. Similarly, if your script fails once in a while, it is better to fix the script, for instance by introducing retries within the script.

However, there are some cases, where you might want to retry the task. A common use case for this is a task that downloads a package (e.g., NuGet, npm, etc.). We have often observed that these tasks are susceptible to networking failures and to the transient failures on the package hosting servers. We heard your feedback that it would be better to automatically retry such failing tasks without having to restart the entire pipeline again.

Based on your feedback, we've added a feature to automatically retry a task in a pipeline when it fails. If you use YAML pipelines, then you can set this input as follows:

```
- task: <name of task>
   retryCountOnTaskFailure: <max number of retries>
   ...
```

When using classic build or release pipelines, you can set this property under the control options for the task.

Here are a few things to note when using retries:

* The failing task is retried immediately.
* There is no assumption about the idempotency of the task. If the task has side-effects (for instance, if it created an external resource partially), then it may fail the second time it is run.
* There is no information about the retry count made available to the task.
* A warning is added to the task logs indicating that it has failed before it is retried.
* All of the attempts to retry a task are shown in the UI as part of the same task node.

> [!NOTE]
> Requires agent version 2.194.0 or later. Not supported for agentless tasks.

### Consume inputs from another task in a decorator

We recently added a [feature](/azure/devops/extend/develop/add-pipeline-decorator?view=azure-devops&preserve-view=true#specifying-a-target-task) to inject a task automatically into a pipeline before another target task in that pipeline. We are now enhancing that feature by letting you customize that injected task using the input parameters of the target task. The syntax for writing a decorator to do this is as follows:

```
{
    "contributions": [
        {
            "id": <my-required-task>,
            "type": "ms.azure-pipelines.pipeline-decorator",
            "targets": [
                "ms.azure-pipelines-agent-job.pre-task-tasks",
                "ms.azure-pipelines-agent-job.post-task-tasks"
            ],
            "properties": {
                "template": "my-decorator.yml",
                "targettask": <target-task-id>,
                "targettaskinputs": ["<name of input>"]
            }
        }
    ],
    ...
}
```

This feature only works when you use `pre-task-tasks` or `post-task-tasks` as the target for injection and specify the `targettask` in the properties section of the contribution. You can then add an additional property called `targettaskinputs` and specify a list of input parameter names accepted by the target task. These inputs are now made available to the injected task.

A common use case that can be accomplished by such a scenario is as follows. Let's say you want to inject a task that will automatically log the name of the artifact being published by a build. The name of the artifact is an input to the `PublishBuildArtifacts` task. Your injected task can now get the same input parameter and use it for logging.

### Improvements to service connections usage history

When a pipeline uses a [service connection](/azure/devops/pipelines/library/service-endpoints?view=azure-devops&preserve-view=true&tabs=yaml), that usage is logged in the connection's history. Administrators of the service connection can review the usage history by navigating to project settings and selecting the appropriate service connection. There were some issues with the usage history of service connections that have been fixed with this update. Fixes include the following: 

* When a service connection is used in a [deployment job](/azure/devops/pipelines/process/deployment-jobs?view=azure-devops&preserve-view=true) (instead of a regular job), that usage was not being logged. 
* If you used multiple service connections in multiple stages of a pipeline, all the service connections would show a record in their usage history even though some of the stages were skipped.
### The default agent specification for Classic pipelines is now Windows-2019


In the last release notes, we [announced](/azure/devops/release-notes/2021/sprint-194-update#announcing-a-deprecation-schedule-for-windows-2016-hosted-images) a deprecation schedule for `vs2017-win2016` hosted images. In preparation for that, we are now changing the default agent specification when creating new pipelines in Classic pipelines to `windows-2019`.

> [!div class="mx-imgBorder"]
> ![Agent Specification](../../media/195-pipelines-01.png)
