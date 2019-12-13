---
title: Cache task
description: Improve build performance by caching files, like dependencies, between pipeline runs.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.manager: mijacobs
ms.custom: seodec18
ms.author: macoope
author: damccorm
ms.date: 12/13/2019
monikerRange: '>= tfs-2017'
---

# Cache task

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

Improve build performance by caching files, like dependencies, between pipeline runs.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/cacheV2.md)]

::: moniker-end

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Key (unique identifier) for the cache</td>
<td>
<p>This should be a string that can be segmented using '|'. File paths can be absolute or relative to $(System.DefaultWorkingDirectory).</p>
</td>
</tr>
<tr>
<td>Path of the folder to cache</td>
<td>
<p>Can be fully qualified or relative to $(System.DefaultWorkingDirectory). Wildcards are not supported. <a href="https://go.microsoft.com/fwlink/?LinkID=550988">Variables</a> are supported.</p>
</td>
</tr>
<tr>
<td>Cache hit variable</td>
<td>
<p>Variable to set to 'true' when the cache is restored (a cache hit), otherwise set to 'false'.</p>
</td>
</tr>
<tr>
<td>Additional restore key prefixes</td>
<td>
<p>Additional restore key prefixes that are used if the primary key misses. This can be a newline-delimited list of key prefixes.</p>
</td>
</tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
