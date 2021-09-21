---
title: All FIELD XML elements reference 
titleSuffix: Azure DevOps & TFS
description: Index to XML syntax elements for the FIELD element for Team Foundation Server (TFS)
ms.technology: devops-agile
ms.custom: process
ms.assetid: 552c2ada-2186-4b89-848c-34f54dfe0823
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '< azure-devops'
ms.date: 06/16/2017
---

# All FIELD XML elements reference

[!INCLUDE [temp](../../includes/customization-phase-0-and-1-plus-version-header.md)]

Use this topic to look up the syntax of the `FIELD` element or one of its child elements.  

 You specify these elements in the **FIELD** (Definition) element container. You add a field for a work item type (WIT) by specifying a **FIELD** (Definition) element within the **FIELDS** (Definition) element. You can specify these elements within the definition of a WIT or as part of a global workflow.  

 You can add child elements to specify the behavior of a field, define default values, or define a pick list of values. You can use field rule elements in combination with each other. You can scope most rules to apply to one or more users or groups or to be ignored for one or more users or groups.  

##  <a name="FIELD"></a> FIELD (Definition) container element  
 You use the following syntax to define the data fields for a type of work item. This example shows the format of the **FIELD** (Definition) element and all optional child elements. For more information, see [FIELD (Definition) element reference](field-definition-element-reference.md).  

> [!NOTE]
> The Boolean data type is supported for Azure DevOps Services (Hosted XML) and for TFS 2017.2 and later versions (On-Premises XML). 
> 
> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD name="fieldDisplayName" refname="fieldReferenceName" type="String | Integer | Double | DateTime | PlainText | HTML | History | TreePath | GUID | Boolean"  
> syncnamechanges="true | false" reportingname="reportingDisplayName" reportingrefname="reportingReferenceName"  
> reportable="Dimension | Detail | Measure" formula="avg" >  
>       <ALLOWEDVALUES> . . . </ALLOWEDVALUES>  
>       <ALLOWEXISTINGVALUE />  
>       <CANNOTLOSEVALUE />  
>       <COPY />  
>       <DEFAULT />  
>       <EMPTY />  
>       <FROZEN />  
>       <HELPTEXT> . . . </HELPTEXT>  
>       <MATCH />  
>       <NOTSAMEAS />  
>       <PROHIBITEDVALUES /> . . . </PROHIBITEDVALUES>  
>       <READONLY />  
>       <REQUIRED />  
>       <SERVERDEFAULT />  
>       <SUGGESTEDVALUES /> . . . </SUGGESTEDVALUES>  
>       <VALIDUSER />  
>       <WHEN>> . . . </WHEN>  
>       <WHENNOT> . . . </WHENNOT>  
>       <WHENCHANGED> . . . </WHENCHANGED>  
>       <WHENNOTCHANGED> . . . </WHENNOTCHANGED>  
> </FIELD>  
> ```

<a name="CHILDElements"></a>   
##  FIELD child elements  
Use child elements to set various restrictions on what data can be entered into a field. You can specify values for a pick list (drop-down menu), set default values, clear entries, or restrict changes. The following table provides the syntax structure for each child element.  

To learn how to use these elements, see [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md).  Restrictions exist on applying most rules to system fields. All child elements are optional.  

:::row:::
   :::column span="1":::
   **Element**
   :::column-end:::
   :::column span="1":::
   **Description and syntax**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **ALLOWEDVALUES**

   :::column-end:::
   :::column span="1":::
   Defines a list of values that users can specify in a field list on work item forms and in the query editor. Users must specify one of the values that you list.

   ```
   <ALLOWEDVALUES for="userGroupName" not="userGroupName" 
   expanditems="true | false" filteritems="excludegroups">
      <GLOBALLIST name="globalListName">
         <LISTITEM value="Name" />
   . . . 
       </GLOBALLIST>
   </ALLOWEDVALUES>
   ```
   For more information, see [Define pick lists](define-pick-lists.md) .

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **ALLOWEXISTINGVALUE**

   :::column-end:::
   :::column span="1":::
   Specifies that a field can retain an existing value, even if it is no longer in a pick list. All new field values must be in the list.

   ```
   <ALLOWEXISTINGVALUE />
   ```

   For more information, see [Define pick lists](define-pick-lists.md) .

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **CANNOTLOSEVALUE**

   :::column-end:::
   :::column span="1":::
   Specifies that users cannot clear a field of all values after a value has been specified. After the field contains a value, that field must always contain a non-NULL value.

   ```
   <CANNOTLOSEVALUE for="userGroupName" not="userGroupName" />
   ```
   
   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **COPY**

   :::column-end:::
   :::column span="1":::
   Copies a specified value to a field when a user creates or modifies a work item.

   ```
   <COPY for="userGroupName" not="userGroupName"  
   from="value | field | clock | currentuser" 
   value="valueToCopy" field="fieldReferenceName" />
   ```
   For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **DEFAULT**

   :::column-end:::
   :::column span="1":::
   Specifies a value for a field that is empty when a user creates or modifies a work item. If a field already has a value, the default rule is ignored.

   ```
   <DEFAULT for="userGroupName" not="userGroupName" 
   from="value | field | clock | currentuser" 
   value="value to copy" field="field reference name" />
   ```
   For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **EMPTY**

   :::column-end:::
   :::column span="1":::
   Clears the field of any value that it contains. The **EMPTY** rule also makes a field read-only, and you should not be use it with the **READONLY** rule.  
   
   The field value is cleared when a user saves the work item, and you cannot specify any value. This rule is primarily used during state transition to clear fields that apply to the state to which the item is transitioning.

   ```
   <EMPTY for="userGroupName" not=" userGroupName" />
   ```
   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **FROZEN**

   :::column-end:::
   :::column span="1":::
   Specifies that you cannot change the field to a non-empty value after changes are committed. As soon as a user saves the work item with a value in that field, the value can no longer be modified.


   ```
   <FROZEN for="userGroupName" not="userGroupName" />
   ```

   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **HELPTEXT**

   :::column-end:::
   :::column span="1":::
   Defines the text to appear when a user points to the field in the work item form.   
   *tooltipText*: A string of text that contains between 1 and 255 characters.

   ```
   <HELPTEXT>tooltipText </HELPTEXT>
   ```
   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **MATCH**

   :::column-end:::
   :::column span="1":::
   Defines a pattern that values of String type fields must match.

   ```
   <MATCH pattern="patternValue" for="userGroupName" not="userGroupName" />
   ```
   For more information, see [Apply pattern matching to a string field](apply-pattern-matching-to-string-field.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **NOTSAMEAS**

   :::column-end:::
   :::column span="1":::
   Specifies that a field is not assigned the same value as that to which  another specified field is assigned. The value of the **field** attribute must be a valid reference name of a field.

   ```
   <NOTSAMEAS field="fieldReferenceName" for="userGroupName" not="userGroupName" />
   ```
   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **PROHIBITEDVALUES**

   :::column-end:::
   :::column span="1":::
   Defines a list of values that a field cannot contain. Users cannot save a work item if the field contains a prohibited value.

   ```
   <PROHIBITEDVALUES for="userGroupName" not="userGroupName" 
   expanditems="true | false" filteritems="excludegroups">
       <GLOBALLIST name="globalListName">
           <LISTITEM value="Name" />
   . . . 
       </GLOBALLIST>
   </PROHIBITEDVALUES>
   ```
   For more information, see [Define pick lists](define-pick-lists.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **READONLY**

   :::column-end:::
   :::column span="1":::
   Specifies that you cannot modify the value to which the field is assigned.

   ```
   <READONLY for="userGroupName" not="userGroupName" />
   ```
   **Note:** Do not use this element together with the **EMPTY** element because **EMPTY** also makes a field read-only. If you combine these elements, results will be inconsistent.

   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **REQUIRED**

   :::column-end:::
   :::column span="1":::
   Specifies that users must specify a value for the field. Required fields cannot be empty. Users cannot save a work item until they have assigned values to all required fields.

   ```
   <REQUIRED for="userGroupName" not="userGroupName" />
   ```

   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **SERVERDEFAULT**

   :::column-end:::
   :::column span="1":::
   Copies a specified server value to a field when a user saves a work item. These fields usually appear as read-only on the form.

   ```
   <SERVERDEFAULT for="userGroupName" not="userGroupName" 
   from="clock | currentuser" />
   ```
   For more information, see [Define a default value or copy a value to a field](define-default-copy-value-field.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **SUGGESTEDVALUES**

   :::column-end:::
   :::column span="1":::
   Defines a suggested list of values that users can specify in a field list on work item forms and in the query editor. Users can specify values other than those that you suggest.

   ```
   <SUGGESTEDVALUES for="userGroupName" not="userGroupName" 
   expanditems="true | false" filteritems="excludegroups">
      <GLOBALLIST name="globalListName">
         <LISTITEM value="Name" />
   . . . 
      </GLOBALLIST>
   </SUGGESTEDVALUES>
   ```
   For more information, see [Define pick lists](define-pick-lists.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **VALIDUSER**

   :::column-end:::
   :::column span="1":::
   Restricts work items from being modified by users who belong to the group that you specify. The default group is the Team Foundation Valid Users group.  
   
   All attributes are optional.  All attributes must consist of a string of text that contains between 1 and 255 characters. You can use tokens to specify groups. 

   ```
   < VALIDUSER group="groupName" for="userName" not="userName" />
   ```
   For more information, see [Apply a field rule](../../organizations/settings/work/rule-reference.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WHEN**

   :::column-end:::
   :::column span="1":::
   Specifies one or more rules to apply to the current field when another field has a specific value. The parent **FIELD** element defines the current field.

   ```
   <WHEN field="fieldReferenceName" value="value">
       <ALLOWEDVALUES> . . . </ALLOWEDVALUES>
       <ALLOWEXISTINGVALUE> . . . <ALLOWEXISTINGVALUE>
       <CANNOTLOSEVALUE> . . . </CANNOTLOSEVALUE>
       <COPY> . . . </COPY>
       <DEFAULT> . . . </DEFAULT>
       <EMPTY> . . . </EMPTY>
       <FROZEN> . . . </FROZEN>
       <MATCH> . . . </MATCH>
       <NOTSAMEAS> . . . </NOTSAMEAS>
       <PROHIBITEDVALUES> . . . </PROHIBITEDVALUES>
       <READONLY> . . . </READONLY>
       <REQUIRED> . . . </REQUIRED>
       <SERVERDEFAULT> . . . </SERVERDEFAULT>
       <SUGGESTEDVALUES> . . . </SUGGESTEDVALUES>
       <VALIDUSER> . . . </VALIDUSER>
   </WHEN>
   ```

   For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WHENNOT**

   :::column-end:::
   :::column span="1":::
   Specifies one or more rules to apply to the current field when another field does not have a specific value. The parent **FIELD** element defines the current field.

   ```
   <WHENNOT field="fieldReferenceName" value="value">
       <ALLOWEDVALUES> . . . </ALLOWEDVALUES>
       <ALLOWEXISTINGVALUE> . . . <ALLOWEXISTINGVALUE>
       <CANNOTLOSEVALUE> . . . </CANNOTLOSEVALUE>
       <COPY> . . . </COPY>
       <DEFAULT> . . . </DEFAULT>
       <EMPTY> . . . </EMPTY>
       <FROZEN> . . . </FROZEN>
       <MATCH> . . . </MATCH>
       <NOTSAMEAS> . . . </NOTSAMEAS>
       <PROHIBITEDVALUES> . . . </PROHIBITEDVALUES>
       <READONLY> . . . </READONLY>
       <REQUIRED> . . . </REQUIRED>
       <SERVERDEFAULT> . . . </SERVERDEFAULT>
       <SUGGESTEDVALUES> . . . </SUGGESTEDVALUES>
       <VALIDUSER> . . . </VALIDUSER>
    </WHENNOT>
    ```

    For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WHENCHANGED**

   :::column-end:::
   :::column span="1":::
   Specifies one or more rules to apply to the current field when another field is changed during the revision of the work item. The parent **FIELD** element defines the current field.

   ```
   <WHENCHANGED field="fieldReferenceName" >
       <ALLOWEDVALUES> . . . </ALLOWEDVALUES>
       <ALLOWEXISTINGVALUE> . . . <ALLOWEXISTINGVALUE>
       <CANNOTLOSEVALUE> . . . </CANNOTLOSEVALUE>
       <COPY> . . . </COPY>
       <DEFAULT> . . . </DEFAULT>
       <EMPTY> . . . </EMPTY>
       <FROZEN> . . . </FROZEN>
       <MATCH> . . . </MATCH>
       <NOTSAMEAS> . . . </NOTSAMEAS>
	   <PROHIBITEDVALUES> . . . </PROHIBITEDVALUES>
       <READONLY> . . . </READONLY>
       <REQUIRED> . . . </REQUIRED>
       <SERVERDEFAULT> . . . </SERVERDEFAULT>
       <SUGGESTEDVALUES> . . . </SUGGESTEDVALUES>
       <VALIDUSER> . . . </VALIDUSER>  
   </WHENCHANGED>
   ```
   For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **WHENNOTCHANGED**

   :::column-end:::
   :::column span="1":::
   Specifies one or more rules to apply to the current field when another field is not changed during the revision of the work item. The parent element defines the current field.

   ```
   <WHENNOTCHANGED field="fieldReferenceName">
       <ALLOWEDVALUES> . . . </ALLOWEDVALUES>
       <ALLOWEXISTINGVALUE> . . . <ALLOWEXISTINGVALUE>
       <CANNOTLOSEVALUE> . . . </CANNOTLOSEVALUE>
       <COPY> . . . </COPY>
       <DEFAULT> . . . </DEFAULT>
       <EMPTY> . . . </EMPTY>
       <FROZEN> . . . </FROZEN>
       <MATCH> . . . </MATCH>
       <NOTSAMEAS> . . . </NOTSAMEAS>
       <PROHIBITEDVALUES> . . . </PROHIBITEDVALUES>
       <READONLY> . . . </READONLY>
       <REQUIRED> . . . </REQUIRED>
       <SERVERDEFAULT> . . . </SERVERDEFAULT>
       <SUGGESTEDVALUES> . . . </SUGGESTEDVALUES>
       <VALIDUSER> . . . </VALIDUSER>
   </WHENNOTCHANGED>
   ```
   For more information, see [Assign conditional-based values and rules](assign-conditional-based-values-and-rules.md).

   :::column-end:::
:::row-end:::


<a name="LISTElements"></a>

## GLOBALLIST and LISTITEM child elements  

 You specify the **GLOBALLIST** and **LISTITEM** elements as child elements of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements. You can use these elements to enumerate a list of values that appears. Users select values from a pick list or a drop-down menu. For more information, see [GLOBALLIST XML element reference](define-global-lists.md).   

:::row:::
   :::column span="1":::
   **Element**

   :::column-end:::
   :::column span="1":::
   **Description**

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **GLOBALIST**

   :::column-end:::
   :::column span="1":::
   Defines a set of **LISTITEM** elements that is stored for a project collection and that all projects in a collection can use.

   ```
   <GLOBALLIST name="globalListName">
       <LISTITEM> . . . </LISTITEM>
   </GLOBALLIST> 
   ```
   *globalListName*: A string of text that contains between 1 and 255 characters.  
   
   **GLOBALLIST** is a required child element of the **GLOBALLISTS** element and an optional child element of the  **ALLOWEDVALUES**, **SUGGESTEDVALUES**, and **PROHIBITEDVALUES** elements. You can define a global list within a work item definition, a global list definition, or a global workflow. 

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **LISTITEM**

   :::column-end:::
   :::column span="1":::
   Defines a valid list value.

   ```
   <LISTITEM value="listName" />
   ```
   
   **LISTITEM** is a required child element of **GLOBALLIST** and an optional child element of the **ALLOWEDVALUES**, **SUGGESTEDVALUES**, and **PROHIBITEDVALUES** elements.

   :::column-end:::
:::row-end:::

<a name="Attributes">  </a> 

## Attributes specified by FIELD child elements  
 You can qualify most **FIELD** rules to apply or not apply to a set of groups or users by including the `for` or `not` attributes. For more information, see [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md).  

|Attribute|Syntax|Description|  
|---------------|------------|-----------------|  
|`expanditems`|expanditems="true &#124; false"|Optional. Specifies whether a group that the **LISTITEM** element  identifies should be expanded to include subordinate groups in the list. The default value of this attribute is `true`.|  
|`filteritems`|filteritems="*excludegroups*"|Optional. Specifies that only the members of groups, and not group names, are included in the list. The only allowed value for this attribute is `excludegroups`.|  
|`for`|for="*userGroupName*"|Optional. Specifies the name of a user or group in Team Foundation to whom the rule applies. Valid values consist of a string of text that contains between 1 and 255 characters.|  
|`not`|not="*userGroupName*"|Optional. Specifies the name of a user or group in Team Foundation to whom the rule does not apply. Valid values consist of a string of text that contains between 1 and 255 characters.|  
|`from`|from="value &#124; field &#124; clock &#124; currentuser"|Required. Specifies the source of the value from which to copy a value or specify a default value. The following values are valid:<br /><br /> -                      `clock`:  Copies the current date and time from the system clock to DateTime fields. No additional attributes are required. For **COPY** and **DEFAULT** rules, this value comes from the local computer clock time. For **SERVERDEFAULT**, the value comes from the server clock when a user saves the work item.<br /><br /> -                      `currentuser`:  Copies the name of the user who is currently logged on. Use the short username of the current user as the value. No additional attributes are required. Used for string fields.<br /><br /> -                      `field`:  Copies the value of the `field` attribute that you specify. Requires a `field="abc"` attribute. By default, if the specified "from" field is empty, nothing is performed. The `field` attribute is used only for \<COPY> and \<DEFAULT> rules.<br / -                     `value`: Copies the value of the `value` attribute that you specify. Use the value of a string constant that you specify. Requires a `value="abc"` attribute. `value` is used only for \<COPY> and \<DEFAULT> rules.<br /><br /> If you specify "value" or "field," you must also include the value or field attribute, respectively.|  
|`field`|field="*fieldReferenceName*"|Optional. Specifies the name of the field whose value is to be copied into the field when `field` is specified for the `from` attribute.|  
|`pattern`|pattern="*patternValue*"|Required. Enforces basic pattern matching for strings only. *patternValue* is a string that consists of between 1 and 255 characters, inclusive. That string must not contain a backslash character (\\). Each character in the string is interpreted as a literal, unless it is one of the following six metacharacters:<br /><br /> - "A" or "a" represent a single alphabetical character.<br /> - "N" or "n" represent a single numeric character.<br /> - "X" or "x" represent a single alphanumeric character.<br /><br /> Pattern value: ^[^\\\\]*$<br /><br /> For example, `pattern="xxxxx.nn.nn"` matches any five alphanumeric characters, then a period, then two numeric characters, then a period, then two more numeric characters.|  
|`value`|value="*valueToCopy*"|Optional. Specifies the value to be copied into the field when `value` is specified for the `from` attribute.|  

## Related articles 
-  [About work item fields and attributes](../../boards/work-items/work-item-fields.md)   
-  [Change the workflow](change-workflow-wit.md)
-  [Customize your work tracking experience](../customize-work.md)  