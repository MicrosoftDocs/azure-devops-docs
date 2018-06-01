---
title: Upgrade a Hosted XML process to an inherited process
titleSuffix: VSTS     
description: Upgrade a Hosted XML process model to an inherited process in Visual Studio Team Services
ms.technology: devops-agile
ms.prod: devops
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: 'vsts'
robots: NOINDEX, NOFOLLOW
ms.date: 05/30/2018
---

# Upgrade a Hosted XML process to an Inheritance process   

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

Upgrading your Hosted XML process to the Inheritance process model allows you to manage customizations through the user interface versus XML definition files. The inherited process supports the set of customizations described here [About process customization and inherited processes](inheritance-process-model.md). 

Before you upgrade a Hosted XML process, we recommend that you review [Supported upgrade operations when moving from Hosted XML process to inherited process](upgrade-support-hosted-to-inherited.md). 
 

## Prerequisites

- Your account currently uses the Hosted XML process model 
- You must be a member of the Project Collection Administrators group, the organization owner, or be granted explicit permissions to edit, create, or manage a specific process and to create a project. 


## Sequence of upgrade steps

The general sequence of steps to support upgrade are:  
0. Open the **Settings>Process** hub 
0. Choose the Hosted XML process you want to upgrade and select **Upgrade  to inheritance** from its context menu
0. Verify the customizations that are present in the inherited process created as part of the upgrade 
0. Manually reapply customizations that were ignored during upgrade  
0. Create a test project to verify customizations. 

[!INCLUDE [temp](../_shared/open-process-admin-context-ts.md)]


## Upgrade a Hosted XML process to an Inheritance process 

0. Open the &hellip; context menu for the Hosted XML process and choose the **Upgrade to inheritance** option. 

	Here we open the menu for the Design Agile Process. 

	> [!div class="mx-imgBorder"]  
	> ![Agile process context menu, Choose Upgrade to inheritance](_img/migration/upgrade-to-inherited-option-menu.png) 

0. Review the information provided in the dialog that opens and then choose **Continue**.  

0. In the next dialog, you can change the name of the inherited process to be created and optionally change the parent process and provide a description.   

	> [!IMPORTANT]  
	> The system performs a best effort to detect the correct parent process. Verify that the process selected meets your expectations, or change it as needed. Once you've completed the upgrade, you can't upgrade it a second time based on a different system process. 

0. After  you've confirmed that the information is correct, choose **Save**. 

[!INCLUDE [temp](../_shared/post-upgrade-steps.md)]

<a id="verify">  </a>
## Verify the customization you made 

We recommend that you create a test project based on the inherited process created in the previous step to verify the customizations preserved and any additional changes you make to it. 

0. Open the **All processes** page, and choose the &hellip; context menu for the process you want to use, and then select **New team project**.  

	> [!div class="mx-imgBorder"]  
	> ![Create a team project from the selected process](_img/process/add-new-team-project.png) 

0. The Create new project page opens. Fill out the form. 

	> [!div class="mx-imgBorder"]  
	> ![Create new project form](_img/process/create-test-project.png) 

0. Open the **Work>Work Items** page (user context) and choose **New Work Item** and select a WIT that you have previously customized. Here we choose **Bug**. 

	> [!div class="mx-imgBorder"]  
	> ![Work, Work Items Page, Add New Work Item, Bug](_img/process/add-custom-field-verify-bug.png) 

0.  Verify that the field(s) you added appear on the form. Note that the ![](../../../_img/icons/required-icon.png) (exclamation mark) icon indicates the field is required.  


## Try this next
> [!div class="nextstepaction"]
> [Change a project from a Hosted XML process to Inheritance](change-process-from-hosted-to-inherited.md) 

