---
title: Xamarin License task
description: Activate or deactivate a Xamarin license when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 07F571D7-DB66-4B8E-8CB1-F37B6D56EBD7
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Xamarin License task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

This task was used in a build or release pipeline to activate or deactivate Xamarin licenses.

## Deprecated

> **NOTE:** This task is deprecated because you no longer need a Xamarin license to [build your Xamarin app](../../apps/mobile/xamarin.md).
> Use the free version of Xamarin from [https://store.xamarin.com](https://store.xamarin.com).

## Demands

None

## Arguments

| Argument | Description |
| -------- | ----------- |
| Action | Select:<br /><br />**Activate** for the first instance of this build task, which should come before any instances of the Xamarin.Android or Xamarin.iOS tasks.<br /><br />**Deactivate** for the second instance of this build task, which should come after all instances of the Xamarin.Android and Xamarin.iOS tasks. You should also select **Always run** under **Control options** for the last instance of the Xamarin license task. |
| Email | Xamarin account email address. |
| Password | Xamarin account password.<br /><br />Use a [secret variable](../../build/variables.md) to avoid exposing this value. |
| Xamarin Product | Select the build task that you're running in this build pipeline, such as **Xamarin.Android** or **Xamarin.iOS**. |
| Advanced - Timeout in Seconds | Specify how long you want to allow the build task to wait for the activation or deactivation. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] |

## Example

[Build your Xamarin app](../../apps/mobile/xamarin.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
