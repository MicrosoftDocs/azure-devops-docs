---
title: Save project data - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Save project data, like source code, custom build templates, build data, and work items.
ms.assetid: b944f980-81c0-4100-b0d8-2fc575c65693
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/07/2018
monikerRange: '>= tfs-2013'
---

# Save project data

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]    

When you delete a project, you cannot recover its data later. Therefore, you should save project data.

You can use the following procedures to save data that users most care about, such as source code, build data, and work items.

* **Source code and custom build templates:** You can download your files as a zip file. Open the ![Repository actions](../../_img/icons/actions-icon.png) actions icon for the repository, file, or folder and choose **Download as Zip**. You can also choose the **Download** icon at the right side of the screen to download either all of the files in the currently selected folder, or the currently selected file.
	::: moniker range=">= tfs-2017"
	> [!div class="mx-imgBorder"]
	> ![Download code ](../public/_img/download-code/download-zip-file.png)
	::: moniker-end
	::: moniker range=">= tfs-2013 <= tfs-2015"
    ![context menu with download as zip menu item](_img/delete-project/ic760345.png)
	::: moniker-end
    This process doesn't save any change history or links to other artifacts.

    If you use Git, [clone your repositories](../../repos/git/gitquickstart.md) to retain the full project history and all the branches.

* **Build data**: To save logs and data in your drop build folders, see [View build results](https://msdn.microsoft.com/library/ms181733.aspx).

* **Work item tracking data:** Create a work item query and open it [using Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md). Save the Excel spreadsheet.

    This process doesn't save any attachments, change history, or links to other artifacts.

To learn more about how we manage and protect your data, read our [Data Protection Overview](../../organizations/security/data-protection.md).

::: moniker range=">= tfs-2013 <= tfs-2018"
You can easily save data stored for a project collection
by [making a backup of the database](/azure/devops/server/admin/backup/config-backup-sched-plan). You can also
use the same steps as above.
::: moniker-end