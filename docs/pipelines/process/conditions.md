---
title: Conditional tasks
ms.custom: seodec18
description: Learn about how you can write custom conditions for running your task in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 04/10/2019
monikerRange: '>= tfs-2017'
---

# Specify conditions

**Azure Pipelines | TFS 2018 | TFS 2017.3** 

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

On each step and job, you can specify the conditions under which the step or job will run.
[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* Custom conditions

By default, steps and jobs run if all previous steps/jobs have succeeded.
It's as if you specified "condition: succeeded()" (see [Job status functions](#job-status-functions) below).

```yaml
jobs:
- job: Foo
  
  steps:
  - script: echo Hello!
    condition: always() # this step will always run, even if the pipeline is cancelled

- job: Bar
  dependsOn: Foo
  condition: failed() # this job will only run if Foo fails
```

::: moniker-end

::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Inside the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline,
you can specify the conditions under which the task or job will run:

[!INCLUDE [include](_shared/task-run-built-in-conditions.md)]
* Custom conditions

---

## Enable a custom condition

If the built-in conditions don't meet your needs, then you can specify **custom conditions**.

::: moniker range="= tfs-2017"

> In TFS 2017.3, custom task conditions are available in the user interface only for Build pipelines. You can use the Release [REST APIs](../../integrate/index.md) to establish custom conditions for Release pipelines.

::: moniker-end
 
Conditions are written as expressions.
The agent evaluates the expression beginning with the innermost function and works its way out.
The final result is a boolean value that determines if the task is run or not.
See the [expressions](expressions.md) topic for a full guide to the syntax.

Do any of your conditions make it possible for the task to run even after the build is canceled by a user? If so, then specify a reasonable value for **Build job cancel timeout in minutes** [in the options](../build/options.md) so that these kinds of tasks have enough time to complete after the user clicks **Cancel**.

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

## Job status functions

In addition to the [general functions](expressions.md#functions) available in expressions,
you can use the following as shortcuts for common job status checks.

<h3 id="always">always</h3>
* Always evaluates to `True` (even when canceled). Note: A critical failure may still prevent a task from running. For example, if getting sources failed.

### canceled
* Evaluates to `True` if the pipeline was canceled.

### failed
* For a step, equivalent to `eq(variables['Agent.JobStatus'], 'Failed')`.
* For a job:
 * With no arguments, evaluates to `True` only if any previous job in the dependency graph failed.
 * With job names as arguments, evaluates to `True` only if any of those jobs failed.

### succeeded
* For a step, equivalent to `in(variables['Agent.JobStatus'], 'Succeeded', 'SucceededWithIssues')`
* For a job:
 * With no arguments, evaluates to `True` only if all previous jobs in the dependency graph succeeded or partially succeeded.
 * With job names as arguments, evaluates to `True` if all of those jobs succeeded or partially succeeded.

### succeededOrFailed
* For a step, equivalent to `in(variables['Agent.JobStatus'], 'Succeeded', 'SucceededWithIssues', 'Failed')`
* For a job:
 * With no arguments, evaluates to `True` regardless of whether any jobs in the dependency graph succeeded or failed.
 * With job names as arguments, evaluates to `True` whether any of those jobs succeeded or failed.

 > This is like `always()`, except it will evaluate `False` when the pipeline is canceled.

## Variables

[Build](../build/variables.md) or [Release](../release/variables.md) variables are available.
For agent jobs, variables marked agent-scoped are available.

Some of the more useful predefined variables include:

* `Build.Reason` which you can use to check whether the build was the result of a [build trigger](../build/triggers.md), a [Git PR affected by a branch policy](../../repos/git/branch-policies.md), or a [TFVC gated check-in](../../repos/tfvc/check-folder-controlled-by-gated-check-build-process.md).
* `Build.SourceBranch`
* `Release.Artifacts.{artifact-alias}.SourceBranch`

## Dependencies

For jobs which depend on other jobs, expressions may also use context about previous jobs in the dependency graph.
The context is called `dependencies` and works much like [`variables`](expressions.md#variables).

Structurally, the `dependencies` object is a map of job names to `results` and `outputs`.
Expressed as JSON, it would look like:

```json
"dependencies": {
  "<JOB_NAME>" : {
    "result": "Succeeded|SucceededWithIssues|Skipped|Failed|Canceled",
    "outputs": { // only variables explicitly made outputs will appear here
      "variable1": "value1",
      "variable2": "value2"
    }
  },
  "...": {
    // another job
  }
}
```

::: moniker range="azure-devops"

For instance, in a YAML pipeline, you could check output variables:

```yaml
jobs:
- job: A
  steps:
  - script: echo "##vso[task.setvariable variable=skipsubsequent;isOutput=true]false"
    name: printvar

- job: B
  condition: and(succeeded(), ne(dependencies.A.outputs['printvar.skipsubsequent'], 'true'))
  dependsOn: A
  steps:
  - script: echo hello from B
```

Or you can check job status. In this example, Job A will always be skipped and Job B will run.
Job C will run, since all of its dependencies either succeed or are skipped.

```yaml
jobs:
- job: a
  condition: false
  steps:
  - script: echo Job A
- job: b
  steps:
  - script: echo Job B
- job: c
  dependsOn:
  - a
  - b
  condition: |
    and
    (
      in(dependencies.a.result, 'Succeeded', 'SucceededWithIssues', 'Skipped'),
      in(dependencies.b.result, 'Succeeded', 'SucceededWithIssues', 'Skipped')
    )
  steps:
  - script: Job C
```

::: moniker-end

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

### I've got a condition that runs even when build was cancelled. Does this affect a build that I cancelled in the queue?

No. If you cancel a build while it's in the queue, then the entire build is canceled, including tasks like this.

### I've got a task condition that runs even when the deployment was canceled. How do I specify this?

This scenario is not yet supported for release pipelines.

<!-- ENDSECTION -->
