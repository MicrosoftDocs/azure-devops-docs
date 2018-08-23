---
title: Share your project vision, view project activity 
titleSuffix: Azure DevOps & TFS 
description: View or update your project home page to share project vision, objectives, and activity for Azure DevOps Services or Team Foundation Server   
ms.topic: quickstart
ms.technology: devops-collab
ms.prod: devops
ms.assetid: A9ED2BF5-BD0B-4114-A7BD-693C5D747E16
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
monikerRange: '>= tfs-2015'
ms.date: 03/22/2017
---

# Share your project vision, view project activity   

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)] 

You can quickly get started with a team project from the project page. You can share your project vision with your team, add team members, and check the latest activity. 

> [!NOTE]    
> The features and functions available from your project page depend on the source control&#151;Git or Team Foundation Version Control (TFVC)&#151;that you selected when you [created your team project](../../organizations/projects/create-project.md).  

Use this page to leverage all the built-in DevOps functionality of Azure DevOps and to perform the following activities.

> [!div class="mx-tdCol2BreakAll"]
> |Git repository   |TFVC repository   |  
> |-------------|----------| 
> |- Clone your project to your client computer<br/>- Push an existing repository from the command line<br/>- Import a repository<br/>- Initialize a README or gitignore<br/>- Setup a build from an external repository<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |- Setup a build<br/>- Add a README for your project<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |



::: moniker range="tfs-2017"

> [!NOTE]   
> **Feature availability**: The project page described in this article is available for TFS 2017.1 and later versions. It replaces the [Welcome page](#welcome-pages) used in TFS 2017 and earlier versions. 

::: moniker-end

## Prerequisites

- To edit information on the team project page or manage team membership, you must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) 
- To view the team project page, you must be a valid member of the team project. For more information, see [Permissions and groups, Valid user groups](../../organizations/security/about-permissions.md#validusers) 
- To change the repository used to share your project vision, you need to be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md).


## Open the project home page

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

# [New navigation](#tab/new-nav)  

::: moniker range="vsts"  
  
From your web browser, choose **Overview>Summary**. If you don't have a  project, [create a team project](../../organizations/projects/create-project.md).   

> [!div class="mx-imgBorder"]  
> ![Open project summary page, new nav](_img/share-project/open-projects-page-vert-brn.png) 

::: moniker-end    

::: moniker range=">= tfs-2015 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    

# [Previous navigation](#tab/previous-nav)
From your web browser, open the team project drop down menu and select the home page. f you don't have a  project, [create a team project](../../organizations/projects/create-project.md).   

<img src="_img/project-vision-status-project-home-page.png" alt="Open the Project Home Page" style="border: 2px solid #C3C3C3;" />

---

## Get started with a new team project 

Upon [adding another team project](../../organizations/projects/create-project.md) to your account or collection, you'll see the get started page. This page guides you to get started quickly by adding code to your repository when you choose one of the options to clone, push, import, or simply initialize a repo. You can easily get started by adding members, setting up builds, or adding work from this page.


### Git repository 

> [!div class="mx-imgBorder"]  
> ![Git new project summary page](_img/project-home-page-get-started-info.png)

### TFVC repository 

> [!div class="mx-imgBorder"]  
> ![TFVC new project summary page](_img/project-home-page-1.png) 

## Share your project vision

You can share your project vision and objective, as well as ways for team members to contribute to the project through a Project readme. 

To edit the project README.md file, click the Edit button. You'll need to be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) or have your Edit project-level information permission set to allow. 

You can use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../wiki/markdown-guidance.md). 

<img src="_img/project-home-page-sample-vs-code-readme.png" alt="Example project home page" style="border: 1px solid #C3C3C3;" />       


<a id="cross-project-activity">  </a>
## View cross project activity  

In addition to sharing information, the project home page pulls data from the various functional hubs to give visitors a bird's-eye view of your project activity. 

<img src="_img/project-home-page-activity.png" alt="Project Home Page, Activity" style="border: 1px solid #C3C3C3;" />       

To add team members or manage membership in the team project, click ![Add team members button](_img/project-home-page-add-team-members.png) Add button. 



<a id="welcome-pages"></a> 
## Create a Repository README or Welcome page 

> [!NOTE]  
> **Feature availability**: The Welcome pages are available from the web portal of TFS 2017 and earlier versions.  

Here's an example of a Welcome page:

![Sample Welcome Markdown page](_img/markdown-welcome-page.png)


### Edit or create additional pages

> [!NOTE]   
> If you set policies on the Git repository, changes to the welcome page must be done as a pull request.  

1. You can start editing directly from the Welcome page.

	> [!div class="mx-imgBorder"]  
	> ![Project page, Edit Welcome Markdown page](_img/share-project/markdown-welcome-page-edit.png)

	To edit a page, you must be a contributor to the repository or branch or have the Contribute permissions set to allow.  

2. To add another page, simply enter a link to a new Markdown file that doesn't yet exist, for example:
 
	`[page-1](./page-1.md)`

3. After you save the file, click the link. Respond to the prompt to edit the file and commit it to your repository.  


### Location of the Welcome pages
The Welcome page corresponds to the README.md file defined in the Git repository or TFVC project folder (i.e. $/TeamProject/ReadMe.md). Additional pages you create show up in the same location.

You can edit and manage these files in the same way you manage all other files under source control. 

# [New navigation](#tab/new-nav)  

::: moniker range="vsts" 
> [!div class="mx-imgBorder"]  
> ![README file location, new navigation](_img/share-project/readme-file-location-vert.png)  
::: moniker-end    

::: moniker range=">= tfs-2015 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    

# [Previous navigation](#tab/previous-nav)

![Code>Files, Location of README Markdown pages in the repository](_img/markdown-multiple-pages-explorer-view.png)  

---

### Git repository 

<img src="_img/project-home-page-get-started-info.png" alt="Git new project" style="border: 1px solid #C3C3C3;" />       


For Git projects, the README.md file needs to be at the root of each repository in the default branch. For Git based projects the left pane supports navigation to other repositories. A separate Welcome page/README.md file can be created for each repository.  

### TFVC repository  
For TFVC projects the README.md file needs to be at the root of your team project folder (i.e. $/TeamProject/README.md). 

Any additional Markdown files you have (ones with a *.md extension) in the root of the project folder will also show up in the left pane for easy navigation between them so you can provide additional information.  


## Change the repository used

You can change the repository used to support your project vision, including pointing it to the home page of your [built-in Wiki](add-edit-wiki.md).

0. From your project home page, choose **Change**. 

	> [!div class="mx-imgBorder"]  
	> ![Project page, Change repo](_img/share-project/markdown-welcome-page-change-location.png)  

	If you don't see the **Change** link, then you're not a member of the Project Administrators group. [Get added as an admin](../../organizations/security/set-project-collection-level-permissions.md) in order to proceed.

0. From the select file dialog, choose an existing repo from the drop-down menu, or choose the Wiki option as shown here. 

	<img src="_img/share-project/select-file-to-display-dialog.png" alt="Web portal, Project page, Select file to display dialog" style="border: 1px solid #C3C3C3;" />     

	> [!TIP]  
	> Only the Wiki home page displays. To access additional Wiki pages, you must navigate to the Wiki.    

## Try this next

> [!div class="nextstepaction"]
> [Create a wiki for your team project](wiki-create-repo.md) 


## Related articles  

- [Markdown guidance](../wiki/markdown-guidance.md) 
- [Work across projects](../navigation/work-across-projects.md)


 


  
