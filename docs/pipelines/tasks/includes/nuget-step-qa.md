---
ms.topic: include
ms.date: 09/10/2019
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: devops-cicd-tasks
---

### Why should I check in a NuGet.Config?

Checking a NuGet.Config into source control ensures that a key piece of information needed to build your project, the location of its packages, is available to every developer that checks out your code.

However, for situations where a team of developers works on a large range of projects, it's also possible to add an Azure Artifacts feed to the global NuGet.Config on each developer's machine. In these situations, using the "Feeds I select here" option in the NuGet task replicates this configuration.

### Where can I learn about Azure Artifacts?

[Azure Artifacts Documentation](../../../artifacts/index.yml)

### Where can I learn more about NuGet?

[NuGet Docs](https://docs.nuget.org/) Overview

[NuGet Create](https://docs.nuget.org/create) Packaging and publishing

[NuGet Consume](https://docs.nuget.org/consume) Setting up a solution to get dependencies

