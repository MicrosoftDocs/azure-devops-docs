---
title: Restore NuGet packages with Azure Pipelines
description: Learn how to restore your NuGet packages with Classic and YAML Pipelines.
ms.assetid: C3D7008E-7C23-49A4-9642-E5906DAE3BAD
ms.author: rabououn
ms.reviewer: rabououn
author: ramiMSFT
ms.topic: how-to
ms.date: 11/12/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Restore NuGet packages with Azure Pipelines (YAML/Classic) 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With NuGet Package Restore you can install all your project's dependency without needing to store them in source control. This allows for a cleaner development environment and a smaller repository size. You can restore your NuGet packages using the NuGet restore task, the NuGet CLI, or the .NET Core CLI. This article will guide you through restoring your NuGet packages using both Classic and YAML Pipelines.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- Create a [new feed](../../artifacts/get-started-nuget.md#create-feed) if you don't have one already.

- If you're using a self-hosted agent, make sure that it has the [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download) and [NuGet (4.8.0.5385+)](https://www.nuget.org/downloads) installed.

## Restore NuGet packages from a feed in the same organization

### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

```yaml
steps:
- task: NuGetAuthenticate@1

- task: NuGetToolInstaller@1
  inputs:
    versionSpec: '*'
    checkLatest: true

- script: nuget restore <SOLUTION_PATH>
```

### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select **+** to add a new task. Add the *NuGet tool installer*, *NuGet Authenticate*, and *Command line* tasks to your pipeline. Leave the *NuGet tool installer* and *NuGet Authenticate* tasks with their default settings and configure the *Command line* task as follows:

  - **Display name**: Restore.
  - **Script**: 
      ```
      nuget.exe restore <SOLUTION_PATH>
      ```

1. Select **Save & queue** when you're done.

> [!NOTE]
> Make sure that The NuGet Gallery upstream is enabled in your feed. See [Enable upstream sources in an existing feed](../../artifacts/how-to/set-up-upstream-sources.md#enable-upstream-sources-in-an-existing-feed)
* * *

## Restore NuGet packages from a feed in a another organization

To restore NuGet packages from a feed in a different Azure DevOps organization, you must use a personal access token to authenticate.

#### Create a personal access token

1. Navigate to your Azure DevOps organization, and then select **User settings** > **Personal Access Tokens**.

    :::image type="content" source="media/pat.png" alt-text="Screenshot showing how to create a personal access token.":::

1. Create a personal access token with **Packaging (read)** scope and copy your PAT to the clipboard.

    :::image type="content" source="media/create-read-feed-pat.png" alt-text="A screenshot showing how to create a personal access token with packaging read permissions.":::

#### Restore NuGet packages

### [Classic](#tab/classic/)

1. Navigate to your pipeline definition and select the **NuGet restore** task. Make sure you're using version 2 of the task.

    :::image type="content" source="media/nuget-v-2.png" alt-text="Screenshot showing the NuGet restore task version.":::

1. Select **Feeds and authentication**, and then select **Feeds in my NuGet.config**.
1. Select the path of your *NuGet.config* file.
1. Select **New** to add **Credentials for feeds outside this organization/collection**.

    :::image type="content" source="media/feeds-and-authentication.png" alt-text="Screenshot showing how to configure the NuGet restore task.":::

1. Select **External Azure DevOps Server**, and then enter your feed URL (make sure it matches what's in your NuGet.config), your service connection name, and the personal access token you created earlier. Select **Save** when you're done.

    :::image type="content" source="media/external-server-service-connection.png" alt-text="Screenshot showing how to add a new service connection.":::

1. Select **Save & queue** when you're done.

### [YAML](#tab/yaml/)

```yml
- task: NuGetCommand@2
  displayName: NuGet Restore
  inputs:
    restoreSolution: '**/*.sln'                     ## Required when command = restore. Path to your project's solution, packages.config, or project.json.
    feedsToUse: 'config'                            ## Required. 'select' | 'config'. Default: select.
    nugetConfigPath: 'Deployment/NuGet.config'      ## Required when selectOrConfig = config. Path to your nuget.config file.
    externalFeedCredentials: 'MyServiceConnection'  ## Use when selectOrConfig = config. The name of your service connection. Credentials for feeds outside your organization/collection.  
```

* * *

## FAQ

### Q: My pipeline is failing to restore my NuGet packages?

A: The NuGet restore task can fail for several reasons. The most common scenario is when you add a new project that requires a [target framework](/nuget/schema/target-frameworks) that is not supported by the NuGet version your pipeline is using. This failure doesn't occur generally in the local development environment because Visual Studio takes care of updating your solution accordingly. Make sure you upgrade your NuGet task to the latest version.

 

## Related articles

- [Publish to NuGet feeds (YAML/Classic)](../artifacts/nuget.md)
- [Publish and consume build artifacts](../artifacts/build-artifacts.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/resources/3-ways-to-mitigate-risk-using-private-package-feeds/en-us/)
