---
title: Publish npm packages with Azure Pipelines
ms.custom: devx-track-js
description: Learn how to publish npm packages to your feed using Azure Pipelines.
services: vsts
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.topic: conceptual
ms.date: 05/30/2024
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish npm packages with Azure Pipelines (YAML/Classic)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can publish your npm packages to Azure Artifacts feeds and public registries like npmjs.com. This article will guide you through publishing your npm packages using both YAML and Classic pipelines.

## Prerequisites

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../../artifacts/get-started-npm.md#create-a-feed).

- [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Publish to Azure Artifacts feeds

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, ensure that both the **Project Collection Build Service** and your project's **Build Service** identity are configured as a **Feed Publisher (Contributor)**. See [Add new users/groups](../../artifacts/feeds/feed-permissions.md#feed-settings) for more details.

#### [YAML](#tab/yaml/)

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useFeed
    publishFeed: <FEED_NAME>        ## For project-scoped feeds, use: <PROJECT_NAME>/<FEED_NAME> 
```

- **publishRegistry**: select *useFeed* to use a feed within your organization. Options: *useExternalRegistry*, *useFeed*
- **publishFeed**: the feed you want to publish to. Required when publishRegistry = useFeed.

> [!TIP]
> When adding the npm task to your YAML pipeline using the YAML editor, the project and feed IDs for your `publishFeed` will be generated automatically.

#### [Classic](#tab/classic/)

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *npm* task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="A screenshot that shows how to find and add the npm task.":::

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *npm* task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="A screenshot that shows how to find and add the npm task.":::

::: moniker-end

4. Name your task and then select **Publish** from the commands dropdown menu. Specify your *package.json* path, your **Registry location**, and your **Target registry**.

    - **Working folder that contains package.json**: path to the folder containing the target *package.json* and *.npmrc* files. Leave this blank if those files are at the root of your repo.
    - **Registry location**: select **Registry I select here** to publish to a feed.
    - **Target registry**: select your feed from the dropdown menu.
    
    :::image type="content" source="./media/npm-publish.png" alt-text="A screenshot that shows how to configure the npm task to publish packages to an Azure Artifacts feed.":::

* * *

## Publish to a public registry

Before publishing your packages to a public npm registry like npmjs.com, you must first create a service connection to authenticate with the desired external service.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings** > **Service connections**, and then select **Create service connection**.

    :::image type="content" source="./media/create-service-connection.png" alt-text="A screenshot that shows how to create a new service connection in Azure DevOps.":::

1. Select **npm** and then select **Next**. Fill out the required fields, and then select **Save** when you're done.

#### [YAML](#tab/yaml/)

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishRegistry: useExternalRegistry
    publishEndpoint: '<NAME_OF_YOUR_SERVICE_CONNECTION>'
```

- **publishRegistry**: select *useExternalRegistry* to publish to a public registry. Options: useExternalRegistry | useFeed.
- **publishEndpoint**: replace the placeholder with the name of the service connection you created earlier. required when *publishRegistry* == *useExternalRegistry*.

#### [Classic](#tab/classic/)

::: moniker range="azure-devops-2019"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

2. Select **Pipelines** > **Builds**, and then select your build definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *npm* task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="A screenshot that shows how to find and add the npm task.":::

::: moniker-end

::: moniker range="> azure-devops-2019"

1. Navigate to the Azure DevOps portal, and then select your project.

2. Select **Pipelines**, and then select your pipeline definition. 

3. Select **Edit**, and then select the `+` sign to add a new task. Search for the *npm* task, and then select **Add** to add it to your pipeline.

    :::image type="content" source="./media/add-npm-task.png" alt-text="A screenshot that shows how to find and add the npm task.":::

::: moniker-end

4. Name your task and then select **Publish** from the commands dropdown menu. Specify your *package.json* path, your **Registry location**, and your **External registry**.

    - **Working folder that contains package.json**: path to the folder containing the target *package.json* and *.npmrc* files. Leave this blank if those files are at the root of your repo.
    - **Registry location**: select **External npm registry** to publish to a public registry such as npmjs.com. 
    - **External registry**: select the service connection you created earlier.

    :::image type="content" source="./media/npm-publish-registry.png" alt-text="A screenshot that shows how to configure the npm task to publish packages to a public registry.":::

* * *

## Related articles

- [Publish and restore npm packages from the command line](../../artifacts/npm/publish.md).
- [Use packages from npmjs.com](../../artifacts/npm/upstream-sources.md).
- [Publish and download pipeline artifacts](./pipeline-artifacts.md).
