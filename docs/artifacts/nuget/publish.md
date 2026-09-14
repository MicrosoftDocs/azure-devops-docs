---
title: Publish NuGet packages with NuGet.exe
description: Learn how to connect to an Azure Artifacts feed and publish NuGet packages by using NuGet.exe.
ms.service: azure-artifacts
ms.topic: tutorial
ms.date: 09/09/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Publish NuGet packages from the command line by using NuGet.exe

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article walks you through connecting to your feed and publishing packages by using two authentication flows: the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) for feeds in your own organization, and a personal access token (PAT) for feeds hosted in a different organization.

## Prerequisites

- An Azure DevOps [organization](../../organizations/accounts/create-organization.md).
- An Azure DevOps [project](../../organizations/projects/create-project.md).
- An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed).
- [nuget.exe](https://www.nuget.org/downloads) version `4.8.0.5385` or later. Azure Artifacts recommends NuGet `5.5.x` or later for the best compatibility and reliability.
- To publish packages, you must be a [Feed Publisher (Contributor)](../feeds/feed-permissions.md#feed-roles-and-permissions) or higher.

## Set up the Azure Artifacts Credential Provider

[!INCLUDE [](../includes/install-credential-provider-nuget.md)]

## Connect to a feed

Before you can publish your packages, set up your project and connect to your feed as follows:

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a `nuget.config` file to your project, in the same folder as your `.csproj` or `.sln` file. Paste the provided XML snippet into your file. The snippet should look like the following:

    - **Organization-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```
    
    - **Project-scoped feed**:
    
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <configuration>
          <packageSources>
            <clear />
            <add key="<SOURCE_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
          </packageSources>
        </configuration>
        ```

::: moniker-end

::: moniker range="=azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a `nuget.config` file to your project, in the same folder as your `.csproj` or `.sln` file, and then paste the provided XML snippet into your file.

::: moniker-end

## Publish to a feed in the same organization

After you configure `nuget.config` and authenticate by using the Azure Artifacts Credential Provider, run the following command to publish a package to your feed. Replace the placeholders with the appropriate values:

```CLI
nuget push <PACKAGE_PATH> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
```

Example:

```CLI
nuget push MyPackage.5.0.2.nupkg -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -ApiKey AZ
```

> [!NOTE]
> The Azure Artifacts Credential Provider handles the real authentication for the push, but NuGet still requires an `-ApiKey` value to accept the command. Azure Artifacts ignores the value you provide, so any nonempty string works.


## Publish to a feed in another organization

If the target feed is in a different Azure DevOps organization, create a PAT in that organization and add the feed as a source in your `nuget.config` file.

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) in the target organization with **Packaging** > **Read & write** scope.

1. Run the following command to add the feed as a source. This command adds your PAT to `nuget.config`, so store the file securely and don't check it into source control.

    ```CLI
    nuget sources Add -Name <SOURCE_NAME> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -UserName <USER_NAME> -Password <PERSONAL_ACCESS_TOKEN> -config <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Publish the package by using the source name you just added.

    ```CLI
    nuget push <PACKAGE_PATH> -Source <SOURCE_NAME> -ApiKey <ANY_STRING>
    ```

Example:

```CLI
nuget sources Add -Name "MySource" -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -UserName MyUserName -Password YourPersonalAccessToken -config ./nuget.config
nuget push nupkgs/mypackage.1.1.8.nupkg -Source MySource -ApiKey AZ
```

> [!NOTE]
> If your organization uses a firewall or proxy server, allow the [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts).

## Troubleshooting

### Authentication prompt doesn't appear

Ensure the Azure Artifacts Credential Provider is installed and you're using NuGet version `4.8.0.5385` or later. For setup steps, see [Connect to Azure Artifacts feeds with NuGet.exe](nuget-exe.md).

### Publish fails because the version already exists

Package versions in Azure Artifacts are immutable. After you publish a version, you can't overwrite it or reuse the same version number, even if you delete the package. Update the package version, rebuild the package, and then publish it again.

### Publish fails behind a firewall or proxy

Allow the [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts), and then retry the publish operation.

### Publish fails with a 403 error

This error usually means your account doesn't have publish permissions on the feed. You need at least the [Feed Publisher (Contributor)](../feeds/feed-permissions.md#feed-roles-and-permissions) role to push packages. Ask a Feed Owner to update your role, and then try again.

## Related content

- [Connect to Azure Artifacts feeds with NuGet.exe](nuget-exe.md)

- [Publish NuGet packages (dotnet)](dotnet-exe.md)

- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)

- [Restore NuGet packages (NuGet.exe)](restore-nuget-packages-nuget-exe.md)

- [Manage feed permissions](../feeds/feed-permissions.md)

