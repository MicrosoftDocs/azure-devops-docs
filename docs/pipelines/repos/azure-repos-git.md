---
title: Build Azure Repos Git or TFS Git repositories
titleSuffix: Azure Pipelines & TFS
description: Using an Azure Repos Git repository with Azure Pipelines or Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: aa910a2f-b668-4a08-9ac0-adc5f9ae417a
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 10/29/2018
monikerRange: '>= tfs-2015'
---

# Build Azure Repos Git or TFS Git repositories

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh190721%28v=vs.120%29.aspx)**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

Azure Pipelines can automatically build and validate every pull request and commit to your Azure Repos Git repository.

## Introduction to creating pipelines

For an introduction to creating a pipeline, follow the steps in [Create your first pipeline](../get-started-yaml.md).

[!INCLUDE [temp](_shared/pipeline-options-for-git.md)]

## Make open source projects public

If your Azure Repos Git repository is open source, you can make your Azure DevOps project **public** so that anyone can view your pipeline's build results, logs, and test results without signing in. When users submit pull requests, they can view the status of builds that automatically validate those pull requests. See [Create a public project](../../organizations/public/create-public-project.md).

> [!NOTE]
> Azure Repos Git repositories do not support forks by users who do not have explicit access to the project.

### Access restrictions

Be aware of the following access restrictions when you're running builds in Azure Pipelines public projects:

* **Cross-project access:** All builds in a Azure DevOps public project run with an access token restricted to the project. Builds in a public project can access resources such as build artifacts or test results only within the project and not from other projects of the Azure DevOps organization.
* **Azure Artifacts packages:** If your builds need access to packages from Azure Artifacts, you must explicitly grant permission to the **Project Build Service** account to access the package feeds.

## Choose a repository to build

While creating a pipeline, to choose the repository to build, first select the project to which the repository belongs. Then, select the repository.

## Authorize access to your repositories

Azure Pipelines must be granted access to your repositories to display them, trigger their builds, and fetch their code during builds.

If the repository that you wish to build is in the same project as your pipeline, you're all set. Your builds will automatically have access to the repository. If the repository is in a different project than your pipeline, you must have read access to the project and repository.

## Protect branches with validation builds

You can run a validation build with each commit or pull request that targets a branch, and even prevent pull requests from merging until a validation build succeeds.

To configure validation builds for an Azure Repos Git repository, you must be a project administrator of its project.

1. First, from the Azure Repos **Branches** page, make sure that your repository is selected.
1. Next, hover over the branch you wish to protect, click `...` to display its context menu, and then select **Branch policies**.
1. Finally, click **Add build policy** and choose the pipeline and methods of protecting the branch as detailed in the Azure Repos documentation [here](../../repos/git/branch-policies.md#build-validation).

## Validate contributions from forks

Building pull requests from Azure Repos forks is no different from building pull requests within the same repository or project. You can create forks only within the same Azure DevOps organization that your project is part of.

## Add a build badge

To add a build badge to the `readme.md` file at the root of your repository, follow the steps in [Get the status badge](../get-started-yaml.md#get-the-status-badge).

## Parallel jobs and time limits

If your pipeline and Azure Repos Git repository are both in a public project, then Azure Pipelines jobs are free. These free jobs have a maximum timeout of 360 minutes (6 hours) each.

If either your pipeline or Azure Repos Git repository is in a private project, then you can run up to 1,800 minutes (30 hours) of jobs for free every month. These free jobs have a maximum timeout of 30 minutes each. Purchasing jobs for private projects or private repositories removes any monthly time limit and allows jobs to have a maximum timeout of 360 minutes (6 hours) each.

To adjust the timeout of jobs, see [Timeouts](../process/phases.md#timeouts).

Learn more about pricing based on [parallel jobs](../licensing/concurrent-jobs-vsts.md).
