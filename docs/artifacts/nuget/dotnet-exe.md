---
title: How to connect to a feed and use the dotnet CLI
description: How to connect to an Azure Artifacts feed and use the dotnet CLI to publish and restore NuGet packages.
ms.assetid: CA2DCB9D-93FB-4E2D-B953-BF78D5687B35
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 9/10/2021
monikerRange: '>= tfs-2017'
---

# use dotnet with Azure Artifacts

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

With Azure Artifacts you can connect to a feed, publish your .NET packages, and control who can access them. You can use the dotnet command line interface to publish and restore your packages.

## Project setup

1. From within your project select **Artifacts**, and then select your feed from the dropdown menu. [Create a feed](../get-started-nuget.md#create-a-feed), if you don't have one already. 

1. Select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing the connect to feed button":::

1. Select **dotnet** from the **NuGet** section.

1. If this is your first time using Azure Artifacts with dotnet, select **Get the tools** to download and install the latest .NET Core SDK and credential provider.

1. Add a *nuget.config* file to your project, in the same folder as your .csproj or .sln file. Paste the XML snippet into your new file. Your *nuget.config* file should look similar to the following:

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <configuration>
      <packageSources>
        <clear />
        <add key="<FEED_NAME>" value="https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" />
      </packageSources>
    </configuration>
    ```

## Restore and publish packages

To restore your packages using the dotnet CLI, run the following command in an elevated command prompt. The `--interactive` flag allows dotnet to prompt the user for credentials.

```Command
dotnet restore --interactive
```

To publish a package to your feed, run the following command in an elevated command prompt. Replace the placeholders with the applicable information:

```Command
dotnet nuget push --source <FEED_NAME> --api-key <ANY_STRING> <PACKAGE_PATH>
``` 

> [!TIP]
> If you want to authenticate with Azure Artifacts from your pipeline, use the [NuGet Authenticate task](../../pipelines/tasks/package/nuget-authenticate.md) to connect to Azure Artifacts and other NuGet repositories. Another way to authenticate programmatically is to use the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) and pass in credentials using the `VSS_NUGET_EXTERNAL_FEED_ENDPOINTS` [environment variable](https://github.com/Microsoft/artifacts-credprovider/blob/master/README.md#environment-variables).
