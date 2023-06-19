---
title: Migrate from file shares
description: How to migrate from file shares to Azure Artifacts
ms.assetid: E45D2856-222F-444B-9E0C-A04B6FE93494
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/16/2023
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Migrate from file shares to Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Artifacts, you can streamline package management to enhance collaboration, ensure package integrity, and leverage various capabilities such as versioning, access control, and feed management.

## Key concepts

Azure Artifacts offers several advantages over file shares:

- **Indexing:**

    Azure Artifacts maintains an index of packages within each feed, allowing for quick list operations. In contrast, when using file shares, the client needs to open each nupkg file and inspect the nuspec metadata, unless the file share is configured with an index that the NuGet client recognizes.

- **Immutability:** 

    Each package version can only be pushed to a feed once in order to maintain the integrity of dependencies. This guarantees that any references to that version will always be accurate. However, if you have workflows that publish packages with updated binaries but without changing the version number, those workflows will encounter issues when transitioning to Azure Artifacts feeds. See [Immutability](../artifacts-key-concepts.md#immutability) for more details.

- **Well-formedness:** 

    Azure Artifacts performs thorough validation on all pushed packages to ensure their integrity and correctness. This validation process prevents any invalid packages from entering your development and build environments. However, it's important to note that any workflow that publishes packages with malformed structures will encounter issues when transitioning to Azure Artifacts feeds.

## Authentication and authorization

If you're currently utilizing Active Directory-backed file shares, it's probable that you and your on-premises build agents are automatically authenticated using Windows NTLM. Migrating your packages to Azure Artifacts will require a few adjustments:

- **Authentication:** You need to provide access to the NuGet client in order to push and restore packages.
  - **Visual Studio**: Credential acquisition happens automatically.
  - **nuget.exe**: Credential acquisition happens automatically after you install the [Azure Artifacts Credential Provider](../nuget/nuget-exe.md).

- **Authorization:** Make sure that any user, service, organization, or group requiring access to your packages has the necessary permissions in place. See the [permissions](#plan-your-access-control-strategy) section for more details.


Migrating your packages is a 4-step process:

1. [Inventory your existing package sources](#inventory-your-existing-package-sources)
1. [Plan your access control strategy](#plan-your-access-control-strategy)
1. [Set up your feeds](#set-up-your-feeds)
1. [Use your feeds](#use-your-feeds)

## Inventory your existing package sources

Before making any configuration changes, it's important to inventory your existing package sources. This involves identifying and listing all the package sources currently used in your setup. By conducting this inventory, you'll have a comprehensive understanding of the package sources that need to be migrated or reconfigured. Start b

- Any nuget.config files in your codebase, likely in the same folder as your solution (.sln) file.

- The default NuGet configuration file at:
  - Windows: `%APPDATA%\NuGet\NuGet.Config`
  - macOS/Linux: `~/.config/NuGet/NuGet.Config` or `~/.nuget/NuGet/NuGet.Config`

Identify the server path associated with your package sources (e.g., `<add key="SMBNuGetServer" value="\\server\share\NuGet" />`) and make a copy of it. This list of server paths will be utilized in the subsequent sections for the migration process.

## Plan your access control strategy

When configuring your new feeds, you have two options:

  - Configure the feed permissions to match the permissions of your existing file shares.
  - Align the feed permissions with the teams and groups already set up in Azure DevOps.

If you want to replicate your existing file share permissions, make a note of the permissions on each share that contains packages. Specifically, take note of users or groups with:

  - **Full control** 
  
  - **Read** or **List**
  
  - **Write** or **Modify** 

## Set up your feeds

After completing the inventory of your current package sources, it's time to configure your feeds. In this step, we'll assume a one-to-one mapping of feeds to SMB shares.

For each SMB share, follow the instructions to [Create a feed](../get-started-nuget.md#create-a-feed):

- Set the **Feed name** to match the name of your SMB share folder.

- Choose your feed **Visibility**, **Upstream sources**, and **Scope**.

For each feed you've created, there are a set of [feed permissions](../feeds/feed-permissions.md) that you should consider when setting up feed permissions.

If you have opted to configure your new feed permissions to match your existing file share permissions, refer to the table below to assign the appropriate permissions to your users:

|            File share permissions          | Feed permissions |
|--------------------------------------------|------------------|
| Full control                               | Owners           |
| Write or Modify                            | Contributors     |
| Read or List                               | Readers          |

## Migrate your packages

For each feed, navigate to **Artifacts** > **Connect to feed** and then choose **NuGet.exe**. Copy the Source URL provided in the Project setup section. This source URL is required to update your NuGet configuration and migrate your packages.

Once you've set up your feeds, you can now set up your project to authenticate with your feed and publish your packages. Make sure you have installed the latest version of the [Azure Artifacts credential provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider) before proceeding to the next steps. 

> [!NOTE]
> We recommend using NuGet version 5.5.x or later, as it includes critical bug fixes that address cancellations and timeouts.

1. Ensure that your *nuget.config* file is located in the same folder as your .csproj or .sln file. Once you have verified the file's placement, add the following snippet to your nuget.config file. Replace the placeholders with the appropriate values:

    - **Organization scoped feed**:
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
    </configuration>
    ```

    - **Project scoped feed**:
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
    </configuration>
    ```

1. Run the following `push` command to publish all your packages to your new feed. You can provide any string as the value for the ApiKey argument.

    ```Command
    nuget.exe push -Source <FEED_NAME> -ApiKey Az <PACKAGE_PATH>\*.nupkg
    ```

> [!TIP]
> For larger teams, you should consider marking each share as read-only before doing the `nuget push` operation to ensure no one adds or updates packages during your migration.  

### Integrate with your pipelines

Update your pipelines to ensure they have the right permissions to consume and publish packages to and from your feeds. See [Restore NuGet packages with Azure Pipelines](../../pipelines/packages/nuget-restore.md) and [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md) for more details.

## Related articles

- [Install NuGet packages with Visual Studio](./consume.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)