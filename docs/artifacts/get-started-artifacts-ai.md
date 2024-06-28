---
title: Publish your first package to an Azure Artifacts feed
description: Learn how to publish your first package to your Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 06/21/2024
monikerRange: '>= azure-devops-2020'
---

# Publish your first package to an Azure Artifacts feed

Azure Artifacts enables developers to efficiently manage all their dependencies from a single feed. Feeds in Azure Artifacts serve as organizational repositories for storing, managing, and sharing your packages within your team, across organizations, or publicly on the internet. Azure Artifacts feeds support a wide range of package types, including NuGet, npm, Python, Maven, Cargo, and Universal Packages.

This article will guide you through the process of publishing your first package to an Azure Artifacts feed. You'll also have the option to leverage the power of GitHub Copilot to streamline this process and explore the capabilities of the GitHub Copilot Chat right from your Visual Studio Code interface. 

## Prerequisites

* Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

* Install the [.NET Core SDK](https://dotnet.microsoft.com/en-us/download).

* Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

* (Optional) [Set up GitHub Copilot and Visual Studio Code](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor?tool=vscode). A 30-day GitHub Copilot free trial is available if you haven't signed up yet.

## Create a feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed**.

1. Provide a descriptive **Name** for your feed and set its **Visibility** (who can view packages in your feed). Define the **Scope** of your feed, and if you  want to include packages from public sources, check the **Upstream sources** checkbox.

1. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-azure-devops.png" alt-text="Screenshot that shows how to create a new feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022 || azure-devops-2020"

1. Sign in to your Azure DevOps server, and then navigate to your project.

2. Select **Artifacts**, and then select **Create Feed**.

3. Provide a descriptive **Name** for your feed and set its **Visibility** (who can view packages in your feed). Define the **Scope** of your feed, and if you  want to include packages from public sources, check the **Upstream sources** checkbox.

::: moniker-end

::: moniker range="azure-devops-2022"

4. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-server-2022.png" alt-text="Screenshot that shows how to create a new feed in Azure DevOps Server 2022.":::

::: moniker-end

::: moniker range="azure-devops-2020"

4. Select **Create** when you're done.

    :::image type="content" source="media/create-new-feed-server-2020.png" alt-text="Screenshot that shows how to create a new feed in Azure DevOps Server 2020.":::

::: moniker-end

## Get the code

#### [With GitHub Copilot](#tab/githubcopilot/)

Before publishing a package to the feed we just created, let's ensure we pack our project and prepare a package for publishing. 

In this example, we will leverage GitHub copilot to guide us through creating a sample .Net Core class library, defining our package metadata, and generating a NuGet package from the command line.

You could also use GitHub Copilot to generate other types of projects such as npm or Python projects.

1. Open your Visual Studio Code and select the chat icon from the left navigation panel to open the GitHub Copilot Chat.

1. In the prompt box. ask GitHub copilot: "How do I create a .NET Core project and package it as a NuGet package?". GitHub Copilot's response might be something similar to the following:

    :::image type="content" source="media/create-project-github-copilot-response.png" alt-text="A screenshot that shows a response from GitHub Copilot Chat.":::

1. Follow the provided steps to generate your project, define your package ID and version, and pack your project.

You can also ask GitHub Copilot to explain your project structure using the `@workspace` command, which lets you interact with the files and folders in your current workspace.

> `@workspace` explain my app structure

:::image type="content" source="media/github-copilot-app-structure.png" alt-text="A screenshot that shows GitHub Copilot explaining workspace app structure.":::

Another useful method to understand new source code is to ask GitHub Copilot how specific files are related within the project. For example, you can ask how the *csproj* file is related to the *Class1.cs* file:

> #file:artifacts-github-copilot.csproj #file:Class1.cs how are these files related

:::image type="content" source="media/github-copilot-csproj-class-relation.png" alt-text="A screenshot that shows GitHub Copilot response in Visual Studio Code.":::

#### [Without GitHub Copilot](#tab/withoutgithubcopilot/)

Follow these steps to create a basic Class Library project from the command line, set up your package's metadata, and generate a NuGet package:

1. On your local machine, create a new folder and give it a name.

1. Open a command prompt window and navigate to the folder you just created.

1. Run the following command to create a new Class Library project:

    ```dotnetcli
    dotnet new classlib
    ```

1. Open your *csproj* file and add your package metadata within the `<PropertyGroup>` tag. Your file structure should resemble the following:

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

1. Run the following command to package your project and generate a *.nupkg* artifact. your NuGet package will be generated in the `bin\release` directory.

    ```dotnetcli
    dotnet pack
    ```
    
* * *

## Connect to a feed

::: moniker range="azure-devops"

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the **NuGet** section.

1. Follow the instructions in the **Project setup** to set up your *nuget.config* file. The structure of your file should look similar to this:

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

1. Follow the instructions in the **Project setup** section to configure your *nuget.config* file and connect to your feed.

    :::image type="content" source="media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot that shows how to connect to a feed with dotnet in Azure DevOps Server 2020 and 2022.":::

::: moniker-end

> [!TIP]
> You can ask GitHub Copilot, "how to add a new package source to an existing *nuget.config* file". Copilot will guide you through using the `nuget sources Add` command to add your new feed source URL to your *nuget.config* file.

## Publish your package

Now that we've created a feed, set up our project, packed our package, configured our *nuget.config* file, and connected to our feed, we're ready to publish our first package. Run the following command from your project directory to publish your package. The ApiKey is required, but you can use any string value when publishing to an Azure Artifacts feed.

```dotnetcli
dotnet nuget push --source <FEED_NAME> --api-key az <PACKAGE_PATH>
```

## Next steps

> [!div class="nextstepaction"]
> [Monitor Artifacts storage](artifact-storage.md)
> [Share packages publicly](tutorials/share-packages-publicly.md)
> [Manage permissions](feeds/feed-permissions.md)
