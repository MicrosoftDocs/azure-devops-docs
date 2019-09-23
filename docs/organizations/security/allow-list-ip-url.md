---
title: Add IP addresses and URLs to allow list - Azure DevOps
description: Learn how to add IP addresses and URLs for Azure DevOps to the Allow list
ms.prod: devops
ms.topic: article
ms.technology: devops-security
ms.author: jominana
author: chcomley
ms.manager: jillfra
ms.date: 09/19/2019
monikerRange: 'azure-devops'
---

# Add IP addresses and URLs to allow list

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]

If your organization uses security measures, such as a firewall or a proxy server, there are IP addresses and domain URLs that you might want to add to the Allow list. Adding them to the Allow list helps to ensure that you have the best experiences with Azure DevOps.

The endpoint data, in the following chart, lists requirements for connectivity from a user’s machine to Azure DevOps. The list doesn’t include network connections from Microsoft into a customer network, sometimes called hybrid or inbound network connections.

## Azure DevOps IP addresses

Ensure the following IP addresses are allowed, so your organization works with any existing firewall or IP restrictions.

|**IP V4 ranges** |**IP V6 ranges**  |
|---------|---------|
|13.107.6.0/24    |   2620:1ec:4::/48      |
|13.107.9.0/24     |   2620:1ec:a92::/48    |     
|13.107.42.0/24    |  2620:1ec:21::/48       |
|13.107.43.0/24    |  2620:1ec:22::/48       |

## Azure DevOps domains

For domain-based firewalls, ensure the following domains are allowed.

|      Domains       |
|--------------------|
| - dev.azure.com/\* |
| - \*.dev.azure.com |

## SSH connections

If you need to connect to Git repositories on Azure DevOps with SSH, you need to allow requests to port 22 for the following:

- ssh.dev.azure.com
- ssh.visualstudio.com
- all IP addresses in the "name": "AzureCloud" section of [this file](https://www.microsoft.com/en-us/download/details.aspx?id=56519) (updated weekly): Azure IP ranges and Service Tags - Public Cloud

## Other domains

Azure DevOps leverages Content Delivery Networks (CDNs) to serve static content. Ensure the following CDNs are allowed.

- *.vsassets.io 
- *.vsassetscdn.azure.cn 
- *.gallerycdn.vsassets.io (Marketplace)
- *.gallerycdn.azure.cn (Marketplace)

We recommend you open port 443 to all traffic on these IP addresses and domains. We also recommend you open port 22 to a smaller subset of targeted IP addresses.  

## Azure DevOps ExpressRoute connections

If your organization uses ExpressRoute, ensure the following addresses are allowed.

|**IP V4 ranges** |**IP V6 ranges**  |
|---------|---------|
|13.107.6.175/32   | 2620:1ec:a92::175/128   |
|13.107.6.176/32   | 2620:1ec:a92::176/128   |     
|13.107.6.183/32   |  2620:1ec:a92::183/128  |
|13.107.9.175/32   | 2620:1ec:4::175/128      |
|13.107.9.176/32   | 2620:1ec:4::176/128     |
|13.107.9.183/32   | 2620:1ec:4::183/128     |
|13.107.42.18/32   | 2620:1ec:21::18/128      |
|13.107.42.19/32   | 2620:1ec:21::19/128      |
|13.107.42.20/32  | 2620:1ec:21::20/128       |
|13.107.43.18/32  | 2620:1ec:22::18/128       |
|13.107.43.19/32  | 2620:1ec:22::19/128       |
|13.107.43.20/32  | 2620:1ec:22::20/128       |

For more information about Azure DevOps and ExpressRoute, see [ExpressRoute for Azure DevOps](https://devblogs.microsoft.com/devops/expressroute-for-azure-devops/). 

## Connecting Private Build Agents

If you're running a firewall and your code is in Azure Repos, see [Self-hosted Windows agents FAQ](../../pipelines/agents/v2-windows.md#im-running-a-firewall-and-my-code-is-in-azure-repos-what-urls-does-the-agent-need-to-communicate-with). This article has information about which URLs and IP addresses your private agent needs to communicate with. 

## Hosted Windows and Linux Agents

For more information about hosted Windows and Linux agents, see [Microsoft-hosted Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges).

## Hosted Mac Agents

Unfortunately, currently we don't publish hosted Mac IP address ranges.

## Azure DevOps Import Service

During the import process, we highly recommend that you restrict access to your VM to only IPs from Azure DevOps. To restrict access, only allow connections from the set of Azure DevOps IPs involved in the collection database import process. For information about identifying the correct IPs, see [Azure DevOps Services IPs](../../migrate/migration-import.md#azure-devops-services-ips). 

## Other scenarios

### Visual Studio and Azure Services

If your organization use security measures, like a firewall or a proxy server, add domain URLs to the Allow list. Open ports and protocols also, for the best experience with Visual Studio and Azure Services. For more information, see [Use Visual Studio and Azure Services - Install and use Visual Studio behind a firewall or proxy server](https://docs.microsoft.com/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server?view=vs-2017#use-visual-studio-and-azure-services).

## Other important URLs to consider

### List of URLs for sign in and licensing connections

- https://management.core.windows.net
- https://login.microsoftonline.com
- https://login.live.com
- https://go.microsoft.com
- https://graph.windows.net
- https://app.vssps.visualstudio.com

### A more general list of URLs for signing into Azure DevOps and Azure

- https://windows.net
- https://microsoftonline.com
- https://visualstudio.com
- https://microsoft.com
- https://live.com
- https://management.core.windows.net
- https://dev.azure.com
- https://aex.dev.azure.com
- https://static2.sharepointonline.com -- hosts some resources that we use in "office fabric" UI kit (fonts, and so on)

### NuGet connections

- https://azurewebsites.net
- https://nuget.org










