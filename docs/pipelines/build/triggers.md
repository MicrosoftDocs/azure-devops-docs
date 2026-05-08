---
title: Triggers in Azure Pipelines
description: Learn about how you can specify CI, scheduled, gated, and other triggers in Azure Pipelines
ms.topic: concept-article
ms.date: 05/08/2026
monikerRange: '<= azure-devops'
---

# Specify events that trigger pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

A pipeline trigger tells a pipeline when to run. A trigger can configure a pipeline to run based on a schedule, or in response to an event, such as the creation of a pull request. Azure Pipelines supports the following types of triggers.

* Continuous integration triggers (CI triggers) run a pipeline when a push is made to a branch.
* Pull request triggers (PR triggers) run a pipeline when a PR is raised or pushes are made to the source branch of an open PR. GitHub repositories support comment triggers that run a pipeline when comments are made on an open pull request.
* Scheduled triggers run a pipeline on a predefined schedule.
* Pipeline completion triggers run a pipeline when another pipeline completes.

This article provides an overview of [YAML pipeline](../get-started/pipelines-get-started.md#define-pipelines-using-yaml) triggers and [classic build pipeline](../get-started/pipelines-get-started.md#define-pipelines-using-the-classic-interface) triggers. [Classic release pipelines](../release/index.md) have similar versions of the triggers described in the previous list and are covered in [Classic release pipeline triggers](../release/triggers.md).

<a name="ci"></a>
## CI triggers

#### [YAML](#tab/yaml/)

CI triggers run a pipeline when a push is made to a branch that meets the criteria defined by the trigger. Use the `trigger` keyword to configure a CI trigger. For example, to run a pipeline when a push is made to the `main` branch, specify the following trigger.

```yml
trigger:
- main
```

:::moniker range=">azure-devops-2022"

If not explicitly configured in your pipeline, CI triggers are enabled by default, unless [Disable implied CI trigger](../troubleshooting/troubleshoot-triggers.md#disable-implied-yaml-ci-trigger-setting-is-enabled) is set or [UI settings override YAML trigger](../troubleshooting/troubleshoot-triggers.md#ui-settings-override-yaml-trigger-setting).

:::moniker-end

:::moniker range="=azure-devops-2022"

If not explicitly configured in your pipeline, CI triggers are enabled by default for all branches, unless [Disable implied CI trigger](../troubleshooting/troubleshoot-triggers.md#disable-implied-yaml-ci-trigger-setting-is-enabled) is set or [UI settings override YAML trigger](../troubleshooting/troubleshoot-triggers.md#ui-settings-override-yaml-trigger-setting).

> [!NOTE]
> **Disable implied CI trigger** is only available in Azure DevOps Server 2022.2 and higher. In Azure DevOps Server 2022 and 2022.1, CI triggers are enabled by default if not explicitly configured.

:::moniker-end

To disable CI triggers in your pipeline, use the following syntax.

```yml
trigger: none
```

CI triggers are supported in YAML pipelines for the following repository types. For specific information about using CI triggers with a specific repository type, see the following articles.

- [CI triggers in Azure Repos Git](../repos/azure-repos-git.md#ci-triggers)
- [CI triggers in GitHub](../repos/github.md#ci-triggers)
- [CI triggers in GitHub Enterprise Server](../repos/github-enterprise.md)
- [CI triggers in Bitbucket Cloud](../repos/bitbucket.md#ci-triggers)

For information on the full YAML trigger syntax and options available for CI triggers, see [trigger definition](/azure/devops/pipelines/yaml-schema/trigger).

#### [Classic build](#tab/classic-build/)

CI triggers run a pipeline when a push is made to a branch that meets the criteria defined by the trigger.

For more information using CI triggers with a specific repository type, see the following articles.

- [CI triggers in Azure Repos Git](../repos/azure-repos-git.md?tabs=classic#ci-triggers)
- [CI triggers in GitHub](../repos/github.md?tabs=classic#ci-triggers)
- [CI triggers in Bitbucket Cloud](../repos/bitbucket.md?tabs=classic#ci-triggers)
- [CI triggers in TFVC](../repos/tfvc.md#ci-triggers)

CI triggers are supported in classic build pipelines for [GitHub Enterprise Server](../repos/github-enterprise.md), [Bitbucket Server](../repos/on-premises-bitbucket.md), and [Subversion](../repos/subversion.md) repositories if the repositories are accessible to Azure Pipelines.

* * *

> [!IMPORTANT]
> Paths in Git are case sensitive, including CI and PR trigger path filters.

## PR triggers

#### [YAML](#tab/yaml/)

Pull request (PR) triggers cause a pipeline to run whenever you open a pull request, or when you push changes to the source branch of a pull request. Use the `pr` keyword to configure a PR trigger. For example, to run a pipeline when a PR is raised to the `main` branch, specify the following trigger.

```yml
pr:
- main
```

If not explicitly configured in your pipeline, PR triggers are enabled by default, unless [UI settings override YAML trigger](../troubleshooting/troubleshoot-triggers.md#ui-settings-override-yaml-trigger-setting), and pull requests to any branch trigger a pipeline run. To disable PR triggers in your pipeline, use the following syntax.

```yml
pr: none
```

YAML PR triggers are supported for GitHub and Bitbucket Cloud. For more information about using PR triggers with these types of repositories, see [PR triggers in GitHub](../repos/github.md#pr-triggers) and [PR triggers in Bitbucket Cloud](../repos/bitbucket.md#pr-triggers). For information on the full YAML PR trigger syntax, see [pr definition](/azure/devops/pipelines/yaml-schema/pr).

Azure Repos Git uses branch policies to implement PR triggers. For more information, see [PR triggers in Azure Repos Git](../repos/azure-repos-git.md#pr-triggers).

#### [Classic build](#tab/classic-build/)

Pull request (PR) triggers cause a pipeline to run whenever you open a pull request, or when you push changes to the source branch of an existing pull request.

PR triggers are supported for GitHub and Bitbucket Cloud. For more information about using PR triggers with these types of repositories, see [PR triggers in GitHub](../repos/github.md#pr-triggers) and [PR triggers in Bitbucket Cloud](../repos/bitbucket.md#pr-triggers).

Azure Repos Git uses branch policies to implement PR triggers. For more information, see [PR triggers in Azure Repos Git](../repos/azure-repos-git.md#pr-triggers).

TFVC repositories don't have pull requests or pull request triggers, but do support [gated check-in](../repos/tfvc.md#gated).

* * *

## Comment triggers

Comment triggers configure a pipeline to run when contributors make a pull request comment containing a pull request command like `/azp run`. Comment triggers are supported only for GitHub repositories. For more information, see [GitHub repository comment triggers](../repos/github.md#comment-triggers).

## Scheduled triggers

#### [YAML](#tab/yaml/)

Scheduled triggers run a pipeline on a predefined schedule. Scheduled triggers in YAML pipelines are supported by [all repository types that support YAML pipelines](../repos/index.md) (Azure Repos Git, GitHub, GitHub Enterprise, and Bitbucket Cloud).

To define a scheduled trigger in YAML, use the `schedules` keyword and define your schedule using cron syntax. The following example configures a schedule that runs every day at midnight.

```yml
# YAML file in the main branch
schedules:
- cron: '0 0 * * *'
  displayName: Daily midnight build
  branches:
    include:
    - main
```

For more information and examples, see [Scheduled triggers](../process/scheduled-triggers.md), [schedules definition](/azure/devops/pipelines/yaml-schema/schedules), and [schedules.cron definition](/azure/devops/pipelines/yaml-schema/schedules-cron).

#### [Classic build](#tab/classic-build/)

Scheduled triggers run a pipeline on a predefined schedule. Scheduled triggers are supported by [all repository types](../repos/index.md) supported by Azure DevOps. For information and examples, see [Scheduled triggers](../process/scheduled-triggers.md?tabs=classic).

* * *

## Pipeline completion triggers

[Pipeline triggers](../process/pipeline-triggers.md) in YAML pipelines and [build completion triggers](../process/pipeline-triggers-classic.md) in classic build pipelines allow you to trigger one pipeline upon the completion of another.

#### [YAML](#tab/yaml/)

Configure a pipeline resource trigger in your pipeline to start a pipeline run when the source pipeline completes a run.

```yml
resources:
  pipelines:
  - pipeline: sourcePipelineResource # Label for this pipeline resource; used when referring to it elsewhere in the pipeline.
    source: source-pipeline # The name of the pipeline referenced by this pipeline resource.
    project: FabrikamProject # Required only if the source pipeline is in another project
    trigger: true # Run this pipeline when any run of source-pipeline completes
```

You can have multiple pipeline resources in your pipeline and can configure the trigger to run when any version of the source pipeline completes, or limit it to certain branches.

For more information and examples, see [Pipeline completion triggers](../process/pipeline-triggers.md).

For the full syntax and trigger options, see [resources.pipelines.pipeline definition](/azure/devops/pipelines/yaml-schema/resources-pipelines-pipeline).

#### [Classic build](#tab/classic-build/)

Configure build completion triggers in the classic designer to have your pipeline run when another pipeline in the same project as yours completes. You can optionally download artifacts from the completed run. For more information, see [Build completion triggers (classic)](../process/pipeline-triggers-classic.md).

* * *

<a id="branch-considerations"></a>
## Branch consideration for triggers in YAML pipelines

YAML pipelines can have different versions of the pipeline in different branches, which can affect which version of the pipeline's triggers are evaluated and which version of the pipeline should run.

| Trigger type | Pipeline YAML version |
|--------------|---------|
| CI triggers (`trigger`)    | The version of the pipeline in the pushed branch is used. |
| PR triggers (`pr`)         | The version of the pipeline in the source branch for the pull request is used. |
| GitHub pull request comment triggers    | The version of the pipeline in the source branch for the pull request is used. |
| Scheduled triggers         | See [Branch considerations for scheduled triggers](../process/scheduled-triggers.md?tabs=yaml#branch-considerations-for-scheduled-triggers). |
| Pipeline completion triggers | See [Branch considerations for pipeline completion triggers](../process/pipeline-triggers.md?tabs=yaml#branch-considerations). |

## Classic release pipelines

[Continuous deployment triggers](../release/triggers.md#continuous-deployment-triggers) help you start classic releases after a classic build or YAML pipeline completes.

[Scheduled release triggers](../release/triggers.md#scheduled-release-triggers) allow you to run a release pipeline according to a schedule.

[Pull request release triggers](../release/triggers.md) are used to deploy a pull request directly using classic releases.

[Stage triggers in classic release](../release/triggers.md#stage-triggers) are used to configure how each stage in a classic release is triggered.
