---
title: Microsoft-hosted agents for Azure Pipelines
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

[!INCLUDE [include](_shared/hosted-agent-intro.md)]

## Use a Microsoft-hosted agent

To use a Microsoft-hosted agent pool, first decide which pool to use:

| If your development team uses... | ...then choose this pool |
|----------------------------------|---------------------------|
| Docker containers | Hosted Linux or Hosted VS2017 |
| Development tools on Ubuntu | Hosted Linux |
| Development tools on macOS | Hosted macOS (see notes below) |
| .NET Core | Hosted Linux (optimal) or Hosted VS2017 |
| Visual Studio 2017 | Hosted VS2017 |
| Visual Studio 2013 or Visual Studio 2015 | Hosted |

# [YAML](#tab/yaml)

Then, when defining the `queue` in your YAML, use the queue you decided on.

```yaml
phases:
- phase: Windows
  queue: Hosted VS2017
  steps:
  - script: echo hello from Windows
- phase: macOS
  queue: Hosted macOS
  steps:
  - script: echo hello from macOS
```

# [Web](#tab/web)

Then, while [editing your build pipeline](../get-started-designer.md), on the **Options** or **General** tab or **Process** step, for the **Agent queue**, select the queue you decided on.

---

### Notes on choosing "Hosted macOS"

This option affects where your data is stored. [Learn more](https://www.microsoft.com/TrustCenter/CloudServices/vsts/data-location).
To disable the Hosted macOS agent pool for all projects, disable the `Hosted Agent` checkbox under **Admin settings** > **Agent pools** > **Hosted macOS**.
To disable the Hosted macOS agent pool for a specific project, disable the `Hosted Agent` checkbox under **Project settings** > **Agent pools** > **Hosted macOS**.

You can manually select of tool versions on macOS images. [See below](#mac-pick-tools).

<h2 id="software">Software</h2>

Software on Microsoft-hosted agents is updated once each month.

* [Inventory of software currently installed on the Hosted VS2017 agent](https://github.com/Microsoft/vsts-image-generation/blob/master/images/win/Vs2017-Server2016-Readme.md).
* [Inventory of software currently installed on the Hosted Linux agent](https://github.com/Microsoft/vsts-agent-docker/blob/master/README.md#standard-images).
* [Inventory of software currently installed on the Hosted macOS agent](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md).
* [Inventory of software currently installed on the Microsoft-hosted agent](https://github.com/adventworks/hosted-pool-images/blob/2017.10.02/vs2015-on-windows-2012r2/image.md).

## Capabilities and limitations

Microsoft-hosted agents:

* Have [the above software](#software). You can also add software using [tool installers](../process/tasks.md#tool-installers).
* Provide at least 10 GB of storage.
* Can run jobs for up to 6 hours (30 minutes on the free tier).
* Run on Microsoft Azure general purpose virtual machines [Standard_DS2_v2 and Standard_DS3_v2](/azure/virtual-machines/windows/sizes-general)

Microsoft-hosted agents do not offer:

* The ability to log on.
* The ability to [drop artifacts to a UNC file share](../build/artifacts.md#unc-file-share).
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

We publish a [weekly XML file](https://www.microsoft.com/en-us/download/confirmation.aspx?id=41653) listing IP ranges for Azure datacenters, broken out by region. This file is published every Wednesday (US Pacific time) with new planned IP ranges. The new IP ranges become effective the following Monday. Hosted agents run in the same region as your Azure DevOps organization. You can check your region by navigating to `https://<your_organization>.visualstudio.com/_admin/_home/settings`. Under **Account**, you will see a field indicating your region.

*This information is maintained by the [Azure DevOps support team](https://visualstudio.microsoft.com/team-services/support/ip-addresses-used-hosted-build/).*

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### I can't select a Microsoft-hosted agent and I can't queue my build or deployment. How do I fix this?

By default, all project contributors in an organization have access to the Microsoft-hosted agents. But, your organization administrator may limit the access of Microsoft-hosted agents to select users or projects. Ask the owner of your Azure DevOps organization to grant you permission to use a Microsoft-hosted agent. See [agent pool security](pools-queues.md#security).

### I need more agents. What can I do?

A: All Azure DevOps organizations are provided with a single agent and a limited number of free minutes each month. If you need more minutes, or need to run more than one build or release job in parallel, then you can buy [parallel jobs](../licensing/concurrent-jobs-vsts.md).

### I'm looking for the Microsoft-hosted XAML build controller. Where did it go?

The Microsoft-hosted XAML build controller is no longer supported. If you have an organization in which you still need to run [XAML builds](https://msdn.microsoft.com/en-us/library/ms181709%28v=vs.120%29.aspx), you should set up a [self-hosted build server](https://msdn.microsoft.com/en-us/library/ms252495%28v=vs.120%29.aspx) and a [self-hosted build controller](https://msdn.microsoft.com/en-us/library/ee330987%28v=vs.120%29.aspx).

> [!TIP]
>
> We strongly recommend that you [migrate your XAML builds to new builds](../build/migrate-from-xaml-builds.md).

<a name="mac-pick-tools"></a>
### How can I manually select versions of tools on the Hosted macOS agent?

#### Xamarin

  To manually select a Xamarin SDK version to use on the **Hosted macOS** agent, before your Xamarin build task, execute this command line as part of your build, replacing the Mono version number 5.4.1 as needed (also replacing '.' characters with underscores: '_'). Choose the Mono version that is associated with the Xamarin SDK version that you need.

  `/bin/bash -c "sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh 5_4_1"`

  Mono versions associated with Xamarin SDK versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md#xamarin).

  Note that this command does not select the Mono version beyond the Xamarin SDK. To manually select a Mono version, see instructions below.

#### Xcode

  If you use the [Xcode task](../tasks/build/xcode.md) included with Azure Pipelines and TFS, you can select a version of Xcode in that task's properties. Otherwise, to manually set the Xcode version to use on the **Hosted macOS** agent, before your `xcodebuild` build task, execute this command line as part of your build, replacing the Xcode version number 8.3.3 as needed:

  `/bin/bash -c "sudo xcode-select -s /Applications/Xcode_8.3.3.app/Contents/Developer"`

  Xcode versions on the **Hosted macOS** agent can be found [here](https://github.com/Microsoft/vsts-image-generation/blob/master/images/macos/macos-Readme.md#xcode).

#### Mono

  To manually select a Mono version to use on the **Hosted macOS** agent, before your Mono build task, execute this script in each job of your build, replacing the Mono version number 5.4.1 as needed:

  ```
  SYMLINK=5_4_1
  MONOPREFIX=/Library/Frameworks/Mono.framework/Versions/$SYMLINK
  echo "##vso[task.setvariable variable=DYLD_FALLBACK_LIBRARY_PATH;]$MONOPREFIX/lib:/lib:/usr/lib:$DYLD_LIBRARY_FALLBACK_PATH"
  echo "##vso[task.setvariable variable=PKG_CONFIG_PATH;]$MONOPREFIX/lib/pkgconfig:$MONOPREFIX/share/pkgconfig:$PKG_CONFIG_PATH"
  echo "##vso[task.setvariable variable=PATH;]$MONOPREFIX/bin:$PATH"
```

## Videos 
> [!VIDEO https://www.youtube.com/embed/A8f_05lnfe0?start=0]

<!-- ENDSECTION -->
