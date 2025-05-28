---
title: Publish symbols for debugging
description: How to publish symbols to Azure Artifacts symbol server and file shares using Azure Pipelines
ms.assetid: 8794A5F8-B646-4E2F-A426-47CC62ABFF5D
ms.date: 09/22/2023
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish symbols with Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

With Azure Pipelines, you can publish your symbols to Azure Artifacts symbol server using the *Index sources and publish symbols* task. You can use the debugger to connect and automatically retrieve the correct symbol files without knowing product names, build numbers, or package names. Using Azure Pipelines, you can also publish your symbols to files shares and portable PDBs.

> [!NOTE]
> The [Index sources and publish symbols](/azure/devops/pipelines/tasks/reference/publish-symbols-v2) task is not supported in release pipelines.

## Publish symbols to Azure Artifacts symbol server

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline. 

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

1. Fill out the required fields as follows:

    - **Task version**: **2.\\***.

    - **Display name**: task display name.

    - **Path to symbols folder**: path to the folder hosting the symbol files.

    - **Search pattern**: the pattern used to locate the *.pdb* files in the folder you've designated under *Path to symbols folder*. Single-folder wildcard (`*`) and recursive wildcards (`**`) are both supported. Example: ***\bin\**\*.pdb*: will search for all *.pdb* files within all subdirectories named *bin*.

    - **Index sources**: indicates whether to inject source server information into the PDB files.

    - **Publish symbols**: indicates whether to publish the symbol files. 
        - **Symbol server type**: select **Symbol Server in this organization/collection (requires Azure Artifacts)** to publish your symbols to Azure Artifacts symbol server.

    - **Verbose logging**: include more information in your logs.

  :::image type="content" source="media/publish-to-symbol-server.png" alt-text="Screenshot showing how to configure the index sources and publish symbols task to publish symbols to Azure Artifacts symbol server.":::

# [YAML](#tab/yaml)

To publish your symbols to Azure Artifacts symbol server add the following snippet to your YAML pipeline:

```yml
- task: PublishSymbols@2
  inputs:
    SymbolsFolder: '$(Build.SourcesDirectory)'
    SearchPattern: '**/bin/**/*.pdb'
    IndexSources: true
    PublishSymbols: true
    SymbolServerType: 'TeamServices' 
    SymbolExpirationInDays: '36530'
    IndexableFileFormats: 'Default'
    DetailedLog: true
    SymbolsArtifactName: 'Symbols_$(BuildConfiguration)'
```

---

## Publish symbols to a file share

Aside from Azure Artifacts symbol server, you can also publish your symbols to a file share using the *Index Sources and Publish Symbols* task.

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline. 

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

1. Fill out the required fields as follows:

    - **Task version**: **2.\\***.

    - **Display name**: task display name.

    - **Path to symbols folder**: path to the folder hosting the symbol files.

    - **Search pattern**: the pattern used to locate the *.pdb* files in the folder you've designated under *Path to symbols folder*.

    - **Index sources**: indicates whether to inject source server information into the PDB files.

    - **Publish symbols**: indicates whether to publish the symbol files. 
        - **Symbol server type**: select **File share** to publish your symbols to a file share.
        - **Path to publish symbols**: the file share that will host your symbols.

    - **Verbose logging**: check to include more information in your logs.

    :::image type="content" source="media/publish-to-file-share.png" alt-text="Screenshot showing how to configure the index sources and publish symbols task to publish symbols to a file share.":::

# [YAML](#tab/yaml)

To publish your symbols to a file share add the following snippet to your YAML pipeline:

```yml
- task: PublishSymbols@2
  inputs:
    SymbolsFolder: '$(Build.SourcesDirectory)'
    SearchPattern: '**/bin/**/*.pdb'
    IndexSources: true
    PublishSymbols: true
    SymbolServerType: 'FileShare' 
    SymbolsPath: '\\server\shareName'
```

---

## Publish portable PDBs to Azure Artifacts symbol server

Portable PDBs are symbol files that can be created and used on all platforms unlike the traditional PDBs which are used on Windows only. For portable PDBs, the build does the indexing, but you still need to use the **Index Sources and Publish Symbols** task to publish your symbols.

#### Use Source Link in .NET projects

Source Link is a set of tools that allow developers to debug their source code by mapping from the .NET assemblies back to the source code. Check out the [dotnet/sourcelink](https://github.com/dotnet/sourcelink) GitHub repository to learn about the different packages included.

- For projects hosted on GitHub, add the `Microsoft.SourceLink.GitHub` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure Repos (former Visual Studio Team Services), add the `Microsoft.SourceLink.AzureRepos.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureRepos.Git" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure DevOps Server (former Team Foundation Server), add the `Microsoft.SourceLink.AzureDevOpsServer.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureDevOpsServer.Git" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

#### Set up the publish task

The Index Sources & Publish Symbols task is used to index your source code and publish your symbols to Azure Artifacts symbols server and file shares. Because we're using **Source Link**, we'll have to **disable indexing** in the publish task.

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline, and then select **Edit** to modify your pipeline. 

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

1. Fill out the required fields and select *Symbol Server* for the **Symbol server type**. Make sure you uncheck **Index sources** to disable indexing. 

    :::image type="content" source="media/publish-to-symbol-server-indexing-disabled.png" alt-text="A screenshot showing how to configure the publish task to publish portable PDBs to Azure Artifacts symbol server.":::

# [YAML](#tab/yaml)

To publish your portable PDBs to Azure Artifacts symbol server add the following snippet to your YAML pipeline:

```yml
- task: PublishSymbols@2
  inputs:
    SymbolsFolder: '$(Build.SourcesDirectory)'
    SearchPattern: '**/bin/**/*.pdb'
    IndexSources: false
    PublishSymbols: true
    SymbolServerType: 'TeamServices' 
    SymbolExpirationInDays: '36530'
    IndexableFileFormats: 'Default'
    DetailedLog: true
    SymbolsArtifactName: 'Symbols_$(BuildConfiguration)'
```

---

> [!IMPORTANT]
> To delete symbols published via the *Index Sources & Publish Symbols* task, you must first delete the build that generated those symbols. This can be accomplished by using [retention policies](../policies/retention.md) or by manually [deleting the run](../policies/retention.md#delete-a-run).

## Set up Visual Studio

> [!NOTE]
> Visual Studio for Mac does not support debugging using symbol servers. 

Before starting to consume our symbols from Azure Artifacts symbol server, let's make sure that Visual Studio is set up properly:

1. In Visual Studio, select **Tools** then **Options**.

1. Select **Symbols** from the **Debugging** menu.

1. Select the `+` sign to add a new symbol server location.

    :::image type="content" source="../../artifacts/symbols/media/vs-symbols-location.png" alt-text="Screenshot showing how to add a new symbol server location.":::

1. A new dialog box will appear, select your account from the dropdown menu, and then select the organization that you wish to connect to. Select **Connect** when you're done.

1. Select **General** from the same **Debugging** section. Scroll down and check **Enable Source Link support** to enable support for portable PDBs.

    :::image type="content" source="../../artifacts/symbols/media/enable-source-link-support.png" alt-text="A screenshot showing how to enable source link support in Visual studio.":::

> [!NOTE]
> Checking the **Enable source server support** option allows you to use [Source Server](/visualstudio/debugger/general-debugging-options-dialog-box) in cases where the source code isn't available locally or the symbol file does not match the source code. If you want to enable debugging for third-party source code, deselect the **Enable Just My Code** checkbox.

## FAQs

##### Q: What is the duration for which symbols are retained?

A: A symbol file has the same retention period as the build that generated it. When you delete a build either manually or using retention policies, the symbols that were generated by that build will be deleted as well.

##### Q: Can I use source indexing on a portable PDB generated from a .NET Core assembly?

A: This is not possible at the moment. Source indexing is not currently supported for portable PDBs. The recommended approach is to configure your build to do the indexing.

## Related articles

- [Debug with Visual Studio](../../artifacts/symbols/debug-with-symbols-visual-studio.md).
- [Debug with WinDbg](../../artifacts/symbols/debug-with-symbols-windbg.md).
- [Configure retention policies](../policies/retention.md).
