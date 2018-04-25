---
ms.topic: include
---

<h3 id="set-in-script">Define and modify your variables in a script</h3>

To define or modify a variable from a script, use the `task.setvariable` logging command.

> [!TIP]
> 
> You can run a script on a:
> 
> * [Windows agent](../../../actions/agents/v2-windows.md) using either a [Batch script task](../../../tasks/utility/batch-script.md) or [PowerShell script task](../../../tasks/utility/powershell.md).
> * [macOS](../../../actions/agents/v2-osx.md) or [Linux](../../../actions/agents/v2-linux.md) agent using a [Shell script task](../../../tasks/utility/shell-script.md).



# [Batch](#tab/batch)

**Batch script**

![icon](../../../tasks/utility/_img/batch-script.png) Set the `sauce` and `secretSauce` variables

```bat
@echo ##vso[task.setvariable variable=sauce]crushed tomatoes
@echo ##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic
```

![icon](../../../tasks/utility/_img/batch-script.png) Read the variables

Arguments

```arguments
"$(sauce)" "$(secretSauce)"
```

Script

 ```bat
@echo off
set sauceArgument=%~1
set secretSauceArgument=%~2
@echo No problem reading %sauceArgument% or %SAUCE%
@echo But I cannot read %SECRETSAUCE%
@echo But I can read %secretSauceArgument% (but the log is redacted so I do not spoil
      the secret)
```

# [PowerShell](#tab/powershell)

**PowerShell script**

![icon](../../../tasks/utility/_img/powershell.png) Set the `sauce` and `secretSauce` variables

```powershell
Write-Host "##vso[task.setvariable variable=sauce]crushed tomatoes"
Write-Host "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with
            garlic"
```

![icon](../../../tasks/utility/_img/powershell.png) Read the variables

Arguments

```arguments
-sauceArgument "$(sauce)" -secretSauceArgument "$(secretSauce)"
```

Script

```powershell
Param(
   [string]$sauceArgument,
   [string]$secretSauceArgument
)
Write-Host No problem reading $env:sauce or $sauceArgument
Write-Host But I cannot read $env:secretSauce
Write-Host But I can read $secretSauceArgument "(but the log is redacted so I do not
           spoil the secret)"
```

# [Shell](#tab/shell)

![icon](../../../tasks/utility/_img/shell-script.png) Set the `sauce` and `secretSauce` variables

```bash
#!/bin/bash
echo "##vso[task.setvariable variable=sauce]crushed tomatoes"
echo "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
```

![icon](../../../tasks/utility/_img/shell-script.png) Read the variables

Arguments

```arguments
"$(sauce)" "$(secretSauce)"
```

Script

```bash
#!/bin/bash
echo "No problem reading $1 or $SAUCE"
echo "But I cannot read $SECRETSAUCE"
echo "But I can read $2 (but the log is redacted so I do not spoil the secret)"
```

---

Console output from reading the variables:

```output
No problem reading crushed tomatoes or crushed tomatoes
But I cannot read 
But I can read ******** (but the log is redacted so I do not spoil the secret)
```
