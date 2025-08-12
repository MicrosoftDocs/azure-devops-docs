---
title: Pipeline conditions
description: Learn about conditions that Azure Pipelines stages, jobs, or steps can run under, and ways to specify those conditions.
ms.topic: conceptual
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.date: 08/01/2025
monikerRange: '<= azure-devops'
#customer intent: As an Azure Pipelines user, I want to understand the conditions that pipeline stages, jobs, and steps can run under, so I can configure builds to run under various conditions.
---

# Pipeline conditions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes the different conditions that allow an Azure Pipelines stage, job, or step to run, and how to set those conditions in a YAML pipeline definition.

> [!NOTE]
> This article discusses YAML pipeline capabilities. For Classic pipelines, you can specify some conditions under which tasks or jobs run in the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline.

## Conditions a stage, job, or step runs under

By default, a pipeline job or stage runs if it doesn't depend on any other job or stage, or if all its dependencies completed and [succeeded](expressions.md#succeeded). The dependency requirement applies to direct dependencies and to their indirect dependencies, computed recursively.

By default, a step runs if nothing in its job failed yet and the step immediately preceding it completed. For more context on stages, jobs, and steps, see [Key concepts for Azure Pipelines](../get-started/key-pipelines-concepts.md).

You can override or customize these default behaviors by setting a stage, job, or step to run even if or only if a previous dependency fails or has another outcome. You can also define [custom conditions](#custom-conditions). In a YAML pipeline definition, you use the `condition` property to specify conditions under which a stage, job, or step can run.

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]

>[!IMPORTANT]
>When you specify a `condition` property for a stage, job, or step, you overwrite the default condition. Your stage, job, or step might run even if the build is canceled. Make sure your conditions take the state of the parent stage or job into account.

### Condition example

The following YAML example demonstrates the `always()` and `failed()` conditions. The first script task in job 1 has an `always` condition, so it runs even if dependencies fail or the build is canceled. In the second script task, `exit job1` forces the `job1` job to fail.

Pipeline stages run sequentially by default, but jobs can run in parallel. You can use the `dependsOn` property to explicitly define dependencies between stages or jobs.

To set the conditions for a job that depends on the outcome of another job, use `dependsOn` to define the dependency. In the following example, `job2` depends on `job1` and runs because `job1` fails.

```yaml
jobs:
- job: job1
  steps:
  - script: echo Hello!
    condition: always() # this step runs even if the build is canceled
  - script: |
      echo "This task will fail."
      exit job1 
- job: job2
  dependsOn: job1
  condition: failed() # this job runs only if job1 fails
```

> [!NOTE]
> You can also use the Azure Pipelines UI to manually run dependent stages when the parent stage fails. For more information, see [Run children stages when parent stage fails](/azure/devops/release-notes/2024/pipelines/sprint-246-update#run-children-stages-when-parent-stage-fails).

## Custom conditions

If the built-in conditions don't meet your needs, you can specify custom conditions as [expressions](expressions.md) in YAML pipeline definitions.

The agent evaluates the expression beginning with the innermost function and proceeding outward. The final result is a boolean value that determines whether or not to run the stage, job, or step. For a full guide to the syntax, see [Expressions](expressions.md).

> [!IMPORTANT]
> Conditions are evaluated to determine whether to start a stage, job, or step. Therefore, nothing computed during the runtime of a stage, job, or step is available to use within that same stage, job, or step. For example, if you set a variable in a job using a runtime expression with `$[ ]` syntax, you can't use that variable in conditions within that job.

## Variables in conditions

You can set pipeline variables and use them in conditions. The following pipeline sets an `isMain` variable and uses it in a condition that runs Stage B only when the build source branch is `main`.

```yaml
variables:
  isMain: $[eq(variables['Build.SourceBranch'], 'refs/heads/main')]

stages:
- stage: A
  jobs:
  - job: A1
    steps:
      - script: echo Hello Stage A!
- stage: B
  condition: and(succeeded(), eq(variables.isMain, true))
  jobs:
  - job: B1
    steps:
      - script: echo Hello Stage B!
      - script: echo $(isMain)
```

You can set a condition to run if a variable is null or an empty string. All variables are treated as strings in Azure Pipelines, so an empty string is equivalent to `null` in the following pipeline:

```yaml
variables:
- name: testEmpty
  value: ''

jobs:
  - job: A
    steps:
    - script: echo testEmpty is blank
    condition: eq(variables.testEmpty, '')
```

### Job output variables used in other job conditions

You can create a variable in a job that other jobs in the same stage can specify in conditions. Variables available to dependent jobs must be marked as [multi-job output variables](variables.md#set-a-multi-job-output-variable) by using `isOutput=true`, as in the following code:

```yaml
jobs:
- job: A
  steps:
  - bash: |
      echo "This is job A."
      echo "##vso[task.setvariable variable=doThing;isOutput=true]Yes" #set variable doThing to Yes
    name: DetermineResult
- job: B
  dependsOn: A
  condition: eq(dependencies.A.outputs['DetermineResult.doThing'], 'Yes') #map doThing and check the value
  steps:
  - script: echo "Job A ran and doThing is Yes."
```

### Step variables used in subsequent step conditions

You can create a variable in a step that future steps in the same job can specify in conditions. Variables created from steps are available to future steps in the job by default and don't need to be marked as multi-job output variables.

Variables created in a step in a job have the following limitations:

- Are [scoped](variables.md#set-a-job-scoped-variable-from-a-script) to the steps in the same job.
- Are available in subsequent steps only as [environment variables](variables.md#environment-variables).
- Can't be used in the same step that defines them.

The following example creates a pipeline variable in a step and uses the variable in a later step's script condition.

```yaml
steps:

# This step creates a new pipeline variable: doThing. This variable is available to subsequent steps.
- bash: |
    echo "##vso[task.setvariable variable=doThing]Yes"
  displayName: Step 1

# This step uses doThing in its condition
- script: |
    # Access the variable from Step 1 as an environment variable.
    echo "Value of doThing (as DOTHING env var): $DOTHING."
  displayName: Step 2
  condition: and(succeeded(), eq(variables['doThing'], 'Yes')) # or and(succeeded(), eq(variables.doThing, 'Yes'))
```

## Condition settings for various outcomes

The following table shows `condition` settings to produce various desired outcomes.

| Desired outcome | Example condition setting |
| --------------- | ----------------- |
| Run if the source branch is `main`, even if the parent or preceding stage, job, or step failed or was canceled. | `eq(variables['Build.SourceBranch'], 'refs/heads/main')` |
| Run if the source branch is `main` and the parent or preceding stage, job, or step succeeded. | `and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))` |
| Run if the source branch isn't `main`, and the parent or preceding stage, job, or step succeeded. | `and(succeeded(), ne(variables['Build.SourceBranch'], 'refs/heads/main'))` |
| Run for `user` branches if the parent or preceding stage, job, or step succeeded. | `and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/heads/users/'))` |
| Run for continuous integration (CI) builds, if the parent or preceding stage, job, or step succeeded. | `and(succeeded(), in(variables['Build.Reason'], 'IndividualCI', 'BatchedCI'))` |
| Run if a pull request triggered the build and the parent or preceding stage, job, or step failed. | `and(failed(), eq(variables['Build.Reason'], 'PullRequest'))` |
| Run for a scheduled build, even if the parent or preceding stage, job, or step failed or was canceled. | `eq(variables['Build.Reason'], 'Schedule')` |
| Run if the `System.debug` variable is set to `true`, even if the parent or preceding stage, job, or step failed or was canceled. | `eq(variables['System.debug'], true)` |

> [!NOTE]
> `Release.Artifacts.{artifact-alias}.SourceBranch` is equivalent to `Build.SourceBranch`.

## Condition outcomes when a build is canceled

Canceling a build doesn't mean that all its stages, jobs, and steps stop running. Which jobs, stages, or steps stop running depend on the conditions you specified, and at what point of the pipeline's execution you canceled the build. If a stage, job, or step's parent is skipped, the stage, job, or step doesn't run, regardless of its conditions.

A stage, job, or step runs whenever its conditions evaluate to `true`. If a condition doesn't account for the state of the task's parent, the task might run even if its parent is canceled. To control whether jobs, stages, or steps run when a build is canceled, include a [job status check function](expressions.md?view=azure-devops&preserve-view=true#job-status-functions) in your conditions.

If you cancel a build while it's in the queue stage but not yet running, the entire run is canceled, including all other stages.

>[!NOTE]
>If any of your conditions make it possible for tasks to run even after the build is canceled, specify a value for [cancel timeout](phases.md#timeouts) that provides enough time for the tasks to complete after the run is canceled.

### Example stage condition outcomes

The following examples show the outcomes of various conditions set on stages when the build is canceled.

#### Stage example 1

In the following pipeline, by default `stage2` would depend on `stage1` completing successfully. However, `stage2` has a `condition` set to run whenever the source branch is `main`, regardless of `stage1` status.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yaml
stages:
- stage: stage1
  jobs:
  - job: A
    steps:
      - script: echo 1; sleep 30
- stage: stage2
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
  jobs:
  - job: B
    steps:
      - script: echo 2
```

#### Stage example 2

In the following pipeline, by default `stage2` depends on `stage1` completing successfully. Job `B` in `stage2` has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` and its jobs don't run at all, even though the stage contains a job whose condition evaluates to `true`.

```yaml
stages:
- stage: stage1
  jobs:
  - job: A
    steps:
      - script: echo 1; sleep 30
- stage: stage2
  jobs:
  - job: B
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
    steps:
      - script: echo 2
```

#### Stage example 3

In the following pipeline, by default `stage2` depends on `stage1` completing successfully. The step inside job `B` within `stage2` has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` and job `B` don't run at all, even though job `B` contains a step whose condition evaluates to `true`. `Stage2` is skipped entirely because `stage1` was canceled.

```yaml
stages:
- stage: stage1
  jobs:
  - job: A
    steps:
      - script: echo 1; sleep 30
- stage: stage2
  jobs:
  - job: B
    steps:
      - script: echo 2
        condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

### Example job condition outcomes

The following examples show the outcomes of various conditions set on jobs when the build is canceled.

#### Job example 1

In the following YAML pipeline, job `B` running depends on job `A` running. Job `B` also has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` still runs, because `condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yaml
jobs:
- job: A
  steps:
  - script: sleep 30
- job: B
  dependsOn: A 
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
  steps:
    - script: echo step 2.1
```

If you want job `B` to run only when job `A` succeeds and the build source is `main`, you must set the `condition` to `and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))`.

#### Job example 2

In the following YAML pipeline, job `B` depends on job `A` succeeding. Job `B` has a `condition` set to run whenever job `A` succeeds and the build source branch is `main`. 

If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` doesn't run, even though it has one `condition` that evaluates to `true`. The condition on job `B` evaluates to `false` because job `A` didn't succeed. Therefore, job `B` and its steps are skipped.

```yaml
jobs:
- job: A
  steps:
  - script: sleep 30
- job: B
  dependsOn: A 
  steps:
    - script: echo step 2.1
  condition: and(eq(variables['Build.SourceBranch'], 'refs/heads/main'), succeeded())
```

### Example step condition outcome

You can also set conditions on steps. In the following pipeline, step 2.3 has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while steps 2.1 or 2.2 are running, step 2.3 still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yaml
steps:
  - script: echo step 2.1
  - script: echo step 2.2; sleep 30
  - script: echo step 2.3
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

## Parameters in conditions

You can use parameters in conditions. Parameter expansion happens before the pipeline runs and replaces values surrounded by `${{ }}` with the literal parameter values. Because parameter expansion occurs before condition evaluation, you can declare a parameter in a pipeline and embed the parameter inside any condition in that pipeline.

The `condition` in the following example combines two functions: `succeeded()` and `${{ eq(parameters.doThing, true) }}`. The `succeeded()` function checks if the previous step succeeded. This function also returns `true` if there is no previous step.

The `${{ eq(parameters.doThing, true) }}` function checks whether the `doThing` parameter is equal to `true`. The script step in the following example runs because there was no previous step and `parameters.doThing` is `true` by default.

```yaml
parameters:
- name: doThing
  default: true
  type: boolean

steps:
- script: echo I did a thing
  condition: and(succeeded(), ${{ eq(parameters.doThing, true) }})
```

### Template parameters in conditions

When you pass a parameter to a pipeline template, you can set the parameter's value in the template file or [use templateContext to pass the parameter to the template](template-parameters.md?view=azure-devops&preserve-view=true#use-templatecontext-to-pass-properties-to-templates).

The following *parameters.yml* template file declares the `doThing` parameter with a default value of `true` and uses the parameter in a job condition.

```yaml
# parameters.yml
parameters:
- name: doThing
  default: true
  type: boolean

jobs:
  - job: B
    steps:
    - script: echo I did a thing
    condition: ${{ eq(parameters.doThing, true) }}
```

The following *azure-pipelines.yml* pipeline definition references the job in the *parameters.yml* template file. The output of the pipeline is `I did a thing` because the parameter `doThing` is true by default.

```yaml
# azure-pipelines.yml

extends:
  template: parameters.yml
```

For more template parameter examples, see the [Template usage reference](templates.md).

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How can I trigger a job if a previous job succeeded with issues? 

You can use the result of the previous job in a condition. In the following YAML, the condition `eq(dependencies.A.result,'SucceededWithIssues')` sets job `B` to run after job `A` succeeded with issues.

```yaml
jobs:
- job: A
  steps:
  - script: echo Job A ran
- job: B
  dependsOn: A
  condition: eq(dependencies.A.result,'SucceededWithIssues') # targets the result of the previous job 
  steps:
  - script: echo Job A had issues
```

### Why is my build still running after I canceled it?

You can experience this issue if a condition configured in a stage doesn't include a [job status check function](expressions.md?view=azure-devops&preserve-view=true#job-status-functions). To resolve the issue, add a job status check function to the condition. For more information, see [Condition outcomes when a build is canceled](#condition-outcomes-when-a-build-is-canceled).

<!-- ENDSECTION -->

## Related content

- [Specify jobs in your pipeline](phases.md)  
- [Add stages, dependencies, and conditions](stages.md)
- [Use template parameters](template-parameters.md)
