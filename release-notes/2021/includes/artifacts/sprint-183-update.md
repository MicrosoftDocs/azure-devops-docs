---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 03/03/2021
ms.topic: include
---

### Changes to Azure Artifacts upstream behavior

Previously, Azure Artifacts feeds presented package versions from all of its upstream sources. This upstream includes package versions originally pushed to an Azure Artifacts feed (internally sourced) and package versions from common public repositories like npmjs.com, NuGet.org, Maven Central, and PyPI (externally sourced).

This sprint introduces a new behavior that provides additional security for your private feeds by limiting access to externally sourced packages when internally sources packages are already present. This feature offers a new security layer, which prevents malicious packages from a public registry being inadvertently consumed. These changes will not affect any package versions that are already in use or cached in your feed. 

To learn more about common package scenarios where you need to allow externally sourced package versions along with a few other scenarios where no blockage to the public packages is needed and how to configure the upstream behavior, see documentation [Configure upstream behavior - Azure Artifacts | Microsoft Docs](/azure/devops/artifacts/concepts/upstream-behavior?preserve-view=true&tabs=nuget&view=azure-devops)