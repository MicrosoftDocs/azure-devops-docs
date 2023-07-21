---
title: Construct a complete package graph
description: Package graphs in Azure Artifacts
ms.assetid: 3f273ac7-3c2e-47d0-b333-3ca44c19bbf4
ms.service: azure-devops-artifacts
ms.topic: quickstart
ms.reviewer: amullans
monikerRange: '<= azure-devops'
ms.date: 07/21/2023
---

# Package graphs in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When releasing a package, it is crucial to ensure that all dependencies of that package are available in your feed by consuming them from an upstream source. Once you consume a package from an upstream source, a copy of it is saved to your feed. This ensures that even if the upstream source becomes inaccessible, your copy will continue to be available to both you and your feed consumers.

## How upstreams construct the set of available packages

As Azure Artifacts feeds can have other feeds as upstreams, there is a potential for creating cycles of upstream sources, where feed A upstreams to feed B, which upstreams to feed C, and eventually, feed C upstreams back to feed A. Such a cycle, if not managed properly, could lead to issues with package requests, creating an infinite loop where a user requests a package from feed A, then A requests from B, then B requests from C, and finally, C requests back to A, forming a loop.

Upstream sources are designed to handle this and prevent such situations. When a feed looks up a package from its upstream sources, it will receive the packages in the view configured for that upstream source. This means that querying feed A does not trigger a transitive query to feed C (A -> B -> C) because views are read-only. Consequently, feed A will have access to any packages from C that have been previously saved into B by a user, but not the full set of packages available in C.

This places the responsibility on feed B to ensure that its local packages represent a complete dependency graph. By doing so, users who consume B's package via an upstream source from another feed can successfully resolve the graph and install their desired B package without encountering issues.

## Example: construct the set of available packages

Let's consider three feeds: Fabrikam, Contoso, and AdventureWorks. In this illustration, we will examine the available packages to the Fabrikam feed as we introduce upstream sources.

Initially, Fabrikam has no upstream sources, allowing users connected to Fabrikam to only install versions 1.0.0 and 2.0.0 of the Widgets package. Similarly, Contoso has no upstream sources, restricting users connected to Contoso to only install versions 1.0.0 and 3.0.0 of the Gizmos package. The same applies to the AdventureWorks feed, where connected users can only install versions 1.0.0 and 2.0.0 of the Gadgets package or version 1.0.0 of the Things package.

:::image type="content" source="media/upstream-source-graph-1.svg" alt-text="An illustration showing three different feeds with no upstream sources.":::

Now, let's explore the scenario where Contoso adds AdventureWorks as an upstream source. When a user is connected to Contoso, they gain access to a broader range of packages. They can install any version of Gizmos, Gadgets, or Things. For example, if the user installs Gadgets@2.0.0, this specific package-version will be saved to Contoso with a link back to AdventureWorks.

:::image type="content" source="media/upstream-source-graph-2.svg" alt-text="An illustration of Contoso adding AdventureWorks as an upstream source.":::

Now, let's consider a situation where the Fabrikam feed adds Contoso as an upstream source. A user connected to Fabrikam can install any version of Widgets, any version of Gizmos, but **ONLY SAVED** versions of Gadgets (2.0.0).

:::image type="content" source="media/upstream-source-graph-3.svg" alt-text="An illustration of Fabrikam adding Contoso as an upstream source.":::

The user will not be able to install version 1.0.0 of Gadgets or any version of Things, because those package versions haven't been saved to Contoso by a Contoso user.

:::image type="content" source="media/upstream-source-graph-4.svg" alt-text="An illustration of packages available to Fabrikam users.":::

## Related articles 

- [Upstream sources](upstream-sources.md)

- [Manage permissions](../feeds/feed-permissions.md)

- [Manage dependencies with upstream sources](../tutorials/protect-oss-packages-with-upstream-sources.md)
