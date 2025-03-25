---
title: Troubleshoot pipeline triggers
description: Learn how to troubleshoot pipeline triggers in Azure Pipelines and Team Foundation Server.
ms.assetid: BFCB144F-9E9B-4FCB-9CD1-260D6873BC2E
ms.author: sdanie
ms.reviewer: steved0x
ms.topic: troubleshooting
ms.date: 04/02/2024
monikerRange: '<= azure-devops'
author: steved0x
---

# Troubleshoot pipeline triggers

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

If a pipeline doesn't start at all, check the following common trigger related issues. 

::: moniker range=">=azure-devops-2022"

* [UI settings override YAML trigger setting](#ui-settings-override-yaml-trigger-setting)
* [Disable implied YAML CI trigger setting is enabled](#disable-implied-yaml-ci-trigger-setting-is-enabled)
* [Pull request triggers not supported with Azure Repos](#pull-request-triggers-not-supported-with-azure-repos)
* [Branch filters misconfigured in CI and PR triggers](#branch-filters-misconfigured-in-ci-and-pr-triggers)
* [Scheduled trigger time zone conversions](#scheduled-trigger-time-zone-conversions)
* [UI settings override YAML scheduled triggers](#ui-settings-override-yaml-scheduled-triggers)

::: moniker-end

::: moniker range="<azure-devops-2022"

* [UI settings override YAML trigger setting](#ui-settings-override-yaml-trigger-setting)
* [Pull request triggers not supported with Azure Repos](#pull-request-triggers-not-supported-with-azure-repos)
* [Branch filters misconfigured in CI and PR triggers](#branch-filters-misconfigured-in-ci-and-pr-triggers)
* [Scheduled trigger time zone conversions](#scheduled-trigger-time-zone-conversions)
* [UI settings override YAML scheduled triggers](#ui-settings-override-yaml-scheduled-triggers)

::: moniker-end

::: moniker range="azure-devops"

> [!NOTE]
> An additional reason that runs may not start is that your organization goes dormant five minutes after the last user signs out of Azure DevOps. After that, each of your build pipelines will run one more time. For example, while your organization is dormant:
> * A nightly build of code in your organization will run only one night until someone signs in again.
> * CI builds of an Other Git repo will stop running until someone signs in again.

::: moniker-end

<a name="overridden-yaml-trigger-setting"></a>

## UI settings override YAML trigger setting

YAML pipelines can have their `trigger` and `pr` trigger settings overridden in the pipeline settings UI. If your `trigger` or `pr` triggers don't seem to be firing, check that setting. While editing your pipeline, choose **...** and then **Triggers**.

![Pipeline settings UI](../repos/media/pipelines-options-for-git/yaml-pipeline-git-options-menu.png)

Check the **Override the YAML trigger from here** setting for the types of trigger (**Continuous integration** or **Pull request validation**) available for your repo.

![Override YAML trigger from here.](../repos/media/pipelines-options-for-git/yaml-pipeline-override-trigger.png)

<a name="using-pull-request-triggers-with-azure-repos"></a>

## Pull request triggers not supported with Azure Repos

If your `pr` trigger isn't firing, and you are using Azure Repos, it is because `pr` triggers aren't supported for Azure Repos. In Azure Repos Git, branch policies are used to implement pull request build validation. For more information, see [Branch policy for pull request validation](../repos/azure-repos-git.md#pr-triggers).

:::moniker range=">=azure-devops-2022"

## Disable implied YAML CI trigger setting is enabled

:::moniker-end

:::moniker range="=azure-devops-2022"

[!INCLUDE [feature-added-2022-2](../../includes/feature-added-2022-2.md)]

:::moniker-end

:::moniker range=">=azure-devops-2022"

YAML pipelines are configured by default with a CI trigger on all branches, unless the [Disable implied YAML CI trigger](/azure/devops/release-notes/2023/sprint-227-update#prevent-unintended-pipeline-runs) setting, introduced in [Azure DevOps sprint 227](/azure/devops/release-notes/2023/sprint-227-update), is enabled. The **Disable implied YAML CI trigger** setting can be configured at the organization level or at the project level, and by default, the setting is not enabled.

If your pipelines use the default implicit CI trigger, and they stop working, check this setting. When the **Disable implied YAML CI trigger** setting is enabled, CI triggers for YAML pipelines are not enabled if the YAML pipeline doesn't have a `trigger` section.

:::moniker-end

<a name="branch-filters-in-ci-and-pr-triggers"></a>

## Branch filters misconfigured in CI and PR triggers

::: moniker range="<=azure-devops"

When you define a YAML PR or CI trigger, you can specify both `include` and `exclude` clauses for branches, tags, and paths. Ensure that the `include` clause matches the details of your commit and that the `exclude` clause doesn't exclude them. For more information, see [pr](/azure/devops/pipelines/yaml-schema/pr) and [trigger](/azure/devops/pipelines/yaml-schema/trigger).

> [!NOTE]
> If you specify an `exclude` clause without an `include` clause, it is equivalent to specifying `*` in the `include` clause.

::: moniker-end

<a name="#scheduled-triggers"></a>

## Scheduled trigger time zone conversions

YAML scheduled triggers are set using UTC time zone. If your scheduled triggers don't seem to be firing at the right time, confirm the conversions between UTC and your local time zone, taking into account the day setting as well. For more information, see [Scheduled triggers](../process/scheduled-triggers.md).

## UI settings override YAML scheduled triggers

If your YAML pipeline has both YAML scheduled triggers and UI defined scheduled triggers, only the UI defined scheduled triggers are run. To run the YAML defined scheduled triggers in your YAML pipeline, you must remove the scheduled triggers defined in the pipeline settings UI. 

To access the pipeline settings UI from a YAML pipeline, edit your pipeline, choose **...** and then **Triggers**.

![Pipeline settings UI](../repos/media/pipelines-options-for-git/yaml-pipeline-git-options-menu.png)

Remove all scheduled triggers. 

:::image type="content" source="../process/media/triggers/delete-ui-scheduled-trigger.png" alt-text="Delete scheduled triggers in the Pipeline settings UI.":::

Once all UI scheduled triggers are removed, a push must be made in order for the YAML scheduled triggers to start running. For more information, see [Scheduled triggers](../process/scheduled-triggers.md).

## I need more help. I found a bug. I've got a suggestion. Where do I go?

[Get subscription, billing, and technical support](https://azure.microsoft.com/support/devops/)

Report any problems or submit feedback at [Developer Community](https://developercommunity.visualstudio.com/).

We welcome your suggestions:
