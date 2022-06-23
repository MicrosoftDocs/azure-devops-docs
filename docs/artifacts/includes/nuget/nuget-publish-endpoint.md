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

1. When using a local development environment, it is recommended to have the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) installed which provides authentication when pushing or downloading packages [see examples](#examples).

    1. Download the [latest NuGet version](https://www.nuget.org/downloads).

    1. Follow the instructions in the **Project setup** to add a config file. 

        :::image type="content" source="../../media/project-setup.png" alt-text="Project setup":::

1. For Azure hosted builds that interact with Azure Artifacts feeds, you must use the [NuGet Authenticate](https://docs.microsoft.com/azure/devops/pipelines/tasks/package/nuget-authenticate) task for the authentication[see examples](#examples).

1. For Github actions builds that interact with Azure Artifacts feeds, you may use [Github setup dotnet action](https://github.com/actions/setup-dotnet) for the authentication[see examples](#examples).

1. For other hosted builds that interact with Azure Artifacts feeds, you may use [Azure PAT]([url](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)) saved in `nuget.config` file for the authentication[see examples](#examples), but please exercise caution because it may leak your PAT as part of build environement log collection or source control checkout, artifact upload accidentally.

## Examples

### Pushing from a local development environment

When pushing from local development environment to Azure Artifacts, it is recommended to have [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider) installed for the authentication. Please note here the API key "AZ" is only used as a placeholder(it can any value).

```cli
nuget push MyPackage.5.0.2.nupkg -src https://pkgs.dev.azure.com/{organization}/{project}/_packaging/{feed}/nuget/v3/index.json AZ
```

### Pushing from Azure hosted build

When pushing from Azure hosted build to Azure Artifacts, your pipeline should use the [NuGet Authenticate task](https://docs.microsoft.com/azure/devops/pipelines/tasks/package/nuget-authenticate?view=azure-devops) for the authentication. Please note here the API key "AZ" is only used as a placeholder(it can any value).

  ```cli
    - task: NuGetAuthenticate@1
      inputs:
        nuGetServiceConnections: MyServiceConnection_ExternalServer
        
    - script: |
        dotnet pack mypackage/mypackage.csproj /property:PackageVersion=1.1.5 -o nupkgs -c Release
        nuget push nupkgs/foo.1.1.5.nupkg -src https://pkgs.dev.azure.com/{organization}/{project}/_packaging/{feed}/nuget/v3/index.json AZ
      displayName: "Pack and push"          
  ```

### Pushing from GitHub Actions

When pushing from GitHub actions to Azure Artifacts, your pipeline can use the [Github setup dotnet action](https://github.com/actions/setup-dotnet) for the authentication. Please note here the API key "AZ" is only used as a placeholder(it can any value).

```cli
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - uses: actions/setup-dotnet@v2
      with:
        dotnet-version: 6.0.x # Change to a sdk version matches your solution.
        source-url: https://pkgs.dev.azure.com/<your-organization>/_packaging/<your-feed-name>/nuget/v3/index.json
      env:
        NUGET_AUTH_TOKEN: ${{secrets.AZURE_DEVOPS_PAT}} # Note, create a secret with this name in Settings
    
    - name: Pack and push
      run: |
          dotnet pack mypackage/mypackage.csproj /property:PackageVersion=1.1.3 -o nupkgs -c Release
          nuget push nupkgs/mypackage.1.1.3.nupkg -src https://pkgs.dev.azure.com/<your-organization>/_packaging/<your-feed-name>/nuget/v3/index.json AZ
```

### Pushing from other hosted builds

When pushing from any other hosted builds (than local host, Azure hosted build, Github actions) to Azure Artifacts, your pipeline can use the [Azure PAT]([url](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows)) saved in `nuget.config` file for the authentication[see examples](#examples), the API key and UserName "AZ" are only used as a placeholder(it can any value). Use this with caution, it may leak your PAT as part of build environement log collection or source control checkout, artifact upload accidentally.

```cli         
dotnet pack mypackage/mypackage.csproj /property:PackageVersion=1.1.8 -o nupkgs -c Release
# If your solution doesn't have nuget.config then you may need to uncomment below line for creating one for you.
# dotnet new nugetconfig
nuget sources Add -Name "azureSource" -Source https://pkgs.dev.azure.com/<your-organization>/_packaging/<your-feed-name>/nuget/v3/index.json -UserName AZ -Password YourAzurePAT -config pathToNugetConfigFile
nuget push nupkgs/mypackage.1.1.8.nupkg -src azureSource AZ
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
