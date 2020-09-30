---
title: Python Twine Upload Authenticate version 0
ms.custom: seodec18, devx-track-python
description: Learn how Python Twine Upload Authenticate version 0 sets up authentication with twine to Python feeds so you can publish Python packages in your pipeline.
ms.topic: reference
ms.author: dastahel
author: davidstaheli
ms.date: 10/31/2018
monikerRange: 'azure-devops'
---

# Package: Python Twine Upload Authenticate version 0.*

**Azure Pipelines**

Provides `twine` credentials to a `PYPIRC_PATH` environment variable for the scope of the build. This enables you to publish Python packages to feeds with `twine` from your build. 

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../../includes/yaml/TwineAuthenticateV0.md)]

::: moniker-end

## Arguments


| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| artifactFeeds                  | List of Azure Artifacts feeds to authenticate with `twine`.           |
| externalFeeds                  | List of service connections from external organizations to authenticate with `twine`. The credentials stored in the endpoint must have package upload permissions. |
| [!INCLUDE [temp](../../includes/control-options-arguments.md)] | |


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

