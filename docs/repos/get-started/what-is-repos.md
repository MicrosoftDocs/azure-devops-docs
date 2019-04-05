---
title: Collaborate on code
titleSuffix: Azure Repos
description: What do you get with Azure Repos  
ms.prod: devops
ms.technology: devops-new-user
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 09/19/2018
ms.topic: overview
layout: LandingPage
monikerRange: 'azure-devops'
---

# What is Azure Repos?

Azure Repos is a set of version control tools that you can use to manage your code. Whether your software project is large or small, using version control as soon as possible is a good idea. 

Version control systems are software that help you track changes you make in your code over time. As you edit your code, you tell the version control system to take a snapshot of your files. The version control system saves that snapshot permanently so you can recall it later if you need it. Use version control to save your work and coordinate code changes across your team. 

Even if you're just a single developer, version control helps you stay organized as you fix bugs and develop new features. Version control keeps a history of your development so that you can review and even roll back to any version of your code with ease.

Azure Repos provides two types of version control:

- [Git](#git): distributed version control
- [Team Foundation Version Control (TFVC)](#tfvc): centralized version control

## Git

Git is the most commonly used version control system today and is quickly becoming the standard for version control. Git is a distributed version control system, meaning that your local copy of code is a complete version control repository. These fully functional local repositories make it is easy to work offline or remotely. You commit your work locally, and then sync your copy of the repository with the copy on the server.

Git in Azure Repos is standard Git. You can use the clients and tools of your choice, such as Git for Windows, Mac, partners' Git services, and tools such as Visual Studio and Visual Studio Code.

- [Connect your favorite development environment](#connect-your-favorite-development-environment)
- [Review code with pull requests](#review-code-with-pull-requests)
- [Protect branches with policies](#protect-branches-with-policies)
- [Extend pull request workflows with pull request status](#extend-pull-request-workflows-with-pull-request-status)
- [Isolate code with forks](#isolate-code-with-forks)

### Connect your favorite development environment

<div class="row">

<div class="col-sm-6 col-md-6">

<p>Connect your favorite development environment to Azure Repos to access your repos and manage your work.</p>

</div>
</div>

<!--- All images are placeholders --> 
<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack">
<div class="ico48Link"><a href="../git/share-your-code-in-git-cmdline.md"><img width="48" height="48" alt="Command line" src="https://docs.microsoft.com/media/common/i_cligeneric.svg"><span>Command-line</span></a></div>
<div class="ico48Link"><a href="https://marketplace.visualstudio.com/items?itemName=ms-vsts.team"><img width="48" height="48" alt="Visual Studio Code" src="https://docs.microsoft.com/media/logos/logo_vs-code.svg"><span>Visual Studio Code</span></a></div>
<div class="ico48Link"><a href="../git/share-your-code-in-git-vs-2017.md"><img width="48" height="48" alt="Visual Studio" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg"><span>Visual Studio</span></a></div>
<div class="ico48Link"><a href="../git/share-your-code-in-git-xcode.md"><img width="48" height="48" alt="Xcode" src="https://docs.microsoft.com/media/logos/logo_xcode.svg"><span>Xcode</span></a></div>
<div class="ico48Link"><a href="/azure/devops/java/download-eclipse-plug-in"><img width="48" height="48" alt="Eclipse" src="https://docs.microsoft.com/media/logos/logo_eclipse.svg"><span>Eclipse</span></a></div>

<div class="ico48Link"><a href="/azure/devops/java/download-intellij-plug-in"><img width="48" height="48" alt="IntelliJ" src="https://docs.microsoft.com/media/logos/logo_intellij.svg"><span>IntelliJ</span></a></div>

</div>

### Review code with pull requests

<div class="row">
<div class="col-sm-6 col-md-6">

</div>
<div class="col-sm-6 col-md-6"> 

<p>Review code with your team and make sure that changes build and pass tests before it's merged.</p>

<ul class="panelContent cardsFTitle">
    <li>
        <a href="../git/pull-requests-overview.md">
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
        <a href="../git/pull-requests.md#link-work-items">
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
        <a href="../git/branch-policies.md#build-validation">
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
        <a href="../git/merging-with-squash.md">
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
        <a href="../git/git-branching-guidance.md">
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
        <li>
        <a href="../git/pull-requests.md#leave-comments">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Leave comments" src="https://docs.microsoft.com/media/common/i_blog.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Leave comments</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/pull-requests.md#vote-on-the-changes">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Vote on the changes" src="../git/_img/logos/check.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Vote on the changes</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
</ul>

</div>
</div>

### Protect branches with policies

There are a few critical branches in your repo that the team relies on to always be in good shape, such as your `master` branch.
[Require pull requests](../git/branch-policies.md) to make any changes on these branches.
Developers who push changes directly to the protected branches will have their pushes rejected.

Add conditions to your pull requests to enforce a higher level of code quality in your key branches.
A clean build of the merged code and approval from multiple reviewers are extra requirements that you can set to help protect your key branches.

<ul class="panelContent cardsFTitle">
    <li>
        <a href="../git/branch-policies-overview.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Branch policies overview" src="../../_img/index/i_branch-policies.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Branch policies overview</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/branch-policies.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="How to configure branch policies" src="https://docs.microsoft.com/media/common/i_policy.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>How to configure branch policies</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/branch-permissions.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Branch permissions" src="https://docs.microsoft.com/media/common/i_protect.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Branch permissions</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
</ul>

### Extend pull request workflows with pull request status

Pull requests and branch policies enable teams to enforce many best practices related to reviewing code and running automated builds. But many teams have additional requirements and validations to perform on code. To cover these individual and custom needs, Azure Repos offers pull request statuses. 

Pull request statuses integrate into the PR workflow. They allow external services to programmatically sign off on a code change by associating simple success/failure information with a pull request. 

<ul class="panelContent cardsFTitle">
    <li>
        <a href="../git/pull-request-status.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Pull request status overview" src="https://docs.microsoft.com/media/common/i_pull-request.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Pull request status overview</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/create-pr-status-server.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Create a PR status server with Node.js" src="https://docs.microsoft.com/media/common/nodejs.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Create a PR status server with Node.js</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/create-pr-status-server-with-azure-functions.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Use Azure Functions to create custom branch policies" src="https://docs.microsoft.com/media/index/azurefunctions.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Use Azure Functions to create custom branch policies</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="../git/pr-status-policy.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Configure a branch policy for an external service" src="https://docs.microsoft.com/media/common/i_web.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Configure a branch policy for an external service</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
</ul>

### Isolate code with forks

Forks are a great way to isolate experimental, risky, or confidential changes from the original codebase. A fork is a complete copy of a repository, including all files, commits, and (optionally) branches. The new fork acts as if someone cloned the original repository and then pushed to a new, empty repository.

After a fork has been created, new files, folders, and branches are not shared between the repositories unless a pull request carries them along. After you're ready to share those changes, it's easy to use [pull requests](../git/pull-requests-overview.md) to push the changes back to the original repository.

<ul class="panelContent cardsFTitle">
    <li>
        <a href="../git/forks.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Learn more about forks" src="https://docs.microsoft.com/media/common/i_forks.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Learn more about forks</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
 </ul>

## TFVC

Azure Repos also supports Team Foundation Version Control (TFVC). TFVC is a centralized version control system. Typically, team members have only one version of each file on their dev machines. Historical data is maintained only on the server. Branches are path-based and created on the server.

Get started by creating a project, configuring your workspace, and reviewing and sharing your code. You can use any one of these clients or IDEs: 

<!--- All images are Placeholder --> 
<!-- Converting to icon48 format, this gets cleaner in YAML -->
<div class="ico48Case halfStack"><div class="ico48Link"><a href="../tfvc/share-your-code-in-tfvc-vs.md"><img width="48" height="48" alt="Visual Studio" src="https://docs.microsoft.com/media/logos/logo_visual-studio.svg"><span>Visual Studio</span></a></div><div class="ico48Link"><a href="../tfvc/share-your-code-in-tfvc-xcode.md"><img width="48" height="48" alt="Xcode" src="https://docs.microsoft.com/media/logos/logo_xcode.svg"><span>Xcode</span></a></div><div class="ico48Link"><a href="../tfvc/share-your-code-in-tfvc-eclipse.md"><img width="48" height="48" alt="Eclipse" src="https://docs.microsoft.com/media/logos/logo_eclipse.svg"><span>Eclipse</span></a></div></div>

<ul class="panelContent cardsFTitle">
    <li>
        <a href="../tfvc/index.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Learn more about TFVC" src="https://docs.microsoft.com/media/logos/logo_vs-team-services.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Learn more about TFVC</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
 </ul>