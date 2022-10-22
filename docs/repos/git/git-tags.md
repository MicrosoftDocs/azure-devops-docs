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
[!INCLUDE [version-vs-gt-2015](../../includes/version-vs-gt-2015.md)]

Azure DevOps supports both annotated and lightweight tags. Lightweight tags are a pointer to specific commit, while annotated tags contain more information such as the tagger, message, and date. You can create annotated tags using the web portal, and starting with Visual Studio 2017 Update 6, you can create both lightweight and annotated tags from within Visual Studio. For more information on Git tags, see [2.6 Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) from the Pro Git book.

This article provides an overview of working with Git tags in Azure DevOps and Visual Studio.

> [!IMPORTANT]
> The **Tags** view in Visual Studio was introduced in Visual Studio 2017 Update 6. If you are on versions earlier than this, you can view and create tags from the history and commit details views starting with Visual Studio 2015, but you won't be able to perform the operations in the **Tags** view as described in this article.

## View and filter tags

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

You can view tags in the **Tags** view and in the **Commits** view in the web portal.

[!INCLUDE [project-urls](../../includes/project-urls.md)]

### View tags in the Tags view

1. To view the tags in your repo, navigate to your project in the web portal, choose **Repos**, **Tags**, and select the desired repo.

   ![View tags in Tags view.](media/git-tags/view-tags-new-nav.png)

   Annotated tags are displayed with a tag name, message, commit, tagger, and creation date. Lightweight tags are displayed with a tag name and commit.

2. To filter the list of tags, type a search term into the **Search tag name** box and press **Enter**.

   ![Filter tags](media/git-tags/filter-tags.png)

### View tags in the Commits view

To view tags for a specific branch in the **Commits** view, navigate to your repo in the web portal, choose **Repos**, **Commits**, and select your branch.

![View tags in Commits view.](media/git-tags/view-tags-from-commits-new-nav.png)

::: moniker-end

::: moniker range="tfs-2018"

You can view tags in the **Tags** view and in the **Commits** view in the web portal.

[!INCLUDE [project-urls](../../includes/project-urls.md)]

### View tags in the Tags view

1. To view the tags in your repo, navigate to your project in the web portal, choose **Code**, select the desired repo, and choose **Tags**.

   ![View tags in Tags view.](media/git-tags/view-tags.png)

   Annotated tags are displayed with a tag name, message, commit, tagger, and creation date. Lightweight tags are displayed with a tag name and commit.

2. To filter the list of tags, type a search term into the **Search tag name** box and press **Enter**.

   ![Filter tags](media/git-tags/filter-tags.png)

### View tags in the Commits view

To view tags for a specific branch in the **Commits** view, navigate to your repo in the web portal, choose **Code**, **Commits**, and select your branch.

![View tags in Commits view.](media/git-tags/view-tags-from-commits.png)

::: moniker-end

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

You can view tags in the **Tags** view and in the **History** view.

### View tags in the Tags view

1. To view all tags in a repo, select **Tags** from the **Home** view.

   ![Tags button](media/git-tags/navigate-tags-pane-vs.png)

2. Tags are displayed under the currently connected repo name. 

   ![View tags under the currently connected repo name.](media/git-tags/view-tags-vs.png)

   Annotated tags display a tooltip that contains the tag name, tagger, tag date, and message. Lightweight tags have only the tag name in the tooltip.

   ![View annotated tags.](media/git-tags/tag-style-vs.png)

   For more information about the tagged commit, right-click the tag and select **View Commit Details**.

   ![Commit details](media/git-tags/view-commit-details-vs.png)

3. To filter the list of tags, type a search term into the **Type here to filter the list** box.

   ![Filter tags in the Tags view.](media/git-tags/filter-tags-vs.png)

To retrieve the current list of tags from the source repo, perform a [fetch](pulling.md?tabs=visual-studio#download-changes-with-fetch) operation.

### View tags in the History view

You can also view tags in the **History** view, for example by navigating to the **Branches** view, right-clicking the desired branch, and choosing **View History**. The red shapes are branches, and the green shapes are tags.

![View tags in the History view.](media/git-tags/view-tags-from-commits-vs.png)

---

## Create tag

To create a tag, you must have the [Create Tag](../../organizations/security/permissions.md#git-repository-object-level) permission, which is included [by default](../../organizations/security/default-git-permissions.md) in the [Contributors](../../organizations/security/permissions.md#project-level-groups) group and higher.

> [!NOTE]
> Tag names can't contain ASCII control characters, such as spaces, tildes, and colons. It's common practice to use lowercase characters and to separate words with a hyphen. Tag name length shouldn't exceed 250 ASCII characters. To avoid ambiguity between tag names and commit hashes, don't use tag names that consist of 40 hexadecimal characters. For more information on tag naming, see [git-check-ref-format](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html).

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

You can create annotated tags using the web portal from both the **Tags** view and the **Commits** view.

>[!IMPORTANT]
> You can only create annotated tags in the web portal. To create a lightweight tag, you can use [Git command line](https://git-scm.com/book/en/v2/Git-Basics-Tagging) or [Visual Studio](git-tags.md?tabs=visual-studio#create-tag).

### Create tags from the Tags view

1. Select **Create Tag** from the **Tags** view in the web portal to create a new annotated tag.

   ![Create tag](media/git-tags/create-tag-button.png)

2. Specify a **Name**, select the branch to **Tag from**, enter a **Description** (required since you are creating an annotated tag), and select **Create**.

   ![Select Create.](media/git-tags/create-tag.png)

3. The new tag is displayed in the tag list.

   ![View new tag](media/git-tags/tag-created.png)

### Create tags from the Commits view

To create a tag directly from the commits view, right-click the desired tag and choose **Create tag**.

![Create tag from the Commits view.](media/git-tags/create-tag-from-commit.png)

::: moniker-end

::: moniker range="tfs-2018"

You can create annotated tags using the web portal from both the **Tags** view and the **Commits** view.

>[!IMPORTANT]
> You can only create annotated tags in the web portal. To create a lightweight tag, you can use [Git command line](https://git-scm.com/book/en/v2/Git-Basics-Tagging) or [Visual Studio](git-tags.md?tabs=visual-studio#create-tag).

### Create tags from the Tags view

1. Select **Create Tag** from the **Tags** view in the web portal to create a new annotated tag.

   ![Create tag from the Tags view.](media/git-tags/create-tag-button.png)

2. Specify a **Name**, select the branch to **Tag from**, enter a **Description** (required since you are creating an annotated tag), and select **Create**.

   ![Select Create.](media/git-tags/create-tag.png)

3. The new tag is displayed in the tag list.

   ![View new tag](media/git-tags/tag-created.png)

### Create tags from the Commits view

To create a tag directly from the commits view, right-click the desired tag and choose **Create tag**.

![Create tag from the Commits view.](media/git-tags/create-tag-from-commit.png)

::: moniker-end

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

You can create both annotated and lightweight tags in Visual Studio from both the **Tags** view and the **History** view. To create an annotated tag, provide both a name and a message when creating the tag. To create a lightweight tag, omit the message and supply only a name.

### Create tags from the Tags view

1. Select **New Tag** in the **Tags** view to create a new tag.

   ![Create tag in Visual Studio.](media/git-tags/create-tag-button-vs.png)

2. To create a tag against the tip of the current branch, specify a name in the **Enter a tag name** box, optionally provide a tag message, and select **Create Tag**.

   ![Select Create Tag in Visual Studio.](media/git-tags/create-tag-current-branch-vs.png)

   To select the branch to create the tag from, clear the **Create tag against tip of current branch** check box, and select a branch from the **Select a branch** drop-down.

   ![Select a branch.](media/git-tags/create-tag-select-branch-vs.png)

3. The new tag is created locally. Right-click the new tag and choose **Push** to push it to the remote repo. Select **Push All** to push all new local tags to the remote repo.

   ![Push new tag](media/git-tags/tag-created-vs.png)

### Create tags from the History view

To create a tag directly from the history view, right-click the desired commit and choose **Create Tag**.

![Create tag from the History view, Visual Studio.](media/git-tags/create-tag-from-commit-vs.png)

---

## Delete tag

>[!IMPORTANT]
>Use caution when deleting tags from your repo. If the repo has been pulled, forked, or cloned by another user, the tag will still exist in their copy of the repo. You should only delete local tags, or if you are sure that the repo hasn't been pulled, cloned, or forked since you created your tag.

To delete a tag, you must have the [Force Push](../../organizations/security/permissions.md#git-repository-object-level) permission at the **Repository** level or the **All tags** level (which inherits its permissions from the repository level if not explicitly set). Force push permissions for a tag are also automatically inherited by the tag creator.

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

### Delete a tag in the remote repo

The steps in this procedure show you how to delete a tag in the remote repo using the Azure DevOps Services web portal.

1. To delete a tag, select the ellipsis to the right of the tag name and choose **Delete tag**.

   ![Delete tag](media/git-tags/delete-tag.png)

2. Select **Delete** to confirm.

   ![Select Delete.](media/git-tags/delete-tag-confirm.png)

3. The tag is deleted, and won't be displayed the next time you navigate to the **Tags** view.

   ![Tag deleted](media/git-tags/tag-deleted.png)

::: moniker-end

::: moniker range="tfs-2018"

### Delete a tag in the remote repo

The steps in this procedure show you how to delete a tag in the remote repo using the Azure DevOps Services web portal.

1. To delete a tag, select the ellipsis to the right of the tag name and choose **Delete tag**.

   ![Delete tag](media/git-tags/delete-tag.png)

2. Select **Delete** to confirm.

   ![Select Delete.](media/git-tags/delete-tag-confirm.png)

3. The tag is deleted, and won't be displayed the next time you navigate to the **Tags** view.

   ![Tag deleted](media/git-tags/tag-deleted.png)

::: moniker-end

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

The steps in this procedure show you how to delete a tag in the local repo using Visual Studio 2017 Update 6.

Right-click the tag to delete and choose **Delete Locally**

![Delete tag using Visual Studio 2017 Update 6.](media/git-tags/delete-tag-vs.png)

>[!IMPORTANT]
>If your tag has already been pushed to the remote repo, you should not delete it. If the repo has been pulled, forked, or cloned by another user, the tag will still exist in their copy of the repo. You should only delete local tags.

---

## Create branch from a tag

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. To create a branch from a tag, select the ellipsis to the right of the tag name and choose **New branch**.

   ![New branch from tag](media/git-tags/branch-from-tag.png)

2. Specify a **Name**, optionally select any **Work items to link**, and choose **Create branch**.

   ![Choose Create branch.](media/git-tags/branch-from-tag-create.png)

3. The branch is created and you are taken to the new branch in the web portal.

   ![Branch created.](media/git-tags/branch-from-tag-created.png)

::: moniker-end

::: moniker range="tfs-2018"

1. To create a branch from a tag, select the ellipsis to the right of the tag name and choose **New branch**.

   ![New branch from tag](media/git-tags/branch-from-tag.png)

2. Specify a **Name**, optionally select any **Work items to link**, and choose **Create branch**.

   ![Choose Create branch.](media/git-tags/branch-from-tag-create.png)

3. The branch is created and you are taken to the new branch in the web portal.

   ![Branch created.](media/git-tags/branch-from-tag-created.png)

::: moniker-end

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. To create a branch from a tag, right-click the tag and choose **New Local Branch From**. You can also choose **Create Branch From Tag**.

   ![New branch from tag, Visual Studio.](media/git-tags/branch-from-tag-vs.png)

2. Specify a branch name, verify the desired tag, and choose **Create Branch**. To checkout the new branch after it is created, choose **Checkout branch**.

   ![Choose Create Branch, Visual Studio.](media/git-tags/branch-from-tag-create-vs.png)

3. To view your newly created branch, select **Branches** from the **Home** view.

   ![View newly created branch.](media/git-tags/navigate-branches-pane.png)

4. Note that your new branch is created locally. To push the branch, right-click it and choose **Push Branch**.

   ![Push new branch from tag in Visual Studio.](media/git-tags/branch-from-tag-created.vs.png)

---

## View tag history

#### [Browser](#tab/browser)

::: moniker range=">= azure-devops-2019"

1. To view the history for a tag, select the ellipsis to the right of the tag name and choose **View history**.

   ![View tag history](media/git-tags/view-history.png)

2. You are taken to the commits view for the tag.

   ![Tag history](media/git-tags/commits-new-nav.png)

::: moniker-end

::: moniker range="tfs-2018"

1. To view the history for a tag, select the ellipsis to the right of the tag name and choose **View history**.

   ![View tag history](media/git-tags/view-history.png)

2. You are taken to the commits view for the tag.

   ![Tag history](media/git-tags/commits.png)

::: moniker-end

#### [Visual Studio](#tab/visual-studio)

[!INCLUDE [temp](includes/note-new-git-tool.md)]

1. To view the history for a tag, right-click the tag and choose **View History**.

   ![View tag history in Visual Studio.](media/git-tags/view-history-vs.png)

2. The history is displayed in the **History** view.

   ![Tag history in Visual Studio.](media/git-tags/commits-vs.png)

---
