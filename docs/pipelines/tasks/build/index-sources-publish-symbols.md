---
title: Index Sources & Publish Symbols
ms.custom: seodec18
description: Index Sources & Publish Symbols build and release task for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: BD27A4F7-F870-4D90-AD3F-C74E2A94538B
ms.author: shashban
author: shashban
ms.date: 04/13/2020
monikerRange: '>= tfs-2015'
---


# Index Sources & Publish Symbols task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

> [!NOTE]
> A symbol server is available with Package Management in **Azure Artifacts** and works best with **Visual Studio 2017.4 and newer**.
> **Team Foundation Server** users and users without the Package Management extension can publish symbols to a file share using this task.

Use this task to index your source code and optionally publish symbols to the Package Management symbol server or a file share.

Indexing source code enables you to use your .pdb symbol files to debug an app on a machine other than the one you used to build the app. For example, you can debug an app built by a build agent from a dev machine that does not have the source code.

Symbol servers enables your debugger to automatically retrieve the correct symbol files without knowing product names, build numbers or package names. To learn more about symbols, read the [concept page](../../../artifacts/concepts/symbols.md); to publish symbols, use this task and see [the walkthrough](../../artifacts/symbols.md).

> [!NOTE]
> This build task works only:
> 
> * For code in Git or TFVC stored in Team Foundation Server (TFS) or Azure Repos. It does not work for any other type of repository.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PublishSymbolsV2.md)]

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
        <td><code>SymbolsFolder</code><br/>Path to symbols folder</td>
        <td>
            <p>(Optional) The path to the folder that is searched for symbol files. The default is $(Build.SourcesDirectory), Otherwise specify a rooted path. Note that UNC paths aren't supported if you select the Azure Artifacts symbol server as the server type.<br/>For example: $(Build.BinariesDirectory)/MyProject</p>
        </td>
    </tr>
    <tr>
        <td><code>SearchPattern</code><br/>Search pattern</td>
        <td>
            <p>(Required) <a href="../file-matching-patterns.md" data-raw-source="[File matching pattern(s)](../file-matching-patterns.md)">File matching pattern(s)</a> The pattern used to discover the pdb files to publish</p><br/>Default value: **/bin/**/*.pdb
        </td>
    </tr>
    <tr>
        <td><code>IndexSources</code><br/>Index sources</td>
        <td>
            <p>(Optional) Indicates whether to inject source server information into the PDB files</p><br/>Default value: true
        </td>
    </tr>
    <tr>
        <td><code>PublishSymbols</code><br/>Publish symbols</td>
        <td>
            <p>(Optional) Indicates whether to publish the symbol files</p><br/>Default value: true
        </td>
    </tr>
    <tr>
        <td><code>SymbolServerType</code><br/>Symbol server type</td>
        <td>(Required) Choose where to publish symbols. Symbols published to the Azure Artifacts symbol server are accessible by any user with access to the organization/collection. Azure DevOps Server only supports the "File share" option. Follow <a href="../../artifacts/symbols.md" data-raw-source="[these instructions](../../artifacts/symbols.md)">these instructions</a> to use Symbol Server in Azure Artifacts.<br/>
            <strong>TeamServices:</strong>
            <ul>
                <li>Symbol Server in this organization/collection (requires Azure Artifacts)</li>
            </ul>
            <strong>File share:</strong>
            <ul>
                <li>Select this option to use the file share supplied in the next input.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><code>SymbolsPath</code><br/>Path to publish symbols</td>
        <td>
            <p>(Optional) The file share that hosts your symbols. This value will be used in the call to <b>symstore.exe add</b> as the <b>/s</b> parameter.
            </p>
            <p>To prepare your SymStore symbol store:</p>
            <ol>
                <li>Set up a folder on a file-sharing server to store the symbols. For example, set up \fabrikam-share\symbols.</li>
                <li>Grant full control permission to the <a href="../../agents/agents.md#account" data-raw-source="[build agent service account](../../agents/agents.md#account)">build agent service account</a>.</li>
            </ol>
            <p>If you leave this argument blank, your symbols will be source indexed but not published. (You can also store your symbols with your drops. See <a href="../utility/publish-build-artifacts.md" data-raw-source="[Publish Build Artifacts](../utility/publish-build-artifacts.md)">Publish Build Artifacts</a>).
            </p>
        </td>
    </tr>
        <tr>
        <td><code>CompressSymbols</code><br/>Compress symbols</td>
        <td>
            <p>(Required) Only available when <strong>File share</strong> is selected as the <strong>Symbol server type</strong>. Compresses your <code>pdbs</code> to save space. <br/>Default value: false
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <tr>
            <td><code>DetailedLog</code><br/>Verbose logging</td>
            <td>
                (Optional) Enables additional log details. <br/>Default value: true
            </td>
        </tr>
        <td><code>TreatNotIndexedAsWarning</code><br/>Warn if not indexed</td>
        <td>
            <p>(Optional) Indicates whether to warn if sources are not indexed for a PDB file. Otherwise the messages are logged as normal output. <br/>
                A common cause of sources to not be indexed are when your solution depends on binaries that it doesn&#39;t build.</p> 
            <p>Even if you don&#39;t select this option, the messages are written in log.
            </p><br/>Default value: false
        </td>
    </tr>
    <tr>
        <td><code>SymbolsMaximumWaitTime</code><br/>Max wait time (min) </td>
        <td>(Optional) The number of minutes to wait before failing this task. If you leave it blank, limit is 2 hours.</td>
    </tr>
    <tr>
        <td><code>SymbolsProduct</code><br/>Product</td>
        <td>(Optional) Specify the product parameter to symstore.exe.  The default is $(Build.DefinitionName)</td>
    </tr>
    <tr>
        <td><code>SymbolsVersion</code><br/>Version</td>
        <td>(Optional) Specify the version parameter to symstore.exe.  The default is $(Build.BuildNumber).</td>
    </tr>
    <tr>
        <td><code>SymbolsArtifactName</code><br/>Artifact name</td>
        <td>(Optional) Specify the artifact name to use for the Symbols artifact.  The default is Symbols_$(BuildConfiguration). <br/>Default value: Symbols_$(BuildConfiguration)</td>
    </tr>
</table>

For more information about the different types of tasks and their uses, see [Task control options](../../process/tasks.md#controloptions).

> [!IMPORTANT]
> To delete symbols that were published using the *Index Sources & Publish Symbols* task, you must first delete the build that generated those symbols. This can be accomplished by using [retention policies](../build/ci-build-git.md#use-retention-policies-to-clean-up-your-completed-builds) or by manually [deleting the run](../policies/retention.md#delete-a-run).


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
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

[Symbol Server and Symbol Stores](/windows/win32/debug/symbol-servers-and-symbol-stores)

[SymStore](/windows-hardware/drivers/debugger/symstore)

[Use the Microsoft Symbol Server to obtain debug symbol files](/windows/win32/dxtecharts/debugging-with-symbols)

[The Srcsrv.ini File](/windows-hardware/drivers/debugger/the-srcsrv-ini-file)

[Source Server](/windows/win32/debug/source-server-and-source-indexing)

[Source Indexing and Symbol Servers: A Guide to Easier Debugging](https://www.codeproject.com/Articles/115125/Source-Indexing-and-Symbol-Servers-A-Guide-to-Easi)

[!INCLUDE [temp](../../includes/qa-agents.md)]

### How long are Symbols retained?

When symbols are published to Azure Pipelines they are associated with a build. When the build is deleted either manually or due to retention policy then the symbols are also deleted. If you want to retain the symbols indefinitely then you should mark the build as Retain Indefinitely.

<!-- ENDSECTION -->