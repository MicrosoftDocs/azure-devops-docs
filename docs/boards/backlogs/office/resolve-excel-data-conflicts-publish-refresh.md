---
title: Resolve data conflicts when you publish from Microsoft Excel
titleSuffix: Azure Boards
description: Learn how to resolve data conflicts when publishing a work item from Excel to Azure Boards.
ms.service: azure-devops-boards
ms.assetid: d43d6f68-bcef-42af-857c-50c2ff6ea79b
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 10/08/2021
---

# Resolve data conflicts when you publish or refresh Excel data

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

A data conflict occurs when you try to publish a work item from [Excel](bulk-add-modify-work-items-excel.md) and the version of that work item differs from the version in the work item database. The following example shows how two team members can create such a conflict.  
  
1.  A team member opens a copy of a work item in a work item list in Excel or Project.  
  
2.  Team member A edits the work item and makes one set of changes.  
  
3.  Team member B edits that same work item and makes a different set of changes, and publishes those changes.  
  
4.  Team member A finishes editing the work item and tries to publish the changes to the work item.  
  
5.  Excel or Project displays the **Work Item Publishing Errors** dialog box, which shows items that it couldn't publish.  
  
### To resolve a data conflict  
  
1.  In the **Work Item Publishing Errors** dialog box, for each work item in the **Unpublished work items** box that has **Conflict** in the **Issue** column, follow these steps.  
  
    1.  In the **Unpublished work items** box, select the work item.  
  
         The **Details** area shows a list of conflicts for the selected work item. The **Conflicting field** column shows the name of the field in which the conflict occurs. The **Local version** and **Server version** columns show the local and server data, respectively, and a check box appears next to the data in each of these columns.  
  
    2.  For each row in the **Details** box, select the check box next to the correct value.  
  
         When you select the local version, the data in Office Excel or Office Project overwrites the data on the server. If you select the server version, the server data overwrites the data in Office Excel or Office Project.  
  
2.  Select **Publish**.  
  
    > [!NOTE]  
    >  This step publishes only the work items that you corrected. If you do not resolve all data validation errors related to a work item, that work item is not published.  
  
## Related articles
-  [Resolve invalid links](resolve-excel-invalid-links-tree-list.md)   
-  [Resolve data validation errors](resolve-excel-data-validation-errors.md)   
-  Connect Azure Boards to an Office client](track-work.md)  


### Required permissions  
  
To update work items, you must be a member of the **Contributors** group or have your **View work items in this node** and your **Edit work items in this node** permissions set to **Allow**. For more information, see [Change project-level permissions](../../../organizations/security/change-project-level-permissions.md). 