---
title: Conditions
ms.custom: seodec18
description: Learn about how you can write custom conditions in Azure Pipelines.
ms.topic: conceptual
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.date: 02/17/2023
monikerRange: '<= azure-devops'
---

# Specify conditions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can specify the conditions under which each stage, job, or step runs.
By default, a job or stage runs if it doesn't depend on any other job or stage, or if _all_ of the jobs or stages it depends on have completed and succeeded. This includes not only direct dependencies, but their dependencies as well, computed recursively.
By default, a step runs if nothing in its job has failed yet and the step immediately preceding it has finished.
You can customize this behavior by forcing a stage, job, or step to run even if a previous dependency fails or by specifying a custom condition.

::: moniker range="tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

#### [YAML](#tab/yaml/)
::: moniker range=">=azure-devops-2020"

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

You can also use variables in conditions. 

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

Conditions are evaluated to decide whether to start a stage, job, or step.
This means that nothing computed at runtime inside that unit of work will be available.
For example, if you have a job that sets a variable using a runtime expression using `$[ ]` syntax, you can't use that variable in your custom condition. 

::: moniker-end

::: moniker range="< azure-devops"
YAML isn't supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

Inside the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline,
you can specify the conditions under which the task or job will run.

* * *

> [!NOTE]
> When you specify your own `condition` property for a stage / job / step, you overwrite its default `condition: succeeded()`. This can lead to your stage / job / step running even if the build is cancelled. Make sure you take into account the state of the parent stage / job when writing your own conditions.

## Enable a custom condition

If the built-in conditions don't meet your needs, then you can specify **custom conditions**.

Conditions are written as expressions in YAML pipelines.
The agent evaluates the expression beginning with the innermost function and works its way out.
The final result is a boolean value that determines if the task, job, or stage should run or not.
See the [expressions](expressions.md) article for a full guide to the syntax.

Do any of your conditions make it possible for the task to run even after the build is canceled by a user? If so, then specify a reasonable value for [cancel timeout](phases.md#timeouts) so that these kinds of tasks have enough time to complete after the user cancels a run.

## Pipeline behavior when build is canceled

When a build is canceled, it doesn't mean all its stages, jobs, or steps stop running. The decision depends on the stage, job, or step `conditions` you specified and at what point of the pipeline's execution you canceled the build.

If your condition doesn't take into account the state of the parent of your stage / job / step, then if the condition evaluates to `true`, your stage, job, or step will run, *even if* its parent is canceled. If its parent is skipped, then your stage, job, or step won't run.

Let's look at some examples. 

#### [Stages](#tab/stages/)

In this pipeline, by default, `stage2` depends on `stage1` and `stage2` has a `condition` set. `stage2` only runs when the source branch is `main`. 

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

If you queue a build on the `main` branch, and you cancel it while `stage1` is running, `stage2` will still run, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

In this pipeline, `stage2` depends on `stage1`. Job `B` has a `condition` set for it.

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

If you queue a build on the `main` branch, and you cancel it while `stage1` is running, `stage2` *won't* run, even though it contains a job `B` whose condition evaluates to `true`. The reason is because `stage2` has the default `condition: succeeded()`, which evaluates to `false` when `stage1` is canceled. Therefore, `stage2` is skipped, and none of its jobs run.

Say you have the following YAML pipeline. Notice that, by default, `stage2` depends on `stage1` and that `script: echo 2` has a `condition` set for it.
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

If you queue a build on the `main` branch, and you cancel it while `stage1` is running, `stage2` *won't* run, even though it contains a step in job `B` whose condition evaluates to `true`. The reason is because `stage2` is skipped in response to `stage1` being canceled.

#### [Jobs](#tab/jobs/)
Say you have the following YAML pipeline. Notice that job `B` depends on job `A` and that job `B` has a `condition` set for it.
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

If you queue a build on the `main` branch, and you cancel it while job `A` is running, job `B` will still run, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`. 

If you want job `B` to only run when job `A` succeeds *and* you queue the build on the `main` branch, then your `condition` should read `and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))`.

In the following pipeline, `B` depends on `A`.
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

If you queue a build on the `main` branch, and you cancel the build when job `A` is executing, job `B` *won't* execute, even though `step 2.1` has a `condition` that evaluates to `true`. The reason is because job `B` has the default `condition: succeeded()`, which evaluates to `false` when job `A` is canceled. Therefore, job `B` is skipped, and none of its steps run.

#### [Steps](#tab/steps/)

You can also have conditions on steps. In this pipeline, notice that step 2.3 has a `condition` set on it.

```yml
steps:
  - script: echo step 2.1
  - script: echo step 2.2; sleep 30
  - script: echo step 2.3
    condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
```

If you queue a build on the `main` branch, and you cancel the build when steps 2.1 or 2.2 are executing, step 2.3 will still execute, because `eq(variables['Build.SourceBranch'], 'refs/heads/main')` evaluates to `true`.

* * *

To prevent stages, jobs, or steps with `conditions` from running when a build is canceled, make sure you consider their parent's state when writing the `conditions`. For more information, see [Job status functions](expressions.md#job-status-functions).

## Examples

### Run for the main branch, even if canceled, even if failing

```
eq(variables['Build.SourceBranch'], 'refs/heads/main')
```


### Run for the main branch, if succeeding

```
and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
```

### Run if the branch is not main, if succeeding

```
and(succeeded(), ne(variables['Build.SourceBranch'], 'refs/heads/main'))
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
eq(variables['Build.Reason'], 'Schedule')
```

> **Release.Artifacts.{artifact-alias}.SourceBranch** is equivalent to **Build.SourceBranch**.

### Always run if a variable is set to true, even if canceled, even if failing

```
eq(variables['System.debug'], true)
```

### Run if a variable is null (empty string)

Since all variables are treated as strings in Azure Pipelines, an empty string is equivalent to `null` in this pipeline.  

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

### Use a template parameter as part of a condition

When you declare a parameter in the same pipeline that you have a condition, parameter expansion happens before conditions are considered. In this case, you can embed parameters inside conditions. The script in this YAML file will run because `parameters.doThing` is true. 

The `condition` in the pipeline combines two functions: `succeeded()` and `eq('${{ parameters.doThing }}', true)`. The `succeeded()` function checks if the previous step succeeded. The `succeeded()` function returns true because there was no previous step. 

The `eq('${{ parameters.doThing }}', true)` function checks whether the doThing parameter is equal to `true`. Since the default value for doThing is true, the condition will return true by default unless a different value gets set in the pipeline. 

For more template parameter examples, see [Template types & usage](templates.md). 


```yaml
parameters:
- name: doThing
  default: true
  type: boolean

steps:
- script: echo I did a thing
  condition: and(succeeded(), eq('${{ parameters.doThing }}', true))
```


When you pass a parameter to a template, you need to set the parameter's value in your template or [use templateContext to pass properties to templates](template-parameters.md#use-templatecontext-to-pass-properties-to-templates). 

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

The output of this pipeline is `I did a thing` because the parameter `doThing` is true. 



### Use the output variable from a job in a condition in a subsequent job

You can make a variable available to future jobs and specify it in a condition. Variables available to future jobs must be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable) using `isOutput=true`. 

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

### Use the pipeline variable created from a step in a condition in a subsequent step

You can make a variable available to future steps and specify it in a condition. By default, variables created from a step are available to future steps and don't need to be marked as [multi-job output variables](./variables.md#set-a-multi-job-output-variable) using `isOutput=true`.

There are some important things to note regarding the above approach and [scoping](./variables.md#set-a-job-scoped-variable-from-a-script):

- Variables created in a step in a job will be scoped to the steps in the same job.
- Variables created in a step will only be available in subsequent steps as environment variables.
- Variables created in a step can't be used in the step that defines them.

Below is an example of creating a pipeline variable in a step and using the variable in a subsequent step's condition and script.

```yaml
steps:

# This step creates a new pipeline variable: doThing. This variable will be available to subsquent steps.
- bash: |
    echo "##vso[task.setvariable variable=doThing]Yes"
  displayName: Step 1

# This step is able to use doThing, so it uses it in its condition
- script: |
    # You can access the variable from Step 1 as an environment variable.
    echo "Value of doThing (as DOTHING env var): $DOTHING."
  displayName: Step 2
  condition: and(succeeded(), eq(variables['doThing'], 'Yes')) # or and(succeeded(), eq(variables.doThing, 'Yes'))
```

## FAQ

<!-- BEGINSECTION class="md-qanda" -->


### How can I trigger a job if a previous job succeeded with issues? 

You can use the result of the previous job. For example, in this YAML file, the condition `eq(dependencies.A.result,'SucceededWithIssues')` allows the job to run because Job A succeeded with issues. 

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

### I canceled my build, but it's still running. What's happening?

You'll experience this issue if the condition that's configured in the stage doesn't include a job status check function. To resolve the issue, add a job status check function to the condition. If you cancel a job while it's in the queue, but not running, the entire job is canceled, including all the other stages.

Learn more about a [pipeline's behavior when a build is canceled](#pipeline-behavior-when-build-is-canceled).

<!-- ENDSECTION -->


## Related articles

- [Specify jobs in your pipeline](../process/phases.md)  
- [Add stages, dependencies, & conditions](../process/stages.md)
