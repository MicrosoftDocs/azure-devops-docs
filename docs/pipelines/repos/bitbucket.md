---
title: Build Bitbucket Cloud repositories
description: Using a Bitbucket Cloud repository with Azure Pipelines
ms.topic: reference
ms.author: vijayma
author: vijayma
ms.date: 03/26/2021
monikerRange: azure-devops
---

# Build Bitbucket Cloud repositories

[!INCLUDE [version-team-services](../includes/version-team-services.md)]

Azure Pipelines can automatically build and validate every pull request and commit to your Bitbucket Cloud repository. This article describes how to configure the integration between Bitbucket Cloud and Azure Pipelines.

Bitbucket and Azure Pipelines are two independent services that integrate well together. Your Bitbucket Cloud users do not automatically get access to Azure Pipelines. You must add them explicitly to Azure Pipelines.

## Access to Bitbucket repositories

# [YAML](#tab/yaml/)

You create a new pipeline by first selecting a Bitbucket Cloud repository and then a YAML file in that repository. The repository in which the YAML file is present is called `self` repository. By default, this is the repository that your pipeline builds. 

You can later configure your pipeline to check out a different repository or multiple repositories. To learn how to do this, see [multi-repo checkout](multi-repo-checkout.md).

# [Classic](#tab/classic/)

You create a new pipeline by first selecting **Bitbucket Cloud** for repository type, and then one of the repositories you have access to.

---

Azure Pipelines must be granted access to your repositories to fetch the code during builds. In addition, the user setting up the pipeline must have admin access to Bitbucket, since that identity is used to register a webhook in Bitbucket.

There are 2 authentication types for granting Azure Pipelines access to your Bitbucket Cloud repositories while creating a pipeline.

| Authentication type            | Pipelines run using              |
|--------------------------------|----------------------------------|
| 1. [OAuth](#oauth-authentication)           | Your personal Bitbucket identity |
| 2. [Username and password](#password-authentication) | Your personal Bitbucket identity |

### OAuth authentication

OAuth is the simplest authentication type to get started with for repositories in your Bitbucket account. Bitbucket status updates will be performed on behalf of your personal Bitbucket identity. For pipelines to keep working, your repository access must remain active.

To use OAuth, login to Bitbucket when prompted during pipeline creation. Then, click **Authorize** to authorize with OAuth. An OAuth connection will be saved in your Azure DevOps project for later use, as well as used in the pipeline being created.

> [!NOTE]
> The maximum number of BitBucket repositories that the Azure DevOps Services user interface can load is 2,000. 

### Password authentication

Builds and Bitbucket status updates will be performed on behalf of your personal identity. For builds to keep working, your repository access must remain active.

To create a password connection, visit [Service connections](../library/service-endpoints.md) in your Azure DevOps project settings.
Create a new Bitbucket service connection and provide the user name and password to connect to your Bitbucket Cloud repository.

## CI triggers

Continuous integration (CI) triggers cause a pipeline to run whenever you push an update to the specified branches or you push  specified tags.

# [YAML](#tab/yaml/)

[!INCLUDE [ci-triggers](includes/ci-triggers1.md)]

> [!NOTE]
> For Bitbucket Cloud repos, using `branches` syntax is the only way to specify tag triggers. The `tags:` syntax is not supported for Bitbucket.

[!INCLUDE [ci-triggers](includes/ci-triggers3.md)]

# [Classic](#tab/classic/)

[!INCLUDE [ci-triggers](includes/ci-triggers4.md)]

![ci trigger git branches](media/ci-trigger-git-branches-neweditor.png)

---

### Skipping CI for individual commits

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `[skip ci]` in the commit message or description of the HEAD commit and Azure Pipelines will skip running CI. You can also use any of the variations below.

- `[skip ci]` or `[ci skip]`
- `skip-checks: true` or `skip-checks:true`
- `[skip azurepipelines]` or `[azurepipelines skip]`
- `[skip azpipelines]` or `[azpipelines skip]`
- `[skip azp]` or `[azp skip]`
- `***NO_CI***`

[!INCLUDE [ci-triggers](includes/ci-triggers5.md)]

## PR triggers

Pull request (PR) triggers cause a pipeline to run whenever a pull request is opened with one of the specified target branches,
or when updates are made to such a pull request.

# [YAML](#tab/yaml/)

### Branches

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

Each new run builds the latest commit from the source branch of the pull request. This is different from how Azure Pipelines builds pull requests in other repositories (e.g., Azure Repos or GitHub), where it builds the merge commit. Unfortunately, Bitbucket does not expose information about the merge commit, which contains the merged code between the source and target branches of the pull request.

If no `pr` triggers appear in your YAML file, pull request validations are automatically enabled for all 
branches, as if you wrote the following `pr` trigger. This configuration triggers a build when any 
pull request is created, and when commits come into the source branch of any active pull request.

```yaml
pr:
  branches:
    include:
    - '*'  # must quote since "*" is a YAML reserved character; we want a string
```

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
    - docs
    exclude:
    - docs/README.md
```

> **Tips:**
>  * Wild cards are not supported with path filters.
>  * Paths are always specified relative to the root of the repository.
>  * If you don't set path filters, then the root folder of the repo is implicitly included by default.
>  * If you exclude a path, you cannot also include it unless you qualify it to a deeper folder. For example if you exclude _/tools_ then you could include _/tools/trigger-runs-on-these_
>  * The order of path filters doesn't matter.
>  * Paths in Git *are case-sensitive*. Be sure to use the same case as the real folders.
>  * You cannot use [variables](../process/variables.md) in paths, as variables are evaluated at runtime (after the trigger has fired).

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

For more information, see [PR trigger](../yaml-schema.md#pr-trigger) in the [YAML schema](../yaml-schema.md).

> [!NOTE]
> If your `pr` trigger isn't firing, ensure that you have not [overridden YAML PR triggers in the UI](../troubleshooting/troubleshooting.md#overridden-yaml-trigger-setting).

# [Classic](#tab/classic/)

Select the **Pull request validation** trigger and check the **Enable pull request validation** check box to enable builds on pull requests.

You can specify branches to include and exclude.
Select a branch name from the drop-down menu and select **Include** or **Exclude** as appropriate.
For included branches, a build will be triggered on each push to a pull request targeting that branch.

---

## FAQ

Problems related to Bitbucket integration fall into the following categories:

* **[Failing triggers](#failing-triggers):** My pipeline is not being triggered when I push an update to the repo.
* **[Wrong version](#wrong-version):** My pipeline runs, but it is using an unexpected version of the source/YAML.

### Failing triggers

[!INCLUDE [qa](includes/qa2.md)]

* Webhooks are used to communicate updates from Bitbucket to Azure Pipelines. In Bitbucket, navigate to the settings for your repository, then to Webhooks. Verify that the webhooks exist.

[!INCLUDE [qa](includes/qa2-1.md)]

[!INCLUDE [qa](includes/qa3.md)]

[!INCLUDE [qa](includes/qa4.md)]

### Wrong version

[!INCLUDE [qa](includes/qa1.md)]
