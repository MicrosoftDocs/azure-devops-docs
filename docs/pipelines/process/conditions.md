---
title: Pipeline conditions
description: Learn about how to specify the conditions under which each Azure Pipelines stage, job, or step runs.
ms.topic: conceptual
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.date: 06/18/2024
monikerRange: '<= azure-devops'
---

# Pipeline conditions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to specify conditions under which an Azure Pipelines stage, job, or step runs.

- By default, a job or stage runs if it doesn't depend on any other job or stage, or if all its dependencies completed and succeeded. This condition applies not only to direct dependencies, but to their dependencies, computed recursively.

- By default, a step runs if nothing in its job failed yet and the step immediately preceding it finished.

You can override or customize this behavior by forcing a stage, job, or step to run even if a previous dependency fails, or by specifying a custom condition.

## Conditions under which a stage, job, or step runs

In the pipeline definition YAML, you can specify the following conditions under which a stage, job, or step runs:
[!INCLUDE [include](includes/task-run-built-in-conditions.md)]
- Custom conditions

> [!NOTE]
> For Classic pipelines, you can specify the conditions under which the task or job runs in the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline,

By default, stages, jobs, and steps run if all direct and indirect dependencies succeed. This status is the same as specifying `condition: succeeded()`. For more information, see [succeeded status function](expressions.md#succeeded).

When you specify a `condition` property for a stage, job, or step, you overwrite the default `condition: succeeded()`. Specifying your own condition can lead to your stage, job, or step running even if the build is canceled. Make sure the conditions you write take into account the state of the parent stage or job.

The following YAML code shows examples of the `always()` and `failed()` conditions:

```yaml
jobs:
- job: Foo

  steps:
  - script: echo Hello!
    condition: always() # this step always runs, even if the build is canceled

- job: Bar
  dependsOn: Foo
  condition: failed() # this job runs only if Foo fails
```

You can also set and use variables in conditions. The following code sets and uses an `isMain` variable to designate the `Build.SourceBranch` as `main`.

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

> [!IMPORTANT]
> Conditions are evaluated to determine whether to start a stage, job, or step. Therefore, nothing computed at runtime inside that unit of work is available. For example, if you have a job that sets a variable using a runtime expression with `$[ ]` syntax, you can't use that variable in your custom condition.

## Custom conditions

If the built-in conditions don't meet your needs, you can specify *custom conditions*. You write conditions as expressions in YAML pipeline definitions.

The agent evaluates the expression beginning with the innermost function and proceeding outward. The final result is a boolean value that determines whether the task, job, or stage should run or not. For a full guide to the syntax, see [Expressions](expressions.md).

If any of your conditions make it possible for the task to run even after the build is canceled, specify a reasonable value for [cancel timeout](phases.md#timeouts) so that these tasks have enough time to complete after the user cancels a run.

### Condition outcomes when a build is canceled

Canceling a build doesn't mean that all its stages, jobs, or steps stop running. Which stages, jobs, or steps stop running depends on the conditions you specified, and at what point of the pipeline's execution you canceled the build.

If your condition doesn't take into account the state of your stage, job, or step's parent, your stage, job, or step runs whenever the condition evaluates to `true`. The stage, job, or step might run even if its parent is canceled. If the stage, job, or step's parent is skipped, the stage, job, or step doesn't run.

To prevent stages, jobs, or steps with conditions from running when a build is canceled, make sure you consider their parents' states when you write the conditions. For more information, see [Job status check functions](expressions.md#job-status-functions).

The following examples show the outcomes of various conditions set on stages, jobs, or steps.

# [Stages](#tab/stages/)

#### Example 1

In the following pipeline, by default `stage2` would depend on `stage1`, but `stage2` has a `condition` set to run whenever the source branch is `main`. If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yml
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

#### Example 2

In the following pipeline, `stage2` depends on `stage1`, and job `B` in `stage 2` has a `condition` set. If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` doesn't run, even though it contains a job whose condition evaluates to `true`.

The reason is because `stage2` has the default `condition: succeeded()`, which evaluates to `false` when `stage1` is canceled. Therefore, `stage2` is skipped, and none of its jobs run.

```yml
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

#### Example 3

In the following pipeline, by default `stage2` depends on `stage1`, and the step `script: echo 2` inside job `B` has a `condition` set.

If you queue a build on the `main` branch and cancel it while `stage1` is running, `stage2` doesn't run, even though it contains a step in job `B` whose condition evaluates to `true`. The reason is because `stage2` is skipped in response to `stage1` being canceled.

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

# [Jobs](#tab/jobs/)

#### Example 1

In the following YAML pipeline, job `B` depends on job `A`, and job `B` has a `condition` set to run when the source branch is `main`. If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yml
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

If you want job `B` to run only when job `A` succeeds and the build source is the `main` branch, your `condition` should be `and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))`.

#### Example 2

In the following pipeline, job `B` depends on job `A`. If you queue a build on the `main` branch and cancel it while job `A` is running, job `B` doesn't run, even though `step 2.1` has a `condition` that evaluates to `true`.

The reason is because job `B` has the default `condition: succeeded()`, which evaluates to `false` when job `A` is canceled. Therefore, job `B` is skipped, and none of its steps run.

```yml
jobs:
- job: A
  steps:
  - script: sleep 30
- job: B
  dependsOn: A 
  steps:
    - script: echo step 2.1
      condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
      
```

# [Steps](#tab/steps/)

You can also have conditions on steps.

In the following pipeline, step 2.3 has a `condition` set to run when the source branch is `main`. If you queue a build on the `main` branch and cancel it while steps 2.1 or 2.2 are running, step 2.3 still runs, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

```yml
steps:
  - script: echo step 2.1
  - script: echo step 2.2; sleep 30
  - script: echo step 2.3
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

---

### Condition examples

The following snippets show example `condition` settings to produce various outcomes.

> [!NOTE]
> `Release.Artifacts.{artifact-alias}.SourceBranch` is equivalent to `Build.SourceBranch`.

#### Run if the source branch is main, even if the parent or preceding stage, job, or step failed or was canceled

```
eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

#### Run if the source branch is main and the parent or preceding stage, job, or step succeeded

```
and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
```

#### Run if the source branch isn't main, and the parent or preceding stage, job, or step succeeded

```
and(succeeded(), ne(variables['Build.SourceBranch'], 'refs/heads/main'))
```

#### Run for user topic branches, if the parent or preceding stage, job, or step succeeded

```
and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/heads/users/'))
```

#### Run for continuous integration (CI) builds, if the parent or preceding stage, job, or step succeeded

```
and(succeeded(), in(variables['Build.Reason'], 'IndividualCI', 'BatchedCI'))
```

#### Run if the build was triggered by a branch policy for a pull request, and the parent or preceding stage, job, or step failed

```
and(failed(), eq(variables['Build.Reason'], 'PullRequest'))
```

#### Run for a scheduled build, even if the parent or preceding stage, job, or step failed or was canceled

```
eq(variables['Build.Reason'], 'Schedule')
```

#### Run if a variable is set to true, even if the parent or preceding stage, job, or step failed or was canceled

```
eq(variables['System.debug'], true)
```

#### Run if a variable is null (empty string)

Since all variables are treated as strings in Azure Pipelines, an empty string is equivalent to `null` in the following pipeline.

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

### Template parameters used as part of conditions

When you declare a parameter in the same pipeline as a condition, parameter expansion happens before conditions are considered. Therefore, you can embed parameters inside conditions. The script in the following YAML file runs because `parameters.doThing` is true.

```yaml
parameters:
- name: doThing
  default: true
  type: boolean

steps:
- script: echo I did a thing
  condition: ${{ eq(parameters.doThing, true) }}
```

The `condition` in the preceding pipeline combines two functions: `succeeded()` and `eq('${{ parameters.doThing }}', true)`. The `succeeded()` function checks if the previous step succeeded. The `succeeded()` function returns `true` because there was no previous step.

The `eq('${{ parameters.doThing }}', true)` function checks whether the `doThing` parameter is equal to `true`. Since the default value for `doThing` is `true`, the condition returns `true` by default unless the pipeline sets a different value.

When you pass a parameter to a template, you need to set the parameter's value in your template or [use templateContext to pass the parameter to the template](template-parameters.md?view=azure-devops&preserve-view=true#use-templatecontext-to-pass-properties-to-templates).

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

The pipeline code references the *parameters.yml* file. The output of the pipeline is `I did a thing` because the parameter `doThing` is true.

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

### Output variable from a job used in a condition in a subsequent job

You can make a variable available to future jobs and specify it in a condition. Variables available to future jobs must be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable) by using `isOutput=true`, as in the following code.

```yaml
jobs:
- job: Foo
  steps:
  - bash: |
      echo "This is job Foo."
      echo "##vso[task.setvariable variable=doThing;isOutput=true]Yes" #set variable doThing to Yes
    name: DetermineResult
- job: Bar
  dependsOn: Foo
  condition: eq(dependencies.Foo.outputs['DetermineResult.doThing'], 'Yes') #map doThing and check the value
  steps:
  - script: echo "Job Foo ran and doThing is Yes."
```

### Variable created from a step used in a condition in a subsequent step

You can create a variable that's available for future steps to specify in a condition. Variables created from steps are available to future steps by default and don't need to be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable).

There are some important things to note about [scoping](./variables.md#set-a-job-scoped-variable-from-a-script) variables that are created from steps.

- Variables created in a step in a job are scoped to the steps in the same job.
- Variables created in a step are available in subsequent steps only as environment variables.
- Variables created in a step can't be used in the step that defines them.

The following example shows creating a pipeline variable in a step and using the variable in a subsequent step's condition and script.

```yaml
steps:

# This step creates a new pipeline variable: doThing. This variable is available to subsequent steps.
- bash: |
    echo "##vso[task.setvariable variable=doThing]Yes"
  displayName: Step 1

# This step is able to use doThing, so it uses doThing in its condition
- script: |
    # Access the variable from Step 1 as an environment variable.
    echo "Value of doThing (as DOTHING env var): $DOTHING."
  displayName: Step 2
  condition: and(succeeded(), eq(variables['doThing'], 'Yes')) # or and(succeeded(), eq(variables.doThing, 'Yes'))
```

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### How can I trigger a job if a previous job succeeded with issues? 

You can use the result of the previous job in a condition. For example, in the following YAML file, the condition `eq(dependencies.A.result,'SucceededWithIssues')` allows job `B` to run because job `A` succeeded with issues. 

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

You experience this issue if a condition configured in a stage doesn't include a [job status check function](expressions.md?view=azure-devops&preserve-view=true#job-status-functions). To resolve the issue, add a job status check function to the condition.

If you cancel a job while it's in the queue stage but not running, the entire job is canceled, including all the other stages. For more information, see [Condition outcomes when a build is canceled](#condition-outcomes-when-a-build-is-canceled) earlier in this article.

<!-- ENDSECTION -->

## Related articles

- [Specify jobs in your pipeline](../process/phases.md)  
- [Add stages, dependencies, and conditions](../process/stages.md)
