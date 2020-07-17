---
title: Add IP addresses and URLs to allow list
titleSuffix: Azure DevOps
description: Add IP addresses and URLs to the Allow list for Azure DevOps, troubleshoot network connections 
ms.topic: reference
ms.technology: devops-security
ms.reviewer: jominana
ms.author: ChComley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 12/12/2019
---

# Allowed address lists and network connections   

[!INCLUDE [temp](../../includes/version-ts-tfs-2015-2016.md)]

If your organization use security measures, like a firewall or a proxy server, you need to add certain IP addresses and domain URLs to the **Allow list**. Adding them to the Allow list helps to ensure that you have the best experiences with Azure DevOps.

For the best experience with Visual Studio and Azure Services, open select ports and protocols. For more information, see [Use Visual Studio and Azure Services - Install and use Visual Studio behind a firewall or proxy server](https://docs.microsoft.com/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server?view=vs-2017#use-visual-studio-and-azure-services).

## Domain URLs to allow

If you are having network connection issues to Azure DevOps, using NuGet, or connecting from Visual Studio 2015 and later versions, it may be because your security appliances are blocking connections as Visual Studio uses TLS 1.2. To fix this issue, update the security appliances to support TLS 1.2 for the following connections.

### Azure DevOps domains to allow

To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` and `*dev.azure.com` are open. 
### URLs to support sign in and licensing connections

- `https://management.core.windows.net`
- `https://login.microsoftonline.com`
- `https://login.live.com`
- `https://go.microsoft.com`
- `https://graph.microsoft.com`
- `https://app.vssps.dev.azure.com`
- `https://app.vssps.visualstudio.com`
- `https://aadcdn.msauth.net`
- `https://aadcdn.msftauth.net`

### Additional URLs for signing into Azure DevOps and Azure

* `https://amcdn.msftauth.net`
* `https://windows.net`
* `https://microsoftonline.com`
* `https://visualstudio.com`
* `https://microsoft.com`
* `https://live.com`
* `https://dev.azure.com`
* `https://management.core.windows.net`
* `https://aex.dev.azure.com`
* `https://app.vssps.dev.azure.com`
* `https://app.vssps.visualstudio.com`
* `https://vstsagentpackage.azureedge.net`
* `https://cdn.vsassets.io` (hosts Azure DevOps Content Delivery Networks (CDNs) content)
* `https://gallerycdn.vsassets.io` (hosts Azure DevOps extensions)
* `https://static2.sharepointonline.com`  (hosts some resources that Azure DevOps uses in "office fabric" UI kit for fonts, and so on)
* `https://*.vstmrblob.vsassets.io` (hosts Azure DevOps TCM log data)
* `https://vsrm.dev.azure.com` (package feed)


## Additional domains

Azure DevOps leverages CDNs to serve static content. Ensure the following CDNs are allowed.

- `*.vsassets.io` 
- `*.vsassetscdn.azure.cn` 
- `*.gallerycdn.vsassets.io` (Marketplace)
- `*.gallerycdn.azure.cn` (Marketplace)

We recommend you open port 443 to all traffic on these IP addresses and domains. We also recommend you open port 22 to a smaller subset of targeted IP addresses.  

### Azure Artifacts

- `*.blob.core.windows.net`
- all IP addresses in the "name": "Storage.{your region}" section of this file (updated weekly): [Azure IP ranges and Service Tags - Public Cloud](https://www.microsoft.com/en-us/download/details.aspx?id=56519)

## NuGet connections

* `https://azurewebsites.net`
* `https://nuget.org`

> [!NOTE]
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you are using by opening up `%APPData%\Nuget\NuGet.Config`.

## IP addresses and range restrictions

Ensure the following IP addresses are allowed, so your organization works with any existing firewall or IP restrictions. The endpoint data, in the following chart lists requirements for connectivity from a user's machine to Azure DevOps. The list doesn't include network connections from Microsoft into a customer network, sometimes called hybrid or inbound network connections. 

|**IP V4 ranges** |**IP V6 ranges**  |
|---------|---------|
|`13.107.6.0/24`     |  `2620:1ec:4::/48`      |
|`13.107.9.0/24`     |  `2620:1ec:a92::/48`    |     
|`13.107.42.0/24`    |  `2620:1ec:21::/48`     |
|`13.107.43.0/24`    |  `2620:1ec:22::/48`     |

If you're currently allow-listing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.


## SSH connections

If you need to connect to Git repositories on Azure DevOps with SSH, you need to allow requests to port 22 for the following IP addresses:

- `ssh.dev.azure.com`
- `vs-ssh.visualstudio.com`
- all IP addresses in the "name": "AzureCloud" section of [this file](https://www.microsoft.com/download/details.aspx?id=56519) (updated weekly): Azure IP ranges and Service Tags - Public Cloud 


## Azure DevOps ExpressRoute connections

If your organization uses ExpressRoute, ensure the following addresses are allowed.

|**IP V4 ranges** |**IP V6 ranges**  |
|---------|---------|
|`13.107.6.175/32`   | `2620:1ec:a92::175/128`  |
|`13.107.6.176/32`   | `2620:1ec:a92::176/128`  |     
|`13.107.6.183/32`   | `2620:1ec:a92::183/128`  |
|`13.107.9.175/32`   | `2620:1ec:4::175/128`    |
|`13.107.9.176/32`   | `2620:1ec:4::176/128`    |
|`13.107.9.183/32`   | `2620:1ec:4::183/128`    |
|`13.107.42.18/32`   | `2620:1ec:21::18/128`    |
|`13.107.42.19/32`   | `2620:1ec:21::19/128`    |
|`13.107.42.20/32`   | `2620:1ec:21::20/128`    |
|`13.107.43.18/32`   | `2620:1ec:22::18/128`    |
|`13.107.43.19/32`   | `2620:1ec:22::19/128`    |
|`13.107.43.20/32`   | `2620:1ec:22::20/128`    |


For more information about Azure DevOps and ExpressRoute, see [ExpressRoute for Azure DevOps](https://devblogs.microsoft.com/devops/expressroute-for-azure-devops/). 

## Microsoft-hosted Agents

If you use Microsoft-hosted agent to run your jobs and you need the information about what IP addresses are used, see [Microsoft-hosted agents Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges).

## Private Build Agents

If you're running a firewall and your code is in Azure Repos, see [Self-hosted Windows agents FAQs](../../pipelines/agents/v2-windows.md). This article has information about which URLs and IP addresses your private agent needs to communicate with. 

## Hosted Windows and Linux Agents

For more information about hosted Windows and Linux agents, see [Microsoft-hosted Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges).

## Hosted Mac Agents

Currently, we don't publish hosted Mac IP address ranges.

## Azure DevOps import service

During the import process, we highly recommend that you restrict access to your VM to only IPs from Azure DevOps. To restrict access, only allow connections from the set of Azure DevOps IPs involved in the collection database import process. For information about identifying the correct IPs, see [Azure DevOps Services IPs](../../migrate/migration-import.md#azure-devops-services-ips). 








