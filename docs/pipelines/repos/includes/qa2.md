---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

#### I just created a new YAML pipeline with CI/PR triggers, but the pipeline is not being triggered.

Follow each of these steps to troubleshoot your failing triggers:

* Is your pipeline paused or disabled? Open the editor for the pipeline, and then select **Settings** to check. If your pipeline is paused or disabled, then triggers do not work.

* Are your YAML CI or PR triggers being [overridden by pipeline settings in the UI](../../troubleshooting/troubleshooting.md#overridden-yaml-trigger-setting). Open the editor for the pipeline and select **Triggers**. Make sure that the triggers are not being overridden.

* Have you updated the YAML file in the correct branch? If you push an update to a branch, then the YAML file in that same branch governs the CI behavior. If you push an update to a source branch, then the YAML file resulting from merging the source branch with the target branch governs the PR behavior. Make sure that the YAML file in the correct branch has the necessary CI or PR configuration.

* Have you configured the trigger correctly? Check the syntax for the triggers and make sure that it is accurate.

* Have you used variables in defining the trigger or the paths? That is not supported.

* Did you use templates for your YAML file? If so, make sure that your triggers are defined in the main YAML file. Triggers defined inside template files are not supported.

* Have you excluded the branches or paths to which you pushed your changes? Test by pushing a change to an included path in an included branch. Note that paths in triggers are case-sensitive. Make sure that you use the same case as those of real folders when specifying the paths in triggers.

* Do you have wildcards in your path filters? Understand the limitations of [wildcards](#wildcards) in your paths.

* Did you just push a new branch? If so, the new branch may not start a new run. See [Behavior of triggers when new branches are created](#behavior-of-triggers-when-new-branches-are-created).
