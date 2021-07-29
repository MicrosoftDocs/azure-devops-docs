---
title: Publish symbols for debugging
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Publish symbols to a symbol server for debugging using Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 8794A5F8-B646-4E2F-A426-47CC62ABFF5D
ms.date: 04/23/2020
monikerRange: '> tfs-2015'
"recommendations": "true"
---

# Publish symbols for debugging

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2015**

Azure Artifacts offers symbol servers to store your symbols. You can use the debugger to connect and automatically retrieve the correct symbol files without knowing product names, build numbers, or package names. Using Azure Pipelines, you can publish you symbols to Azure Artifacts symbols server, files shares, or portable PDBs.

## Publish symbols to Azure Artifacts symbol server

To publish your symbols to Azure Artifacts symbols server, you can use the *Index Sources & Publish Symbols* task in your pipeline.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-symbol-server.png" alt-text="Screenshot showing the index sources and publish symbols task to publish symbols to Azure Artifacts symbol server":::

::: moniker range=">= tfs-2018"
- **Task version**: select **2.\\***.
::: moniker-end

::: moniker range="<= tfs-2017"
- **Task version**: select **1.\\***.
::: moniker-end

- **Display name**: task display name.

- **Path to symbols folder**: path to the folder hosting the symbol files.

- **Search pattern**: the pattern used to find the pdb files in the folder that you specified in **Path to symbols folder**. Single-folder wildcard (`*`) and recursive wildcards (`**`) are supported. Example: `**\bin\**\*.pdb` searches for all .pdb files in all subdirectories named *bin*.

- **Index sources**: indicates whether to inject source server information into the PDB files.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **Symbol Server in this organization/collection (requires Azure Artifacts)** to publish your symbols to Azure Artifacts symbol server.

- **Verbose logging**: check to include more information in your logs.

## Publish symbols to a file share

Aside from Azure Artifacts symbol server, you can also publish your symbols to a file share using the *Index Sources and Publish Symbols* task in your pipeline.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-file-share.png" alt-text="Screenshot showing the index sources and publish symbols task to publish symbols to a file share":::

::: moniker range=">= tfs-2018"
- **Task version**: select **2.\\***.
::: moniker-end

::: moniker range="<= tfs-2017"
- **Task version**: select **1.\\***.
::: moniker-end

- **Display name**: task display name.

- **Path to symbols folder**: path to the folder hosting the symbol files.

- **Search pattern**: the pattern used to find the pdb files in the folder that you specified in **Path to symbols folder**.

- **Index sources**: indicates whether to inject source server information into the PDB files.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **File share** to publish your symbols to a file share.
    - **Path to publish symbols**: the file share that will host your symbols.

- **Verbose logging**: check to include more information in your logs.

## Publish portable PDBs to Azure Artifacts symbol server

Portable PDBs are symbol files that can be created and read on all platforms unlike the traditional PDBs which are Windows only. If you're using portable PDBs, you still need to use the **Index Sources and Publish Symbols** task to publish symbols. For portable PDBs, the build does the indexing, however you should use SourceLink to index the symbols as part of your pipeline.

### Use Source Link in .NET projects

Source link is a set of tools that allow developers to debug their source code by mapping from the .NET assemblies back to the source code. Check out the [dotnet/sourcelink](https://github.com/dotnet/sourcelink) GitHub repository to learn about the different packages included.

- For projects hosted on GitHub, add the `Microsoft.SourceLink.GitHub` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="1.0.0" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure Repos, add the `Microsoft.SourceLink.AzureRepos.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureRepos.Git" Version="1.0.0" PrivateAssets="All"/>
  </ItemGroup>
  ```

- For projects hosted on Azure DevOps Server, add the `Microsoft.SourceLink.AzureDevOpsServer.Git` package reference to your project file.

  ```xml
  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.AzureDevOpsServer.Git" Version="1.0.0" PrivateAssets="All"/>
  </ItemGroup>
  ```

### Set up the build task

The next step is to modify the build task in your pipeline to invoke Source Link during the build process.

1. From your pipeline definition, select the **Build solution** task or search and add the **Visual Studio build** task to your pipeline if you don't have it yet.
 
1. Add the following argument to the **MSBuild arguments** field.

    ```Argument
    /p:SourceLinkCreate=true
    ```

1. Select **Save & queue** when you are done.

    :::image type="content" source="../../artifacts/symbols/media/build-solution-task-classic.png" alt-text="MSBuild arguments in the build solution task":::


### Set up the publish task

The Index Sources & Publish Symbols task is used to index your source code and publish your symbols to Azure Artifacts symbols server. Because we are using the *Visual Studio build* task to index our source, we will disable indexing in the publish task.

1. From your pipeline definition, select `+` to add a new task.

1. Search for the **Index sources and publish symbols** task. Select **Add** to add it to your pipeline.

    :::image type="content" source="media/index-sources-publish-symbols.png" alt-text="Screenshot showing how to add the index sources and publish symbols to the current pipeline":::

1. Fill out the required fields as follows:

    :::image type="content" source="media/publish-to-symbol-server-indexing-disabled.png" alt-text="Screenshot showing how to configure the publish task to publish symbols to Azure Artifacts symbol server":::

::: moniker range=">= tfs-2018"
- **Task version**: select **2.\\***.
::: moniker-end

::: moniker range="<= tfs-2017"
- **Task version**: select **1.\\***.
::: moniker-end

- **Display name**: task display name.

- **Path to symbols folder**: path to the folder hosting the symbol files.

- **Search pattern**: the pattern used to find the pdb files in the folder that you specified in **Path to symbols folder**. 

- **Index sources**: Uncheck to disable indexing. Indexing is done during build. See the [previous step](#set-up-the-publish-task) for more details.

- **Publish symbols**: indicates whether to publish the symbol files. 
    - **Symbol server type**: select **Symbol Server in this organization/collection (requires Azure Artifacts)** to publish your symbols to Azure Artifacts symbol server.

- **Verbose logging**: check to include more information in your logs.

## Set up Visual Studio

Before starting to consume our symbols from Azure Artifacts symbol server, let's make sure that Visual Studio is set up properly:

1. In Visual Studio, select **Tools** then **Options**.

1. Select **Symbols** from the **Debugging** menu.

1. Select the `+` sign to add a new symbol server location.

    :::image type="content" source="../../artifacts/symbols/media/vs-symbols-location.png" alt-text="Screenshot showing how to add a new symbol server location":::

1. A new dialog box will open, select your account from the dropdown menu, and then select the organization that you wish to connect to. Select **Connect** when you are done.

1. Select **General** from the same **Debugging** section. Scroll down and check **Enable Source Link support** to enable support for portable PDBs.

    :::image type="content" source="../../artifacts/symbols/media/enable-source-link-support.png" alt-text="Enable source link support":::

> [!NOTE]
> Checking the **Enable source server support** option enables you to use [Source Server](/windows/win32/debug/source-server-and-source-indexing) when there is no source code on the local machine or the symbol file does not match the source code.
>
> If you want to enable third-party source code debugging, uncheck the **Enable Just My Code** checkbox.

<!-- 

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

-->

> [!IMPORTANT]
> To delete symbols that were published using the *Index Sources & Publish Symbols* task, you must first delete the build that generated those symbols. This can be accomplished by using [retention policies](../build/ci-build-git.md#use-retention-policies-to-clean-up-your-completed-builds)  or by manually [deleting the run](../policies/retention.md#delete-a-run).


## FAQs

### Q: How long symbols are retained for?

A: A symbol file has the same retention period as the build that generated it. When you delete a build either manually or using retention policies, the symbols that were generated by that build will be deleted as well.

### Q: Can I use source indexing on a portable PDB generated from a .NET Core assembly?

A: This is not possible at the moment. Source indexing is not currently supported for portable PDBs. The recommended approach is to configure your build to do the indexing.

## Related articles

- [Symbols overview](../../artifacts/concepts/symbols.md).
- [Debug with Visual Studio](../../artifacts/symbols/debug-with-symbols-visual-studio.md).
- [Debug with WinDbg](../../artifacts/symbols/debug-with-symbols-windbg.md).
- [Index Sources & Publish Symbols task](../tasks/build/index-sources-publish-symbols.md).
- [Configure retention policies](../policies/retention.md).
