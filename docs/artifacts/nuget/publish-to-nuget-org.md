---
title: Publish packages to NuGet.org
description: How to publish packages to NuGet.org
ms.technology: devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 4/01/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Publish packages to NuGet.org

NuGet.org is a package manager that enables developers to share reusable code. A NuGet package is a compressed file with `.nupkg` extension that contains compiled code that can be consumed in other projects. Packages hosted in NuGet.org are available to all developers around the world.

## Prerequisites

- Any version of [Visual Studio 2019](https://visualstudio.microsoft.com) and the .NET Core workload.
- `dotnet` CLI. If you don't have it already, install the [.NET Core SDK](https://dotnet.microsoft.com/download/).
- Register for a free account on [nuget.org](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) if you don't have one already.

## Create a project

You can use your own .NET project to build and generate a NuGet package, or create a new basic .NET class library as follows:

1. In Visual Studio, select **File**, **New**, then **Project**.
1. Select the **Class Library (.NET Standard)** template and select **Next**.
1. Name your project and your solution then select a location to save the project locally. Select **Create** when you are done.
    
    :::image type="content" source="media/class-library-project.png" alt-text="Create a class library project":::

The template class library is sufficient to create a NuGet package so for this tutorial we will use the existing template and we won't be writing any additional code.

## Set up and generate a package

1. Select your project from the solution explorer, right-click and select **properties** then **Package**.

1. Fill out the form and make sure that your **package id** is unique otherwise it may conflict with existing packages on NuGet.org. A common naming convention is something like: Company.Product.Feature. If you want to generate your package every time you build your project, select the **Generate NuGet package on build** checkbox.

    :::image type="content" source="media/package-properties.png" alt-text="Configure package properties":::

1. Select your project from the solution explorer, right-click then select **Pack** to generate your `.nupkg` package.

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