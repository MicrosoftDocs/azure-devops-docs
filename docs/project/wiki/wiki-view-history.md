---
title: Revert changes and find wiki page history
titleSuffix: Azure DevOps
description: Add and update pages offline for your built-in team project wiki. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: '<= azure-devops'
ms.date: 11/21/2023 
---

# View wiki page history and revert changes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]  

This article shows you how to view the revision history of a wiki page in Azure DevOps. It also provides information on how to revert changes made to a wiki page.

## Prerequisites

::: moniker range=" azure-devops"

* You must have at least Basic access to create and modify a wiki.
* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

::: moniker range=" < azure-devops"

* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

<a id="view-revision-history"></a>

## View wiki page revision history  

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and go to your wiki page. 
2. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **View revisions**.

   :::image type="content" source="media/wiki/wiki-page-revisions.png" alt-text="Screenshot of the context menu showing Print, Link work items, View revisions, and Delete options. The View revisions button is highlighted.":::

3. Revision pages show who made the change along with the revision message, date, and version or commit ID. To view details of a revision, select the message or version link.

	::: moniker range=">= azure-devops-2019"

   :::image type="content" source="media/wiki/revision-history-vsts.png" alt-text="Screenshot of Page for a provisioned wiki page.":::

   ::: moniker-end

4. Similar to any git file revision, the revision details page provides a **Show diff side-by-side** view or the **Show diff inline** view. Choose **Preview** to see the content of the page of the specific revision.

   :::image type="content" source="media/wiki/wiki-revision-details-2.png" alt-text="Screenshot of article revisions compared side-by-side. The article is in Markdown.":::

   ::: moniker range=">= azure-devops-2019"

   For a *publish as code wiki* page, similar information displays, but the **Revert** button isn't active.

   ::: moniker-end

5. [Use the breadcrumbs](../navigation/use-breadcrumbs-selectors.md) to return to the page or revisions of the page.

<a id="revert-provision"></a>

## Revert a commit to a *provisioned wiki* page

Select **Revert** on the revision details page to revert a change on a wiki page.



:::image type="content" source="media/wiki/wiki-revert.png" alt-text="Screenshot fo the Dialog box revert revision. Revert option is selected.":::

<a id="revert-publish"></a>

::: moniker range=">= azure-devops-2019"

## Revert a commit to a *publish as code wiki* page

To revert to an earlier revision for a page that you published as code, do one of the following actions:

- If the commit is the most recent revision to a page, you can revert from the web portal.
- If the commit is an earlier revision, with more commits having occurred in between, create a separate branch and revert the changes in that branch.

### Revert from a recent revision from the web portal

1. Preview any version by choosing the commit ID from the **Revisions** page for the selected file.

2. Copy the full ID of the commit by selecting :::image type="icon" source="../../media/icons/copy-clone-icon.png" border="false"::: **Copy-clone**.

	:::image type="content" source="media/wiki/revert-publish-as-code-copy-commit-id.png" alt-text="Screenshot of Copy the full commit ID.":::

3. Go to **Repos** > **Commits**, paste the ID that you copied into the Commit ID box, and select :::image type="icon" source="../../media/icons/search-icon.png" border="false"::: Search.
 
	:::image type="content" source="media/wiki/revert-publish-as-code-paste-commit-id.png" alt-text="Screenshot of Paste the commit ID for an earlier commit.":::
	
4. From the commit page, select :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **More actions**, and then choose **Revert**.  

	:::image type="content" source="media/wiki/revert-publish-as-code-option.png" alt-text="Screenshot of Choose revert menu option of an earlier commit.":::

5. Confirm that you want to revert. Select **Revert**.  

	:::image type="content" source="media/wiki/revert-publish-as-code-commit-dialog.png" alt-text="Screenshot of Revert commit dialog.":::

	A branch gets created with the reverted changes.

6. Select **Create Pull Request**.
		
	If you receive an error message, you might need to create a local branch and make your changes manually as described in the next section.

7. Select **Create** in the New Pull Request form.

8. Select **Complete merge** to merge the changes into the main wiki branch. Optionally, add a check to the checkboxes to select post-completion options.

	:::image type="content" source="media/wiki/revert-complete-pull-request-dialog.png" alt-text="Screenshot of Revert publish code as wiki, complete pull request.":::

To view the reverted content, return to the wiki and refresh the browser.

### Revert from earlier revisions using a different branch

To revert to an earlier committed version of a publish as code wiki page, one that isn't the immediate last revision, update a branch other than the main branch for the wiki, and then create a pull request to the main branch.

1. Create a local branch of the main wiki branch.
2. View the commit history and locate the commit that contains the changes you want to undo.
3. Use the revert command to revert the desired commit.
4. When a conflict arises, use the conflict resolution tool to resolve the issues.
5. Commit the changes to your local branch.
6. Push the local branch to the remote server.
7. Create a pull request for your local branch into main.
8. Complete the pull request.

::: moniker-end

## Related articles

- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Undo (revert) repo changes](../../repos/git/undo.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
- [Review Git history](../../repos/git/review-history.md) 
- [Clone an existing Git repo](../../repos/git/clone.md)
  