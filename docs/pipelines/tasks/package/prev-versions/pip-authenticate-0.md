---
title: Python Pip Authenticate version 0
ms.custom: seodec18, devx-track-python
description: Learn how Python Pip Authenticate version 0 configures authentication with pip so you can perform pip commands in your pipeline.
ms.topic: reference
ms.author: dastahel
author: davidstaheli
ms.date: 10/31/2018
monikerRange: 'azure-devops'
---

# Package: Python Pip Authenticate version 0.*

**Azure Pipelines**

Provides authentication for the `pip` client that can be used to install Python distributions.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../../includes/yaml/PipAuthenticateV0.md)]

::: moniker-end

## Arguments

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| artifactFeeds                  | List of Azure Artifacts feeds to authenticate with pip.           |
| externalFeeds                  | List of service connections from external organizations to authenticate with pip. |
| [!INCLUDE [temp](../../includes/control-options-arguments.md)] | |


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

