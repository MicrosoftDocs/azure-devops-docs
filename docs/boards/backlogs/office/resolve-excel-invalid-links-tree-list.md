---
title: Resolve invalid links when publishing to Azure Boards
titleSuffix: Azure Boards
description: Learn how to resolve invalid link error messages that occur when publishing an Excel tree list to Azure Boards.
ms.service: azure-devops-boards
ms.assetid: f2250e37-5150-4546-81b8-4ec8023046c2
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 10/08/2021
---

# Resolve invalid links in an Excel tree list in Azure Boards

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

If you try to publish a tree list that contains an invalid link, the **Work Item Publishing Errors** dialog box appears and displays an error message that states why the tree is invalid. When you work with work items in a tree in Excel, the tree must be in a valid state before it can be published. In Excel, an invalid link occurs in a tree list of work items. It occurs if the title of a work item title is missing or occurs in the wrong title column.  
  
You can resolve most errors using the procedures provided in this article.  

## Prerequisites  
  
To update work items, you must be a member of the **Contributors** group or have your **View work items in this node** and your **Edit work items in this node** permissions set to **Allow**. For more information, see [Change project-level permissions](../../../organizations/security/change-project-level-permissions.md).

<a name="tf208000"></a>

## Error message TF208000: Duplicate titles  

If you add a value to multiple Title columns of a work item, when you try to publish the tree, the error message **TF208000** appears in the **Work Item Publishing Errors** dialog box. The error message specifies the row number of the invalid link.  
  
1.  Note the row number that appears in the dialog box.  
  
2.  Close the **Work Item Publishing Errors** dialog box.  
  
3.  In the work item list, find the row that the error message specified.  
  
4.  Delete the duplicate title or titles so that only one title column has a value.  
  
5.  On the **Team** tab, in the **Work Items** group, choose **Publish**.  
 
<a name="TF208001"></a> 
 
## Error message TF208001: Child work item disconnected from parent  

If you remove the title of a child work item, when you try to publish the work item list the error message **TF208001** appears in the **Work Item Publishing Errors** dialog box. The error message specifies the row number of the invalid link. This error message also appears if you create an invalid link structure by putting the title of a child work item into the wrong column.  
  
> [!NOTE]  
>  If you put a title in the wrong column, the resulting tree structure might be valid but not match your intent. The system cannot detect this problem, therefore, an error message does not appear.  
  
#### To resolve an orphaned work item  
  
1.  Note the row number that appears in the dialog box.  
  
2.  Close the **Work Item Publishing Errors** dialog box.  
  
3.  Find the row that the error message specified.  
  
    > [!NOTE]  
    >  The misplaced title might be in this row, or it might be in the next row.  
  
4.  Move the title to the correct column to fix the invalid link.  
  
5.  On the **Team** tab, in the **Work Items** group, choose **Publish**.  
  
<a name="tf208017"></a> 

##  Error message TF208017: Missing Title 1 in the first row  

If the first work item in the list has no value in the **Title 1** column, the error message **TF208017** appears in the **Work Item Publishing Errors** dialog box when you try to publish the work item list.  
 
  
1.  Close the **Work Item Publishing Errors** dialog box.  
  
2.  Determine why the first work item lacks a **Title 1** value.  
  
     The analysis of the cause of the error determines what you must do to repair the work item list.  
  
    1.  If the first work item should be at the top of the list, move its title value into the **Title 1** column.  
  
    2.  If the first work item should be lower in the list, move the correct work item to the top of the list.  
  
         For more information about how to move work items, see [Bulk add work items with Excel](./bulk-add-modify-work-items-excel.md).  
  
3.  On the **Team** tab, in the **Work Items** group, choose **Publish**.  
  
<a name="tf208022"></a> 

##  Error message TF208022: Sorted tree list  

If you haven't installed Service Pack 1 for Visual Studio 2010 or later version, the following error message appears when you choose **Publish** after you've sorted the work items in a tree list:  
  
>TF208022: Cannot publish a sorted tree list. Before you can publish, you must clear any sort criteria applied to this work item list. Be aware that the order of work items has changed. Removing sort criteria will not return the list to its original order. Verify that all of the parent-child relationships in the tree are correct before you publish.   
  
You can't publish your changes until you re-establish the tree hierarchy. You can resolve this error either by discarding your changes and refreshing the list or by manually restoring the hierarchy and then publishing the list.  
  
### To resolve sorted tree list issues  
  
-   Choose **Refresh** to discard your changes and restore the tree hierarchy.  
  
    > [!NOTE]
    >  If you refresh the tree list, you remove all your changes other than the sort. To refresh the tree list, on the **Team** tab, in the **Work Items** group, choose **Refresh**.  
  
-   Manually restore the tree hierarchy by moving the row entries of child items under their parent items. Then, on the **Team** tab, in the **Work Items** group, choose **Publish**.  
  
<a name="tf208102"></a> 

## Error message TF208102: Excel sort on a tree list  

The following error message appears if you sort the work items in a tree list in Excel:  
  
>TF208102: You have performed an Excel sort on a tree list. This action removed the modified or newly introduced hierarchical link relationships of the tree.
>
> You can still publish the changes you have made to individual work items. After you publish, the list will restore to previous hierarchy.
>
>In general, you should not sort a tree list whose hierarchy has been modified.|
  

This message indicates that you can publish the changes that you made to the fields, but all changes that you made to the link hierarchy have been discarded. The tree hierarchy automatically reverts to its original structure.  
  
### To publish changes and retrieve the tree hierarchy  
  
1.  On the **Team** tab, in the **Work Items** group, choose **Publish**.  
  
2.  Choose **Refresh**.  

<a name="tf208104"></a>  
 
##  Error message TF208104: Hierarchical link Relationship is locked  

 If you publish a worksheet that contains work items that are synchronized with Project Server and whose hierarchical link relationships are locked (![Locked link icon](media/icon_lockedlink.png "Icon_lockedLink")), the following error message may appear:  
  
>TF208104: You have modified one or more hierarchical link relationships that may have been locked by other processes, such as Project Server.
>
>Changes that you made to individual work items were published. Changes that you made to locked links were auto-corrected.  
  
 This error appears when you change the link hierarchy that contains locked links. This message indicates that the changes that you made to the fields are published. All changes you made to the link hierarchy, whether locked or not locked, aren't published and were reverted to their original assignments.  
  
 To modify locked hierarchical, make your changes in the enterprise project plan mapped to the project. For more information, see [Manage project details](/previous-versions/azure/devops/reference/tfs-ps-sync/manage-project-details).  
  
### To publish changes to links that aren't locked  
  
-   For work items that aren't synchronized, you can modify the hierarchical link relationship from Team Explorer or the web portal. For more information, see [Bulk add or modify work items with Excel](bulk-add-modify-work-items-excel.md).  
  
-   To modify unlocked hierarchical link relationships in Excel, revise the query that you use to export the work items to exclude all work items with locked links. For example, you can add a clause to the filter criteria to omit items whose **Project Server Is Linked** field is set to **Yes**.  
  
## Related articles

-  [Resolve data validation errors](resolve-excel-data-validation-errors.md)   
-  [Resolve data conflicts](resolve-excel-data-conflicts-publish-refresh.md)   
-  Connect Azure Boards to an Office client](track-work.md)
