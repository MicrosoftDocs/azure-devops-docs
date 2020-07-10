---
title: Go Tool Installer task
description: Finds or downloads a specific version of the Go tool into the tools cache and adds it to the PATH
ms.topic: reference
ms.assetid: 334727F4-9495-4F9D-A391-FC621D671474
ms.custom: seodec18
ms.author: atulmal
author: azooinmyluggage
ms.date: 04/21/2020
monikerRange: 'azure-devops'
---

# Go Tool Installer task

**Azure Pipelines**

Use this task to find or download a specific version of the Go tool into the
tools cache and add it to the PATH. Use the task to change the version of Go Lang used in subsequent tasks.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/GoToolV0.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`version`<br/>Version|(Required) Go tool version to download and install. **Example:** 1.9.3 <br/>Default value: `1.10`|
|`goPath`<br/>GOPATH|(Optional) Value for the GOPATH environment variable.|
|`goBin`<br/>GOBIN|(Optional) Value for the GOBIN environment variable.|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
