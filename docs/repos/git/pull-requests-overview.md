---
title: Pull requests
titleSuffix: Azure Repos  
description: Learn about pull requests in Azure DevOps Services & TFS  
ms.prod: devops
ms.technology: devops-code-git 
ms.assetid: 36A4986E-BFB8-422B-BFC9-8A0CB75D0603    
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: overview
ms.date: 09/10/2018
layout: LandingPage
monikerRange: '>= tfs-2013'
---

# Get feedback with pull requests

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015

Pull requests combine the review and merge of your code into a single collaborative process.
Once you're done fixing a bug or new feature in a branch, create a new pull request.
Add the members of the team to the pull request so they can review and vote on your changes.

Azure Repos has a [rich pull request experience](pull-requests.md) that's easy to use and scales to your needs.
Use pull requests to review works in progress and get early feedback on changes.
There's no commitment to merge the changes as the owner can abandon the pull request at any time.

## Get your code reviewed

The code review done in a pull request isn't just to find obvious bugs.
That's what your tests are for.
A good code review catches less obvious problems that could lead to costly issues later.
Code reviews help protect your team from bad merges and broken builds that sap your team's productivity.
The review catches these problems before the merge, protecting your important branches from unwanted changes.

Cross-pollinate expertise and spread problem solving strategies by using a wide range of reviewers in your code reviews.
Diffusing skills and knowledge makes your team stronger and more resilient.

<ul class="panelContent cardsFTitle">
    <li>
        <a href="pullrequest.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Review code with pull requests" src="https://docs.microsoft.com/media/common/i_pull-request.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Review code with pull requests</h3>
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
</ul>

## Give great feedback

High quality reviews start with high quality feedback.
The keys to great feedback in a pull request are:

* Have the right people review the pull request
* Make sure that reviewers know what the code does
* Give actionable, constructive feedback
* Reply to comments in a timely manner

When assigning reviewers to your pull request, make sure you select the right set of reviewers.
You want reviewers that will know how your code works, but try to also include developers working in other areas so they can share their ideas.
Provide a clear description of your changes and provide a build of your code that has your fix or feature running in it.

Reviewers should make an effort to provide feedback on changes they don't agree with.
Identify the issue and give a specific suggestions on what you would do differently.
This feedback has clear intent and is easy for the owner of the pull request to understand.
The pull request owner should reply to the comments, accepting the suggestion or explaining why the suggested change isn't ideal.
Sometimes a suggestion is good, but the changes are outside the scope of the pull request.
Take these suggestions and create new work items and feature branches separate from the pull request to make those changes.

<ul class="panelContent cardsFTitle">
        <li>
        <a href="pull-request-templates.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Provide reviewer guidance with pull request templates" src="../../_img/index/i_tasks.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Provide reviewer guidance with pull request templates</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <li>
        <a href="pull-requests.md#leave-comments">
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
        <a href="pull-requests.md#vote-on-the-changes">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Vote on the changes" src="_img/logos/check.svg" />
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

## Protect branches with policies

There are a few critical branches in your repo that the team relies on always being in good shape, such as your `master` branch.
[Require pull requests](branch-policies.md) to make any changes on these branches.
Developers pushing changes directly to the protected branches will have their pushes rejected.

Add additional conditions to your pull requests to enforce a higher level of code quality in your key branches.
A clean build of the merged code and approval from multiple reviewers are some extra requirements you can set to protect your key branches.

<ul class="panelContent cardsFTitle">
    <li>
        <a href="branch-policies-overview.md">
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
        <a href="branch-policies.md">
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
        <a href="branch-permissions.md">
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

## Extend pull request workflows with pull request status

Pull requests and branch policies enable teams to enforce many best practices related to reviewing code and running automated builds, but many teams have additional requirements and validations to perform on code. To cover these individual and custom needs, Azure Repos offers pull request statuses. Pull request statuses integrate into the PR workflow and allow external services to programmatically sign off on a code change by associating simple success/failure type information with a pull request. 

<ul class="panelContent cardsFTitle">
    <li>
        <a href="pull-request-status.md">
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
        <a href="create-pr-status-server.md">
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
        <a href="create-pr-status-server-with-azure-functions.md">
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
        <a href="pr-status-policy.md">
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

## Videos 
> [!VIDEO https://www.youtube.com/embed/J_DHkUKxI0E?start=0]