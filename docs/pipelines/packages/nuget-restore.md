---
title: Restore NuGet packages in Azure Pipelines
description: How to restore your NuGet packages
ms.assetid: C3D7008E-7C23-49A4-9642-E5906DAE3BAD
ms.author: rabououn
ms.reviewer: rabououn
author: ramiMSFT
ms.custom: "seodec18, contperf-fy21q1"
ms.topic: conceptual
ms.date: 10/10/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Restore NuGet packages with Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With NuGet Package Restore you can install all your project's dependency without having to store them in source control. This allows for a cleaner development environment and a smaller repository size. You can restore your NuGet packages using the NuGet restore task, the NuGet CLI, or the .NET Core CLI. This article will show you how to restore your NuGet packages using both Classic and YAML Pipelines.

### Prerequisites

- An Azure DevOps organization. [Create an organization](../../organizations/accounts/create-organization.md), if you don't have one already.
- An Azure Artifacts feed. [Create a new feed](../../artifacts/get-started-nuget.md#create-a-feed) if you don't have one already.
- [Set up your project](../../artifacts/nuget/nuget-exe.md).
- [Set up your pipeline permissions](../../artifacts/feeds/feed-permissions.md#pipelines-permissions).

## Restore NuGet packages from a feed

### [Classic](#tab/classic/)

1. Navigate to your classic pipeline definition, and then select **Edit**.

1. Select **+** to add a new task. Search for **NuGet**, and then select **Add** to add the task to your pipeline.

1. Name your task and select **Restore** from the **Command**.

1. Select **Feed(s) I select here**, and select your feed from the dropdown menu. If you want to use your own config file, select **Feeds in my NuGet.config** and enter the path to your NuGet.config file and the service connection if you want to authenticate with feeds outside your organization.

1. If you want to include packages from NuGet.org, check the **Use packages from NuGet.org** checkbox.

1. Select **Save & queue** when you're done.

    :::image type="content" source="media/nuget-restore-classic.png" alt-text="Screenshot that shows how to configure the NuGet restore task.":::

> [!NOTE]
> Classic NuGet restore uses the [NuGetCommand@2](/azure/devops/pipelines/tasks/reference/nuget-command-v2) task. By default, this version uses NuGet 4.1.0. Use the [NuGet Tool Installer task](/azure/devops/pipelines/tasks/reference/nuget-tool-installer-v1) if you want to use a different NuGet version.

### [YAML](#tab/yaml/)

```YAML
- task: NuGetCommand@2
  displayName: NuGet v2 Restore
  inputs:
    command: restore                      
    restoreSolution: '**/*.sln'             ## Required when command = restore. Path to solution, packages.config, or project.json. Default: **/*.sln.
    feedsToUse: 'select'                    ## Required. Feeds to use. 'select' | 'config'. Alias: selectOrConfig. Default: select.
    vstsFeed: '<PROJECT_NAME>/<FEED_NAME>'  ## Required when feedsToUse == Select. Use packages from this Azure Artifacts feed. 
    includeNuGetOrg: true                   ## Use packages from upstream (NuGet.org)
```

* * *

## Restore NuGet packages locally

Place your `nuget.config` in the same folder as your `.csproj` or `.sln`file. Your config file should look similar to the following example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- remove inherited connection strings -->
    <clear />
    <!-- add an Azure Artifacts feed -->
    <add key="FabrikamFiber" value="https://pkgs.dev.azure.com/microsoftLearnModule/_packaging/FabrikamFiber/nuget/v3/index.json" />
    <!-- Get packages from NuGet.org -->
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
  </packageSources>
</configuration>
```

To restore your NuGet packages, run the following command in your project directory:

```Command
nuget.exe restore
```

## Restore NuGet packages from a feed in a different organization

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

::: moniker range="tfs-2018" 

### Q: How do I use the latest version of NuGet?

A: For new pipelines, the **NuGet Tool Installer** will be added automatically to any pipeline that uses a NuGet task. We periodically update the NuGet default version around the same time we install Visual Studio updates on the Hosted build agents.

For existing pipelines, add the **NuGet Tool Installer** to your pipeline and select the NuGet version for all the subsequent tasks. Check out the [dist.nuget](https://dist.nuget.org/tools.json) to see all the available versions.

:::image type="content" source="media/nuget-tool-installer.png" alt-text="Screenshot showing the NuGet tool installer task.":::

::: moniker-end 

## Related articles

- [Publish to NuGet feeds (YAML/Classic)](../artifacts/nuget.md)
- [Publish and consume build artifacts](../artifacts/build-artifacts.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)
