---
title: Code review and feedback field reference
titleSuffix: Azure Boards
description: Learn how to use the code review and feedback fields to track code review and feedback requests and responses.
ms.service: azure-devops-boards
ms.assetid: 4182c1c5-a768-4f4d-b6cb-862fc57e6ab4
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Code review and feedback field reference

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article lists the fields you use to track code reviews and feedback, including descriptions, data types, and recommended uses. Use these fields to build queries and reports that monitor code-review and feedback workflows. The default work item types that include these fields are: Code Review Request, Code Review Response, Feedback Request, and Feedback Response.

<a name="codereviews"></a> 
<a id="fields"></a>

## Fields used to track code reviews

You can only make a Code Review request for code stored in a Team Foundation Version Control (TFVC) repository (see Team Foundation version control (TFVC)). A code review response is created for each reviewer who provides comments.

> [!NOTE]   
> Retrieving code review comments programmatically isn't supported.

|**Field name**|**Description**|**Data type**|
|--------------|---------------|-------------|
|**Accepted By**|Name of the code reviewer.<br/>Reference name=`Microsoft.CodeReview.AcceptedBy`|String|
|**Accepted Date**|Date and time when the reviewer responded.<br/>Reference name=`Microsoft.CodeReview.AcceptedDate`|DateTime|
|**Associated Context**|Name assigned to the code change requested for review (for example, a shelveset or changeset name).<br/>Reference name=`Microsoft.CodeReview.Context`|String|
|**Associated Context Code**|Integer that indicates the context type: **1** = shelveset, **2** = changeset.<br/>Reference name=`Microsoft.CodeReview.ContextCode`|Integer|
|**Associated Context Owner**|GUID of the shelveset owner who requested the code review.<br/>Reference name=`Microsoft.CodeReview.ContextOwner`|String|
|**Associated Context Type**|Type of code work requested for review: **Shelveset** or **Changeset**.<br/>Reference name=`Microsoft.CodeReview.ContextType`|String|
|**Closed Status**|Status selected by the reviewer when closing the review. The system stores this value and writes it to the data warehouse as:<br/><br/>- **0—Not Reviewed**<br/>- **1—Looks Good**<br/>- **2—With Comments**<br/>- **3—Needs Work**<br/>- **4—Declined**<br/>- **5—Removed**<br/>Reference name=`Microsoft.CodeReview.ClosedStatus`|String|
|**Closed Status Code**|Integer value (0–5) corresponding to the Closed Status selection.<br/>Reference name=`Microsoft.CodeReview.ClosedStatusCode`|Integer|
|**Closing Comments**|Comment entered by the reviewer when closing the review request.<br/>Reference name=`Microsoft.CodeReview.ClosingComment`|String|
|**Reviewed By**|Name of the team member who completed a review. The work item's state transitions to Reviewed when a reviewer responds. (Code Review Response)<br/>Reference name=`Microsoft.Common.ReviewedBy`|String|
|**Reviewed Date**|Date and time when the reviewer closed the request. (Code Review Response)<br/>Reference name=`Microsoft.Common.ReviewedDate`|DateTime|
|**State Code**|Mirror field used to track the current state value for code reviews.<br/>Reference name=`Microsoft.Common.StateCode`|Integer|

<a name="feedback"></a>

## Fields used to track feedback

The table below lists fields that track feedback requests and responses. You complete the first three fields when you create a feedback request. The system creates one feedback response per reviewer and per item for which feedback is provided. For procedural guidance, see Get feedback.

|**Field name**|**Description**|**Data type**|
|--------------------|---------------------|-------------------|
|**Application Launch Instructions**|Instructions that tell stakeholders how to launch the application or scenario they should review.<br/>Reference name=`Microsoft.Feedback.ApplicationLaunchInstructions`|HTML|
|**Application Start Information**|Guidance that orients reviewers and directs the feedback they should provide.<br/>Reference name=`Microsoft.Feedback.ApplicationStartInformation`|PlainText|
|**Application Type**|Type of application that reviewers evaluate. Valid values come from the ProcessConfiguration file; defaults include **Web Application**, **Remote Machine**, and **Client Application**.<br/>Reference name=`Microsoft.Feedback.ApplicationType`|String|
|**Rating**|Star-based rating that reviewers assign to an item. The system stores this value and writes it to the data warehouse as:<br/><br/>- **0—Not Rated**<br/>- **1—Poor**<br/>- **2—Fair**<br/>- **3—Good**<br/>- **4—Very Good**<br/>- **5—Excellent**<br/>Reference name=`Microsoft.Common.Rating`|String|

## Related content

- [Explore the index of work item fields](work-item-field.md)  
- [Provide and gather feedback](/previous-versions/azure/devops/project/feedback/get-feedback)  
- [Suspend work, fix a bug, and conduct a code review](../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)  
