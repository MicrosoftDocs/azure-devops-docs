---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 07/25/2025
---

>[!NOTE]
>Conditions apply to all previous direct and indirect dependencies with the same agent pool. Stages or jobs in different agent pools run concurrently.

Conditions based on previous dependency status include:

- **Succeeded**: Run only if all previous dependencies succeed. This behavior is the default if no condition is set in the YAML. To apply this condition, specify `condition: succeeded()`.
- **Succeeded or failed**: Run even if a previous dependency fails, unless the run is canceled. To apply this condition, specify `condition: succeededOrFailed()`.
- **Always**: Run even if a previous dependency fails, even if the run is canceled. To apply this condition, specify `condition: always()`.
- **Failed**: Run only when a previous dependency fails. To apply this condition, specify `condition: failed()`.
