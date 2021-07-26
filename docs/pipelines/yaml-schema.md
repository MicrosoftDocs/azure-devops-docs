---
title: YAML schema
ms.custom: seodec18
description: An overview of all YAML syntax.
ms.assetid: 2c586863-078f-4cfe-8158-167080cd08c1
ms.author: sdanie
author: steved0x
ms.reviewer: vijayma
ms.date: 07/15/2021
monikerRange: '>= azure-devops-2019'
---

# YAML schema reference

**Azure Pipelines**

This article is a detailed reference guide to Azure Pipelines YAML pipelines.
It includes a catalog of all supported YAML capabilities and the available options.

::: moniker range="azure-devops"

> The best way to get started with YAML pipelines is to read the
[quickstart guide](create-first-pipeline.md).
> After that, to learn how to configure your YAML pipeline for your needs, see conceptual topics like [Build variables](process/variables.md) and [Jobs](process/phases.md).

::: moniker-end

::: moniker range="< azure-devops"

> To learn how to configure your YAML pipeline for your needs, see conceptual topics like [Build variables](process/variables.md) and [Jobs](process/phases.md).

::: moniker-end

## Pipeline structure

::: moniker range="> azure-devops-2019"

A pipeline is one or more stages that describe a CI/CD process.
Stages are the major divisions in a pipeline.
The stages "Build this app," "Run these tests," and "Deploy to preproduction" are good examples.

A stage is one or more jobs, which are units of work assignable to the same machine.
You can arrange both stages and jobs into dependency graphs.
Examples include "Run this stage before that one" and "This job depends on the output of that job."

A job is a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of a YAML file like:

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

Simple pipelines don't require all of these levels.
For example, in a single-job build you can omit the containers for stages and jobs because there are only steps.
And because many options shown in this article aren't required and have good defaults, your YAML definitions are unlikely to include all of them.

::: moniker-end

::: moniker range="azure-devops-2019"

A pipeline is one or more jobs that describe a CI/CD process.
A job is a unit of work assignable to the same machine.
You can arrange jobs into dependency graphs like "This job depends on the output of that job."

A job is a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of a YAML file like:

- Pipeline
  - Job 1
    - Step 1.1
    - Step 1.2
    - ...
  - Job 2
    - Step 2.1
    - Step 2.2
    - ...

For single-job pipelines, you can omit the jobs container because there are only steps.
And because many options shown in this article aren't required and have good defaults, your YAML definitions are unlikely to include all of them.

::: moniker-end

### Conventions

Here are the syntax conventions used in this article:

* To the left of `:` is a literal keyword used in pipeline definitions.
* To the right of `:` is a data type.
  The data type can be a primitive type like **string** or a reference to a rich structure defined elsewhere in this article.
* The notation `[` *datatype* `]` indicates an array of the mentioned data type.
  For instance, `[ string ]` is an array of strings.
* The notation `{` *datatype* `:` *datatype* `}` indicates a mapping of one data type to another.
  For instance, `{ string: string }` is a mapping of strings to strings.
* The symbol `|` indicates there are multiple data types available for the keyword.
  For instance, `job | templateReference` means either a job definition or a template reference is allowed.

### YAML basics

This document covers the schema of an Azure Pipelines YAML file.
To learn the basics of YAML, see [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).
Azure Pipelines doesn't support all YAML features.
Unsupported features include anchors, complex keys, and sets.
Also, unlike standard YAML, Azure Pipelines depends on seeing `stage`, `job`, `task`, or a task shortcut like `script` as the first key in a mapping.

## Pipeline

#### [Schema](#tab/schema/)

::: moniker range="> azure-devops-2019"

```yaml
name: string  # build numbering format
resources:
  pipelines: [ pipelineResource ]
  containers: [ containerResource ]
  repositories: [ repositoryResource ]
variables: # several syntaxes, see specific section
trigger: trigger
pr: pr
stages: [ stage | templateReference ]
```

If you have a single [stage](#stage), you can omit the `stages` keyword and directly specify the [jobs](#job) keyword:

```yaml
# ... other pipeline-level keywords
jobs: [ job | templateReference ]
```

If you have a single stage and a single job, you can omit the `stages` and `jobs` keywords and directly specify the [steps](#steps) keyword:

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
variables: # several syntaxes, see specific section
trigger: trigger
pr: pr
jobs: [ job | templateReference ]
```

If you have a single job, you can omit the `jobs` keyword and directly specify the [steps](#steps) keyword:

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

Learn more about:

- [Pipelines with multiple jobs](process/phases.md?tabs=yaml)
- [Containers](#container-resource) and [repositories](#repository-resource) in pipelines
- [Triggers](#triggers)
- [Variables](process/variables.md?tabs=yaml)
- [Build number formats](process/run-number.md)

::: moniker range="> azure-devops-2019"

## Stage

A stage is a collection of related jobs.
By default, stages run sequentially.
Each stage starts only after the preceding stage is complete unless otherwise specified via the `dependsOn` property.

Use [approval checks](process/approvals.md) to manually control when a stage should run.
These checks are commonly used to control deployments to production environments.

Checks are a mechanism available to the *resource owner*.
They control when a stage in a pipeline consumes a resource.
As an owner of a resource like an environment, you can define checks that are required before a stage that consumes the resource can start.

Currently, manual approval checks are supported on [environments](#environment).
For more information, see [Approvals](process/approvals.md).

# [Schema](#tab/schema)

```yaml
stages:
- stage: string  # name of the stage (A-Z, a-z, 0-9, and underscore)
  displayName: string  # friendly name to display in the UI
  dependsOn: string | [ string ]
  condition: string
  variables: # several syntaxes, see specific section
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
For brevity, the jobs and steps are omitted.

```yaml
stages:
- stage: BuildWin
  displayName: Build for Windows
- stage: BuildMac
  displayName: Build for Mac
  dependsOn: [] # by specifying an empty array, this stage doesn't depend on the stage before it
```

---

Learn more about [stages](process/stages.md), [conditions](process/conditions.md?tabs=yaml), and [variables](#variables).
<!-- TODO: link to info about stage dependencies -->

::: moniker-end

## Job

A [job](process/phases.md?tabs=yaml) is a collection of [steps](#steps) run by an [agent](agents/agents.md) or on a [server](#server).
Jobs can run [conditionally](process/phases.md?tabs=yaml#conditions) and  might [depend on earlier jobs](process/phases.md?tabs=yaml#dependencies).

# [Schema](#tab/schema)

:::moniker range="azure-devops"

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
  variables: # several syntaxes, see specific section
  steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
  services: { string: string | container } # container resources to run as a service container
  uses: # Any resources (repos or pools) required by this job that are not already referenced
    repositories: [ string ] # Repository references to Azure Git repositories
    pools: [ string ] # Pool names, typically when using a matrix strategy for the job
```

For more information about `uses`, see [Limit job authorization scope to referenced Azure DevOps repositories](repos/azure-repos-git.md#limit-job-authorization-scope-to-referenced-azure-devops-repositories). For more information about workspaces, including clean options, see the [workspace](process/phases.md#workspace) topic in [Jobs](process/phases.md).

:::moniker-end

:::moniker range="<azure-devops"

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
  variables: # several syntaxes, see specific section
  steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
  services: { string: string | container } # container resources to run as a service container
```

For more information about workspaces, including clean options, see the [workspace](process/phases.md#workspace) topic in [Jobs](process/phases.md).

:::moniker-end



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

Learn more about [variables](process/variables.md?tabs=yaml), [steps](#steps), [pools](#pool), and [server jobs](#server).

> [!NOTE]
> If you have only one stage and one job, you can use [single-job syntax](process/phases.md?tabs=yaml) as a shorter way to describe the steps to run.

### Container reference

A container is supported by jobs.

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
  # you can also use any of the other supported container attributes
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

The `matrix` and `parallel` keywords specify mutually exclusive strategies for duplicating a job.

#### Matrix

Use of a matrix generates copies of a job, each with different input.
These copies are useful for testing against different configurations or platform versions.

#### [Schema](#tab/schema/)

```yaml
strategy:
  matrix: { string1: { string2: string3 } }
  maxParallel: number
```

For each occurrence of *string1* in the matrix, a copy of the job is generated.
The name *string1* is the copy's name and is appended to the name of the job.
For each occurrence of *string2*, a variable called *string2* with the value *string3* is available to the job.

> [!NOTE]
> Matrix configuration names must contain only basic Latin alphabet letters (A-Z and a-z), digits (0-9), and underscores (`_`).
> They must start with a letter.
> Also, their length must be 100 characters or fewer.

<a name="maximum-parallelism"></a>
The optional `maxParallel` keyword specifies the maximum number of simultaneous matrix legs to run at once.

::: moniker range="> azure-devops-2019"

If `maxParallel` is unspecified or set to 0, no limit is applied.

::: moniker-end

::: moniker range="azure-devops-2019"

If `maxParallel` is unspecified, no limit is applied.

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
Within each job, a variable named PYTHON_VERSION is available.
In "Build Python35," the variable is set to "3.5".
It's likewise set to "3.6" in "Build Python36."
Only two jobs run simultaneously.

* * *

> [!NOTE]
> The `matrix` syntax doesn't support automatic job scaling but you can implement similar
> functionality using the `each` keyword. For an example, see [expressions](process/expressions.md).

#### Parallel

This strategy specifies how many duplicates of a job should run.
It's useful for slicing up a large test matrix.
The [Visual Studio Test task](tasks/test/vstest.md) understands how to divide the test load across the number of scheduled jobs.

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

::: moniker range=">=azure-devops-2020"

## Deployment job

A [deployment job](process/deployment-jobs.md) is a special type of job.
It's a collection of steps to run sequentially against the environment.
In YAML pipelines, we recommend that you put your deployment steps in a deployment job.

# [Schema](#tab/schema)

```YAML
jobs:
- deployment: string   # name of the deployment job, A-Z, a-z, 0-9, and underscore. The word "deploy" is a keyword and is unsupported as the deployment name.
  displayName: string  # friendly name to display in the UI
  pool:                # see pool schema
    name: string       # Use only global level variables for defining a pool name. Stage/job level variables are not supported to define pool name.
    demands: string | [ string ]
  workspace:
    clean: outputs | resources | all # what to clean up before the job runs
  dependsOn: string
  condition: string
  continueOnError: boolean                # 'true' if future jobs should run even if this job fails; defaults to 'false'
  container: containerReference # container to run this job inside
  services: { string: string | container } # container resources to run as a service container
  timeoutInMinutes: nonEmptyString        # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: nonEmptyString  # how much time to give 'run always even if cancelled tasks' before killing them
  variables: # several syntaxes, see specific section
  environment: string  # target environment name and optionally a resource name to record the deployment history; format: <environment-name>.<resource-name>
  strategy:
    runOnce:    #rolling, canary are the other strategies that are supported
      deploy:
        steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
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

---

::: moniker-end

## Steps

A step is a linear sequence of operations that make up a job.
Each step runs in its own process on an agent and has access to the pipeline workspace on a local hard drive.
This behavior means environment variables aren't preserved between steps but file system changes are.

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

For more information about steps, see the schema references for:

- [Script](#script)
- [Bash](#bash)
- [pwsh](#pwsh)
- [PowerShell](#powershell)
- [Checkout](#checkout)
- [Task](#task)
- [Step templates](#step-templates)

All steps, regardless of whether they're documented in this article, support the following properties:

- **displayName**
- **name**
- **condition**
- **continueOnError**
- **enabled**
- **env**
- **timeoutInMinutes**

## Variables

You can add hard-coded values directly, reference [variable groups](library/variable-groups.md), or insert via variable templates.

Specify variables at the pipeline, stage, or job level.

#### [Schema](#tab/schema/)

For a simple set of hard-coded variables, use this mapping syntax:

```yaml
variables: { string: string }
```

To include variable groups, switch to this sequence syntax:

```yaml
variables:
- name: string  # name of a variable
  value: string # value of the variable
- group: string # name of a variable group
```

You can repeat `name`/`value` pairs and `group`.

Variables can also be set as read only to [enhance security](security/inputs.md#variables). 

```yaml
variables:
- name: myReadOnlyVar
  value: myValue
  readonly: true
```

::: moniker range=">=azure-devops-2020"

You can also include [variables from templates](process/templates.md#variable-reuse).

::: moniker-end

#### [Example](#tab/example/)

Mapping syntax:

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

Sequence syntax:

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
> Be sure to see the full [template expression syntax](process/templates.md), which is all forms of `${{ }}`.

::: moniker range="> azure-devops-2019"

You can export reusable sections of your pipeline to a separate file. 
These separate files are known as templates. 

Azure Pipelines supports four kinds of templates:
- [Stage](#stage-templates)
- [Job](#job-templates)
- [Step](#step-templates)
- [Variable](#variable-templates)

You can also use templates to control what is allowed in a pipeline and to define how parameters can be used.
- [Parameter](#parameters)

::: moniker-end

::: moniker range="azure-devops-2019"

You can export reusable sections of your pipeline to separate files.
These separate files are known as templates.
Azure DevOps Server 2019 supports these two kinds of templates:

- [Job](#job-templates)
- [Step](#step-templates)

::: moniker-end

Templates themselves can include other templates.
Azure Pipelines supports a maximum of 50 unique template files in a single pipeline.

::: moniker range="> azure-devops-2019"

### Stage templates

You can define a set of stages in one file and use it multiple times in other files.

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
      vmImage: macos-10.14
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

You can define a set of jobs in one file and use it multiple times in other files.

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
      vmImage: 'macOS-10.14'

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

You can define a set of steps in one file and use it multiple times in another file.

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
    vmImage: 'macOS-10.14'
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

You can define a set of variables in one file and use it multiple times in other files.

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

> [!NOTE]
> The `variables` keyword uses two syntax forms: sequence and mapping.
> In mapping syntax, all keys are variable names and their values are variable values.
> To use variable templates, you must use sequence syntax.
> Sequence syntax requires you to specify whether you're mentioning a variable (`name`), a variable group (`group`), or a template (`template`).
> See the [variables](process/variables.md) topic for more.

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

## Parameters

You can use parameters in templates and pipelines. 

### [Schema](#tab/parameter-schema)

The type and name fields are required when defining parameters. See all [parameter data types](process/runtime-parameters.md#parameter-data-types).


```yaml
parameters:
- name: string          # name of the parameter; required
  type: enum            # see the enum data types in the following section
  default: any          # default value; if no default, then the parameter MUST be given by the user at runtime
  values: [ string ]    # allowed list of values (for some data types)
```

### Types

The `type` value must be one of the `enum` members from the following table.

[!INCLUDE [parameter-data-types](process/includes/parameter-data-types.md)]

### [YAML Example](#tab/yaml-example)

```yaml
# File: azure-pipelines.yml
parameters:
- name: image
  displayName: Pool Image
  type: string
  default: ubuntu-latest
  values:
  - windows-latest
  - vs2017-win2016
  - ubuntu-latest
  - ubuntu-16.04
  - macOS-latest
  - macOS-10.14

trigger: none

jobs:
- job: build
  displayName: build
  pool: 
    vmImage: ${{ parameters.image }}
  steps:
  - script: echo The image parameter is ${{ parameters.image }}```
```

### [Template Example](#tab/template-example)

You can use parameters to extend a template. In this example, the pipeline using the template supplies the values to fill into the template.

```yaml
# File: simple-param.yml
parameters:
- name: yesNo # name of the parameter; required
  type: boolean # data type of the parameter; required
  default: false

steps:
- script: echo ${{ parameters.yesNo }}
```

```yaml
# File: azure-pipelines.yml
trigger:
- main

extends:
    template: simple-param.yml
    parameters:
        yesNo: false # set to a non-boolean value to have the build fail
```

See [templates](process/templates.md) for more about working with templates.

---

::: moniker-end

## Resources

A resource is any external service that is consumed as part of your pipeline.
An example of a resource is another CI/CD pipeline that produces:

- Artifacts like Azure Pipelines or Jenkins.
- Code repositories like GitHub, Azure Repos, or Git.
- Container-image registries like Azure Container Registry or Docker hub.

Resources in YAML represent sources of pipelines, containers, repositories, and types. For more information on Resources, [see here](process/resources.md).

### General schema

```yaml
resources:
  pipelines: [ pipeline ]  
  builds: [ build ]
  repositories: [ repository ]
  containers: [ container ]
  packages: [ package ]
```

### Pipeline resource

If you have an Azure pipeline that produces artifacts, your pipeline can consume the artifacts by using the `pipeline` keyword to define a pipeline resource.
You can also enable [pipeline-completion triggers](process/pipeline-triggers.md).

# [Schema](#tab/schema)

```yaml
resources:
  pipelines:
  - pipeline: string  # identifier for the resource used in pipeline resource variables
    project: string # project for the source; optional for current project
    source: string  # name of the pipeline that produces an artifact
    version: string  # the pipeline run number to pick the artifact, defaults to latest pipeline successful across all stages; Used only for manual or scheduled triggers
    branch: string  # branch to pick the artifact, optional; defaults to all branches; Used only for manual or scheduled triggers
    tags: [ string ] # list of tags required on the pipeline to pickup default artifacts, optional; Used only for manual or scheduled triggers
    trigger:     # triggers are not enabled by default unless you add trigger section to the resource
      branches:  # branch conditions to filter the events, optional; Defaults to all branches.
        include: [ string ]  # branches to consider the trigger events, optional; Defaults to all branches.
        exclude: [ string ]  # branches to discard the trigger events, optional; Defaults to none.
      tags: [ string ]  # list of tags to evaluate for trigger event, optional; 2020.1 and greater
      stages: [ string ] # list of stages to evaluate for trigger event, optional; 2020.1 and greater
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
        - main
        - releases/*
        exclude:
        - users/*
```

---

> [!IMPORTANT]
> When you define a resource trigger, if its pipeline resource is from the same repo as the current pipeline, triggering follows the same branch and commit on which the event is raised.
> But if the pipeline resource is from a different repo, the current pipeline is triggered on the branch specified by the **Default branch for manual and scheduled builds** setting. For more information, see [Branch considerations for pipeline completion triggers](process/pipeline-triggers.md?tabs=yaml#branch-considerations).

#### The pipeline resource metadata as predefined variables

In each run, the metadata for a pipeline resource is available to all jobs as these predefined variables:

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

You can consume artifacts from a pipeline resource by using a `download` task. See the [download](#download) keyword.

### Container resource

[Container jobs](process/container-phases.md) let you isolate your tools and dependencies inside a container.
The agent launches an instance of your specified container then runs steps inside it.
The `container` keyword lets you specify your container images.

[Service containers](process/service-containers.md) run alongside a job to provide various dependencies like databases.

# [Schema](#tab/schema)

::: moniker range="azure-devops"

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
    mapDockerSocket: bool # whether to map in the Docker daemon socket; defaults to true
    mountReadOnly:  # volumes to mount read-only - all default to false
      externals: boolean  # components required to talk to the agent
      tasks: boolean  # tasks required by the job
      tools: boolean  # installable tools like Python and Ruby
      work: boolean # the work directory
```

::: moniker-end

::: moniker range="azure-devops-2020"

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
    mapDockerSocket: bool # whether to map in the Docker daemon socket; defaults to true
```

::: moniker-end

::: moniker range="azure-devops-2019"

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

::: moniker-end

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

::: moniker range="azure-devops-2019"

If your pipeline has [templates in another repository](process/templates.md#using-other-repositories), you must let the system know about that repository.
The `repository` keyword lets you specify an external repository.

::: moniker-end

::: moniker range="> azure-devops-2019"

If your pipeline has [templates in another repository](process/templates.md#use-other-repositories), or if you want to use [multi-repo checkout](repos/multi-repo-checkout.md) with a repository that requires a service connection, you must let the system know about that repository.
The `repository` keyword lets you specify an external repository.

::: moniker-end

# [Schema](#tab/schema)

```yaml
resources:
  repositories:
  - repository: string  # identifier (A-Z, a-z, 0-9, and underscore)
    type: enum  # see the following "Type" topic
    name: string  # repository name (format depends on `type`)
    ref: string  # ref name to use; defaults to 'refs/heads/main'
    endpoint: string  # name of the service connection to use (for types that aren't Azure Repos)
    trigger:  # CI trigger for this repository, no CI trigger if skipped (only works for Azure Repos)
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

# [Example](#tab/example)
```yaml

resources:
  repositories:
  - repository: common
    type: github
    name: Contoso/CommonTools
    endpoint: MyContosoServiceConnection
```

---

#### Type

Pipelines support the following values for the repository type: `git`, `github`, and `bitbucket`.
The `git` type refers to Azure Repos Git repos.

- If you specify `type: git`, the `name` value refers to another repository in the same project.
  An example is `name: otherRepo`.
  To refer to a repo in another project within the same organization, prefix the name with that project's name.
  An example is `name: OtherProject/otherRepo`.

- If you specify `type: github`, the `name` value is the full name of the GitHub repo and includes the user or organization.
  An example is `name: Microsoft/vscode`.
  GitHub repos require a [GitHub service connection](library/service-endpoints.md) for authorization.

- If you specify `type: bitbucket`, the `name` value is the full name of the Bitbucket Cloud repo and includes the user or organization.
  An example is `name: MyBitbucket/vscode`.
  Bitbucket Cloud repos require a [Bitbucket Cloud service connection](library/service-endpoints.md#sep-bbucket) for authorization.

### Packages resource

::: moniker range="> azure-devops-2020"

You can consume NuGet and npm GitHub packages as a resource in YAML pipelines. When specifying package resources, set the package as `NuGet` or `npm`. 

## [Schema](#tab/schema)

```yaml
resources:
  packages:
    - package: myPackageAlias # alias for the package resource
      type: Npm # type of the package NuGet/npm
      connection: GitHubConnectionName # Github service connection with the PAT type
      name: nugetTest/nodeapp # <Repository>/<Name of the package>
      version: 1.0.1 # Version of the packge to consume; Optional; Defaults to latest
      trigger: true # To enable automated triggers (true/false); Optional; Defaults to no triggers
```

## [Example](#tab/example)

In this example, there is an [GitHub service connection](library/service-endpoints.md#common-service-connection-types) named `pat-contoso` to a GitHub npm package named `contoso`. Learn more about [GitHub packages](https://github.com/features/packages). 

```yaml
resources:
  packages:
    - package: contoso
      type: npm
      connection: pat-contoso
      name: yourname/contoso 
      version: 7.130.88 
      trigger: true

pool:
  vmImage: 'ubuntu-latest'

steps:
- getPackage: contoso 
```
---

::: moniker-end


## Triggers

* [Push trigger](#push-trigger)
* [Pull request trigger](#pr-trigger)
* [Scheduled trigger](#scheduled-trigger)
* [Pipeline trigger](#pipeline-trigger)

> [!NOTE]
> Trigger blocks can't contain variables or template expressions.

### Push trigger

A push trigger specifies which branches cause a continuous integration build to run.
If you specify no push trigger, pushes to any branch trigger a build.
Learn more about [triggers](build/triggers.md?tabs=yaml#ci-triggers) and how to specify them.

#### [Schema](#tab/schema/)

There are three distinct syntax options for the `trigger` keyword: a list of branches to include, a way to disable CI triggers, and the full syntax for complete control.

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
  batch: boolean # batch changes if true; start a new build for every push if false (default)
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

If you specify an `exclude` clause without an `include` clause for `branches`, `tags`, or `paths`, it is equivalent to specifying `*` in the `include` clause.

::: moniker-end

::: moniker range="<= azure-devops-2019"

```yaml
trigger:
  batch: boolean # batch changes if true; start a new build for every push if false (default)
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
```

> [!IMPORTANT]
> When you specify a trigger, only branches that you explicitly configure for inclusion trigger a pipeline.
> Inclusions are processed first, and then exclusions are removed from that list.
> If you specify an exclusion but no inclusions, nothing triggers.

::: moniker-end



#### [Example](#tab/example/)

List syntax:

```yaml
trigger:
- main
- develop
```

Disablement syntax:

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

A pull request trigger specifies which branches cause a pull request build to run.
If you specify no pull request trigger, pull requests to any branch trigger a build.
Learn more about [pull request triggers](build/triggers.md?tabs=yaml#pr-triggers) and how to specify them.

::: moniker range="azure-devops"

> [!IMPORTANT]
> YAML PR triggers are supported only in GitHub and Bitbucket Cloud.
> If you use Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) to trigger your build pipeline for validation.

::: moniker-end

::: moniker range="azure-devops-2019"

> [!IMPORTANT]
> YAML PR triggers are supported only in GitHub.
> If you use Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) to trigger your build pipeline for validation.

::: moniker-end

# [Schema](#tab/schema)

There are three distinct syntax options for the `pr` keyword: a list of branches to include, a way to disable PR triggers, and the full syntax for complete control.

List syntax:

```yaml
pr: [ string ] # list of branch names
```

Disablement syntax:

```yaml
pr: none # will disable PR builds entirely; will not disable CI triggers
```

Full syntax:

:::moniker range="<=azure-devops-2020"

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

:::moniker-end

:::moniker range=">azure-devops-2020"

```yaml
pr:
  autoCancel: boolean # indicates whether additional pushes to a PR should cancel in-progress runs for the same PR. Defaults to true
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
  drafts: boolean # For GitHub only, whether to build draft PRs, defaults to true
```

:::moniker-end

::: moniker range="> azure-devops-2019"

If you specify an `exclude` clause without an `include` clause for `branches` or `paths`, it is equivalent to specifying `*` in the `include` clause.

::: moniker-end

::: moniker range="<= azure-devops-2019"

> [!IMPORTANT]
> When you specify a pull request trigger, only branches that you explicitly configure for inclusion trigger a pipeline.
> Inclusions are processed first, and then exclusions are removed from that list.
> If you specify an exclusion but no inclusions, nothing triggers.

::: moniker-end

# [Example](#tab/example)

List syntax:

```yaml
pr:
- main
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

YAML scheduled triggers are unavailable in either this version of Azure DevOps Server or Visual Studio Team Foundation Server.
You can use [scheduled triggers in the classic editor](process/scheduled-triggers.md?tabs=classic).

::: moniker-end

::: moniker range="> azure-devops-2019"

A scheduled trigger specifies a schedule on which branches are built.
If you specify no scheduled trigger, no scheduled builds occur.
Learn more about [scheduled triggers](process/scheduled-triggers.md?tabs=yaml) and how to specify them.

# [Schema](#tab/schema)

```yaml
schedules:
- cron: string # cron syntax defining a schedule in UTC time
  displayName: string # friendly name given to a specific schedule
  branches:
    include: [ string ] # which branches the schedule applies to
    exclude: [ string ] # which branches to exclude from the schedule
  always: boolean # whether to always run the pipeline or only if there have been source code changes since the last successful scheduled run. The default is false.
```

> [!NOTE]
> If you specify an `exclude` clause without an `include` clause for `branches`, it is equivalent to specifying `*` in the `include` clause.


# [Example](#tab/example)

```yaml
schedules:
- cron: "0 0 * * *"
  displayName: Daily midnight build
  branches:
    include:
    - main
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

In the preceding example, two schedules are defined.

The first schedule, **Daily midnight build**, runs a pipeline at midnight every day only if the code has changed since the last successful scheduled run.
It runs the pipeline for `main` and all `releases/*` branches, except for those branches under `releases/ancient/*`.

The second schedule, **Weekly Sunday build**, runs a pipeline at noon on Sundays for all `releases/*` branches.
It does so regardless of whether the code has changed since the last run.

---

::: moniker-end

### Pipeline trigger

Pipeline completion triggers are configured using a [pipeline resource](#pipeline-resource). For more information, see [Pipeline completion triggers](./process/pipeline-triggers.md).

## Pool

The `pool` keyword specifies which [pool](agents/pools-queues.md) to use for a job of the pipeline.
A `pool` specification also holds information about the job's strategy for running.

::: moniker range="azure-devops-2019"

In Azure DevOps Server 2019 you can specify a pool at the job level in YAML, and at the pipeline level in the pipeline settings UI. In Azure DevOps Server 2019.1 you can also specify a pool at the pipeline level in YAML if you have a single implicit job.
:::moniker-end

::: moniker range=">azure-devops-2019"
You can specify a pool at the pipeline, stage, or job level.
:::moniker-end

The pool specified at the lowest level of the hierarchy is used to run the job.

# [Schema](#tab/schema)

The full syntax is:

```yaml
pool:
  name: string  # name of the pool to run this job in
  demands: string | [ string ]  # see the following "Demands" topic
  vmImage: string # name of the VM image you want to use; valid only in the Microsoft-hosted pool
```

If you use a Microsoft-hosted pool, choose an [available virtual machine image](agents/hosted.md#use-a-microsoft-hosted-agent).

If you use a private pool and don't need to specify demands, you can shorten the syntax to:

```yaml
pool: string # name of the private pool to run this job in
```

# [Example](#tab/example)

To use a Microsoft-hosted pool, omit the name and specify one of the available [hosted images](agents/hosted.md#use-a-microsoft-hosted-agent):

```yaml
pool:
  vmImage: ubuntu-16.04
```

To use a private pool with no demands:

```yaml
pool: MyPool
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml) and [timeouts](process/phases.md?tabs=yaml#timeouts).

### Demands

The `demands` keyword is supported by private pools.
You can check for the existence of a capability or a specific string.

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

Learn more about [demands](./process/demands.md).

::: moniker range=">=azure-devops-2020"

## Environment

The `environment` keyword specifies the [environment](process/environments.md) or its resource that is targeted by a deployment job of the pipeline.
An environment also holds information about the deployment strategy for running the steps defined inside the job.

# [Schema](#tab/schema)

The full syntax is:

```yaml
environment:                # create environment and/or record deployments
  name: string              # name of the environment to run this job on.
  resourceName: string      # name of the resource in the environment to record the deployments against
  resourceId: number        # resource identifier
  resourceType: string      # type of the resource you want to target. Supported types - virtualMachine, Kubernetes
  tags: string | [ string ] # tag names to filter the resources in the environment
strategy:                 # deployment strategy
  runOnce:                # default strategy
    deploy:
      steps:
      - script: echo Hello world
```

If you specify an environment or one of its resources but don't need to specify other properties, you can shorten the syntax to:

```yaml
environment: environmentName.resourceName
strategy:                 # deployment strategy
  runOnce:              # default strategy
    deploy:
      steps:
      - script: echo Hello world
```

# [Example](#tab/example)

You can reduce the deployment target's scope to a particular resource within the environment as shown here:

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

The `server` value specifies a [server job](process/phases.md#server-jobs).
Only server tasks like [invoking an Azure function app](tasks/utility/azure-function.md) can be run in a server job.
<!-- some glorious day, [manual intervention](tasks/utility/manual-intervention.md) will work too -->

# [Schema](#tab/schema)

When you use `server`, a job runs as a server job rather than an agent job.

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

The `script` keyword is a shortcut for the [command-line task](tasks/utility/command-line.md).
The task runs a script using cmd.exe on Windows and Bash on other platforms.

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
  enabled: boolean  # whether to run this step; defaults to 'true'
  target:
    container: string # where this step will run; values are the container name or the word 'host'
    commands: enum  # whether to process all logging commands from this step; values are `any` (default) or `restricted`
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

If you don't specify a command mode, you can shorten the `target` structure to:

```yaml
- script:
  target: string  # container name or the word 'host'
```

# [Example](#tab/example)

```yaml
steps:
- script: echo Hello world!
  displayName: Say hello
```

---

Learn more about [conditions](process/conditions.md?tabs=yaml),
[timeouts](process/phases.md?tabs=yaml#timeouts), and [step targets](process/tasks.md#step-target).

## Bash

The `bash` keyword is a shortcut for the [shell script task](tasks/utility/shell-script.md).
The task runs a script in Bash on Windows, macOS, and Linux.

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
  enabled: boolean  # whether to run this step; defaults to 'true'
  target:
    container: string # where this step will run; values are the container name or the word 'host'
    commands: enum  # whether to process all logging commands from this step; values are `any` (default) or `restricted`
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

If you don't specify a command mode, you can shorten the `target` structure to:

```yaml
- bash:
  target: string  # container name or the word 'host'
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

Learn more about [conditions](process/conditions.md?tabs=yaml),
[timeouts](process/phases.md?tabs=yaml#timeouts), and [step targets](process/tasks.md#step-target).

## pwsh

The `pwsh` keyword is a shortcut for the [PowerShell task](tasks/utility/powershell.md) when that task's **pwsh** value is set to **true**.
The task runs a script in PowerShell Core on Windows, macOS, and Linux.

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
  enabled: boolean  # whether to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- pwsh: Write-Host Hello $(name)
  displayName: Say hello
  name: firstStep
  workingDirectory: $(build.sourcesDirectory)
  failOnStderr: true
  env:
    name: Microsoft
```

---

> [!NOTE]
> Each PowerShell session lasts only for the duration of the job in which it runs. Tasks that depend on what has been bootstrapped must be in the same job as the bootstrap.

Learn more about [conditions](process/conditions.md?tabs=yaml) and [timeouts](process/phases.md?tabs=yaml#timeouts).

## PowerShell

The `powershell` keyword is a shortcut for the [PowerShell task](tasks/utility/powershell.md).
The task runs a script in Windows PowerShell.

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
  enabled: boolean  # whether to run this step; defaults to 'true'
  timeoutInMinutes: number
  env: { string: string }  # list of environment variables to add
```

# [Example](#tab/example)

```yaml
steps:
- powershell: Write-Host Hello $(name)
  displayName: Say hello
  name: firstStep
  workingDirectory: $(build.sourcesDirectory)
  failOnStderr: true
  env:
    name: Microsoft
```

---

> [!NOTE]
> Each PowerShell session lasts only for the duration of the job in which it runs. Tasks that depend on what has been bootstrapped must be in the same job as the bootstrap.

Learn more about [conditions](process/conditions.md?tabs=yaml) and [timeouts](process/phases.md?tabs=yaml#timeouts).

### Error action preference

Unless otherwise specified, the error action preference defaults to the value `stop`, and the line `$ErrorActionPreference = 'stop'` is prepended to the top of your script.

When the error action preference is set to stop, errors cause PowerShell to terminate the task and return a nonzero exit code.
The task is also marked as Failed.

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

The last exit code returned from your script is checked by default.
A nonzero code indicates a step failure, in which case the system appends your script with:

`if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }`

If you don't want this behavior, specify `ignoreLASTEXITCODE: true`.

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

Learn more about [conditions](process/conditions.md?tabs=yaml) and [timeouts](process/phases.md?tabs=yaml#timeouts).

::: moniker range="azure-devops"

## Publish

The `publish` keyword is a shortcut for the [Publish Pipeline Artifact task](tasks/utility/publish-pipeline-artifact.md).
The task publishes (uploads) a file or folder as a pipeline artifact that other jobs and pipelines can consume.

# [Schema](#tab/schema)

```yaml
steps:
- publish: string # path to a file or folder
  artifact: string # artifact name
  displayName: string  # friendly name to display in the UI
```

# [Example](#tab/example)

```yaml
steps:
- publish: $(Build.SourcesDirectory)/build
  artifact: WebApp
  displayName: Publish artifact WebApp
```

---

Learn more about [publishing artifacts](./artifacts/pipeline-artifacts.md#publish-artifacts).

## Download

The `download` keyword is a shortcut for the [Download Pipeline Artifact task](tasks/utility/download-pipeline-artifact.md).
The task downloads artifacts associated with the current run or from another Azure pipeline that is associated as a pipeline resource.

# [Schema](#tab/schema)

```yaml
steps:
- download: [ current | pipeline resource identifier | none ] # disable automatic download if "none"
  artifact: string ## artifact name, optional; downloads all the available artifacts if not specified
  patterns: string # patterns representing files to include; optional
  displayName: string  # friendly name to display in the UI
```
### Artifact download location

Artifacts from the current pipeline are downloaded to $(**Pipeline.Workspace**)/<artifact name>.

Artifacts from the associated pipeline resource are downloaded to $(**Pipeline.Workspace**)/\<pipeline resource identifier\>/<artifact name>.

### Automatic download in deployment jobs

All available artifacts from the current pipeline and from the associated pipeline resources are automatically downloaded in deployment jobs and made available for your deployment.
To prevent downloads, specify `download: none`.

# [Example](#tab/example)

```yaml
steps:
- download: current  # refers to artifacts published by current pipeline
  artifact: WebApp
  patterns: '**/.js'
  displayName: Download artifact WebApp
- download: MyAppA   # downloads artifacts available as part of the pipeline resource
```

---

Learn more about [downloading artifacts](./artifacts/pipeline-artifacts.md#download-artifacts).

::: moniker-end

## Checkout

Nondeployment jobs automatically check out source code.
Use the `checkout` keyword to configure or suppress this behavior.

# [Schema](#tab/schema)

::: moniker range="azure-devops-2019"

```yaml
steps:
- checkout: self  # self represents the repo where the initial Pipelines YAML file was found
  clean: boolean  # if true, execute `execute git clean -ffdx && git reset --hard HEAD` before fetching
  fetchDepth: number  # the depth of commits to ask Git to fetch (applies to submodules too if they're enabled); defaults to no limit
  lfs: boolean  # whether to download Git-LFS files; defaults to false
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules; defaults to not checking out submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1); defaults to a directory called `s`
  persistCredentials: boolean  # if 'true', leave the OAuth token in the Git config after the initial fetch; defaults to false
```

::: moniker-end

::: moniker range="> azure-devops-2019"

```yaml
steps:
- checkout: self | none | repository name # self represents the repo where the initial Pipelines YAML file was found
  clean: boolean  # if true, run `execute git clean -ffdx && git reset --hard HEAD` before fetching
  fetchDepth: number  # the depth of commits to ask Git to fetch; defaults to no limit
  lfs: boolean  # whether to download Git-LFS files; defaults to false
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules; defaults to not checking out submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1); defaults to a directory called `s`
  persistCredentials: boolean  # if 'true', leave the OAuth token in the Git config after the initial fetch; defaults to false
```

::: moniker-end

> [!NOTE]
> In addition to the cleaning option available using `checkout`, you can also configuring cleaning in a workspace. For more information about workspaces, including clean options, see the [workspace](process/phases.md#workspace) topic in [Jobs](process/phases.md).

To avoid syncing sources at all:

```yaml
steps:
- checkout: none
```

> [!NOTE]
> If you're running the agent in the Local Service account and want to modify the current repository by using git operations or loading git submodules, give the proper permissions to the Project Collection Build Service Accounts user.

```yaml
- checkout: self
  submodules: true
  persistCredentials: true
```

::: moniker range="> azure-devops-2019"

To check out multiple repositories in your pipeline, use multiple `checkout` steps:

```yaml
- checkout: self
- checkout: git://MyProject/MyRepo
- checkout: MyGitHubRepo # Repo declared in a repository resource
```

For more information, see [Check out multiple repositories in your pipeline](repos/multi-repo-checkout.md).



::: moniker-end

# [Example](#tab/example)

```yaml
steps:
- checkout: self  # self represents the repo where the initial Azure Pipelines YAML file was found
  clean: true
  fetchDepth: 5
  lfs: true
  path: PutMyCodeHere
```

::: moniker range="> azure-devops-2019"

In the following example, three repositories are checked out:

- A GitHub repository named `tools` declared in repository resources.
- An Azure Repos Git repository named `resources` declared inline with the `checkout` step.
- The repository represented by `self`.

```yaml
resources:
  repositories:
  - repository: MyGitHubToolsRepo # The name used to reference this repository in the checkout step
    type: github
    endpoint: MyGitHubServiceConnection
    name: MyGitHubToolsOrg/tools

trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- checkout: self
- checkout: MyGitHubToolsRepo
- checkout: git://MyResourcesProject/resources
```

::: moniker-end

---

## Task

[Tasks](process/tasks.md) are the building blocks of a pipeline.
There's a [catalog of tasks](tasks/index.md) available to choose from.

# [Schema](#tab/schema)

```yaml
steps:
- task: string  # reference to a task and version, e.g. "VSBuild@1"
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  condition: string
  continueOnError: boolean  # 'true' if future steps should run even if this step fails; defaults to 'false'
  enabled: boolean  # whether to run this step; defaults to 'true'
  target:
    container: string # where this step will run; values are the container name or the word 'host'
    commands: enum  # whether to process all logging commands from this step; values are `any` (default) or `restricted`
    settableVariables: string # what variables are allowed; defaults to all; can be `none` or a list of allowed vars
  timeoutInMinutes: number
  inputs: { string: string }  # task-specific inputs
  env: { string: string }  # list of environment variables to add
```

If you don't specify a command mode, you can shorten the `target` structure to:

```yaml
- task:
  target: string  # container name or the word 'host'
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

Learn more about [conditions](process/conditions.md?tabs=yaml),
[timeouts](process/phases.md?tabs=yaml#timeouts), and [step targets](process/tasks.md#step-target).

## Syntax highlighting

Syntax highlighting is available for the pipeline schema via a Visual Studio Code extension.
You can [download Visual Studio Code](https://code.visualstudio.com), [install the extension](https://marketplace.visualstudio.com/items?itemName=ms-azure-devops.azure-pipelines), and [check out the project on GitHub](https://github.com/Microsoft/azure-pipelines-vscode).
The extension includes a [JSON schema](https://github.com/microsoft/azure-pipelines-vscode/blob/main/service-schema.json) for validation.

You also can obtain a schema that's specific to your organization (that is, it contains installed custom tasks) from the [Azure DevOps REST API yamlschema endpoint](/rest/api/azure/devops/distributedtask/yamlschema/get?preserve-view=true&view=azure-devops-rest-5.1).

<!-- For people who get here by searching for, say, "azure pipelines template YAML schema", 
     look around a bit, and then type "Ctrl-F JSON" when they don't see anything promising
     in the first few screenfuls. -->
