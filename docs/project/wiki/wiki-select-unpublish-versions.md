---
title: Publish new wiki version, select version, or un-publish a wiki in Azure DevOps
titleSuffix: Azure DevOps  
description: Publish or un-publish files in a Git code repository to a wiki in Azure DevOps 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: douge
ms.author: chcomley
ms.reviewer: sancha
author: chcomley
monikerRange: '>= azdevserver-2019'
ms.date: 12/14/2018  
---

# Version, select, or un-publish a published wiki

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

When you publish a Git repository to a wiki, you can publish new branch versions of the repo, select a version to view, or un-publish the repo.


## Publish a new wiki version

When your published wiki corresponds to a product version, you can publish new versions as you release new versions of your product. To create a new version, create a new branch of your repo, and then make updates to that new branch.

[!INCLUDE [temp](../../_shared/new-navigation-azdevops.md)]  

# [New navigation](#tab/new-nav)

1. To create a new branch from the web portal, open **Repos>Branches**, open the ![ ](../../_img/icons/actions-icon.png) actions icon for the branch you have previously published, and choose **New branch**. 

	> [!div class="mx-imgBorder"]  
	> ![Create a new branch](_img/wiki/publish-wiki-create-branch-vert.png)

0. To Publish the new branch to a wiki, open the **Wiki** page for the currently published branch, open the ![ ](../../_img/icons/actions-icon.png) actions icon, and choose **Publish new version**.

	> [!div class="mx-imgBorder"]  
	> ![Publish new version menu option](_img/wiki/publish-new-version-option.png)

0. Fill out the form, choosing the branch that you previously created.  

	> [!div class="mx-imgBorder"]  
	> ![Publish new version dialog box](_img/wiki/publish-new-version.png)

0. Choose **Update**.


# [Previous navigation](#tab/previous-nav)

::: moniker range="vsts"  

0. To create a new branch from the web portal, open the **Code>Branches** page, open the ![ ](../../_img/icons/actions-icon.png) actions icon for the branch you have previously published, and choose **New branch**.

	> [!div class="mx-imgBorder"]  
	> ![Create a new branch](_img/wiki/publish-wiki-create-branch.png)

0. To Publish the new branch to a wiki, open the **Wiki** page for the currently published branch, open the ![ ](../../_img/icons/actions-icon.png) actions icon, and choose **Publish new version**.

	> [!div class="mx-imgBorder"]  
	> ![Publish new version menu option](_img/wiki/publish-new-version-option.png)

0. Fill out the form, choosing the branch that you previously created.  

	> [!div class="mx-imgBorder"]  
	> ![Publish new version dialog box](_img/wiki/publish-new-version.png)

0. Choose **Update**.

::: moniker-end  

::: moniker range="azdevserver-2019"
[!INCLUDE [temp](../../_shared/previous-navigation-not-supported-azd.md)] 
::: moniker-end

---

## Select a wiki version

To select a wiki version, choose the version from the branch options from the **Wiki** page.

> [!div class="mx-imgBorder"]  
> ![Select wiki version](_img/wiki/publish-wiki-select-version.png)

## Un-publish a published wiki

If you no longer want a repository to be published as a wiki, you can choose to un-publish it from **Wiki**. Un-publishing a wiki un-publishes all versions of the repository that you have published previously. 

1. Simply select the wiki you want to un-publish, pen the context menu, and select **Unpublish wiki**.

	> [!div class="mx-imgBorder"]  
	> ![Unpublish a wiki confirm dialog](_img/wiki/unpublish-wiki-code-option.png)

0. Confirm that you want to un-publish the wiki by choosing **Unpublish**.  

	> [!div class="mx-imgBorder"]  
	> ![Select wiki version](_img/wiki/unpublish-wiki.png)


## Related articles

- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)


