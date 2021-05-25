---
ms.prod: devops
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 04/16/2021
---





::: moniker range=">= azure-devops-2020"

## Link work items to a build in same or other projects  

You can link work items to existing builds from the **Add link** dialog. These builds can be within your project or to other projects in your organization or collection. 
::: moniker-end

::: moniker range="azure-devops-2020"
> [!NOTE]   
> This feature requires installation of Azure DevOps Server 2020.1 update. To learn more, see [Azure DevOps Server 2020 Update 1 RC1 Release Notes, Boards](/azure/devops/server/release-notes/azuredevops2020u1#customize-work-item-state-when-pull-request-is-merged).  
::: moniker-end


::: moniker range=">= azure-devops-2020"

1. From the **Links** tab of a work item, choose **Add link>Existing item**. 

1. From the **Add link** dialog, choose one of the build link types&mdash;**Build**, **Found in build**, **Integrated in build**&mdash; and specify the build number. 

	If you don't know the build number&mdash;a combination of the pipeline and build name&mdash;you can search for it by choosing the :::image type="icon" source="/azure/devops/media/icons/actions-icon.png" border="false"::: icon. 

	:::image type="content" source="/azure/devops/media/add-links/add-link-build.png" alt-text="Add link dialog with Build link type selected. ":::
 
1. From the **Link builds** dialog, choose the parameters to filter your search of builds. 

	If linking to a build in a different project, then first choose the **Project** whose build you want to link to.  

	For example, you can specify a build number, select a build pipeline, a build result&mdash;such as, **All**, **succeeded**, **partially succeeded**, **failed**, or **canceled**.  Or, with **All** selected for **Result**, choose **Find** to list the available builds to link to. 

	:::image type="content" source="/azure/devops/media/add-links/find-builds-dialog-filled-out.png" alt-text="Find builds dialog with project selected and builds listed. ":::

1. Choose the build from the list you want to link to and then choose **OK**. 
2. From the **Add link** dialog, choose **OK** to complete the operation.

	:::image type="content" source="/azure/devops/media/add-links/add-link-build-filled-in.png" alt-text="Add link dialog with Build number filled in. ":::

::: moniker-end


::: moniker range="azure-devops-2019"

## Link work items to a build  

You can link work items to existing builds from the **Add link** dialog. 

1. From the **Links** tab of a work item, choose **Add link>Existing item**. 

1. From the **Add link** dialog, choose one of the build link types&mdash;**Build**, **Found in build**, **Integrated in build**&mdash; and specify the build number. 

	If you don't know the build number&mdash;a combination of the pipeline and build name&mdash;you can search for it by choosing the :::image type="icon" source="/azure/devops/media/icons/actions-icon.png" border="false"::: icon. 

	:::image type="content" source="/azure/devops/media/add-links/add-link-build.png" alt-text="Add link dialog with Build link type selected. ":::
 
1. From the **Link builds** dialog, choose the parameters to filter your search of builds. 

	For example, you can specify a build number, select a build pipeline, a build result&mdash;such as, **All**, **succeeded**, **partially succeeded**, **failed**, or **canceled**.  Or, with **All** selected for **Result**, choose **Find** to list the available builds to link to. 

	:::image type="content" source="/azure/devops/boards/backlogs/media/add-link/find-builds-dialog-2020-and-previous-versions.png" alt-text="Find builds dialog, link to a build within your project.":::  

1. Choose the build from the list you want to link to and then choose **OK**. 
2. From the **Add link** dialog, choose **OK** to complete the operation.

	:::image type="content" source="/azure/devops/media/add-links/add-link-build-filled-in.png" alt-text="Add link dialog with Build number filled in. ":::

::: moniker-end

 