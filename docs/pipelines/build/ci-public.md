---
title: Build open source projects
description: Build open source repositories by using public projects in Azure Pipelines
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

If you manage an open source project, you can use Azure Pipelines to automatically build and validate every pull request and commit to your repository. By making your Azure Pipelines project **public**, anyone can view build and test results without signing in.

This article describes common tasks for building open source repositories.

## Create a public project in Azure Pipelines

Your code can be in a GitHub public repository or in an Azure Repos public project.

# [GitHub repo](#tab/github)

Create an Azure Pipelines public project by using the steps described in [Create a public project](../../organizations/public/create-public-project.md). By configuring build and release pipelines in an Azure Pipelines public project, your builds and releases are visible to everyone. When users outside your organization fork your repository and submit pull requests, they can view the status of builds that automatically validate those pull requests. They can also drill into the build logs and test results.

# [Azure Repos Git repo](#tab/gitvsts)

If you already use an Azure Pipelines public project to manage your code, you're all set. Use the same public project to configure build and release pipelines. Your builds and releases are visible to everyone.

---

## Create a build pipeline

# [GitHub repo](#tab/github)

Set up a build pipeline and add a build badge to the `Readme.md` file at the root of your repository. Follow the steps in [Create your first pipeline](../get-started-yaml.md).

# [Azure Repos Git repo](#tab/gitvsts)

Set up a build and release pipeline. Follow the steps in [Your first build and release](../get-started-designer.md).

---

## Validate contributions from forks 

# [GitHub repo](#tab/github)

> [!IMPORTANT]
> These settings affect the security of your build.

When you create a build pipeline for a public repository, your pipeline is automatically triggered for pull requests from forks of your repository. You can change this behavior, carefully considering how it affects security. To enable or disable this behavior:

1. Go to your Azure Pipelines project. Select **Pipelines**, and then select **Builds**. Locate your build pipeline, and select **Edit**.
1. Select the **Triggers** tab. After enabling the **Pull request trigger**, enable or disable the **Build pull requests from forks of this repository** check box.

By default, secrets associated with your build pipeline are not made available to pull request builds of forks. Secrets include:

* A security token with access to your GitHub repository.
* These items, if your build uses them:
  * [Service connection](../library/service-endpoints.md) credentials
  * Files from the [secure files library](../library/secure-files.md)
  * Build [variables](../process/variables.md#user-defined-variables) marked **secret**

To bypass this precaution, enable the **Make secrets available to builds of forks** check box. Be aware of this setting's effect on security.

### Important security considerations

A GitHub user can fork your repository, change it, and create a pull request to propose changes to your repository. This pull request could contain malicious code to run as part of your triggered build. For example, an ill-intentioned script or unit test change might leak secrets or compromise the agent machine that's performing the build. We recommend the following actions to address this risk:

* Do not enable the **Make secrets available to builds of forks** check box if your repository is public or untrusted users can submit pull requests that automatically trigger builds. Otherwise, secrets might leak during a build.

* Use a [Microsoft-hosted agent pool](../agents/hosted.md) to build pull requests from forks. Microsoft-hosted agent machines are immediately deleted after they complete a build, so there is no lasting impact if they're compromised.

* If you must use a [self-hosted agent](../agents/agents.md#install), do not store any secrets or perform other builds and releases that use secrets on the same agent, unless your repository is private and you trust pull request creators. Otherwise, secrets might leak, and the repository contents or secrets of other builds and releases might be revealed.

# [Azure Repos Git repo](#tab/gitvsts)

Building pull requests from Azure Repos forks is no different from building pull requests within the same repository or project. You can create forks only within the same Azure DevOps organization that your project is already part of. There are no additional security considerations for building forks in Azure Pipelines.

---

## Other restrictions

Be aware of the following restrictions when you're running builds in an Azure Pipelines public project:

* **Cross-project access:** All builds in a public project run with an access token restricted to the project. Builds in a public project can access resources such as code, work items, or test results only within the project and not from other projects of the Azure DevOps organization.
* **Package management:** If your builds need access to packages from Azure Artifacts, you must explicitly grant permission to the **Project Build Service** account to access the package feeds.
