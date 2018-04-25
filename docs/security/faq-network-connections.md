---
title: Troubleshoot network connections and whitelist addresses
description: Troubleshoot network connections and whitelist addresses in tightened down networks for Visual Studio
ms.prod: devops
ms.technology: devops-security
ms.assetid: 7c8ff784-ffc2-4378-bc29-a7e5632ab776
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 12/02/2017
monikerRange: 'vsts'
---
# Troubleshoot network connections and whitelist addresses

**VSTS**

If you are having network connection issues to VSTS, using NuGet, or connecting from Visual Studio 2015 and 
later versions, it may be because your security appliances are blocking connections now that Visual Studio uses TLS 1.2.

To fix this issue, update the security appliances in order to support TLS 1.2 for the following connections:

List of URLs for sign-in and licensing connections:
* `https://management.core.windows.net`
* `https://login.microsoftonline.com`
* `https://login.live.com`
* `https://go.microsoft.com`
* `https://graph.windows.net`
* `https://app.vsspsext.visualstudio.com`

A more general list of URLs for signing in to VSTS and Azure:
* *.windows.net
* *.microsoftonline.com
* *.visualstudio.com
* *.microsoft.com
* *.live.com
* cdn.vsassets.io -- hosts our CDN content
* *.gallerycdn.vsassets.io -- hosts VSTS extensions
* static2.sharepointonline.com -- hosts some resources that we use in "office fabric" UI kit (fonts, etc). 


NuGet connections:
* *.azurewebsites.net
* *.nuget.org

> [!NOTE]   
> Privately owned NuGet server URLs may not be included in the list above. You can check the NuGet servers you are using by opening up `%APPData%\Nuget\NuGet.Config`.
