---
title: Azure Artifacts in Azure DevOps Services and Azure DevOps Server
description: Overview of Azure Artifacts for hosting and sharing NuGet packages and npm modules with Azure DevOps Services or Azure DevOps Server
ms.assetid: 7F863543-2AFF-4726-A86A-4CF81DE98DCE
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: overview
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 01/31/2018
monikerRange: '>= tfs-2017'
---

# Azure Artifacts in Azure DevOps Services and Azure DevOps Server

**Azure DevOps Services** | **Azure DevOps Server 2019** | **TFS 2018** | **TFS 2017**

Azure Artifacts is an extension to Azure DevOps Services and Azure DevOps Server. It comes pre-installed in Azure DevOps Services, Azure DevOps Server 2019, and Team Foundation Server (TFS) 2017 and 2018.

> [!NOTE]
> **Azure Artifacts** is the new home of the **Packages** page under the **Build and release** page group in the previous navigation UX of Azure DevOps Services and TFS.

## Azure Artifacts overview

Azure Artifacts introduces the concept of multiple *feeds* that you can use to organize and control access to your packages. If you're familiar with using packages from [NuGet.org](https://www.nuget.org) or [npmjs](https://www.npmjs.com), you can think of those places each as a single feed. 

A note on terminology: you might also have heard feeds called package *repositories* or package *sources*, especially if you're an npm or Maven user.

## Get started with using Azure Artifacts

Get up and running with NuGet, npm, and Maven in Azure DevOps Services and TFS in just a few minutes with the [NuGet quickstart](get-started-nuget.md), [npm quickstart](get-started-npm.md), and [Maven quickstart](get-started-maven.md).

If you haven't used packages before, see the [conceptual introduction](index.md). When you're ready to get started, [learn how to assign Azure Artifacts licenses](license-azure-artifacts.md) in your organization.

<a name="versions-compatibility"></a>

## Versions and compatibility

Some Azure Artifacts services are compatible with only specific versions of TFS. Check out the following table to see compatibility.

| Feature                        | Azure DevOps Services          | TFS                         |
|------------------------------- |---------------|-----------------------------|
| **NuGet**                      | Yes           | TFS 2017                    |
| **npm**                        | Yes           | TFS 2017 Update 1 and newer |
| **NuGet.org upstream source**  | Yes           | TFS 2018 Update 2 and newer |
| **Maven**                      | Yes           | TFS 2018                    |
| **Python**                     | Yes           | No                          |
| **Universal Packages**         | Yes           | No                          |

## Other package types

Need to host other package types (Docker, CocoaPods, and so on)? Tell us on the [Azure Artifacts UserVoice](https://visualstudio.uservoice.com/forums/330519-team-services/category/145266-package-management).
