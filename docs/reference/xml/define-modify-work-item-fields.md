---
title: Field data types and field attributes | VSTS & TFS  
description: Data types supported by work item fields to support queries, reports, and workflow for Visual Studio Team Services (VSTS) and TFS  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: c735a582-954a-418e-8b12-1b5c0b9857b9  
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.date: 09/08/2017
---



# Field data types and attributes

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

The field data type determines the kind and size of data that you can store in the field. A field can have only one type defined within a project collection. This restriction encourages organizations to use common fields across projects and work item types.

Reportable attributes determine which fields show up in the data warehouse. Reportable attributes are only valid for on-premises TFS.  

The index attribute determines whether a field is indexed to support managed query searches. 

## Data types

The following list shows the supported data types:

<table valign="top"><thead>
<tr>
<th width="10%"><p>Data type</p></th>
<th width="90%"><p>Description</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
	<td><p><strong>Boolean</strong> </p></td>
	<td><p>Specifies a field that takes on a True/False value. Add a **Boolean** field to a work item form by using the **FieldControl** attribute. </p>

<blockquote><b>Feature availability:</b> The Boolean data type field is only supported for VSTS and TFS 2017.2 and later versions.</blockquote>

</td></tr>
<tr>
	<td><p><strong>DateTime</strong> </p></td>
	<td><p>Specifies a date according to Coordinated Universal Time (UTC) moment in time. Add a **DateTime** field to a work item form by using either the **FieldControl** or **DateTimeControl** **type** attributes. For query examples, see [Query by date or@CurrentIteration](../../boards/queries/query-by-date-or-current-iteration.md). </p></td></tr>
<tr>
	<td><p><strong>Double</strong> </p></td>
	<td><p>Specifies a floating-point value, such as 0.2 or 3.5. Double fields are frequently used in query filters and results lists.Add a **Double** field to a work item form by using the **FieldControl** **type** attribute. For query examples, see [Query by numeric fields](../../boards/queries/query-numeric.md). </p></td></tr>
<tr>
	<td><p><strong>GUID</strong> </p></td>
	<td><p>A character string that represents a unique ID.</p>
<blockquote><b>Note:</b>  You cannot add a **GUID** field to a work item form.</blockquote>
</td></tr>
<tr>
	<td><p><strong>History</strong> </p></td>
	<td><p>Custom formatted field used to track historical information. This data type is only used to support the <strong>History</strong> field. This field is automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](../../boards/queries/query-operators-variables.md#full-text) described later in this topic. For query examples, see [History and auditing](../../boards/queries/history-and-auditing.md). </p>

<blockquote><b>Note:</b>  The **System.History** field is the only field that uses this data type. You cannot define a custom field using this data type. For the client work item form, you add the **System.History** field by using the **WorkItemLogControl** **type** attribute which supports rich text format controls.</blockquote>

</td></tr>
<tr>
	<td><p> <strong>HTML</strong> </p></td>
	<td><p>Supports the ability to capture rich-text data and to use longer text descriptions such as the <strong>Description</strong> or <strong>Repro Steps</strong> fields. An HTML field differs from a PlainText field in that an HTML field is strongly typed to HTML for richer displays of information. HTML fields are automatically indexed for full-text search when full-text search is available. See [Full-Text and partial word searches](../../boards/queries/query-operators-variables.md#full-text).</p>

<p>Add an **HTML** field to a work item form by using the **HTMLControl** **type** attribute. To query rich-text fields, see [Query by titles, IDs, and rich-text fields](../../boards/queries/titles-ids-descriptions.md). </p>
</td>
</tr>
<tr>
	<td><p> <strong>Integer</strong> </p></td>
	<td><p>Specifies a 32-bit signed integer value, such as 0, 1, 2, 34. Integer fields are frequently used in query filters and results lists. Add an **Integer** field to a work item form by using the **FieldControl** **type** attribute.</p>

</td></tr>
<tr>
	<td><p> <strong>PlainText</strong> </p></td>
	<td><p>Supports entry of a text string that can contain more than 255 Unicode characters. These fields are automatically indexed for full-text search, when full-text search is available. See [Full-Text and partial word searches](../../boards/queries/query-operators-variables.md#full-text).</p>
<p>Add a **PlainText** field to a work item form by using either the **FieldControl** type attribute. To query plain-text fields, see [Query by titles, IDs, and rich-text fields](../../boards/queries/titles-ids-descriptions.md).</p>

</td></tr>
<tr>
	<td><p> <strong>String</strong> </p></td>
	<td><p>Supports entry of a text string that can contain up to 255 Unicode characters. String text fields are often used to support pick lists or drop-down menus. String fields are frequently used in query filters and results lists. Add a **String** field to a work item form by using the **FieldControl** **type** attribute. </p>


</td></tr>
<tr>
	<td><p> <strong>TreePath</strong> </p></td>
	<td><p>Specifies a field that displays entries in a hierarchical or tree structure, such as the requirements to display area and iteration paths for a product.   For more information, see [Add and modify area and iteration paths](../../organizations/settings/set-area-paths.md).</p>

<blockquote><b>Note:</b> The **System.AreaPath** and **System.IterationPath** fields are the only fields that use this data type. You cannot define a custom field using this data type. For the client work item form, you add the **System.AreaPath** and **System.IterationPath** fields to a work item form by using the **WorkItemClassificationControl type** attribute. </blockquote>
</td></tr>
</tbody>
</table>


## Reportable attributes

Some field values are especially useful for reporting. By using the work item type definition language, you can specify the following optional attributes.


> [!NOTE]    
>**Feature availability**: Reportable attributes are only supported for the On-premises XML process model. These attributes aren't referenced and aren't subject to modification when you use the Hosted XML process model.  

-    **reportable**: Set the reportable attribute to **None**, **Detail**, **Dimension**, or **Measure**, depending on whether and how you want the field to be included in reports. Data from fields that have a value other than **None** for this attribute are exported to the data warehouse and can be included in reports.

    When you add an existing field to a work item type, the current value for the **reportable** attribute is used. When you add a field to a work item type, reporting is disabled unless you explicitly specify it by using the **reportable** attribute.

-    **reportingname**: Assign a different label to a field that is used when data appears in reports. If you do not specify a value, the friendly name that is assigned for the **name** attribute is used.

-    **reportingrefname**: Assign a different reference name to a field that is used when data is exported to the relational data warehouse. If you do not specify a value, the value that is assigned to the **refname** attribute is used.

    Use this attribute to either merge or diverge fields that are included in reports. To merge two fields that have distinct reference names and that are defined in different project collections, you assign the same **reportingrefname** to both fields. To diverge two fields that have the same reference name and that are defined in different project collections, you assign a different **reportingrefname** to each field.

After you define a field, you can use the **witadmin changefield** command at a command prompt to change the value of all attributes except for the **refname** attribute.

For information about best practices in labeling fields for reporting purposes, see [Add or modify work item fields to support reporting](add-or-modify-work-item-fields-to-support-reporting.md).

### Attribute values

As the following table describes, you can assign one of the following values to the **reportable** attribute: none, dimension, detail, and measure.

> [!NOTE]     
> You can make a field reportable after it has been used for a work item. After you set the reportable value, new revisions of the work item that are copied to the warehouse will contain the field value. However, the revisions that are already in the warehouse will not be backfilled with the existing values.

> [!div class="mx-tdCol2BreakAll"]
> |Attribute value|Description|
> |---|---|
> | **Detail** |Use the **Detail** type only for Integer, Double, String, or DateTime fields.<br/><br/>The data in this field is moved into the relational warehouse database in the Work Item and Current Work Item tables but not into the SQL Server Analysis Services cube. By using this type for unrestricted text fields, you can use them in reports without making the cube significantly larger.|
> | **Dimension** |Use the **Dimension** type only for Integer, String, or DateTime fields.<br /><br />The data in this field enters the relational warehouse database and the Analysis Services cube as an attribute of the Work Item dimension so that the data can be used to filter reports. Use this type for fields that have lists of valid values. Work Item Type and State are good examples of a dimension.|
> | **Measure** |Use the **Measure** type only for Integer and Double fields. Measures are the numeric values in your reports.<br /><br />During processing of the Analysis Services cube, data is precalculated on fields that are set to **Measure**. For example, the Work Item and Current Work Item measure groups contain cumulative data for the following fields: Original Estimate, Remaining Hours, and Completed Hours. For more information about measure groups, see [Perspectives and measure groups provided in the Analysis Services cube](../../report/sql-reports/perspective-measure-groups-cube.md).<br /><br />When you specify **Measure**, you must specify **sum** for the **formula** attribute, which returns the sum of each measure referenced in the query.|
> | **None** |Specify **None** when you do not want to include the field in reports. This value is the default assignment.|

### Syntax examples 

**Detail Example**

`<FIELD refname="MyCorp.Summary" name="Summary" type="String" reportable="detail">`

**Dimension Example**

`<FIELD refname="MyCorp.Category" name="Category" type="String" reportable="dimension">`

**Measure Example**

`<FIELD refname="MyCorp.Cost" name="Cost" type="Integer" reportable="measure" formula="sum">`

## Indexed fields

You can enable or disable indexing for a work item field by using the **witadmin indexfield** command. When you enable indexing for a field, you may increase the performance of finding work items whose queries specify that field. If you add a custom field that you use in many of your work item queries, you may want to enable indexing for that field. For more information, see [Manage work item fields (witadmin)](../witadmin/manage-work-item-fields.md).


## System and predefined fields

All system defined fields have reference names that begin with System, for example, System.AreaPath, System.AssignedTo, and continue in that pattern.

Predefined fields defined by the default process templates that TFS provides begin with Microsoft.VSTS and then further differ based on their usage. Examples of predefined fields that are used in common, for scheduling purposes and integration with Microsoft Project, for integration with Team Foundation Build, and integration with Team Foundation are as follows:

-   Microsoft.VSTS.Common.Priority  
-   Microsoft.VSTS.Scheduling.DueDate  
-   Microsoft.VSTS.Build.FoundIn   
-   Microsoft.VSTS.TCM.Steps  

For an overview of all system and predefined fields that are defined for the default processes/process templates, see [Work item field index](../../boards/work-items/guidance/work-item-field.md). For more information about specifying field names, see [Naming restrictions](../../organizations/settings/naming-restrictions.md).


## Related articles
- [Add or modify a field](../add-modify-field.md)  
- [Manage work item fields (witadmin)](../witadmin/manage-work-item-fields.md)   
- [Apply a field rule](apply-rule-work-item-field.md)
- [All FIELD XML elements reference](field-definition-element-reference.md)  


### Hidden and non-changeable attributes

In addition to the attributes that you can change for a work item field, there are a number of non-changeable and virtually hidden attributes for each field. You can look up the assignments of these fields using the Work Item Field Explorer tool. Access the Work Item Field Explorer tool from the Process Editor tool.

To access this tool:
- For TFS 2017 and later versions, install the [TFS Process Template editor from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KarthikBalasubramanianMSFT.TFSProcessTemplateEditor).  
- For TFS 2015 and earlier versions, install [TFS Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power). 

#### Work Item Field Explorer

With the Work Item Field Explorer, you can view the work item fields and their attributes that are defined for a collection.  

![Work item field explorer](_img/define-modify-work-item-fields/IC633020.png)


