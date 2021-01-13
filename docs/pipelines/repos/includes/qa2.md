---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 07/07/2020
---

#### I just created a new YAML pipeline with CI/PR triggers, but the pipeline is not being triggered.

Follow each of these steps to troubleshoot your failing triggers:

* Are your YAML CI or PR triggers being [overridden by pipeline settings in the UI](../../troubleshooting/troubleshooting.md#overridden-yaml-trigger-setting)? While editing your pipeline, choose **...** and then **Triggers**.

  ![Pipeline settings UI.](../media/pipelines-options-for-git/yaml-pipeline-git-options-menu.png)

  Check the **Override the YAML trigger from here** setting for the types of trigger (**Continuous integration** or **Pull request validation**) available for your repo.

  ![Override YAML trigger from here.](../media/pipelines-options-for-git/yaml-pipeline-override-trigger.png)
