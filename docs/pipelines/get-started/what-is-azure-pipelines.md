---
title: What is Azure Pipelines?
ms.custom: seodec18
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.topic: overview
ms.date: 05/31/2019
monikerRange: '>= tfs-2017'
---

# What is Azure Pipelines?

[!INCLUDE [temp](../../includes/version-tfs-2017-through-vsts.md)]  

Azure Pipelines is a cloud service that you can use to automatically 
build and test your code project and make it available to other users. 
It works with just about any language or project type.

Azure Pipelines combines continuous integration (CI) and continuous 
delivery (CD) to constantly and consistently test and build your code 
and ship it to any target. 

## Does Azure Pipelines work with my language and tools?

### Languages

You can use many languages with Azure Pipelines, such as Python, Java, JavaScript, PHP, Ruby, C#, C++, and Go.

### Version control systems

Before you use continuous integration and continuous delivery practices for your applications, you must have your source code in a version control system. Azure Pipelines integrates with GitHub, GitHub Enterprise, Azure Repos Git & TFVC, Bitbucket Cloud, and Subversion.

### Application types

You can use Azure Pipelines with most application types, such as Java, JavaScript, Node.js, Python, .NET, C++, Go, PHP, and XCode.

### Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include container registries, virtual machines, Azure services, or any on-premises or cloud target.

### Package formats

To produce packages that can be consumed by others, you can publish NuGet, npm, or Maven packages to the built-in package management repository in Azure Pipelines. You also can use any other package management repository of your choice.

## What do I need to use Azure Pipelines?

To use Azure Pipelines, you need:

* An organization in Azure DevOps.
* To have your source code stored in a version control system.

### Pricing

If you use public projects, Azure Pipelines is free. To learn more, see [What is a public project?](../../organizations/public/about-public-projects.md)
If you use private projects, you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.
Learn more about how the pricing works based on [parallel jobs](../licensing/concurrent-jobs.md).

## Why should I use Azure Pipelines?

Implementing CI and CD pipelines helps to ensure consistent and quality code that's readily available to users. 
And, Azure Pipelines provides a quick, easy, and safe way to automate building your projects and making them available to users.

Use Azure Pipelines because it supports the following scenarios:  

* Works with any language or platform 
* Deploys to different types of targets at the same time 
* Integrates with Azure deployments 
* Builds on Windows, Linux, or Mac machines 
* Integrates with GitHub 
* Works with open-source projects.

## Try this next

> [!div class="nextstepaction"]
> [Get started with Azure Pipelines guide](pipelines-get-started.md)

 
