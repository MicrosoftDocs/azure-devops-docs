---
title: Download Package
description: Download a package from a Package Management feed in VSTS or TFS.  Requires the Package Management extension.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8d6e8f7e-267d-442d-8c92-1f586864c62f
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Utility: Download Package

![](_img/downloadpackage.png) Download a package from a Package Management feed in VSTS or TFS.  Requires the Package Management extension.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/DownloadPackageV0.0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Feed</td><td>(Required) Select the package source</td></tr>
<tr><td>Package</td><td>(Required) Select the package to download, only nuget packages are supported currently</td></tr>
<tr><td>Version</td><td>(Required) Version of the package</td></tr>
<tr><td>Destination directory</td><td>(Required) Path on the agent machine where the package will be downloaded</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
