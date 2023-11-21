---
title: Publish or unpublish a wiki
titleSuffix: Azure DevOps  
description: Publish a Git code repository to a wiki or unpublish a wiki in Azure DevOps. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: how-to
ms.assetid:
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 11/21/2023  
---

# Publish or unpublish a wiki

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

In this article, learn how to publish a code wiki branch and unpublish an entire wiki. Unpublishing a wiki branch isn't supported. 

## Publish a new wiki branch

If your published wiki corresponds to a product version, you can publish new branches as you release new versions of your product. To create a new version, create a new branch of your repo, and then make updates to that new branch, by doing the following steps.

1. Sign in to your Azure DevOps project and select **Repos** > **Branches**, > :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **Actions** for the branch you previously published, and then **+ New branch**.

    :::image type="content" source="../wiki/media/wiki/add-new-branch.png" alt-text="Screenshot of sequence of buttons to select to create a new branch.":::

2. To publish the new branch to a wiki, open the **wiki** page for the currently published branch, open the branch picker, and then select **Publish new branch**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of the Publish new version menu option.](media/wiki/publish-new-version-option.png)

3. Complete the form, choosing the branch that you previously created.  

    :::image type="content" source="../wiki/media/wiki/publish-new-version-of-wiki.png" alt-text="Screenshot showing the publish new version dialog.":::

4. Select **Publish**.

## Unpublish a published wiki

If you no longer want a repository to be published as a wiki, you can choose to unpublish it.

> [!WARNING]
> Unpublishing a wiki unpublishes the entire code wiki, which includes all versions of the repository that you have published previously.

1. Select the wiki you want to unpublish, open the context menu, and select **Unpublish wiki**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Unpublish a wiki confirmation dialog.](media/wiki/unpublish-wiki-code-option.png)

1. Confirm that you want to unpublish the wiki by choosing **Unpublish**.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Selecting a wiki version.](media/wiki/unpublish-wiki.png)

## Related articles

- [Provisioned wiki vs. publish code as wiki](provisioned-vs-published-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
