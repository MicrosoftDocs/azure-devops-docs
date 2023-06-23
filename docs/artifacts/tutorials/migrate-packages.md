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

## Install PowerShell module

Using the command line interface, run the provided commands to install and import the PowerShell module. You can also download the migration scripts directly from the [azure-artifacts-migration](https://github.com/microsoft/azure-artifacts-migration) GitHub repository.

### [Windows](#tab/Windows/)

1. Open a PowerShell prompt window.
 
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

## Migration setup

To migrate your packages, you'll need to get the source URLs for both the source feed (MyGet) and destination feed (Azure Artifacts). 

#### Azure Artifacts

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-devops.png" alt-text="A screenshot showing how to connect to feed.":::

1. Select **NuGet.exe** and then copy your feed's source URL.

    :::image type="content" source="../media/nuget-source-url.png" alt-text="Screenshot showing how to find the feed source URL.":::

    - Project-scoped feed:
        
        ```command
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json
        ```

    - Organization-scoped feed:
    
        ```command
        https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json
        ```

#### MyGet

1. Sign in to your [MyGet](https://myget.org/) Account.

1. Navigate to the feed you wish to migrate.

1. Select **Feed Details**.

1. Select **Packages** and then copy your **NuGet V3 feed URL**. 

    ```
    https://www.myget.org/F/<FEED_NAME>/api/v3/index.json 
    ```

## Migrate packages

If your MyGet feed is private, you'll need to create a password to authenticate. You can skip the first step if your MyGet feed is public.

1. Run the following command to convert your password to a secure string.

    ```PowerShell
    $password = ConvertTo-SecureString -String '<YOUR_PASSWORD>' -AsPlainText -Force
    ```

1. Run the following command to migrate your packages to Azure Artifacts.

    - **Migrate from a private MyGet feed**:
    
        ```PowerShell
          Move-MyGetNuGetPackages -SourceIndexUrl '<MYGET_SOURCE_URL>' -DestinationIndexUrl '<ARTIFACTS_FEED_SOURCE_URL>' -DestinationPAT '<AZURE_DEVOPS_PAT>' -DestinationFeedName '<ARTIFACTS_FEED_NAME>' -SourceUsername '<MYGET_USERNAME>' -SourcePassword $password -Verbose
        ```

    - **Migrate from a public MyGet feed**:
    
        ```PowerShell
          Move-MyGetNuGetPackages -SourceIndexUrl '<MYGET_SOURCE_URL>' -DestinationIndexUrl '<ARTIFACTS_FEED_SOURCE_URL>' -DestinationPAT '<AZURE_DEVOPS_PAT>' -DestinationFeedName '<ARTIFACTS_FEED_NAME>' -Verbose
        ```

## Related articles

- [Publish and restore NuGet packages (NuGet.exe)](../nuget/publish.md)

- [Publish and restore NuGet packages (dotnet)](../nuget/dotnet-exe.md)

- [Publish packages to NuGet.org](../nuget/publish-to-nuget-org.md)
