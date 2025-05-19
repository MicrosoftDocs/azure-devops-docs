---
author: gloridelmorales
ms.author: glmorale
ms.date: 5/19/2025
ms.topic: include
---

### Filtering out low-quality alerts for NuGet dependency scanning alerts

The existing dependency scanning NuGet detector reads the following files in the scanning directory: `*.nuspec`, `*.nupkg`, `packages.config`, or `project.assets (*.csproj)` files. This is known to overreport dependencies in NuGet restore scenarios which downloads all possible dependencies before resolving the final dependency graph, leading to false positives.

Based on customer feedback, we've implemented changes to the NuGet detector so that dependency scanning will only parse `packages.config` and `project.assets (*.csproj)` files. This means any components that are only found in only `*.nuspec` or `*.nupkg` files will no longer create vulnerabilities and any existing alerts will be automatically closed as fixed upon your next dependency scanning run.