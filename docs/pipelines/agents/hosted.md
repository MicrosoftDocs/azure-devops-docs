---
title: Microsoft-hosted agents for Azure Pipelines
ms.custom: seodec18, contperf-fy20q4
description: Learn about using the Microsoft-hosted agents provided in Azure Pipelines
ms.topic: conceptual
ms.assetid: D17E9C01-8026-41E8-B44A-AB17EDE4AFBD
ms.date: 08/25/2021
monikerRange: '>= tfs-2015'
---

# Microsoft-hosted agents

[!INCLUDE [include](../includes/version-team-services.md)]

::: moniker range="< azure-devops"

Microsoft-hosted agents are only available with Azure DevOps Services, which is hosted in the cloud. You cannot use Microsoft-hosted agents or the Azure Pipelines agent pool with on-premises TFS or Azure DevOps Server. With these on-premises versions, you must use [self-hosted agents](agents.md).

[!INCLUDE [include](../../includes/version-selector.md)]

::: moniker-end

::: moniker range="azure-devops"

[!INCLUDE [include](includes/hosted-agent-intro.md)]

## Software

The **Azure Pipelines** agent pool offers several virtual machine images to choose from, each including a broad range of tools and software.

| Image | Classic Editor Agent Specification | YAML VM Image Label | Included Software |
| --- | --- | --- | --- |
| Windows Server 2022 Datacenter with Visual Studio 2022 | *windows-2022* |  `windows-2022` | [Link](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2022-Readme.md) |
| Windows Server 2019 with Visual Studio 2019 | *windows-2019* |  `windows-latest` OR `windows-2019` | [Link](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md) |
| Windows Server 2016 with Visual Studio 2017 | *vs2017-win2016* | `vs2017-win2016` | [Link](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md) |
| Ubuntu 20.04 | *ubuntu-20.04* | `ubuntu-latest` OR `ubuntu-20.04` | [Link](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
| Ubuntu 18.04 | *ubuntu-18.04* | `ubuntu-18.04` | [Link](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md) |
| Ubuntu 16.04 | *ubuntu-16.04* | `ubuntu-16.04` | [Link](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1604-README.md) |
| macOS 11 Big Sur 11.5 | *macOS-11* |  `macOS-11` | [Link](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md) |
| macOS X Mojave 10.14 | *macOS-10.14* |  `macOS-10.14` | [Link](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.14-Readme.md) |
| macOS X Catalina 10.15 | *macOS-10.15* |  `macOS-latest` OR `macOS-10.15` | [Link](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md) |

You can see the installed software for each hosted agent by choosing the **Included Software** link in the table. When using macOS images, you can manually select from tool versions. [See below](#mac-pick-tools).

> [!NOTE]
> In March 2020, we removed the following Azure Pipelines hosted images:
>
> - [Windows Server 2012R2 with Visual Studio 2015](https://github.com/actions/virtual-environments/tree/main/images/win) (`vs2015-win2012r2`)
> - [macOS X High Sierra 10.13](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.13-Readme.md) (`macOS-10.13`)
> - [Windows Server Core 1803](https://github.com/actions/virtual-environments/tree/main/images/win) - (`win1803`)
>
> Customers are encouraged to migrate to `vs2017-win2016`, `macOS-10.14`, or a [self-hosted agent](v2-windows.md) respectively.
>
> For more information and instructions on how to update your pipelines that use those images, see [Removing older images in Azure Pipelines hosted pools](https://devblogs.microsoft.com/devops/removing-older-images-in-azure-pipelines-hosted-pools/).

> [!NOTE]
> The Azure Pipelines hosted pool replaces the previous hosted pools that had names that mapped to the corresponding images. Any jobs you had in the previous hosted pools are automatically redirected to the correct image in the new Azure Pipelines hosted pool. In some circumstances, you may still see the old pool names, but behind the scenes the hosted jobs are run using the Azure Pipelines pool. For more information about this update, see the [Single hosted pool](/azure/devops/release-notes/2019/sprint-154-update#single-hosted-pool) release notes from the [July 1 2019 - Sprint 154 release notes](/azure/devops/release-notes/2019/sprint-154-update).

> [!IMPORTANT]
> To request additional software to be installed on Microsoft-hosted agents, don't create a feedback request on this document or open a support ticket. Instead, open an issue on our [repository](https://github.com/actions/virtual-environments), where we manage the scripts to generate various images.

## Use a Microsoft-hosted agent

# [YAML](#tab/yaml)

In YAML pipelines, if you do not specify a pool, pipelines will default to the Azure Pipelines agent pool. You simply need to specify which virtual machine image you want to use.

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

> [!NOTE]
> The specification of a pool can be done at multiple levels in a YAML file.
> If you notice that your pipeline is not running on the expected image, make sure that you verify the pool specification at the pipeline, stage, and job levels.

# [Classic](#tab/classic)

In classic build pipelines, you first choose the Azure Pipelines pool and then specify the image to use.

> [!NOTE]
> The specification of a pool can be done at multiple levels in a classic build pipeline - for the whole pipeline, or for each job. If you notice that your pipeline is not running on the expected image, make sure that you verify the pool specification at all levels.

---

### Avoid hard-coded references

When you use a Microsoft-hosted agent, always use [variables](../build/variables.md)
to refer to the build environment and agent resources. For example, don't
hard-code the drive letter or folder that contains the repository. The precise
layout of the hosted agents is subject to change without warning.

## Hardware

Microsoft-hosted agents that run Windows and Linux images are provisioned on Azure general purpose virtual machines [Standard_DS2_v2](/azure/virtual-machines/dv2-dsv2-series#dsv2-series). These virtual machines are colocated in the same geography as your Azure DevOps organization.

Agents that run macOS images are provisioned on Mac pros. These agents always run in the US irrespective of the location of your Azure DevOps organization. If data sovereignty is important to you and if your organization is not in the US, then you should not use macOS images. [Learn more](../../organizations/security/data-location.md).

All of these machines have 10 GB of free disk space available for your pipelines to run. This free space is consumed when your pipeline checks out source code, downloads packages, pulls docker images, or generates intermediate files.

> [!IMPORTANT]
> We cannot honor requests to increase disk space on Microsoft-hosted agents, or to provision more powerful machines. If the specifications of Microsoft-hosted agents do not meet your needs, then you should consider [self-hosted agents](agents.md) or [scale set agents](scale-set-agents.md).

<a name="agent-ip-ranges"></a>

## Networking

In some setups, you may need to know the range of IP addresses where agents are deployed. For instance, if you need to grant the hosted agents access through a firewall, you may wish to restrict that access by IP address. Because Azure DevOps uses the Azure global network, IP ranges vary over time. We publish a [weekly JSON file](https://www.microsoft.com/download/details.aspx?id=56519) listing IP ranges for Azure datacenters, broken out by region. This file is updated weekly with new planned IP ranges. The new IP ranges become effective the following week. We recommend that you check back frequently (at least once every week) to ensure you keep an up-to-date list. If agent jobs begin to fail, a key first troubleshooting step is to make sure your configuration matches the latest list of IP addresses. The IP address ranges for the hosted agents are listed in the weekly file under `AzureCloud.<region>`, such as `AzureCloud.westus` for the West US region.

Your hosted agents run in the same [Azure geography](https://azure.microsoft.com/global-infrastructure/geographies/) as your organization. Each geography contains one or more regions. While your agent may run in the same region as your organization, it is not guaranteed to do so. To obtain the complete list of possible IP ranges for your agent, you must use the IP ranges from all of the regions that are contained in your geography. For example, if your organization is located in the **United States** geography, you must use the IP ranges for all of the regions in that geography.

To determine your geography, navigate to `https://dev.azure.com/<your_organization>/_settings/organizationOverview`, get your region, and find the associated geography from the [Azure geography](https://azure.microsoft.com/global-infrastructure/geographies/) table. Once you have identified your geography, use the IP ranges from the [weekly file](https://www.microsoft.com/download/details.aspx?id=56519) for all regions in that geography.

> [!IMPORTANT]
> You cannot use private connections such as [ExpressRoute](https://azure.microsoft.com/services/expressroute/) or VPN to connect Microsoft-hosted agents to your corporate network. The traffic between Microsoft-hosted agents and your servers will be over public network.

### To identify the possible IP ranges for Microsoft-hosted agents

1. Identify the [region for your organization](../../organizations/accounts/change-organization-location.md) in **Organization settings**.
2. Identify the [Azure Geography](https://azure.microsoft.com/global-infrastructure/geographies/) for your organization's region.
3. Map the names of the regions in your geography to the format used in the weekly file, following the format of `AzureCloud.<region>`, such as `AzureCloud.westus`. You can map the names of the regions from the [Azure Geography](https://azure.microsoft.com/global-infrastructure/geographies/) list to the format used in the weekly file by reviewing the region names passed to the constructor of the regions defined in the [source code for the Region class](https://github.com/Azure/azure-libraries-for-net/blob/master/src/ResourceManagement/ResourceManager/Region.cs), from the [Azure Management Libraries for .NET](https://github.com/Azure/azure-libraries-for-net).
    > [!NOTE]
    > Since there is no API in the [Azure Management Libraries for .NET](https://github.com/Azure/azure-libraries-for-net) to list the regions for a geography, you must list them manually as shown in the following example.
1. Retrieve the IP addresses for all regions in your geography from the [weekly file](https://www.microsoft.com/download/details.aspx?id=56519). If your region is **Brazil South** or **West Europe**, you must include additional IP ranges based on your fallback geography, as described in the following note.

>[!NOTE]
>Due to capacity restrictions, some organizations in the **Brazil South** or **West Europe** regions may occasionally see their hosted agents located outside their expected geography. In these cases, in addition to including the IP ranges as described in the previous section, additional IP ranges must be included for the regions in the capacity fallback geography.
>
>If your organization is in the **Brazil South** region, your capacity fallback geography is **United States**.
>
>If your organization is in the **West Europe** region, the capacity fallback geography is **France**.
>
>Our Mac IP ranges are not included in the Azure IPs above, though we are investigating options to publish these in the future.

#### Example

In the following example, the hosted agent IP address ranges for an organization in the West US region are retrieved from the weekly file. Since the West US region is in the United States geography, the IP addresses for all regions in the United States geography are included. In this example, the IP addresses are written to the console. 

```csharp
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace WeeklyFileIPRanges
{
    class Program
    {
        // Path to the locally saved weekly file
        const string weeklyFilePath = @"C:\MyPath\ServiceTags_Public_20200504.json";

        static void Main(string[] args)
        {
            // United States geography has the following regions:
            // Central US, East US 2, East US, North Central US, 
            // South Central US, West Central US, West US, West US 2
            List<string> USGeographyRegions = new List<string>
            {
                "centralus",
                "eastus",
                "eastus2",
                "northcentralus",
                "southcentralus",
                "westcentralus",
                "westus",
                "westus2"
            };

            // Load the weekly file
            JObject weeklyFile = JObject.Parse(File.ReadAllText(weeklyFilePath));
            JArray values = (JArray)weeklyFile["values"];

            foreach (string region in USGeographyRegions)
            {
                string azureCloudRegion = $"AzureCloud.{region}";
                Console.WriteLine(azureCloudRegion);

                var ipList =
                    from v in values
                    where (string)v["name"] == azureCloudRegion
                    select v["properties"]["addressPrefixes"];

                foreach (var ip in ipList.Children())
                {
                    Console.WriteLine(ip);
                }
            }
        }
    }
}
```

### Service tags

Microsoft-hosted agents can't be listed by service tags. If you're trying to grant hosted agents access to your resources, you'll need to follow the IP range allow listing method.

## Security

Microsoft-hosted agents run on secure Azure platform. However, you must be aware of the following security considerations.

- Although Microsoft-hosted agents run on Azure public network, they are not assigned public IP addresses. So, external entities cannot target Microsoft-hosted agents. 
- Microsoft-hosted agents are run in individual VMs, which are re-imaged after each run. Each agent is dedicated to a single organization, and each VM hosts only a single agent.
- There are several benefits to running your pipeline on Microsoft-hosted agents, from a security perspective. If you run untrusted code in your pipeline, such as contributions from forks, it is safer to run the pipeline on Microsoft-hosted agents than on self-hosted agents that reside in your corporate network.
- When a pipeline needs to access your corporate resources behind a firewall, you have to allow the IP address range for the Azure geography. This may increase your exposure as the range of IP addresses is rather large and since machines in this range can belong to other customers as well. The best way to prevent this is to avoid the need to access internal resources.
- Hosted images do not conform to [CIS hardening benchmarks](https://www.cisecurity.org/benchmark/azure/). To use CIS-hardened images, you must create either self-hosted agents or scale-set agents.

## Capabilities and limitations

Microsoft-hosted agents:

* Have [the above software](#software). You can also add software during your build or release using [tool installer tasks](../process/tasks.md#tool-installers).
* Provide 10 GB of storage for your source and build outputs.
* Provide a free tier:
  * Public project: 10 free Microsoft-hosted parallel jobs that can run for up to 360 minutes (6 hours) each time, with no overall time limit per month. [Contact us](https://azure.microsoft.com/support/devops/) to get your free tier limits increased.
  * Private project: One free parallel job that can run for up to 60 minutes each time, until you've used 1,800 minutes (30 hours) per month. You can pay for additional capacity per parallel job. Paid parallel jobs remove the monthly time limit and allow you to run each job for up to 360 minutes (6 hours). [Buy Microsoft-hosted parallel jobs](https://marketplace.visualstudio.com/items?itemName=ms.build-release-hosted-pipelines).
  * When you create a new Azure DevOps organization, you are not given these free grants by default. To request the free grant for public or private projects, submit [a request](https://aka.ms/azpipelines-parallelism-request).
* Run on Microsoft Azure general purpose virtual machines [Standard_DS2_v2](/azure/virtual-machines/dv2-dsv2-series#dsv2-series)
* Run as an administrator on Windows and a passwordless sudo user on Linux
* (Linux only) Run steps in a `cgroup` that offers 6 GB of physical memory and 13 GB of total memory

Microsoft-hosted agents do not offer:

* The ability to remotely connect.
* The ability to [drop artifacts to a UNC file share](../artifacts/build-artifacts.md#unc-file-share).
* The ability to join machines directly to your corporate network.
* The ability to get bigger or more powerful build machines.
* The ability to pre-load custom software. You can install software during a pipeline run, such as through [tool installer tasks](../process/tasks.md#tool-installers) or in a script.
* Potential performance advantages that you might get by using self-hosted agents that might start and run builds faster. [Learn more](agents.md#private-agent-performance-advantages)
* The ability to run [XAML builds](/previous-versions/visualstudio/visual-studio-2013/ms181709(v=vs.120)).

If Microsoft-hosted agents don't meet your needs, then you can deploy your own [self-hosted agents](agents.md#install) or use [scale set agents](scale-set-agents.md).

## FAQ

### How can I see what software is included in an image?

You can see the installed software for each hosted agent by choosing the **Included Software** link in the [Software](#software) table. 

### How does Microsoft choose the software and versions to put on the image?

More information about the versions of software included on the images can be found at [Guidelines for what's installed](https://github.com/actions/virtual-environments#guidelines-for-whats-installed). 

### When are the images updated?

Images are typically updated weekly. You can check the [status badges](https://github.com/actions/virtual-environments) which are in the format `20200113.x` where the first part indicates the date the image was updated.

### What can I do if software I need is removed or replaced with a newer version?

You can let us know by filing a GitHub issue by choosing the **Included Software** links in the [Use a Microsoft-hosted agent](#use-a-microsoft-hosted-agent) table.

You can also use a self-hosted agent that includes the exact versions of software that you need. For more information, see [Self-hosted agents](agents.md#install).

### What if I need a bigger machine with more processing power, memory, or disk space?

We can't increase the memory, processing power, or disk space for Microsoft-hosted agents, but you can use [self-hosted agents](agents.md#install) or [scale set agents](scale-set-agents.md) hosted on machines with your desired specifications.

### I can't select a Microsoft-hosted agent and I can't queue my build or deployment. What should I do?

Microsoft-hosted agents are only available in Azure Pipelines and not in TFS or Azure DevOps Server.

By default, all project contributors in an organization have access to the Microsoft-hosted agents. But, your organization administrator may limit the access of Microsoft-hosted agents to select users or projects. Ask the owner of your Azure DevOps organization to grant you permission to use a Microsoft-hosted agent. See [agent pool security](pools-queues.md#security).

### My pipelines running on Microsoft-hosted agents take more time to complete. How can I speed them up?

If your pipeline has recently become slower, review our [status page](https://status.dev.azure.com/) for any outages. We could be having issues with our service. Or else, review any changes that you made in your application code or pipeline. Your repository size during check-out might have increased, you may be uploading larger artifacts, or you may be running more tests.

If you are just setting up a pipeline and are comparing the performance of Microsoft-hosted agents to your local machine or a self-hosted agent, then note the [specifications](#capabilities-and-limitations) of the hardware that we use to run your jobs. We are unable to provide you with bigger or powerful machines. You can consider using [self-hosted agents](agents.md) or [scale set agents](scale-set-agents.md) if this performance is not acceptable.

### I need more agents. What can I do?

All Azure DevOps organizations are provided with several free parallel jobs for open-source projects, and one free parallel job and limited minutes each month for private projects. If you need additional minutes or parallel jobs for your open-source project, contact [support](https://azure.microsoft.com/support/devops/). If you need additional minutes or parallel jobs for your private project, then you can [buy more](../licensing/concurrent-jobs.md).

### My pipeline succeeds on self-hosted agent, but fails on Microsoft-hosted agents. What should I do?

Your self-hosted agent probably has all the right dependencies installed on it, whereas the same dependencies, tools, and software are not installed on Microsoft-hosted agents. First, carefully review the list of software that is installed on Microsoft-hosted agents by following the link to **Included software** in the table above. Then, compare that with the software installed on your self-hosted agent. In some cases, Microsoft-hosted agents may have the tools that you need (for example, Visual Studio), but all of the necessary optional components may not have been installed. If you find differences, then you have two options:

- You can create a new issue on the [repository](https://github.com/actions/virtual-environments), where we track requests for additional software. Contacting support will not help you with setting up new software on Microsoft-hosted agents.

- You can use [self-hosted agents](agents.md) or [scale set agents](scale-set-agents.md). With these agents, you are fully in control of the images that are used to run your pipelines.

### My build succeeds on my local machine, but fails on Microsoft-hosted agents. What should I do?

Your local machine probably has all the right dependencies installed on it, whereas the same dependencies, tools, and software are not installed on Microsoft-hosted agents. First, carefully review the list of software that is installed on Microsoft-hosted agents by following the link to **Included software** in the table above. Then, compare that with the software installed on your local machine. In some cases, Microsoft-hosted agents may have the tools that you need (e.g., Visual Studio), but all of the necessary optional components may not have been installed. If you find differences, then you have two options:

- You can create a new issue on the [repository](https://github.com/actions/virtual-environments), where we track requests for additional software. This is your best bet for getting new software installed. Contacting support will not help you with setting up new software on Microsoft-hosted agents.

- You can use [self-hosted agents](agents.md) or [scale set agents](scale-set-agents.md). With these agents, you are fully in control of the images that are used to run your pipelines.

### My pipeline fails with the error: "no space left on device".

Microsoft-hosted agents only have 10 GB of disk space available for running your job. This space is consumed when you check out source code, when you download packages, when you download docker images, or when you produce intermediate files. Unfortunately, we cannot increase the free space available on Microsoft-hosted images. You can restructure your pipeline so that it can fit into this space. Or, you can consider using [self-hosted agents](agents.md) or [scale set agents](scale-set-agents.md).

### My pipeline running on Microsoft-hosted agents requires access to servers on our corporate network? How do we get a list of IP addresses to allow in our firewall?

See the section [Agent IP ranges](#agent-ip-ranges)

### Our pipeline running on Microsoft-hosted agents is unable to resolve the name of a server on our corporate network. How can we fix this?

If you refer to the server by its DNS name, then make sure that your server is publicly accessible on the Internet through its DNS name. If you refer to your server by its IP address, make sure that the IP address is publicly accessible on the Internet. In both cases, ensure that any firewall in between the agents and your corporate network has the [agent IP ranges](#agent-ip-ranges) allowed.

### I'm getting an SAS IP authorization error from an Azure Storage account

If you get an SAS error code, it is most likely because the IP address ranges from the Microsoft-hosted agents aren't permitted due to your Azure Storage rules. There are a few workarounds:

1. [Manage the IP network rules for your Azure Storage account](/azure/storage/common/storage-network-security?tabs=azure-portal#managing-ip-network-rules) and add the [IP address ranges for your hosted agents](#networking).
2. In your pipeline, use [Azure CLI to update the network ruleset for your Azure Storage account](/powershell/module/az.storage/update-azstorageaccountnetworkruleset) right before you access storage, and then restore the previous ruleset.
3. Use [self-hosted agents](agents.md#install) or [Scale set agents](scale-set-agents.md).

<a name="mac-pick-tools"></a>
### How can I manually select versions of tools on the Hosted macOS agent?

#### Xamarin

  **Hosted macOS** agent stores Xamarin SDK versions and the associated Mono versions as a set of symlinks to Xamarin SDK locations that are available by a single bundle symlink.

  To manually select a Xamarin SDK version to use on the **Hosted macOS** agent, execute the following bash command before your Xamarin build task as a part of your build, specifying the symlink to Xamarin versions bundle that you need.

  `/bin/bash -c "sudo $AGENT_HOMEDIRECTORY/scripts/select-xamarin-sdk.sh <symlink>"`

  The list of all available Xamarin SDK versions and symlinks can be found in the agents documentation:
  - [macOS 10.14](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.14-Readme.md#xamarin)
  - [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xamarin)

  This command does not select the Mono version beyond the Xamarin SDK. To manually select a Mono version, see instructions below.

  In case you are using a non-default version of Xcode for building your Xamarin.iOS or Xamarin.Mac apps, you should additionally execute this command line:

  `/bin/bash -c "echo '##vso[task.setvariable variable=MD_APPLE_SDK_ROOT;]'$(xcodeRoot);sudo xcode-select --switch $(xcodeRoot)/Contents/Developer"`
  
  where `$(xcodeRoot)` = `/Applications/Xcode_12.4.app`

  Xcode versions on the **Hosted macOS** agent pool can be found [here](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xcode).

#### Xcode

  If you use the [Xcode task](../tasks/build/xcode.md) included with Azure Pipelines and TFS, you can select a version of Xcode in that task's properties. Otherwise, to manually set the Xcode version to use on the **Hosted macOS** agent pool, before your `xcodebuild` build task, execute this command line as part of your build, replacing the Xcode version number 12.4 as needed:

  `/bin/bash -c "sudo xcode-select -s /Applications/Xcode_12.4.app/Contents/Developer"`

  Xcode versions on the **Hosted macOS** agent pool can be found [here](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md#xcode).

  This command does not work for Xamarin apps. To manually select an Xcode version for building Xamarin apps, see instructions above.

#### Mono

  To manually select a Mono version to use on the **Hosted macOS** agent pool, execute this script in each job of your build before your Mono build task, specifying the symlink with the required Mono version (list of all available symlinks can be found in the [Xamarin section](#xamarin) above):

  ```bash
  SYMLINK=<symlink>
  MONOPREFIX=/Library/Frameworks/Mono.framework/Versions/$SYMLINK
  echo "##vso[task.setvariable variable=DYLD_FALLBACK_LIBRARY_PATH;]$MONOPREFIX/lib:/lib:/usr/lib:$DYLD_LIBRARY_FALLBACK_PATH"
  echo "##vso[task.setvariable variable=PKG_CONFIG_PATH;]$MONOPREFIX/lib/pkgconfig:$MONOPREFIX/share/pkgconfig:$PKG_CONFIG_PATH"
  echo "##vso[task.setvariable variable=PATH;]$MONOPREFIX/bin:$PATH"
```

## Videos 
> [!VIDEO https://www.youtube.com/embed/A8f_05lnfe0?start=0]

<!-- ENDSECTION -->

::: moniker-end
