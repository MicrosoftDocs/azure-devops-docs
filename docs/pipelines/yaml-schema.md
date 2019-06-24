---
title: YAML schema
ms.custom: seodec18
description: An overview of all YAML features.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2c586863-078f-4cfe-8158-167080cd08c1
ms.manager: jillfra
ms.author: macoope
author: vtbassmatt
ms.reviewer: macoope
ms.date: 06/19/2019
monikerRange: '>= azure-devops-2019'
---

# YAML schema reference

**Azure Pipelines**

Here's a detailed reference guide to Azure Pipelines YAML pipelines, including a catalog of all supported YAML capabilities, and the available options.

::: moniker range="azure-devops"
> The best way to get started with YAML pipelines is through the
[quickstart guide](create-first-pipeline.md).
> After that, to learn how to configure your YAML pipeline the way you need it to work, see conceptual topics such as [Build variables](process/variables.md) and [Jobs](process/phases.md).
::: moniker-end

::: moniker range="< azure-devops"
> To learn how to configure your YAML pipeline the way you need it to work, see conceptual topics such as [Build variables](process/variables.md) and [Jobs](process/phases.md).
::: moniker-end

## Pipeline structure

::: moniker range="> azure-devops-2019"

Pipelines are made of one or more stages describing a CI/CD process.
Stages are the major divisions in a pipeline: "build this app", "run these tests", and "deploy to pre-production" are good examples of stages.

Stages consist of one or more jobs, which are units of work assignable to a particular machine.
Both stages and jobs may be arranged into dependency graphs: "run this stage before that one" or "this job depends on the output of that job".

Jobs consist of a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of the YAML file.

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

For simpler pipelines, not all of these levels are required. For example,
in a single-job build, you can omit the containers for "stages" and "jobs" since there
are only steps. Also, many options shown here are optional and have good
defaults, so your YAML definitions are unlikely to include all of them.

::: moniker-end

::: moniker range="azure-devops-2019"

Pipelines are made of one or more jobs describing a CI/CD process.
Jobs are units of work assignable to a particular machine.
Jobs may be arranged into dependency graphs, for example: "this job depends on the output of that job".

Jobs consist of a linear series of steps.
Steps can be tasks, scripts, or references to external templates.

This hierarchy is reflected in the structure of the YAML file.

- Pipeline
  - Job 1
    - Step 1.1
    - Step 1.2
    - ...
  - Job 2
    - Step 2.1
    - Step 2.2
    - ...

For single-job pipelines, you can omit the container "jobs" since there
are only steps. Also, many options shown here are optional and have good
defaults, so your YAML definitions are unlikely to include all of them.

::: moniker-end

### Conventions

Conventions used in this topic:
* To the left of `:` are literal keywords used in pipeline definitions.
* To the right of `:` are data types. These can be primitives like **string** or references to rich structures defined elsewhere in this topic.
* `[` *datatype* `]` indicates an array of the mentioned data type. For instance, `[ string ]` is an array of strings.
* `{` *datatype* `:` *datatype* `}` indicates a mapping of one data type to another. For instance, `{ string: string }` is a mapping of strings to strings.
* `|` indicates there are multiple data types available for the keyword. For
instance, `job | templateReference` means either a job definition or a
template reference are allowed.

### YAML basics

This document covers the schema of an Azure Pipelines YAML file.
To learn the basics of YAML, see [Learn YAML in Y Minutes](https://learnxinyminutes.com/docs/yaml/).
Note: Azure Pipelines doesn't support all features of YAML, such as anchors, complex keys, and sets.

## Pipeline

# [Schema](#tab/schema)

::: moniker range="> azure-devops-2019"
```yaml
name: string  # build numbering format
resources:
  containers: [ containerResource ]
  repositories: [ repositoryResource ]
variables: { string: string } | [ variable | templateReference ]
trigger: trigger
pr: pr
stages: [ stage | templateReference ]
```

If you have a single [stage](#stage), you can omit `stages` and directly specify [jobs](#job):

```yaml
# ... other pipeline-level keywords
jobs: [ job | templateReference ]
```

If you have a single stage and a single job, you can omit those keywords and directly specify [steps](#steps):

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

# [Example](#tab/example)

```yaml
name: $(Date:yyyyMMdd)$(Rev:.r)
variables:
  var1: value1
jobs:
- job: One
  steps:
  - script: echo First step!
```

---

Learn more about [multi-job pipelines](process/phases.md?tabs=yaml),
using [containers](#container-resource) and [repositories](#repository-resource) in pipelines,
[triggers](#triggers), [variables](process/variables.md?tabs=yaml), and
[build number formats](process/run-number.md).

::: moniker range="> azure-devops-2019"
## Stage

A stage is a collection of related jobs.
By default, stages run sequentially, starting only after the stage ahead of them has completed.

# [Schema](#tab/schema)

```yaml
stages:
- stage: string  # name of the stage, A-Z, a-z, 0-9, and underscore
  displayName: string  # friendly name to display in the UI
  dependsOn: string | [ string ]
  condition: string
  variables: { string: string } | [ variable | variableReference ] 
  jobs: [ job | templateReference]
```

# [Example](#tab/example)

This example will run three stages, one after another.
The middle stage will run two jobs in parallel.

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

This example will run two stages in parallel.
(For brevity, the jobs and steps have been omitted.)

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

A [job](process/phases.md?tabs=yaml) is a collection of [steps](#steps) to be run by an
[agent](agents/agents.md) or, in some cases, on the server. Jobs can be
run [conditionally](process/phases.md?tabs=yaml#conditions), and they
may [depend on earlier jobs](process/phases.md?tabs=yaml#dependencies).

# [Schema](#tab/schema)

```yaml
jobs:
- job: string  # name of the job, A-Z, a-z, 0-9, and underscore
  displayName: string  # friendly name to display in the UI
  dependsOn: string | [ string ]
  condition: string
  strategy:
    parallel: # parallel strategy, see below
    matrix: # matrix strategy, see below
    maxParallel: number # maximum number of matrix jobs to run simultaneously
  continueOnError: boolean  # 'true' if future jobs should run even if this job fails; defaults to 'false'
  pool: pool # see pool schema
  workspace:
    clean: outputs | resources | all # what to clean up before the job runs
  container: containerReference # container to run this job inside
  timeoutInMinutes: number # how long to run the job before automatically cancelling
  cancelTimeoutInMinutes: number # how much time to give 'run always even if cancelled tasks' before killing them
  variables: { string: string } | [ variable | variableReference ] 
  steps: [ script | bash | pwsh | powershell | checkout | task | templateReference ]
  services: { string: string | container } # container resources to run as a service container
```

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

Learn more about [variables](process/variables.md?tabs=yaml), [steps](#steps), [pools](#pool), and [server jobs](#server),.

> [!Note]
> If you have only one stage and one job, you can use [single-job syntax](process/phases.md?tabs=yaml)
> as a shorter way to describe the steps to run.

### Container reference

`container` is supported by jobs.

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

`matrix` and `parallel` are mutually-exclusive strategies for duplicating a job.

#### Matrix

Matrixing generates copies of a job with different inputs. This is useful for
testing against different configurations or platform versions.

# [Schema](#tab/schema)

```yaml
strategy:
  matrix: { string1: { string2: string3 } }
  maxParallel: number
```

For each `string1` in the matrix, a copy of the job will be generated. `string1`
is the copy's name and will be appended to the name of the job. For each
`string2`, a variable called `string2` with the value `string3` will be available 
to the job.

> [!NOTE]
> Matrix configuration names must contain only basic Latin alphabet letters (A-Z, a-z), numbers, and underscores (`_`).
> They must start with a letter.
> Also, they must be 100 characters or less.

<a name="maximum-parallelism"></a>
Optionally, `maxParallel` specifies the maximum number of simultaneous matrix legs to run at once.
::: moniker range="> azure-devops-2019"
If not specified or set to 0, no limit will be applied.
::: moniker-end
::: moniker range="azure-devops-2019"
If not specified, no limit will be applied.
::: moniker-end

# [Example](#tab/example)

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

This matrix will create three jobs, "Build Python35", "Build Python36", and "Build Python37". Within
each job, a variable PYTHON_VERSION will be available. In "Build Python35", it
will be set to "3.5". Likewise, it will be "3.6" in "Build Python36".
Only 2 jobs will run simultaneously.

---

#### Parallel

This specifies how many duplicates of the job should run. This is useful for
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

## Steps

Steps are a linear sequence of operations that make up a job.
Each step runs in its own process on an agent and has access to the pipeline workspace on disk.
This means environment variables are not preserved between steps but filesystem changes are.

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

See the schema references for [script](#script),
[bash](#bash), [pwsh](#pwsh), [powershell](#powershell), [checkout](#checkout), [task](#task),
and [step templates](#step-templates) for more details about each.

## Variables

Hardcoded values can be added directly, or [variable groups](library/variable-groups.md) can be referenced.
Variables may be specified at the pipeline, stage, or job level.

# [Schema](#tab/schema)

For a simple set of hardcoded variables:

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

`name`/`value` pairs and `group`s can be repeated.

Variables may also be included from [templates](#variable-templates).

# [Example](#tab/example)

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
- name: MY_VARIABLE           # hardcoded value
  value: some value
- group: my-variable-group-1  # variable group
- group: my-variable-group-2  # another variable group
```

---

## Template references

> [!NOTE]
> Be sure to see the full [template expression syntax](process/templates.md#template-expressions) (all forms of `${{ }}`).

::: moniker range="> azure-devops-2019"

You can export reusable sections of your pipeline to a separate file.
These separate files are known as templates.
Azure Pipelines supports four kinds of templates:
- [Stage](#stage-templates)
- [Job](#job-templates)
- [Step](#step-templates)
- [Variable](#variable-templates)

::: moniker-end

::: moniker range="azure-devops-2019"

You can export reusable sections of your pipeline to a separate file.
These separate files are known as templates.
Azure DevOps Server 2019 supports two kinds of templates:
- [Job](#job-templates)
- [Step](#step-templates)

::: moniker-end

Templates may themselves include other templates.
Azure Pipelines supports a maximum of 50 unique template files in a single pipeline.

::: moniker range="> azure-devops-2019"
### Stage templates

A set of stages can be defined in one file and used multiple places in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string # name of template to include
  parameters: { string: any } # provided parameters
```

And in the included template:

```yaml
parameters: { string: any } # expected parameters
stages: [ stage ]
```

# [Example](#tab/example)

In this example, a stage is repeated twice for two different testing regimes.
The stage itself is only specified once.

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

A set of jobs can be defined in one file and used multiple places in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string # name of template to include
  parameters: { string: any } # provided parameters
```

And in the included template:

```yaml
parameters: { string: any } # expected parameters
jobs: [ job ]
```

# [Example](#tab/example)

In this example, a single job is repeated on three platforms.
The job itself is only specified once.

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

A set of steps can be defined in one file and used multiple places in another file.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
steps:
- template: string  # reference to template
  parameters: { string: any } # provided parameters
```

And in the included template:

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

A set of variables can be defined in one file and referenced several times in other files.

# [Schema](#tab/schema)

In the main pipeline:

```yaml
- template: string            # name of template file to include
  parameters: { string: any } # provided parameters
```

And in the included template:

```yaml
parameters: { string: any }   # expected parameters
variables: [ variable ]
```

# [Example](#tab/example)

In this example, a set of variables is repeated across multiple pipelines.
The variables are only specified once.

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

### Container resource

[Container jobs](process/container-phases.md) let you isolate your tools and
dependencies inside a container. The agent will launch an instance of your
specified container, then run steps inside it. The `container` resource lets
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
    endpoint: string  # endpoint for a private container registry
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
    type: enum  # see below
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

Pipelines support two types of repositories, `git` and `github`. `git` refers to
Azure Repos Git repos. If you choose `git` as your type, then `name` refers to another
repository in the same project. For example, `otherRepo`. To refer to a repo in
another project within the same organization, prefix the name with that project's name.
For example, `OtherProject/otherRepo`.

If you choose `github` as your type, then `name` is the full name of the GitHub
repo including the user or organization. For example, `Microsoft/vscode`. Also,
GitHub repos require a [service connection](library/service-endpoints.md)
for authorization.

## Triggers

* [Push trigger](#push-trigger)
* [PR trigger](#pr-trigger)
* [Scheduled trigger](#scheduled-trigger)

### Push trigger

A trigger specifies what branches will cause a continuous integration build to
run. If left unspecified, pushes to every branch will trigger a build.
Learn more about [triggers](build/triggers.md?tabs=yaml#ci-triggers)
and how to specify them.
Also, be sure to see the note about [wildcards in triggers](build/triggers.md#wildcards).

# [Schema](#tab/schema)

There are three distinct options for `trigger`: a list of branches to include, a way to disable CI triggering, and the full syntax for ultimate control.

List syntax:

```yaml
trigger: [ string ] # list of branch names
```

Disable syntax:

```yaml
trigger: none # will disable CI builds entirely
```

Full syntax:

::: moniker range="> azure-devops-2019"

```yaml
trigger:
  batch: boolean # batch changes if true, start a new build for every push if false
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
  batch: boolean # batch changes if true, start a new build for every push if false
  branches:
    include: [ string ] # branch names which will trigger a build
    exclude: [ string ] # branch names which will not
  paths:
    include: [ string ] # file paths which must match to trigger a build
    exclude: [ string ] # file paths which will not trigger a build
```

::: moniker-end

>[!IMPORTANT]
>When you specify a `trigger`, only branches that are explicitly configured to be included will trigger a pipeline. Includes are processed first, and then excludes are removed from that list. If you specify an exclude but don't specify any includes, nothing will trigger.

# [Example](#tab/example)

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

---

### PR trigger

A pull request trigger specifies what branches will cause a pull request build to
run. If left unspecified, pull requests to every branch will trigger a build.
Learn more about [pull request triggers](build/triggers.md?tabs=yaml#pr-triggers)
and how to specify them.

::: moniker range="azure-devops"

> [!IMPORTANT]
> YAML PR triggers are only supported in GitHub and Bitbucket Cloud. If you are using Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) in order to trigger your build pipeline for validation.

::: moniker-end

::: moniker range="azure-devops-2019"

> [!IMPORTANT]
> YAML PR triggers are only supported in GitHub. If you are using Azure Repos Git, you can configure a [branch policy for build validation](../repos/git/branch-policies.md#build-validation) in order to trigger your build pipeline for validation.

::: moniker-end

# [Schema](#tab/schema)

There are three distinct options for `pr`: a list of branches to include, a way to disable PR triggering, and the full syntax for ultimate control.

List syntax:

```yaml
pr: [ string ] # list of branch names
```

Disable syntax:

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
>When you specify a `pr` trigger, only branches that are explicitly configured to be included will trigger a pipeline. Includes are processed first, and then excludes are removed from that list. If you specify an exclude but don't specify any includes, nothing will trigger.

# [Example](#tab/example)

List syntax:

```yaml
pr:
- master
- develop
```

Disable syntax:

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

YAML scheduled triggers are not available in this version of Azure DevOps Server or TFS. 
You can use [scheduled triggers in the classic editor](build/triggers.md?tabs=classic#scheduled-triggers).

::: moniker-end

::: moniker range="azure-devops"

A scheduled trigger specifies a schedule on which branches will be built. 
If left unspecified, no scheduled builds will occur.
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
>When you specify a scheduled trigger, only branches that are explicitly configured to be included are scheduled for a build. Includes are processed first, and then excludes are removed from that list. If you specify an exclude but don't specify any includes, no branches will be built.

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

In this example, two schedules are defined. The first schedule, **Daily midnight build**, runs a pipeline at midnight every day, but only if the code has changed since the last run, for `master` and all `releases/*` branches, except those under `releases/ancient/*`.

The second schedule, **Weekly Sunday build**, runs a pipeline at noon on Sundays, whether the code has changed or not since the last run, for all `releases/*` branches.

---

::: moniker-end

## Pool

`pool` specifies which [pool](agents/pools-queues.md) to use for a job of the
pipeline. It also holds information about the job's strategy for running.

# [Schema](#tab/schema)

Full syntax:

```yaml
pool:
  name: string  # name of the pool to run this job in
  demands: string | [ string ]  ## see below
  vmImage: string # name of the vm image you want to use, only valid in the Microsoft-hosted pool
```

If you're using a Microsoft-hosted pool, then choose an
[available `vmImage`](agents/hosted.md#use-a-microsoft-hosted-agent).

If you're using a private pool and don't need to specify demands, this can
be shortened to:

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

`demands` is supported by private pools. You can check for existence of a capability or a specific string like this:

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

## Server

`server` specifies a [server job](process/phases.md#server-jobs).

# [Schema](#tab/schema)

This will make the job run as a server job rather than an agent job.

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

`script` is a shortcut for the [command line task](tasks/utility/command-line.md).
It will run a script using cmd.exe on Windows and Bash on other platforms.

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

`bash` is a shortcut for the [shell script task](tasks/utility/shell-script.md).
It will run a script in Bash on Windows, macOS, or Linux.

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

`pwsh` is a shortcut for the [PowerShell task](tasks/utility/powershell.md) with `pwsh` set to `true`.
It will run a script in PowerShell Core on Windows, macOS, or Linux.

# [Schema](#tab/schema)

```yaml
steps:
- pwsh: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  errorActionPreference: enum  # see below
  ignoreLASTEXITCODE: boolean  # see below
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

`powershell` is a shortcut for the [PowerShell task](tasks/utility/powershell.md).
It will run a script in PowerShell on Windows.

# [Schema](#tab/schema)

```yaml
steps:
- powershell: string  # contents of the script to run
  displayName: string  # friendly name displayed in the UI
  name: string  # identifier for this step (A-Z, a-z, 0-9, and underscore)
  errorActionPreference: enum  # see below
  ignoreLASTEXITCODE: boolean  # see below
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
Unless specified, the task defaults the error action preference to `stop`. The
line `$ErrorActionPreference = 'stop'` is prepended to the top of your script.

When the error action preference is set to stop, errors will cause PowerShell
to terminate and return a non-zero exit code. The task will also be marked as
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

By default, the last exit code returned from your script will be checked and,
if non-zero, treated as a step failure. The system will append your script with:

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

`publish` is a shortcut for the [Publish Pipeline Artifact task](tasks/utility/publish-pipeline-artifact.md). It will publish (upload) a file or folder as a pipeline artifact that can be consumed by other jobs and pipelines.

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

`download` is a shortcut for the [Download Pipeline Artifact task](tasks/utility/download-pipeline-artifact.md). It will download one or more artifacts associated with the current run to `$(Pipeline.Workspace)`. It can also be used to disable automatic downloading of artifacts in classic release and deployment jobs.

# [Schema](#tab/schema)

```yaml
steps:
- download: [ current | none ] # disable automatic download if "none"
  artifact: string # artifact name
  patterns: string # patterns representing files to include
```

# [Example](#tab/example)

```yaml
steps:
- download: current
  artifact: WebApp
  patterns: '**/.js'
```

---

Learn more about [downloading artifacts](./artifacts/pipeline-artifacts.md#downloading-artifacts).
::: moniker-end

## Checkout

`checkout` defines options for checking out source code.

# [Schema](#tab/schema)

```yaml
steps:
- checkout: self  # self represents the repo where the initial Pipelines YAML file was found
  clean: boolean  # whether to fetch clean each time
  fetchDepth: number  # the depth of commits to ask Git to fetch
  lfs: boolean  # whether to download Git-LFS files
  submodules: true | recursive  # set to 'true' for a single level of submodules or 'recursive' to get submodules of submodules
  path: string  # path to check out source code, relative to the agent's build directory (e.g. \_work\1)
  persistCredentials: boolean  # set to 'true' to leave the OAuth token in the Git config after the initial fetch
```

Or to avoid syncing sources at all:

```yaml
steps:
- checkout: none
```

# [Example](#tab/example)

```yaml
steps:
- checkout: self  # self represents the repo where the initial Pipelines YAML file was found
  clean: false
  fetchDepth: 5
  lfs: true
  path: PutMyCodeHere
```

---

## Task

[Tasks](process/tasks.md) are the building blocks of a pipeline. There is a
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

Syntax highlighting is available for the pipeline schema via a VS Code
extension. You can [download VS Code](https://code.visualstudio.com),
[install the extension](https://marketplace.visualstudio.com/items?itemName=ms-azure-devops.azure-pipelines), and
[check out the project on GitHub](https://github.com/Microsoft/azure-pipelines-vscode).
<!-- For people who get here by searching for, say, "azure pipelines template YAML schema",
     look around a bit, and then type "Ctrl-F JSON" when they don't see anything promising
     in the first few screenfuls. -->
The extension includes a [JSON schema](https://github.com/microsoft/azure-pipelines-vscode/blob/master/service-schema.json) for validation.
