---

title: Set variables in scripts
description: Learn how to define variables in Bash and PowerShell scripts and use them in your pipeline.
ms.topic: conceptual
ms.date: 09/03/2021
monikerRange: '>= tfs-2015'
---

# Set variables in scripts

When you use PowerShell and Bash scripts in your pipelines, it's often useful to be able to set variables that you can then use in future tasks. Scripts are great for when you want to do something that isn't supported by a task like calling a custom REST API and parsing the response. 

You'll use the `task.setvariable` logging command to set variables in [PowerShell](../scripts/powershell.md) and [Bash](../tasks/utility/bash.md) scripts. 

## About `task.setvariable`

When you add a variable with `task.setvariable`, the following tasks can use the variable using macro syntax `$(myVar)`. The variable is exposed to future tasks as an environmental variable. The variable will only be available to tasks in the same stage by default.  

The `task.setvariable` command includes properties for setting a variable as secret, as an output variable, and as read only. The available properties include:

* `variable` = variable name (Required)
* `issecret` = boolean (Optional, defaults to false)
* `isoutput` = boolean (Optional, defaults to false)
* `isreadonly` = boolean (Optional, defaults to false)

To use the variable in the next stage, set the `isoutput` property to `true`. To reference a variable with the `isoutput` set to true, you'll include the task name. For example, `$(TaskName.myVar)`. 

To set a variable as read only so that it can't be overwritten by downstream tasks, set `isreadonly` to `true`. Setting a variable as read only enhances securing by making that variable immutable. 
#### Variable examples

# [Bash](#tab/bash)

Set the variables:

```yaml
- bash: |
    echo "##vso[task.setvariable variable=myVar;]foo"
```

Read the variables:

```yaml
- bash: |
    echo "You can use macro syntax for variables: $(myVar)"
```

# [PowerShell](#tab/powershell)

Set the variables:

```yaml
- pwsh: |
    Write-Host "##vso[task.setvariable variable=myVar;]foo"
```

Read the variables:

```yaml
- pwsh: |
    Write-Host "You can use macro syntax for variables: $(myVar)"
```
---
