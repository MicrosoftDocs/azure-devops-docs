---
title: Publishing npm packages using Azure Pipelines
ms.custom: seodec18, devx-track-js
description: How to publish your npm packages with Azure Pipelines
services: vsts
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.topic: conceptual
ms.date: 07/14/2022
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish npm packages (YAML/Classic)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using Azure Pipelines, you can publish your npm packages to Azure Artifacts feeds or to public registries such as *npmjs.com*. In this article, you will learn how to publish your npm packages using YAML and Classic pipelines.

## Publish to Azure Artifacts feeds

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

> [!NOTE]
> The **Project Collection Build Service** and your project's **Build Service** identity must be set to **Contributor** to publish your packages to a feed using Azure Pipelines. See [Add new users/groups](../../artifacts/feeds/feed-permissions.md#configure-feed-settings) for more details.

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useFeed
    publishFeed: <FEED_ID>        ## For project-scoped feeds, use: <PROJECT_ID>/<FEED_ID> 
```

- **publishRegistry**: Options: *useExternalRegistry*, *useFeed*.  Select *useFeed* to use a feed within your organization.
- **publishFeed**: Required when publishRegistry = useFeed. The feed you want to publish to.

> [!TIP]
> Using the YAML editor to add the npm publish task will generate the project and feed IDs for your `publishFeed`.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

1. From within your pipeline, select the `+` sign to add a task to your pipeline, then search for the *npm* task. Select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="A screenshot showing how to find and add the npm task.":::

1. Name your task and select **Publish** from the dropdown menu. Select your package.json path, your **Registry location** and your **Target registry**

    :::image type="content" source="./media/npm-publish.png" alt-text="A screenshot showing how to configure the npm publish task.":::

- **Working folder that contains package.json**: path to the folder containing the target package.json and .npmrc files. Leave this blank if those files are at the root of your repo.
- **Registry location**: select **Registry I select here** to publish to an Azure Artifacts feed. select your feed from the dropdown menu.

* * *

## Publish to a public registry

To publish your packages to a public npm registry such as *npmjs.com*, you must first create a service connection to connect to the desired external service.

1. Select **Project settings**, and then select **Service connections**.

1. Select **Create service connection** to create a new service connection.

    :::image type="content" source="./media/create-service-connection.png" alt-text="Screenshot showing how to create a new service connection":::

1. Select **npm** and then select **Next**. Fill out the required fields, and then select **Save** when you are done.

#### [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useExternalRegistry
    publishEndpoint: '<NAME_OF_YOUR_SERVICE_CONNECTION>'
```

- **publishRegistry**: Select *useExternalRegistry* to publish to a public registry. Options: useExternalRegistry | useFeed.
- **publishEndpoint**: required when `publishRegistry == useExternalRegistry`. Replace the placeholder with the name of the service connection you created earlier.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

1. From within your pipeline, select the `+` sign to add a task to your pipeline, then search for the *npm* task. Select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="Screenshot showing how to find and add the npm task":::

1. Name your task, and then select **Publish** from the dropdown menu. Select your *package.json* path, your **Registry location** and your **External registry**.

    :::image type="content" source="./media/npm-publish-registry.png" alt-text="A screenshot showing how to configure the npm publish task to publish packages to public registries.":::

- **Working folder that contains package.json**: path to the folder containing the target package.json and .npmrc files. Leave this blank if those files are at the root of your repo.
- **Registry location**: select **External npm registry** to publish to public registries such as npmjs.com. Enter the name of the service connection you created earlier.

* * *

## Related articles

- [Publish and download Artifacts in Azure Pipelines](./pipeline-artifacts.md).
- [Publish npm packages from the command line](../../artifacts/npm/publish.md).
- [Use packages from npmjs.com](../../artifacts/npm/upstream-sources.md).
