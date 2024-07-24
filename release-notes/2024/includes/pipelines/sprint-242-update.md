---
author: ckanyika
ms.author: ckanyika
ms.date: 7/24/2024
ms.topic: include
---

### Unskippable stages

You can use [YAML templates]() as a security mechanism, for example, to inject a stage that does malware detection in all pipelines. On the other hand, Pipelines end users can choose which stages they want to run, and choose to skip the malware detection stage.

Starting with this sprint, you can mark a YAML stage as not skippable using the new `isSkippable` property. By default, the value of this property is `true`. To prevent skipping a stage set it to `false`, like in the following example.
``` yaml
- stage: sdl_check_stage
  displayName: SDL Stage
  isSkippable: false
  jobs:
  - job: sdl_check_job
    ...
```

Such stages always execute and cannot be deselected in the _Stages to run_ configuration panel.

> [!div class="mx-imgBorder"]
> ![Screenshot of stages to run.](../../media/242-pipelines-01.png "Screenshot of stages to run")