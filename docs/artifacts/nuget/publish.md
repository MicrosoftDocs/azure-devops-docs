---
title: Publish and restore NuGet packages with the NuGet CLI
description: How to connect to your feed and publish NuGet packages using the NuGet CLI
ms.assetid: C7D75946-1F00-4BD7-87C8-225BBAE9982B
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 04/18/2024
monikerRange: '<= azure-devops'
---

# Publish and restore NuGet packages from the command line (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish your NuGet packages to both public and private feeds, enabling you to share them with others based on your feed's visibility settings. This article will guide you through connecting to your Azure Artifacts feed and publishing and restoring your NuGet packages.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-feed) if you don't have one already.

- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- The latest [NuGet version](https://www.nuget.org/downloads).

## Connect to feed

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **NuGet.exe** from the left navigation pane.

1. Add a *nuget.config* file to your project, in the same folder as your *.csproj* or *.sln* file. Paste the provided XML snippet into your file. The snippet should look like the following:

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

::: moniker range="azure-devops-2020 || azure-devops-2022"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **NuGet.exe** from the left navigation pane.

1. Follow the instructions in the **Project setup** section to connect to your feed.

::: moniker-end

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps server, and then navigate to your project.

1. Select **Artifacts**, and then select your feed.

1. Select **Connect to Feed**, and then select **NuGet** from the left navigation pane.

1. Follow the provided instructions to add your package source URL to your *nuget.config* file.

::: moniker-end

## Publish packages

Run the following command to publish your packages to your feed. Replace the placeholders with the relevant information:

```CLI
nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
```

**Example**: 

```CLI
nuget push MyPackage.5.0.2.nupkg -src https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -ApiKey AZ
```

> [!NOTE]
> The `ApiKey` is required, but you can use any arbitrary value when pushing to Azure Artifacts feeds.

## Publish packages from external sources

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **packaging read and write** scope.

1. Add your package source to your sources list
  
   If using a *nuget.config* file, this command will add your PAT to your *nuget.config* file. Store this file in a safe location, and make sure that you don't check it into source control.

    ```CLI
    nuget sources Add -Name <SOURCE_NAME> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -UserName <USER_NAME> -Password <PERSONAL_ACCESS_TOKEN> -config <PATH_TO_NUGET_CONFIG_FILE>
    ```

   Without a *nuget.config* file, this command will add your source with the PAT.

   ```CLI
    nuget sources Add -Name <SOURCE_NAME> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -UserName <USER_NAME> -Password <PERSONAL_ACCESS_TOKEN>
    ```

    > [!NOTE]
    > The `UserName` parameter is required, but you can use any arbitrary value when pushing to Azure Artifacts feeds.

1. Publish your NuGet package to your feed:

    ```CLI
    nuget push <PACKAGE_PATH> -src <SOURCE_NAME> -ApiKey <ANY_STRING>
    ```

**Example**:

```CLI
nuget sources Add -Name "MySource" -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -UserName MyUserName -Password YourPersonalAccessToken -config ./nuget.config
nuget push nupkgs/mypackage.1.1.8.nupkg -src MySource -ApiKey AZ
```

```CLI
nuget sources Add -Name "MySource" -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -UserName MyUserName -Password YourPersonalAccessToken
nuget push nupkgs/mypackage.1.1.8.nupkg -src MySource -ApiKey AZ
```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## Restore packages

Run the following command in your project directory to restore your packages:

```CLI
nuget.exe restore
```

## Related articles

- [Use packages from NuGet.org](./upstream-sources.md)
- [Publish packages to NuGet.org](publish-to-nuget-org.md)
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
