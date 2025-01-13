---
title: Restore NuGet packages with dotnet CLI
description: How to connect to a feed and use the dotnet CLI to restore NuGet packages.
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 01/13/2025
monikerRange: '>= azure-devops-2020'
---

# Restore NuGet packages from the command line (dotnet)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This guide walks you through configuring your project and restore your NuGet packages using the dotnet command-line interface.

## Prerequisites

| **Product**        | **Requirements**                                                                                                                                                                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - [An Azure Artifacts feed](../get-started-nuget.md#create-feed).<br> - Download and install the [Azure Artifacts Credential Provider](https://github.com/microsoft/artifacts-credprovider).<br> - Download and install [.NET Core SDK (2.1.400+)](https://dotnet.microsoft.com/en-us/download). |

