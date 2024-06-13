---
title: Publish Python packages to an Azure Artifacts feed
ms.custom: devx-track-python
description: How to publish Python packages to an Azure Artifacts feed using Azure Pipelines
services: vsts
ms.topic: conceptual
ms.date: 11/07/2023
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish Python packages with Azure Pipelines

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Using Azure Pipelines, developers can publish Python packages to Azure Artifacts feeds, public registries, or store them as pipeline artifacts. This article will guide you through how to: 

> [!div class="checklist"]  
> * Install the prerequisites 
> * Connect to an Azure Artifacts feed
> * Publish Python packages to an Azure Artifacts feed

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a feed](../../artifacts/concepts/feeds.md#create-a-public-feed) if you don't have one already.

## Authenticate with Azure Artifacts

To use `twine` for publishing your Python packages, you must first authenticate with your Azure Artifacts feed. The [TwineAuthenticate task](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) provides twine credentials to a `PYPIRC_PATH` environment variable. This variable is then used by`twine` to facilitate the publishing of your packages directly from your pipeline.

# [YAML](#tab/yaml)

```yaml
- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>     ## For an organization-scoped feed, artifactFeed: <FEED_NAME>
```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select the `+` sign to add a new task. Search for the :::image type="icon" source="../tasks/package/media/python-twine-authenticate.png" border="false"::: **Python twine upload authenticate** task, and then select **Add** to add it to your pipeline.

1. Select your feed from the **My feed name** dropdown menu, or select a **Feed from external organizations** if you want to authenticate with a feed outside your organization.

    :::image type="content" source="media/twine-authenticate.png" alt-text="A screenshot of the Python twine upload authenticate task in Azure Pipelines.":::

* * *

> [!IMPORTANT]
> The credentials stored in the `PYPIRC_PATH` environment variable supersede those in your `.ini` and `.conf` files.  
>
> If you add multiple TwineAuthenticate tasks at different stages in your pipeline, each additional task execution will extend **(not override)** the existing `PYPIRC_PATH` environment variable.

## Publish Python packages to an Azure Artifacts feed

# [YAML](#tab/yaml)

```YAML
- script: |
    pip install build
    pip install twine
  displayName: 'Install build and twine'

- script: |
    python -m build -w
  displayName: 'Python build'

- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>
  displayName: 'Twine Authenticate'

- script: |
    python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
  displayName: 'Upload to feed'
```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select the `+` sign to add a new task. Search for the **Use Python version** task, and then select **Add** to add it to your pipeline. In this example we're setting the **Version spec** to *>= 3.7*.

1. Select the `+` sign to add a new task. Search for the **Command line** task, and then select **Add** to add it to your pipeline. Paste the following commands in the **Script** textbox to install *build* and *twine* on your agent:

    ```command
    pip install build
    pip install twine
    ```

1. Select the `+` sign to add a new task. Search for the **Command line** task, and then select **Add** to add it to your pipeline. Paste the following command in the **Script** textbox to build your project:

    ```command
    python -m build -w
    ```

1. Select the `+` sign to add a new task. Search for the **Twine Authenticate** task, and then select **Add** to add it to your pipeline. Select your feed from the **My feed name** dropdown menu.

1. Select the `+` sign to add a new task. Search for the **Command line** task, and then select **Add** to add it to your pipeline. Paste the following command in the **Script** textbox to publish your package to your feed, replacing the placeholder with your feed name:
 
    ```command
    python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
    ```

    :::image type="content" source="media/publish-to-feed-python-classic.png" alt-text="A screenshot of a classic pipeline to publish Python packages to an Azure Artifacts feed.":::

* * *

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, both the **Project Collection Build Service** and your project's **Build Service** identities must have the **Feed Publisher (Contributor)** role assigned in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for details.

## Related articles

- [Publish and download Python packages CLI](../../artifacts/quickstarts/python-cli.md)
- [Search for packages in upstream sources](../../artifacts/how-to/search-upstream.md)
- [Configure permissions](../../artifacts/feeds/feed-permissions.md)
