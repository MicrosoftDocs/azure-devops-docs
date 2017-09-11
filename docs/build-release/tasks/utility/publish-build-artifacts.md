---
title: Publish Build Artifacts
description: How to publish build artifacts to a server or file share when building code in Visual Studio Team Services VSTS and Team Foundation Server TFS
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Utility: Publish Build Artifacts

**VSTS | TFS 2017 | TFS 2015 Update 3 | [TFS 2015 RTM](copy-and-publish-build-artifacts.md) | [Previous versions (XAML builds)](http://msdn.microsoft.com/library/bb778394%28v=vs.120%29.aspx)**

![](_img/publish-build-artifacts.png) Publish Build artifacts to the server or a file share.

> [!TIP]
> Looking to get started working with build artifacts? See [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md).

## Demands

None

## Arguments

| Argument | Description |
| -------- | ----------- |
| Path to Publish | Path to the folder or file you want to publish. The path must be a fully qualified path or a valid path relative to the root directory of your repo. Typically you'll specify `$(Build.ArtifactStagingDirectory)`. See [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md). |
| Advanced - Artifact Name | [!INCLUDE [artifact-name-argument-md](_shared/artifact-name-argument-md.md)] |
| Advanced - Artifact Type | [!INCLUDE [artifact-type-argument-md](_shared/artifact-type-argument-md.md)] |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

<!-- ENDSECTION -->
