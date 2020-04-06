---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

On Linux and Windows agents, jobs may be run [on the host](../phases.md) or [in a container](../container-phases.md).
(On macOS and Red Hat Enterprise Linux 6, container jobs are not available.)
Containers provide isolation from the host and allow you to pin specific versions of tools and dependencies.
Host jobs require less initial setup and infrastructure to maintain.
