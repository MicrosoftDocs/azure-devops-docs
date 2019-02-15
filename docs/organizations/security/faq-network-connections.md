---
title: Troubleshoot network connections and whitelist addresses
description: Troubleshoot network connections and whitelist addresses in tightened down networks for Visual Studio
ms.prod: devops
ms.technology: devops-security
ms.assetid: 7c8ff784-ffc2-4378-bc29-a7e5632ab776
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 02/15/2019
monikerRange: 'azure-devops'
---

# Troubleshoot network connections and whitelist addresses

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
* `https://app.vssps.visualstudio.com`

## A more general list of URLs for signing in to Azure DevOps and Azure

* `https://windows.net`
* `https://microsoftonline.com`
* `https://visualstudio.com`
* `https://microsoft.com`
* `https://live.com`
* `https://dev.azure.com`
* `https://management.core.windows.net`
* `https://app.vssps.visualstudio.com`
* `https://vstsagentpackage.azureedge.net`
* `https://cdn.vsassets.io` -- hosts our CDN content
* `https://gallerycdn.vsassets.io` -- hosts Azure DevOps extensions
* `https://static2.sharepointonline.com` -- hosts some resources that we use in "office fabric" UI kit (fonts, etc).

To ensure your organization works with any existing firewall or IP restrictions, ensure that `dev.azure.com` is open and the `13.107.6.183` and `13.107.9.183` IP addresses are allowed.

## NuGet connections

* `https://azurewebsites.net`
* `https://nuget.org`

> [!NOTE]
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you are using by opening up `%APPData%\Nuget\NuGet.Config`.
