---
title: Connect MTM to a project and plan
description: Manual and exploratory testing - Connect Microsoft Test Manager to your project and test plan when you want to test web applications
ms.assetid: 4a2c7eb1-c65d-4fd9-bb19-f733164752c1
ms.prod: devops
ms.technology: devops-test
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Connect Microsoft Test Manager to your project and test plan

[!INCLUDE [version-inc-vs](../_shared/version-inc-vs.md)]

>[!NOTE]
>[!INCLUDE [mtm-deprecate-message](../_shared/mtm-deprecate-message.md)]


Use Microsoft Test Manager to help you test the application you built. Microsoft Test Manager stores your test plans and results in Azure DevOps or Team Foundation Server (TFS).  

[!INCLUDE [feature-availability](../_shared/feature-availability.md)] 
  
### Connect Microsoft Test Manager to your project and test plan  
  
1. If you don't have Microsoft Test Manager, download and install [Visual Studio Enterprise](https://visualstudio.microsoft.com/downloads/) or [Visual Studio Test Professional](https://visualstudio.microsoft.com/vs/test-professional/).  
  
   Don't have a project? [Set up a project](../../organizations/projects/create-project.md)  
  
1. Connect to your Azure DevOps or TFS instance and choose your project.  
  
   ![Enter the name of a Team Foundation server.](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/almt_connect1.png)  
  
   ![Expand the server name and choose a project.](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/almt_connect2.png) 
   
   If you don't see your project, choose **Add server** and enter the URL of your Azure DevOps or TFS server. 
  
1. Create a new test plan, unless there's already a plan you want to use. Typically, you create a separate test plan for each sprint.  
  
   ![Add a new test plan.](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/almt_connect4.png)  
  
1. Select a plan.  
  
   ![Select an existing plan, or choose Add.](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/almt_connect3.png)  
  
If you want to connect to a different project or test plan later, choose **Home**. ![Home button in Microsoft Test Manager](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/mtm_homeicon.png)  
  
Signed in with the wrong user name? Choose **Home**&nbsp; ![Home button in Microsoft Test Manager](_img/connect-microsoft-test-manager-to-your-team-project-and-test-plan/mtm_homeicon.png), **Change project**, **Sign out**.  
  
## Try this next 
 
[Exploratory testing](exploratory-testing-using-microsoft-test-manager.md)  
  
[Plan manual tests with Microsoft Test Manager](plan-manual-tests-with-microsoft-test-manager.md)

[!INCLUDE [help-and-support-footer](../_shared/help-and-support-footer.md)] 
