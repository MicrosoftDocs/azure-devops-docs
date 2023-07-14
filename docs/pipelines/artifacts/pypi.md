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

Using Azure Pipelines, you can publish your Python packages to Azure Artifacts feeds, public registries, or as a pipeline artifacts. 

This article will show you how to: 

> [!div class="checklist"]  
> * Install `Twine` 
> * Authenticate with your Azure Artifacts feeds
> * Publish Python packages to an Azure Artifacts feed

## Install twine

#### [YAML](#tab/yaml/)

```yaml
- script: 'pip install twine'
```

#### [Classic](#tab/classic/)

1. From your pipeline definition, select `+` to add a new task. Search for the **PowerShell** task ![PowerShell icon](../tasks/utility/media/powershell.png).

1. Select **Add** to add the task to your pipeline.

1. Select **Inline** for your script **Type**

1. Enter the following command in the script area

    ```Command
    pip install twine
    ```

:::image type="content" source="media/powershell-pipelines.png" alt-text="Screenshot of the PowerShell task in Azure Pipelines":::

* * *

## Authenticate with Azure Artifacts

To use `twine` to publish your Python packages, you must first set up authentication to your Azure Artifacts feed. The [TwineAuthenticate](/azure/devops/pipelines/tasks/reference/twine-authenticate-v1) task stores your  credentials in a `PYPIRC_PATH` environment variable. `twine` will reference this variable to publish your packages from your pipeline.

# [YAML](#tab/yaml)

```yaml
- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>                            #For an organization-scoped feed, artifactFeed: <FEED_NAME>
    pythonUploadServiceConnection: <NAME_OF_YOUR_SERVICE_CONNECTION>
```

- **artifactFeed**: The name of your feed.
- **pythonUploadServiceConnection**: a [service connection](../library/service-endpoints.md#python-package-upload-service-connection) to authenticate with twine.

# [Classic](#tab/classic)

1. From your pipeline definition, select `+` to add a new task. Search for the **Python twine upload authenticate** task :::image type="icon" source="../tasks/package/media/python-twine-authenticate.png" border="false":::

1. Select **Add** to add the task to your pipeline.

1. Select your feed from the **My feed** dropdown menu or select a **Feed from external organizations** if you want to authenticate with a feed outside your organization.

:::image type="content" source="media/twine-authenticate.png" alt-text="Screenshot of the Python twine task in Azure Pipelines":::

* * *

> [!TIP]
> The credentials stored in the `PYPIRC_PATH` environment variable supersede those in your `.ini` and `.conf` files.  
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
