---
title: Branch policies
titleSuffix: Azure Repos    
description: Learn about branch policies in Azure DevOps Services & TFS  
ms.prod: devops
ms.technology: devops-code-git 
ms.assetid: 36A4986E-BFB8-422B-BFC9-8A0CB75D0603    
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: overview
ms.date: 09/18/2018
layout: LandingPage
monikerRange: '>= tfs-2015'
---

# Branch policies

#### Azure Repos | TFS 2018 | TFS 2017

Branch policies are an important part of the Git workflow and enable you to:

* Isolate work in progress from the completed work in your master branch
* Guarantee changes build before they get to master
* Limit who can contribute to specific branches
* Enforce who can create branches and the naming guidelines for the branches
* Automatically include the right reviewers for every code change
* Enforce best practices with required code reviewers

## Adopt a Git branching strategy

There are a few critical branches in your repo that the team relies on always being in good shape, such as your `master` branch.
[Require pull requests](branch-policies.md) to make any changes on these branches.
Developers pushing changes directly to the protected branches will have their pushes rejected.

Keep your branch strategy simple by building your strategy from these three concepts:

0. Use feature branches for all new features and bug fixes.
0. Merge feature branches into the master branch using pull requests. 
0. Keep a high quality, up-to-date master branch.  

A strategy that extends these concepts and avoids contradictions will result in a version control workflow for your team that is consistent and easy to follow. 

<ul class="panelContent cardsFTitle">
    <li>
        <a href="git-branching-guidance.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Adopt a branching strategy" src="../../_img/index/i_branch-policies.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Adopt a branching strategy</h3>
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
    <li>
        <a href="require-branch-folders.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Require branch folders" src="_img/logos/folder.png" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Require branch folders</h3>
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

## Branching how to guides

Learn how to perform common tasks when working with branches.

<ul class="panelContent cardsFTitle">
    <li>
        <a href="branches.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Branches tutorial" src="../../_img/index/i_branch-policies.svg" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Branches tutorial</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="create-branch.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="How to create a branch" src="_img/logos/add.png" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>How to create a branch</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="delete-branch.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="How to delete a branch" src="_img/logos/delete.png" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>How to delete a branch</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="restore-deleted-branch.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="Restore a deleted branch" src="_img/logos/restore.png" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>Restore a deleted branch</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
    <li>
        <a href="lock-branches.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="How to lock branches" src="_img/logos/lock-branches.png" />
                        </div>
                    </div>
                    <div class="cardText">
                        <h3>How to lock branches</h3>
                    </div>
                </div>
            </div>
        </div>
        </a>
    </li>
</ul>


