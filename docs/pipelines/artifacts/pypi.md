---
title: Publish packages to Azure Artifacts
ms.custom: seodec18, devx-track-python
description: Publish Python packages to Azure Artifacts feeds via builds with Azure Pipelines
services: vsts
ms.topic: conceptual
ms.date: 06/08/2020
monikerRange: azure-devops
---

# Publish Python packages in Azure Pipelines

You can publish Python packages produced by your build to:

* Azure Artifacts
* Other repositories such as `https://pypi.org/`

To publish Python packages produced by your build, you'll use [twine](https://pypi.org/project/twine/), a widely used tool for publishing Python packages. This guide covers how to do the following in your pipeline:

1. Install `twine` on your build agent
2. Authenticate `twine` with your Azure Artifacts feeds
3. Use a custom task that invokes `twine` to publish your Python packages

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

To authenticate with `twine`, add the following snippet to your _azure-pipelines.yml_ file.

The example below will enable you to authenticate to a list of Azure Artifacts feeds as well as a list of service connections from external organizations. If you need to authenticate to a single feed, you must replace the following arguments: `artifactFeeds` and `externalFeeds` with `artifactFeed` and `externalFeed` and specify your feed name accordingly.

```yaml
- task: TwineAuthenticate@1
  inputs:
    artifactFeeds: 'feed_name1, feed_name2'
    externalFeeds: 'feed_name1, feed_name2'
```

* **artifactFeeds**: a list of Azure Artifacts feeds within your organization. If you only have one Azure Artifacts feed, use **artifactFeed** (singular) instead.
* **externalFeeds**: a list of [service connections](../library/service-endpoints.md) from external organizations including PyPI or feeds in other organizations in Azure DevOps.

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

## Use a custom twine task to publish

After you've set up authentication with the preceding snippet, you can use `twine` to publish your Python packages. The following example uses a custom command-line task.

# [YAML](#tab/yaml)

```yaml
- script: 'twine upload -r {feedName/EndpointName} --config-file $(PYPIRC_PATH) {package path to publish}'
```

Check out the [YAML schema reference](../yaml-schema.md#script) for more details on the `script` keyword.

# [Classic](#tab/classic)

:::image type="icon" source="../tasks/utility/media/powershell.png" border="false"::: **Utility: PowerShell**

* Type:

   ```
   inline
   ```
* Script:

   ```
   twine upload -r {feedName/EndpointName} --config-file $(PYPIRC_PATH) dist/*
   ```

---

> [!WARNING]
> We strongly recommend **NOT** checking any credentials or tokens into source control.
