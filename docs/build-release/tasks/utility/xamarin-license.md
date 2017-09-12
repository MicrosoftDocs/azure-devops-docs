---
title: Xamarin license
description: How to activate or deactivate a Xamarin license when building code in VSTS and Team Foundation Server TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 07F571D7-DB66-4B8E-8CB1-F37B6D56EBD7
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Utility: Xamarin license

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/xamarin-license.png) Activate or deactivate Xamarin licenses

## Deprecated

> We're deprecating this task because you no longer need a Xamarin license to [build your Xamarin app](../../apps/mobile/xamarin.md). We recommend that you remove this task from your build to avoid disruption when we remove the task from the product.

## Demands

None

## Arguments

| Argument | Description |
| -------- | ----------- |
| Action | Select:<br /><br />**Activate** for the first instance of this build step, which should come before any instances of the Xamarin.Android step or the Xamarin.iOS steps.<br /><br />**Deactivate** for the second instance of this build step, which should come after all instances of the Xamarin.Android and Xamarin.iOS steps. You should also select **Always run** under **Control options** for the last instance of the Xamarin license step. |
| Email | Xamarin account email address. |
| Password | Xamarin account password.<br /><br />Use a [secret variable](../../concepts/definitions/build/variables.md) to avoid exposing this value. |
| Xamarin Product | Select the build step that you're running in this build definition, such as **Xamarin.Android** or **Xamarin.iOS**. |
| Advanced - Timeout in Seconds | Specify how long you want to allow the build step to wait for the activation or deactivation. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] |

## Example 

[Build your Xamarin app](../../apps/mobile/xamarin.md)


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
