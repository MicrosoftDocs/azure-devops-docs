---
title: View wiki page revisions, history, and revert in Azure DevOps
titleSuffix: Azure DevOps
description: Add and update pages offline for your  built-in team project wiki 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid: 
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
monikerRange: '>= tfs-2018'
ms.date: 12/14/2018  
---

# View wiki page history and revert

[!INCLUDE [temp](../../_shared/version-vsts-tfs-2018.md)]

The Revisions page provides a convenient way to get details of the changes made to a wiki page. Optionally, you can choose to revert to an earlier version of a page.

<a id="view-revision-history"></a>

## View wiki page revision history  

1. To view the revision history of a page, select the **Revisions** link provided on each page. You can also click **View revisions** in the context menu of a page.

	<img src="_img/wiki/click-revision.png" alt="Open revision history" style="border: 1px solid #C3C3C3;" />
 
0. Revision pages show who made the change along with the revision message, date, and version or commit ID. To view details of a revision, click the message or version link.

	::: moniker range=">= azdevserver-2019"
	> [!div class="mx-imgBorder"]  
	> ![Revision page for a provisioned wiki page](_img/wiki/revision-history-vsts.png)
	::: moniker-end
	::: moniker range="tfs-2018"
	<img src="_img/wiki/revision-history.png" alt="Open revision history" style="border: 1px solid #C3C3C3;" />
	::: moniker-end
0.	Similar to any git file revision, the revision details page provides a **side-by-side diff view** or the **inline diff view**. You can also choose **Preview** to view the content of the page as of the specific revision.

	<img src="_img/wiki/wiki-revision-details-2.png" alt="Wiki revision details for a page" style="border: 1px solid #C3C3C3;" />
	::: moniker range=">= azdevserver-2019"
	For a *publish as code wiki* page, you'll see similar information, however the **Revert** button is not active.

	> [!div class="mx-imgBorder"]  
	> ![Revision page for a publish as code wiki page](_img/wiki/view-history-publish-as-code.png)
	::: moniker-end
1. You can use the breadcrumbs to return to the page or the revisions of the page.

::: moniker range=">= tfs-2018"
<a id="revert-provision"></a>

## Revert a commit to a *provisioned wiki* page

Mistakes can happen while updating a wiki page. You can conveniently revert a revision and undo changes done on a wiki page. You can choose the **Revert** button on the revision details page to revert a change on a wiki page.

::: moniker-end

::: moniker range="tfs-2018"
> [!NOTE]
> The **Revert** option is available with TFS 2018.2 and later versions.
::: moniker-end

::: moniker range=">= tfs-2018"

<img src="_img/wiki/wiki-revert.png" alt="Wiki revision details for a page" style="border: 1px solid #C3C3C3;" />

::: moniker-end

::: moniker range=">= azdevserver-2019"
<a id="revert-publish"></a>

## Revert a commit to a *publish as code wiki* page

If you find that you need to revert to an earlier revision for a page that you have published as code, you'll need to follow one of two paths. If the commit is the most recent revision to a page, you can revert from the web portal. If the commit is an earlier revision, with additional commits having occurred in between, you'll be most successful by creating a separate branch and reverting the changes in that branch.

### Revert from a recent revision from the web portal

1. You can preview any version by choosing the commit id from the **Revisions** page for the selected file.

2. Copy the full ID of the commit by clicking the ![ ](../../_img/icons/copy-clone-icon.png) copy-clone icon.  Here we copy the commit id, `ca6d475a22eb1db930cf238f3b80862a78a689e4`, with the abbreviated ID of `ca6d475a`. 

	> [!div class="mx-imgBorder"]  
	> ![Copy the full commit id for an earlier commit](_img/wiki/revert-publish-as-code-copy-commit-id.png)

0. Open the **Code>Commits** page and paste the ID that you copied into the Commit ID box and click the ![ ](../../_img/icons/search-icon.png) search icon.
 
	> [!div class="mx-imgBorder"]  
	> ![Copy the full commit id for an earlier commit](_img/wiki/revert-publish-as-code-paste-commit-id.png)
	
0. From the commit page, open the ![ ](../../_img/icons/actions-icon.png) actions icon and choose the **Revert** option.  

	> [!div class="mx-imgBorder"]  
	> ![Choose revert menu option of an earlier commit](_img/wiki/revert-publish-as-code-option.png)

0. Confirm you want to revert. Choose **Revert** in the dialog that opens.  

	> [!div class="mx-imgBorder"]  
	> ![Revert commit dialog](_img/wiki/revert-publish-as-code-commit-dialog.png)

	A branch is created with the reverted changes.

0. Select **Create Pull Request**.  

	> [!div class="mx-imgBorder"]  
	> ![Revert commit dialog](_img/wiki/revert-publish-as-code-commit-confirm.png)
		
	If instead, you receive an error message as shown, it indicates that you must create a local branch and make your changes manually as described in the next section.

	> [!div class="mx-imgBorder"]  
	> ![Revert publish code as wiki error message](_img/wiki/revert-publish-as-code-error-message.png)

0. Select **Create** in the New Pull Request form.

0. Select **Complete** to merge the changes into the master wiki branch. Optionally, check the **Delete** checkbox to delete the intermediate branch.

	> [!div class="mx-imgBorder"]  
	> ![Revert publish code as wiki, complete pull request](_img/wiki/revert-complete-pull-request-dialog.png) 

Return to the wiki, refresh the browser, and you should see the reverted content.

### Revert from earlier revisions using a different branch

To revert to an earlier committed version, one that is not the immediate last revision, of a publish as code wiki page, you must update a branch other than the master branch for the wiki, and then create a pull request to the master branch. The general steps are:

0.	Create a local branch of the master wiki branch.
0.	View the commit history and locate the commit that contains the changes you want to undo.
0.	Use the revert command to revert the desired commit.
0.	When a conflict arises, use the conflict resolution tools to resolve the issues.
0.	Commit the changes locally to your local branch.
0.	Push the local branch to the remote server.
0.	Create a pull request for your local branch into master.
0.	Complete the pull request.

You can use the following steps to identify the commit that contains the content you want to revert to. Then, use standard Git operations to revert the content.

For more information, see the following articles:

- [Clone an existing Git repo](../../repos/git/clone.md)  
- [Create work in branches](../../repos/git/branches.md)  
- [Review history](../../repos/git/review-history.md)  
- [Undo (revert) changes](../../repos/git/undo.md)
- [Resolve merge conflicts](../../repos/git/merging.md)
- [Copy changes with cherry-pick](../../repos/git/cherry-pick.md)
- [Commit details](../../repos/git/commit-details.md)

::: moniker-end

## Related articles

- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)