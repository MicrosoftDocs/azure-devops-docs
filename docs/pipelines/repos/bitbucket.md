---
title: Build BitBucket Cloud repositories
description: Using a BitBucket Cloud repository with Azure Pipelines
ms.topic: reference
ms.author: vijayma
author: vijayma
ms.date: 03/39/2020
monikerRange: azure-devops
---

# Build BitBucket Cloud repositories

[!INCLUDE [version-team-services](../includes/version-team-services.md)]

Azure Pipelines can automatically build and validate every pull request and commit to your BitBucket Cloud repository. This article describes how to configure the integration between BitBucket Cloud and Azure Pipelines.

BitBucket and Azure Pipelines are two independent services that integrate well together. Your BitBucket Cloud users do not automatically get access to Azure Pipelines. You must add them explicitly to Azure Pipelines.

## Choose a repository to build

# [YAML](#tab/yaml/)

You create a new pipeline by first selecting a BitBucket Cloud repository and then a YAML file in that repository. The repository in which the YAML file is present is called `self` repository. By default, this is the repository that your pipeline builds. 

You can later configure your pipeline to check out a different repository or multiple repositories. To learn how to do this, see [multi-repo checkout](multi-repo-checkout.md).

# [Classic](#tab/classic/)

You create a new pipeline by first selecting **BitBucket Cloud** for repository type, and then one of the repositories you have access to.

---

Azure Pipelines must be granted access to your repositories to trigger their builds, and fetch their code during builds.

There are 2 authentication types for granting Azure Pipelines access to your BitBucket Cloud repositories while creating a pipeline.

| Authentication type            | Pipelines run using              |
|--------------------------------|----------------------------------|
| 1. [OAuth](#oauth-authentication)           | Your personal BitBucket identity |
| 2. [Username and password](#password-authentication) | Your personal BitBucket identity |

### OAuth authentication

OAuth is the simplest authentication type to get started with for repositories in your BitBucket account. BitBucket status updates will be performed on behalf of your personal BitBucket identity. For pipelines to keep working, your repository access must remain active.

To use OAuth, login to BitBucket when promoted during pipeline creation. Then, click **Authorize** to authorize with OAuth. An OAuth connection will be saved in your Azure DevOps project for later use, as well as used in the pipeline being created.

### Password authentication

Builds and BitBucket status updates will be performed on behalf of your personal identity. For builds to keep working, your repository access must remain active.

To create a password connection, visit [Service connections](../library/service-endpoints.md) in your Azure DevOps project settings.
Create a new BitBucket service connection and provide the user name and password to connect to your BitBucket Cloud repository.

## CI triggers

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
> You cannot use [variables](../process/variables.md) in triggers, as variables are evaluated at runtime (after the trigger has fired).

> [!NOTE]
> If you use [templates](../process/templates.md) to author YAML files, then you can only specify triggers in the main YAML file for the pipeline. You cannot specify triggers in the template files.

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

> [!NOTE]
> For Bitbucket Cloud repos, using `branches` syntax is the only way to specify tag triggers. The `tags:` syntax is not supported for BitBucket.

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

For more information, see [Triggers](../yaml-schema.md#triggers) in the [YAML schema](../yaml-schema.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines are not available in TFS.

::: moniker-end

# [Classic](#tab/classic/)

Select **Enable continuous integration** on the **Triggers** tab to enable this trigger if you want the build to run whenever someone checks in code.

### Batch changes

Select this check box if you have many team members uploading changes often and you want to reduce the number of builds you are running. If you select this option, when a build is running, the system waits until the build is completed and then queues another build of all changes that have not yet been built.

> You can batch changes when your code is BitBucket. This option is not available if your code is in a remote Git repo or in Subversion.

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

::: moniker range="> azure-devops-2019"

### Skipping CI for individual commits

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `[skip ci]` in the commit message or description of the HEAD commit and Azure Pipelines will skip running CI. You can also use any of the variations below.

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

## PR triggers

Pull request (PR) triggers cause a pipeline to run whenever a pull request is opened with one of the specified target branches,
or when updates are made to such a pull request.

# [YAML](#tab/yaml/)

### Branches

::: moniker range=">= azure-devops-2019"

You can specify the target branches when validating your pull requests.
For example, to validate pull requests that
target `master` and `releases/*`, you can use the following `pr` trigger. 

```yaml
pr:
- master
- releases/*
```

This configuration starts a new run the first time a new pull request is created, and after every update made to the pull request.

You can specify the full name of the branch (for example, `master`) or a wildcard (for example, `releases/*`).

> [!NOTE]
> You cannot use [variables](../process/variables.md) in triggers, as variables are evaluated at runtime (after the trigger has fired).

> [!NOTE]
> If you use [templates](../process/templates.md) to author YAML files, then you can only specify triggers in the main YAML file for the pipeline. You cannot specify triggers in the template files.

BitBucket creates a new _ref_ when a pull request is created. The ref points to a _merge commit_, which is the merged code between the source and target branches of the pull request. The PR validation pipeline builds the commit this ref points to. This means that the YAML file that is used to run the pipeline is also a merge between the source and the target branch. As a result, the changes you make to the YAML file in source branch of the pull request can override the behavior defined by the YAML file in target branch.

If no `pr` triggers appear in your YAML file, pull request validations are automatically enabled for all 
branches, as if you wrote the following `pr` trigger. This configuration triggers a build when any 
pull request is created, and when commits come into the source branch of any active pull request.

```yaml
pr:
  branches:
    include:
    - '*'  # must quote since "*" is a YAML reserved character; we want a string
```

::: moniker range="azure-devops-2019"

> [!NOTE]
> New pipelines automatically override YAML PR triggers with a setting in the UI.
> To opt into YAML-based control, you need to disable this setting on the **Triggers** tab in the UI.

::: moniker-end

>[!IMPORTANT]
>When you specify a `pr` trigger, it replaces the default implicit `pr` trigger, and only pushes to branches that are explicitly configured to be included will trigger a pipeline.

For more complex triggers that need to exclude certain branches, you must use the full syntax as shown in the following example.

```yaml
# specific branch
pr:
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/old*
```

### Paths

You can specify file paths to include or exclude. For example:

```yaml
# specific path
pr:
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

> [!NOTE]
> You cannot use [variables](../process/variables.md) in paths, as variables are evaluated at runtime (after the trigger has fired).

::: moniker-end

::: moniker range="azure-devops-2019"

> [!NOTE]
> New pipelines automatically override YAML PR triggers with a setting in the UI.
> To opt into YAML-based control, you need to disable this setting on the **Triggers** tab in the UI.

::: moniker-end

::: moniker range="azure-devops"

### Multiple PR updates

You can specify whether additional updates to a PR should cancel in-progress validation runs for the same PR. The default is `true`.

```yaml
# auto cancel false
pr:
  autoCancel: false
  branches:
    include:
    - master
```

### Opting out of PR validation

You can opt out of pull request validation entirely by specifying `pr: none`.

```yaml
# no PR triggers
pr: none
```

::: moniker-end

::: moniker range=">= azure-devops-2019"

For more information, see [PR trigger](../yaml-schema.md#pr-trigger) in the [YAML schema](../yaml-schema.md).

> [!NOTE]
> If your `pr` trigger isn't firing, ensure that you have not overridden YAML PR triggers in the UI.

::: moniker-end

::: moniker range="< azure-devops-2019"
YAML pipelines are not yet available on TFS.
::: moniker-end

# [Classic](#tab/classic/)

Select the **Pull request validation** trigger and check the **Enable pull request validation** check box to enable builds on pull requests.

You can specify branches to include and exclude.
Select a branch name from the drop-down menu and select **Include** or **Exclude** as appropriate.
For included branches, a build will be triggered on each push to a pull request targeting that branch.

---

## Pricing

Azure Pipelines is free for BitBucket Cloud repositories, with multiple free offerings available depending on whether your BitBucket repository is public or private.

If your BitBucket repository is open source, you can make your Azure DevOps project **public** so that anyone can view your pipeline's build results, logs, and test results without signing in. When users outside your organization fork your repository and submit pull requests, they can view the status of builds that automatically validate those pull requests. If both your BitBucket repository and your pipeline are public, you can run up to 10 parallel jobs in Azure Pipelines for free. These free jobs have a maximum timeout of 360 minutes (6 hours) each.

If either your BitBucket repository or your pipeline is private, we still provide a free tier. In this tier, you can run one free parallel job that can run up to 60 minutes each time until you've used 1800 minutes per month. When the free tier is no longer sufficient, you can purchase additional Microsoft-hosted parallel jobs.

Learn more about pricing based on [parallel jobs](../licensing/concurrent-jobs.md).
