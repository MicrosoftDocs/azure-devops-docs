---
title: Publish symbols for debugging
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Publish symbols to a symbol server for debugging using Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8794A5F8-B646-4E2F-A426-47CC62ABFF5D
ms.manager: jillfra
ms.author: amullans
ms.date: 10/18/2017
monikerRange: '> tfs-2015'
---

# Publish symbols for debugging

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

[!INCLUDE [](../../artifacts/_shared/availability-symbols.md)]

Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing product names, build numbers, or package names. To learn more about symbols, read the [concept page](/azure/devops/artifacts/concepts/symbols). To consume symbols, see [this page for Visual Studio](/azure/devops/artifacts/symbols/debug-with-symbols-visual-studio) or [this page for WinDbg](/azure/devops/artifacts/symbols/debug-with-symbols-windbg).

## Publish symbols
To publish symbols to the symbol server in Azure Artifacts, include the [Index Sources and Publish Symbols](../tasks/build/index-sources-publish-symbols.md) task in your build pipeline. Configure the task as follows:

* For **Version**, select **2.\***.
* For **Symbol Server Type**, select **Symbol Server in this organization/collection (requires Azure Artifacts)**.
* Use the **Path to symbols folder** argument to specify the root directory that contains the .pdb files to be published.
* Use the **Search pattern** argument to specify search criteria to find the .pdb files in the folder that you specify in **Path to symbols folder**. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```).
For example, ```**\bin\**\*.pdb``` searches for all .pdb files in all subdirectories named *bin*.

### Publish symbols for NuGet packages
To publish symbols for NuGet packages, include the preceding task in the build pipeline that produces the NuGet packages. Then the symbols will be available to all users in the Azure DevOps organization.

## Publish symbols to a file share

You can also publish symbols to a file share by using the [Index Sources and Publish Symbols](../tasks/build/index-sources-publish-symbols.md) task. When you use this method, the task will copy the .pdb files over and put them into a specific layout. When Visual Studio is pointed to the UNC share, it can find the symbols related to the binaries that are currently loaded. 

Add the task to your build pipeline and configure it as follows:

* For **Version**, select **2.\***. 
* For **Symbol Server Type**, select **File share**.
    * When you select **File share** as **Symbol Server Type**, you get the **Compress Symbols** option. This option compresses your symbols to save space. 
* Use the **Path to symbols folder** argument to specify the root directory that contains the .pdb files to be published.
* Use the **Search pattern** argument to specify search criteria to find the .pdb files in the folder that you specify in **Path to symbols folder**. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```).
For example, ```**\bin\**\*.pdb``` searches for all .pdb files in all subdirectories named *bin*.

## Portable PDBs

If you're using [portable PDBs](https://github.com/dotnet/core/blob/master/Documentation/diagnostics/portable_pdb.md), you still need to use the **Index Sources and Publish Symbols** task to publish symbols. For portable PDBs, the build does the indexing, however you should [use SourceLink](https://docs.microsoft.com/dotnet/standard/library-guidance/sourcelink) to index the symbols as part of the build. Note that Azure Artifacts doesn't presently support ingesting NuGet symbol packages and so the task is used to publish the generated PDB files into the symbols service directly.

## Use indexed symbols to debug your app

You can use your indexed symbols to debug an app on a different machine from where the sources were built.

### Enable your development machine

In Visual Studio, you might need to enable the following two options in **Debug** > **Options** > **Debugging** > **General**:

* **Enable source server support**
* **Allow source server for partial trust assemblies (Managed only)**

### Advanced usage: overriding at debug time

The mapping information injected into the .pdb files contains variables that can be overridden at debugging time. Overriding the variables might be required if the collection URL has changed. When you're overriding the mapping information, the goals are to construct:

* A command (SRCSRVCMD) that the debugger can use to retrieve the source file from the server.

* A location (SRCSRVTRG) where the debugger can find the retrieved source file.

 The mapping information might look something like the following:

```
SRCSRV: variables ------------------------------------------
TFS_EXTRACT_TARGET=%targ%\%var5%\%fnvar%(%var6%)%fnbksl%(%var7%)
TFS_EXTRACT_CMD=tf.exe git view /collection:%fnvar%(%var2%) /teamproject:"%fnvar%(%var3%)" /repository:"%fnvar%(%var4%)" /commitId:%fnvar%(%var5%) /path:"%var7%" /output:%SRCSRVTRG% %fnvar%(%var8%)
TFS_COLLECTION=http://SERVER:8080/tfs/DefaultCollection
TFS_TEAM_PROJECT=93fc2e4d-0f0f-4e40-9825-01326191395d
TFS_REPO=647ed0e6-43d2-4e3d-b8bf-2885476e9c44
TFS_COMMIT=3a9910862e22f442cd56ff280b43dd544d1ee8c9
TFS_SHORT_COMMIT=3a991086
TFS_APPLY_FILTERS=/applyfilters
SRCSRVVERCTRL=git
SRCSRVERRDESC=access
SRCSRVERRVAR=var2
SRCSRVTRG=%TFS_EXTRACT_TARGET%
SRCSRVCMD=%TFS_EXTRACT_CMD%
SRCSRV: source files ---------------------------------------
C:\BuildAgent\_work\1\src\MyApp\Program.cs*TFS_COLLECTION*TFS_TEAM_PROJECT*TFS_REPO*TFS_COMMIT*TFS_SHORT_COMMIT*/MyApp/Program.cs*TFS_APPLY_FILTERS
C:\BuildAgent\_work\1\src\MyApp\SomeHelper.cs*TFS_COLLECTION*TFS_TEAM_PROJECT*TFS_REPO*TFS_COMMIT*TFS_SHORT_COMMIT*/MyApp/SomeHelper.cs*TFS_APPLY_FILTERS
```

 The preceding example contains two sections: the variables section and the source files section. The information in the variables section can be overridden. The variables can use other variables, and can use information from the source files section.

 To override one or more of the variables while debugging with Visual Studio, create an .ini file ```%LOCALAPPDATA%\SourceServer\srcsrv.ini```. Set the content of the .ini file to override the variables. For example:

```ini
[variables]
TFS_COLLECTION=http://DIFFERENT_SERVER:8080/tfs/DifferentCollection
```

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: What's the retention policy for the symbols stored in the Azure Pipelines symbol server?

A: Symbols have the same retention as the build. When you delete a build, you also delete the symbols that the build produced.

#### Q: Can I use source indexing on a portable .pdb file created from a .NET Core assembly?

A: No, source indexing is currently not enabled for portable .pdb files because SourceLink doesn't support authenticated source repositories. The workaround at the moment is to configure the build to generate full .pdb files.

#### Q: Is this available in TFS?

A: In TFS, you can bring your own file share and set it up as a symbol server, as described in [this blog](https://edsquared.com/source-server-and-symbol-server-support-in-tfs-2010-cf35ed5527e2).

<!-- ENDSECTION -->
