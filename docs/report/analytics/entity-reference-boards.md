---
title: Work tracking metadata reference for Analytics 
titleSuffix: Azure DevOps
description: Properties, enumerated types, and members metadata reference for the Analytics service for Azure Boards.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 11/07/2022
---


# Metadata reference for Azure Boards Analytics 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Analytics service collects all work tracking activity defined and updated through Azure Boards.  Analytics stores as properties all work tracking fields, except for HTML/rich-text and History fields. Custom properties for custom fields are automatically added to  Analytics. 

This article describes the majority of properties that you can use to generate an Analytics report for work tracking. You use a combination of properties to filter a query, aggregate data, or build a report. You can run these queries directly in your browser. To learn more, see [Define basic queries using OData Analytics](../extend-analytics/wit-analytics.md). If you're new to work tracking and Azure Boards, we recommend you review the following articles: 
- [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Track user stories, issues, bugs, and other work items in Azure Boards](../../boards/work-items/about-work-items.md)   


[!INCLUDE [note-analytics-early-draft](../includes/note-analytics-data-model.md)]

## Overview of entity sets

When querying Analytics for work tracking data, use one of the following entity types or entity sets. 
- Query `WorkItems` to generate status and rollup reports 
- Query `WorkItemSnapshot` to generate trend, burndown, and burnup reports 

Use other entity types, such as `Area`, `Iteration`, `Project`, `Team`, or other entities to filter data or select properties to report on. For a summary of example reports, see [Sample reports and quick reference index](../extend-analytics/quick-ref.md).
 
> [!NOTE]  
> To generate status and trend reports on test-specific work item types, query the `WorkItems` and `WorkItemSnapshot` entity types and filter based on the work item type. For information on test runs, test results, or other test data, query the `TestRuns`, `TestPoints`, `TestResultsDaily`, `TestSuite` or `TestPointHistorySnapshot` entity types. To learn more, see [Test metadata reference for Azure DevOps](entity-reference-test-plans.md).

|`EntitySet`  | `EntityType`  | Description | 
|------------|-------------|-------------|  
|[**Areas**](#areas) | **Area** |The work item **Area Paths**, with properties for grouping and filtering by area hierarchy. | 
|[**Dates**](entity-reference-general.md#dates)|**CalendarDate**|The dates used to filter and group other entities using relationships.| 
|[**Iterations**](#iterations) | **Iteration** |The work item **Iteration Paths**, with properties for grouping and filtering by iteration hierarchy.  |
|[**BoardLocations**](#kanban-board-properties-fields) |**BoardLocation**|  The Kanban board cell locations, as identified by board column, swimlane, and split, includes historic board settings. For a description of each Kanban board field, see [Workflow and Kanban board fields](../../boards/queries/query-by-workflow-changes.md#workflow-and-kanban-board-fields).| 
|[**Processes**](#processes) |**Process** | Backlog information used to expand or filter work items and work item types. For an example that uses **Processes** to filter a report, see [Requirements tracking sample report](../powerbi/sample-stories-overview.md). Supported for Analytics v2.0 version and later. | 
|[**Projects**](entity-reference-general.md#projects)|**Project** |All projects defined for an organization (cloud) or project collection (on-premises). | 
|[**Tags**](#tags) | **Tag** |All work item tags for each project. For an example that uses **Tags** to filter a report, see [Release burndown sample report](../powerbi/sample-boards-releaseburndown.md). | 
|[**Teams**](#teams) | **Team** |All teams defined for the project. For an example that uses **Teams** to filter a report, see [Add a Team slicer to a Power BI report](../powerbi/sample-boards-teamslicer.md).  | 
|[**Users**](entity-reference-general.md#users)|**User** |User information that is used to expand or filter various work item properties, for example **Assigned To**, **Created By**. | 
|[**WorkItemBoardSnapshot**](#kanban-board-properties-fields) |**WorkItemBoardSnapshot** |(Composite) The state of each work item on each calendar date, including Kanban board location, used to generate trend reports. For a sample report, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md). | 
|[**WorkItemLinks**](#workitemlinks)| **WorkItemLink** |The links between work items, for example, *Child*, *Parent*, and *Related*. Includes only the latest revision of links, no history. Hyperlinks aren't included.  | 
|[**WorkItemRevisions**](#property-names-fields) |**WorkItemRevision** |All historic work item revisions, including the current revision. Doesn't include deleted work items. |  
|[**WorkItemSnapshot**](#property-names-fields) |**WorkItemSnapshot** |(Composite) The state of each work item on each calendar date, used to support trend reporting. For a sample report, see [Bug trends sample report](../powerbi/sample-boards-bugtrend.md).  |   
|[**WorkItems**](#property-names-fields) |**WorkItem** |The current state of work items. Used to support status reports. For a sample report, see [Rollup child work item values to parent sample report](../powerbi/sample-boards-rollup.md). | 
|[**WorkItemTypeFields**](#workitemtypefields)|**WorkItemTypeField** |The work item properties for each work item type and process. Used to support building reports. |   

### About snapshots 

There are two work tracking snapshot entity sets: `WorkItemSnapshot` and `WorkItemBoardSnapshot`.

A snapshot provides a record of the values defined for a work item each day. The record is written to Analytics once a day at the same time each day. You use snapshots when you want to generate a trend report.  By default, all the snapshot tables are modeled as daily snapshot fact tables. If you query for a time range it will get a value for each day. Long time ranges result in a large number of records. If you don't need such high precision, you can use weekly or even monthly snapshots.

To learn more, see [OData query guidelines, Do use weekly or monthly snapshots for trend queries that span a long time period](../extend-analytics/odata-query-guidelines.md#-do-use-weekly-or-monthly-snapshots-for-trend-queries-that-span-a-long-time-period). 


### About work item revisions

 Each time you update a work item, the system creates a new revision and records this action in the `System.RevisedDate` field, which makes it useful for specifying a history filter. The revised date is represented by `RevisedDate` (DateTime) and `RevisedDateSK` (Int32) properties. For best performance, use the latter date surrogate key. It represents the date when a revision was created or it has null for active or incomplete revisions. 

If you want all the dates since the `{startDate}` inclusive, add the following filter to your query.

`RevisedDateSK eq null or RevisedDateSK gt {startDateSK}`  

You use the `WorkItemRevisions` entity set to load all the revisions for a given work item. The query returns all historic work item revisions, including the current revision, for the work items you filter on. It doesn't include deleted work items. 

<a id="property-names-fields" /> 

## Shared properties across several entity types 

The properties you can select in an **Analytics view** correspond to regular work tracking fields and select Analytics properties, such as **Cycle Time Days** and **Lead Time Days**. These properties, most of which are listed and described in the following table, are defined for the following entity types, unless otherwise specified. 

- `WorkItem`  
- `WorkItemRevision`  
- `WorkItemSnapshot`  
- `WorkItemBoardSnapshot`  
 
> [!NOTE]  
> The Analytics service doesn't store any data for long text fields assigned the HTML or rich text data type. This includes **Description** and **History** fields. Analytics doesn't store link or attached file counts either. For a complete list of fields that are defined in the default process templates, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). For descriptions of each data type, see [Query fields, operators, and macros](../../boards/queries/query-operators-variables.md).  
> Not all properties associated with Scrum and CMMI process-specific fields are included in the following table. For a list of these fields, see [Field descriptions for default and work item fields used in process templates, Fields used to track CMMI work items](../../boards/work-items/guidance/work-item-field.md#fields-used-to-track-cmmi-work-items).

Many properties are date-based or user-based. These properties are associated with the **CalendarDate** and **User** entity sets described in [Calendar date, Project, and User metadata reference](entity-reference-general.md). 

|**Display name**<br/>`Property name` | **Data type** | **Description**<br/>`Reference name` | 
|-------------------------------------|---------------|--------------------------------------|
|**Accepted By**<br/>`Microsoft_VSTS_CodeReview_AcceptedBy` | UserSK | Name of the person who responded to a code review. (CMMI process)<br/>`Microsoft.VSTS.CodeReview.AcceptedBy` |   
|**Accepted Date**<br/> `AcceptedDate` | DateTime | Date and time when the person responded to the code review. (CMMI process)<br/>`Microsoft.VSTS.CodeReview.AcceptedDate`  |     
| **Activated By**<br/>`ActivatedBy`<br/>`ActivatedByUserSK` | UserSK | Name of the team member who activated or reactivated the work item.<br/>`Microsoft.VSTS.Common.ActivatedBy`   |   
|**Activated Date**<br/> `ActivatedDate` | DateTime | Date and time when a team member activated or reactivated a bug or work item.<br/>`Microsoft.VSTS.CodeReview.ActivatedDate` | 
|**Activity**<br/>`Activity` | String | The type of activity that is required to perform a task.<br/>`Microsoft.VSTS.Common.Activity`<br/><br/>The type of activity or discipline that is assigned to a task. Allowed values are: **Deployment**, **Design**, **Development**, **Documentation**, **Requirements**, and **Testing**. (Agile, Scrum, and Basic process) <br/>`Microsoft.VSTS.Common.Activity`  | 
|`AnalyticsUpdatedDate` | DateTimeOffset | The data and time the entity was last updated. |
|**Application Type**  | String | The type of application that stakeholders will provide feedback on. The default values are *Web Application*, *Remote Machine*, and *Client Application*. The valid types are specified in the process configuration file for projects that use an On-premises XML process. <br/>`Microsoft_VSTS_Feedback_ApplicationType`  | 
|**Area Path**<br/>`AreaPath`<br/>`AreaSK`  | String  | Groups the work items into product feature or team areas. The area must be a valid node in the project hierarchy.<br/>`System.AreaPath`     |    
|**Assigned To** <br/>`AssignedTo`<br/>`AssignedToUserSK` | UserSK | The name of the team member who currently owns the work item.<br/>`System.AssignedTo`    |     
|**Automated Test Id** <br/>`AutomatedTestId` | String | The ID of the test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestId`   | 
|**Automated Test Name** <br/>`AutomatedTestName` | String | Name of the team member who activated or reactivated the work item.<br/>`Microsoft.VSTS.TCM.AutomatedTestName`  | 
|**Automated Test Storage**<br/>`AutomatedTestStorage` | String | The assembly that contains the test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestStorage`   |    
|**Automated Test Type**<br/>`AutomatedTestType` | String | The type of test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestType`  |     
|**Automation status**<br/>`AutomatedStatus` | String | The status of a test case with the following accepted values: **Automated**, **Not Automated**, or **Planned**. <br/>`Microsoft.VSTS.TCM.AutomationStatus`   |    
|**Backlog Priority**<br/>`BacklogPriority` | Double | A number assigned by a system background process used to stack rank or track the sequence of items on a backlog or board. (Scrum process) <br/>`Microsoft.VSTS.Common.BacklogPriority`   |    
|**Blocked**<br/>`Blocked`  | String | Indicates that no further work can be performed on the work item. Valid values are **Yes** or **No**. (CMMI process)<br/>`Microsoft.VSTS.CMMI.Blocked` | 
|**Business Value**<br/>`BusinessValue` | Double | A subjective unit of measure that captures the relative business value of a product backlog item  or feature compared to other items of the same type. An item that is assigned a higher number should be considered as having more business value than an item that is assigned a lower number. <br/>`Microsoft.VSTS.Common.BusinessValue`   |     
|**Changed By**<br/>`ChangedBy`<br/>`ChangedByUserSK` | UserSK | The name of the person who modified the work item most recently.<br/>`System.ChangedBy`   |   
|**Changed Date**<br/>`ChangedDate`  | DateTime | Date and time when the work item was modified.<br/>`System.ChangedDate`  | 
|`ChangedDateSK` | Int32 | The date the work item was modified, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities.  |      
|`ChangedOn`  | Navigation | Navigational property to the `Date` entity for the date the work item was modified, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. |    
|**Closed By**<br/>`ClosedBy`<br/>`ClosedByUserSK` | UserSK | The name of the person who closed a work item. <br/>`Microsoft.VSTS.Common.ClosedBy`   | 
|**Closed Date**<br/>`ClosedDate`<br/>`ClosedDateSK`<br/>`ClosedOn` | DateTime | Date and time when a work item was closed.<br/>`Microsoft.VSTS.Common.ClosedDate`   |    
|**Comment Count**<br/>`CommentCount` | Int32 | The number of comments added to the **Discussion** section of the work item.<br/>`System.CommentCount`  |   
|**Committed**<br/>`Committed`  | String | Indicates if the requirement is committed in the project. Valid values are **Yes** or **No**. (CMMI process)<br/>`Microsoft.VSTS.CMMI.Committed`   |  
|`CompletedDateSK`  | Int32 | Navigational property date captured by Analytics that stores when the work item entered a workflow **State** associated with the *Completed* workflow state category.   |
|`CompletedOn`  | Navigation | Navigational property to the `Date` entity for the date the work item entered a workflow **State** associated with the *Completed* workflow state category, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. |
|**Completed Work**<br/>`CompletedWork` | Double | A measure of the amount of work spent on a task.<br/>`Microsoft.VSTS.Scheduling.CompletedWork`  |    
|**Created By**<br/>`CreatedBy`<br/>`CreatedByUserSK`| UserSK | The name of the person who created the work item. <br/>`Microsoft.VSTS.Common.CreatedBy`  | 
|**Created Date**<br/>`CreatedDate`<br/>`CreatedDateSK`| DateTime | The date the work item was created, expressed in the [time zone defined for the organization](../../organizations/accounts/change-organization-location.md). Commonly used for filtering and for display. <br/>`Microsoft.VSTS.Common.CreatedDate`    |  
|`CreatedDateSK`| Int32 | The date the work item was created, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. | 
|`CreatedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was created, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. |
|**Cycle Time Days**<br/>`CycleTimeDays` | Double | Cycle time is calculated from first entering an *In Progress* or *Resolved* state category to entering a *Completed* state category. To learn more, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md). |  
|**Discipline**<br/>`Discipline` | String | The type of activity or discipline that is assigned to a task. Allowed values are: *Analysis**, **Development**, **Test**, **User Education**, and **User Experience**. (CMMI process) <br/>`Microsoft.VSTS.Common.Activity`   |    
|**Due Date**<br/>`DueDate` | DateTime | The forecasted due date by which an issue or work item will be resolved. (Agile process)<br/>`Microsoft.VSTS.Scheduling.DueDate`    | 
| **Effort**<br/>`Effort` | Double | An estimate for the amount of work that a product backlog item (Scrum process) or issue (Basic process) will require to implement. <br/>`Microsoft.VSTS.Scheduling.Effort`  |    
|**Finish Date**<br/>`FinishDate` | DateTime | Date and time when the schedule indicates that a work item will be completed.<br/>`Microsoft.VSTS.Scheduling.FinishDate`  |   
|**Found In**<br/>`FoundIn` | String | The product build number, also known as a revision, in which a bug was found.<br/>`Microsoft.VSTS.Build.FoundIn`  |   
|**InProgress Date** <br/>`InProgressDate`  | DateTime | Analytics stored date that captures the date-time when a work item was moved into a **State** that belongs to the *In Progress* state category.  |  
|`InProgressDateSK`   | Int32 | The date the work item was moved into a **State** that belongs to the *In Progress* state category, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. |  
|**Integration Build**<br/>`IntegrationBuild` | String | The product build number that incorporates the code or fixes a bug.<br/>`Microsoft.VSTS.Build.IntegrationBuild`    | 
|**Is Current**<br/>`IsCurrent` | Boolean | Supports filtering the data to view the most recent snapshot of the filtered set of work items by setting the value to `True`.<br/>Valid for these entity types: `WorkItemRevision`, `WorkItemBoardSnapshot`, and `BoardLocation`.  |  
|**Is Last Revision of Day**<br/>`IsLastRevisionOfDay` | Boolean | Indicates that the snapshot represents the last revision of the day when set to `True`.|  
|**Is Last Revision of Period**<br/>`IsLastRevisionOfPeriod` | Boolean | Indicates that the snapshot represents the last revision of the period when set to `True`. |  
|**Issue**<br/>`Issue` | String | Indicates that the shared step is associated with an expected result. Allowed values are **Yes** and **No**. <br/>`Microsoft.VSTS.Common.Issue`   |  
| **Lead Time Days**<br/>`LeadTimeDays`  | Double | Lead time is calculated from work item creation or entering a *Proposed* state category to entering a *Completed* state category. To learn more, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md).    | 
|**Original Estimate**<br/>`OriginalEstimate` | Double | A measure of the amount of work that is required to complete a task. <br/>`Microsoft.VSTS.Scheduling.OriginalEstimate`   | 
|**Parent Work Item Id** <br/>`ParentWorkItemId` | Int32 | The unique ID that identifies the work item linked to as a parent. Useful for generating rollup reports. The **Parent** field is available from Azure DevOps Server 2020 and later versions. Valid for these entity types: `WorkItemRevision` and `WorkItem`. <br/>`System.Parent`   |  
|**Priority**<br/>`Priority` | Int32 | A subjective rating of the bug, issue, task, or test case as it relates to the business. Values include: - **1**, **2**, or **3**. <br/> `Microsoft.VSTS.Common.Priority` |  
|**Project Name**<br/>`ProjectName` | Navigation | Name of the project to which the work item belongs. For details, see [Calendar date, Project, and User metadata reference, Project properties](entity-reference-general.md#projects).<br/>`System.TeamProject`  | 
|`ProjectSK`  | GUID | GUID assigned to the project to which the work item belongs.  | 
|**Rating** <br/>`Reason` | String | The number of stars that an item receives from a reviewer in a star-based ranking system. (Feedback Response) The number is stored in the system and written as follows:- **0 - Not Rated**, **1 - Poor**, **2 - Fair**, **3 - Good**, **4 - Very Good**, and **5 - Excellent**.  Valid for these entity types: `WorkItemRevision` and `WorkItem`.<br/>`Microsoft.VSTS.Common.Rating`  | 
| **Reason** <br/>`Reason` | String | The reason why the work item is in the current state. Each transition from one workflow state to another is associated with a corresponding reason. <br/>`System.Reason`  | 
|**Remaining Work** <br/>`RemainingWork` | Double | A measure of the amount of work that remains to finish a task.<br/>`Microsoft.VSTS.Scheduling.RemainingWork` | 
|**Resolved By** <br/>`ResolvedBy` <br/>`ResolvedByUserSK` | UserSK | The name of the team member who resolved the bug or user story.<br/>`Microsoft.VSTS.Common.ResolvedBy` | 
|**Resolved Date** <br/>`ResolvedDate` | DateTime | The date and time when the bug or user story was resolved. <br/>`Microsoft.VSTS.Common.ResolvedDate` | 
|`ResolvedDateSK`| Int32 | The date the work item was resolved, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. | 
|`ResolvedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was resolved, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. |
|**Resolved Reason**<br/> `ResolvedReason` | String | The reason that the bug was resolved (for example, it was fixed).<br/>`Microsoft.VSTS.Common.ResolvedReason`   |  
|**Revision**<br/> `Revision` | Int32 | A number that is assigned to the historical revision of a work item.<br/>`System.Rev`   |  
|**Revised Date**<br/> `RevisedDate` | DateTime | Date and time when a work item was modified or updated.  |  
|`RevisedDateSK`| Int32 | The date the work item was revised, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities.  | 
|`RevisedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was revised, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. |
|**Risk** <br/>`Risk` | Double | A subjective rating of the relative uncertainty about the successful completion of the user story. Valid values include: **1 - High**, **2 - Medium**, and **3 - Low**. <br/>`Microsoft.VSTS.Common.Risk` | 
|**Severity**<br/>`Severity`  |  Double | A subjective rating of the effect of a bug, issue, or risk on the project. Valid values include: **1 - Critical**, **2 - High**, **3 - Medium**, and **4 - Low**. <br/> `Microsoft.VSTS.Common.Severity` | 
|**Size** <br/>`Size`   | Double | An estimate for the amount of work that a requirement (CMMI process) requires to implement. <br/>`Microsoft.VSTS.Scheduling.Size`  | 
|**Stack Rank** <br/>`StackRank`  | Double | A number assigned by a system background process used to stack rank or track the sequence of items on a backlog or board. (Agile, Scrum, and Basic processes) <br/>`Microsoft.VSTS.Common.StackRank`  |  
| **Start Date**<br/>`StartDate`  | DateTime | Date and time assigned to a work item for work to start. <br/>`Microsoft.VSTS.Scheduling.StartDate` | 
| **State** <br/>`State`  | String | The current state of the work item. The valid values for state are specific to each type of work item and customizations made to it.<br/>`System.State` | 
|**State Category** <br/>`StateCategory`   | String | State categories determine how Azure Boards and select dashboard widgets treat each workflow state. The state categories in use include:  *Proposed*, *In Progress*, *Resolved*, *Removed*, and *Completed*. To learn more, see [How to use workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md). Valid only for the `WorkItemRevision` entity type. |  
|**State Change Date** <br/>`StateChangeDate` | DateTime | The date and time when the value of the **State** field changed. <br/>`Microsoft.VSTS.Common.StateChangeDate` | 
|`StateChangeSK`| Int32 | The date the State for a work item was changed, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities.  | 
|`StateChangeOn` | Navigation | Navigation property to the `Date` entity for the date the State for a work item was changed, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in ```groupby``` statements. | 
|**Story Points** <br/>`StoryPoints`| Double | An estimate for the amount of work that a user story (Agile process) requires to implement, commonly aggregated as a sum. <br/>`Microsoft.VSTS.Scheduling.StoryPoints` | 
|**Tags**<br/>`TagNames`  | String | Semicolon delimited list of tags assigned to one or more work items for the purposes of filtering or querying.<br/>`System.Tags` | 
|**Target Date** <br/>`TargetDate`   | DateTime | The forecasted due date by which an issue or other work item will be resolved or completed.<br/>`Microsoft.VSTS.Scheduling.TargetDate`  | 
|**Test Suite Type** | String | Specifies the type of test suite. Valid values include: *Query Based*, *Requirement Based*, and *Static*.<br/>`Microsoft_VSTS_TCM_TestSuiteType`  | 
|**Test Suite Type Id** | Int64 | A system assigned number that corresponds to the test suite category and only applicable to test suites. Assigned values are: 1 (Static), 2 (Query-based), and 3 (Requirement-based).<br/>`Microsoft_VSTS_TCM_TestSuiteTypeId`  | 
|**Time Criticality** <br/>`TimeCriticality` | Double | A subjective unit of measure that captures how the business value lessens over time. Higher values indicate that the epic or feature is inherently more time critical than those items with lower values. <br/>`Microsoft.VSTS.Common.TimeCriticality`  | 
|**Title** <br/>`Title`  | String | A short description that summarizes what the work item is and helps team members distinguish it from other work items in a list. <br/>`System.Title`  | 
| **Value Area** <br/>`ValueArea`   | String | The area of customer value addressed by the epic, feature, or backlog item. Values include: **Architectural** or **Business**.<br/>`Microsoft.VSTS.Common.ValueArea`  | 
|**Watermark**<br/>`Watermark` | String | A system-managed field that increments with changes made to a work item. Valid for these entity types: `WorkItemRevision` and `WorkItem`.<br/>`System.Watermark` | 
|**Work Item Id**<br/>`WorkItemId` | Int32 | The unique identifier that is assigned to a work item. Work item IDs are unique across all projects and within an organization or project collection.<br/>`System.Id` | 
|`WorkItemRevisionSK`  | Int32 | The Analytics unique key for the work item revision that is used by external tools to join related entities.  | 
|**Work Item Type** <br/>`WorkItemType` | String | The name of the work item type. Work item types are defined based on the process used when you created your project. For an overview, see [Choose process](../../boards/work-items/guidance/choose-process.md).<br/>` System.WorkItemType` |

### Navigation properties 

Navigation properties in OData are the reference attributes of an entity that points to another entity. The following table provides a summary of the navigational properties,  their referential constraints, and the entity types for which they're valid. 
 
| Display name | Name <br/>Referential constraint and property | Valid for Entity Types | 
|--------------|-----------------------------------------------|-------------------------|  
|                 | `ChangedOn`<br/>`ChangedDateSK`, `DateSK` |   `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
|                 | `ClosedOn` <br/> `ClosedDateSK`, `DateSK` |   `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
|                 | `CreatedOn`<br/> `CreatedDateSK`, `DateSK` |  `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
|                 | `ResolvedOn`<br/>`ResolvedDateSK`, `DateSK` |  `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`  | 
|                 | `StateChangeOn`<br/>`StateChangeDateSK`, `DateSK` | `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`  | 
|                 | `InProgressOn`<br/>`InProgressDateSK`, `DateSK` |  `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
|                 | `CompletedOn`<br/>`CompletedDateSK`, `DateSK` | `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
|                 | `ChangedOn`<br/> `ChangedDateSK`, `DateSK` | `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` 
|                 | `RevisedOn`<br/>`RevisedDateSK`, `DateSK` |    `WorkItemRevision`, `WorkItemSnapshot`  | 
|                 | `Date`     <br/> ` DateSK`, `DateSK`    |   `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` |  
| **Areas**       | `Area` <br/> `AreaSK`         |    `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`  | 
| **BoardLocation** |                                       |  `WorkItemRevision`, `WorkItem`, `WorkItemBoardSnapshot` | 
| **Iterations**  | `Iteration`  <br/> `IterationSK`   |   `WorkItemRevision`,  `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
| **Assigned To**  | `AssignedTo`  <br/> `AssignedToUserSK`,  `UserSK` |    `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
| **Changed By**  | `ChangedBy`  <br/> `ChangedByUserSK`,  `UserSK` |    `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
| **Created By**  | `CreatedBy`  <br/> `CreatedByUserSK`, `UserSK` |  `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot` | 
| **Activated By**  | `ActivatedBy`  <br/> `ActivatedByUserSK`, `UserSK` |    `WorkItemRevision`,`WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`  | 
| **Closed By**  | `ClosedBy`  <br/> `ClosedBySK`, `UserSK` |   `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`  | 
| **ResolvedBy**  | `ResolvedBy`  <br/> `ResolvedByUserSK`, `UserSK` |  `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
| **Teams**      |          | `Area`, `BoardLocation`, `Iteration`, `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemBoardSnapshot`| 
| **Tags**       |          | `WorkItem`, `WorkItemRevision`, `WorkItemBoardSnapshot`  | 
| **Project**   | `Project`  <br/> `ProjectSK`, `ProjectSK` |    `Tag`, `WorkItemBoardSnapshot`, `WorkItemLink`, `WorkItemRevision`, `WorkItemSnapshot`, `WorkItemTypeField`,  | 
| **Processes** |            | `WorkItemRevision`, `WorkItem`, `WorkItemSnapshot` |  
| **Revisions** |           | `WorkItem`  |  
| **Links**     |          | `WorkItem`  |  
| **Children**    |          |  `WorkItem`  |  
| **Parent**      |           |  `WorkItem`  |  
| **Descendants** |            |   `WorkItem`  |  
| **WorkItem**    | `WorkItemId`     |  `WorkItemRevision`   |  


### Predict functions

The following two functions are supported for the **WorkItem** entity. These functions are used in supporting predictive trends on select Analytics built-in reports and widgets.  
- `PredictTags`
- `Predict`
 

<a id="kanban-board-properties-fields" /> 


## BoardLocation and WorkItemBoardSnapshot    

Properties listed and described in the following table are defined for the following entity types, unless specifically noted. With these fields, you can filter work item data based on the status of a work item within a team's Kanban board column, swimlane, or backlog level. 

- `BoardLocation`
- `WorkItemBoardSnapshot`  

For an example that queries the `WorkItemBoardSnapshot` entity set, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md).

|**Display name**<br/>`Property name` | **Data type** | **Description**<br/>`Reference name` | 
|-------------------------------------|---------------|--------------------------------------|
|**Board Id**  <br/>`BoardId` | Guid | The unique GUID assigned to a Kanban board. Each team is associated with one or more Kanban boards.  | 
|**Board Category Reference Name**<br/>`BoardCategoryReferenceName` | String | The name assigned to the category of work item types used to populate a Kanban board. For example, the product backlog board is associated with the Requirements category. To learn more, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md).  | 
| **Board Name** <br/>`BoardName` | String | The name assigned to the Kanban board. For example, *Stories*, *Backlog Items*, *Features*, and *Epics*.  | 
|**Board Level**<br/>`BoardLevel` | Int32 | The number assigned to the Kanban board based on where it sits within the hierarchy of Kanban boards.  | 
|**Backlog Type** <br/>`BacklogType` | String | The name of the type of backlog. For example, Iteration, Requirement, or Portfolio.   | 
|**Column Name**<br/>`ColumnName` | String | The name of the Kanban board column that a work item is currently assigned, such as *Active*, **Closed**, **Committed**, **Done**, or other custom column label. <br/> `System.BoardColumn`   | 
|**Column Order**<br/>`ColumnOrder` | Int32 | The number assigned to the Kanban board column in terms of its sequence within the Kanban board.   |  
|**Done** <br/>`Done` | Enumerated | Indicates the split-column location. Valid values are listed below for [BoardColumnSplit](#boardcolumnsplit-enumerated-members).   | 
|**Column Item Limit**<br/>`ColumnItemLimit` | Int32 | The number assigned to the Kanban board column in terms of its sequence.  |   
|**Is Board Visible** <br/>`IsBoardVisible` | Boolean | Indicates if the team has elected to make a board visible or not.  | 
|**Is Column Split**<br/>`IsColumnSplit`  | Boolean | Indicates if a column has been split into **Doing** and **Done** columns as described in [Split columns on your Kanban board to show work in progress](../../boards/boards/split-columns.md).  | 
|**Is Current** <br/>`IsCurrent`  | Boolean | Property that supports filtering the data to view the most recent snapshot of the filtered set of work items by setting the value to `True`. | 
|**Is Default Lane** <br/>`IsDefaultLane` | Boolean | Property that indicates the work item is assigned to the default swimlane (True) or not (False).  |    
|**Is Done** <br/>`IsDone` | Boolean | The current assignment of the work item to **Doing** (False) or **Done** (True) within a Kanban column. Only assigned when [split-columns](../../boards/boards/split-columns.md) is enabled for a Kanban board column. <br/>`System.BoardColumnDone`   | 
|**Lane Id** <br/>`LaneId` | Guid | The unique GUID assigned to a Kanban board swim lane. Each team can add one or more swim lanes to a Kanban board. To learn more about swimlanes, see [Speed up your team's work by using swimlanes in your Kanban board](../../boards/boards/expedite-work.md). | 
|**Lane Name**<br/>`LaneName` | String | The name assigned to the Kanban board swimlane.<br/>`System.BoardLane`   |  
|**Lane Order**<br/>`LaneOrder` | Int32 | The number assigned to the Kanban board swimlane in terms of its sequence. | 
 
### BoardColumnSplit enumerated members

The following table lists the member names for the `BoardColumnSplit` enumerated type, which can be used to filter on work items in the **Doing** or **Done** board column.
 
| Member name           | Value        | Display name          |  
|-----------------------|--------------|-----------------------|  
|`Doing`                | 0            | Doing                 |        
|`Done`                 | 1            | Done                  |       
|`Unknown`              | 2            | Unknown (not split)   |   


To learn more about board columns for a team, see the following articles:  
- [Add columns to your Kanban board to manage your workflow](../../boards/boards/add-columns.md)
- [Split columns on your Kanban board to show work in progress](../../boards/boards/split-columns.md) 

## Areas 

The following properties are valid for the **Areas** entity set, which is associated with the **Area Path** field. Surrogate keys associated with **Area** include `AreaSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on Area Path assignments. 
 
|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated. |  
|    | `Number` | Int32 | An integer value assigned to an Area Path node when it's created. | 
|**Depth** | `Depth` | Int32 | The level at which the Area Path is defined based on its depth from the root level.   |  
|**Area Id** | `AreaId` | GUID | Unique identifier assigned to an Area Path when it's created.  | 
|**Area Level 1** through<br/>**Area Level 14** | `AreaLevel1` through<br/>`AreaLevel14`  | String | The name associated with the node level of an area path. Up to 14 nested levels are supported. For example, Area Level 1 always corresponds to the root node and the project name.    |
|**Area Name** | `AreaName` | String | Name defined for the Area Path when it's created.  | 
|**Area Path** | `AreaPath` | String | Full path of the Area Path starting with the root node.   |  

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

Navigation properties for the **Area** entity type and **Areas** entity set include `Project` and `Teams`.  

To learn more about **Area Paths**, see the following articles:  
- [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md)
- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) 

## Iterations

The following properties are valid for the **Iterations** entity set, which is associated with the **Iteration Path** field. Surrogate keys associated with **Iteration** include `IterationSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on Iteration Path assignments. 

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|  |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|    | `Number` | Int32 | An integer value assigned to an Iteration Path node when it's created. | 
|**Depth** | `Depth` | Int32 | The level at which the Iteration Path is defined based on its depth from the root level.   | 
|**End Date** | `EndDate` | DateTime | End date defined for the Iteration Path.   |  
|**IsEnded** | `IsEnded` | Boolean | When set to True, indicates that the Iteration Path End Date is in the past.   |   
|**Iteration Id** | `IterationId` | GUID | Unique identifier assigned to an Iteration Path when it's created.  | 
|**Iteration Level 1** through<br/>**Iteration Level 14** | `IterationLevel1` through<br/>`IterationLevel14`  | String | The name associated with the node level of an iteration path. Up to 14 nested levels are supported. For example, the Iteration Level 1 always corresponds to the root node and the project name.   | 
|**Iteration Name** | `IterationName` | String | Name defined for an Iteration Path when it's created.  | 
|**Iteration Path** | `IterationPath` | String |  Full path of the Iteration Path starting with the root node. The iteration must be a valid node in the project hierarchy.  <br/>`System.IterationPath`    | 
|**Start Date** | `StartDate` | DateTime | Start date defined for the Iteration Path.   |  

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

Navigation properties for the **Iteration** entity type and **Iterations** entity set include `Project` and `Teams`.  

To learn more about **Iteration Paths**, see the following articles:  
- [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md)
- [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 

## Processes

The following properties are valid for the **Process** entity type and **Processes** entity set. Surrogate keys associated with **Process** include `ProcessSK`, `ProjectSK`, and `TeamSK`. You can use these properties to filter or report on work tracking data based on work item types used by a project or team. 

> [!NOTE]   
> The **Process** entity type and **Processes** entity set are supported with **v-2.0**, **v3.0-preview** and **v4.0-preview** versions of Analytics.  

You can use these properties to filter on work tracking data based on a backlog level

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|    | `AnalyticsUpdatedDate` | DateTime |Watermark that indicates the last time the Analytics data was updated. | 
|    | `ProjectSK` | GUID |  Project key associated with the process.    |  
|    | `TeamSK` | GUID |  Team key associated with the process.     |  
|**Backlog Category Reference Name** | `BacklogCategoryReferenceName` | String | The category reference name assigned to the backlog associated with the work item type. Examples include `Microsoft.EpicCategory`, `Microsoft.FeatureCategory`, `Microsoft.RequirementCategory`, `Microsoft.TaskCategory`.     | 
|**Backlog Name** | `BacklogName` | Boolean | The reference name assigned to the backlog associated with the work item type  |   
|**Backlog Type** | `BacklogType` | GUID | Unique identifier assigned to an Iteration Path when it's created.  | 
|**Backlog Level** | `BacklogLevel`  | String | Specifies the backlog level associated with the work item type<!---, where 1 corresponds to the top-level portfolio backlog-->. If the work item type isn't associated with a backlog level, the value returned is `null`.  | 
|**Work Item Type** | `WorkItemType` | String | Name defined for a work item type.  | 
|**Has Backlog** | `HasBacklog` | String |  Indicates if the work item type belongs to a backlog.      | 
|**Is Hidden Type** | `IsHiddenType` | Boolean | Indicates if the work item type has been disabled.   |  
|**Is Bug Type** | `IsBugType` | Boolean | Indicates if the work item type belongs to the Bug category.   | 
|**Is Deleted** | `IsDeleted` | Boolean | Indicates if the work item type has been deleted.   |  

To learn more about process backlogs and work item types, see the following articles:  
- [Create and manage inherited processes](../../organizations/settings/work/manage-process.md)
- [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md) 
- [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md) 

### Custom work item types and custom backlog categories

Data for custom work item types are automatically added to the Analytics service. 

A custom category is created when a custom work item type and backlog level are defined. `Custom_` is prepended to the category GUID. For example, for the **Portfolio** custom work item type with a Portfolios backlog, a GUID is assigned to the custom category, such as `Custom.49b81c4e-9c4f-4c04-94fd-d660cbf3a000`. 


## Tags

The following properties are valid for the **Tags** entity set. Surrogate keys associated with **Tag** include `TagSK` and `ProjectSK`. Navigational properties include [`Project`](entity-reference-general.md#projects) and its referential constraint `ProjectSK`. To learn more about using tags, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md).

You can use these properties to filter or report on work tracking data. 

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|   
|**Tag Id** | `TagId` | GUID | The unique ID assigned to the tag when it's created.    |  
|**Tag Name** | `TagName` | String | The tag name.  |   


## Teams

The following properties are valid for the **Team** entity type and **Teams** entity set.  Surrogate keys associated with **Team** include `TeamSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on team assignments. For information on using and adding teams, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md) and [Create or add a team](../../organizations/settings/add-teams.md).

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated. |   
|**Team Id** | `TeamId` | GUID | The unique ID assigned to the team when it's created.    |  
|**Team Name** | `TeamName` | String | The team name.  |   


Navigation properties for the **Teams** entity set include `Projects`, `Areas`, and `Iterations`.

## WorkItemLinks

The following properties are valid for the **WorkItemLinks** entity set. The property reference surrogate key is `WorkItemLinkSK`. 
Query **WorkItemLinks** to report on parent/child, related, predecessor/successor or other link types. 

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|  
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated. |
|    | `WorkItemLinkSK` | Int32 |  The surrogate key assigned to the `WorkItemLink` entity. |  
|**Created Date** | `CreatedDate` | GUID | Date when the link was created.    | 
|**Comment** | `Comment` | String |Comment added when the link was created.
|**Deleted Date** | `DeletedDate` | String | Date when the link was deleted.  | 
|**Link Type Id** | `LinkTypeId` | Int32 | The ID assigned to the target work item linked to.    |  
|**Link Type Name** | `LinkTypeName` | String | The friendly name assigned to the link type.  |   
|**Link Type Reference Name** | `LinkTypeReferenceName` | String | The reference name assigned to the link type.  | 
|**Link Type Is Acyclic** | `LinkTypeIsAcyclic` | Boolean | The value of the link type attribute that indicates the link type allows circular relationships when the value is set to True. For example, tree type links restrict circular relationships.   | 
|**Link Type Is Directional** | `LinkTypeIsDirectional` | Boolean |  The value of the link type attribute that indicates the link type is directional. Directional link types are defined in pairs with a forward and reverse component.  |  
|**Source Work Item Id** | `SourceWorkItemId` | Int32 | The ID assigned to the source work item linked to.    | 
|**Target Work Item Id** | `TargetWorkItemId` | Int32 | The ID assigned to the target work item linked to.    |    


Navigation properties for the **WorkItemLink** entity type include `Projects`, `SourceWorkItem`, and `TargetWorkItem`.

To learn more about links and link types, see the following articles:  
- [Use links to view dependencies and track related work](../../boards/queries/link-work-items-support-traceability.md)
- [Link user stories, issues, bugs, and other work items in Azure Boards](../../boards/backlogs/add-link.md)
- [Reference guide for link types used in Azure DevOps](../../boards/queries/link-type-reference.md)

<a id="work-item-type-field-properties" /> 


## WorkItemTypeFields
 
The following properties are valid for the **WorkItemTypeFields** entity set. The property reference keys are `FieldName`, `ProjectSK`, and `WorkItemType`. 

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------| 
|**Field Name** | `FieldName` | String | Friendly name assigned to a field by the system or when it's created.  |  
|**Field Reference Name** | `FieldReferenceName` | String | Reference name assigned to a field by the system or when a custom field is created.    | 
|**Field Type** | `FieldType` | String | Data type assigned to a field.  | 
|**Work Item Type** | `WorkItemType` | String | Name of work item types that a field is defined for.    | 


Navigation properties include `Project`.

For an index of all fields defined for a project, see [Field descriptions for work item fields](../../boards/work-items/guidance/work-item-field.md). For additional information, see the following articles: 
- [Work item fields and attributes](../../boards/work-items/work-item-fields.md)
- [Add and manage fields (Inheritance process)](../../organizations/settings/work/customize-process-field.md) 

### Custom properties 

Custom fields are automatically added to the Analytics service as a custom property. `Custom_` is prepended to the property name. For example, the custom field, **Risk Opportunity** is represented in the metadata as listed below. 

> [!div class="tabbedCodeSnippets"]
```XML
<Property Name="Custom_RiskOpportunity" Type="Edm.Double">
<Annotation Term="Display.DisplayName" String="Risk Opportunity"/>
<Annotation Term="Ref.ReferenceName" String="Custom.RiskOpportunity"/>
<Annotation Term="Display.Description" String="Risk Reduction | Opportunity Enablement Value. Enter a value from 1 to 5. 5 represents high risk reduction or high opportunity enablement."/>
</Property>
```
 

<!--- CMMI specific fields not added to navigation properties --> 

 
## Related articles

- [Historical data representation in Analytics](analytics-historical-filtering.md)
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [About work item fields and attributes](../../boards/work-items/work-item-fields.md)
- [Index of work item fields](../../boards/work-items/guidance/work-item-field.md) 
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md) 

 
<!--- 
## About data types and data models 
 

## Customizing a process

You can add fields, work item types, and change the menu selection of a pick list. The Analytics service automatically picks up changes made and updates the metadata for the data model. 

To perform any of the following tasks, see the relevant article. 

- To change the menu selection, see [Add and manage fields  (Inherited process)]() or [Add or modify a field, customize a picklist] (On-premises XML process).
 
- Note about how some fields are defined in one process, but can be added to other work item types in other processes. 
 
> [!NOTE]
> Changes to custom work item fields will affect the shape of your data model and will affect all work item revisions. For instance, if you add a new field, queries on pre-existing revision data will reflect the presence of the new field. 

 
--> 
