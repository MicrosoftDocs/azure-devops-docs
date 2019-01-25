---
title: Set up a multi-developer NuGet environment
description: Set up the NuGet developer environment for Azure Artifacts in Azure DevOps Services or Team Foundation Server
ms.assetid: EA79E902-C679-4AA7-BE33-E865F593EB06
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2017'
---

# Set up a multi-developer NuGet environment

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

Using a package management system helps increase your team's velocity and decreases the amount of code duplication across your organization.
Multiple developers on a team need to coordinate where and how they access packages.
For example, developers will need a compatible NuGet client and credentials to authenticate to any Azure DevOps Services hosted feeds before they can restore or push packages.

Team leaders or architects can make it very simple for developers to get everything they need without having to do multiple downloads and find passwords and authentication tokens on team shares.
We've developed a set of tools and conventions for integrating Azure DevOps Services NuGet into your workflow.
The tools are shipped as a NuGet package called `Microsoft.VisualStudio.Services.NuGet.Bootstrap`, available on the public [NuGet Gallery](https://www.nuget.org/packages?q=Microsoft.VisualStudio.Services.NuGet.Bootstrap).
We also have an [example repository](https://github.com/Microsoft/vsts-nuget-sample) which demonstrates these tools.

## The bootstrapper package

The bootstrapper package takes care of several things for you:
* Ensures that each developer has a compatible version of nuget.exe and the Azure DevOps Services authentication extension in their environment
* Separates feed configuration from credential management so you don't have to share passwords among developers
* Allows build and continuous integration systems to seamlessly use the same configuration as individual developers

The bootstrapping tools work regardless of your version control system.
Both Git and TFVC are supported.

You aren't required to use this bootstrapping package in order to use Azure DevOps Services authenticated feeds.
It's intended to help you get going without having to write a lot of code or invest in an extensive engineering system.
Customers with unique needs can copy [the package](https://www.nuget.org/packages?q=Microsoft.VisualStudio.Services.NuGet.Bootstrap) and [example repo](https://github.com/Microsoft/vsts-nuget-sample), and modify them to fit in their engineering system.

### One-time setup

Perform the following steps one time in a repo containing your app's code.
Anyone with the authority to make solution-wide changes can follow these steps.

[!INCLUDE [vss-pm-bootstrap](../_shared/nuget/nuget-bootstrap.md)]

>[!NOTE]
>By default, the bootstrapper disables the public NuGet Gallery as a package source.
>Many customers use private feeds as a way to avoid dependencies on unknown or untrusted packages.
>If you depend on restoring packages from the public NuGet Gallery, edit `nuget.config` and uncomment the line pointing to 
>http://nuget.org (see [the section on conventions](#conventions) for more about `nuget.config`).

### Developer experience when using the bootstrapper package

The first time a developer enlists in a repo, they must run `init` in the root of the repo.
This will ensure that NuGet can connect to authenticated feeds with the developer's credentials.
For more about `init`, see [the section on conventions](#conventions).

At least once a month and whenever their password changes, the developer should refresh their environment by running `init` again.
If your developers already run a script when they work on code (for example, to update tools or set environment variables), that script can call `init` each time it runs.


<a name="conventions"></a>
## Conventions

The bootstrapper package places `init.cmd`, `init.ps1`, and `nuget.config` in the root of your repo.
`init` is the entry point for tools which live under `scripts\` and `.tools\`.
It's placed in the root for developer convenience.

Placing `nuget.config` in the root of the repo is a common NuGet convention.

Developer credentials are not placed in the repo's `nuget.config`.
When `init` runs, it places credentials in the user's NuGet config under `%APPDATA%`.
When restoring or pushing packages, NuGet merges the sources list from the repo and credentials from the machine-wide config.
