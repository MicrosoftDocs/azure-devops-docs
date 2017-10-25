---
title: Git documentation home | VSTS & TFS 
description: Overview of Git version control in VSTS and Team Foundation Server
ms.assetid: 9e1079da-49a2-4035-addb-238a8023c9b1
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 10/24/2017
---

#  Git and VSTS
#### VSTS | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Host and manage your code in Git version control with VSTS and Team Foundation Server. Use version control to save your work and coordinate code changes across your team. Even if you're just a single developer, version control helps you stay organized as you fix bugs and develop new features. Version control keeps a history of your development so that you can review and even rollback to any version of your code with ease.

New to Git? [Learn more](https://www.visualstudio.com/learn-git) about how Git and VSTS can help your team ship great code.

## Get started

<div class="row">
<div class="col-sm-6 col-md-6">
![Use your favorite IDE with VSTS and Git](_img/overview/get-started-favorite-ide.png)
</div>
<div class="col-sm-6 col-md-6">

<p>Connect your favorite development environment to VSTS to access your repos and manage your work.
VSTS IDE integrations are available for [Visual Studio](../accounts/set-up-vs.md), 
[Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vsts.team), [Eclipse](http://java.visualstudio.com/Docs/tools/eclipse), 
and [IntelliJ](https://java.visualstudio.com/Docs/tools/intelliJ).</p>

<p>New to Git? Learn how to share code with Git and VSTS with getting started guides for [Visual Studio](share-your-code-in-git-vs.md), 
[Eclipse](share-your-code-in-git-eclipse.md), [Xcode](share-your-code-in-git-xcode.md), [IntelliJ](create-repo-intellij.md), and the [command line](share-your-code-in-git-cmdline.md).</p>
</div>
</div>

## Git tutorial

<div class="row">
<div class="col-sm-6 col-md-6">
<p>Get up and running with Git and VSTS in just a few minutes with the [VSTS Git quick start](gitquickstart.md).</p>

<p>The [VSTS Git tutorial](tutorial/gitworkflow.md) walks you through Git tasks like [creating repos](tutorial/creatingrepo.md), [working in branches](tutorial/branches.md), [saving your work](tutorial/commits.md), and [sharing your changes](tutorial/pushing.md). 
Every task is presented step-by-step in Visual Studio or from the command line.</p>
</div>
<div class="col-sm-6 col-md-6">
![VSTS Git tutorial workflow](tutorial/_img/gitworkflow.png)

</div>
</div>   

## Authenticate with your repos

<div class="row">
<div class="col-sm-6 col-md-6">

![Connect to VSTS from anywhere](_img/overview/IC839946.png)   

</div>

<div class="col-sm-6 col-md-6"> 

<p>You can authenticate with your VSTS Git repo from any platform using [cross-platform credential managers](set-up-credential-managers.md) or [SSH public key authentication](use-ssh-keys-to-authenticate.md).</p>

<p>If you have code ready to share in VSTS, our getting started guides take you through the steps to connect your development environment to a VSTS Git repo and share your code with your team.</p>

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
<li>Set [repo permissions](../security/permissions.md) and [branch permissions](branch-permissions.md)</li>
<li>[Set up branch policies](branch-policies.md) to protect key branches</li>
<li>[Set up continuous integration](../build-release/concepts/definitions/build/triggers.md#continuous-integration-ci) to catch bugs sooner.</li>
</ul>

</div>
<div class="col-sm-6 col-md-6"> 

![Manage your code and repos from the web](_img/overview/git-repos.png)

</div>
</div>

## Review code

<div class="row">
<div class="col-sm-6 col-md-6">

![Review code with pull requests in VSTS and TFS](_img/overview/pull-request.png)

</div>
<div class="col-sm-6 col-md-6"> 

<p>Review code with your team and make sure that changes build and pass tests before it's merged.</p>

<ul>
<li>[Create a pull request](pull-requests.md)</li>
<li>[Link work items to pull requests](pull-requests.md#link-work-items)</li> 
<li>[Set up branch policies](branch-policies.md#require-the-pull-request-to-build)</li> 
<li>[Squash merge pull requests](merging-with-squash.md)</li>
<li>[Git branch and pull request workflows](concepts/git-branching-guidance.md)</li>
</ul>

</div>
</div>