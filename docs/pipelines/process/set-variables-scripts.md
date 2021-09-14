---

title: Set variables in scripts
description: Learn how to define variables in Bash and PowerShell scripts and use them in your pipeline.
ms.topic: conceptual
ms.date: 09/14/2021
monikerRange: '>= tfs-2015'
---

# Set variables in scripts

When you use PowerShell and Bash scripts in your pipelines, it's often useful to be able to set variables that you can then use in future tasks. Scripts are great for when you want to do something that isn't supported by a task like calling a custom REST API and parsing the response. 

You'll use the `task.setvariable` logging command to set variables in [PowerShell](../scripts/powershell.md) and [Bash](../tasks/utility/bash.md) scripts. 

## About `task.setvariable`

When you add a variable with `task.setvariable`, the following tasks can use the variable using macro syntax `$(myVar)`. The variable will only be available to tasks in the same stage by default. If you add the parameter `isoutput`, the syntax to call your variable changes. See [Set an output variable in the same job](#set-an-output-variable-in-the-same-job).

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

When you set a variable as read only it can't be overwritten by downstream tasks. Set `isreadonly` to `true`. Setting a variable as read only enhances securing by making that variable immutable. 


## Set a variable as secret

When `issecret` is set to true, the value of the variable will be saved as secret and masked out from log.

# [Bash](#tab/bash)

Set the secret variable `mySecretVal`.

```yaml
- bash: |
    echo "##vso[task.setvariable variable=mySecretVal;issecret=true]secretvalue"
```

Get the secret variable `mySecretVal`.

```yaml
- bash: |
    echo "##vso[task.setvariable variable=mySecretVal;issecret=true]secretvalue"
- bash: |
    echo $(mySecretVal)
```

Secret variable output in bash.

:::image type="content" source="media/task-var-bash.png" alt-text="Output of bash variable.":::
# [PowerShell](#tab/powershell)

Set the secret variable `mySecretVal`.
```yaml
- powershell: |
    Write-Host "##vso[task.setvariable variable=mySecretVal;issecret=true]secretvalue"
```

Get the secret variable `mySecretVal`.
```yaml
- powershell: |
    Write-Host "##vso[task.setvariable variable=mySecretVal;issecret=true]secretvalue"
- powershell: |
    Write-Host $(mySecretVal)
```

Output of PowerShell variable. 

:::image type="content" source="media/task-var-powershell.png" alt-text="Output of secret PowerShell variable.":::

---

## Levels of output variables

There are three levels of output variables with distinct syntaxes:
    - Output variables set in the same job
    - Output variables set in a future job
    - Output variables set in future stages

## Set an output variable in the same job

When you use an output variable in the same job, you do not have to use the `isoutput` property. By default, the variable will be available to downstream steps within the same job. However, if you do add the `isoutput` property, you'll need to reference the variable with the task name. 

# [Bash](#tab/bash)

Set the same-job output variable `myJobVar` without specifying `isoutput` and sets `myOutputJobVar` with `isoutput`. 

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

Get the same-job variables `myJobVar` and `myOutputJobVar`. Notice that the syntax changes for referencing an output variable once `isoutput` is added. 

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

Set the same-job output variable `myJobVar` without specifying `isoutput` and sets `myOutputJobVar` with `isoutput`. 

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

Get the same-job variables `myJobVar` and `myOutputJobVar`. Notice that the syntax changes for referencing an output variable once `isoutput` is added. 

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
## Set an output variable in a future job

When you use output variables across jobs, you'll reference them with `dependencies`. Learn more about [dependencies](expressions.md). 

# [Bash](#tab/bash)

Set the output variable `myOutputVar`.

```yaml
jobs:
- job: A
  steps:
  - bash: |
     echo "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput

```

Pass `myOutputVar` to a different job and output the variable as `myVarFromJobA`. To use `dependencies`, you need to set `dependsOn`. 

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

Set the output variable `myOutputVar`.

```yaml
jobs:
- job: A
  steps:
  - powershell: |
     Write-Host "##vso[task.setvariable variable=myOutputVar;isoutput=true]this is from job A"
    name: passOutput
```

Pass `myOutputVar` to a different job and output the variable as `myVarFromJobA`. To use `dependencies`, you need to set `dependsOn`. 

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

## Set a variable for future stages

Output variables can be used across stages in pipelines. This helps you pass useful information, such as the ID of a generated output, from one stage to the next. 

When you set a variable with the `isoutput` property, you can reference that variable in later stages with the task name and the `stageDependencies` syntax. Learn more about [dependencies](expressions.md). 


# [Bash](#tab/bash)

Set the output variable `myStageVal`.

```yaml
steps:
    - bash: echo "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
      name: MyOutputVar
```

Pass `myStageVal` to a different stage and output the variable as `myStageAVar`. 

```yaml
stages:
- stage: A
  jobs:
  - job: A1
    steps:
     - bash: echo "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
       name: MyOutputVar
- stage: B
  jobs:
  - job: B1
    variables:
      myStageAVar: $[stageDependencies.A.A1.outputs['MyOutputVar.myStageVal']]
    steps:
      - bash: echo $(myStageAVar)
```

# [PowerShell](#tab/powershell)

Set the output variable `myStageVal`.

```yaml
    steps:
     - powershell: Write-Host "##vso[task.setvariable variable=myStageVal;isOutput=true]this is a stage output variable"
       name: MyOutputVar
```

Pass `myStageVal` to a different stage and output the variable as `myStageAVar`. 

---

