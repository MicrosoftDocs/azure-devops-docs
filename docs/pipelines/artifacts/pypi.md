---
title: Publish Python packages
ms.custom: seodec18, devx-track-python
description: How to publish Python packages with Azure Pipelines
services: vsts
ms.topic: conceptual
ms.date: 10/25/2021
monikerRange: azure-devops
---

# Publish Python packages with Azure Pipelines

With Azure Pipelines, you can publish your Python packages to Artifacts feeds, public registries, and within your Pipelines. This article will show you how to: 

> [!div class="checklist"]  
> * Install `twine` 
> * Authenticate with your Azure Artifacts feed
> * Publish Python packages to your feed

## Install twine 

First, you'll need to run `pip install twine` to ensure the build agent has `twine` installed.

#### [YAML](#tab/yaml/)
```yaml
- script: 'pip install twine'
```

Check out the [script YAML task reference](../yaml-schema.md#script) for the schema for this command.

#### [Classic](#tab/classic/)
![PowerShell icon](../tasks/utility/media/powershell.png) **Utility: PowerShell**

* Type

  ```
  inline
  ```
* Script

  ```
  pip install twine
  ```

* * *
## Authenticate Azure Artifacts with twine

To use `twine` to publish Python packages, you first need to set up authentication. The [Python Twine Authenticate](../tasks/package/twine-authenticate.md) task stores your authentication credentials in an environment variable (`PYPIRC_PATH`). `twine` will reference this variable later.

# [YAML](#tab/yaml)

To authenticate with `twine`, add the following snippet to your *azure-pipelines.yml* file.

```yaml
- task: TwineAuthenticate@1
  inputs:
    artifactFeed: <PROJECT_NAME/FEED_NAME>                            #Provide the FeedName only if you are using an organization-scoped feed.
    pythonUploadServiceConnection: <NAME_OF_YOUR_SERVICE_CONNECTION>
```

* **artifactFeed**: The name of your Azure Artifacts feed.
* **pythonUploadServiceConnection**: a [service connection](../library/service-endpoints.md#python-package-upload-service-connection) to authenticate with twine.

# [Classic](#tab/classic)

:::image type="icon" source="../tasks/package/media/python-twine-authenticate.png" border="false"::: **Package: Python Twine Upload Authenticate**

* My feeds 

   Select feed(s) that you want to authenticate with `twine`.

* Feeds from external organizations

   Select feed(s) from outside the organization that you want to authenticate with `twine`.

---

> [!TIP]
> The authentication credentials written into the `PYPIRC_PATH` environment variable supersede those in your .ini and .conf files.  
>
> If you add multiple Python Twine Authenticate tasks at different times in your pipeline steps, each additional build task execution will extend (not override) the existing `PYPIRC_PATH` environment variable.

## Publish Python packages to Azure Artifacts feeds

After you've set up authentication with the *TwineAuthenticate@1* task, you can now use *twine* to publish your Python packages to an Azure Artifacts feed.

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

> [!WARNING]
> We strongly recommend **NOT** checking any credentials into source control.
