---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 02/04/2021
ms.topic: include
---

### .NET Core 3.0 to be removed from Linux and macOS hosted agents

On March 1, .NET Core 3.0 will be removed from hosted macOS 10.15, Ubuntu 16.04, and Ubuntu 18.04 images. We typically remove tools [six months after they reached end-of-life](https://github.com/actions/virtual-environments#software-guidelines). .NET Core 3.0 sunset on [March 3, 2020](https://devblogs.microsoft.com/dotnet/net-core-3-0-end-of-life/). Windows hosted machines don't have this version of .NET Core.

Upgrade your builds to use a supported version of .NET Core. You can also use the [Use .NET Core](/azure/devops/pipelines/tasks/tool/dotnet-core-tool-installer?view=azure-devops&preserve-view=true) task to install a supported version.