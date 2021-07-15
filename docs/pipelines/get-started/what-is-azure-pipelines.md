---
title: What is Azure Pipelines?
ms.custom: seodec18
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.topic: overview
ms.date: 05/31/2019
monikerRange: '>= tfs-2017'
---

# What is Azure Pipelines?

[!INCLUDE [version-tfs-only-2015](../includes/version-tfs-only-2015.md)]

Azure Pipelines automatically builds and tests code projects to make them available to others. 
It works with just about any language or project type. Azure Pipelines combines continuous integration (CI) and continuous 
delivery (CD) to constantly and consistently test and build your code and ship it to any target. 

Continuous Integration (CI) is the practice used by development teams to automate the merging and testing of code.  Implementing CI helps to catch bugs early in the development cycle, which makes them less expensive to fix.  Automated tests execute as part of the CI process to ensure quality.  Artifacts are produced from CI systems and fed to release processes to drive frequent deployments. The Build service in Azure DevOps Server helps you set up and manage CI for your applications.

Continuous Delivery (CD) is a process by which code is built, tested, and deployed to one or more test and production environments.  Deploying and testing in multiple environments drives quality.  CI systems produce the deployable artifacts including infrastructure and apps.  Automated release processes consume these artifacts to release new versions and fixes to existing systems.  Monitoring and alerting systems run continually to drive visibility into the entire CD process. The Release service in Azure DevOps Server helps you set up and manage CD for your applications.

Continuous Testing (CT) on-premises or in the cloud is the use of automated build-deploy-test workflows, with a choice of technologies and frameworks, that test your changes continuously in a fast, scalable, and efficient manner.

## Version control systems

The starting point for configuring CI and CD for your applications is to have your source code in a version control system. Azure DevOps supports two forms of version control - Git and Team Foundation Version Control (TFVC). The Build service integrates with both of these version control systems. Once you have configured CI, any changes you push to your version control repository will be automatically built and validated. 

You can also manage your source code in GitHub, GitHub Enterprise, Bitbucket Cloud,  Subversion, or any other Git repository. 


## Languages
You can use many languages with Azure Pipelines, such as Python, Java, JavaScript, PHP, Ruby, C#, C++, and Go.


## Application types

You can use Azure Pipelines with most application types, such as Java, JavaScript, Node.js, Python, .NET, C++, Go, PHP, and XCode.

To configure CI, you create a pipeline definition. A pipeline definition is a representation of the automation process that you want to run to build and test your application. The automation process is defined as a collection of tasks. Azure DevOps has a number of tasks to build and test your application. For example, tasks exist to build .Net, Java, Node, Android, Xcode, and C++ applications. Similarly, there are tasks to run tests using a number of testing frameworks and services. You can also run command line, PowerShell, or Shell scripts in your automation.

## Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, containers, on-premises and cloud platforms, or PaaS services. You can also publish your mobile application to a store.

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

## Next steps

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)
 
