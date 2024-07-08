---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 06/19/2024
---

- Only when all previous direct and indirect dependencies with the same agent pool succeed. If you have different agent pools, those stages or jobs run concurrently. This condition is the default if no condition is set in the YAML.

- Even if a previous dependency fails, unless the run is canceled. Use `succeededOrFailed()` in the YAML for this condition. 

- Even if a previous dependency fails, and even if the run is canceled. Use `always()` in the YAML for this condition.

- Only when a previous dependency fails. Use `failed()` in the YAML for this condition.
