---
title: Azure Pipelines New User Guide
titleSuffix: Azure DevOps Services
description: Learn the basics about Azure Pipelines and how to use it to automatically build and release code.
ms.prod: devops
ms.technology: devops-cicd
ms.manager: douge
ms.author: douge
ms.date: 07/06/2018
monikerRange: '>= tfs-2015'
---

# Getting started with Azure Pipelines

## What is Azure Pipelines?

Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users. It works with just about any language or project type.

Pipelines combines both **Continuous Integration (CI)** and **Continuous Deployment (CD)** to constantly and consistently test and build your code and ship it to any target. 

If you're not sure if Pipelines is right for your needs, read [Why Use Azure Pipelines?](why-use-pipelines.md).

## Does Pipelines work with my language and tools?

### Languages

You can use practically any language with Azure Pipelines, including **Python, Java, PHP, Ruby, C#, and Go.**

### Version control systems

The starting point for using CI and CD practices for your applications is to have your source code in a version control system. Pipelines supports two forms of version control: **Git and Team Foundation Version Control.**

### Application types

You can use Azure Pipelines with most application types, including **.NET, Java, Node, Android, Xcode, and C++.**

### Deployment targets

Azure Pipelines can be used to deploy your code to multiple targets, such as **virtual machines, containers, on-premises and cloud platforms, PaaS services.**

### Package formats

If your goal is to produce packages that can be consumed by others, you can publish **NuGet, npm, or Maven packages** to the built-in package management repository in Azure Pipelines or any other package management repository of your choice.

## What do I need to use Pipelines?

To use Azure Pipelines, you'll need the following:

* An Azure DevOps organization or TFS account
* Have your source code stored in a version control system (Git or TFVC)

**ELBATK NOTE:** NEED HELP HERE - what all is needed?

## How do I start using Pipelines?

If you'd like to ramp up and learn a little more about Pipelines, visit our get started guide to [using the designer](../get-started-designer.md).

If you'd like to jump in and use Pipelines with your code, check out....

## Resources