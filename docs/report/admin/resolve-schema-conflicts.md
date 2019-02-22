---
title: Resolve data warehouses schema conflicts
titleSuffix: TFS
description: Resolve schema conflicts that are occurring in the data warehouse when connecting to Team Foundation Server    
ms.assetid: BB517672-2A9A-4A5B-8F27-E4409F199C02  
ms.prod: devops
ms.technology: devops-analytics
ms.topic: conceptual
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
monikerRange: "<= azure-devops-2019" 
ms.date: 11/19/2018
---

#Resolve data warehouse schema conflicts

[!INCLUDE [temp](../_shared/tfs-report-platform-version.md)] 

Schema conflicts occur when a set of attributes for reportable fields differs across team project collections. When a schema conflict occurs, fields that are not in conflict are processed as usual but fields that are in conflict are assigned null values until you resolve the conflicts and then process as usual. In addition, the system generates a notification event for each conflict that it detects. By subscribing to the event, you can receive alerts when schema conflicts occur for any team projects that are defined for a collection. You must correct all schema conflicts to unblock the processing of the associated data for the warehouse and to enable the associated reports to display current data. 

All reportable data from all team projects that are defined in all project collections for a deployment of Visual Studio Team Foundation Server is written to a single relational data warehouse. Data from that warehouse is then processed and written to the cube. Collecting data into a single data warehouse supports reporting across team project collections. However, because fields are managed distinctly for each project collection, schema conflicts can occur when different definitions are assigned to one or more attributes of a field that is assigned the same reporting reference name. 


##Schema conflict error messages  

When a schema conflict occurs, an error message will appear in the following locations:  

* The event log for the application-tier server.

	> [!NOTE]  
	> TFS logs an error message to the event log each day until the data conflict is resolved.  

* A report that is provided with the MSF process templates and that you view through the Report Manager.

* A dashboard that is provided with the MSF process templates and that you view through the project portal.  

	> [!NOTE]  
	> You can determine when a report or dashboard was updated most recently if you find the **Date Last Updated** time stamp, which appears in the lower-right corner of each report and dashboard. The time stamp corresponds to the most recent time that every warehouse adapter job that is scheduled for completion, for every project collection, successfully completed processing. The time stamp calculation includes custom adapter jobs and ignores adapter jobs that are blocked from running the Warehouse Control Web service.  
	> 
	> If a schema conflict is blocking data from entering the data warehouse for a report, the time stamp for the report will not be updated. 
 
In addition to the previous messages, you can obtain more information by using the **GetProcessingStatus** operation of the Warehouse Control Web service. For more information, see Manually Process the Data Warehouse and Analysis Services Cube for Team Foundation Server.
 
##Sources of schema conflicts

Schema conflicts occur when a project administrator performs one of the following actions:

* Adds a reportable field to a work item type in one project collection, and the attributes that are assigned to that field do not match those in other project collections.

* Changes an attribute that is assigned to a work item field that is used in more than one project collection, even though those changes conflict with the assignments in other collections.  
	
	> [!NOTE]  
	> A project administrator can avoid the errors in the previous list only by reviewing the attribute assignments for fields that are defined across multiple project collections in a deployment.   
 
	Errors result when a field has either the same reference name or the same reporting reference name in multiple project collections and one or more of the following attributes for that field does not match in two or more collections:

	- **name**: The friendly name of the field, which appears as an option when you create a work item query.  
	
	- **reportingname**: The name that appears in reports. If you do not specify a value, the value that is assigned to the **name** attribute is used.  
	
	- **reportable/reportingtype**: Whether data from the field is available for inclusion in reports, and if so, the reportable type (for example, **None**, **Detail**, **Dimension**, or **Measure**).  
	
		> [!NOTE]  
		> The **FIELD** element used the **reportable** attribute, and the **witadmin changefield** command uses the **reportingtype** attribute. These attributes define the same information.   
	- **type**: The type of data that the field accepts (for example, **Integer**, **HTML**, **String**, **Double**, or **DateTime**). 


The following table provides examples of attribute assignments that will cause schema conflicts. In these examples, the reporting reference name and the reporting name are not assigned.

<table width="100%">
<tr valign="top">
<th width="20%">Attribute</th>
<th width="20%">Project Collection 1</th>
<th width="20%">Project Collection 2</th>
<th width="40%">Schema conflict</th>
</tr>
<tr>
<td>Type</td>
<td>String</td>
<td>Integer</td>
<td>Data types do not match.</td>
</tr>
<tr>
<td>ReportingName</td>
<td>Activity</td>
<td>Common Activity</td>
<td>Reporting names do not match.</td>
</tr>
<tr>
<td>Reportable</td>
<td>Detail</td>
<td>Dimension</td>
<td>Reporting types do not match.</td>
</tr>
</table>

## Resolve schema conflicts

You can review the event log on the application-tier server to obtain more information about the field that is causing a schema conflict. After you determine the field or fields that are causing the conflict, you must follow these steps:

1. Review the attributes that are assigned to the field in all project collections. You can use the **witadmin listfields** command, which has the following syntax:

	```
	witadmin listfields /collection:CollectionURL /n:RefName   ```

	For more information, see [Manage work item fields](https://msdn.microsoft.com/library/dd236909.aspx).

2. Determine in which of the following ways you want to resolve the conflict:

	* Change the attribute for the field in one project collection to match the assignments that are made in other project collections. You should take this action when teams use the field in the same ways in similar reports or for cross-project reporting. 
	
	* Relabel the reporting reference name of the field in conflict. You should take this action when the fields are used in different ways or you must maintain a different field. In this case, the field is not used by teams that work in different project collections for cross-project reporting. 
	
	For more information, see [Add or modify work item fields to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md).
	
	* Mark a field as non-reportable for one or more collections. You should take this action when the field is not used for reports about those project collections. 
	
	* Remove the field from the team project collection. You should take this action if the field is not used by any team projects or reports. 	

	> [!NOTE]  
	> If you remove a field that is used in a report, the report will no longer display correctly.  

3. Change the attribute that is assigned to a field, based on the decisions that you made in the previous step. Use the **witadmin changefield** command. 

	```witadmin changefield /collection:CollectionURL /n:RefName \[/name:NewName] \[/syncnamechanges:true | false] \[/reportingname:ReportingName] \[/reportingrefname:ReportingRefName] \[/reportingtype:Type] \[/reportingformula:Formula] \[/noprompt]```  

4. To delete a field from a project collection, you can use the witadmin deletefield command, which has the following syntax:

	```witadmin deletefield /collection:CollectionURL /n:RefName```  

	> [!IMPORTANT]  
	> If you delete a field permanently, you remove the field and all data that it stores from data storage.  

##Verify resolution of schema conflicts 
 
You can verify that the schema conflicts have been resolved by [manually processing the data warehouse](manually-process-data-warehouse-and-cube.md) and then checking the reports to determine whether they are updated. Or you can wait until the warehouse adapter jobs run, according to their default schedule. By default, the relational database is processed every few minutes. However, the Analysis Services cube is processed every two hours by default.

1. Process the relational data warehouse on demand by using the **ProcessWarehouse** operation of the **WarehouseControlService**.

2. Process the cube on demand by using the **ProcessAnalysisDatabase** operation of the **WarehouseControlService**.

3. Open a dashboard or Report Manager, and verify that the reports are being updated. For more information, see [Project portal dashboards](../sharepoint-dashboards/project-portal-dashboards.md) or [Reports (SQL Server Reporting Services)](../sql-reports/reporting-services-reports.md).

	If error messages continue to appear, you can obtain more information about the data conflict and the affected blocked adapters by running the **GetProcessingStatus** operation of the **WarehouseControlService**. 

## Related content

- [Manage work item fields using **witadmin**](https://msdn.microsoft.com/library/dd236909.aspx)  
- [Add or modify work item fields to support reporting](../../reference/xml/add-or-modify-work-item-fields-to-support-reporting.md)  
- [Dashboards and reports](../overview.md)  
- [Manually process the TFS data warehouse and analysis services cube](manually-process-data-warehouse-and-cube.md)  