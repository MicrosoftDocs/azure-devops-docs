---
title: Resolve validation errors 
titleSuffix: TFS 
description: Resolve data validation errors that appear in the Unpublished work items list with the integration of Team Foundation Server & Project Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 72c1dd06-a3a1-499c-b2a3-4d7f884033fd
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: troubleshooting
ms.date: 01/12/2017
---


# Resolve validation errors for data synchronization 

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

When you publish an enterprise project plan that is mapped to a project, the Team Foundation add-in for Microsoft Project Professional performs several data validation checks. A data validation error occurs if you define or modify the values for a task that is set to publish to Team Foundation Server (TFS) and one or more values violate a rule that is defined for the type of work item that is associated with the task.  
  
> [!NOTE]
>  For information about how to resolve data validation errors in Microsoft Project for a non-enterprise project plan that is bound to a project, see [Resolve data validation errors](https://msdn.microsoft.com/library/ms181670.aspx).  
  
 Validation rules are added to the enterprise project plan when it is mapped to a project. If a data validation error occurs, the **Validation Resolution** dialog box appears. In the **Unpublished work items** list, the Issue column indicates the type of error that has occurred. The Status column indicates whether you must take a corrective action, Project has corrected it automatically, or you have corrected it. For issues that Project corrected automatically, you can choose the entry to display the reason for the correction in the lower part of the dialog box.  
  
 The following table summarizes the types of errors that data validation identifies.  
  
|Issue|Status|Corrective action|  
|-----------|------------|-----------------------|  
|One Team Foundation Owner Required|Action Required|In the **Resource Names** field, you must specify a valid contributor for a project. **Note:**  You can assign only one active user to a task that is published to Team Foundation Server. However, multiple resources appear in Project for summary tasks that contain the rollup of child work items.|  
|Invalid Value|Action Required|You must specify a valid value for each field that is required for the work item type to which the task is linked. In some instances, you must choose **Correct this error** to access the work item form in which to make the corrections.|  
|Invalid Work Item Type|Action Required|You must specify a work item type that has been configured to participate in synchronization for the enterprise project plan and the mapped project. **Note:**  Project automatically corrects the field if only one work item type is mapped for the project plan and project. <br /><br /> If you want to specify a type of work item that is valid for the mapped project but not for the enterprise project plan, you can add it to the list of mapped types. For more information, see [Specify work item types](specify-wits-to-synchronize.md). **Important:**  Text30 is the default Project field that is associated with the **Work Item Type** column that is used in synchronizing tasks with work items. If you ever connect the project plan to Team Foundation Server by using the **Choose Team Project** option on the Team ribbon menu, an additional Project field, which is labeled **Work Item Type**, becomes available. This field, with a default Project field of Text24, supports mapping of project plans that are bound to Team Foundation but does not support synchronizing plans. The Text24-based field contains the full list of work item types for the project. You can verify that you have the correct field by hovering over it and verifying that **Text30** appears.|  
|Invalid Work Item Type|Automatically Corrected|If you change the value that is assigned to the **Work Item Type**, Project reassigns the value that was defined when the task was first published. You cannot change the value of the work item type for a task after it has been published to Team Foundation Server.|  
|Link error in Publish to Team Project|Automatically Corrected|Project changes the value of the **Publish to Team Project** field to **Yes** in the following instances:<br /><br /> -   After a work item has been submitted from Team Foundation Server, approved, and accepted into the plan, it must continue to be published.<br />-   After a task has been published to Team Foundation Server, it must continue to be published. You must delete a task from the project plan to stop publishing it.<br />-   If any child tasks of a published parent task are set to publish, all child tasks must be set to publish.|  
  
 In addition to the errors that the previous table describes, you must resolve the following errors before you can publish the enterprise project plan.  
  
-   When a field that is required to support data synchronization is not defined in Project Server, you must contact your administrator to correct the field mapping file. For more information, see [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
  
-   When the resource pool does not contain any valid contributors for the project that is mapped, you must add these users to the resource pool. For more information, see [Associate enterprise projects and projects](manage-associations-enterprise-projects.md).  
  
##  <a name="ResolveDataValidationError"></a> Resolving a Data Validation Error  
 You can use the **Validation Resolution** dialog box to resolve the data validation errors that appear in the **Unpublished work items** list.  
  
#### To correct an invalid work item type  
  
1.  Choose the row that contains the **Invalid Work Item Type** issue, choose **Choose Values**, and then specify the type of work item that you want to associate with the task.  
  
     ![Choose a valid work item type](_img/ps-tfs_proj_validresolut.png "PS-TFS_Proj_ValidResolut")  
  
    > [!NOTE]
    >  The add-in for Project Server Integration validates the task field assignments against the work item type rules when they are published.  
  
2.  If no more issues occur, choose **Save and Publish**.  
  
#### To correct other data validation issues  
  
1.  In the **Unpublished work items** list, choose the row for each work item that you want to correct.  
  
    1.  Review the information that appears under **Details**, and then choose **Correct this error**.  
  
    2.  In the work item form that appears, review the information, and correct the value.  
  
    3.  Choose **Close** to save your changes and close the work item form.  
  
2.  After you correct all data validation errors, choose **Save and Publish**.  
  
    > [!NOTE]
    >  This step publishes only the work items that you corrected. You cannot publish a plan until you resolve each data validation error.  
  
3.  Choose **Close**.  
  
## Related articles  
 [Remove items that aren't synchronizing](remove-items-not-synching.md)   
 [Manage projects](manage-projects.md)