---
title: What is Azure Pipelines?
ms.custom: seodec18
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.topic: overview
ms.manager: jillfra
ms.manager: elbatk
ms.date: 07/06/2018
monikerRange: 'azure-devops'
---

# What is Azure Pipelines?

**Azure Pipelines**

Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users. It works with just about any language or project type.

Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to constantly and consistently test and build your code and ship it to any target. 

## Does Azure Pipelines work with my language and tools?

### Languages

You can use many languages with Azure Pipelines, such as Python, Java, PHP, Ruby, C#, and Go.

### Version control systems

Before you use continuous integration and continuous delivery practices for your applications, you must have your source code in a version control system. Azure Pipelines integrates with GitHub, GitHub Enterprise, Azure Repos, Bitbucket Cloud, and Subversion.

### Application types

You can use Azure Pipelines with most application types, such as Java, JavaScript, Python, .NET, PHP, Go, Xcode, and C++.

### Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include container registries, virtual machines, Azure services, or any on-premises or cloud target.

### Package formats

To produce packages that can be consumed by others, you can publish NuGet, npm, or Maven packages to the built-in package management repository in Azure Pipelines. You also can use any other package management repository of your choice.

## What do I need to use Azure Pipelines?

To use Azure Pipelines, you need:

* An organization in Azure DevOps.
* To have your source code stored in a version control system.

### Pricing

If you use public projects, Azure Pipelines is free.
If you use private projects, you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.
Learn more about how the pricing works based on [parallel jobs](../licensing/concurrent-jobs.md).

## Why should I use CI and CD and Azure Pipelines?
Implementing CI and CD pipelines helps to ensure consistent and quality code that's readily available to users.

Azure Pipelines is a quick, easy, and safe way to automate building your projects and making them available to users.

### Use CI and CD for your project

Continuous integration is used to automate tests and builds for your project. CI helps to catch bugs or issues early in the development cycle, when they're easier and faster to fix. Items known as artifacts are produced from CI systems. They're used by the continuous delivery release pipelines to drive automatic deployments.

Continuous delivery is used to automatically deploy and test code in multiple stages to help drive quality. Continuous integration systems produce deployable artifacts, which includes infrastructure and apps. Automated release pipelines consume these artifacts to release new versions and fixes to the target of your choice. 

<br>
| Continuous integration (CI)                    |  Continuous delivery (CD)                      |
| -----------------------------------------------|------------------------------------------------|
| Increase code coverage.                         | Automatically deploy code to production.        |
| Build faster by splitting test and build runs.  | Ensure deployment targets have latest code.     |
| Automatically ensure you don't ship broken code.| Use tested code from CI process.
| Run tests continually.                          |

### Use Azure Pipelines for CI and CD

There are several reasons to use Azure Pipelines for your CI and CD solution. You can use it to:

* Work with any language or platform.
* Deploy to different types of targets at the same time.
* Integrate with Azure deployments.
* Build on Windows, Linux, or Mac machines.
* Integrate with GitHub.
* Work with open-source projects.

## How do I get started with Azure Pipelines?

To find out the best and easiest way to get started with Azure Pipelines, see the [Get started with Azure Pipelines guide](pipelines-get-started.md). 