---
title: Delete, remove project
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Delete or remove a project from Azure DevOps or Team Foundation Server
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 12/19/2018
---

# Delete a project

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]    

You can delete a project from Azure DevOps. Deleting a project helps simplify the navigation to projects that are in use.

> [!Caution]
> Projects are permanently deleted, if not restored within 28 days. For more information on restoring projects, see [Restore a project](restore-project.md).

[!INCLUDE [temp](../../_shared/open-admin-organization-settings.md)]

## Delete project

> [!CAUTION]
> If you want to access project data while the project is deleted (without [restoring it](restore-project.md)) you should [save project data](save-project-data.md).

::: moniker range=">= tfs-2017"

1. Open the ![](../../_img/icons/actions-icon.png) actions icon menu for the project that you want to delete and choose **Delete**.

   > [!div class="mx-imgBorder"]
   > ![Choose Delete menu option](_img/delete-project/choose-delete-menu-option.png)

    If you don't see the actions icon ![actions icon image](../../_img/icons/actions-icon.png), either you're not accessing Azure DevOps or you're not a member of the Project Collection Administrators group. Learn about [joining the Project Collection Administrators group](../security/set-project-collection-level-permissions.md).

2. Enter the name of the project, and then select **Delete**.

   >[!div class="mx-imgBorder"]
   ![delete-team-project-dialog](_img/delete-project/delete-team-project-dialog.png)

::: moniker-end

::: moniker range="tfs-2015"

0. From the **Overview** tab, open the ![](../../_img/icons/context-menu.png) context icon menu for the project that you want to delete and choose **Delete**.

   If you don't see the ![](../../_img/icons/context-menu.png) context icon menu, you don't have the permissions to delete the project. Learn about [joining the Project Collection Administrators group](../security/set-project-collection-level-permissions.md).

0. You must enter the name of the project in order to initiate the delete operation.

   >[!div class="mx-imgBorder"]
   ![delete-team-project-dialog](_img/delete-project/delete-team-project-dialog.png)

Your project is deleted and can be restored up to 28 days afterward.

::: moniker-end

<a name="delete-team-proj"></a>

::: moniker range=">= tfs-2015 <= tfs-2018"

## Delete a project from TFS

Using the administration console, you can delete a project from a project collection. Afterwards, you'll need to manually delete any associated reports and SharePoint project portal. Or, you can use the [TFSDeleteProject command line tool](/azure/devops/server/ref/command-line/tfsdeleteproject-cmd) to delete all artifacts.

1. If you're not a member of one or more of the following administrator groups, [get permissions now](/azure/devops/server/admin/add-administrator-tfs):

    - Team Foundation Administrators group (required).

    - SQL Server System Administrators group (required).

    - Farm Administrators group for SharePoint Products (required when your deployment uses SharePoint Products).

2. Open the administration console for TFS and delete the project from its project collection.

    ![project collection delete button](_img/delete-project/ic686856.png)

3. Choose whether to delete external data associated with the project and then initiate the delete action.

    ![delete projects dialog](_img/delete-project/ic687180.png)

4. (Optional) To review the status of the delete action, open the **Status** tab.

    To review the details of the delete action, you can open the log file from either the **Status** tab or **Logs** tab.

::: moniker-end


::: moniker range=">= tfs-2015 <= tfs-2018"

## Delete reports that remain after deleting a project

If your on-premises project used reporting, and you didn't choose to delete external artifacts, you can delete the reports using SQL Server Report Manager. From the project collection page, delete the folder that corresponds to the deleted project.

![context menu with delete command](_img/delete-project/ic686857.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

## Remove the project portal

If your on-premises project had a project portal, all links to that portal are removed from TWA and Team Explorer, but the SharePoint site or website that acted as the portal is not deleted. If you want to delete the portal, you must do so manually after the project has been deleted. See [How to: Create, Edit, and Delete Windows SharePoint Services Sites](/previous-versions/visualstudio/visual-studio-2010/ms253110(v%3dvs.100)).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2018"

## What to do if the delete action doesn't finish

Review the status and log files for the delete action. Open the **Status** tab and for **Deleted**, review the additional information in parentheses, and take the indicated action.

- (**Processing**) means that the process has started and is in progress.

- (**Pending**) means that the deletion process has started from a client application. The deletion might be in progress or might have failed. Because the process was started from a client application, the server cannot accurately report the status of the deletion.

    If a project deletion remains pending for a long time, try to delete the project again from the administration console.

- (**Failed**) means that the deletion process started but did not successfully finish. The log file contains specific information about the failure.

    Review the information about the failure, and then try to delete the project again.

    If partial data remains, you can also use the [TFSDeleteProject](/azure/devops/server/command-line/tfsdeleteproject-cmd) command line tool.

::: moniker-end