---
ms.topic: include
author: azooinmyluggage
ms.author: atulmal
ms.date: 02/28/2020
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Helm tool installer
# Install Helm on an agent machine
- task: HelmInstaller@1
  inputs:
    #helmVersionToInstall: 'latest' # Optional
```
