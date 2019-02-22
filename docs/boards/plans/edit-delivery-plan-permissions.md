---
title: Edit or manage Delivery Plan permissions
titleSuffix: Azure Boards
description: Edit or change permissions for a delivery plan    
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2017'
ms.date: 12/19/2018
---

# Edit or manage Delivery Plan permissions 

[!INCLUDE [temp](../_shared/version-vsts-tfs-2017-on.md)]

<a id="configure-plan-permissions">  </a>
<a id="plan-permissions">  </a>


You can control who has access to a Delivery Plan by setting it's permissions. You can grant or restrict access to users and groups to delete, edit, view, or  manage permissions of delivery plans. 

By default all members of an organization or project collection can view Delivery Plans, except users with Stakeholder access for private projects. The plan creator, as well as project and collection administrators, can edit or delete a plan, or change the plan's permissions. To learn more about Delivery Plans, see [Review team delivery plans](../../boards/plans/review-team-plans.md).  

::: moniker range="tfs-2017"
> [!NOTE]  
> **Feature availability**: Delivery plans are available for TFS 2017.2 and later versions, you can access plans by installing the [Delivery Plans Marketplace extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-plans).
::: moniker-end  

## Prerequisites
- In order to edit the permissions for a Delivery Plan, you must be the creator of the plan, a member of the Project Administrators or Project Collection Administrators group, or granted explicit permission through the plan's Security dialog. 
- Even if you grant view permissions to a user who has Stakeholder access for a public project, they won't be able to view the plan. 

::: moniker range=">= azure-devops-2019"

## Edit permissions for a delivery plan

0. Open **Boards>Plans**. For details, see [Review team delivery plans](../../boards/plans/review-team-plans.md).  

0. To grant permissions to a group or user to manage or edit a specific plan, choose the ![ ](../../_img/icons/actions-icon.png) actions icon to open the **Security** dialog for the plan.  

	> [!div class="mx-imgBorder"]  
	> ![Open the Permissions dialog for a plan](_img/permissions/open-plans-security.png)     

0. Add a user, team group, or other security group who you want to grant permissions to or restrict access. (For details, see [Set permissions at the project- or collection-level](../../organizations/security/set-project-collection-level-permissions.md)). By default, non-administrators can't delete or edit a plan. 

0. With the user or group selected, set the permission you want them to have to **Allow**. **Manage** set to **Allow** enables the user to manage permissions for the plan.

	For example, here we grant permission to Raisa to edit the plan.

	> [!div class="mx-imgBorder"]  
	> ![Permissions dialog for a delivery plan](_img/permissions/permissions-plans-dialog.png)

0. Choose **Save changes** when done. 


::: moniker-end 


::: moniker range=">= tfs-2017 <= tfs-2018"  
0. Open **Work>Plans**. For details, see [Review team delivery plans](../../boards/plans/review-team-plans.md).  

0. To grant permissions to a group or user to manage or edit a specific plan, choose the ![ ](../../_img/icons/actions-icon.png) actions icon to open the **Security** dialog for the plan.  

	> [!div class="mx-imgBorder"]  
	> ![Open the Permissions dialog for a plan](_img/permissions/open-plans-security.png)     

0. Add a user, team group, or other security group who you want to grant permissions to or restrict access. (For details, see [Set permissions at the project- or collection-level](../../organizations/security/set-project-collection-level-permissions.md)). By default, non-administrators can't delete or edit a plan. 

0. With the user or group selected, set the permission you want them to have to **Allow**. 

	For example, here we grant permission to Raisa to edit the plan.

	> [!div class="mx-imgBorder"]  
	> ![Permissions dialog for a delivery plan](_img/permissions/permissions-plans-dialog.png)

0. Choose **Save changes** when done. 

::: moniker-end  


## Related articles

- [Review team delivery plans](review-team-plans.md)  
- [About permissions and groups](../../organizations/security/about-permissions.md)
- [About access levels](../../organizations/security/access-levels.md)

