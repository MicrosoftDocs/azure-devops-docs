---
title: Azure Boards Analytics metadata reference
titleSuffix: Azure DevOps
description: See the properties, enumerated types, and members metadata in the Analytics service for Azure Boards.
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: reference
monikerRange: "<=azure-devops"
ms.date: 11/07/2022
#customer intent: As an Azure Boards user, I want to understand the entity types and properties Azure Analytics uses for work tracking, so I can run queries and create reports to track and communicate progress.
---

# Metadata reference for Azure Boards Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

The Analytics service collects all Azure Boards work tracking definition and update activity. You can run Analytics queries directly in your browser and use a combination of properties to filter a query, aggregate data, or build a report. For more information, see [Define basic queries using OData Analytics](../extend-analytics/wit-analytics.md).

This article describes most of the properties you can use to generate a work tracking Analytics report. Analytics stores all work tracking fields as properties except for HTML/rich-text and history fields. Custom fields are automatically added to Analytics as custom properties.

[!INCLUDE [note-analytics-early-draft](../includes/note-analytics-data-model.md)]

## Entity sets overview

When you query Analytics for work tracking data, query the **WorkItems** entity set to generate status and rollup reports. Use the **WorkItemSnapshot** entity set to generate trend, burndown, and burn up reports.

Use other entity types, such as **Area**, **Iteration**, **Project**, or **Team** to filter data or select properties to report on. For example reports, see [Sample reports and quick reference index](../extend-analytics/quick-ref.md).

> [!NOTE]  
> To generate status and trend reports on test runs, test results, or other test data, query the **WorkItems** and **WorkItemSnapshot** entity types and filter based on the **TestRuns**, **TestPoints**, **TestResultsDaily**, **TestSuite**, or **TestPointHistorySnapshot** entity types. For more information, see [Test metadata reference for Azure DevOps](entity-reference-test-plans.md).

|Entity set  | Entity type  | Description |
|------------|-------------|-------------|  
|[Areas](#areas) | **Area** |The work item **Area Paths**, with properties for grouping and filtering by area hierarchy. |
|[Dates](entity-reference-general.md#dates)|**CalendarDate**|The dates used to filter and group other entities using relationships.| 
|[Iterations](#iterations) | **Iteration** |The work item **Iteration Paths**, with properties for grouping and filtering by iteration hierarchy.|
|[BoardLocations](#kanban-board-properties-fields) |**BoardLocation**|  The board cell locations, as identified by board column, swimlane, and split, including historic board settings. For a description of each board field, see [Workflow and board fields](../../boards/queries/query-by-workflow-changes.md#workflow-and-board-fields).|
|[Processes](#processes) |**Process** | Backlog information used to expand or filter work items and work item types. For an example that uses **Processes** to filter a report, see [Requirements tracking sample report](../powerbi/sample-stories-overview.md). Supported for Analytics v2.0 version and later. |
|[Projects](entity-reference-general.md#projects)|**Project** |All projects defined for an organization or project collection. |
|[Tags](#tags) | **Tag** |All work item tags for each project. For an example that uses **Tags** to filter a report, see [Release burndown sample report](../powerbi/sample-boards-releaseburndown.md). |
|[Teams](#teams) | **Team** |All teams defined for the project. For an example that uses **Teams** to filter a report, see [Add a Team slicer to a Power BI report](../powerbi/sample-boards-teamslicer.md).  |
|[Users](entity-reference-general.md#users)|**User** |User information used to expand or filter various work item properties, for example **Assigned To** or **Created By**. |
|[WorkItemBoardSnapshot](#kanban-board-properties-fields) |**WorkItemBoardSnapshot** | Composite entity type that describes the state of each work item on each calendar date, including board location. Used to generate trend reports. For a sample report, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md). |
|[WorkItemLinks](#workitemlinks)| **WorkItemLink** |The links between work items, for example **Child**, **Parent**, and **Related**. Includes only the latest revision of links, with no history, and doesn't include hyperlinks.  |
|[WorkItemRevisions](#property-names-fields) |**WorkItemRevision** |All historic work item revisions, including the current revision. Doesn't include deleted work items. |  
|[WorkItemSnapshot](#property-names-fields) |**WorkItemSnapshot** |Composite entity type that describes the state of each work item on each calendar date. Used to support trend reporting. For a sample report, see [Bug trends sample report](../powerbi/sample-boards-bugtrend.md).  |
|[WorkItems](#property-names-fields) |**WorkItem** |The current state of work items. Used to support status reports. For a sample report, see [Rollup child work item values to parent sample report](../powerbi/sample-boards-rollup.md). |
|[WorkItemTypeFields](#workitemtypefields)|**WorkItemTypeField** |The work item properties for each work item type and process. Used to support building reports. |

### Snapshots

The work tracking snapshot entity sets are **WorkItemSnapshot** and **WorkItemBoardSnapshot**. A snapshot writes to Analytics at the same time each day and provides a record of the values defined for a work item for that day. You can use snapshots to generate trend reports.

By default, all snapshot tables are modeled as daily snapshot fact tables. A query for a time range gets a value for each day, and long time ranges result in a large number of records. If you don't need such high precision, you can use weekly or monthly snapshots. For more information, see [Use weekly or monthly snapshots for trend queries that span a long time period](../extend-analytics/odata-query-guidelines.md#-do-use-weekly-or-monthly-snapshots-for-trend-queries-that-span-a-long-time-period). 

### Work item revisions

Each time you update a work item, the system creates a new revision and records it in the `System.RevisedDate` field, which is useful for specifying a history filter. You can represent the revised date by the `RevisedDate (DateTime)` and `RevisedDateSK (Int32)` properties.

Use the latter date surrogate key property for best performance. This key shows the date a revision was created, or shows the OData datetime null value `"9999-01-01T00:00:00Z"` for active or incomplete revisions. If you want all the dates since the `{startDate}`, inclusive, add the following filter to your query: `RevisedDateSK eq null or RevisedDateSK gt {startDateSK}`.

You use the **WorkItemRevisions** entity set to load all the revisions for a given work item. The query returns all historic work item revisions, including the current revision, for the work items you filter on, not including deleted work items. 

<a id="property-names-fields"></a> 
## Shared properties across entity types 

The properties you can select in an Analytics view correspond to regular work tracking fields and selected Analytics properties, such as **Cycle Time Days** and **Lead Time Days**. These properties are defined for the following entity types, unless otherwise specified:

- **WorkItem**  
- **WorkItemRevision**  
- **WorkItemSnapshot**  
- **WorkItemBoardSnapshot**  
 
>[!NOTE]
>- The Analytics service doesn't store data for long text fields assigned the HTML or rich text data type, such as `Description` and `History` fields, and doesn't store link or attached file counts. For a complete list of fields defined in the default process templates, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). For data type descriptions, see [Query fields, operators, and macros](../../boards/queries/query-operators-variables.md).
>
>- The following table doesn't include all properties associated with Scrum and Capability Maturity Model Integration (CMMI) process-specific fields. For a list of these fields, see [Fields used to track CMMI work items](../../boards/work-items/guidance/work-item-field.md#fields-used-to-track-cmmi-work-items).
>
>- Date-based or user-based properties are associated with the **CalendarDate** and **User** entity sets described in [Calendar date, Project, and User metadata reference](entity-reference-general.md).

The following table lists and describes most of the properties you can select in an Analytics view, including regular work tracking fields and other Analytics properties.

|Display name|Property name | Data type | Description|Reference name|
|--------------|-----------------------|---------------|------------------|--------------------|
|**Accepted By**|`Microsoft_VSTS_CodeReview_AcceptedBy` | UserSK | Name of the person who responded to a code review. (CMMI process)|`Microsoft.VSTS.CodeReview.AcceptedBy` |
|**Accepted Date**| `AcceptedDate` | DateTime | Date and time when the person responded to the code review. (CMMI process)|`Microsoft.VSTS.CodeReview.AcceptedDate`  |
| **Activated By**|`ActivatedBy`, `ActivatedByUserSK` | UserSK | Name of the team member who activated or reactivated the work item.|`Microsoft.VSTS.Common.ActivatedBy`   |
|**Activated Date**| `ActivatedDate` | DateTime | Date and time when a team member activated or reactivated a bug or work item.|`Microsoft.VSTS.CodeReview.ActivatedDate` |
|**Activity**|`Activity` | String | Type of activity or discipline assigned to perform a task. Allowed values are: **Deployment**, **Design**, **Development**, **Documentation**, **Requirements**, and **Testing**. (Agile, Scrum, and Basic processes) |`Microsoft.VSTS.Common.Activity`  |
| |`AnalyticsUpdatedDate` | DateTimeOffset | Data and time the entity was last updated. |
|**Application Type**  | | String | Type of application that stakeholders provide feedback on. Default values are **Web Application**, **Remote Machine**, and **Client Application**. Valid types are specified in the process configuration file for projects that use an On-premises XML process. |`Microsoft_VSTS_Feedback_ApplicationType`  |
|**Area Path**|`AreaPath`, `AreaSK`  | String  | Product feature or team area work items group into. Must be a valid node in the project hierarchy.|`System.AreaPath`     |
|**Assigned To** |`AssignedTo`, `AssignedToUserSK` | UserSK | Name of the team member who currently owns the work item.|`System.AssignedTo`    |
|**Automated Test Id** |`AutomatedTestId` | String | ID of the test that automates the test case.|`Microsoft.VSTS.TCM.AutomatedTestId`   |
|**Automated Test Name** |`AutomatedTestName` | String | Name of the team member who activated or reactivated the work item.|`Microsoft.VSTS.TCM.AutomatedTestName`  |
|**Automated Test Storage**|`AutomatedTestStorage` | String | Assembly that contains the test that automates the test case.|`Microsoft.VSTS.TCM.AutomatedTestStorage`   |
|**Automated Test Type**|`AutomatedTestType` | String | Type of test that automates the test case.|`Microsoft.VSTS.TCM.AutomatedTestType`  |
|**Automation status**|`AutomatedStatus` | String | Status of a test case with the accepted values **Automated**, **Not Automated**, or **Planned**. |`Microsoft.VSTS.TCM.AutomationStatus`   |
|**Backlog Priority**|`BacklogPriority` | Double | Number assigned by a system background process used to stack rank or track the sequence of items on a backlog or board. (Scrum process) |`Microsoft.VSTS.Common.BacklogPriority`|
|**Blocked**|`Blocked`  | String | Indication that no further work can be performed on the work item. Valid values are **Yes** or **No**. (CMMI process)|`Microsoft.VSTS.CMMI.Blocked` |
|**Business Value**|`BusinessValue` | Double | Subjective unit of measure that captures the relative business value of a product backlog item or feature compared to other items of the same type. Item assigned higher numbers are considered to have more business value than items assigned lower numbers. |`Microsoft.VSTS.Common.BusinessValue`   |
|**Changed By**|`ChangedBy`|`ChangedByUserSK` | UserSK | Name of the person who modified the work item most recently.|`System.ChangedBy`   |
|**Changed Date**|`ChangedDate`  | DateTime | Date and time when the work item was modified.|`System.ChangedDate`  |
| |`ChangedDateSK` | Int32 | Date the work item was modified, expressed as `YYYYMMDD` in the [time zone defined for the organization](../../organizations/accounts/change-organization-location.md). Used by external tools to join related entities.  |
| |`ChangedOn`  | Navigation | Navigational property to the `Date` entity for the date the work item was modified, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Closed By**|`ClosedBy`, `ClosedByUserSK` | UserSK | Name of the person who closed a work item. |`Microsoft.VSTS.Common.ClosedBy`   |
|**Closed Date**|`ClosedDate`, `ClosedDateSK`, `ClosedOn` | DateTime | Date and time when a work item was closed.|`Microsoft.VSTS.Common.ClosedDate`   |
|**Comment Count**|`CommentCount` | Int32 | Number of comments added to the **Discussion** section of the work item.|`System.CommentCount`  |
|**Committed**|`Committed`  | String | Indication whether the requirement is committed in the project. Valid values are **Yes** or **No**. (CMMI process)|`Microsoft.VSTS.CMMI.Committed`   |
| |`CompletedDateSK`  | Int32 | Navigational property date captured by Analytics that stores when the work item entered a workflow state associated with the **Completed** state category.   |
| |`CompletedOn`  | Navigation | Navigational property to the `Date` entity for the date the work item entered a workflow state associated with the **Completed** state category, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Completed Work**|`CompletedWork` | Double | Measure of the amount of work spent on a task.|`Microsoft.VSTS.Scheduling.CompletedWork`  |
|**Created By**|`CreatedBy`, `CreatedByUserSK`| UserSK | Name of the person who created the work item. |`Microsoft.VSTS.Common.CreatedBy`  |
|**Created Date**|`CreatedDate`, `CreatedDateSK`| DateTime | Date the work item was created, expressed in the time zone defined for the organization. Commonly used for filtering and display. |`Microsoft.VSTS.Common.CreatedDate`|
| |`CreatedDateSK`| Int32 | Date the work item was created, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. |
| |`CreatedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was created, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Cycle Time Days**|`CycleTimeDays` | Double | Cycle time calculated from first entering an **In Progress** or **Resolved** state category to entering a **Completed** state category. For more information, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md). |
|**Discipline**|`Discipline` | String | Type of activity or discipline assigned to a task. Allowed values are: **Analysis**, **Development**, **Test**, **User Education**, and **User Experience**. (CMMI process) |`Microsoft.VSTS.Common.Activity`   |
|**Due Date**|`DueDate` | DateTime | Forecasted due date for an issue or work item to be resolved. (Agile process)|`Microsoft.VSTS.Scheduling.DueDate`    |
| **Effort**|`Effort` | Double | Estimated amount of work that a product backlog item (Scrum process) or issue (Basic process) requires to implement. |`Microsoft.VSTS.Scheduling.Effort`  |
|**Finish Date**|`FinishDate` | DateTime | Date and time the schedule indicates a work item is to be completed.|`Microsoft.VSTS.Scheduling.FinishDate`  |
|**Found In**|`FoundIn` | String | Product build number, also known as revision, in which a bug was found.|`Microsoft.VSTS.Build.FoundIn`  |
|**InProgress Date** |`InProgressDate`  | DateTime | Analytics stored date that captures the date-time when a work item was moved into a state that belongs to the **In Progress** state category.  |
| |`InProgressDateSK`   | Int32 | Date the work item was moved into a **State** that belongs to the **In Progress** state category, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. |
|**Integration Build**|`IntegrationBuild` | String | Product build number that incorporates the code or fixes a bug.|`Microsoft.VSTS.Build.IntegrationBuild`    |
|**Is Current**|`IsCurrent` | Boolean | Support for filtering the data to view the most recent snapshot of the filtered set of work items by setting the value to `True`. Valid for the entity types **WorkItemRevision**, **WorkItemBoardSnapshot**, and **BoardLocation**.  |
|**Is Last Revision of Day**|`IsLastRevisionOfDay` | Boolean | Indication that the snapshot represents the last revision of the day when set to `True`.|
|**Is Last Revision of Period**|`IsLastRevisionOfPeriod` | Boolean | Indication that the snapshot represents the last revision of the period when set to `True`. |
|**Issue**|`Issue` | String | Indication that the shared step is associated with an expected result. Allowed values are **Yes** and **No**. |`Microsoft.VSTS.Common.Issue`   |
| **Lead Time Days**|`LeadTimeDays`  | Double | Lead time calculated from work item creation or entering a **Proposed** state category to entering a **Completed** state category. For more information, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md).    |
|**Original Estimate**|`OriginalEstimate` | Double | Measure of the amount of work required to complete a task. |`Microsoft.VSTS.Scheduling.OriginalEstimate`   |
|**Parent Work Item Id** |`ParentWorkItemId` | Int32 | Unique ID that identifies the work item linked to as a parent. Useful for generating rollup reports. The **Parent** field is valid for the entity types **WorkItemRevision** and **WorkItem**. |`System.Parent`   |
|**Priority**|`Priority` | Int32 | Subjective rating of the bug, issue, task, or test case as it relates to the business. Values include **1**, **2**, or **3**. | `Microsoft.VSTS.Common.Priority` |
|**Project Name**|`ProjectName` | Navigation | Name of the project the work item belongs to. For details, see [Project properties](entity-reference-general.md#projects).|`System.TeamProject`  |
| |`ProjectSK`  | GUID | GUID assigned to the project the work item belongs to.  |
|**Rating** |`Reason` | String | Number of stars an item receives from a reviewer in a star-based ranking system (Feedback Response). The number is stored in the system and written as **0 - Not Rated**, **1 - Poor**, **2 - Fair**, **3 - Good**, **4 - Very Good**, or **5 - Excellent**. Valid for the **WorkItemRevision** and **WorkItem** entity types.|`Microsoft.VSTS.Common.Rating`  |
| **Reason** |`Reason` | String | Reason why the work item is in the current state. Each transition from one workflow state to another is associated with a corresponding reason. |`System.Reason`  |
|**Remaining Work** |`RemainingWork` | Double | Measure of the amount of work that remains to finish a task.|`Microsoft.VSTS.Scheduling.RemainingWork` |
|**Resolved By** |`ResolvedBy` |`ResolvedByUserSK` | UserSK | Name of the team member who resolved the bug or user story.|`Microsoft.VSTS.Common.ResolvedBy` |
|**Resolved Date** |`ResolvedDate` | DateTime | Date and time when the bug or user story was resolved. |`Microsoft.VSTS.Common.ResolvedDate` |
| |`ResolvedDateSK`| Int32 | Date the work item was resolved, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities. |
| |`ResolvedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was resolved, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Resolved Reason**| `ResolvedReason` | String | Reason the bug was resolved, such as **Fixed**.|`Microsoft.VSTS.Common.ResolvedReason`   |
|**Revision**| `Revision` | Int32 | Number assigned to the historical revision of a work item.|`System.Rev`   |
|**Revised Date**| `RevisedDate` | DateTime | Date and time when a work item was modified or updated.  |
| |`RevisedDateSK`| Int32 | Date the work item was revised, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities.  |
| |`RevisedOn` | Navigation | Navigation property to the `Date` entity for the date the work item was revised, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Risk** |`Risk` | Double | Subjective rating of relative uncertainty about the successful completion of the work item. Valid values include **1 - High**, **2 - Medium**, and **3 - Low**. |`Microsoft.VSTS.Common.Risk` |
|**Severity**|`Severity`  |  Double | Subjective rating of the effect of a bug, issue, or risk on the project. Valid values include **1 - Critical**, **2 - High**, **3 - Medium**, and **4 - Low**. | `Microsoft.VSTS.Common.Severity` |
|**Size** |`Size`   | Double | Estimate for the amount of work that a requirement requires to implement. (CMMI process) |`Microsoft.VSTS.Scheduling.Size`  |
|**Stack Rank** |`StackRank`  | Double | Number assigned by a system background process used to stack rank or track the sequence of items on a backlog or board. (Agile, Scrum, and Basic processes) |`Microsoft.VSTS.Common.StackRank`  |
| **Start Date**|`StartDate`  | DateTime | Date and time assigned to a work item for work to start. |`Microsoft.VSTS.Scheduling.StartDate` |
| **State** |`State`  | String | Current state of the work item. The valid values for state are specific to each type of work item and customizations made to it.|`System.State` |
|**State Category** |`StateCategory`   | String | How Azure Boards and select dashboard widgets treat each workflow state. The state categories include  **Proposed**, **In Progress**, **Resolved**, **Removed**, and **Completed**. For more information, see [How to use workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md). Valid only for the `WorkItemRevision` entity type. |
|**State Change Date** |`StateChangeDate` | DateTime | Date and time the value of the **State** field changed. |`Microsoft.VSTS.Common.StateChangeDate` |
| |`StateChangeSK`| Int32 | Date the work item state changed, expressed as `YYYYMMDD` in the time zone defined for the organization. Used by external tools to join related entities.  |
| |`StateChangeOn` | Navigation | Navigation property to the `Date` entity for the date a work item state changed, in the time zone defined for the organization. Commonly used to reference properties from the `Date` entity in `groupby` statements. |
|**Story Points** |`StoryPoints`| Double | Estimate of the amount of work a user story requires to implement, commonly aggregated as a sum. (Agile process) |`Microsoft.VSTS.Scheduling.StoryPoints` |
|**Tags**|`TagNames`  | String | Semicolon-delimited list of tags assigned to one or more work items for filtering or querying purposes.|`System.Tags` |
|**Target Date** |`TargetDate`   | DateTime | Forecasted due date for an issue or other work item to be resolved or completed.|`Microsoft.VSTS.Scheduling.TargetDate`  |
|**Test Suite Type** | | String | Type of test suite. Valid values include **Query Based**, **Requirement Based**, and **Static**.|`Microsoft_VSTS_TCM_TestSuiteType`  |
|**Test Suite Type Id** | | Int64 | System-assigned number corresponding to the test suite category. Only applicable to test suites. Assigned values are **1 (Static)**, **2 (Query-based)**, and **3 (Requirement-based)**.|`Microsoft_VSTS_TCM_TestSuiteTypeId`  |
|**Time Criticality** |`TimeCriticality` | Double | Subjective unit of measure that captures how the business value lessens over time. Higher values indicate an epic or feature is inherently more time critical than items with lower values. |`Microsoft.VSTS.Common.TimeCriticality`  |
|**Title** |`Title`  | String | Short description summarizing the work item that helps team members distinguish it from other work items in a list. |`System.Title`  |
| **Value Area** |`ValueArea`   | String | Area of customer value addressed by the epic, feature, or backlog item. Values include **Architectural** or **Business**.|`Microsoft.VSTS.Common.ValueArea`  |
|**Watermark**|`Watermark` | String | System-managed field that increments with changes made to a work item. Valid for the **WorkItemRevision** and **WorkItem** entity types.|`System.Watermark` |
|**Work Item Id**|`WorkItemId` | Int32 | Unique identifier assigned to a work item. A work item ID is unique across all projects within an organization or project collection.|`System.Id` |
| |`WorkItemRevisionSK`  | Int32 | Analytics unique key for the work item revision, used by external tools to join related entities.  |
|**Work Item Type** |`WorkItemType` | String | Name of the work item type. Available work item types are based on the process the project uses. For more information, see [About processes and process templates](../../boards/work-items/guidance/choose-process.md).|` System.WorkItemType` |

### Navigation properties 

OData navigation properties are the reference attributes of an entity that points to another entity. The following table provides a summary of the navigational properties, their referential constraints, and the entity types they're valid for. 
 
| Display name | Name |Referential constraint | Property | Valid entity types |
|--------------|------------------|-------------|----------------|-------------------------|
|                 | `ChangedOn`|`ChangedDateSK`|`DateSK` |   `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
|                 | `ClosedOn` | `ClosedDateSK`|`DateSK` |   `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
|                 | `CreatedOn`| `CreatedDateSK`|`DateSK` |  `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
|                 | `ResolvedOn`|`ResolvedDateSK`|`DateSK` |  `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**  |
|                 | `StateChangeOn`|`StateChangeDateSK`|`DateSK` | `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**  |
|                 | `InProgressOn`|`InProgressDateSK`|`DateSK` |  `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
|                 | `CompletedOn`|`CompletedDateSK`|`DateSK` | `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
|                 | `ChangedOn`| `ChangedDateSK`|`DateSK` | `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** 
|                 | `RevisedOn`|`RevisedDateSK`|`DateSK` |    `WorkItemRevision`, **WorkItemSnapshot**  |
|                 | `Date`     | ` DateSK`|`DateSK`    |   `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
| **Areas**       | `Area` | `AreaSK`       |  |    `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**  |
| **BoardLocation** |            |           |                |  `WorkItemRevision`, `WorkItem`, **WorkItemBoardSnapshot** |
| **Iterations**  | `Iteration`  | `IterationSK`  | |   `WorkItemRevision`,  `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
| **Assigned To**  | `AssignedTo`  | `AssignedToUserSK`|`UserSK` |    `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
| **Changed By**  | `ChangedBy`  | `ChangedByUserSK`|`UserSK` |    `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
| **Created By**  | `CreatedBy`  | `CreatedByUserSK`|`UserSK` |  `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot** |
| **Activated By**  | `ActivatedBy`  | `ActivatedByUserSK`|`UserSK` |    `WorkItemRevision`,`WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**  |
| **Closed By**  | `ClosedBy`  | `ClosedBySK`|`UserSK` |   `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**  |
| **ResolvedBy**  | `ResolvedBy`  | `ResolvedByUserSK`|`UserSK` |  `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
| **Teams**      |  | | | `Area`, `BoardLocation`, `Iteration`, `WorkItemRevision`, **WorkItemSnapshot**, **WorkItemBoardSnapshot**|
| **Tags**       |  | | |       `WorkItem`, `WorkItemRevision`, **WorkItemBoardSnapshot**  |
| **Project**   | `Project`  | `ProjectSK`|`ProjectSK` |    `Tag`, **WorkItemBoardSnapshot**, `WorkItemLink`, `WorkItemRevision`, **WorkItemSnapshot**, `WorkItemTypeField`,  |
| **Processes** |   | |        | `WorkItemRevision`, `WorkItem`, **WorkItemSnapshot** |
| **Revisions** |   | |       | `WorkItem`  |
| **Links**     |   | |      | `WorkItem`  |
| **Children**    |  | |       |  `WorkItem`  |
| **Parent**      |   | |       |  `WorkItem`  |
| **Descendants** |   | |        |   `WorkItem`  |
| **WorkItem**\*    | `WorkItemId`     | | | `WorkItemRevision`   |

<a name="predictive-functions"></a>

\*The **WorkItem** entity also supports the `PredictTags` and `Predict` functions, which support predictive trends on select built-in Analytics reports and widgets.

<a id="kanban-board-properties-fields"></a> 
## BoardLocation and WorkItemBoardSnapshot

The following table lists and describes properties defined for the **BoardLocation** and **WorkItemBoardSnapshot** entity types, unless noted. You can use these fields to filter work item data based on the status of a work item within a team's board column, swimlane, or backlog level. For an example that queries the **WorkItemBoardSnapshot** entity set, see [Cumulative Flow Diagram (CFD) sample report](../powerbi/sample-boards-cfd.md).

|Display name|Property name | Data type | Description |
|-------------------------------------|---------------|--------------------------------------|
|**Board Id**  |`BoardId` | Guid | Unique GUID assigned to a board. Each team is associated with one or more boards.  |
|**Board Category Reference Name**|`BoardCategoryReferenceName` | String | Name assigned to the work item type category used to populate a board. For example, the product backlog board is associated with the Requirements category. For more information, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md).  |
|**Board Name** |`BoardName` | String | Name assigned to the board, for example **Stories**, **Backlog Items**, **Features**, or **Epics**.  |
|**Board Level**|`BoardLevel` | Int32 | Number assigned to the board based on where it sits within the hierarchy of boards.  |
|**Backlog Type** |`BacklogType` | String | Name of the type of backlog, for example Iteration, Requirement, or Portfolio.   |
|**Column Name**|`ColumnName` | String | Name of the board column a work item is currently assigned to, such as **Active**, **Closed**, **Committed**, **Done**, or a custom column label.  Reference name: `System.BoardColumn`   |
|**Column Order**|`ColumnOrder` | Int32 | Number assigned to the board column in terms of its sequence within the board.   |
|**Done** |`Done` | Enumerated | Indicator of the split-column location.\* |
|**Column Item Limit**|`ColumnItemLimit` | Int32 | Number assigned to the board column in terms of its sequence.  |
|**Is Board Visible** |`IsBoardVisible` | Boolean | Indication of whether the team elected to make a board visible.  |
|**Is Column Split**|`IsColumnSplit`  | Boolean | Indication of whether a column is split into **Doing** and **Done** columns as described in [Split columns on your board to show work in progress](../../boards/boards/split-columns.md).  |
|**Is Current** |`IsCurrent`  | Boolean | Property that supports filtering the data to view the most recent snapshot of the filtered work items when set to `True`. |
|**Is Default Lane** |`IsDefaultLane` | Boolean | Indication that the work item is assigned to the default swimlane when set to `True`.  |
|**Is Done** |`IsDone` | Boolean | Current assignment of the work item within a column to **Doing** if `False` or **Done** when `True`. Only valid when [split-columns](../../boards/boards/split-columns.md) is enabled for a board column. Reference name: `System.BoardColumnDone`   |
|**Lane Id** |`LaneId` | Guid | Unique GUID assigned to a board swimlane. Each team can add one or more swimlanes to a board. For more information about swimlanes, see [Speed up your team's work by using swimlanes in your board](../../boards/boards/expedite-work.md). |
|**Lane Name**|`LaneName` | String | Name assigned to the board swimlane. Reference name: `System.BoardLane`   |
|**Lane Order**|`LaneOrder` | Int32 | Number assigned to the board swimlane in terms of its sequence. |
 
\*The following table lists the member names for the `BoardColumnSplit` enumerated type, which you can use to filter on work items in the **Doing** or **Done** board columns.
 
| Member name           | Value        | Display name          |
|-----------------------|--------------|-----------------------|
|`Doing`                | 0            | Doing                 |
|`Done`                 | 1            | Done                  |
|`Unknown`              | 2            | Unknown (not split)   |

For more information about board columns for a team, see the following articles:

- [Add columns to your board to manage your workflow](../../boards/boards/add-columns.md)
- [Split columns on your board to show work in progress](../../boards/boards/split-columns.md) 

## Areas 

The following properties are valid for the **Areas** entity set, which is associated with the **Area Path** field. Surrogate keys associated with **Area** include `AreaSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on area path assignments. 
 
|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated. |
|    | `Number` | Int32 | Integer value assigned to an area path node at creation. |
|**Depth** | `Depth` | Int32 | Level of the area path based on its depth from the root level.   |
|**Area Id** | `AreaId` | GUID | Unique identifier assigned to an area path at creation.  |
|**Area Level 1** through **Area Level 14** | `AreaLevel1` through `AreaLevel14`  | String | Node level of an area path up to 14 nested levels. Area Level 1 always corresponds to the root node and the project name.    |
|**Area Name** | `AreaName` | String | Name defined for the area path at creation.  |
|**Area Path** | `AreaPath` | String | Full path of the area path starting with the root node.   |

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

Navigation properties for the **Area** entity type and **Areas** entity set include **Project** and **Teams**.  

For more information about **Area Path**, see the following articles:  
- [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md)
- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md) 

## Iterations

The following properties are valid for the **Iterations** entity set, which is associated with the **Iteration Path** field. Surrogate keys associated with **Iteration** include `IterationSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on iteration path assignments. 

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|  |`AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  |
|    | `Number` | Int32 | Integer value assigned to an iteration path node at creation. |
|**Depth** | `Depth` | Int32 | Level of the iteration path based on its depth from the root level.   |
|**End Date** | `EndDate` | DateTime | End date defined for the iteration path.   |
|**IsEnded** | `IsEnded` | Boolean | Indication that the iteration path end date is in the past when set to `True`.   |
|**Iteration Id** | `IterationId` | GUID | Unique identifier assigned to an iteration path at creation.  |
|**Iteration Level 1** through **Iteration Level 14** | `IterationLevel1` through `IterationLevel14`  | String | Node level of an iteration path up to 14 nested levels. Iteration Level 1 always corresponds to the root node and the project name.   |
|**Iteration Name** | `IterationName` | String | Name defined for an iteration path at creation.  |
|**Iteration Path** | `IterationPath` | String |  Full iteration path starting with the root node. The iteration must be a valid node in the project hierarchy. Reference name: `System.IterationPath`    |
|**Start Date** | `StartDate` | DateTime | Start date defined for the iteration path.   |

[!INCLUDE [note-delete-area-paths](../../boards/includes/note-delete-area-paths.md)]

Navigation properties for the **Iteration** entity type and **Iterations** entity set include **Project** and **Teams**.  

For more information about **Iteration Paths**, see the following articles:  
- [About area and iteration (sprint) paths](../../organizations/settings/about-areas-iterations.md)
- [Define iteration paths (sprints) and configure team iterations](../../organizations/settings/set-iteration-paths-sprints.md) 

## Processes

The following properties are valid for the **Process** entity type and **Processes** entity set. Surrogate keys associated with **Process** include `ProcessSK`, `ProjectSK`, and `TeamSK`. Use these properties to filter or report work tracking data on work item types for a project or team. 

> [!NOTE]   
> The **v-2.0**, **v3.0-preview**, and **v4.0-preview** Analytics versions support the **Process** entity type and **Processes** entity set.  

You can use these properties to filter on work tracking data based on a backlog level.

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime |Watermark that indicates the last time the Analytics data was updated. |
|    | `ProjectSK` | GUID |  Project key associated with the process.    |
|    | `TeamSK` | GUID |  Team key associated with the process.     |
|**Backlog Category Reference Name** | `BacklogCategoryReferenceName` | String | Category reference name assigned to the backlog associated with the work item type. Examples include `Microsoft.EpicCategory`, `Microsoft.FeatureCategory`, `Microsoft.RequirementCategory`, and `Microsoft.TaskCategory`.     |
|**Backlog Name** | `BacklogName` | Boolean | Reference name assigned to the backlog associated with the work item type  |
|**Backlog Type** | `BacklogType` | GUID | Unique identifier assigned to a backlog at creation.  |
|**Backlog Level** | `BacklogLevel`  | String | Backlog level associated with the work item type<!---, where 1 corresponds to the top-level portfolio backlog-->. The `null` value returns if the work item type isn't associated with a backlog level. |
|**Work Item Type** | `WorkItemType` | String | Name defined for a work item type.  |
|**Has Backlog** | `HasBacklog` | String |  Indication whether the work item type belongs to a backlog.      |
|**Is Hidden Type** | `IsHiddenType` | Boolean | Indication whether the work item type is disabled.   |
|**Is Bug Type** | `IsBugType` | Boolean | Indication whether the work item type belongs to the **Bug** category.   |
|**Is Deleted** | `IsDeleted` | Boolean | Indication whether the work item type is deleted.   |

For more information about process backlogs and work item types, see the following articles:  
- [Create and manage inherited processes](../../organizations/settings/work/manage-process.md)
- [Add and manage work item types](../../organizations/settings/work/customize-process-work-item-type.md) 
- [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md) 

## Tags

The following properties are valid for the **Tags** entity set. Surrogate keys associated with **Tag** include `TagSK` and `ProjectSK`. Navigational properties include [Project](entity-reference-general.md#projects) and its referential constraint `ProjectSK`. For more information about using tags, see [Add work item tags to categorize and filter lists and boards](../../boards/queries/add-tags-to-work-items.md).

You can use these properties to filter or report on work tracking data. 

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|**Tag Id** | `TagId` | GUID | Unique ID assigned to the tag at creation.    |
|**Tag Name** | `TagName` | String | Tag name.  |

## Teams

The following properties are valid for the **Team** entity type and **Teams** entity set. Surrogate keys associated with **Team** include `TeamSK` and `ProjectSK`. You can use these properties to filter or report on work tracking data based on team assignments. For information on using and adding teams, see [About teams and Agile tools](../../organizations/settings/about-teams-and-settings.md) and [Create or add a team](../../organizations/settings/add-teams.md).

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime | Watermark indicating the last time the Analytics data was updated. |
|**Team Id** | `TeamId` | GUID | Unique ID assigned to the team at creation.    |
|**Team Name** | `TeamName` | String | Team name.  |

Navigation properties for the **Teams** entity set include **Projects**, **Areas**, and **Iterations**.

## WorkItemLinks

The following properties are valid for the **WorkItemLinks** entity set. The property reference surrogate key is `WorkItemLinkSK`. Query `WorkItemLinks` to report on parent/child, related, predecessor/successor, or other link types. 

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime | Watermark indicating the last time the Analytics data was updated. |
|    | `WorkItemLinkSK` | Int32 |  Surrogate key assigned to the **WorkItemLink** entity. |
|**Created Date** | `CreatedDate` | GUID | Date the link was created.    |
|**Comment** | `Comment` | String |Comment added when the link was created.
|**Deleted Date** | `DeletedDate` | String | Date the link was deleted.  |
|**Link Type Id** | `LinkTypeId` | Int32 | ID assigned to the target linked work item.    |
|**Link Type Name** | `LinkTypeName` | String | Friendly name assigned to the link type.  |
|**Link Type Reference Name** | `LinkTypeReferenceName` | String | Reference name assigned to the link type.  |
|**Link Type Is Acyclic** | `LinkTypeIsAcyclic` | Boolean | Indication that the link type allows circular relationships when set to `True`. For example, tree type links restrict circular relationships.   |
|**Link Type Is Directional** | `LinkTypeIsDirectional` | Boolean |  Indication whether the link type is directional. Directional link types are defined in pairs with a forward and reverse component.  |
|**Source Work Item Id** | `SourceWorkItemId` | Int32 | ID assigned to the link source work item.    |
|**Target Work Item Id** | `TargetWorkItemId` | Int32 | ID assigned to the link target work item.    |

Navigation properties for the **WorkItemLink** entity type include **Projects**, **SourceWorkItem**, and **TargetWorkItem**.

For more information about links and link types, see the following articles:  
- [Use links to view dependencies and track related work](../../boards/backlogs/add-link.md)
- [Reference guide for link types used in Azure DevOps](../../boards/queries/link-type-reference.md)

<a id="work-item-type-field-properties"></a> 
## WorkItemTypeFields
 
The following properties are valid for the **WorkItemTypeFields** entity set. The property reference keys are `FieldName`, `ProjectSK`, and `WorkItemType`. 

|Display name | Name           | Data type | Description |
|-----------------|--------------------|---------------|--------------------------------------|
|**Field Name** | `FieldName` | String | Friendly name assigned to a field by the system or at creation.  |
|**Field Reference Name** | `FieldReferenceName` | String | Reference name assigned to a field by the system or at creation of a custom field.    |
|**Field Type** | `FieldType` | String | Data type assigned to a field.  |
|**Work Item Type** | `WorkItemType` | String | Work item type that a field is defined for.    |

Navigation properties include **Project**. For an index of all fields defined for a project, see [Field descriptions for work item fields](../../boards/work-items/guidance/work-item-field.md). For more information, see the following articles: 
- [Work item fields and attributes](../../boards/work-items/work-item-fields.md)
- [Add and manage fields (Inheritance process)](../../organizations/settings/work/customize-process-field.md) 

## Custom properties

Custom fields are automatically added to the Analytics service as custom properties. `Custom_` or `Custom.` is prepended to the property name. Check your collection's metadata as described in [Query the metadata](analytics-query-parts.md#url-components-to-query-the-metadata). The following example shows metadata syntax for the custom field **Risk Opportunity**. 

```xml
<Property Name="Custom_RiskOpportunity" Type="Edm.Double">
<Annotation Term="Display.DisplayName" String="Risk Opportunity"/>
<Annotation Term="Ref.ReferenceName" String="Custom.RiskOpportunity"/>
<Annotation Term="Display.Description" String="Risk Reduction | Opportunity Enablement Value. Enter a value from 1 to 5. 5 represents high risk reduction or high opportunity enablement."/>
</Property>
```

### Custom work item types and backlog categories

Data for custom work item types is automatically added to the Analytics service. A custom category is created when a custom work item type and backlog level are defined, with `Custom_` or `Custom.` prepended to the category GUID. For example, a custom category such as `Custom.49b81c4e-9c4f-4c04-94fd-d660cbf3a000` might be assigned to the **Portfolio** custom work item type in a Portfolios backlog.

## Related content

- [What is Azure Boards?](../../boards/get-started/what-is-azure-boards.md)
- [Track user stories, issues, bugs, and other work items in Azure Boards](../../boards/work-items/about-work-items.md)   
- [Work item fields and attributes](../../boards/work-items/work-item-fields.md)
- [Index of work item fields](../../boards/work-items/guidance/work-item-field.md) 
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md) 
- [Historical data representation in Analytics](analytics-historical-filtering.md)
- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)

<!--- CMMI specific fields not added to navigation properties --> 
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
