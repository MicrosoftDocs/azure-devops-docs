---
title: Publish NuGet packages with Azure Pipelines
description: Learn how to publish NuGet packages to internal and external feeds using Classic and YAML Pipelines.
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.topic: tutorial
ms.date: 12/12/2025
monikerRange: '>= azure-devops-2022'
"recommendations": "true"
---

# Publish NuGet packages with Azure Pipelines (YAML/Classic) 

[!INCLUDE [version-gt-eq-2022](../../includes/version-gt-eq-2022.md)]

Azure Pipelines enables developers to publish packages to Azure Artifacts feeds within their organization, to feeds in other organizations, and to public registries such as nuget.org. This article explains how to publish NuGet packages to both internal and external feeds using Classic and YAML pipelines.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../../artifacts/start-using-azure-artifacts.md#create-a-new-feed).<br> - If you're using a self-hosted agent, make sure that it has the [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) and [NuGet](https://www.nuget.org/downloads) installed.<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |


> [!NOTE]
> If you're using Ubuntu 24.04 or later, you must use the `NuGetAuthenticate` task with the *.NET CLI* instead of *nuget.exe*. See [Support for newer Ubuntu hosted images](/azure/devops/pipelines/tasks/reference/nuget-command-v2#support-for-newer-ubuntu-hosted-images) for more details.

## Publish NuGet packages to a feed in the same organization

If you don't have a feed yet, you can create a [new one](../../artifacts/get-started-nuget.md#create-a-feed), otherwise follow these steps to publish your NuGet package to a feed within the same organization:

::: moniker range="azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select your pipeline definition.

1. Select **Edit**, then add the following snippet to your YAML pipeline to authenticate and publish your package:

    ```yaml
    steps:
    - task: NuGetToolInstaller@1                            # Minimum required NuGet version: 4.8.0.5385+.
      displayName: 'NuGet Tool Installer'
    
    - task: NuGetAuthenticate@1                            # Authenticate with Azure Artifacts and other NuGet registries.
      displayName: 'NuGet Authenticate'
    
    - script: |
          nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select your pipeline definition. 

1. Select **Edit**, then select the `+` sign to add a new task. Add the **NuGet tool installer**, **NuGet Authenticate** and **Command line** tasks to your pipeline definition. You can leave the *NuGet tool installer* and *NuGet Authenticate* tasks with their default settings and configure the *Command line* task as follows:

    - **Display name**: *Push*.
    - **Script**: 
        ```script
        nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
        ```

    :::image type="content" source="media/nuget/nuget-push-cli-task.png" alt-text="A screenshot displaying how to configure the publish task in Azure Pipelines." lightbox="media/nuget/nuget-push-cli-task.png":::

- - -

::: moniker-end

::: moniker range=">= azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select your pipeline definition.

1. Select **Edit**, then add the following snippet to your YAML pipeline to authenticate and publish your package:

    ```yaml
    steps:
    - task: NuGetToolInstaller@1                            # Minimum required NuGet version: 4.8.0.5385+.
      displayName: 'NuGet Tool Installer'
    
    - task: NuGetAuthenticate@1
      displayName: 'NuGet Authenticate'
    
    - script: |
          nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps, then navigate to your project.

1. Select **Pipelines**, then select your pipeline definition. 

1. Select **Edit**, then select the `+` sign to add a new task. Add the **NuGet tool installer**, **NuGet Authenticate** and **Command line** tasks to your pipeline definition. You can leave the *NuGet tool installer* and *NuGet Authenticate* tasks with their default settings and configure the *Command line* task as follows:

    - **Display name**: *Push*.
    - **Script**: 
        ```script
        nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
        ```

    :::image type="content" source="media/nuget/nuget-push-cli-task.png" alt-text="A screenshot displaying how to configure the CLI publish task in Azure Pipelines." lightbox="media/nuget/nuget-push-cli-task.png":::

- - -

::: moniker-end

> [!NOTE]
> To publish packages to a feed using Azure Pipelines, ensure that both the **Project Collection Build Service** and your project's **Build Service** identities have the **Feed Publisher (Contributor)** role assigned in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for more details.

## Publish NuGet packages to a feed in another organization

To publish your NuGet packages to a feed in a different Azure DevOps organization, you must first create a personal access token (PAT) in the target organization, then create a service connection in the organization where your pipeline runs. You can then use the service connection in your YAML or Classic pipeline to authenticate and publish your packages.

### 1. Create a personal access token

1. Sign in to the Azure DevOps organization that hosts your target feed.

1. Navigate to **User Settings** >  **Personal access tokens**.

1. Select **New Token**, provide a descriptive name, then under **Scopes**, select **Packaging** > **Read & write**.

1. Select **Create** when you're done, then copy and store your PAT in a secure location, as you'll need it to set up the service connection next.

### 2. Create a service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **NuGet**, and then select **Next**. 

1. Select **External Azure DevOps Server** as the **Authentication method**, and then enter your target **Feed URL**. Paste the **Personal Access Token** you created earlier, provide a name for your service connection, and check **Grant access permission to all pipelines** if applicable to your scenario.

1. Select **Save** when you're done.

    :::image type="content" source="media/nuget/nuget-service-connection-external-devops-server.png" alt-text="A screenshot displaying how to set up a NuGet service connection to authenticate with an external feed in a different organization." lightbox="media/nuget/nuget-service-connection-external-devops-server.png":::

### 3. Publish your package

::: moniker range=">= azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline to authenticate and publish your package:

    ```yaml
    - task: NuGetToolInstaller@1                                # Minimum required NuGet version: 4.8.0.5385+.
      displayName: 'NuGet Tool Installer'

    - task: NuGetAuthenticate@1
      inputs:
        nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
        
    - script: |
          nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push       
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the **NuGet tool installer**, **NuGet Authenticate** and **Command line** tasks to your pipeline definition. You can leave the *NuGet tool installer* with its default settings and configure the other tasks as follows:

    :::image type="content" source="media/nuget/nuget-push-cli-task.png" alt-text="A screenshot displaying how to configure the publish task to a feed in another organization." lightbox="media/nuget/nuget-push-cli-task.png":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **Command line task**:
        - **Display name**: *Push*.
        - **Script**: 
            ```script
            nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
            ```

- - -

::: moniker-end

::: moniker range="azure-devops-2022"

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    - task: NuGetToolInstaller@1                            # Minimum required NuGet version: 4.8.0.5385+.
      displayName: 'NuGet Tool Installer'

    - task: NuGetAuthenticate@1                            # Authenticate with Azure Artifacts and other NuGet registries.
      inputs:
        nuGetServiceConnections: <SERVICE_CONNECTION_NAME>        # Name of the service connection used to authenticate with feeds across organizations or public registries.
      
    - script: |
        nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
      displayName: Push          
    ```

#### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the **NuGet tool installer**, **NuGet Authenticate** and **Command line** tasks to your pipeline definition. You can leave the *NuGet tool installer* with its default settings and configure the other tasks as follows:

    :::image type="content" source="media/nuget/nuget-push-cli-task.png" alt-text="A screenshot displaying how to configure the CLI publish task to a feed in another organization." lightbox="media/nuget/nuget-push-cli-task.png":::

    1. **NuGet Authenticate task**: select your service connection from the *Service connection credentials for feeds outside this organization* dropdown menu.
    
    1. **Command line task**:
        - **Display name**: *Push*.
        - **Script**: 
            ```script
            nuget.exe push -Source "https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/nuget/v3/index.json" -ApiKey az $(Build.ArtifactStagingDirectory)\*.nupkg
            ```

- - -

::: moniker-end

:::image type="content" source="media/nuget/package-published-to-external-feed.png" alt-text="A screenshot displaying the package successfully published to a feed in a different organization." lightbox="media/nuget/package-published-to-external-feed.png":::

## Related content

- [Restore NuGet Packages (YAML/Classic)](../packages/nuget-restore.md)

- [Publish NuGet packages to NuGet.org using Azure Pipelines](publish-public-registry.md)

- [Publish and download pipeline artifacts](pipeline-artifacts.md)
