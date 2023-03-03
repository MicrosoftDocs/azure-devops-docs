---
title: Enable and add upstream sources to a public feed
description: How to enable and add upstream sources to a public feed in Azure Artifacts
ms.service: azure-devops-artifacts
ms.topic: tutorial
ms.date: 03/02/2023
monikerRange: '<= azure-devops'
---

# Use upstream sources in a public feed

Azure Artifacts enables developers to manage their dependencies from a single feed. Using upstream sources, you can consume packages from feeds and public registries such as NuGet.org, and npmjs.com. Packages saved from upstreams are scanned for vulnerabilities to ensure that they are safe and comply with security policies. If a vulnerability is found, the package is flagged as "vulnerable" and a notification is sent to the feed owner(s).  

In this article, you will learn how to:

> [!div class="checklist"]
>
> - Create a public feed 
> - Enable upstream sources
> - Add a new upstream source



