---
title: Options for Git repositories
description: Options that are available when using a Git repository with Azure Pipelines
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: a74b3efe-d7bd-438a-be32-47d036556f74
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.custom: seodec18
ms.date: 03/06/2019
monikerRange: '>= tfs-2015'
---

# Pipeline options for Git repositories

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

While editing a pipeline that uses a Git repo (in an Azure DevOps or TFS project, GitHub, GitHub Enterprise Server, Bitbucket Cloud, or another Git repo), you have the following options.

| Feature | Azure Pipelines | TFS 2017.2 and higher | TFS 2017 RTM | TFS 2015.4 | TFS 2015 RTM |
|---------|------|------|----------|------------|--------------|------------|--------------|
|Branch|Yes|Yes|Yes|Yes|Yes|
|Clean|Yes|Yes|Yes|Yes|Yes|
|Tag or label sources|Project; Designer only|Team project|Team project|Team project|No|
|Report build status|Yes|Yes|Yes|No|No|
|Checkout submodules|Yes|Yes|Yes|Yes|Yes|
|Checkout files from LFS|Yes|Yes|Linux and macOS agents|Linux and macOS agents|Linux and macOS agents|
|Clone a second repo|Yes|Yes|Yes|Yes|Yes|
|Don't sync sources|Yes|Yes|No|No|No|
|Shallow fetch|Yes|Yes|Linux and macOS agents|Linux and macOS agents|Linux and macOS agents|

::: moniker range=">= tfs-2017"

> [!NOTE]
> **Azure Pipelines, TFS 2017.2 and newer:** Click **Advanced settings** in the **Get Sources** task to see some of the above options.<br/>

::: moniker-end

::: moniker range=">= tfs-2015"

## Branch

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

**TFS 2017 RTM and TFS 2015**: This field is called **Default branch**.

::: moniker-end

::: moniker range=">= tfs-2015"

This is the branch that you want to be the default when you manually queue this build. If you set a scheduled trigger for the build, this is the branch from which your build will get the latest sources. The default branch has no bearing when the build is triggered through continuous integration (CI). Usually you'll set this to be the same as the default branch of the repository (for example, "master").

::: moniker-end

::: moniker range=">= tfs-2015"

## Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

::: moniker-end

::: moniker range="azure-devops"
> [!NOTE]
> Cleaning is not effective if you're using a [Microsoft-hosted agent](../agents/hosted.md) because you'll get a new agent every time.
::: moniker-end

::: moniker range=">= tfs-2017"

### Azure Pipelines, TFS 2018, TFS 2017.2, TFS 2017.3

[//]: # (TODO: build.clean variable still works and overrides if clean is set to false)

Select one of the following options:

* **Sources**: The build pipeline performs an undo of any changes in `$(Build.SourcesDirectory)`. More specifically, the following Git commands are executed prior to fetching the source.
 ```
 git clean -ffdx
 git reset --hard HEAD
 ```

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`. Note that the `$(Build.ArtifactStagingDirectory)` and `$(Common.TestResultsDirectory)` are always deleted and recreated prior to every build regardless of any of these settings.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`. This results in initializing a new, local Git repository for every build.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`. This results in initializing a new, local Git repository for every build.

::: moniker-end

::: moniker range="tfs-2017"

### TFS 2017 RTM

If you select **True** then the build pipeline performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range="tfs-2015"

### TFS 2015.4

If you select **True** then the build pipeline performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

### TFS 2015 RTM

[//]: # (TODO: clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range=">= tfs-2015"

[!INCLUDE [include](_shared/label-sources.md)]

The build pipeline labels your sources with a [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

Some build variables might yield a value that is not a valid label. For example, variables such as `$(Build.RequestedFor)` and `$(Build.DefinitionName)` can contain white space. If the value contains white space, the tag is not created.

After the sources are tagged by your build pipeline, an artifact with the Git ref `refs/tags/{tag}` is automatically added to the completed build. This gives your team additional traceability and a more user-friendly way to navigate from the build to the code that was built.

::: moniker-end

[//]: # (TODO: confirm I got this next section right; e.g. GitHub not in TFS 2018 Update 1)

::: moniker range=">= tfs-2017"

## Report build status (Azure Pipelines, TFS 2017 and newer)

You've got the option to give your team a view of the build status from your remote source repository.

If your sources are in an Azure Repos Git repository in your project, then this option displays a badge on the **Code** page to indicate whether the build is passing or failing. The build status is displayed in the following tabs:
* **Files**: Indicates the status of the latest build for the selected branch.
* **Commits**: Indicates the build status of the each commit (this requires the continuous integration (CI) trigger to be enabled for your builds).
* **Branches**: Indicates the status of the latest build for each branch.

If you use multiple build pipelines for the same repository in your project, then you may choose to enable this option for one or more of the pipelines. In the case when this option is enabled on multiple pipelines, the badge on the **Code** page indicates the status of the latest build across all the pipelines. Your team members can click the build status badge to view the latest build status for each one of the build pipelines.

::: moniker-end

::: moniker range="azure-devops"

### GitHub

If your sources are in GitHub, then this option publishes the status of your build to GitHub using GitHub [Checks](https://developer.github.com/v3/checks/) or [Status](https://developer.github.com/v3/repos/statuses/) APIs. If your build is triggered from a GitHub pull request, then you can view the status on the GitHub pull requests page. This also allows you to set status policies within GitHub and automate merges. If your build is triggered by continuous integration (CI), then you can view the build status on the commit or branch in GitHub.

::: moniker-end

::: moniker range=">= tfs-2017"

### Other types of Git remote repositories

If your source is in any other type of remote repository, then you cannot use Azure Pipelines or TFS to automatically publish the build status to that repository. However, you can use a [build badge](../build/options.md) as a way to integrate and show build status within your version control experiences.

::: moniker-end

::: moniker range=">= tfs-2015"

## Checkout submodules

Select if you want to download files from [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
You can either choose to get the immediate submodules or all submodules nested to any depth of recursion.

The build pipeline will check out your Git submodules as long as they are:

* **Unauthenticated:**  A public, unauthenticated repo with no credentials required to clone or fetch.

* **Authenticated:**  

 - Contained in the same project, GitHub organization, or Bitbucket Cloud account as the Git repo specified above.

 - Added by using a URL relative to the main repository. For example, this one would be checked out: ```git submodule add /../../submodule.git mymodule``` This one would not be checked out: ```git submodule add https://dev.azure.com/fabrikamfiber/_git/ConsoleApp mymodule```

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

> [!NOTE]
> If you're running **TFS 2017.1, TFS 2017 RTM, or TFS 2015**, then the submodules must be children (immediate submodules)** of the Git repo you've selected for this build pipeline. In effect, the build pipeline runs ```git submodule update --init``` (not ```git submodule update -init --recursive```).

::: moniker-end

::: moniker range=">= tfs-2015"

### Authenticated submodules

> [!NOTE]
> Make sure that you have registered your submodules using HTTPS and not using SSH.

The same credentials that are used by the agent to get the sources from the main repository are also used to get the sources for submodules.

If your main repository and submodules are in an Azure Repos Git repository in your Azure DevOps project, then you can select the account used to access the sources. On the **Options** tab, on the **Build job authorization scope** menu, select either:

* **Project collection** to use the Project Collection Build service account

* **Current project** to use the Project Build Service account.

Make sure that whichever account you use has access to both the main repository as well as the submodules.

If your main repository and submodules are in the same GitHub organization, then the token stored in the GitHub service connection is used to access the sources.

### Alternative to using the Checkout submodules option

In some cases you can't use the **Checkout submodules** option.
You might have a scenario where a different set of credentials are needed to access the submodules.
This can happen, for example, if your main repository and submodule repositories aren't stored in the same Azure DevOps organization or Git service.

If you can't use the **Checkout submodules** option, then you can instead use a custom script step to fetch submodules.
First, get a personal access token (PAT) and prefix it with "pat:".
Next, Base64-encode this string to create a basic auth token.
Finally, add this script to your pipeline:

```
git -c http.https://<url of submodule repository>.extraheader="AUTHORIZATION: basic <BASIC_AUTH_TOKEN>" submodule update --init --recursive
```

Be sure to replace "<BASIC_AUTH_TOKEN>" with your Base64-encoded token.

Use a secret variable in your project or build pipeline to store the basic auth token that you generated.
Use that variable to populate the secret in the above Git command.
> [!NOTE]
> **Q: Why can't I use a Git credential manager on the agent?** **A:** Storing the submodule credentials in a Git credential manager installed on your private build agent is usually not effective as the credential manager may prompt you to re-enter the credentials whenever the submodule is updated. This isn't desirable during automated builds when user interaction isn't possible.

::: moniker-end

::: moniker range=">= tfs-2015"

## Checkout files from LFS

Select if you want to download files from [large file storage (LFS)](../../repos/git/manage-large-files.md).

::: moniker-end

::: moniker range=">= tfs-2017"

* **Azure Pipelines, TFS 2017.3 and newer:** Select the check box to enable this option.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

* **TFS 2017 RTM and TFS 2015 (macOS and Linux only):** On the **Variables** tab, set `Agent.Source.Git.Lfs` to `true`.

::: moniker-end

::: moniker range=">= tfs-2015"

If you're using TFS, or if you're using Azure Pipelines with a self-hosted agent, then you must install git-lfs on the agent for this option to work.

::: moniker-end

::: moniker range=">= tfs-2015"

## Clone a second repo

By default, your pipeline is associated with one repo from Azure Repos or an external provider.
This is the repo that can trigger builds on commits and pull requests.

You may want to include sources from a second repo in your pipeline.
You can do this by writing a script.

```
git clone https://github.com/Microsoft/TypeScript.git
```

If the repo is not public, you will need to pass authentication to the Git command.

### Azure Repos

For another repository hosted in Azure Repos, you usually don't have to authenticate again if you already have access to the repo.
If you need to clone someone else's repo, you will need their credentials to authenticate.
It's recommended that you have them create a [secret variable](../process/variables.md#secret-variables) for their credentials.
This will allow the pipeline to use the value without you being able to see it.

For Azure Repos, you can use a personal access token with the **Code (Read)** permission.
Send this as the password field in a "Basic" authorization header without a username.
(In other words, base64-encode the value of `:<PAT>`, including the colon.)

```
AUTH=$(echo -n ":$REPO_PAT" | openssl base64 | tr -d '\n')
git -c http.<repo URL>.extraheader="AUTHORIZATION: basic $AUTH" clone <repo URL> --no-checkout --branch master
```

> [!NOTE]
> Secret variables are not automatically made available to scripts as environment variables.
> See [Secret variables](../process/variables.md#secret-variables) on how to map them in.

::: moniker-end

::: moniker range=">= tfs-2017"

## Don't sync sources (TFS 2017 and newer only)

Use this option if you want to skip fetching new commits. This option can be useful in cases when you want to:

* Git init, config, and fetch using your own custom options.

* Use a build pipeline to just run automation (for example some scripts) that do not depend on code in version control.

If you want to disable downloading sources:

* **Azure Pipelines, TFS 2017.2, and newer:** Click **Advanced settings**, and then select **Don't sync sources**.

* **TFS 2017 RTM:** Define `Build.SyncSources` on the **Variables** and set its value to false.

> [!NOTE]
> When you use this option, the agent also skips running Git commands that clean the repo.

::: moniker-end

::: moniker range=">= tfs-2015"

## Shallow fetch

Select if you want to limit how far back in history to download. Effectively this results in `git fetch --depth=n`. If your repository is large, this option might make your build pipeline more efficient. Your repository might be large if it has been in use for a long time and has sizeable history. It also might be large if you added and later deleted large files.

In these cases this option can help you conserve network and storage resources. It might also save time. The reason it doesn't always save time is because in some situations the server might need to spend time calculating the commits to download for the depth you specify.

> [!NOTE]
> When the build is queued, the branch to build is resolved to a commit ID. Then, the agent
> fetches the branch and checks out the desired commit. There is a small window between when a branch
> is resolved to a commit ID and when the agent performs the checkout. If the branch updates rapidly
> and you set a very small value for shallow fetch, the commit may not exist when the agent attempts
> to check it out. If that happens, increase the shallow fetch depth setting.

::: moniker-end

::: moniker range=">= tfs-2017"

### Azure Pipelines, TFS 2018, TFS 2017.2

After you select the check box to enable this option, in the **Depth** box specify the number of commits.

> **Tip:** The `Agent.Source.Git.ShallowFetchDepth` variable mentioned below also works and overrides the check box controls. This way you can modify the setting when you queue the build.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

### TFS 2017 RTM, TFS 2015 (macOS and Linux only)

On the **Variables** tab, define `Agent.Source.Git.ShallowFetchDepth` and set its value to the number of commits in history you want to download. Specify 0 to set no limit.

::: moniker-end

::: moniker range=">= tfs-2015"

## Prefer Git from path

The Windows agent comes with its own copy of Git.
If you prefer to supply your own Git rather than use the included copy, set `System.PreferGitFromPath` to `true`.
This setting is always true on non-Windows agents.

## Trigger Options for Other Git

When using an Other/external Git repository, CI builds require that the repository is accessible from the internet. If the repository is behind a firewall or proxy, then only scheduled and manual builds will work.

## Q & A  

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](_shared/git-protocols.md)]

::: moniker-end

::: moniker range="< azure-devops"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
