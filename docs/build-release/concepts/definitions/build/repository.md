---
title: Build definition source repositories
description: Specify the sources and repository that contains the code you want to build on VSTS and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.manager: douge
ms.author: alewis
ms.date: 09/27/2017
---

# Build definition source repositories

**VSTS | TFS 2018 | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh190721%28v=vs.120%29.aspx)**

At the beginning of the build process, the agent downloads files from your remote repository into a local sources directory. To specify the source repository:

* **VSTS, TFS 2017.2, and newer:** Click the **Tasks** tab, and then click **Get sources**, and then select the type of repo that contains your source files.

* **TFS 2017 RTM and older:** Click the **Repository** tab, and then select the type of repo that contains your source files.

You can choose from the following repository types:

| Repository type            | VSTS | TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|----------------------------|------|--------------------------------|--------------|
| Git repo in a team project |Yes|Yes|Yes|
| Git repo in GitHub         |Yes|No|No|
| Git repo in Bitbucket      |Yes|No|No|
| Git repo (remote external) |Yes|Yes|Yes|
| Team Foundation Version Control (TFVC) repo in a team project|Yes|Yes|Yes|
| Subversion                 |Yes|Yes|No|

> [!NOTE]
> To build code in Subversion, you must install the Subversion client on your [build agents](../../../concepts/agents/agents.md#install).

## Git options

When you select a Git repo (in a team project, GitHub, Bitbucket, or Remote Git repo), you've got the following options.

| Feature | VSTS | TFS 2018 | TFS 2017.2 | TFS 2017 RTM | TFS 2015.4 | TFS 2015 RTM |
|---------|------|----------|------------|--------------|------------|--------------|
|Clean|Yes|Yes|Yes|Yes|Yes|Yes|
|Checkout submodules|Yes|Yes|Yes|Yes|Yes|Yes|
|Tag or label sources|Team project|Team project|Team project|Team project|Team project|No|
|Report build status|Yes|Yes|Yes|Yes|No|No|
|Checkout files from LFS|Yes|Yes|Yes|OSX and Linux agents|OSX and Linux agents|OSX and Linux agents|
|Don't sync sources|Yes|Yes|Yes|No|No|No|
|Shallow fetch|Yes|Yes|Yes|OSX and Linux agents|OSX and Linux agents|OSX and Linux agents|

> [!NOTE]
> **VSTS, TFS 2017.2 or newer:** Click **Advanced settings** to see some of the following options.

### Repository

Select a repository.

### Branch

(On **TFS 2017 RTM** or older, **Default branch**): Select the branch that you want to be the default when you manually queue this build.

### Clean the local repo on the agent

[!INCLUDE [include](_shared/build-clean-intro.md)]

#### VSTS, TFS 2018, TFS 2017.2

[//]: # (TODO: build.clean variable still works and overrides if clean is set to fale)

If you want to clean the repo, then select **true**, and then select one of the following options:

* **Sources**: The build process performs an undo of any changes in `$(Build.SourcesDirectory)`.

* **Sources and output directory**: Same operation as **Sources** option above, plus: Deletes and recreates `$(Build.BinariesDirectory)`.

* **Sources directory**: Deletes and recreates `$(Build.SourcesDirectory)`.

* **All build directories**: Deletes and recreates `$(Agent.BuildDirectory)`.

#### TFS 2017 RTM

[//]: # (TODO: I wonder if this material from the product tooltip is wrong. The info for 2015.4 below is older version and would make more sense here.)

If you select **True** then the build process performs an undo of any changes. If errors occur, then it deletes the contents of `$(Build.SourcesDirectory)`.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

#### TFS 2015.4

[//]: # (TODO: clarify. which build variable exactly is the source folder?)

If you select **True**, then: 

* If you have git.exe installed on the agent, then this command is run in the repository folder: `git clean -fdx` and `git reset -hard HEAD`.

* Otherwise, if git.exe is not installed on the agent, or if any of these commands exit with non-zero return code, then the repsitory folder is deleted.

[!INCLUDE [temp](_shared/build-clean-variable.md)]

#### TFS 2015 RTM

[//]: # (TODO: clarify folder)

Select **true** to delete the repository folder.

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

Some build variables might yield a value that is not a valid label. For example variables such as `$(Build.RequestedFor)` and `$(Build.DefinitionName)` can contain white space. If the value contains white space, the tag is not created.

### Report build status

Displays a badge on the Code tab to indicate whether the build is passing or failing.

### Checkout submodules

Select if you want to download files from [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). The build process will check out your Git submodules so long as they are:

* **Children (immediate submodules)** of the Git repo you've selected for this build process. In effect, the build process runs ```git submodule update --init``` (not ```git submodule update -init --recursive```).

* **Unauthenticated:**  A public unauthenticated repo with no credentials required to clone or fetch.

* **Authenticated:**  

 - Contained in the same team project, GitHub organization, or Bitbucket account as the Git repo specified above.

 - Added by using a relative url from main repository. For example this one would be checked out: ```git submodule add /../../submodule.git mymodule``` This one would not be checked out: ```git submodule add https://fabrikamfiber.visualstudio.com/DefaultCollection/_git/ConsoleApp mymodule```

### Checkout files from LFS
 
Select if you want to download files from [large file storage (LFS)](https://www.visualstudio.com/en-us/docs/git/manage-large-files#use-git-large-file-storage-lfs).

* **VSTS:** Select the check box to enable this option.

* **TFS 2017 and TFS 2015 (OSX and Linux only):** On the **Variables** tab, set `Agent.Source.Git.Lfs` to `true`.

### Don't sync sources

Use this option if you want to skip fetching new commits. This option can be useful in cases such as when you want to:

* Git init, config, and fetch using your own custom options.

* Use a build process to just run automation (for example some scripts) that do not depend on code in version control.

If you want to disable downloading sources:

* **VSTS, TFS 2017.2, and newer:** Click **Advanced settings**, and then select **Don't sync sources**.

* **TFS 2017 RTM and older:** Define `Build.SyncSources` on the **Variables** and set its value to false.

### Shallow fetch

Select if you want to limit how far back in history to download. Effectively this results in `git fetch --depth=n`. If your repository is large, this option might make your build process more efficient. Your repository might be large if it has been in use for a long time. It also might be large if you added and later deleted large files. 

In these cases this option can help you conserve network and storage resources. It might also save time. The reason it doesn't always save time is because in some situations the server might need to spend time calculating the commits to download. 

#### VSTS, TFS 2018, TFS 2017.2

After you select the check box to enable this option, in the **Depth** box specify the number of commits. 

> **Tip:** The `Agent.Source.Git.ShallowFetchDepth` variable mentioned below also works and overrides the check box controls. This way you can can modify the setting when you queue the build.

#### TFS 2017 RTM, TFS 2015 (MacOS and Linux only)

On the **Variables** tab, define `Agent.Source.Git.ShallowFetchDepth` and set its value to the number of commits in history you want to download. Specify 0 to set no limit.

## TFVC options

| Feature | VSTS, TFS 2018, TFS 2017, TFS 2015.4 | TFS 2015 RTM |
|---------|--------------------------------------|--------------|
| Clean   |Yes|Yes|
| Specify local path |Yes|No|
| Label sources|Yes|No|

> [!NOTE]
> **VSTS, TFS 2017.2 or newer:** Click **Advanced settings** to see some of the following options.

### Repository name

Ignore this text box (**TFS 2017 RTM** or older).

### Mappings (workspace)

Include with a type value of **Map** only the folders that your build process requires. If a subfolder of a mapped folder contains files that the build process does not require, map it with a type value of **Cloak**.

Make sure that you **Map** all folders that contain files that your build process requires. For example, if you add another project, you might have to add another mapping to the workspace.

**Cloak** folders you don't need. By default the root folder of team project is mapped in the workspace. This configuration results in the build agent downloading all the files in the version control folder of your team project. If this folder contains lots of data, your build could waste build system resources and slow down your build process by downloading large amounts of data that it does not require.

When you remove projects, look for mappings that you can remove from the workspace.

If this is a CI build, in most cases you should make sure that these mappings match the match the filter settings of your CI trigger on the [Triggers tab](triggers.md).

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
