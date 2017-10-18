---
title: Create a wiki for your team project
titleSuffix: VSTS
description: Share information with your team  and increase collaboration using a built-in team project wiki provided by Visual Studio Team Services (VSTS)  
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 10/18/2017
---


# Create a wiki for your team project

[!INCLUDE [temp](../_shared/version-vsts-tfs-2018.md)]

Each team project can be provisioned with a wiki. Use it to share information with your team members and stakeholders to understand, use, and contribute to your project.

>[!NOTE]  
><b>Feature availability: </b>The built-in wiki is available with VSTS and TFS 2018 and later versions. To download TFS 2018, see the [TFS 2018 Release Notes](https://www.visualstudio.com/en-us/news/releasenotes/tfs2018-relnotes). If you were using the Wiki Marketplace extension, you can [migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md).

To access a Wiki or create one, open your web portal and click **Wiki** in the top row (click the ![actions icon](../_img/icons/actions-icon.png) if you don't see this option).

<img align="top" src="_img/wiki/wiki-pivot.png" alt="Wiki shows as a tab in VSTS" style="border: 1px solid #C3C3C3;" />

If you don't have a team project yet, [create one in VSTS](../user-guide/sign-up-invite-teammates.md).


## Provision wiki git repository

Each team project wiki is powered by a git repository in the back-end. When you create a team project, a Wiki git repo is not created by default. On the Wiki landing page, click **Create Wiki** to provision a new git repository that will store all your wiki pages and related artifacts. (Even if you use TFVC for source control, you can create a wiki with a git repository.)

<img align="top" src="_img/wiki/wiki-create.png" alt="Create a wiki" style="border: 1px solid #C3C3C3;" />  

The Wiki git repo is referred as *TeamProjectName.wiki*. For example, if your team project is 'foobar' then the Wiki repo is called 'foobar.wiki'.

## Don't have access to create git repository?

You need to be a Project Contributor to be able to create a wiki. If you don't have access to create a Wiki git repository, you will see a page as follows.

<img align="top" src="_img/wiki/wiki-security-no-contributor.PNG" alt="Unable to create a Wiki repository" style="border: 1px solid #C3C3C3;" />  

You can contact your administrator to provision the Wiki git repository or request that they elevate your permissions. Stakeholders can't be granted permissions to create a wiki as they have no permissions to work in the Code hub. 


## Try this next
> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md) 


## Related notes

- [Migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
- [Work as a stakeholder](../security/get-started-stakeholder.md)

### Why is the git repository hidden?

The *TeamProjectName.wiki* doesn't appear in the drop-down menu of repositories in the **Code** hub, nor in the list provided in the team project administration context, **Version Control** page.  
 
However, you can navigate to it from the URL `https://<AccountName>.visualstudio.com/DefaultCollection/_git/<TeamProjectName>.wiki`. 

You can click **More** followed by **Clone Wiki** to access the Wiki URL.

<img align="top" src="_img/wiki/clone-wiki.PNG" alt="Clone wiki" style="border: 1px solid #C3C3C3;" />  

This will expose the URL of the wiki git repository and you can paste it into your web browser to access the underlying git repo.