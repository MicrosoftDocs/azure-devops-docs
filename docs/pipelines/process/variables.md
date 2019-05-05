---
title: Variables
ms.custom: seodec18
description: Variables are name-value pairs defined by you for use in a pipeline. You can use variables as inputs to tasks and in your scripts.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4751564b-aa99-41a0-97e9-3ef0c0fce32a
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 04/10/2019
monikerRange: '>= tfs-2015'
---

# Variables

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

Variables give you a convenient way to get key bits of data into various parts of the pipeline.
As the name suggests, the value of a variable may change from run to run or job to job of your pipeline.
Almost any place where a pipeline requires a text string or a number, you can use a variable instead of hard-coding a value.
The system will replace the variable with its current value during the pipeline's execution.

Some variables are automatically set by the system.
As a pipeline author or end user, you cannot change the value of such variables.
See the comprehensive lists of systems variables available as [build variables](../build/variables.md) and [release variables](../release/variables.md).

In this topic, we discuss user-defined variables. Names of these variables consist of letters, numbers, `.`, and `_` characters.

## Set variables in pipeline

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

In the most common case, you set the variables and use them within the YAML file. This allows you to track changes to the variable in your version control system. Here is an example that shows how to set two variables - `configuration` and `platform` - and use them later in steps. To use a variable in a YAML statement, wrap it in `$()`.

```yaml
# Set variables once
variables:
  configuration: debug
  platform: x64

steps:

# Use them once
- task: MSBuild@1
  inputs:
    solution: solution1.sln
    configuration: $(configuration) # Use the variable
    platform: $(platform)

# Use them again
- task: MSBuild@1
  inputs:
    solution: solution2.sln
    configuration: $(configuration) # Use the variable
    platform: $(platform)
```

In the YAML file, you can set a variable at various scopes:

- At the root level, to make it available to all jobs in the pipeline
- At the job level, to make it available only to a specific job

```yaml
variables:
  global_variable: value    # this is available to all jobs

jobs:
- job: job1
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    job_variable1: value1    # this is only available in job1
  steps:
  - bash: echo $(global_variable)
  - bash: echo $(job_variable1)
  - bash: echo $JOB_VARIABLE1 # variables are available in the script environment too

- job: job2
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    job_variable2: value2    # this is only available in job2
  steps:
  - bash: echo $(global_variable)
  - bash: echo $(job_variable2)
  - bash: echo $GLOBAL_VARIABLE
```

[!INCLUDE [temp](_shared/access-variables-through-env.md)]

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

You can set a variable for a build pipeline by following these steps:

- Navigate to **Pipelines** page, select the appropriate pipeline, and then select **Edit**.
- Locate the **Variables** for this pipeline.
- Add or update the variable.
- To mark the variable as secret and store in an encrypted manner, select the ![Secret](_img/variables/secret-variable-icon.png) lock icon.
- Save the pipeline.

Once it is set, you can use the variable as an input to a task or within the scripts in your pipeline.
To use a variable as an input to a task, wrap it in `$()`.

[!INCLUDE [temp](_shared/access-variables-through-env.md)]

---

<h2 id="secret-variables">Secrets</h2>

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

You should not set secret variables in your YAML file. Instead, you should set them in the pipeline editor using the web interface. These variables are scoped to the pipeline in which you set them.

[!INCLUDE [temp](_shared/set-secrets.md)]

The following example shows how to pass a secret variable called `mySecret` set in the web interface to a script.

```yaml
steps:

- powershell: |
    # Using an input-macro:
    Write-Host "This works: $(mySecret)"

    # Using the env var directly:
    Write-Host "This does not work: $env:MYSECRET"

    # Using the mapped env var:
    Write-Host "This works: $env:MY_MAPPED_ENV_VAR"    # Recommended
  env:
    MY_MAPPED_ENV_VAR: $(mySecret)
```

The output from the above script would look like this:

```text
This works: ***
This does not work:
This works: ***
```

It is recommended that you use the script's environment in order to pass secrets to the script. Operating systems often log commands for the processes that they run, and you would not want the log to include a secret that you passed in as an input.

**Important:** By default with GitHub repositories, secret variables associated with your pipeline are not made available to pull request builds of forks. See [Validate contributions from forks](../repos/github.md#validate-contributions-from-forks).

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

[!INCLUDE [temp](_shared/set-secrets.md)]

To pass a secret to a script, use the **Environment** section of the scripting task's input variables.

**Important:** By default with GitHub repositories, secret variables associated with your pipeline are not made available to pull request builds of forks. See [Validate contributions from forks](../repos/github.md#validate-contributions-from-forks).

---

## Share variables across pipelines

To share variables across multiple pipelines in your project, you should set them using [variable groups](../library/variable-groups.md) under **Library** using the web interface. For more information, see [variable groups](../library/variable-groups.md).

<h2 id="set-in-script">Set variables in scripts</h2>

A script in your pipeline can define a variable so that it can be consumed by one of the subsequent steps in the pipeline. To set a variable from a script, you use a command syntax and print to stdout. 

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

### Set a job-scoped variable from a script

To set a variable from a script, you use the `task.setvariable` logging command.
This does not update the environment variables, but it does make the new
variable available to downstream steps within the same job.

```yaml
steps:

# Create a variable
- script: |
    echo '##vso[task.setvariable variable=sauce]crushed tomatoes'

# Use the variable
# "$(sauce)" is replaced by the contents of the `sauce` variable by Azure Pipelines
# before handing the body of the script to the shell.
- script: |
    echo my pipeline variable is $(sauce)
```

Subsequent steps will also have the pipeline variable added to their environment.

```yaml
steps:

# Create a variable
# Note that this does _not_ update the environment of the current script.
- script: |
    echo '##vso[task.setvariable variable=sauce]crushed tomatoes'

# An environment variable called `SAUCE` has been added to all downstream steps
- bash: |
    echo my environment variable is $SAUCE
- pwsh: |
    Write-Host "my environment variable is $env:SAUCE"
```

### Set a multi-job output variable

If you want to make a variable available to future jobs, you must mark it as
an output variable using `isOutput=true`. Then you can map it into future
jobs using `$[]` syntax and including the step name which set the variable.

```yaml
jobs:

# Set an output variable from job A
- job: A
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - powershell: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the value"
    name: setvarStep
  - script: echo $(setvarStep.myOutputVar)
    name: echovar

# Map the variable into job B
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    myVarFromJobA: $[ dependencies.A.outputs['setvarStep.myOutputVar'] ]  # map in the variable
                                                                          # remember, expressions require single quotes
  steps:
  - script: echo $(myVarFromJobA)
    name: echovar
```

If you're setting a variable from a [matrix](phases.md?tab=yaml#parallelexec)
or [slice](phases.md?tab=yaml#slicing), then to reference the variable,
you have to include the name
of the job as well as the step when you access it from a downstream job.

```yaml
jobs:

# Set an output variable from a job with a matrix
- job: A
  pool:
    vmImage: 'ubuntu-16.04'
  strategy:
    maxParallel: 2
    matrix:
      debugJob:
        configuration: debug
        platform: x64
      releaseJob:
        configuration: release
        platform: x64
  steps:
  - script: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the $(configuration) value"
    name: setvarStep
  - script: echo $(setvarStep.myOutputVar)
    name: echovar

# Map the variable from the debug job
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    myVarFromJobADebug: $[ dependencies.A.outputs['debugJob.setvarStep.myOutputVar'] ]
  steps:
  - script: echo $(myVarFromJobADebug)
    name: echovar
```

```yaml
jobs:

# Set an output variable from a job with slicing
- job: A
  pool:
    vmImage: 'ubuntu-16.04'
    parallel: 2 # Two slices
  steps:
  - script: echo "##vso[task.setvariable variable=myOutputVar;isOutput=true]this is the slice $(system.jobPositionInPhase) value"
    name: setvarStep
  - script: echo $(setvarStep.myOutputVar)
    name: echovar

# Map the variable from the job for the first slice
- job: B
  dependsOn: A
  pool:
    vmImage: 'ubuntu-16.04'
  variables:
    myVarFromJobsA1: $[ dependencies.A.outputs['job1.setvarStep.myOutputVar'] ]
  steps:
  - script: "echo $(myVarFromJobsA1)"
    name: echovar
```

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

### Set a job-scoped variable from a script

To set a variable from a script, you use the `task.setvariable` logging command.
This does not update the environment variables, but it does make the new
variable available to downstream steps within the same job.

[!INCLUDE [include](_shared/set-variables-in-scripts.md)]

### Set a multi-job output variable

You cannot pass a variable from one job to another job of a build pipeline unless you use YAML.

---

## Set variables using expressions

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

You can set a variable using an expression. We already encountered one case of this to set a variable to the output of another from a previous job.

```yaml
- job: B
  dependsOn: A
  variables:
    myVarFromJobsA1: $[ dependencies.A.outputs['job1.setvarStep.myOutputVar'] ] # remember to use single quotes
``` 

You can use any of the supported expressions for setting a variable. Here is an example of setting a variable to act as a counter that starts at 100, gets incremented by 1 for every run, and gets reset to 100 every day.

```yaml
jobs:
- job:
  variables:
    a: $[counter(format('{0:yyyyMMdd}', pipeline.startTime), 100)]
  steps:
    - bash: echo $(a)
``` 

For more information about counters and other expressions, see [expressions](expressions.md).

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

You can use any of the supported expressions for setting a variable. Here is an example of setting a variable to act as a counter that starts at 100, gets incremented by 1 for every run, and gets reset to 100 every day.

- In the variables of a build pipeline, set a variable `a` to this value: `$[counter(format('{0:yyyyMMdd}', pipeline.startTime), 100)]`

For more information about counters and other expressions, see [expressions](expressions.md).

---

## Allow at queue time

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

You can choose which variables are allowed to be set at queue time and which are fixed by the pipeline author.
If a variable appears in the `variables` block of a YAML file, it is fixed and cannot be overridden at queue time.
To allow a variable to be set at queue time, make sure it doesn't appear in the `variables` block of a pipeline or job.
You can set a default value in the editor, and that value can be overridden by the person queuing the pipeline.

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

You can choose which variables are allowed to be set at queue time and which are fixed by the pipeline author.
To do this, select the variable in the **Variables** tab of the build pipeline, and mark it as **Settable at queue time**.

---

## Expansion of variables

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

When you set a variable with the same name in multiple scopes, the following precedence is used (highest precedence first).

1. Job level variable set in the YAML file
1. Pipeline level variable set in the YAML file
1. Variable set at queue time
1. Pipeline variable set in the web editor

In the following example, the same variable `a` is set at the pipeline level and job level in YAML file. It is also set in a variable group `G` and as a variable in the pipeline using the web editor.

```yaml
variables:
  a: 'pipeline yaml'

jobs:
- job: A
  variables:
  - group: G
  - name: a
    value: 'job yaml'
  steps:
    - bash: echo $(a)        # This will be 'job yaml'
```

> [!NOTE]
> When you set a variable in the YAML file, do not define it in the web editor as 'settable at queue time'. You cannot currently change variables that are set in the YAML file at queue time. If you need a variable to be settable at queue time, then do not set it in the YAML file.

Variables are expanded once when the run is started, and again, at the beginning of each step. Here is an example to demonstrate this:

```yaml
jobs:
- job: A
  variables:
  - a: 10
  steps:
    - bash: |
        echo $(a)            # This will be 10
        echo '##vso[task.setvariable variable=a]20'
        echo $(a)            # This will also be 10, since the expansion of $(a) happens before the step
    - bash: echo $(a)        # This will be 20, since the variables are expanded just before the step
```

There are two steps in the above example, and the expansion of `$(a)` happens once at the beginning of the job, and once at the beginning of each of the two steps. 

Since variables are expanded at the beginning of a job, you cannot use them in a strategy. In the following example, you cannot use the variable `a` to expand the job matrix since the variable is only available at the beginning of each expanded job.

```yaml
jobs:
- job: A
  variables:
  - a: 10
  strategy:
    matrix:
      x:
        some_variable: $(a)    # This does not work
```

If the variable `a` is an output variable from a previous job, then you can use that to expand the job matrix.

```yaml
- job: A
  steps:
  - powershell: echo "##vso[task.setvariable variable=a;isOutput=true]10"
    name: a_step

# Map the variable into job B
- job: B
  dependsOn: A
  strategy:
    matrix:
      x:
        some_variable: $[ dependencies.A.outputs['a_step.a'] ]    # This works
```

::: moniker-end
::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

When you set a variable with the same name in multiple scopes, the following precedence is used (highest precedence first).

1. Variable set at queue time
1. Variable set in the pipeline
1. Variable set in the variable group

Variables are expanded once when the run is started, and again, at the beginning of each step. Here is an example to demonstrate this:

- You set a variable called `a` to 10 in a pipeline.
- In one of the steps (a bash script step), you run the following script:
  ```bash
  echo $(a)            # This will be 10
  echo '##vso[task.setvariable variable=a]20'
  echo $(a)            # This will also be 10, since the expansion of $(a) happens before the step
  ```
- In the next step (another bash script step), you run the following script:
  ```bash
  - bash: echo $(a)    # This will be 20, since the variables are expanded just before the step
  ```
---
