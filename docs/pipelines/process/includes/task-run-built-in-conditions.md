---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

* Only when all previous dependencies have succeeded. This is the default if there is not a condition set in the YAML.

* Even if a previous dependency has failed, unless the run was canceled. Use `succeededOrFailed()` in the YAML for this condition. 

* Even if a previous dependency has failed, even if the run was canceled. Use `always()` in the YAML for this condition.

* Only when a previous dependency has failed. Use `failed()` in the YAML for this condition.
