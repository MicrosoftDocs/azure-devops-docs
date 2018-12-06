---
title: Code with Git - Azure DevOps
titleSuffix: Azure DevOps Services & TFS
ms.custom: seodec18
description: Learn how to share code within a Git repo and new project in Azure DevOps Services and TFS
ms.assetid: 
ms.prod: devops
ms.technology: devops-new-user
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 12/06/2018
ms.topic: quickstart
monikerRange: '>= tfs-2013'
---

# Quickstart: Code with Git in Azure DevOps

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

In this quickstart, you learn how to share your code with others. After you create a new organization and project in Azure DevOps, you can begin coding with Git.

To work with a Git repo, you clone it to your computer. Cloning a repo creates a complete local copy of the repo for you to work with. Cloning also downloads all [commits](../repos/git/commits.md) and [branches](../repos/git/branches.md) in the repo, and sets up a named relationship with the repo on the server. Use this relationship to interact with the existing repo, pushing and pulling changes to share code with your team.

## Install Git command-line tools

1. Install one of the following Git command-line tools:

  - To install Git for Windows, including Git Credential Manager, see [Install the Git Credential Manager - Windows](../repos/git/set-up-credential-managers.md#windows).
  - To install Git for macOS and Linux, see [Install the Git Credential Manager - macOS and Linux](../repos/git/set-up-credential-managers.md#macos-and-linux).

## Clone the repo to your computer

[!INCLUDE [temp](../_shared/new-navigation.md)]

## [New navigation](#tab/new-nav)

1. From your web browser, open the project for your organization, and select **Repos**. If you don't have a project, [create one now](sign-up-invite-teammates.md).

  ![Screenshot of project in Azure DevOps, with Repos highlighted](_img/project-select-repos-vert.png)

2. Select **Clone** in the upper-right corner of the Code window, and copy the URL.
  
  ![Screenshot of project in Azure DevOps, with Copy icon highlighted](_img/code-with-git-clone-repo.png)


3. Open the Git command window (Git Bash on Git for Windows). Go to the folder where you want the code from the repo stored on your computer, and run `git clone`, followed by the path copied from **Clone URL** in the previous step. See the following example:

  ```
  git clone https://contoso-ltd.visualstudio.com/MyFirstProject/_git/contoso->demo
  ```
  
  A copy of the code is downloaded in Git, including all [commits](../repos/git/commits.md) and [branches](../repos/git/branches.md) from the repo. This copy is put into a new folder for you to work with.

  Keep this command window open (you'll use it in the following steps).

## [Previous navigation](#tab/previous-nav)

1. From your web browser, open the project for your organization, and select **Code**. If you don't have a project, [create one now](sign-up-invite-teammates.md).

2. Select **Clone** in the upper-right corner of the Code window, and copy the URL.

  ![Screenshot of project in web browser, with Copy icon highlighted](_img/code-with-git-clone-repo-prev.png)


3. Open the Git command window (Git Bash on Git for Windows). Go to the folder where you want the code from the repo stored on your computer, and run `git clone`, followed by the path copied from **Clone URL** in the previous step. The following example shows this:

  ```
  git clone https://contoso-ltd.visualstudio.com/MyFirstProject/_git/contoso->demo
  ```
  
  A copy of the code is downloaded in Git, including all [commits](../repos/git/commits.md) and [branches](../repos/git/branches.md) from the repo, into a new folder for you to work with.

  Keep this command window open (you'll use it in the following steps).

---

## Work with the code

In the following steps, we make a change to the files on your computer, commit the changes locally, and push the commit to the repo that is stored on the server. We can then view the changes.

1. Browse to the folder on your computer where you cloned the repo, open the `README.md` file in your editor of choice, and make some changes. Then save and close the file.

2. In the Git command window, go to the `contoso-demo` directory by entering the following command: 

  ```
  cd contoso-demo
  ```

3. Commit your changes by entering the following commands in the Git command window:

  ```
  git add .
  git commit -m "My first commit"
  ```

  The `git add .` command stages any new or changed files, and `git commit -m` creates a commit with the specified commit message.

4. Push your changes to the Git repo on the server. Enter the following command into the Git command window:

  ```
  git push
  ```

## View history 

## [New navigation](#tab/new-nav)

1. Switch back to the web portal, and select **History** from the Code page to view your new commit. 

  ![Screenshot of web portal, with History highlighted](_img/code-history-vert.png)

2. Switch to the **Files** tab, and select the README file to view your changes.

  ![Screenshot of README file](_img/first-edit-readme-file.png)

## [Previous navigation](#tab/previous-nav)

1. Switch back to the web portal, and select **History** from the **Code** tab to view your new commit. The new repo has two commits: the first commit, where the README and .gitignore were added when the repo was created, and the commit you just made.

  ![View commit history](../repos/git/_img/repo-mgmt/commit-push.png)

2. Switch to the **Files** tab, and select the README file to view your changes.

  ![View changed file](../repos/git/_img/repo-mgmt/readme-changed-file.png)  

---

## Next steps  

> [!div class="nextstepaction"]
> [Set up continuous integration & delivery](../pipelines/get-started-designer.md?toc=/azure/devops/user-guide/toc.json&bc=/azure/devops/user-guide/breadcrumb/toc.json)
> or
> [Plan & track work](plan-track-work.md).

Or, [learn more about working with a Git repo](../repos/git/index.md).
