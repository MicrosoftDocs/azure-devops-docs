---
title: Migrate your packages to Azure Artifacts
description: Use a PowerShell to easily migrate your packages to an Azure Artifacts Feed
ms.technology: devops-artifacts
ms.reviewer: elbatk 
ms.date: 12/02/2021
monikerRange: 'azure-devops'
---

# Migrate NuGet packages to Azure Artifacts

Using the `AzureArtifactsPackageMigration` PowerShell module, you can easily migrate your NuGet packages to Azure Artifacts. In this article, you'll learn how to:

> [!div class="checklist"]  
> * Install PowerShell module.
> * Connect to Azure Artifacts.
> * Migrate NuGet packages.

## Prerequisites

- [Install NuGet CLI](/nuget/tools/nuget-exe-cli-reference).
- [Install PowerShell](/powershell/scripting/install/installing-powershell) version 5.1 or later for Windows and version 6 or later for Linux/Mac.
- [A personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate your feed.
- [Azure DevOps services account](https://azure.microsoft.com/services/devops/).
- [Azure Artifacts feed](../get-started-nuget.md).



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

<img alt="Go to Artifacts Home, Select Connect to Feed" src="../media/connect-to-feed-azure-devops-newnav.png" />

<img alt="Copy the index URL" src="../media/nuget-index-url.png" />

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