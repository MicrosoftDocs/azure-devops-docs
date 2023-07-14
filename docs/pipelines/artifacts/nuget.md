---
title: Publish NuGet packages with Pipeline tasks or the classic editor 
ms.custom: seodec18
description: How to publish NuGet packages with Azure Pipelines using YAML and the classic editor
services: vsts
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.topic: conceptual
ms.date: 01/04/2023
monikerRange: '<= azure-devops'
---

# Publish NuGet packages with Azure Pipelines (YAML/Classic) 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In Azure Pipelines, you can use the classic editor or the YAML tasks to publish your NuGet packages within your pipeline, to your Azure Artifacts feed, or to public registries such as *nuget.org*.

## Create a NuGet package

There are various ways to create your NuGet packages such as using Visual Studio to pack your NuGet packages. If you're already using MSBuild or some other task to create your packages, skip this section and jump to the [publish NuGet packages](#publish-nuget-packages) section.

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

To create a NuGet package, add the following snippet to your pipeline YAML file. See [NuGet task](/azure/devops/pipelines/tasks/reference/nuget-command-v2) for more details.

```yaml
- task: NuGetCommand@2
  inputs:
    command: pack
    packagesToPack: '**/*.csproj'
    packDestination: '$(Build.ArtifactStagingDirectory)'
```

- **packagesToPack**: pattern to search for csproj directories to pack
- **packDestination**: directory where packages will be created

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

From your pipeline definition, add the **NuGet task** to your pipeline to create a NuGet package. Make sure to add this task below the one building your application and above any tasks that require your NuGet package.

- **Command:** the NuGet command to run.
- **Path to csproj or nuspec file(s) to pack**: pattern to search for csproj directories to pack.
- **Configuration to package**: when using a csproj file this specifies the configuration to package.
- **Package folder**: directory where packages will be created.

:::image type="content" source="media/nuget/create-packages-in-team-build.png" alt-text="Screenshot showing the NuGet pack task in Azure Pipelines.":::

- - -

## Package versioning

NuGet packages are distinguished by their names and version numbers. Employing Semantic Versioning is a recommended strategy for effectively managing package versions. Semantic versions consist of three numeric components: Major, Minor, and Patch. 

The *Patch* is usually incremented after fixing a bug. When you release a new backward-compatible feature, you increment the *Minor* version and reset the *Patch* version to 0, and when you make a backward-incompatible change, you increment the *Major* version and reset the *Minor* and *Patch* versions to 0.

With Semantic Versioning, you can also use prerelease labels to tag your packages. To do so, enter a hyphen followed by your prerelease tag: E.g.**1.0.0-beta**. Semantic Versioning is supported in Azure Pipelines and can be configured in your NuGet task as follows:

- **Use the date and time** (Classic): **byPrereleaseNumber** (YAML). Your package version will be in the format: *Major.Minor.Patch-ci-datetime* where you have the flexibility to choose the values of your Major, Minor, and Patch.

- **Use an environment variable** (Classic): **byEnvVar** (YAML). Your package version will be set to the value of the environment variable you specify. 

- **Use the build number** (Classic): **byBuildNumber** (YAML). Your package version will be set to the build number. Make sure you set your build number format under your pipeline **Options** to `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)`. To do this in YAML, add a property `name:` at the root of your pipeline and add your format. 

The following example shows how to use the date and time versioning option. This will generate a SemVer compliant version formatted as: `Major.Minor.Patch-ci-datetime`.

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

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
::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

1. From your classic pipeline definition, select your NuGet task, select **Pack options** and then select **Use the date and time**.

    :::image type="content" source="media/package-versioning-classic.png" alt-text="Screenshot showing how to enable package versioning in the NuGet task.":::

- - -

> [!NOTE]
> `DotNetCore` and `DotNetStandard` packages should be packaged with the `DotNetCoreCLI@2` task to avoid System.InvalidCastExceptions. See the [.NET Core CLI task](/azure/devops/pipelines/tasks/reference/dotnet-core-cli-v2) for more details.


```yaml
task: DotNetCoreCLI@2
inputs:
    command: pack
    versioningScheme: byPrereleaseNumber
    majorVersion: '$(Major)'
    minorVersion: '$(Minor)'
    patchVersion: '$(Patch)'
```

## Publish NuGet packages

To publish packages to an Azure Artifacts feed from your pipeline, you must set the **Project Collection Build Service** identity to be a **Contributor** on your feed. See [Configure feed settings](../../artifacts/feeds/feed-permissions.md#configure-feed-settings) for more details. 

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

```yaml
steps:
- task: NuGetAuthenticate@0
  displayName: 'NuGet Authenticate'
- task: NuGetCommand@2
  displayName: 'NuGet push'
  inputs:
    command: push
    publishVstsFeed: '<projectName>/<feed>'
    allowPackageConflicts: true
```

To publish a package to an external NuGet feed, you must first create a service connection to connect to that feed. You can do this by going to **Project settings** > **Service connections** > **New service connection**. Select **NuGet**, and then select **Next**. Fill out the form and then select **Save** when you're done. See [Manage service connections](../library/service-endpoints.md) for more details.

To publish a package to an external NuGet feed, add the following snippet to your YAML pipeline.

**Using the** [Command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2) (with NuGet.exe):

```yaml
  - task: NuGetAuthenticate@1
    inputs:
      nuGetServiceConnections: <NAME_OF_YOUR_SERVICE_CONNECTION>
      
  - script: |
      nuget push <PACKAGE_PATH> -src https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json -ApiKey <ANY_STRING>
    displayName: "Push"          
```

**Using the** [Command line task](/azure/devops/pipelines/tasks/reference/cmd-line-v2) (with dotnet):

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
> The `ApiKey` is required, but you can use any arbitrary value when pushing to Azure Artifacts feeds.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

To publish NuGet packages with Azure Pipelines, add the **NuGet** task to your pipeline definition and configure it as follows:

- **Command**: the NuGet command to run.
- **Path to NuGet package(s) to publish**:the pattern to match or path to nupkg files to be uploaded.
- **Target feed location**: You can publish to your current organization or an external NuGet server.
- **Target feed**: Select the feed that you want to publish to.

:::image type="content" source="media/nuget/publish-packages-from-team-build.png" alt-text="Screenshot showing how to configure the NuGet task in Azure Pipelines":::

::: moniker range="tfs-2018"

> [!NOTE]
> If you are running TFS Update 2 or older, **Nuget** is not a service endpoint option. You must use the **Generic** service connection.

::: moniker-end

- - -

## Publish to NuGet.Org

1. [Generate an API key](../../artifacts/nuget/publish-to-nuget-org.md#generate-an-api-key)

1. Navigate to your Azure DevOps project and then select ![gear icon](../../media/icons/gear-icon.png) **Project settings**.

1. Select **Service Connections**, and then select **New service connection**.

1. Select **NuGet**, and then select **Next**.

1. Select **ApiKey** as your authentication method. Use the following url for your **Feed URL**: *https://api.nuget.org/v3/index.json*. 

1. Enter the **ApiKey** you generated earlier, and then enter a **Service connection name**. 

1. Select **Grant access permission to all pipelines**, and then select **Save** when you're done. To select this option, you'll need the [service connection **Administrator** role](../library/add-resource-protection.md). 


#### [YAML](#tab/yaml/)

Add the following YAML snippet to your pipeline definition:

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

Add the NuGet task to your pipeline definition and configure it as follows:

1. Select the Push **Command**.

1. Select the **Path to NuGet package(s) to publish** or keep the default value. 

1. Select **External NuGet server** for your **Target feed location**, and then select the service connection you created earlier.

1. Select **Save & queue** when you're done.

:::image type="content" source="media/push-to-nuget-org.png" alt-text="Screenshot showing how to configure the NuGet push task in Azure Pipelines":::

* * *

## Related articles

- [Publish npm packages with Azure Pipelines](./npm.md)
- [Publish and download Universal Packages in Azure Pipelines](./universal-packages.md)
- [Releases in Azure Pipelines](../release/releases.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
