---
title: Check out multiple repositories in your pipeline
description: Learn how to check out multiple repositories in your pipeline
ms.topic: reference
ms.date: 04/09/2021
monikerRange: "> azure-devops-2019"
---

# Check out multiple repositories in your pipeline

[!INCLUDE [version-team-services](../includes/version-server-2020-rtm.md)]

Pipelines often rely on multiple repositories that contain source, tools, scripts, or other items that you need to build your code. By using multiple `checkout` steps in your pipeline, you can fetch and check out other repositories in addition to the one you use to store your YAML pipeline.

## Specify multiple repositories

Repositories can be specified as a [repository resource](../yaml-schema.md#repository-resource), or inline with the `checkout` step. 

The following repository types are supported.

---
:::row:::
    :::column:::
        [Azure Repos Git](azure-repos-git.md) (`git`)
    :::column-end:::
    :::column span="2":::
        * Azure DevOps Server 2020 (limited to repositories in the same organization)
        * Azure DevOps Services
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        [GitHub](github.md) (`github`)
    :::column-end:::
    :::column span="2":::
        * Azure DevOps Services
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        [GitHubEnterprise](github-enterprise.md) (`githubenterprise`)
    :::column-end:::
    :::column span="2":::
        * Azure DevOps Services
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        [Bitbucket Cloud](bitbucket.md) (`bitbucket`)
    :::column-end:::
    :::column span="2":::
        * Azure DevOps Services
    :::column-end:::
:::row-end:::

> [!IMPORTANT]
> Only [Azure Repos Git](azure-repos-git.md) (`git`) repositories in the same organization as the pipeline are supported for multi-repo checkout in Azure DevOps Server 2020.

> [!NOTE]
> Azure Pipelines provides **Limit job scope** settings for Azure Repos Git repositories.
> To check out Azure Repos Git repositories hosted in another project, **Limit job scope** must be configured to allow access. For more information, see [Limit job authorization scope](azure-repos-git.md#limit-job-authorization-scope).

The following combinations of `checkout` steps are supported.

---
:::row:::
    :::column:::
        No `checkout` steps
    :::column-end:::
    :::column span="3":::
        The default behavior is as if `checkout: self` were the first step, and the current repository is checked out.
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        A single `checkout: none` step
    :::column-end:::
    :::column span="3":::
        No repositories are synced or checked out.
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        A single `checkout: self` step
    :::column-end:::
    :::column span="3":::
        The current repository is checked out.
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        A single `checkout` step that isn't `self` or `none`
    :::column-end:::
    :::column span="3":::
        The designated repository is checked out instead of `self`.
    :::column-end:::
:::row-end:::
---
:::row:::
    :::column:::
        Multiple `checkout` steps
    :::column-end:::
    :::column span="3":::
        Each designated repository is checked out to a folder named after the repository, unless a different `path` is specified in the `checkout` step. To check out `self` as one of the repositories, use `checkout: self` as one of the `checkout` steps.
    :::column-end:::
:::row-end:::
---

> [!NOTE]
> When you check out Azure Repos Git repositories other than the one containing the pipeline, you may be prompted to authorize access to that resource before the pipeline runs for the first time.
> For more information, see [Why am I am prompted to authorize resources the first time I try to check out a different repository?](#why-am-i-am-prompted-to-authorize-resources-the-first-time-i-try-to-check-out-a-different-repository) in the [FAQ](#faq) section.

## Repository resource definition

You must use a [repository resource](../yaml-schema.md#repository-resource) if your repository type requires a service connection or other extended resources field. The following repository types require a service connection.

| Repository type | Service connection |
|-----------------|--------------------|
| Bitbucket Cloud | [Bitbucket Cloud](../library/service-endpoints.md#bitbucket-cloud-service-connection) | 
| GitHub          | [GitHub](../library/service-endpoints.md#github-service-connection) |
| GitHub Enterprise Server | [GitHub Enterprise Server](../library/service-endpoints.md#github-enterprise-server-service-connection) |
| Azure Repos Git repositories in a different organization than your pipeline | [Azure Repos/Team Foundation Server](../library/service-endpoints.md#azure-repos) |

You may use a repository resource even if your repository type doesn't require a service connection, for example if you have a repository resource defined already for templates in a different repository.

In the following example, three repositories are declared as repository resources. The [Azure Repos Git repository in another organization](../library/service-endpoints.md#azure-repos), [GitHub](../library/service-endpoints.md#github-service-connection), and [Bitbucket Cloud](../library/service-endpoints.md#bitbucket-cloud-service-connection) repository resources require [service connections](../library/service-endpoints.md), which are specified as the `endpoint` for those repository resources. This example has four `checkout` steps, which checks out the three repositories declared as repository resources along with the current `self` repository that contains the pipeline YAML.

```yaml
resources:
  repositories:
  - repository: MyGitHubRepo # The name used to reference this repository in the checkout step
    type: github
    endpoint: MyGitHubServiceConnection
    name: MyGitHubOrgOrUser/MyGitHubRepo
  - repository: MyBitbucketRepo
    type: bitbucket
    endpoint: MyBitbucketServiceConnection
    name: MyBitbucketOrgOrUser/MyBitbucketRepo
  - repository: MyAzureReposGitRepository # In a different organization
    endpoint: MyAzureReposGitServiceConnection
    type: git
    name: OtherProject/MyAzureReposGitRepo

trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- checkout: self
- checkout: MyGitHubRepo
- checkout: MyBitbucketRepo
- checkout: MyAzureReposGitRepository

- script: dir $(Build.SourcesDirectory)
```

If the `self` repository is named `CurrentRepo`, the `script` command produces the following output: `CurrentRepo  MyAzureReposGitRepo  MyBitbucketRepo  MyGitHubRepo`. In this example, the names of the repositories are used for the folders, because no `path` is specified in the checkout step. For more information on repository folder names and locations, see the following [Checkout path](#checkout-path) section.


## Inline syntax checkout

If your repository doesn't require a service connection, you can declare it inline with your `checkout` step.

> [!NOTE]
> Only Azure Repos Git repositories in the same organization can use the inline syntax. Azure Repos Git repositories in a different organization, and other supported repository types require a [service connection](../library/service-endpoints.md) and must be declared as a [repository resource](#repository-resource-definition).

```yaml
steps:
- checkout: git://MyProject/MyRepo # Azure Repos Git repository in the same organization
```

> [!NOTE]
> In the previous example, the `self` repository is not checked out. If you specify any `checkout` steps, you must include `checkout: self` in order for `self` to be checked out.

## Checkout path

Unless a `path` is specified in the `checkout` step, source code is placed in a default directory. This directory is different depending on whether you are checking out a single repository or multiple repositories. 

- **Single repository**: If you have a single `checkout` step in your job, or you have no checkout step which is equivalent to `checkout: self`, your source code is checked out into a directory called `s` located as a subfolder of `(Agent.BuildDirectory)`. If `(Agent.BuildDirectory)` is `C:\agent\_work\1`, your code is checked out to `C:\agent\_work\1\s`.
- **Multiple repositories**: If you have multiple `checkout` steps in your job, your source code is checked out into directories named after the repositories as a subfolder of `s` in `(Agent.BuildDirectory)`. If `(Agent.BuildDirectory)` is `C:\agent\_work\1` and your repositories are named `tools` and `code`, your code is checked out to `C:\agent\_work\1\s\tools` and `C:\agent\_work\1\s\code`.
  
  > [!NOTE]
  > If no `path` is specified in the `checkout` step, the name of the repository is used for the folder,
  > not the `repository` value which is used to reference the repository in the `checkout` step.

If a `path` is specified for a `checkout` step, that path is used, relative to `(Agent.BuildDirectory)`.

> [!NOTE]
> If you are using default paths, adding a second repository `checkout` step changes the default path of the code for the first repository. For example, the code for a repository named `tools` would be checked out to `C:\agent\_work\1\s` when `tools` is the only repository, but if a second repository is added, `tools` would then be checked out to `C:\agent\_work\1\s\tools`. If you have any steps that depend on the source code being in the original location, those steps must be updated.

## Checking out a specific ref

The default branch is checked out unless you designate a specific ref.

If you are using inline syntax, designate the ref by appending `@<ref>`. For example:

```yaml
- checkout: git://MyProject/MyRepo@features/tools # checks out the features/tools branch
- checkout: git://MyProject/MyRepo@refs/heads/features/tools # also checks out the features/tools branch
- checkout: git://MyProject/MyRepo@refs/tags/MyTag # checks out the commit referenced by MyTag.
```

When using a repository resource, specify the ref using the `ref` property. The following example checks out the `features/tools/` branch of the designated repository.

```yaml
resources:
  repositories:
  - repository: MyGitHubRepo
    type: github
    endpoint: MyGitHubServiceConnection
    name: MyGitHubOrgOrUser/MyGitHubRepo
    ref: features/tools

steps:
- checkout: MyGitHubRepo
```

:::moniker range=">azure-devops-2020"

## Triggers

You can trigger a pipeline when an update is pushed to the `self` repository or to any of the repositories declared as resources. This is useful, for instance, in the following scenarios:

- You consume a tool or a library from a different repository. You want to run tests for your application whenever the tool or library is updated.
- You keep your YAML file in a separate repository from the application code. You want to trigger the pipeline every time an update is pushed to the application repository.

> [!IMPORTANT]
> Repository resource triggers only work for Azure Repos Git repositories in the same organization at present. They do not work for GitHub or Bitbucket repository resources.

If you do not specify a `trigger` section in a repository resource, then the pipeline won't be triggered by changes to that repository. If you specify a `trigger` section, then the behavior for triggering is similar to how CI triggers work for the self repository.

If you specify a `trigger` section for multiple repository resources, then a change to any of them will start a new run.

The trigger for `self` repository can be defined in a `trigger` section at the root of the YAML file, or in a repository resource for `self`. For example, the following two are equivalent.

```yaml
trigger:
- main

steps:
...
```

```yaml
resources:
  repositories:
  - repository: self
    type: git
    name: MyProject/MyGitRepo
    trigger:
    - main

steps:
...
```

> [!NOTE]
> It is an error to define the trigger for `self` repository twice. Do not define it both at the root of the YAML file and in the `resources` section.

When a pipeline is triggered, Azure Pipelines has to determine the version of the YAML file that should be used and a version for each repository that should be checked out. If a change to the `self` repository triggers a pipeline, then the commit that triggered the pipeline is used to determine the version of the YAML file. If a change to any other repository resource triggers the pipeline, then the latest version of YAML from the **default branch** of `self` repository is used.

When an update to one of the repositories triggers a pipeline, then the following variables are set based on triggering repository:

- `Build.Repository.ID`
- `Build.Repository.Name`
- `Build.Repository.Provider`
- `Build.Repository.Uri`
- `Build.SourceBranch`
- `Build.SourceBranchName`
- `Build.SourceVersion`
- `Build.SourceVersionMessage`

For the triggering repository, the commit that triggered the pipeline determines the version of the code that is checked out. For other repositories, the `ref` defined in the YAML for that repository resource determines the default version that is checked out.

Consider the following example, where the `self` repository contains the YAML file and repositories `A` and `B` contain additional source code.

```yaml
trigger:
- main
- feature

resources:
  repositories:
  - repository: A
    type: git
    name: MyProject/A
    ref: main
    trigger:
    - main

  - repository: B
    type: git
    name: MyProject/B
    ref: release
    trigger:
    - main
    - release
```

The following table shows which versions are checked out for each repository by a pipeline using the above YAML file, unless you explicitly override the behavior during `checkout`.

| Change made to | Pipeline triggered | Version of YAML | Version of `self` | Version of `A` | Version of `B` |
|----------------|--------------------|-----------------|-------------------|----------------|----------------|
| `main` in `self` | Yes | commit from `main` that triggered the pipeline | commit from `main` that triggered the pipeline | latest from `main` | latest from `release` |
| `feature` in `self` | Yes | commit from `feature` that triggered the pipeline | commit from `feature` that triggered the pipeline | latest from `main` | latest from `release` |
| `main` in `A` | Yes | latest from `main` | latest from `main` | commit from `main` that triggered the pipeline | latest from `release` |
| `main` in `B` | Yes | latest from `main` | latest from `main` | latest from `main` | commit from `main` that triggered the pipeline |
| `release` in `B` | Yes | latest from `main` | latest from `main` | latest from `main` | commit from `release` that triggered the pipeline |

You can also trigger the pipeline when you create or update a pull request in any of the repositories. To do this, declare the repository resources in the YAML files as in the examples above, and configure a branch policy in the repository (Azure Repos only).

:::moniker-end

## Repository details

When you check out multiple repositories, some details about the `self` repository are available as [variables](../build/variables.md).
When you use multi-repo triggers, some of those variables have information about the triggering repository instead.
Details about all of the repositories consumed by the job are available as a [template context object](../process/templates.md#context) called `resources.repositories`.

For example, to get the ref of a non-`self` repository, you could write a pipeline like this:

```yaml
resources:
  repositories:
  - repository: other
    type: git
    name: MyProject/OtherTools

variables:
  tools.ref: $[ resources.repositories['other'].ref ]

steps:
- checkout: self
- checkout: other
- bash: |
    echo "Tools version: $TOOLS_REF"
```

## FAQ

* [Why can't I check out a repository from another project? It used to work.](#why-cant-i-check-out-a-repository-from-another-project-it-used-to-work)
* [Why am I am prompted to authorize resources the first time I try to check out a different repository?](#why-am-i-am-prompted-to-authorize-resources-the-first-time-i-try-to-check-out-a-different-repository)

### Why can't I check out a repository from another project? It used to work.

Azure Pipelines provides a **Limit job authorization scope to current project** setting, that when enabled, doesn't permit the pipeline to access resources outside of the project that contains the pipeline. This setting can be set at either the organization or project level. If this setting is enabled, you won't be able to check out a repository in another project unless you explicitly grant access. For more information, see [Job authorization scope](../process/access-tokens.md#job-authorization-scope).

### Why am I am prompted to authorize resources the first time I try to check out a different repository?

When you check out Azure Repos Git repositories other than the one containing the pipeline, you may be prompted to authorize access to that resource before the pipeline runs for the first time. These prompts are displayed on the pipeline run summary page. 

:::image type="content" source="media/multi-repo-checkout/pipeline-resource-prompt.png" alt-text="This pipeline needs permission to access a resource":::

:::image type="content" source="media/multi-repo-checkout/authorize-resource-prompt.png" alt-text="Authorize resource":::

Choose **View** or **Authorize resources**, and follow the prompts to authorize the resources.

:::image type="content" source="media/multi-repo-checkout/waiting-for-review.png" alt-text="Waiting for review":::

:::image type="content" source="media/multi-repo-checkout/permit-access.png" alt-text="Permit access":::

For more information, see [Troubleshooting authorization for a YAML pipeline](../process/resources.md#troubleshooting-authorization-for-a-yaml-pipeline).
