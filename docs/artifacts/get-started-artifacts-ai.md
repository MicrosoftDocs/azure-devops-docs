---
title: Publish your first package to an Azure artifacts feed
description: Learn how to publish your first package to your Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 06/21/2024
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish your first package to an Azure artifacts feed

With Azure Artifacts, you can manage your dependencies and store various package types from multiple sources in a single feed. In this article, we will guide you through the process of publishing your first package to an Azure Artifacts feed. You will also have the option to leverage the power of GitHub Copilot to streamline this process and explore the capabilities of the GitHub Copilot Chat right from your Visual Studio Code interface. 

## Prerequisites

* Create an Azure DevOps [organization](../organizations/accounts/create-organization.md) and a [project](../organizations/projects/create-project.md#create-a-project) if you haven't already.

* Install the [.Net Core SDK](https://dotnet.microsoft.com/en-us/download).

* Install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

* A [GitHub Copilot Subscription](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor?tool=vscode). Sign up for a 30-day free trial if you haven't already.

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Project setup

Before publishing a package to the feed we just created, let's ensure we pack our application and prepare a package for publishing. In this example, we will leverage GitHub copilot to guide us through creating a sample .Net Core class library, defining our package metadata, and generating a NuGet package from the command line.

1. Open your Visual Studio Code and select the chat icon from the left navigation panel to open the GitHub Copilot Chat.

1. In the prompt box. ask GitHub copilot: "How do I create a .NET Core project and package it as a NuGet package?". GitHub Copilot's response might be something similar to the following:

    :::image type="content" source="media/create-project-github-copilot-response.png" alt-text="A screenshot that shows a response from GitHub Copilot Chat.":::

1. Follow the provided steps to generate your project, define your package ID and version, and pack your project.

You can ask GitHub Copilot to explain the structure of your project, and it will provide an overview of your application's structure and the roles of your files. Make sure you have opened your project's folder in Visual Studio Code to use the `@workspace` command.  This command allows you to interact with the files and folders within your current workspace. When you open a folder in Visual Studio Code, that folder and its contents become your workspace.

> `@workspace` explain my app structure

You can also explore how specific files are related in your project. For example, you can ask how the *csproj* file is related to the *Class1.cs* file:

> #file:artifacts-github-copilot.csproj #file:Class1.cs how are these files related

GitHub Copilot's response would be something like this:

```
The artifacts-github-copilot.csproj file is the project file for your .NET application. It contains the configuration and settings for your project, such as the target framework, package ID, version, authors, company, and root namespace.

The Class1.cs file is a source code file in your project. It contains the definition for a class named Class1.

The relationship between these two files is that the artifacts-github-copilot.csproj file references the Class1.cs file as part of the project. When the project is built, the code in Class1.cs is compiled into a .NET assembly as specified by the settings in the artifacts-github-copilot.csproj file.

The RootNamespace property in the artifacts-github-copilot.csproj file is set to artifacts_github_copilot. This means that unless otherwise specified, all classes in the project, including Class1, will be under the artifacts_github_copilot namespace.
```

## Connect to a feed

::: moniker range="azure-devops"

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **dotnet** from the **NuGet** section.

    :::image type="content" source="media/dotnet-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed with dotnet.":::

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

    :::image type="content" source="media/connect-to-feed-dotnet-server-2020-and-2022.png" alt-text="A screenshot showing how to connect to a feed with dotnet in Azure DevOps Server 2020 and 2022.":::

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
> [Publish and restore packages from the command line](nuget/publish.md)
> [Monitor Artifacts storage consumption](artifact-storage.md)
> [Manage permissions](feeds/feed-permissions.md)
