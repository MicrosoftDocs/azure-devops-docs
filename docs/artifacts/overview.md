---
title: Azure Artifacts in Azure DevOps Services and Azure DevOps Server
description: Overview of Azure Artifacts for hosting and sharing NuGet packages and npm modules with Azure DevOps Services or Azure DevOps Server
ms.assetid: 7F863543-2AFF-4726-A86A-4CF81DE98DCE
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: overview
ms.manager: mijacobs
ms.author: phwilson
author: chasewilson
ms.date: 01/31/2018
monikerRange: '>= tfs-2017'
---

# What is Azure Artifacts? 

[!INCLUDE [temp](../_shared/version-tfs-2017-through-vsts.md)]  

With Azure Artifacts you can create and share Maven, npm, and NuGet package feeds from public and private sources with teams of any size. You can 
add fully integrated package management to your continuous integration/continuous delivery (CI/CD) pipelines with a single click.  

Azure Artifacts is an extension to Azure DevOps Services and Azure DevOps Server. It comes pre-installed in Azure DevOps Services, Azure DevOps Server 2019, and Team Foundation Server (TFS) 2017 and 2018.

> [!NOTE]
> **Azure Artifacts** is the new home of the **Packages** page under the **Build and release** page group in the previous navigation UX of Azure DevOps Services and TFS.

## Azure Artifacts overview

Azure Artifacts introduces the concept of multiple *feeds* that you can use to organize and control access to your packages. If you're familiar with using packages from [NuGet.org](https://www.nuget.org) or [npmjs](https://www.npmjs.com), you can think of those places each as a single feed. 

A note on terminology: you might also have heard feeds called package *repositories* or package *sources*, especially if you're an npm or Maven user.

## Get started with using Azure Artifacts

Get up and running with NuGet, npm, and Maven in Azure DevOps Services and TFS in just a few minutes with the [NuGet quickstart](get-started-nuget.md), [npm quickstart](get-started-npm.md), and [Maven quickstart](get-started-maven.md).

If you haven't used packages before, see the [conceptual introduction](artifacts-key-concepts.md). When you're ready to get started, [learn how to assign Azure Artifacts licenses](start-using-azure-artifacts.md) in your organization.

You can control the amount of packages you retain using Retention Policies in your feed settings. For more information see [automatically deleting old packages](./how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies)

<a name="versions-compatibility"></a>

## Versions and compatibility

Some Azure Artifacts services are compatible with only specific versions of TFS. Check out the following table to see compatibility.

| Feature                           | Azure DevOps Services  | TFS                                        |
|-----------------------------------|------------------------|--------------------------------------------|
| **NuGet**                         | Yes                    | TFS 2017 and newer                         |
| **npm**                           | Yes                    | TFS 2017 Update 1 and newer                |
| **NuGet.org upstream source**     | Yes                    | TFS 2018 Update 2 and newer                |
| **Maven**                         | Yes                    | TFS 2018 and newer                         |
| **Maven Central upstream source** | Yes                    | Azure DevOps Server 2019 Update 1 and newer|
| **Python**                        | Yes                    | Azure DevOps Server 2019 Update 1 and newer|
| **Universal Packages**            | Yes                    | No                                         |

## Other package types

Need to host other package types (Docker, CocoaPods, and so on)? Use the **Suggest a feature** link in [Visual Studio Developer Community](https://developercommunity.visualstudio.com/spaces/8/index.html).
