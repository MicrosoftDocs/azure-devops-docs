---
ms.topic: include
author: azooinmyluggage
ms.author: atulmal
ms.date: 04/17/2019
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Kubectl tool installer
# Install Kubectl on agent machine
- task: KubectlInstaller@0
  inputs:
    #kubectlVersion: 'latest' # Optional
```
