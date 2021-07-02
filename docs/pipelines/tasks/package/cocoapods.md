---
title: CocoaPods task
ms.custom: seodec18
description: Learn all about how you can use CocoaPods packages when you are building code in Azure Pipelines or Team Foundation Server (TFS).
ms.topic: reference
ms.assetid: D690542B-9A13-4836-8C1E-D715AE6CB7D6
ms.author: vijayma
author: vijayma
ms.date: 04/21/2020
monikerRange: '>= tfs-2015'
---

# CocoaPods task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to run CocoaPods [pod install](https://guides.cocoapods.org/using/pod-install-vs-update.html).

[CocoaPods](https://cocoapods.org/) is the dependency manager for Swift and Objective-C Cocoa projects. This task optionally runs `pod repo update` and then runs `pod install`.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/CocoaPodsV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`cwd`<br/>Working directory|(Optional) Specify the working directory in which to execute this task. If left empty, the repository directory will be used. <br/>Argument alias: `workingDirectory`|
|`forceRepoUpdate`<br/>Force repo update|(Required) Selecting this option will force running 'pod repo update' before install. <br/>Default value: `false`|
|`projectDirectory`<br/>Project directory|(Optional) Optionally specify the path to the root of the project directory. If left empty, the project specified in the Podfile will be used. If no project is specified, then a search for an Xcode project will be made. If more than one Xcode project is found, an error will occur.|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
