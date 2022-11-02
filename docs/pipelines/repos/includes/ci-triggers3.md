---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 07/07/2022
---

::: moniker range=">= azure-devops-2019"

### Opting out of CI

#### Disabling the CI trigger

You can opt out of CI triggers entirely by specifying `trigger: none`.

```yaml
# A pipeline with no CI trigger
trigger: none
```

>[!IMPORTANT]
>When you push a change to a branch, the YAML file in that branch is evaluated to determine if a CI run should be started.

::: moniker-end

