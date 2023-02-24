---
title: Use Azure Artifacts feeds with NuGet packages
description: Leave your file shares behind and bring your packages to Azure Artifacts feeds
ms.assetid: E45D2856-222F-444B-9E0C-A04B6FE93494
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 01/14/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Migrate your packages from file shares

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts provides hosted NuGet feeds as a service. If you're using NuGet packages as a part of your continuous delivery workflow, Azure Artifacts can help you manage your dependencies through public and private feeds. Azure Artifacts works with any continuous integration system that supports authenticated NuGet feeds.

## Key concepts

Azure Artifacts provides a number of benefits compared to file shares:

- **Indexing:** Azure Artifacts maintains an index of all the packages in each feed, which enables fast `nuget list` operations. List operations on your file shares require the client to open every `nupkg` and examine the `nuspec` for metadata unless your file share has been configured to provide an index that the NuGet client understands.

- **Immutability:** A package version (for example, `MyPackage.1.0.0.0.nupkg`) can only be pushed to a feed once. This ensures that any dependencies on that version are guaranteed to remain valid. However, if you have workflows that publish packages with newer binaries without changing the version number, those workflows will break when moved to Azure Artifacts feeds. Learn more about [Immutability](../artifacts-key-concepts.md#immutability) in Azure Artifacts.

- **Well-formedness:** Azure Artifacts validates all pushed packages to ensure they're well formed. This prevents invalid packages from entering your development and build environments. However, any workflow that publishes malformed packages will break when moving to Azure Artifacts feeds.

> [!NOTE]
> We recommend using NuGet version 4.8.2 or later. Legacy NuGet versions 2.x are also supported.

## Authentication and authorization

If you're using Active Directory-backed file shares, you and your on-prem build agents are likely authenticating automatically using Windows NTLM. Moving your packages to Azure Artifacts will require a few changes:

- **Authentication:** You need to provide access to the NuGet client in order to push and restore packages.
  - **Visual Studio**: Credential acquisition happens automatically.
  - **nuget.exe**: Credential acquisition happens automatically after you install the [Credential Provider](../nuget/nuget-exe.md).

- **Authorization:** Ensure that any principal (user, service organization, group, etc.) that needs access to your packages has the appropriate permissions. See the [permissions](#make-a-plan-for-permissions) section for more details.

## Migrate your packages

Migrating your packages is a 4-step process:

1. [Inventory your existing package sources](#inventory-your-existing-package-sources)
1. [Make a plan for permissions](#make-a-plan-for-permissions)
1. [Set up your feeds](#set-up-your-feeds)
1. [Use your feeds](#use-your-feeds)

### Inventory your existing package sources

Before making any configuration changes, find your existing NuGet file shares by checking:

- Any nuget.config files in your codebase, likely in the same folder as your solution (.sln) file

- The global nuget.config file at:
  - Command Prompt: `%APPDATA%\NuGet\NuGet.Config`
  - PowerShell: `$env:APPDATA\NuGet\NuGet.Config`

Look for your server path (example `<add key="SMBNuGetServer" value="\\server\share\NuGet" />`) and copy it. You'll use the list of paths in the following sections.

### Make a plan for permissions

When setting up your new feeds, you can either:

  - Set up your feed permissions to match your existing file share permissions.
  - Align your feed permissions with existing Azure DevOps teams and groups.

If you want to match your existing file share permissions, note the permissions on each share that contains packages. Specifically, note the principals with:

  - **Full control** 
  - **Modify** or **write**
  - **Read & execute**, **List folder contents**, or **Read**

### Set up your feeds

Now that you took inventory of your existing package sources, it's time to set up your feeds. For this walkthrough, we'll assume a 1:1 mapping of feeds to SMB shares.

#### Create your feeds

For each SMB share, follow the instructions to [Create a feed](../get-started-nuget.md#create-a-feed):

- Use the name of the SMB share folder as the **Feed name**.
- Choose your feed **Visibility**, **Upstream sources**, and **Scope**.

For each feed you've created, there are a set of [feed permissions](../feeds/feed-permissions.md) that you should consider when setting up feed permissions.

If you've chosen to set up your new feed permissions to match your existing file share permissions, use the following table to give your principals the appropriate permissions:

|            File share permissions          | Feed permissions |
|--------------------------------------------|------------------|
| Full control                               | Owners           |
| Modify, Write                              | Contributors     |
| Read & execute, List folder contents, Read | Readers          |

### Use your feeds

For each feed, select **Connect to feed** > **NuGet.exe** and copy the **Source URL** from the **Project setup** section. You will need the source URL to migrate your packages and update your NuGet configuration.

#### Migrate your NuGet packages

Once you've set up your feeds, you can do a bulk push from each file share to its corresponding feed. To do so:

1. Run the following command in an elevated PowerShell prompt window. This sets up your environment to allow you to work with nuget.exe and Azure Artifacts feeds.

    ```Command
    init.ps1
    ```

1. For each share, use the following command to push all packages in the share to your new feed:

    ```Command
    nuget push <YOUR_PACKAGE_PATH>\*.nupkg -Source <YOUR_SOURCE_URL> -ApiKey Azure DevOps Services
    ```

> [!TIP]
> For larger teams, you should consider marking each share as read-only before doing the `nuget push` operation to ensure no one adds or updates packages during your migration.  

#### Update your NuGet configuration

Now, return to each of the *nuget.config* files you found in the [Inventory your existing package sources](#inventory-your-existing-package-sources) section. For each share, find the file share path (Example `<add key="SMBNuGetServer" value="\\server\share\NuGet" />`) and replace the `value` with your new feed's source URL.

#### Integrate with your builds

Update your builds to ensure they have the right credentials to consume and publish packages to and from your feeds. See how to [Restore NuGet packages in Azure Pipelines](../../pipelines/packages/nuget-restore.md) and how to [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md) for more details.

## Related articles

- [Install NuGet packages with Visual Studio](./consume.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Migrate NuGet packages to Azure Artifacts](../tutorials//migrate-packages.md)
- [NuGet.org upstream source](./upstream-sources.md)
- [Delete and recover packages](../how-to/delete-and-recover-packages.md)