---
title: Build definition source repositories
description: Specify the sources and repository that contains the code you want to build on VSTS and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 11/05/2017
monikerRange: '>= tfs-2015'
---

# Build definition source repositories

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh190721%28v=vs.120%29.aspx)**

At the beginning of the build process, the agent downloads files from your remote repository into a local sources directory.

[//]: # (TODO: confirm 2018 was version of multiple phases)

::: moniker range=">= tfs-2018"

If your build consists of multiple jobs (for example, because of multiple phases), the agent downloads the files at the beginning of each job. You can specify only a single source repository for your entire build process. 

::: moniker-end

::: moniker range=">= tfs-2018"

**VSTS and TFS 2018:** To specify the source repository, click the **Tasks** tab, and then click **Get sources**, and then select the type of repo that contains your source files.

::: moniker-end

::: moniker range="tfs-2017"

**TFS 2017:** To specify the source repository:

* **TFS 2017.3** Click the **Tasks** tab, and then click **Get sources**, and then select the type of repo that contains your source files.

* **TFS 2017 RTM** Click the **Repository** tab, and then select the type of repo that contains your source files.

::: moniker-end

::: moniker range=">= tfs-2015 < tfs-2017"

**TFS 2015:** To specify the source repository, click the **Repository** tab, and then select the type of repo that contains your source files.

::: moniker-end

::: moniker range=">= tfs-2015"

You can choose from the following repository types:

| Repository type               | VSTS (YAML) | VSTS | TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|-------------------------------|-------------|------|--------------------------------|--------------|
| Git repo in a team project    |Yes|Yes|Yes|Yes|
| Git repo in Bitbucket Cloud   |No|Yes|No|No|
| Git repo in GitHub            |Yes|Yes|No|No|
| Git repo in GitHub Enterprise |No|Yes|No|No|
| Git repo (external/remote)    |No|Yes|Yes|Yes|
| Subversion                    |No|Yes|Yes|No|
| Team Foundation Version Control (TFVC) repo in a team project |No|Yes|Yes|Yes|

> [!NOTE]
> To build code from Subversion, you must install a Subversion client (`svn`) on your [build agents](../agents/agents.md#install).

## Git options

When you select a Git repo (in a team project, GitHub, Bitbucket, or Remote Git repo), you've got the following options.

| Feature | VSTS | TFS 2018 | TFS 2017.2 | TFS 2017 RTM | TFS 2015.4 | TFS 2015 RTM |
|---------|------|------|----------|------------|--------------|------------|--------------|
|Branch|Yes|Yes|Yes|Yes|Yes|Yes|
|Clean|Yes|Yes|Yes|Yes|Yes|Yes|
|Tag or label sources|Team project|Team project|Team project|Team project|Team project|No|
|Report build status|Yes|Yes|Yes|Yes|No|No|
|Checkout submodules|Yes|Yes|Yes|Yes|Yes|Yes|
|Checkout files from LFS|Yes|Yes|Yes|macOS and Linux agents|macOS and Linux agents|macOS and Linux agents|
|Don't sync sources|Yes|Yes|Yes|No|No|No|
|Shallow fetch|Yes|Yes|Yes|macOS and Linux agents|macOS and Linux agents|macOS and Linux agents|

::: moniker-end

::: moniker range=">= tfs-2017"

> [!NOTE]
> **VSTS, TFS 2017.2 and newer:** Click **Advanced settings** in the **Get Sources** task to see some of the above options.<br/>
> **VSTS (YAML):** Not all of these options are available yet. For available options and syntax, refer to [YAML documentation](https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted-checkout.md).

::: moniker-end

::: moniker range=">= tfs-2015"

### Branch

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

**TFS 2017 RTM and TFS 2015**: This field is called **Default branch**.

::: moniker-end

::: moniker range=">= tfs-2015"

This is the branch that you want to be the default when you manually queue this build. If you set a scheduled trigger for the build, this is the branch from which your build will get the latest sources. The default branch has no bearing when the build is triggered through continuous integration (CI). Usually you'll set this to be the same as the default branch of the repository (for example, "master").

::: moniker-end

::: moniker range=">= tfs-2015"

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

::: moniker-end

::: moniker range="vsts"
> [!NOTE]
> Cleaning is not effective if you're using a [Microsoft-hosted agent](../agents/hosted.md) because you'll get a new agent every time.
::: moniker-end

::: moniker range=">= tfs-2017"

#### VSTS, TFS 2018, TFS 2017.2, TFS 2017.3

[//]: # (TODO: build.clean variable still works and overrides if clean is set to false)

Select one of the following options:

* **Sources**: The build process performs an undo of any changes in `$(Build.SourcesDirectory)`. More specifically, the following Git commands are executed prior to fetching the source.
 ```
 git clean -fdx
 git reset --hard HEAD
 ```

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`. Note that the `$(Build.ArtifactStagingDirectory)` and `$(Common.TestResultsDirectory)` are always deleted and recreated prior to every build regardless of any of these settings.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`. This results in initializing a new, local Git repository for every build.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`. This results in initializing a new, local Git repository for every build.

::: moniker-end

::: moniker range="tfs-2017"

#### TFS 2017 RTM

If you select **True** then the build process performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range="tfs-2015"

#### TFS 2015.4

If you select **True** then the build process performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

#### TFS 2015 RTM

[//]: # (TODO: clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range=">= tfs-2015"

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

Some build variables might yield a value that is not a valid label. For example, variables such as `$(Build.RequestedFor)` and `$(Build.DefinitionName)` can contain white space. If the value contains white space, the tag is not created.

After the sources are tagged by your build process, an artifact with the Git ref `refs/tags/{tag}` is automatically added to the completed build. This gives your team additional traceability and a more user-friendly way to navigate from the build to the code that was built.

::: moniker-end

[//]: # (TODO: confirm I got this next section right; e.g. GitHub not in TFS 2018 Update 1)

::: moniker range=">= tfs-2017"

### Report build status (VSTS, TFS 2017 and newer)

You've got the option to give your team a view of the build status from your remote source repository.

If your sources are in a Git repository in your project, then this option displays a badge in the **Code** hub to indicate whether the build is passing or failing. The build status is displayed in the following tabs:
* **Files**: Indicates the status of the latest build for the selected branch.
* **Commits**: Indicates the build status of the each commit (this requires continuous integration (CI) trigger to be enabled for your builds).
* **Branches**: Indicates the status of the latest build for each branch.

If you use multiple build definitions for the same repository in your project, then you may choose to enable this option for one or more of the definitions. In the case when this option is enabled on multiple definitions, the badge in the **Code** hub indicates the status of the latest build across all the definitions. Your team members can click the build status badge to view the latest build status for each one of the build definitions.

::: moniker-end

::: moniker range="vsts"

#### GitHub (VSTS)

If your sources are in GitHub, then this option publishes the status of your build to GitHub using [GitHub status APIs](https://developer.github.com/v3/repos/statuses/). If your build is triggered from a GitHub pull request, then you can view the status on the GitHub pull request page. This also allows you to set status policies within GitHub and automate merges. If your build is triggered by continuous integration (CI), then you can view the build status on the commit or branch in GitHub.

::: moniker-end

::: moniker range=">= tfs-2017"

#### Other types of Git remote repositories

If your source is in any other type of remote repository, then you cannot use VSTS or TFS to automatically publish the build status. However, you can use a [build badge](options.md) as a way to integrate and show build status within your version control experiences.

::: moniker-end

::: moniker range=">= tfs-2015"

### Checkout submodules

Select if you want to download files from [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
You can either choose to get the immediate submodules or all submodules nested to any depth of recursion.

The build process will check out your Git submodules as long as they are:

* **Unauthenticated:**  A public, unauthenticated repo with no credentials required to clone or fetch.

* **Authenticated:**  

 - Contained in the same project, GitHub organization, or Bitbucket account as the Git repo specified above.

 - Added by using a URL relative to the main repository. For example, this one would be checked out: ```git submodule add /../../submodule.git mymodule``` This one would not be checked out: ```git submodule add https://fabrikamfiber.visualstudio.com/DefaultCollection/_git/ConsoleApp mymodule```

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

> [!NOTE]
> If you're running **TFS 2017.1, TFS 2017 RTM, or TFS 2015**, then the submodules must be children (immediate submodules)** of the Git repo you've selected for this build process. In effect, the build process runs ```git submodule update --init``` (not ```git submodule update -init --recursive```).

::: moniker-end

::: moniker range=">= tfs-2015"

#### Authenticated submodules

> [!NOTE]
> Make sure that you have registered your submodules using HTTPS and not using SSH.

The same credentials that are used by the agent to get the sources from the main repository are also used to get the sources for submodules. 

If your main repository and submodules are in a Git repository in your VSTS project, then you can select the account used to access the sources. On the **Options** tab, on the **Build job authorization scope** menu, select either:

* **Project collection** to use the Project Collection Build service account

* **Current project** to use the Project Build Service account.

Make sure that whichever account you use has access to both the main repository as well as the submodules.

If your main repository and submodules are in the same GitHub organization, then the token stored in the GitHub service endpoint is used to access the sources.

#### Alternative to using the Checkout submodules option

In some cases you can't use the Checkout submodules option. You might have a scenario where a different set of credentials are needed to access the submodules. This can happen, for example, if your main repository is in VSTS and your submodules are in GitHub, if your main repository is in GitHub and your submodules are in VSTS, or if your submodules are in a different VSTS account than your main repository.

If you can't use the Checkout submodules option, then you can instead use a custom script with the following Git command to get the sources for submodules onto your agent.

```
git -c http.https://<url of submodule repository>.extraheader="AUTHORIZATION: basic ********" submodule update --init --recursive
```

Use a secret variable in your project or build definition to store the personal access token (PAT) that you generate in VSTS or GitHub with access to your submodules. Use that variable to populate the secret in the above Git command.

> [!NOTE]
> **Q: Why can't I use a Git credential manager on the agent?** **A:** Storing the submodule credentials in a Git credential manager installed on your private build agent is usually not effective as the credential manager may prompt you to re-enter the credentials whenever the submodule is updated. This isn't desirable during automated builds when user interaction isn't possible.

::: moniker-end

::: moniker range=">= tfs-2015"

### Checkout files from LFS

Select if you want to download files from [large file storage (LFS)](../../git/manage-large-files.md).

::: moniker-end

::: moniker range=">= tfs-2017"

* **VSTS, TFS 2017.3 and newer:** Select the check box to enable this option.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

* **TFS 2017 RTM and TFS 2015 (macOS and Linux only):** On the **Variables** tab, set `Agent.Source.Git.Lfs` to `true`.

::: moniker-end

::: moniker range=">= tfs-2015"

If you're using TFS, or if you're using VSTS with a self-hosted agent, then you must install git-lfs on the agent to make this option work.

::: moniker-end

::: moniker range=">= tfs-2017"

### Don't sync sources (TFS 2017 and newer only)

Use this option if you want to skip fetching new commits. This option can be useful in cases when you want to:

* Git init, config, and fetch using your own custom options.

* Use a build process to just run automation (for example some scripts) that do not depend on code in version control.

If you want to disable downloading sources:

* **VSTS, TFS 2017.2, and newer:** Click **Advanced settings**, and then select **Don't sync sources**.

* **TFS 2017 RTM:** Define `Build.SyncSources` on the **Variables** and set its value to false.

> [!NOTE]
> When you use this option, the agent also skips running Git commands that clean the repo.

::: moniker-end

::: moniker range=">= tfs-2015"

### Shallow fetch

Select if you want to limit how far back in history to download. Effectively this results in `git fetch --depth=n`. If your repository is large, this option might make your build process more efficient. Your repository might be large if it has been in use for a long time. It also might be large if you added and later deleted large files.

In these cases this option can help you conserve network and storage resources. It might also save time. The reason it doesn't always save time is because in some situations the server might need to spend time calculating the commits to download.

::: moniker-end

::: moniker range=">= tfs-2017"

#### VSTS, TFS 2018, TFS 2017.2

After you select the check box to enable this option, in the **Depth** box specify the number of commits.

> **Tip:** The `Agent.Source.Git.ShallowFetchDepth` variable mentioned below also works and overrides the check box controls. This way you can modify the setting when you queue the build.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

#### TFS 2017 RTM, TFS 2015 (macOS and Linux only)

On the **Variables** tab, define `Agent.Source.Git.ShallowFetchDepth` and set its value to the number of commits in history you want to download. Specify 0 to set no limit.

::: moniker-end

::: moniker range=">= tfs-2015"

## TFVC options

| Feature | VSTS, TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|---------|--------------------------------------|--------------|
| Clean   |Yes|Yes|
| Specify local path |Yes|No|
| Label sources|Yes|No|

> [!NOTE]
> **VSTS, TFS 2017.2 and newer:** Click **Advanced settings** to see some of the following options.

### Repository name

Ignore this text box (**TFS 2017 RTM** or older).

### Mappings (workspace)

Include with a type value of **Map** only the folders that your build process requires. If a subfolder of a mapped folder contains files that the build process does not require, map it with a type value of **Cloak**.

Make sure that you **Map** all folders that contain files that your build process requires. For example, if you add another project, you might have to add another mapping to the workspace.

**Cloak** folders you don't need. By default the root folder of team project is mapped in the workspace. This configuration results in the build agent downloading all the files in the version control folder of your team project. If this folder contains lots of data, your build could waste build system resources and slow down your build process by downloading large amounts of data that it does not require.

When you remove projects, look for mappings that you can remove from the workspace.

If this is a CI build, in most cases you should make sure that these mappings match the filter settings of your CI trigger on the [Triggers tab](triggers.md).

For more information on how to optimize a TFVC workspace, see [Optimize your workspace](../../tfvc/optimize-your-workspace.md).

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

::: moniker-end

::: moniker range="vsts"
> [!NOTE]
> Cleaning is not relevant if you are using a [Microsoft-hosted agent](../agents/hosted.md) because you get a new agent every time in that case.
::: moniker-end

::: moniker range=">= tfs-2017"

#### VSTS, TFS 2018, TFS 2017.2

If you want to clean the repo, then select **true**, and then select one of the following options:

* **Sources**: The build process performs an undo of any changes and scorches the current workspace under `$(Build.SourcesDirectory)`.

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`.

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

#### TFS 2017 RTM, TFS 2015.4

If you select **True** then the build process performs an undo of any changes and scorches the workspace.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

::: moniker-end

::: moniker range="tfs-2015"

#### TFS 2015 RTM

[//]: # (TODO: confirm this is correct for TFVC; clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [TFVC label](../../tfvc/use-labels-take-snapshot-your-files.md).

::: moniker-end

::: moniker range=">= tfs-2015"

## Q&A  

<!-- BEGINSECTION class="md-qanda" -->

### How do I reference the directories on the build agent?

Reference directories using build variables such as `$(Build.SourcesDirectory)` and `$(Build.BinariesDirectory)`. To learn more, see [Build variables](variables.md).

### What protocols can the build agent use with Git?

We support HTTPS.

We don't yet support SSH. See [User Voice: Allow build to use ssh authentication while checking out git sub modules](https://visualstudio.uservoice.com/forums/330519-team-services/suggestions/15109674-allow-build-to-use-ssh-authentication-while-checki)

### What is scorch?

Scorch is a TFVC power tool. See [Microsoft Visual Studio Team Foundation Server 2015 Power Tools
](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power).

[!INCLUDE [temp](../_shared/qa-agents.md)]

::: moniker-end

::: moniker range="< vsts"
[!INCLUDE [temp](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
