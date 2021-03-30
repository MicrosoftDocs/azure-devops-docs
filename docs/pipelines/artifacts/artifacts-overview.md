---
title: Artifacts in Azure Pipelines
ms.custom: seodec18
description: Supported Artifacts in Azure Pipelines 
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.date: 03/05/2021
monikerRange: '>= tfs-2015'
---

# Artifacts in Azure Pipelines overview

Azure Artifacts enable developers to consume and publish different types of packages to Artifacts feeds and public registries such as NuGet.org and npmjs.com. You can use Azure Artifacts in conjunction with Azure Pipelines to deploy packages, publish build artifacts, or integrate files between your pipeline stages to build, test, or deploy your application.

## Supported artifact types

The following table describes supported artifact types in Azure Pipelines.

|         Supported artifact type            |                                                 Description                                                            |
|    ----------------------------------------|--------------------------------------------------------------------------------------------------------------------    |
| [Build artifacts](build-artifacts.md)      | The files produced by a build such as .dll, .exe, or .PDB files.                                                       |
| [Maven](maven.md)                          | Publish Maven packages to Azure Artifacts feeds or Maven central repository.                                           |
| [npm](npm.md)                              | Publish npm packages to Azure Artifacts feeds or npm registry.                                                         |
| [NuGet](nuget.md)                          | Publish NuGet packages to Azure Artifacts feeds or NuGet public repository.                                            |
| [PyPI](pypi.md)                            | Publish Python packages to Azure Artifacts feeds or PyPI registry.                                                     |
| [Universal packages](universal-packages.md)| Publish Universal Packages to Azure Artifacts feeds.                                                                   |
| [Symbols](symbols.md)                      | Symbol files contain debugging information about the compiled executables. You can publish symbols to a symbol server in Azure Artifacts to debug your application. Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing the specific product, package, or build information.                                                                                                                                                    |

## How do I publish and consume artifacts?

Each kind of artifact has a different way of being published and consumed. Some artifacts are specific to particular development tools, such as .NET, Node.js/JavaScript, Python, and Maven. Other artifact types offer more generic file storage, such as pipeline artifacts and Universal Packages.

#### [NuGet](#tab/nuget/)

- [Publish a NuGet package using the command line](../../artifacts/nuget/publish.md)
- [Publish to NuGet feeds (YAML/Classic)](nuget.md)
- [Consume NuGet packages](../../artifacts/nuget/consume.md)
 
#### [Npm](#tab/npm/)

- [Publish an npm package from the command line](../../artifacts/npm/publish.md)
- [Publish npm packages (YAML/Classic)](../tasks/package/npm.md#publish-npm-packages)
- [Consume npm packages](../../artifacts/get-started-npm.md)

#### [Python](#tab/python/)

- [Publish Python packages](pypi.md)
- [Consume Python packages](../../artifacts/quickstarts/python-cli.md)

#### [Maven](#tab/maven/)

- [Maven quickstart](../../artifacts/get-started-maven.md)
- [Install Maven Artifacts](../../artifacts/maven/install.md)
- [Publish a Maven artifact using Gradle](../../artifacts/gradle/publish-package-gradle.md)
- [Install a Maven artifact using Gradle](../../artifacts/gradle/pull-package-gradle.md)

* * * 

## Next steps

> [!div class="nextstepaction"]
> [Publish and download artifacts in Azure Pipelines](pipeline-artifacts.md)
> [Releases in Azure Pipelines](../release/releases.md)
> [Build Artifacts](build-artifacts.md)
