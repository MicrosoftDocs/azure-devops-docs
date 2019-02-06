---
title: Move your packages to the cloud
description: Leave your file shares behind and bring your packages to Azure DevOps Services or Team Foundation Server
ms.assetid: E45D2856-222F-444B-9E0C-A04B6FE93494
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.topic: conceptual
ms.date: 09/01/2017
monikerRange: '>= tfs-2017'
---

# Move your packages to the cloud

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

Azure DevOps Services provides hosted NuGet feeds as a service. 
If you're using NuGet packages as a part of your continuous delivery flow, 
Azure Artifacts can eliminate your dependencies on on-premises file shares and hosted instances of NuGet.Server.
Azure Artifacts works with any CI system that supports authenticated NuGet feeds. 
This walkthrough assumes that you're using Azure DevOps Services Team Build (not XAML Build).

## Before you start

Azure DevOps Services NuGet service provides a number of benefits compared to file shares. However, some of these benefits may require changes to your existing workflows.

- **Indexing:** Azure DevOps Services maintains an index of all the packages in each feed, which enables fast `nuget list` operations. 
List operations on your file shares require the client to open every `nupkg` and examine the `nuspec` for metadata unless your 
file share has been configured to provide an index that the NuGet client understands.
- **Immutability:** A package version (e.g. `MyPackage.1.0.0.0.nupkg`) can only be pushed to a feed once. 
This ensures that any dependencies on that version are guaranteed to remain valid. 
However, if you have workflows that publish packages with newer binaries without changing the version number, those workflows will break when moved to Azure DevOps Services NuGet feeds. Learn more about [Immutability in Azure DevOps Services](../artifacts-key-concepts.md#immutability).
- **Well-formedness:** Azure DevOps Services validates all pushed packages to ensure they're well-formed.
This prevents invalid packages from entering your development and build environments.
However, any workflow that publishes malformed packages will break when moving to Azure DevOps Services NuGet feeds.

### NuGet 3.x is recommended

[!INCLUDE [nuget-3x](../_shared/nuget/nuget-3x.md)]

### Authentication and authorization

If you're using Active Directory-backed file shares, you and your on-prem build agents are likely authenticating automatically using Windows NTLM.
Moving your packages to Azure DevOps Services will require a few changes:

- **Authentication:** You need to provide the NuGet client with credentials in order to restore and push packages.
  - **Visual Studio 2015 users**: Credential acquisition happens automatically, as long as you've updated the 
  [NuGet Package Manager](../nuget/consume.md) extension to version 3.3 or higher by going to the Tools menu and using the Extensions and Updates window.
  - **nuget.exe 3.x users**: Credential acquisition happens automatically after you install the 
[Azure DevOps Services Credential Provider](../nuget/nuget-exe.md).
- **Authorization:** Ensure that any principal (user, service organization, group, etc.) that needs access to your packages has the appropriate permissions. See the [permissions](#make-a-plan-for-permissions) section for details.

## Move your packages

Moving your packages to the cloud is a 4-step process:

1. [Inventory your existing package sources](#inventory-your-existing-package-sources)
1. [Make a plan for permissions](#make-a-plan-for-permissions)
1. [Set up your feeds](#set-up-your-feeds)
1. [Use your feeds](#use-your-feeds)

<a name="inventory-your-existing-package-sources"></a>
### Inventory your existing package sources

Before making any configuration changes, find your existing NuGet file shares by checking:
- Any nuget.config files in your codebase, likely in the same folder as your .sln file
- The global nuget.config file at 
  - Command Prompt: `%APPDATA%\NuGet\NuGet.Config`
  - PowerShell: `$env:APPDATA\NuGet\NuGet.Config`

Look for any lines with a UNC path (like `<add key="SMBNuGetServer" value="\\server\share\NuGet" />`) and note the path. You'll use the list of paths in the [migrate](#migrate-your-packages) section later.

<a name="make-a-plan-for-permissions"></a>
### Make a plan for permissions

When setting up your new feeds, you can either:
  - Set up your feed permissions to match your existing file share permissions
  - Align your feed permissions with existing Azure DevOps Services teams and groups
 
If you want to match your existing file share permissions, note the permissions on each share that contains packages. 
Specifically, note the principals with:
- **Full control** 
- **Modify** or **write**
- **Read & execute**, **List folder contents**, or **Read**

<a name="set-up-your-feeds"></a>
### Set up your feeds

Now that you've inventoried your existing package sources, it's time to set up the feeds that will replace them.
For this walkthrough, we'll assume a 1:1 mapping of feeds to SMB shares. 

<a name="create-your-feeds"></a>
#### Create your feeds

For each SMB share, create a feed using the [instructions here](../feeds/create-feed.md). In the create dialog:
- Use the name of the SMB share folder as the **Feed name**
- Leave the defaults for **Who can read** and **Who can contribute**

For each feed you've created, [edit the feed and set permissions](../feeds/feed-permissions.md). There are a set of 
[common identities](../feeds/feed-permissions.md) that you should consider when setting up feed permissions.

If you've chosen to set up your new feed permissions to match your existing file share permissions, use the following table to give 
your principals the appropriate group membership:

| SMB permission                             | Feed group     |
|--------------------------------------------|----------------|
| Full control                               | Owners         |
| Modify, Write                              | Contributors   |
| Read & execute, List folder contents, Read | Readers        |

<a name="use-your-feeds"></a>
### Use your feeds

#### Get your feed's NuGet source URL

For each feed, click the **Connect to feed** button and copy the **Source URL** in the Connect with NuGet section. Use the Source URL in the [migrate](#migrate-your-packages) and [update](#update-your-nuget-configuration) sections.

<a name="migrate-your-packages"></a>
#### Migrate your packages

Once you've set up your feeds, you can do a bulk push from each SMB share to its corresponding feed. To do so: 

1. If you haven't already, open a PowerShell window in the repo where you installed the Azure DevOps Services NuGet tools and run `init.ps1`. 
This sets up your environment to allow you to work with nuget.exe and Team Service's NuGet feeds.
1. For each share, push all packages in the share to the new feed: 
`nuget push {your package path}\*.nupkg -Source {your NuGet package source URL} -ApiKey Azure DevOps Services`

For larger teams, you should consider marking each share as read-only before doing the `nuget push` operation to ensure no one adds or updates packages during your migration.  

<a name="update-your-nuget-configuration"></a>
#### Update your NuGet configuration

Now, return to each of the nuget.config files you found in the [inventory](#inventory-your-existing-package-sources) section. For 
each share, find the corresponding `<add key="SMBNuGetServer" value="\\server\share\NuGet" />` and replace the `value` with the new feed's source URL. 

<a name="add-the-vsts-nuget-tools-to-your-repo"></a>
#### Add the Azure DevOps Services NuGet tools to your repo

The Azure DevOps Services NuGet [bootstrap package](bootstrap-nuget.md) can automate the process of acquiring the right NuGet tools and credentials to use feeds.
This is especially helpful for users of Visual Studio 2013 (or earlier) or NuGet 2.x, which don't have built-in support for Azure DevOps Services auth.

<a name="integrate-with-your-builds"></a>
#### Integrate with your builds

Update your builds to ensure they have the right credentials to consume and publish packages in feeds. See the how-tos for [restoring](/azure/devops/pipelines/packages/nuget-restore) and [publishing](/azure/devops/pipelines/artifacts/nuget) packages in Team Build.
