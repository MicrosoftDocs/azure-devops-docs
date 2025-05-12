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
ms.date: 05/12/2025
---

# Code review and feedback field reference

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article provides a detailed reference for the fields used to track code reviews and feedback, including their descriptions, data types, and usage. It also explains how you can use these fields to monitor and manage code review and feedback workflows effectively.

Use the code review and feedback fields to create queries and reports that track the status of these processes. These fields are available for default work item types: Code Review Request, Code Review Response, Feedback Request, and Feedback Response. 

<a name="codereviews"></a> 
<a id="fields"></a>

## Fields used to track code reviews  

The following fields are used to track code review requests and responses. You can only make a Code Review request against code maintained in a [Team Foundation version control (TFVC) repository](../../../repos/tfvc/index.yml). A code review response is created for each person who provides review comments. See [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).  
  
> [!NOTE]   
> Retrieving code review comments programmatically isn't a supported feature. 

|**Field name**|**Description**|**Data type**|  
|--------------|---------------|-------------|  
|**Accepted By**|The name of the code reviewer.<br/>Reference name=Microsoft.CodeReview.AcceptedBy|String|  
|**Accepted Date**|The date and time when the code-reviewer responded.<br/>Reference name=Microsoft.CodeReview.AcceptedDate|DateTime|  
|**Associated Context**|The name assigned to the code work requested for review.<br/>Reference name=Microsoft.CodeReview.Context|String|  
|**Associated Context Code**|An integer value that captures whether the code review is for **1** (shelveset) or **2** (changeset).<br/>Reference name=Microsoft.CodeReview.ContextCode|Integer|  
|**Associated Context Owner**|The GUID assigned to the shelveset owner who requested the code review.<br/>Reference name=Microsoft.CodeReview.ContextOwner|String|  
|**Associated Context Type**|The type of code work requested for review: **Shelveset** or **Changeset**.<br/>Reference name=Microsoft.CodeReview.ContextType|String|  
|**Closed Status**|The status selected by the reviewer when closing the code review request. The number is stored in the system and written to the data warehouse as follows:<br/><br/>-   **0—Not Reviewed**<br />-   **1 - Looks Good**<br />-   **2 - With Comments**<br/>-   **3- Needs Work**<br />-   **4 - Declined**<br/>-   **5 - Removed**<br/>Reference name=Microsoft.CodeReview.ClosedStatus|String|  
|**Closed Status Code**|A value ranging from 0 to 5 that corresponds to the status selected by the reviewer when closing the code review request.<br/>Reference name=Microsoft.CodeReview.ClosedStatusCode|Integer|  
|**Closing Comments**|The comment entered by the reviewer when closing the review request.<br/>Reference name=Microsoft.CodeReview.ClosingComment|String|  
|**Reviewed By**|The name of the team member who reviewed the code. The State transitions to Reviewed when the code reviewer responds. (Code Review Response)<br/>Reference name=Microsoft.Common.ReviewedBy|String|  
|**Reviewed Date**|The date-time stamp when the reviewer closed the request. (Code Review Response)<br/>Reference name=Microsoft.Common.ReviewedDate|Date-Time|  
|**State Code**|Mirror field used to track the current state in code.<br/>Reference name=Microsoft.Common.StateCode|Integer|  

<a name="feedback"></a> 

## Fields used to track feedback 
 
The following fields track feedback requests and responses. You complete the first three fields in the feedback request form. A feedback response is created for each person and for each item for which feedback is provided. See [Get feedback](/previous-versions/azure/devops/project/feedback/get-feedback).  
  
|**Field name**|**Description**|**Data type**|  
|--------------------|---------------------|-------------------|  
|**Application Launch Instructions**|Instructions to stakeholders on how to start the application.<br/>Reference name=Microsoft.Feedback.ApplicationLaunchInstructions|HTML|  
|**Application Start Information**|Guidelines to direct stakeholder feedback.<br/>Reference name=Microsoft.Feedback.ApplicationStartInformation|PlainText|  
|**Application Type**|The type of application that stakeholders provide feedback on. The valid types are specified in the process configuration file, ProcessConfiguration. The default values are **Web Application**, **Remote Machine**, and **Client Application**.<br/>Reference name=Microsoft.Feedback.ApplicationType|String|  
|**Rating**|The number of stars that an item receives from a reviewer in a star-based ranking system. (Feedback Response)<br /> The number is stored in the system and written to the data warehouse as follows:<br /><br /> -   **0—Not Rated**<br />-   **1 - Poor**<br />-   **2 - Fair**<br />-   **3- Good**<br />-   **4- Very Good**<br />-   **5 - Excellent**<br/>Reference name=Microsoft.Common.Rating|String|  
  
## Related articles

- [Explore the index of work item fields](work-item-field.md)  
- [Provide and gather feedback](/previous-versions/azure/devops/project/feedback/get-feedback)  
- [Suspend work, fix a bug, and conduct a code review](../../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)  
