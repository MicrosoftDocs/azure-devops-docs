---
title: Publish and download npm packages with Azure Artifacts
description: Learn how to use Azure Artifacts to publish and download npm packages.
ms.service: azure-artifacts
ms.topic: quickstart
ms.date: 09/02/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Publish and download npm packages with Azure Artifacts

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure Artifacts enables developers to publish and download npm packages from feeds or public registries.

This article guides you through creating a feed, configuring your project, and publishing and downloading npm packages.

## Prerequisites

- An Azure DevOps [organization](../organizations/accounts/create-organization.md).
- An Azure DevOps [project](../organizations/projects/create-project.md).
- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Create a feed

[!INCLUDE [](includes/create-feed.md)]

## Set up npm authentication

Before you connect to a feed, set up authentication for the npm client on your machine. The steps differ depending on your operating system:

### Windows

Install `vsts-npm-auth`, which generates and refreshes the credentials npm uses to connect to your Azure Artifacts feed.

```
npm install -g vsts-npm-auth --registry https://registry.npmjs.com
```

### macOS and Linux

`vsts-npm-auth` isn't supported on macOS or Linux. Instead, create a [personal access token (PAT)](../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scope. Use that PAT when you configure your user-level *.npmrc* file in the next section.

***

## Connect to a feed

Azure Artifacts recommends using two separate configuration files. The first should be kept locally in the *$HOME* directory (Linux/macOS) or *$env.HOME* (Windows) to securely store your credentials. This allows the npm client to access your credentials for authentication.

By using this setup, you can share project configuration with your team without exposing credentials in source control. For more details, see [Connect to an Azure Artifacts feed - npm](npm/npmrc.md).

::: moniker range="azure-devops"   

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **npm** from the left navigation pane.

1. Under **Project setup**, select **Windows** or **Other** for your operating system, and then follow the provided instructions to update your user-level and project-level *.npmrc* files.

    :::image type="content" source="media/npm-project-setup-azure-devops.png" alt-text="Screenshot showing how to set up an npm project and connect to a feed in Azure DevOps Services.":::

::: moniker-end

::: moniker range="azure-devops-2022"

> [!NOTE]
> The `vsts-npm-auth` is not supported in Azure DevOps Server.

1. Sign in to your Azure DevOps collection, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **npm** from the left navigation pane.

1. Under **Project setup**, select **Windows** or **Other** for your operating system, and then follow the provided instructions to update your user-level and project-level *.npmrc* files.

   :::image type="content" source="media/npm-project-setup-server-2022-1.png" alt-text="Screenshot showing how to set up an npm project and connect to an Azure Artifacts feed in Azure DevOps Server 2022.":::

::: moniker-end

> [!IMPORTANT]
> npm supports only a single `registry` setting in your *.npmrc* file. If you need packages from multiple sources, use [upstream sources](npm/upstream-sources.md) or [scopes](npm/scopes.md) instead of adding multiple `registry` entries.

## Publish packages to your feed

> [!NOTE]
> To publish packages to a feed, you must be a **Feed Publisher (Contributor)** or higher. See [Manage permissions](feeds/feed-permissions.md) for more details.

Before you publish packages, ensure you authenticate with your feed. If you haven't done this yet, follow the steps in the [Connect to a feed](#connect-to-a-feed) section, and then continue with the instructions in the following section.

1. In your project directory, run the following command to publish the package defined in your `package.json` file to your feed:

    ```
    npm publish
    ```

> [!IMPORTANT]
> Using the `publishConfig` property to override the registry configuration at publish time is not supported.

## Restore packages from your feed

Before you restore packages, ensure you authenticate with your feed and update the *.npmrc* files for your project. If you haven't done this yet, complete the steps in [Connect to a feed](#connect-to-a-feed), and then continue.

1. In your project directory, run the following command to restore all packages listed in your `package.json` file:

    ```
    npm install
    ```

1. To install a specific package from the feed and add it as a dependency in your `package.json` file, run the following command:

    ```
    npm install --save <PACKAGE_NAME>
    ```

## Related content

- [Publish npm packages with Azure Pipelines (YAML/Classic)](../pipelines/artifacts/npm.md)

- [Use packages from npmjs.com](npm/upstream-sources.md)

- [Use npm audit](npm/npm-audit.md)
