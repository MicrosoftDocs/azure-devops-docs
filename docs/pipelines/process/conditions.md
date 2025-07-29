---
title: Pipeline conditions
description: Learn about how to specify the conditions that each Azure Pipelines stage, job, or step runs under.
ms.topic: conceptual
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.date: 07/25/2025
monikerRange: '<= azure-devops'
---

# Pipeline conditions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes the different conditions that allow an Azure Pipelines stage, job, or step to run, and how to set those conditions in the YAML pipeline definition. For more context on stages, jobs, and steps, see [Key concepts for Azure Pipelines](../get-started/key-pipelines-concepts.md).

> [!NOTE]
> This article discusses YAML pipeline capabilities. For Classic pipelines, you can specify some conditions under which tasks or jobs run in the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline.

## Conditions a stage, job, or step runs under

By default, a pipeline job or stage runs if it doesn't depend on any other job or stage, or if all its dependencies completed and [succeeded](expressions.md#succeeded). The dependency requirement applies to direct dependencies and to their indirect dependencies, computed recursively. By default, a step runs if nothing in its job failed yet and the step immediately preceding it completed.

You can override or customize these default behaviors by setting a stage, job, or step to run even if or only if a previous dependency fails, or by specifying a custom condition. You use the YAML `condition` property to specify the conditions under which a stage, job, or step can run.

[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
- Custom conditions.

When you specify a condition property for a stage, job, or step, you overwrite the default `condition: succeeded()`. Your stage, job, or step might run even if the build is canceled. Make sure your conditions take into account the state of the parent stage or job.

### Examples

The following YAML example demonstrates the `always()` and `failed()` conditions. The first script task in job 1 has an `always` condition, so it runs even if dependencies fail or the build is canceled. In the second script task, `exit 1` forces the `1` job to fail.

Jobs are designed to run in parallel while stages run sequentially. Use `dependsOn` when working with jobs and you want to evaluate whether a previous job was successful. Job 2 depends on job 1 and runs only if job 1 fails. 

```yaml
jobs:
- job: 1
  steps:
  - script: echo Hello!
    condition: always() # this step runs, even if the build is canceled
  - script: |
      echo "This task will fail."
      exit 1 
- job: 2
  dependsOn: 1
  condition: failed() # this job runs only if job 1 fails
```

You can also set variables and use them in conditions. The following example sets and uses an `isMain` variable to run the stage only when the build source branch is `main`.

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

## Custom conditions

If the built-in conditions don't meet your needs, you can specify custom conditions as [expressions](expressions.md) in YAML pipeline definitions.

The agent evaluates the expression beginning with the innermost function and proceeding outward. The final result is a boolean value that determines whether or not to run the stage, job, or step. For a full guide to the syntax, see [Expressions](expressions.md).

> [!IMPORTANT]
> Conditions are evaluated to determine whether to start a stage, job, or step. Therefore, nothing computed at runtime inside a stage, job, or step is available to use within that stage, job, or step. For example, if you set a variable using a runtime expression with `$[ ]` syntax in a job, you can't use that variable in conditions within that job.

## Condition outcomes when a build is canceled

Canceling a build doesn't mean that all its stages, jobs, and steps stop running. Which jobs, stages, or steps stop running depend on the conditions you specified, and at what point of the pipeline's execution you canceled the build. If a stage, job, or step's parent is skipped, the stage, job, or step doesn't run, regardless of its conditions.

A stage, job, or step runs whenever its conditions evaluate to `true`. If a condition doesn't account for the state of the task's parent, the task might run even if its parent is canceled. To control whether jobs, stages, or steps run when a build is canceled, include a [job status check function](expressions.md?view=azure-devops&preserve-view=true#job-status-functions) in your conditions.

If you cancel a build while it's in the queue stage but not yet running, the entire job is canceled, including all other stages.

>[!NOTE]
>If any of your conditions make it possible for tasks to run even after the build is canceled, specify a value for [cancel timeout](phases.md#timeouts) that provides enough time for the tasks to complete after the run is canceled.

### Example outcomes for stage conditions

The following examples show the outcomes of various conditions set on stages when the build is canceled.

#### Stage condition example 1

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

#### Stage condition example 2

In the following pipeline, by default `stage2` depends on `stage1` completing successfully. Job `B` in `stage2` has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` doesn't run at all, even though it contains a job whose condition evaluates to `true`.

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

#### Stage condition example 3

In the following pipeline, by default `stage2` depends on `stage1` completing successfully. The step inside job `B` within `stage2` has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` doesn't run at all, even though it contains a step in job `B` whose condition evaluates to `true`. `Stage2` is skipped entirely because `stage1` was canceled.

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

### Example outcomes for job conditions

The following examples show the outcomes of various conditions set on jobs when the build is canceled.

#### Job condition example 1

In the following YAML pipeline, job `B` depends on job `A`. Job `B` also has a `condition` set to run whenever the source branch is `main`. If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` still runs, because `condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

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

If you want job `B` to run only when job `A` succeeds and the build source is the `main` branch, you must set the `condition` to `and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))`.

#### Job condition example 2

In the following YAML pipeline, job `B` depends on job `A` completing successfully. Job `B` has a `condition` set to run whenever job `A` succeeds and the build source branch is `main`. 

If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` doesn't run, even though it has a `condition` that evaluates to `true`. Job `B` evaluates to `false` when job `A` is canceled. Therefore, job `B` is skipped, and none of its steps run.

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

### Example outcome for step conditions

You can also set conditions on steps. In the following pipeline, step 2.3 has a `condition` set to run whenever the source branch is `main`.

If you queue a build on the `main` branch and cancel it while steps 2.1 or 2.2 are running, step 2.3 still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yaml
steps:
  - script: echo step 2.1
  - script: echo step 2.2; sleep 30
  - script: echo step 2.3
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
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
| Run if the build was triggered by a pull request and the parent or preceding stage, job, or step failed. | `and(failed(), eq(variables['Build.Reason'], 'PullRequest'))` |
| Run for a scheduled build, even if the parent or preceding stage, job, or step failed or was canceled. | `eq(variables['Build.Reason'], 'Schedule')` |
| Run if the `System.debug` variable is set to `true`, even if the parent or preceding stage, job, or step failed or was canceled. | `eq(variables['System.debug'], true)` |

> [!NOTE]
> `Release.Artifacts.{artifact-alias}.SourceBranch` is equivalent to `Build.SourceBranch`.

### Parameters in conditions

Parameter expansion occurs before conditions are evaluated. Therefore, when you declare a parameter in the same pipeline as a condition, you can embed the parameter inside the condition. The script step in the following YAML runs because `parameters.doThing` is `true`.

```yaml
parameters:
- name: doThing
  default: true
  type: boolean

steps:
- script: echo I did a thing
  condition: and(succeeded(), ${{ eq(parameters.doThing, true) }})
```

The `condition` in the preceding pipeline combines two functions: `succeeded()` and `${{ eq(parameters.doThing, true) }}`. The `succeeded()` function checks if the previous step succeeded and returns `true` if there was no previous step.

The `${{ eq(parameters.doThing, true) }}` function checks whether the `doThing` parameter is equal to `true`. Since the default value for `doThing` is `true`, the condition returns `true` unless the pipeline sets a different value.

### Template parameters in conditions

When you pass a parameter to a template, you can either set the parameter's value in the template or [use templateContext to pass the parameter to the template](template-parameters.md?view=azure-devops&preserve-view=true#use-templatecontext-to-pass-properties-to-templates).

For example, the following *parameters.yml* file declares the `doThing` parameter and default value:

```yaml
# parameters.yml
parameters:
- name: doThing
  default: true # value passed to the condition
  type: boolean

jobs:
  - job: B
    steps:
    - script: echo I did a thing
    condition: ${{ eq(parameters.doThing, true) }}
```

The pipeline code references the job in the *parameters.yml* template. The output of the pipeline is `I did a thing` because the parameter `doThing` is true.

```yaml
# azure-pipeline.yml
parameters:
- name: doThing
  default: true 
  type: boolean

trigger:
- none

extends:
  template: parameters.yml
```

For more template parameter examples, see the [Template usage reference](templates.md).

### Job output variables used in subsequent job conditions

You can make a variable available to future jobs and specify it in a condition. Variables available to future jobs must be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable) by using `isOutput=true`, as in the following code:

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

You can create a variable in a step that future steps can specify in a condition. Variables created from steps are available to future steps by default and don't need to be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable).

Variables created in a step in a job:

- Are [scoped](variables.md#set-a-job-scoped-variable-from-a-script) to the steps in the same job.
- Are available in subsequent steps only as environment variables.
- Can't be used in the same step that defines them.

The following example creates a pipeline variable in a step and uses the variable in a later step's condition and script.

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

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How can I trigger a job if a previous job succeeded with issues? 

You can use the result of the previous job in a condition. In the following YAML, the condition `eq(dependencies.A.result,'SucceededWithIssues')` sets job `B` to run after job `A` succeeds with issues.

```yaml
jobs:
- job: A
  displayName: Job A
  continueOnError: true # next job starts even if this one fails
  steps:
  - script: echo Job A ran
  - script: exit 1

- job: B
  dependsOn: A
  condition: eq(dependencies.A.result,'SucceededWithIssues') # targets the result of the previous job 
  displayName: Job B
  steps:
  - script: echo Job B ran
```

### I canceled my build, but it's still running. Why?

You can experience this issue if a condition configured in a stage doesn't include a [job status check function](expressions.md?view=azure-devops&preserve-view=true#job-status-functions). To resolve the issue, add a job status check function to the condition. For more information, see [Condition outcomes when a build is canceled](#condition-outcomes-when-a-build-is-canceled).

<!-- ENDSECTION -->

## Related content

- [Specify jobs in your pipeline](../process/phases.md)  
- [Add stages, dependencies, and conditions](../process/stages.md)
