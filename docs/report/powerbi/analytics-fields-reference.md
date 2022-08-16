---
title: Analytics work item fields reference
titleSuffix: Azure DevOps
description: Work item fields available from the Analytics service
ms.technology: devops-analytics
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 05/26/2022
---


# Work item properties reference 

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]
 
Analytics stores all work tracking fields, except for HTML/rich-text and History fields. Custom fields are automatically added to the Analytics data store. This article describes the majority of fields that you would use to generate an Analytics report for work tracking. You use a combination of fields to filter a query, aggregate data, or build a report. Each field supports several entity types. For a description of each entity type, see [Data model for Analytics](../extend-analytics/data-model-analytics-service.md). 

For a complete list of fields that are defined in the default process templates, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). For descriptions of each data type, see [Query fields, operators, and macros](../../boards/queries/query-operators-variables.md). 

Using Analytics for Azure DevOps, you can construct basic and filtered queries to return work items of interest. You can run these queries directly in your browser. To learn more, see [Query your work tracking data using OData Analytics](../extend-analytics/wit-analytics.md). 
To learn about Analytics views, see [What are Analytics views?](what-are-analytics-views.md)   

## Work item tracking entity types and snapshots

When querying Analytics for work tracking data, use one of the following entity types. 
- Query `WorkItems` to generate status and rollup reports 
- Query `WorkItemSnapshot` to generate trend, burndown, and burnup reports 

Use other entity types, such as `Area`, `Iteration`, `Project`, `Team`, and other entities to filter data.  
 
> [!NOTE]  
> To generate status and trend reports on test-specific work item types, query the `WorkItems` and `WorkItemSnapshot` entity types and filter based on the work item type. For information on test runs, test results, or other test data, query the `TestRuns`, `TestPoints`, `TestResultsDaily`, `TestSuite` or `TestPointHistorySnapshot` entity types. To learn more, see [Branch, Pipelines, and Test EntityTypes and EntitySets](../extend-analytics/data-model-analytics-service.md#branch-pipelines-and-test-entitytypes-and-entitysets).


### About snapshots 

There are two work tracking snapshot entity sets: `WorkItemSnapshot` and `WorkItemBoardSnapshot`.

A snapshot provides a record of the values defined for a work item each day. The record is written to the Analytics service once a day at the same time each day. You use snapshots when you want to generate a trend report.  By default, all the snapshot tables are modeled as daily snapshot fact tables. If you query for a time range it will get a value for each day. Long time ranges result in a large number of records. If you don't need such high precision, you can use weekly or even monthly snapshots.

To learn more, see [Odata query guidelines, Do use weekly or monthly snapshots for trend queries that span a long time period](../extend-analytics/odata-query-guidelines.md#-do-use-weekly-or-monthly-snapshots-for-trend-queries-that-span-a-long-time-period). 


### About work item revisions

 Each time you update a work item, the system creates a new revision and records this action in the `System.RevisedDate` field, which makes it useful for specifying a history filter. The revised date is represented by `RevisedDate` (DateTimeOffset) and `RevisedDateSK` (Int32) properties. For best performance, use the latter date surrogate key. It represents the date when a revision was created or it has null for active or incomplete revisions. If you want all the dates since the `{startDate}` inclusive, add the following filter to your query.

`RevisedDateSK eq null or RevisedDateSK gt {startDateSK}`  

You use the `WorkItemRevisions` entity set to load all the revisions for a given work item. The query returns all historic work item revisions, including the current revision, for the work items you filter on. It doesn't include deleted work items. 


## Work item fields 

The fields you can select in an **Analytics view** correspond to regular work tracking fields and select Analytics data store fields, such as **Cycle Time Days** and **Lead Time Days**. These fields, most of which are listed and described in the following table, are defined for the following entity types, unless otherwise specified. (Fields that are specific to the Scrum and CMMI process aren't fully included in this list.) 

- `WorkItem`  
- `WorkItemRevision`  
- `WorkItemSnapshot`  
- `WorkItemBoardSnapshot`  
 
> [!NOTE]  
> The Analytics service doesn't store any data for long text fields assigned the HTML or rich text data type. This includes **Description** and **History** fields. Analytics doesn't store link or attached file counts either. 

|**Display name**<br/>`Property name` | **Data type** | **Description**<br/>`Reference name` | 
|-------------------------------------|---------------|--------------------------------------|
|**Accepted By**<br/>`AcceptedBy` | UserSK | Name of the person who responded to a code review.<br/>`Microsoft.VSTS.CodeReview.AcceptedBy` |   
|**Accepted Date**<br/> `AcceptedDate` | DateTimeOffset | Date and time when the person responded to the code review.<br/>`Microsoft.VSTS.CodeReview.AcceptedDate`  |     
| **Activated By** <br/>`ActivatedBy` | UserSK | Name of the team member who activated or reactivated the work item.<br/>`Microsoft.VSTS.Common.ActivatedBy`   |   
|**Activated Date**<br/> `ActivatedDate` | DateTimeOffset | Date and time when a team member activated or reactivated a bug or work item.<br/>`Microsoft.VSTS.CodeReview.ActivatedDate`  |       
|**Activity**<br/>`Activity` | String | The type of activity that is required to perform a task.<br/>`Microsoft.VSTS.Common.Activity`<br/><br/>The type of activity or discipline that is assigned to a task. Allowed values are: **Deployment**, **Design**, **Development**, **Documentation**, **Requirements**, and **Testing**. (Agile, Scrum, and Basic process) <br/>`Microsoft.VSTS.Common.Activity`  | 
|**Area Path**<br/>`AreaPath`<br/>`AreaSK`  | String  | Groups the work items into product feature or team areas. The area must be a valid node in the project hierarchy.<br/>`System.AreaPath`     |    
|**Assigned To** <br/>`AssignedTo`<br/>`AssignedToUserSK`  | Double  | The name of the team member who currently owns the work item.<br/>`System.AssignedTo`    |     
|**Automated Test Id** <br/>`AutomatedTestId` | String | The ID of the test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestId`   | 
|**Automated Test Name** <br/>`AutomatedTestName` | String | Name of the team member who activated or reactivated the work item.<br/>`Microsoft.VSTS.TCM.AutomatedTestName`  | 
|**Automated Test Storage**<br/>`AutomatedTestStorage` | String | The assembly that contains the test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestStorage`   |    
|**Automated Test Type**<br/>`AutomatedTestType` | String | The type of test that automates the test case.<br/>`Microsoft.VSTS.TCM.AutomatedTestType`  |     
|**Automation status**<br/>`AutomatedStatus` | String | The status of a test case with the following accepted values: **Automated**, **Not Automated**, or **Planned**. <br/>`Microsoft.VSTS.TCM.AutomationStatus`   |    
|**Blocked**<br/>`Blocked`  | String | Indicates that no further work can be performed on the work item. Valid values are **Yes** or **No**. (CMMI process)<br/>`Microsoft.VSTS.CMMI.Blocked`    |    
|**Business Value**<br/>`BusinessValue` | Double | A subjective unit of measure that captures the relative business value of a product backlog item  or feature compared to other items of the same type. An item that is assigned a higher number should be considered as having more business value than an item that is assigned a lower number. <br/>`Microsoft.VSTS.Common.BusinessValue`   |     
|**Changed By**<br/>`ChangedBy`<br/>`ChangedByUserSK` | Double | The name of the team member who modified the work item most recently.<br/>`System.ChangedBy`   |  
|**Changed Date**<br/>`ChangedDate`<br/>`ChangedDateSK` | DateTimeOffset | Date and time when the work item was modified.<br/>`System.ChangedDate`  |      
|**Closed By**<br/>`ClosedBy`<br/>`ClosedByUserSK` | UserSK | The name of the person who closed a work item. <br/>`Microsoft.VSTS.Common.ClosedBy`   | 
|**Closed Date**<br/>`ClosedDate`<br/>`ClosedDateSK`<br/>`ClosedOn` | DateTimeOffset | Date and time when a work item was closed.<br/>`Microsoft.VSTS.Common.ClosedDate`   |    
|**Comment Count**<br/>`CommentCount` | Int32 | The number of comments added to the **Discussion** section of the work item.<br/>`System.CommentCount`  |   
|**Committed**<br/>`Committed`  | String | Indicates if the requirement is committed in the project. Valid values are **Yes** or **No**. (CMMI process)<br/>`Microsoft.VSTS.CMMI.Committed`   |  
|`CompletedOn`<br/>`CompletedDateSK`  | Double | Navigational property date captured by Analytics that stores when the work item entered a workflow **State** associated with the *Completed* workflow state category.   
|**Completed Work**<br/>`CompletedWork` | Double | A measure of the amount of work spent on a task.<br/>`Microsoft.VSTS.Scheduling.CompletedWork`  |    
|**Created By**<br/>`CreatedBy`<br/>`CreatedByUserSK` | UserSK | The name of the person who created the work item. <br/>`Microsoft.VSTS.Common.CreatedBy`  | 
|**Created Date**<br/>`CreatedDate`<br/>`CreatedDateSK` | DateTimeOffset | Date and time when a work item was created.<br/>`Microsoft.VSTS.Common.CreatedDate`    |  
|**Cycle Time Days**<br/>`CycleTimeDays` | Double | Cycle time is calculated from first entering an *In Progress* or *Resolved* state category to entering a *Completed* state category. To learn more, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md). |  
|**Discipline**<br/>`Discipline` | String | The type of activity or discipline that is assigned to a task. Allowed values are: *Analysis**, **Development**, **Test**, **User Education**, and **User Experience**. (CMMI process) <br/>`Microsoft.VSTS.Common.Activity`   |    
|**Due Date**<br/>`DueDate` | DateTimeOffset | The forecasted due date by which an issue or work item will be resolved. (Agile process)<br/>`Microsoft.VSTS.Scheduling.DueDate`    | 
| **Effort**<br/>`Effort` | Double | An estimate for the amount of work that a product backlog item (Scrum process) or issue (Basic process) will require to implement. <br/>`Microsoft.VSTS.Scheduling.Effort`  |    
|**Finish Date**<br/>`FinishDate` | DateTimeOffset | Date and time when the schedule indicates that a work item will be completed.<br/>`Microsoft.VSTS.Scheduling.FinishDate`  |   
|**Found In**<br/>`FoundIn` | String | The product build number, also known as a revision, in which a bug was found.<br/>`Microsoft.VSTS.Build.FoundIn`  |   
|**InProgress Date** <br/>`InProgressDate`<br/>`InProgressDateSK`   | DateTimeOffset | Analytics stored date that captures the date-time when a work item was moved into a **State** that belongs to the *In Progress* state category.  |  
|**Integration Build**<br/>`IntegrationBuild` | String | The product build number that incorporates the code or fixes a bug.<br/>`Microsoft.VSTS.Build.IntegrationBuild`    | 
|**Is Current**<br/>`IsCurrent` | Boolean | Supports filtering the data to view the most recent snapshot of the filtered set of work items by setting the value to `True`.<br/>Valid for these entity types: `WorkItemRevision`, `WorkItemBoardSnapshot`, and `BoardLocation`.  |  
|**Is Last Revision of Day**<br/>`IsLastRevisionOfDay` | Boolean | Indicates that the snapshot represents the last revision of the day when set to `True`.|  
|**Is Last Revision of Period**<br/>`IsLastRevisionOfPeriod` | Boolean | Indicates that the snapshot represents the last revision of the period when set to `True`. |  
|**Issue**<br/>`Issue` | String | Indicates that the shared step is associated with an expected result. Allowed values are **Yes** and **No**. **Note:**  This field is not included in the work item form and is not populated with any data.<br/>`Microsoft.VSTS.Common.Issue`   |  
|**Iteration End Date**   | String | An Analytics stored value that captures the end date of an **Iteration Path**. You can select this field to query on multiple **Iteration Paths** based on their calendar end date.  | 
| **Iteration Path**<br/>`IterationPath` | String | A value used to group work items by named sprints or time periods. The iteration must be a valid node in the project hierarchy. <br/>`System.IterationPath`    | 
 | **Iteration Start Date** <br/>`IterationStartDate` | String | An Analytics stored value that captures the start date of an **Iteration Path**. You can select this field to query on multiple **Iteration Paths** based on their calendar end date. |  
| **Lead Time Days**<br/>`LeadTimeDays`  | Double | Lead time is calculated from work item creation or entering a *Proposed* state category to entering a *Completed* state category. To learn more, see [Lead Time and Cycle Time widgets](../dashboards/cycle-time-and-lead-time.md).    | 
|**Original Estimate**<br/>`OriginalEstimate` | Double | A measure of the amount of work that is required to complete a task. <br/>`Microsoft.VSTS.Scheduling.OriginalEstimate`   | 
|**Parent Work Item Id** <br/>`ParentWorkItemId` | Int32 | The unique ID that identifies the work item linked to as a parent. Useful for generating rollup reports. The **Parent** field is available from Azure DevOps Server 2020 and later versions. Valid for these entity types: `WorkItemRevision` and `WorkItem`. <br/>`System.Parent`   |   
|**Priority**<br/>`Priority` | Int32 | A subjective rating of the bug, issue, task, or test case as it relates to the business. Values include: - **1**, **2**, or **3**. <br/> `Microsoft.VSTS.Common.Priority` |  
|**Project Name**<br/>`ProjectName`<br/>`ProjectSK`  | String | Name of the project to which the work item belongs.<br/>`System.TeamProject`  | 
|**Rating** <br/>`Reason` | String | The number of stars that an item receives from a reviewer in a star-based ranking system. (Feedback Response) The number is stored in the system and written as follows:- **0 - Not Rated**, **1 - Poor**, **2 - Fair**, **3 - Good**, **4 - Very Good**, and **5 - Excellent**.  Valid for these entity types: `WorkItemRevision` and `WorkItem`.<br/>`Microsoft.VSTS.Common.Rating`  | 
| **Reason** <br/>`Reason` | String | The reason why the work item is in the current state. Each transition from one workflow state to another is associated with a corresponding reason. <br/>`System.Reason`  | 
|**Remaining Work** <br/>`RemainingWork` | Double | A measure of the amount of work that remains to finish a task.<br/>`Microsoft.VSTS.Scheduling.RemainingWork` | 
|**Resolved By** <br/>`ResolvedBy`<br/>`ResolvedByUserSK` | UserSK | The name of the team member who resolved the bug or user story.<br/>`Microsoft.VSTS.Common.ResolvedBy` | 
|**Resolved Date** <br/>`ResolvedDate`<br/>`ResolvedDateSK` | DateTimeOffset | The date and time when the bug or user story was resolved. <br/>`Microsoft.VSTS.Common.ResolvedDate` | 
|**Resolved Reason**<br/> `ResolvedReason` | String | The reason that the bug was resolved (for example, it was fixed).<br/>`Microsoft.VSTS.Common.ResolvedReason`   |  
|**Revision**<br/> `Revision` | Int32 | A number that is assigned to the historical revision of a work item.<br/>`System.Rev`   |  
|**Revised Date**<br/> `RevisedDate`<br/> `RevisedDateSK` | DateTimeOffset | Date and time when a work item was modified or updated.  |  
|**Risk** <br/>`Risk` | Double | A subjective rating of the relative uncertainty about the successful completion of the user story. Valid values include: **1 - High**, **2 - Medium**, and **3 - Low**. <br/>`Microsoft.VSTS.Common.Risk` | 
|**Severity**<br/>`Severity`  |  Double | A subjective rating of the effect of a bug, issue, or risk on the project. Valid values include: **1 - Critical**, **2 - High**, **3 - Medium**, and **4 - Low**. <br/> `Microsoft.VSTS.Common.Severity` | 
|**Size** <br/>`Size`   | Double | An estimate for the amount of work that a requirement (CMMI process) requires to implement. <br/>`Microsoft.VSTS.Scheduling.Size`  | 
|**Stack Rank** <br/>`StackRank`  | Double | A subjective rating of the user story, task, issue, or bug compared to other work items of the same type. This value controls the order shown within a backlog. An item that is assigned a lower number should be fixed before an item that is assigned a higher number.<br/>`Microsoft.VSTS.Common.StackRank`  | 
| **Start Date**<br/>`StartDate`  | DateTimeOffset | Date and time when the schedule indicates that the task will start. <br/>`Microsoft.VSTS.Scheduling.StartDate` | 
| **State** <br/>`State`  | String | The current state of the work item. The valid values for state are specific to each type of work item and customizations made to it.<br/>`System.State` | 
|**State Category** <br/>`StateCategory`   | String | State categories determine how Azure Boards and select dashboard widgets treat each workflow state. The state categories in use include:  *Proposed*, *In Progress*, *Resolved*, *Removed*, and *Completed*. To learn more, see [How to use workflow states and state categories](../../boards/work-items/workflow-and-state-categories.md). Valid only for the `WorkItemRevision` entity type.   |  
|**State Change Date** <br/>`StateChangeDate` | DateTimeOffset | The date and time when the value of the **State** field changed. <br/>`Microsoft.VSTS.Common.StateChangeDate` | 
|**Story Points** <br/>`StoryPoints`   | Double | An estimate for the amount of work that a user story (Agile process) requires to implement. <br/>`Microsoft.VSTS.Scheduling.StoryPoints` | 
|**Tags**<br/>`TagNames`  | String | Semicolon delimited list of tags assigned to one or more work items for the purposes of filtering or querying.<br/>`System.Tags` | 
|**Target Date** <br/>`TargetDate`   | DateTimeOffset | The forecasted due date by which an issue (Agile process) will be resolved.<br/>`Microsoft.VSTS.Scheduling.TargetDate`  | 
|**Time Criticality** <br/>`TimeCriticality` | Double | A subjective unit of measure that captures how the business value lessens over time. Higher values indicate that the epic or feature is inherently more time critical than those items with lower values. <br/>`Microsoft.VSTS.Common.TimeCriticality`  | 
|**Title** <br/>`Title`  | String | A short description that summarizes what the work item is and helps team members distinguish it from other work items in a list. <br/>`System.Title`  | 
| **Value Area** <br/>`ValueArea`   | String | The area of customer value addressed by the epic, feature, or backlog item. Values include: **Architectural** or **Business**.<br/>`Microsoft.VSTS.Common.ValueArea`  | 
|**Watermark**<br/>`Watermark` | String | A system-managed field that increments with changes made to a work item. Valid for these entity types: `WorkItemRevision` and `WorkItem`.<br/>`System.Watermark` | 
|**Work Item Id**<br/>`WorkItemId` | Int32 | The unique identifier that is assigned to a work item. Work item IDs are unique across all projects and within an organization or project collection.<br/>`System.Id` | 
|**Work Item Type** <br/>`WorkItemType` | String | The name of the work item type. Work item types are defined based on the process used when you created your project. For an overview, see [Choose process](../../boards/work-items/guidance/choose-process.md).<br/>` System.WorkItemType` |



## Kanban board specific fields

Fields listed and described in the following table are defined for the following entity types, unless specifically noted. With these fields, you can filter work item data based on the status of a work item within a team's Kanban board column or swimlane. 

- `BoardLocation`
- `WorkItemBoardSnapshot`  

For an example that queries the `WorkItemBoardSnapshot` entity set, see [Cumulative Flow Diagram (CFD) sample report](sample-boards-cfd.md).
 


|**Display name**<br/>`Property name` | **Data type** | **Description**<br/>`Reference name` | 
|-------------------------------------|---------------|--------------------------------------|
|**Board Id**  <br/>`BoardId` | Guid | The unique GUID assigned to a Kanban board. Each team is associated with one or more Kanban boards.  | 
|**Board Category Reference Name**<br/>`BoardCategoryReferenceName` | String | The name assigned to the category of work item types used to populate a Kanban board. For example, the product backlog board is associated with the Requirements category. To learn more, see [Customize your backlogs or boards (Inheritance process)](../../organizations/settings/work/customize-process-backlogs-boards.md).  | 
| **Board Name** <br/>`BoardName` | String | The name assigned to the Kanban board. For example, *Stories*, *Backlog Items*, *Features*, and *Epics*.  | 
|**Board Level**<br/>`BoardLevel` | Int32 | The number assigned to the Kanban board based on where it sits within the hierarchy of Kanban boards.  | 
|**Backlog Type** <br/>`BacklogType` | String | The name of the type of backlog. For example, Iteration, Requirement, or Portfolio.   | 
|**Column Name**<br/>`ColumnName` | String | The name of the Kanban board column that a work item is currently assigned, such as *Active*, **Closed**, **Committed**, **Done**, or other custom column label. <br/> `System.BoardColumn`   | 
|**Column Order**<br/>`ColumnOrder` | Int32 | The number assigned to the Kanban board column in terms of its sequence within the Kanban board.   |  
|**Done** <br/>`Done` | Boolean | Indicates that the work item is in the last column of a Kanban board.   | 
|**Column Item Limit**<br/>`ColumnItemLimit` | Int32 | The number assigned to the Kanban board column in terms of its sequence.  |   
|**Is Board Visible** <br/>`IsBoardVisible` | Boolean | Indicates if the team has elected to make a board visible or not.  | 
|**Is Column Split**<br/>`IsColumnSplit`  | Boolean | Indicates if a column has been split into **Doing** and **Done** columns as described in [Split columns on your Kanban board to show work in progress](../../boards/boards/split-columns.md).  | 
|**Is Current** <br/>`IsCurrent`  | Boolean | Property that supports filtering the data to view the most recent snapshot of the filtered set of work items by setting the value to `True`. | 
|**Is Default Lane** <br/>`IsDefaultLane` | Boolean | Property that indicates the work item is assigned to the default swimlane (True) or not (False).  |    
|**Is Done** <br/>`IsDone` | Boolean | The current assignment of the work item to **Doing** (False) or **Done** (True) within a Kanban column. Only assigned when [split-columns](../../boards/boards/split-columns.md) is enabled for a Kanban board column. <br/>`System.BoardColumnDone`   | 
|**Lane Id** <br/>`LaneId` | Guid | The unique GUID assigned to a Kanban board swim lane. Each team can add one or more swim lanes to a Kanban board. To learn more about swimlanes, see [Speed up your team's work by using swimlanes in your Kanban board](../../boards/boards/expedite-work.md). | 
|**Lane Name**<br/>`LaneName` | String | The name assigned to the Kanban board swimlane.<br/>`System.BoardLane`   |  
|**Lane Order**<br/>`LaneOrder` | Int32 | he number assigned to the Kanban board swimlane in terms of its sequence. | 
 
## Custom fields 

Custom fields are automatically added to the Analytics service. `Custom_` is automatically prepended to the property name. For example, the custom field, **Risk Opportunity** is represented in the metadata as listed below. 

> [!div class="tabbedCodeSnippets"]
```XML
<Property Name="Custom_RiskOpportunity" Type="Edm.Double">
<Annotation Term="Display.DisplayName" String="Risk Opportunity"/>
<Annotation Term="Ref.ReferenceName" String="Custom.RiskOpportunity"/>
<Annotation Term="Display.Description" String="Risk Reduction | Opportunity Enablement Value. Enter a value from 1 to 5. 5 represents high risk reduction or high opportunity enablement."/>
</Property>
```
  
## Surrogate keys  

The following surrogate keys (SK) properties can be used to filter or construct reports. 

|Regular field | SK property | Type |  
|-------------|-------------|---------|  
| Area | AreaSK  | Guid |   
| ActivatedBy|ActivatedByUserSK  | Guid |  
| ActivatedDate |ActivatedDateSK   | Int32 | 
| AssignedTo |AssignedToUserSK   | Guid | 
| ChangedBy |ChangedByUserSK  | Guid |   
| ChangedDate|ChangedDateSK  | Int32 |  
| ClosedBy  |ClosedByUserSK   | Guid |  
| ClosedDate|ClosedDateSK   | Int32 |  
| CompletedDate| CompletedDateSK   | Int32 |  
| CreatedBy |CreatedByUserSK  | Guid |   
| CreatedDate |CreatedDateSK  | Int32 |   
| InProgressDate | InProgressDateSK | Int32 |  
| Iteration |IterationSK   | Guid |  
| Project | ProjectSK   | Guid |   
| ResolvedBy  |ResolvedByUserSK  | Guid |  
| ResolvedDate |ResolvedDateSK   | Int32 |  
| StateChangeDate |StateChangeDateSK  | Int32 | 
| WorkItemRevision |WorkItemRevisionSK   | Int32 | 
 



## Related articles

- [About work item fields and attributes](../../boards/work-items/work-item-fields.md)
- [Index of work item fields](../../boards/work-items/guidance/work-item-field.md) 
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)
- [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md) 


<!---

Microsoft.VisualStudio.Services.Analytics.Model.Period 
Line 279 - <NavigationProperty Name="RevisedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 282 - <NavigationProperty Name="Date" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 285 - <NavigationProperty Name="BoardLocations" <Type=">Collection(Microsoft.VisualStudio.Services.Analytics.Model.BoardLocation)"/>
Line 286 - <NavigationProperty Name="Teams" <Type=">Collection(Microsoft.VisualStudio.Services.Analytics.Model.Team)"/>
Line 287 - <NavigationProperty Name="WorkItem" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.WorkItem" Nullable="false">
Line 290 - <NavigationProperty Name="Processes" <Type=">Collection(Microsoft.VisualStudio.Services.Analytics.Model.Process)"/>
Line 291 - <NavigationProperty Name="Project" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.Project" Nullable="false">
Line 295 - <NavigationProperty Name="Area" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.Area">
Line 299 - <NavigationProperty Name="Iteration" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.Iteration">
Line 303 - <NavigationProperty Name="AssignedTo" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 308 - <NavigationProperty Name="ChangedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 313 - <NavigationProperty Name="CreatedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 318 - <NavigationProperty Name="ActivatedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 323 - <NavigationProperty Name="ClosedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 328 - <NavigationProperty Name="ResolvedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 333 - <NavigationProperty Name="Tags" <Type=">Collection(Microsoft.VisualStudio.Services.Analytics.Model.Tag)"/>
Line 334 - <NavigationProperty Name="ChangedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 337 - <NavigationProperty Name="ClosedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 340 - <NavigationProperty Name="CreatedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 343 - <NavigationProperty Name="ResolvedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 346 - <NavigationProperty Name="StateChangeOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 349 - <NavigationProperty Name="InProgressOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 352 - <NavigationProperty Name="CompletedOn" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.CalendarDate">
Line 355 - <NavigationProperty Name="Microsoft_VSTS_CodeReview_AcceptedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">
Line 360 - <NavigationProperty Name="Microsoft_VSTS_Common_ReviewedBy" <Type=">Microsoft.VisualStudio.Services.Analytics.Model.User">


## Analytics updated date 

The  `AnalyticsUpdatedDate`  

:::row:::
   :::column span="1":::
      **Display name**  
      `Property name`  
   :::column-end:::
   :::column span="1":::
      **Data type**
   :::column-end:::
   :::column span="2":::
      **Description**  
      `Reference name`
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `AnalyticsUpdatedDate`  
   :::column-end:::
   :::column span="1":::
      DateTimeOffset
   :::column-end:::
   :::column span="2":::
      To Be Determined   
   :::column-end:::
:::row-end:::



WorkItemRevision 
WorkItem 
Tag 
WorkItemSnapshot 
WorkItemBoardSnapshot 
WorkItemLink 
CalendarDate 
Project 
Iteration 
Area 
Team 
BoardLocation
User
WorkItemTypeField
Process

### Test work item types 

TestRun
TestResult
Test
TestConfiguration
TestSuite



Notes: 
   
- Add Parent to queries content 
- EntityType and Key table. 
 
- Analytics - something something and Inherited Process 

Work tracking fields fall into one of the following categories: 

- Work item fields
- Work item board fields
- Custom fields
- SK fields
 
### About navigation properties

There are a number of 

### General query guidelines

- Limit your query to the project(s) you have access to.
- Specify columns you need to build your report in a `$select` clause. If you omit the `$select` clause, your query will return all fields, including custom fields. 
- Include **DateSK** or **DateValue** column in `groupby` clause when you aggregate over snapshot tables.
 
-->

<!--- 
## About data types and data models 




## Customizing a process

You can add fields, work item types, and change the menu selection of a pick list. The Analytics service automatically picks up changes made and updates the metadata for the data model. 

To perform any of the following tasks, see the relevant article. 

- To change the menu selection, see [Add and manage fields  (Inherited process)]() or [Add or modify a field, customize a picklist] (On-premises XML process).


- Note about how some fields are defined in one process, but can be added to other work item types in other processes. 

--> 
