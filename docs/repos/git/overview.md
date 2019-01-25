---
title: Git documentation home
titleSuffix: Azure Repos 
description: Overview of Git version control in Azure DevOps Services and Team Foundation Server
ms.assetid: 9e1079da-49a2-4035-addb-238a8023c9b1
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: overview
ms.date: 09/10/2018
layout: LandingPage
monikerRange: '>= tfs-2015'
---


# Git and Azure Repos

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Host and manage your code in Git version control with Azure DevOps Services and Team Foundation Server. Use version control to save your work and coordinate code changes across your team. Even if you're just a single developer, version control helps you stay organized as you fix bugs and develop new features. Version control keeps a history of your development so that you can review and even rollback to any version of your code with ease.

New to Git? [Learn more](/azure/devops/learn/git/learn-git-with-team-services) about how Git and Azure Repos can help your team ship great code, and learn [how we use Git at Microsoft](/azure/devops/learn/devops-at-microsoft/use-git-microsoft).

## Get started

<div class="row">
<div class="col-sm-6 col-md-6">
![Use your favorite IDE with Azure Repos and Git](_img/overview/get-started-favorite-ide.png)
</div>
<div class="col-sm-6 col-md-6">

<p>Connect your favorite development environment to Azure DevOps Services to access your repos and manage your work.
Azure DevOps Services IDE integrations are available for [Visual Studio](../../organizations/accounts/set-up-vs.md), 
[Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team), [Eclipse](/azure/devops/java/download-eclipse-plug-in), 
and [IntelliJ](/azure/devops/java/download-intellij-plug-in).</p>


<p>New to Git? Learn how to share code with Git and Azure Repos with the following getting started guides:</p>
</div>
</div>

<!--- All images are Placeholder --> 
<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack"><div class="ico48Link"><a href="create-new-repo.md"><img width="48" height="48" alt="Web" src="https://docs.microsoft.com/media/common/i_web.svg"><span>Web</span></a></div><div class="ico48Link"><a href="share-your-code-in-git-vs-2017.md"><img width="48" height="48" alt="Visual Studio" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg"><span>Visual Studio</span></a></div><div class="ico48Link"><a href="share-your-code-in-git-cmdline.md"><img width="48" height="48" alt="Command-line" src="https://docs.microsoft.com/media/common/i_cligeneric.svg"><span>Command-line</span></a></div><div class="ico48Link"><a href="share-your-code-in-git-xcode.md"><img width="48" height="48" alt="Xcode" src="https://docs.microsoft.com/media/logos/logo_xcode.svg"><span>Xcode</span></a></div><div class="ico48Link"><a href="share-your-code-in-git-eclipse.md"><img width="48" height="48" alt="Eclipse" src="https://docs.microsoft.com/media/logos/logo_eclipse.svg"><span>Eclipse</span></a></div>

<div class="ico48Link"><a href="create-repo-intellij.md"><img width="48" height="48" alt="IntelliJ" src="https://docs.microsoft.com/media/logos/logo_intellij.svg"><span>IntelliJ</span></a></div>

</div>

## Git tutorial

<div class="row">
<div class="col-sm-6 col-md-6">
<p>Get up and running with Git and Azure Repos in just a few minutes with the [Azure Repos Git quick start](gitquickstart.md).</p>

<p>The [Azure Repos Git tutorial](gitworkflow.md) walks you through Git tasks like [creating repos](creatingrepo.md), [working in branches](branches.md), [saving your work](commits.md), and [sharing your changes](pushing.md). 
Every task is presented step-by-step in Visual Studio or from the command line.</p>
</div>
<div class="col-sm-6 col-md-6">
![Azure Repos Git tutorial workflow](_img/gitworkflow.png)

</div>
</div>   

## Authenticate with your repos

<div class="row">
<div class="col-sm-6 col-md-6">

![Connect to Azure DevOps Services from anywhere](_img/overview/IC839946.png)   

</div>

<div class="col-sm-6 col-md-6"> 

<p>You can authenticate with your Azure Repos/TFS Git repo from any platform using [cross-platform credential managers](set-up-credential-managers.md) or [SSH public key authentication](use-ssh-keys-to-authenticate.md).</p>

<p>If you have code ready to share in Azure Repos, our getting started guides take you through the steps to connect your development environment to a Git repo in Azure Repos and share your code with your team.</p>

<ul>
<li>[Get Started with Visual Studio](share-your-code-in-git-vs.md)</li>
<li>[Get Started with Xcode](share-your-code-in-git-xcode.md)</li>
<li>[Get Started with Eclipse](share-your-code-in-git-eclipse.md)</li>
<li>[Get Started with IntelliJ](create-repo-intellij.md)</li>
</ul>

</div>
</div>

## Manage your repos

<div class="row">
<div class="col-sm-6 col-md-6"> 
<p>Manage your repos and customize your team's workflow. Set up permissions to control access to your code and set up branch policies and continuous integration to prevent build breaks and catch bugs sooner.</p>

<ul>
<li>[Create](create-new-repo.md), [delete](delete-existing-repo.md), and [rename](repo-rename.md) repos.</li>
<li>Set [repo permissions](../../organizations/security/permissions.md) and [branch permissions](branch-permissions.md)</li>
<li>[Set up branch policies](branch-policies.md) to protect key branches</li>
<li>[Set up continuous integration](../../pipelines/build/triggers.md#continuous-integration-ci) to catch bugs sooner.</li>
</ul>

</div>
<div class="col-sm-6 col-md-6"> 

![Manage your code and repos from the web](_img/overview/git-repos.png)

</div>
</div>

## Review code

<div class="row">
<div class="col-sm-6 col-md-6">

![Review code with pull requests in Azure DevOps Services and TFS](_img/overview/pull-request.png)

</div>
<div class="col-sm-6 col-md-6"> 

<p>Review code with your team and make sure that changes build and pass tests before it's merged.</p>

<ul class="panelContent cardsFTitle">
    <li>
        <a href="pull-requests.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Create a pull request" src="https://docs.microsoft.com/media/common/i_pull-request.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Create a pull request</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="pull-requests.md#link-work-items">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Link work items to pull requests" src="../../_img/index/i_tasks.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Link work items to pull requests</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="branch-policies.md#build-validation">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Set up branch policies" src="../../_img/index/i_branch-policies.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Set up branch policies</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="merging-with-squash.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Squash merge pull requests" src="https://docs.microsoft.com/media/common/i_pull-request.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Squash merge pull requests</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="git-branching-guidance.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Git branch and pull request workflows" src="../../_img/index/i_branch-policies.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Git branch and pull request workflows</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
</ul>

</div>
</div>

