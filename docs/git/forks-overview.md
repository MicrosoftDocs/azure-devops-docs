---
title: Forks | VSTS & TFS     
description: Learn about forks in VSTS & TFS  
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.assetid: 36A4986E-BFB8-422B-BFC9-8A0CB75D0603    
ms.manager: douge
ms.author: sdanie
ms.date: 02/12/2018
layout: LandingPage
---

# Forks

#### VSTS | TFS 2018

Forks are a great way to isolate experimental, risky, or confidential changes from the original codebase. A fork is a complete copy of a repository, including all files, commits, and (optionally) branches. The new fork acts as if someone cloned the original repository, then pushed to a new, empty repository.
After a fork has been created, new files, folders, and branches are not shared between the repositories unless a pull request carries them along. Once you're ready to share those changes, it's easy to use [pull requests](pull-requests.md) to push the changes back to the original repository.

## The forking workflow

When working with forks, you typically use the following workflow:

1. [Create a fork](concepts/forks.md#create-fork)
2. [Clone it locally](concepts/forks.md#clone-locally)
3. [Make your changes locally and push them to a branch](concepts/forks.md#push-changes)
4. [Create and complete a PR to upstream](concepts/forks.md#create-pr)
5. [Sync your fork to the latest from upstream](concepts/forks.md#sync-fork)


## Learn more

<ul class="panelContent cardsFTitle">
    <li>
        <a href="concepts/forks.md">
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                        <div class="cardImage">
                            <img width="48" height="48" alt="" src="https://docs.microsoft.com/media/common/i_forks.svg" />
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



