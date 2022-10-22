---
title: Index Sources & Publish Symbols
ms.custom: seodec18
description: Use the index Sources & Publish Symbols task in Azure Pipelines
ms.topic: reference
ms.assetid: BD27A4F7-F870-4D90-AD3F-C74E2A94538B
ms.author: shashban
author: shashban
ms.date: 06/17/2022
monikerRange: '<= azure-devops'
---


# Index Sources & Publish Symbols task

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use this task to index your source code and publish your symbols to a file share or Azure Artifacts symbol server.

Indexing your source code allows you to use your symbol files to debug your application on a machine other than the one you used to build your application. For example, you can debug an application built by a build agent from a dev machine that does not have the source code.

Symbol servers enables your debugger to automatically retrieve the correct symbol files without knowing product names, build numbers, or package names.

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
            <p>(Optional) Indicates whether to inject source server information into PDB files. This option is only supported on Windows agents.</p><br/>Default value: true
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
        <td><code>SymbolExpirationInDays</code><br/>Symbol Expiration (in days)</td>
        <td>
            The number of days that symbols should be retained. Required when PublishSymbols = true && SymbolServerType = TeamServices. <br/>Default value: 36530
        </td>
    </tr>
</table>

### Advanced options

<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td><code>IndexableFileFormats</code><br/>Symbol file formats to publish</td>
        <td>
            Which debug formats to publish to the symbol server. Required when PublishSymbols = true && SymbolServerType = TeamServices. Options: Default, Pdb, SourceMap, All. <br/>Default value: Default
        </td>
    </tr>
    <tr>
        <td><code>DetailedLog</code><br/>Verbose logging</td>
        <td>
            (Optional) Enables additional log details. <br/>Default value: true
        </td>
    </tr>
    <tr>
        <td><code>TreatNotIndexedAsWarning</code><br/>Warn if not indexed</td>
        <td>
            <p>(Optional) Indicates whether to warn if sources are not indexed for a PDB file. Otherwise the messages are logged as normal output. <br/>
                A common cause of sources to not be indexed are when your solution depends on binaries that it doesn&#39;t build.</p> 
            <p>Even if you don&#39;t select this option, the messages are written in log.
            </p><br/>Default value: false
        </td>
    </tr>
    <tr>
        <td><code>UseNetCoreClientTool</code><br/>Use version of tool that supports Linux symbols</td>
        <td>(Optional) Uses a version of the symbol upload tool that supports DWARF and ELF files. This option only matters on Windows agents. On non-Windows agents, the version of the symbol upload tool that supports DWARF and ELF files will always be used.<br/>Default value: false
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

> [!IMPORTANT]
> To delete symbols that were published using the *Index Sources & Publish Symbols* task, you must first delete the build that generated those symbols. This can be accomplished by using [retention policies](../../build/ci-build-git.md#use-retention-policies-to-clean-up-your-completed-builds) or by manually [deleting the run](../../policies/retention.md#delete-a-run).

## FAQ

### Q: How does indexing work?

A: By choosing to index the sources, an extra section will be injected into the PDB files. PDB files normally contain references to the local source file paths only E.g: *C:\BuildAgent\_work\1\src\MyApp\Program.cs*. The extra section injected into the PDB file contains mapping instructions for debuggers. The mapping information indicates how to retrieve the server item corresponding to each local path.

 The Visual Studio debugger will use the mapping information to retrieve the source file from the server. An actual command to retrieve the source file is included in the mapping information. Example:

```command
tf.exe git view /collection:http://SERVER:8080/tfs/DefaultCollection /teamproject:"93fc2e4d-0f0f-4e40-9825-01326191395d" /repository:"647ed0e6-43d2-4e3d-b8bf-2885476e9c44" /commitId:3a9910862e22f442cd56ff280b43dd544d1ee8c9 /path:"/MyApp/Program.cs" /output:"C:\Users\username\AppData\Local\SOURCE~1\TFS_COMMIT\3a991086\MyApp\Program.cs" /applyfilters
```

### Q: Can I use source indexing on a portable PDB created from a .NET Core assembly?

A: No, but you can use [Source Link](/dotnet/standard/library-guidance/sourcelink) instead.

### Q: How long are Symbols retained?

A: Symbols are associated with the build that published to Azure Pipelines they are associated with a build. When the build is deleted either manually or using retention policies, the symbols are also deleted. If you want to retain the symbols indefinitely, mark the build as **Retain Indefinitely**.

## Related articles

- [Publish symbols for debugging](../../artifacts/symbols.md)

- [Debug with Visual Studio](../../../artifacts/symbols/debug-with-symbols-visual-studio.md)

- [Debug with WinDbg](../../../artifacts/symbols/debug-with-symbols-windbg.md)
