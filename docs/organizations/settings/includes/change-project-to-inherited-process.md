---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 07/20/2020
---

<a id="change-inherited-process"></a>

## Apply the customized process to your project 

After you've verified your customizations, you can now apply the process to your existing project. 

> [!TIP]    
> As you customize a WIT, all projects that reference the inherited process that you're customizing automatically updates to reflect the custom WITs you've added. To view your customizations, refresh your web browser.

::: moniker range=">= azure-devops-2020"

1. For the process currently used by the project, choose the number of projects. 

	Here we open the menu for the Agile default process. 

	> [!div class="mx-imgBorder"]  
	> ![Agile process, Choose number of team projects](/azure/devops/organizations/settings/work/media/process/choose-process-team-projects.png) 

1. Open the &hellip; context menu for the project you want to change,  and choose the **Change process** option. 

	Here we open the menu for the MyFirstProject1. 

	> [!div class="mx-imgBorder"]  
	> ![Project, Change process](/azure/devops/organizations/settings/work/media/process/choose-change-process.png) 

1. From the Change the project process dialog, choose the process from the menu of options. And, then choose **Save**.

	> [!div class="mx-imgBorder"]  
	> ![Change process dialog](/azure/devops/organizations/settings/work/media/process/change-project-process-inherited-agile.png) 

::: moniker-end

::: moniker range="azure-devops-2019"

1. Open the &hellip; context menu for the process and choose the **Change team projects**&hellip; option. 

	Here we open the menu for the MyAgile inherited process. 

	> [!div class="mx-imgBorder"]  
	> ![Agile process context menu, Choose Change team projects to use MyAgile](/azure/devops/organizations/settings/work/media/process/add-custom-change-process.png) 

1. Check the check box of those projects you want to change to use the Agile process. The system lists only those projects that are valid for the current process.	

	Here we choose to use the Agile process for the Fabrikam Fiber A and Fabrikam Fiber projects.  Only those projects created from the Agile process or one that inherits from Agile appears under the Available projects column. 
  
	> [!div class="mx-imgBorder"]  
	> ![Change process to an inherited process dialog](/azure/devops/organizations/settings/work/media/process/customize-change-process-dialog.png) 

1. After  you've confirmed that the projects you want to change are correct, choose **Ok**. 

::: moniker-end

