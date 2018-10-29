---
title: Index Sources & Publish Symbols build and release task
titleSuffix: Azure Pipelines & TFS
description: Index Sources & Publish Symbols build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BD27A4F7-F870-4D90-AD3F-C74E2A94538B
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 11/14/2017
monikerRange: '>= tfs-2015'
---


# Index Sources & Publish Symbols task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

> [!NOTE]
> A symbol server is available with Package Management in **Azure Artifacts** and works best with **Visual Studio 2017.4 and newer**.
> **Team Foundation Server** users and users without the Package Management extension can publish symbols to a file share using this task.

Use this task in a build or release pipeline to index your source code and optionally publish symbols to the Package Management symbol server or a file share.

Indexing source code enables you to use your .pdb symbol files to debug an app on a machine other than the one you used to build the app. For example, you can debug an app built by a build agent from a dev machine that does not have the source code.

Symbol servers enables your debugger to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. To learn more about symbols, read the [concept page](/azure/devops/artifacts/concepts/symbols); to publish symbols, use this task and see [the walkthrough](/azure/devops/pipelines/symbols/index).

> [!NOTE]
> This build task works only:
> 
> * For code in Git or TFVC stored in Team Foundation Server (TFS) or Azure Repos. It does not work for any other type of repository.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PublishSymbolsV2.md)]
::: moniker-end

## Arguments

<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Path to symbols folder</td>
        <td>
            <p>The root path that is searched for symbol files using the search patterns supplied in the next input.</p>
        </td>
    </tr>
    <tr>
        <td>Search pattern</td>
        <td>
            <p>[File matching pattern(s)](../file-matching-patterns.md) (rooted at the path supplied in the previous input) used to discover `pdbs` that contain symbols.</p>
        </td>
    </tr>
    <tr>
        <td>Index sources</td>
        <td>
            <p>Adds information about the location of the source repository to the symbols. This enables users using these symbols to navigate to the relevant source code.</p>
        </td>
    </tr>
    <tr>
        <td>Publish symbols</td>
        <td>
            <p>Publishes symbols to the symbol server selected in the next inputs.</p>
        </td>
    </tr>
    <tr>
        <td>Symbol server type</td>
        <td>
            **Package Management in Azure Artifacts:**
            <ul>
                <li>Select this option to use the symbol server built into the [Package Management extension](https://marketplace.visualstudio.com/items?itemName=ms.feed).</li>
            </ul>
            **File share:**
            <ul>
                <li>Select this option to use the file share supplied in the next input.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Path to publish symbols</td>
        <td>
            <p>The path to the SymStore file share.
            </p>
            <p>To prepare your SymStore symbol store:</p>
            <ol>
                <li>Set up a folder on a file-sharing server to store the symbols. For example, set up \\fabrikam-share\symbols.</li>
                <li>Grant full control permission to the [build agent service account](../../agents/agents.md#account).</li>
            </ol>
            <p>If you leave this argument blank, your symbols will be source indexed but not published. (You can also store your symbols with your drops. See [Publish Build Artifacts](../utility/publish-build-artifacts.md)).
            </p>
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <tr>
            <td>Verbose logging</td>
            <td>
                Enables additional log details.
            </td>
        </tr>
        <td>Warn if not indexed</td>
        <td>
            <p>Enable this option if you want the build summary to show a warning when sources are not indexed for a PDB file.
                A common cause of sources to not be indexed are when your solution depends on binaries that it doesn't build.</p>
            <p>Even if you don't select this option, the messages are written in log.
            </p>
        </td>
    </tr>
    <tr>
        <td>Max wait time (min) </td>
        <td>If you want to set a time limit for this task, specify the number of minutes here. The build fails when the limit
            is reached. If you leave it blank, limit is 2 hours.</td>
    </tr>
    <tr>
        <td>Product</td>
        <td>If you are publishing your symbols, you can specify the product parameter that is passed to symstore.exe. If blank,
            [$(Build.DefinitionName)](../../build/variables.md) is passed.</td>
    </tr>
    <tr>
        <td>Version</td>
        <td>If you are publishing your symbols, you can specify the version parameter that is passed to symstore.exe. If blank,
            [$(Build.BuildNumber)](../../build/variables.md) is passed.</td>
    </tr>
    <tr>
        <td>Artifact name</td>
        <td>Specify the pattern used for the name of the link from the artifact tab in the build summary to the file share where
            you are publishing your symbols. For example, if you specify ```Symbols_$(BuildConfiguration)```, then the name
            of the link to your published release symbols would be *Symbols_release*</td>
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

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### How does indexing work?

By choosing to index the sources, an extra section will be injected into the PDB files. PDB files normally contain references to the local source file paths only. For example, ```C:\BuildAgent\_work\1\src\MyApp\Program.cs```. The extra section injected into the PDB file contains mapping instructions for debuggers. The mapping information indicates how to retrieve the server item corresponding to each local path.

 The Visual Studio debugger will use the mapping information to retrieve the source file from the server. An actual command to retrieve the source file is included in the mapping information. You may be prompted by Visual Studio whether to run the command. For example
```
tf.exe git view /collection:http://SERVER:8080/tfs/DefaultCollection /teamproject:"93fc2e4d-0f0f-4e40-9825-01326191395d" /repository:"647ed0e6-43d2-4e3d-b8bf-2885476e9c44" /commitId:3a9910862e22f442cd56ff280b43dd544d1ee8c9 /path:"/MyApp/Program.cs" /output:"C:\Users\username\AppData\Local\SOURCE~1\TFS_COMMIT\3a991086\MyApp\Program.cs" /applyfilters
```

### Can I use source indexing on a portable PDB created from a .NET Core assembly?

No, source indexing is currently not enabled for Portable PDBs as SourceLink doesn't support authenticated source repositories. The workaround at the moment is to configure the build to generate full PDBs. Note that if you are generating a .NET Standard 2.0 assembly and are generating full PDBs and consuming them in a .NET Framework (full CLR) application then you will be able to fetch sources from Azure Repos (provided you have embedded SourceLink information and enabled it in your IDE).

### Where can I learn more about symbol stores and debugging?

[Symbol Server and Symbol Stores](https://msdn.microsoft.com/library/ms680693%28VS.85%29.aspx)

[SymStore](https://msdn.microsoft.com/library/ff558848%28VS.85%29.aspx)

[Use the Microsoft Symbol Server to obtain debug symbol files](https://msdn.microsoft.com/library/windows/desktop/ee416588%28v=vs.85%29.aspx)

[The Srcsrv.ini File](https://msdn.microsoft.com/library/windows/hardware/ff558876%28v=vs.85%29.aspx)

[Source Server](https://msdn.microsoft.com/library/windows/desktop/ms680641%28v=vs.85%29.aspx)

[Source Indexing and Symbol Servers: A Guide to Easier Debugging](http://www.codeproject.com/Articles/115125/Source-Indexing-and-Symbol-Servers-A-Guide-to-Easi)

[!INCLUDE [temp](../../_shared/qa-agents.md)]

### How long are Symbols retained?

When symbols are published to Azure Pipelines they are associated with a build. When the build is deleted either manually or due to retention policy then the symbols are also deleted. If you want to retain the symbols indefinitely then you should mark the build as Retain Indefinately.

<!-- ENDSECTION -->
