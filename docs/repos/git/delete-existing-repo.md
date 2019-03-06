---
title: Delete a Git repo from your project
titleSuffix: Azure Repos
description: Remove an existing Git repo in an Azure DevOps Services or Team Foundation Server project
ms.assetid: 271f8473-e77d-4a95-80d9-0bd347de7533
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 11/02/2018
monikerRange: '>= tfs-2015'
---

# Delete a Git repo from your project
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015

Remove unused Git repos from your project when they are no longer needed. 

>[!TIP]
> Consider [renaming](repo-rename.md) the repo and [locking](lock-branches.md) its default branch instead of removing it. The [commit history](review-history.md) of the repo will be lost when it is deleted.


>[!IMPORTANT]
> You cannot remove a repo if it is the only Git repo in the Project. If you need to delete the only Git repo in a Project, [create a new Git repo](create-new-repo.md) first, then delete the repo.
>      
> You must have [Delete Repository permissions](../../organizations/security/set-git-tfvc-repository-permissions.md#git-repository) to delete a repo from a project. 


>[!NOTE]
>The steps in this article show how to delete a Git repo from your project. If you want to delete the entire project, see [Delete a project](../../organizations/projects/delete-project.md).

## Delete a Git repo from the web 

::: moniker range=">= azure-devops-2019"

1. Select **Repos**, **Files**.

  ![View your branches](_img/repos-navigation/repos-files.png)

1. From the repo drop-down, select **Manage repositories**.

  ![Manage repositories](_img/repo-mgmt/manage-repositories.png)

1. Select the name of the repository from the **Repositories** list, choose the **...** menu, and then choose **Delete repository**.

  ![Delete repository](_img/repo-mgmt/delete-repository.png)

1. Confirm the deletion of the repository by typing the repo's name and selecting **Delete**.

  ![Delete repository confirm](_img/repo-mgmt/delete-repository-confirm.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Select the settings icon in the web to bring up the project administration page and choose **Version Control**.

   ![Version control settings](_img/repo-mgmt/version-control-settings.png)

1. Select the Git repository to remove from the list shown and select the **...** next to the name. Choose **Delete Repository**.

   ![remove the Azure DevOps Services repo using the ellipses link next to the repo name](_img/repo-mgmt/remove-repo.png)

   >[!NOTE]
   >If the **Repositories** pane is not expanded, select **>** to expand it and display the list of repositories.
   >
   >![Repositories pane](_img/repo-mgmt/expand-repositories-pane.png)

1. Confirm the deletion of the repository by typing the repo's name and selecting **Delete**.

  ![Delete repository confirm](_img/repo-mgmt/delete-repository-confirm.png)

::: moniker-end
