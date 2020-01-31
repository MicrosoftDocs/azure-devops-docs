---
title: Securing Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.manager: mijacobs
ms.author: jukullam
ms.reviewer: macoope
ms.date: 1/31/2020
monikerRange: '> azure-devops-2019'
---

Azure Pipelines service poses unique security challenges, as you can use a pipeline to run scripts or deploy code to production environments.
You want to ensure that your CI/CD pipelines do not become avenues to run malicious code.
You also want to ensure that only code you intend to deploy is deployed.
This must be balanced with giving teams the flexibility and power they need to run their own pipelines.

> [!NOTE]
> Azure Pipelines is one among a collection of Azure DevOps services, all built on the same secure infrastructure in Azure.
> To understand the main concepts around security for all of Azure DevOps services, see [Azure DevOps Data Protection Overview](../../organizations/security/data-protection.md) and [Azure DevOps Security and Identity](../../organizations/security/about-security-identity.md).

One way for organizations to secure their code, pipelines, and production environments is to have severe restrictions and policies on who can access those assets.
In small organizations with one or two projects and a small number of users, this is relatively easy to manage.
However, that is not the case with larger organizations where many users have contributor access to code.
One must operate under the assumption that an adversary may have gained contributor access to some (if not all) of the repositories.
The goal in this case is to prevent that adversary from running malicious code in the pipeline, which can in turn steal secrets or corrupt production environments.
Another goal is to prevent lateral exposure to other projects, pipelines, and repositories from the compromised pipeline.

This series of topics outlines recommendations to help you put together a secure YAML-based CI/CD pipeline.
It also covers the places where you can make trade-offs between security and flexibility.
They assume familiarity with [Azure Pipelines](../overview.md), the core [Azure DevOps security constructs](../../organizations/security/about-security-identity.md), and [Git](https://git-scm.com).

Topics covered:
- [Project structure](projects.md)
- [Repository protection](repos.md)
- [Protected resources](resources.md)
- [Security through templates](templates.md)
- [Variables and parameters](inputs.md)
- [Shared infrastructure](infrastructure.md)
- [Other security considerations](misc.md)
