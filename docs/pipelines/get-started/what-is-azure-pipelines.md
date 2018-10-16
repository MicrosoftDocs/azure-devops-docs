---
title: What is Azure Pipelines?
titleSuffix: Azure DevOps Services
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.prod: devops
ms.technology: devops-cicd
ms.topic: overview
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: 'vsts'
---

# What is Azure Pipelines?

**Azure Pipelines**

Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users. It works with just about any language or project type.

Pipelines combines both **Continuous Integration (CI)** and **Continuous Deployment (CD)** to constantly and consistently test and build your code and ship it to any target. 

## Does Azure Pipelines work with my language and tools?

### Languages

You can use practically any language with Azure Pipelines, including **Python, Java, PHP, Ruby, C#, and Go.**

### Version control systems

The starting point for using CI and CD practices for your applications is to have your source code in a version control system. Azure Pipelines integrates with **GitHub, Azure Repos, BitBucket,** and **Subversion**.

### Application types

You can use Azure Pipelines with most application types, including **Java, JavaScript, Python, .NET, PHP, Go, XCode, and C++**.

### Deployment targets

Azure Pipelines can be used to deploy your code to multiple targets, such as **container registries, virtual machines, Azure services, or to any on-premises or cloud target.**

### Package formats

If your goal is to produce packages that can be consumed by others, you can publish **NuGet, npm, or Maven packages** to the built-in package management repository in Azure Pipelines or any other package management repository of your choice.

## What do I need to use Azure Pipelines?

To use Azure Pipelines, you'll need the following:

* An Azure DevOps organization
* Have your source code stored in a version control system

### Pricing

If you use public projects, then Azure Pipelines is free.
If you use private projects, then you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.
Learn more about how the pricing works based on [parallel jobs](../licensing/concurrent-jobs-vsts.md).

## Why use CI/CD and Azure Pipelines?
Implementing Continuous Integration (CI) and Continuous Delivery (CD) pipelines helps ensure consistent and quality code that is readily available to users.

Azure Pipelines is the quickest, easiest, and safest way to automate building your projects and making them available to users.

### Why you should use CI and CD for your project

Continous Integration is all about automating tests and builds for your project; it helps to catch bugs or problems early in the development cycle, which makes them easier and faster to fix. Items known as "artifacts" are produced from CI systems and used by the **Continuous Delivery** release pipelines to drive automatic deployments.

Continuous Delivery is all about automatically deploying and testing code in multiple stages to help drive quality. **Continuous Integration** systems produce the deployable artifacts, including infrastructure and apps, then automated release pipelines consume these artifacts to release new versions and fixes to the target of your choice. 

<br>
| Continuous Integration (CI)                    |  Continuous Delivery (CD)                      |
| -----------------------------------------------|------------------------------------------------|
| Increase code coverage                         | Automatically deploy code to production        |
| Build faster by splitting test and build runs  | Ensure deployment targets have latest code     |
| Automatically ensure you don't ship broken code| Use tested code from CI process
| Run tests continually                          |

### Why use Azure Pipelines for CI and CD

There are plenty of reasons to use Azure Pipelines for your CI/CD solution:

* Works with any language or platform
* Deploy to different types of targets at the same time
* Best integration experience for deploying to Azure
* Build on Windows, Linux, or Mac machines
* Great integration for GitHub
* Great offer for open source projects

## How do I start using Pipelines?

Check out the [Get started with Azure Pipelines guide](pipelines-get-started.md) to find out the best and easiest way to start using Azure Pipelines. 