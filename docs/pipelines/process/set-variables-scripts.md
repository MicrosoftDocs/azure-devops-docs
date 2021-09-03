---

title: Set variables in scripts
description: Learn how to define variables in Bash and PowerShell scripts and use them in your pipeline.
ms.topic: conceptual
ms.date: 09/03/2021
monikerRange: '>= tfs-2015'
---

# Set variables in scripts

You can use the `task.setvariable` logging command to set variables in [PowerShell](../scripts/powershell.md) and [Bash](../tasks/utility/bash.md) scripts. 

When you add a variable in a task with `task.setvariable`, the following tasks can use the variable using macro syntax `$(myVar)`. The variable is exposed to future tasks as an enviromental variable. To use the variable in subsequent stages, you need to set the `isOutput` property to `true`. When a variable is set as an output variable, you'll include the task name to reference it. For example, `$(TaskName.myVar)`. 

The `task.setvariable` command includes properties for setting a variable as secret. The available properties include:

* `variable` = variable name (Required)
* `issecret` = boolean (Optional, defaults to false)
* `isoutput` = boolean (Optional, defaults to false)
* `isreadonly` = boolean (Optional, defaults to false)

#### Examples

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
