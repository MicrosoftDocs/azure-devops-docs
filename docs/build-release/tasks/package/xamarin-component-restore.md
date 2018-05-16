---
title: Xamarin component restore in VSTS
description: Learn all about how you can restore Xamarin components for your specified solution in VSTS or Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: D50172C9-5AEE-4055-9795-342D5B2ABEF4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: '>= tfs-2017'
---


# Package: Xamarin component restore

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/xamarin-component-restore.png) Restores [Xamarin components](https://components.xamarin.com/) for the specified solution


## Demands

None

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/XamarinComponentRestoreV0.0.md)]

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
<td>Path to Solution</td>
<td>
Click the <strong>...</strong> button and select your solution.
</td>
</tr>
<tr>
<td>Email</td>
<td>
Xamarin account email address.</td>
</tr>
<tr>
<td>Password</td>
<td>
<p>Xamarin account password.</p>
<blockquote><strong>Important: </strong> Use a [secret variable](../../concepts/definitions/build/variables.md) to avoid exposing this value.</blockquote>
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
