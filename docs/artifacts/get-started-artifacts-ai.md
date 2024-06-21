---
title: Publish your first package to an Azure artifacts feed
description: Learn how to publish your first package to your Azure Artifacts feed.
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 06/21/2024
monikerRange: '<= azure-devops'
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