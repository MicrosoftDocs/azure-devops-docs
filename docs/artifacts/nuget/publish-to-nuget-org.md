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

NuGet.org is the public package repository for .NET that enables developers to share reusable code. A NuGet package is a compressed file with a `.nupkg` extension that contains compiled code and related metadata that can be reused in other projects. Publishing your package to NuGet.org makes it available to developers worldwide.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Visual Studio & .NET**   | - [Visual Studio](https://visualstudio.microsoft.com) with a .NET workload.<br> - The latest [.NET SDK](https://dotnet.microsoft.com/download). |
| **NuGet.org**      | - A free [NuGet.org account](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) | 

## Create a project

You can use an existing .NET project to build and generate a NuGet package, or create a new class library project for this tutorial:

1. In Visual Studio, select **File** > **New** > **Project**.
1. Select the **Class Library (.NET Standard)** template, and then select **Next**.
1. Enter a name for your project and solution, choose a local folder, and then select **Create**.
    
    :::image type="content" source="media/class-library-project.png" alt-text="Create a class library project":::

The default class library template is sufficient to create a NuGet package, so this tutorial uses the generated project without additional code changes.

## Set up and generate a package

1. In **Solution Explorer**, right-click your project, and then select **Properties** > **Package**.

1. Enter your package details, and make sure your **Package id** is unique so it doesn't conflict with existing packages on NuGet.org. A common naming pattern is `Company.Product.Feature`. To generate the package each time you build the project, select **Generate NuGet package on build**.

    :::image type="content" source="media/package-properties.png" alt-text="Configure package properties":::

1. In **Solution Explorer**, right-click your project, and then select **Pack** to generate the `.nupkg` file.

    :::image type="content" source="media/pack-package.png" alt-text="Generate package":::

1. Check the status of the pack command in the output window.

    :::image type="content" source="media/pack-output.png" alt-text="Pack output":::

## Generate an API key

Now that we created our `nupkg` package, we are almost ready to publish it, but first we need to generate an API key to connect to the NuGet.org API.

1. Sign in to your [NuGet.org](https://www.nuget.org/users/account/LogOn?returnUrl=%2F) account or create one if you haven't.

1. Select your user name icon then select **API Keys**.

1. Select **Create** then enter a name for your key. Give your key a **Push new packages and package version** scope, and enter `*` in the glob pattern field to select all packages. Select **Create** when you are done.

    :::image type="content" source="media/create-api-key.png" alt-text="Create API key":::

1. Select **Copy** and save your API key in a secure location. We will need this key to publish our NuGet package.

    :::image type="content" source="media/api-key.png" alt-text="Copy API key":::

## Publish a package to NuGet.org

You can publish your package using the web UI, dotnet CLI, or nuget.exe CLI. We are going to focus on publishing packages by using the command line in this section. You will need the name of your package, an API key, and the source URL to do so.

### [dotnet CLI](#tab/dotnet/)

1. In an elevated command prompt, navigate to the folder containing your `nupkg` package.

1. Run the following command to publish your package to NuGet.org. Replace the placeholders with your package name and API key.

    ```Command
    dotnet nuget push <packageName> --api-key <APIKey> --source https://api.nuget.org/v3/index.json
    ```

1. The output of the previous command should look something like this.

    :::image type="content" source="media/package-published.png" alt-text="Publish package output":::

### [nuget.exe](#tab/nuget/)

1. In an elevated command prompt, navigate to the folder containing your `nupkg` package.

1. Run the following command to publish your package to NuGet.org. Replace the placeholders with your package name and API key.

    ```Command
    nuget push <packageName> <APIKey> -Source https://api.nuget.org/v3/index.json
    ```
1. The output of the previous command should look something like this.

    :::image type="content" source="media/package-published-nuget-exe.png" alt-text="Publish package output":::

---

## Related articles

- [Consume NuGet packages in Visual Studio](consume.md)
- [Get started with NuGet packages and Azure Artifacts](../get-started-nuget.md)
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)