---
title: Ignore files in your Git repo
titleSuffix: Azure Repos
description: Use gitignore, git update-index, and repo management to ignore and exclude files from Git version control  
ms.assetid: 60982d10-67f1-416f-94ec-eba8d655f601
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 09/10/2018
monikerRange: '>= tfs-2013'
---

# Ignore file changes with Git

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Not every file created or updated in your code should be committed to Git. Temporary files from your development environment, test outputs and logs are all examples
of files that you create but are not part of your codebase. Customize which files Git tracks through the gitignore feature.

In this tutorial you learn how to:

> [!div class="checklist"]
> * Use gitignore to prevent tracking or files
> * Ignore files only on your system
> * Ignore files across all repos on your system
> * Ignore changes to committed files

## Use gitignore to prevent tracking of files

Create a .gitignore file in your Git repo to prevent Git from staging unwanted files. 
Share the .gitignore in the default branch in your repo, so you and your team can update it to change which files to ignore. 

### Create a .gitignore

# [Visual Studio](#tab/visual-studio)

Visual Studio automatically creates a .gitignore file in your repo when you [create new repo for your project](creatingrepo.md).

# [Command Line](#tab/command-line)

You should download a [template](https://github.com/github/gitignore) .gitignore file for your project type and customize it to meet your needs. If your project doesn't fit a template,
you can create a empty .gitignore from the command line by navigating to your Git repo and running one of the following commands:

### Windows

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; fsutil file createnew <font color="#b5bd68">C:\Users\frank\\myrepo\\.gitignore</font> 0
</pre>

### Linux and macOS

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; touch <font color="#b5bd68">/home/frank/myrepo/.gitignore</font>
</pre>

---

Git applies a .gitignore to the folder and any child folders where it's located. We strongly recommended to place your .gitignore in the root folder of your repo to prevent confusion.

### Customize your .gitignore

Modify your .gitignore to include files types, paths, and file patterns in your repo. Git starts ignoring these files as soon as the .gitignore is updated, but be sure to 
commit the changes if others on your team need the same set of ignored files.

# [Visual Studio](#tab/visual-studio)

You can edit your .gitignore file for your repo by going to the **Settings** view in Team Explorer, then selecting **Repository Settings**. Select the **Edit** link under next to your .gitignore.

![Find and open your .gitignore file for your repo in Visual Studio](_img/vs_ignore.png)

# [Command Line](#tab/command-line)

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; vim <font color="#b5bd68">/home/frank/myrepo/.gitignore</font>
</pre>

---
   
Each line in the .gitignore excludes a file or set of files matching a pattern. The [full gitignore syntax](https://git-scm.com/docs/gitignore) is very flexible. Here are some examples of 
the most common entries:

```bash
# ignore a single file
mycode.class

# ignore an entire directory
/mydebugdir/

# ignore a file type
*.json

# add an exception (using !) to the preceding rule to track a specific file
!package.json
```

> [!NOTE]
> Windows users: All file paths in the .gitignore file use a forward slash separator and not a backslash.

## Ignore files only on your system 

Your .gitignore is shared across team members as a file committed and pushed to the Git repo. To exclude
files only on your system without pushing the changes to the rest of your team, edit the `.git/info/exclude` file in your local repo.
Changes to this file will not be shared with others and only apply to the files in that repo. The [syntax](https://git-scm.com/docs/gitignore) for this file is the 
same as the one used in .gitignore.

## Ignore files across all repos on your system

Set up a global .gitignore for use across all repos on your system using the command line `git config` tool:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git config core.excludesfile <font color="#b5bd68">C:\Users\frank\.gitignore_global</font>
</pre>

This is particularly useful for ignoring entire file types you don't want to ever commit, such as compiled binaries.

## Ignore changes to committed files

#### Temporarily ignore changes

During development it's convenient to stop tracking file changes to a file committed into your git repo. This is very convenient when 
customizing settings or configuration files that are part of your project source for your own work environment.

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git update-index --assume-unchanged <font color="#b5bd68">&lt;file&gt;</font>
</pre>

Resume tracking files with:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git update-index --no-assume-unchanged <font color="#b5bd68">&lt;file&gt;</font>
</pre>

#### Permanently ignore changes to a file

If a file is already tracked by Git, adding that file to your .gitignore is not enough to ignore changes to the file. You also need to 
remove the information about the file from Git's index:

> These steps will not delete the file from your system. They just tell Git to ignore future updates to the file.

0. Add the file in your .gitignore. 

0. Run the following:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git rm --cached <font color="#b5bd68">&lt;file&gt;</font>
</pre>

0. Commit the removal of the file and the updated .gitignore to your repo. 

## Next steps

> [!div class="nextstepaction"]
> [Review history](review-history.md)

