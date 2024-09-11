---
title: Publish NuGet packages with Azure Pipelines
description: Learn how to publish NuGet packages to internal and external feeds using Classic and YAML Pipelines.
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.topic: tutorial
ms.date: 09/11/2024
monikerRange: '<= azure-devops-2020'
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

::: moniker range="=> azure-devops-2022"

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

::: moniker range="=> azure-devops-2022"

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
