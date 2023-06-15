---
title: Ignore files in your Git repo
titleSuffix: Azure Repos
description: Learn how to exclude files from Git version control by using gitignore and exclude files, the git update-index command, and repo management.
ms.assetid: 60982d10-67f1-416f-94ec-eba8d655f601
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 10/19/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Ignore file changes with Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Not every file in your project should be tracked by Git. Temporary files from your development environment, test outputs, and logs, are all examples of files that probably don't need to be tracked. You can use different mechanisms to let Git know which files in your project shouldn't be tracked, and to ensure Git won't report changes to those files. For files that aren't tracked by Git, you can use a `.gitignore` or `exclude` file. For files that are tracked by Git, you can tell Git to stop tracking them and to ignore changes.

In this article you learn how to:

> [!div class="checklist"]
> * Ignore changes to untracked files by using a `.gitignore` file
> * Ignore changes to untracked files by using an `exclude` file
> * Stop tracking a file and ignore changes using `git update-index`
> * Stop tracking a file and ignore changes using `git rm`


## Use a gitignore file

You can tell Git not to track certain files in your project by adding and configuring a [`.gitignore`](https://git-scm.com/docs/gitignore) file. Entries in a `.gitignore` file only apply to untracked files, and won't prevent Git from reporting changes to tracked files. Tracked files are files that were committed and exist in the last Git snapshot.

Each line in a `.gitignore` file specifies a file search pattern relative to the `.gitignore` file path. The [`.gitignore` syntax](https://git-scm.com/docs/gitignore) is flexible and supports the use of wildcards to specify individual or multiple files by name, extension, and path. Git matches `.gitignore` search patterns to the files in your project to determine which files to ignore.

Typically, you'll just add a `.gitignore` file to the root folder of your project. However, you can add a `.gitignore` file to any project folder to let Git know which files to ignore within that folder and its subfolders at any nested depth. For multiple `.gitignore` files, the file search patterns specified by a `.gitignore` file within a folder take precedence over the patterns specified by a `.gitignore` file within a parent folder.

You can manually create a `.gitignore` file and add file pattern entries to it, or save time by downloading a `.gitignore` template for your development environment from the GitHub [`gitignore`](https://github.com/github/gitignore) repo. One of the benefits of using a `.gitignore` file is that you can [commit](commits.md) changes and share it with others.

> [!NOTE]
> Visual Studio automatically creates a `.gitignore` file for the Visual Studio development environment when you [create a new Git repo](creatingrepo.md#create-a-local-git-repo-from-an-existing-solution).

#### [Visual Studio 2022](#tab/visual-studio-2022)

Visual Studio 2022 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**. Visual Studio 2019 version 16.8 also offers the **Team Explorer** Git user interface. For more information, see the **Visual Studio 2019 - Team Explorer** tab.

[!INCLUDE [Use a gitignore file](includes/ignore-files-gitignore.md)]

#### [Visual Studio 2019 - Git menu](#tab/visual-studio-2019-git-menu)

Visual Studio 2019 provides a Git version control experience by using the **Git** menu, **Git Changes**, and through context menus in **Solution Explorer**.

[!INCLUDE [Use a gitignore file](includes/ignore-files-gitignore.md)]

#### [Visual Studio 2019 - Team Explorer](#tab/visual-studio-2019-team-explorer)

Visual Studio 2019 version 16.8 and later versions provides a Git version control experience while maintaining the **Team Explorer** Git user interface. To use **Team Explorer**, uncheck **Tools** > **Options** > **Preview Features** > **New Git user experience** from the menu bar. You can use Git features from either interface interchangeably.

In the **Changes** view of **Team Explorer**, right-click any changed file that you want Git to ignore and choose **Ignore this local item** or **Ignore this extension**. Those menu options don't exist for tracked files.
  
:::image type="content" source="media/ignore-files/visual-studio-2019/team-explorer/git-ignore.png" border="true" alt-text="Screenshot of the context menu options for changed files in Team Explorer in Visual Studio 2019." lightbox="media/ignore-files/visual-studio-2019/team-explorer/git-ignore-lrg.png":::

---

The **Ignore this local item** option adds a new entry to the `.gitignore` file, and removes the selected file from the list of changed files.

The  **Ignore this extension** option adds a new entry to the `.gitignore` file, and removes all files with the same extension as the selected file from the list of changed files.

Either option creates a `.gitignore` file if it doesn't already exist in the root folder of your repo, and adds an entry to it.

### Edit a gitignore file

Each entry in the `.gitignore` file is either: a file search pattern that specifies which files to ignore, a comment that begins with `#`, or a blank line (for readability). The [`.gitignore` syntax](https://git-scm.com/docs/gitignore) is flexible and supports the use of wildcards to specify individual or multiple files by name, extension, and path. All file search pattern paths are relative to the `.gitignore` file.

Here are some examples of common file search patterns:

```console
# Ignore all files with the specified name.
# Scope is all repo folders.
config.json

# Ignore all files with the specified extension.
# Scope is all repo folders.
*.json

# Add an exception so as to not ignore a file with the specified name.
# Scope is all repo folders.
!package.json

# Ignore a file with the specified name.
# Scoped to the 'logs' subfolder.
/logs/test.logfile

# Ignore all files with the specified name.
# Scoped to the 'logs' subfolder and all folders beneath it.
/logs/**/test.logfile

# Ignore all files in the 'logs' subfolder.
/logs/
```

As soon as you modify a `.gitignore` file, Git updates the list of files that it ignores.

> [!NOTE]
> Windows users must use a forward slash path separator in a `.gitignore` file instead of a backslash. All users must add a trailing `/` when specifying a folder.


### Use a global gitignore file

You can designate a `.gitignore` file as a global ignore file that applies to all local Git repos. To do so, use the `git config` command as follows:

```console
git config core.excludesfile <gitignore file path>
```

A global `.gitignore` file helps ensure that Git doesn't commits certain file types, such as compiled binaries, in any local repo. File search patterns in a repo-specific `.gitignore` file have precedence over patterns in a global `.gitignore` file.


## Use an exclude file

You can also add file search pattern entries to the `exclude` file in the `.git/info/` folder of your local repo. The `exclude` file lets Git know which untracked files to ignore and uses the same file search pattern syntax as a `.gitignore` file.

Entries in an `exclude` file only apply to untracked files, and won't prevent Git from reporting changes to committed files that it already tracks. Only one `exclude` file exists per repo.

Since Git doesn't commit or push the `exclude` file, you can safely use it to ignore files on your local system without affecting anyone else.


## Use Git update-index to ignore changes

Sometimes it's convenient to temporarily stop tracking a local repo file and have Git ignore changes to the file. For example, you might want to customize a settings file for your development environment without the risk of committing your changes. To do so, you can run the `git update-index` command with the `skip-worktree`flag:

```console
git update-index --skip-worktree <file path>
```

To resume tracking, run the `git update-index` command with the `--no-skip-worktree` flag.

Or, you can temporarily stop tracking a file and have Git ignore changes to the file by using the `git update-index` command with the `assume-unchanged` flag. This option is less effective than the `skip-worktree`flag, because the `assume-unchanged` flag can be reverted by a Git `pull` operation that changes file content.

```console
git update-index --assume-unchanged <file path>
```

To resume tracking, run the `git update-index` command with the `--no-assume-unchanged` flag.


## Use Git rm to ignore changes

Entries in a `.gitignore` or `exclude` file have no effect on files that Git already tracks. Git tracks files that you've previously committed. To permanently remove a file from the Git snapshot so that Git no longer tracks it, but without deleting it from the filesystem, run the following commands:

```console
git rm --cached <file path>
git commit <some message>
```

Then, use a `.gitignore` or `exclude` file entry to prevent Git from reporting changes to the file.


## Next steps

> [!div class="nextstepaction"]
> [Review history](review-history.md)


## Related articles

- [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)
- [Save your work with commits](commits.md)
