---
title: Other security considerations
description: Additional tips for securing your pipelines.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 95fe319a-60bd-4b1b-9111-5fd8852f7839
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 1/31/2020
monikerRange: '> azure-devops-2019'
---

# Other security considerations

There are a handful of other things you should consider when securing pipelines.

## Recommendations depend on each other

The topics in this section have complex interdependencies.
Your precise security posture will depend heavily on which recommendations you choose to implement.
That in turn depends on the particular concerns of your DevOps team, your security team, and the policies & practices of your organization.
You may choose to tighten up security in a critical area, and accept a different trade-off in favor of convenience for another area.

## Relying on PATH

Relying on the agent's `PATH` setting is dangerous.
It may not point where you think it does, since a previous script or tool could have altered it.
For security-critical scripts and binaries, always use a fully qualified path to the program.
