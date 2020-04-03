---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

### The YAML file in my branch is different than the YAML file in my master branch, which one is used?

* For [CI triggers](#ci-triggers), the YAML file that is in the branch you are pushing is evaluated to see if a CI build should be run.
* For [PR triggers](#pr-triggers), the YAML file resulting from merging the source and target branches of the PR is evaluated to see if a PR build should be run.

### I pushed a new branch. That triggered a number of pipelines. How do I prevent this? (Or) That did not trigger a pipeline. How can I trigger it?

See the section [Behavior of triggers when new branches are created](#behavior-of-triggers-when-new-branches-are-created) for an explanation of how Azure Pipelines handles new branches.

### I pushed a change to a path that is included in the trigger specification. However, that did not trigger a pipeline. What is wrong?

* Paths are case-sensitive. Make sure that you use the same case as those of real folders when specifying the paths in triggers.

* Understand the limitations of [wildcards](#wildcards) in your paths.

* If you use YAML pipelines, ensure that your CI trigger isn't being [overridden by pipeline settings in the UI](../../troubleshooting.md#overridden-yaml-trigger-setting). Open the editor for the pipeline and select **Triggers**. Verify that the triggers are not overridden.

* Ensure that your pipeline is not paused or disabled. If you have a YAML pipeline, then open the editor for the pipeline, and then select **Settings** to check. If you have a classic build pipeline, then open the editor for the pipeline, and then select **Options**.
