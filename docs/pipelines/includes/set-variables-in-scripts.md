---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 08/16/2024
---

#### Define and modify your variables in a script

To define or modify a variable from a script, use the `task.setvariable` logging command. The updated variable value is scoped to the job being executed and doesn't persist across jobs or stages. Note that variable names are transformed to uppercase, with "." and " " replaced with "_".

For example, `Agent.WorkFolder` becomes `AGENT_WORKFOLDER`.
- On Windows, access this variable as `%AGENT_WORKFOLDER%` or `$env:AGENT_WORKFOLDER`.
- On Linux and macOS, use `$AGENT_WORKFOLDER`.

> [!TIP]
> 
> You can run a script on:
> 
> - A [Windows agent](../agents/windows-agent.md) using either a [Batch script task](/azure/devops/pipelines/tasks/reference/batch-script-v1) or [PowerShell task](/azure/devops/pipelines/tasks/reference/powershell-v2).
> - A [macOS](../agents/osx-agent.md) or [Linux](../agents/linux-agent.md) agent using a [Shell script task](/azure/devops/pipelines/tasks/reference/shell-script-v2).

# [Batch](#tab/batch)

**Batch script**

:::image type="icon" source="../tasks/utility/media/batch-script.png" border="false"::: Set the `sauce` and `secret.Sauce` variables

```bat
@echo ##vso[task.setvariable variable=sauce]crushed tomatoes
@echo ##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with garlic
```

:::image type="icon" source="../tasks/utility/media/batch-script.png" border="false"::: Read the variables

Arguments

```arguments
"$(sauce)" "$(secret.Sauce)"
```

Script

 ```bat
@echo off
set sauceArgument=%~1
set secretSauceArgument=%~2
@echo No problem reading %sauceArgument% or %SAUCE%
@echo But I cannot read %SECRET_SAUCE%
@echo But I can read %secretSauceArgument% (but the log is redacted so I do not spoil the secret)
```

# [PowerShell](#tab/powershell)

**PowerShell script**

:::image type="icon" source="../tasks/utility/media/powershell.png" border="false"::: Set the `sauce` and `secret.Sauce` variables

```powershell
Write-Host "##vso[task.setvariable variable=sauce]crushed tomatoes"
Write-Host "##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with
            garlic"
```

:::image type="icon" source="../tasks/utility/media/powershell.png" border="false"::: Read the variables

Arguments

```arguments
-sauceArgument "$(sauce)" -secretSauceArgument "$(secret.Sauce)"
```

Script

```powershell
Param(
   [string]$sauceArgument,
   [string]$secretSauceArgument
)
Write-Host No problem reading $env:SAUCE or $sauceArgument
Write-Host But I cannot read $env:SECRET_SAUCE
Write-Host But I can read $secretSauceArgument "(but the log is redacted so I do not spoil the secret)"
```

**Inline PowerShell script**

Use the `sauce` and `secret.Sauce` variables in an inline script.

```yaml
- pwsh: |
      Write-Host No problem reading $(sauce)
      Write-Host But I cannot read $env:SECRET_SAUCE
      Write-Host But I can read $(secret.Sauce) "(but the log is redacted so I do not spoil the secret)"
```

# [Shell](#tab/shell)

:::image type="icon" source="../tasks/utility/media/shell-script.png" border="false"::: Set the `sauce` and `secret.Sauce` variables

```bash
#!/bin/bash
echo "##vso[task.setvariable variable=sauce]crushed tomatoes"
echo "##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with garlic"
```

:::image type="icon" source="../tasks/utility/media/shell-script.png" border="false"::: Read the variables

Arguments

```arguments
"$(sauce)" "$(secret.Sauce)"
```

Script

```bash
#!/bin/bash
echo "No problem reading $SAUCE"
echo "But I cannot read $SECRET_SAUCE"
```

---

Console output from reading the variables:

```output
No problem reading crushed tomatoes or crushed tomatoes
But I cannot read 
But I can read ******** (but the log is redacted so I do not spoil the secret)
```
