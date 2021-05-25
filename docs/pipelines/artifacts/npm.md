---
title: Publishing npm packages using the Pipeline tasks or the Classic user interface 
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18, devx-track-js
description: Publishing npm packages to Azure Artifacts or other npm registries
services: vsts
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.topic: conceptual
ms.date: 06/17/2020
monikerRange: '>= tfs-2017'
---

# Publish npm packages (YAML/Classic)

[!INCLUDE [version-tfs-2017-rtm](../includes/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

You can publish npm packages produced by your build to:

* Azure Artifacts or the TFS Package Management service.
* Other registries such as `https://registry.npmjs.org/`.

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
[!INCLUDE [package management permissions](includes/package-management-permissions-for-yaml-build.md)]

Add the following snippet to your `azure-pipelines.yml` file. 

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useFeed
    publishFeed: projectName/feedName
```

- **useFeed**: this option allows the use of an Azure Artifacts feed in the same organization as the build.
- **feedName**: the name of the feed you want to publish to.
- **projectName** the name of your project.


> [!NOTE]
> All new feeds that were created through the classic user interface are project scoped feeds. You must include the project name in the `publishFeed` parameter: `publishFeed: '<projectName>/<feedName>'`. See [Project-scoped feeds vs. Organization-scoped feeds](../../artifacts/concepts/feeds.md#project-scoped-vs-organization-scoped-feeds) to learn about the difference between the two types.

To publish to an external npm registry, you must first create a service connection to point to that feed. You can do this by going to **Project settings**, selecting **Services**, and then creating a **New service connection**. Select the **npm** option for the service connection. Fill in the registry URL and the credentials to connect to the registry. See [Service connections](../library/service-endpoints.md) to learn more about how to create, manage, secure, and use a service connection.

To publish a package to an npm registry, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishEndpoint: '<copy and paste the name of the service connection here>'
```

- **publishEndpoint**: This argument is required when `publishRegistry == UseExternalRegistry`. Copy and paste the name of the service connection you created earlier.

For a list of other options, see the [npm task](../tasks/package/npm.md) to install and publish your npm packages, or run an npm command.

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
