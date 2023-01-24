---
title: Agent software version 3
description: Learn how to run pipelines using the version 3 agent sofware.
monikerRange: '= azure-devops'
ms.topic: conceptual
ms.date: 01/24/2023
---

# Agent software version 3 preview

The pipelines team is upgrading the agent software from version 2.x (using .NET Core 3.1) to version 3.x (using .NET 6). The new agent version supports new Apple silicon hardware as well as newer operating systems like Ubuntu 22.04, or Windows on ARM64.

If you are running your self-hosted agents on newer operating systems that are [supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md), upgrading to the version 3 agent is seamless.

If you are running your self-hosted agents on an operating system supported by the current version 2 agent software built using [.NET Core 3.1](https://github.com/dotnet/core/blob/main/release-notes/3.1/3.1-supported-os.md) that is not supported by .NET 6, you must update your machines to use a newer supported operating system [supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md).

The following list of operating systems are not supported by .NET 6 and cannot be used to run the new .NET 6 based version 3 agent. This list is only a partial list of operating systems that are unsupported by .NET 6, but covers common cases.

| System/Distribution | Version not supported by .NET 6 |
|---------------------|---------------------------------|
| CentOS | < 7 |
| Debian | <= 4.9 |
| Fedora | <= 32 |
| RedHat EL | <= 6 |
| Ubuntu | <= 19 |
| MacOS | < 10.15 |


## Install agent version 3.x preview

The version 3.x agent software is currently in the preview phase. You can install this software on [.NET 6 supported operating systems](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md). [Please let us know your feedback](https://github.com/microsoft/azure-pipelines-agent/issues).

A preview of the new version 3.x agent software is available from the [Azure Pipelines releases page on GitHub](https://github.com/microsoft/azure-pipelines-agent/releases), in the pre-release section.

To use the new version 3 agent, [create a new agent pool](pools-queues.md), install the latest .NET 6 agent from the pre-releases section of the [Azure Pipelines releases page on GitHub](https://github.com/microsoft/azure-pipelines-agent/releases) onto your agent machine, and register it with the new pool.

## Timeline for agent version 3 deployment

For more information about the deployment schedule and FAQs about the new 3.x agent, see [Upgrade of .NET agent for Azure Pipelines](https://devblogs.microsoft.com/devops/upgrade-of-net-agent-for-azure-pipelines/).
