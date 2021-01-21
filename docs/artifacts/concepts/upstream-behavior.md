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

## Scenarios

Below are few common scenarios where the upstream behavior will be triggered to block external packages as well as cases where no blockage to the public packages is needed.

### Public versions will be blocked

- **Internal package version made public**: In this scenario, a team has a private package that was made public. The upstream behavior in this case will be triggered to block any new public versions (untrusted packages). 

    :::image type="content" source="media\internal-package-made-public.png" alt-text="Internal package version made public":::

- **Both private and public packages**: In this scenario, if a team already has both private and public packages, enabling the upstream behavior will result in blocking any new package versions from the public registry.

    :::image type="content" source="media\both-private-and-public.png" alt-text="both private and public packages":::
