---
title: Publish and consume symbols with Azure Artifacts
description: Publish and consume symbols using Index Sources & Publish Symbols task and Visual Studio
ms.technology: devops-artifacts
ms.assetid: 3cb56371-3ef2-4bd9-871b-ec6cfa93bedf
ms.date: 03/18/2021
ms.topic: conceptual
monikerRange: '>= tfs-2017'
---

# Publish and consume symbols

Symbols are PDB files that are created from source files during compilation. PDB files (Program database) contain mapping information to the source code and are used to debug application. Azure Artifacts offers a dedicated symbols server to publish your symbols. 

## Use Index Sources & Publish Symbols task

The Index Sources & Publish Symbols task is used to index your source code and publish your symbols to Azure Artifacts symbols server. To do so, add the **Index Sources & Publish Symbols** task to your build process, check the **Publish symbols** checkbox, and select the **Symbol Server in this account/collection** option from the dropdown.

:::image type="content" source="media/publish-symbols-task-classic.png" alt-text="Publish symbols path task":::

## Use Source Link in .NET projects

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

## Set up the build Pipeline

The next step is to modify the build pipeline to invoke Source Link during the build process. To do so, add `/p:SourceLinkCreate=true` to the **MSBuild arguments** field within the **Visual Studio Build** task.

:::image type="content" source="media/build-solution-task-classic.png" alt-text="MSBuild arguments in the build solution task":::

Select **Save & queue** to save and run your build pipeline when an agent becomes available.

## Set up Visual Studio

Once the build has been completed and the symbols published, it is time to make sure that everything is working properly. But first, we must ensure that Visual Studio is set up properly.

1. Select **Tools** then **Options**.

1. Under **Debugging**, select **Symbols**.

1. Select the `+` sign to add a new symbol file location. Then enter your URL.

    :::image type="content" source="media/vs-symbols-location.png" alt-text="Adding organization to the list of symbol locations":::

1. Select **General** under the same **Debugging** section. Scroll down and check **Enable Source Link support**.

    :::image type="content" source="media/enable-source-link-support.png" alt-text="Enable source link support":::

Things to keep in mind:

- **Enable Just My Code**: uncheck this to enable third-party source code debugging.

- **Enable source server support**: check this to enable support for Windows PDB files on symbol servers.

- **Enable Source Link support**: check this to enable support for portable PDB files.

## Set up verification

Now that Visual Studio is configured, it is time to attach the debugger to the process you want to debug. Once the debugger is attached Visual Studio will establish connection to the symbols server and attempt to locate the symbols.

The first time Visual Studio attempts to download the source, it will prompt the user for input:

:::image type="content" source="media/download-symbols-confirmation.png" alt-text="Download symbols from the server":::

Visual Studio will then download the file(s) needed and launch the code editor at a break point.

:::image type="content" source="media/debugging-in-visual-studio.png" alt-text="Debugging in Visual Studio":::

> [!TIP]
> When attaching to a process, you may need to uncheck the **Enable Just My Code** option in Visual studio. See [Enable or disable Just My Code](/visualstudio/debugger/just-my-code) for details.

## Related articles

- [Publish Symbols for Debugging](/azure/devops/pipelines/symbols/)
- [Build: Index & Publish Symbols](../../pipelines/tasks/build/index-sources-publish-symbols.md)
