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

Previously, Artifact feeds combined a list of available package versions from both the feed as well as all the upstream sources.

:::image type="content" source="media/previous-upstream-behavior.png" alt-text="Previous upstream sources behavior":::

The new upstream behavior will provide another layer of security by blocking the exposure to malicious packages that may infiltrate the public feeds.

With the new behavior, when a package is published to your Azure Artifacts feed, same versions of that package will not be made available from the public registry.

Users will still be able to override the new upstream behavior and consume packages from the public registries if they chose to do so.

> [!NOTE]
> The new behavior won't affect any package versions that are already in use. Those are stored in the feed's `@local` view.