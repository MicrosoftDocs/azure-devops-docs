---
title: Create a Git branch or initiate Git commits or pull requests from a user story, issue, or bug
titleSuffix: Azure Boards 
description: Create a branch, commit, or pull request & automatically link work items with source control branches, builds, commits, or other code development actions  
ms.custom: "boards-backlogs, seodec18"    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: BD7CE3C1-9E15-4BD6-B9CD-F78569C74D0D  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '>= tfs-2017'
ms.date: 12/04/2018
---

# Drive Git development from a work item   

[!INCLUDE [temp](../../_shared/version-tfs-2017-through-vsts.md)]

One of the ways your team can drive their development and stay in sync is to link your work items to the objects created during development, such as branches, commits, pull requests, and builds. You can begin that linking by creating a branch from one or more work items. Later, you can create pull requests, quickly open commits, and maintain a record of development operations performed to complete specific work.  

<!---
Review this article to learn:  

>[!div class="checklist"]    
> * How to create a new branch or pull request from a work item   
> * Complete the pull request  
> * Perform a squash merge  
> * Create a branch for several work items  
> * Link a work item to existing development and build objects    
-->


::: moniker range="azure-devops"

> [!IMPORTANT]   
> This article addresses creating new branches and adding links to commits and pull requests to a Git repository hosted on Azure DevOps. To link to GitHub commits and pull requests, see [Link GitHub commits and pull requests to work items](../github/link-to-from-github.md). 

::: moniker-end


The Development section records all Git development processes that support completion of the work item. This section can show your team information needed to take the next development step and minimize navigational steps to accomplish common development tasks. It also supports traceability, providing visibility into all the branches, commits, pull requests, and builds related to the work item.    

<img src="_img/drive-git-development-dev-section.png" alt="Work item form, Development section" style="border: 1px solid #C3C3C3;" />  

::: moniker range="tfs-2017"
> [!NOTE]   
> The Development section within the work item form is not supported in TFS 2015 and earlier versions. Consider [upgrading to a later TFS version](https://visualstudio.microsoft.com/downloads/). 

::: moniker-end

From it, you can quickly access branches, pull requests, and commits which are linked to the work item. Also, you can initiate a pull request for a branch you've created or linked to from the work item.  

[!INCLUDE [temp](../_shared/prerequisites-work-items.md)]


<a id="git-development">  </a>

## Workflow process to create a branch and pull request

Consider creating a new branch when there are no linked code artifacts. If there is a branch but no pull requests, consider creating a pull request. Here's a typical workflow sequence when working with a Git repository. 

1. Start work on the work item by creating a branch. You can add a new Git branch from within the Development section...  

	<img src="_img/git-dev-pr-create-branch.png" alt="User story work item form, Development section, create new branch" style="border: 1px solid #C3C3C3;" /> 
 
	... or, from the form's ![Actions icon](../_img/icons/actions-icon.png) Actions menu.  

	<img src="_img/git-dev-pr-create-branch-from-action-menu.png" alt="User story work item form, Action menu, add new branch" style="border: 1px solid #C3C3C3;" /> 

	Name the branch and select the repository on which it's based.   

	<img src="_img/git-dev-create-branch.png" alt="Create a branch dialog box" style="border: 1px solid #C3C3C3;" />  

	Branches you create are automatically linked to the work item.  

	> [!NOTE]  
	>You can only create a branch once you've added files to the main branch, which is always named ```master```. The system automatically adds a README file to the initial repo created with each new project.   

2. The system will open to the repository and branch that you just created. 

	You can edit a file within the web portal. 

	Or, if you have extensive file edits or need to add files, then you'll need to work from Visual Studio or other supported IDE. You'll want to add a new local branch from the branch you just created. For details, see [Update code with fetch and pull, Download changes with fetch](../../repos/git/pulling.md#download-changes-with-fetch). (While any code editing and committing process will work, we work best with an edition of Visual Studio.)  

3. Add or modify files in the branch that you created.   

	From Visual Studio or other supported IDE, commit and push changes from your local branch to the repository.  

	![Commit and push changes](_img/git-dev-commit-sync.png)  

	If this is the first time pushing changes from a new branch, you'll need to publish the branch before pushing your changes. For more details, see [Share code with push](../../repos/git/pushing.md).   

4. <a id="create-pull-request">  </a> Create a [pull request](../../repos/git/pull-requests.md)  from the work item form.  

	You create a pull request to merge the changes you made to a master branch and get your changes reviewed by other members of your team.  

	<img src="_img/git-dev-pr-create-pull-request-b.png" alt="Work item form, create pull request" style="border: 1px solid #C3C3C3;" /> 

5.	Your view will switch to **Code**, Pull Requests page. Complete creating the pull request as shown. 
  
 	<img src="_img/git-dev-create-pull-request.png" alt="Pull Request page, Create pull request" style="border: 1px solid #C3C3C3;" />  

	> [!NOTE]  
	> Once you've created a pull request, you can't create a new pull request for the same branch until you complete the previous pull request.
	 
	<img src="_img/git-dev-pr-complete.png" alt="Pull Request page, Create pull request" style="border: 1px solid #C3C3C3;" /> 

	Check the box for **Squash changes when merging** and then complete the merge. 

	<img src="_img/git-dev-complete-merge.png" alt="Complete pull request dialog box, check squash-merge" style="border: 1px solid #C3C3C3;" /> 

6. Upon completion, you should see a similar screen as follows.   

	> [!div class="mx-imgBorder"]
	> ![Pull request, completed notification](_img/git-dev-pr-completed.png)

7.	Open the work item form or refresh the form, expand the Development section (click the ![full screen icon](../_img/icons/fullscreen_icon.png) icon), and you'll see the links that have been added to support the operations you just completed.  

	<img src="_img/git-dev-development-section-completed-links.png" alt="Work item form, Development section, links added" style="border: 1px solid #C3C3C3;" /> 


<a id="add-branch-multi-wi">  </a>
## Create a branch for several work items  

You can also add a new branch from the work item listed on the backlog or Kanban board without having to open the work item. Using [multi-select](bulk-modify-work-items.md), you can select several work items and create a new branch where they're all linked to the branch. 

For example, here we select the first five items to link to a new branch.  

<img src="_img/git-dev-multi-select-backlog-create-new-branch.png" alt="Select multiple items from backlog" style="border: 1px solid #C3C3C3;" /> 

And, we specify the name of the branch.  

<img src="_img/add-work-item-create-branch-multi-items.png" alt="Create new branch dialog" style="border: 1px solid #C3C3C3;" />   


<a id="link-objects">  </a>
## Link to existing development and build objects

All items listed under the Development section also appear under the ![Links tab icon](_img/icon-links-tab-wi.png) Links tab. All development actions initiated from the Development section are also logged under the ![History tab icon](_img/icon-history-tab-wi.png) History tab. 

![Links tab, development links](_img/add-work-item-dev-links.png)  

To link a work item to an existing object, click the ![Add link](../_img/icons/add-link-icon.png) Add links icon and then choose the link type.  

![Select multiple items from backlog](_img/add-work-items-link-to-existing-branch.png)

[Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md).   


### Remove a link 
If you want to remove a link, you can do so from the Development section by highlighting it first and then click the ![delete icon](../_img/icons/delete_icon.png) delete icon.  

![Development section, delete a link](_img/add-work-item-remove-dev-link.png)  

Or, you can select it from the ![Links tab icon](_img/icon-links-tab-wi.png) Links tab and click the ![delete icon](../_img/icons/delete-link.png) remove link icon.

## Related articles

Learn more about tracking work with work items and developing with Git from these resources: 

::: moniker range="azure-devops"
- [Add work items](add-work-items.md)  
- [Git overview](../../repos/git/overview.md) 
- [Link GitHub commits and pull requests to work items](../github/link-to-from-github.md) 
- [TFVC overview](../../repos/tfvc/overview.md)  
- [Create your backlog](create-your-backlog.md)   

::: moniker-end

::: moniker range="<= azure-devops-2019"
- [Add work items](add-work-items.md)  
- [Git overview](../../repos/git/overview.md)  
- [TFVC overview](../../repos/tfvc/overview.md)  
- [Create your backlog](create-your-backlog.md)   
::: moniker-end

Keep in mind that the Development section only appears within the web portal work item form. The work item tracking experience and forms that appear in Visual Studio or other supported clients will be missing several of the features that the web portal makes available. 

### Associated work items in build 

With Git commits, any work items that have been linked to a commit will be listed under the Associated work items in the build summary page. 

<img src="_img/developer-associated-work-items-build.png" alt="Work item form, Development section" style="border: 1px solid #C3C3C3;" />  

<!--- Add info about option to set build linking; link to release notes if needed --> 



### Link types showing in the Development section
Links shown in this section appear as a result of these actions:   
- Creating a branch, commit, or pull request from the work item    
- Specifying the work item ID during a commit, pull request, or other supported Git or TFVC operation   
- Specifically linking the work item from the Development section or ![Links tab icon](_img/icon-links-tab-wi.png) Links tab to a source code branch, build, or other supported Git or TFVC operation.  

Hovering over any entry listed under the Development section activates the hyperlink to the associated object.    

::: moniker range=">= azure-devops-2019"
The link types you can add within the development section are Branch, Build, Changeset, Commit, Found in build, Integrated in build, Pull Request, and Versioned Item. 

<img src="../queries/_img/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" style="border: 1px solid #C3C3C3;" /> 
::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"
The link types you can add within the development section are Branch, Build, Changeset, Commit, Pull Request, and Versioned Item. 

<img src="_img/git/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" style="border: 1px solid #C3C3C3;" /> 

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"
To learn more about the links control or to customize the Development links control, see [LinksControlOptions elements, Development links control](../../reference/xml/linkscontroloptions-xml-elements.md#development-links-control). 
 
::: moniker-end

<!---
and only work with the current build processes (not XAML builds)
-->
