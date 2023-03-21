---

title: Set variables in scripts
description: Learn how to define variables in Bash and PowerShell scripts and use them in your pipeline.
ms.topic: conceptual
ms.date: 12/21/2022
monikerRange: '<= azure-devops'
---

# Set variables in scripts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you use PowerShell and Bash scripts in your pipelines, it's often useful to be able to set variables that you can then use in future tasks. Newly set variables aren't available in the same task. 

Scripts are great for when you want to do something that isn't supported by a task like calling a custom REST API and parsing the response. 

You'll use the `task.setvariable` logging command to set variables in [PowerShell](../scripts/powershell.md) and [Bash](/azure/devops/pipelines/tasks/reference/bash-v3) scripts. 

> [!NOTE] 
> Deployment jobs use a different syntax for output variables. To learn more about support for output variables in deployment jobs, see [Deployment jobs](./deployment-jobs.md#support-for-output-variables).

## About `task.setvariable`

When you add a variable with `task.setvariable`, the following tasks can use the variable using macro syntax `$(myVar)`. The variable will only be available to tasks in the same job by default. If you add the parameter `isoutput`, the syntax to call your variable changes. See [Set an output variable for use in the same job](#set-an-output-variable-for-use-in-the-same-job).

# [Bash](#tab/bash)

Set the variable `myVar` with the value `foo`. 

```yaml
- bash: |
    echo "##vso[task.setvariable variable=myVar;]foo"
```

Read the variable `myVar`:

```yaml
- bash: |
    echo "You can use macro syntax for variables: $(myVar)"
```

# [PowerShell](#tab/powershell)

Set the variable `myVar` with the value `foo`. 

```yaml
- powershell: |
    Write-Host "##vso[task.setvariable variable=myVar;]foo"
```

Read the variable `myVar`:

```yaml
- powershell: |
    Write-Host "You can use macro syntax for variables: $(myVar)"
```
---

## Set variable properties

The `task.setvariable` command includes properties for setting a variable as secret, as an output variable, and as read only. The available properties include:

* `variable` = variable name (Required)
* `issecret` = boolean (Optional, defaults to false)
* `isoutput` = boolean (Optional, defaults to false)
* `isreadonly` = boolean (Optional, defaults to false)

To use the variable in the next stage, set the `isoutput` property to `true`. To reference a variable with the `isoutput` set to true, you'll include the task name. For example, `$(TaskName.myVar)`. 

When you set a variable as read only, it can't be overwritten by downstream tasks. Set `isreadonly` to `true`. Setting a variable as read only enhances security by making that variable immutable. 


## Set a variable as secret

[!INCLUDE [set secret variable in UI](includes/secret-variables-logging.md)]


## Levels of output variables

There are four different types of output variables with distinct syntaxes:

* [Output variables set in the same job without the `isoutput` parameter](#set-an-output-variable-for-use-in-the-same-job). To reference these variables, you'll use macro syntax. Example: `$(myVar)`.
* [Output variables set in the same job with the `isoutput` parameter](#set-an-output-variable-for-use-in-the-same-job). To reference these variables, you'll include the task name. Example: `$(myTask.myVar)`.
* [Output variables set in a future job](#set-an-output-variable-for-use-in-future-jobs). To reference these variables, you'll reference the variable in the `variables` section with `dependency` syntax.  
* [Output variables set in future stages](#set-an-output-variable-for-use-in-future-stages). To reference these variables, you'll reference the variable in the `variables` section with `stageDependencies` syntax.  

## Set an output variable for use in the same job

When you use an output variable in the same job, you don't have to use the `isoutput` property. By default, the variable will be available to downstream steps within the same job. However, if you do add the `isoutput` property, you'll need to reference the variable with the task name. 

# [Bash](#tab/bash)

The script here sets the same-job output variable `myJobVar` without specifying `isoutput` and sets `myOutputJobVar` with `isoutput=true`.

```yaml
jobs:
- job: A
  steps:
  - bash: |
     echo "##vso[task.setvariable variable=myJobVar]this is the same job"
  - bash: |
     echo "##vso[task.setvariable variable=myOutputJobVar;isoutput=true]this is the same job too"
    name: setOutput
```

This script gets the same-job variables `myJobVar` and `myOutputJobVar`. Notice that the syntax changes for referencing an output variable once `isoutput=true` is added. 

```yaml
jobs:
- job: A
  steps:
  - bash: |
     echo "##vso[task.setvariable variable=myJobVar]this is the same job"
  - bash: |
     echo "##vso[task.setvariable variable=myOutputJobVar;isoutput=true]this is the same job too"
    name: setOutput
  - bash: |
     echo $(myJobVar) 
  - bash: |
     echo $(setOutput.myOutputJobVar)
```

# [PowerShell](#tab/powershell)

This script sets the same-job output variable `myJobVar` without specifying `isoutput` and sets `myOutputJobVar` with `isoutput=true`. 

```yaml
jobs:
- job: A
  steps:
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myJobVar]this is the same job"
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myOutputJobVar;isoutput=true]this is the same job too"
    name: setOutput
```

This script gets the same-job variables `myJobVar` and `myOutputJobVar`. Notice that the syntax changes for referencing an output variable once `isoutput=true` is added. 

```yaml
jobs:
- job: A
  steps:
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myJobVar]this is the same job"
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myOutputJobVar;isoutput=true]this is the same job too"
    name: setOutput
  - powershell: |
     Write-Host $(myJobVar) 
  - powershell: |
     Write-Host $(setOutput.myOutputJobVar)
```

---
## Set an output variable for use in future jobs

When you use output variables across jobs, you'll reference them with `dependencies`. The syntax for accessing an output variable in a future job or stage varies based on the relationship between the setter and consumer of the variable. Learn about each case in [dependencies](expressions.md#dependencies).

# [Bash](#tab/bash)

First, set the output variable `myOutputVar`.

```yaml
jobs:
- job: A
  steps:
  - bash: |
     echo "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput

```

Next, access `myOutputVar` in a future job and output the variable as `myVarFromJobA`. To use `dependencies`, you need to set the `dependsOn` property on the future job using the name of the past job in which the output variable was set.

```yaml
jobs:
- job: A
  steps:
  - bash: |
     echo "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput
- job: B
  dependsOn: A
  variables:
    myVarFromJobA: $[ dependencies.A.outputs['passOutput.myOutputVar'] ]  
  steps:
  - bash: |
     echo $(myVarFromJobA)
```

# [PowerShell](#tab/powershell)

First, set the output variable `myOutputVar`.

```yaml
jobs:
- job: A
  steps:
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput
```

Next, access `myOutputVar` in a future job and output the variable as `myVarFromJobA`. To use `dependencies`, you need to set the `dependsOn` property on the future job using the name of the past job in which the output variable was set.

```yaml
jobs:
- job: A
  steps:
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput
- job: B
  dependsOn: A
  variables:
    myVarFromJobA: $[ dependencies.A.outputs['passOutput.myOutputVar'] ]  
  steps:
  - powershell: |
     Write-Host $(myVarFromJobA)
```
---

## Set an output variable for use in future stages

Output variables can be used across stages in pipelines. You can use output variables to pass useful information, such as the ID of a generated output, from one stage to the next. 

When you set a variable with the `isoutput` property, you can reference that variable in later stages with the task name and the `stageDependencies` syntax. Learn more about [dependencies](expressions.md#stage-depending-on-job-output). 


# [Bash](#tab/bash)

First, set the output variable `myStageVal`.

```yaml
steps:
    - bash: echo "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
      name: MyOutputVar
```

Then, in a future stage, map the output variable `myStageVal` to a stage, job, or task-scoped variable as, for example, `myStageAVar`. Note the mapping syntax uses a runtime expression `$[]` and traces the path from `stageDependencies` to the output variable using both the stage name (`A`) and the job name (`A1`) to fully qualify the variable.

```yaml
stages:
- stage: A
  jobs:
  - job: A1
    steps:
     - bash: echo "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
       name: MyOutputVar
- stage: B
  dependsOn: A
  jobs:
  - job: B1
    variables:
      myStageAVar: $[stageDependencies.A.A1.outputs['MyOutputVar.myStageVal']]
    steps:
      - bash: echo $(myStageAVar)
```

# [PowerShell](#tab/powershell)

First, set the output variable `myStageVal`.

```yaml
    steps:
     - powershell: Write-Host "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
       name: MyOutputVar
```

Then, in a future stage, map the output variable `myStageVal` to a stage, job, or task-scoped variable as, for example, `myStageAVar`. Note the mapping syntax uses a runtime expression `$[]` and traces the path from `stageDependencies` to the output variable using both the stage name (`A`) and the job name (`A1`) to fully qualify the variable.

```yaml
stages:
- stage: A
  jobs:
  - job: A1
    steps:
    - powershell: Write-Host "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
      name: MyOutputVar
- stage: B
  dependsOn: A
  jobs:
  - job: B1
    variables:
      myStageAVar: $[stageDependencies.A.A1.outputs['MyOutputVar.myStageVal']]
    steps:
    - powershell: Write-Host "$(myStageAVar)"
```

---

In case your value contains newlines, you can escape them and the agent will automatically unescape it:

```yaml
steps:
- bash: |
    escape_data() {
      local data=$1
      data="${data//'%'/'%AZP25'}"
      data="${data//$'\n'/'%0A'}"
      data="${data//$'\r'/'%0D'}"
      echo "$data"
      }
    echo "##vso[task.setvariable variable=myStageVal;isOutput=true]$(escape_data $'foo\nbar')"
  name: MyOutputVar
```
