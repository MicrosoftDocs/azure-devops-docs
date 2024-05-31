---
title: Publish NuGet packages with Azure Pipelines
description: Learn how to publish your NuGet packages using YAML and Classic Pipelines.
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.topic: tutorial
ms.date: 05/31/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish NuGet packages with Azure Pipelines (YAML/Classic) 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can use either classic or YAML pipelines to publish your NuGet packages to your Azure Artifacts feed, external feeds, or public registries such as *nuget.org*. In this article, you will learn how to: 

> [!div class="checklist"]
>
> * Generate a NuGet package in Azure Pipelines
> * Publish packages to internal and external feeds
> * Publish packages to NuGet.org

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../../artifacts/get-started-npm.md#create-a-feed).

## Create a NuGet package

There are several ways to [create your NuGet packages](/nuget/create-packages/overview-and-workflow), such as using the dotnet or nuget.exe CLI to pack your packages. If you are already using MSBuild or other tasks to create your packages, you can skip this section and proceed to the next one.

#### [YAML](#tab/yaml/)

To create a NuGet package, add the following snippet to your YAML file. See [NuGet task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) for more details.

```yaml
- task: NuGetCommand@2
  inputs:
    command: pack
    packagesToPack: '**/*.csproj'
    packDestination: '$(Build.ArtifactStagingDirectory)'
```

- **packagesToPack**: the pattern that the task uses to search for csproj directories to pack.
- **packDestination**: directory where packages are created. If empty, packages will be created at the source root.

#### [Classic](#tab/classic/)

From your pipeline definition, add the **NuGet task** to your pipeline to create a NuGet package. Make sure to add this task below the one building your application and above any tasks that require your NuGet package.

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *NuGet task*, and then select **Add** to add it to your pipeline.

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *NuGet task*, and then select **Add** to add it to your pipeline.

::: moniker-end

4. Fill out the required fields as follows:

    - **Command:**: the NuGet command to run.
    - **Path to csproj or nuspec file(s) to pack**: the pattern that the task uses to search for csproj directories to pack.
    - **Configuration to package**: specifies the configuration to package when using a *.csproj* file.
    - **Package folder**: directory where packages are created. If empty, packages will be created at the source root.

    :::image type="content" source="media/nuget/create-packages-in-team-build.png" alt-text="A screenshot that shows how to configure the NuGet task in Azure Pipelines.":::

- - -

## Package versioning

NuGet packages are defined by their names and version numbers. Using Semantic Versioning is a recommended approach for effectively managing package versions. Semantic versions are comprised of three numeric components: Major, Minor, and Patch.

The *Patch* number is incremented after fixing a bug. When releasing a new backward-compatible feature, you increment the *Minor* version and reset the *Patch* version to 0. Conversely, when making a backward-incompatible change, you increment the *Major* version and reset both the *Minor* and *Patch* versions to 0.

Semantic Versioning also supports the use of prerelease labels to tag packages. Simply append a hyphen followed by your prerelease tag, for example: **1.0.0-beta**. 

Azure Pipelines supports Semantic Versioning and offers the following configuration options for NuGet tasks:

- **Use the date and time** (Classic) | **byPrereleaseNumber** (YAML):
    Your package version follows the format: *Major.Minor.Patch-ci-datetime* where you have the flexibility to customize the Major, Minor, and Patch values.

- **Use an environment variable** (Classic) | **byEnvVar** (YAML): 
    Your package version is set to the value of the specified environment variable. 

- **Use the build number** (Classic) | **byBuildNumber** (YAML): 
    Your package version is set to the build number. Make sure you define the build number format in your pipeline  **Options** as `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)`. To specify the format in YAML, add a `name:` property at the root of your pipeline and define your format.

Below is an example demonstrating how to use the date and time versioning to generate a SemVer-compliant package formatted as: *Major.Minor.Patch-ci-datetime*.

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

From your classic pipeline definition, select your NuGet task, choose **Pack** from the commands dropdown, and then select **Use the date and time**.

:::image type="content" source="media/package-versioning-classic.png" alt-text="A screenshot that shows how to enable package versioning in a classic pipeline.":::

- - -

## Publish packages to internal feeds

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, make sure that both the **Project Collection Build Service** and your project's **Build Service** identities are granted the **Feed Publisher (Contributor)** role assigned in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for more details.

#### [YAML](#tab/yaml/)

```yaml
steps:
- task: NuGetAuthenticate@1
  displayName: 'NuGet Authenticate'
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    publishVstsFeed: '<projectName>/<feed>'
    allowPackageConflicts: true
```

#### [Classic](#tab/classic/)

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGet task* to your pipeline definition and configure it as follows:

- **Command**: *push*.
- **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
- **Target feed location**: you can publish to your current organization or an external NuGet server.
- **Target feed**: the feed that you want to publish to.

:::image type="content" source="media/nuget/publish-packages-from-team-build.png" alt-text="A screenshot that shows how to configure the NuGet publish task in Azure Pipelines.":::

- - -

## Publish packages to external feeds

To publish your packages to external NuGet feeds or public registries, such as feeds in other Azure DevOps organizations or nuget.org, you must first create a service connection to authenticate with the respective service:

1. From your Azure DevOps project navigate to **Project settings** > **Service connections** > 

1. Select **New service connection** > **NuGet** > **Next**. 

1. Fill out the required fields and then select **Save** when you're done. See [Manage service connections](../library/service-endpoints.md) for more details.  

#### [YAML](#tab/yaml/)

> [!NOTE]
> The [NuGetAuthenticate@1 task](/azure/devops/pipelines/tasks/reference/nuget-authenticate-v1) supports service connections with basic authentication but does not support Apikey authentication. To use ApiKey authentication, you must use the [NuGetCommand@2 task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) instead.

To publish your NuGet packages to a feed in a different organization, add the following snippet to your YAML pipeline:

- **Using the [Command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2) and NuGet.exe**:

    ```yaml
      - task: NuGetAuthenticate@1
        inputs:
          nuGetServiceConnections: <NAME_OF_YOUR_SERVICE_CONNECTION>
          
      - script: |
          nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
        displayName: "Push"          
    ```

- **Using the [Command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2) and dotnet**:
  
    ```yaml
        - task: NuGetAuthenticate@1
          inputs:
            nuGetServiceConnections: <NAME_OF_YOUR_SERVICE_CONNECTION>
            
        - script: |
            dotnet build <CSPROJ_PATH> --configuration <CONFIGURATION>
            dotnet pack <CSPROJ_PATH> -p:PackageVersion=<YOUR_PACKAGE_VERSION> --output <OUTPUT_DIRECTORY> --configuration <CONFIGURATION>
            dotnet nuget push <PACKAGE_PATH> --source https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json --api-key <ANY_STRING>
          displayName: "Build, pack and push"          
      ```

> [!NOTE]
> The `ApiKey` is required, but you can use any string when publishing to an Azure Artifacts feed.

#### [Classic](#tab/classic/)

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGet task* to your pipeline definition and configure it as follows:

    - **Command**: *push*.
    - **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
    - **Target feed location**: choose *External NuGet server (including other accounts/collections)*.
    - **NuGet server**: select the NuGet service connection that you created earlier.

- - -

## Publish to NuGet.org

1. Sign in to your nuget.org account and [Generate an API key](../../artifacts/nuget/publish-to-nuget-org.md#generate-an-api-key).

1. Navigate to your Azure DevOps project and then select ![gear icon](../../media/icons/gear-icon.png) **Project settings**.

1. Select **Service Connections**, and then select **New service connection**.

1. Select **NuGet**, and then select **Next**.

1. Select **ApiKey** as your authentication method, and use the following url for your **Feed URL**: *https://api.nuget.org/v3/index.json*. 

1. Enter the **ApiKey** you generated earlier, then provide a **Service connection name**. 

1. Select **Grant access permission to all pipelines**, and then select **Save** when you're done. Note that you need the [service connection](../library/add-resource-protection.md) Administrator role to select this option. 

#### [YAML](#tab/yaml/)

```yml
steps:
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: nuget.org
```

#### [Classic](#tab/classic/)

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *NuGet task* to your pipeline definition and configure it as follows:

    - **Command**: *push*.
    - **Path to NuGet package(s) to publish**: the pattern to match or the path to the *nupkg* files.
    - **Target feed location**: choose *External NuGet server (including other accounts/collections)*.
    - **NuGet server**: select the NuGet service connection that you created earlier.

    :::image type="content" source="media/push-to-nuget-org.png" alt-text="A screenshot that shows how to configure the NuGet task to publish packages to nuget.org.":::

- - -

## Related articles

- [Publish npm packages with Azure Pipelines](./npm.md)
- [Use packages from NuGet.org](../../artifacts/nuget/upstream-sources.md)
- [Publish and download Universal Packages with Azure Pipelines](./universal-packages.md)
