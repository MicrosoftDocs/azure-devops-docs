---
title: Java Tool Installer task
description: Change the version of Java in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: C0E0B74F-0931-47C7-AC27-7C5A19456A36
ms.manager: jillfra
ms.custom: seodec18
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Java Tool Installer task

**Azure Pipelines**

Use this task in a build or release pipeline to acquire a specific version of Java from a user supplied Azure blob,
from a location in the source or on the agent, or from the tools cache. The task also sets the JAVA_HOME environment variable.
Use this task to change the version of Java used in Java tasks.

## Demands

None

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/JavaToolInstallerV0.md)]
::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| JDK Version | Specify which JDK version to download and use. |
| JDK Architecture | Specify the bit version of the JDK. |
| JDK source | Specify the source for the compressed JDK, either Azure blob storage or a local directory on the agent or source repository. |
| JDK file | Applicable when JDK is located in a local directory. Specify the path to the folder that contains the compressed JDK. The path could be in your source repository or a local path on the agent.|
| Azure Subscription | Applicable when the JDK is located in Azure Blob storage. Specify the Azure Resource Manager subscription for the JDK.|
| Storage Account Name | Applicable when the JDK is located in Azure Blob storage. Specify the Storage account name in which the JDK is located. Azure Classic and Resource Manager storage accounts are listed. |
| Container Name | Applicable when the JDK is located in Azure Blob storage. Specify the name of the container in the storage account in which the JDK is located.|
| Common Virtual Path | Applicable when the JDK is located in Azure Blob storage. Specify the path to the JDK inside the Azure storage container. |
| Destination directory | Specify the destination directory into which the JDK should be extracted. |
| Clean destination directory | Select this option to clean the destination directory before the JDK is extracted into it. |
| Control options | See [Control options](../../process/tasks.md#controloptions). |

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../_shared/qa-agents.md)]

<!-- ENDSECTION -->
