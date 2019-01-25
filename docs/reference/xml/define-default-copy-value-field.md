---
title: Define default value or copy a value 
titleSuffix: TFS
description: Syntax and usage for the COPY, DEFAULT, and SERVERDEFAULT elements  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 35c3fcdb-8399-406d-bb8b-179bb543c9ba
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.date: 04/05/2017
---

# Define a default value or copy a value to a field

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]


You can specify a default value for a field, or you can copy the value from another field or system-defined value.  Field defaults are rules that control how field values are automatically assigned. You can assign a field default by using one of the following elements: `COPY`, `DEFAULT`, and `SERVERDEFAULT`. You can specify these elements as child elements of the `FIELD` (Definition) element or the `FIELD` (Workflow) element.  
  
 You add these elements to the definition for a work item type (WIT). To learn more,  see [Modify or add a custom work item type](../add-modify-wit.md).  
  
 The `COPY` and `DEFAULT` elements fill in values at the start of editing, but the `SERVERDEFAULT` rule fills in a value when the work item is committed to the database. This action occurs when a user saves changes to a work item, and the user cannot override the value. Such fields usually appear as read-only on the work item form. The `SERVERDEFAULT` rule is used for fields such as "Last Changed By" and "Last Changed On" to support secure audit trails.  
  
##  <a name="Syntax"></a> Syntax  
 You can use the `COPY`, `DEFAULT`, and `SERVERDEFAULT` elements to copy a value from one field to another, copy a server value into a field, or specify a default value to be defined for a field.  
  
> [!NOTE]
>  If the work item is being changed, the **COPY** or **DEFAULT** elements rule may select either the current or previous value from the source field.  
  
-   You can specify a value to copy from another field, the value of the clock, or the name of the current user. If you specify `value` or `field` for the `from` attribute, you must specify the `value` or `field` attribute. When a user changes or creates a work item, the `COPY` rule fills in a field value regardless of any value that is already in the field.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML  
    <COPY for="userGroupName" not="userGroupName"  from="value | field | clock | currentuser" value="valueToCopy" field="fieldReferenceName/>  
    ```  
  
-   You can specify a default value for a field by using the **DEFAULT** rule. When a user creates or edits a work item, the **DEFAULT** rule fills in a value if that field is empty. You can specify a value to copy from another field, the date-time stamp that the server clock records, or the name of the current user. If a field already has a value, this rule is ignored.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML
    <DEFAULT for="userGroupName" not="userGroupName" from="value | field | clock | currentuser" value="defaultValue" field="fieldReferenceName" />  
    ```  
  
-   You can specify a value to copy from the server into a field when the work item is saved. When a user changes the state of a work item, the `SERVERDEFAULT` rule specifies a value to be copied into the current field from a value that is derived from a server component. The `DEFAULT` and `COPY` elements fill in values when a user opens a work item to modify it, but the `SERVERDEFAULT` rule fills in a value when the work item is committed to the database. This action occurs when the user saves the work item. The user cannot override the value. These fields usually appear as read-only on the form. The `SERVERDEFAULT` rule is used for fields such as "Last Changed By" and "Last Changed On" to support secure audit trails.  
  
    > [!div class="tabbedCodeSnippets"]
	```XML  
    <SERVERDEFAULT for="userGroupName" not="userGroupName" from="clock | currentuser" />  
    ```  
  
 Each of these rule elements specifies a `from`="*fromType*" attribute that identifies the source of the value. Depending on the *fromType* value, additional attributes may be required. The following table describes all of the attributes that the `COPY`, `DEFAULT`, and `SERVERDEFAULT` rule elements reference.  
  
|Attribute|Description|  
|---------------|-----------------|  
|`for`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule applies. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example: *Domain*\\*UserID*|  
|`not`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule does not apply. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example:  *Domain*\\*UserID*|  
|`from`|Required. Specifies whether to copy the default value from the `value` attribute, the `field` attribute, the system clock, or the current user. If you specify `value` or `field` for the `from` attribute, you must specify the `value` or `field` attribute, respectively. You can specify the following values:<br /><br /> -   `clock`:  Copies the time from the system clock. Uses the current date and time as the value. No additional attributes are required. For the **COPY** and **DEFAULT** rules, the value is taken from the local computer clock. For the **SERVERDEFAULT** rule, the value is taken from the server clock at commit time. Valid only for DateTime fields.<br />-   `currentuser`: Copies name of the user who is logged on. Use the short user name of the current user as the value. No additional attributes are required. Valid only for string fields.<br />-   `field`: Copies the value that is defined for the `field` attribute that you specify. Requires a `field="abc"` attribute. By default, if the specified "from" field is empty, nothing is performed. The `field` attribute is used only for the **COPY** and **DEFAULT** rules.<br />-   `value`: Copies the value of the specified `value` attribute.|  
|`value`|Optional. Specifies the value to be copied into the field when `value` is specified for the `from` attribute. Valid values consist of a string of text that contains between 1 and 255 characters.<br /><br /> The value to copy can be empty.|  
|`field`|Optional. Specifies the name of the field whose value is to be copied into the field when `field` is specified for the `from` attribute. You must define this attribute if the `from` attribute has "field" as its value.<br /><br /> The reference name of the field to copy. The reference name must match the reference name as defined in the `FIELD` (Definition) element. For more information, see [FIELD (Definition) element reference](field-definition-element-reference.md).<br /><br /> Pattern value: ^[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z0-9_]+)+$<br /><br /> Pattern value example: Company.Division.IssueType|  
  
 
  
##  <a name="DefineDefault"></a> Define a default value  
 The following example sets P3 as the default for the Priority field.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<FIELD refname="MyCorp.Priority" name="Priority" type="String">  
<HELPTEXT>Specify the severity of the problem</HELPTEXT>  
       <ALLOWEDVALUES>  
          <LISTITEM value="P1"/>  
          <LISTITEM value="P2"/>  
          <LISTITEM value="P3"/>  
       </ALLOWEDVALUES>  
<DEFAULT from="value" value="P3"/>  
</FIELD>  
```  
  
##  <a name="ClearField"></a> Clear a field automatically  
 In the following example, the status field is cleared.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<FIELD refname="MyCorp.Status" name="Status" type="String">  
       <COPY from="value" value="" />  
</FIELD>  
```  
  
##  <a name="SaveValue"></a> Save a field value  
 In the following example, the name of the user who changed a work item most recently is saved.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FIELD refname="System.Last Changed By" name="Last Changed By" type="String">  
       <HELPTEXT>The name of the user who most recently modified this bug</HELPTEXT>  
       <VALIDUSER group="[Project]\MyProjectMembers" />  
       <SERVERDEFAULT from="currentuser" />  
</FIELD>  
```  
  
##  <a name="Clock"></a> Specify the clock as a default  
 In the following example, the value of a field uses the current date but users can change that value.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<FIELD refname="MyCorp.FoundOn" name="Found On" type="DateTime">  
       <HELPTEXT>Defines when a bug was found.</HELPTEXT>  
       <DEFAULT from="clock" />  
</FIELD>  
```  
  
> [!NOTE]  
>  For values that contain an apostrophe, such as "Won't Fix", you must use double quotation marks in the XML, as the following example shows:  
>   
>  `<LISTITEM value="Won't Fix"/>`  
  
## Related articles 
-  [All FIELD elements](all-field-xml-elements-reference.md)   
-  [Apply a field rule](apply-rule-work-item-field.md)   
-  [Modify a field or add a custom field](../add-modify-field.md)