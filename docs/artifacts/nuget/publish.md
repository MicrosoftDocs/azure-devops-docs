---
title: Publish NuGet packages with the NuGet CLI
description: Learn how to connect to an Azure Artifacts feed and publish NuGet packages using the NuGet CLI.
ms.assetid: C7D75946-1F00-4BD7-87C8-225BBAE9982B
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 01/14/2025
monikerRange: '>= azure-devops-2020'
---

# Publish NuGet packages from the command line (NuGet.exe)

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article guides you through setting up your project and publishing your NuGet packages using the NuGet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - The latest [NuGet version](https://www.nuget.org/downloads). |

## Connect to a feed

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

## Publish packages to a feed in the same organization

Run the following command to publish a package to your feed. Replace the placeholders with the appropriate values:

```CLI
nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
```

**Example**: 

```CLI
nuget push MyPackage.5.0.2.nupkg -src https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -ApiKey AZ
```

> [!NOTE]
> The `api-key` is required, but you can provide any string as its value when publishing to an Azure Artifacts feed.

## Publish packages to a feed in another organization

To publish your NuGet packages to a feed in a different Azure DevOps organization, you must first create a personal access token (PAT) in the target organization.

1. Navigate to the organization hosting the target feed and create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **Packaging** > **Read & write** scope.

1. Run the following command to add your package source to your *nuget.config* file. This will add your PAT to your *nuget.config* file. Store this file in a safe location, and make sure that you don't check it into source control.

    ```CLI
    nuget sources Add -Name <SOURCE_NAME> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -UserName <USER_NAME> -Password <PERSONAL_ACCESS_TOKEN> -config <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Run the following command to publish your package:

    ```CLI
    nuget push <PACKAGE_PATH> -src <SOURCE_NAME> -ApiKey <ANY_STRING>
    ```

**Example**:

```CLI
nuget sources Add -Name "MySource" -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -UserName MyUserName -Password YourPersonalAccessToken -config ./nuget.config
nuget push nupkgs/mypackage.1.1.8.nupkg -src MySource -ApiKey AZ
```

> [!NOTE]
> If your organization is using a firewall or a proxy server, make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts). 

## Related content

- [Restore NuGet packages (NuGet.exe)](restore-nuget-packages-nuget-exe.md)

- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)

- [Use packages from NuGet.org](./upstream-sources.md)

