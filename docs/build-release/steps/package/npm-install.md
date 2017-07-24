---
title: npm
description: How to use npm packages when building code in Visual Studio Team Services
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: BE298C30-3B6D-4E06-B747-62A8AF6E10A6
ms.manager: douge
ms.author: alewis
ms.date: 08/10/2016
---

# Package: npm

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

![](_img/npm.png) Install npm packages

## Demands

[npm](https://nodejs.org/en/download/)

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Command</td>
<td>
npm command to run. For example: `install`
</td>
</tr>
<tr><th style="text-align: center" colspan="2">Advanced</th></tr>
<tr>
<td>Arguments</td>
<td>
Additional arguments passed to npm.
</td>
</tr>
<tr>
<td>Working directory</td>
<td>
Working directory where npm command is run.  If you leave it blank it is the root of the repo.
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>


## Examples

[Build: Gulp](../build/gulp.md)

[Build your Node.js app with Gulp](../../apps/node/nodejs-to-azure.md)

## Q&A

### Where can I learn npm commands and arguments?

[npm docs](https://docs.npmjs.com/)

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
