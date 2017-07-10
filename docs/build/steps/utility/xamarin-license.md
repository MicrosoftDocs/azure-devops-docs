---
title: Xamarin license
description: How to activate or deactivate a Xamarin license when building code in Visual Studio Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 07F571D7-DB66-4B8E-8CB1-F37B6D56EBD7
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Utility: Xamarin license

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/xamarin-license.png) Activate or deactivate Xamarin licenses

## Deprecated

> We're deprecating this task because you no longer need a Xamarin license to [build your Xamarin app](../../apps/mobile/xamarin.md). We recommend that you remove this task from your build to avoid disruption when we remove the task from the product.

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
<td>Action</td>
<td>
Select
<ul>
<li>**Activate** for the first instance of this build step, which should come before any instances of the Xamarin.Android step or the Xamarin.iOS steps.</li>
<li>**Deactivate** for the second instance of this build step, which should come after all instances of the Xamarin.Android and Xamarin.iOS steps. You should also select **Always run** under **Control options** for the last instance of the Xamarin license step.</li>
</ul>
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
<blockquote><strong>Important: </strong> Use a [secret variable](../../define/variables.md) to avoid exposing this value.</blockquote>
</td>
</tr>
<tr>
<td>Xamarin Product</td>
<td>
Select the build step that you're running in this build definition, such as **Xamarin.Android** or **Xamarin.iOS**.
</td>
</tr>
<tr>
<th style="text-align: center" colspan="2">Advanced</th>
</tr>
<tr>
<td>Timeout in Seconds</td>
<td>
Specify how long you want to allow the build step to wait for the activation or deactivation. 
</td>
</tr>

[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>


## Example 

[Build your Xamarin app](../../apps/mobile/xamarin.md)


## Q&A
<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->