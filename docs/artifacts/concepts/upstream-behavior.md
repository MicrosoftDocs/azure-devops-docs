---
title: Upstream behavior
description: Allow or block the consumption of specific package versions from public registries.
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 01/19/2021
ms.author: rabououn
author: ramiMSFT
monikerRange: '>= tfs-2017'
---

# Upstream behavior

Upstream sources allow developers to use a single feed to publish and consume packages to/from Artifact feeds as well as public registries(e.g. NuGet.org, npmjs.com etc.). To set up upstream sources for your feed, check the box to **include packages from common public sources**. This will allow your feed to use packages from the common public registries.

Azure Artifacts is introducing a new upstream behavior that will dictate which packages will be made available from the public registries.  