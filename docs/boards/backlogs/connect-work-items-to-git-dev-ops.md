---
title: Drive Git development from user story and requirements  
titleSuffix: Azure Boards 
description: Learn how to create a branch, commit, or a pull request in Azure Boards. Also, automatically link work items with source control branches, builds, and commits. 
ms.custom: "boards-backlogs, seodec18"
ms.service: azure-devops-boards
ms.assetid: BD7CE3C1-9E15-4BD6-B9CD-F78569C74D0D  
ms.author: chcomley
author: chcomley
ms.topic: tutorial
monikerRange: '<= azure-devops'
ms.date: 07/26/2022
---

# Drive Git development from a work item in Azure Boards   

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

One of the ways your team can drive their development and stay in sync is to link your work items to the objects created during development, such as branches, commits, pull requests, and builds. You can begin that linking by creating a branch from one or more work items. Later, you can create pull requests, quickly open commits, and maintain a record of development operations performed to complete specific work.  

Review this article to learn:  

>[!div class="checklist"]    
> * How to create a new branch or pull request from a work item   
> * Complete the pull request  
> * Perform a squash merge  
> * Create a branch for several work items  
> * Link a work item to existing development and build objects    


::: moniker range=">= azure-devops-2019"  
This article addresses creating new branches, adding links to commits, and adding pull requests to a Git repository hosted on Azure DevOps. To link to GitHub commits and pull requests, see [Link GitHub commits and pull requests to work items](../github/link-to-from-github.md). 
::: moniker-end

> [!TIP]
> You can set up automatic linking and other settings that link work items to Git commits, pull requests, builds, and more. To learn how, see the following resources:   
> - [Configure repositories and branches to integrate with work tracking](../../repos/git/configure-repos-work-tracking.md?toc=/azure/devops/boards/toc.json) 
> - [Configure pipelines to support work tracking](../../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json) 
> - [Link and view work items to builds and deployments](../work-items/work-item-deployments-control.md).

## Development control

The **Development** control records all Git development processes that support completion of the work item. This control can show your team information needed to take the next development step and minimize navigational steps to accomplish common development tasks. It also supports traceability, providing visibility into all the branches, commits, pull requests, and builds related to the work item.   

::: moniker range=">= azure-devops-2020"  
:::image type="content" source="media/git/development-control.png" alt-text="Screenshot of work item form, Development control.":::
::: moniker-end

::: moniker range="azure-devops-2019"  
:::image type="content" source="media/git/development-control-2019.png" alt-text="Screenshot of work item form, Development control, Azure DevOps Server 2019.":::
::: moniker-end

::: moniker range="tfs-2018"  
![Screenshot of work item form, Development control, TFS 2018.](media/drive-git-development-dev-section.png)  
::: moniker-end



From it, you can quickly access branches, pull requests, and commits which are linked to the work item. Also, you can start a pull request for a branch you've created or linked to from the work item.  

Keep in mind that the **Development** control only appears within the web portal work item form. The work item tracking experience and forms that appear in Visual Studio or other supported clients don't display several of the features that are available from the web portal. 

## Prerequisites

::: moniker range="azure-devops"

* Connect to a project. If you don't have a project yet, [create one](../get-started/sign-up-invite-teammates.md). 
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**. By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  

::: moniker-end

::: moniker range="< azure-devops"

* Connect to a project. If you don't have a project yet, [create one](../../organizations/projects/create-project.md).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](../../organizations/security/add-users-team-project.md). 
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. For more information, see [Set permissions and access for work tracking](../../organizations/security/set-permissions-access-work-tracking.md).  

::: moniker-end


<a id="git-development">  </a>

## Workflow process 

Consider creating a new branch when there are no linked code artifacts. If a branch exists, but no pull requests, consider creating a pull request. Here's a typical workflow sequence when working with a Git repository. 

1. Start work on the work item by creating a branch. You can add a new Git branch from within the Development section...  

	::: moniker range=">= azure-devops-2019"  
	:::image type="content" source="media/git/development-control-git-github-create-branch.png" alt-text="Screenshot of Development control, Create branch link.":::
	::: moniker-end
	::: moniker range="< azure-devops-2019"  
	<img src="media/git/git-dev-pr-create-branch.png" alt="User story work item form, Development section, create new branch" /> 
	::: moniker-end

	... or, from the form's   :::image type="icon" source="../media/icons/actions-icon.png" border="false":::  Actions menu.  

	:::image type="content" source="media/git/actions-menu-new-branch-option.png" alt-text="User story work item form, Action menu, add new branch."::: 

	Name the branch and select the repository on which it's based.   

	<img src="media/git/git-dev-create-branch.png" alt="Create a branch dialog box" />  

	Branches you create are automatically linked to the work item.  

	> [!NOTE]  
	> You can only create a branch once you've added files to the main branch, which we recommend you label ```main``` or other distinctive label. The system automatically adds a README file to the initial repo created with each new project.   

2. The system opens to the repository and branch that you created. 

	You can edit a file within the web portal. 

	Or, if you have extensive file edits or need to add files, then you'll need to work from Visual Studio or other supported IDE. You'll want to add a new local branch from the branch you created. For more information, see [Update code with fetch and pull, Download changes with fetch](../../repos/git/pulling.md#download-changes-with-fetch). (While any code editing and committing process works, we work best with an edition of Visual Studio.)  

3. Add or modify files in the branch that you created.   

	From Visual Studio or other supported IDE, commit and push changes from your local branch to the repository.  

	![Commit and push changes](media/git/git-dev-commit-sync.png)  

	If this is the first time pushing changes from a new branch, you'll need to publish the branch before pushing your changes. For more information, see [Share code with push](../../repos/git/pushing.md).   

4. <a id="create-pull-request">  </a> Create a [pull request](../../repos/git/pull-requests.md) from the work item form.  

	You create a pull request to merge the changes you made to a main branch and get your changes reviewed by other members of your team.  

	:::image type="content" source="media/git/create-pull-request.png" alt-text="Screenshot of Development control, Create pull request link.":::  

5.	Your view switches to **Code**, Pull Requests page. Complete creating the pull request as shown. 
  
 	![Code view, Pull Request page.](media/git/git-dev-create-pull-request.png)   

	> [!NOTE]  
	> Once you've created a pull request, you can't create a new pull request for the same branch until you complete the previous pull request.  
	 
	![Pull Request page, Create pull request.](media/git/git-dev-pr-complete.png)  

	Check the box for **Squash changes when merging** and then complete the merge. 

	![Complete pull request dialog box, check squash-merge](media/git/git-dev-complete-merge.png)  

6. Upon completion, you should see a similar screen as follows.   

	> [!div class="mx-imgBorder"]
	> ![Pull request, completed notification](media/git/git-dev-pr-completed.png)

7.	Open the work item form or refresh the form, expand the **Development** section (choose **Maximize Development** :::image type="icon" source="../media/icons/full-screen-icon.png" border="false":::), and you'll see the links that have been added to support the operations you completed.  

	![Work item form, Development section, links added](media/git/git-dev-development-section-completed-links.png)  


<a id="add-branch-multi-wi">  </a>

## Create a branch for several work items  

You can also add a new branch from the work item listed on the backlog or Kanban board without having to open the work item. Using [multi-select](bulk-modify-work-items.md), you can select several work items and create a new branch where they're all linked to the branch. 

For example, here we select the first five items to link to a new branch.  

:::image type="content" source="media/git/git-dev-multi-select-backlog-create-new-branch.png" alt-text="Screenshot of select multiple items from backlog, Create branch link.":::

And, we specify the name of the branch.  

<img src="media/add-work-item-create-branch-multi-items.png" alt="Create new branch dialog" />   


<a id="link-objects">  </a>

## Link to existing development and build objects

All items listed under the Development section also appear under the **Links** :::image type="icon" source="media/icon-links-tab-wi.png" border="false"::: tab. All development actions started from the Development section are also recorded under the **History** :::image type="icon" source="media/icon-history-tab-wi.png" border="false"::: tab. 

![Links tab, development links](media/add-work-item-dev-links.png)  

To link a work item to an existing object, choose the ![Add link](../media/icons/add-link-icon.png) Add links icon and then choose the link type.  

![Select Add links icon and then choose the link type.](media/add-work-items-link-to-existing-branch.png)

[Linking, traceability, and managing dependencies](../queries/link-work-items-support-traceability.md).   


### Remove a link 

If you want to remove a link, you can do so from the **Development** section by highlighting it first and then choose **Remove link** :::image type="icon" source="../media/icons/delete_icon.png" border="false":::.  

![Development section, delete a link](media/add-work-item-remove-dev-link.png)  

Or, you can select it from the **Links** :::image type="icon" source="media/icon-links-tab-wi.png" border="false"::: tab and choose **Actions** :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: for the link and then choose the **Remove link** :::image type="icon" source="../media/icons/delete_icon.png" border="false"::: option.

## Related articles

- [Configure repositories and branches to integrate with work tracking](../../repos/git/configure-repos-work-tracking.md)
- [Configure pipelines to support work tracking](../../pipelines/integrations/configure-pipelines-work-tracking.md)
- [Add work items](add-work-items.md)  
- [Git overview](../../repos/git/index.yml) 
- [Link GitHub commits and pull requests to work items](../github/link-to-from-github.md)  
- [Link to work items from other objects](../../organizations/notifications/add-links-to-work-items.md)

### Associated work items in build 

With Git commits, any work items that have been linked to a commit are listed under the Associated work items in the build summary page.  

<img src="media/developer-associated-work-items-build.png" alt="Linked work items listed under Associated work items in the build summary page." />  

<!--- Add info about option to set build linking; link to release notes if needed --> 
 

### Link types showing in the Development section

Links shown in this section appear because of these actions:   
- Creating a branch, commit, or pull request from the work item    
- Specifying the work item ID during a commit, pull request, or other supported Git or TFVC operation   
- Specifically linking the work item from the **Development** section or **Links** :::image type="icon" source="media/icon-links-tab-wi.png" border="false"::: tab to a source code branch, build, or other supported Git or TFVC operation.  

Hovering over any entry listed under the Development section activates the hyperlink to the associated object.    

::: moniker range=">= azure-devops-2019"
The link types you can add within the development section are Branch, Build, Changeset, Commit, Found in build, Integrated in build, Pull Request, and Versioned Item. 

<img src="../queries/media/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" /> 
::: moniker-end

::: moniker range="tfs-2018"
The link types you can add within the development section are Branch, Build, Changeset, Commit, Pull Request, and Versioned Item. 

<img src="media/git/link-tracking-artifact-to-artifact-link-types.png" alt="Artifact-to-artifact link types" /> 

::: moniker-end

::: moniker range="<= azure-devops-2019"
To learn more about the links control or to customize the Development links control, see [LinksControlOptions elements, Development links control](/previous-versions/azure/devops/reference/xml/linkscontroloptions-xml-elements#development-links-control). 
 
::: moniker-end

<!---
and only work with the current build processes (not XAML builds)
-->
