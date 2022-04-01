---
title: Restore NuGet packages in Azure Pipelines
description: How to restore your NuGet packages
ms.assetid: C3D7008E-7C23-49A4-9642-E5906DAE3BAD
ms.author: rabououn
ms.reviewer: rabououn
author: ramiMSFT
ms.custom: "seodec18, contperf-fy21q1"
ms.topic: conceptual
ms.date: 10/29/2021
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Restore NuGet packages in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With NuGet package, restore you can install all your project's dependency without having to store them in source control. This allows for a cleaner development environment and a smaller repository size. You can restore your NuGet packages using the NuGet restore task, the NuGet CLI, or the .NET Core CLI. This article will show you how to restore your NuGet packages using both the YAML and the classic Azure Pipelines. 

### Prerequisites

- [Set up your solution](../../artifacts/nuget/consume.md) to consume packages from Azure Artifacts feed.
- [Create your first pipeline](../create-first-pipeline.md).
- [Set up permissions for your pipelines](../../artifacts/feeds/feed-permissions.md#pipelines-permissions).

## Restore packages with NuGet restore

1. Navigate to your pipeline definition, and then select **Edit**.
1. Select **+** to add a new task. Search for **NuGet**, and then select **Add** to add the task to your pipeline.
1. Fill out the required fields.

    :::image type="content" source="media/restore-pkgs-on-build.png" alt-text="Screenshot showing how to configure the NuGet restore task.":::

1. Select **Feeds in my NuGet.config** if you want to use your own config file otherwise select **Feed(s) I select here**, and select your feed from the dropdown menu.
1. Check the **Use packages from NuGet.org** checkbox if you want to include packages from NuGet.org.
1. Select **Save & queue** when you are done.

## Restore packages with NuGet CLI

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

## Restore packages with the .NET Core CLI task

```YAML
- task: DotNetCoreCLI@2
  displayName: dotnet restore
  inputs:
    command: restore
    projects: '**/*.csproj'
    feedsToUse: 'select'
    vstsFeed: '<projectName>/<feedName>'
    includeNuGetOrg: true
```

- `command`: The dotnet command to run. Options: `build`, `push`, `pack`, `restore`, `run`, `test`, and `custom`.
- `projects`: The path to the csproj file(s) to use. You can use wildcards (example: **/*.csproj for all .csproj files in all subfolders).
- `feedsToUse`: You can either choose to select a feed or commit a NuGet.config file to your source code repository and set its path using `nugetConfigPath`. Options: `select`, `config`.
- `vstsFeed`: This argument is required when `feedsToUse` == `Select`. Value format: `<projectName>/<feedName>`.
- `includeNuGetOrg`: Use packages from NuGet.org.

## Restore packages from feeds in a different organization

To restore NuGet packages from feeds in a different Azure DevOps organization, you must set up authentication to those feeds manually.
 
1. Select an account (either a service account (recommended) or a user account) that has access to the remote feed.
1. In your browser, open a Private mode, Incognito mode, or a similar mode window and navigate to the Azure DevOps organization hosting the remote feed. Sign in, and then select **User settings** -> **Personal Access Tokens**.

    :::image type="content" source="media/pat.png" alt-text="Screenshot showing how to create a personal access token":::

1. Create a personal access token with **Packaging (read)** scope and copy your pat to the clipboard.
1. Navigate to your pipeline definition and select the **NuGet restore** task. Make sure you're using version 2 or greater.

    :::image type="content" source="media/nuget-v-2.png" alt-text="Screenshot showing the NuGet restore task version":::

1. Select the **Feeds and authentication** section, and then select **Feeds in my NuGet.config** option.
1. Enter the path to your NuGet.config file.
1. Select **New** to add **Credentials for feeds outside this organization/collection**.

    :::image type="content" source="media/feeds-and-authentication.png" alt-text="Screenshot showing how to configure the NuGet restore task":::

1. Select **External Azure DevOps Server**, and then enter a connection name, the feed URL (make sure it matches what's in your NuGet.config) and the PAT you created in step 3.

    :::image type="content" source="media/service-connection.png" alt-text="Screenshot showing how to add a NuGet service connection":::

1. Select **Save & queue** when you are done.

## FAQ

### My pipeline is failing to restore my NuGet packages?

The NuGet restore task can fail for several reasons. The most common scenario is when you add a new project that requires a [target framework](/nuget/schema/target-frameworks) that is not supported by the NuGet version your pipeline is using. This failure doesn't occur generally in the local development environment because Visual Studio takes care of updating your solution accordingly. Make sure you upgrade your NuGet task to the latest version.

::: moniker range="= tfs-2018" 

### How do I use the latest version of NuGet?

For new pipelines, the **NuGet Tool Installer** will be added automatically to any pipeline that uses a NuGet task. We periodically update the NuGet default version around the same time we install Visual Studio updates on the Hosted build agents.

For existing pipelines, add the **NuGet Tool Installer** to your pipeline and select the NuGet version for all the subsequent tasks. Check out the [dist.nuget](https://dist.nuget.org/tools.json) to see all the available versions.

:::image type="content" source="media/nuget-tool-installer.png" alt-text="Screenshot showing the NuGet tool installer task":::

::: moniker-end 

::: moniker range="<=tfs-2017" 

### How do I use the latest version of NuGet?

The NuGet Tool Installer is not available in only available in TFS 2018. We recommended the following workaround to use NuGet version 4.0.0 or higher in your pipeline.

1. Add the **NuGet** task to your pipeline definition..
1. Select version `0.*` for your NuGet/NuGet Installer tasks.
1. Set the **NuGet Version** to "Custom" and the **Path to NuGet.exe** to `$(Build.BinariesDirectory)\nuget.exe` in the **Advanced** section. 
1. Add a **PowerShell** task BEFORE your NuGet task, and then select **Inline Script** and paste the following script in the script text area. The script will check if the version is 4.0.0 or higher and update the task version if needed.

    ```PowerShell
    if (-not (Test-Path $(Build.BinariesDirectory)\nuget.exe))
    {
        $doDownload = $true
    }
    else
    {
        $nuGetVersion = Get-ChildItem $(Build.BinariesDirectory)\nuget.exe | %{$_.VersionInfo} | %{$_.ProductVersion}
        if ([System.Version]$nuGetVersion -lt [System.Version]"4.0.0")
        {
            $doDownload = $true
        }
    }
    if($doDownload)
    {
        Invoke-WebRequest https://dist.nuget.org/win-x86-commandline/v4.0.0/nuget.exe -OutFile $(Build.BinariesDirectory)\nuget.exe
    }
    ```

We appreciate the contribution of our community for creating the original version of the [PowerShell script](https://github.com/Microsoft/azure-pipelines-tasks/issues/3756#issuecomment-288185011) mentioned above.

::: moniker-end 

## Related articles

- [Publish to NuGet feeds (YAML/Classic)](../artifacts/nuget.md)
- [Publish and consume build artifacts](../artifacts/build-artifacts.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)
