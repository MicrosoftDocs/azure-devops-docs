---
title: Build and Release Automation Phases in VSTS and TFS
description: Understand Build and Release Phases in Microsoft Visual Studio Team Services (VSTS) and Microsoft Team Foundation Server (TFS)
ms.assetid: B05BCE88-73BA-463E-B35E-B54787631B3F
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 5/3/2018
monikerRange: '>= tfs-2017'
---

# Phases

<a name='agent-phase'></a>

::: moniker range=">= tfs-2018"

You can organize your build or deployment process into phases. Every build or deployment process has at least one phase.

::: moniker-end

::: moniker range="tfs-2018"

> [!NOTE]
> You must install TFS 2018.2 to use phases in build processes. In TFS 2018 RTM you can use phases in release management deployment processes. 

::: moniker-end

::: moniker range="tfs-2017"

You can organize your deployment process into phases. Every deployment process has at least one phase.

::: moniker-end

A phase is a series of tasks that run sequentially on the same target.
At design time in your phase you specify a series of tasks that you want to run on a common target.
At run time (when either the build or release process is triggered), each phase is dispatched as one or more jobs to its target.

::: moniker range="tfs-2017"

> [!NOTE]
> You must install Update 2 to use phases in TFS 2017, and they are available only in release management deployment processes. 
> Phases in build definitions are available in VSTS, TFS 2018.2, and newer versions.

::: moniker-end

::: moniker range="vsts"
In a build process, the most common target is an agent. The other kind of target is the VSTS [server](server-phases.md).
::: moniker-end

::: moniker range="< vsts"
In a build process, the most common target is an agent. The other kind of target is the server (your TFS instance).
::: moniker-end

In a deployment process, the target can be either an agent, a [deployment group](deployment-group-phases.md), or the server.

When the target is an agent, the tasks are run on the computer that hosts the agent.

# [Web](#tab/web)

When you create a new definition, it starts with a single agent phase. 
The properties for the agent phase are displayed when you select the agent phase in the editor.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The full syntax to specify an agent phase is:

```yaml

phases:
- phase: string
  queue:
    name: string
    demands: string | [ string ]
    container: string
    timeoutInMinutes: number
    cancelTimeoutInMinutes: number
    parallel: number
    matrix: { string: { string: string } }
  steps:
    - script: echo Hello world
```

The above syntax is necessary only if you want to define multiple phases or change the properties for a phase. You can skip the phase syntax if you need only a single phase with the standard options. 
For example, the following YAML file runs a single phase on the Hosted VS2017 queue.

```yaml
steps:
- script: echo Hello world
```

If you want to specify just the queue, you can do that and skip the other properties. For example:

```yaml
phases:
- phase: Run this job on a Linux agent
  queue: Hosted Linux
  steps:
    ...
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Demands

Use demands to specify what capabilities an agent must have to run jobs from your phase.

# [Web](#tab/web)

You have the option to specify demands in the definition, in the phases, or both.
If you specify demands in both the definition and in a phase, the union of the two sets of demands is required for the system to select an agent.

# [YAML](#tab/yaml)

::: moniker range="vsts"

```yaml
queue:
  name: myPrivateAgents
  demands: agent.os -equals Windows_NT
steps:
- script: echo hello world
```

Or multiple demands:

```yaml
queue:
  name: myPrivateAgents
  demands:
  - agent.os -equals Darwin
  - anotherCapability -equals somethingElse
steps:
- script: echo hello world
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

Learn more about [build and release agent capabilities](../agents/agents.md#capabilities).

## Container image

If you are using YAML, you can specify a Docker container to use for your agent phase. 

# [Web](#tab/web)

Containers are not yet supported in the web editor.

# [YAML](#tab/yaml)

::: moniker range="vsts"

For example, to run a script in a container:

```yaml
resources:
  containers:
  - container: dev1
    image: ubuntu:16.04
phases:
- phase: phase_container
  queue:
    name: default
    container: dev1
  steps:
  - script: printenv
```

To run your phase as four jobs on four different containers:

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
phases:
- phase: phase_container
  queue:
    name: default
    container: $[variables['runtimeContainer']]
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
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Timeouts

To avoid hanging up your resources when your process is hung or waiting too long, it's a good idea to set a limit on how long your process is allowed to run. 
Use the phase timeout setting to specify the limit in minutes for jobs run by this phase. 
A zero value means that the jobs will run for an effectively unlimited amount of time.

# [Web](#tab/web)

Select the phase and then specify the timeout value. 

On the **Options** tab you can specify default values for all phases in the definition. If you specify a non-zero value for the phase timeout, then it overrides any value that is specified in the definition options. If you specify a zero value, then the timeout value from the definition options is used. If the definition value is also set to zero, then there is no timeout.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The `timeoutInMinutes` allows a limit to be set for the job execution time. When not specified, the default is 60 minutes. The `cancelTimeoutInMinutes` allows a limit to be set for the job cancel time. When not specified, the default is 5 minutes.

```yaml
queue:
  timeoutInMinutes: number
  cancelTimeoutInMinutes: number
```

::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

::: moniker range="vsts"
> Jobs targeting Microsoft-hosted agents have [additional restrictions](../agents/hosted.md) on how long they may run.
::: moniker-end

> You can also set the timeout for each task individually - see [task control options](tasks.md#controloptions). 

<a name="parallelexec"></a>
## Multi-configuration

From a single phase you can run multiple jobs and multiple agents in parallel. Some examples include:

* **Multi-configuration builds:** An agent phase can be used in a build definition to build multiple configurations in parallel. For
  example, you could build a Visual C++ app for both `debug` and `release` configurations on both `x86` and `x64` platforms. To learn more, see [Visual Studio Build - multiple configurations for multiple platforms](../tasks/build/visual-studio-build.md#multiconfiguration).
  
* **Multi-configuration deployments:** An agent phase can be used in an environment of a release definition to run multiple deployment
  jobs in parallel, for example, to different geographic regions. 
  
* **Multi-configuration testing:** An agent phase can be used in a build definition or in an
  environment of a release definition to run a set of tests in parallel - once for each test configuration. 
  
# [Web](#tab/web)

To run multiple jobs using multi-configuration option,
  you identify a variable named a **multiplier**, and specify a list
  of values for that multiplier. A separate job is run for each value
  in the list. To use multipliers for build or deployment, you must:

* Define one or more [variables](../release/variables.md)
  on the **Variables** tab of the definition or in a [variable group](../library/variable-groups.md).
  Each variable, known in this context as a _multiplier_ variable,
  must be defined as a comma-delimited list of the values you want
  to pass individually to the agents.

* Enter the name of the multiplier variable, without the **$** and parentheses, as the
  value of the **Multipliers** parameter.

* If you want to execute the phase for more than one multiplier variable, enter
  the variable names as a comma-delimited list - omitting the **$** and parentheses
  for each one.

* If you want to limit the number of agents used during the deployment to a
  number less than you have configured for your account, enter that value as the
  **Maximum number of agents** parameter.

For example, you might define two variables named **Location** and **Browser** as follows::

* **Location** = `US,Europe`
* **Browser** = `IE,Chrome,Edge,Firefox`

The following configuration will execute the deployment eight times using
a maximum of four agents at any one time:

* **Multipliers** = `Location,Browser`
* **Maximum number of agents** = `4`

With multi-configuration you can run multiple jobs, each with a different value for one or more variables (multipliers). If you want to run the same job on multiple agents, then you can use **multi-agent** option of parallelism. The test slicing example above can be accomplished through multi-agent option.

# [YAML](#tab/yaml)

::: moniker range="vsts"

The `matrix` setting enables a phase to be dispatched multiple times, with different variable sets. The `parallel` tag restricts the amount of parallelism. The following phase will be dispatched three times with the values of Location and Browser set as specified. However, only two jobs will run in parallel at a time.

```yaml
phases:
- phase: Test
  queue:
    parallel: 2
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
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Slicing

An agent phase can be used to run a suite of tests in parallel. For example, you can run a large suite of 1000 tests on a single agent. Or, you can use two agents and run 500 tests on each one in parallel. To leverage slicing, the tasks in the phase should be smart enough to understand the slice they belong to. The Visual Studio Test task is one such task that supports test slicing. If you have installed multiple agents, you can specify how the Visual Studio Test task will run in parallel on these agents. Variables `System.SliceNumber` and `System.SliceCount` are added to each job.

# [Web](#tab/web)

Specify the **multi-agent** option on an agent phase to leverage slicing. The job is dispatched as many times as the number of agents you specify, and the variables `System.SliceNumber` and `System.SliceCount` are automatically set in each job.

# [YAML](#tab/yaml)

::: moniker range="vsts"

When `parallel` is specified and `matrix` is not defined, the setting indicates how many jobs to dispatch. Variables `System.SliceNumber` and `System.SliceCount` are added to each job. The variables can then be used within your scripts to divide work among the jobs. See [Parallel and multiple execution using agent phases](#parallelexec).

```yaml
phases:
- phase: Test
  queue:
    parallel: 2
```
::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Phase variables
If you are using YAML, variables can be specified on the phase. The variables can be passed to task inputs using the macro syntax $(variableName), or accessed within a script using the environment variable.

# [Web](#tab/web)

Phase variables are not yet supported in the web editor.

# [YAML](#tab/yaml)

::: moniker range="vsts"

Here is an example of defining variables in a phase and using them within tasks.

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
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

<a name="artifact-download"></a>
## Artifact download

# [Web](#tab/web)

In a release definition, you may choose to skip the
  [download of artifacts](../release/artifacts.md#download)
  during the job execution. Use this option if you want to implement
  your own custom logic for downloading artifacts by using tasks, or if the tasks in a particular phase do not rely on the artifacts.

::: moniker range=">=tfs-2018"

Alternatively, You can choose to download specific 
  [artifacts](../release/artifacts.md#download) during the job execution in a release. Use this option if the tasks in a particular phase rely on only specific artifacts.

::: moniker-end

# [YAML](#tab/yaml)

These options are not available in YAML.

---

## Access to OAuth token

 You can allow tasks running in this phase to access current VSTS or TFS OAuth security token.
  The token can be use to authenticate to the VSTS REST API.

# [Web](#tab/web)

Select the **Allow scripts to access OAuth token** option in the control options for the phase.

# [YAML](#tab/yaml)

::: moniker range="vsts"

OAuth token is always made available to the scripts that run through YAML. Here is an example:

```yaml
steps:
- powershell: |
    $url = "$($env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI)$env:SYSTEM_TEAMPROJECTID/_apis/build/definitions/$($env:SYSTEM_DEFINITIONID)?api-version=4.1-preview"
    Write-Host "URL: $url"
    $definition = Invoke-RestMethod -Uri $url -Headers @{
      Authorization = "Bearer $env:TOKEN"
    }
    Write-Host "Definition = $($definition | ConvertTo-Json -Depth 100)"
  env:
    TOKEN: $(system.accesstoken)
```
::: moniker-end
::: moniker range="< vsts"
YAML is not yet supported in TFS.
::: moniker-end
---

## Related topics

* [Multiple phases](multiple-phases.md)
* [Server phases](server-phases.md)
* [Deployment group phases](deployment-group-phases.md)