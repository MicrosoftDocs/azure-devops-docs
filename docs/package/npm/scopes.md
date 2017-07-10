---
title: Use npm scopes for private packages
description: Use npm scopes for private packages in Visual Studio Team Services
ms.assetid: c88868bd-8101-48f3-b76d-17c858181fda
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: amullans
ms.date: 10/10/2016
---

# Use npm scopes

**Availability**<br>
npm Package Management is available with **Visual Studio Team Services** and **TFS 2017 Update 1 and newer**.

[Scopes](https://docs.npmjs.com/misc/scope) are built into npm and are a way of grouping packages together.
In Team Services and in npmjs.com, you can publish and use both scoped and unscoped packages. 

Scopes are also the npm client's only native affordance to use multiple registries/feeds.
They allow you to separate your private packages from npmjs.com packages by prefixing your packages with a `@scope`:
e.g. `@fabrikam/fiber-core` and configuring your .npmrc file to only use a Package Management feed for that `@scope`. 

## Set up
To use a Package Management feed with a scope, follow the instructions below, but append your scope to both lines in the project .npmrc file.

[!INCLUDE [](../_shared/npm/npmrc.md)]

 Then, replace:
- `registry=<your feed URL>` with
- `@fabrikam:registry=<your feed URL>`

## Upstreams or scopes?
Scopes add an additional restriction when naming your packages: each package name must start with `@<scope>`. If you're ok with this limitation, and don't intend to ever publish your private packages to npmjs.com, scopes are an alternative to [upstream sources](upstream-sources.md).

If you do intend to publish private packages to npmjs.com, we recommend not using scopes unless you intend to publish your packages to npmjs.com with the scope intact; if you remove the scope when transitioning the package from Package Management to npmjs.com, you'll need to update any package.json references accordingly.