---
title: Use Git tags
titleSuffix: Azure Repos
description: Learn how to use Git tags
ms.assetid: f8273944-a319-43bf-b145-b34a9ad5647f
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 09/28/2021
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Use Git tags

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Azure DevOps supports both annotated and lightweight tags. Lightweight tags are a pointer to specific commit, while annotated tags contain more information such as the tagger, message, and date. You can create annotated tags using the web portal. You can create both lightweight and annotated tags from within Visual Studio. For more information on Git tags, see [2.6 Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) from the Pro Git book.

This article provides an overview of working with Git tags in Azure DevOps and Visual Studio.

> [!IMPORTANT]
> The **Tags** view in Visual Studio was introduced in Visual Studio 2017 Update 6. If you are on versions earlier than this, you can view and create tags from the history and commit details views starting with Visual Studio 2015, but you won't be able to perform the operations in the **Tags** view as described in this article.

## View and filter tags

#### [Browser](#tab/browser)


You can view tags in the **Tags** view and in the **Commits** view in the web portal.

[!INCLUDE [project-urls](../../includes/project-urls.md)]

### View tags in the Tags view

1. To view the tags in your repo, navigate to your project in the web portal, choose **Repos**, **Tags**, and select the desired repo.

   :::image type="content" source="media/git-tags/view-tags-new-nav.png" alt-text="Screenshot of tags navigation in the web portal.":::

   Annotated tags are displayed with a tag name, message, commit, tagger, and creation date. Lightweight tags are displayed with a tag name and commit.

2. To filter the list of tags, type a search term into the **Search tag name** box and press **Enter**.

    :::image source="media/git-tags/filter-tags.png" alt-text="Screenshot of filter tags in the web portal." :::

### View tags in the Commits view

To view tags for a specific branch in the **Commits** view, navigate to your repo in the web portal, choose **Repos**, **Commits**, and select your branch.

:::image type="content" source="media/git-tags/view-tags-from-commits-new-nav.png" alt-text="Screenshot of tags in the Commits view in the web portal." :::

#### [Visual Studio](#tab/visual-studio)

### View tags in the History view

You can view tags in the **History** view.

1. From the **Git** menu in the menu bar, select **Manage Branches**.

1. To view history, select a branch.

   :::image type="content" source="media/git-tags/view-tags-from-commits-vs.png" alt-text="Screenshot of Visual Studio view tags in the History view.":::

   The red shapes are branches, and the green shapes are tags.

### View tags in the Tags view

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. To view all tags in a repo, select **Tags** from the **Home** view.

   :::image type="content" source="media/git-tags/navigate-tags-pane-vs.png" alt-text="Screenshot of the Visual Studio tags button." ::: 

2. Tags are displayed under the currently connected repo name. 

   :::image type="content" source="media/git-tags/view-tags-vs.png" alt-text="Screenshot of Visual Studio tags view." :::

   Annotated tags display a tooltip that contains the tag name, tagger, tag date, and message. Lightweight tags have only the tag name in the tooltip.

   :::image type="content" source="media/git-tags/tag-style-vs.png" alt-text="Screenshot of Visual Studio annotated tags view." :::

   For more information about the tagged commit, right-click the tag and select **View Commit Details**.

   :::image type="content" source="media/git-tags/view-commit-details-vs.png" alt-text="Screenshot of Visual Studio view commit details." :::

3. To filter the list of tags, type a search term into the **Type here to filter the list** box.

   :::image type="content" source="media/git-tags/filter-tags-vs.png" alt-text="Screenshot of Visual Studio filter tags in the tags view." :::

To retrieve the current list of tags from the source repo, perform a [fetch](pulling.md?tabs=visual-studio#download-changes-with-fetch) operation.

---

## Create tag

To create a tag, have the [Create tag](../../organizations/security/permissions.md#git-repository-object-level) permission, which is included [by default](../../organizations/security/default-git-permissions.md) in the [Contributors](../../organizations/security/permissions.md#project-level-groups) group and higher.

> [!NOTE]
> Tag names can't contain ASCII control characters, such as spaces, tildes, and colons. It's common practice to use lowercase characters and to separate words with a hyphen. Tag name length shouldn't exceed 250 ASCII characters. To avoid ambiguity between tag names and commit hashes, don't use tag names that consist of 40 hexadecimal characters. For more information on tag naming, see [git-check-ref-format](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html).

#### [Browser](#tab/browser)

You can create annotated tags using the web portal from both the **Tags** view and the **Commits** view.

>[!IMPORTANT]
> You can only create annotated tags in the web portal or [Visual Studio](git-tags.md?tabs=visual-studio#create-tag). To create a lightweight tag, you can use [Git command line](https://git-scm.com/book/en/v2/Git-Basics-Tagging).

### Create tags from the Tags view

1. Select **Create tag** from the **Tags** view in the web portal to create a new annotated tag.

   :::image type="content" source="media/git-tags/create-tag-button.png" alt-text="Screenshot of create tag button in the web portal." :::

2. Specify a **Name**, select the branch to **Tag from**, enter a **Description** (required since you're creating an annotated tag), and select **Create**.

   :::image type="content" source="media/git-tags/create-tag.png" alt-text="Screenshot of create tag dialog in the web portal." :::

3. The new tag is displayed in the tag list.

   :::image type="content" source="media/git-tags/tag-created.png" alt-text="Screenshot of new tag in the web portal." :::

### Create tags from the Commits view

To create a tag directly from the commits view, right-click the desired tag and choose **Create tag**.

:::image type="content" source="media/git-tags/create-tag-from-commit.png" alt-text="Screenshot of create tag from commits view in the web portal." :::

#### [Visual Studio](#tab/visual-studio)

You can create both annotated and lightweight tags in Visual Studio from both the **History** view and the **Tags** view. To create an annotated tag, provide both a name and a message when creating the tag. To create a lightweight tag, omit the message and supply only a name.

### Create tags from the History view

You can view tags in the **History** view.

1. From the **Git** menu in the menu bar, select **Manage Branches**.

1. Select a branch to view history, right-click a commit, and select **New Tag**.

   :::image type="content" source="media/git-tags/create-tag-from-commit-vs.png" alt-text="Screenshot of create tag from history view in Visual Studio." :::

1. In the **Create a new tag** dialog, enter a **Tag name** only for a lightweight tag or a **Tag name** and **Tag message** for an annotated tag. Select **Create**.

### Create tags from the Tags view

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. Select **New Tag** in the **Tags** view to create a new tag.

   :::image type="content" source="media/git-tags/create-tag-button-vs.png" alt-text="Screenshot of create tag button in Visual Studio." :::

2. To create a tag against the tip of the current branch, specify a name in the **Enter a tag name** box, optionally provide a tag message, and select **Create tag**.

   :::image type="content" source="media\git-tags\create-tag-current-branch-vs.png" alt-text="Screenshot of create tag dialog in Visual Studio." :::

   To select the branch to create the tag from, clear the **Create tag against tip of current branch** check box, and select a branch from the **Select a branch** drop-down.

   :::image type="content" source="media/git-tags/create-tag-select-branch-vs.png" alt-text="Screenshot of select a branch dialog in Visual Studio." :::

3. The new tag is created locally. Right-click the new tag and choose **Push** to push it to the remote repo. Select **Push All** to push all new local tags to the remote repo.

   :::image type="content" source="media/git-tags/tag-created-vs.png" alt-text="Screenshot of push new tag in Visual Studio." :::

---

  You can programmatically create annotated tags via the Azure DevOps [REST API](/rest/api/azure/devops/git/annotated-tags/create). To create tags via an Azure pipeline using the `git tag` command. For more information, see [git tag](https://git-scm.com/docs/git-tag).


## Delete tag

>[!IMPORTANT]
>Use caution when deleting tags from your repo. If the repo has been pulled, forked, or cloned by another user, the tag will still exist in their copy of the repo. You should only delete local tags, or if you are sure that the repo hasn't been pulled, cloned, or forked since you created your tag.

To delete a tag, have the [Force push](../../organizations/security/permissions.md#git-repository-object-level) permission at the **Repository** level or the **All tags** level (which inherits its permissions from the repository level if not explicitly set). The creator also inherits **Force push** permissions for a tag.

#### [Browser](#tab/browser)

### Delete a tag in the remote repo

The steps in this procedure show you how to delete a tag in the remote repo using the Azure DevOps Services web portal.

1. To delete a tag, select the ellipsis to the right of the tag name and choose **Delete tag**.

   :::image type="content" source="media/git-tags/delete-tag.png" alt-text="Screenshot of delete tag in the web portal." :::

2. Select **Delete** to confirm.

   :::image type="content" source="media/git-tags/delete-tag-confirm.png" alt-text="Screenshot of delete tag confirmation in the web portal." :::

3. The tag is deleted, and won't be displayed the next time you navigate to the **Tags** view.

   :::image type="content" source="media/git-tags/tag-deleted.png" alt-text="Screenshot of tag deleted in the web portal." :::

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

The steps in this procedure show you how to delete a tag in the local repo using Visual Studio 2019 Team Explorer.

Right-click the tag to delete and choose **Delete Locally**

:::image type="content" source="media/git-tags/delete-tag-vs.png" alt-text="Screenshot of delete tag in Visual Studio 2017." :::

>[!IMPORTANT]
>If your tag has already been pushed to the remote repo, you should not delete it. If the repo has been pulled, forked, or cloned by another user, the tag will still exist in their copy of the repo. You should only delete local tags.

---

## Create branch from a tag

#### [Browser](#tab/browser)

1. To create a branch from a tag, select the ellipsis to the right of the tag name and choose **New branch**.

   :::image type="content" source="media/git-tags/branch-from-tag.png" alt-text="Screenshot of create branch from tag selection in the web portal." :::

2. Specify a **Name**, optionally select any **Work items to link**, and choose **Create branch**.

   :::image type="content" source="media/git-tags/branch-from-tag-create.png" alt-text="Screenshot of create branch from tag dialog in the web portal." :::

3. The branch is created and you're taken to the new branch in the web portal.

   :::image type="content" source="media/git-tags/branch-from-tag-created.png" alt-text="Screenshot of branch created from tag in the web portal." :::

#### [Visual Studio](#tab/visual-studio)

The steps in this procedure show you how to create a branch from a tag using Visual Studio 2019 Team Explorer. For Visual Studio 2019 using the **Git** menu or Visual Studio 2022, use the browser.

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. To create a branch from a tag, right-click the tag and choose **New Local Branch From**. You can also choose **Create Branch From Tag**.

   :::image type="content" source="media/git-tags/branch-from-tag-vs.png" alt-text="Screenshot of create branch from tag selection in Visual Studio." :::

2. Specify a branch name, verify the desired tag, and choose **Create Branch**. To check out the new branch, choose **Checkout branch**.

   :::image type="content" source="media/git-tags/branch-from-tag-create-vs.png" alt-text="Screenshot of create branch from tag dialog in Visual Studio." :::   

3. To view your newly created branch, select **Branches** from the **Home** view.

   :::image type="content" source="media/git-tags/navigate-branches-pane.png" alt-text="Screenshot of new branch pane in Visual Studio." :::

4. Your new branch is created locally. To push the branch, right-click it and choose **Push Branch**.

   :::image type="content" source="media\git-tags\branch-from-tag-created.vs.png" alt-text="Screenshot of push branch in Visual Studio." :::

---

## View tag history

#### [Browser](#tab/browser)


1. To view the history for a tag, select the ellipsis to the right of the tag name and choose **View history**.

   :::image type="content" source="media/git-tags/view-history.png" alt-text="Screenshot of view tag history in the web portal." :::

2. You're taken to the commits view for the tag.

   :::image type="content" source="media/git-tags/commits.png" alt-text="Screenshot of tag history in the web portal." :::


#### [Visual Studio](#tab/visual-studio)

The steps in this procedure show you how to view tag history using Visual Studio 2019 Team Explorer. For Visual Studio 2019 using the **Git** menu or Visual Studio 2022, use the browser.

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. To view the history for a tag, right-click the tag and choose **View History**.

   :::image type="content" source="media/git-tags/view-history-vs.png" alt-text="Screenshot of view tag history selection in Visual Studio." :::

2. The history is displayed in the **History** view.

   :::image type="content" source="media/git-tags/commits-vs.png" alt-text="Screenshot of tag history in Visual Studio." :::

---
