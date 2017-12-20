---
title: Restore Package Management NuGet packages in Team Build
description: Working with feeds in Team Build
ms.assetid: C3D7008E-7C23-49A4-9642-E5906DAE3BAD
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Restore Package Management NuGet packages in Team Build

**VSTS | TFS 2018 | TFS 2017**

This walkthrough will cover setting up an existing build to restore NuGet packages from Package Management feeds. It assumes that you've already:

- [Set up your solution](/vsts/package/nuget/consume) to consume packages from a Package Management feed
- [Created a build](/vsts/build-release/) for that solution
- [Added the correct build service identity](/vsts/package/feeds/common-identities) to your feed

To build a solution that relies on NuGet packages from Package Management feeds, add the **NuGet** task (if one is not already present). 

First, click **Add build step...**, select the **Package** category, and add the **NuGet** task. Then drag to order the task above any build tasks that require your packages. 

Next, configure these options:

- **Command:** restore
- **Path to solution, packages.config, or project.json:** The path to the file that specifies the packagse you want to restore

Then, select feeds to use:

- If you've checked in a [NuGet.config](http://docs.nuget.org/Consume/NuGet-Config-File), select **Feeds in my NuGet.config** and select the file from your repo.
- If you're using a single VSTS/TFS feed, select the **Feed(s) I select here** option and select your feed from the dropdown.

![A screenshot of the NuGet step configured as outlined above](_img/restore-pkgs-on-build.png)

Finally, save your build.

## Specifying sources in NuGet.config

The NuGet.config you check in should list all the package sources you want to consume.
The example below demonstrates how that might look.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <!-- remove any machine-wide sources with <clear/> -->
    <clear />
    <!-- add a VSTS feed -->
    <add key="MyGreatFeed" value="https://fabrikam.pkgs.visualstudio.com/DefaultCollection/_packaging/MyGreatFeed/nuget/v3/index.json" />
    <!-- also get packages from the NuGet Gallery -->
    <add key="nuget.org" value="https://www.nuget.org/api/v2/" />
  </packageSources>
  <activePackageSource>
    <add key="All" value="(Aggregate source)" />
  </activePackageSource>
</configuration>
```
