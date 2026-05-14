---
title: Publish packages to NuGet.org
description: Learn how to publish NuGet packages to NuGet.org using the dotnet CLI.
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.topic: tutorial
ms.date: 05/13/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Publish packages to NuGet.org

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

NuGet.org is the public package repository for .NET that enables developers to share reusable code. A NuGet package is a compressed file with a `.nupkg` extension that contains compiled code and related metadata that you can reuse in other projects. When you publish your package to NuGet.org, you make it available to developers worldwide.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Visual Studio & .NET**   | - [Visual Studio](https://visualstudio.microsoft.com) with a .NET workload.<br> - The latest [.NET SDK](https://dotnet.microsoft.com/download). |
| **NuGet.org**      | - A free [NuGet.org account](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) | 

## Create a project

You can use an existing .NET project to build and generate a NuGet package, or create a new class library project for this tutorial:

1. In Visual Studio, select **File** > **New** > **Project**.

1. Select the **Class Library template, and then select **Next**.

1. Enter a name for your project and solution, choose a local folder, and then select **Next**.

1. Select your **Framework**, then select **Create** when you're ready.
    
The default class library template is sufficient to create a NuGet package, so this tutorial uses the generated project without additional code changes.

## Set up and generate a package

1. In **Solution Explorer**, right-click your project, and then select **Properties** > **Package**.

1. Enter your package details, and make sure your **Package id** is unique so it doesn't conflict with existing packages on NuGet.org. A common naming pattern is `Company.Product.Feature`. To generate the package each time you build the project, select **Generate NuGet package on build**.

1. In **Solution Explorer**, right-click your project, and then select **Pack** to generate the `.nupkg` file.

1. Check the status of the pack command in the output window.

## Generate an API key

Now that you've created your `.nupkg` package, generate an API key so you can publish it to NuGet.org.

1. Sign in to your [NuGet.org](https://www.nuget.org/users/account/LogOn?returnUrl=%2F) account or create one if you haven't.

1. Select your user icon, and then select **API Keys**.

1. Select **Create**, enter a name for the key, set the scope to **Push new packages and package versions**, and enter `*` in the glob pattern to allow all packages. When you're done, select **Create**.

    :::image type="content" source="media/create-api-key.png" alt-text="Screenshot of the NuGet.org Create API key page with scope and package pattern fields configured for package publishing.":::

1. Select **Copy**, and store the API key in a secure location. You use this key when you publish the package.

    :::image type="content" source="media/api-key.png" alt-text="Screenshot of NuGet.org showing the generated API key and the Copy action used to save it securely.":::

## Publish a package to NuGet.org

You can publish your package by using the NuGet.org web UI, the dotnet CLI, or nuget.exe. This tutorial uses the dotnet CLI. To publish, you need the package file name, your API key, and the NuGet.org source URL.

1. In an command prompt window, navigate to the folder that contains your `.nupkg` file.

1. Run the following command to publish the package to NuGet.org. Replace the placeholders with your package file name and API key.

    ```Command
    dotnet nuget push <packageName> --api-key <APIKey> --source https://api.nuget.org/v3/index.json
    ```

1. Verify that the command output indicates the package was pushed successfully.

    :::image type="content" source="media/package-published.png" alt-text="Screenshot of command prompt output confirming the dotnet nuget push command successfully published the package.":::

## Related content

- [Publish packages to Azure Artifacts feeds](dotnet-exe.md)

- [Restore packages from a feed](restore-nuget-packages-dotnet.md)

- [Publish packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)