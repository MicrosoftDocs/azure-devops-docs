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
ms.date: 09/05/2018
---

# Share your project vision, view project activity   

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)] 

You can quickly get started with a team project from the project page. You can share your project vision with your team, add team members, and check the latest activity. 

> [!NOTE]    
> The features and functions available from your project page depend on the source control&#151;Git or Team Foundation Version Control (TFVC)&#151;that you selected when you [created your team project](../../organizations/projects/create-project.md).  

## Prerequisites

- To edit information on the project page, change the repository used to share your project vision. or manage team membership, you must be a member of the [Project Administrators group](../../organizations/security/set-project-collection-level-permissions.md) or have your **Edit project-level information** permission set to **Allow**. 
- To edit a page, you must be a contributor to the repository or branch or have the **Contribute** permissions set to **Allow**.  
- To view the project page, you must be a valid member of the team project. For more information, see [Permissions and groups, Valid user groups](../../organizations/security/about-permissions.md#validusers) 


## Open Project summary 

[!INCLUDE [temp](../../_shared/new-navigation.md)]  

# [New navigation](#tab/new-nav)  

::: moniker range="vsts"  
  
From your web browser, choose **Overview>Summary**. If you don't have a  project yet, [create a project](../../organizations/projects/create-project.md).   

If you haven't set up your project summary yet, you'll see this welcome page: 

> [!div class="mx-imgBorder"]  
> ![Open project summary, new nav](_img/share-project/welcome-page-new-nav.png)  

Choose: 
- **Invite** to begin [adding others to your project](../../organizations/security/add-users-team-project.md). Note, you can only invite users who have already been [added to your organization](../../organizations/accounts/add-team-members-vs.md). 
- Choose **Boards** to being [adding work items](../../boards/work-items/view-add-work-items.md).
- Choose **Repos** to open [Repos>Files](../../repos/git/clone.md) page where you can clone or import a repository, or [initialize a README file](#initialize-readme) for your project summary page.
- Choose **Pipelines** to start [defining a pipeline](../../pipelines/index.md).
- Choose **Test Plans** to start [defining test plans and test suites](../../test/create-a-test-plan.md).
- Choose [Manage your services](../../organizations/settings/set-services.md) to disable the visibility of one or more services.

To support your project vision, you can choose a README file that you maintain in a project repository, or the [project Wiki](wiki-create-repo.md). To choose between a README file or a Wiki, see [Change the repository](#change-repo). To define a README file for your project, see [Initialize a README file for your Git repo](#initialize-git) or [Initialize a README file for your TFVC repo](#initialize-tfvc).

::: moniker-end  
 

::: moniker range=">= tfs-2015 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2015"    
From your web browser, open the team project drop down menu and select the home page. If you don't have a  project, [create a team project](../../organizations/projects/create-project.md).   

![Open Project Summary, previous nav](_img/project-vision-status-project-home-page.png)  

::: moniker-end

To define a README file for your project, see [Initialize a README file for your Git repo](#initialize-git) or  [Initialize a README file for your TFVC repo](#initialize-tfvc).

::: moniker range="tfs-2017"

> [!NOTE]   
> The project page described in this section is available for TFS 2017.1 and later versions. It replaces the [Welcome page](#welcome-pages) used in TFS 2015 and TFS 2017. 

::: moniker-end


---



<a id="initialize-git"> </a>
## Initialize a README file for a Git repo

You can share your project vision and objective, as well as ways for team members to contribute to the project through a project README file. For Git projects, the README.md file needs to be at the root of each repository in the default branch. For Git based projects the left pane supports navigation to other repositories. A separate Welcome page/README.md file can be created for each repository.  


> [!NOTE]   
> If you set policies on the Git repository, changes to the welcome page must be done as a pull request.  

# [New navigation](#tab/new-nav)  

::: moniker range="vsts"  

0. Open **Repos>Files**. This page guides you to get started quickly by adding code to your repository when you choose one of the options to clone, push, import, or simply initialize a repo.  

0. With the **Add a README** check box checked, choose **Initialize**. 

	> [!div class="mx-imgBorder"]  
	> ![Initialize README file, new nav](_img/share-project/initialize-readme-new-nav.png)

	A default README file is added to the project repository, in this case, the **Fabrikam Test** repo.

0.	Return to **Overview>Summary** and choose the README file for the project page. Choose the ![](../../_img/icons/edit.png) edit icon.

	> [!div class="mx-imgBorder"]  
	> ![Choose README file, new nav](_img/share-project/choose-readme-file-new-nav.png)  

0. Select the project repository where you initialized the README file. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Repository where the README file exists, new nav](_img/share-project/choose-readme-file-dialog-new-nav.png)  

0. To edit the README file, choose the README file link. 

	> [!div class="mx-imgBorder"]  
	> ![Edit the README file, new nav](_img/share-project/edit-readme-file.png)  

	You'll be directed to the **Repos>Files** page for the README file. You can edit and modify the README markdown file like you would any other file in a Git repository. You can use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../wiki/markdown-guidance.md). 

::: moniker-end    

::: moniker range=">= tfs-2015 <= tfs-2018"    
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end    

# [Previous navigation](#tab/previous-nav)

::: moniker range=">= tfs-2018"  
0. Open the Project home page. 

0. With the **Add a README** check box checked, choose **Initialize**. 

	> [!div class="mx-imgBorder"]  
	> ![Initialize README file, new nav](_img/share-project/initialize-readme-prev-nav.png)

	A default README file is added to the project repository, in this case, the **Fabrikam Test** repo.

0. To edit the project README.md file, choose **Edit**. 

	> [!div class="mx-imgBorder"]  
	> ![Git new project summary page](_img/share-project/git-start-page-readme.png)

	You can use Markdown language to format the README file and add images. To learn more about adding a README file, see [Create a README for your repo](../../repos/git/create-a-readme.md) and [Markdown guidance](../wiki/markdown-guidance.md). 

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2017"  

0. You can start editing directly from the Welcome page.

	> [!div class="mx-imgBorder"]  
	> ![Project page, Edit Welcome Markdown page](_img/share-project/markdown-welcome-page-edit.png)

2. To add another page, simply enter a link to a new Markdown file that doesn't yet exist, for example:
 
	`[page-1](./page-1.md)`

3. After you save the file, click the link. Respond to the prompt to edit the file and commit it to your repository.  

::: moniker-end  

---

<a id="initialize-tfvc"> </a>

## Initialize a README file for a TFVC repo

You can share your project vision and objective, as well as ways for team members to contribute to the project through a project README file. For projects that selected TFVC for version control, the README.md file needs to be at the root of your team project folder (i.e. $/TeamProject/README.md). 

Any additional Markdown files you have (ones with a *.md extension) in the root of the project folder will also show up in the left pane for easy navigation between them so you can provide additional information.  

# [New navigation](#tab/new-nav)  

::: moniker range="vsts"  

0. Open **Repos>Files**. 

0. Choose **Add Project Description**.

	> [!div class="mx-imgBorder"]  
	> ![Welcome page, TFVC new project, create readme, new nav](_img/share-project/welcome-page-tfvc-new-nav.png) 

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  

# [Previous navigation](#tab/previous-nav)

0. Open the Project home page. 

0. Choose **Create README**.
 
	> [!div class="mx-imgBorder"]  
	> ![Welcome page, TFVC new project, create readme, previous nav](_img/share-project/welcome-page-tfvc-prev-nav.png) 

---

A default README file is added to the project repository, in this case, the **Fabrikam Fiber TFVC** repo.

You can immediately edit the README file. When done, choose **Check in**. 

> [!div class="mx-imgBorder"]  
> ![Edit page, new nav](_img/share-project/tfvc-checkin-page.png)  



<a id="cross-project-activity">  </a>
## View project activity, add project members  

In addition to sharing information, the project summary page pulls data from the applications to give visitors a bird's-eye view of your project activity. 

::: moniker range="vsts"   
To add users to the project, choose the ![](_img/share-project/add-members-new-nav.png) **add** button. To learn more, see [Add users to a team project or team](../../organizations/security/add-users-team-project.md). 

> [!div class="mx-imgBorder"]  
> ![Project stats](_img/share-project/project-stats-new-nav.png) 



::: moniker-end  

::: moniker range=">= tfs-2015 <= tfs-2018"  
To add users to the project, choose the ![](_img/project-home-page-add-team-members.png) **add** button. To learn more, see [Add users to a team project or team](../../organizations/security/add-users-team-project.md).  

![Project Home Page, Activity](_img/project-home-page-activity.png)  



::: moniker-end   

<a id="change-repo" />
## Change the repository 

You can change the repository used to support your project vision, including pointing it to the home page of your [built-in Wiki](wiki-create-repo.md).

# [New navigation](#tab/new-nav)

::: moniker range="vsts"  

0. Open **Overview>Summary** . 

0. Choose the ![](../../_img/icons/edit.png) edit icon.

	> [!div class="mx-imgBorder"]  
	> ![Choose README file, new nav](_img/share-project/choose-readme-file-new-nav.png)  

	If you don't see the **Edit** icon, then you're not a member of the Project Administrators group. [Get added as an admin](../../organizations/security/set-project-collection-level-permissions.md) in order to proceed.

0. Select a different repository or choose the Wiki option. 

	> [!div class="mx-imgBorder"]  
	> ![Choose Repository where the README file exists, new nav](_img/share-project/change-repo-new-nav.png)  

	> [!TIP]  
	> If you choose the Wiki option, only the Wiki home page displays. To access additional Wiki pages, you must navigate to the Wiki.    

::: moniker-end  

::: moniker range=">= tfs-2015  <= tfs-2018"  
[!INCLUDE [temp](../../_shared/new-navigation-not-supported.md)]  
::: moniker-end  


# [Previous navigation](#tab/previous-nav)

0. From your project home page, choose **Change**. 

	> [!div class="mx-imgBorder"]  
	> ![Project page, Change repo](_img/share-project/markdown-welcome-page-change-location.png)  

	If you don't see **Change** link, then you're not a member of the Project Administrators group. [Get added as an admin](../../organizations/security/set-project-collection-level-permissions.md) in order to proceed.

0. From the select file dialog, choose an existing repo from the drop-down menu, or choose the Wiki option as shown here. 

	<img src="_img/share-project/select-file-to-display-dialog.png" alt="Web portal, Project page, Select file to display dialog" style="border: 1px solid #C3C3C3;" />     

	> [!TIP]  
	> Only the Wiki home page displays. To access additional Wiki pages, you must navigate to the Wiki.    

---

## Try this next

> [!div class="nextstepaction"]
> [Create a wiki for your team project](wiki-create-repo.md) 


## Related articles  

- [Markdown guidance](../wiki/markdown-guidance.md) 
- [Work across projects](../navigation/work-across-projects.md)


<!---
### Git repository 

<img src="_img/project-home-page-get-started-info.png" alt="Git new project" style="border: 1px solid #C3C3C3;" />       
> [!div class="mx-imgBorder"]  
> ![Git new project summary page](_img/share-project/git-start-page-readme.png)

> [!div class="mx-imgBorder"]  
> ![Initialize README file, new nav](_img/share-project/initialize-readme-prev-nav.png)


Use this page to leverage all the built-in DevOps functionality of Azure DevOps and to perform the following activities.

> [!div class="mx-tdCol2BreakAll"]
> |Git repository   |TFVC repository   |  
> |-------------|----------| 
> |- Clone your project to your client computer<br/>- Push an existing repository from the command line<br/>- Import a repository<br/>- Initialize a README or gitignore<br/>- Setup a build from an external repository<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |- Setup a build<br/>- Add a README for your project<br/>- [Add team members](#cross-project-activity)<br/>- [View code, build, and work activity](#cross-project-activity) |

-->