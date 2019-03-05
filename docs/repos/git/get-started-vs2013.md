---
title: Get started with Git and Visual Studio 2013
titleSuffix: Azure Repos
description: Get started using Git in Visual Studio
toc: show
ms.assetid: BFDE8FAF-63B8-4BC9-9A24-32EE2CA73C13
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '>= tfs-2013'
---


#  Get started using Git in Visual Studio

> [!div class="op_single_selector"]
> - [Visual Studio 2017](gitquickstart.md)
> - [Visual Studio 2015 Update 2](gitquickstart-vs2015.md)
> - [Visual Studio 2013 and Visual Studio 2015 RTM/Update 1](get-started-vs2013.md) 

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 

Whether your software project is large, small, or brand new, in most cases you'll be better off if you use version control as early as possible. 
Here, we'll show you how to get started with Git, a distributed version control system. 
If you want to work in a centralized version control system, you can instead use [Team Foundation Version Control](../../repos/tfvc/overview.md) (TFVC).

## Create a project for your repositories
Projects hold your repositories, backlogs, and builds.  When you create a project, a new repository will be automatically created for you.

If you don't already have a project [create a new project](#create_team_project)

## Install Git client tools
To use Git, you'll need to have the client tools installed on your computer.

[//]: # (Fix the 2015 link)
* Install [Visual Studio 2013](http://go.microsoft.com/fwlink/?LinkId=309297) or [Visual Studio 2015](https://visualstudio.microsoft.com/downloads/visual-studio-2015-downloads-vs)
* Or, if you're not using Visual Studio, [install the latest command line tools](http://git-scm.com/downloads) 

[//]: # (The walkthrough below shows the steps for getting started with Git using Visual Studio.  If you're not using Visual Studio, check out one of these topics:)
 
[//]: # (Get started using command line)
[//]: # (Using Git with Eclipse)

[//]: # (Update when new onboarding is in place) 
## Clone
To get started, you'll first need to clone your repo to your local machine.  Once you have a local clone, you can start adding code to your repo.

0. Go to your team's project page (`https://dev.azure/{yourorganization}/{yourteamproject}`) and then open Visual Studio to connect to your project.  Click **Allow** if prompted to open Visual Studio.

	![Click Home, then Open in Visual Studio](_img/get-started/GoHomeOpenInVisualStudio.png)

0. Sign in to Azure DevOps Services from Visual Studio.

0. Clone the repository to your computer.

	![Click the Clone Repository link](_img/get-started/VSClone1.png)
	
0. The clone URL is automatically populated and a default local path is provided.  Change the local path to the location where you want to store your repo.  Click **Clone** to start copying the repo locally.

	![Click the Clone button](_img/get-started/VSClone2.png)  

## Add code to your repo
Let's add a new app to the repo so we can make some changes.

0. Create a new project in Visual Studio from the team explorer.

 ![New solution link in team explorer](_img/get-started/new-solution-link-in-team-explorer.png)

0. Create a new Console Application.  Notice that the location is set to the location on disk where the empty repo was cloned and the Add to source control option is checked.

	![Notice the location is the path to the local repo](_img/get-started/VSProjectLocation.png)
	
0. In Team Explorer, navigate to the Changes page.  Notice that your new solution is showing up on the Home page under Solutions.

	![Navigate to the Changes page](_img/get-started/VSChanges1.png)
	
0. The new app appears under the Included Changes section.  Enter a commit message and click the **Commit and Push** button to commit the changes to your local repo then push your changes to Azure DevOps Services.
If you haven't previously used Git on this computer, you may have to [configure your username and email address](#configure_username_email).

	![Enter a message and click Commit](_img/get-started/VSChangesCommitPush.png)
	
0. In your browser, view the changes pushed to the server by clicking on **CODE**.    

	![See the recently pushed changes under CODE](_img/get-started/VSOAppAdded.png)

## Create a topic branch
In Git, branches are very lightweight and enable a lot of useful functionality.  A common best practice is to perform all development in a branch (even minor changes and bug fixes).
These types of branches are often called "topic branches" as they are created for a single task or topic of work.

Let's make a change in a topic branch to explore some additional features.  

0. In Team Explorer, navigate to the Branches page.
	
	![Click the Branches tile](_img/get-started/VSBranches1.png)
	
0. On the Branches page, right-click on the **master** branch and choose **New Local Branch From...** to create a new topic branch.

	![Right-click and choose New Local Branch From](_img/get-started/VSBranchesNewLocal.png)
	
0. Enter a name for your branch and click **Create Branch**.  When naming your branches, use slashes to organize your branches.

	![Enter a branch name and click Create Branch](_img/get-started/VSBranchesCreate.png)

## Make a change to your app
Now that you have a new topic branch, you're ready to start making changes to your app.

0. Add a "hello, world" message to the console app.

	![Add a "Hello, world" message](_img/get-started/VSHelloWorld.png)

## Commit
0. Right-click on the file in Solution Explorer and choose **Commit**.  

	![Right-click and choose Commit](_img/get-started/VSCommit.png)

0. On the Changes page, enter a commit message and click **Commit** to commit the changes to your topic branch.

	![Enter a comment and click Commit](_img/get-started/VSChangesCommit.png)

## Publish
To share the changes in your topic branch, you'll need to publish it to the server.

0. Click on the **Sync** link in the successful commit notification to open the Synchronization page.

	![Click Sync to open the Sync page](_img/get-started/VSCommitSyncMessage.png)
	
0. On the Sync page, click on the **Publish** link to push the changes on your topic branch to the server.

	![Click Publish to push your changes](_img/get-started/VSSyncPublish.png)

## Conduct a pull request
Pull Requests are a common workflow for reviewing code created in a topic branch and merging changes.  Let's create a pull request to see how it works.

0. In your browser, open the **Code** page and click **Pull requests** to view the **Pull Requests** page.

	![Click CODE, then Pull Requests](_img/get-started/WebPullRequestHub.png)

0. Click on **New Pull Request** to create a new pull request.

	![Click New Pull Request](_img/get-started/WebPullRequestNew.png)
	
0. Select your topic branch from the first drop-down.  The default branch (master) is the default target branch.

	![Select your topic branch](_img/get-started/WebPullRequestSelectBranch.png)
	
0. Verify that the preview contains the changes you want to review and click **Create Pull Request**.

	![Click Create Pull Request](_img/get-started/WebPullRequestCreate.png)
	
Now you can add reviewers to get their feedback on your changes before you merge your changes into master.  

[//]: # (TODO: link to the pull request topic)

![Pull Request with feedback](_img/get-started/WebPullRequestInProgress.png)

[//]: # (TODO: Tweak from your web browser)

[//]: # (TODO: Merge the pull request)

[//]: # (TODO: View history)

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<a name="create_team_project"></a>
#### Q: How do I create a project on Azure DevOps Services?
* [Sign up and create your project](../../organizations/accounts/create-organization.md).  Be sure to select **Git** from the version control options:

	![Select Git from the Version Control menu](_img/get-started/CreateProjGitFirstRun.png)
	

#### Q: How do I create a project on an on-premises Team Foundation Server?
* [Set up TFS on a server](/azure/devops/server/install/get-started).
* [Create a project](../../organizations/projects/create-project.md).  Be sure to select **Git** from the version control options:

	![Select Git from the Version Control menu](_img/get-started/CreateProjGitPCW.png)

[//]: # (Update with a real screenshot)

#### Q: How do I get started using Command line tools? 
First you'll need to:
* [Make sure you're set up to use the command prompt](command-prompt.md#set_up)

 ![Prompt to install Git command prompt tools](_img/command-prompt/IC675719.png)

* Get the clone URL from the Repos page in Azure DevOps Services.

For the Fabrikam project on Azure DevOps Services, the command to clone would look like this:

`git clone https://dev.azure.com/fabrikam/DefaultCollection/_git/Fabrikam`

Once you have the repo cloned, create a new topic branch:

`git checkout -b users/jamal/new_branch`

When you have changes to add to the repo, stage the files using:

`git add .`

Then commit to the local repo:

`git commit -a -m "Initial commit"`

When you're ready to publish your topic branch to the repo on Azure DevOps Services, push the changes:

`git push origin users/jamal/new_branch`

Now you can return to the web portal to complete the pull request experience.

<a name="configure_username_email"></a>
#### Q: How do I configure my Git username and email address?
Before you can commit in Visual Studio, you must configure the username and email address that Git will use to identify commits that you create.

On the Changes page, you will be prompted if you haven't configured your username or email address.  You can also access the Git Settings page from the Settings page in Team Explorer, under the Git section, Global Settings.

![Click configure to enter your settings](_img/get-started/ConfigureSettings1.png)
	
Enter your preferred username and email address on the Git Settings page.  

![Enter your username and email](_img/get-started/ConfigureSettings2.png)



<!-- ENDSECTION --> 
