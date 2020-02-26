---
title: Conditions
ms.custom: seodec18
description: Learn about how you can write custom conditions in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 1/16/2020
monikerRange: '>= tfs-2017'
---

# Specify conditions

**Azure Pipelines | TFS 2018 | TFS 2017.3** 

You can specify the conditions under which each job runs. By default, a job runs if it does not depend on any other job, or if all of the jobs that it depends on have completed and succeeded. You can customize this behavior by forcing a job to run even if a previous job fails or by specifying a custom condition.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

#### [YAML](#tab/yaml/)
::: moniker range="azure-devops"

You can specify conditions under which a step, job, or stage will run.
[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
* Custom conditions

By default, steps, jobs, and stages run if all previous steps/jobs have succeeded.
It's as if you specified "condition: succeeded()" (see [Job status functions](expressions.md#job-status-functions)).

```yaml
jobs:
- job: Foo

  steps:
  - script: echo Hello!
    condition: always() # this step will always run, even if the pipeline is canceled

- job: Bar
  dependsOn: Foo
  condition: failed() # this job will only run if Foo fails
```

::: moniker-end

::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

Inside the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline,
you can specify the conditions under which the task or job will run:

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
* Custom conditions

* * *
## Enable a custom condition

If the built-in conditions don't meet your needs, then you can specify **custom conditions**.

::: moniker range="= tfs-2017"

> In TFS 2017.3, custom task conditions are available in the user interface only for Build pipelines. You can use the Release [REST APIs](../../integrate/index.md) to establish custom conditions for Release pipelines.

::: moniker-end

Conditions are written as expressions.
The agent evaluates the expression beginning with the innermost function and works its way out.
The final result is a boolean value that determines if the task, job, or stage should run or not.
See the [expressions](expressions.md) topic for a full guide to the syntax.

Do any of your conditions make it possible for the task to run even after the build is canceled by a user? If so, then specify a reasonable value for [cancel timeout](phases.md#timeouts) so that these kinds of tasks have enough time to complete after the user cancels a run.

## Examples

### Run for the master branch, if succeeding

```
and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
```

### Run if the branch is not master, if succeeding

```
and(succeeded(), ne(variables['Build.SourceBranch'], 'refs/heads/master'))
```

### Run for user topic branches, if succeeding

```
and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/heads/users/'))
```

### Run for continuous integration (CI) builds if succeeding

```
and(succeeded(), in(variables['Build.Reason'], 'IndividualCI', 'BatchedCI'))
```

### Run if the build is run by a branch policy for a pull request, if failing

```
and(failed(), eq(variables['Build.Reason'], 'PullRequest'))
```

### Run if the build is scheduled, even if failing, even if canceled

```
and(always(), eq(variables['Build.Reason'], 'Schedule'))
```

> **Release.Artifacts.{artifact-alias}.SourceBranch** is equivalent to **Build.SourceBranch**.

### Use a template parameter as part of a condition

Parameter expansion happens before conditions are considered, so you can embed parameters inside conditions. The script in this YAML file will run because `parameters.doThing` is false.

```yaml
parameters:
  doThing: false

steps:
- script: echo I did a thing
  condition: and(succeeded(), eq('${{ parameters.doThing }}', false))
```

### Use the output variable from a job in a condition in a subsequent job

You can make a variable available to future jobs and specify it in a condition. Variables available to future jobs must be marked as [multi-job output variables](/azure/devops/pipelines/process/variables#set-a-multi-job-output-variable). 

```yaml
jobs:
- job: Foo
  steps:
    - script: |
        echo "This is job Foo."
        echo "##vso[task.setvariable variable=doThing;isOutput=true]Yes" #The variable doThing is set to true
      name: DetermineResult
- job: Bar
  dependsOn: Foo
  condition: eq(dependencies.Foo.outputs['DetermineResult.doThing'], 'Yes') #map doThing and check if true
  steps:
    - script: echo "Job Foo ran and doThing is true."
```

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### I've got a conditional step that runs even when a job is canceled. Does this affect a job that I canceled in the queue?

No. If you cancel a job while it's in the queue, then the entire job is canceled, including steps like this.

### I've got a conditional step that should run even when the deployment is canceled. How do I specify this?

If you defined the pipelines using a YAML file, then this is supported. This scenario is not yet supported for release pipelines.

<!-- ENDSECTION -->


## Related articles

- [Specify jobs in your pipeline](../process/phases.md)  
- [Add stages, dependencies, & conditions](../process/stages.md)   