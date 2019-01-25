---
title: Give reviewers permission to provide feedback
titleSuffix: Azure DevOps Services & TFS  
description: Grant users access to provide feedback initiated from a team project in Azure DevOps Services & Team Foundation Server 
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.assetid: db5148e8-0dd2-4ddd-b563-d9b924356263  
ms.manager: jillfra
ms.author: kaelli
monikerRange: '>= tfs-2013'
ms.date: 08/15/2017
---

# Give reviewers permissions to provide feedback


[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You provide feedback to users that you plan to [request feedback](get-feedback.md) from. Reviewers who aren't members of your team require special permissions to provide feedback using the Microsoft Feedback Client. 

## Add reviewers to your team project

1.	From the web portal of your team project home page, open the administration context.  

	![Open the administration page](_img/ALM_CAL_OpenAdminPage.png)  

	If you aren't a member of the **Project Administrators** or **Team Foundation Administrators** group, get added. See [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md). You'll need to be a member in order to add users and groups to a team project, change permissions, and grant them access to the web portal.

2. Create a group for your reviewers.

	![Create a VSO or TFS Group link on Security admin page ](_img/ALM_GP_CreateTFSGroup.png)

	><b>Tip: </b> If you have a lot of reviewers, creating a Windows, VSO, or TFS group helps you manage permissions more efficiently.
 	
3. Name your group.  

	![Create the Reviewers TFS group ](_img/ALM_GP_NameGroup.png)  
	
4. Add accounts to your group.  

	![Open dialog to add members to TFS Group ](_img/ALM_GP_AddAccounts.png)  
	
	![Account names in Add a window or user group](_img/ALM_GP_AddUser.png)  

## Set permissions so reviewers can provide feedback

Allow reviewers to **Create test runs**, **View project-level information**, and **View test runs**.

![Permissions view, Reviewers group on Security page ](_img/ALM_GP_SetPermsProvide.png)

## Set permissions so reviewers can modify work items

Since feedback is captured in a feedback response work item, reviewers need to be able to modify work items in the product areas they will review.

1. Open security for the team project.

	![Security link on Area path context menu ](_img/ALM_GP_SetPermsModify_Open.png)

2. Add the reviews group to the **VSO Groups** or **TFS Groups**. 

	![Add a group to the list of TFS Groups ](_img/ALM_GP_SetPermsModify_Add.png)

3. Allow reviewers to Edit work items in this node and View work items in this node. 

	![Allow reviewers to view and modify work items ](_img/ALM_GP_SetPermsModify_Edit.png)

## If you want, allow reviewers the ability to modify their feedback submissions

Sometimes additional ideas occur after reviewers submit their feedback. By providing access to the web portal, reviewers can revisit and further annotate their feedback submissions. 

- **Azure DevOps Services:**  [Assign the **Stakeholder** license to accounts](../../organizations/accounts/add-organization-users.md) that you add to your Reviewer group   
- **On-premises TFS:**  [Add your Reviewer group to the **Stakeholder** group on the **access levels** page](../../organizations/security/change-access-levels.md). If you don't see this tab, get administrative permissions. 

![Add reviewers to the Limited group](_img/ALM_GP_ModifyFeedback.png)
 
Your reviewers will be able to view and modify only those work items that they create, which includes feedback responses. The [Stakeholder group provides limited access](../../organizations/security/get-started-stakeholder.md) to features and data for those members of your organization who do not have a TFS client access license (CAL). 


## Related articles

- [Initiate a feedback request](get-feedback.md)  
- [Respond to a feedback request](give-feedback.md)  
- [Work as a stakeholder](../../organizations/security/get-started-stakeholder.md) 



