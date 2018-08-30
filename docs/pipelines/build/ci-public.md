---
title: Build open source projects
description: Build open source repositories using public projects in Azure Pipelines
services: vsts
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
manager: douge
ms.assetid:
ms.author: alewis
author: andyjlewis
ms.date: 06/20/2018
monikerRange: 'vsts'
---

# Build open source projects

[!INCLUDE [temp](](../../organizations/public/_shared/version-public-projects.md)]  

If you manage an open source project, then you can use Azure Pipelines public projects to automatically build and validate every pull request and commit to your repository.

This article provides common tasks for building open source repositories.

## Create a public project in Azure Pipelines

Your code may be in a GitHub public repository or in an Azure Repos public project.

# [GitHub repo](#tab/github)

Create a new Azure Pipelines public project using the steps described [here](../../organizations/public/create-public-project.md). By configuring build and release pipelines in an Azure Pipelines public project, your builds and releases are visible to everyone. When users outside of your organization fork your repository and submit pull requests, they are able to view the status of builds that automatically validate those pull requests. They can also drill into the build logs and test results.

# [Azure Repos Git repo](#tab/gitvsts)

If you already use Azure Pipelines public projects to manage your code, then you are already set. Use the same public project to configure build and release pipelines. Your builds and releases are visible to everyone.

---

## Create a build pipeline

# [GitHub repo](#tab/github)

Follow the steps in [Create your first pipeline](../get-started-yaml.md) to set up a build pipeline and to add a build badge to the `Readme.md` file at the root of your repository.

# [Azure Repos Git repo](#tab/gitvsts)

Follow the steps in [Use designer](../get-started-designer.md) to set up a build and release pipeline.

---

## Validate contributions from forks 

# [GitHub repo](#tab/github)

> [!IMPORTANT]
> These settings impact the security of your build.

By default, your build pipeline is not automatically triggered for pull requests from forked repositories. You can change this behavior, but there are additional security considerations that you must take into account. To enable building pull requests from forks:

1. Navigate to your Azure Pipelines project. Select **Pipelines**, and then select **Builds**. Locate your build pipeline, and select **Edit**.
1. Select the **Triggers** tab. After enabling the **Pull request trigger**, enable the checkbox labeled **Build pull requests from forks of this repository**.

By default, secrets associated with your build pipeline are not made available to builds of pull requests from forks. Secrets include:

* A security token with access to your GitHub repository
* These items, if used by your build:
  * [Service connection](../library/service-endpoints.md) credentials
  * Files from the [secure files library](../library/secure-files.md)
  * Build [variables](../process/variables.md#user-defined-variables) marked **secret**

To bypass this precaution, enable the checkbox labeled **Make secrets available to builds of forks**. Be aware of this setting's impact on security as described below.

A GitHub user can fork your repository, change it, and create a pull request to propose changes to your repository. This pull request could contain malicious code to run as part of your triggered build. For example, an ill-intentioned script or unit test change could leak secrets or compromise the agent machine performing the build. The following steps are recommended to mitigate this risk:

1. Use an Azure Pipelines [Microsoft-hosted agent](../agents/hosted.md) to build pull requests from forks. Microsoft-hosted agents are immediately deleted after they complete a build, so there is no lasting impact if they are compromised.

1. If you must use a [self-hosted agent](../agents/agents.md#install), do not store secrets or perform other builds or releases on the same agent, unless your repository is private and you trust pull request creators. Otherwise, secrets could leak and the repository contents or secrets of other builds and releases could be revealed.

1. Do not enable the checkbox labeled **Make secrets available to builds of forks** if untrusted users can submit pull requests that automatically trigger builds. Otherwise, secrets could leak during a build.

# [Azure Repos Git repo](#tab/gitvsts)

Building pull requests from Azure Repos forks is no different from building pull requests within the same repository or project. Since you can only create forks within the same Azure DevOps organization that your project is already part of, there are no additional security considerations when building forks in Azure Pipelines.

---

## Other restrictions

You should be aware of the following restrictions when running builds in an Azure Pipelines public project.

1. **Cross-project access:** All builds in a public project run with a project-scoped access token. In other words, builds in a public project can only access resources such as code, work items, or test results within the project and not from other projects of the Azure DevOps organization.
1. **Package management:** If your builds need access to packages from Azure Artifacts, then you must explicitly grant permission for the **Project Build Service** account to access the package feeds.
