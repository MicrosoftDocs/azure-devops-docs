---
title: GitHub integration overview
titleSuffix: Azure DevOps
description: Learn about Azure DevOps integration with GitHub.
ms.subservice: azure-devops-cross-service
ms.custom: cross-service
ms.topic: overview
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 03/05/2025
---
 

# About GitHub integration

[!INCLUDE [version-gt-eq-2019](../includes/version-gt-eq-2019.md)]

Azure Boards and Azure Pipelines offer multiple integration points with GitHub and GitHub Enterprise. These integrations enable seamless collaboration between development and project management, enhancing traceability, workflow efficiency, and overall productivity. By connecting your GitHub repositories with Azure DevOps, you can streamline your development processes and gain better insights into your projects.

## Authenticate and collaborate with GitHub

::: moniker range="= azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| **Sign into Azure DevOps using your GitHub credentials** | Allows users to sign in using their GitHub credentials and link their GitHub account to a Microsoft account. For more information, see [Signing into Azure DevOps using your GitHub credentials (Release Notes)](/azure/devops/release-notes/2019/build-may#signing-into-azure-devops-using-your-github-credentials). |
| **Invite GitHub collaborators into Azure DevOps** | Provides support for inviting GitHub account users to collaborate within an Azure DevOps project. For more information, see [Invite GitHub collaborators into Azure DevOps (Release Notes)](/azure/devops/release-notes/2019/sprint-155-update#invite-github-collaborators-into-azure-devops). |
| **Connect to a GitHub repository from Visual Studio** | Provides a user interface to support cloning GitHub repositories, pushing and pulling commits, and more. For more information, see [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison?view=vs-2019&&preserve-view=true). |

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| **Invite GitHub collaborators into Azure DevOps** | Provides support for inviting GitHub account users to collaborate within an Azure DevOps project. For more information, see [Invite GitHub collaborators into Azure DevOps (Release Notes)](/azure/devops/release-notes/2019/sprint-155-update#invite-github-collaborators-into-azure-devops). |
| **Connect to a GitHub repository from Visual Studio** | Provides a user interface to support cloning GitHub repositories, pushing and pulling commits, and more. For more information, see [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison?view=vs-2019&&preserve-view=true). |

::: moniker-end

## Integrate Azure Boards with GitHub

By integrating Azure Boards with GitHub repositories, you can link GitHub commits, pull requests, branches, and issues to work items. This integration allows you to use GitHub for software development while using Azure Boards to plan and track your work. To get started, see [Azure Boards-GitHub integration](../boards/github/index.md).

### Benefits of integration

- **Enhanced traceability**: Link work items to GitHub commits, pull requests, branches, and issues for better traceability.
- **Streamlined workflow**: Use GitHub for development and Azure Boards for planning and tracking, ensuring a seamless workflow.
- **Improved collaboration**: Collaborate more effectively by connecting development activities in GitHub with project management in Azure Boards.

### Features of Azure Boards and GitHub integration

| **Feature** | **Description** |
|-------------|-----------------|
| **Link work items** | Easily link work items to GitHub commits, pull requests, branches, and issues. |
| **View linked objects** | Quickly view and open linked objects from the board. |
| **Add status badges** | Add status badges of Azure Boards to a GitHub repository README file. |
| **View release summary** | Review work items linked to GitHub commits in the Release summary page. |
| **Sync GitHub issues** | Sync GitHub Issues to Azure Boards Work Items using the [GitHub Action](https://github.com/marketplace/actions/github-issues-to-azure-devops). |

## Integrate Azure Pipelines with GitHub

You can use Azure Pipelines to automatically build, test, package, release, and deploy your GitHub repository code. To get started, see [Build GitHub repositories](../pipelines/repos/github.md).

Additionally, you can map your GitHub repositories to one or more projects in Azure DevOps, enabling seamless integration and management across your development lifecycle.

### Benefits of integration

- **Automated workflows**: Automatically build, test, package, release, and deploy your GitHub repository code using Azure Pipelines.
- **Continuous integration and continuous deployment (CI/CD)**: Implement CI/CD practices to ensure that your code changes are automatically tested and deployed.
- **Seamless integration**: Map your GitHub repositories to one or more projects in Azure DevOps for seamless integration and management across your development lifecycle.
- **Enhanced collaboration**: Collaborate more effectively by linking work items to GitHub commits, pull requests, branches, and issues.
- **Improved traceability**: Achieve better traceability by reviewing work items linked to GitHub commits in the release summary page.
- **Status badges**: Add status badges of Azure Boards to a GitHub repository README file and display the build status.
- **Issue synchronization**: Sync GitHub Issues to Azure Boards work items using the GitHub Action for better issue tracking and management.

### Features of Azure Pipelines and GitHub integration

::: moniker range="= azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| **Create GitHub repository and pull request builds** | - Automatically build your GitHub pull requests. After the build is done, status is reported back with a comment in your GitHub pull request. <br> - Manually run a pipeline or test suite triggered by a GitHub pull request comment. <br> - Configure draft PR validation for GitHub repository. Supports adding `drafts` to the `pr` trigger YAML syntax for GitHub draft pull requests. You can choose if you want your draft PRs to queue a build. The default option is true (a build is queued) like it currently is for GitHub PRs. <br> - Rebuild GitHub pull request builds upon failure. Provides support for queueing a failed build. <br> - Configure draft PR validation for GitHub repositories. <br> - Automatically build pull requests from repository forks to ensure changes successfully build and tests pass before they get merged. For more information, see [Build GitHub repositories](../pipelines/repos/github.md). |
| **Create GitHub Enterprise builds** | - Supports continuous integration (CI) builds for GitHub Enterprise repositories. <br> - Create a pipeline to build code contained within a GitHub Enterprise repository using the build pipeline wizard. For more information, see [Build GitHub repositories, CI triggers](../pipelines/repos/github.md#ci-triggers). |
| **Use GitHub service connections** | The pipeline wizard automatically creates and reuses a service connection for the repository you choose. If you wish to manually choose a connection other than the one that is automatically selected, follow the **Choose connection** hyperlink. For more information, see [Build GitHub repositories](../pipelines/repos/github.md). |
| **Manage GitHub releases** | - Inline GitHub connection as a release artifact source. <br> - Automate GitHub releases using the **GitHub Release** task. <br> - Link your GitHub releases as an artifact source in release pipelines. This function lets you consume the GitHub release as part of your deployments. For more information, see [CI triggers](../pipelines/repos/github.md#ci-triggers), [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0), and [GitHub Release task](/azure/devops/pipelines/tasks/reference/github-release-v1). |
| **Use build tags to trace GitHub sources or trigger GitHub releases** | - Use build tags to trace GitHub sources to builds. While choosing a GitHub repository in a build definition, you can select the types of builds you want to tag, along with the tag format. <br> - Specify a tag pattern to determine when to trigger a GitHub release. By specifying a tag regular expression, you can control when a GitHub release is created based on the triggering commit. For more information, see [Build GitHub repositories, Label sources](../pipelines/repos/github.md#label-sources). |
| **Support GitHub packages in YAML pipelines** | In your YAML pipeline, specify a package type (NuGet or npm) that you want to consume from GitHub. For more information, see [Resources: packages](../pipelines/process/resources.md). |
| **Get status checks, tracking, and traceability** | - **GitHub Checks**: <br> - Display status for each pipeline job: Run a pipeline or test suite to validate a GitHub pull request from the comments section of the GitHub pull request. <br> - Send detailed information about the pipeline status, test, code coverage, and errors. Status is posted to GitHub Checks for each job in the pipeline. <br> - **Status badges**: Add Markdown syntax to a GitHub repo README.md file and display the pipeline status. <br> - GitHub artifacts: Show associated commits deployed in a release. To enhance traceability, you can see all the commits that were deployed to an environment for GitHub repositories, as a part of a specific release. <br> - Track GitHub commits and associated issues in releases. List commits made in GitHub repos and the associated GitHub issues that are being deployed with a release. For more information, see [Track GitHub commits and associated issues in releases (Release Notes)](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#new-build-status-badge-url). For more information, see: <br> - [Create your first pipeline, Add a status badge to your repository](../pipelines/create-first-pipeline.md#add-a-status-badge-to-your-repository) <br> - [GitHub Checks API](https://docs.github.com/en/rest/reference/checks) <br> - [Display status for each pipeline job in GitHub Checks (Release Notes)](/azure/devops/release-notes/2019/sprint-146-update#automatic-github-service-connections-in-pipelines) |

::: moniker-end

::: moniker range="< azure-devops"

| **Feature** | **Description** |
|-------------|-----------------|
| **Create GitHub repository and pull request builds** | Automatically build pull requests from repository forks to ensure changes successfully build and tests pass before they get merged. For more information, see [Build GitHub repositories](../pipelines/repos/github.md). |
| **Create GitHub Enterprise builds** | Supports continuous integration (CI) builds for GitHub Enterprise repositories. For more information, see [Build GitHub repositories, CI triggers](../pipelines/repos/github.md#ci-triggers). |
| **Use GitHub-specific tasks and utilities** | Supported tasks include [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0), [GitHub Release task](/azure/devops/pipelines/tasks/reference/github-release-v1), and [Open source Azure Pipelines tasks](https://github.com/microsoft/azure-pipelines-tasks/tree/master/Tasks). |
| **Manage GitHub releases** | Inline GitHub connection as a release artifact source. Automate GitHub releases using the **GitHub Release** task. For more information, see [CI triggers](../pipelines/repos/github.md#ci-triggers), [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0), and [GitHub Release task](/azure/devops/pipelines/tasks/reference/github-release-v1). |
| **Filter GitHub branches for GitHub, GitHub Enterprise, or external Git artifacts** | Configure the specific branches to release when you release from GitHub, GitHub Enterprise, or external Git repositories. For more information, see [Release triggers, Continuous deployment triggers](../pipelines/release/triggers.md). |
| **Use build tags to trace GitHub sources** | Use build tags to trace GitHub sources to builds. While choosing a GitHub repository in a build definition, you can select the types of builds you want to tag, along with the tag format. For more information, see [Build GitHub repositories, Label sources](../pipelines/repos/github.md#label-sources). |

::: moniker-end

## Related articles

- [Azure Boards-GitHub integration](../boards/github/index.md)  
- [Build GitHub repositories](../pipelines/repos/github.md)  
- [Git experience in Visual Studio](/visualstudio/version-control/git-with-visual-studio)
