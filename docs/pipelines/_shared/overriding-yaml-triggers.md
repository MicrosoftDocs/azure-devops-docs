---
ms.topic: include
---

PR and CI triggers that are configured in YAML pipelines can be overridden in the pipeline settings, and by default, new pipelines automatically override YAML PR triggers. To configure this setting, select **Triggers** from the settings menu while editing your YAML pipeline.

![Git options](_img/overriding-yaml-triggers/yaml-pipeline-git-options-menu.png)

Select either the **Continuous integration** trigger or (if you're not using Azure Repos) the **Pull request validation** trigger, and configure your desired setting by enabling or disabling **Override the YAML ... trigger from here**.

![Override YAML trigger](_img/overriding-yaml-triggers/yaml-pipeline-override-trigger.png)
