---
title: Clone an existing Git repo | Team Services & TFS
description: Create a local copy of an existing repo using Visual Studio or command line clone 
ms.assetid: b6240e2f-2d3d-4874-9953-7e554d5e3b97
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.topic: get-started-article
ms.manager: douge
ms.author: routlaw
ms.date: 11/28/2016
---

# Clone an existing Git repo

###### Team Services | TFS 2015 & TFS 2017 | Visual Studio 2015 & 2017

Create a complete local copy of an existing Git repo using by cloning it. 
Cloning a repo downloads all [commits](commits.md) and [branches](branches.md) in the repo and sets up a named relationship with the existing repo you cloned.
Use this relationship to interact with the existing repo, [pushing](pushing.md) and [pulling](pulling.md) changes to share code with your team.

>[!NOTE]
> By default, Git will assign the `origin` to the remote repo you clone from. Most users don't need more than one remote, so the tutorial uses `origin` in its steps. 
> [Learn more](creatingrepo.md#remotes) about setting up remotes to your Git repo.

## Video tutorial

<iframe src="https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Create-a-Git-repo-in-Visual-Studio-2015/player" width="560" height="315" allowFullScreen frameBorder="0"></iframe>

>[!TIP]
> Working from the command line? You can view our video overview using command line steps on [Channel9](https://channel9.msdn.com/series/Team-Services-Git-Tutorial/Git-Tutorial-Create-a-repo-from-the-command-line).

<a name="clone_url"></a>

## Get the clone URL to your repo

Before you can clone an existing repo, you'll need a URL that points to the existing repo. This URL represents the source of the repo you're going to copy during the clone.

If you're using Team Services or Team Foundation Server 2017, you can find this clone URL in the web interface. 
When viewing your repo from the **Code** tab in the interface, select **Clone** in the upper right.

![Get a clone a URL from Team Services](_img/get_clone_url.gif)

If you need to clone a GitHub repo, you'll need to get the clone URL from the **Clone or download** button while viewing the repo on the web in GitHub. 

Other Git providers have similar buttons in their user interface to get the clone URL. 

Copy this URL into the clipboard or store it in a place where you can find it easily. You can't clone a repo without a clone URL.

## Clone a repo 

<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">
<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
<li style="float:left;" data-toggle="collapse" data-target="#changeexample">How to clone an existing repo</li>
<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#cmdline0">Command Line</a></li>
<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#vs0">Visual Studio</a></li>
</ul>

<div id="changeexample" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
<div id="vs0" class="tab-pane fade in active">
<h6>Team Services | TFS 2015 &amp; 2017 | Visual Studio 2015 &amp; 2017</h6>

<h4>Clone from Visual Studio Team Services / Team Foundation Server</h4>

<ol><li style="margin-bottom:5px;">Open Team Explorer (go to **View** and select **Team Explorer** or use the Ctrl+\, Ctrl+M hotkey sequence) and open the **Connect** view. Go to **Projects**, then **Manage Connections** if you don't see the Connect view.
<li style="margin-bottom:5px;">Select **Connect...** under **Hosted Service Providers**.

   ![Connecting to Visual Studio Team Services](_img/connect_to_vsts_from_vs2015.png)

<listyle="margin-bottom:5px;">Choose your team's account from the drop-down in the dialog that appears and select which Team Projects to connect to Team Explorer. Select **Connect**. 

<li style="margin-bottom:5px;">Clone the repository in one of the Team Projects by right-clicking the project and selecting **Clone...**. 
<li style="margin-bottom:5px;" >Enter the folder where Git will store the local repository in the **Local Git Repositories** section.
<li style="margin-bottom:5px;">Select **Clone** to clone your repo. 

   <P>![Cloning a Visual Studio Team Services Repository in Visual Studio](../_shared/_img/cloneVsRepo.png)</ol>   

<h4>Clone from another Git provider</h4>

<p>If you are not using Team Services, you can still clone your repo in Team Explorer and work with your code in Visual Studio. 
<ol>
<li style="margin-bottom:5px;">In Team Explorer, open the **Connect** view.
<li style="margin-bottom:5px;">Select **Clone** under **Local Git Repositories** and enter the URL for your Git repo&mdash;this will be provided by your team or Git hosting 
provider. 
<li style="margin-bottom:5px;">Select a folder where you want your cloned repo to be kept. 
<li style="margin-bottom:5px;">Select **Clone** to clone the repo.   

   <p>![Clone your repo from other providers using Visual Studio](_img/clone_other_providers.png)</ol>    

<h4>Open a solution in Visual Studio from a cloned repo</h4>

<p>Open a solution in a cloned repo in Visual Studio by right-clicking on the repository in the Team Explorer **Connect** view and selecting **Open**. 
You'll be taken to the **Home** view in Team Explorer. Double-click your project solution file in the **Solutions** area to open the solution in Solution Explorer.</p>

   <p style="padding-left:25px;">![Open a solution from a cloned repo in Team Explorer](_img/vs_open_solution.gif)</P>

</div>

<div class="tab-pane fade" id="cmdline0" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

<P>Make sure you have installed the [Git command line package](http://git-scm.com/download) for your platform as well as the 
right [Git Credential Manager](../set-up-credential-managers.md) before continuing.

<P style="margin-bottom:5px;">You'll need a clone URL to tell Git what repository you want to clone to your computer. Use the URL you copied earlier during the [previous step](clone.md#clone_url) in this article.

<p style="margin-bottom:5px;">Pass this clone URL to `git clone` to make a local copy of the repo:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px;margin-bottom:5px;">
&gt; git clone <a style="color: #b5bd68;">https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam</a>  

<font color="#b5bd68">Cloning into FabrikamFiber
Receiving objects: 100% (65027/65027), 104.12 MiB | 6.42 MiB/s, done.
Resolving deltas: 100% (19707/19707), done.</font>
</pre>

<P style="margin-bottom:5px;">This clones the repository from the URL in a folder under the current one. You can pass in a folder name after the URL to create the repo in a specific location, for example:

<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px;margin-bottom:5px;">
&gt; git clone <a style="color: #b5bd68;">https://fabrikam.visualstudio.com/DefaultCollection/_git/Fabrikam</a> C:\Repos\FabrikamFiber</pre> 

</div></div></div>

## What's next

[Save work with commits](commits.md)
