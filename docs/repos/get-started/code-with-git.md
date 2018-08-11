---
title: Code with Git
titleSuffix: VSTS & TFS 
description: Share code in a Git repo and new team project 
ms.assetid: 
ms.prod: devops
ms.technology: devops-new-user
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.date: 09/05/2018
ms.topic: quickstart
monikerRange: 'vsts'
---

# Code with Git

#### VSTS

After you create a new account and team project in VSTS, you can begin sharing your code with others. 



## Install Git command line tools 

0. Install one of the following Git command line tools:

  - To install Git for Windows, including Git Credential Manager, see [Install the Git Credential Manager - Windows](../git/set-up-credential-managers.md#windows)
  - To install Git for macOS and Linux, see [Install the Git Credential Manager - macOS and Linix](../git/set-up-credential-managers.md#macos-and-linux)

## Get your code

To get a copy of the source code to work with it, you clone the Git repo that contains the code. Cloning creates both a local copy of the source code so you can work with it, and all the version control information so Git can manage the source code.

If you're just getting started with Azure Repos, your code might be in one of several places:

- [The code is in my (or my organization's) Azure Repos Git Repo](#the-code-is-in-my-or-my-organizations-azure-repos-git-repo)
- [The code is another Git repo such as GitHub or another Azure Repos Git repo](#the-code-is-another-git-repo-such-as-github-or-another-azure-repos-git-repo)
- [The code is on my local computer and not yet in version control](#the-code-is-on-my-local-computer-and-not-yet-in-version-control)

### The code is in my (or my organization's) Azure Repos Git repo

If the code is in your (or your organization's) Azure Repo, you can clone the Git repo to your local computer and start working with it by jumping down to [Clone the repo](#clone-the-repo).

### The code is another Git repo such as GitHub or another Azure Repos Git repo

If the code is in another Git repo, such as a GitHub repo or a different Azure Repo, you can import it into a new or existing empty Git repo. Follow the steps in [Import a Git repo](../git/import-git-repository.md) and then return to this article and jump down to [Clone the repo](#clone-the-repo).

### The code is on my local computer and not yet in version control

If your code is not yet in version control, you have a couple of options:

- I want to create a new repository and add my code there. To do this, follow the steps in [Create a new Git repo in your project](../git/create-new-repo.md#create-a-repo-using-the-web-portal) and then jump down to [Clone the repo](#clone-the-repo) in this article. 
- I want to add my code to an existing repository. To do this, jump down to [Clone the repo](#clone-the-repo).

Once the repository is cloned, we'll show you how to add your existing code to the repo.


## Clone the repo

To work with a Git repo, you clone it to your computer. Cloning a repo creates a complete local copy of the repo for you to work with, and downloads all [commits](../git/commits.md) and [branches](../git/branches.md) in the repo and sets up a named relationship with the repo on the server. Use this relationship to interact with the existing repo, pushing and pulling changes to share code with your team.

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

# [New navigation](#tab/new-nav)

1. From your web browser, open the team project for your VSTS account and choose **Repos>Files**. If you don't have a team project, [create one now](sign-up-invite-teammates.md). 

  ![Repos files](_img/clone-repo/repos-files.png)

1. Select **Clone** in the upper-right corner of the **Files** window and copy the clone URL.

  ![Retrieve the clone URL](_img/clone-repo/clone-repo.png)

# [Previous navigation](#tab/previous-nav)

1. From your web browser, open the team project for your VSTS account and click the **Code** hub. If you don't have a team project, [create one now](sign-up-invite-teammates.md). 

1. Select Clone in the upper-right corner of the **Code** window and copy the **Clone URL**.

  ![Retrieve the clone URL](../../user-guide/_img/code-with-git-clone-repo.png)

---

### Clone the repo

0. Open the Git command window (Git Bash on Git for Windows), navigate to the folder where you want the code from the repo stored on your computer, and run `git clone` followed by the path copied from the **Clone URL** in the previous section, as shown in the following example.

  ```
  git clone https://contoso-ltd.visualstudio.com/MyFirstProject/_git/contoso-demo
  ```

  Git downloads a copy of the code, including all [commits](../git/commits.md) and [branches](../git/branches.md) from the repo, into a new folder for you to work with.

  Keep this command window open, as you'll use it in the following steps.

## Work in a branch

TODO 

In this step, we'll make a change to the files on your computer, commit the changes locally, push the commit up to the repo that is stored on the server, and view the changes there.

0. Browse to the folder on your computer where you cloned the repo, open the `README.md` file in your editor of choice, make some changes, and save and close the file.

## Share your changes

0. In the Git command window, navigate to the `contoso-demo` directory by entering the following command: 

  ```
  cd contoso-demo
  ```

0. Commit your changes by entering the following command in the Git command window:

  ```
  git commit -a -m "My first commit"
  ```

  When using `git commit`, `-a` means to commit all changed files, and `-m` specifies a commit message.

0. Push your changes up to the Git repo on the server by entering the following command into the Git command window:

  ```
  git push
  ```

0. Switch back to the web portal and select **History** from the **Code** view to view your new commit. The new repo has two commits: the first commit where the README and .gitignore were added when the repo was created, and the commit you just made.

  ![View commit history](../git/_img/repo-mgmt/commit-push.png)

0. Switch to the **Files** tab and click on the README file to view your changes.

  ![View changed file](../git/_img/repo-mgmt/readme-changed-file.png)  

## Create a pull request

TODO

## Sync with others

## Try this next  

> [!div class="nextstepaction"]
> [Set up continuous integration & delivery](../../pipelines/get-started-designer.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)
> or
> [learn more about working with a Git repo](../git/index.md)
