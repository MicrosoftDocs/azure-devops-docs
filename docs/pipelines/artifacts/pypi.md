---
title: Publish Python packages
ms.custom: seodec18, devx-track-python
description: How to publish Python packages with Azure Pipelines
services: vsts
ms.topic: conceptual
ms.date: 02/03/2022
monikerRange: azure-devops
---

# Publish Python packages with Azure Pipelines

With Azure Pipelines, you can publish your Python packages to Artifacts feeds, public registries, and within your Pipelines. This article will show you how to: 

> [!div class="checklist"]  
> * Install `twine` 
> * Authenticate with your Azure Artifacts feed
> * Publish Python packages to your feed

## Install twine 

#### [YAML](#tab/yaml/)
```yaml
- script: 'pip install twine'
```

See [script shortcut](/azure/devops/pipelines/yaml-schema/steps-script) for more details.

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

To use `twine` to publish your Python packages, you must first set up authentication. The [TwineAuthenticate](../tasks/package/twine-authenticate.md) task stores your  credentials in a `PYPIRC_PATH` environment variable. `twine` will reference this variable to publish your packages from your pipeline.

# [YAML](#tab/yaml)

```yaml
- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>                            #Provide the FeedName only if you are using an organization-scoped feed.
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
> If you add multiple TwineAuthenticate tasks at different stages in your pipeline, each additional task execution will extend (not override) the existing `PYPIRC_PATH` environment variable.

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
    artifactFeed: projectName/feedName        #Provide the FeedName only if you are using an organization-scoped feed.
  
- script: |
     python -m twine upload -r feedName --config-file $(PYPIRC_PATH) dist/*.whl
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
