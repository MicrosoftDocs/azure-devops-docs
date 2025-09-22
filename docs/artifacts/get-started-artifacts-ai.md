---
title: Publish your first package to an Azure Artifacts feed - Copilot
description: Learn how to publish your first package to an Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 08/08/2025
ms.update-cycle: 180-days
ms.collection: ce-skilling-ai-copilot
monikerRange: '>= azure-devops-2020'
---

# Publish your first package to an Azure Artifacts feed

Azure Artifacts enables developers to efficiently manage all their dependencies from a single feed. Feeds in Azure Artifacts serve as organizational repositories for storing, managing, and sharing packages whether within a team, across organizations, or publicly on the internet. Azure Artifacts supports a wide range of package types, including NuGet, npm, Python, Maven, Cargo, and Universal Packages.

This article walks you through publishing your first NuGet package to an Azure Artifacts feed. Optionally, you can follow the instructions to use GitHub Copilot to help set up your project and prepare your package for publishing.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../organizations/projects/create-project.md).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Donwload and install the [latest NuGet version](https://www.nuget.org/downloads). |
| **GitHub Copilot** (Optional)  | - [Set up GitHub Copilot and Visual Studio Code](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor?tool=vscode). A 30-day GitHub Copilot free trial is available if you haven't signed up yet. |

## Create a feed

If you already have a feed, you can skip this section. Otherwise, follow the steps below to create a new feed in Azure Artifacts:

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a descriptive **Name** for your feed and set its **Visibility** to define who can view packages in your feed. Define the **Scope** of your feed, and check the **Upstream sources** checkbox if you want to include packages from public sources.

1. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-azure-devops.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Artifacts**, and then select **Create Feed**.

3. Provide a descriptive **Name** for your feed and set its **Visibility** to define who can view packages in your feed. Define the **Scope** of your feed, and check the **Upstream sources** checkbox if you want to include packages from public sources.

::: moniker-end

::: moniker range="azure-devops-2022"

4. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-server-2022.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Server 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

4. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-server-2020.png" alt-text="A screenshot displaying how to create a new feed in Azure DevOps Server 2020.":::

::: moniker-end

## Prepare your package

In this example, you'll use a sample .NET Core Class Library and set up your package metadata before building the project and creating a NuGet package ready for publishing to your feed. If you don't have a project yet, follow the instructions in this guide to [Create a .NET class library using Visual Studio Code](/dotnet/core/tutorials/library-with-visual-studio-code).

#### [Without GitHub Copilot](#tab/withoutgithubcopilot/)

1. Open your project in Visual Studio Code, and then select your *csproj* file. Add your package metadata within the `<PropertyGroup>` tag. Your file should resemble the following:

    ```xml
    <Project Sdk="Microsoft.NET.Sdk">
    
      <PropertyGroup>
        <TargetFramework>net8.0</TargetFramework>
        <RootNamespace>demo_class_library</RootNamespace>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>

        <PackageId>YOUR_PACKAGE_NAME</PackageId>
        <Version>YOUR_PACKAGE_VERSION</Version>
        <Authors>YOUR_NAME</Authors>
        <Company>YOUR_COMPANY</Company>

      </PropertyGroup>
    
    </Project>
    ```

1. Run the following command in your project directory to build your project and create a *.nupkg* package. Your package will be in the `bin\release` folder.

    ```dotnetcli
    dotnet pack
    ```

#### [With GitHub Copilot](#tab/githubcopilot/)

The following example walks you through using GitHub Copilot to set up your package metada and prepare your package for publishing.

1. Open your project in Visual Studio Code, and select the *csproj* file from the *Explorer* to open it.

1. Select the chat icon at the top to open GitHub Copilot Chat. Your current file context should display the *.csproj* file.

1. In the GitHub Copilot prompt box, ask GitHub copilot to add your package metada. You can use the following prompt:

    ```
    Add the following package metadata to my csproj file:
    PackageId: demoNuGetPackage
    Version: 1.0.0
    Authors: user123
    Company: FabrikamFiber
    ```

    :::image type="content" source="media/add-package-metadata-github-copilot.png" alt-text="A screenshot displaying how to add package metada using GitHub Copilot in Visual Studio Code.":::

1. After a few seconds, GitHub Copilot will confirm that the package metadata has been added to your *csproj* file.

    :::image type="content" source="media/package-metadata-confirmation.png" alt-text="A screenshot showing GitHub Copilot confirming successful addition of the package metadata.":::

1. In the GitHub Copilot prompt box, ask copilot to build your project and generate the NuGet package. When prompted for confirmation, select **Continue**.

    :::image type="content" source="media/build-project-github-copilot.png" alt-text="A screenshot showing prompt asking for confirmation to build the project.":::

1. Once build is successful, GitHub Copilot will prompt you again to confirm generating the NuGet package. Select **Continue** to proceed.

    :::image type="content" source="media/generate-package-github-copilot.png" alt-text="A screenshot showing prompt asking for confirmation to generatethe NuGet package.":::

1. After completion, you’ll see a confirmation that the package was created successfully, including the metadata and where the package is saved locally.

    :::image type="content" source="media/package-created-confirmation.png" alt-text="A screenshot showing GitHub Copilot confirming successful creation of the NuGet package.":::

* * *

## Connect to a feed

Follow the steps below to set up your project and connect to your Azure Artifacts feed. Make sure you've installed the Azure Artifacts credential provider and the latest version of NuGet as outlined in the prerequisites.

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the **NuGet** section.

1. Follow the instructions in the **Project setup** to set up your *nuget.config* file. The structure of your file should resemble one of the following:

    - **Project-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

    - **Organization-scoped feed**:

        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to Feed**, and then select **dotnet** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to set up your *nuget.config* file.

    :::image type="content" source="media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot that shows how to connect to a feed in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

## Publish your package

Run the following command from your project directory to publish the package to your Azure Artifacts feed. The `--api-key` parameter is required, but you can use any string value when publishing to Azure Artifacts.

```dotnetcli
dotnet nuget push --source <FEED_NAME> --api-key <ANY_STRING> <PACKAGE_PATH>
```

## Next steps

> [!div class="nextstepaction"]
> [Monitor Artifacts storage](artifact-storage.md)
> [Azure Artifacts best practices](concepts/best-practices.md) 
> [Share packages publicly](tutorials/share-packages-publicly.md)