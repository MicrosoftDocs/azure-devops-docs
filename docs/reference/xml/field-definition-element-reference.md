---
title: FIELD (Definition) element reference 
titleSuffix: Azure DevOps & TFS
description: Syntax and usage of the FIELD element used to specify data fields within a work item type 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 67560004-04d6-411c-97fb-07f66303ef11
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 06/16/2017
---

# FIELD (Definition) element reference

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You use the **FIELD** (Definition) element to define a work item field and specify the rules and conditions that apply to it. The attributes that you assign to a field determines its data type and whether it is available for inclusion in reports.  
  
> [!NOTE]
>  For information about the **FIELD** (Workflow) element, which you use to specify rules and conditions to fields during a state change or workflow transition, see [FIELD (Workflow)](field-workflow-element-reference.md).  
  
## Syntax  
  
> [!NOTE]    
> The Boolean data type is supported for Azure DevOps Services and for on-premises TFS 2017.2 and later versions. 

> [!div class="tabbedCodeSnippets"]
```XML  
<FIELD name="fieldDisplayName" refname="fieldReferenceName" 
type="String | Integer | Double | DateTime | PlainText | HTML | History | TreePath | GUID | Boolean"   
syncnamechanges ="true | false" reportable="Dimension | Detail | Measure" formula="sum" 
reportingname="ReportingDisplayName" reportingrefname="ReportingReferenceName" >  
   <ALLOWEDVALUES> . . . </ALLOWEDVALUES>  
   <ALLOWEXISTINGVALUE />  
   <CANNOTLOSEVALUE />  
   <COPY />  
   <DEFAULT />  
   <EMPTY />  
   <FROZEN />  
   <HELPTEXT> . . . </HELPTEXT>  
   <MATCH />  
   <NOTSAMEAS />  
   <PROHIBITEDVALUES /> . . . </PROHIBITEDVALUES>  
   <READONLY />  
   <REQUIRED />  
   <SERVERDEFAULT />  
   <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>  
   <VALIDUSER />  
   <WHEN> . . . </WHEN>  
   <WHENNOT> . . . </WHENNOT>  
   <WHENCHANGED> . . . </WHENCHANGED>  
   <WHENNOTCHANGED> . . . </WHENNOTCHANGED>  
</FIELD>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|**name**|Required. The friendly name of the field that appears in the drop-down menus of work item queries. The friendly name must be unique across all fields that are defined within a project. Also, the friendly name may differ from the label that appears next to the field on the work item form. For more information, see [Control](control-xml-element-reference.md).<br /><br /> The attribute type is `typelib:FieldName`. Minimum length: 1; maximum length: 128.<br /><br /> Pattern value: ^[^\\.\\[\\]]+$<br /><br /> Pattern value example: Assigned To|  
|**refname**|Required. The unique label that distinguishes a field from all other fields that are defined in the project collection.<br /><br /> For additional requirements and restrictions on friendly names and reference names, see [Naming conventions for work item tracking objects](../../organizations/settings/naming-restrictions.md#ProjectNames).<br /><br /> The attribute type is `typelib:ReferenceFieldName`. Minimum length: 1; maximum length: 70.<br /><br /> Pattern value: ^[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z0-9_]+)+$<br /><br /> Pattern value example: Company.IssueType|  
|**type**|Required. Specifies the type of data that the field accepts.<br /><br /> **Note**: Fields in different project collections that have the same `reportingrefname` must be assigned the same value for `type`. If the values differ, data conflicts can occur when the data warehouse is processed. For more information, see [Resolve Data Conflicts That Are Occurring in the Data Warehouse](../../report/admin/resolve-schema-conflicts.md).<br /><br /> The following table lists valid values for this attribute:<br /><br />  - `Boolean`: Adds a True/False or Yes/No field. **Note**: For on-premises TFS, the Boolean data type requires that you upgrade to TFS 2017.2 or later version.<br /><br /> - `DateTime`:  Specifies a date according to Coordinated Universal Time (UTC) moment in time.<br /><br /> - `Double`:  Specifies a floating-point value.<br /><br /> - `GUID`: Specifies a field that will contain a unique identifier.<br /><br /> - `History`: Supports discussion threads and keeps track of other historical information. **Note**: The `System.History` field is the only field that uses this data type. You cannot define a custom field using this data type.<br /><br /> - `HTML`: Supports capture of rich-text data and is used for longer text descriptions such as a work item description.<br /><br /> -                         `Integer`:  Specifies a 32-bit signed integer value.<br /><br /> -                     `PlainText`:  Supports entry of a text string that can contain more than 255 Unicode characters.<br /><br /> - `String`: Supports entry of a text string that can contain up to 255 Unicode characters. Use a String field for a label or other short text string up to one line long.<br /><br /> -  `TreePath`:  Specifies a field that displays entries in a hierarchical or tree structure, such as what is required to display the area and iteration paths for a product. To define child nodes, see [Create and Modify Areas and Iterations](../../organizations/settings/set-area-paths.md). **Note**: The `System.AreaPath` and `System.IterationPath` fields are the only fields that use this data type. You cannot define a custom field using this data type.|  
|**syncnamechanges**|Optional. Specifies whether the work item field is used to store names that you want to be updated as changes are made in Active Directory or a Workgroup. This option is only valid when `type="String"`. The attribute type is `xs:boolean`.<br /><br /> Specify `true` to enable synchronization for the data field, specify `false` to disable synchronization for the data field.|  
|**reportable**|Optional. Specifies whether data from the field is available for inclusion in reports. Fields with the default value of `None` are neither exported to the relational data warehouse nor processed for the SQL Server Analysis Services cube. For more information about reportable fields, see [Add or modify work item fields to support reporting](add-or-modify-work-item-fields-to-support-reporting.md).<br /><br /> **Note**: Fields in different project collections that have the same value for the `reportingrefname` must be assigned the same value for `reportable`. If the values differ, data conflicts can occur when the data warehouse is processed. For more information, see [Resolve Data Conflicts That Are Occurring in the Data Warehouse](../../report/admin/resolve-schema-conflicts.md).<br /><br /> The following table lists valid values for this attribute:<br /><br /> -                         `Detail`: Can be specified for fields of type DateTime, Double, Integer, or String. The data in this field is moved into the relational warehouse database in the Work Item and Current Work Item tables but not into the Analysis Services cube. This type is a good choice for unrestricted text fields because you can use them in reports without making the cube significantly larger.<br /><br /> - `Dimension`: Can be specified for fields of type DateTime, Integer, String, or TreePath. The data in this field enters the relational warehouse database and the Analysis Services cube as an attribute of the Work Item dimension so that the data can be used to filter reports. Use this type for fields that have lists of valid values. Work Item Type and State are good examples of a dimension.<br /><br /> - `Measure`:  Use the measure type only for Integer and Double fields. Measures are the numeric values in your reports. When the Analysis Services cube is processed, data is precalculated on fields whose `reportable` attributes are set to measure. For example, the Work Item and Current Work Item measure groups contain cumulative data for the following fields: Original Estimate, Remaining Hours, and Completed Hours.<br /><br /> When you specify measure, you must specify the `formula` attribute.<br /><br /> - `None`:                       Specify `None` when you do not want to use the field for inclusion in reports. This is the default assignment.|  
|**formula**|Optional. The aggregation type for the `measure` reportable type. The only valid value is `sum`, which returns the sum of all values over the set.|  
|**reportingname**|Optional. Specifies the name that appears in reports. If you do not specify a value, the value that is assigned to the `name` attribute is used.<br /><br /> **Note**: Fields in different project collections that have the same `reportingrefname` must be assigned the same value for the `reportingname`. If the values differ, data conflicts can occur when the data warehouse is processed. For more information, see [Resolve Data Conflicts That Are Occurring in the Data Warehouse](../../report/admin/resolve-schema-conflicts.md).<br /><br /> The attribute type is `typelib:FieldName`. Minimum length: 1; maximum length: 128.<br /><br /> Pattern value: ^[^\\.\\[\\]]+$<br /><br /> Pattern value example: Assigned To|  
|**reportingrefname**|Optional. Specifies the reference name that is used when a reportable field is processed. If you do not specify a value, the value that is assigned to the `refname` attribute is used.<br /><br /> You can use this attribute to either merge or diverge fields that are processed to the data warehouse. To merge two fields that have distinct reference names and that are defined in different project collections, you assign the same `reportingrefname` to both of them. To diverge two fields that have the same reference name but that are defined in different project collections, you assign a different **reportingrefname** to each field.<br /><br /> You should merge fields whenever possible to minimize the number of fields in the warehouse and to keep under the maximum limit of 1024 reportable fields. You can generate cross-group reports with merged fields.<br /><br /> The attribute type is `typelib:ReferenceFieldName`. Minimum length: 1; maximum length: 70.<br /><br /> Pattern value: ^[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z0-9_]+)+$<br /><br /> Pattern value example: Company.IssueType|  
  
### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[ALLOWEDVALUES](define-pick-lists.md)|Optional. Defines a list of allowed values for the field. Allowed values are values that are available for selection in a field list on work item forms and in the query builder. You must select from one of these values.|  
|[ALLOWEXISTINGVALUE](define-pick-lists.md)|Optional. Defines the field to allow existing values. This element allows the field values that already exist to be used, even if they are not valid. All new field values must be valid.|  
|[CANNOTLOSEVALUE](apply-rule-work-item-field.md)|Optional. Defines the field as cannot lose value. This element keeps the current field value and it cannot be cleared or made empty.|  
|[COPY](define-default-copy-value-field.md)|Optional. Specifies another field that contains a value to be copied into the current field.|  
|[DEFAULT](define-default-copy-value-field.md)|Optional. Defines a default value for the field.|  
|[EMPTY](apply-rule-work-item-field.md)|Optional. Defines the field as empty.|  
|[FROZEN](apply-rule-work-item-field.md)|Optional. Defines the field as frozen. A frozen field cannot be changed to any non-empty value after changes are committed. However, you can manually clear the field, save the work item, and then specify a different value.|  
|[HELPTEXT](apply-rule-work-item-field.md)|Optional. Defines the text displayed in the ToolTip for the field.|  
|[MATCH](apply-pattern-matching-to-string-field.md)|Optional. Defines a pattern for the field that the field value must match.|  
|[NOTSAMEAS](apply-rule-work-item-field.md)|Optional. Specifies another field, the value of which cannot be identical to the value of the current field.|  
|[PROHIBITEDVALUES](define-pick-lists.md)|Optional. Defines a list of prohibited values for the field.|  
|[READONLY](apply-rule-work-item-field.md)|Optional. Defines the field as read-only.|  
|[REQUIRED](apply-rule-work-item-field.md)|Optional. Defines the field as required.|  
|[SERVERDEFAULT](define-default-copy-value-field.md)|Optional. Specifies a server component that will provide the value for the field.|  
|[SUGGESTEDVALUES](define-pick-lists.md)|Optional. Defines a list of suggested values for the field. Suggested values are values that are available for selection in a field list on work item forms and in the query builder. You can enter other values additionally to the ones in the list.|  
|[VALIDUSER](apply-rule-work-item-field.md)|Optional. Specifies that the list of allowed values must consist only of valid users of the system.|  
|[WHEN](assign-conditional-based-values-and-rules.md)|Optional. Specifies one or more rules to apply to the current field when another field has a specific value.|  
|[WHENCHANGED](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when a specific field's value is changed.|  
|[WHENNOT](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when another field does not have a specific value.|  
|[WHENNOTCHANGED](assign-conditional-based-values-and-rules.md)|Optional. Applies one or more rules to the current field when a specific field's value is not changed.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[FIELDS](all-witd-xml-elements-reference.md)|Required. Contains the work item type field definitions.|  
  
## Remarks  
  
1.  `FIELD` (Definition) is a required child element of `FIELDS` (Definition).  
  
2.  For an overview of all system and predefined fields that are defined for the TFS process templates, see [Index of work item fields](../../boards/work-items/guidance/work-item-field.md).  
  
3.  You cannot define a custom field that starts with the `System.` prefix. You can define a field by using the `Microsoft.` prefix, however, this practice is strongly discouraged because it might impede Team Foundation Server functionality.  
  
     For additional requirements and restrictions on field-friendly names and reference names, see [Naming conventions for work item tracking objects](../../organizations/settings/naming-restrictions.md#ProjectNames).  
  
4.  While you can rename a field's friendly name, you can't rename the field's reference names. You can list fields and change several field attributes using the **witadmin** command-line toolSee [Manage work item fields](../witadmin/manage-work-item-fields.md).  
  
5.  You can define no more than 1,024 work item fields in the same project collection, and you can set no more than 1,024 fields to reportable in all project collections.  
  
     All fields defined within all work item types (WITs) for all projects defined for a project collection are for a project collection. Therefore, attributes that you assign to fields that are defined in one WIT must match across all WITs for all projects in a collection. In addition, all reportable fields from all collections are exported to the data warehouse databases.  
  
6.  For information about how to label fields for reporting purposes, see [Add or modify work item fields to support reporting](add-or-modify-work-item-fields-to-support-reporting.md).  
  
7.  When you add an existing field to a different WIT, either explicitly set the reporting attributes to be the same as the current field definition, or let them default to these values.  
  
     Schema conflicts can occur if different reporting attributes are assigned to the same field in different WITs or the same WITs in different projects. To fix these conflicts, see [Resolve Data Conflicts That Are Occurring in the Data Warehouse](../../report/admin/resolve-schema-conflicts.md).  
  
8.  To understand how fields are used to support queries, reports, and work item tracking, see [Modify a field or add a custom field](../add-modify-field.md).  
  
9. For an overview of how to apply constraints or conditions on a `FIELD` by using child elements, see [Apply a field rule](apply-rule-work-item-field.md).  
  
## Example  
  
```xml
<FIELD name="Activity" refname="Microsoft.VSTS.Common.Activity" type="String" reportable="dimension">  
   <HELPTEXT>Type of work involved</HELPTEXT>  
   <SUGGESTEDVALUES>  
      <LISTITEM value="Development"/>  
      <LISTITEM value="Testing"/>  
      <LISTITEM value="Requirements"/>  
      <LISTITEM value="Design"/>  
      <LISTITEM value="Deployment"/>  
      <LISTITEM value="Documentation"/>  
   </SUGGESTEDVALUES>  
</FIELD>  
```  
  
## Related articles   
-  [Naming restrictions and conventions](../../organizations/settings/naming-restrictions.md)   
-  [Index of work item fields](../../boards/work-items/guidance/work-item-field.md)   
-  [Customize your work tracking experience](../customize-work.md)    
-  [Manage work item fields](../witadmin/manage-work-item-fields.md)   
-  [About work item fields and attributes](../../boards/work-items/work-item-fields.md)   
