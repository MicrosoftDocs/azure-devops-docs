---
title: Publish Build Artifacts
description: How to publish build artifacts to VSTS, TFS or a file share when building code
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 01533845-5D63-4DAC-97DF-D55F1E4DCF53
ms.manager: douge
ms.author: alewis
ms.date: 10/12/2017
---

# Utility: Publish Build Artifacts

**VSTS | TFS 2018 | TFS 2017 | TFS 2015.3 | [TFS 2015 RTM](copy-and-publish-build-artifacts.md) | [Previous versions (XAML builds)](http://msdn.microsoft.com/library/bb778394%28v=vs.120%29.aspx)**

![](_img/publish-build-artifacts.png) Publish build artifacts to Visual Studio Team Services/TFS or a file share.

> [!TIP]
> Looking to get started working with build artifacts? See [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md).

## Demands

None

## Arguments

| Argument | Description |
| -------- | ----------- |
| Path to publish | Path to the folder or file you want to publish. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Typically, you'll specify `$(Build.ArtifactStagingDirectory)`. See [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md). |
| Artifact name | Specify the name of the artifact that you want to create. It can be whatever you want. For example: `drop` |
| Artifact publish location | In most cases, VSTS/TFS (`Server` on **TFS 2018 RTM** and older) is the best and simplest option. Otherwise, choose a file share and then specify a few more arguments (see below). To learn more, see [Artifacts in Team Build](../../concepts/definitions/build/artifacts.md). |
| File share path | Specify the path to the file share where you want to copy the files. The path must be a fully-qualified path or a valid path relative to the root directory of your repository. Publishing artifacts from a Linux or macOS agent to a file share is not supported. |
| Parallel copy (**VSTS**, **TFS 2018**, or newer) | Select whether to copy files in parallel using multiple threads for greater potential throughput. If this setting is not enabled, a single thread will be used. |
| Parallel count (**VSTS**, **TFS 2018**, or newer) | Enter the degree of parallelism (the number of threads) used to perform the copy. The value must be at least 1 and not greater than 128. Choose a value based on CPU capabilities of the build agent. Typically, 8 is a good starting value. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../_shared/build-step-common-qa.md)]

<!-- ENDSECTION -->
