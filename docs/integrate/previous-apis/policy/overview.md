---
title: Policy Overview | REST API Reference for Team Foundation Server
description: Work with policies programmatically using the REST APIs for Team Foundation Server.
ms.assetid: c7fc7c92-075e-4bfc-8b66-9a9a5f28bdbd
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

If you haven’t already, look at the information on getting started with these APIs and our documentation on [branch policies](https://go.microsoft.com/fwlink/?LinkID=615252). Use these APIs to define policies for your projects. 
[Configurations](./configurations.md) associate a [type](./types.md), such as "Required reviewers", with specific [settings](./settings.md), such as  "For pull requests with files named *.dll targeting the master branch in the Fabrikam Git repository, add the Source-Controlled Binaries Team as a required reviewer". 

![policy resources](./_img/policy-resources.png)

* [Types](./types.md)
* [Configurations](configurations.md)
    * [Type-specific settings](./settings.md)

## Common tasks

### Get a list of policy configurations

* Get the available [policy types](./types.md) for an organization. 
* Get the [policy configurations](./configurations.md) for a project.
