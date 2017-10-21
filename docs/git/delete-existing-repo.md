---
title: Delete a Git repo from your team project | VSTS & TFS
description: Remove an existing Git repo in VSTS or Team Foundation Server team project
ms.assetid: 271f8473-e77d-4a95-80d9-0bd347de7533
ms.prod: vs-devops-alm
ms.technology: vs-devops-git 
ms.manager: douge
ms.author: sdanie
ms.date: 12/15/2016
---

# Delete a Git repo from your team project
#### VSTS | TFS 2018 | TFS 2017 | TFS 2015

Remove unused Git repos from your team project when they are no longer needed. 

>[!TIP]
> Consider [renaming](repo-rename.md) the repo and [locking](lock-branches.md) its default branch instead of removing it. The [commit history](tutorial/history.md) of the repo will be lost when it is deleted.   

>[!IMPORTANT]
> You cannot remove a repo if it is the only Git repo in the Team Project. If you need to delete the only Git repo in a Team Project, [create a new Git repo](create-new-repo.md) first, then delete the repo.
>      
> You must have [Delete Repository permissions](../security/set-git-tfvc-repository-permissions.md#git-repository) to delete a repo from a team project. 

## Delete a Git repo from the web 

0. Select the settings icon in the web to bring up the team project administration page.

   ![open up the administrative area of the VSTS web portal for your team project](_img/pull-requests/gear_icon_settings.png)
   
0. Select **Version Control**.

0. Select the Git repository to remove from the list shown and select the **...** next to the name. Choose **Delete Repository**

   ![remove the VSTS repo using the ellipses link next to the repo name](_img/repo-mgmt/remove-repo.png)
   
0. Confirm the deletion of the repository by typing the repo's name and selecting **Delete**.

