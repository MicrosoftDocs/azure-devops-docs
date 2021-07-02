---
title: Cache task
description: Improve build performance by caching files, like dependencies, between pipeline runs.
ms.topic: reference
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.custom: seodec18
author: damccorm
ms.date: 12/13/2019
monikerRange: '>= tfs-2017'
---

# Cache task

[!INCLUDE [temp](../../includes/version-tfs-2017-rtm.md)]

Improve build performance by caching files, like dependencies, between pipeline runs.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/cache-v2.md)]

::: moniker-end

## Arguments

| Argument | Description |
|---|---|
| Key (unique identifier) for the cache | This should be a string that can be segmented using '\|'. File paths can be absolute or relative to $(System.DefaultWorkingDirectory). |
| Path of the folder to cache | Can be fully qualified or relative to $(System.DefaultWorkingDirectory). Wildcards are not supported. [Variables](../../build/variables.md) are supported. |
| Cache hit variable | Variable to set to 'true' when the cache is restored (a cache hit), otherwise set to 'false'. |
| Additional restore key prefixes | Additional restore key prefixes that are used if the primary key misses. This can be a newline-delimited list of key prefixes. |

[**Control options**](../../process/tasks.md#controloptions)

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Next steps

Learn more about pipeline caching:

> [Pipeline Caching](../../release/caching.md)