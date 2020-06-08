---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### I just added CI or PR trigger to my YAML file, but updates to the code did not start a new run of the pipeline.

* Ensure that your CI or PR trigger isn't being [overridden by pipeline settings in the UI](../../troubleshooting.md#overridden-yaml-trigger-setting). Open the editor for the pipeline and select **Triggers**. Verify that the triggers are not overridden.

* Ensure that your pipeline is not paused or disabled. Open the editor for the pipeline, and then select **Settings** to check.

* Have you updated the YAML file in the correct branch? If you push an update to a branch, then the YAML file in that same branch governs the CI behavior. If you push an update to a source branch, then the YAML file resulting from merging the source branch with the target branch governs teh PR behavior. Having the CI or PR configured in the YAML file in **master** branch and pushing a change to another branch may not result in a new run.

* Have you configured the trigger correctly? Check the syntax for the triggers and make sure that it is accurate.

* Understand the limitations of [wildcards](#wildcards) in your paths.

* Have you used variables in defining the trigger or the paths? That is not supported.

* Have you excluded the paths to which you pushed your changes? Test by pushing a change to an included path in an included branch.

* Paths in triggers are case-sensitive. Make sure that you use the same case as those of real folders when specifying the paths in triggers.

* Did you use templates for your YAML file? If so, make sure that your triggers are defined in the main YAML file. Triggers defined inside template files are not supported.

* Did you just push a new branch? If so, the new branch may not start a new run. See [Behavior of triggers when new branches are created](#behavior-of-triggers-when-new-branches-are-created).
