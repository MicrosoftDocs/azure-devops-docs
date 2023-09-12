---
title: Use npm scopes
description: How to use npm scopes in Azure Artifacts 
ms.assetid: c88868bd-8101-48f3-b76d-17c858181fda
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 09/11/2023
monikerRange: '<= azure-devops'
---

# Use Npm scopes in Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Npm scopes serve as a means to categorize related packages into groups. These scopes enable you to create packages with identical names to those created by different users without encountering conflicts. By using scopes, you have the ability to segregate public and private packages by adding the scope prefix *@scopeName* and configuring the .npmrc file to exclusively use a feed with that particular scope.

Azure Artifacts provides the capability to publish and download both scoped and non-scoped packages from feeds or public registries. Npm scopes are particularly valuable when working with self-hosted on-premise servers lacking internet access, as configuring upstream sources in such scenarios is not feasible. In summary, when using scopes:

- We don't have to worry about name collisions.
- No need to change the npm registry in order to install or publish our packages.
- Each npm organization/user has their own scope, and only the owner or the scope members can publish packages to their scope.

## Project setup

[!INCLUDE [](../includes/npm/npmrc.md)]

## Scope setup

In your .npmrc file, replace `registry=<YOUR_SOURCE_URL>` with `@ScopeName:registry=<YOUR_SOURCE_URL>`. 

Make sure to include both the scope and package names in your package.json file as follows:  `{ "name": "@ScopeName/PackageName" }`. See the examples below:

- **Organization-scoped feed**:

```.npmrc file
@ScopeName:registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/_packaging/<FEED_NAME>/npm/registry/
    
always-auth=true
```

```package.json
{
"name": "@ScopeName/PackageName" 
}
```

- **Project-scoped feed**:

```.npmrc file
@ScopeName:registry=https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/npm/registry/
    
always-auth=true
```

```package.json
{
"name": "@ScopeName/PackageName" 
}
```

- **Example**:


```.npmrc file
@local:registry=https://pkgs.dev.azure.com/FabrikamOrg/NpmDemo/_packaging/FabrikamFeed/npm/registry/
    
always-auth=true
```

```package.json
{
  "name": "@demo/js-e2e-express-server",
  "version": "2.0.0",
  "description": "JavaScript server written with Express.js",
  "main": "index.js",
  "directories": {
    "doc": "docs",
    "test": "test"
  }
```

## Publish scoped packages

Open a command prompt window, navigate to your project directory, and run the following command to publish your scoped package. In our example, our package is listed under the @local view.

```Command
npm publish
```

:::image type="content" source="../media/publish-scoped-packages.png" alt-text="A screenshot showing a scoped package in an Azure Artifacts feed.":::

## Upstream sources vs scopes

Upstream sources give you the most flexibility to use a combination of scoped and non-scoped packages in your feed, as well as both scoped and non-scoped packages from public registries like npmjs.com.

Scopes, however, impose a naming restriction on your packages: each package name must start with `@<scope>`. If you want to publish your private packages to public registries, you must do so with the scopes intact. If you remove package scopes when deploying your packages, you'll need to update all the references in your *package.json* file. With that in mind, scopes can serve as a viable alternative to [upstream sources](../concepts/upstream-sources.md).

## Related articles

- [Use npm audit](./npm-audit.md)
- [Publish npm packages (YAML/Classic)](../../pipelines/artifacts/npm.md)
- [Use packages from npmjs.com](./upstream-sources.md)
