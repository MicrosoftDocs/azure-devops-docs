---
title: Analyze work items and test case data
titleSuffix: TFS 
ms.prod: devops
ms.technology: devops-analytics
ms.topic: reference
description: Analyze current or historical data for work items and test cases by using Work Item perspective   
ms.assetid: c6d0d2da-d63f-4e9c-b92e-50c4605a72ef
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.date: 10/17/17
---


# Analyze and report on work items and test case data using the Work Item perspective

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)]

You can analyze current or historical data for work items and test cases by using the measures, dimensions, and attributes that are defined for the Work Item perspective in the SQL Server Analysis Services cube for Visual Studio Team Foundation Server. A test case is a type of work item that is associated within its own dimension and used specifically to support Microsoft Test Manager. For more information, see [Create your tests](../../test/create-test-cases.md).  
  
 The Work Item perspective is based on the relational tables that enable reporting on work items as either a property of the work item or a linked work item. For more information, see [Work Item History tables](work-item-history-tables.md).  
  
> [!NOTE]  
> You can use **Create Report in Microsoft Excel** to create status and trend reports based on a work item query. For more information, see [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md).  
  

![Work Item Measure Group](_img/rpt_wit_mg.png "RPT_WIT_MG")  

By using the Work Item perspective, you can create reports that answer the following questions:  
- What was the total count of active bugs each day in the last iteration?  
- How many scenarios were active each month during the last year?  
- How many bugs of each priority have been active each day in the last month?  
- How much outstanding and remaining work has a set of work items had over the last month?  
-  How much work did a particular group of developers finish?  
-  How much additional work was created after a particular date?   

> [!NOTE]  
> If your data warehouse is using SQL Server Enterprise Edition, the list of cubes will include Team System and a set of perspectives. The perspectives provide a focused view of the data so that you do not have to scroll through all of the dimensions and measure groups in the whole Team System cube.
  
<a name="example_trend"></a> 
##  Example: Bug Reactivations Report  

By using PivotChart reports in Excel, you can display the number of bugs that were closed and then reactivated over time, similar to the data in the following illustration.  
  
 ![Bug Reactivations Excel Report](_img/procguid_agileexr.png "ProcGuid_AgileExR")  
  
 The process templates for [Agile](../../boards/work-items/guidance/agile-process.md) and [CMMI](../../boards/work-items/guidance/cmmi-process.md) include the Bug Reactivations report in Excel. For more information, see [Bug Reactivations](../excel/bug-reactivations-excel-report.md).  
  
### Select and filter pivot fields  
 ![Pivot Fields for Bug Reactivations Report](_img/alm_rpt_pivot_bugreactivations.png "ALM_RPT_Pivot_BugReactivations")  
  
 You can create a bug reactivations report by performing the following steps:  
  
1.  In Excel, connect to the Analysis Services cube for Team Foundation Server, and insert a PivotChart report.  
  
     For more information, see [Create Excel reports from a work item query](../excel/create-status-and-trend-excel-reports.md).  
  
2.  Open the shortcut menu for the chart, choose **Change Chart Type**, choose **Area**, and then choose **Stacked Area**.  
  
3.  For each report filter, open the shortcut menu for each of the following fields, specify the hierarchies, weeks, or other elements of interest, and then drag the field to the **Report Filter** area.  
  
    -   **Team Project Hierarchy** from the **Team Project** dimension.  
  
    -   **Work Item.Iteration Hierarchy** from the **Work Item** dimension.  
  
    -   **Work Item.Area Hierarchy** from the **Work Item** dimension.  
  
    -   **Work Item.Work Item Type** from the **Work Item** dimension. Select the **Bug** check box as the only type to display.  
  
    -   **Year Week Date** from the **Date** dimension.  
  
4.  In the **Date** dimension, expand **More fields**, and drag the **Date**, **Week**, or **Month** fields to the **Axis Fields (Categories)** area to specify how granular a report you want to generate.  
  
5.  Drag **Work Item Count** from the **Work Item** measure group to the **Values** area.  
  
6.  Drag **State** from the **Work Item** dimension to the **Column Labels** area, and then select the **Active** and **Resolved** check boxes.  
  
7.  In the **Work Item** dimension, expand **More Fields**, drag **Previous State** to the **Column Labels** area, and then select the **Active** and **Resolved** check boxes.  
  
8.  In the PivotTable report, collapse the **Active** column to show only a single column, and then rename the cell as **Reactivated and Still Active**.  
  
9. In the PivotTable report, collapse the **Resolved** column to show only a single column.  
  
10. (Optional) Right-click any filter that appears on the chart, and then choose **Hide All Field Buttons on Chart**.  
  
<a name="measures"></a> 
##  Work item measures  
 The following table describes the measures that you can use to filter or report on the status or progress of work. With the Work Item Count measure, you can report on the total number of work items in a particular state at a particular point in time. To report activity that occurred on a particular day, you can use the State Change Count or Revision Count measures. The Work Item measure group contains additional measures when custom fields in the definitions of work item types specify `Measure` as the reportable attribute. For more information about how to use the `reportable` attribute, which is optional, and its values, see [Add or modify work item fields to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md).  
  
> [!NOTE]  
> The Agile and CMMI process templates include calculated measures that are associated with the scheduling work fields. When a measure in the cube is based on a field in a process template, the label for the measure is based on the reference name of the originating field. However, a localized translation appears for the measure labels when you browse the cube with Excel or other reporting tools.  
  
|**Measure**|**Description**|  
|-----------------|---------------------|  
|Business Value|A subjective unit of measure that captures the relative business value of a product backlog item. The reference name of this measure is Microsoft.VSTS.Common.BusinessValue.|  
|Completed Work|The number of hours of work that were completed for work items that meet the criteria in the query or report. The reference name of this measure is Microsoft.VSTS.Scheduling.CompletedWork.|  
|Effort|The aggregate of the units of effort for product backlog items that meet the criteria in the query or report. Effort is a subjective unit of measure that captures the level of effort to implement a product backlog item. A larger number indicates more work. This field is defined only in the Visual Studio Scrum process templates.  The reference name of this measure is Microsoft.VSTS.SchedulingEffort.|  
|Original Work|The number of hours of work from the baseline plan for work items that meet the criteria in the query or report. The reference name of this measure is Microsoft.VSTS.Scheduling.OriginalWork.|  
|Remaining Work|The number of hours that are recorded as estimates of the work remaining to complete work items that meet the criteria in the query or report. The reference name of this measure is Microsoft.VSTS.Scheduling.RemainingWork.|  
|Revision Count|The number of times that work items have been revised. You can use this measure to view detailed history about a set of work items or a particular work item. For example, you can use this measure to display the number of times that each member of the team has modified a work item during a span of time that you specify. To display this information, you create a query in which you slice the Revision Count measure by the Changed By dimension and also filter the measure by a date range.|  
|State Change Count|The number of times that the team changed the states of a filtered set of work items. You can use this measure to count bug activations in a particular product area during a span of time that you specify. Note that this measure returns the number of state transition events but not the number of work items in state transition. For example, this measure would return the resolved rate of 2 if the team resolved, reactivated, and then re-resolved the same bug.|  
|Size|A subjective unit of measure that captures the size of a requirement. This field is defined only in the MSF process templates for CMMI. The reference name of this measure is Microsoft.VSTS.Scheduling.Size.|  
|Story Points|A subjective unit of measure that captures the size of a user story. If you assign more points to a user story, you indicate that it requires more work to implement. This field is defined only in the MSF process templates for Agile software development. The reference name of this measure is Microsoft.VSTS.Scheduling.StoryPoints.|  
|Work Item Count|The count of work items that is based on the dimensions or filters that you specify. If your filter includes a date dimension, the measure returns historical information. Otherwise, the measure returns current information.|  
  
### Hidden measures  
 To build the calculations that provide point-in-time totals, several hidden measures are used. These measures are not exposed to client tools such as Microsoft Excel, Report Builder, or Report Designer, but the measures are present in definitions in the deployed cube. Hidden measures perform a calculation by using the Multidimensional Expressions (MDX) LastChild function, which aggregates the total for the measure as of a particular date.  
  
|**Measure**|**Description**|  
|-----------------|---------------------|  
|LastChild Record Count|A hidden measure that is used to calculate the Work Item Count measure.|  
|LastChild Microsoft_VSTS_Scheduling_RemainingWork|A hidden measure that is used to calculate the Remaining Work measure.|  
|LastChild Microsoft_VSTS_Scheduling_CompletedWork|A hidden measure that is used to calculate the Completed Work measure.|  
|LastChild Microsoft_VSTS_Scheduling_BaselineWork|A hidden measure that is used to calculate the Baseline Work measure.|  
  
<a name="filters"></a> 
##  Date and numeric filters  

You can use **Date Filters** and **Numeric Filters** to filter a report based on one or more values in this set. These filters appear under the measure group that is labeled **Values**. You can use the selections within each group to filter the set of work items. You should not add them to the PivotTable report directly. Instead, you filter the rows or columns within the PivotTable report by performing the following steps:  
  
1.  Choose the filter icon for either **Row Labels** or **Column Labels** within the PivotTable report, point to **Value Filters**, and then specify the criteria that you want (for example, **Greater Than**).  
  
2.  In the first field, choose the date or numeric filter that you want (for example, **Created Date**).  
  
3.  In the third field, type the value that meets your filter criteria, and then choose **OK**.  
  
     For example, to display all work items that were created after June 1, 2010, type **6/1/2010**.  
  
 The following table describes the date filters that you can use to refine the set of work items that a report returns. You can even combine filters.  
  

|**Field name**|**Description**|
|-|-|   
|Activated Date|The date and time when the work item was activated or reactivated. This filter corresponds to the Microsoft.VSTS.Common.ActivatedDate field.|  
|Closed Date|The date and time when a work item was closed. This filter corresponds to the Microsoft.VSTS.Common.ClosedDate field.|  
|Created Date|The date and time when a work item was created. This filter corresponds to the Microsoft.VSTS.Common.CreatedDate field.|  
|Due Date|The date and time by which the team forecasted that a task or an issue will be completed. This field applies only to task and issue work items. This filter corresponds to the Microsoft.VSTS.Scheduling.DueDate field.|  
|Finish Date|The date and time when the schedule indicates that the task will be completed. This filter corresponds to the Microsoft.VSTS.Scheduling.FinishDate field.|  
|Resolved Date|The date and time when a bug or other type of work item was resolved. This filter corresponds to the Microsoft.VSTS.Common.ResolvedDate field.|  
|Start Date|The date and time when the schedule indicates that the task will start. This filter corresponds to the Microsoft.VSTS.Scheduling.StartDate field.|  
  
 The following table describes the numeric filters that you can use to distill the set of work items that appear in a report.  
  
|Measure|Description|  
|-------------|-----------------|  
|ID|The unique ID of each work item. Work item IDs are unique across all team projects in a team project collection. In the data warehouse, you should expect duplicate IDs to exist across collections. This filter corresponds to the System.Id field.|  
|Priority|A subjective rating of the bug, issue, task, or test case as it relates to the business, usually between the values of 1 and 3. This filter corresponds to the Microsoft.VSTS.Common.Priority field.|  
|Rev|A number that is assigned to a revision of a work item. This filter corresponds to the System.Rev field.|  
|Stack Rank|A subjective rating of the user story, task, issue, or bug compared to other work items of the same type. An item that is assigned a lower number should be fixed before an item that is assigned a higher number. This filter corresponds to the Microsoft.VSTS.Common.StackRank field.|  
  
##  <a name="dimensions"></a> Dimensions, Attributes, Filters, and Categories in the Work Item Perspective  
 You can combine attributes across several dimensions to filter the set of work items that appear in a report or to highlight specific details about a group of work items. These attributes correspond to all the fields for any type of work item that have the reportable attribute set to `Dimension`. You can filter based on field attributes by work item, test case, linked work item, or linked test case. You can also filter the set of work items based on the type or types of links between them.  
  
 When you choose **Work Item** in the **Show fields related to** combo box in Excel, you have access not only to the Test Case, Work Item, and Work Item Category dimensions but also the Date and Team Project shared dimensions. Choose **Work Item** when you want to analyze work items or test cases and filter by date, project collection, project, or work item category. For information about the Date and Team Project dimensions, see [Shared dimensions](shared-dimensions-in-the-analysis-services-cube.md).  
  
> [!TIP]
>  Always start your filter process by specifying the criteria for the set of project collections and the team project on which you want to report.  
  
 To create reports about the status of current work items, you choose **Current Work Item** in the combo box. This combination of dimensions does not contain the Date dimension. To analyze the historical data of work items in a trend report, choose **Work Item** in the combo box.  
  
<a name="work_Item_field"></a> 
###  Filter by Work Item Fields Under the Work Item Dimension  

 The Work Item and Test Case dimensions contain all attributes that are specific to work items, such as State, Work Item Type, and Work Item ID. Additionally, work item fields in process templates that have the reportable attribute set to "`Dimension`" are reflected as attributes in the Work Item dimension.  
  
 Attributes appear under display folders in the Test Case and Work Item dimensions. Dimension attributes are organized into folders that are based on the reporting reference name that is assigned in the definition of each type of work item. The following types of mapping occur:  
  
-   Intrinsic fields, which have the "System" prefix, appear directly under the Test Case or Work Item dimension.  
  
-   Other fields appear under folders whose names correspond to the prefixes in the reference names of the fields. For example, fields that have the "Microsoft.VSTS.Common" prefix appear under the folder that is labeled "Microsoft.VSTS.Common."  
  
 For example, work item fields appear under the Work Item dimension, as the following illustration shows. The Linked Work Item and Test Case dimensions have similar structures.  
  
<table>
<tbody>
<tr valign="top">
<td>
For information about each field, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). Only fields that have `reportable="Dimension"` appear under the associated dimensions. Additional attributes appear when custom fields in the definitions of types of work items specify `Dimension` as the reportable attribute. For more information about how to use the `reportable` attribute, which is optional, and its values, see [Add or modify work item fields to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md).<br /><br /> For information about how to work with date hierarchies, see [Shared dimensions](shared-dimensions-in-the-analysis-services-cube.md).
</td>
<td>
![Folder structure in OLAP data cube](_img/rpt_workitem_folders.png "RPT_WorkItem_Folders") 
</td>
</tr>
</tbody>
</table>

 The following table describes the attributes that are not associated with a specific work item field and the hierarchical attributes that the Work Item dimension provides.  
  
|Attribute|Description|  
|---------------|-----------------|  
|Area|Contains a 14-level hierarchy, as the following illustration shows, which correlates the measures in the cube according to the area classifications with which they are associated. You can use this parent-child hierarchy to summarize or filter measures according to their level within the area hierarchy.<br /><br /> ![Area Hierarchy Dimension](_img/alm_rpt_area_hierarchy.png "ALM_RPT_Area_Hierarchy")<br /><br /> For more information, see [Create and Modify Areas and Iterations](../../organizations/settings/set-area-paths.md).|  
|Area Path|Flat list of the area paths for all team projects.|  
|Changed Date|Flat list of dates that you can use to filter the set of work items based on the dates on which the team modified the items.|  
|Changed Date Hierarchy by Month|Hierarchical tree that supports filtering and reporting on the set of work items based on the months in which the team modified the items. For example, you can use the Changed Date Hierarchy by Month or by Week, as the following illustration shows, to filter or create a trend report based on the changed date. For more information about how to work with date hierarchies, see [Shared dimensions](shared-dimensions-in-the-analysis-services-cube.md).<br /><br /> ![Changed Date Hierarchy](_img/alm_rpt_changeddate_hierarchy.png "ALM_RPT_ChangedDate_Hierarchy")|  
|Changed Date Hierarchy by Week|Hierarchical tree that supports filtering and reporting on the set of work items based on the week in which the team modified the items.|  
|Created Date|Flat list of dates that you can use to filter the set of work items based on the date on which the team created the items.|  
|Created Date Hierarchy by Month|Hierarchical tree that supports filtering and reporting on the set of work items based on the month in which the team created the items.|  
|Created Date Hierarchy by Week|Hierarchical tree that supports filtering and reporting on the set of work items based on the week in which the team created the items.|  
|Iteration|As the following illustration shows, contains a 14-level hierarchy that correlates the measures in the cube according to the iteration classifications with which they are associated. You can use this parent-child hierarchy to summarize or filter measures according to their levels within the iteration hierarchy.<br /><br /> ![Iteration Hierarchy Dimension](_img/alm_rpt_iteration_hierarchy.png "ALM_RPT_Iteration_Hierarchy")<br /><br /> For more information, see [Create and Modify Areas and Iterations](../../organizations/settings/set-area-paths.md).|  
|Iteration Path|Flat list of the set of iteration paths that are defined for all team projects.|  
|Previous State|The only field under **More fields** is **Previous State**, which you can use to filter a report based on the State to which a work item was assigned before it was assigned to its current state. State is an attribute of the workflow for a type of work item. For more information, see [Change the workflow](../../reference/xml/change-workflow-wit.md).|  
  
<a name="linked_work_item"></a> 
###  Filter by Link Type or Fields That Are Defined for a Linked Work Item  
 When you choose the **Linked Current Work Item** entry in the **Show fields related to** combo box, you gain access to the Work Item, Work Item Link Type, and Work Item Linked dimensions. Choose this entry when you want to filter the set of work items in a report based on the link type or values of fields in work items that are linked to other work items.  
  
<a name="linktype_attribute"></a> 
####  Filter Based on an Attribute of a Link Type  
 By specifying one or more of the attributes in the following table, you can filter work items that have at least one link relationship whose link type meets the criteria that you specify. For more information, see [LinkTypes](../../reference/xml/link-type-element-reference.md) and [Manage link types](../../reference/witadmin/manage-link-types.md).  
  
> [!NOTE]  
>  You can use any of the attributes in the following table to filter the report, but you will find the Link Name and Link Reference Name attributes most useful. All Boolean attributes have a value of either `True` or `False`.  
  
|Attribute|Description|  
|---------------|-----------------|  
|Is Deleted|A Boolean value that specifies whether a link type is deleted.|  
|Is Deny Delete|A Boolean value that specifies whether the link type can be deleted. For example, you can delete custom link types but not built-in link types.|  
|Is Deny Edit|A Boolean value that specifies whether the link type can be modified. For example, you can modify custom link types but not built-in link types.|  
|Is Directional|A Boolean value that specifies whether the link type is directional. Directional links are used to form dependent relationships and prohibit circular relationships.|  
|Is Disabled|A Boolean value that specifies whether the link type has been disabled. You can use this attribute to find or filter work items that contain link relationships whose link type has been deactivated or disabled.|  
|Is Non-Circular|A Boolean value that specifies whether the link type prohibits circular link relationships.|  
|Is Single Target|A Boolean value that specifies whether the link type allows users to specify only one target for each link of this type. For example, a child work item can have only one parent, as defined by a Parent link type.|  
|Is Tree|A Boolean value that specifies whether the link type is based on the Tree topology.|  
|Link ID|The integer that the system assigns to built-in and custom link types.|  
|Link Name|The friendly name of the link type. The friendly name corresponds to either the forward or reverse name that is assigned to that link type.|  
|Reference Name|The name that is assigned to the link type. For example, System.LinkTypes.Related is the reference name of the Related link type.|  
|Rules|The system assigns values to the rules that the link type uses. Do not use this attribute.|  
  
####  <a name="work_item_linked"></a> Filter Based on an Attribute of the Linked Work Item  
 The Work Item Linked dimension contains the same set of attributes as the Test Case and Work Item dimensions. You can use these attributes to find work items or filter measures based on attributes of work items that are linked to the work items that you are analyzing. By running this type of query, you can answer questions such as "How many active bugs are linked to priority 1 user stories?"  
  
> [!NOTE]
>  You can use the Work Item Link Type and Work Item Linked dimensions to filter reports about current work items only. You cannot use those dimensions to analyze historical data.  
  
 The Work Item Link Type and Work Item Linked dimensions are many-to-many dimensions that are linked to the Current Work Item fact table. Team members can link any work item to more than one other work item.  
  
 If a dimension corresponds to the attributes of links between work items, the name of the dimension is prefixed with the phrase "Work Item Linked." For example, the "Assigned To" attribute corresponds to the "Work Item Linked.Assigned To" attribute and so on for all other work item fields in the OLAP cube. For more information, see [Filter by Work Item Fields Under the Work Item Dimension](#work_Item_field) earlier in this article.  
  
<a name="changeset"></a> 
###  Filter By Changesets  
You choose the **Work Item Changeset** entry in the combo box to access the Version Control Changeset and Work Item dimensions. Choose this entry when you want to filter the set of work items by information in the changesets that are linked to the work items. When you make and check in changes to the code by using TFVC, you can associate the changeset with the work item that the changes address. A changeset lists the source files that you checked in for the changeset and a list of all work items that you linked to the changeset. For more information, see [Check in your work to the team's codebase](../../repos/tfvc/check-your-work-team-codebase.md).  
  
 The Version Control Changeset dimension is a parent-child dimension type and linked to the Current Work Item fact table through an intermediate, many-to-many fact table. Team members can link any work item to more than one changeset. The following table describes the attributes in the Version Control Changeset dimension.  
  
|Attribute|Description|  
|---------------|-----------------|  
|Changeset ID|The number that is assigned to the changeset.|  
|Checked In By|The user name of the team member who checked in the changeset.|  
|Description|The check-in comment that is associated with the changeset.|  
|Policy Override Comment|The comment that is provided when a policy is overridden. If a policy was not overridden with a changeset, the field is null.|  
  
<a name="category"></a> 
###  Filter By category  
 The **Work Item to Category** entry in the combo box contains the Work Item and Work Item Category dimensions. Choose this entry when you want to filter the set of work items by their associated categories. You use categories when your team projects contain types of work item that are similar but named differently. For more information, see [Use categories to group work item types](../../reference/xml/use-categories-to-group-work-item-types.md).  
  
 The following table describes the attributes in the Work Item Category dimension.  
  
|Attribute|Description|  
|---------------|-----------------|  
|Name|The friendly name that is assigned to the category of a work item.|  
|Reference Name|The reference name that is assigned to the category of a work item.|  
  
###  <a name="tree"></a> Filter By Hierarchical Relationships  
 The **Work Item to Tree** entry in the combo box contains the Work Item and Work Item Tree dimensions. Choose this entry when you want to filter by hierarchical nesting of work items that are linked by using the Parent and Child types of links or other custom-defined types of tree-topology links.  
  
> [!NOTE]   
>  You can use the Work Item Tree dimension to filter reports about current work items only. You cannot use this dimension to analyze historical data about work items.  
  
 The Work Item Tree dimension is a parent-child dimension type and linked to the Current Work Item fact table through an intermediate, many-to-many fact table. Any work item can be linked to more than one work item and, therefore, can appear in multiple places in the tree.  
  
 As the following illustration shows, The Work Item Tree Hierarchy contains eight hierarchical filters. The first hierarchy supports filtering work items at the top of the tree, Work Item Tree 1 supports filtering work items that are nested one level deep, and so on.  
  
 ![Work Item Tree](_img/alm_rpt_workitemtree.png "ALM_RPT_WorkItemTree")  
  
 The following table describes the attributes in the Work Item Tree dimension. You use link types that are based on the tree topology to create multi-level, hierarchical relationships among work items. In addition to supporting multi-level, hierarchical views, hierarchical link types support directionality and restrict circular relationships. For more information, see [LinkTypes](../../reference/xml/link-type-element-reference.md).  
  
|Attribute|Description|  
|---------------|-----------------|  
|Work Item Tree Hierarchy|Work items that are linked through hierarchical link types.|  
|Tree Type Name|The reference name of the hierarchical link type (for example System.LinkTypes.Hierarchy). You can filter the report based on a hierarchical type of link that is used within a team project collection. To filter the report based on the forward or reverse name of a type of link, use the Link Name attribute that the Work Item Link Type dimension provides.|  
  
###  <a name="test_result"></a> Filter By Test Result  
 The **Work Item with Result** entry in the combo box contains the Test Result, Version Control Changeset, Work Item, Work Item Category, and Work Item Tree dimensions. You can use the attributes in the Test Result dimension to filter reports based on the test results that are associated with test cases and their linked work items.  
  
 You can use the Work Item Count measure not only to determine how many work items are linked to a test result but also to report on work items and their associated test results. For a description of each Test Result attribute, see [Test results](perspective-test-analyze-report-test-results.md).  
  
##  <a name="tracking"></a> Required Activities to Monitor and Track Work  
 To create reports that contain useful data about the status, progress, and trends about work items, team members must perform the following activities:  
  
-   **Create work items**. Team members must create work items to manage the backlog of user stories or bugs, to track work by using tasks, and to manage test cases. Update the state of work items based on the process guidance for each type of work item.  
  
     For more information, see [Agile work items and workflow](../../boards/work-items/guidance/agile-process-workflow.md), [CMMI work items and workflow](../../boards/work-items/guidance/cmmi-process-workflow.md), or [Scrum work items and workflow](../../boards/work-items/guidance/scrum-process-workflow.md).  
  
-   **Link work items to other work items or changesets**. To track relationships between work items, team members must create links between, for example, user stories and tasks. Team members can create other useful links such as those between user stories and test cases, bugs and test cases, and changesets and user stories, tasks, and bugs. Team members can show relatedness, dependency, or hierarchy by specifying the appropriate type of link.  
  
     For more information, see [Manage dependencies, link work items](../../boards/queries/link-work-items-support-traceability.md).  
  
-   **Specify area and iteration paths**. To monitor status or trends on product areas or milestones by filtering reports, team members must set the Area and Iteration fields for each work item.  
  
-   **Assign work to owners and update the work item State**. As work progresses, team members must change the State of the work items that are assigned to them as the work items move from a new or proposed state, to active or in progress, to closed or done  
  
-   **Update the work effort**. To monitor progress that a team has made in completing work for an iteration or other interval of time, team members must update the amount of completed and remaining work for the work items that are assigned to them.  
  
## Related notes 
-  [Table reference for the relational warehouse database](table-reference-relational-warehouse-database.md)   
-  [Perspectives and measure groups in the Analysis Services cube](perspective-measure-groups-cube.md)
