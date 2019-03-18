---
title: Python Pip Authenticate
ms.custom: seodec18
description: Sets up authentication with pip so you can perform pip commands in your pipeline. 
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: elbatk
ms.date: 10/31/2018
monikerRange: 'azure-devops'
---

# Package: Python Pip Authenticate

**Azure Pipelines**

Provides authentication for the `pip` client that can be used to install Python distributions.

> [!NOTE]
> The Python Pip Authenticate task in Azure Pipelines is currently in public preview.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PipAuthenticateV0.md)]
::: moniker-end

## Arguments

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| artifactFeeds                  | List of Azure Artifacts feeds to authenticate with pip.           |
| externalFeeds                  | List of service connections from external organizations to authenticate with pip. |
| [!INCLUDE [temp](../_shared/control-options-arguments.md)] | |


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

