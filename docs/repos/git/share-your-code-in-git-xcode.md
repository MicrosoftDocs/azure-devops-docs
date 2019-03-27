---
title: Share your Xcode project with Git
titleSuffix: Azure Repos
description: "Share code in Git using Xcode"
ms.assetid: "f1fedd72-d9b9-45cf-99aa-2e624c899c45"
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 09/10/2018
monikerRange: '>= tfs-2015'
---


#  Share your code in Git using Xcode
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015

This guide shows you how to share your Xcode projects using Azure Repos. 

## Prerequisites

* An organization in Azure DevOps. If you don't have an organization, you can [sign up](../../organizations/accounts/create-organization.md) for one for free. Each organization includes free, unlimited private Git repositories.

## Create a local Git repo for your Xcode project

Create a local Git repo for your code to manage your project in version control. 

* [New projects](#new-projects)
* [Existing projects](#existing-projects)

If your project is already in a local Git repo, you can skip ahead to [Create a new Git repo in Azure Repos](#create-a-new-git-repo-in-azure-repos).

### New projects

Create a local Git repo when you create a new project. Choose **Create Git repository on My Mac** when creating a new project. 

![Create a Git repo at the time of Xcode project creation](_img/share-your-code-in-git-xcode/xcodenewproject.png)

### Existing projects

Create a local Git repo for your existing projects not in version control by going to **Source Control, Create Working Copy...** . Select the projects to add to the local Git repo and select **Create**. Xcode creates a Git repo for your code and adds a [commit](commits.md) with your project files.

![Add a local Git repo to an existing Xcode project](_img/share-your-code-in-git-xcode/xcodecreateworkingcopy.png)

## Create a new Git repo in Azure Repos

Create a new Git repo in Azure Repos for your Xcode project. 

If you have already created a repo for your Xcode project in Azure DevOps Services, you can skip ahead to [Push your project](#push-your-project).

1. Browse to your Project in your Azure DevOps organization and select the drop-down ![Azure DevOps Services drop-down picker](_img/share-your-code-in-git-xcode/vsts_drop_down_arrow.png) next to the name of the current Git repo. Select **New Repository..**  
  ![Create a new Git repo in Azure DevOps Services](_img/share-your-code-in-git-xcode/newrepo.png)

0. Enter a name for your new Git repo and select **Create**. Your browser will navigate to your new empty Git repo for your Xcode project. Copy the clone URL to the clipboard so that you can use it in Xcode to connect to VSTS.  

  ![Copy the clone URL for your new Git repo](_img/share-your-code-in-git-xcode/newrepocopycloneurl.png)

  > [!NOTE]
  > If you want to use SSH to connect to your Azure Repos/TFS Git repo, [Set up SSH credentials](use-ssh-keys-to-authenticate.md) and use the SSH clone URL when adding the remote for your local Git repo.

## Push your project

0. Go to **Source Control** in Xcode and select **_Projectname_ -- master**, then **Configure...**  

  ![Configure your Xcode Git project settings](_img/share-your-code-in-git-xcode/xcodeconfigureproject.png)

0. Select **Remotes**, then select the ![plus](_img/share-your-code-in-git-xcode/xcodeplusicon.png) icon and choose **Add Remote...**

0. In the **Address** field, paste the Git clone URL for your repo copied in the previous step. Select **Add Remote**, then select **Done** to finish creating the `origin` remote for your local Git repo.  

  ![Add a remote to the local Git repo for your Xcode project to connect to Azure DevOps Services](_img/share-your-code-in-git-xcode/xcodeaddremote2.png)

0. Go to **Source Control, Push...**, enter the branchname on `origin` to push to, and select **Push**.

  ![Push your Xcode project to Azure DevOps Services](_img/share-your-code-in-git-xcode/xcodepushtomaster.png)

0. If prompted, enter your Azure DevOps Services credentials. For **Username**, enter your Azure DevOps Services username. For **Password**, enter a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) created for your user in VSTS. Select **OK**. 

  ![Authenticate using personal access tokens](_img/share-your-code-in-git-xcode/xcodeauthentication.png)

Xcode will [push](pushing.md) your project to your Azure Repos/TFS Git repo so you can share it with your team.

## Next steps

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](gitworkflow.md)



