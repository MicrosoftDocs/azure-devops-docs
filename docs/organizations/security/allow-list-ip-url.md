---
title: Allowed address lists and network connections  
titleSuffix: Azure DevOps
description: Add IP addresses and domain URLs to the allowlist for Azure DevOps and troubleshoot network connections. 
ms.topic: reference
ms.technology: devops-security
ms.reviewer: jominana
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 06/09/2021
---

# Allowed IP addresses and domain URLs

[!INCLUDE [temp](../../includes/version-ts-tfs-2015-2016.md)]

If your organization is secured with a firewall or proxy server, you need to add certain (internet protocol) IP addresses and domain uniform resource locators (URLs) to the **allowlist**. Adding them to the allowlist helps to ensure that you have the best experiences with Azure DevOps. You know that you need to update your allowlist if you can't access Azure DevOps on your network.

For Visual Studio and Azure Services to work well with no network issues, you open select ports and protocols. For more information, see [Install and use Visual Studio behind a firewall or proxy server, Use Visual Studio and Azure Services](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server#use-visual-studio-and-azure-services).

## Domain URLs to allow

Network connection issues could occur because of your security appliances, which may be blocking connections - Visual Studio uses TLS 1.2 and above. When you're using [NuGet](#nuget-connections) or connecting from Visual Studio 2015 and later, update the security appliances to support TLS 1.2 and above for the following connections.

To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` and `*.dev.azure.com` are open.

The following section includes the most common domain URLs to support sign in and licensing connections.

```CommonDomainURLs

*.dev.azure.com
*.vsassets.io
*gallerycdn.vsassets.io
*vstmrblob.vsassets.io
aadcdn.msauth.net
aadcdn.msftauth.net
aex.dev.azure.com
aexprodea1.vsaex.visualstudio.com
amcdn.msftauth.net
amp.azure.net
app.vssps.dev.azure.com
app.vssps.visualstudio.com
azure.microsoft.com
azurecomcdn.azureedge.net
cdn.vsassets.io
dev.azure.com
go.microsoft.com
graph.microsoft.com
live.com
login.live.com
login.microsoftonline.com
management.azure.com
management.core.windows.net
management.core.windows.net
microsoft.com
microsoftonline.com
static2.sharepointonline.com
visualstudio.com
vsrm.dev.azure.com
vstsagentpackage.azureedge.net
windows.net
```

<details>
<summary>Some domain URL descriptions</summary>
<br>
|**Domain URLs to allow**  |**Description** |
|---------|---------|
|*gallerycdn.vsassets.io     | Hosts Azure DevOps extensions        |
|*vstmrblob.vsassets.io    | Hosts Azure DevOps TCM log data        |
|cdn.vsassets.io    |  Hosts Azure DevOps Content Delivery Networks (CDNs) content       |
|static2.sharepointonline.com    | Hosts some resources that Azure DevOps uses in "office fabric" UI kit for fonts, and so on        |
|vsrm.dev.azure.com   | Hosts package feeds       |
</details>

We recommend you open port 443 to all traffic on these IP addresses and domains. We also recommend you open port 22 to a smaller subset of targeted IP addresses.

> [!NOTE]
> Azure DevOps uses Content Delivery Networks (CDNs) to serve static content. Users in China should also add the following domain URLs to an allowlist:
>
> ``` NuGetDomainURLs
> *.vsassetscdn.azure.cn
> *.gallerycdn.azure.cn
> ```

## More domain URLs

### Azure Artifacts

Ensure the following domain URLs are allowed for Azure Artifacts:

```AzureArtifactsDomainURLs
*.blob.core.windows.net
*.visualstudio.com
```

Also allow all IP addresses in the "name": "Storage.{your region}" section of the following file (updated weekly): [Azure IP ranges and Service Tags - Public Cloud](https://www.microsoft.com/download/details.aspx?id=56519).

### NuGet connections

Ensure the following domain URLs are allowed for NuGet connections:

``` NuGetDomainURLs
azurewebsites.net
nuget.org
```

> [!NOTE]
> Privately owned NuGet server URLs might not be included in the previous list. You can check the NuGet servers you're using by opening `%APPData%\Nuget\NuGet.Config`.

### SSH connections

If you need to connect to Git repositories on Azure DevOps with SSH, allow requests to port 22 for the following domain URLs:

```SSHDomainURLs

ssh.dev.azure.com
vs-ssh.visualstudio.com
```

Also allow IP addresses in the "name": "AzureDevOps" section of [this downloadable file](https://www.microsoft.com/download/details.aspx?id=56519) (updated weekly) named: **Azure IP ranges and Service Tags - Public Cloud**

### Azure Pipelines Agents

If you use Microsoft-hosted agent to run your jobs and you need the information about what IP addresses are used, see [Microsoft-hosted agents Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges). See all [Azure virtual machine scale set agents](/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops).

If you're running a firewall and your code is in Azure Repos, see [Self-hosted Windows agents FAQs](../../pipelines/agents/v2-windows.md). This article has information about which domain URLs and IP addresses your private agent needs to communicate with.

For more information about hosted Windows and Linux agents, see [Microsoft-hosted Agent IP ranges](../../pipelines/agents/hosted.md#agent-ip-ranges).

Currently, we don't publish hosted Mac IP address ranges.

<a id="range-restrictions" />

## IP addresses and range restrictions

### Outbound connections

_Outbound connections_ originate from inside your organization and that target Azure DevOps or other dependent sites. Examples of such connections include:

- Browsers connecting to Azure DevOps website as users go to and use features of Azure DevOps
- Azure Pipelines agents installed on your organization's network connecting to Azure DevOps to poll for pending jobs
- CI events sent from a source code repository that's hosted within your organization's network to Azure DevOps

Ensure the following IP addresses are allowed for outbound connection, so your organization works with any existing firewall or IP restrictions. The endpoint data in the following chart lists requirements for connectivity from a machine in your organization to Azure DevOps Services.

#### [IP V4 ranges](#tab/IP-V4)

```IP V4 ranges

13.107.6.0/24
13.107.9.0/24
13.107.42.0/24
13.107.43.0/24
```

#### [IP V6 ranges](#tab/IP-V6)

```IP V6 ranges

2620:1ec:4::/48
2620:1ec:a92::/48
2620:1ec:21::/48
2620:1ec:22::/48
```

---

If you're currently allowing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.

> [!NOTE]
> [Azure Service Tags](/azure/virtual-network/service-tags-overview) aren't supported for *outbound* connection.

### Inbound connections

_Inbound connections_ originate from Azure DevOps and target resources within your organization's network. Examples of such connections include:

- Azure DevOps Services connecting to endpoints for [Service Hooks](../../service-hooks/overview.md)  
- Azure DevOps Services connecting to customer-controlled SQL Azure VMs for [Data Import](../../migrate/migration-overview.md)  
- Azure Pipelines connecting to on-premises source code repositories such as [GitHub Enterprise](../../pipelines/repos/github-enterprise.md) or [BitBucket Server](../../pipelines/repos/on-premises-bitbucket.md)  
- Azure DevOps Services [Audit Streaming](../audit/auditing-streaming.md) connecting to on-premises or cloud-based Splunk

Ensure the following IP addresses are allowed for inbound connection, so your organization works with any existing firewall or IP restrictions. The endpoint data in the following chart lists requirements for connectivity from Azure DevOps Services to your on-premises or other cloud services.

> [!div class="mx-tdCol2BreakAll"]  
> |  Region  | IP V4 ranges |  
> |------|---------|  
> | Australia East | 20.37.194.0/24 |  
> | Australia South East | 20.42.226.0/24 |  
> | Brazil South | 191.235.226.0/24 |  
> | Central Canada | 52.228.82.0/24 |
> | Asia Pacific (Hong Kong) | 20.189.107.0/24 |  
> | South India | 20.41.194.0/24 |  
> | Central United States | 20.37.158.0/23 |  
> | West Central United States | 52.150.138.0/24 |  
> | East United States   | 20.42.5.0/24 |  
> | East 2 United States  | 20.41.6.0/23 |
> | North United States  | 40.80.187.0/24 |  
> | South United States   | 40.119.10.0/24 |
> | West United States  | 40.82.252.0/24 |  
> | West 2 United States | 20.42.134.0/23 |  
> | Western Europe | 40.74.28.0/23 |  
> | United Kingdom South | 51.104.26.0/24 |  

> [!NOTE]
> Southeast Asia (SEA) isn't a supported geography yet. When we begin support for SEA, we'll publish the associated IP addresses.

Azure Service Tags are supported for *inbound* connection. Instead of allowing the previously listed IP ranges, you may use the **AzureDevOps** service tag for Azure Firewall and Network Security Group (NSG) or on-premises firewall via a JSON file download.  

> [!NOTE]
> The Service Tag or previously mentioned inbound IP addresses don't apply to Microsoft Hosted Agents. Customers are still required to allow the [entire geography for the Microsoft Hosted Agents](../../pipelines/agents/hosted.md#agent-ip-ranges).  If allowing the entire geography is a concern, we recommend using the [Azure Virtual Machine Scale Set Agents](../../pipelines/agents/scale-set-agents.md). The Scale Set Agents are a form of self-hosted agents that can be auto-scaled to meet your demands.

### Other IP addresses

Most of the following IP addresses pertain to Microsoft 365 Common and Office Online.

```Microsoft365Common&OfficeIPs

40.82.190.38
52.108.0.0/14
52.237.19.6
52.238.106.116/32
52.244.37.168/32
52.244.203.72/32
52.244.207.172/32
52.244.223.198/32
52.247.150.191/32
```

For more information, see [Worldwide endpoints](/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide&preserve-view=true#microsoft-365-common-and-office-online) and [Adding IP address rules](/azure/app-service/app-service-ip-restrictions#adding-ip-address-rules).

### Azure DevOps ExpressRoute connections

If your organization uses ExpressRoute, ensure the following IP addresses are allowed for both outbound and inbound connections.

#### [IP V4 ranges](#tab/IP-V4)

```IP V4 ranges
13.107.6.175/32
13.107.6.176/32
13.107.6.183/32
13.107.9.175/32
13.107.9.176/32
13.107.9.183/32
13.107.42.18/32
13.107.42.19/32
13.107.42.20/32
13.107.43.18/32
13.107.43.19/32
13.107.43.20/32
```

#### [IP V6 ranges](#tab/IP-V6)

```IP V6 ranges
2620:1ec:a92::175/128
2620:1ec:a92::176/128
2620:1ec:a92::183/128
2620:1ec:4::175/128
2620:1ec:4::176/128
2620:1ec:4::183/128
2620:1ec:21::18/128
2620:1ec:21::19/128
2620:1ec:21::20/128
2620:1ec:22::18/128
2620:1ec:22::19/128
2620:1ec:22::20/128
```

---

For more information about Azure DevOps and ExpressRoute, see [ExpressRoute for Azure DevOps](https://devblogs.microsoft.com/devops/expressroute-for-azure-devops/).

## Azure DevOps import service

During the import process, we highly recommend that you restrict access to your virtual machine (VM) to only IP addresses from Azure DevOps. To restrict access, allow only connections from the set of Azure DevOps IP addresses,  which were involved in the collection database import process. For information about identifying the correct IP addresses, see [(Optional) Restrict access to Azure DevOps Services IPs only](../../migrate/migration-import-large-collections.md#ips).

## Related articles

- [Available service tags](/azure/virtual-network/service-tags-overview)
- [Microsoft-hosted agents Agent IP address ranges](../../pipelines/agents/hosted.md#agent-ip-ranges)
- [Self-hosted Windows agents FAQs](../../pipelines/agents/v2-windows.md)
- [Install and use Visual Studio behind a firewall or proxy server](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server#use-visual-studio-and-azure-services)
