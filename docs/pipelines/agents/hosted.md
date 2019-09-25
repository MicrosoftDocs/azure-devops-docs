---
title: Microsoft-hosted agents for Azure Pipelines
ms.custom: seodec18
description: Learn about using the Microsoft-hosted agents provided in Azure Pipelines
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D17E9C01-8026-41E8-B44A-AB17EDE4AFBD
ms.manager: jillfra
ms.author: jobourne
author: thejoebourneidentity
ms.date: 09/20/2019
monikerRange: 'azure-devops'
---

# Microsoft-hosted agents

**Azure Pipelines**

> [!NOTE]
> Support for macOS X Mojave (10.14) is here! If you're using the 'Hosted macOS' agent pool today, your pipelines are running on Mojave. If you'd like to remain on High Sierra (10.13), then select the 'Hosted macOS High Sierra' agent pool for your pipelines.

[!INCLUDE [include](_shared/hosted-agent-intro.md)]

<a name="software"></a>

## Use a Microsoft-hosted agent

Azure Pipelines provides a Microsoft-hosted agent pool named **Azure Pipelines** that offers 7 virtual machine images to choose from, each including a broad range of tools and software:

> [!NOTE]
> The Azure Pipelines hosted pool replaces the previous hosted pools that had names that mapped to the corresponding images. Any jobs you had in the previous hosted pools are automatically redirected to the correct image in the new Azure Pipelines hosted pool. In some circumstances, you may still see the old pool names, but behind the scenes the hosted jobs are run using the Azure Pipelines pool. For more information about this update, see the [Single hosted pool](/azure/devops/release-notes/2019/sprint-154-update#single-hosted-pool) release notes from the [July 1 2019 - Sprint 154 release notes](/azure/devops/release-notes/2019/sprint-154-update).

| Image | Classic Editor Pool | YAML VM Image Label | Included Software |
| --- | --- | --- | --- |
| Windows Server 2019 with Visual Studio 2019 | *Hosted Windows 2019 with VS2019* |  `windows-latest` OR `windows-2019` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2019-Server2019-Readme.md)
| Windows Server 2016 with Visual Studio 2017 | *Hosted VS2017* | `vs2017-win2016` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md)
| Windows Server 2012 R2 with Visual Studio 2015 | *Hosted* |  `vs2015-win2012r2` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2015-Server2012R2-Readme.md)
| Windows Server Core 1803 (*for running Windows containers*) | *Hosted Windows Container* |  `win1803` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/WindowsContainer1803-Readme.md)
| Ubuntu 16.04 | *Hosted Ubuntu 1604* | `ubuntu-latest` OR `ubuntu-16.04` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/linux/Ubuntu1604-README.md)
| macOS X Mojave 10.14 | *Hosted macOS* |  `macOS-latest` OR `macOS-10.14` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.14-Readme.md)
| macOS X High Sierra 10.13 | *Hosted macOS High Sierra* |   `macOS-10.13` | [Link](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.13-Readme.md)

Pipelines will default to the Microsoft-hosted agent pool. You simply need to specify which virtual machine image you want to use.

```yaml
jobs:
- job: Linux
  pool:
    vmImage: 'ubuntu-latest'
  steps:
  - script: echo hello from Linux
- job: macOS
  pool:
    vmImage: 'macOS-latest'
  steps:
  - script: echo hello from macOS
- job: Windows
  pool:
    vmImage: 'windows-latest'
  steps:
  - script: echo hello from Windows
```

### Notes on choosing "Hosted macOS"

This option affects where your data is stored. [Learn more](https://www.microsoft.com/TrustCenter/CloudServices/vsts/data-location).
To disable the Microsoft-hosted macOS agent pool for all projects, disable the `Hosted Agent` checkbox under **Admin settings** > **Agent pools** > **Hosted macOS** and **Admin settings** > **Agent pools** > **Hosted macOS High Sierra**.
To disable the Microsoft-hosted macOS agent pool for a specific project, disable the `Hosted Agent` checkbox under **Project settings** > **Agent pools** > **Hosted macOS** and **Admin settings** > **Agent pools** > **Hosted macOS High Sierra**.

You can manually select from tool versions on macOS images. [See below](#mac-pick-tools).

## Capabilities and limitations

Microsoft-hosted agents:

* Have [the above software](#software). You can also add software during your build or release using [tool installer tasks](../process/tasks.md#tool-installers).
* Provide at least 10 GB of storage for your source and build outputs.
* Provide a free tier:
  * Public project: 10 free Microsoft-hosted parallel jobs that can run for up to 360 minutes (6 hours) each time, with no overall time limit per month. [Contact us](https://azure.microsoft.com/support/devops/) to get your free tier limits increased.
  * Private project: One free parallel job that can run for up to 60 minutes each time, until you've used 1,800 minutes (30 hours) per month. You can pay for additional capacity per parallel job. Paid parallel jobs remove the monthly time limit and allow you to run each job for up to 360 minutes (6 hours). [Buy Microsoft-hosted parallel jobs](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines).
* Run on Microsoft Azure general purpose virtual machines [Standard_DS2_v2](/azure/virtual-machines/windows/sizes-general#dsv2-series)
* Run as an administrator on Windows and a passwordless sudo user on Linux
* (Linux only) Run steps in a cgroup that offers 6 GB of physical memory and 13 GB of total memory

Microsoft-hosted agents do not offer:

* The ability to sign in.
* The ability to [drop artifacts to a UNC file share](../artifacts/build-artifacts.md#unc-file-share).
* The ability to run [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx).
* Potential performance advantages that you might get by using self-hosted agents which might start and run builds faster. [Learn more](agents.md#private-agent-performance-advantages)

If Microsoft-hosted agents don't meet your needs, then you can [deploy your own self-hosted agents](agents.md#install).

## Avoid hard-coded references

When you use a Microsoft-hosted agent, always use [variables](../build/variables.md)
to refer to the build environment and agent resources. For example, don't
hard-code the drive letter or folder that contains the repository. The precise
layout of the hosted agents is subject to change without warning.

## Agent IP ranges

In some setups, you may need to know the range of IP addresses where agents are deployed. For instance, if you need to grant the hosted agents access through a firewall, you may wish to restrict that access by IP address. Because Azure DevOps uses the Azure global network, IP ranges vary over time. We publish a [weekly JSON file](https://www.microsoft.com/en-us/download/details.aspx?id=56519) listing IP ranges for Azure datacenters, broken out by region. This file is published every Wednesday (US Pacific time) with new planned IP ranges. The new IP ranges become effective the following Monday. We recommend that you check back frequently to ensure you keep an up-to-date list. If agent jobs begin to fail, a key first troubleshooting step is to make sure your configuration matches the latest list of IP addresses.

Your hosted agents run in the same [Azure geography](https://azure.microsoft.com/global-infrastructure/geographies/) as your organization. Each geography contains one or more regions, and while your agent may run in the same region as your organization, it is not guaranteed to do so. To obtain the complete list of possible IP ranges for your agent, you must use the IP ranges from all of the regions that are contained in your geography. For example, if your organization is located in the **United States** geography, you must use the IP ranges for all of the regions in that geography.

To determine your geography, navigate to `https://dev.azure.com/<your_organization>/_settings/organizationOverview`, get your region, and find the associated geography from the [Azure geography](https://azure.microsoft.com/global-infrastructure/geographies/) table. Once you have identified your geography, use the IP ranges from the [weekly file](https://www.microsoft.com/en-us/download/details.aspx?id=56519) for all regions in that geography.

>[!NOTE]
>Due to capacity restrictions, some organizations in the **Brazil South** or **West Europe** regions may occasionally see their hosted agents located outside their expected geography. In these cases, additional IP ranges must be included for regions in the capacity fallback geography.
>
>If your organization is in the **Brazil South** region, your capacity fallback geography is **United States**.
>
>If your organization is in the **West Europe** region, the capacity fallback geography is **France**.
>
>Our Mac IP ranges are not included in the Azure IPs above, though we are investigating options to publish these in the future.

### Can I use service tags instead?

Currently, Service Tags is not something you can use for your hosted agents. If you're trying to grant hosted agents access to your resources, you'll need to follow the IP range allow listing method.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### I can't select a Microsoft-hosted agent and I can't queue my build or deployment. How do I fix this?

By default, all project contributors in an organization have access to the Microsoft-hosted agents. But, your organization administrator may limit the access of Microsoft-hosted agents to select users or projects. Ask the owner of your Azure DevOps organization to grant you permission to use a Microsoft-hosted agent. See [agent pool security](pools-queues.md#security).

### I need more agents. What can I do?

A: All Azure DevOps organizations are provided with several free parallel jobs for open source projects, and one free parallel job and limited minutes each month for private projects. If you need more minutes, or need to run additional builds or releases in parallel, then you can buy more [parallel jobs](../licensing/concurrent-jobs.md) for private projects.

### I'm looking for the Microsoft-hosted XAML build controller. Where did it go?

The Microsoft-hosted XAML build controller is no longer supported. If you have an organization in which you still need to run [XAML builds](https://msdn.microsoft.com/library/ms181709%28v=vs.120%29.aspx), you should set up a [self-hosted build server](https://msdn.microsoft.com/library/ms252495%28v=vs.120%29.aspx) and a [self-hosted build controller](https://msdn.microsoft.com/library/ee330987%28v=vs.120%29.aspx).

> [!TIP]
>
> We strongly recommend that you [migrate your XAML builds to new builds](../build/migrate-from-xaml-builds.md).

<a name="mac-pick-tools"></a>
### How can I manually select versions of tools on the Hosted macOS agent?

#### Xamarin

  To manually select a Xamarin SDK version to use on the **Hosted macOS** agent, before your Xamarin build task, execute this command line as part of your build, replacing the Mono version number 5.4.1 as needed (also replacing '.' characters with underscores: '_'). Choose the Mono version that is associated with the Xamarin SDK version that you need.

  `/bin/bash -c "sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1"`

  Mono versions associated with Xamarin SDK versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.14-Readme.md#xamarin).

  Note that this command does not select the Mono version beyond the Xamarin SDK. To manually select a Mono version, see instructions below.

  In case you are using a non-default version of Xcode for building your Xamarin.iOS or Xamarin.Mac apps, you should additionally execute this command line:

  `/bin/bash -c "echo '##vso[task.setvariable variable=MD_APPLE_SDK_ROOT;]'${xcodeRoot};sudo xcode-select --switch ${xcodeRoot}/Contents/Developer"`
  
  where `${xcodeRoot}` = `/Applications/Xcode_10.1.app`

  Xcode versions on the **Hosted macOS** agent pool can be found [here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.14-Readme.md#xcode).

#### Xcode

  If you use the [Xcode task](../tasks/build/xcode.md) included with Azure Pipelines and TFS, you can select a version of Xcode in that task's properties. Otherwise, to manually set the Xcode version to use on the **Hosted macOS** agent pool, before your `xcodebuild` build task, execute this command line as part of your build, replacing the Xcode version number 8.3.3 as needed:

  `/bin/bash -c "sudo xcode-select -s /Applications/Xcode_8.3.3.app/Contents/Developer"`

  Xcode versions on the **Hosted macOS** agent pool can be found [here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-10.14-Readme.md#xcode).

  Note that this command does not work for Xamarin apps. To manually select a Xcode version for building Xamarin apps, see instructions above.

#### Mono

  To manually select a Mono version to use on the **Hosted macOS** agent pool, before your Mono build task, execute this script in each job of your build, replacing the Mono version number 5.4.1 as needed:

  ```bash
  SYMLINK=5_4_1
  MONOPREFIX=/Library/Frameworks/Mono.framework/Versions/$SYMLINK
  echo "##vso[task.setvariable variable=DYLD_FALLBACK_LIBRARY_PATH;]$MONOPREFIX/lib:/lib:/usr/lib:$DYLD_LIBRARY_FALLBACK_PATH"
  echo "##vso[task.setvariable variable=PKG_CONFIG_PATH;]$MONOPREFIX/lib/pkgconfig:$MONOPREFIX/share/pkgconfig:$PKG_CONFIG_PATH"
  echo "##vso[task.setvariable variable=PATH;]$MONOPREFIX/bin:$PATH"
```

#### .NET Core
  .NET Core 2.2.105 is default on VM images but Mono version 6.0 or greater requires .NET Core 2.2.300+. 
  If you use the Mono 6.0 or greater, you will have to override .NET Core version using [.NET Core Tool Installer task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/tool/dotnet-core-tool-installer?view=azure-devops).

## Videos 
> [!VIDEO https://www.youtube.com/embed/A8f_05lnfe0?start=0]

<!-- ENDSECTION -->
