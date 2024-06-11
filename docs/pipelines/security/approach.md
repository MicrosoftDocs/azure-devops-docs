---
title: Determine your approach for securing YAML pipelines
description: Apply security recommendations incrementally in your YAML pipelines because incremental improvements add up.
ms.assetid: a506a55a-2379-4d14-a52c-f4c28abae0ec
ms.reviewer: vijayma
ms.date: 06/10/2024
monikerRange: '>= azure-devops-2020'
---

# Determine your approach for securing YAML pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Consider adopting an incremental approach to enhance the security of your pipelines. While it’s ideal to implement all the guidance we provide, don’t get overwhelmed by the number of recommendations. Start by making some improvements, even if you can’t address everything immediately.

## Security interdependence

Security recommendations are interdependent. Your posture relies on the specific recommendations you implement, which, in turn, align with your DevOps and security teams’ concerns and organizational policies.

Consider prioritizing security in critical areas while accepting some trade-offs for convenience in other aspects. For example, if you use [`extends` templates](templates.md#step-targets) to require all builds to run in containers, then you might not need a [separate agent pool for each project](infrastructure.md#separate-agents-for-each-project).

## Begin with a nearly empty template

Begin with a minimal template and gradually enforce extensions. This approach ensures that as you implement security practices, you have a centralized starting point that covers all pipelines.

For more information, see [Templates](templates.md).

:::moniker range=">= azure-devops-2022"

## Disable creation of classic pipelines

:::moniker-end

:::moniker range="=azure-devops-2022"

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

:::moniker-end

:::moniker range=">= azure-devops-2022"

Disable the creation of classic build and release pipelines if you exclusively use YAML pipelines. This precaution prevents a security concern arising from YAML and classic pipelines sharing the same resources, such as service connections.

Independently disable the creation of classic build pipelines and classic release pipelines. When both are disabled, no classic build pipeline, classic release pipeline, task groups, or deployment groups can be created via the user interface or the REST API.

To disable the creation of classic pipelines, go to your **Organization settings** or **Project settings**, then under the *Pipelines* section select **Settings**. In the *General* section, toggle on **Disable creation of classic build pipelines** and **Disable creation of classic release pipelines**.

If you enable this feature at the organization level, it applies to all projects within that organization. However, if you leave it disabled, you can selectively enable it for specific projects.

:::moniker-end

:::moniker range="> azure-devops-2022"

To improve the security of newly created organizations, starting with [Sprint 226](/azure/devops/release-notes/2023/sprint-225-update#disable-creation-of-classic-pipelines-for-new-organizations-pre-announcement), by default we disable creating classic build and release pipelines for new organizations.

:::moniker-end

## Next steps

After you plan your security approach, consider how your [repositories](repos.md) provide protection.
