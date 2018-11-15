---
title: Share information by creating a wiki for your project in Azure DevOps and TFS 
titleSuffix: Azure DevOps & TFS
description: Share information with your team  and increase collaboration using a built-in team project wiki in Azure DevOps & Team Foundation Server
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: quickstart
ms.assetid: 
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
monikerRange: '>= tfs-2018'
ms.date: 11/15/2018
---

# Quickstart: Create a Wiki for your project

[!INCLUDE [temp](../../_shared/version-vsts-tfs-2018.md)]

Each team project can be provisioned with a wiki. Use it to share information with your team to understand, use, and contribute to your project.

::: moniker range="tfs-2018"
>[!NOTE]
>The built-in wiki is available with TFS 2018 and later versions. To download TFS 2018, see the [TFS 2018 Release Notes](/visualstudio/releasenotes/tfs2018-relnotes). If you were using the Wiki Marketplace extension, you can [migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md).

::: moniker-end

::: moniker range="vsts"
Each team project wiki is powered by a Git repository in the back-end. When you create a team project, a Wiki Git repo is not created by default. To start using a wiki, you must either provision a Git repository to store your wiki markdown files, or [publish existing markdown files from a Git repository](publish-repo-to-wiki.md) to a wiki.

::: moniker-end

::: moniker range="tfs-2018"
Each team project wiki is powered by a Git repository in the back-end. When you create a team project, a Wiki Git repo is not created by default. To start using a wiki, you must  provision a Git repository to store your wiki markdown files.

::: moniker-end

Use this topic to learn how to:  

> [!div class="checklist"]
> * Open **Wiki**
> * Provision a Git repo for your wiki

<a id="prereq">  </a>

## Prerequisites

::: moniker range="vsts"

* You must have a team project. If you don't have a team project yet, create one in [Azure DevOps Services](../../organizations/accounts/set-up-vs.md).  
* You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) in order to provision a wiki.
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

::: moniker range="tfs-2018"

* You must have a team project. If you don't have a team project yet, create one in your [on-premises TFS](../../organizations/projects/create-project.md).
* You must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) in order to provision a wiki or publish markdown files from an existing Git repo to a wiki.
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

[!INCLUDE [temp](_shared/open-wiki-hub.md)]

## Provision a wiki Git repository

On the Wiki landing page, choose **Create Wiki** to provision a new Git repository that will store all your wiki pages and related artifacts. (Even if you use TFVC for source control, you can create a wiki with a Git repository.)

For repository naming conventions,

::: moniker range="vsts"

> [!div class="mx-imgBorder"]  
> ![Create wiki, provision a Git repo for your wiki or publish existing repo markdown files](_img/wiki/create-wiki-or-publish-create-option.png)
::: moniker-end

::: moniker range="tfs-2018"
> [!div class="mx-imgBorder"]  
> ![Create wiki, provision a Git repo for your wiki](_img/wiki/wiki-create.png)
::: moniker-end

---

If you don't have access to create a Wiki Git repository, you will receive a message as shown.

> [!div class="mx-imgBorder"]  
> ![Insufficient permissions to create a Wiki repository](_img/wiki/wiki-security-no-contributor.png)

You can contact your administrator to provision the Wiki Git repository or request that they elevate your permissions. Stakeholders can't be granted permissions to create a wiki as they have no permissions to work in **Repos** or **Code**.

The Wiki Git repo is referred as *TeamProjectName.wiki*. For example, if your team project is 'foobar' then the Wiki repo is labeled 'foobar.wiki'.

## Try this next

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)

## Related articles

- [Wiki Git repository files, file structure, and naming conventions](wiki-file-structure.md)
- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)

### Why is the Git repository hidden?

The *TeamProjectName.wiki* doesn't appear in the drop-down menu of repositories from **Repos** or **Code**, nor in the list provided from the **Project Settings>Code>repositories** or **Project Settings>Version Control** pages.  

However, you can navigate to it from the following URL:

::: moniker range="vsts"
`https://<AccountName>.visualstudio.com/DefaultCollection/<TeamProjectName>/_git/<TeamProjectName>.wiki` 
::: moniker-end

::: moniker range="tfs-2018"
`https://<ServerName>/DefaultCollection/<TeamProjectName>/_git/<TeamProjectName>.wiki` 
::: moniker-end

You can click **More** followed by **Clone Wiki** to access the Wiki URL.

<img align="top" src="_img/wiki/clone-wiki.png" alt="Clone wiki" style="border: 1px solid #C3C3C3;" />    

This will expose the URL of the wiki Git repository and you can paste it into your web browser to access the underlying Git repo.
