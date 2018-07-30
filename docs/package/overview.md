---
title: Package Management in VSTS and TFS
description: Overview of package management for hosting and sharing NuGet packages and npm modules with VSTS or Team Foundation Server
ms.assetid: 7F863543-2AFF-4726-A86A-4CF81DE98DCE
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: overview
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 01/31/2018
monikerRange: '>= tfs-2017'
---

# Package Management in VSTS and TFS

**VSTS** | **TFS 2018** | **TFS 2017**

> [!NOTE]
> Package Management is an **[extension](http://go.microsoft.com/fwlink/?LinkId=723595)** that hosts NuGet, npm, and Maven packages alongside all your other VSTS assets: source code, builds, releases, etc.
> The extension must be installed from the Marketplace to create or consume packages.

## Package Management Overview

Package Management introduces the concept of multiple *feeds* that can be used to organize and control access to your packages. If you're familiar with using packages from [NuGet.org](https://www.nuget.org) or [npmjs](https://www.npmjs.com), you can think of those places each as a single feed. 

A note on terminology: you may also have heard feeds called package *repositories* or package *sources*, especially if you're an npm or Maven user.

## Get started using Package Management

Get up and running with NuGet, npm, and Maven in VSTS and TFS in just a few minutes with the [NuGet quick start](get-started-nuget.md), [npm quick start](get-started-npm.md), and [Maven quick start](get-started-maven.md).

If you haven't used packages before, see the [conceptual introduction](index.md). When you're ready to get started, [install and license Package Management](install.md).

<a name="versions-compatibility"></a>

## Versions and compatibility

Some package management services are only compatible with specific versions of TFS. Check out the table below to see compatibility.

| Feature                        | VSTS          | TFS                         |
|------------------------------- |---------------|-----------------------------|
| **NuGet**                      | Yes           | TFS 2017                    |
| **npm**                        | Yes           | TFS 2017 Update 1 and newer |
| **NuGet.org upstream source**  | Yes           | TFS 2018 Update 2 and newer |
| **Maven**                      | Yes           | TFS 2018                    |

## Other package types

Need to host other package types (Docker, CocoaPods, etc.)? Tell us on the [Package Management UserVoice](https://visualstudio.uservoice.com/forums/330519-team-services/category/145266-package-management).
