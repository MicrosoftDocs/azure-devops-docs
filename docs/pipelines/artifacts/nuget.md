---
title: Publish NuGet packages with Azure Pipelines
description: Learn how to publish NuGet packages to internal and external feeds using Classic and YAML Pipelines.
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.topic: tutorial
ms.date: 09/11/2024
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Publish NuGet packages with Azure Pipelines (YAML/Classic) 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Pipelines, you can publish your NuGet packages to Azure Artifacts feeds in your organization, in other organizations, and to public registries such as *nuget.org*, using either Classic or YAML pipelines. In this article, you'll learn how to: 

> [!div class="checklist"]
>
> * Publish packages to an internal feed
> * Publish packages to a feed in a different organization
> * Package versioning

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../../artifacts/get-started-nuget.md#create-feed) if you don't have one already.

- If you're using a self-hosted agent, make sure that it has the [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download) and [NuGet (4.8.0.5385+)](https://www.nuget.org/downloads) installed.

## Publish NuGet packages to a feed in the same organization

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, make sure that both the **Project Collection Build Service** and your project's **Build Service** identities are granted the **Feed Publisher (Contributor)** role assigned in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for more details.

::: moniker range="azure-devops-2020"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yaml
steps:
- task: NuGetAuthenticate@0
  displayName: 'NuGet Authenticate'

- script: |
      dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg
  displayName: Push
```

#### [Classic](#tab/classic/)

1. Navigate to the Azure DevOps portal, and then select your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *Command line* tasks to your pipeline definition. You can leave the *nugetAuthenticate* with the default settings and configure the *Command line* task as follows:

    :::image type="content" source="media/nuget/cli-push-nuget.png" alt-text="A screenshot displaying how to configure the publish task in Azure Pipelines.":::

- **Display name**: *Push*.
- **Script**: 
    ```dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg```

- - -

::: moniker-end

::: moniker range=">= azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yaml
steps:
- task: NuGetAuthenticate@1
  displayName: 'NuGet Authenticate'

- script: |
      dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg
  displayName: Push
```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *Command line* tasks to your pipeline definition. You can leave the *nugetAuthenticate* with the default settings and configure the *Command line* task as follows:

    :::image type="content" source="media/nuget/cli-push-nuget.png" alt-text="A screenshot displaying how to configure the CLI publish task in Azure Pipelines.":::

- **Display name**: *Push*.
- **Script**: 
    ```dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg```

- - -

::: moniker-end

## Publish NuGet packages to a feed in another organization

To publish your NuGet packages to a feed in a different Azure DevOps organization, you must first create a personal access token (PAT) in the target organization. Navigate to the organization hosting your target feed and [Create a personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with **Packaging** > **Read & write** scope. 
Once the PAT is created, copy and store it in a secure location, as you'll need it in the following section to set up a service connection.

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **NuGet**, and then select **Next**. 

1. Select **External Azure DevOps Server** as the **Authentication method**, and then enter your target **Feed URL**. Paste the **Personal Access Token** you created earlier, provide a name for your service connection, and check **Grant access permission to all pipelines** if applicable to your scenario.

1. Select **Save** when you're done.

    :::image type="content" source="media/nuget/nuget-service-connection-external-devops-server.png" alt-text="A screenshot displaying how to set up a NuGet service connection to authenticate with an external feed in a different organization.":::

::: moniker range=">= azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    - task: NuGetAuthenticate@1
      inputs:
        nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
        
    - script: |
          dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push       
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *Command line* tasks to your pipeline definition and configure them as follows:

    :::image type="content" source="media/nuget/cli-push-nuget.png" alt-text="A screenshot displaying how to configure the publish task to a feed in other organization.":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **Command line task**:
        - **Display name**: *Push*.
        - **Script**: 
            ```dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg```

- - -

::: moniker-end

::: moniker range="azure-devops-2020"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
      - task: NuGetAuthenticate@0
        inputs:
          nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
          
      - script: |
          dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push          
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *Command line* tasks to your pipeline definition and configure them as follows:

    :::image type="content" source="media/nuget/cli-push-nuget.png" alt-text="A screenshot displaying how to configure the CLI publish task to a feed in other organization.":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **Command line task**:
        - **Display name**: *Push*.
        - **Script**: 
            ```dotnet nuget push --source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" --api-key az $(Build.ArtifactStagingDirectory)\*.nupkg```

- - -

::: moniker-end

:::image type="content" source="media/nuget/package-published-to-external-feed.png" alt-text="A screenshot displaying the package successfully published to a feed in a different organization.":::

## NuGet task package versioning

Azure Pipelines supports [Semantic Versioning](https://semver.org/) and provides the following configuration options for NuGet tasks::

- **Use the date and time** (Classic) | **byPrereleaseNumber** (YAML):
    Your package version will follow the format: *Major.Minor.Patch-ci-datetime* where you have the flexibility to customize the Major, Minor, and Patch values.

- **Use an environment variable** (Classic) | **byEnvVar** (YAML): 
    Your package version is set to the value of the specified environment variable. 

- **Use the build number** (Classic) | **byBuildNumber** (YAML): 
    Your package version is set to the build number. Make sure you define the build number format in your pipeline **Options** as `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)`. To specify the format in YAML, add a `name:` property at the root of your pipeline and define your format.

The following is an example demonstrating how to use the date and time versioning to generate a SemVer-compliant package formatted as: *Major.Minor.Patch-ci-datetime*.

#### [YAML](#tab/yaml/)

```yaml
variables:
  Major: '1'
  Minor: '0'
  Patch: '0'

steps:
- task: NuGetCommand@2
  inputs:
    command: pack
    versioningScheme: byPrereleaseNumber
    majorVersion: '$(Major)'
    minorVersion: '$(Minor)'
    patchVersion: '$(Patch)'
```

> [!NOTE]
> `DotNetCore` and `DotNetStandard` packages should be packaged with the `DotNetCoreCLI@2` task to avoid System.InvalidCastExceptions. See the [.NET Core CLI](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) task for more details.

```yaml
task: DotNetCoreCLI@2
inputs:
    command: pack
    versioningScheme: byPrereleaseNumber
    majorVersion: '$(Major)'
    minorVersion: '$(Minor)'
    patchVersion: '$(Patch)'
```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select your NuGet task.

1. Make sure the command is set to **Pack**, then under **Pack options**, select **Use the date and time** from the dropdown menu.

    :::image type="content" source="media/package-versioning-classic.png" alt-text="A screenshot displaying how to enable package versioning in a classic pipeline.":::

- - -

## Related content

- [Publish NuGet packages to NuGet.org](publish-public-registry.md)
- [Use packages from the NuGet.org upstream](../../artifacts/nuget/upstream-sources.md)
- [Publish and download Universal Packages](./universal-packages.md)
