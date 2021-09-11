---
title: Use npm scopes
description: Use npm scopes with Artifacts feed 
ms.assetid: c88868bd-8101-48f3-b76d-17c858181fda
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 06/11/2020
monikerRange: '>= tfs-2017'
---

# Use npm scopes

**Azure DevOps Services** | **TFS 2018** | **TFS 2017**

[Scopes](https://docs.npmjs.com/misc/scope) are built into npm and are a way of grouping packages together. You can publish and download both scoped and unscoped packages to/from your Artifacts feeds or npmjs.com, . 

A scope allows you to create a package with the same name as a package created by another user or Org without conflict. They allow the user to separate public and private packages by prefixing their packages with a scope `@fabrikam` and configuring the `.npmrc` file to only use an Azure Artifacts feed for that scope.
Using npm scopes is also useful with self-hosted on-premise servers that do not have internet access because setting up upstream sources in that case is not possible.

> [!NOTE]
> In order to use scopes you must be using npm version 2 or greater. Run `npm install npm@latest -g` on the command line to upgrade to the latest version.  

## Set up
Scoped packages allow you to group similar npm packages together. This provides us with several advantages including:

- We don't have to worry about name collisions.
- No need to change the npm registry in order to install or publish your packages.
- Each npm organization/user has their own scope, and only the owner or the scope members can publish packages to their scope.

To use an Azure Artifacts feed with a scope, follow the instructions below, but append your scope to both lines in the project `.npmrc` file.

[!INCLUDE [](../includes/npm/npmrc.md)]

Then, replace:  
`registry=<your feed URL>` with `@fabrikam:registry=<your feed URL>`

> [!NOTE]
> Make sure you add the scope and package names to your `package.json` file: `{ "name": "@fabrikam/package-name" }`.


## Upstream sources or scopes?

Upstream sources give you the most flexibility to use a combination of scoped and non-scoped packages in your feed, as well as scoped and non-scoped packages from public registries such as npmjs.com.

Scopes add another restriction when naming your packages: each package name must start with `@<scope>`. If you want to publish your private packages to public registries, you must do so with the scopes intact. If you remove package scopes when deploying your packages, you'll need to update all the *package.json* references accordingly. With that in mind, scopes can be a viable alternative to [upstream sources](upstream-sources.md).
