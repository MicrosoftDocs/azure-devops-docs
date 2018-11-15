---
title: Delete or remove a project in Azure DevOps
titleSuffix: Azure DevOps & TFS
description: Learn how to delete or remove a project from Azure DevOps Services or from Team Foundation Server (TFS)
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 11/14/2018
---

# Delete a project in Azure DevOps

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]  

If you find that you have a project you no longer use, you can delete it. Deleting a project helps simplify the navigation to projects that are in use. You can delete a project from Azure DevOps Services or from an on-premises deployment of Team Foundation Server (TFS).

[!INCLUDE [temp](../../_shared/new-navigation.md)] 

[!INCLUDE [temp](../../_shared/open-admin-organization-settings.md)] 

## Choose to delete a project 

> [!Caution]
> Deleting a project permanently removes data associated with that project from the database. You cannot recover it later. Therefore, you should [save project data](save-project-data.md) that you might want to access later.

::: moniker range=">= tfs-2017"
0. Open the ![](../../_img/icons/actions-icon.png) actions icon menu for the project that you want to delete and choose **Delete**.

	> [!div class="mx-imgBorder"]  
	> ![Choose Delete menu option](_img/delete-project/choose-delete-menu-option.png)

    If you don't see the actions icon ![actions icon image](../../_img/icons/actions-icon.png), either you're not accessing Azure DevOps Services or you're not a member of the Project Collection Administrators group. Learn about [joining the Project Collection Administrators group](../security/set-project-collection-level-permissions.md).

0. You must type the name of the project in order to initiate the delete operation. 

   >[!div class="mx-imgBorder"]
   ![delete-team-project-dialog](_img/delete-project/delete-team-project-dialog.png)

::: moniker-end  


::: moniker range="tfs-2015"
0. From the **Overview** tab, open the ![](../../_img/icons/context-menu.png) context icon menu for the project that you want to delete and choose **Delete**.

    If you don't see the ![](../../_img/icons/context-menu.png) context icon menu, you don't have the permissions to delete the project. Learn about [joining the Project Collection Administrators group](../security/set-project-collection-level-permissions.md).

0. You must type the name of the project in order to initiate the delete operation. 

   >[!div class="mx-imgBorder"]
   ![delete-team-project-dialog](_img/delete-project/delete-team-project-dialog.png)

::: moniker-end  

<a name="delete-team-proj"></a>

::: moniker range=">= tfs-2015 <= tfs-2018"

## Delete a project from the Team Foundation Server Administration console

Using the administration console, you can delete a project from a project collection. Afterwards, you'll need to manually delete any associated reports and SharePoint project portal. Or, you can use the [TFSDeleteProject command line tool](/tfs/server/ref/command-line/tfsdeleteproject-cmd) to delete all artifacts.

1.  If you're not a member of one or more of the following administrator groups, [get those permissions now](/tfs/server/admin/add-administrator-tfs):

    -   Team Foundation Administrators group (required).

    -   SQL Server System Administrators group (required).

    -   Farm Administrators group for SharePoint Products (required when your deployment uses SharePoint Products).

2.  Open the administration console for TFS and delete the project from its project collection.

    ![project collection delete button](_img/delete-project/ic686856.png)

3.  Choose whether to delete external data associated with the project and then initiate the delete action.

    ![delete projects dialog](_img/delete-project/ic687180.png)

4.  (Optional) To review the status of the delete action, open the **Status** tab.

    To review the details of the delete action, you can open the log file from either the **Status** tab or **Logs** tab.

::: moniker-end


::: moniker range=">= tfs-2015 <= tfs-2018"

## Delete reports that remain after deleting a project

If your on-premises project used reporting, and you didn't choose to delete external artifacts, you can delete the reports using SQL Server Report Manager. From the project collection page, delete the folder that corresponds to the deleted project.

![context menu with delete command](_img/delete-project/ic686857.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

## Remove the project portal

If your on-premises project had a project portal, all links to that portal will be removed from TWA and Team Explorer, but the SharePoint site or website that acted as the portal will not be deleted. If you want to delete the portal, you must do so manually after the project has been deleted. See [How to: Create, Edit, and Delete Windows SharePoint Services Sites](/previous-versions/visualstudio/visual-studio-2010/ms253110(v%3dvs.100)).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

## What to do if the delete action doesn't finish

Review the status and log files for the delete action. Open the **Status** tab and for **Deleted**, review the additional information in parentheses, and take the indicated action.

-   (**Processing**) means that the process has started and is in progress.

-   (**Pending**) means that the deletion process has started from a client application. The deletion might be in progress or might have failed. Because the process was started from a client application, the server cannot accurately report the status of the deletion.

    If a project deletion remains pending for a long time, try to delete the project again from the administration console.

-   (**Failed**) means that the deletion process started but did not successfully finish. The log file will contain specific information about the failure.

    Review the information about the failure, and then try to delete the project again.

    If partial data remains, you can also use the [TFSDeleteProject](/tfs/server/command-line/tfsdeleteproject-cmd) command line tool.

::: moniker-end