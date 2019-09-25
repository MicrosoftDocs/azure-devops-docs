---
title: Code review and feedback field reference
titleSuffix: Azure Boards
description: Definition of fields used to track code review and feedback requests and responses for Azure Boards, Azure DevOps, & Team Foundation Server 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4182c1c5-a768-4f4d-b6cb-862fc57e6ab4
ms.topic: reference
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---

# Code review and feedback field reference

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]


You can use the code review and feedback fields to create queries and reports that track the status of these processes. The fields appear in the following work item types, which are included with the default processes for Azure Boards and TFS: Code Review Request, Code Review Response, Feedback Request, and Feedback Response.  
  
> [!NOTE]  
>  If your TFS application server has been upgraded from an earlier version you might need to update your project to get access to these work item types. See [Configure features after an upgrade](../../../reference/configure-features-after-upgrade.md)  
  
##  <a name="codereviews"></a> Fields used to track code reviews  
 The following fields are used to track code review requests and responses. You can only make a Code Review request against code maintained in a [Team Foundation version control (TFVC) repository](../../../repos/tfvc/overview.md). A code review response is created for each person who's been requested to provide review comments. See [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).  
  

> [!div class="mx-tdCol2BreakAll"]
> |**Field name**|**Description**|**Data type**|  
> |--------------|---------------|-------------|  
> |**Accepted By**|The name of the code reviewer.<br/>Reference name=Microsoft.VSTS.CodeReview.AcceptedBy|String|  
> |**Accepted Date**|The date and time when the code-reviewer responded.<br/>Reference name=Microsoft.VSTS.CodeReview.AcceptedDate|DateTime|  
> |**Associated Context**|The name assigned to the code work requested for review.<br/>Reference name=Microsoft.VSTS.CodeReview.Context|String|  
> |**Associated Context Code**|An integer value that captures whether the code review is for **1** (shelveset) or **2** (changeset).<br/>Reference name=Microsoft.VSTS.CodeReview.ContextCode|Integer|  
> |**Associated Context Owner**|The GUID assigned to the shelveset owner who requested the code review.<br/>Reference name=Microsoft.VSTS.CodeReview.ContextOwner|String|  
> |**Associated Context Type**|The type of code work requested for review: **Shelveset** or **Changeset**.<br/>Reference name=Microsoft.VSTS.CodeReview.ContextType|String|  
> |**Closed Status**|The status selected by the reviewer when closing the code review request. The number is stored in the system and written to the data warehouse as follows:<br/><br/>-   **0 &mdash; Not Reviewed**<br />-   **1 - Looks Good**<br />-   **2 - With Comments**<br/>-   **3- Needs Work**<br />-   **4 - Declined**<br/>-   **5 - Removed**<br/>Reference name=Microsoft.VSTS.CodeReview.ClosedStatus|String|  
> |**Closed Status Code**|A value ranging from 0 to 5 that corresponds to the status selected by the reviewer when closing the code review request.<br/>Reference name=Microsoft.VSTS.CodeReview.ClosedStatusCode|Integer|  
> |**Closing Comments**|The comment entered by the reviewer when closing the review request.<br/>Reference name=Microsoft.VSTS.CodeReview.ClosingComment|String|  
> |**Reviewed By**|The name of the team member who reviewed the code. The State transitions to Reviewed when the code reviewer responds. (Code Review Response)<br/>Reference name=Microsoft.VSTS.Common.ReviewedBy|String|  
> |**Reviewed Date**|The date-time stamp when the reviewer closed the request. (Code Review Response)<br/>Reference name=Microsoft.VSTS.Common.ReviewedDate|Date-Time|  
> |**State Code**|Mirror field used to track the current state in code.<br/>Reference name=Microsoft.VSTS.Common.StateCode|Integer|  
  
##  <a name="feedback"></a> Fields used to track feedback  
 The following fields track feedback requests and responses. You complete the first three fields in the feedback request form. A feedback response is created for each person and for each item for which feedback is requested. See [Get feedback](../../../project/feedback/get-feedback.md).  
  
|**Field name**|**Description**|**Data type**|  
|--------------------|---------------------|-------------------|  
|**Application Launch Instructions**|Instructions to stakeholders on how to start the application.<br/>Reference name=Microsoft.VSTS.Feedback.ApplicationLaunchInstructions|HTML|  
|**Application Start Information**|Guidelines to direct stakeholder feedback.<br/>Reference name=Microsoft.VSTS.Feedback.ApplicationStartInformation|PlainText|  
|**Application Type**|The type of application that stakeholders will provide feedback on. The valid types are specified in the process configuration file, ProcessConfiguration. The default values are **Web Application**, **Remote Machine**, and **Client Application**.<br/>Reference name=Microsoft.VSTS.Feedback.ApplicationType|String|  
|**Rating**|The number of stars that an item receives from a reviewer in a star-based ranking system. (Feedback Response)<br /> The number is stored in the system and written to the data warehouse as follows:<br /><br /> -   **0 &mdash; Not Rated**<br />-   **1 - Poor**<br />-   **2 - Fair**<br />-   **3- Good**<br />-   **4- Very Good**<br />-   **5 - Excellent**<br/>Reference name=Microsoft.VSTS.Common.Rating|String|  
  
## Related articles
- [Index of work item fields](work-item-field.md)
- [Get feedback](../../../project/feedback/get-feedback.md)
- [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)