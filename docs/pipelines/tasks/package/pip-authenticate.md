---
title: Python Pip Authenticate
titleSuffix: Azure Pipelines & TFS
description: Sets up authentication with pip so you can perform pip commands in your pipeline. 
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: elbatk
ms.date: 10/31/2018
monikerRange: 'vsts'
---

# Package: Python Pip Authenticate

**Azure Pipelines**

Provides authentication for `pip` client that can be used to install Python distributions.

> [!NOTE]
> The Python Pip Authenticate task in Azure Pipelines is currently in public preview.

## YAML snippet

```yaml
steps:
- task: PipAuthenticate@0
  inputs:
    artifactFeeds: 'feed_name1, feed_name2'
    externalFeeds: 'feed_name1, feed_name2'
```

## Arguments

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| artifactFeeds                  | List of Azure Artifacts feeds to authenticate with pip.           |
| externalFeeds                  | List of service endpoints from external organizations to authenticate with pip. |
| [!INCLUDE [temp](../_shared/control-options-arguments.md)] | |


## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

