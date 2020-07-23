---
title: Build Azure Repos Git repositories
description: Using an Azure Repos Git repository with Azure Pipelines
ms.topic: reference
ms.assetid: aa910a2f-b668-4a08-9ac0-adc5f9ae417a
ms.custom: seodec18
ms.date: 07/07/2020
monikerRange: '>= tfs-2015'
---

# Build Azure Repos Git or TFS Git repositories

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Azure Pipelines can automatically build and validate every pull request and commit to your Azure Repos Git repository.

## Choose a repository to build

# [YAML](#tab/yaml/)

::: moniker range=">= azure-devops-2019"

You create a new pipeline by first selecting a repository and then a YAML file in that repository. The repository in which the YAML file is present is called `self` repository. By default, this is the repository that your pipeline builds. 

::: moniker-end

::: moniker range="azure-devops"

You can later configure your pipeline to check out a different repository or multiple repositories. To learn how to do this, see [multi-repo checkout](multi-repo-checkout.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines are not available in TFS.

::: moniker-end

# [Classic](#tab/classic/)

While creating a pipeline, to choose the repository to build, first select the project to which the repository belongs. Then, select the repository.

To clone additional repositories as part of your pipeline:

* If the repo is in the same project as your pipeline, or if the access token (explained below) has access to the repository in a different project, use the following command:

  `git clone -c http.extraheader="AUTHORIZATION: bearer $(System.AccessToken)" <clone URL>`

* If the access token (explained below) does not have access to the repository:

    1. Get a [personal access token (PAT)](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with `Code (read)` scope, and prefix it with `pat:`
    2. Base64-encode this string to create a basic auth token.
    3. Add a script in your pipeline with the following command to clone that repo
       `git clone -c http.extraheader="AUTHORIZATION: basic <BASIC_AUTH_TOKEN>" <clone URL>`

---

Azure Pipelines must be granted access to your repositories to trigger their builds and fetch their code during builds. Normally, a pipeline has access to repositories in the same project. But, if you wish to access repositories in a different project, then you need to update the permissions granted to [job access tokens](../process/access-tokens.md).

## CI triggers

Continuous integration (CI) triggers cause a pipeline to run whenever you push an update to the specified branches or you push  specified tags.

# [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
[!INCLUDE [ci-triggers](includes/ci-triggers1.md)]
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [ci-triggers](includes/ci-triggers2.md)]
::: moniker-end

::: moniker range=">= azure-devops-2019"
[!INCLUDE [ci-triggers](includes/ci-triggers3.md)]
::: moniker-end

::: moniker range="< azure-devops-2019"
YAML pipelines are not available in TFS.
::: moniker-end

# [Classic](#tab/classic/)
[!INCLUDE [ci-triggers](includes/ci-triggers4.md)]

::: moniker range=">= tfs-2017"
**Azure Pipelines, TFS 2017.3 and newer**

![ci trigger git branches](media/ci-trigger-git-branches-neweditor.png)
::: moniker-end

::: moniker range="<= tfs-2017"
**TFS 2017.1 and older versions**

![ci trigger git branches](media/ci-trigger-git-branches.png)
::: moniker-end

---

### Skipping CI for individual commits

::: moniker range="<= azure-devops-2019"

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `***NO_CI***` in the commit message of the HEAD commit and Azure Pipelines will skip running CI.

::: moniker-end

::: moniker range="> azure-devops-2019"

You can also tell Azure Pipelines to skip running a pipeline that a commit would normally trigger. Just include `[skip ci]` in the commit message or description of the HEAD commit and Azure Pipelines will skip running CI. You can also use any of the variations below.

- `[skip ci]` or `[ci skip]`
- `skip-checks: true` or `skip-checks:true`
- `[skip azurepipelines]` or `[azurepipelines skip]`
- `[skip azpipelines]` or `[azpipelines skip]`
- `[skip azp]` or `[azp skip]`
- `***NO_CI***`

::: moniker-end

[!INCLUDE [ci-triggers](includes/ci-triggers5.md)]

## PR triggers

Pull request (PR) triggers cause a pipeline to run whenever a pull request is opened with one of the specified target branches, or when changes are pushed to such a pull request. In Azure Repos Git, this functionality is implemented using branch policies. To enable pull request validation in Azure Git Repos, navigate to the branch policies for the desired branch, and configure the [Build validation policy](../../repos/git/branch-policies.md#build-validation) for that branch. For more information, see [Configure branch policies](../../repos/git/branch-policies.md).

>[!NOTE]
>To configure validation builds for an Azure Repos Git repository, you must be a project administrator of its project.

>[!NOTE]
>[Draft pull requests](../../repos/git/pull-requests.md#draft-pull-requests) do not trigger a pipeline even if you configure a branch policy.

::: moniker range=">tfs-2018"

### Validate contributions from forks

Building pull requests from Azure Repos forks is no different from building pull requests within the same repository or project. You can create forks only within the same organization that your project is part of.

::: moniker-end

::: moniker range=">tfs-2018"

[!INCLUDE [ci-triggers](includes/source-options.md)]

::: moniker-end

<a name="q-a"></a>
## FAQ

Problems related to Azure Repos integration fall into three categories:

* **[Failing triggers](#failing-triggers):** My pipeline is not being triggered when I push an update to the repo.
* **[Failing checkout](#failing-checkout):** My pipeline is being triggered, but it fails in the checkout step.
* **[Wrong version](#wrong-version):** My pipeline runs, but it is using an unexpected version of the source/YAML.

### Failing triggers

[!INCLUDE [qa](includes/qa2.md)]

* Are you configuring the PR trigger in the YAML file or in branch policies for the repo? For an Azure Repos Git repo, you cannot configure a PR trigger in the YAML file. You need to use [branch policies](../../repos/git/branch-policies.md).

[!INCLUDE [qa](includes/qa3.md)]

### Failing checkout

#### I see the following error in the log file during checkout step. How do I fix it?

```log
remote: TF401019: The Git repository with name or identifier XYZ does not exist or you do not have permissions for the operation you are attempting.
fatal: repository 'XYZ' not found
##[error] Git fetch failed with exit code: 128
```

Follow each of these steps to troubleshoot your failing triggers:

* Does the repository still exist? First, make sure it does by opening it in the **Repos** page.

* What is the [job authorization scope](../process/access-tokens.md#q-a) of the pipeline?
  * If the scope is **collection**: 
    * This may be an intermittent error. Re-run the pipeline.
    * Someone may have removed the access to **Project Collection Build Service account**.
      * Go to the **project settings** of the project in which the repository exists. Select Repos -> Repositories -> specific repository.
      * Check if **Project Collection Build Service (your-collection-name)** exists in the list of users.
      * Check if that account has **Create tag** and **Read** access.

  * If the scope is **project**: 
    * Is the repo in the same project as the pipeline?
      * Yes: 
        * This may be an intermittent error. Re-run the pipeline.
        * Someone may have removed the access to **Project Build Service account**.
          * Go to the **project settings** of the project in which the repository exists. Select Repos -> Repositories -> specific repository.
          * Check if **your-project-name Build Service (your-collection-name)** exists in the list of users.
          * Check if that account has **Create tag** and **Read** access.
      * No:
        * Is your pipeline in a public project?
          * Yes: You cannot access resources outside of your public project. Make the project private.
          * No: You need to take additional steps to grant access. Let us say that your pipeline exists in project **A** and that your repository exists in project **B**.
            * Go to the project settings of the project in which the repository exists (B). Select Repos -> Repositories -> specific repository.
            * Add **your-project-name Build Service (your-collection-name)** to the list of users, where your-project-name is the name of the project in which your pipeline exists (A).
            * Give **Create tag** and **Read** access to the account.

### Wrong version

[!INCLUDE [qa](includes/qa1.md)]
