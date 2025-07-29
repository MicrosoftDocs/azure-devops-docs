---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 07/25/2025
---

Conditions apply to all previous direct and indirect dependencies with the same agent pool. If you have different agent pools, those stages or jobs run concurrently.

- Only if all previous dependencies succeed. This behavior is the default if no condition is set in the YAML. To apply this condition, specify `condition: succeeded()`.

- Even if a previous dependency fails, unless the run is canceled. To apply this condition, specify `condition: succeededOrFailed()` in the YAML.

- Even if a previous dependency fails, and even if the run is canceled. To apply this condition, specify `condition: always()` in the YAML.

- Only when a previous dependency fails. To apply this condition, specify `condition: failed()` in the YAML.
