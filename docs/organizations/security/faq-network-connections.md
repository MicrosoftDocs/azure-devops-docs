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
* `https://*.vstmrblob.vsassets.io` -- hosts our TCM log data

## IP range restrictions

To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` and `*dev.azure.com` are open and update your allow-listed IPs to include the following IP addresses, based on your IP version. If you're currently allow-listing the `13.107.6.183` and `13.107.9.183` IP addresses, leave them in place, as you don't need to remove them.

**IPv4 ranges**

* `13.107.6.0/24`
* `13.107.9.0/24`
* `13.107.42.0/24`
* `13.107.43.0/24`

**IPv6 ranges**

* `2620:1ec:4::/48`
* `2620:1ec:a92::/48`
* `2620:1ec:21::/48`
* `2620:1ec:22::/48`

## NuGet connections

* `https://azurewebsites.net`
* `https://nuget.org`

> [!NOTE]
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you are using by opening up `%APPData%\Nuget\NuGet.Config`.
