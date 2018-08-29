---
title: What is Azure Pipelines?
titleSuffix: Azure DevOps Services
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: '>= tfs-2015'
---

# What is Azure Pipelines?

Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users. It works with just about any language or project type.

Pipelines combines both **Continuous Integration (CI)** and **Continuous Deployment (CD)** to constantly and consistently test and build your code and ship it to any target. 

If you're not sure if Pipelines is right for your needs, read [Why Use Azure Pipelines?](why-use-pipelines.md).

## Does Pipelines work with my language and tools?

### Languages

You can use practically any language with Azure Pipelines, including **Python, Java, PHP, Ruby, C#, and Go.**

### Version control systems

The starting point for using CI and CD practices for your applications is to have your source code in a version control system. Azure Pipelines supports two forms of version control: **Git** and **Team Foundation Version Control**, and integrates with **GitHub, Azure Repos, BitBucket,** and **Subversion**.

### Application types

You can use Azure Pipelines with most application types, including **Java, JavaScript, Python, .NET, PHP, Go, XCode, and C++**

### Deployment targets

Azure Pipelines can be used to deploy your code to multiple targets, such as **container registries, virtual machines, Azure services, or to any on-premises or cloud target.**

### Package formats

If your goal is to produce packages that can be consumed by others, you can publish **NuGet, npm, or Maven packages** to the built-in package management repository in Azure Pipelines or any other package management repository of your choice.

## What do I need to use Pipelines?

To use Azure Pipelines, you'll need the following:

* An Azure DevOps organization or TFS account
* Have your source code stored in a version control system (Git or TFVC)

### Pricing

If you use public projects, then Azure Pipelines is free. If you use private projects, then you can run up to 30 hours of pipeline jobs for free every month. Learn more about how the pricing works based on [parallel jobs](../licensing/concurrent-jobs-vsts.md).

## How do I start using Pipelines?

Check out the [Get started with Azure Pipelines guide](pipelines-get-started.md) to find out the best and easiest way to start using Azure Pipelines. 

## Resources