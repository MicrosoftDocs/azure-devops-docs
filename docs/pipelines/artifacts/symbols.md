---
title: Publish symbols for debugging
titleSuffix: Azure Pipelines & TFS
description: Publish symbols to a symbol server for debugging using Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8794A5F8-B646-4E2F-A426-47CC62ABFF5D
ms.manager: douge
ms.author: amullans
ms.date: 10/18/2017
monikerRange: '> tfs-2015'
---

# Publish symbols for debugging

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

[!INCLUDE [](../../artifacts/_shared/availability-symbols.md)]

Symbol servers enable debuggers to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. To learn more about symbols, read the [concept page](/azure/devops/artifacts/concepts/symbols); to consume symbols, see [this page for Visual Studio](/azure/devops/artifacts/symbols/debug-with-symbols-visual-studio) or [this page for WinDbg](/azure/devops/artifacts/symbols/debug-with-symbols-windbg).

## Publish symbols
In order to publish symbols to the Package Management symbol server in Azure Pipelines, include the [Index Sources and Publish Symbols](../tasks/build/index-sources-publish-symbols.md) task in your build pipeline. Configure the task as follows:

* For **Version**, select 2.\*.
* For **Symbol Server Type**, select **Azure Pipelines**.
* Use the **Path to symbols folder** argument to specify the root directory that contains the .pdb files to be published.
* Use the **Search pattern** argument to specify search criteria to find the .pdb files in the folder that you specify in **Path to symbols folder**. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```).
For example, ```**\bin\**\*.pdb``` searches for all *.pdb* files in all subdirectories named *bin*.

### Publish symbols for NuGet packages
To publish symbols for NuGet packages, include the above task in the build pipeline that produces the NuGet packages. Then the symbols will be available to all users in the Azure DevOps organization.

## Publish symbols to a file share

You can also publish symbols to a file share using the [Index Sources and Publish Symbols](../tasks/build/index-sources-publish-symbols.md) task. When you use this method, the task will copy the PDB files over and put them into a specific layout. When Visual Studio is pointed to the UNC share, it can find the symbols related to the binaries that are currently loaded. 

Add the task to your build pipeline and configure as follows:

* For **Version**, select 2.\*. 
* For **Symbol Server Type**, select **File share**.
    * When you select **File share** as your **Symbol Server Type**, you get the option to _Compress Symbols_, this option will compress your symbols to save space. 
* Use the **Path to symbols folder** argument to specify the root directory that contains the .pdb files to be published.
* Use the **Search pattern** argument to specify search criteria to find the .pdb files in the folder that you specify in **Path to symbols folder**. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```).
For example, ```**\bin\**\*.pdb``` searches for all *.pdb* files in all subdirectories named *bin*.

## Portable PDBs

If you're using [Portable PDBs](https://github.com/dotnet/core/blob/master/Documentation/diagnostics/portable_pdb.md), you don't need to use the **Index Sources and Publish Symbols** task. For Portable PDBs, indexing is done by the build. This is a design feature of Portable PDBs and .NET.

## Use indexed symbols to debug your app

You can use your indexed symbols to debug an app on a different machine from where the sources were built.

### Enable your dev machine

In Visual Studio you may need to enable the following two options:

* Debug -> Options -> Debugging -> General
  * -> Enable source server support
  * -> Allow source server for partial trust assemblies (Managed only)

### Advanced usage: overriding at debug time

The mapping information injected into the PDB files contains variables that can be overridden at debugging time. Overriding the variables may be required if the collection URL has changed. When overriding the mapping information, the goals are to construct:

* A command (SRCSRVCMD) that the debugger can use to retrieve the source file from the server.

* A location (SRCSRVTRG) where the debugger can find the retrieved source file.

 The mapping information may look something like the following:

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

 The above example contains two sections: 1) the variables section and 2) the source files section. The information in the variables section is what can be overridden. The variables can leverage other variables, and can leverage information from the source files section.

 To override one or more of the variables while debugging with Visual Studio, create an ini file ```%LOCALAPPDATA%\SourceServer\srcsrv.ini```. Set the content of the INI file to override the variables. For example:

```
[variables]
TFS_COLLECTION=http://DIFFERENT_SERVER:8080/tfs/DifferentCollection
```

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: What's the retention policy for the symbols stored in the Azure Pipelines symbol server?

A: Symbols will have the same retention as the build. When you delete a build, you also delete the symbols produced by that build.

#### Q: Can I use source indexing on a portable PDB created from a .NET Core assembly?

A: No, source indexing is currently not enabled for Portable PDBs as SourceLink doesn't support authenticated source repositories. The workaround at the moment is to configure the build to generate full PDBs.

#### Q: Is this available in TFS?

A: In TFS, you can bring your own file share and set it up as a symbol server as described in [this blog](https://edsquared.com/source-server-and-symbol-server-support-in-tfs-2010-cf35ed5527e2).

<!-- ENDSECTION -->
