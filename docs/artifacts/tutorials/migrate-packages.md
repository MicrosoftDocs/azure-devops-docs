---
title: Migrate your packages to Azure Artifacts
description: Use a PowerShell Module to easily migrate your packages to an Azure Artifacts Feed
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.reviewer: elbatk 
ms.date: 07/18/2019
monikerRange: 'azure-devops'
---

# Migrate your packages to Azure Artifacts

Using the AzureArtifactsPackageMigration PowerShell module, you can easily migrate your NuGet packages from MyGet. Future development will support migration from other packaging solutions and package types.

> [!NOTE]
> This does **not** remove the packages from your current package feed. It **copies** them to your Azure Artifacts feed and will not interfere with use of the source feed.

## Prerequisites

- [The NuGet CLI](https://docs.microsoft.com/nuget/tools/nuget-exe-cli-reference)
- [An Azure DevOps Services account](https://azure.microsoft.com/services/devops/)
- [An Azure Artifacts feed](../get-started-nuget.md)
- [A PAT](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md). A Personal Access Token to authenticate your feed.
- [PowerShell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell). The AzureArtifactsPackageMigration module works with latest versions of PowerShell. With Windows, you need at least version 5.1. For Linux or Mac, you will need at least version 6.

## Install and import the module

1. In Windows, open a PowerShell Window, form Mac or Linux, open a terminal and run the `pwsh` command to start PowerShell. 
 
2. Run the following commands to install the module and import it into your current session.

```PowerShell
Install-Module -Name AzureArtifactsPackageMigration -Scope CurrentUser -Force
Import-Module -Name AzureArtifactsPackageMigration
```

Alternatively, you can download it from the [GitHub page](https://github.com/microsoft/azure-artifacts-migration).

## Collect URLs to transfer packages

To migrate your packages, you will need the index URL to your source, and destination feeds. 

### Get Azure Artifacts Index URL

You can easily copy the destination URL from the **Connect to feed** dialog box.

<img alt="Go to Artifacts Home, Select Connect to Feed" src="../_shared/_img/connect-to-feed-azure-devops-newnav.png" style="border: 1px solid #CCCCCC" />

<img alt="Copy the index URL" src="../_img/nuget-index-url.png" style="border: 1px solid #CCCCCC" />

### Get Index URL from MyGet

1. Log into your MyGet Account and navigate to the feed you want to migrate.

2. Select **Feed Details**

3. Copy the **NuGet V3 feed URL**

## Run the migration

If your source feed is not public, you will need to create a `SecureString` to use as your password to access it.

1. You can skip this step if your **source feed** is public. 

```PowerShell
$password = ConvertTo-SecureString -String '<your password here>' -AsPlainText -Force
```

2. Using the _source_ and _destination_ index URLs you collected earlier, run the following command based on your need. To have less output, simply remove the `-Verbose` switch from the command.

```PowerShell
# Migrate packages from a private source feed.
  Move-MyGetNuGetPackages -SourceIndexUrl '<your source index url here>' -DestinationIndexUrl '<your destination index url here>' -DestinationPAT '<your destination PAT string here>' -DestinationFeedName '<your destination feed name>' -SourceUsername '<username for source feed>' -SourcePassword $password -Verbose
```

```PowerShell
# Migrate packages from a public source feed.
  Move-MyGetNuGetPackages -SourceIndexUrl '<your source index url here>' -DestinationIndexUrl '<your destination index url here>' -DestinationPAT '<your destination PAT string here>' -DestinationFeedName '<your destination feed name>' -Verbose
```
 
3. After a successful migration, you should see output with the number of packages copied.

> [!NOTE]
> This module uses NuGet and your local environment to migrate packages. Depending on the size and amount of packages you are moving, this could take up to an hour or more.

## Next Steps

For more information about NuGet packages in Azure Artifacts, see the [Get Started guide](../get-started-nuget.md)

## Open source

This module is open source [on GitHub](https://github.com/microsoft/azure-artifacts-migration). Feedback and contributions are welcome.
