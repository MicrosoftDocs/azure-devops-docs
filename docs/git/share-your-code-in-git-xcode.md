---
title: Share your Xcode project with Git | VSTS & TFS
description: "Share code in Git using Xcode"
ms.assetid: "f1fedd72-d9b9-45cf-99aa-2e624c899c45"
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 08/30/2017
monikerRange: '>= tfs-2015'
---


#  Share your code in Git using Xcode
#### VSTS | TFS 2018 | TFS 2017 | TFS 2015

This guide shows you how to share your Xcode projects in a VSTS Git repo. 

## Prerequisites

* A VSTS account. If you don't have one, you can [sign up](../accounts/create-account-msa-or-work-student.md) for one for free. Each account includes free, unlimited private Git repositories.

## Create a local Git repo for your Xcode project

Create a local Git repo for your code to manage your project in version control. 

* [New projects](#new-projects)
* [Existing projects](#existing-projects)

If your project is already in a local Git repo, you can skip ahead to [Create a new VSTS repo](#create-a-new-vsts-repo).

### New projects

Create a local Git repo when you create a new project. Choose **Create Git repository on My Mac** when creating a new project. 

![Create a Git repo at the time of Xcode project creation](_img/share-your-code-in-git-xcode/xcodenewproject.png)

### Existing projects

Create a local Git repo for your existing projects not in version control by going to **Source Control, Create Working Copy...** . Select the projects to add to the local Git repo and select **Create**. Xcode creates a Git repo for your code and adds a [commit](tutorial/commits.md) with your project files.

![Add a local Git repo to an existing Xcode project](_img/share-your-code-in-git-xcode/xcodecreateworkingcopy.png)

## Create a new VSTS repo

Create a new Git repo in VSTS for your Xcode project. 

If you have already created a repo for your Xcode project in VSTS, you can skip ahead to [Push your project](#push-your-project).

0. Browse to your Team Project in your VSTS account and select the drop-down ![VSTS drop-down picker](_img/share-your-code-in-git-xcode/vsts_drop_down_arrow.png) next to the name of the current Git repo. Select **New Repository..**  
  ![Create a new Git repo in VSTS](_img/share-your-code-in-git-xcode/newrepo.png)

0. Enter a name for your new Git repo and select **Create**. Your browser will navigate to your new empty Git repo for your Xcode project. Copy the clone URL to the clipboard so that you can use it in Xcode to connect to VSTS.  

  ![Copy the clone URL for your new Git repo](_img/share-your-code-in-git-xcode/newrepocopycloneurl.png)

  > [!NOTE]
  > If you want to use SSH to connect to your VSTS Git repo, [Set up SSH credentials](use-ssh-keys-to-authenticate.md) and use the SSH clone URL when adding the remote for your local Git repo.

## Push your project

0. Go to **Source Control** in Xcode and select **_Projectname_ -- master**, then **Configure...**  

  ![Configure your Xcode Git project settings](_img/share-your-code-in-git-xcode/xcodeconfigureproject.png)

0. Select **Remotes**, then select the ![plus](_img/share-your-code-in-git-xcode/xcodeplusicon.png) icon and choose **Add Remote...**

0. In the **Address** field, paste the Git clone URL for your VSTS repo copied in the previous step. Select **Add Remote**, then select **Done** to finish creating the `origin` remote for your local Git repo.  

  ![Add a remote to the local Git repo for your Xcode project to connect to VSTS](_img/share-your-code-in-git-xcode/xcodeaddremote2.png)

0. Go to **Source Control, Push...**, enter the branchname on `origin` to push to, and select **Push**.

  ![Push your Xcode project to VSTS](_img/share-your-code-in-git-xcode/xcodepushtomaster.png)

0. If prompted, enter your VSTS credentials. For **Username**, enter your VSTS username. For **Password**, enter a [Personal Access Token](../accounts/use-personal-access-tokens-to-authenticate.md) created for your user in VSTS. Select **OK**. 

  ![Authenticate using personal access tokens to VSTS](_img/share-your-code-in-git-xcode/xcodeauthentication.png)

Xcode will [push](tutorial/pushing.md) your project to your VSTS Git repo so you can share it with your team.

## Next steps

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](tutorial/gitworkflow.md)



