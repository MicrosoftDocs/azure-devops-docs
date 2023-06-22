---
title: Migrate from MyGet to Azure Artifacts
description: How to migrate your packages from MyGet to an Azure Artifacts Feed
ms.service: azure-devops-artifacts
ms.reviewer: elbatk 
ms.date: 06/22/2023
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Migrate your packages from MyGet to Azure Artifacts

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Using the [AzureArtifactsPackageMigration](https://github.com/microsoft/azure-artifacts-migration) PowerShell module, you can easily migrate your NuGet packages to Azure Artifacts. This article will walk you through an example of migrating NuGet packages from MyGet to Azure Artifacts.

In this article, you'll learn how to:

> [!div class="checklist"]  
> * Install the *AzureArtifactsPackageMigration* PowerShell module.
> * Connect to Azure Artifacts feeds.
> * Migrate to Azure Artifacts.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- Install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

- [Install NuGet CLI](/nuget/tools/nuget-exe-cli-reference).

- [Install PowerShell](/powershell/scripting/install/installing-powershell)

- [A personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to authenticate with Azure DevOps.

## Install the PowerShell module

### [Windows](#tab/Windows/)

1. Open an elevated PowerShell prompt window.
 
1. Run the following commands to install the `AzureArtifactsPackageMigration` PowerShell module and import it into your current session.

    ```PowerShell
    Install-Module -Name AzureArtifactsPackageMigration -Scope CurrentUser -Force
    Import-Module -Name AzureArtifactsPackageMigration
    ```

### [Linux/macOS](#tab/Linux/)

1. Open a terminal and run the `pwsh` command to start PowerShell. 
 
1. Run the following commands to install the `AzureArtifactsPackageMigration` module and import it into your current session.

    ```PowerShell
    Install-Module -Name AzureArtifactsPackageMigration -Scope CurrentUser -Force
    Import-Module -Name AzureArtifactsPackageMigration
    ```

* * *

Alternatively, you can also download the migration scripts from the [GitHub](https://github.com/microsoft/azure-artifacts-migration) repository.

## Migration setup

To migrate your packages, you will need to get the package source URL for both the source and destination feeds. 

### Azure Artifacts

1. Select **Artifacts** and then select your feed.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to feed.":::

1. Select **NuGet.exe** and then follow the instructions in the **Project setup** to set up your config file.

    :::image type="content" source="../media/nuget-project-setup.png" alt-text="Screenshot showing the instructions to set up a project.":::

### MyGet

1. Log in to your [MyGet](https://myget.org/) Account.

1. Navigate to the feed you want to migrate.

1. Select **Feed Details**.

1. Select **Packages** and then copy the **NuGet V3 feed URL**. 

    ```
    https://www.myget.org/F/<YOUR_FEED_NAME>/api/v3/index.json 
    ```

## Migrate NuGet packages

If your MyGet feed is private, you will need to create a password to authenticate. You can skip the first step if your MyGet feed is public.

1. Run the following command to convert your password to a secure string.

    ```PowerShell
    $password = ConvertTo-SecureString -String '<YOUR_PASSWORD>' -AsPlainText -Force
    ```

1. Run the following command to migrate your packages to Azure Artifacts;

    - **Migrate from a private source feed**:
    
        ```PowerShell
          Move-MyGetNuGetPackages -SourceIndexUrl '<MYGET_SOURCE_URL>' -DestinationIndexUrl '<ARTIFACTS_FEED_SOURCE_URL>' -DestinationPAT '<AZURE_DEVOPS_PAT>' -DestinationFeedName '<ARTIFACTS_FEED_NAME>' -SourceUsername '<MYGET_USERNAME>' -SourcePassword $password -Verbose
        ```

    - **Migrate from a public source feed**:
    
        ```PowerShell
          Move-MyGetNuGetPackages -SourceIndexUrl '<MYGET_SOURCE_URL>' -DestinationIndexUrl '<ARTIFACTS_FEED_SOURCE_URL>' -DestinationPAT '<AZURE_DEVOPS_PAT>' -DestinationFeedName '<ARTIFACTS_FEED_NAME>' -Verbose
        ```

## Related articles

- [Publish NuGet packages (CLI)](../nuget/publish.md)
- [Publish packages to NuGet.org](../nuget/publish-to-nuget-org.md)
- [NuGet.org upstream source](../nuget/upstream-sources.md)
- [Package migration repository](https://github.com/microsoft/azure-artifacts-migration)