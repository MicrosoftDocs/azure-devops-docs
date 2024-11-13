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

* * *

> [!NOTE]
> Make sure that The NuGet Gallery upstream is enabled in your feed. See [Enable upstream sources in an existing feed](../../artifacts/how-to/set-up-upstream-sources.md#enable-upstream-sources-in-an-existing-feed)

## Restore NuGet packages from a feed in another organization

To restore NuGet packages from a feed in a different Azure DevOps organization, you must first create a personal access token then use it to create a NuGet service connection.

#### Create a personal access token

1. Navigate to your Azure DevOps organization, and then select **User settings** > **Personal Access Tokens**.

    :::image type="content" source="media/pat.png" alt-text="Screenshot showing how to create a personal access token.":::

1. Create a new personal access token with **Packaging*** >  **Read** scope. Copy your PAT as you'll need it in the following section.

1. Select **Create** when you're done.

    :::image type="content" source="media/create-new-pat-updated.png" alt-text="A screenshot showing how to create a personal access token with packaging read permissions.":::

#### Create a service connection

1. Sign in to the Azure DevOps organization where your pipeline will run, and then navigate to your project.

1. Navigate to your **Project settings** > **Service connections**. 

1. Select **New service connection**, select **NuGet**, and then select **Next**. 

1. Select **External Azure DevOps Server** as the **Authentication method**, and then enter your target **Feed URL**. Paste the **Personal Access Token** you created earlier, provide a name for your service connection, and check **Grant access permission to all pipelines** if applicable to your scenario.

1. Select **Save** when you're done.

    :::image type="content" source="media/new-service-connection-nuget-restore.png" alt-text="A screenshot showing how to create a new NuGet service connection.":::

#### Restore packages

### [YAML](#tab/yaml/)

```yaml
- task: NuGetToolInstaller@1
  inputs:
    versionSpec: '*'
    checkLatest: true

- task: NuGetAuthenticate@1
  inputs:
    nuGetServiceConnections: <SERVICE_CONNECTION_NAME>
    
- script: |
      nuget.exe restore <SOLUTION_PATH>
  displayName: Restore       
```

### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select **+** to add a new task. Add the *NuGet tool installer*, *NuGet Authenticate*, and *Command line* tasks to your pipeline. Leave the *NuGet tool installer* with its default settings and configure the other tasks as follows:

    1. NuGet Authenticate task: select your service connection from the **Service connection credentials for feeds outside this organization** dropdown menu.
    
    1. Command line task:
        - **Display name**: Restore.
        - **Script**: 
            ```
            nuget.exe restore <SOLUTION_PATH>
            ```

1. Select **Save & queue** when you're done.

* * *

## Related content

- [Publish packages to internal and external feeds](../artifacts/pipeline-artifacts.md)
- [Publish and download pipeline artifacts](../artifacts/build-artifacts.md)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)
