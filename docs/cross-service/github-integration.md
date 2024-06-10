---
title: GitHub integration overview
titleSuffix: Azure DevOps
description: Learn about Azure DevOps integration with GitHub.
ms.subservice: azure-devops-cross-service
ms.custom: cross-service
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 10/10/2023
---
 

# GitHub integration overview

[!INCLUDE [version-gt-eq-2019](../includes/version-gt-eq-2019.md)]

Azure Boards and Azure Pipelines provide several integration points with GitHub and GitHub Enterprise.
 
## Sign-in with GitHub credentials 

Azure DevOps simplifies deployment from your repository with seamless access to the Azure portal and Azure DevOps using your GitHub account credentials.

 
---
:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      Invite GitHub collaborators into Azure DevOps
   :::column-end::: 
   :::column span="2":::
      Provides support for inviting GitHub account users to collaborate within an Azure DevOps project. For more information, see [Invite GitHub collaborators into Azure DevOps (Release Notes)](/azure/devops/release-notes/2019/sprint-155-update#invite-github-collaborators-into-azure-devops). <!---[Add users or groups to a team or project](..//organizations/security/add-users-team-project.md). -->
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Sign into Azure DevOps using your GitHub credentials
   :::column-end::: 
   :::column span="2":::
      Allows users to sign in using their GitHub credentials and link their GitHub account to a Microsoft account. For more information, see [Signing into Azure DevOps using your GitHub credentials (Release Notes)](/azure/devops/release-notes/2019/build-may#signing-into-azure-devops-using-your-github-credentials).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      Connect to a GitHub repository from Visual Studio 
   :::column-end::: 
   :::column span="2":::
      Provides a user interface to support cloning GitHub repositories, pushing and pulling commits, and more. For more information, see [Side-by-side comparison of Git and Team Explorer](/visualstudio/version-control/git-team-explorer-feature-comparison?view=vs-2019&&preserve-view=true). 
   :::column-end:::
:::row-end:::
 

## Azure Boards and GitHub integration

By connecting Azure Boards with GitHub repositories, you enable linking between GitHub commits, pull requests, and issues to work items. You can use GitHub for software development while using Azure Boards to plan and track your work. To get started, see [Azure Boards-GitHub integration](../boards/github/index.md).

---
:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Connect Azure Boards project to GitHub repos  
   :::column-end::: 
   :::column span="2":::
      Supports establishing connection of one or more GitHub repositories to an Azure Boards project.
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Connect Azure Boards project to repositories hosted in a GitHub Enterprise Server instance  
   :::column-end::: 
   :::column span="2":::
      Supports establishing connection of one or more GitHub repositories hosted in a GitHub Enterprise Server.
   :::column-end:::
:::row-end:::
---
::: moniker-end 
:::row:::
   :::column span="1":::
      Link work items to GitHub commits, pull requests, and issues. Quickly view and open linked objects from the board. 
   :::column-end::: 
   :::column span="2":::
      Supports [linking GitHub commits, pull requests, and issues to Azure Boards work items](../boards/github/link-to-from-github.md). Mentioned work items in GitHub comments are configured as hyperlinks to support quick navigation to Azure Boards work items.   
      :::image type="content" source="media/overview/development-control-plus-github.png" alt-text="Screenshot of Development control for GitHub."::: 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Add status badges of Azure Boards to a GitHub repository README file. 
   :::column-end::: 
   :::column span="2":::
      Supports adding Markdown syntax to a GitHub repo README.md file to display the status of a board. For more information, see [Configure status badges to add to GitHub README files](../boards/github/configure-status-badges.md).   
      :::image type="content" source="../boards/github/media/badges/custom-columns.png" alt-text="Screenshot of GitHub status badge.":::   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Work items linked to GitHub commit in Release Summary
   :::column-end::: 
   :::column span="2":::
      Review list of all work items linked to GitHub commits in the Release summary page, which helps teams track and retrieve more information about the commits that have been deployed to an environment.   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Sync GitHub Issues to Azure Boards Work Items
   :::column-end::: 
   :::column span="2":::
      Using the [GitHub Action, GitHub Issues to Azure DevOps](https://github.com/marketplace/actions/github-issues-to-azure-devops) you can sync your GitHub Issues to your Azure Boards. For more information, see [Sync GitHub Issues to Azure DevOps Work Items (Release Notes)](/azure/devops/release-notes/2020/sprint-167-update#sync-github-issues-to-azure-devops-work-items). 
   :::column-end:::
:::row-end:::
---
 

## Azure Pipelines and GitHub integration

You can use Azure Pipelines to automatically build, test, package, release, and deploy your GitHub repository code. To get started, see [Build GitHub repositories](../pipelines/repos/github.md). 

You can map your GitHub repositories to one or more projects in Azure DevOps. 

:::image type="content" source="media/overview/github-azure-devops-integration.png" alt-text="Conceptual image of GitHub and Azure Pipelines integration.":::   

 
 
:::row:::
   :::column span="1":::
      **Feature**
   :::column-end::: 
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019 < azure-devops"
:::row:::
   :::column span="1":::
      GitHub repository and pull request builds
   :::column-end::: 
   :::column span="2":::
       Automatically build pull requests from repository forks to ensure changes successfully build and tests pass before they get merged. 
       For more information, see [Build GitHub repositories](../pipelines/repos/github.md).
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      GitHub repository and pull request builds
   :::column-end::: 
   :::column span="2":::
       - Automatically build your GitHub pull requests. After the build is done, status is reported back with a comment in your GitHub pull request. 
       - Manually run a pipeline or test suite triggered by a GitHub pull request comment.
       - Configure draft PR validation for GitHub repository. Supports adding `drafts` to the `pr` trigger YAML syntax for GitHub draft pull requests. You can choose if you want your draft PRs to queue a build. The default option is true (a build is queued) like it currently is for GitHub PRs. 
       - Rebuild GitHub pull request builds upon failure. Provides support for queueing a failed build.
       - Configure draft PR validation for GitHub repositories 
       - Automatically build pull requests from repository forks to ensure changes successfully build and tests pass before they get merged. 
       For more information, see [Build GitHub repositories](../pipelines/repos/github.md).
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2019 < azure-devops"
:::row:::
   :::column span="1":::
      GitHub Enterprise builds
   :::column-end::: 
   :::column span="2":::
      Supports continuous integration (CI) builds for GitHub Enterprise repositories. For more information, see [Build GitHub repositories, CI triggers](../pipelines/repos/github.md#ci-triggers).  
   :::column-end:::
:::row-end:::
---
::: moniker-end

::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      GitHub Enterprise builds
   :::column-end::: 
   :::column span="2":::
      - Supports continuous integration (CI) builds for GitHub Enterprise repositories.
      - Create a pipeline to build code contained within a GitHub Enterprise repository using the build pipeline wizard. 
       For more information, see [Build GitHub repositories, CI triggers](../pipelines/repos/github.md#ci-triggers).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      GitHub service connections
   :::column-end::: 
   :::column span="2":::
      The pipeline wizard automatically creates and reuses a service connection for the repository you choose. If you wish to manually choose a connection other than the one that is automatically selected, follow the **Choose connection** hyperlink. For more information, see [Build GitHub repositories](../pipelines/repos/github.md). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      GitHub-specific tasks and utilities
   :::column-end::: 
   :::column span="2":::
      Supported: 
      - [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0) 
      - [GitHub Release task](/azure/devops/pipelines/tasks/reference/github-release-v1)
      - [Open source Azure Pipelines tasks](https://github.com/microsoft/azure-pipelines-tasks/tree/master/Tasks) 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops-2019"
:::row:::
   :::column span="1":::
      Manage GitHub releases  
   :::column-end::: 
   :::column span="2":::
      - Inline GitHub connection as a release artifact source.  
      - Automate GitHub releases using the **GitHub Release** task.   
      For more information, see:
      - [CI triggers](../pipelines/repos/github.md#ci-triggers)
      - [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0) 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="1":::
      Manage GitHub releases  
   :::column-end::: 
   :::column span="2":::
      - Inline GitHub connection as a release artifact source.  
      - Automate GitHub releases using the **GitHub Release** task.  
      - Link your GitHub releases as an artifact source in release pipelines. This function lets you consume the GitHub release as part of your deployments.  
      For more information, see:
      - [CI triggers](../pipelines/repos/github.md#ci-triggers)
      - [Download GitHub Release task](/azure/devops/pipelines/tasks/reference/download-github-release-v0) 
      - [GitHub Release task](/azure/devops/pipelines/tasks/reference/github-release-v1)
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="1":::
      Filter GitHub branches for GitHub, GitHub Enterprise, or external Git artifacts
   :::column-end::: 
   :::column span="2":::
      When you release from GitHub, GitHub Enterprise, or external Git repositories, you can configure the specific branches to release. For example, you might want to deploy only builds coming from a specific branch to production. For more information, see [Release triggers, Continuous deployment triggers](../pipelines/release/triggers.md).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2019 < azure-devops-2020" 
:::row:::
   :::column span="1":::
      Use build tags to trace GitHub sources 
   :::column-end::: 
   :::column span="2":::
      Use build tags to trace GitHub sources to builds. While choosing a GitHub repository in a build definition, you can select the types of builds you want to tag, along with the tag format. 
      For more information, see [Build GitHub repositories, Label sources](../pipelines/repos/github.md#label-sources).
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops" 
:::row:::
   :::column span="1":::
      Use build tags to trace GitHub sources or trigger GitHub releases
   :::column-end::: 
   :::column span="2":::
      Use build tags to trace GitHub sources to builds. While choosing a GitHub repository in a build definition, you can select the types of builds you want to tag, along with the tag format. 
      - Use build tags to trace GitHub sources to builds. While choosing a GitHub repository in a build definition, you can select the types of builds you want to tag, along with the tag format. 
      - Specify a tag pattern to determine when to trigger a GitHub release. By specifying a tag regular expression, you can control when a GitHub release is created based on the triggering commit.    
      For more information, see [Build GitHub repositories, Label sources](../pipelines/repos/github.md#label-sources).

   :::column-end:::
:::row-end:::
---
::: moniker-end 
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      GitHub packages support in YAML pipelines
   :::column-end::: 
   :::column span="2":::
      In your YAML pipeline, specify a package type (NuGet or npm) that you want to consume from GitHub. For more information, see [Resources: packages](../pipelines/process/resources.md). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Status checks, tracking, and traceability
   :::column-end::: 
   :::column span="2":::
      - **GitHub Checks**: Display status for each pipeline job: Run a pipeline or test suite to validate a GitHub pull request from the comments section of the GitHub pull request. 
      - **GitHub Checks**: Send detailed information about the pipeline status, test, code coverage, and errors. Status is posted to GitHub Checks for each job in the pipeline. 
      - **Status badges**: Add Markdown syntax to a GitHub repo README.md file to display the pipeline status.  
      - GitHub artifacts: Show associated commits deployed in a release. To enhance traceability, you can see all the commits that were deployed to an environment for GitHub repositories, as a part of a specific release.  
      - Track GitHub commits and associated issues in releases. List commits made in GitHub repos and the associated GitHub issues that are being deployed with a release. For more information, see [Track GitHub commits and associated issues in releases (Release Notes)](/azure/devops/release-notes/2018/sep-10-azure-devops-launch#new-build-status-badge-url).  
            
      For more information, see:  
      - [Create your first pipeline, Add a status badge to your repository](../pipelines/create-first-pipeline.md#add-a-status-badge-to-your-repository) 
      - [GitHub Checks API](https://docs.github.com/en/rest/reference/checks)
      - [Display status for each pipeline job in GitHub Checks (Release Notes)](/azure/devops/release-notes/2019/sprint-146-update#automatic-github-service-connections-in-pipelines)  
   :::column-end:::
:::row-end:::
---
::: moniker-end  

## Related articles

- [Azure Boards-GitHub integration](../boards/github/index.md)  
- [Build GitHub repositories](../pipelines/repos/github.md)  
- [Git experience in Visual Studio](/visualstudio/version-control/git-with-visual-studio)
