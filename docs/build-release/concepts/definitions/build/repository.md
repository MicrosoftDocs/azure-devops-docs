---
title: Build definition source repositories
description: Specify the sources and repository that contains the code you want to build on VSTS and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.manager: douge
ms.author: alewis
ms.date: 11/05/2017
---

# Build definition source repositories

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh190721%28v=vs.120%29.aspx)**

At the beginning of the build process, the agent downloads files from your remote repository into a local sources directory. If your build consists of multiple jobs (for example, because of multiple phases), the agent downloads the files at the beginning of each job. You can specify only a single source repository for your entire build process. 

To specify the source repository:

* **VSTS, TFS 2017.2, and newer:** Click the **Tasks** tab, and then click **Get sources**, and then select the type of repo that contains your source files.

* **TFS 2017 RTM and older:** Click the **Repository** tab, and then select the type of repo that contains your source files.

> If you use YAML files for defining your build process in VSTS, then the repository is implicitly the same as the one in which your YAML file is present.

You can choose from the following repository types:

| Repository type               | VSTS (YAML) | VSTS | TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|-------------------------------|-------------|------|--------------------------------|--------------|
| Git repo in a team project    |Yes|Yes|Yes|Yes|
| Git repo in Bitbucket Server  |No|Yes|No|No|
| Git repo in GitHub            |Yes|Yes|No|No|
| Git repo in GitHub Enterprise |No|Yes|No|No|
| Git repo (remote/external)    |No|Yes|Yes|Yes|
| Subversion                    |No|Yes|Yes|No|
| Team Foundation Version Control (TFVC) repo in a team project |No|Yes|Yes|Yes|

> [!NOTE]
> To build code in Subversion, you must install a Subversion client (`svn`) on your [build agents](../../../concepts/agents/agents.md#install).

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

> [!NOTE]
> **VSTS, TFS 2017.2 and newer:** Click **Advanced settings** in the **Get Sources** task to see some of the above options.<br/>
> **VSTS (YAML):** Not all of these options are available yet. For available options and syntax, refer to [YAML documentation](https://github.com/Microsoft/vsts-agent/blob/master/docs/preview/yamlgettingstarted-checkout.md).

### Branch

(On **TFS 2017 RTM** and older, **Default branch**): This is the branch that you want to be the default when you manually queue this build. If you set a scheduled trigger for the build, this is the branch from which your build will get the latest sources. The default branch has no bearing when the build is triggered through continuous integration (CI). Usually you'll set this to be the same as the default branch of the repository (for example, "master").

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

#### VSTS, TFS 2018, TFS 2017.2, TFS 2017.3

[//]: # (TODO: build.clean variable still works and overrides if clean is set to false)

Select one of the following options:

* **Sources**: The build process performs an undo of any changes in `$(Build.SourcesDirectory)`. More specifically, the following git commands are executed prior to fetching the source.
 ```
 git clean -fdx
 git reset --hard HEAD
 ```

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`. Note that the `$(Build.ArtifactStagingDirectory)` and `$(Common.TestResultsDirectory)` are always deleted and recreated prior to every build regardless of any of these settings.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`. This results in initializing a new local git repository for every build.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`. This results in initializing a new local git repository for every build.

#### TFS 2017 RTM, TFS 2015.4

If you select **True** then the build process performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

#### TFS 2015 RTM

[//]: # (TODO: clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

Some build variables might yield a value that is not a valid label. For example variables such as `$(Build.RequestedFor)` and `$(Build.DefinitionName)` can contain white space. If the value contains white space, the tag is not created.

After the sources are tagged by your build process, an artifact with the git ref `refs/tags/{tag}` is automatically added to the completed build. This gives your team additional traceability and a more user-friendly way to navigate from the build to the code that was built.

### Report build status

You've got the option to give your team a view of the build status from your remote source repository.

#### VSTS and TFS 2017 and newer

If your sources are in a Git repository in your team project, then this option displays a badge in the **Code** hub to indicate whether the build is passing or failing. The build status is displayed in the following tabs:
* **Files**: Indicates the status of the latest build for the selected branch.
* **Commits**: Indicates the build status of the each commit (this requires continuous integration (CI) trigger to be enabled for your builds).
* **Branches**: Indicates the status of the latest build for each branch.

If you use multiple build definitions for the same repository in your team project, then you may choose to enable this option for one or more of the definitions. In the case when this option is enabled on multiple definitions, the badge in the **Code** hub indicates the status of the latest build across all the definitions. Your team members can click the build status badge to view the latest build status for each one of the build definitions.

#### GitHub

If your sources are in GitHub, then this option publishes the status of your build to GitHub using [GitHub status APIs](https://developer.github.com/v3/repos/statuses/). If your build is triggered from a GitHub pull request, then you can view the status on the GitHub pull request page. This also allows you to set status policies within GitHub and automate merges. If your build is triggered by continuous integration (CI), then you can view the build status on the commit or branch in GitHub.

#### Other types of Git remote repositories

If your source is in any other type of remote repository, then you cannot use VSTS or TFS to automatically publish the build status. However, you can use a [build badge](options.md) as a way to integrate and show build status within your version control experiences.

### Checkout submodules

Select if you want to download files from [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).
You can either choose to get the immediate submodules or all submodules nested to any depth of recursion.

The build process will check out your Git submodules so long as they are:

* **Unauthenticated:**  A public unauthenticated repo with no credentials required to clone or fetch.

* **Authenticated:**  

 - Contained in the same team project, GitHub organization, or Bitbucket account as the Git repo specified above.

 - Added by using a relative url from main repository. For example this one would be checked out: ```git submodule add /../../submodule.git mymodule``` This one would not be checked out: ```git submodule add https://fabrikamfiber.visualstudio.com/DefaultCollection/_git/ConsoleApp mymodule```

> [!NOTE]
> If you're running **TFS 2017.1 or older**, then the submodules must be children (immediate submodules)** of the Git repo you've selected for this build process. In effect, the build process runs ```git submodule update --init``` (not ```git submodule update -init --recursive```).

#### Authenticated submodules

> [!NOTE]
> Make sure that you have registered your submodules using HTTPS and not using SSH.

The same credentials that are used by the agent to get the sources from the main repository are also used to get the sources for submodules. 

If your main repository and submodules are in a Git repository in your VSTS team project, then you can select the account used to access the sources. On the **Options** tab, on the **Build job authorization scope** menu, select either:

* **Project collection** to use the Project Collection Build service account 

* **Current project** to use the Project Build Service account.

Make sure that whichever account you use has access to both the main repository as well as the submodules. 

If your main repository and submodules are in the same GitHub organization, then the token stored in the GitHub service endpoint is used to access the sources.

#### Alternative to using the Checkout submodules option

In some cases you can't use the Checkout submodules option. You might have a scenario where a different set of credentials are needed to access the submodules. This can happen, for example, if your main repository is in VSTS and your submodules are in GitHub, if your main repository is in GitHub and your submodules are in VSTS, or if your submodules are in a different VSTS account than your main repository. 

If you can't use the Checkout submodules option, then you can instead use a custom script with the following git command to get the sources for submodules onto your agent.

```
git -c http.https://<url of submodule repository>.extraheader="AUTHORIZATION: basic ********" submodule update --init –recursive
```

Use a secret variable in your project or build definition to store the personal access token (PAT) that you generate in VSTS or GitHub with access to your submodules. Use that variable to populate the secret in the above git command.

> [!NOTE]
> **Q: Why can't I use a Git credential manager on the agent?** **A:** Storing the submodule credentials in a git credential manager installed on your private build agent is usually not effective as the credential manager may prompt you to re-enter the credentials whenever the submodule is updated. This is not desirable in automated builds.

### Checkout files from LFS

Select if you want to download files from [large file storage (LFS)](../../../../git/manage-large-files.md).

* **VSTS:** Select the check box to enable this option.

* **TFS 2017 and TFS 2015 (macOS and Linux only):** On the **Variables** tab, set `Agent.Source.Git.Lfs` to `true`.

If you use a private agent for your build, then you must install git-lfs to make this option work.

### Don't sync sources

Use this option if you want to skip fetching new commits. This option can be useful in cases such as when you want to:

* Git init, config, and fetch using your own custom options.

* Use a build process to just run automation (for example some scripts) that do not depend on code in version control.

If you want to disable downloading sources:

* **VSTS, TFS 2017.2, and newer:** Click **Advanced settings**, and then select **Don't sync sources**.

* **TFS 2017 RTM:** Define `Build.SyncSources` on the **Variables** and set its value to false.

* **TFS 2015:** This feature is not available.

> [!NOTE]
> When you use this option, the agent also skips running git commands that clean the repo.

### Shallow fetch

Select if you want to limit how far back in history to download. Effectively this results in `git fetch --depth=n`. If your repository is large, this option might make your build process more efficient. Your repository might be large if it has been in use for a long time. It also might be large if you added and later deleted large files.

In these cases this option can help you conserve network and storage resources. It might also save time. The reason it doesn't always save time is because in some situations the server might need to spend time calculating the commits to download.

#### VSTS, TFS 2018, TFS 2017.2

After you select the check box to enable this option, in the **Depth** box specify the number of commits.

> **Tip:** The `Agent.Source.Git.ShallowFetchDepth` variable mentioned below also works and overrides the check box controls. This way you can modify the setting when you queue the build.

#### TFS 2017 RTM, TFS 2015 (macOS and Linux only)

On the **Variables** tab, define `Agent.Source.Git.ShallowFetchDepth` and set its value to the number of commits in history you want to download. Specify 0 to set no limit.

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

For more information on how to optimize a TFVC workspace, see [Optimize your workspace](../../../../tfvc/optimize-your-workspace.md).

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

#### VSTS, TFS 2018, TFS 2017.2

If you want to clean the repo, then select **true**, and then select one of the following options:

* **Sources**: The build process performs an undo of any changes and scorches the current workspace under `$(Build.SourcesDirectory)`.

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`.

#### TFS 2017 RTM, TFS 2015.4

If you select **True** then the build process performs an undo of any changes and scorches the workspace.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

#### TFS 2015 RTM

[//]: # (TODO: confirm this is correct for TFVC; clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [TFVC label](../../../../tfvc/use-labels-take-snapshot-your-files.md).

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

[!INCLUDE [temp](../../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
