---
title: Publish Python packages with Azure Pipelines
ms.custom: devx-track-python
description: Learn how to publish Python packages to an Azure Artifacts feed using Azure Pipelines.
services: vsts
ms.topic: conceptual
ms.date: 12/13/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Publish Python packages with Azure Pipelines

[!INCLUDE [version-gt-eq-azure-devops-2019](../../includes/version-gt-eq-2019.md)]

Azure Pipelines enables developers to publish Python packages to Azure Artifacts feeds and public registries such as PyPi. This article will guide you through how to publish Python packages to your Azure Artifacts feed.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a feed](../../artifacts/concepts/feeds.md#create-a-public-feed) if you don't have one already.

## Authenticate with a feed

To publish Python packages using twine, you must first authenticate with your Azure Artifacts feed. The [TwineAuthenticate task](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) provides twine credentials to a `PYPIRC_PATH` environment variable. This variable is then used by`twine` to publish packages directly from your pipeline.

> [!IMPORTANT]
> The credentials stored in the `PYPIRC_PATH` environment variable take precedence over those in the `.ini` and `.conf` files.  
>
> If you add multiple *TwineAuthenticate* tasks at different stages in your pipeline, each task execution will extend **(not override)** the existing `PYPIRC_PATH` environment variable.

# [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    steps:
    - task: UsePythonVersion@0
      displayName: 'Use Python 3.x'
    
    - task: TwineAuthenticate@1
      inputs:
        artifactFeed: <PROJECT_NAME/FEED_NAME>     ## For an organization-scoped feed, use: artifactFeed: <FEED_NAME>
    ```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select the `+` sign to add a new task, then add the **Use Python version** and the **Python twine upload authenticate** tasks to your pipeline definition. You can leave the *UsePythonVersion@0* task with the default settings and configure the *TwineAuthenticate@1* as follows:

    1. Select your feed from the **My feed name** dropdown menu. To authenticate with a feed outside your organization, select a **Feed from external organizations** and create a new service connection.

    :::image type="content" source="media/twine-authenticate-publish-to-feed.png" alt-text="A screenshot displaying how to configure the twine upload authenticate task in Azure Pipelines.":::

* * *

## Publish Python packages to a feed

> [!NOTE]
> To publish your packages to a feed using Azure Pipelines, make sure that both the **Project Collection Build Service** and your project's **Build Service** identities are assigned the **Feed Publisher (Contributor)** role in your feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for details.

# [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```YAML
    steps:
    - task: UsePythonVersion@0
      displayName: 'Use Python 3.x'

    - script: |
        pip install build
        pip install twine
      displayName: 'Install build and twine'
    
    - script: |
        python -m build -w
      displayName: 'Python build'
    
    - task: TwineAuthenticate@1
      inputs:
        artifactFeed: <PROJECT_NAME/FEED_NAME>                ## For an organization-scoped feed, use: artifactFeed: <FEED_NAME>
      displayName: 'Twine Authenticate'
    
    - script: |
        python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
      displayName: 'Upload to feed'
    ```

# [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, select your pipeline definition, and then select **Edit**.

1. Select the `+` sign to add a new task, then add the **Use Python version** task to your pipeline. In this example we're setting the **Version spec** to *>= 3.7*.

1. Add the **Command line** task to your pipeline, and paste the following commands into the **Script** textbox to install *build* and *twine* on your agent:

    ```command
    pip install build
    pip install twine
    ```

1. Add another **Command line** task to your pipeline, and then paste the following command into the **Script** textbox to build your project:

    ```command
    python -m build -w
    ```

1. Add for the **Twine Authenticate** task to your pipeline, and select your feed from the **My feed name** dropdown menu.

1. Add another **Command line** task to your pipeline, and paste the following command into the **Script** textbox to publish your package to your feed, replacing the placeholder with your feed's name:
 
    ```command
    python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
    ```

    :::image type="content" source="media/publish-to-feed-python-classic.png" alt-text="A screenshot displaying a Classic pipeline to publish Python packages to an Azure Artifacts feed.":::

* * *



## Related content

- [Publish and download pipeline artifacts](build-artifacts.md)
- [Set up upstream sources](../../artifacts/how-to/set-up-upstream-sources.md)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)
