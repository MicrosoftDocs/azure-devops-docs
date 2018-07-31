---
title: Build OSS repos
description: Build Open Source Software repositories using public projects in Visual Studio Team Services
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

# Build OSS repositories

[!INCLUDE [temp](](../../organizations/public/_shared/version-public-projects.md)]  

If you manage an Open Source Software (OSS) project, then you can use VSTS public projects to automatically build and validate every pull request and commit to your repository.

This article provides common tasks for building OSS repositories.


## Create a public project in VSTS

Your code may be in a GitHub public repository or in a VSTS public project.

# [GitHub repo](#tab/github)

Create a new VSTS public project using the steps described [here](../../organizations/public/create-public-project.md). By configuring build and release pipelines in a VSTS public project, your builds and releases are visible to everyone. When users outside of your organization fork your repository and submit pull requests, they are able to view the status of builds that automatically validate those pull requests. They can also drill into the build logs and test results.

# [VSTS Git repo](#tab/gitvsts)

If you already use VSTS public projects to manage your code, then you are already set. Use the same public project to configure build and release pipelines. Your builds and releases are visible to everyone.

---

## Create a build pipeline

# [GitHub repo](#tab/github)

Follow the steps in [Build your GitHub repo](ci-build-github.md) to set up a build pipeline and to add a build badge to the `Readme.md` file at the root of your repository.

# [VSTS Git repo](#tab/gitvsts)

Follow the steps in [Your first build and release](../get-started-designer.md) to set up a build and release pipeline.

---

## Validate contributions from forks

> [!NOTE]   
> This feature is currently unavailable for security hardening. It is expected to return in July 2018.  

# [GitHub repo](#tab/github)

> [!IMPORTANT]
> These settings impact the security of your build.

By default, your build pipeline is not automatically triggered for pull requests from forked repositories. You can change this behavior, but there are additional security considerations that you must take into account. To enable building pull requests from forks:

1. Navigate to your VSTS project. Select **Build and Release**, and then select **Builds**. Locate your build pipeline, and select **Edit**.
1. Select the **Triggers** tab. Enable the checkbox labeled **Build pull requests from forks of this repository**.

By default, secrets associated with your build pipeline are not made available to builds of pull requests from forks. Secrets include:

* A security token with access to your GitHub repository
* These items, if used by your build:
  * [Service connection](../library/service-endpoints.md) credentials
  * Files from the [Secure Files library](../library/secure-files.md)
  * Build [variables](../process/variables.md#user-defined-variables) marked **secret**

To bypass this precaution, enable the checkbox labeled **Make secrets available to builds of forks**. Be aware of this setting's impact on security as described below.

A GitHub user can fork your repository, change it, and create a pull request to propose changes to your repository. Such a pull request could contain malicious code to run as part of your triggered build. For example, an ill-intentioned script or unit test change could leak secrets or compromise the agent machine performing the build. The following steps are recommended to mitigate this risk:

1. Use a VSTS [Microsoft-hosted agent](../agents/hosted.md) to build pull requests from forks. Microsoft-hosted agents are immediately deleted after they complete a build, so there is no lasting impact if they are compromised.

1. If you must use a [self-hosted agent](../agents/agents.md#install), do not store secrets or perform other builds or releases on the same agent, unless your repository is private and you trust pull request creators. Otherwise, secrets could leak and the repository contents or secrets of other builds and releases could be revealed.

1. Do not enable the checkbox labeled **Make secrets available to builds of forks**. Otherwise, secrets could leak during a build.

# [VSTS Git repo](#tab/gitvsts)

Building pull requests from VSTS forks is no different from building pull requests within the same repository or project. Since you can only create forks within the same VSTS organization that your project is already part of, there are no additional security considerations when building forks in VSTS.

---

## Other restrictions

You should be aware of the following restrictions when running builds in a VSTS public project.

1. **Cross-project access:** All builds in a public project run with a project scoped access token. In other words, builds in a public project can only access resources such as code, work items, or test results within the project and not from another project of the VSTS organization.
1. **Package management:** If your builds need access to packages from VSTS Package Management, then you must explicitly grant permission for the **Project Build Service** organization to access the package feeds.
