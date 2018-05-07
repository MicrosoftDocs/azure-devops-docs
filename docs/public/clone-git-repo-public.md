---
title: Clone an existing Git repo
titleSuffix: Azure CodeX Public Project
description: Create a local copy of an existing repo using Visual Studio or command line clone 
ms.assetid:  
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.topic: get-started-article
ms.manager: douge
ms.author: sdanie
ms.date: 01/05/2018
---

# Clone an existing Git repo

[!INCLUDE [temp](_shared/version-public-projects.md)] 

Create a complete local copy of an existing Git repo by cloning it. 
Cloning a repo downloads all commits and branches in the repo and sets up a named relationship with the existing repo you cloned.
Use this relationship to interact with the existing repo, pushing and pulling changes to share code with your team.

>[!NOTE]
> By default, Git will assign the `origin` to the remote repo you clone from. Most users don't need more than one remote, so the tutorial uses `origin` in its steps. 

In this tutorial you learn how to:

> [!div class="checklist"]
> * Get the clone URL to your repo
> * Clone a repo

## Video tutorial

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Create-a-Git-repo-in-Visual-Studio-2015/player" width="560" height="315" allowFullScreen frameBorder="0"></iframe>

>[!TIP]
> Working from the command line? You can view our video overview using command line steps on [Channel9](https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Create-a-repo-from-the-command-line).

<a name="clone_url"></a>
## Get the clone URL to your repo

Before you can clone an existing repo, you'll need a URL that points to the existing repo. This URL represents the source of the repo you're going to copy during the clone.

If you're using VSTS or Team Foundation Server 2017, you can find this clone URL in the web portal. 
When viewing your repo from the **Code** tab in the interface, select **Clone** in the upper right.

![Get a clone a URL from VSTS](../git/tutorial/_img/get_clone_url.gif)

If you need to clone a GitHub repo, you'll need to get the clone URL from the **Clone or download** button while viewing the repo on the web in GitHub. 

Other Git providers have similar buttons in their user interface to get the clone URL. 

Copy this URL into the clipboard or store it in a place where you can find it easily. You can't clone a repo without a clone URL.

## Clone a repo 

# [Visual Studio](#tab/visual-studio)

0. Open Team Explorer (go to **View** and select **Team Explorer** or use the Ctrl+\, Ctrl+M hotkey sequence) and open the **Connect** view. Go to **Projects**, then **Manage Connections** if you don't see the Connect view.
0. Select **Connect...** under **Hosted Service Providers**.

  ![Connecting to VSTS](../git/tutorial/_img/connect_to_vsts_from_vs2015.png)

0. Choose your team's account from the drop-down in the dialog that appears and select which Team Projects to connect to Team Explorer. Select **Connect**. 

0. Clone the repository in one of the Team Projects by right-clicking the project and selecting **Clone...**. 
0. Enter the folder where Git will store the local repository in the **Local Git Repositories** section.
0. Select **Clone** to clone your repo. 

  ![Cloning a VSTS Repository in Visual Studio](../git/_shared/_img/cloneVsRepo.png)


# [Command Line](#tab/command-line)

### Prerequisites

* Ensure you have installed the [Git command line package](http://git-scm.com/download) for your platform as well as the 
right [Git Credential Manager](../git/set-up-credential-managers.md) before continuing.

You'll need a clone URL to tell Git what repository you want to clone to your computer. Use the URL you copied earlier during the [previous step](#clone_url) in this article.

Pass this clone URL to `git clone` to make a local copy of the repo:

```
git clone https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam
```

`git clone` clones the repository from the URL in a folder under the current one. You can pass in a folder name after the URL to create the repo in a specific location, for example:

```
git clone https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam C:\Repos\FabrikamFiber
```

 