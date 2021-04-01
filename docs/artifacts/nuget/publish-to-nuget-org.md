---
title: Publish packages to NuGet.org
description: How to publish packages to NuGet.org
ms.technology: devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 4/01/2021
monikerRange: '>= tfs-2017'
---

# Publish packages to NuGet.org

NuGet.org is a package manager that enables developers to share reusable code. A NuGet package is a compressed file with `.nupkg` extension that contains compiled code that can be consumed in other in other projects. Packages hosted in NuGet.org are available to all developers around the world.

## Prerequisites

- Any version of [Visual Studio 2019](https://visualstudio.microsoft.com) and the .NET Core workload.
- `dotnet` CLI. If you don't have it already, install the [.NET Core SDK](https://dotnet.microsoft.com/download/).
- Register for a free account on [nuget.org](/nuget/nuget-org/individual-accounts#add-a-new-individual-account) if you don't have one already.

## Create a project

You can use your own .NET project to build and generate a NuGet package, or create a new simple .NET class library as follows:

1. In Visual Studio, select **File**, **New**, then **Project**.
1. Select the **Class Library (.NET Standard)** template and select **Next**.
1. Name your project and you solution then select a location to save the project locally. Select **Create** when you are done.
    :::image type="content" source="media/class-library-project.png" alt-text="Create a class library project":::

The template class library is sufficient to create a NuGet package so for the purpose of this tutorial we will use the existing template and we won't be writing any additional code.
