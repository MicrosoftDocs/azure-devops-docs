---
title: What is Azure Pipelines?
ms.custom: seodec18
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.topic: overview
ms.date: 08/05/2021
monikerRange: '<= azure-devops'
---

# What is Azure Pipelines?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines automatically builds and tests code projects to make them available to others. 
It works with just about any language or project type. Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to test and build your code and ship it to any target. 

Continuous Integration (CI) is the practice used by development teams of automating merging and testing code.  Implementing CI helps to catch bugs early in the development cycle, which makes them less expensive to fix.  Automated tests execute as part of the CI process to ensure quality.  Artifacts are produced from CI systems and fed to release processes to drive frequent deployments.
::: moniker range="< azure-devops"
The Build service in [Azure DevOps Server](https://azure.microsoft.com/services/devops/server/) helps you set up and manage CI for your applications. 
::: moniker-end

Continuous Delivery (CD) is a process by which code is built, tested, and deployed to one or more test and production environments.  Deploying and testing in multiple environments increases quality.  CI systems produce deployable artifacts, including infrastructure and apps.  Automated release processes consume these artifacts to release new versions and fixes to existing systems.  Monitoring and alerting systems run continually to drive visibility into the entire CD process. 

Continuous Testing (CT) on-premises or in the cloud is the use of automated build-deploy-test workflows, with a choice of technologies and frameworks that test your changes continuously in a fast, scalable, and efficient manner.

## Version control systems

The starting point for configuring CI and CD for your applications is to have your source code in a version control system. Azure DevOps supports two forms of version control - [Git](../../repos/get-started/what-is-repos.md) and [Azure Repos](../../repos/get-started/what-is-repos.md). Any changes you push to your version control repository will be automatically built and validated. 

## Languages

You can use many languages with Azure Pipelines, including Python, Java, JavaScript, PHP, Ruby, C#, C++, and Go.


## Application types

You can use Azure Pipelines with most application types, such as Java, JavaScript, Node.js, Python, .NET, C++, Go, PHP, and XCode.

Azure DevOps has many tasks to build and test your application. For example, tasks exist to build .NET, Java, Node, Android, Xcode, and C++ applications. Similarly, there are tasks to run tests using many testing frameworks and services. You can also run command line, PowerShell, or Shell scripts in your automation.

## Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, environments, containers, on-premises and cloud platforms, or PaaS services. You can also publish your mobile application to a store.

Once you have continuous integration in place, the next step is to create a release definition to automate the deployment of your application to one or more environments. This automation process is again defined as a collection of tasks. 

## Continuous testing

Whether your app is on-premises or in the cloud, you can automate build-deploy-test workflows and choose the technologies and frameworks, then [test your changes continuously](../ecosystems/dotnet-core.md#run-your-tests) in a fast, scalable, and efficient manner. 

* Maintain quality and find problems as you develop. Continuous testing with Azure DevOps Server ensures your app still works after every check-in and build, enabling you to find problems earlier by running tests automatically with each build.
* Any test type and any test framework. Choose the test technologies and frameworks you prefer to use.
* Rich analytics and reporting. When your build is done, review your test results to start resolving the problems you find. Rich and actionable build-on-build reports 
let you instantly see if your builds are getting healthier. But it's not just about speed - detailed and customizable test results measure the quality of your app.

## Package formats

To produce packages that can be consumed by others, you can publish NuGet, npm, or Maven packages to the built-in package management repository in Azure Pipelines. You also can use any other package management repository of your choice.

## What do I need to use Azure Pipelines?

To use Azure Pipelines, complete the following tasks:

- Create or already have an organization in Azure DevOps.
- Store your source code in a version control system.
::: moniker range="< azure-devops"
- Download a [build agent](../agents/v2-windows.md) and install it on a build server.
::: moniker-end

### Pricing

#### Azure DevOps Services

If you use public projects, Azure Pipelines is free. For more information, see [What is a public project?](../../organizations/public/about-public-projects.md)
If you use private projects, you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.
For more information about how the pricing works based on [parallel jobs](../licensing/concurrent-jobs.md).
For more information, see [Pricing for Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

#### Azure DevOps Server

If you have five or less active users, [Azure DevOps Express](https://azure.microsoft.com/en-us/services/devops/server/) is free, simple to set up, and installs on both client and server operating systems. It supports all the same features as Azure DevOps Server 2019. 

For more information, see [Pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/).


## Why should I use Azure Pipelines?

Implementing CI and CD pipelines helps to ensure consistent and quality code that's readily available to users. 
And, Azure Pipelines provides a quick, easy, and safe way to automate building your projects and making them available to users.

Use Azure Pipelines because it supports the following scenarios:  

* Works with any language or platform 
* Deploys to different types of targets at the same time 
* Integrates with Azure deployments 
* Builds on Windows, Linux, or Mac machines 
* Integrates with GitHub 
* Works with open-source projects

## Next steps

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)
 
