---
title: Stages in Azure Pipelines
description: Learn how to organize your jobs into stages, define dependencies, and set conditions. Understand how to implement deployment strategies and use YAML or a Classic pipeline to define stages.
ms.assetid: FAAD6503-F8CE-4F5D-8C1E-83AF6E903568
ms.topic: conceptual
ms.date: 03/28/2025
monikerRange: '<= azure-devops'
---

# Add stages, dependencies, and conditions  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A stage is a logical boundary in an Azure DevOps pipeline. Stages group actions in your software development process, like building the app, running tests, and deploying to preproduction. Each stage contains one or more jobs. 

When you define multiple stages in a pipeline, by default, they run one after the other. Stages can also depend on each other. You can use the `dependsOn` keyword to define [dependencies](#specify-dependencies). Stages also can run based on the result of a previous stage with [conditions](#conditions). 

To learn how stages work with parallel jobs and licensing, see [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md). 

To find out how stages relate to other parts of a pipeline such as jobs, see [Key pipelines concepts](../get-started/key-pipelines-concepts.md). 

You can also learn more about how stages relate to parts of a pipeline in the [YAML schema stages article](/azure/devops/pipelines/yaml-schema/stages). 

#### [YAML](#tab/yaml/)
::: moniker range="<=azure-devops"

You can organize pipeline jobs into stages. Stages are the major divisions in a pipeline: build this app, run these tests, and deploy to preproduction are good examples of stages. They're logical boundaries in your pipeline where you can pause the pipeline and perform various checks.

Every pipeline has at least one stage, even if you don't explicitly define it. You can also arrange stages into a dependency graph so that one stage runs before another one. A stage can have up to 256 jobs. 

::: moniker-end

#### [Classic](#tab/classic/)
Organize the deployment jobs in your release pipeline into stages.
Stages are the major divisions in your release pipeline. Examples include running functional tests, deploying to preproduction, and deploying to production.

<a name="approvals"></a><a name="conditions"></a>
A stage in a release pipeline consists of [jobs](../process/phases.md) and [tasks](../process/tasks.md).
 
[Approvals and gates](../release/approvals/index.md), [deployment conditions and triggers](../release/triggers.md#stage-triggers),
and [queuing policies](#queuing-policies) control when a release gets deployed to a stage. 

![stage](../release/media/definition-02.png)

* * *

## Specify stages

#### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

In the simplest case, you don't need logical boundaries in your pipeline. For those scenarios, you can directly specify the jobs in your YAML file without the `stages` keyword. For example, if you have a simple pipeline that builds and tests a small application without requiring separate environments or deployment steps, you can define all the jobs directly without using stages.

```yaml
pool:
  vmImage: 'ubuntu-latest'

jobs:
- job: BuildAndTest
  steps:
  - script: echo "Building the application"
  - script: echo "Running tests"
```

This pipeline has one implicit stage and two jobs. The `stages` keyword isn't used because there's only one stage. 

```yaml
jobs:
- job: Build
  steps:
  - bash: echo "Building"

- job: Test
  steps:
  - bash: echo "Testing"
```

To organize your pipeline into multiple stages, use the `stages` keyword. This YAML defines a pipeline with two stages where each stage contains multiple jobs, and each job has specific steps to execute.

```yaml
stages:
- stage: A
  displayName: "Stage A - Build and Test"
  jobs:
  - job: A1
    displayName: "Job A1 - build"
    steps:
    - script: echo "Building the application in Job A1"
      displayName: "Build step"
  - job: A2
    displayName: "Job A2 - Test"
    steps:
    - script: echo "Running tests in Job A2"
      displayName: "Test step"

- stage: B
  displayName: "Stage B - Deploy"
  jobs:
  - job: B1
    displayName: "Job B1 - Deploy to Staging"
    steps:
    - script: echo "Deploying to staging in Job B1"
      displayName: "Staging deployment step"
  - job: B2
    displayName: "Job B2 - Deploy to Production"
    steps:
    - script: echo "Deploying to production in Job B2"
      displayName: "Production deployment step"
```

::: moniker-end

::: moniker range="<=azure-devops"

If you specify a `pool` at the stage level, all jobs in the stage use that pool unless a pool is specified at the job level.


```yaml
stages:
- stage: A
  pool: StageAPool
  jobs:
  - job: A1 # will run on "StageAPool" pool based on the pool defined on the stage
  - job: A2 # will run on "JobPool" pool
    pool: JobPool
```


::: moniker-end

#### [Classic](#tab/classic/)

To add a stage to your release pipeline, select the release pipeline on the **Releases** page, select **Edit**, and then select the **Pipeline** tab.
While the most important part of defining a stage is the
automation tasks, you can also configure several properties and options
for a stage in a release pipeline. You can:

* Edit the name of the stage here if necessary.
* Designate one user or a 
  group to be the stage owner. Stage owners get
  notified whenever a deployment to that
  stage fails. Stage ownership doesn't automatically include permissions. 
* Delete the stage from the pipeline.
* Change the order of stages.
* Save a copy of the stage as a [stage template](../release/env-templates.md).
* Manage the security settings for the stage.

![Defining options and policies](../release/media/environments-03.png)

* * *

## Specify dependencies

#### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

When you define multiple stages in a pipeline, they run sequentially by default in the order you define them in the YAML file. The exception to this is when you add dependencies. With dependencies, stages run in the order of the `dependsOn` requirements. 

Pipelines must contain at least one stage with no dependencies.

For more information on how to define stages, see [stages in the YAML schema](/azure/devops/pipelines/yaml-schema/stages). 

The following example stages run sequentially. If you don't use a `dependsOn` keyword, stages run in the order they're defined. 


```yaml
stages:
- stage: Build
  displayName: "Build Stage"
  jobs:
  - job: BuildJob
    steps:
    - script: echo "Building the application"
      displayName: "Build Step"

- stage: Test
  displayName: "Test Stage"
  jobs:
  - job: TestJob
    steps:
    - script: echo "Running tests"
      displayName: "Test Step"
```

Example stages that run in parallel:

```yaml
stages:
- stage: FunctionalTest
  displayName: "Functional Test Stage"
  jobs:
  - job: FunctionalTestJob
    steps:
    - script: echo "Running functional tests"
      displayName: "Run Functional Tests"

- stage: AcceptanceTest
  displayName: "Acceptance Test Stage"
  dependsOn: [] # Runs in parallel with FunctionalTest
  jobs:
  - job: AcceptanceTestJob
    steps:
    - script: echo "Running acceptance tests"
      displayName: "Run Acceptance Tests"
```

Example of fan-out and fan-in behavior:

```yaml
stages:
- stage: Test

- stage: DeployUS1
  dependsOn: Test    #  stage runs after Test

- stage: DeployUS2
  dependsOn: Test    # stage runs in parallel with DeployUS1, after Test

- stage: DeployEurope
  dependsOn:         # stage runs after DeployUS1 and DeployUS2
  - DeployUS1
  - DeployUS2
```

::: moniker-end

#### [Classic](#tab/classic/)
Control dependencies by setting triggers on each stage of the release pipeline:

* Stages run with a trigger or are manually started. 
* With an **After release** trigger, a stage starts as soon as the release begins, running in parallel with other stages that have the same trigger.
* With an **After stage** trigger, a stage starts after all dependent stages complete. Using this, you can model fan-out and fan-in behavior for stages.

* * *

## Define conditions

You can specify the conditions under which each stage runs with [expressions](expressions.md). By default, a stage runs if it doesn't depend on any other stage, or if all of the stages that it depends on have completed and succeeded. You can customize this behavior by forcing a stage to run even if a previous stage fails or by specifying a custom condition. 

If you customize the default condition of the preceding steps for a stage, you remove the conditions for completion and success. So, if you use a custom condition, it's common to use `and(succeeded(),custom_condition)` to check whether the preceding stage ran successfully. Otherwise, the stage runs regardless of the outcome of the preceding stage.

> [!NOTE]
>
> Conditions for failed ('JOBNAME/STAGENAME') and succeeded ('JOBNAME/STAGENAME') as shown in the following example work only for [YAML pipelines](?tabs=yaml).

#### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

Example to run a stage based upon the status of running a previous stage:

```yaml
stages:
- stage: A

# stage B runs if A fails
- stage: B
  condition: failed()

# stage C runs if B succeeds
- stage: C
  dependsOn:
  - A
  - B
  condition: succeeded('B')
```

Example of using a [custom condition](conditions.md):

```yaml
stages:
- stage: A

- stage: B
  condition: and(succeeded(), eq(variables['build.sourceBranch'], 'refs/heads/main'))
```

::: moniker-end

#### [Classic](#tab/classic/)

When you specify **After release** or **After stage** triggers, you can also specify the branch filters for the artifacts consumed in the release. Releases will only deploy to a stage when the branch filters are satisfied.

* * *

<a name="queuing-policies"></a>

## Specify queuing policies

#### [YAML](#tab/yaml/)
::: moniker range="<=azure-devops"
YAML pipelines don't support queuing policies. Each run of a pipeline is independent from and unaware of other runs. In other words, your two successive commits might trigger two pipelines, and both of them will execute the same sequence of stages without waiting for each other. While we work to bring queuing policies to YAML pipelines, we recommend that you use [manual approvals](approvals.md) in order to manually sequence and control the order the execution if this is of importance.
::: moniker-end

#### [Classic](#tab/classic/)
In some cases, you might be able to generate builds faster than
they can be deployed. Alternatively, you might configure multiple
[agents](../agents/agents.md) and, for example, be creating releases from the same release pipeline
for deployment of different artifacts. In such cases, it's useful to
be able to control how multiple releases are queued into a
stage. **Queuing policies** give you that control.

![Defining queuing policies](../release/media/environments-02.png)

The options you can choose for a queuing policy are:

* **Number of parallel deployments**:
  Use this option if you dynamically provision new resources in your stage and it's physically capable of handling the deployment of multiple releases in parallel, but you want to limit the number of parallel deployments.

* If you specify a maximum number of deployments, two more options appear:

  - **Deploy all in sequence**:
    Use this option if you want to deploy all the releases sequentially into the same shared physical resources.
    By deploying the builds in turn, one after the other, you ensure that two deployment jobs don't target the same physical resources concurrently, even if there are multiple build and release agents available. You also ensure that predeployment approval requests for the stage are sent out in sequence.

  - **Deploy latest and cancel the others**:
    Use this option if you're producing builds faster than releases, and you only want to deploy the latest build.

To understand how these options work, consider a scenario
where releases **R1**, **R2**, **...**, **R5** of a
single release pipeline get created in quick succession.
Assume that
the first stage in this pipeline is named **QA**
and has both predeployment and post-deployment approvers
defined.

* If you don't specify a limit for the number of parallel deployments,
  all five approval requests are sent out as soon as
  the releases are created. If the approvers approve all of the
  releases, they'll all be deployed to the **QA** stage in parallel.
  (if the **QA** stage didn't have any predeployment
  approvers defined, all the five releases will automatically
  be deployed in parallel to this stage).

* If you specify a limit and **Deploy all in sequence**,
  and the limit has already been reached, the predeployment approval for
  release **R1** will be sent out first. After this
  approval is completed, the deployment of release **R1** to the
  **QA** stage begins. Next, a request for
  post-deployment approval is sent out for release **R1**. It's
  only after this post-deployment approval is completed that
  execution of release **R2** begins and its predeployment
  approval is sent out. The process continues like this for
  all of the releases in turn.

* If you specify a limit and **Deploy latest and cancel the others**,
  and the limit has already been reached, releases **R2**, **R3**, and **R4** will be
  skipped, and the predeployment approval for **R5** in
  the **QA** stage will be sent out immediately
  after the post-deployment approval for release **R1** is completed.

* * *

## Specify approvals

#### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

You can manually control when a stage should run using approval checks. This is commonly used to control deployments to production environments. Checks are a mechanism available to the *resource owner* to control if and when a stage in a pipeline can consume a resource. As an owner of a resource, such as an environment, you can define checks that must be satisfied before a stage consuming that resource can start. 

Currently, manual approval checks are supported on environments. For more information, see [Approvals](approvals.md).

::: moniker-end

#### [Classic](#tab/classic/)

You can add manual approvals at the start or end of each stage in the pipeline. For more information, see [Release approvals and gates overview](../release/approvals/index.md).

* * *

::: moniker range="azure-devops"


## Add a manual trigger

Manually triggered YAML pipeline stages enable you to have a unified pipeline without always running it to completion. 

For instance, your pipeline might include stages for building, testing, deploying to a staging environment, and deploying to production. You might want all stages to run automatically except for the production deployment, which you prefer to trigger manually when ready.

To use this feature, add the `trigger: manual` property to a stage.

In the following example, the development stage runs automatically, while the production stage requires manual triggering. Both stages run a hello world output script.

```yaml
stages:
- stage: Development
  displayName: Deploy to development
  jobs:
  - job: DeployJob
    steps:
    - script: echo 'hello, world'
      displayName: 'Run script'
- stage: Production
  displayName: Deploy to production
  trigger: manual
  jobs:
  - job: DeployJob
    steps:
    - script: echo 'hello, world'
      displayName: 'Run script'
```

## Mark a stage as unskippable

Mark a stage as `isSkippable: false` to prevent pipeline users from skipping stages. For example, you might have a YAML template that injects a stage that performs malware detection in all pipelines. If you set `isSkippable: false` for this stage, your pipeline won't be able to skip malware detection.

In the following example, the Malware detection stage is marked as nonskippable, meaning it must be executed as part of the pipeline run. 

```yaml
- stage: malware_detection
  displayName: Malware detection
  isSkippable: false
  jobs:
  - job: check_job
    ...
```

When a stage is nonskippable, it shows with a disabled checkbox in the **Stages to run** configuration panel.

:::image type="content" source="media/stages/stages-run-skip-stage.png" alt-text="Screenshot of stages to run with disabled stage. ":::

::: moniker-end

