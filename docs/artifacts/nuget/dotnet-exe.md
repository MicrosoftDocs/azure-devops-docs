---
title: Publish and restore packages with dotnet CLI
description: How to connect to a feed and use the dotnet CLI to publish and restore NuGet packages
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 11/09/2021
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish and restore NuGet packages using dotnet CLI

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

With Azure Artifacts, you can publish and restore your NuGet packages to/from your feed and control who can access them. This article will guide you through setting up your project to publish and restore your packages using the dotnet command-line interface.

## Project setup

1. Select **Artifacts**, and then select your feed from the dropdown menu. [Create a feed](../get-started-nuget.md#create-a-feed), if you don't have one already. 

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **dotnet** from the **NuGet** section.

1. If this is your first time using Azure Artifacts with dotnet, select **Get the tools** to download and install the latest .NET Core SDK and credential provider.

1. Add a *nuget.config* file to your project, in the same folder as your .csproj or .sln file. Paste the following XML snippet into your new file. Your *nuget.config* file should look similar to the following:

- Organization-scoped feed:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```

- Project-scoped feed:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```

## Publish NuGet packages

To publish a package to your feed, run the following command in an elevated command prompt. Replace the placeholders with the relevant information:

```Command
dotnet nuget push --source <FEED_NAME> --api-key <ANY_STRING> <PACKAGE_PATH>
``` 

## Restore NuGet packages

To restore your packages, run the following command in an elevated command prompt. The `--interactive` flag is used to prompt the user for credentials.

```Command
dotnet restore --interactive
```

> [!TIP]
> If you want to authenticate with Azure Artifacts from your pipeline, use the [NuGet Authenticate task](../../pipelines/tasks/package/nuget-authenticate.md) to connect  to Azure Artifacts and other NuGet repositories. 
>
> Another way to authenticate programmatically is to use the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) and pass in your credentials using the `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` [environment variable](https://github.com/Microsoft/artifacts-credprovider/blob/master/README.md#environment-variables).

## Related articles

- [Connect to Azure Artifacts feeds (NuGet.exe)](./nuget-exe.md)
- [Publish packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/nuget.md)
- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
