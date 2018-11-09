---
title: Python Twine Upload Authenticate
titleSuffix: Azure Pipelines & TFS
description: Sets up authentication with twine to Python feeds so you can publish Python packages in your pipeline. 
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: elbatk
ms.date: 10/31/2018
monikerRange: 'vsts'
---

# Package: Python Twine Upload Authenticate

**Azure Pipelines**

Provides `twine` credentials to a `PYPIRC_PATH` environment variable for the scope of the build. This enables you to publish Python packages to feeds with `twine` from your build. 

> [!NOTE]
> The Python Twine Upload Authenticate task in Azure Pipelines is currently in public preview.

## YAML snippet

```yaml
- task: TwineAuthenticate@0
  inputs:
    artifactFeeds: 'feed_name1, feed_name2'
    externalFeeds: 'feed_name1, feed_name2'
```

## Arguments

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| artifactFeeds                  | List of Azure Artifacts feeds to authenticate with `twine`.           |
| externalFeeds                  | List of service endpoints from external organizations to authenticate with `twine`. The credentials stored in the endpoint must have package upload permissions. |
| [!INCLUDE [temp](../_shared/control-options-arguments.md)] | |


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

