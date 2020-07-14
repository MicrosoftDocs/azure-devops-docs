---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### Opting out of CI

#### Disabling the CI trigger

You can opt out of CI triggers entirely by specifying `trigger: none`.

```yaml
# A pipeline with no CI trigger
trigger: none
```

>[!IMPORTANT]
>When you push a change to a branch, the YAML file in that branch is evaluated to determine if a CI run should be started.

For more information, see [Triggers](../../yaml-schema.md#triggers) in the [YAML schema](../../yaml-schema.md).
