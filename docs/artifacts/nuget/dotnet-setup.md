---
title: Connect to Azure Artifacts feeds - dotnet
description: How to connect to an Azure Artifacts feed - dotnet
ms.service: azure-devops-artifacts
ms.custom: devx-track-dotnet
ms.topic: conceptual
ms.date: 07/12/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Connect to Azure Artifacts feeds (dotnet)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

## Project setup

::: moniker range=">= azure-devops-2019"

1. Select **Artifacts** and then select your feed from the dropdown menu.

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="A screenshot showing how to connect to a feed.":::

1. Select **dotnet** from the **NuGet** section.

    :::image type="content" source="../media/dotnet-connect-to-feed.png" alt-text="A screenshot showing how to connect to a feed - dotnet.":::

1. If this is your first time using Azure Artifacts with dotnet, select **Get the tools** in the top-right corner and then:
    1. Download and install the [.NET Core SDK](https://dotnet.microsoft.com/en-us/download).
    1. Download and install [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider).

1. Create a *nuget.config* file in the same folder as your *csproj* or *sln* file. Copy and paste the following snippet into your new file:

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

::: moniker-end



## Related articles

- [Publish packages to NuGet.org](./publish-to-nuget-org.md)
- [Publish NuGet packages with Azure Pipelines](../../pipelines/artifacts/nuget.md)
- [NuGet.org upstream source](./upstream-sources.md)
