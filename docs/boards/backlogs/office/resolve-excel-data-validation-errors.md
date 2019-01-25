---
title: Resolve data validation errors
titleSuffix: Azure Boards
description: Address rule errors that occur when publishing a list from Excel or Project to Azure Boards, Azure DevOps, & Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4c72c12f-bd10-48a5-b71c-7c296feec71e
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 02/22/2017  
---

# Resolve data validation errors (publish and refresh)

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

A data validation error occurs when a change in the work item list or project plan violates a rule of the work item type. The following examples show common data validation errors:  
  
-   Someone assigns a work item to a team member whose name is not included in the list of allowed values  
-   Someone creates a work item but forgets to complete a required field, such as the work item type.  
  
 If a data validation error occurs when you try to publish changes, the **Work Item Publishing Errors** dialog box appears, and in the **Unpublished work items** list the **Issue** column shows **Validation error** or another phrase that contains **Invalid**.  
  

 
  
##  <a name="ResolveDataValidationError"></a> 
##Resolve a data validation error  
 You can use the **Work Item Publishing Errors** dialog box to resolve a data validation error.  

1.  In the **Work Item Publishing Errors** dialog box, for each work item that appears with a data validation error, follow these steps.  
  
    > [!NOTE]  
    >  If the data validation error is an invalid work item type, the **Edit Work Item** button is not visible, and a work item form does not appear. You must correct the error in the Office Excel worksheet or the Office Project plan. For information about how to resolve an error in Office Excel, see the next procedure in this article.  
  
    1.  In the **Unpublished work items** box, click the work item, and then click **Edit Work Item**.  
  
         A work item form appears.  
  
    2.  In the work item form, review the information and correct the value.  
  
    3.  Click **Close** to save your changes and close the work item form.  
  
2.  After you correct the data validation errors, click **Publish** to publish the corrected work items.  
  
    > [!NOTE]  
    >  This step publishes only the work items that you corrected. If you do not resolve a data validation error, that work item is not published.  
  
3.  Click **Close** to close the **Work Item Publishing Errors** dialog box.  
  
<a name="ResolveDataValidationErrorChecking2007"></a> 
##Resolve a data validation error by using error checking in Excel  
 You can use the Office Excel tools to find and resolve an error in a work item list. For more information about how to use Office Excel error checking tools, see the Office Excel Help.  
  
#### To resolve a data validation error by using error checking in  Excel 2007  
  
1.  Start Excel, and click the **Formulas** tab.  
  
2.  In the **Formula Auditing** group, click **Error Checking**.  
  
     If the error checking tool finds an error, the **Error Checking** dialog box appears.  
  
3.  For basic information about the error, see the text that describes the error in the **Error Checking** dialog box. For more information about the error, click **Help on this error**.  
  
4.  In the work item list, click the cell that contains the error, and then correct the value.  
  
5.  In the **Error Checking** dialog box, click **Resume** to find the next data validation error.  
  
    -   If the **Error Checking** dialog box shows another error, repeat the previous two steps to resolve the error.  
  
    -   If a message appears that indicates error checking has completed, click **OK** to close both this message and the **Error Checking** dialog box.  
  
## Related articles
-  [Resolve data conflicts](resolve-excel-data-conflicts-publish-refresh.md)   
-  [Resolve invalid links](resolve-excel-invalid-links-tree-list.md)   
-  [Work in Excel and Project](track-work.md) 


###Required permissions  
  
To update work items, you must be a member of the **Contributors** group or have your **View work items in this node** and your **Edit work items in this node** permissions set to **Allow**. For more information, see [Add administrators, set permissions at the project-level or project collection-level](../../../organizations/security/set-project-collection-level-permissions.md). 