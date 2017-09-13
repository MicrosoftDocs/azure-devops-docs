---
title: Deprecate or unpublish an npm package
description: Deprecate or unpublish an npm package from VSTS or Team Foundation Server to discourage or prevent its usage 
ms.assetid: 1d74f23f-bafc-4fed-9aad-4b2ee7633ff8
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.manager: douge
ms.author: amullans
ms.date: 09/01/2017
---

# Deprecate or unpublish an npm package

[!INCLUDE [](../_shared/availability-npm.md)]

There are two options available to remove a version of an npm package from a feed.

1. **Deprecate:** deprecating a version of a package adds a deprecation message that most npm clients, and VSTS, will show whenever the package is viewed or installed. 
Deprecating a version can help you discourage new usage of it by presenting a warning message when the package is installed.
2. **Unpublish:** Unpublishing a version of a package makes it permanently unavailable for install or restore.

## Use VSTS

You must be a **contributor** to deprecate and an **owner** to unpublish.
To deprecate or unpublish a version of a package, choose the package from the **Packages** menu, and select the appropriate option from the menu under the ellipses. 

![Deprecate and unpublish buttons](_img/deprecate-and-unpublish.png)

## Use npm
1. [Set up the npm client with your feed](npmrc.md).
2. Deprecate a package by running `npm deprecate <package>[@<version>] <message>`.
3. Unpublish a package by running `npm unpublish <package>@<version>`. 

At this time, it's not possible to use `npm unpublish <package>` to unpublish all versions.

See the [deprecate](https://docs.npmjs.com/cli/deprecate) or [unpublish](https://docs.npmjs.com/cli/unpublish) CLI docs for more info.
