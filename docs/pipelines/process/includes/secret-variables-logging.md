---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 05/31/2022
---

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

:::image type="content" source="../media/task-var-bash.png" alt-text="Screenshot of bash variable output.":::

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

:::image type="content" source="../media/task-var-powershell.png" alt-text="Screenshot of secret PowerShell variable output.":::

---
