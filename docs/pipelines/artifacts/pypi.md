---
title: Publish packages to PyPI
titleSuffix: Azure Pipelines
description: Publish Python packages to PyPI or Azure Artifacts feeds via builds with Azure Pipelines
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: elbatk
ms.date: 10/31/2018
monikerRange: 'vsts'
---

# Publish Python packages in Azure Pipelines

**Azure Pipelines**

> [!NOTE]
> Python package publishing in Azure Pipelines is currently in public preview.

You can publish Python packages produced by your build to:

* Azure Artifacts
* Other repositories such as `https://pypi.org/`

Before you read this topic, you should understand the kind of build pipeline you're creating: [visual designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

To publish Python packages produced by your build, you will use [twine](https://pypi.org/project/twine/), a widely-used utility for publishing Python packages. This guide covers how to do the following in your pipeline:

1. Authenticate `twine` with your Azure Artifacts feeds
2. Use a custom task that invokes `twine` to publish your Python packages

## Authenticate Azure Artifacts with twine

To use `twine` to publish Python packages, you first need to set up authentication. The [Python Twine Authenticate](../tasks/package/twine-authenticate.md) task stores your authentication credentials in an environment variable (`PYPIRC_PATH`). `twine` will reference this variable later.

# [YAML](#tab/yaml)

To authenticate with `twine`, add the following snippet to your _azure-pipelines.yml_ file.

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeeds: 'feed_name1, feed_name2'
    externalFeeds: 'feed_name1, feed_name2'
```

# [Designer](#tab/designer)

![icon](../tasks/package/_img/python-twine-authenticate.png) **Package: Python Twine Upload Authenticate**

* My feeds 

Select feeds that you want to authenticate with twine.

* Feeds from external organizations

Select feeds from outside of the organization that you want to authenticate with twine.

---

## Use a custom twine task to publish

After you've set up authentication with the snippet above, you can use `twine` to publish your Python packages. Below is an example using a custom command line task.

# [YAML](#tab/yaml)

```yaml
- script: 'twine -r {feedName/EndpointName} --config-file $(PYPIRC_PATH) {package path to publish}'
```

Check out the [script YAML task reference](../yaml-schema.md#script) for the schema for this command.

# [Designer](#tab/designer)

![icon](../tasks/utility/_img/powershell.png) **Utility: Powershell**

* Type

 ```
inline
```
* Script

 ```
twine -r {feedName/EndpointName} --config-file $(PYPIRC_PATH) {package path to publish}'
```

---

## Tips and FAQs

1. The authentication credentials written into the `PYPIRC_PATH` environment variable supersede those in your ini/conf files. 

1. If you add multiple Python Twine Authenticate tasks at different times in your pipeline steps, each additional build task execution will extend (not override) the existing `PYPIRC_PATH` environment variable.

1. Lastly, we strongly recommend **NOT** checking into source control any credentials or tokens.

