---
title: CocoaPods
description: How to use CocoaPods packages when building code in VSTS
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D690542B-9A13-4836-8C1E-D715AE6CB7D6
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Package: CocoaPods 
 
[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![icon](_img/cocoapods.png) Runs CocoaPods [pod install](https://guides.cocoapods.org/using/pod-install-vs-update.html)

[CocoaPods](https://cocoapods.org/) is the dependency manager for Swift and Objective-C Cocoa projects. 

## Demands

None

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Working Directory</td>
<td>
Working directory. If you leave it blank, the working directory is the root of your repo.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

::: moniker range="vsts"

## YAML snippet

(VSTS-only)

```YAML
- task: CocoaPods@0
  inputs:
    workingDirectory:
#   forceRepoUpdate: False
    projectDirectory:
```

::: moniker-end

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
