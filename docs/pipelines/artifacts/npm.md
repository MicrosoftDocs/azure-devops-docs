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
To publish your npm packages to Azure Artifacts feeds from your Pipeline, you must first provide a **Contributor** access to the **Project Collection Build Service** identity. See [Add users/groups permissions](../../artifacts/feeds/feed-permissions.md#adding-usersgroups-permissions-to-a-feed) for more details.

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

To publish npm packages to your feed, follow the steps below to add and configure the **npm** task:

1. From within your pipeline, select the `+` sign to add a task to your pipeline, then search for the *npm* task. Select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="Screenshot showing how to find and add the npm task"::: 

1. Fill out the required fields as follows:

    :::image type="content" source="./media/npm-publish.png" alt-text="Screenshot showing how to configure the npm publish task":::

- **Display name**: name of your task.
- **Command**: `publish`
- **Working folder that contains package.json**: path to the folder containing the target package.json and .npmrc files. Leave this blank if those files are at the root of your repo.
- **Registry location**: select **Target registry** to publish to an Azure Artifacts feed. select your feed from the dropdown menu.

* * *

## Publish to public registry

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

To publish your packages to a public npm registry such as *npmjs.com*, you must first create a service connection to connect to the desired external service.

You can do this by going to your **Project settings** then selecting **Service connections**.

1. Select **Create service connection** to create a new service connection., then .

    :::image type="content" source="./media/create-service-connection.png" alt-text="Screenshot showing how to create a new service connection":::

1. Select **npm** then fill out the required fields. Select **Save** when you are done. 

See [Manage service connections](../library/service-endpoints.md) to learn more about how to create, manage, secure, and use service connections.

To publish a package to an npm registry, add the following snippet to your yaml file.

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: UseExternalRegistry
    publishEndpoint: '<NAME_OF_YOUR_SERVICE_CONNECTION>'
```

- **publishEndpoint**: required when `publishRegistry == UseExternalRegistry`. Copy and paste the name of the service connection you created earlier.

::: moniker-end

::: moniker range="< azure-devops-2019"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

Follow the steps below to publish your npm packages to a public npm registry using the classic pipeline.

1. From within your pipeline, select the `+` sign to add a task to your pipeline, then search for the *npm* task. Select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="Screenshot showing how to find and add the npm task"::: 

1. Fill out the required fields and make sure you select **External npm registry** to point to the public registry. Enter the name of your service connection in the **External Registry** field or create a new service connection if you haven't done so already.

    :::image type="content" source="./media/npm-publish-registry.png" alt-text="Screenshot showing how to configure the npm publish task to publish to public registries":::

- **Display name**: name of your task.
- **Command**: `publish`
- **Working folder that contains package.json**: path to the folder containing the target package.json and .npmrc files. Leave this blank if those files are at the root of your repo.
- **Registry location**: select **External npm registry** to publish to public registries such as npmjs.com. Enter the name of your service connection.

* * *

## FAQ

- **How to publish packages to my feed from the command line?**

    See [Publish your package to an npm feed using the CLI](../../artifacts/npm/publish.md) for more information. 

- **How to create a token that lasts longer than 90 days?**

    See [Set up your client's npmrc](../../artifacts/npm/npmrc.md) for more information on how to set up authentication to Azure Artifacts feeds.

- **Do you recommend using scopes or upstream sources?**

    We recommend using upstream sources because it gives you the most flexibility to use a combination of scoped- and non-scoped packages in your feed, as well as scoped- and non-scoped packages from npmjs.com.  
    See [Use npm scopes](../../artifacts/npm/scopes.md) and [Use packages from npmjs.com](../../artifacts/npm/upstream-sources.md) for more details.
