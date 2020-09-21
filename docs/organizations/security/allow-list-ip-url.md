---
title: Add IP addresses and URLs to allow list
titleSuffix: Azure DevOps
description: Add IP addresses and URLs to the Allow list for Azure DevOps and troubleshoot network connections. 
ms.topic: reference
ms.technology: devops-security
ms.reviewer: jominana
ms.author: ChComley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 09/18/2020
---

# Allowed address lists and network connections   

[!INCLUDE [temp](../../includes/version-ts-tfs-2015-2016.md)]

If your organization is secured with a firewall or proxy server, you need to add certain IP addresses and domain URLs to the **Allow list**. Adding them to the Allow list helps to ensure that you have the best experiences with Azure DevOps.

For the best experience with Visual Studio and Azure Services, you open select ports and protocols. For more information, see [Install and use Visual Studio behind a firewall or proxy server, Use Visual Studio and Azure Services](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server#use-visual-studio-and-azure-services).

## Domain URLs to allow

Network connection issues could occur because of your security appliances, which may be blocking connections - Visual Studio uses TLS 1.2. When you're using NuGet or connecting from Visual Studio 2015 and later, update the security appliances to support TLS 1.2 for the following connections.

### Azure DevOps domains to allow

To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` and `*dev.azure.com` are open. 

### URLs to support sign in and licensing connections

- `management.core.windows.net`
- `login.microsoftonline.com`
- `login.live.com`
- `go.microsoft.com`
- `graph.microsoft.com`
- `app.vssps.dev.azure.com`
- `app.vssps.visualstudio.com`
- `aadcdn.msauth.net`
- `aadcdn.msftauth.net`

### Additional URLs for signing into Azure DevOps and Azure

* `amcdn.msftauth.net`
* `windows.net`
* `microsoftonline.com`
* `visualstudio.com`
* `microsoft.com`
* `live.com`
* `dev.azure.com`
* `azure.microsoft.com`
* `azurecomcdn.azureedge.net`
* `amp.azure.net`
* `aexprodea1.vsaex.visualstudio.com`
* `management.core.windows.net`
* `aex.dev.azure.com`
* `app.vssps.dev.azure.com`
* `app.vssps.visualstudio.com`
* `vstsagentpackage.azureedge.net`
* `cdn.vsassets.io` (hosts Azure DevOps Content Delivery Networks (CDNs) content)
* `gallerycdn.vsassets.io` (hosts Azure DevOps extensions)
* `static2.sharepointonline.com`  (hosts some resources that Azure DevOps uses in "office fabric" UI kit for fonts, and so on)
* `*.vstmrblob.vsassets.io` (hosts Azure DevOps TCM log data)
* `vsrm.dev.azure.com` (package feed)

## Additional domains

Azure DevOps uses CDNs to serve static content. Ensure the following CDNs are allowed.

- `*.vsassets.io` 
- `*.vsassetscdn.azure.cn` 
- `*.gallerycdn.vsassets.io` (Marketplace)
- `*.gallerycdn.azure.cn` (Marketplace)

We recommend you open port 443 to all traffic on these IP addresses and domains. We also recommend you open port 22 to a smaller subset of targeted IP addresses.  

### Azure Artifacts

- `*.blob.core.windows.net`
- `*.visualstudio.com`
- all IP addresses in the "name": "Storage.{your region}" section of this file (updated weekly): [Azure IP ranges and Service Tags - Public Cloud](https://www.microsoft.com/download/details.aspx?id=56519)

## NuGet connections

* `azurewebsites.net`
* `nuget.org`

> [!NOTE]
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you're using by opening up `%APPData%\Nuget\NuGet.Config`.

## IP addresses and range restrictions

Ensure the following IP addresses are allowed, so your organization works with any existing firewall or IP restrictions. The endpoint data, in the following chart lists requirements for connectivity from a user's machine to Azure DevOps. The list doesn't include network connections from Microsoft into a customer network, sometimes called hybrid or inbound network connections. 

|**IP V4 ranges** |**IP V6 ranges**  |
|---------|---------|
|`13.107.6.0/24`     |  `2620:1ec:4::/48`      |
|`13.107.9.0/24`     |  `2620:1ec:a92::/48`    |     
|`13.107.42.0/24`    |  `2620:1ec:21::/48`     |
|`13.107.43.0/24`    |  `2620:1ec:22::/48`     |

If you're currently allow-listing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.

### Other IP addresses

* `40.82.190.38`
* `52.108.0.0/14`
* `52.237.19.6`
* `52.238.106.116/32`
* `52.244.37.168/32` 
* `52.244.203.72/32` 
* `52.244.207.172/32` 
* `52.244.223.198/32` 
* `52.247.150.191/32`

For more information, see [Worldwide endpoints](https://docs.microsoft.com/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide#microsoft-365-common-and-office-online) and [Adding IP address rules](https://docs.microsoft.com/azure/app-service/app-service-ip-restrictions#adding-ip-address-rules). 

## SSH connections

If you need to connect to Git repositories on Azure DevOps with SSH, you need to allow requests to port 22 for the following IP addresses:

- `ssh.dev.azure.com`
- `vs-ssh.visualstudio.com`
- all IP addresses in the "name": "AzureCloud" section of [this downloadable file](https://www.microsoft.com/download/details.aspx?id=56519) (updated weekly): Azure IP ranges and Service Tags - Public Cloud 

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

During the import process, we highly recommend that you restrict access to your VM to only IPs from Azure DevOps. To restrict access, allow only connections from the set of Azure DevOps IPs,  which were involved in the collection database import process. For information about identifying the correct IPs, see [Azure DevOps Services IPs](../../migrate/migration-import.md#azure-devops-services-ips). 

## Related articles

- [Microsoft-hosted agents Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges)
- [Self-hosted Windows agents FAQs](../../pipelines/agents/v2-windows.md)
- [Install and use Visual Studio behind a firewall or proxy server](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server#use-visual-studio-and-azure-services)






