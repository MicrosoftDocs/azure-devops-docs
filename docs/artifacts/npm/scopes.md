---
title: Use npm scopes
description: Learn how to use npm scopes to manage scoped packages in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.date: 06/22/2026
monikerRange: "<=azure-devops"
---

# Use npm scopes to manage packages in Azure Artifact

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

npm scopes help categorize related packages into groups. They let you create packages with the same names as packages created by other users without conflicts. By using scopes, you can separate public and private packages by adding the scope prefix *@scopeName* and configuring the `.npmrc` file to use a feed with that scope.

Azure Artifacts supports publishing and downloading both scoped and unscoped packages from feeds or public registries. npm scopes are especially useful when you're working with self-hosted on-premises servers that don't have internet access, because configuring upstream sources in those scenarios isn't feasible. In summary, when you use scopes:

- You don't have to worry about name collisions.
- You don't need to change the npm registry to install or publish packages.
- Each npm organization or user has its own scope, and only the owner or scope members can publish packages to that scope.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br>- An Azure Artifacts [feed](../get-started-npm.md#create-a-feed). <br>- Download and install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). |

## Connect to your feed

Before you configure npm scopes, connect your project to your Azure Artifacts feed. Make sure that you complete the prerequisites and create a feed, and then follow these steps.

Azure Artifacts recommends using two separate *.npmrc* files. Keep one file in your user directory to store your credentials, and keep the second file in the same directory as your *package.json* file to store your feed-specific configuration.

::: moniker range="azure-devops"

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Artifacts**, and then select your feed from the dropdown menu.

1. Select **Connect to feed**, and then select **npm** from the left navigation pane.

1. If this is your first time using Azure Artifacts with npm, select **Get the tools** and follow the instructions to install the prerequisites for your operating system. You must first install *Node.js* and *npm*. Then, depending on your operating system, install *vsts-npm-auth* for Windows or configure credentials for non-Windows environments. For non-Windows guidance, see [Connect to a feed - Other](npmrc.md#connect-to-a-feed).

1. Create an *.npmrc* file in the same directory as your *package.json* file, and then paste the snippet from the **Project setup** section into that file.

1. On Windows, run the following command to add an Azure Artifacts token to your user-level *.npmrc* file. You don't need to run this command every time. When the token expires, npm returns a **401 Unauthorized** error to indicate that it's time to refresh it.

  ```
  vsts-npm-auth -config .npmrc
  ```

::: moniker-end

::: moniker range="azure-devops-2022"

> [!NOTE]
> `vsts-npm-auth` isn't supported in Azure DevOps Server. For non-Windows guidance, see [Connect to a feed - Other](npmrc.md#connect-to-a-feed).

::: moniker-end

## Scope setup

To use scopes with Azure Artifacts, update your project *.npmrc* file so that the scoped packages you publish or install resolve through your feed. Replace `registry=<YOUR_SOURCE_URL>` with `@ScopeName:registry=<YOUR_SOURCE_URL>`.

Also update your *package.json* file to include both the scope name and the package name, for example: `{ "name": "@ScopeName/PackageName" }`. The following examples show how to configure organization-scoped and project-scoped feeds.

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

#### Example

- The *.npmrc* file:

    ```.npmrc file
    @local:registry=https://pkgs.dev.azure.com/FabrikamOrg/NpmDemo/_packaging/FabrikamFeed/npm/registry/
        
    always-auth=true
    ```

- The *package.json* file:

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
    }
    ```

## Publish scoped packages

After you configure your scope and update your project files, open a command prompt window, navigate to your project directory, and run the following command to publish your scoped package. In the previous example, the package is published under the `@local` scope.

```Command
npm publish
```

## Upstream sources vs scopes

Upstream sources provide the most flexibility. By using upstream sources, you can consume both scoped and unscoped packages from your Azure Artifacts feed while also using packages from public registries such as npmjs.com. This approach works well when you want a single feed to act as the main source for both internal packages and approved external dependencies.

Scopes are more restrictive, but they can still be a practical option in the right scenario. When you use scopes, each package name must start with `@<scope>`, which means you need to adopt and keep that naming convention across your packages. For example, if you publish a package as `@local/my-package`, you must continue to use that scoped name anywhere the package is referenced.

This requirement can add overhead, especially if you plan to publish the same packages to a public registry later. If you remove scopes when you deploy your packages, you must also update the corresponding references in your *package.json* files and any dependent projects.

Even with those limitations, scopes can serve as a viable alternative when upstream sources aren't practical. This is especially true in isolated or self-hosted environments where access to public registries isn't available and you want to avoid package name collisions while keeping packages organized within your feed.

## Related content

- [Npm audit](npm-audit.md)

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../../pipelines/artifacts/npm.md)

- [Use packages from the npm registry](upstream-sources.md)
