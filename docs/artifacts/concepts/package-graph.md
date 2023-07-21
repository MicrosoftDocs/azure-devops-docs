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

## How upstream sources construct the set of available packages

Because Azure Artifacts feeds can have other feeds as upstream sources, it seems possible on the surface to have a cycle of upstream sources, where feed A upstreams to feed B, which upstreams to feed C, which upstreams back to feed A. Left unchecked, such a cycle could break package requests by creating an infinite loop where a user asks A for a package, then A asks B, then B asks C, then C asks A again, etc. Upstream sources are designed to prevent this failure.

When a feed consults its upstream sources for a package, Azure Artifacts will return the packages in the view configured for that upstream source. Thus, a query to feed A does not actually result in a transitive query to feed C (A -> B -> C), because views are read-only. A has access to any packages from C that a user of B has previously saved into B, but not the full set of packages available in C.

Thus, the onus falls to B to ensure that its local packages represent a complete dependency graph, so that users who consume B's package via an upstream source from another feed are able to successfully resolve the graph and install their desired B package.

## Example: constructing the set of available packages

Assume three feeds, Fabrikam, Contoso, and AdventureWorks. In this example, we'll look at the packages available to the Fabrikam feed as we add upstream sources.

At first, Fabrikam has no upstream sources, and users connected to Fabrikam can only install versions 1.0.0 and 2.0.0 of the Widgets package. Likewise, Contoso has no upstream sources, and users connected to Contoso can only install versions 1.0.0 and 3.0.0 of the Gizmos package. Ditto for the AdventureWorks feed, where connected users can only install versions 1.0.0 and 2.0.0 of the Gadgets package or version 1.0.0 of the Things package.

:::image type="content" source="media/upstream-source-graph-1.svg" alt-text="three different feeds with no upstream sources":::

Next, consider what happens if Contoso adds AdventureWorks as an upstream source. A user connected to Contoso can install any version of Gizmos, any version of Gadgets, or any version of Things. If Gadgets@2.0.0 is installed, that package-version is saved to Contoso (with a link back to AdventureWorks).

:::image type="content" source="media/upstream-source-graph-2.svg" alt-text="Contoso adds AdventureWorks as an upstream source":::

Now, let's have the Fabrikam feed add Contoso as an upstream source. A user connected to Fabrikam can install any version of Widgets, any version of Gizmos, but **only saved** versions (2.0.0) of Gadgets.

:::image type="content" source="media/upstream-source-graph-3.svg" alt-text="Fabrikam adds Contoso as an upstream source":::

The user will not be able to install version 1.0.0 of Gadgets or any version of Things, because those package versions haven't been saved to Contoso by a Contoso user.

:::image type="content" source="media/upstream-source-graph-4.svg" alt-text="Fabrikam users unable to install Gadgets 1.0.0 and all versions of Things":::

## Related articles 

- [Key concepts](../artifacts-key-concepts.md)
- [Use the .artifactignore file](../reference/artifactignore.md)
- [componentization and composition](../collaborate-with-packages.md)
