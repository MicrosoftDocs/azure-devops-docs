---
title: Use npm scopes
description: How to use npm scopes with Azure Artifacts 
ms.assetid: c88868bd-8101-48f3-b76d-17c858181fda
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 11/02/2021
monikerRange: '>= tfs-2017'
---

# Use npm scopes

[!INCLUDE [version-gt-eq-2017](../../includes/version-gt-eq-2017.md)]

Npm scopes are a way of grouping related packages together. A scope allows you to create a package with the same name as a package created by another user or Org without conflict. They allow the user to separate public and private packages by prefixing their packages with a scope `@SCOPE_NAME` and configuring the `.npmrc` file to only use an Azure Artifacts feed for that scope.
With Azure Artifacts, you can publish and download both scoped and non-scoped packages to/from your Artifacts feeds or public registries. Using npm scopes is also useful with self-hosted on-premise servers that do not have internet access because setting up upstream sources in that case is not possible. Using scopes:

- We don't have to worry about name collisions.
- No need to change the npm registry in order to install or publish our packages.
- Each npm organization/user has their own scope, and only the owner or the scope members can publish packages to their scope.

> [!NOTE]
> You need npm version 2 or greater to use npm scopes. Run `npm install npm@latest -g` to upgrade to the latest version.  

## Project setup

To use an Azure Artifacts feed with a specific scope, we will need to set up our .npmrc file and then set up credentials to authenticate with our feed.

[!INCLUDE [](../includes/npm/npmrc.md)]

In your .npmrc file, replace `registry=<YOUR_SOURCE_URL>` with `@SCOPE_NAME:registry=<YOUR_SOURCE_URL>`.

> [!NOTE]
> Make sure you add the scope and package names to your `package.json` file: `{ "name": "@SCOPE_NAME/PACKAGE_NAME" }`.


## Upstream sources or scopes?

Upstream sources give you the most flexibility to use a combination of scoped and non-scoped packages in your feed, as well as scoped and non-scoped packages from public registries such as npmjs.com.

Scopes add another restriction when naming your packages: each package name must start with `@<scope>`. If you want to publish your private packages to public registries, you must do so with the scopes intact. If you remove package scopes when deploying your packages, you'll need to update all the references in your *package.json*. With that in mind, scopes can be a viable alternative to [upstream sources](upstream-sources.md).

## Related articles

- [Use npm audit](./npm-audit.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./upstream-sources.md)
