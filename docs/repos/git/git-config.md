---
title: Git preferences and settings
titleSuffix: Azure Repos
description: Learn how to view and configure many Git-related settings and preferences, and how to work with Git configuration files in Visual Studio.
ms.assetid:
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 10/19/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Git preferences and settings in Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

In Visual Studio, you can view and configure several Git-related settings and preferences. For example, you can set your name and email address for commit metadata, specify your preferred diff and merge tools, and set the default folder path for repo clones.

Git settings and preferences in Visual Studio fall into two main categories:

- **Git Global Settings**, which apply to all Git repos for the current user.

- **Git Repository Settings**, which apply to the active Git repo.

Within those categories, settings can be:

- [Git configuration file settings](#modify-git-configuration-file-settings), which you can view and modify either in Visual Studio, on the command line, or by editing a Git configuration file. Examples of Git configuration file settings are user name, email address, and remote aliases. Git stores settings in system, global, and local Git configuration files:

  - System Git configuration file settings apply to all users and repos on your computer.

  - Global Git configuration file settings apply to all repos for the current user. Global settings take precedence over system settings.

  - Local Git configuration file settings apply to the local repo that contains the local Git configuration file. System settings take precedence over global settings.

- [Visual Studio Git-related settings](#modify-visual-studio-git-related-settings), which are Visual Studio settings that relate to Git but aren't stored in any Git configuration file. You can only view and modify these settings in Visual Studio. An example of one of these settings is the default folder path where Visual Studio clones repos.

In this article you learn how to:

>[!div class="checklist"]
>* Explore Git settings
>* Modify Git configuration file settings
>* Modify Visual Studio Git-related settings

## Explore Git settings

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [Explore Git settings](includes/git-config-explore-settings.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [Explore Git settings](includes/git-config-explore-settings.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably.

1. To configure Git settings in Visual Studio, choose **Settings** from Team Explorer to open the **Settings** view.

   :::image type="content" source="media/git-config/visual-studio-2019/team-explorer/git-menu-settings.png" border="true" alt-text="Screenshot of the Settings option in the Team Explorer Home view." lightbox="media/git-config/visual-studio-2019/team-explorer/git-menu-settings-lrg.png":::

1. In the **Settings** view, choose **Global Settings** to view settings that apply to all your repos, or choose **Repository Settings** to view the settings that apply to the current Visual Studio project repo.

   :::image type="content" source="media/git-config/visual-studio-2019/team-explorer/git-settings.png" border="true" alt-text="Screenshot of Global Settings link and the Repository Settings link in the Settings view of Team Explorer." lightbox="media/git-config/visual-studio-2019/team-explorer/git-settings-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

To view all settings across system, global, and local Git configuration files, run:

```console
git config --list
```

>[!NOTE]
>`git config --list` output won't include local Git configuration file settings unless you run the command at the root folder of a local repo.

System Git configuration file settings apply to all users and repos on your computer. To view those settings, run:

```console
git config --list --system
```

Global Git configuration file settings apply to the current user and their repos. To view those settings, run:

```console
git config --list --global
```

Local Git configuration file settings apply to a local repo. To view those settings, run the following command at the root folder of a repo.

```console
git config --list --local
```

---

## Modify Git configuration file settings

You can view and edit Git configuration settings in Visual Studio or by directly editing the applicable Git configuration file. For more information about Git configuration file settings, see [Customizing Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) and [git-config documentation](https://git-scm.com/docs/git-config). In the following sections, we discuss how you can edit each of the listed Git configuration file settings:

- [Name and email](#name-and-email)
- [Prune remote branches during fetch](#prune-remote-branches-during-fetch)
- [Rebase local branch when pulling](#rebase-local-branch-when-pulling)
- [Cryptographic network provider](#cryptographic-network-provider)
- [Diff and merge tools](#diff-and-merge-tools)
- [Remotes](#remotes)
- [Other settings](#other-settings)

### Name and email

When you [commit](commits.md) changes, Git adds your name and email address to the commit metadata. You can edit the name and email address that Git will use.

Name and email settings are available at the global or repo scope.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Name and email](includes/git-config-name-email.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Name and email](includes/git-config-name-email.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to edit the name and email settings for the current user.

   :::image type="content" source="media/git-config/visual-studio-2019/team-explorer/name-email-setting.png" border="true" alt-text="Screenshot of the name and email settings in Global Settings in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/name-email-setting-lrg.png":::

   Or, choose **Repository Settings** to edit the name and email settings for the current Visual Studio project repo.

#### [Git Command Line](#tab/git-command-line)

To set your user name and email in a local Git configuration file, run the following commands in the root folder of the local repo.

```console
git config user.name "<user name>"
git config user.email "<email>"
```

By default, this command writes to the local Git configuration file. To write to another file, pass one of the following options: `--system`, `--global`, or `--file <filepath>` to write to a file. For example, to write to the global Git configuration file for the current user, run:

```console
git config --global user.name "Jamal Hartnett"
git config --global user.email "jamal@fabrikam.com"
```

---

### Prune remote branches during fetch

You can tell Git to prune remote branches during every fetch to remove stale remote-tracking branches in your local repo that no longer exist on the corresponding remote repo.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Prune remote branches during fetch](includes/git-config-prune-remote-branches.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Prune remote branches during fetch](includes/git-config-prune-remote-branches.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Prune remote branches during fetch** setting corresponds to the `git config fetch.prune` command. You can specify this setting at the global or repo scope. To keep remote tracking branch lists clean and up to date for all your repos, we recommend that you enable this option at the global level.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to edit the **Prune remote branches during fetch** option for the current user.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/prune-setting.png" border="true" alt-text="Screenshot of the **Prune remote branches during fetch** setting in Global Settings in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/prune-setting-lrg.png":::

Or, choose **Repository Settings** to edit the **Prune remote branches during fetch** setting for the current Visual Studio project repo.

Valid values are:

- `True` (recommended)
- `False`
- `Unset` (default)

#### [Git Command Line](#tab/git-command-line)

To keep remote tracking branch lists clean and up to date for all your repos, we recommend that you enable this option at the global level, by running:

```console
git config --global fetch.prune true
```

Valid values are:

- `true` (recommended)
- `false` (default when `fetch.prune` isn't specified in Git configuration files)

---

### Rebase local branch when pulling

You can choose to [rebase](rebase.md) your local branch when pulling to replay the changes in your local branch on top of the remote branch history.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Rebase local branch when pulling](includes/git-config-rebase-local-branch.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Rebase local branch when pulling](includes/git-config-rebase-local-branch.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Rebase local branch when pulling** setting corresponds to the `git config pull.rebase` command. You can specify this setting at the global or repo scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to edit the **Rebase local branch when pulling** option for the current user.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/rebase-setting.png" border="true" alt-text="Screenshot of the rebase setting in Global Settings in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/rebase-setting-lrg.png":::

Or, choose **Repository Settings** to edit the **Rebase local branch when pulling** option for the current Visual Studio project repo.

Valid values are:

- `True`: rebase the current branch on top of the remote branch after fetch.
- `False`: merge the remote branch into the current branch.
- `Merges`: rebase without flattening locally created merge commits.
- `Unset` (default): unless specified otherwise in a Git configuration file, merge the remote branch into the current branch.

#### [Git Command Line](#tab/git-command-line)

Open a command prompt and run:

```console
git config [--local|--global|--system] pull.rebase [true|false|interactive|preserve]
```

Valid values are:

- `true`: rebase current branch on top of upstream branch after fetch.
- `false`: merge the current branch into the upstream branch.
- `interactive`: rebase in interactive mode.
- `preserve`: rebase without flattening locally created merge commits.

---

### Cryptographic network provider

You can specify the cryptographic network provider as the TLS/SSL backend that Git will use at runtime.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Cryptographic network provider](includes/git-config-cryptographic-provider.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Cryptographic network provider](includes/git-config-cryptographic-provider.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Cryptographic network provider** setting corresponds to the `git config http.sslBackend` command. This setting is only available at the global scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to edit the **Cryptographic network provider** option for the current user.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/network-provider-setting.png" alt-text="Screenshot of the Cryptographic network provider setting with OpenSSL selected in Team Explorer in Visual Studio 2017." lightbox="media/git-config/visual-studio-2019/team-explorer/network-provider-setting-lrg.png":::

Valid values are:

- `OpenSSL`: use [OpenSSL](https://www.openssl.org/) for TLS and SSL protocols.
- `Secure Channel`: use [Secure Channel](/windows/win32/secauthn/secure-channel) for TLS and SSL protocols. Secure Channel is the native Windows solution that contains a set of security protocols that provide identity authentication and secure, private communication through encryption.
- `Unset` (default): if this setting is unset, the Cryptographic network provider defaults to OpenSSL.

#### [Git Command Line](#tab/git-command-line)

Open a command prompt and run:

```console
git config --global http.sslBackend [openssl|schannel]
```

Valid values are:

- `openssl`: use [OpenSSL](https://www.openssl.org/) for TLS and SSL protocols.
- `schannel`: use [Secure Channel](/windows/win32/secauthn/secure-channel) for TLS and SSL protocols. Secure Channel is the native Windows solution that contains a set of security protocols that provide identity authentication and secure, private communication through encryption.

---

### Credential helper

When Visual Studio performs a remote Git operation, the remote endpoint might reject the request because it requires credentials for the request. When that happens, Git invokes a credential helper to obtain the necessary credentials and then retries the request. You can specify the credential helper that Git will use.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Credential helper](includes/git-config-credential-helper.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Credential helper](includes/git-config-credential-helper.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Git Command Line](#tab/git-command-line)

Open a command prompt and run:

```console
git config credential.helper [cache|store]
```

Valid values are:

- `cache`: in-memory credential storage.
- `store`: credentials stored in a plain-text file `.git-credentials` or specify a different file by using the `--file` option.

For more information about setting a credential helper, see [Git Tools - Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) and [credential.helper](https://git-scm.com/docs/gitcredentials).

---

### Diff and merge tools

You can specify which tools Git will use to display diffs or merge conflicts.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Diff and merge tools](includes/git-config-diff-merge-tools.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Diff and merge tools](includes/git-config-diff-merge-tools.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The diff and merge tool settings correspond to the `git config diff.tool` and `git config merge.tool` commands. You can set Visual Studio as the merge or diff tool, or configure other diff and merge tools from the [Git command line](git-config.md?tabs=git-command-line). You can specify diff and merge tool settings at the global or repository scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to edit the diff and merge tool settings for the current user.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/tools-setting.png" alt-text="Screenshot showing the diff and merge tool settings in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/tools-setting-lrg.png":::

Or, choose **Repository Settings** to edit the diff and merge tool settings for the current Visual Studio project repo.

Valid diff and merge tools are:

- `Visual Studio`
- `None` (default)

To configure other diff and merge tool settings, use the [Git command line](git-config.md?tabs=git-command-line).

#### [Git Command Line](#tab/git-command-line)

Open a command prompt and run:

```console
git config --global diff.tool <diff tool>
git config --global merge.tool <merge tool>
```

To get a list of valid diff tools, run: `git difftool --tool-help`
To get a list of valid merge tools, run: `git mergetool --tool-help`

For more information on diff and merge tool options, see [diff.tool](https://git-scm.com/docs/git-config#git-config-difftool) and [merge.tool](https://git-scm.com/docs/git-config#git-config-mergetool).

---

### Remotes

You can use the **Remotes** pane under **Git Repository Settings** to add, edit, or remove remotes for your repository. This setting corresponds to the `git remote add` command. The **Remotes** pane is only available at the repository scope.

When you clone a remote repo, Git assigns the alias `origin` as shorthand for the URL of the remote repo you cloned. For convenience, you can add another alias named `upstream` for the repo you forked from, which is referred to as the upstream repo. The following steps describe how to add an `upstream` alias.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Remotes](includes/git-config-remotes.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Remotes](includes/git-config-remotes.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Command Line](#tab/git-command-line)

On the command line, navigate to the root folder of your local repo, and then run the following command to add a new remote named `upstream`. Replace `<clone URL>` with the Git [clone URL](clone.md#get-the-clone-url-of-an-azure-repos-git-repo) of the repo you forked.

```console
git remote add upstream <clone URL>
```

For example, `git remote add upstream https://fiber-teams@dev.azure.com/fiber-teams/FiberTests/_git/FiberTests` adds an `upstream` alias.

To edit an existing `upstream` alias, run the following command:

```console
git remote set-url upstream <clone URL>
```

>[!TIP]
>For convenience, you can use the `origin` and `upstream` aliases instead of their corresponding URLs in your Git commands.

For more information about configuring remotes, see [git remote](https://git-scm.com/docs/git-remote).

---

### Other settings

To view all of other Git configuration settings, you can open and view the Git configuration files themselves, or you can run `git config --list` to display the settings.

---

## Modify Visual Studio Git-related settings

The following settings manage Git-related preferences in Visual Studio. You can only view and edit these settings from within Visual Studio.

- [Default repository location](#default-repository-location)
- [Close open solutions not under Git when opening a repository](#close-open-solutions-not-under-git-when-opening-a-repository)
- [Enable download of author images from third-party sources](#enable-download-of-author-images-from-third-party-sources)
- [Commit changes after merge by default](#commit-changes-after-merge-by-default)
- [Enable push --force-with-lease](#enable-push---force-with-lease)
- [Open folder in Solution Explorer when opening a Git repository](#open-folder-in-solution-explorer-when-opening-a-git-repository)
- [Automatically load the solution when opening a Git repository](#automatically-load-the-solution-when-opening-a-git-repository)
- [Automatically check out branches with double-click or the Enter key](#automatically-check-out-branches-with-double-click-or-the-enter-key)
- [Edit Git ignore and attributes files](#edit-git-ignore-and-attributes-files)

For more information about how to access Visual Studio Git-related settings, see [Explore Git settings](#explore-git-settings). Next, we discuss how you can edit each of these Visual Studio Git-related settings.

### Default repository location

You can set the default repository folder in which Visual Studio will clone repos.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Default repository location](includes/git-config-repository-location.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Default repository location](includes/git-config-repository-location.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Default repository location** setting is only available at the global scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to set the default repository location for the current user.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/default-location-setting.png" alt-text="Screenshot showing the default location field in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/default-location-setting-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in Visual Studio.

---

### Close open solutions not under Git when opening a repository

By default, Visual Studio closes any open solution or folder in a Git repo when you switch to a different repo. The **Close open solutions not under Git when opening a repository** setting keeps the open solution or folder consistent with the selected repo. However, if your solution or folder isn't inside a repo, you might want to keep the solution open when you switch repository. You can do that with this setting.

>[!TIP]
>If you pair this setting with [Automatically load the solution when opening a Git repository](#automatically-load-the-solution-when-opening-a-git-repository), then Visual Studio will open the solution for the Git repo you're switching to.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Close open solutions not under Git when opening a repository](includes/git-config-close-solutions.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Close open solutions not under Git when opening a repository](includes/git-config-close-solutions.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Close open solutions not under Git when opening a repository** setting is only available at the global scope.

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in [Visual Studio 2019](git-config.md?tabs=visual-studio-2019#close-open-solutions-not-under-git-when-opening-a-repository) or later.

---

### Enable download of author images from third-party sources

When enabled, Visual Studio will download an author image from the [Gravatar image service](https://en.gravatar.com/) for display in the commit and history views. If you haven't configured a Gravatar image, the Gravatar image service will return a randomly generated image for you.

>[!IMPORTANT]
>To provide author images in the commit and history views, Visual Studio creates an MD5 hash using the author email address stored in the active repository and sends that hash to Gravatar. If Gravatar finds a  user with a matching hash, Visual Studio will retrieve and display the user's image. Microsoft doesn't record or share email addresses with Gravatar or any other third-party.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Enable download of author images from third-party sources](includes/git-config-enable-download.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Enable download of author images from third-party sources](includes/git-config-enable-download.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Enable download of author images from third-party sources** setting is only available at the global scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to choose whether to enable download of author images from third-party sources.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/download-image-setting.png" alt-text="Screenshot showing the checkbox to enable download of author images from third-party source in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/download-image-setting-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in Visual Studio.

---

### Commit changes after merge by default

With **Commit changes after merge by default** enabled, Git automatically creates a new commit on branch merge.

- When checked, all `git merge` commands issued by Visual Studio are run with the `--commit` option.
- When unchecked, all `git merge` commands issued by Visual Studio are run with the `--no-commit --no-ff` options.

For more information on these merge options, see [--commit and --no-commit](https://git-scm.com/docs/git-merge#git-merge---commit) and [--no-ff](https://git-scm.com/docs/git-merge#git-merge---no-ff).

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Commit changes after merge by default](includes/git-config-commit-changes.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Commit changes after merge by default](includes/git-config-commit-changes.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Commit changes after merge by default** setting is only available at the global scope.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to choose whether to commit changes after merge by default.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/merge-commit-setting.png" alt-text="Screenshot showing the checkbox to commit changes after merge by default in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/merge-commit-setting-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in Visual Studio.

---

### Enable push --force-with-lease

With this setting enabled, you can push changes that overwrite work in a remote branch&mdash;if no one else has pushed to the remote branch since your last pull.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Enable push --force-with-lease](includes/git-config-enable-push.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Enable push --force-with-lease](includes/git-config-enable-push.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The **Enable push --force** option corresponds to the `push --force` command. This setting is only available at the global scope. By default, this setting is disabled.

In Team Explorer, choose **Settings** to open the **Settings** view. Then choose **Global Settings** to choose whether to enable `push --force`.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/push-force-setting.png" alt-text="Screenshot showing the checkbox to enable push force with lease in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/push-force-setting-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in Visual Studio.

---

### Open folder in Solution Explorer when opening a Git repository

When enabled and you open a Git repo in Visual Studio, Visual Studio will scan the repository folder for solutions, CMakeLists.txt, or other view files and display them as a list in Solution Explorer. You can then load a solution or view the contents of a folder. This setting is enabled by default.

When disabled and you open a Git repo in Visual Studio, Visual Studio won't open the repo folder in Solution Explorer and is only a Git repo manager. 

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Open folder in Solution Explorer when opening a Git repository](includes/git-config-open-folder.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Open folder in Solution Explorer when opening a Git repository](includes/git-config-open-folder.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in [Visual Studio 2019](git-config.md?tabs=visual-studio-2019#open-folder-in-solution-explorer-when-opening-a-git-repository) or later.

---


### Automatically load the solution when opening a Git repository

The **Automatically load the solution when opening a Git repository** setting is applicable only if the [Open folder in Solution Explorer when opening a Git repository](#open-folder-in-solution-explorer-when-opening-a-git-repository) setting is also enabled. When you open a Git repository in Visual Studio, and the subsequent folder scan detects there's only one solution present in your repository, then Visual Studio automatically loads that solution. If you turn off this setting, then Solution Explorer will display the single solution present in the repository in the list of views, but won't load the solution. This setting is disabled by default

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Automatically load the solution when opening a Git repository](includes/git-config-load-solution.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Automatically load the solution when opening a Git repository](includes/git-config-load-solution.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in [Visual Studio 2019](git-config.md?tabs=visual-studio-2019#automatically-load-the-solution-when-opening-a-git-repository) or later.

---

### Automatically check out branches with double-click or the Enter key

The Git Repository window has a list of branches displayed in a tree structure. Select a branch to switch the commit history pane to display the commits for that branch. To check out a branch, right-click to open the context menu and choose **Checkout**. With the **Automatically check out branches with double-click or the Enter key** setting enabled, you can double-click or select the **Enter** key to check out a branch and display its commits.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Automatically check out branches with double-click or the Enter key](includes/git-config-check-branches.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Automatically check out branches with double-click or the Enter key](includes/git-config-check-branches.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Use the **Visual Studio 2019 - Git menu** procedure.

#### [Git Command Line](#tab/git-command-line)

You can only view and modify this setting in [Visual Studio 2019](git-config.md?tabs=visual-studio-2019#automatically-check-out-branches-with-double-click-or-the-enter-key) or later.

---

### Edit Git ignore and attributes files

Visual Studio provides a quick way to add or edit [gitignore](https://git-scm.com/docs/gitignore) and [gitattributes](https://git-scm.com/docs/gitattributes) files at the root of your repo.

#### [Visual Studio 2022](#tab/visual-studio-2022)

[!INCLUDE [Edit Git ignore and attributes files](includes/git-config-ignore-attributes.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

[!INCLUDE [Edit Git ignore and attributes files](includes/git-config-ignore-attributes.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

The option to add or edit a `gitignore` or `gitattributes` file is only available at the repository scope.

In Team Explorer, choose **Settings** to open the **Settings** view. In that view, select **Repository** and choose **Edit** to open the ignore or attribute file for the current project repo in a Visual Studio editor window.

:::image type="content" source="media/git-config/visual-studio-2019/team-explorer/git-files-setting.png" border="false" alt-text="Screenshot showing the Edit buttons for the ignore or attribute files in Team Explorer in Visual Studio 2019." lightbox="media/git-config/visual-studio-2019/team-explorer/git-files-setting-lrg.png":::

#### [Git Command Line](#tab/git-command-line)

Open and edit the `.gitignore` or `.gitattributes` files in an editor.

---

For information about how to configure `.gitignore` and `.gitattributes` files, see [gitignore](https://git-scm.com/docs/gitignore) and [gitattributes](https://git-scm.com/docs/gitattributes).

## Next steps

> [!div class="nextstepaction"]
> [Share code with push](pushing.md)
> [Review pull requests](review-pull-requests.md)

## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Update code with fetch, merge, and pull](pulling.md)
- [Save your work with commits](commits.md)
