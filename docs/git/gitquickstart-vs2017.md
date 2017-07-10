---
title: Get started with Git and Visual Studio 2017 | Team Services & TFS
description: Quick Start with Git and Visual Studio Team Services and Visual Studio 2017
ms.assetid: d7dcb364-056f-421b-8896-0304cddf12fe
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: sdanie
ms.date: 04/03/2017
---

#  Get Started with Git and Team Services

> [!div class="op_single_selector"]
> - [Visual Studio 2015 Update 2](gitquickstart.md)
> - [Visual Studio 2017](gitquickstart-vs2017.md)
> - [Visual Studio 2013 and Visual Studio 2015 RTM/Update 1](get-started-vs2013.md)   
   
###### Team Services | TFS 2015 & TFS 2017  

This guide covers the basics so you can get up and running using Git with code already in Team Services or Team Foundation Server. 
Explore our [full tutorial](tutorial/gitworkflow.md) for more information on how to use Git from Visual Studio or the command line. 

If you don't have your code in a Team Services or TFS Git repo, visit our [Visual Studio](share-your-code-in-git-vs.md) or [command line](share-your-code-in-git-cmdline.md) getting started articles to learn how to create a local repo for your code and push it to Team Services.

<a name="clone"></a>

## Get your code 

To get a copy of the source code, you will [clone](tutorial/clone.md) a Team Services Git repository. Cloning creates both a copy
of the source code for you to work with and all the version control information so Git can manage the source code.

If you don't have a Git repository yet, you can create one [using your own code](tutorial/creatingrepo.md) and continue with the steps to commit and share your work.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to clone a repo</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<ol>
<li> In Team Explorer, open up the Connect page by choosing **Projects and My Teams** then **Manage Connections**    

  ![Cloning Visual Studio Team Services Git repositories in Visual Studio](_shared/_img/manageConnections.png) 
  
<li> Select **Manage Connections**, then select **Connect to Project**.

<li> The **Connect to a Project** dialog will appear. Select the repo you want to clone from the list and select **Clone**. If you don't see your repo listed, you can filter the list 
to find it or add a Team Foundation Server where the repo is hosted by selecting the **Add Server** link.   
   
   ![Cloning a Git Repository from a Connected Visual Studio Team Services Account](_shared/_img/vs2017_connect_dialog.png)   

<li>Verify the location of the cloned repo on your PC and select **Clone**.</li>   
</ol>   
</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li> [Download and install Git](http://git-scm.com/download) and the [Git Credential Manager](set-up-credential-managers.md) for your platform.   
<li> Open the Team Services web portal in your browser and find your Git repository. 
Copy the command line instructions from the **Clone** pop-up.   

  ![Finding the Clone URL for your Git Repository in Visual Studio Team Services](_shared/_img/cloneURL.png)
<li> Navigate to the folder where you want the code stored on your local computer using the command line.
<li> From the command line, paste the command you copied from the command line instructions. It will look like this
on the command prompt:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git clone <a style="color: #b5bd68;">https://fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/FabrikamFiber</a>  
</pre>

Git will download and create your own copy of the code in a new folder for you to work with. 
</ol>
</div></div></div>

<a name="commit"></a>

## Commit your work

Git [branches](tutorial/branches.md) isolate your changes from other work being done in the project. The recommended [Git workflow](tutorial/gitworkflow.md) 
uses a new branch for every feature or fix you work on. You make [commits](tutorial/commits.md) in your local Git repository to save your changes on that branch.

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample1">How to commit changes</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline1">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs1">Visual Studio</a></li>
</ul>

<div id="changeexample1" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs1" class="tab-pane fade in active">
<ol>
<li> In Team Explorer, click the drop down and choose **Branches**. Right click the master branch and choose **New Local Branch From...**    

  ![Creating a Local Branch off the Master branch in Visual Studio](_shared/_img/newVSBranch.png)  
Choose a descriptive branch name for your work to remind you and others what kind of work is in the branch. 
<li> Make changes to your files in the cloned repo. From the Team Explorer **Home** view, you can open up Visual Studio solutions in the repo or browse the repo contents using the  **Show Folder View** link. Git keeps track of changes made to your code both inside and outside of Visual Studio.
<li> When you are satisfied with the changes, save them in Git using a commit. Open up the 
**Changes** view from Team Explorer. Stage the changes to add to your next commit by right-clicking the files and selecting **Stage**, add a message describing the commit, then select **Commit Staged**.    
 
  ![Committing changes to a Git branch in Visual Studio](_shared/_img/vs_update2_changes.png)
</ol>
</div>

<div class="tab-pane fade" id="cmdline1" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li> Create a branch where you will work with the code and make your changes.
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git checkout -b <font color="#b5bd68">my-feature</font>
</pre>
Choose a descriptive branch name for your work to remind you and others what kind of work is in the branch. 
You can also use this command to start working on a branch that other team members are already working in.
<li> Make changes using your favorite tools on the code. 
<li> When you're satisfied with the changes-even if you aren't ready to share the work-save them in Git using a commit.
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git commit -A -m <font color="#b5bd68">"descriptive message"</font>
</pre>
This will save your changes locally to a new [commit](tutorial/commits.md) in Git. Make sure to give the commit a short message describing your changes after the -m flag.   
</ol>
</div></div></div>

<a name="push"></a>

## Share your changes
When you are ready to share your changes with the team, you [push](tutorial/pushing.md) those changes so that others can reach them. You can only
push changes after you add commits to a branch. 

Once you push the changes, you can create a [pull request](tutorial/pullrequest.md) to let others know you'd like to have the changes reviewed and added to the master 
branch of the code.   

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample2">How to share your code</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline2">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs2">Visual Studio</a></li>
</ul>


<div id="changeexample2" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs2" class="tab-pane fade in active">
<ol>
<li> Open up the **Synchronization** view in Team Explorer. You can see the outgoing commits and share them by clicking **Push** if you are working
with a branch that is already shared, or **Publish** if you are working with a newly created local branch.    

  ![Sharing Code in Git using Push in Visual Studio](_shared/_img/newVsPush.png) 
  
<li> Create a pull request so that others can review your changes. Open **Pull Requests** in Team Explorer, and click
**New Pull Request**. Verify the remote branch to merge the changes into, such as `my-feature`.   

  ![Create a Pull Request in Visual Studio](_shared/_img/newVsPullRequest.png)
<li> You can review comments made in your [pull request](tutorial/pullrequest.md) in a web browser on the Visual Studio Team Services project page. Once all changes are approved by the
team, you complete the pull request through the web browser.
</ol>
</div>

<div class="tab-pane fade" id="cmdline2" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li> Push your branch so that others can see the changes you've saved.
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git push -u origin <font color="#b5bd68">dev</font></pre>

<li> Open up the Team Services project in the web portal and browse to your repository under the "Code" tab. Click the **Create Pull Request** button to
create a pull request for the branch that you pushed.   

   ![Creating a new Pull Request in Visual Studio Team Services](_shared/_img/vstsCreatePullReq.png)   
<li> Create the pull request, adding in team members to review and approve the code changes.

<li> Once the changes are approved, complete the pull request in Visual Studio Team Services. 
This will pull your changes from the branch into the master branch of the code.
</ol>
</div></div></div>

<a name="pull"></a>

## Sync with others

To get changes from others and keep your code up to date, you [pull](tutorial/pulling.md) commits made by others and merge them into your branch. Git is very good
about merging multiple changes even in the same file, but sometimes you might have to [resolve a merge conflict](tutorial/merging.md).  It's a good idea to 
pull your branches regularly to keep them up to date with the changes from others. This makes sure that your feature branches from your main branch are using the latest version of the code.   

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample3">How to sync with others</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline3">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs3">Visual Studio</a></li>
</ul>

<div id="changeexample3" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs3" class="tab-pane fade in active">
<ol>
<li> Open up the **Sync** view in Team Explorer. You can download the latest changes to the branch you are on using the "Pull" link.   
  ![Using Pull to download changes in Git in Visual Studio](_shared/_img/newVsPull.png)
</div>

<div class="tab-pane fade" id="cmdline3" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<ol>
<li> Switch to the branch where you want to download the changes others have made
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git checkout <font color="#b5bd68">dev</font></pre>
<li> Pull in the changes made by others to your local branch.
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
&gt; git pull
</pre>
</ol>

Git will download the changes and merge them with your own changes into your local branch. 

</div></div></div>