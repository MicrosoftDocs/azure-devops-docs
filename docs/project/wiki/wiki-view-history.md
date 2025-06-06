---
title: Revert Changes and Find Wiki Page History
titleSuffix: Azure DevOps
description: View the page history for files in your team project wiki page and revert page changes. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: how-to
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: '<= azure-devops'
ms.date: 06/06/2025
#customer intent: As an Azure DevOps developer, I want to view the page history for files in my team project wiki page so I can revert page changes as needed.
---

# View the wiki page history and revert changes

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to view the revision history of a wiki page in Azure DevOps. It also provides information on how to revert changes made to a wiki page.

## Prerequisites

[!INCLUDE [wiki-prereqs-create-repository](includes/wiki-prereqs-create-repository.md)]

## View wiki page revision history  

You can view the page history for a file in a provisioned wiki by following these steps:

1. Sign in to your project (`https://dev.azure.com/<Organization>/<Project>`) in Azure DevOps.

1. In the left navigation, select **Wiki**, and open the wiki page you want to view.

1. In the wiki page view on the right, select :::image type="icon" source="../../media/icons/more-actions.png"::: **More options** > **View revisions**:

   :::image type="content" source="media/wiki/wiki-page-view-revisions.png" alt-text="Screenshot that shows how to select the View revisions option for a wiki page in the Azure DevOps web portal.":::

1. The **Revisions** page shows who made changes to the page, along with the revision messages, the date for each change, and the version or commit ID. 

   :::image type="content" source="media/wiki/wiki-page-revision-history.png" alt-text="Screenshot that shows the revisions for a wiki page, including the change author, revision message, change date, and change version or commit ID.":::

1. To review the changes made in a specific revision, select the message or version link to open the file.

   The wiki file opens in the **Compare** view that shows the file changes for that commit or version.

   :::image type="content" source="media/wiki/wiki-revision-details.png" alt-text="Screenshot that shows the page revisions in the Compare view with changes visible side-by-side view.":::

   The review experience for revisions in Azure DevOps is similar to working with the **Files changed** view in GitHub. You can select **Show diff side-by-side** to compare the two versions of the file or **Show diff inline** to see the changes in a single pane:

   :::image type="content" source="media/wiki/wiki-revision-view-changes.png" alt-text="Screenshot that shows the view options for changes: Show diff side-by-side or Show diff inline.":::

1. To review the prepublished Markdown (_.md_) content, select **Preview**.

To return to the initial view of the page or go back to the list of page revisions, use the [breadcrumb navigation](../navigation/use-breadcrumbs-selectors.md).

> [!NOTE]
> The revision viewing experience is the same for a page in a published as code wiki but the **Revert** action isn't available.

<a id="revert-provision"></a>

## Revert a commit for a provisioned wiki

You can revert a change on a wiki page by following these steps:

1. Go to the **Revisions** page for the wiki file and open the specific revision that you want to apply to the page.

1. When the wiki file opens, select **Revert**:

   :::image type="content" source="media/wiki/wiki-select-revert.png" alt-text="Screenshot that shows how to select the Revert option for a wiki page revision.":::

1. In the confirmation dialog, select **Revert**:

   :::image type="content" source="media/wiki/wiki-revert-dialog.png" alt-text="Screenshot that shows the confirmation dialog to revert the page revision.":::

<a id="revert-publish"></a>

## Revert a commit for a published as code wiki

To revert to an earlier revision for a page that you published as code, you have two options:

- If the commit to apply is the most recent revision for the page, you can revert from the web portal.
- If the commit is an earlier revision and there are more recent commits for the page, create a separate branch and do the revert in the branch.

### Revert the page content in the web portal

To revert a wiki page from the most recent revision in the Azure DevOps web portal, follow these steps:

1. Go to the **Revisions** page for the wiki file and locate the most recent revision.

1. Copy the full ID for the revision commit by selecting :::image type="icon" source="../../media/icons/copy-clone-icon.png"::: **Copy full SHA to clipboard**:

   :::image type="content" source="media/wiki/revert-publish-as-code-copy-commit-id.png" alt-text="Screenshot that shows how to select the Copy to clipboard option for the full commit ID.":::

1. Go to **Repos** > **Commits**, paste the copied commit ID into the **Commit ID** box, and select :::image type="icon" source="../../media/icons/search-icon.png"::: **Search**:
 
   :::image type="content" source="media/wiki/revert-publish-as-code-paste-commit-id.png" alt-text="Screenshot that shows how to enter the copied commit ID for the revision.":::
	
1. On the **Commit** page, select :::image type="icon" source="../../media/icons/actions-icon.png"::: **More options** > **Revert**:  

   :::image type="content" source="media/wiki/revert-publish-as-code-option.png" alt-text="Screenshot that shows how to select the More options Revert action for the commit.":::

1. In the **Revert commit** pane, select the **Target branch** for the commit, enter or select the **Target branch name**, and then select **Revert**:

   :::image type="content" source="media/wiki/revert-publish-as-code-commit-dialog.png" alt-text="Screenshot that shows how to select or enter the target branch and branch name for the revert operation.":::

   The specified target branch is created with the reverted changes.

   If you receive an error message, you might need to create a local branch and make your changes manually as described in the next section.

1. Select **Create Pull Request**.

1. In the **New Pull Request** dialog, select **Create**.

1. In the **Complete pull request** dialog, select the **Merge type**. Optionally, select the checkboxes for options to complete after the merge.

1. Select **Complete merge** to merge the changes into the main wiki branch:

   :::image type="content" source="media/wiki/revert-complete-pull-request-dialog.png" alt-text="Screenshot that shows the Complete merge for the pull request to revert the page in the published code as wiki.":::

To view the reverted content, go to the wiki page and refresh the browser.

### Revert from earlier revisions with a different branch

You can also revert to older committed version of a page in a published as code wiki by using a branch other than the main branch for the wiki. After the update to the other branch, you create a pull request to the main branch.

1. Create a local branch of the main wiki branch.

1. View the commit history and locate the commit with the changes to revert.

1. Use the **Revert** command described earlier to revert the desired commit.

1. When a conflict arises, use the conflict resolution tool to resolve the issues.

1. Commit the changes to your local branch.

1. Push the local branch to the remote server.

1. Create a pull request for your local branch into the main branch for the wiki.

1. Complete the pull request.

## Related content

- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Undo (revert) repo changes](../../repos/git/undo.md)
- [Review Git history](../../repos/git/review-history.md) 