---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: vijayma
author: vijayma
ms.date: 03/29/2020
---

Continuous integration (CI) triggers cause a pipeline to run whenever you push an update to the specified branches or you push  specified tags.

# [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

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
Note that the [wildcard syntax](#wildcards) is different between branches/tags and file paths.

```yaml
# specific path build
trigger:
  branches:
    include:
    - master
    - releases/*
  paths:
    include:
    - docs/*
    exclude:
    - docs/README.md
```

When you specify paths, you also need to explicitly specify branches to trigger on. 

> [!NOTE]
> You cannot use [variables](../process/variables.md) in paths, as variables are evaluated at runtime (after the trigger has fired).

::: moniker-end

::: moniker range="azure-devops"

### Tags

In addition to specifying tags in the `branches` lists as covered in the previous section, you can directly specify tags to include or exclude:

```yaml
# specific tag
trigger:
  tags:
    include:
    - v2.*
    exclude:
    - v2.0
```

If you don't specify any tag triggers, then by default, tags will not trigger pipelines.

> [!NOTE]
> If you specify tags in combination with branch filters that include file paths, the trigger will fire if the branch filter is satisfied and either the tag or the path filter is satisfied.

::: moniker-end

::: moniker range=">= azure-devops-2019"

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

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines are not available in TFS.

::: moniker-end

# [Classic](#tab/classic/)

Select **Enable continuous integration** on the **Triggers** tab to enable this trigger if you want the build to run whenever someone checks in code.

### Batch changes

Select this check box if you have many team members uploading changes often and you want to reduce the number of builds you are running. If you select this option, when a build is running, the system waits until the build is completed and then queues another build of all changes that have not yet been built.

> You can batch changes when your code is in Git in the project or on GitHub. This option is not available if your code is in a remote Git repo or in Subversion.

### Branch filters

You can specify the branches where you want to trigger builds. If you want to use wildcard characters, then type the branch specification (for example, `features/modules/*`) and then press Enter.

#### Path filters in Azure Pipelines and Team Foundation Services (TFS)

If your Git repo is in Azure Repos or TFS, you can also specify path filters to reduce the set of files that you want to trigger a build.

> **Tips:**
>  * If you don't set path filters, then the root folder of the repo is implicitly included by default.
>  * When you add an explicit path filter, the implicit include of the root folder is removed. So make sure to explicitly include all folders that your build needs.
>  * If you exclude a path, you cannot also include it unless you qualify it to a deeper folder. For example if you exclude _/tools_ then you could include _/tools/trigger-runs-on-these_
>  * The order of path filters doesn't matter.

#### Example

For example, you want your build to be triggered by changes in master and most, but not all, of your feature branches. You also don't want builds to be triggered by changes to files in the tools folder.

::: moniker range=">= tfs-2017"

**Azure Pipelines, TFS 2017.3 and newer**

![ci trigger git branches](media/triggers/ci-trigger-git-branches-neweditor.png)

::: moniker-end

::: moniker range="<= tfs-2017"

**TFS 2017.1 and older versions**

![ci trigger git branches](media/triggers/ci-trigger-git-branches.png)

::: moniker-end

---

### Skipping CI for individual commits

::: moniker range="<= azure-devops-2019"

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `***NO_CI***` in the commit message of the HEAD commit and Azure Pipelines will skip running CI. This is supported for commits to Azure Repos Git and GitHub.

::: moniker-end

::: moniker range="> azure-devops-2019"

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `[skip ci]` in the commit message or description of the HEAD commit and Azure Pipelines will skip running CI. You can also use any of the variations below. This is supported for commits to Azure Repos Git, Bitbucket Cloud, GitHub, and GitHub Enterprise Server.

- `[skip ci]` or `[ci skip]`
- `skip-checks: true` or `skip-checks:true`
- `[skip azurepipelines]` or `[azurepipelines skip]`
- `[skip azpipelines]` or `[azpipelines skip]`
- `[skip azp]` or `[azp skip]`
- `***NO_CI***`

::: moniker-end

### Behavior of triggers when new branches are created

It is common to configure multiple pipelines for the same repository. For instance, you may have one pipeline to build the docs for your app and another to build the source code. You may configure CI triggers with appropriate branch filters and path filters in each of these pipelines. For instance, you may want one pipeline to trigger when you push an update to the `docs` folder, and another one to trigger when you push an update to your application code. In these cases, you need to understand how the pipelines are triggered when a new branch is created.

Here is the behavior when you push a new branch (that matches the branch filters) to your repository:

- If your pipeline has path filters, it will be triggered only if the new branch has changes to files that match that path filter.
- If your pipeline does not have path filters, it will be triggered even if there are no changes in the new branch.


### Wildcards

When specifying a branch or tag, you may use an exact name or a wildcard.
Wildcards patterns allow `*` to match zero or more characters and `?` to match a single character.

* If you start your pattern with `*` in a YAML pipeline, you must wrap the pattern in quotes, like `"*-releases"`.
* For branches and tags:
  * A wildcard may appear anywhere in the pattern.
* For paths:
  * You may include `*` as the final character, but it doesn't do anything differently from specifying the directory name by itself.
  * You may **not** include `*` in the middle of a path filter, and you may not use `?`.

```yaml
trigger:
  branches:
    include:
    - master
    - releases/*
    - feature/*
    exclude:
    - releases/old*
    - feature/*-working
  paths:
    include:
    - '*' # same as '/' for the repository root
    exclude:
    - 'docs/*' # same as 'docs/'
```