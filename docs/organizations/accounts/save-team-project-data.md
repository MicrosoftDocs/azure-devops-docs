---
title: Save team project data for VSTS
description: Save team project data, like source code, custom build templates, build data, and work items, for Visual Studio Team Services (VSTS)
ms.assetid: b944f980-81c0-4100-b0d8-2fc575c65693
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/06/2017
monikerRange: 'vsts'
---
# Save team project data for VSTS

**VSTS**

When you delete a team project, you cannot recover its data later. Therefore, you should save team project data.

You can use the following procedures to save data that users most care about, such as source code, build data, and work items.

-   **Source code and custom build templates:** You can download your files as a zip file.

    ![context menu with download as zip menu item](_img/delete-team-project/ic760345.png)

    This process doesn't save any change history or links to other artifacts.

    If you use Git, [clone your repositories](../../git/gitquickstart.md) to retain the full project history and all the branches.

-   **Build data**: To save logs and data in your drop build folders, see [View build results](https://msdn.microsoft.com/library/ms181733.aspx).

-   **Work item tracking data:** Create a work item query and open it [using Excel](../../work/backlogs/office/bulk-add-modify-work-items-excel.md). Save the Excel spreadsheet.

    This process doesn't save any attachments, change history, or links to other artifacts.

If you have Team Foundation Server on-premises, you can easily save data stored for a team project collection 
by [making a backup of the database](/tfs/server/admin/backup/config-backup-sched-plan). You can also 
use the same steps as above.
