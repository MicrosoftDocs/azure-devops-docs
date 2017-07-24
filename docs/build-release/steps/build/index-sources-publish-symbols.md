---
title: Index Sources & Publish Symbols
description: Index Sources & Publish Symbols
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: BD27A4F7-F870-4D90-AD3F-C74E2A94538B
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Build: Index Sources & Publish Symbols

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/index-sources-publish-symbols.png) Index your source code and optionally publish symbols to a SymStore file share.

Indexing enables you to use your .pdb symbol files to debug an app on a machine other than the one you used to build the app. For example, you can debug an app built by a build agent from a dev machine that does not have the source code.

> [!NOTE]
> This build step works only:
> 
> * For code in Git or TFVC stored in Team Foundation Server (TFS) or Visual Studio Team Services. It does not work for any other type of repository.
> 
> * Using a [private agent](../../concepts/agents/agents.md#install). It does not work on a hosted agent.

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
<td>Path to publish symbols</td>
<td><p>If you want to publish your symbols, specify the path to the SymStore file share.
</p>
<p>To prepare your SymStore symbol store:</p>
<ol>
<li>Set up a folder on a file-sharing server to store the symbols. For example, set up \\fabrikam-share\symbols.</li>
<li>Grant full control permission to the [build agent service account](../../concepts/agents/agents.md#account).</li>
</ol>
<p>If you leave this argument blank, your symbols will be source indexed but not published. (You can also store your symbols with your drops. See [Publish Build Artifacts](../utility/publish-build-artifacts.md)).
</p>
</td>
</tr>
<tr>
<td>Search pattern</td>
<td>
<p>Specify search criterea to find the .pdb files in the folder that you specify in **Path to symbols folder** argument. You can use a single-folder wildcard (```*```) and recursive wildcards (```**```).</p>
<p> For example, ```**\bin\**\*.pdb``` searches for all *.pdb* files in all subdirectories named *bin*.</p>
</td>
</tr>
<tr>
<td>Path to symbols folder </td>
<td>The path to the folder you want to search for symbol files.  If you leave it blank, the path used is [Build.SourcesDirectory](../../define/variables.md).</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Warn if not indexed</td>
<td><p>Enable this option if you want the build summary to show a warning when sources are not indexed for a PDB file. A common cause of sources to not be indexed are when your solution depends on binaries that it doesn't build.</p>
<p>Even if you don't select this option, the messages are written in log.
</p></td>
</tr>
<tr>
<td>Max wait time (min) </td>
<td>If you want to set a time limit for this step, specify the number of minutes here. The build fails when the limit is reached. If you leave it blank, limit is 2 hours.</td>
</tr>
<tr>
<td>Product</td>
<td>If you are publishing your symbols, you can specify the product parameter that is passed to symstore.exe. If blank, [$(Build.DefinitionName)](../../define/variables.md) is passed.</td>
</tr>
<tr>
<td>Version</td>
<td>If you are publishing your symbols, you can specify the version parameter that is passed to symstore.exe.  If blank, [$(Build.BuildNumber)](../../define/variables.md) is passed.</td>
</tr>
<tr>
<td>Artifact name</td>
<td>Specify the pattern used for the name of the link from the artifact tab in the build summary to the file share where you are publishing your symbols. For example, if you specify ```Symbols_$(BuildConfiguration)```, then the name of the link to your published release symbols would be *Symbols_release*</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Use indexed symbols to debug your app

You can use your indexed symbols to debug an app on a different machine from where the sources were built.

### Enable your dev machine

In Visual Studio you may need to enable the following two options:

* Debug -> Options -> Debugging -> General
  * -> Enable source server support
  * -> Allow source server for partial trust assemblies (Managed only)

### Overriding at debug time

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


### How does indexing work?

By choosing to index the sources, an extra section will be injected into the PDB files. PDB files normally contain references to the local source file paths only. For example, ```C:\BuildAgent\_work\1\src\MyApp\Program.cs```. The extra section injected into the PDB file contains mapping instructions for debuggers. The mapping information indicates how to retrieve the server item corresponding to each local path.

 The Visual Studio debugger will use the mapping information to retrieve the source file from the server. An actual command to retrieve the source file is included in the mapping information. You may be prompted by Visual Studio whether to run the command. For example
```
tf.exe git view /collection:http://SERVER:8080/tfs/DefaultCollection /teamproject:"93fc2e4d-0f0f-4e40-9825-01326191395d" /repository:"647ed0e6-43d2-4e3d-b8bf-2885476e9c44" /commitId:3a9910862e22f442cd56ff280b43dd544d1ee8c9 /path:"/MyApp/Program.cs" /output:"C:\Users\username\AppData\Local\SOURCE~1\TFS_COMMIT\3a991086\MyApp\Program.cs" /applyfilters
```

### Where can I learn more about symbol stores and debugging?

[Symbol Server and Symbol Stores](https://msdn.microsoft.com/en-us/library/ms680693%28VS.85%29.aspx)

[SymStore](https://msdn.microsoft.com/en-us/library/ff558848%28VS.85%29.aspx)

[Use the Microsoft Symbol Server to obtain debug symbol files](https://msdn.microsoft.com/en-us/library/windows/desktop/ee416588%28v=vs.85%29.aspx)

[The Srcsrv.ini File](https://msdn.microsoft.com/en-us/library/windows/hardware/ff558876%28v=vs.85%29.aspx)

[Source Server](https://msdn.microsoft.com/en-us/library/windows/desktop/ms680641%28v=vs.85%29.aspx)

[Source Indexing and Symbol Servers: A Guide to Easier Debugging](http://www.codeproject.com/Articles/115125/Source-Indexing-and-Symbol-Servers-A-Guide-to-Easi)

[Source Server and Symbol Server Support in TFS 2010](http://www.edsquared.com/2011/02/12/Source+Server+And+Symbol+Server+Support+In+TFS+2010.aspx)


[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
