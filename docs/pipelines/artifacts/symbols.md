---
title: Publish symbols with Azure Pipelines
ms.custom: seodec18, contperf-fy22q1
description: How to publish symbols to Azure Artifacts symbol server
ms.assetid: 8794A5F8-B646-4E2F-A426-47CC62ABFF5D
ms.date: 04/08/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish symbols for debugging

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can publish your symbols to Azure Artifacts symbol server using the *Index sources and publish symbols* task. You can use the debugger to connect and automatically retrieve the correct symbol files without knowing product names, build numbers, or package names. Using Azure Pipelines, you can also publish your symbols to files shares and portable PDBs.

> [!NOTE]
> The [Index sources and publish symbols](/azure/devops/pipelines/tasks/reference/publish-symbols-v2) task is not supported in release pipelines.

::: moniker range="azure-devops"

## Publish symbols to Azure Artifacts symbol server

To publish your symbols to Azure Artifacts symbols server, you can use the *Index Sources & Publish Symbols* task.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-symbol-server.png" alt-text="Screenshot showing the index sources and publish symbols task to publish symbols to Azure Artifacts symbol server":::

- **Task version**: **2.\\***.

- **Display name**: task display name.

- **Path to symbols folder**: path to the folder hosting the symbol files.

- **Search pattern**: the pattern used to find the pdb files in the folder that you specified in **Path to symbols folder**. Single-folder wildcard (`*`) and recursive wildcards (`**`) are supported. Example: ***\bin\**\*.pdb* searches for all .pdb files in all the *bin* subdirectories.

- **Index sources**: indicates whether to inject source server information into the PDB files.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **Symbol Server in this organization/collection (requires Azure Artifacts)** to publish your symbols to Azure Artifacts symbol server.

- **Verbose logging**: check to include more information in your logs.

::: moniker-end

## Publish symbols to a file share

Aside from Azure Artifacts symbol server, you can also publish your symbols to a file share using the *Index Sources and Publish Symbols* task.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-file-share.png" alt-text="Screenshot showing the index sources and publish symbols task to publish symbols to a file share":::

- **Task version**: **2.\\***.

- **Display name**: task display name.

- **Path to symbols folder**: path to the folder hosting the symbol files.

- **Search pattern**: the pattern used to find the pdb files in the folder that you specified in **Path to symbols folder**.

- **Index sources**: indicates whether to inject source server information into the PDB files.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **File share** to publish your symbols to a file share.
    - **Path to publish symbols**: the file share that will host your symbols.

- **Verbose logging**: check to include more information in your logs.

::: moniker range="azure-devops"

## Publish portable PDBs to Azure Artifacts symbol server

Portable PDBs are symbol files that can be created and used on all platforms unlike the traditional PDBs which are used on Windows only. For portable PDBs, the build does the indexing, but you still need to use the **Index Sources and Publish Symbols** task to publish your symbols.

### Use Source Link in .NET projects

Source link is a set of tools that allow developers to debug their source code by mapping from the .NET assemblies back to the source code. Check out the [dotnet/sourcelink](https://github.com/dotnet/sourcelink) GitHub repository to learn about the different packages included.

- For projects hosted on GitHub, add the `Microsoft.SourceLink.GitHub` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure Repos, add the `Microsoft.SourceLink.AzureRepos.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureRepos.Git" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure DevOps Server, add the `Microsoft.SourceLink.AzureDevOpsServer.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureDevOpsServer.Git" Version="1.1.1" PrivateAssets="All"/>
  </ItemGroup>
  ```

### Set up the publish task

The Index Sources & Publish Symbols task is used to index your source code and publish your symbols to Azure Artifacts symbols server. Because we are using Source Link, we will disable indexing in the publish task.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-symbol-server-indexing-disabled.png" alt-text="Screenshot showing how to configure the publish task to publish symbols to Azure Artifacts symbol server":::

- **Task version**: **2.\\***.

- **Index sources**: Uncheck to disable indexing. Source indexing in the publish task is not needed when using Source Link.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **Symbol Server in this organization/collection (requires Azure Artifacts)** to publish your symbols to Azure Artifacts symbol server.

> [!IMPORTANT]
> To delete symbols that were published using the *Index Sources & Publish Symbols* task, you must first delete the build that generated those symbols. This can be accomplished by using [retention policies](../build/ci-build-git.md#use-retention-policies-to-clean-up-your-completed-builds) or by manually [deleting the run](../policies/retention.md#delete-a-run).

::: moniker-end

## Set up Visual Studio

> [!NOTE]
> Visual Studio for Mac does not support provide support debugging using symbol servers. 

Before starting to consume our symbols from Azure Artifacts symbol server, let's make sure that Visual Studio is set up properly:

1. In Visual Studio, select **Tools** then **Options**.

1. Select **Symbols** from the **Debugging** menu.

1. Select the `+` sign to add a new symbol server location.

    :::image type="content" source="../../artifacts/symbols/media/vs-symbols-location.png" alt-text="Screenshot showing how to add a new symbol server location":::

1. A new dialog box will open, select your account from the dropdown menu, and then select the organization that you wish to connect to. Select **Connect** when you are done.

1. Select **General** from the same **Debugging** section. Scroll down and check **Enable Source Link support** to enable support for portable PDBs.

    :::image type="content" source="../../artifacts/symbols/media/enable-source-link-support.png" alt-text="Enable source link support":::

> [!NOTE]
> Checking the **Enable source server support** option enables you to use [Source Server](/visualstudio/debugger/general-debugging-options-dialog-box) when there is no source code on the local machine or the symbol file does not match the source code. If you want to enable third-party source code debugging, uncheck the **Enable Just My Code** checkbox.

## FAQs

### Q: What is the duration for which symbols are retained?

A: A symbol file has the same retention period as the build that generated it. When you delete a build either manually or using retention policies, the symbols that were generated by that build will be deleted as well.

### Q: Can I use source indexing on a portable PDB generated from a .NET Core assembly?

A: This is not possible at the moment. Source indexing is not currently supported for portable PDBs. The recommended approach is to configure your build to do the indexing.

## Related articles

- [Debug with Visual Studio](../../artifacts/symbols/debug-with-symbols-visual-studio.md).
- [Debug with WinDbg](../../artifacts/symbols/debug-with-symbols-windbg.md).
- [Configure retention policies](../policies/retention.md).
