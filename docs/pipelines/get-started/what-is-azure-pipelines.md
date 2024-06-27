---
title: What is Azure Pipelines?
description: Learn how to automatically build, test, and deploy your code with Azure Pipelines
ms.topic: overview
ms.date: 06/26/2024
monikerRange: '<= azure-devops'
---

# What is Azure Pipelines?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines is a component of Azure DevOps that automatically builds, tests, and deploys code projects. Azure Pipelines combines [continuous integration](#continuous-integration) (CI), [continuous testing](#continuous-testing), and [continuous delivery](#continuous-delivery) (CD) to build, test, and deliver your code to any destination. Azure Pipelines supports all major languages and project types.

:::image type="content" source="media/pipelines-overview.png" alt-text="Screenshot of Azure Pipelines overview.":::

## Azure Pipelines benefits

Azure Pipelines provides a quick, easy, and safe way to automate building your projects with consistent and quality code that's readily available to users.

Azure Pipelines offers the following benefits:

- Works with any language or platform
- Deploys to different types of targets at the same time
- Integrates with Azure deployments
- Builds on Windows, Linux, or Mac machines
- Integrates with GitHub
- Works with open-source projects

## Prerequisites

To use Azure Pipelines, you must:

- Have an Azure DevOps organization. If you don't have one, you can [create an organization](../../organizations/accounts/create-organization.md).
- Store your source code in a [version control system](#version-control-systems).
::: moniker range="< azure-devops"
- Download a [build agent](../agents/windows-agent.md) and install it on a build server.
::: moniker-end

## Languages and applications

Azure Pipelines offers tasks to build and test .NET, Java, Node, Android, Xcode, and C++ applications. There are tasks to run tests in many testing frameworks and services. You can also run command line, PowerShell, or shell scripts in your automation.

You can build, test, and deploy Node.js, Python, Java, PHP, Ruby, C#, C++, Go, XCode, .NET, Android, and iOS applications. You can run these apps in parallel on Linux, macOS, and Windows.

## Continuous integration

Continuous integration is a practice that development teams use to automate merging and testing code. CI helps to catch bugs early in the development cycle, making them less expensive to fix.

To ensure quality, Azure Pipelines executes automated tests as part of the CI process. Azure Pipelines CI systems produce artifacts and feed them to release processes to drive continuous deployments.

::: moniker range="< azure-devops"
The Build service in [Azure DevOps Server](https://azure.microsoft.com/services/devops/server/) helps you set up and manage CI for your applications.
::: moniker-end

### Version control systems

Azure Pipelines requires your source code to be in a version control system. Azure DevOps supports two forms of version control, [Git](../../repos/get-started/what-is-repos.md) and [Azure Repos](../../repos/get-started/what-is-repos.md). You can set up Azure Pipelines to automatically build and validate any changes you push to your version control repository.

## Continuous testing

Azure Pipelines can automate build-deploy-test workflows in your chosen technologies and frameworks, whether your app is on-premises or in the cloud. You can [test your changes continuously](../ecosystems/dotnet-core.md#run-your-tests) in a fast, scalable, and efficient manner. Continuous testing lets you:

- Maintain quality and find problems during development. You can find problems earlier by running tests automatically with each build, ensuring your app still works after every check-in and build.

- Use any test type and test framework. Choose your preferred test technologies.

- View rich analytics and reporting. When your build is done, you can review your test results to resolve any issues. Actionable build-on-build reports let you instantly see if your builds are getting healthier. Detailed and customizable test results measure the quality of your app.

## Continuous delivery

Continuous delivery is the process of building, testing, and deploying code to one or more test or production environments. Deploying and testing in multiple environments optimizes quality.

Azure Pipelines CD systems produce deployable artifacts, including infrastructure and apps. Automated release processes consume these artifacts to release new versions and fixes to existing systems. Systems that continually monitor and send alerts drive visibility into the CD process.

### Deployment targets

Use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, environments, containers, on-premises and cloud platforms, and platform-as-a-service (PaaS) services. You can also publish your mobile application to a store.

Once you have CI in place, you can create a release definition to automate the deployment of your application to one or more environments. The automation process is defined as a collection of tasks.

## Package formats

To produce packages that external users can consume, you can publish NuGet, npm, or Maven packages to the built-in Azure Pipelines package management repository. You also can use any other package management repository you choose.

## Azure Pipelines pricing

::: moniker range=">= azure-devops"
If you use public projects, Azure Pipelines is free, but you need to [request the free grant of parallel jobs](https://aka.ms/azpipelines-parallelism-request). Existing organizations and projects don't need to request this grant. For more information, see [What is a public project](../../organizations/projects/about-projects.md).

If you use private projects, you can run up to 1,800 minutes or 30 hours of pipeline jobs free every month.

For more information, see [Pricing based on parallel jobs](../licensing/concurrent-jobs.md)
and [Pricing for Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

::: moniker-end

::: moniker range="< azure-devops"
For five or fewer active users, [Azure DevOps Express](https://azure.microsoft.com/services/devops/server/) is free, simple to set up, and installs on both client and server operating systems. It supports all the same features as Azure DevOps Server 2019.

For more information, see [Pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/).

::: moniker-end

## Related content

- [Sign up for Azure Pipelines](pipelines-sign-up.md)
- [Create your first pipeline](../create-first-pipeline.md)
- [Customize your pipeline](../customize-pipeline.md)

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)
