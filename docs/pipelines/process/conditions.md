---
title: Conditions
ms.custom: seodec18
description: Learn about how you can write custom conditions in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: conceptual
ms.assetid: C79149CC-6E0D-4A39-B8D1-EB36C8D3AB89
ms.date: 07/30/2021
monikerRange: '>= tfs-2017'
---

# Specify conditions

**Azure Pipelines | TFS 2018 | TFS 2017.3** 

You can specify the conditions under which each stage, job, or step runs.
By default, a job or stage runs if it does not depend on any other job or stage, or if all of the jobs or stages that it depends on have completed and succeeded.
By default, a step runs if nothing in its job has failed yet and the step immediately preceding it has finished.
You can customize this behavior by forcing a stage, job, or step to run even if a previous dependency fails or by specifying a custom condition.

::: moniker range="<= tfs-2018"
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
  condition: and(succeeded(), eq(variables.isMain, 'true'))
  jobs:
  - job: B1
    steps:
      - script: echo Hello Stage B!
      - script: echo $(isMain)
```

Conditions are evaluated to decide whether to start a stage, job, or step.
This means that nothing computed at runtime inside that unit of work will be available.
For example, if you have a job which sets a variable using a runtime expression using `$[ ]` syntax, you can't use that variable in your custom condition. 

::: moniker-end

::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

Inside the **Control Options** of each task, and in the **Additional options** for a job in a release pipeline,
you can specify the conditions under which the task or job will run.

* * *

## Enable a custom condition

If the built-in conditions don't meet your needs, then you can specify **custom conditions**.

::: moniker range="= tfs-2017"

> In TFS 2017.3, custom task conditions are available in the user interface only for Build pipelines. You can use the Release [REST APIs](../../integrate/index.md) to establish custom conditions for Release pipelines.

::: moniker-end

Conditions are written as expressions in YAML pipelines.
The agent evaluates the expression beginning with the innermost function and works its way out.
The final result is a boolean value that determines if the task, job, or stage should run or not.
See the [expressions](expressions.md) topic for a full guide to the syntax.

Do any of your conditions make it possible for the task to run even after the build is canceled by a user? If so, then specify a reasonable value for [cancel timeout](phases.md#timeouts) so that these kinds of tasks have enough time to complete after the user cancels a run.

## Examples

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
and(always(), eq(variables['Build.Reason'], 'Schedule'))
```

> **Release.Artifacts.{artifact-alias}.SourceBranch** is equivalent to **Build.SourceBranch**.

### Run if a variable is set to true

```
condition: eq(variables['System.debug'], 'true')
```

### Run if a variable is empty

```yaml
variables:
- name: testEmpty
  value: ''

jobs:
  - job: A
    steps:
    - script: echo testEmpty is blank
    condition: eq('${{ variables.testEmpty }}', '')
```

### Use a template parameter as part of a condition

When you declare a parameter in the same pipeline that you have a condition, parameter expansion happens before conditions are considered. In this case, you can embed parameters inside conditions. The script in this YAML file will run because `parameters.doThing` is true.

```yaml
parameters:
- name: doThing
  default: true
  type: boolean

steps:
- script: echo I did a thing
  condition: and(succeeded(), eq('${{ parameters.doThing }}', 'true'))
```

 However, when you pass a parameter to a template, the parameter will not have a value when the condition gets evaluated. As a result, if you set the parameter value in both the template and the pipeline YAML files, the value from the template will get used in your condition. 

```yaml
# parameters.yml
parameters:
- name: doThing
  default: false # value passed to the condition
  type: boolean

jobs:
  - job: B
    steps:
    - script: echo I did a thing
    condition: and(succeeded(), eq('${{ parameters.doThing }}', 'true'))
```

```yaml
# azure-pipeline.yml
parameters:
- name: doThing
  default: true # will not be evaluated in time
  type: boolean

trigger:
- none

extends:
  template: parameters.yml
```

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

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### I've got a conditional step that runs even when a job is canceled. Does my conditional step affect a job that I canceled in the queue?

No. If you cancel a job while it's in the queue, then the entire job is canceled, including conditional steps.

### I've got a conditional step that should run even when the deployment is canceled. How do I specify this?

If you defined the pipelines using a YAML file, then this is supported. This scenario is not yet supported for release pipelines.

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

### I've got a conditional step that runs even when a job is canceled. How do I manage to cancel all jobs at once?

You'll experience this issue if the condition that's configured in the stage doesn't include a job status check function. To resolve the issue, add a job status check function to the condition. If you cancel a job while it's in the queue, the entire job is canceled, including all the other stages, with this function configured. For more information, see [Job status functions](expressions.md#job-status-functions).

```yaml
stages:
- stage: Stage1
  displayName: Stage 1
  dependsOn: []
  condition: and(contains(variables['build.sourceBranch'], 'refs/heads/main'), succeeded())
  jobs:
  - job: ShowVariables
    displayName: Show variables
    steps:
    - task: CmdLine@2
      displayName: Show variables
      inputs:
        script: 'printenv'

- stage: Stage2
  displayName: stage 2
  dependsOn: Stage1
  condition: contains(variables['build.sourceBranch'], 'refs/heads/main')
  jobs:
  - job: ShowVariables
    displayName: Show variables 2
    steps:
    - task: CmdLine@2
      displayName: Show variables 2
      inputs:
        script: 'printenv'
          
- stage: Stage3
  displayName: stage 3
  dependsOn: Stage2
  condition: and(contains(variables['build.sourceBranch'], 'refs/heads/main'), succeeded())
  jobs:
  - job: ShowVariables
    displayName: Show variables 3
    steps:
    - task: CmdLine@2
      displayName: Show variables 3
      inputs:
        script: 'printenv'
```

<!-- ENDSECTION -->


## Related articles

- [Specify jobs in your pipeline](../process/phases.md)  
- [Add stages, dependencies, & conditions](../process/stages.md)
