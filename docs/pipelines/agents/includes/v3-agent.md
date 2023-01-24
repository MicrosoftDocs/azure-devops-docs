---
ms.topic: include
ms.date: 12/19/2022
---

## Agent v3 built using .NET 6.0

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

A preview of the new version 3 agent software is available from the [Azure Pipelines releases page on GitHub](https://github.com/microsoft/azure-pipelines-agent/releases), in the pre-release section.

The pipelines team is upgrading the agent software from .NET Core 3.1 to .NET 6 to support new Apple silicon hardware as well as newer operating systems like Ubuntu 22.04, or Windows on ARM64.

If you are running your self-hosted agents on newer operating systems that are [supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md), upgrading to the version 3 agent will be seamless. If you are running an operating system supported by the version 2 agent software built using [.NET Core 3.1](https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md) that is not