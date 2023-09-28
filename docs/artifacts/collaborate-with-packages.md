---
title: Source and package composition
description: Use Azure Artifacts to facilitate collaboration
ms.assetid: EA33E340-EC9A-4F75-A201-82CE9685662B
ms.service: azure-devops-artifacts
ms.date: 05/25/2023
ms.topic: reference
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Accelerate collaboration and Agile development with componentization

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Your product is successful, your organization is growing, and it's time to scale up your codebase to match this success. As you scale out past 2-3 teams working in a single codebase on a single product, you may find yourself asking questions like:

- How can my teams efficiently share reusable components?

- How do I enable my feature teams to iterate rapidly without stepping on other teams' work?

- How do I give my teams autonomy to iterate at the pace that's right for them?

Teams at any stage can benefit from considering these questions. If you're an established team with a legacy codebase, you may be asking these same questions as you're being asked to deliver more value, faster than ever. Regardless of your situation, componentization can help you build a codebase that scales to the size of your team and the speed of today's development.

In this article, we explore how binary composition through Azure Artifacts can help you manage and share your external dependencies, your open-source software, and your isolated shared components.

## Components and composition

Componentization is the process of dividing and organizing your product into distinct components. Most .NET projects already have some notion of components in the form of the projects within the solution. For instance, a basic website may consist of a front-end component, a data access component, and a model/data storage component.

## Source composition

As your product grows, the solution and the project model can become inefficient. Changes take longer to integrate and are harder to merge, the build gets slower, and components start to grow from a single project to multiple projects. Generally, this is the point at which teams start breaking out these sets of related projects into separate solutions.

Once you've outgrown a single solution, how you componentize becomes an interesting question. We started with **source composition**, where each component is referenced via a project reference in Visual Studio. Source composition is possible as long as your source lives in a single composition boundary: a single solution within a single source repository.

Unfortunately, these project references start to break down when multiple solutions are involved. At this point, when solution A depends on solution B it must refer to the built binaries (such as DLLs) produced by solution B - this is **binary composition**.

Accordingly, these binaries now need to be built and made available to solution A before it can build successfully. There are a few ways to do that:

- You can check them into source control. Depending on your source control system, binaries can quickly balloon the size of your repo, slowing check-out times and general repo performance. If you start to work in branches, multiple teams can end up introducing the same binary at different versions, leading to challenging merge conflicts.

- Alternatively, you can host them on a file share, although this approach comes with certain limitations. File shares lack an index for quick lookups, and they don't provide protection against overwriting a version in the future.

## Package composition

Packages address many of the challenges of referencing binaries. Instead of checking them into source, you can have a solution B produce its binaries as NuGet packages that another solution A can then consume. If solution A and solution B are maintained as separate components, where simultaneous changes across A and B are rare, package composition is a great way to manage the dependency of A on B. Package composition allows B to iterate on its own cadence, while A is free to get updates from B when A's schedule permits, and it allows multiple teams to iterate and update solution B without affecting solution A (or other solutions C or D).

However, package composition does come with its own set of challenges. So far, we have examined a straightforward example. Scaling package composition up to the size of a large codebase (something like Windows or Bing) can cause a series of challenges:

- Understanding the impact of breaking changes in a component low in the dependency graph becomes very challenging.

- [Diamond dependencies](/dotnet/standard/library-guidance/dependencies#diamond-dependencies) can become a significant roadblock to agility. In a diamond dependency, components B and C both depend on a shared component A, while component D depends on both B and C. When component A introduces a new version with breaking changes, if B updates to the new version but C does not, D cannot take B's updates without introducing a dependency conflict. In this simple example, a conversation with C may be all that's needed to resolve the conflict. However, in a complex graph, diamonds can quickly become unresolvable.

- When modifications need to be applied to two components that are composed using packages, the developer's iteration cycle becomes considerably slower. If Component A is updated, it necessitates rebuilding, repackaging, and republishing it. Subsequently, component B must update to the recently published version to validate the change made in component A. Employing source composition, which allows for simultaneous building of Component A and B, will consistently deliver a quicker iteration cycle for developers.

## What should you use

In general, we've seen large teams be most successful when they use a mixture of composition strategies. To help determine what's right for your codebase, begin by mapping out the dependency graph of your product, and start to group your components into sets of related components.

For instance you might have a collection of components constituting your framework, and another set of component forming your user-facing service.
Then, for each group of related components, ask these questions:

- Can I anticipate frequent check-ins across the sets I've established for my teams?

- Is a single team responsible for the entire set?

- For a single set, is there a shared release cadence?

In our experience, we have found that using  **source composition** is most effective for related projects handled by a single team or a group of related teams. Conversely, **binary composition** proves advantageous for open-source software, external dependencies (components from distant or isolated teams), and independent shared components.

## Related articles

- [Azure Artifacts: best practices](./concepts/best-practices.md)
- [Artifacts storage consumption](artifact-storage.md)
- [Manage permissions](./feeds/feed-permissions.md)