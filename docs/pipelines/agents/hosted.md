---
title: Microsoft-hosted agents for VSTS
description: Learn about uing the Microsoft-hosted agents provided in Visual Studio Team Services (VSTS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D17E9C01-8026-41E8-B44A-AB17EDE4AFBD
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 05/31/2018
monikerRange: 'vsts'
---

# Microsoft-hosted agents

[!INCLUDE [include](_shared/hosted-agent-intro.md)]

## Use a Microsoft-hosted agent

To use a Microsoft-hosted agent pool, first decide which queue to use:

| If your development team uses... | ...then choose this queue |
|----------------------------------|---------------------------|
| Visual Studio 2017 | Hosted VS2017 |
| Development tools on Ubuntu | Hosted Linux |
| Docker containers | Hosted Linux or Hosted VS2017 |
| .NET Core | Hosted Linux (optimal) or Hosted VS2017 |
| Development tools on macOS | Hosted macOS (see notes below) |
| Visual Studio 2013 or Visual Studio 2015 | Hosted |

Then, while [editing your build or release definition](../get-started-designer.md), on the **Options** or **General** tab or **Process** step, for the **Agent queue**, select the queue you decided on.

Notes on choosing **Hosted macOS**:
* This option affects where your data is stored. [Learn more](https://www.microsoft.com/en-us/trustcenter/privacy/vsts-location)
* For manual selection of tool versions on this Microsoft-hosted agent, see **Q & A** below.

<h2 id="software">Software</h2>

Software on Microsoft-hosted agents is updated once each month.

* [Inventory of software currently installed on the Hosted VS2017 agent](https://github.com/Microsoft/vsts-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md).
* [Inventory of software currently installed on the Hosted Linux agent](https://github.com/Microsoft/vsts-agent-docker/blob/master/ubuntu/16.04/standard/Dockerfile).
* [Inventory of software currently installed on the Hosted macOS agent](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md).
* [Inventory of software currently installed on the Microsoft-hosted agent](https://github.com/adventworks/hosted-pool-images/blob/2017.10.02/vs2015-on-windows-2012r2/image.md).

## Capabilities and limitations

Microsoft-hosted agents:

* Have [the above software](#software). You can also add software using [tool installers](../process/tasks.md#tool-installers).

* Provide at least 10 GB of storage.

* Can run jobs for up to 6 hours (30 minutes on the free tier).

* Currently utilizing Microsoft Azure general purpose virtual machine sizes [(Standard_DS2_v2 and Standard_DS3_v2)](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes-general)

Microsoft-hosted agents do not offer:

* The ability to log on.

* The ability to [drop artifacts to a UNC file share](../build/artifacts.md#unc-file-share).

* The ability to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx).

* Potential performance advantages that you might get by using self-hosted agents which might start and process builds faster. [Learn more](agents.md#private-agent-performance-advantages)

If Microsoft-hosted agents don't meet your needs, then you can [deploy your own self-hosted agents](agents.md#install).

## Avoid hard-coded references

When you use a Microsoft-hosted agent, you should always use [variables](../build/variables.md) to construct any references to resources used by your build. We recommend that you avoid making hard-coded presumptions about resources provided by Microsoft-hosted agents (for example, the drive letter or folder that contains the repository).

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### I can't select a Microsoft-hosted agent and I can't queue my build or deployment. How do I fix this?

By default, all project contributors in an account have access to the Microsoft-hosted agents. But, your account administrator may limit the access of Microsoft-hosted agents to select users or projects. Ask the owner of your VSTS account to grant you permission to use a Microsoft-hosted agent. See [agent queue security](pools-queues.md#security).

### I need more agents. What can I do?

A: All VSTS accounts are provided with a single agent and a limited number of free minutes each month. If you need more minutes, or need to run more than one build or release job concurrently, then you can buy [concurrent jobs](../licensing/concurrent-jobs-vsts.md).

### I'm looking for the Microsoft-hosted XAML build controller. Where did it go?

The Microsoft-hosted XAML build controller is no longer supported. If you have an account in which you still need to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx), you should set up a [self-hosted build server](https://msdn.microsoft.com/en-us/library/ms252495%28v=vs.120%29.aspx) and a [self-hosted build controller](https://msdn.microsoft.com/en-us/library/ee330987%28v=vs.120%29.aspx).

### How can I manually select versions of tools on the Hosted macOS agent?
* **Xamarin**

  To manually select a Xamarin SDK version to use on the **Hosted macOS** agent, before your Xamarin build task, execute this command line as part of your build, replacing the Mono version number 5.4.1 as needed (also replacing '.' characters with underscores: '_'). Choose the Mono version that is associated with the Xamarin SDK version that you need.

  `/bin/bash -c "sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1"`

  Mono versions associated with Xamarin SDK versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md#xamarin).

  Note that this command does not select the Mono version beyond the Xamarin SDK. To manually select a Mono version, see instructions below.

* **Xcode**

  If you use the [Xcode task](../tasks/build/xcode.md) included with VSTS and TFS, you can select a version of Xcode in that task's properties. Otherwise, to manually set the Xcode version to use on the **Hosted macOS** agent, before your `xcodebuild` build task, execute this command line as part of your build, replacing the Xcode version number 8.3.3 as needed:

  `/bin/bash -c "sudo xcode-select -s /Applications/Xcode_8.3.3.app/Contents/Developer"`

  Xcode versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md#xcode).

* **Mono**

  To manually select a Mono version to use on the **Hosted macOS** agent, before your Mono build task, execute this script in each phase of your build, replacing the Mono version number 5.4.1 as needed:

  ```
  SYMLINK=5_4_1
  MONOPREFIX=/Library/Frameworks/Mono.framework/Versions/$SYMLINK
  echo "##vso[task.setvariable variable=DYLD_FALLBACK_LIBRARY_PATH;]$MONOPREFIX/lib:/lib:/usr/lib:$DYLD_LIBRARY_FALLBACK_PATH"
  echo "##vso[task.setvariable variable=PKG_CONFIG_PATH;]$MONOPREFIX/lib/pkgconfig:$MONOPREFIX/share/pkgconfig:$PKG_CONFIG_PATH"
  echo "##vso[task.setvariable variable=PATH;]$MONOPREFIX/bin:$PATH"
```

> [!TIP]
>
> We recommend that you [migrate your XAML builds to new builds](../build/migrate-from-xaml-builds.md).

## Videos 
> [!VIDEO https://www.youtube.com/embed/A8f_05lnfe0?start=0]

<!-- ENDSECTION -->
