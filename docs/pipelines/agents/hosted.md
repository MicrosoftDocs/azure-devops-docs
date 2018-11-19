---
title: Microsoft-hosted agents for Azure Pipelines
titleSuffix: Azure Pipelines & TFS
description: Learn about using the Microsoft-hosted agents provided in Azure Pipelines
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D17E9C01-8026-41E8-B44A-AB17EDE4AFBD
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 07/11/2018
monikerRange: 'vsts'
---

# Microsoft-hosted agents

**Azure Pipelines**

> [!NOTE]
> The Hosted Linux Preview Pool is deprecated and will be removed in December 2018.
> [Learn more below](#hosted-linux-preview-pool-deprecation).

[!INCLUDE [include](_shared/hosted-agent-intro.md)]

## Use a Microsoft-hosted agent

The Microsoft-hosted agent pool provides 5 virtual machine images to choose from:

* Ubuntu 16.04 (`ubuntu-16.04`)
* Visual Studio 2017 on Windows Server 2016 (`vs2017-win2016`)
* macOS 10.13 (`macOS-10.13`)
* Windows Server 1803 (`win1803`) - for running Windows containers
* Visual Studio 2015 on Windows Server 2012R2 (`vs2015-win2012r2`)

| If your development team uses... | ...then choose this image... | ...or pool in web designer |
|----------------------------------|------------------------------|----------------------------|
| Docker containers | ubuntu-16.04 or win1803 | Hosted Ubuntu 1604 or Hosted Windows Container |
| Development tools on Ubuntu | ubuntu-16.04 | Hosted Ubuntu 1604 |
| Development tools on macOS | macOS-10.13 (see notes below) | Hosted macOS |
| .NET Core | ubuntu-16.04 or vs2017-win2016 | Hosted Ubuntu 1604 or Hosted VS2017 |
| Visual Studio 2017 | vs2017-win2016 | Hosted VS2017 |
| Visual Studio 2015 | vs2015-win2012r2 | Hosted |

# [YAML](#tab/yaml)

YAML-based pipelines will default to the Microsoft-hosted agent pool. You simply need to specify which virtual machine image you want to use.

```yaml
jobs:
- job: Linux
  pool:
    vmImage: 'ubuntu-16.04'
  steps:
  - script: echo hello from Linux
- job: macOS
  pool:
    vmImage: 'macOS-10.13'
  steps:
  - script: echo hello from macOS
- job: Windows
  pool:
    vmImage: 'vs2017-win2016'
  steps:
  - script: echo hello from Windows
```

# [Designer](#tab/designer)

Then, while [editing your build pipeline](../get-started-designer.md), on the **Options** or **General** tab or **Process** step, for the **Agent pool**, select the pool you decided on.

---

### Notes on choosing "Hosted macOS"

This option affects where your data is stored. [Learn more](https://www.microsoft.com/TrustCenter/CloudServices/vsts/data-location).
To disable the Hosted macOS agent pool for all projects, disable the `Hosted Agent` checkbox under **Admin settings** > **Agent pools** > **Hosted macOS**.
To disable the Hosted macOS agent pool for a specific project, disable the `Hosted Agent` checkbox under **Project settings** > **Agent pools** > **Hosted macOS**.

You can manually select from tool versions on macOS images. [See below](#mac-pick-tools).

<h2 id="software">Software</h2>

Software on Microsoft-hosted agents is updated once each month.

* [Visual Studio 2017 on Windows Server 2016 (Hosted VS2017)](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md).
* [Ubuntu 16.04 (Hosted Ubuntu 1604)](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/linux/Ubuntu1604-README.md).
* [Xcode 8, 9, and 10 on macOS 10.13 (Hosted macOS)](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-Readme.md).
* [Windows Server 1803 (Hosted Windows Container)](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/WindowsContainer1803-Readme.md)
* [Visual Studio 2015 on Windows Server 2012r2 (Hosted)](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/win/Vs2015-Server2012R2-Readme.md).

## Capabilities and limitations

Microsoft-hosted agents:

* Have [the above software](#software). You can also add software during your build or release using [tool installer tasks](../process/tasks.md#tool-installers).
* Provide at least 10 GB of storage for your source and build outputs.
* Can run jobs for up to 360 minutes (6 hours).
* Run on Microsoft Azure general purpose virtual machines [Standard_DS2_v2](/azure/virtual-machines/windows/sizes-general#dsv2-series)
* Run as an administrator on Windows and a passwordless sudo user on Linux

Microsoft-hosted agents do not offer:

* The ability to log on.
* The ability to [drop artifacts to a UNC file share](../artifacts/build-artifacts.md#unc-file-share).
* The ability to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx).
* Potential performance advantages that you might get by using self-hosted agents which might start and run builds faster. [Learn more](agents.md#private-agent-performance-advantages)

If Microsoft-hosted agents don't meet your needs, then you can [deploy your own self-hosted agents](agents.md#install).

## Avoid hard-coded references

When you use a Microsoft-hosted agent, always use [variables](../build/variables.md)
to refer to the build environment and agent resources. For example, don't
hardcode the drive letter or folder that contains the repository. The precise
layout of the hosted agents is subject to change without warning.

## Agent IP ranges

In some setups, you may need to know the range of IP addresses where agents are deployed. For instance, if you need to grant the hosted agents access through a firewall, you may wish to restrict that access by IP address.

> [!Note]
> Because Azure DevOps uses the Azure global network, IP ranges vary over time.
> We recommend that you check back frequently to ensure you keep an up-to-date list.
> If agent jobs begin to fail, a key first troubleshooting step is to make sure your configuration matches the latest list of IP addresses.

We publish a [weekly XML file](https://www.microsoft.com/download/confirmation.aspx?id=41653) listing IP ranges for Azure datacenters, broken out by region. This file is published every Wednesday (US Pacific time) with new planned IP ranges. The new IP ranges become effective the following Monday. Hosted agents run in the same region as your Azure DevOps organization. You can check your region by navigating to `https://dev.azure.com/<your_organization>/_settings/overview`. Under **Organization information**, you will see a field indicating your region.

*This information is maintained by the [Azure DevOps support team](https://azure.microsoft.com/support/devops/ip-addresses-used-hosted-build/).*

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### I can't select a Microsoft-hosted agent and I can't queue my build or deployment. How do I fix this?

By default, all project contributors in an organization have access to the Microsoft-hosted agents. But, your organization administrator may limit the access of Microsoft-hosted agents to select users or projects. Ask the owner of your Azure DevOps organization to grant you permission to use a Microsoft-hosted agent. See [agent pool security](pools-queues.md#security).

### I need more agents. What can I do?

A: All Azure DevOps organizations are provided with several free parallel jobs for open source projects, and one free parallel job and limited minutes each month for private projects. If you need more minutes, or need to run additional builds or releases in parallel, then you can buy more [parallel jobs](../licensing/concurrent-jobs-vsts.md) for private projects.

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

  Mono versions associated with Xamarin SDK versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-Readme.md#xamarin).

  Note that this command does not select the Mono version beyond the Xamarin SDK. To manually select a Mono version, see instructions below.

#### Xcode

  If you use the [Xcode task](../tasks/build/xcode.md) included with Azure Pipelines and TFS, you can select a version of Xcode in that task's properties. Otherwise, to manually set the Xcode version to use on the **Hosted macOS** agent pool, before your `xcodebuild` build task, execute this command line as part of your build, replacing the Xcode version number 8.3.3 as needed:

  `/bin/bash -c "sudo xcode-select -s /Applications/Xcode_8.3.3.app/Contents/Developer"`

  Xcode versions on the **Hosted macOS** agent pool can be found [here](https://github.com/Microsoft/azure-pipelines-image-generation/blob/master/images/macos/macos-Readme.md#xcode).

#### Mono

  To manually select a Mono version to use on the **Hosted macOS** agent pool, before your Mono build task, execute this script in each job of your build, replacing the Mono version number 5.4.1 as needed:

  ```
  SYMLINK=5_4_1
  MONOPREFIX=/Library/Frameworks/Mono.framework/Versions/$SYMLINK
  echo "##vso[task.setvariable variable=DYLD_FALLBACK_LIBRARY_PATH;]$MONOPREFIX/lib:/lib:/usr/lib:$DYLD_LIBRARY_FALLBACK_PATH"
  echo "##vso[task.setvariable variable=PKG_CONFIG_PATH;]$MONOPREFIX/lib/pkgconfig:$MONOPREFIX/share/pkgconfig:$PKG_CONFIG_PATH"
  echo "##vso[task.setvariable variable=PATH;]$MONOPREFIX/bin:$PATH"
```

## Hosted Linux Preview pool deprecation

[!INCLUDE [include](_move-from-hosted-linux-preview.md)]

## Videos 
> [!VIDEO https://www.youtube.com/embed/A8f_05lnfe0?start=0]

<!-- ENDSECTION -->