---
title: Collaborate more and build faster with package componentization
description: Using Azure Artifacts to facilitate collaboration
ms.assetid: EA33E340-EC9A-4F75-A201-82CE9685662B
ms.technology: devops-artifacts
ms.date: 02/09/2021
ms.topic: reference
monikerRange: '>= tfs-2017'
---

# Collaborate more and build faster with package componentization

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 - TFS 2017**

Your product is successful, your organization is growing, and it's time to scale up your codebase to match this success. As you scale out past 2-3 teams working in a single codebase on a single product, you may find yourself asking questions like:
- How do my teams effectively share reusable components?
- How do I enable my feature teams to iterate rapidly without stepping on other teams' work?
- How do I give my teams autonomy to iterate at the pace that's right for them?

These questions aren't just applicable to newly growing teams. If you're an established team with a legacy codebase, you may be asking these same questions as you're being asked to deliver more value, faster than ever. Regardless of your situation, componentization can help you build a codebase that scales to the size of your team and the speed of today's development. 

In this article, we'll explore how binary composition through Azure Artifacts can help you manage and share your external dependencies, your OSS, and your isolated shared components.

## Components and composition

Componentization is the act of separating and structuring of your product into a set of *components*. Most .NET projects already have some notion of components in the form of the projects in your solution. For example, a simple website might have a front-end component, a data access component, and a model/data storage component.

## Source componentization

As your product grows, the solution and the project model can become inefficient. Changes take longer to integrate and are harder to merge, the build gets slower, and *components* start to grow from a single project to multiple projects. Generally, this is the point at which teams start breaking out these sets of related projects into separate solutions.

Once you've outgrown a single solution, how you componentize becomes an interesting question. We started with *source composition*, where each component is referenced via a project reference in Visual Studio. Source composition is possible as long as your source lives in a single composition boundary: a single solution within a single source repository.

Unfortunately, these project references start to break down when multiple solutions are involved. At this point, when solution A depends on solution B it must refer to the built binaries (i.e. DLLs) produced by solution B - this is binary composition.

Accordingly, these binaries now need to be built and made available to A before A can build successfully. There are a few ways to do that:

- You can check them into source control. Depending on your source control system, binaries can quickly balloon the size of your repo, slowing check-out times and general repo performance.
If you start to work in branches, multiple teams can end up introducing the same binary at different versions, creating nasty merge conflicts at the root of the tree.
- You can put them on a file share somewhere. File shares have a few limitations: there's no index for quick lookups, and there's no protection against overwriting a version later.

## Package componentization

Packages address many of the challenges of referencing binaries. Instead of checking them into source, you can have a solution *B* produce its binaries as NuGet packages that another solution *A* can then consume. If solution A and solution B are maintained as separate components, where simultaneous changes across A and B are rare, package composition is a great way to manage the dependency of A on B. Package composition allows B to iterate on its own cadence, while A is free to get updates from B when A's schedule permits, and it allows multiple teams to iterate and  update B without affecting A (or other solutions *C* or *D*).

Package composition isn't without its challenges though. Thus far, we've looked at a simple example. However, scaling package composition up to the size of a large codebase (something like Windows or Bing) can cause a series of challenges:

- Understanding the impact of breaking changes in a component low in the dependency graph becomes very challenging
- *Diamond dependencies* can become a significant roadblock to agility.
In a diamond dependency, components B and C both depend on a shared component A, and D depends on B and C.
A releases a new version with breaking changes. If B updates, but C does not, D cannot take B's updates without introducing a dependency conflict.
In this simple example, a conversation with C may be all that's needed to resolve the conflict.
However, in a complex graph, diamonds can quickly become unresolvable.
- If changes must be made across two components that are composed with packages, the dev inner loop is much slower. When A is updated, it must be re-built, re-packaged, and re-published. 
B must then update to the newly-published version to validate A's change. Source composition, which can build A and B simultaneously, will always provide a faster inner loop for developers.

## What should you use

In general, we've seen large teams be most successful when they use a mixture of composition strategies.
To help determine what's right for your codebase, first draw your product's dependency graph and start to group your components into sets of related components.
For example, you may have a set of components that make up your framework, including common controls, etc., and a set of components that make up your user-facing service.
Then, for each set of related components, ask these questions:
- Will my teams often make spanning check-ins across the sets I've created?
- Is a single team responsible for the entire set?
- For a single set, is there a shared release cadence?

At a high level, we've found the most success when source composition is used for related projects that are worked on by a single team (or a group of related teams) and binary composition is used for OSS, externals (components from faraway or isolated teams), and isolated shared components.

## Next steps

- [Get started with Azure Artifacts](start-using-azure-artifacts.md)
- [NuGet quickstart](get-started-nuget.md)
- [Npm quickstart](get-started-npm.md)
- [Maven quickstart](get-started-maven.md)
- [Python quickstart](quickstarts/python-packages.md)
- [Universal packages quickstart](quickstarts/universal-packages.md)
