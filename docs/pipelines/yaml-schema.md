---
title: YAML schema
ms.custom: seodec18
description: An overview of all YAML features.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2c586863-078f-4cfe-8158-167080cd08c1
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.reviewer: macoope
ms.date: 12/03/2019
monikerRange: '>= azure-devops-2019'
---

# YAML schema reference

This article is a detailed reference guide to Azure Pipelines YAML pipelines. It includes a catalog of all supported YAML capabilities and the available options.

::: moniker range="azure-devops"

> The best way to get started with YAML pipelines is through the
[quickstart guide](create-first-pipeline.md).
> After that, to learn how to configure your YAML pipeline for your needs, see conceptual topics like [Build variables](process/variables.md) and [Jobs](process/phases.md).

::: moniker-end

::: moniker range="< azure-devops"

> To learn how to configure your YAML pipeline for your needs, see conceptual topics like [Build variables](process/variables.md) and [Jobs](process/phases.md).

::: moniker-end

## Pipeline structure

::: moniker range="> azure-devops-2019"

Pipelines are one or more stages that describe a CI/CD process.
Stages are the major divisions in a pipeline.
The stages "build this app," "run these tests," and "deploy to preproduction" are good examples.

Stages are one or more jobs.
A job is a unit of work assignable to a particular machine.
You can arrange both stages and jobs into dependency graphs.
Examples include "run this stage before that one" and "this job depends on the output of that job."

Jobs are a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of a YAML file, as shown in this example:

- Pipeline
  - Stage A
    - Job 1
      - Step 1.1
      - Step 1.2
      - ...
    - Job 2
      - Step 2.1
      - Step 2.2
      - ...
  - Stage B
    - ...

Simple pipelines don't require all of these levels. For example,
in a single-job build you can omit the containers for stages and jobs because there
are only steps. And because many options shown in this article aren't required and have good
defaults, your YAML definitions are unlikely to include all of them.

::: moniker-end

::: moniker range="azure-devops-2019"

Pipelines are one or more jobs that describe a CI/CD process.
Jobs are units of work assignable to a particular machine.
You can arrange jobs into dependency graphs like "this job depends on the output of that job."

Jobs are a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of a YAML file, as shown in this example:

- Pipeline
  - Job 1
    - Step 1.1
    - Step 1.2
    - ...
  - Job 2
    - Step 2.1
    - Step 2.2
    - ...

For single-job pipelines, you can omit the jobs container because there
are only steps. And because many options shown in this article aren't required and have good
defaults, your YAML definitions are unlikely to include all of them.

::: moniker-end

### Conventions

These are the code conventions used in this article:

* To the left of `:` is a literal keyword used in pipeline definitions.
* To the right of `:` is a data type. The data type can be a primitive type like **string** or a reference to a rich structure defined elsewhere in this article.
* `[` *datatype* `]` indicates an array of the mentioned data type. For instance, `[ string ]` is an array of strings.
* `{` *datatype* `:` *datatype* `}` indicates a mapping of one data type to another. For instance, `{ string: string }` is a mapping of strings to strings.
* `|` indicates there are multiple data types available for the keyword. For instance, `job | templateReference` means either a job definition or a template reference is allowed.

### YAML basics

This document covers the schema of an Azure Pipelines YAML file.
To learn the basics of YAML, see [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).
Azure Pipelines doesn't support all YAML features. Unsupported features include anchors, complex keys, and sets.

## Pipeline

#### [Schema](#tab/schema/)

::: moniker range="> azure-devops-2019"

```yaml
name: string  # build numbering format
resources:
  pipelines: [ pipelineResource ]
  containers: [ containerResource ]
  repositories: [ repositoryResource ]
variables: { string: string } | [ variable | templateReference ]
trigger: trigger
pr: pr
stages: [ stage | templateReference ]
```

If you have a single [stage](#stage), you can omit the `stages` keyword and directly specify the [jobs](#job) keyword, as shown here:

```yaml
# ... other pipeline-level keywords
jobs: [ job | templateReference ]
```

If you have a single stage and a single job, you can omit the `stages` and `jobs` keywords and directly specify the [steps](#steps) keyword, as shown here:

```yaml
# ... other pipeline-level keywords
steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

::: moniker-end

::: moniker range="azure-devops-2019"

```yaml
name: string  # build numbering format
resources:
  containers: [ containerResource ]
  repositories: [ repositoryResource ]
variables: { string: string } | [ variable | templateReference ]
trigger: trigger
pr: pr
jobs: [ job | templateReference ]
```

If you have a single job, you can omit the `jobs` keyword and directly specify [steps](#steps):

```yaml
# ... other pipeline-level keywords
steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

::: moniker-end

#### [Example](#tab/example/)

```yaml
name: $(Date:yyyyMMdd)$(Rev:.r)
variables:
  var1: value1
jobs:
- job: One
  steps:
  - script: echo First step!
```

* * *
To learn more about pipeline structure, see [pipelines with multiple jobs](process/phases.md?tabs=yaml),
using [containers](#container-resource) and [repositories](#repository-resource) in pipelines,
[triggers](#triggers), [variables](process/variables.md?tabs=yaml), and
[build number formats](process/run-number.md).

::: moniker range="> azure-devops-2019"

## Stage

A stage is a collection of related jobs.
By default, stages run sequentially. Each stage starts only after the preceding stage is complete.

Use approval checks to manually control when a stage should run. These checks are commonly used to control deployments to production environments.

Checks are a mechanism available to the *resource owner* to control when a stage in a pipeline consumes a resource. As an owner of a resource like an environment, you can define checks that are required before a stage that consumes the resource can start.

Currently, manual approval checks are supported on [environments](#environment).
For more information, see [Approvals](process/approvals.md).

# [Schema](#tab/schema)

```yaml
stages:
- stage: string  # name of the stage (A-Z, a-z, 0-9, and underscore)
  displayName: string  # friendly name to display in the UI
  dependsOn: string | [ string ]
  condition: string
  variables: { string: string } | [ variable | variableReference ] 
  jobs: [ job | templateReference]
```

# [Example](#tab/example)

This example runs three stages, one after another.
The middle stage runs two jobs in parallel.

```yaml
stages:
- stage: Build
  jobs:
  - job: BuildJob
    steps:
    - script: echo Building!
- stage: Test
  jobs:
  - job: TestOnWindows
    steps:
    - script: echo Testing on Windows!
  - job: TestOnLinux
    steps:
    - script: echo Testing on Linux!
- stage: Deploy
  jobs:
  - job: Deploy
    steps:
    - script: echo Deploying the code!
```

This example runs two stages in parallel.
For brevity, the jobs and steps have been omitted.

```yaml
stages:
- stage: BuildWin
  displayName: Build for Windows
- stage: BuildMac
  displayName: Build for Mac
  dependsOn: [] # by specifying an empty array, this stage doesn't depend on the stage before it
```

---

To learn more about stage structure, see [stages](process/stages.md), [conditions](process/conditions.md?tabs=yaml), and [variables](#variables).
<!-- TODO: link to info about stage dependencies -->

::: moniker-end

## Job

A [job](process/phases.md?tabs=yaml) is a collection of [steps](#steps) to be run by an
[agent](agents/agents.md) or on a [server](#server). Jobs can be
run [conditionally](process/phases.md?tabs=yaml#conditions), and they
might [depend on earlier jobs](process/phases.md?tabs=yaml#dependencies).

# [Schema](#tab/schema)

```yaml
jobs:
- job: string  # name of the job (A-Z, a-z, 0-9, and underscore)
  displayName: string  # friendly name to display in the UI
  dependsOn: string | [ string ]
  condition: string
  strategy:
    parallel: # parallel strategy; see the following "Parallel" topic
    matrix: # matrix strategy; see the following "Matrix" topic
    maxParallel: number # maximum number of matrix jobs to run simultaneously
  continueOnError: boolean  # 'true' if future jobs should run even if this job fails; defaults to 'false'
  pool: pool # see the following "Pool" schema
  workspace:
    clean: outputs | resources | all # what to clean up before the job runs
  container: containerReference # container to run this job inside of
  timeoutInMinutes: number # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: number # how much time to give 'run always even if cancelled tasks' before killing them
  variables: { string: string } | [ variable | variableReference ] 
  steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
  services: { string: string | container } # container resources to run as a service container
```

For more information about workspaces, including clean options, see the [workspace](process/phases.md#workspace) topic in [Jobs](process/phases.md).

# [Example](#tab/example)

```yaml
jobs:
- job: MyJob
  displayName: My First Job
  continueOnError: true
  workspace:
    clean: outputs
  steps:
  - script: echo My first job
```

---

To learn more about jobs, see [variables](process/variables.md?tabs=yaml), [steps](#steps), [pools](#pool), and [server jobs](#server).


> [!Note]
> If you have only one stage and one job, you can use [single-job syntax](process/phases.md?tabs=yaml)
> as a shorter way to describe the steps to run.

### Container reference

A `container` reference is supported by jobs.

# [Schema](#tab/schema)

```yaml
container: string # Docker Hub image reference or resource alias
```

```yaml
container:
  image: string  # container image name
  options: string  # arguments to pass to container at startup
  endpoint: string  # endpoint for a private container registry
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
jobs:
- job: RunsInContainer
  container: ubuntu:16.04 # Docker Hub image reference
```

```yaml
jobs:
- job: RunsInContainer
  container: # inline container specification
    image: ubuntu:16.04
    options: --hostname container-test --ip 192.168.0.1
```

```yaml
resources:
  containers:
  - container: linux # reusable alias
    image: ubuntu:16.04

jobs:
- job: a
  container: linux # reference

- job: b
  container: linux # reference
```

---

### Strategies

The `matrix` and `parallel` keywords represent mutually exclusive strategies for duplicating a job.

#### Matrix

Use of matrices generates copies of a job with different inputs. Matrices are useful for
testing against different configurations or platform versions.

#### [Schema](#tab/schema/)

```yaml
strategy:
  matrix: { string1: { string2: string3 } }
  maxParallel: number
```

For each occurrence of *string1* in the matrix, a copy of the job is generated. The name *string1*
is the copy's name and is appended to the name of the job. For each occurrence of
*string2*, a variable called *string2* with the value *string3* is available
to the job.

> [!NOTE]
> Matrix configuration names must contain only basic Latin alphabet letters (A-Z and a-z), digits (0-9), and underscores (`_`).
> They must start with a letter.
> Also, their length must be 100 characters or fewer.

<a name="maximum-parallelism"></a>
Optionally, `maxParallel` specifies the maximum number of simultaneous matrix legs to run at once.

::: moniker range="> azure-devops-2019"

If `maxParallel` isn't specified or is set to 0, no limit is applied.

::: moniker-end

::: moniker range="azure-devops-2019"

If `maxParallel` isn't specified, no limit is applied.

::: moniker-end

#### [Example](#tab/example/)

```yaml
jobs:
- job: Build
  strategy:
    matrix:
      Python35:
        PYTHON_VERSION: '3.5'
      Python36:
        PYTHON_VERSION: '3.6'
      Python37:
        PYTHON_VERSION: '3.7'
    maxParallel: 2
```

This matrix creates three jobs: "Build Python35," "Build Python36," and "Build Python37."
A variable named PYTHON_VERSION is available within each job. In "Build Python35," the variable
is set to "3.5". It is likewise set to "3.6" in "Build Python36."
Only two jobs can run simultaneously.

* * *
#### Parallel

This strategy specifies how many duplicates of a job should run. It's useful for
slicing up a large test matrix. The [VS Test task](tasks/test/vstest.md)
understands how to divide the test load across the number of jobs scheduled.

# [Schema](#tab/schema)

```yaml
strategy:
  parallel: number
```

# [Example](#tab/example)

```yaml
jobs:
- job: SliceItFourWays
  strategy:
    parallel: 4
```

---

::: moniker range="azure-devops"

## Deployment job

A [deployment job](process/deployment-jobs.md) is a special type of job that is a collection of steps to be run sequentially against the environment. In YAML pipelines, we recommend that you put your deployment steps in a deployment job.

# [Schema](#tab/schema)

```YAML
jobs:
- deployment: string   # name of the deployment job: A-Z, a-z, 0-9, and underscore
  displayName: string  # friendly name to display in the UI
  pool:                # see the following "Pool" schema
    name: string
    demands: string | [ string ]
  dependsOn: string 
  condition: string 
  continueOnError: boolean                # 'true' if future jobs should run even if this job fails; defaults to 'false'
  timeoutInMinutes: nonEmptyString        # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: nonEmptyString  # how much time to give 'run always even if cancelled tasks' before killing them
  variables: { string: string } | [ variable | variableReference ]  
  environment: string  # target environment name and optionally a resource-name to record the deployment history; format: <environment-name>.<resource-name>
  strategy:
    runOnce:
      deploy:
        steps:
        - script: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

# [Example](#tab/example)

```YAML
jobs:
  # track deployments on the environment
- deployment: DeployWeb
  displayName: deploy Web App
  pool:
    vmImage: 'Ubuntu-16.04'
  # creates an environment if it doesn't exist
  environment: 'smarthotel-dev'
  strategy:
    # default deployment strategy, more coming...
    runOnce:
      deploy:
        steps:
        - script: echo my first deployment
```
::: moniker-end

---

## Steps

Steps are a linear sequence of operations that make up a job.
Each step runs in its own process on an agent and has access to the pipeline workspace on disk.
This behavior means environment variables aren't preserved between steps but filesystem changes are.

# [Schema](#tab/schema)

```yaml
steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

# [Example](#tab/example)

```yaml
steps:
- script: echo This runs in the default shell on any machine
- bash: |
    echo This multiline script always runs in Bash.
    echo Even on Windows machines!
- pwsh: |
    Write-Host "This multiline script always runs in PowerShell Core."
    Write-Host "Even on non-Windows machines!"
```

---

For more information about steps, see the schema references for [script](#script),
[bash](#bash), [pwsh](#pwsh), [powershell](#powershell), [checkout](#checkout), [task](#task),
and [step templates](#step-templates).

All steps, whether documented in this article or not, allow the following properties:

- `displayName`
- `name`
- `condition`
- `continueOnError`
- `enabled`
- `env`
- `timeoutInMinutes`

## Variables

You can add hard-coded values directly or reference [variable groups](library/variable-groups.md).
Specify variables at the pipeline, stage, or job level.

#### [Schema](#tab/schema/)
For a simple set of hard-coded variables, use this syntax:

```yaml
variables: { string: string }
```

To include variable groups, switch to this list syntax:

```yaml
variables:
- name: string # name of a variable
  value: any # value of the variable
- group: string # name of a variable group
```

Use of `name`/`value` pairs and the `group` keyword can be repeated.

Variables can also be included from [templates](#variable-templates).

#### [Example](#tab/example/)
::: moniker range="> azure-devops-2019"

```yaml
variables:      # pipeline-level
  MY_VAR: 'my value'
  ANOTHER_VAR: 'another value'

stages:
- stage: Build
  variables:    # stage-level
    STAGE_VAR: 'that happened'

  jobs:
  - job: FirstJob
    variables:  # job-level
      JOB_VAR: 'a job var'
    steps:
    - script: echo $(MY_VAR) $(STAGE_VAR) $(JOB_VAR)
```

::: moniker-end

::: moniker range="azure-devops-2019"

```yaml
variables:      # pipeline-level
  MY_VAR: 'my value'
  ANOTHER_VAR: 'another value'

jobs:
- job: FirstJob
  variables:  # job-level
    JOB_VAR: 'a job var'
  steps:
  - script: echo $(MY_VAR) $(STAGE_VAR) $(JOB_VAR)
```

::: moniker-end

```yaml
variables:
- name: MY_VARIABLE           # hard-coded value
  value: some value
- group: my-variable-group-1  # variable group
- group: my-variable-group-2  # another variable group
```

* * *
## Template references

> [!NOTE]
> Be sure to see the full [template expression syntax](process/templates.md#template-expressions) (all forms of `${{ }}`).

::: moniker range="> azure-devops-2019"

You can export reusable sections of your pipeline to separate files.
These separate files are known as templates.
Azure Pipelines supports these four kinds of templates:

- [Stage](#stage-templates)
- [Job](#job-templates)
- [Step](#step-templates)
- [Variable](#variable-templates)

::: moniker-end

::: moniker range="azure-devops-2019"

You can export reusable sections of your pipeline to separate files.
These separate files are known as templates.
Azure DevOps Server 2019 supports these two kinds of templates:

- [Job](#job-templates)
- [Step](#step-templates)

::: moniker-end

Templates can themselves include other templates.
Azure Pipelines supports a maximum of 50 unique template files in a single pipeline.

::: moniker range="> azure-devops-2019"
### Stage templates

You can define a set of stages in one file and use them multiple times in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string # name of template to include
  parameters: { string: any } # provided parameters
```

In the included template:

```yaml
parameters: { string: any } # expected parameters
stages: [ stage ]
```

# [Example](#tab/example)

In this example, a stage is repeated twice for two different testing regimes.
The stage itself is specified only once.

```yaml
# File: stages/test.yml

parameters:
  name: ''
  testFile: ''

stages:
- stage: Test_${{ parameters.name }}
  jobs:
  - job: ${{ parameters.name }}_Windows
    pool:
      vmImage: vs2017-win2016
    steps:
    - script: npm install
    - script: npm test -- --file=${{ parameters.testFile }}
  - job: ${{ parameters.name }}_Mac
    pool:
      vmImage: macos-10.13
    steps:
    - script: npm install
    - script: npm test -- --file=${{ parameters.testFile }}
```

```yaml
# File: azure-pipelines.yml

stages:
- template: stages/test.yml  # Template reference
  parameters:
    name: Mini
    testFile: tests/miniSuite.js

- template: stages/test.yml  # Template reference
  parameters:
    name: Full
    testFile: tests/fullSuite.js
```

---
::: moniker-end

### Job templates

You can define a set of jobs in one file and use them multiple times in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string # name of template to include
  parameters: { string: any } # provided parameters
```

In the included template:

```yaml
parameters: { string: any } # expected parameters
jobs: [ job ]
```

# [Example](#tab/example)

In this example, a single job is repeated on three platforms.
The job itself is specified only once.

```yaml
# File: jobs/build.yml

parameters:
  name: ''
  pool: ''
  sign: false

jobs:
- job: ${{ parameters.name }}
  pool: ${{ parameters.pool }}
  steps:
  - script: npm install
  - script: npm test
  - ${{ if eq(parameters.sign, 'true') }}:
    - script: sign
```

```yaml
# File: azure-pipelines.yml

jobs:
- template: jobs/build.yml  # Template reference
  parameters:
    name: macOS
    pool:
      vmImage: 'macOS-10.13'

- template: jobs/build.yml  # Template reference
  parameters:
    name: Linux
    pool:
      vmImage: 'ubuntu-16.04'

- template: jobs/build.yml  # Template reference
  parameters:
    name: Windows
    pool:
      vmImage: 'vs2017-win2016'
    sign: true  # Extra step on Windows only
```

---

See [templates](process/templates.md) for more about working with job templates.

### Step templates

You can define a set of steps in one file and use them multiple times in another file.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
steps:
- template: string  # reference to template
  parameters: { string: any } # provided parameters
```

In the included template:

```yaml
parameters: { string: any } # expected parameters
steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
```

# [Example](#tab/example)

```yaml
# File: steps/build.yml

steps:
- script: npm install
- script: npm test
```

```yaml
# File: azure-pipelines.yml

jobs:
- job: macOS
  pool:
    vmImage: 'macOS-10.13'
  steps:
  - template: steps/build.yml # Template reference

- job: Linux
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - template: steps/build.yml # Template reference

- job: Windows
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - template: steps/build.yml # Template reference
  - script: sign              # Extra step on Windows only
```

---

See [templates](process/templates.md) for more about working with templates.

::: moniker range="> azure-devops-2019"

### Variable templates

You can define a set of variables in one file and use them multiple times in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string            # name of template file to include
  parameters: { string: any } # provided parameters
```

In the included template:

```yaml
parameters: { string: any }   # expected parameters
variables: [ variable ]
```

# [Example](#tab/example)

In this example, a set of variables is repeated across multiple pipelines.
The variables are specified only once.

```yaml
# File: variables/build.yml
variables:
- name: vmImage
  value: vs2017-win2016
- name: arch
  value: x64
- name: config
  value: debug
```

```yaml
# File: component-x-pipeline.yml
variables:
- template: variables/build.yml  # Template reference
pool:
  vmImage: ${{ variables.vmImage }}
steps:
- script: build x ${{ variables.arch }} ${{ variables.config }}
```

```yaml
# File: component-y-pipeline.yml
variables:
- template: variables/build.yml  # Template reference
pool:
  vmImage: ${{ variables.vmImage }}
steps:
- script: build y ${{ variables.arch }} ${{ variables.config }}
```

---

::: moniker-end

## Resources

A resource is any external service that is consumed as part of your pipeline. An example of a resource is another CI/CD pipeline that produces:

- Artifacts like Azure Pipelines or Jenkins.
- Code repositories like GitHub, Azure Repos, or Git.
- Container-image registries like Azure Container Registry or Docker hub.

Resources in YAML represent sources of pipelines, containers, repositories, and types.

### General schema

```yaml
resources:
  pipelines: [ pipeline ]  
  repositories: [ repository ]
  containers: [ container ]
```

### Pipeline resource

If you have an Azure pipeline that produces artifacts, your pipeline can consume the artifacts by defining a `pipeline` resource.
You can also enable pipeline completion triggers.

# [Schema](#tab/schema)

```yaml
resources: 
  pipelines:
  - pipeline: string  # identifier for the pipeline resource
    project:  string # project for the build pipeline; optional input for current project
    source: string  # source pipeline definition name
    branch: string  # branch to pick the artifact, optional; defaults to all branches
    version: string # pipeline run number to pick artifact; optional; defaults to last successfully completed run
    trigger:     # optional; Triggers are not enabled by default.
      branches:  
        include: [string] # branches to consider the trigger events, optional; defaults to all branches.
        exclude: [string] # branches to discard the trigger events, optional; defaults to none.
```
# [Example](#tab/example)

```yaml
resources: 
  pipelines:
  - pipeline: MyAppA 
    source: MyCIPipelineA
  - pipeline: MyAppB
    source: MyCIPipelineB
    trigger: true
  - pipeline: MyAppC
    project:  DevOpsProject 
    source: MyCIPipelineC
    branch: releases/M159  
    version: 20190718.2 
    trigger:
      branches:  
        include:  
        - master
        - releases/*
        exclude:   
        - users/*  
```

---

>[!IMPORTANT]
>When you define a resource trigger, if the `pipeline` resource is from the same repo as the current pipeline, triggering follows the same branch and commit on which the event is raised. However, if the `pipeline` resource is from a different repo, the current pipeline is triggered on the master branch.

#### The `pipeline` resource metadata as predefined variables

In each run, the metadata for a `pipeline` resource is available to all of the jobs as predefined variables.

```yaml
resources.pipeline.<Alias>.projectName 
resources.pipeline.<Alias>.projectID 
resources.pipeline.<Alias>.pipelineName 
resources.pipeline.<Alias>.pipelineID 
resources.pipeline.<Alias>.runName 
resources.pipeline.<Alias>.runID
resources.pipeline.<Alias>.runURI
resources.pipeline.<Alias>.sourceBranch 
resources.pipeline.<Alias>.sourceCommit
resources.pipeline.<Alias>.sourceProvider 
resources.pipeline.<Alias>.requestedFor
resources.pipeline.<Alias>.requestedForID
```

Your pipeline can consume artifacts from a pipeline resource by using a `download` task. See the [download](yaml-schema.md#download) keyword topic for more.


### Container resource

[Container jobs](process/container-phases.md) let you isolate your tools and
dependencies inside a container. The agent launches an instance of your
specified container then runs steps inside it. The `container` resource lets
you specify your container images.

[Service containers](process/service-containers.md) run alongside a job to
provide various dependencies such as databases.

# [Schema](#tab/schema)

```yaml
resources:
  containers:
  - container: string  # identifier (A-Z, a-z, 0-9, and underscore)
    image: string  # container image name
    options: string  # arguments to pass to container at startup
    endpoint: string  # reference to a service connection for the private registry
    env: { string: string }  # list of environment variables to add
    ports: [ string ] # ports to expose on the container
    volumes: [ string ] # volumes to mount on the container
```

# [Example](#tab/example)

```yaml
resources:
  containers:
  - container: linux
    image: ubuntu:16.04
  - container: windows
    image: myprivate.azurecr.io/windowsservercore:1803
    endpoint: my_acr_connection
  - container: my_service
    image: my_service:tag
    ports:
    - 8080:80 # bind container port 80 to 8080 on the host machine
    - 6379 # bind container port 6379 to a random available port on the host machine
    volumes:
    - /src/dir:/dst/dir # mount /src/dir on the host into /dst/dir in the container
```

---

### Repository resource

If your pipeline has [templates in another repository](process/templates.md#using-other-repositories), you must
let the system know about that repository. The `repository` resource lets you
specify an external repository.

# [Schema](#tab/schema)

```yaml
resources:
  repositories:
  - repository: string  # identifier (A-Z, a-z, 0-9, and underscore)
    type: enum  # see the following "Type" topic
    name: string  # repository name (format depends on `type`)
    ref: string  # ref name to use, defaults to 'refs/heads/master'
    endpoint: string  # name of the service connection to use (for non-Azure Repos types)
```

# [Example](#tab/example)
```yaml

resources:
  repositories:
  - repository: common
    type: github
    name: Contoso/CommonTools
```

---

#### Type

Pipelines support two types of repositories: `git` and `github`.

The `git` repository refers to
Azure Repos Git repos. If you specify `type: git`, `name` refers to another
repository in the same project. An example is `name: otherRepo`. To refer to a repo in
another project within the same organization, prefix the name with that project's name.
An example is `name: OtherProject/otherRepo`.

If you specify `type: github`, `name` is the full name of the GitHub
repo and includes the user or organization. An example is `name: Microsoft/vscode`. Also,
GitHub repos require a [service connection](library/service-endpoints.md)
for authorization.

## Triggers

* [Push trigger](#push-trigger)
* [Pull request trigger](#pr-trigger)
* [Scheduled trigger](#scheduled-trigger)

> [!NOTE]
> Trigger blocks can't contain variables or template expressions.

### Push trigger

A push trigger specifies what branches cause a continuous integration build to
run. If no push trigger is specified, pushes to every branch trigger a build.
Learn more about [triggers](build/triggers.md?tabs=yaml#ci-triggers)
and how to specify them
 Also, be sure to see the note about [wildcards in triggers](build/triggers.md#wildcards).

#### [Schema](#tab/schema/)

There are three distinct options for `trigger`: a list of branches to include, a way to disable CI triggering, and the full syntax for ultimate control.

List syntax:

```yaml
trigger: [ string ] # list of branch names
```

Disablement syntax:

```yaml
trigger: none # will disable CI builds entirely
```

Full syntax:

::: moniker range="> azure-devops-2019"

```yaml
trigger:
  batch: boolean # batch changes if true (the default); start a new build for every push if false
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  tags:
    include: [ string ] # tag names which will trigger a build
    exclude: [ string ] # tag names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
```

::: moniker-end

::: moniker range="<= azure-devops-2019"

```yaml
trigger:
  batch: boolean # batch changes if true (the default); start a new build for every push if false
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
```

::: moniker-end

>[!IMPORTANT]
>When you specify a `trigger`, only branches that are explicitly configured to be included trigger a pipeline. Inclusions are processed first, and then exclusions are removed from that list. If you specify an exclusion but don't specify any inclusions, nothing triggers.

#### [Example](#tab/example/)

List syntax:

```yaml
trigger:
- master
- develop
```

Disable syntax:

```yaml
trigger: none # will disable CI builds (but not PR builds)
```

Full syntax:

```yaml
trigger:
  batch: true
  branches:
    include:
    - features/*
    exclude:
    - features/experimental/*
  paths:
    exclude:
    - README.md
```

* * *
### PR trigger

A pull request trigger specifies what branches cause a pull request build to
run. If no pull request trigger is specified, pull requests to every branch trigger a build.
Learn more about [pull request triggers](build/triggers.md?tabs=yaml#pr-triggers)
and how to specify them.

::: moniker range="azure-devops"

> [!IMPORTANT]
> YAML PR triggers are supported only in GitHub and Bitbucket Cloud. If you use Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) to trigger your build pipeline for validation.

::: moniker-end

::: moniker range="azure-devops-2019"

> [!IMPORTANT]
> YAML PR triggers are supported only in GitHub. If you use Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) to trigger your build pipeline for validation.

::: moniker-end

# [Schema](#tab/schema)

There are three distinct options for `pr`: a list of branches to include, a way to disable PR triggering, and the full syntax for ultimate control.

List syntax:

```yaml
pr: [ string ] # list of branch names
```

Disablement syntax:

```yaml
pr: none # will disable PR builds entirely; will not disable CI triggers
```

Full syntax:

```yaml
pr:
  autoCancel: boolean # indicates whether additional pushes to a PR should cancel in-progress runs for the same PR. Defaults to true
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
```

>[!IMPORTANT]
>When you specify a `pr` trigger, only branches that are explicitly configured to be included trigger a pipeline. Inclusions are processed first, and then exclusions are removed from that list. If you specify an exclusion but don't specify any inclusions, nothing is triggered.

# [Example](#tab/example)

List syntax:

```yaml
pr:
- master
- develop
```

Disablement syntax:

```yaml
pr: none # will disable PR builds (but not CI builds)
```

Full syntax:

```yaml
pr:
  branches:
    include:
    - features/*
    exclude:
    - features/experimental/*
  paths:
    exclude:
    - README.md
```

---

### Scheduled trigger

::: moniker range="<= azure-devops-2019"

YAML scheduled triggers are unavailable in this version of Azure DevOps Server or in Visual Studio Team Foundation Server.
You can use [scheduled triggers in the classic editor](build/triggers.md?tabs=classic#scheduled-triggers).

::: moniker-end

::: moniker range="azure-devops"

A scheduled trigger specifies a schedule on which branches are built.
If no scheduled trigger is specified, no scheduled builds occur.
Learn more about [scheduled triggers](build/triggers.md?tabs=yaml#scheduled-triggers)
and how to specify them.



# [Schema](#tab/schema)

```yaml
schedules:
- cron: string # cron syntax defining a schedule
  displayName: string # friendly name given to a specific schedule
  branches:
    include: [ string ] # which branches the schedule applies to
    exclude: [ string ] # which branches to exclude from the schedule
  always: boolean # whether to always run the pipeline or only if there have been source code changes since the last run. The default is false.
```

>[!IMPORTANT]
>When you specify a scheduled trigger, only branches that are explicitly configured to be included are scheduled for a build. Inclusions are processed first, and then exclusions are removed from that list. If you specify an exclusion but don't specify any inclusions, no branches are built.

# [Example](#tab/example)

```yaml
schedules:
- cron: "0 0 * * *"
  displayName: Daily midnight build
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/ancient/*
- cron: "0 12 * * 0"
  displayName: Weekly Sunday build
  branches:
    include:
    - releases/*
  always: true
```

In this example, two schedules are defined.

The first schedule, **Daily midnight build**, runs a pipeline at midnight every day only if the code has changed since the last run. It runs the pipeline for `master` and all `releases/*` branches, except for those branches under `releases/ancient/*`.

The second schedule, **Weekly Sunday build**, runs a pipeline at noon on Sundays for all `releases/*` branches, regardless of whether the code has changed since the last run.

---

::: moniker-end

## Pool

The `pool` keyword specifies which [pool](agents/pools-queues.md) to use for a job of the
pipeline. It also holds information about the job's strategy for running.

# [Schema](#tab/schema)

Full syntax:

```yaml
pool:
  name: string  # name of the pool to run this job in
  demands: string | [ string ]  ## see the following "Demands" topic
  vmImage: string # name of the VM image you want to use, only valid in the Microsoft-hosted pool
```

If you're using a Microsoft-hosted pool, then choose an
[available virtual machine image](agents/hosted.md#use-a-microsoft-hosted-agent).

If you're using a private pool and don't need to specify demands, you can shorten the syntax to:

```yaml
pool: string # name of the private pool to run this job in
```

# [Example](#tab/example)

To use the Microsoft hosted pool, omit the name and specify one of the available
[hosted images](agents/hosted.md#use-a-microsoft-hosted-agent).

```yaml
pool:
  vmImage: ubuntu-16.04
```

To use a private pool with no demands:

```yaml
pool: MyPool
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

### Demands

The `demands` keyword is supported by private pools. You can check for the existence of a capability or a specific string like this:

# [Schema](#tab/schema)

```yaml
pool:
  demands: [ string ]
```

# [Example](#tab/example)

```yaml
pool:
  name: MyPool
  demands:
  - myCustomCapability   # check for existence of capability
  - agent.os -equals Darwin  # check for specific string in capability
```

---
::: moniker range="azure-devops"
## Environment

The `environment` keyword specifies the [environment](process/environments.md) or its resource that is to be targeted by a deployment job of the
pipeline. An environment also holds information about the deployment strategy for running the steps defined inside the job.

# [Schema](#tab/schema)
                                                                                                                                                                             
Full syntax:

```yaml
environment:                # create environment and/or record deployments
  name: string              # name of the environment to run this job on.
  resourceName: string      # name of the resource in the environment to record the deployments against
  resourceId: number        # resource identifier
  resourceType: string      # type of the resource you want to target. Supported types - virtualMachine, Kubernetes, appService
  tags: string | [ string ] # tag names to filter the resources in the environment
  strategy:                 # deployment strategy
    runOnce:                # default strategy
      deploy:
        steps:
        - script: echo Hello world
```

If you're specifying an environment or one of its resources and don't need to specify other properties, you can
shorten the syntax to:

```yaml
environment: environmentName.resourceName
strategy:                 # deployment strategy
    runOnce:              # default strategy
      deploy:
        steps:
        - script: echo Hello world
```

# [Example](#tab/example)

You can scope down the deployment target to a particular resource within the environment as shown in this example:

```yaml
environment: 'smarthotel-dev.bookings'
  strategy: 
    runOnce:
      deploy:
        steps:
        - task: KubernetesManifest@0
          displayName: Deploy to Kubernetes cluster
          inputs:
            action: deploy
            namespace: $(k8sNamespace)
            manifests: $(System.ArtifactsDirectory)/manifests/*
            imagePullSecrets: $(imagePullSecret)
            containers: $(containerRegistry)/$(imageRepository):$(tag)
            # value for kubernetesServiceConnection input automatically passed down to task by environment.resource input
```

---
::: moniker-end

## Server

The `server` keyword specifies a [server job](process/phases.md#server-jobs).
Only server tasks like [invoking an Azure Function](tasks/utility/azure-function.md) can be run in a server job.
<!-- some glorious day, [manual intervention](tasks/utility/manual-intervention.md) will work too -->

# [Schema](#tab/schema)

Use of this keyword makes the job run as a server job rather than an agent job.

```yaml
pool: server
```

# [Example](#tab/example)

```yaml
jobs:
- job: RunOnServer
  pool: server
```

---

## Script

The `script` keyword is a shortcut for the [command line task](tasks/utility/command-line.md).
It runs a script using cmd.exe on Windows and Bash on other platforms.

# [Schema](#tab/schema)

```yaml
steps:
- script: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  workingDirectory: string  # initial working directory for the step
  failOnStderr: boolean  # if the script writes to stderr, should that be treated as the step failing?
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- script: echo Hello world!
  displayName: Say hello
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

## Bash

The `bash` keyword is a shortcut for the [shell script task](tasks/utility/shell-script.md).
It runs a script in Bash on Windows, macOS, or Linux.

# [Schema](#tab/schema)

```yaml
steps:
- bash: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  workingDirectory: string  # initial working directory for the step
  failOnStderr: boolean  # if the script writes to stderr, should that be treated as the step failing?
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- bash: |
    which bash
    echo Hello $name
  displayName: Multiline Bash script
  env:
    name: Microsoft
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

## Pwsh

The `pwsh` keyword is a shortcut for the [PowerShell task](tasks/utility/powershell.md) when the task's `pwsh` value is set to `true`.
It runs a script in PowerShell Core on Windows, macOS, or Linux.

# [Schema](#tab/schema)

```yaml
steps:
- pwsh: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  errorActionPreference: enum  # see the following "Error action preference" topic
  ignoreLASTEXITCODE: boolean  # see the following "Ignore last exit code" topic
  failOnStderr: boolean  # if the script writes to stderr, should that be treated as the step failing?
  workingDirectory: string  # initial working directory for the step
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- pwsh: echo Hello $(name)
  displayName: Say hello
  name: firstStep
  workingDirectory: $(build.sourcesDirectory)
  failOnStderr: true
  env:
    name: Microsoft
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

## PowerShell

The `powershell` keyword is a shortcut for the [PowerShell task](tasks/utility/powershell.md).
It runs a script in PowerShell on Windows.

# [Schema](#tab/schema)

```yaml
steps:
- powershell: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  errorActionPreference: enum  # see the following "Error action preference" topic
  ignoreLASTEXITCODE: boolean  # see the following "Ignore last exit code" topic
  failOnStderr: boolean  # if the script writes to stderr, should that be treated as the step failing?
  workingDirectory: string  # initial working directory for the step
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- powershell: echo Hello $(name)
  displayName: Say hello
  name: firstStep
  workingDirectory: $(build.sourcesDirectory)
  failOnStderr: true
  env:
    name: Microsoft
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

### Error action preference

If a task's error action preference is unspecified, the preference defaults to `stop`, and the
line `$ErrorActionPreference = 'stop'` is prepended to the top of your script.

When the error action preference is set to `stop`, errors cause PowerShell
to terminate and return a nonzero exit code. The task is also marked as
Failed.

# [Schema](#tab/schema)

```yaml
errorActionPreference: stop | continue | silentlyContinue
```

# [Example](#tab/example)

```yaml
steps:
- powershell: |
    Write-Error 'Uh oh, an error occurred'
    Write-Host 'Trying again...'
  displayName: Error action preference
  errorActionPreference: continue
```

---

### Ignore last exit code

By default, the last exit code returned from your script is checked.
If the code is nonzero, it's treated as indicating a step failure. The system appends your script with:

`if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }`

If you don't want this behavior, set `ignoreLASTEXITCODE` to `true`.

# [Schema](#tab/schema)

```yaml
ignoreLASTEXITCODE: boolean
```

# [Example](#tab/example)

```yaml
steps:
- powershell: git nosuchcommand
  displayName: Ignore last exit code
  ignoreLASTEXITCODE: true
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and
[timeouts](process/phases.md?tabs=yaml#timeouts).

::: moniker range="azure-devops"
## Publish

The `publish` keyword is a shortcut for the [Publish Pipeline Artifact task](tasks/utility/publish-pipeline-artifact.md). It publishes or uploads a file or folder as a pipeline artifact that can be consumed by other jobs and pipelines.

# [Schema](#tab/schema)

```yaml
steps:
- publish: string # path to a file or folder
  artifact: string # artifact name
```

# [Example](#tab/example)

```yaml
steps:
- publish: $(Build.SourcesDirectory)/build
  artifact: WebApp
```

---

Learn more about [publishing artifacts](./artifacts/pipeline-artifacts.md#publishing-artifacts).

## Download

The `download` keyword is a shortcut for the [Download Pipeline Artifact task](tasks/utility/download-pipeline-artifact.md). The task downloads artifacts associated with the current run or from another Azure pipeline that is associated as a `pipeline` resource.

# [Schema](#tab/schema)

```yaml
steps:
- download: [ current | pipeline resource identifier | none ] # disable automatic download if "none"
  artifact: string # artifact name; optional; downloads all the avaialable artifacts if not specified
  patterns: string # patterns representing files to include; optional
```
### Artifact download location

Artifacts from the current pipeline are downloaded to $(Pipeline.Workspace)/.

Artifacts from the associated `pipeline` resource are downloaded to $(Pipeline.Workspace)/\<pipeline resource identifier\>/.

### Automatic download in deployment jobs

All available artifacts from the current pipeline and from the associated pipeline resources are automatically downloaded in deployment jobs and made available for your deployment. However, you can choose to not download by specifying `download: none`.

# [Example](#tab/example)

```yaml
steps:
- download: current  # refers to artifacts published by current pipeline
  artifact: WebApp
  patterns: '**/.js'
- download: MyAppA   # downloads artifacts available as part of the pipeline resource

```
---

Learn more about [downloading artifacts](./artifacts/pipeline-artifacts.md#downloading-artifacts).
::: moniker-end

## Checkout

Nondeployment jobs automatically check out source code.
You can configure or suppress this behavior with the `checkout` keyword.

# [Schema](#tab/schema)

```yaml
steps:
- checkout: self  # self represents the repo where the initial Pipelines YAML file was found
  clean: boolean  # if true, execute `execute git clean -ffdx && git reset --hard HEAD` before fetching
  fetchDepth: number  # the depth of commits to ask Git to fetch; defaults to no limit
  lfs: boolean  # whether to download Git-LFS files; defaults to false
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules; defaults to not checking out submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1); defaults to a directory called 's'
  persistCredentials: boolean  # if 'true', leave the OAuth token in the Git config after the initial fetch; defaults to false
```

Or to avoid syncing sources at all, specify the following syntax:

```yaml
steps:
- checkout: none
```

> [!NOTE]
> If you're running the agent in Local Service Account and want to modify the current repository
> using git operations or loading git submodules, give the proper permissions to the
> "Project Collection Build Service Accounts" user.

```yaml
steps:
- checkout: self
  submodules: true
  persistCredentials: true
```

# [Example](#tab/example)

```yaml
steps:
- checkout: self  # self represents the repo where the initial Pipelines YAML file was found
  clean: true
  fetchDepth: 5
  lfs: true
  path: PutMyCodeHere
```

---

## Task

[Tasks](process/tasks.md) are the building blocks of a pipeline. There's a
[catalog of tasks](tasks/index.md) available to choose from.

# [Schema](#tab/schema)

```yaml
steps:
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether or not to run this step; defaults to 'true'
  timeoutInMinutes: number
  inputs: { string: string }  # task-specific inputs
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- task: VSBuild@1
  displayName: Build
  timeoutInMinutes: 120
  inputs:
    solution: '**\*.sln'
```

---

## Syntax highlighting

Syntax highlighting is available for the pipeline schema via a Visual Studio Code
extension. You can [download Visual Studio Code](https://code.visualstudio.com),
[install the extension](https://marketplace.visualstudio.com/items?itemName=ms-azure-devops.azure-pipelines), and
[check out the project on GitHub](https://github.com/Microsoft/azure-pipelines-vscode).
<!-- For people who get here by searching for, say, "azure pipelines template YAML schema",
     look around a bit, and then type "Ctrl-F JSON" when they don't see anything promising
     in the first few screenfuls. -->
The extension includes a [JSON schema](https://github.com/microsoft/azure-pipelines-vscode/blob/master/service-schema.json) for validation.
