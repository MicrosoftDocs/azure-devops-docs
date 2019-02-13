---
ms.topic: include
---

> [!TIP]
> 
> You can run a script on a:
> 
> * [Windows agent](../../agents/v2-windows.md) using either a [Batch script task](../../tasks/utility/batch-script.md) or [PowerShell script task](../../tasks/utility/powershell.md).
> * [macOS](../../agents/v2-osx.md) or [Linux](../../agents/v2-linux.md) agent using a [Shell script task](../../tasks/utility/shell-script.md).

# [Batch](#tab/batch)

**Batch script**

![icon](../../tasks/utility/_img/batch-script.png) Set the `sauce` and `secret.Sauce` variables

```bat
@echo ##vso[task.setvariable variable=sauce]crushed tomatoes
@echo ##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with garlic
```

![icon](../../tasks/utility/_img/batch-script.png) Read the variables

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
@echo But I can read %secretSauceArgument% (but the log is redacted so I do not spoil
      the secret)
```

# [PowerShell](#tab/powershell)

**PowerShell script**

![icon](../../tasks/utility/_img/powershell.png) Set the `sauce` and `secret.Sauce` variables

```powershell
Write-Host "##vso[task.setvariable variable=sauce]crushed tomatoes"
Write-Host "##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with
            garlic"
```

![icon](../../tasks/utility/_img/powershell.png) Read the variables

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
Write-Host But I can read $secretSauceArgument "(but the log is redacted so I do not
           spoil the secret)"
```

# [Shell](#tab/shell)

![icon](../../tasks/utility/_img/shell-script.png) Set the `sauce` and `secret.Sauce` variables

```bash
#!/bin/bash
echo "##vso[task.setvariable variable=sauce]crushed tomatoes"
echo "##vso[task.setvariable variable=secret.Sauce;issecret=true]crushed tomatoes with garlic"
```

![icon](../../tasks/utility/_img/shell-script.png) Read the variables

Arguments

```arguments
"$(sauce)" "$(secret.Sauce)"
```

Script

```bash
#!/bin/bash
echo "No problem reading $1 or $SAUCE"
echo "But I cannot read $SECRET_SAUCE"
echo "But I can read $2 (but the log is redacted so I do not spoil the secret)"
```

---

Console output from reading the variables:

```output
No problem reading crushed tomatoes or crushed tomatoes
But I cannot read 
But I can read ******** (but the log is redacted so I do not spoil the secret)
```
