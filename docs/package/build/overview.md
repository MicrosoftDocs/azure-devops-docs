---
title: Integrate packages into builds
description: Use continuous integration to restore and publish packages to Package Management in Visual Studio Team Services and Team Foundation Server
ms.assetid: EA0CBF42-3EBB-42F9-A210-0020DE13A92E
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 08/10/2016
---

# Integrate packages into builds with Team Services

**Team Services | TFS 2017**

Package Management can integrate with most build systems using REST APIs and package clients (e.g. NuGet.exe) to enable continuous integration and delivery. We have specific guidance for these build systems:

* [Team Build](team-build.md)
* [Jenkins](jenkins.md)

To integrate with other build systems, use the [packaging REST APIs](../../../integrate/api/packaging/overview.md).

For details on build tasks related to Package Management, see the following:
* [NuGet Installer](../../build/steps/package/nuget-installer.md)
* [NuGet Packager](../../build/steps/package/nuget-packager.md)
* [NuGet Publisher](../../build/steps/package/nuget-publisher.md)

