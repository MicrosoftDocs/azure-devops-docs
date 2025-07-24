---
title: What is Azure Pipelines?
description: Learn how Azure Pipelines can use continuous integration, testing, and delivery to automatically build, test, and deploy your code.
ms.topic: overview
ms.date: 07/24/2025
monikerRange: '<= azure-devops'
# customer intent: As a developer, I want to learn about Azure Pipelines capabilities so I can automatically build, test, and deliver my code.

---

# What is Azure Pipelines?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines is the part of Azure DevOps that automatically builds, tests, and deploys code projects. Azure Pipelines combines [continuous integration](#continuous-integration), [continuous testing](#continuous-testing), and [continuous delivery](#continuous-delivery) to build, test, and deliver your code to any destination. Azure Pipelines supports all major languages and project types.

:::image type="content" source="media/pipelines-overview.png" alt-text="Screenshot of Azure Pipelines overview.":::

## Azure Pipelines benefits

Azure Pipelines provides a quick, easy, and safe way to automate building your projects with consistent and quality code that's readily available to users.

Azure Pipelines offers the following benefits:

- Can deploy to different types of targets at the same time.
- Integrates with Azure deployments.
- Integrates with GitHub.
- Works with any language or platform.
- Works on Windows, Linux, or Mac machines.
- Works with open-source projects.

## Prerequisites

To use Azure Pipelines, you must:

- Have an Azure DevOps organization. If you don't have one, [create an organization](../../organizations/accounts/create-organization.md).
- Store your source code in a [version control system](#version-control-systems).
::: moniker range="< azure-devops"
- Download a [build agent](../agents/windows-agent.md) and install it on a build server.
::: moniker-end

## Languages and applications

Azure Pipelines offers tasks to build, test, and deploy Node.js, Python, Java, PHP, Ruby, C#, C++, Go, XCode, .NET, Android, and iOS applications. You can run these apps in parallel on Linux, macOS, and Windows.

There are tasks to run tests in many testing frameworks and services. You can run command line, PowerShell, or shell scripts in your automation.

## Continuous integration

Development teams use CI to automate merging and testing code. CI helps to catch bugs early in the development cycle so they're less expensive to fix.

To ensure quality, Azure Pipelines runs automated tests as part of the CI process. Azure Pipelines CI systems produce artifacts and feed them to release processes to drive continuous deployments.

::: moniker range="< azure-devops"
The [Azure DevOps Server](https://azure.microsoft.com/services/devops/server/) Build service helps you set up and manage CI for your applications.
::: moniker-end

### Version control systems

Azure Pipelines requires your source code to be in a version control system. Azure Pipelines supports several forms of version control, including [Azure Repos Git, GitHub, and TFVC](../repos/index.md). You can set up Azure Pipelines to automatically build and validate changes you push to your version control repository.

## Continuous testing

Azure Pipelines can automate build-test-deploy workflows in your chosen technologies and frameworks, whether your app is on-premises or in the cloud. You can [test your changes continuously](../ecosystems/dotnet-core.md#run-your-tests) in a fast, scalable, and efficient manner. Continuous testing lets you:

- Maintain quality and find problems during development. You can find problems earlier by running tests automatically with each build, ensuring your app still works after every checkin.

- Use any test type and test framework. Choose your preferred test technologies.

- View rich analytics and reporting. When your build is done, you can review your test results to resolve any issues. Actionable build-on-build reports let you see if your builds are getting healthier. Detailed and customizable test results measure the quality of your app.

## Continuous delivery

Continuous delivery (CD) is the process of building, testing, and deploying code to one or more test or production environments. Deploying and testing in multiple environments optimizes quality.

Azure Pipelines CD systems produce deployable artifacts, including infrastructure and apps. Automated release processes consume these artifacts to release new versions and fixes to existing systems. Systems that continually monitor and send alerts drive visibility into the CD process.

### Deployment targets

You can use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, environments, containers, on-premises and cloud platforms, and platform-as-a-service (PaaS) services. You can also publish your mobile application to a store.

Once you have CI running, you can create release definitions to automate deploying your application to one or more environments. You define the automation process as a collection of tasks.

## Package formats

To produce packages that external users can consume, you can integrate package management into your CI/CD pipelines. You can publish NuGet, npm, Maven, or Python package artifacts to the built-in Azure Pipelines package management repository, or to any other package management repository you choose. For more information about Azure Artifacts, see [Artifacts in Azure Pipelines](../artifacts/artifacts-overview.md).

## Azure Pipelines pricing

::: moniker range=">= azure-devops"

Azure DevOps grants every organization a free tier of parallel jobs for both Microsoft-hosted and self-hosted private and public projects. For private projects, the free tier provides one parallel job that can take up to 60 minutes to run, up to 1,800 minutes per month. For public projects, the free grant provides one parallel job with unlimited minutes for self-hosted agents, or up to 10 parallel jobs for Microsoft-hosted projects.

For new Azure DevOps organizations, public projects and some private projects don't automatically get this free grant of parallel jobs by default. In that case, you need to request the free grant of parallel jobs by completing the [Azure DevOps Parallelism Request](https://aka.ms/azpipelines-parallelism-request). The request can take several business days to process.

If the free tier of parallel jobs isn't sufficient for your project, you can purchase more capacity per parallel job or [buy more parallel jobs](../licensing/concurrent-jobs.md?tabs=self-hosted#how-do-i-buy-more-parallel-jobs). Paid parallel jobs can take up to 360 minutes to run and have no monthly time limit.

For more information, see:
- [Use private and public projects](../../organizations/projects/about-projects.md#use-private-and-public-projects)
- [Configure and pay for parallel jobs](../licensing/concurrent-jobs.md)
- [Pricing for Azure DevOps](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)

::: moniker-end

::: moniker range="< azure-devops"
For five or fewer active users, [Azure DevOps Express](https://azure.microsoft.com/services/devops/server/) supports all the same features as Azure DevOps Server. Azure DevOps Express is free, simple to set up, and installs on both client and server operating systems.

For more information, see [Pricing for Azure DevOps Server](https://azure.microsoft.com/pricing/details/devops/server/).

::: moniker-end

## Related content

- [Sign up for Azure Pipelines](pipelines-sign-up.md)
- [Create your first pipeline](../create-first-pipeline.md)
- [Customize your pipeline](../customize-pipeline.md)

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)
