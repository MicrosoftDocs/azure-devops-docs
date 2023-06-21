---
title: What is Azure Pipelines?
ms.custom: seodec18
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.topic: overview
ms.date: 04/12/2023
monikerRange: '<= azure-devops'
---

# What is Azure Pipelines?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines automatically builds and tests code projects. It supports all major languages and project types and combines [continuous integration](#continuous-integration), [continuous delivery](#continuous-delivery), and [continuous testing](#continuous-testing) to build, test, and deliver your code to any destination.

:::image type="content" source="media/pipelines-overview.png" alt-text="Screenshot of Azure Pipelines overview.":::

## Continuous Integration

Continuous Integration (CI) is the practice used by development teams of automating, merging, and testing code. CI helps to catch bugs early in the development cycle, which makes them less expensive to fix. Automated tests execute as part of the CI process to ensure quality. CI systems produce artifacts and feed them to release processes to drive frequent deployments.
::: moniker range="< azure-devops"
The Build service in [Azure DevOps Server](https://azure.microsoft.com/services/devops/server/) helps you set up and manage CI for your applications. 
::: moniker-end

## Continuous Delivery

Continuous Delivery (CD) is a process by which code is built, tested, and deployed to one or more test and production environments. Deploying and testing in multiple environments increases quality.  CD systems produce deployable artifacts, including infrastructure and apps. Automated release processes consume these artifacts to release new versions and fixes to existing systems. Systems that monitor and send alerts run continually to drive visibility into the entire CD process. 

## Continuous Testing

Whether your app is on-premises or in the cloud, you can automate build-deploy-test workflows and choose the technologies and frameworks. Then, you can [test your changes continuously](../ecosystems/dotnet-core.md#run-your-tests) in a fast, scalable, and efficient manner. Continuous testing offers the following benefits.

* Maintain quality and find problems as you develop. Continuous testing with Azure DevOps Server ensures your app still works after every check-in and build, enabling you to find problems earlier by running tests automatically with each build.
* Use any test type and any test framework. Choose your preferred test technologies and frameworks.
* View rich analytics and reporting. When your build is done, review your test results to resolve any issues. Actionable build-on-build reports let you instantly see if your builds are getting healthier. But it's not just about speed - detailed and customizable test results measure the quality of your app.

## Version control systems

Azure Pipelines requires your source code to be in a version control system. Azure DevOps supports two forms of version control - [Git](../../repos/get-started/what-is-repos.md) and [Azure Repos](../../repos/get-started/what-is-repos.md). Any changes you push to your version control repository are automatically built and validated. 

## Languages and applications

You can build, test, and deploy Node.js, Python, Java, PHP, Ruby, C#, C++, Go, XCode, .NET, Android, and iOS applications. Run these apps in parallel on Linux, macOS, and Windows.

Azure DevOps offers tasks to build and test .NET, Java, Node, Android, Xcode, and C++ applications. Similarly, there are tasks to run tests using many testing frameworks and services. You can also run command line, PowerShell, or Shell scripts in your automation.

## Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, environments, containers, on-premises and cloud platforms, or PaaS services. You can also publish your mobile application to a store.

Once you have continuous integration in place, create a release definition to automate the deployment of your application to one or more environments. This automation process is defined as a collection of tasks.

## Package formats

To produce packages that can be consumed by others, you can publish NuGet, npm, or Maven packages to the built-in package management repository in Azure Pipelines. You also can use any other package management repository of your choice.

## What do I need to use Azure Pipelines?

To use Azure Pipelines, complete the following tasks:

- Have an organization in Azure DevOps. If you don't have one, [create an organization](../../organizations/accounts/create-organization.md) now.
- Store your source code in a [version control system](#version-control-systems).
::: moniker range="< azure-devops"
- Download a [build agent](../agents/windows-agent.md) and install it on a build server.
::: moniker-end

### Pricing for Azure DevOps

**Azure DevOps Services**

If you use public projects, Azure Pipelines is free, but you will need to request the free grant of parallel jobs. You can request this grant by submitting a [request](https://aka.ms/azpipelines-parallelism-request). Existing organizations and projects are not affected.

For more information, see [What is a public project](../../organizations/projects/about-projects.md). 
If you use private projects, you can run up to 1,800 minutes (30 hours) of pipeline jobs for free every month.

For more information, see [Pricing based on parallel jobs](../licensing/concurrent-jobs.md)
and [Pricing for Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

**Azure DevOps Server**

With five or less active users, [Azure DevOps Express](https://azure.microsoft.com/services/devops/server/) is free, simple to set up, and installs on both client and server operating systems. It supports all the same features as Azure DevOps Server 2019. 

For more information, see [Pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/).

## Why should I use Azure Pipelines?

Azure Pipelines provides a quick, easy, and safe way to automate building your projects with consistent and quality code that's readily available to users.

Use Azure Pipelines to support the following scenarios:  

* Works with any language or platform 
* Deploys to different types of targets at the same time 
* Integrates with Azure deployments 
* Builds on Windows, Linux, or Mac machines 
* Integrates with GitHub 
* Works with open-source projects

## Next steps

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)

## Related articles

- [Sign up for Azure Pipelines](pipelines-sign-up.md)
- [Create your first pipeline](../create-first-pipeline.md)
- [Customize your pipeline](../customize-pipeline.md)
