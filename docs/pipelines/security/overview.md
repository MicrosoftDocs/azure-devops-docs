---
title: Securing Azure Pipelines
description: Guidelines and recommendations for securing pipelines.
ms.assetid: 1ef377e9-e684-4e72-8486-a42d754761ac
ms.reviewer: vijayma
ms.date: 01/24/2023
monikerRange: '> azure-devops-2019'
---

# Securing Azure Pipelines

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Pipelines poses unique security challenges.
You can use a pipeline to run scripts or deploy code to production environments.
But you want to ensure your CI/CD pipelines don't become avenues to run malicious code.
You also want to ensure only code you intend to deploy is deployed.
Security must be balanced with giving teams the flexibility and power they need to run their own pipelines.

> [!NOTE]
> Azure Pipelines is one among a collection of Azure DevOps Services, all built on the same secure infrastructure in Azure.
> To understand the main concepts around security for all of Azure DevOps Services, see [Azure DevOps Data Protection Overview](../../organizations/security/data-protection.md) and [Azure DevOps Security and Identity](../../organizations/security/about-security-identity.md).

Traditionally, organizations implemented security through draconian lock-downs.
Code, pipelines, and production environments had severe restrictions on access and use.
In small organizations with a few users and projects, this stance was relatively easy to manage.
However, that's not the case in larger organizations.
Where many users have contributor access to code, one must "assume breach".
Assuming breach means behaving as if an adversary has contributor access to some (if not all) of the repositories.

The goal in this case is to prevent that adversary from running malicious code in the pipeline.
Malicious code may steal secrets or corrupt production environments.
Another goal is to prevent lateral exposure to other projects, pipelines, and repositories from the compromised pipeline.

YAML pipelines offer the best security for your Azure Pipelines. In contrast to classic build and release pipelines, YAML pipelines:

* _Can be code reviewed_. YAML pipelines are no different from any other piece of code. You can prevent malicious actors from introducing malicious steps in your pipelines by enforcing the use of Pull Requests to merge changes. [Branch policies](../../repos/git/branch-policies-overview.md) make it easy for you to set this up.
* _Provide resource access management_. Resource owners decide if a YAML pipeline can access a resource or not. This security feature control attacks like [stealing another repository](https://devblogs.microsoft.com/devops/pipeline-stealing-another-repo/). [Approvals and checks](../process/approvals.md) provide access control for _each_ pipeline run.
* _Support runtime parameters_. [Runtime parameters](../process/runtime-parameters.md) help you avoid a host of security issues related to variables, such as [Argument Injection](https://devblogs.microsoft.com/devops/pipeline-argument-injection/).

This series of articles outlines recommendations to help you put together a secure YAML-based CI/CD pipeline.
It also covers the places where you can make trade-offs between security and flexibility.
The series also assumes familiarity with [Azure Pipelines](../get-started/what-is-azure-pipelines.md), the core [Azure DevOps security constructs](../../organizations/security/about-security-identity.md), and [Git](https://git-scm.com).


Topics covered:
- [Incremental approach to improving security](approach.md)
- [Repository protection](repos.md)
- [Secure access to repositories](secure-access-to-repos.md)
- [Pipeline resources](resources.md)
- [Project structure](projects.md)
- [Security through templates](templates.md)
- [Variables and parameters](inputs.md)
- [Shared infrastructure](infrastructure.md)
- [Other security considerations](misc.md)
