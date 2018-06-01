---
title: Helm tool installer
description: Install Helm and Kubernetes on agent machine.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 068D5909-43E6-48C5-9E01-7C8A94816220
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Tool: Helm tool installer

![](_img/helminstaller.png) Install Helm and Kubernetes on agent machine.

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/HelmInstallerV0.0.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Helm Version Spec</td><td>(Required) Specify the version of Helm to install</td></tr>
<tr><td>Check for latest version of Helm</td><td>(Optional) Check for latest version of Helm.</td></tr>
<tr><td>Install Kubectl</td><td>(Required) Install Kubectl.</td></tr>
<tr><td>Kubectl Version Spec</td><td>(Optional) Specify the version of Kubectl to install</td></tr>
<tr><td>Check for latest version of kubectl</td><td>(Optional) Check for latest version of kubectl.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
