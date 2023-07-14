---
title: Save project data - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Save project data, like source code, custom build templates, build data, and work items.
ms.assetid: b944f980-81c0-4100-b0d8-2fc575c65693
ms.subservice: azure-devops-projects
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.date: 12/07/2018
monikerRange: '<= azure-devops'
---

# Save project data

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you delete a project, you can't recover its data later. So, you should save project data.

You can use the following procedures to save data that users most care about, such as source code, build data, and work items.

* **Source code and custom build templates:** You can download your files as a zip file. Open ![Repository actions](../../media/icons/actions-icon.png) **actions** for the repository, file, or folder and choose **Download as Zip**. You can also **Download** from the right side of the screen to download either all of the files in the currently selected folder, or the currently selected file.

  > [!div class="mx-imgBorder"]
  > ![Download code ](media/public/download-zip-file.png)

  This process doesn't save any change history or links to other artifacts.

    If you use Git, [clone your repositories](../../repos/git/gitquickstart.md) to retain the full project history and all the branches.

* **Build data**: To save logs and data in your drop build folders, see [View build results](/previous-versions/ms181733(v=vs.140)).

* **Work item tracking data:** Create a work item query and open it [using Excel](../../boards/backlogs/office/bulk-add-modify-work-items-excel.md). Save the Excel spreadsheet.

    This process doesn't save any attachments, change history, or links to other artifacts.

To learn more about how we manage and protect your data, read our [Data Protection Overview](../../organizations/security/data-protection.md).

::: moniker range="tfs-2018"

You can easily save data stored for a project collection
by [making a backup of the database](/azure/devops/server/admin/backup/config-backup-sched-plan). You can also
use the previously mentioned steps.

::: moniker-end
