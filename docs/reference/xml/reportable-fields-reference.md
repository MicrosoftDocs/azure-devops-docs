---
title: Reportable fields reference| TFS
description: Default set of fields that appear in the relational warehouse database or the cube 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 06284b8a-d780-471e-b6d8-f100400eebfa
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 02/17/2017
---
# Reportable fields reference for Visual Studio ALM


> [!IMPORTANT]  
>This topic applies to project customization for On-premises XML process models. For you to view reports, you must have configured your TFS and project to support reporting. See [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md). 
>
>For an overview of process models and customization options, see [Customize your work tracking experience](../customize-work.md). 


A default set of fields appears in the relational warehouse database or the cube. The following tables list those reportable fields defined in the default process templates provided with the current release of Team Foundation Server. These fields have a `reportable` attribute value of `Detail`, `Dimension`, or `Measure`. See [Add or modify work item fields to support reporting](add-or-modify-work-item-fields-to-support-reporting.md).  
  
 For a complete list of fields that are defined in the default process templates, see [Work item field index](../../boards/work-items/guidance/work-item-field.md).   
  
##  <a name="detail"></a> Detail fields  
 Detail fields are written to the relational warehouse database, but not to the cube.  
  
|||||  
|-|-|-|-|  
|**Field name**|**Description**|**Reference name**|**Data type**|  
|Backlog Priority|A number that represents the relative priority for a bug, product backlog item, or task. (Scrum process template only.)|Microsoft.VSTS.Common.BacklogPriority|Double|  
|Revised Date|The date and time stamp when a test case or shared step is revised. **Note:**  This field is not included in the work item form and is not populated with any data.|System.RevisedDate|DateTime|  
  
##  <a name="dimension"></a> Dimension fields  
 Dimension fields are written both to the relational warehouse database and to the cube.  
  
|||||  
|-|-|-|-|  
|**Field name**|**Description**|**Reference name**|**Data type**|  
|Accepted By|The name of the person who responded to the code review.|Microsoft.VSTS.CodeReview.AcceptedBy|String|  
|Accepted Date|The date and time when the person responded to the code review.|Microsoft.VSTS.CodeReview.AcceptedDate|DateTime|  
|Activated By|The name of the team member who activated or reactivated the work item.|Microsoft.VSTS.Common.ActivatedBy|String|  
|Activated Date|The date and time when the work item was activated or reactivated.|Microsoft.VSTS.Common.ActivatedDate|DateTime|  
|Activity|The type of activity that is required to perform a task.|Microsoft.VSTS.Common.Activity|String|  
|Area Path|Groups the work items into product feature or team areas. The area must be a valid node in the project hierarchy.|System.AreaPath|TreePath|  
|Assigned To|The name of the team member who currently owns the work item.|System.AssignedTo|String|  
|Automation Status|The status of a test case. You can specify the following values:<br /><br /> -   **Not Automated**<br />-   **Planned**|Microsoft.VSTS.TCM.AutomationStatus|String|  
|Blocked|Indicates that progress toward resolving a bug, change request, requirement, or risk is suspended. Allowed values are **Yes** and **No**. (CMMI process template only)|Microsoft.VSTS.CMMI.Blocked|String|  
|Changed By|The name of the team member who modified the work item most recently.|System.ChangedBy|String|  
|Changed Date|The date and time when the work item was modified.|System.ChangedDate|DateTime|  
|Closed By|The name of the person who closed a work item.|Microsoft.VSTS.Common.ClosedBy|String|  
|Closed Date|The date and time when a work item was closed.|Microsoft.VSTS.Common.ClosedDate|DateTime|  
|Closed Status|The status selected by the reviewer when closing the code review request. The number is stored in the system and written to the data warehouse as follows:<br /><br /> -   **0 &mdash;Not Reviewed**<br />-   **1 - Looks Good**<br />-   **2 - With Comments**<br />-   **3- Needs Work**<br />-   **4 - Declined**<br />-   **5 - Removed**|Microsoft.VSTS.CodeReview.ClosedStatus|String|  
|Created By|The name of the team member who created the work item.|Microsoft.VSTS.Common.CreatedBy|String|  
|Created Date|The date and time when a work item was created.|Microsoft.VSTS.Common.CreatedDate|DateTime|  
|Due Date|The forecasted due date by which an issue will be resolved. (Agile process template only)|Microsoft.VSTS.Scheduling.DueDate|DateTime|  
|Finish Date|The date and time when the schedule indicates that the task will be completed.|Microsoft.VSTS.Scheduling.FinishDate|DateTime|  
|Found In|The product build number, also known as a revision, in which a bug was found.|Microsoft.VSTS.Build.FoundIn|String|  
|ID|The unique identifier that is assigned to a work item. Work item IDs are unique across all projects and work items that are defined in a project collection.|System.Id|Integer|  
|Integration Build|The product build number that incorporates the code or fixes a bug.|Microsoft.VSTS.Build.IntegrationBuild|String|  
|Issue|Indicates that the shared step is associated with an expected result. Allowed values are **Yes** and **No**. **Note:**  This field is not included in the work item form and is not populated with any data.|Microsoft.VSTS.Common.Issue|String|  
|Iteration Path|Groups the work items by named sprints or time periods. The iteration must be a valid node in the project hierarchy.|System.IterationPath|TreePath|  
|Priority|A subjective rating of the bug, issue, task, or test case as it relates to the business. You can specify the following values:<br /><br /> -   **1**:  Product cannot ship without the successful resolution of the work item, and it should be addressed as soon as possible.<br />-   **2**:  Product cannot ship without the successful resolution of the work item, but it does not have to be addressed immediately.<br />-   **3**:  Resolution of the work item is optional, based on resources, time, and risk.|Microsoft.VSTS.Common.Priority|Integer|  
|Rating|The number of stars that an item receives from a reviewer in a star-based ranking system. (Feedback Response)<br /><br /> The number is stored in the system and written to the data warehouse as follows:<br /><br /> -   **0 &mdash;Not Rated**<br />-   **1 - Poor**<br />-   **2 - Fair**<br />-   **3- Good**<br />-   **4- Very Good**<br />-   **5 - Excellent**|Microsoft.VSTS.Common.Rating|String|  
|Reason|The reason that the work item is in the current state. Values are specific to both the state and the type of work item. The field is not tracked for test cases or shared steps.|System.Reason|String|  
|Resolved By|The name of the team member who resolved the bug or user story.|Microsoft.VSTS.Common.ResolvedBy|String|  
|Resolved Date|The date and time when the bug or user story was resolved.|Microsoft.VSTS.Common.ResolvedDate|DateTime|  
|Resolved Reason|The reason that the bug was resolved (for example, it was fixed).|Microsoft.VSTS.Common.ResolvedReason|String|  
|Rev|A number that is assigned to the historical revision of a work item.|System.Rev|Integer|  
|Risk|A subjective rating of the relative uncertainty about the successful completion of the user story. You can specify the following values:<br /><br /> -   **1 - High**<br />-   **2 - Medium**<br />-   **3 - Low**|Microsoft.VSTS.Common.Risk|String|  
|Severity|A subjective rating of the effect of a bug, issue, or risk on the project. You can specify the following values:<br /><br /> -   **1 - Critical**<br />-   **2 - High**<br />-   **3 - Medium**<br />-   **4 - Low**|Microsoft.VSTS.Common.Severity|String|  
|Stack Rank|A subjective rating of the user story, task, issue, or bug compared to other work items of the same type. An item that is assigned a lower number should be fixed before an item that is assigned a higher number.|Microsoft.VSTS.Common.Rank|Double|  
|Start Date|The date and time when the schedule indicates that the task will start.|Microsoft.VSTS.Scheduling.StartDate|DateTime|  
|State|The current state of the work item. The valid values for state are specific to each type of work item.|System.State|String|  
|Team Project|The project to which this work item belongs.|System.TeamProject|String|  
|Title|A short description that summarizes what the work item is and helps users to distinguish it from other work items in a list.|System.Title|String|  
|Work Item Type|The name of the work item type.|System.WorkItemType|String|  
  
##  <a name="measure"></a> Measure fields  
 Measure fields are written to the data warehouse and contain pre-calculated sum values.  
  
|||||  
|-|-|-|-|  
|**Field name**|**Description**|**Reference name**|**Data type**|  
|Business Value|A subjective unit of measure that captures the relative business value of a product backlog item (Scrum process template only) or feature compared to other items of the same type. An item that is assigned a higher number should be considered as having more business value than an item that is assigned a lower number.|Microsoft.VSTS.Common.BusinessValue|Integer|  
|Completed Work|A measure of the amount of work spent on a task.|Microsoft.VSTS.Scheduling.CompletedWork|Double|  
|Effort|The relative rating for the amount of work that a product backlog item will require to implement. (Scrum process template only)|Microsoft.VSTS.Scheduling.Effort|Double|  
|Original Estimate|A measure of the amount of work that is required to complete a task.|Microsoft.VSTS.Scheduling.OriginalEstimate|Double|  
|Remaining Work|A measure of the amount of work that remains to finish a task.|Microsoft.VSTS.Scheduling.RemainingWork|Double|  
|Size|The relative rating for the amount of work that a requirement will require to implement. (CMMI process template only)|Microsoft.VSTS.Scheduling.Size|Double|  
|Story Points|A subjective unit of measure that captures the size of a user story. If you assign more points to a user story, you indicate that more work is required to implement it. (Agile process template only)|Microsoft.VSTS.Scheduling.StoryPoints|Double|  
  
## Related articles
-  [Index of work item fields](../../boards/work-items/guidance/work-item-field.md)
-  [Add reports to a project](../../report/admin/add-reports-to-a-team-project.md)