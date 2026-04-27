---
title: What is Azure Pipelines?
description: Learn how Azure Pipelines can use continuous integration, testing, and delivery to automatically build, test, and deploy your code.
ms.topic: overview
ms.date: 03/10/2026
ms.custom: copilot-scenario-highlight
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
# customer intent: As a developer, I want to learn about Azure Pipelines capabilities so I can automatically build, test, and deliver my code.

---

# What is Azure Pipelines?

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines is the part of Azure DevOps that combines [continuous integration](#continuous-integration), [continuous testing](#continuous-testing), and [continuous delivery](#continuous-delivery) to automatically build, test, and deploy code projects to any destination. Azure Pipelines supports all major languages and project types, and can automate workflows in your chosen technologies and frameworks whether your app is on-premises or in the cloud.

:::image type="content" source="media/pipelines-overview.png" alt-text="Screenshot of Azure Pipelines overview.":::

## Azure Pipelines benefits

Azure Pipelines provides a quick, easy, and safe way to automate building your projects with consistent, high-quality, readily available code.

Azure Pipelines offers the following benefits:

- Deploys to different types of targets simultaneously
- Integrates with Azure deployments
- Integrates with GitHub
- Works with any language or platform
- Works on Windows, Linux, or Mac machines
- Works with open-source projects

## Prerequisites

[!INCLUDE [ai-assistance](../../includes/ai-assistance-mcp-server-tip.md)]

To use Azure Pipelines, you must:

- Have an Azure DevOps organization. If you don't have one, [create an organization](../../organizations/accounts/create-organization.md).
- Store your source code in a [version control system](#version-control-systems).
::: moniker range="< azure-devops"
- Download a [build agent](../agents/windows-agent.md) and install it on a build server.
::: moniker-end

## Languages and applications

Azure Pipelines tasks can build, test, and deploy applications written in Node.js, Python, Java, PHP, Ruby, C#, C++, Go, XCode, .NET, Android, and iOS. You can run these apps in parallel on Linux, macOS, and Windows.

Azure Pipelines offers test tasks in many different testing frameworks and services. You can use command line, PowerShell, or Bash shell scripts to run your automation.

## Continuous integration

Development teams use CI to automate merging and testing code. The CI process helps to catch bugs early in the development cycle so they're easier to fix.

To help preserve quality, Azure Pipelines runs automated tests as part of the CI process. Azure Pipelines CI systems produce artifacts and feed them to release processes to drive continuous deployments.

::: moniker range="< azure-devops"
The [Azure DevOps Server](https://azure.microsoft.com/services/devops/server/) Build service helps you set up and manage CI for your applications.
::: moniker-end

### Version control systems

Azure Pipelines requires source code to be in a version control system. You can set up Azure Pipelines to automatically build and validate changes you push to your version control repository.

Azure Pipelines supports several forms of version control, including GitHub and Azure Repos. For more information, see [Supported source repositories](../repos/index.md).

## Continuous testing

Azure Pipelines continuous testing lets you:

- Use any test type and test framework in your preferred test technologies.
- Test your changes in a fast, scalable, and efficient manner.
- Find problems earlier during development. Running tests automatically with each build ensures that your app still works after every checkin.
- View rich analytics and reporting. Review detailed, customizable test results to resolve issues and monitor the quality of your app. Track the health of your builds with actionable build-on-build reports.

For more information, see [Run tests in parallel for any test runner](../test/parallel-testing-any-test-runner.md).

## Continuous delivery

Continuous delivery (CD) is the process of building, testing, and deploying code to one or more test or production environments. Deploying and testing in multiple environments optimizes quality.

Azure Pipelines CD produces deployable artifacts, including infrastructure and apps. Automated release processes consume these artifacts to release new versions or fixes to existing systems. Systems that continually monitor and send alerts allow visibility into the CD process.

### Deployment targets

You can use Azure Pipelines to deploy your code to multiple targets. Targets include virtual machines, environments, containers, on-premises and cloud platforms, and platform-as-a-service (PaaS) services. You can also publish your mobile application to a store.

Once you have CI running, you can create release definitions to automate deploying your application to one or more environments as a collection of tasks.

## Package formats

To produce packages that external users can consume, you can integrate package management into your CI/CD pipelines. You can publish NuGet, npm, Maven, or Python package artifacts to the built-in Azure Pipelines package management repository, or to any other package management repository you choose. For more information about Azure Artifacts, see [Artifacts in Azure Pipelines](../artifacts/artifacts-overview.md).

## Azure Pipelines pricing

::: moniker range=">= azure-devops"

Azure DevOps grants a free tier of parallel jobs to every organization for both Microsoft-hosted and self-hosted private and public projects. For private projects, the free tier provides one parallel job that can take up to 60 minutes to run, up to 1,800 minutes per month. For public projects, the free grant provides one parallel job with unlimited minutes for self-hosted agents, or up to 10 parallel jobs for Microsoft-hosted projects.

Public projects and some private projects in new Azure DevOps organizations don't automatically get the free grant of parallel jobs by default. You need to request the free grant of parallel jobs by completing the [Azure DevOps Parallelism Request](https://aka.ms/azpipelines-parallelism-request). The request can take several business days to process.

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

<a id="use-ai-assistance"></a>

## Use AI to manage pipelines

If you configure the [Azure DevOps MCP Server](../../mcp-server/mcp-server-overview.md), you can explore and manage your pipelines using natural language.

| Task | Example prompt |
|------|----------------|
| List pipelines in a project | `Show all pipelines in project <Contoso>` |
| Check recent build status | `Show the last 10 pipeline runs in project <Contoso> and whether they passed or failed` |
| Find failed builds | `Which pipelines failed in the last 24 hours in project <Contoso>?` |
| View deployment history | `Show recent deployments to the production environment in <Contoso>` |
| Check agent availability | `List available agents and their status in project <Contoso>` |
| Review pipeline artifacts | `What artifacts were published by the latest run of "CI-Main" in <Contoso>?` |
| Inspect test results | `Show test results for the latest run of pipeline "Build-API" in <Contoso>` |
| Compare pipeline runs | `Compare the last successful run with the last failed run of "CI-Main" in <Contoso>` |
| Check parallel job usage | `How many parallel jobs are in use in organization <Contoso>?` |
| Find long-running pipelines | `Which pipelines in project <Contoso> have the longest average run time?` |

> [!TIP]
> If you're using Visual Studio Code, [agent mode](/visualstudio/ide/copilot-chat-context#agent-mode) is especially helpful for exploring pipeline status and troubleshooting build failures.

## Related content

- [Sign up for Azure Pipelines](pipelines-sign-up.md)
- [Create your first pipeline](../create-first-pipeline.md)
- [Customize your pipeline](../customize-pipeline.md)

> [!div class="nextstepaction"]
> [Use Azure Pipelines](pipelines-get-started.md)
