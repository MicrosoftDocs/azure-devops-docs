---
title: Best practices for using packages in Azure DevOps Services and TFS
description: Learn best practices for producing and consuming feeds and packages in Visual Studio Team Services and Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: conceptual
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 05/18/2018
monikerRange: '>= tfs-2017'
---

# Best practices for using Azure Artifacts 

This article contains some general guidance and best practices when it comes to producing and consuming packages in Azure DevOps Services or Team Foundation Server (TFS).

## Creating packages as part of a build

### Each repository should only reference one feed

A feed is a container for packages. You can have multiple feeds for different projects but a particular project should only reference one feed. If you want to use packages from multiple feeds, use [upstream sources](upstream-sources.md) to bring packages from multiple feeds together into a single feed.

### On package creation, automatically publish packages back to the feed.

This will populate the `@local` view of your feed. For more information on views, check out the [views concept page](views.md).

### Enable retention policies to automatically cleanup old package versions

Deleting old package versions improves client performance and releases storage space. You can choose how many versions of a package to retain when setting up your [retention policy](../how-to/delete-and-recover-packages.md#automatically-delete-old-package-versions-with-retention-policies).

### Promote your package to the correct view

When a package is ready for early adopters, select that package and its dependency graph and promote it to the `@prerelease` view.

When the package is deemed of sufficient quality to be released, promote that package and its dependency graph into the `@release` view.

Promoting package versions to a view ensures they won't be deleted by retention policies. For more information on views, check out the [views concept page](views.md).

### If external teams are consuming your package, ensure that your `@release` view and `@prerelease` view are visible across the organization and/or organization

If these views aren't visible, teams won't have access to your packages.

## Consuming packages from public and internal sources as part of a build

### Each repository should have a unique feed

A feed is a container for packages, the only package source should be that single unique feed for each repository.

### Configure upstream sources for public and internal sources

Add any public sources as a public upstream.

Add any internal sources as an Azure DevOps Services upstream.

Find out more information about [upstream sources](upstream-sources.md) and [how to configure upstream sources](../how-to/set-up-upstream-sources.md).

### Sources not in your organization should be added using the feed locator

The feed locator uses the following syntax:

`vsts-feeds://<organization>/<feed>@<view>`

### Ensure that the order of the sources matches your desired package resolution order

The feed will check each upstream in order, returning the package from the first source that can provide it.

### To avoid confusion, we recommend placing any public upstreams FIRST in your resolution order

This prevents other sources from overriding well-known packages with altered or incompatible versions.