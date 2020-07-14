---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

Select **Enable continuous integration** on the **Triggers** tab to enable this trigger if you want the build to run whenever someone checks in code.

### Batch changes

Select this check box if you have many team members uploading changes often and you want to reduce the number of builds you are running. If you select this option, when a build is running, the system waits until the run is completed and then queues another run of all changes that have not yet been built.

> You can batch changes and build them together.

> [!NOTE]
> If you use batching with a multi-stage YAML pipeline, then a run must reach a terminal state before the next one can start. This is often not desirable as a multi-stage pipeline may go through approvals and long-running deployment stages. In these cases, it is recommended that you follow one of these solutions:
> * do not use batching
> * split the pipeline into two separate pipelines - one for CI and one CD
> * set appropriate conditions on stages to skip them and make a run terminate quickly

### Branch filters

You can specify the branches where you want to trigger builds. If you want to use wildcard characters, then type the branch specification (for example, `features/modules/*`) and then press Enter.

### Path filters

If your Git repo is in Azure Repos or TFS, you can also specify path filters to reduce the set of files that you want to trigger a build.

> **Tips:**
>  * Paths are always specified relative to the root of the repository.
>  * If you don't set path filters, then the root folder of the repo is implicitly included by default.
>  * If you exclude a path, you cannot also include it unless you qualify it to a deeper folder. For example if you exclude _/tools_ then you could include _/tools/trigger-runs-on-these_
>  * The order of path filters doesn't matter.
>  * Paths in Git are case-sensitive. Be sure to use the same case as the real folders.

#### Example

For example, you want your build to be triggered by changes in master and most, but not all, of your feature branches. You also don't want builds to be triggered by changes to files in the tools folder.
