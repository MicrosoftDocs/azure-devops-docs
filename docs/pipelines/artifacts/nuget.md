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

Using Azure Pipelines, you can publish your NuGet packages to Azure Artifacts feeds, external feeds, or public registries like nuget.org, using either classic or YAML pipelines. In this article, you'll learn how to: 

> [!div class="checklist"]
>
> * Publish packages to an internal feed
> * Publish packages to a feed in a different organization
> * Package versioning

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../../artifacts/get-started-nuget.md#create-feed) if you don't have one already.

## Publish NuGet packages to an internal feed

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
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    publishVstsFeed: '<projectName>/<feed>'
```

#### [Classic](#tab/classic/)

1. Navigate to the Azure DevOps portal, and then select your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *NuGet* tasks to your pipeline definition. You can leave the *nugetAuthenticate* with the default settings and configure the *nuget* task as follows:

    :::image type="content" source="media/nuget/authenticate-and-publish-tasks.png" alt-text="A screenshot displaying how to configure the publish task in Azure Pipelines.":::

- **Command**: the NuGet command to run. Select *push*.
- **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
- **Target feed location**: select *This organization/collection*.
- **Target feed**: select the feed that you want to publish to.

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
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    publishVstsFeed: '<projectName>/<feed>'
```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *NuGet* tasks to your pipeline definition. You can leave the *nugetAuthenticate* with the default settings and configure the *nuget* task as follows:

    :::image type="content" source="media/nuget/authenticate-and-publish-tasks.png" alt-text="A screenshot displaying how to configure the NuGet publish task in Azure Pipelines.":::

- **Command**: the NuGet command to run. Select *push*.
- **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
- **Target feed location**: select *This organization/collection*.
- **Target feed**: select the feed that you want to publish to.

- - -

::: moniker-end

## Publish NuGet packages to an external feed

To publish your NuGet packages to external feeds or public registries, such as feeds in other Azure DevOps organizations or on platforms like *nuget.org*, you must set up a service connection for authentication first.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **NuGet**, and then select **Next**. 

1. Select **ApiKey** for the **Authentication method**, and then enter your **Feed URL**. Provide your **Username** and **Password**, give your service connection a name, and check **Grant access permission to all pipelines** if applicable to your scenario.

1. Select **Save** when you're done.

    :::image type="content" source="media/nuget/nuget-service-connection-external-feed.png" alt-text="A screenshot displaying how to set up a NuGet service connection to authenticate with a feed in other organizations.":::

::: moniker range=">= azure-devops-2022"

> [!NOTE]
> The [NuGetAuthenticate@1](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) task supports service connections with basic authentication but does not support ApiKey authentication. If you need to use ApiKey authentication, you must use the [NuGetCommand@2](/azure/devops/pipelines/tasks/reference/nuget-command-v2) task instead.

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

- **NuGet.exe**:

    ```yaml
      - task: NuGetAuthenticate@1
        inputs:
          nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
          
      - script: |
          nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
        displayName: "Push"          
    ```

- **dotnet**:
  
    ```yaml
        - task: NuGetAuthenticate@1
          inputs:
            nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
            
        - script: |
            dotnet nuget push <PACKAGE_PATH> --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING>
          displayName: "Push"          
      ```

> [!NOTE]
> The `ApiKey` is required, but you can use any string when publishing to an Azure Artifacts feed.

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *NuGet* tasks to your pipeline definition and configure them as follows:

    :::image type="content" source="media/nuget/authenticate-and-publish-tasks-external-feed.png" alt-text="A screenshot displaying how to configure the publish task to a feed in other organization.":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **NuGet task**:

        - **Command**: *push*.
        - **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
        - **Target feed location**: select *External NuGet server (including other accounts/collections)*.
        - **NuGet server**: select the NuGet service connection that you created earlier.

- - -

::: moniker-end

::: moniker range="azure-devops-2020"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

- **NuGet.exe**:

    ```yaml
      - task: NuGetAuthenticate@0
        inputs:
          nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
          
      - script: |
          nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
        displayName: "Push"          
    ```

- **dotnet**:
  
    ```yaml
        - task: NuGetAuthenticate@0
          inputs:
            nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
            
        - script: |
            dotnet nuget push <PACKAGE_PATH> --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING>
          displayName: "Push"          
      ```

> [!NOTE]
> The `ApiKey` is required, but you can use any string when publishing to an Azure Artifacts feed.

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGetAuthenticate* and *NuGet* tasks to your pipeline definition and configure them as follows:

    :::image type="content" source="media/nuget/authenticate-and-publish-tasks-external-feed.png" alt-text="A screenshot displaying how to configure the NuGet publish task to a feed in other organization.":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **NuGet task**:

        - **Command**: *push*.
        - **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
        - **Target feed location**: select *External NuGet server (including other accounts/collections)*.
        - **NuGet server**: select the NuGet service connection that you created earlier.

- - -

::: moniker-end

## NuGet task package versioning

Semantic Versioning is composed of three numeric components: Major, Minor, and Patch.

- Patch: Increment this number after fixing a bug.
- Minor: Increment this number when releasing a new backward-compatible feature, and reset Patch to 0.
- Major: Increment this number for backward-incompatible changes, and reset both Minor and Patch to 0.

Semantic Versioning also supports the use of prerelease labels to tag packages. Simply append a hyphen followed by your prerelease tag, for example: **1.0.0-beta**. 

Azure Pipelines supports Semantic Versioning and provides the following configuration options for NuGet tasks::

- **Use the date and time** (Classic) | **byPrereleaseNumber** (YAML):

    Your package version will follow the format: *Major.Minor.Patch-ci-datetime* where you have the flexibility to customize the Major, Minor, and Patch values.

- **Use an environment variable** (Classic) | **byEnvVar** (YAML): 
    
    Your package version is set to the value of the specified environment variable. 

- **Use the build number** (Classic) | **byBuildNumber** (YAML): 
    
    Your package version is set to the build number. Make sure you define the build number format in your pipeline **Options** as `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)`. To specify the format in YAML, add a `name:` property at the root of your pipeline and define your format.


Here is an example demonstrating how to use the date and time versioning to generate a SemVer-compliant package formatted as: *Major.Minor.Patch-ci-datetime*.

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
> `DotNetCore` and `DotNetStandard` packages should be packaged with the `DotNetCoreCLI@2` task to avoid System.InvalidCastExceptions. See [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) for more details.

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
