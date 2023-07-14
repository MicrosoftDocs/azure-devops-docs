---
title: Calendar date, Project, and User metadata reference for Analytics
titleSuffix: Azure DevOps
description: CalendarDate, Project, and User properties and enumerated members metadata for the Analytics service  
ms.subservice: azure-devops-analytics
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'
ms.date: 11/07/2022
---


# Calendar date, Project, and User metadata reference for Azure DevOps Analytics

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

The entity types and entity sets listed in the following table can be used to filter and build reports based on Analytics data. 


|EntitySet|  EntityType | Description |  
|----------------------|-------------|-------------|  
| [**Dates**](#dates) |**CalendarDate** | The dates used to filter and group other entities using relationships.  |  
|[**Projects**](#projects)|  **Project** |Projects defined for an organization (cloud) or project collection (on-premises). |  
|[**Users**](#users)|  **User** |User information that is used to expand or filter various work item properties, for example **Assigned To**, **Created By**. |  


[!INCLUDE [note-analytics-early-draft](../includes/note-analytics-data-model.md)]


## Dates 

The following properties are valid for the **CalendarDate** entity type. The surrogate key associated with **CalendarDate** is `DateSK`. You can specify calendar date properties to filter and structure reports.  


|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|  | `IsLastDayOfPeriod` | Enumerated | Use to filter data to determine if a day finishes in different periods such as days, weeks, months, or years.  Valid values are listed below for [Period](#period-enumerated-type-members).|
|**Date**         | `Date` | DateTime | A specific calendar date.  | 
|**Day Name**     | `DayName` | String | The name of a day, such as Monday, Tuesday, Wednesday, and so on.   |
|**Day Short Name** | `DayShortName` | String | The short name assigned to a day, such as Mon, Tue, Wed, and so on.  | 
|**Day Of Week**  | `DayOfWeek` | Int32 | The number associated with the day within a week.  | 
|**Day Of Month** | `DayOfMonth` | Int32 | The number associated with the day within a month.  |  
|**Day Of Year**  | `DayOfYear` | Int32 | The number associated with the day of a year.   |  
|**Week Starting Date** | `WeekStartingDate` | DateTime | The date associated with the start of a week.    |  
|**Week Ending Date**   | `WeekEndingDate` | DateTime | The date associated with the end of a week.     |  
|**Month**        | `Month` | String | The abbreviated name of a month and year, for example, Jan 2022, Feb 2022, Mar 2022, and so on. |  
|**Month Name**   | `MonthName` | String | The name of a month, such as January, February, March, and so on.  |  
|**Month Short Name** | `MonthShortName` | String | The abbreviated name of a month, such as Jan, Feb, Mar, and so on.    |  
|**Month Of Year** | `MonthOfYear` | Int32 | The number assigned to a month. For example 1, 2, and 3 corresponding to January, February, and March.  |  
|**YearMonth**    | `YearMonth` | Int32 | A number corresponding to the concatenated year and month. For example, 202201, 202202, and 202203 corresponds to January, February, and March of 2022.    |  
|**Year**  | `Year` | Int32 | The year, such as 2019, 2020, 2021 and so on.  |  

By default, all the snapshot tables are modeled as *daily snapshot fact* tables. If you query for a time range it will get a value for each day. Long time ranges result in a large number of records. If you don't need such high precision, you can use weekly or even monthly snapshots. 

When you aggregate data for a snapshot entity, you should include the `DateSK` or a `DateValue` column in a `groupby` clause as described in the [OData query guidelines](../extend-analytics/odata-query-guidelines.md#restrict-aggregate-snapshot). For example reports that specify a date filter, see the following articles: 
 
- [Query trend data](../extend-analytics/querying-for-trend-data.md)
- [Define basic queries using OData Analytics](../extend-analytics/wit-analytics.md)
- [Calculate time-in-state for an existing Analytics view](../powerbi/create-timeinstate-report.md) 
- [Bug trends sample report](../powerbi/sample-boards-bugtrend.md)
- [Lead time and Cycle time sample report](../powerbi/sample-boards-leadcycletime.md)
- [Pipeline pass rate trend sample report](../powerbi/sample-pipelines-pass-rate-trend.md)
- [Pipeline task duration trend sample report](../powerbi/sample-pipelines-task-duration-trend.md)

### Period enumerated type members 

The following members are defined for the `Period` enumerated type that you can use with other filter expressions to remove days that don't finish a given week or month.  Reference one of these members to specify a weekly or monthly period for trend queries that span a long time period. The `Period` enumerated type has a single attribute, `IsFlags`, which is set to `True`.  


| Member name            | Value        | Display name          |  
|------------------------|--------------|-----------------------|  
|`None`                  | 0            | None                  |  
|`Day`                   | 1            | Day                   |      
|`WeekEndingOnSunday`    | 2            | Week Ending On Sunday  |   
|`WeekEndingOnMonday`    | 4            | Week Ending On Monday  |     
|`WeekEndingOnTuesday`   | 8            | Week Ending On Tuesday  |     
|`WeekEndingOnWednesday` | 16           | Week Ending On Wednesday |    
|`WeekEndingOnThursday`  | 32           | Week Ending On Thursday |    
|`WeekEndingOnFriday`    | 64           | Week Ending On Friday    |  
|`WeekEndingOnSaturday`  | 128          | Week Ending On Saturday  |     
|`Month`                 | 256          | Month                    |    
|`Quarter           `    | 512          | Quarter                  |     
|`Year`                  | 1024         | Year                    |      
|`All`                   | 2047         | All                     |      


## Projects

The following properties are valid for the **Projects** entity set and its surrogate key `ProjectSK`. When generating an organization scoped query, you can focus on one or more projects by specifying  one or more **Project Names**. To learn more, see [Project and organization-scoped queries](../extend-analytics/account-scoped-queries.md). 

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|**Project Id** | `ProjectId` | GUID | Unique identifier assigned to a project when it's created.  | 
|**Project Name** | `ProjectName` | String | Name assigned to a project when it's created.  | 
|**Project Visibility** | `ProjectVisibility` | Enumerated | Indicates if the project is public or private. Valid values are listed below for [ProjectVisibility](#projectvisibility-enumerated-type-members).   |  

### Navigation properties 

The following navigation properties are valid for the **Project** entity type.

- [Areas](entity-reference-boards.md#areas)
- [Iterations](entity-reference-boards.md#iterations)
- [Teams](entity-reference-boards.md#teams)

### ProjectVisibility enumerated type members 

The following members are defined for the `ProjectVisibility` enumerated type.  Reference one of these members to filter on specific projects.   

 Member name            | Value        | Display name          |  
------------------------|--------------|-----------------------|  
|`Private`             | 0            | Private                |  
|`Organization`        | 1            | Organization           |   
|`Public`              | 2            | Public                 |     


## Users

The following properties are valid for the **Users** entity set and **User** entity type with surrogate key `UserSK`.

|**Display name** | **Name**           | **Data type** | **Description** | 
|-----------------|--------------------|---------------|--------------------------------------|
|    | `AnalyticsUpdatedDate` | DateTime | Watermark that indicates the last time the Analytics data was updated.  | 
|**User Email** | `UserEmail` | String | Email associated with a user account identity.  | 
|**User Id** | `UserId` | GUID | Unique identifier assigned to a user account identity.  | 
|**User Name** | `UserName` | String | Name assigned to a user when the user account identity is created.  |  
|**GitHub User Id** | `GitHubUserId` | String | GitHub user ID associated with the user account.    | 
|**User Type** | `UserType` | Custom | The type of user. Valid values are listed below for [UserType](#usertype-enumerated-type-members). | 


### UserType enumerated type members 

The following members are defined for the `UserType` enumerated type.  

| Member name            | Value        | Display name          |  
|------------------------|--------------|-----------------------|  
|`Unknown`             | 0            | Unrecognized           |         
|`Unrecognized`        | 1            | Unrecognized           |     
|`User`                | 2            | User                   |     
|`Organization`        | 3            | Organization           |     
|`Bot`                 | 4            | Bot                    |  


## Related articles

- [Data model for Analytics](../extend-analytics/data-model-analytics-service.md)
- [Entities and properties reference for Azure Boards](entity-reference-boards.md)   
- [OData Analytics query guidelines](../extend-analytics/odata-query-guidelines.md)  
- [Project and team quick reference](../../organizations/projects/project-team-quick-reference.md)


  