---
title: Build and release jobs in Azure Pipelines and TFS
ms.custom: seodec18
description: Understand build and release jobs in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: B05BCE88-73BA-463E-B35E-B54787631B3F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 03/19/2019
monikerRange: '>= tfs-2017'
---

# Jobs

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

<a name='agent-phase'></a>

::: moniker range=">= tfs-2018"

You can organize your build or deployment pipeline into jobs. Every build or deployment pipeline has at least one job.

::: moniker-end

::: moniker range="tfs-2018"

> [!NOTE]
> You must install TFS 2018.2 to use jobs in build processes. In TFS 2018 RTM you can use jobs in release deployment processes.

::: moniker-end

::: moniker range="tfs-2017"

You can organize your deployment process into jobs. Every deployment process has at least one job.

::: moniker-end

A job is a series of tasks that run sequentially on the same target.
At design time in your job you specify a series of tasks that you want to run on a common target.
At run time (when either the build or release pipeline is triggered), each job is dispatched as one or more jobs to its target.

::: moniker range="tfs-2017"

> [!NOTE]
> You must install Update 2 to use jobs in TFS 2017, and they are available only in release deployment processes.
> Jobs in build pipelines are available in Azure Pipelines, TFS 2018.2, and newer versions.

::: moniker-end

::: moniker range="> tfs-2018"
In a build pipeline, the most common target is an agent. The other kind of target is the Azure Pipelines [server](server-phases.md).
::: moniker-end

::: moniker range="<= tfs-2018"
In a build pipeline, the most common target is an agent. The other kind of target is the server (your TFS instance).
::: moniker-end

In a deployment pipeline, the target can be either an agent, a [deployment group](deployment-group-phases.md), or the server.

::: moniker range=">= azure-devops-2019"
[!INCLUDE [container-vs-host](./_shared/container-vs-host.md)]
::: moniker-end

::: moniker range="< azure-devops-2019"
When the target is an agent, the tasks are run on the computer that hosts the agent.
::: moniker-end

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The full syntax to specify an agent job is:

```yaml

jobs:
- job: string
  timeoutInMinutes: number
  cancelTimeoutInMinutes: number
  strategy:
    maxParallel: number
    # note: `parallel` and `matrix` are mutually exclusive
    # you may specify one or the other; including both is an error
    parallel: number
    matrix: { string: { string: string } }
  pool:
    name: string
    demands: string | [ string ]
  
  container: string
  
  steps:
    - script: echo Hello world
```

The above syntax is necessary only if you want to define multiple jobs or change the properties for a job. You can skip the job syntax if you need only a single job with the standard options.
For example, the following YAML file runs a single job to print `Hello world`.

```yaml
steps:
- script: echo Hello world
```

If you want to specify just the pool, you can do that and skip the other properties. For example:

```yaml
jobs:
- job: Run this job on a Linux agent
  pool: Default # the default self-hosted agent pool in your organization
  steps:
    ...
```

It's possible to re-use some or all of a pipeline through [templates](templates.md).

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

When you create a new pipeline, it starts with a single agent job.
The properties for the agent job are displayed when you select the agent job in the editor.

---

## Demands

Use demands to specify what capabilities an agent must have to run jobs from your job.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

```yaml
pool:
  name: myPrivateAgents
  demands: agent.os -equals Windows_NT
steps:
- script: echo hello world
```

Or multiple demands:

```yaml
pool:
  name: myPrivateAgents
  demands:
  - agent.os -equals Darwin
  - anotherCapability -equals somethingElse
steps:
- script: echo hello world
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

You have the option to specify demands in the pipeline, in the jobs, or both.
If you specify demands in both the pipeline and in a job, the union of the two sets of demands is required for the system to select an agent.

---

Learn more about [agent capabilities](../agents/agents.md#capabilities).

## Container image

If you are using YAML, you can specify a Docker container to use for your agent job.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

For example, to run a script in a container:

```yaml
resources:
  containers:
  - container: dev1
    image: ubuntu:16.04
jobs:
- job: job_container
  pool:
    name: default
  container: dev1
  steps:
  - script: printenv
```

To run your job as four jobs on four different containers:

```yaml
resources:
  containers:
  - container: dev1
    image: ubuntu:14.04
  - container: dev2
    image: private:ubuntu14
    endpoint: privatedockerhub
  - container: dev3
    image: ubuntu:16.04
    options: --cpu-count 4
  - container: dev4
    image: ubuntu:16.04
    options: --hostname container-test --ip 192.168.0.1
    localImage: true
    env:
      envVariable1: envValue1
      envVariable2: envValue2
jobs:
- job: job_container
  container: $[variables['runtimeContainer']]
  pool:
    name: default
    matrix:
      container_1:
        runtimeContainer: dev1
      container_2:
        runtimeContainer: dev2
      container_3:
        runtimeContainer: dev3
      container_4:
        runtimeContainer: dev4
  steps:
  - script: printenv
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Containers are not yet supported in the web editor.

---

## Timeouts

To avoid taking up resources when your job is hung or waiting too long, it's a good idea to set a limit on how long your job is allowed to run. Use the job timeout setting to specify the limit in minutes for running the job. Setting the value to **zero** means that the job can run:

* Forever on self-hosted agents
* For 360 minutes (6 hours) on Microsoft-hosted agents with a public project and public repository
* For 60 minutes on Microsoft-hosted agents with a private project or private repository

The timeout period begins when the job starts running. It does not include the
time the job is queued or is waiting for an agent.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The `timeoutInMinutes` allows a limit to be set for the job execution time. When not specified, the default is 60 minutes. When `0` is specified, the maximum limit is used (described above).

The `cancelTimeoutInMinutes` allows a limit to be set for the job cancel time. When not specified, the default is 5 minutes.

```yaml
jobs:
- job: Test
  timeoutInMinutes: 10
  cancelTimeoutInMinutes: 2
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Select the job and then specify the timeout value.

On the **Options** tab you can specify default values for all jobs in the pipeline. If you specify a non-zero value for the job timeout, then it overrides any value that is specified in the pipeline options. If you specify a zero value, then the timeout value from the pipeline options is used. If the pipeline value is also set to zero, then there is no timeout.

---

::: moniker range="azure-devops"
> Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.
::: moniker-end

> You can also set the timeout for each task individually - see [task control options](tasks.md#controloptions).

<a name="parallelexec"></a>

## Multi-configuration

From a single job you can run multiple jobs and multiple agents in parallel. Some examples include:

* **Multi-configuration builds:** An agent job can be used in a build pipeline to build multiple configurations in parallel. For
  example, you could build a Visual C++ app for both `debug` and `release` configurations on both `x86` and `x64` platforms. To learn more, see [Visual Studio Build - multiple configurations for multiple platforms](../tasks/build/visual-studio-build.md#multiconfiguration).
  
* **Multi-configuration deployments:** An agent job can be used in a stage of a release pipeline to run multiple deployment
  jobs in parallel, for example, to different geographic regions.
  
* **Multi-configuration testing:** An agent job can be used in a build pipeline or in a
  stage of a release pipeline to run a set of tests in parallel - once for each test configuration.
  
# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The `matrix` strategy enables a job to be dispatched multiple times, with different variable sets. The `maxParallel` tag restricts the amount of parallelism. The following job will be dispatched three times with the values of Location and Browser set as specified. However, only two jobs will run at the same time.

```yaml
jobs:
- job: Test
  strategy:
    maxParallel: 2
    matrix: 
      US_IE:
        Location: US
        Browser: IE
      US_Chrome:
        Location: US
        Browser: Chrome
      Europe_Chrome:
        Location: Europe
        Browser: Chrome
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

To run multiple jobs using multi-configuration option,
  you identify a variable named a **multiplier**, and specify a list
  of values for that multiplier. A separate job is run for each value
  in the list. To use multipliers for build or deployment, you must:

* Define one or more [variables](../release/variables.md)
  on the **Variables** tab of the pipeline or in a [variable group](../library/variable-groups.md).
  Each variable, known in this context as a _multiplier_ variable,
  must be defined as a comma-delimited list of the values you want
  to pass individually to the agents.

* Enter the name of the multiplier variable, without the **$** and parentheses, as the
  value of the **Multipliers** parameter.

* If you want to execute the job for more than one multiplier variable, enter
  the variable names as a comma-delimited list - omitting the **$** and parentheses
  for each one.

* If you want to limit the number of agents used during the deployment to a
  number less than you have configured for your subscription, enter that value as the
  **Maximum number of agents** parameter.

For example, you might define two variables named **Location** and **Browser** as follows::

* **Location** = `US,Europe`
* **Browser** = `IE,Chrome,Edge,Firefox`

The following configuration will execute the deployment eight times using
a maximum of four agents at any one time:

* **Multipliers** = `Location,Browser`
* **Maximum number of agents** = `4`

With multi-configuration you can run multiple jobs, each with a different value for one or more variables (multipliers). If you want to run the same job on multiple agents, then you can use **multi-agent** option of parallelism. The test slicing example above can be accomplished through multi-agent option.

---

## Slicing

An agent job can be used to run a suite of tests in parallel. For example, you can run a large suite of 1000 tests on a single agent. Or, you can use two agents and run 500 tests on each one in parallel.
To leverage slicing, the tasks in the job should be smart enough to understand the slice they belong to.
The Visual Studio Test task is one such task that supports test slicing. If you have installed multiple agents, you can specify how the Visual Studio Test task will run in parallel on these agents.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The `parallel` strategy enables a job to be duplicated many times. The `maxParallel` tag restricts the amount of parallelism. 
Variables `System.JobPositionInPhase` and `System.TotalJobsInPhase` are added to each job. The variables can then be used within your scripts to divide work among the jobs.
See [Parallel and multiple execution using agent jobs](#parallelexec).

The following job will be dispatched 5 times with the values of `System.JobPositionInPhase` and `System.TotalJobsInPhase` set appropriately. However, only two jobs will run at the same time.

```yaml
jobs:
- job: Test
  strategy:
    parallel: 5
    maxParallel: 2
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Specify the **multi-agent** option on an agent job to leverage slicing.
The job is dispatched as many times as the number of agents you specify,
and the variables `System.JobPositionInPhase` and `System.TotalJobsInPhase` are automatically set in each job.

---

## Job variables

If you are using YAML, variables can be specified on the job. The variables can be passed to task inputs using the macro syntax $(variableName), or accessed within a script using the stage variable.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

Here's an example of defining variables in a job and using them within tasks.

```yaml
variables:
  mySimpleVar: simple var value
  "my.dotted.var": dotted var value
  "my var with spaces": var with spaces value

steps:
- script: echo Input macro = $(mySimpleVar). Env var = %MYSIMPLEVAR%
  condition: eq(variables['agent.os'], 'Windows_NT')
- script: echo Input macro = $(mySimpleVar). Env var = $MYSIMPLEVAR
  condition: in(variables['agent.os'], 'Darwin', 'Linux')
- bash: echo Input macro = $(my.dotted.var). Env var = $MY_DOTTED_VAR
- powershell: Write-Host "Input macro = $(my var with spaces). Env var = $env:MY_VAR_WITH_SPACES"
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Job variables are not yet supported in the web editor.

---

For information about using a **condition**, see [Specify conditions](conditions.md).

<a name="artifact-download"></a>

## Artifact download

# [YAML](#tab/yaml)

```yaml
# test and upload my code as an artifact named WebSite
jobs:
- job: Build
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - script: npm test
  - task: PublishBuildArtifacts@1
    inputs:
      pathtoPublish: '$(System.DefaultWorkingDirectory)'
      artifactName: WebSite

# download the artifact and deploy it only if the build job succeeded
- job: Deploy
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - checkout: none #skip checking out the default repository resource
  - task: DownloadBuildArtifacts@0
    displayName: 'Download Build Artifacts'
    inputs:
      artifactName: WebSite
      downloadPath: $(System.DefaultWorkingDirectory)

  dependsOn: Build
  condition: succeeded()
```

# [Designer](#tab/designer)

In a release pipeline, you may choose to skip the
  [download of artifacts](../release/artifacts.md#download)
  during the job execution. Use this option if you want to implement
  your own custom logic for downloading artifacts by using tasks, or if the tasks in a particular job do not rely on the artifacts.

::: moniker range=">=tfs-2018"

Alternatively, you can choose to download specific [artifacts](../release/artifacts.md#download) during the job execution in a release. Use this option if the tasks in a particular job rely on only specific artifacts.

::: moniker-end

---

For information about using **dependsOn** and **condition**, see [Specify conditions](conditions.md).

## Access to OAuth token

 You can allow tasks running in this job to access current Azure Pipelines or TFS OAuth security token.
  The token can be use to authenticate to the Azure Pipelines REST API.

# [YAML](#tab/yaml)

::: moniker range="azure-devops"

The OAuth token is always available to YAML pipelines.
It must be explicitly mapped into the task or step using `env`.
Here's an example:

```yaml
steps:
- powershell: |
    $url = "$($env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI)$env:SYSTEM_TEAMPROJECTID/_apis/build/definitions/$($env:SYSTEM_DEFINITIONID)?api-version=4.1-preview"
    Write-Host "URL: $url"
    $pipeline = Invoke-RestMethod -Uri $url -Headers @{
      Authorization = "Bearer $env:TOKEN"
    }
    Write-Host "Pipeline = $($pipeline | ConvertTo-Json -Depth 100)"
  env:
    TOKEN: $(system.accesstoken)
```

::: moniker-end
::: moniker range="< azure-devops"
YAML is not yet supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Select the **Allow scripts to access OAuth token** option in the control options for the job.

---

## Related topics

* [Multiple jobs](multiple-phases.md)
* [Server jobs](server-phases.md)
* [Deployment group jobs](deployment-group-phases.md)
* [Specify conditions](conditions.md)
