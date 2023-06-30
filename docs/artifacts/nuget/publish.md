---
title: Connect to a feed and publish NuGet packages - NuGet.exe
description: How to connect to your feed and publish NuGet packages using the command line
ms.assetid: C7D75946-1F00-4BD7-87C8-225BBAE9982B
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/30/2023
monikerRange: '<= azure-devops'
---

# Publish and restore NuGet packages from the command line (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can publish your NuGet packages to public or private feeds and share them with others based on your feed's visibility settings. This article will guide you through connecting to Azure Artifacts and publishing your NuGet packages.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a new feed](../get-started-nuget.md#create-a-feed) if you don't have one already.

- [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).

- The latest [NuGet version](https://www.nuget.org/downloads).

## Connect to feed

[!INCLUDE [](../includes/nuget/nuget-publish-endpoint.md)]

## Publish packages

To publish a NuGet package to your feed, run the following command in an elevated command prompt. Replace the placeholders with the appropriate information:

```Command
nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
```

> [!NOTE]
> The `ApiKey` is only used as a placeholder.

- **Example**:

    ```Command
    nuget push MyPackage.5.0.2.nupkg -src https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -ApiKey AZ
    ```

## Publish packages from external sources

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) (PAT) with **packaging read and write** scope.

1. Add your package source to your nuget.config file. This will add your PAT to your nuget.config file. Store this file in a safe location, and make sure that your don't check it into source control. See [nuget sources](/nuget/reference/cli-reference/cli-ref-sources) for more details.

    ```Command
    nuget sources Add -Name <SOURCE_NAME> -Source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -UserName <USER_NAME> -Password <PERSONAL_ACCESS_TOKEN> -config <PATH_TO_NUGET_CONFIG_FILE>
    ```

1. Publish your package. See [nuget push](/nuget/reference/cli-reference/cli-ref-push) for more details.

    ```Command
    nuget push <PACKAGE_PATH> -src <SOURCE_NAME> -ApiKey <ANY_STRING>
    ```

- **Example**:

    ```Command
    nuget sources Add -Name "MySource" -Source https://pkgs.dev.azure.com/MyOrg/MyProject/_packaging/MyFeed/nuget/v3/index.json -UserName MyUserName -Password YourPersonalAccessToken -config ./nuget.config
    nuget push nupkgs/mypackage.1.1.8.nupkg -src MySource -ApiKey AZ
    ```

## Restore packages

Run the following command in a command prompt window to restore your packages:

```Command
nuget.exe restore
```

## Related articles

- [Publish packages to NuGet.org](publish-to-nuget-org.md)
- [Set up upstream sources](../how-to/set-up-upstream-sources.md).
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md).
