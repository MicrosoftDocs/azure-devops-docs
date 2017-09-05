---
title: Build definition sources
description: Specify the sources and repository that contains the code you want to build on Visual Studio Team Services and Team Foundation Server (TFS)
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 6DFCFEB4-05EC-4A73-9382-A20D161A53D4
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build definition sources

**VSTS | TFS 2017 | TFS 2015 | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/hh190721%28v=vs.120%29.aspx)**

At the beginning of the build process, the build agent downloads the files from your remote repository into a local sources directory. After you select the repository, you can specify options for how the files are downloaded.

## Git

> * **VSTS, TFS 2017 Update 2, and newer:** Click the **Tasks** tab, click **Get sources**, click **This project**, and then select the name of the Git repo.
>
> * **TFS 2017 RTM and older:** Click the **Repository** tab, and then for **Repository type** select **Git**.

**Repository:**  Select a repository in your team project.

**Branch** (default): Select the branch that you want to be the default when you manually queue this build.

> **VSTS, TFS 2017 Update 2 or newer:** Click **Advanced settings** to see the following options.

[!INCLUDE [temp](_shared/git-clean-option.md)]

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

Note: Some build variables might yield a value that is not a valid label. For example variables such as `$(Build.RequestedFor)` and `Build.DefinitionName` can contain white space. If the value contains white space, the tag is not created.

[!INCLUDE [temp](_shared/git-options.md)]

<a name="tfvc"></a>
## Team Foundation Version Control

> * **VSTS, TFS 2017 Update 2, and newer:** Click the **Tasks** tab, click **Get sources**, click **This project**, and then select the TFVC repo (for example, `$TeamProject`).
>
> * **TFS 2017 RTM and older:** Click the **Repository** tab, and then for **Repository type** the TFVC repo (for example, `$TeamProject`).

**Repository**  Ignore this option.

**Mappings** (workspace): Include with a type value of **Map** only the folders that your build process requires. If a subfolder of a mapped folder contains files that the build process does not require, map it with a type value of **Cloak**. [When would I need to change TFVC mappings. How should I do it?](#tfvc_mappings)

> **VSTS, TFS 2017 Update 2 or newer:** Click **Advanced settings** to see the following options.

[!INCLUDE [include](_shared/label-sources.md)]

The build process labels your sources with a [TFVC label](../../../../tfvc/use-labels-take-snapshot-your-files.md).

**Clean:**

* If you set it to true, the build agent cleans the repo this way:

 - undo pending changes

 - scorch

 [How can I clean the repo a different way?](#build_clean_variable)

* Set this to false if you want to define an incremental build to improve performance.

 > [!TIP]
 >
 > In this case, if you are building Visual Studio projects, on the Build tab, you can also uncheck the Clean check box of the Visual Studio Build or MSBuild step.

* This setting has no effect if you are using a [hosted agent](../../../concepts/agents/hosted.md).

## GitHub

> * **VSTS, TFS 2017 Update 2, and newer:** Click the **Tasks** tab, click **Get sources**, and then click **GitHub**.
>
> * **TFS 2017 RTM and older:** This option is not available, but you can instead use the [External git](#external-git) option.

### Connect using your GitHub user account

> [!NOTE]
> If you're using a pop-up blocker, you'll need to allow your VSTS account to display pop-up windows.

This is the easier way to authorize your account. This approach grants your VSTS account access to GitHub via OAuth.

0. On the **Repository** tab, next to the Connection drop-down, click the **Manage** link. The **Services** tab opens as a new tab in your browser.

 0. Click **New Service Endpoint** and choose **GitHub**.

 0. In the **Add New GitHub Service Connection** dialog box, select **Grant authorization**, and then click **Authorize**.

 0. In the new browser window, sign in to GitHub and follow the instructions to authorize Visual Studio Team Services to access your GitHub account.

0. On the **Repository** tab, select the **Connection** you created.

0. Select the **Repository** that contains the code you want to build.

### Connect using a personal access token

0. Sign in to GitHub and make sure you have permission to read the repository.

0. In GitHub, [create an access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).

 0. Select the **repo**, **user**, and **admin:repo_hook** scopes.

 0. Copy the token to your clipboard.

0. Sign on to VSTS and create a build definition.

0. On the **Repository** tab, next to the Connection drop-down, click the **Manage** link. The **Services** tab opens as a new tab in your browser.

 0. Click **New Service Endpoint** and choose **GitHub**.

 0. In the **Add New GitHub Service Connection** dialog box, select **Personal access token**.

 0. Paste the token and give the connection a name.

0. On the **Repository** tab, select the **Connection** you created.

0. Select the **Repository** that contains the code you want to build.

### Other options

**Default branch:**  Select the branch that you want to be the default when you manually queue this build.

> **VSTS, TFS 2017 Update 2 or newer:** Click **Advanced settings** to see the following options.

[!INCLUDE [temp](_shared/git-clean-option.md)]

[!INCLUDE [temp](_shared/git-options.md)]

<a name="external-git"></a>
## External Git (remote repository)

0. Sign in to the external Git service (for example, BitBucket) and make sure you have permission to read the repository.

0. Sign on to the Visual Studio Team Services or Team Foundation Server web portal and create a build definition.

0. On the **Repository** tab, next to the Connection drop-down, click the **Manage** link. The **Services** tab opens as a new tab in your browser.

 0. Click **New Service Endpoint** and choose **External Git**.

 0. Fill in the **Add New External Git Repository Connection** dialog box.

0. On the **Repository** tab, select the **Connection** you created.

0. Select the **Repository** that contains the code you want to build.

**Branch** (default):  Select the branch that you want to be the default when you manually queue this build.

> **VSTS, TFS 2017 Update 2 or newer:** Click **Advanced settings** to see the following options.

[!INCLUDE [temp](_shared/git-clean-option.md)]

[!INCLUDE [temp](_shared/git-options.md)]

## Subversion

You can build code you manage in Subversion. You must install the Subversion client on your [build agents](../../../concepts/agents/agents.md#install).

## Q&A  

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](_shared/build-clean-variable.md)]

### How do I reference the sources directory on the build agent?

Use the [Build.SourcesDirectory variable](variables.md).


### What kinds of submodules can I check out?

If you select **Checkout submodules**, the build process will check out your Git submodules so long as they are:

* **Children (immediate submodules)** of the Git repo you've selected for this build process. In effect, the build process runs ```git submodule update --init``` (not ```git submodule update -init --recursive```).

* **Unauthenticated:**  A public unauthenticated repo with no credentials required to clone or fetch.

* **Authenticated:**  

 - Contained in the same team project, GitHub organization, or Bitbucket account as the Git repo specified above.

 - Added by using a relative url from main repository. For example this one would be checked out: ```git submodule add /../../submodule.git mymodule``` This one would not be checked out: ```git submodule add https://fabrikamfiber.visualstudio.com/DefaultCollection/_git/ConsoleApp mymodule```


### Which GitHub repositories can I build?

You can build repositories you are authorized to push to.

### What protocols can the build agent use with Git?

We support HTTPS.

We do not yet support SSH. See [User Voice: Allow build to use ssh authentication while checking out git sub modules](https://visualstudio.uservoice.com/forums/330519-team-services/suggestions/15109674-allow-build-to-use-ssh-authentication-while-checki)

<a name="tfvc_mappings"></a>
### When would I need to change TFVC mappings. How should I do it?

Make sure that you **Map** all folders that contain files that your build process requires. For example, if you add another project, you might have to add another mapping to the workspace.

**Cloak** folders you don't need. By default the root folder of team project is mapped in the workspace. This configuration results in the build agent downloading all the files in the version control folder of your team project. If this folder contains lots of data, your build could waste build system resources and slow down your build process by downloading large amounts of data that it does not require.

When you remove projects, look for mappings that you can remove from the workspace.

If this is a CI build, in most cases you should make sure that these mappings match the match the filter settings of your CI trigger on the [Triggers tab](triggers.md).

For more information on how to optimize a TFVC workspace, see [Optimize your workspace](../../../../tfvc/optimize-your-workspace.md).

### Is it possible to disable downloading files?

If you want to disable downloading sources:

* **VSTS, TFS 2017 Update 2, and newer:** Click **Advanced settings**, and then select **Don't sync sources**.

* **TFS 2017 RTM and older:** Define `Build.SyncSources` on the [variables tab](variables.md) and set it to false.

[!INCLUDE [temp](../../../_shared/qa-agents.md)]

[!INCLUDE [temp](../../../_shared/qa-versions.md)]

<!-- ENDSECTION -->
