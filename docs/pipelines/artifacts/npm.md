---
title: Publishing npm packages using Azure Pipeline 
ms.custom: seodec18, devx-track-js
description: How to publish your npm packages with Azure Pipelines
services: vsts
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.topic: conceptual
ms.date: 07/22/2021
monikerRange: '>= tfs-2017'
---

# Publish npm packages (YAML/Classic)

**Azure Pipelines | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

Using Azure Pipelines, you can publish your npm packages to Azure Artifacts feeds or to public registries such as *npmjs.com*. Using the npm task, you can install or publish npm packages as well as run any npm commands.

## Publish to Azure Artifacts feeds

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"

To publish your npm packages to Azure Artifacts feeds from your Pipeline, you must first provide the **Project Collection Build Service** identity a **Contributor** access to your feed. See [Add users/groups permissions](../../artifacts/feeds/feed-permission.md#adding-usersgroups-permissions-to-a-feed) for details.

Add the npm task to your yaml pipeline as follows to publish your package to your feed.

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useFeed
    publishFeed: <PROJECT_NAME>/<FEED_NAME>
```

- **useFeed**: select this option to use a feed in the same organization as the build.

::: moniker-end

::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)
To publish an npm package to a Package Management feed, add the **npm** task. Then, configure these options:

- **working folder**: Select the folder that contains your `.npmrc` and `package.json`; leave blank if those files are at the root of the repo
- **npm command**: `publish`

![Azure Pipelines npm publish task configuration](media/npm/team-build-npm-publish.png)

[!INCLUDE [package management permissions](includes/package-management-permissions-for-web-build.md)]

To publish to an external npm registry, you must first create a service connection to point to that registry. You can do this by going to **Project settings**, selecting **Service connections**, and then creating a **New service connection**. Select the **npm** option for the service connection. Fill in the registry URL and the credentials to connect to the registry.

* * *
> [!NOTE]
> Ensure that your working folder has an `.npmrc` file with a `registry=` line, as described in the **Connect to feed** screen in your feed.  
> The build does not support using the `publishConfig` property to specify the `registry` to which you're publishing. The build will fail, potentially with unrelated authentication errors, if you include the `publishConfig` property in your `package.json` configuration file.

## FAQ

- **Where can I learn about the Azure Pipelines and TFS Package Management service?**

    Check out the [Azure Artifacts landing page](../../artifacts/index.yml) for details about Artifacts in Azure Pipelines.

- **How to publish packages to my feed from the command line?**

    See [Publish your package to an npm feed using the CLI](../../artifacts/npm/publish.md) for more information. 

- **How to create a token that lasts longer than 90 days?**

    See [Set up your client's npmrc](../../artifacts/npm/npmrc.md) for more information on how to set up authentication to Azure Artifacts feeds.

- **Do you recommend using scopes or upstream sources?**

    We recommend using upstream sources because it gives you the most flexibility to use a combination of scoped- and non-scoped packages in your feed, as well as scoped- and non-scoped packages from npmjs.com.  
    See [Use npm scopes](../../artifacts/npm/scopes.md) and [Use packages from npmjs.com](../../artifacts/npm/upstream-sources.md) for more details.
