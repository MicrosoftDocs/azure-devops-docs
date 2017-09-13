---
title: Xamarin component restore in VSTS
description: How to restore Xamarin components for a VSTS solution
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: D50172C9-5AEE-4055-9795-342D5B2ABEF4
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Package: Xamarin component restore

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

![icon](_img/xamarin-component-restore.png) Restores [Xamarin components](https://components.xamarin.com/) for the specified solution


## Demands

None


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

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->