---
title: Publish Python packages
ms.custom: seodec18, devx-track-python
description: How to publish Python packages with Azure Pipelines
services: vsts
ms.topic: conceptual
ms.date: 02/03/2022
monikerRange: azure-devops
"recommendations": "true"
---

# Publish Python packages with Azure Pipelines

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Using Azure Pipelines, developers can publish Python packages to Azure Artifacts feeds, public registries, or store them as pipeline artifacts. This article will guide you through how to: 

> [!div class="checklist"]  
> * Install the prerequisites 
> * Connect to an Azure Artifacts feed
> * Publish Python packages to an Azure Artifacts feed

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- An Azure Artifacts feed. [Create a feed](./concepts/feeds.md#create-public-feeds.) if you don't have one already.

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

## Publish Python packages to Azure Artifacts feeds

# [YAML](#tab/yaml)

```YAML
- script: |
     pip install wheel
     pip install twine
  
- script: |
     python setup.py bdist_wheel
   
- task: TwineAuthenticate@1
  displayName: Twine Authenticate
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>           #For an organization-scoped feed, artifactFeed: <FEED_NAME>.
  
- script: |
     python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
```

Example using [Python build](https://pypi.org/project/build/) and [twine](https://pypi.org/project/twine/) to publish a Python package to an Azure Artifacts feed.

```YAML
- script: |
    pip install twine
    pip install build

- script: |
    python -m build -w

- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>

- script: |
    python -m twine upload -r <FEED_NAME> --config-file $(PYPIRC_PATH) dist/*.whl
  displayName: 'upload'
```

# [Classic](#tab/classic)

- **Twine Authenticate**:

    :::image type="content" source="media/twine-authenticate.png" alt-text="Screenshot of the twine authenticate task to publish python packages.":::

- **PowerShell**:

    :::image type="content" source="media/powershell-pipelines.png" alt-text="Screenshot of the PowerShell task to publish python packages.":::

* * *

## Related articles

- [Publish and download pipeline Artifacts](./pipeline-artifacts.md)
- [Artifacts in Azure Pipelines](./build-artifacts.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
