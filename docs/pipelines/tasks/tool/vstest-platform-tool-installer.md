---
title: Visual Studio Test Platform Installer task
description: Acquires the test platform from nuget.org or the tools cache and can allow you to run tests and collect diagnostic data
ms.topic: reference
ms.assetid: 2C65196A-54FD-4A02-9BE8-D9D1837B7111
ms.custom: seodec18
ms.author: shashban
author: shashban
ms.date: 04/21/2020
monikerRange: 'azure-devops'
---

# Visual Studio Test Platform Installer task

**Azure DevOps Services | TFS 2018 Update 2**

Use this task to acquire the [Microsoft test platform](https://www.nuget.org/packages/Microsoft.TestPlatform/)
from nuget.org or a specified feed, and add it to the tools cache. The installer task satisfies the 'vstest'
demand and a subsequent [Visual Studio Test task](../test/vstest.md)
in a build or release pipeline can run without needing a full Visual Studio install on the agent machine. 

## Demands

[none]

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/VsTestPlatformToolInstallerV1.md)]

::: moniker-end

## Arguments

| Argument | Description | 
| --- | --- | 
| `packageFeedSelector`<br/>Package Feed | (Required) Can be: <br />**Official NuGet** - Use this option to acquire the [test platform package from NuGet](https://www.nuget.org/packages/Microsoft.TestPlatform/). This option requires internet connectivity on the agent machine.<br />**Custom feed** - Use this option to acquire the test platform package from a custom feed or a package management feed in Azure DevOps or TFS.<br />**Network path** - Use this option to install the test platform from a network share. The desired version of Microsoft.TestPlatform.nupkg file must be downloaded from NuGet and placed on a network share that the build/release agent can access.<br />Default value: `nugetOrg` |
|`versionSelector`<br/> Version | (Required) Pick whether to install the latest version or a specific version of the Visual Studio Test Platform. <br/>If you use the test platform installer to run Coded UI tests, ensure that the version you choose matches the major version of Visual Studio with which the test binaries were built.<br/> For e.g., if the Coded UI test project was built using Visual Studio 2017 (version 15.x), you must use test platform version 15.x.<br />Options: `latestPreRelease, latestStable, specificVersion` <br/>Default value: `latestPreRelease` | 
|`testPlatformVersion`<br/> Test Platform Version | (Required) Specify the version of Visual Studio Test Platform to install on the agent. Available versions can be viewed on [NuGet](https://www.nuget.org/packages/Microsoft.TestPlatform/). |
|`customFeed`<br/> Package Source | (Required) Specify the URL of a custom feed or a package management feed in Azure DevOps or TFS that contains the test platform package. Public as well as private feeds can be specified. | 
|`username`<br/> User Name | (Optional) Specify the user name to authenticate with the feed specified in the **Package Source** argument. If using a personal access token (PAT) in the password argument, this input is not required. |
|`password`<br/> Password | (Optional) Specify the password or personal access token (PAT) to authenticate with the feed specified in the **Package Source** argument. |
|`netShare`<br/> UNC Path | (Required) Specify the full UNC path to the Microsoft.TestPlatform.nupkg file. The desired version of Microsoft.TestPlatform.nupkg must be downloaded from [NuGet](https://www.nuget.org/packages/Microsoft.TestPlatform/) and placed on a network share that the build/release agent can access. | 

> [!NOTE]
> 
> * The **Visual Studio Test Platform Installer** task must appear before the **Visual Studio Test** task in the build or release pipeline.
> 
>   ![Order of tasks](media/tpinstaller1.png)
> 
> * The **Test platform version** option in the **Visual Studio Test** task must be set to **Installed by Tools Installer**. 
> 
>   ![Task setting](media/tpinstaller2.png)
> 

See [Run automated tests from test plans](../../../test/run-automated-tests-from-test-hub.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
