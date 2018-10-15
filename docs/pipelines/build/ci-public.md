---
title: Build open source projects
titleSuffix: Azure Pipelines & TFS
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

# [GitHub](#tab/github)

Create an Azure Pipelines public project by using the steps described in [Create a public project](../../organizations/public/create-public-project.md). By configuring build and release pipelines in an Azure Pipelines public project, your builds and releases are visible to everyone. When users outside your organization fork your repository and submit pull requests, they can view the status of builds that automatically validate those pull requests. They can also drill into the build logs and test results.

# [Azure Repos](#tab/gitvsts)

If you already use an Azure Pipelines public project to manage your code, you're all set. Use the same public project to configure build and release pipelines. Your builds and releases are visible to everyone.

---

### Access restrictions

Be aware of the following access restrictions when you're running builds in an Azure Pipelines public project:

* **Cross-project access:** All builds in a public project run with an access token restricted to the project. Builds in a public project can access resources such as code, work items, or test results only within the project and not from other projects of the Azure DevOps organization.
* **Package management:** If your builds need access to packages from Azure Artifacts, you must explicitly grant permission to the **Project Build Service** account to access the package feeds.

## Create a build pipeline

# [GitHub](#tab/github)

Set up a build pipeline and add a build badge to the `Readme.md` file at the root of your repository. Follow the steps in [Create your first pipeline](../get-started-yaml.md).
Then, return here for additional details.

# [Azure Repos](#tab/gitvsts)

Set up a build and release pipeline. Follow the steps in [Your first build and release](../get-started-designer.md).

---

## Authorize access to your repositories

Azure Pipelines must be granted access to your repositories to display them, trigger their builds, and fetch their code during builds.

# [GitHub](#tab/github)

There are 3 authentication types for granting Azure Pipelines access to your GitHub repositories while creating a pipeline.

| Authentication type            | Builds run using              | Works with the [GitHub Checks API](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/) |
|--------------------------------|-------------------------------|-----|
| 1. GitHub App                  | The Azure Pipelines identity  | Yes |
| 2. OAuth                       | Your personal GitHub identity | No  |
| 3. Personal access token (PAT) | Your personal GitHub identity | No  |

### 1. GitHub App

The Azure Pipelines GitHub App is the **recommended** authentication type. By installing it in your GitHub account or organization, your pipeline can run without using your personal GitHub identity.
Builds and GitHub status updates will be performed on behalf of the Azure Pipelines identity.
Additionally, the GitHub App works with the [GitHub Checks API](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)
to display build, test, and code coverage results in GitHub.

#### Using the GitHub App

To use the GitHub App, install it in your GitHub account or organization. The app can be installed and uninstalled from 2 locations:

1. The app's [homepage](https://github.com/apps/azure-pipelines) - recommended when no parallel jobs are being purchased.
1. The app's [GitHub Marketplace listing](https://github.com/marketplace/azure-pipelines/) where additional parallel jobs can be purchased for private repositories,
but where cancelation of the price plan may delay uninstallation until the end of your billing period, even for the free plan.

To install the GitHub App, you must be a repository admin or GitHub organization owner.

#### Permissions

The GitHub App requests the following permissions during installation:

| Permission | What Azure Pipelines does with it |
|------------|-----------------------------------|
| Write access to code | Upon your deliberate action, Azure Pipelines will simplify creating a pipeline by committing a YAML file to a selected branch of your GitHub repository. |
| Read access to metadata | Azure Pipelines will retrieve GitHub metadata for displaying the repository, branches, and issues associated with a build in the build's summary. |
| Read and write access to checks | Azure Pipelines will read and write its own build, test, and code coverage results to be displayed in GitHub. |
| Read and write access to pull requests | Upon your deliberate action, Azure Pipelines will simplify creating a pipeline by creating a pull request for a YAML file that was committed to a selected branch of your GitHub repository. Azure Pipelines will retrieve GitHub metadata for displaying any pull request associated with a build in the build's summary. |

<!--
Detailed permissions not displayed to the user during installation:
| Checks (read & write)
| Repository contents (read & write
| Deployments (read & write)
| Issues (read & write)
| Repository metadata (read)
| Pull requests (read & write)
| Commit statuses (read & write)
 -->

### 2. OAuth

[OAuth](https://help.github.com/articles/authorizing-oauth-apps/) is simplest authentication type to get started with for repositories in your personal GitHub account. Builds and GitHub status updates will be performed on behalf of your personal GitHub identity. For builds to keep working, your repository access must remain.

#### Using OAuth

To use OAuth, click **Authorize** on the repository step while creating a pipeline. The OAuth connection will be saved in your Azure Pipelines project for later use.

#### Revoking OAuth access

After authorizing Azure Pipelines to use OAuth, to later revoke it and prevent further use, visit [OAuth Apps](https://github.com/settings/developers) in your GitHub settings.
You can also delete it from the list of GitHub [service connections](../library/service-endpoints.md) in your Azure Pipelines project settings.

### 3. Personal access token (PAT)

[PATs](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) are effectively the same as OAuth, but allow you to control which permissions are granted to Azure Pipelines.
Builds and GitHub status updates will be performed on behalf of your personal GitHub identity. For builds to keep working, your repository access must remain.

#### Using a PAT

To create a PAT, visit [Personal access tokens](https://github.com/settings/tokens) in your GitHub settings.
The required permissions are `repo`, `admin:repo_hook`, `read:user`, and `user:email`. These are the same permissions required when using OAuth, above.
Copy the generated PAT to the clipboard and paste it into a new GitHub [service connection](../library/service-endpoints.md) in your Azure Pipelines project settings.
For future recall, name the service connection after your GitHub username. It will be available in your Azure Pipelines project for later use.

#### Revoking PAT access

After authorizing Azure Pipelines to use a PAT, to later delete it and prevent further use, visit [Personal access tokens](https://github.com/settings/tokens) in your GitHub settings.
You can also delete it from the list of GitHub [service connections](../library/service-endpoints.md) in your Azure Pipelines project settings.

# [Azure Repos](#tab/gitvsts)

If the repository that you wish to build is in the same project as your build pipeline, you're all set. Your builds will automatically have access to the repository.

---

## Choose a repository to build

Your code can be in a GitHub public repository or in an Azure Repos public project.

# [GitHub](#tab/github)

To create a pipeline for your repository with continuous integration and pull request triggers, you must have the required GitHub permissions configured.
Otherwise, **the repository will not appear** in the repository list while creating a pipeline. Depending on the authentication type and ownership of the repository, ensure that the following access is configured.

### Repository permissions for GitHub App authentication

| If the repo is in your personal GitHub account | If the repo is in someone else's personal GitHub account | If the repo is in a GitHub organization that you own | If the repo is in a GitHub organization that someone else owns |
|-----------------------------|-|-|-|
| Install the Azure Pipelines GitHub App in your personal GitHub account. You can do so from [here](https://github.com/apps/azure-pipelines). | **1.** The other person must install the Azure Pipelines GitHub App in their personal GitHub account. They can do so from [here](https://github.com/apps/azure-pipelines). <br/><br/> **2.** You must be added as a collaborator in the repository's settings under "Collaborators". Accept the invitation to be a collaborator using the link that is emailed to you. | **1.** Install the Azure Pipelines GitHub App in the GitHub organization. You can do so from [here](https://github.com/apps/azure-pipelines). <br/><br/> **2.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". | **1.** A GitHub organization owner or repository admin must install the Azure Pipelines GitHub App in the organization. The app can be installed from [here](https://github.com/apps/azure-pipelines). <br/><br/> **2.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". Accept the invitation to be a collaborator using the link that is emailed to you. |

### Repository permissions for OAuth authentication

| If the repo is in your personal GitHub account | If the repo is in someone else's personal GitHub account | If the repo is in a GitHub organization that you own | If the repo is in a GitHub organization that someone else owns |
|-----------------------------|-|-|-|
| **1.** At least once, authenticate to GitHub with OAuth using your personal GitHub account credentials. This can be done in Azure Pipelines project settings under Pipelines > Service connections > New service connection > GitHub > Authorize. <br/><br/> **2.** Grant Azure Pipelines access to your repositories under "Permissions" [here](https://github.com/settings/connections/applications/0d4949be3b947c3ce4a5). | **1.** At least once, the other person must authenticate to GitHub with OAuth using their personal GitHub account credentials. This can be done in Azure Pipelines project settings under Pipelines > Service connections > New service connection > GitHub > Authorize. <br/><br/> **2.**  The other person must grant Azure Pipelines access to their repositories under "Permissions" [here](https://github.com/settings/connections/applications/0d4949be3b947c3ce4a5). <br/><br/> **3.** You must be added as a collaborator in the repository's settings under "Collaborators". Accept the invitation to be a collaborator using the link that is emailed to you. | **1.** At least once, authenticate to GitHub with OAuth using your personal GitHub account credentials. This can be done in Azure Pipelines project settings under Pipelines > Service connections > New service connection > GitHub > Authorize. <br/><br/> **2.** Grant Azure Pipelines access to your organization under "Organization access" [here](https://github.com/settings/connections/applications/0d4949be3b947c3ce4a5). <br/><br/> **3.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". | **1.** At least once, a GitHub organization owner must authenticate to GitHub with OAuth using their personal GitHub account credentials. This can be done in Azure Pipelines project settings under Pipelines > Service connections > New service connection > GitHub > Authorize. <br/><br/> **2.** The organization owner must grant Azure Pipelines access to the organization under "Organization access" [here](https://github.com/settings/connections/applications/0d4949be3b947c3ce4a5). <br/><br/> **3.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". Accept the invitation to be a collaborator using the link that is emailed to you. |

### Repository permissions for Personal access token (PAT) authentication

| If the repo is in your personal GitHub account | If the repo is in someone else's personal GitHub account | If the repo is in a GitHub organization that you own | If the repo is in a GitHub organization that someone else owns |
|-----------------------------|-|-|-|
| The PAT must have the required access scopes under [Personal access tokens](https://github.com/settings/tokens): `repo`, `admin:repo_hook`, `read:user`, and `user:email`. | **1.**  The PAT must have the required access scopes under [Personal access tokens](https://github.com/settings/tokens): `repo`, `admin:repo_hook`, `read:user`, and `user:email`. <br/><br/> **2.** You must be added as a collaborator in the repository's settings under "Collaborators". Accept the invitation to be a collaborator using the link that is emailed to you. | **1.** The PAT must have the required access scopes under [Personal access tokens](https://github.com/settings/tokens): `repo`, `admin:repo_hook`, `read:user`, and `user:email`. <br/><br/> **2.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". | **1.** The PAT must have the required access scopes under [Personal access tokens](https://github.com/settings/tokens): `repo`, `admin:repo_hook`, `read:user`, and `user:email`. <br/><br/> **2.** You must be added as a collaborator, or your team must be added, in the repository's settings under "Collaborators and teams". Accept the invitation to be a collaborator using the link that is emailed to you. |

# [Azure Repos](#tab/gitvsts)

While creating a pipeline, to choose the repository to build, first select the project to which the repository belongs. Then, select the repository. You must have read access to the project and repository.

---

## Protect branches with validation builds

You can run a validation build with each commit or pull request that targets a branch, and even prevent pull requests from merging until a validation build succeeds.

# [GitHub](#tab/github)

To configure validation builds for a GitHub repository, you must be the owner or have admin access to the repository.

1. First, build the repository at least once so that the build result is posted to GitHub, thereby making GitHub aware of the pipeline's name.
2. Next, follow GitHub's documentation for [configuring protected branches](https://help.github.com/articles/configuring-protected-branches/) in the repository's settings.

# [Azure Repos](#tab/gitvsts)

To configure validation builds for an Azure Repos Git repository, you must be a project administrator of its project.

1. First, from the Azure Repos **Branches** page, make sure that your repository is selected.
1. Next, hover over the branch you wish to protect, click `...` to display its context menu, and then select **Branch policies**.
1. Finally, click **Add build policy** and choose the pipeline and methods of protecting the branch as detailed in the Azure Repos documentation [here](../../repos/git/branch-policies.md#build-validation).

---

## Validate contributions from forks

# [GitHub](#tab/github)

> [!IMPORTANT]
> These settings affect the security of your build.

When you create a build pipeline, your pipeline is automatically triggered for pull requests from forks of your repository. You can change this behavior, carefully considering how it affects security. To enable or disable this behavior:

1. Go to your Azure Pipelines project. Select **Pipelines**, and then select **Builds**. Locate your build pipeline, and select **Edit**.
1. Select the **Triggers** tab. After enabling the **Pull request trigger**, enable or disable the **Build pull requests from forks of this repository** check box.

By default with GitHub pipelines, secrets associated with your build pipeline are not made available to pull request builds of forks. These secrets are enabled by default with GitHub Enterprise pipelines. Secrets include:

* A security token with access to your GitHub repository.
* These items, if your build uses them:
  * [Service connection](../library/service-endpoints.md) credentials
  * Files from the [secure files library](../library/secure-files.md)
  * Build [variables](../process/variables.md#user-defined-variables) marked **secret**

To bypass this precaution on GitHub pipelines, enable the **Make secrets available to builds of forks** check box. Be aware of this setting's effect on security.

### Important security considerations

A GitHub user can fork your repository, change it, and create a pull request to propose changes to your repository. This pull request could contain malicious code to run as part of your triggered build. For example, an ill-intentioned script or unit test change might leak secrets or compromise the agent machine that's performing the build. We recommend the following actions to address this risk:

* Do not enable the **Make secrets available to builds of forks** check box if your repository is public or untrusted users can submit pull requests that automatically trigger builds. Otherwise, secrets might leak during a build.

* Use a [Microsoft-hosted agent pool](../agents/hosted.md) to build pull requests from forks. Microsoft-hosted agent machines are immediately deleted after they complete a build, so there is no lasting impact if they're compromised.

* If you must use a [self-hosted agent](../agents/agents.md#install), do not store any secrets or perform other builds and releases that use secrets on the same agent, unless your repository is private and you trust pull request creators. Otherwise, secrets might leak, and the repository contents or secrets of other builds and releases might be revealed.

# [Azure Repos](#tab/gitvsts)

Building pull requests from Azure Repos forks is no different from building pull requests within the same repository or project. You can create forks only within the same Azure DevOps organization that your project is already part of. There are no additional security considerations for building forks in Azure Pipelines.

---

## Parallel jobs and time limits

If you use a public project with a public repository, then Azure Pipelines jobs are free. These free jobs have a maximum timeout of 360 minutes (6 hours) each.

If you use a private project or a private repository, then you can run up to 1,800 minutes (30 hours) of jobs for free every month. These free jobs have a maximum timeout of 30 minutes each. Purchasing jobs for private projects or private repositories removes any monthly time limit and allows jobs to have a maximum timeout of 360 minutes (6 hours) each.

To adjust the timeout of jobs, see [Timeouts](../process/phases.md#timeouts).

Learn more about pricing based on [parallel jobs](../licensing/concurrent-jobs-vsts.md).

## FAQs

<a name="missing-repo"></a>
#### Q: Why isn't a GitHub repository displayed for me to choose in Azure Pipelines

**A**: Depending on the authentication type and ownership of the repository, specific permissions are required.
See [Choose a repository to build](#choose-a-repository-to-build) for details.
