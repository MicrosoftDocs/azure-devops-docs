---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/18/2022
---

::: moniker range=">= azure-devops-2019"

1. From within your project, select **Artifacts**, and then select your feed. You can [create a new feed](../../get-started-nuget.md#create-a-feed) if you don't have one already. 

1. Select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed-azure-devops-newnav.png" alt-text="Connect to your feed":::

1. Select **NuGet.exe**.

    :::image type="content" source="../../media/nuget-connect-feed.png" alt-text="NuGet.exe feed connection":::

1. When using a local development environment, if this is the first time using Azure Artifacts with Nuget.exe, select **Get the tools** button and follow the instructions to install the prerequisites.

    1. Download the [latest NuGet version](https://www.nuget.org/downloads).
    1. Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider#azure-artifacts-credential-provider), it provides authentication when pushing or downloading packages (see examples section).

    1. Follow the instructions in the **Project setup** to add a config file. 

        :::image type="content" source="../../media/project-setup.png" alt-text="Project setup":::


1. For Azure hosted builds that interact with Azure Artifacts feeds, you must use the [NuGet Authenticate](https://docs.microsoft.com/azure/devops/pipelines/tasks/package/nuget-authenticate) task (see examples section).

## Examples

- In the example below, pushing "MyPackage" version "5.0.2" to an Azure Artifacts feed from a local development environment, the API key "AZ" is only used as a placeholder. An Azure Artifacts feed still requires the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) to be installed to properly authenticate.

```dotnetcli
nuget push MyPackage.5.0.2.nupkg -src https://pkgs.dev.azure.com/{organization}/{project}/_packaging/{feed}/nuget/v3/index.json AZ
```

- In the example below, pushing "MyPackage" version "1.1.5" to an Azure Artifacts feed from an Azure hosted build, the API key "AZ" is only used as a placeholder. An Azure Artifacts feed still requires your pipeline to use the [NuGet Authenticate task](https://docs.microsoft.com/azure/devops/pipelines/tasks/package/nuget-authenticate?view=azure-devops).

  ```cli
    - task: NuGetAuthenticate@1
      inputs:
        nuGetServiceConnections: MyServiceConnection_ExternalServer
        
    - script: |
        dotnet build mypackage/mypackage.csproj -c Release
        dotnet pack mypackage/mypackage.csproj /property:PackageVersion=1.1.5 -o nupkgs -c Release
        nuget push nupkgs/foo.1.1.5.nupkg -src https://pkgs.dev.azure.com/{organization}/{project}/_packaging/{feed}/nuget/v3/index.json AZ
      displayName: "Pack and push"          
  ```

::: moniker-end

::: moniker range="tfs-2018"

1. Select **Build and Release** > **Packages**.

1. Select your feed from the dropdown menu or [create one](../../get-started-nuget.md#create-a-feed) if you haven't. 

1. Select **Connect to feed**.

    :::image type="content" source="../../media/connect-to-feed.png" alt-text="Connect to feed - TFS":::

1. Select **NuGet** and follow the instruction to connect to your feed.

    :::image type="content" source="../../media/connect-to-nuget-feed-tfs.png" alt-text="Connect to NuGet feed - TFS":::

::: moniker-end
