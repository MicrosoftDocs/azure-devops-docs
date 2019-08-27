---
title: Troubleshoot network connections and lists of allowed addresses
description: Troubleshoot network connections and lists of allowed addresses in tightened down networks for Visual Studio
ms.prod: devops
ms.technology: devops-security
ms.assetid: 7c8ff784-ffc2-4378-bc29-a7e5632ab776
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 07/31/2019
monikerRange: 'azure-devops'
---

# Troubleshoot network connections and lists of allowed addresses

[!INCLUDE [version-vsts-tfs-all-versions](../../_shared/version-vsts-tfs-all-versions.md)]

If you are having network connection issues to Azure DevOps, using NuGet, or connecting from Visual Studio 2015 and 
later versions, it may be because your security appliances are blocking connections now that Visual Studio uses TLS 1.2.

To fix this issue, update the security appliances in order to support TLS 1.2 for the following connections:

## List of URLs for sign-in and licensing connections

* `https://management.core.windows.net`
* `https://login.microsoftonline.com`
* `https://login.live.com`
* `https://go.microsoft.com`
* `https://graph.windows.net`
* `https://app.vssps.dev.azure.com`
* `https://app.vssps.visualstudio.com`

## A more general list of URLs for signing in to Azure DevOps and Azure

* `https://windows.net`
* `https://microsoftonline.com`
* `https://visualstudio.com`
* `https://microsoft.com`
* `https://live.com`
* `https://dev.azure.com`
* `https://management.core.windows.net`
* `https://app.vssps.dev.azure.com`
* `https://app.vssps.visualstudio.com`
* `https://vstsagentpackage.azureedge.net`
* `https://cdn.vsassets.io` -- hosts our CDN content
* `https://gallerycdn.vsassets.io` -- hosts Azure DevOps extensions
* `https://static2.sharepointonline.com` -- hosts some resources that we use in "office fabric" UI kit (fonts, etc)

## More URLs for specific scenarios
* `https://*.vstmrblob.vsassets.io` -- hosts our TCM log data
* `https://*.vsblob.vsassets.io` -- hosts tools and packages for Azure Artifacts
* `https://*.blob.core.windows.net` -- hosts packages for Azure Artifacts
* `https://azurewebsites.net` -- NuGet connections
* `https://nuget.org` -- NuGet connections

> [!NOTE]
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you are using by opening up `%AppData%\Nuget\NuGet.Config`.

## IP range restrictions

The various services and scenarios in Azure DevOps cover a wide range of destination IP addresses.  While a large majority of the traffic flows through the small set of of IP address ranges below, some legitimate traffic does not.  The abovementioned list of domain wildcards is the more exhaustive list of expected network traffic.  For example, the domain `https://0t3vsblobprodcus362.vsblob.vsassets.io` does not map to one of the below IP ranges, but it does match the expected domain pattern `https://*.blob.core.windows.net`, so it should not be blocked.  For this case, the IP address that `0t3vsblobprodcus362.vsblob.vsassets.io` maps to should be added to the firewall whitelist.

**Key domains**

* `dev.azure.com`
* `*.dev.azure.com`
* `visualstudio.com`
* `*.visualstudio.com`

**Key IPv4 ranges**

* `13.107.6.0/24`
* `13.107.9.0/24`
* `13.107.42.0/24`
* `13.107.43.0/24`
> [!NOTE] If you're currently allow-listing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.

**Key IPv6 ranges**

* `2620:1ec:4::/48`
* `2620:1ec:a92::/48`
* `2620:1ec:21::/48`
* `2620:1ec:22::/48`
