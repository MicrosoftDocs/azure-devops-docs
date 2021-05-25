---
title: Triggers in Azure Pipelines
description: Learn about how you can specify CI, scheduled, gated, and other triggers in Azure Pipelines
ms.topic: conceptual
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 04/13/2021
monikerRange: '>= tfs-2015'
---

# Specify events that trigger pipelines

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Use triggers to run a pipeline automatically. Azure Pipelines supports many types of triggers. Based on your pipeline's type, select the appropriate trigger from the list below:

<a name="ci"></a>
## Classic build pipelines and YAML pipelines

<a name="ci-triggers"></a>
Continuous integration (CI) triggers vary based on the type of repository you build in your pipeline.

- [CI triggers in Azure Repos Git](../repos/azure-repos-git.md#ci-triggers)
- [CI triggers in GitHub](../repos/github.md#ci-triggers)
- [CI triggers in Bitbucket Cloud](../repos/bitbucket.md#ci-triggers)
- [CI triggers in TFVC](../repos/tfvc.md#ci-triggers)

<a name="pr-triggers"></a>
Pull request validation (PR) triggers also vary based on the type of repository.

- [PR triggers in Azure Repos Git](../repos/azure-repos-git.md#pr-triggers)
- [PR triggers in GitHub](../repos/github.md#pr-triggers)
- [PR triggers in Bitbucket Cloud](../repos/bitbucket.md#pr-triggers)

[Gated check-in](../repos/tfvc.md#gated) is supported for TFVC repositories.

[Comment triggers](../repos/github.md#comment-triggers) are supported only for GitHub repositories.

[Scheduled triggers](../process/scheduled-triggers.md) are independent of the repository and allow you to run a pipeline according to a schedule.

[Pipeline triggers](../process/pipeline-triggers.md) in YAML pipelines and [build completion triggers](../process/pipeline-triggers-classic.md) in classic build pipelines allow you to trigger one pipeline upon the completion of another.

## Branch consideration for triggers in YAML pipelines

YAML pipelines can have different versions of the pipeline in different branches, which can affect which version of the pipeline's triggers are evaluated and which version of the pipeline should run.

| Trigger type | Pipeline YAML version |
|--------------|---------|
| CI triggers (`trigger`)    | The version of the pipeline in the pushed branch is used. |
| PR triggers (`pr`)         | The version of the pipeline in the source branch for the pull request is used. |
| GitHub pull request comment triggers    | The version of the pipeline in the source branch for the pull request is used. |
| Scheduled triggers         | See [Branch considerations for scheduled triggers](../process/scheduled-triggers.md?tabs=yaml#branch-considerations-for-scheduled-triggers). |
| Pipeline completion triggers | See [Branch considerations for pipeline completion triggers](../process/pipeline-triggers.md?tabs=yaml#branch-considerations). |
| [Azure Pipelines Action](https://github.com/marketplace/actions/azure-pipelines-action) | See [Branch considerations](../ecosystems/github-actions.md#branch-considerations). |

## Classic release pipelines

[Continuous deployment triggers](../release/triggers.md#release-triggers) help you start classic releases after a classic build or YAML pipeline completes.

[Scheduled release triggers](../release/triggers.md#scheduled-triggers) allow you to run a release pipeline according to a schedule.

[Pull request release triggers](../release/triggers.md) are used to deploy a pull request directly using classic releases.

[Stage triggers in classic release](../release/triggers.md#env-triggers) are used to configure how each stage in a classic release is triggered.
