---
title: Use npm scopes
description: How to use npm scopes in Azure Artifacts 
ms.assetid: c88868bd-8101-48f3-b76d-17c858181fda
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 06/08/2022
monikerRange: '<= azure-devops'
---

# Npm scopes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Npm scopes are a way of grouping related packages together. A scope allows you to create a package with the same name as other packages created by different users without conflicts. Using scopes, you can separate public and private packages by adding the scope prefix *@SCOPE_NAME* and configuring the *.npmrc* file to only use a feed for that scope.
With Azure Artifacts, you can publish and download both scoped and non-scoped packages to/from feeds or public registries. Using npm scopes is also useful with self-hosted on-premise servers that do not have internet access because setting up upstream sources in that case is not possible. Using scopes:

- We don't have to worry about name collisions.
- No need to change the npm registry in order to install or publish our packages.
- Each npm organization/user has their own scope, and only the owner or the scope members can publish packages to their scope.

## Project setup

[!INCLUDE [](../includes/npm/npmrc.md)]

In your .npmrc file, replace `registry=<YOUR_SOURCE_URL>` with `@SCOPE_NAME:registry=<YOUR_SOURCE_URL>`. Make sure you add the scope and package names to your *package.json* file: `{ "name": "@SCOPE_NAME/PACKAGE_NAME" }`.

```npmrc
@[SCOPE_NAME]:registry=https://pkgs.dev.azure.com/[ORGANIZATION_NAME]/_packaging/[FEED_NAME]/npm/registry/
    
always-auth=true
```

```package.json
{
"name": "[@SCOPE_NAME]/[PACKAGE_NAME]" 
}
```
## Upstream sources vs scopes

Upstream sources give you the most flexibility to use a combination of scoped and non-scoped packages in your feed, as well as scoped and non-scoped packages from public registries such as npmjs.com.

Scopes add another restriction when naming your packages: each package name must start with `@<scope>`. If you want to publish your private packages to public registries, you must do so with the scopes intact. If you remove package scopes when deploying your packages, you'll need to update all the references in your *package.json*. With that in mind, scopes can be a viable alternative to [upstream sources](../concepts/upstream-sources.md).

## Related articles

- [Use npm audit](./npm-audit.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./upstream-sources.md)
