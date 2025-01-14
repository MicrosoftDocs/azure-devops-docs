---
title: Restore NuGet packages with the NuGet CLI
description: Learn how to connect to your feed and restore NuGet packages using the NuGet CLI.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 01/14/2025
monikerRange: '<= azure-devops'
---

# Restore NuGet packages from the command line (NuGet.exe)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article guides you through setting up your project and restoring your NuGet packages using the NuGet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - The latest [NuGet version](https://www.nuget.org/downloads). |


