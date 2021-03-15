---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

YAML pipelines are configured by default with a CI trigger on all branches.

### Branches

You can control which branches get CI triggers with a simple syntax:

```yaml
trigger:
- master
- releases/*
```

You can specify the full name of the branch (for example, `master`) or a wildcard (for example, `releases/*`).
See [Wildcards](#wildcards) for information on the wildcard syntax.

> [!NOTE]
> You cannot use [variables](../../process/variables.md) in triggers, as variables are evaluated at runtime (after the trigger has fired).

> [!NOTE]
> If you use [templates](../../process/templates.md) to author YAML files, then you can only specify triggers in the main YAML file for the pipeline. You cannot specify triggers in the template files.

For more complex triggers that use `exclude` or `batch`, you must use the full syntax as shown in the following example.

```yaml
# specific branch build
trigger:
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/old*
```

In the above example, the pipeline will be triggered if a change is pushed to master or to any releases branch. However, it won't be triggered if a change is made to a releases branch that starts with `old`. 

If you specify an `exclude` clause without an `include` clause, then it is equivalent to specifying `*` in the `include` clause.

In addition to specifying branch names in the `branches` lists, you can also configure triggers based on tags by using the following format:

```yaml
trigger:
  branches:
    include:
      - refs/tags/{tagname}
    exclude:
      - refs/tags/{othertagname}
```

If you don't specify any triggers, the default is as if you wrote:

```yaml
trigger:
  branches:
    include:
    - '*'  # must quote since "*" is a YAML reserved character; we want a string
```

>[!IMPORTANT]
>When you specify a trigger, it replaces the default implicit trigger, and only pushes to branches that are explicitly configured to be included will trigger a pipeline. Includes are processed first, and then excludes are removed from that list.

### Batching CI runs

If you have many team members uploading changes often, you may want to reduce the number of runs you start.
If you set `batch` to `true`, when a pipeline is running, the system waits until the run is completed, then starts another run with all changes that have not yet been built.

```yaml
# specific branch build with batching
trigger:
  batch: true
  branches:
    include:
    - master
```

To clarify this example, let us say that a push `A` to master caused the above pipeline to run. While that pipeline is running, additional pushes `B` and `C` occur into the repository. These updates do not start new independent runs immediately. But after the first run is completed, all pushes until that point of time are batched together and a new run is started. 

>[!NOTE]
> If the pipeline has multiple jobs and stages, then the first run should still reach a terminal state by completing or skipping all its jobs and stages before the second run can start. For this reason, you must exercise caution when using this feature in a pipeline with multiple stages or approvals. If you wish to batch your builds in such cases, it is recommended that you split your CI/CD process into two pipelines - one for build (with batching) and one for deployments.

### Paths

You can specify file paths to include or exclude.

```yaml
# specific path build
trigger:
  branches:
    include:
    - master
    - releases/*
  paths:
    include:
    - docs
    exclude:
    - docs/README.md
```

When you specify paths, you must explicitly specify branches to trigger on. You can't trigger a pipeline with only a path filter; you must also have a branch filter, and the changed files that match the path filter must be from a branch that matches the branch filter.

> **Tips:**
>  * Wild cards are not supported with path filters.
>  * Paths are always specified relative to the root of the repository.
>  * If you don't set path filters, then the root folder of the repo is implicitly included by default.
>  * If you exclude a path, you cannot also include it unless you qualify it to a deeper folder. For example if you exclude _/tools_ then you could include _/tools/trigger-runs-on-these_
>  * The order of path filters doesn't matter.
>  * Paths in Git *are case-sensitive*. Be sure to use the same case as the real folders.
>  * You cannot use [variables](../../process/variables.md) in paths, as variables are evaluated at runtime (after the trigger has fired).
