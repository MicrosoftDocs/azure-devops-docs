---
title: Define pick lists 
titleSuffix: Azure DevOps & TFS
description: Syntax and Usage for the ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES elements to enumerate the drop-down menu for a field - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 309c8545-249a-4d7a-8c91-fc10227fa0ba
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 05/10/2017
---

# Define pick lists

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can enumerate a set of values for a field by defining a pick list as part of its definition or at some point during the workflow. You can specify that the list can contain only allowed values, cannot contain prohibited values, or can suggest values. If you suggest values, users can specify a value other those in the pick list.  
  
 You can also define dependent pick lists, in which you define two or more lists for a field but only one list appears at run time based on the evaluation of a conditional rule.    
  
> [!NOTE]  
> To add or modify a pick list for a `FIELD` definition, use the **witadmin** command-line tool to import and export the definition for the work item type. See  [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  

<a name="Syntax"></a> 
  
##  Syntax structure  
 You can use the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements to specify a list of values that a user must specify, may specify, or must not specify as a value for a field. If you use each of these elements, you can enumerate a list of items or specify a global list. You can use the `ALLOWEXISTINGVALUE` to allow a field to store an existing value if you remove an item from the pick list.  
  
 You can specify these elements as child elements of the `FIELD` (Definition) or `FIELD` (Workflow) element.  
  
-   You use `ALLOWEDVALUES` to define a list of values that users can specify in a work item form or the query editor. Users must specify one of the values in the `GLOBALLIST` or the set of `LISTITEM` entries.  
  
    ```xml
    <ALLOWEDVALUES for="userGroupName" not="userGroupName" expanditems="true | false" filteritems="excludegroups">  
          <GLOBALLIST name="globalListName" />  
          <LISTITEM value="Name1" />  
          <LISTITEM value="Name2" />  
          <LISTITEM value="Name3" />  
    . . .   
    </ALLOWEDVALUES>  
    ```  
  
-   You use `PROHIBITEDVALUES` to define a list of values that a field cannot contain. Users cannot save a work item if the field contains a prohibited value. You use this element if you want to restrict the use of a value that was previously allowed but is no longer valid.  
  
    ```xml
    <PROHIBITEDVALUES for="userGroupName" not="userGroupName" expanditems="true | false" filteritems="excludegroups">  
          <GLOBALLIST name="globalListName" />  
          <LISTITEM value="Name1" />  
          <LISTITEM value="Name2" />  
          <LISTITEM value="Name3" />  
    . . .   
    </PROHIBITEDVALUES>  
    ```  
  
-   You use `SUGGESTEDVALUES` to define a list of values that a field can contain. Users can specify other values in addition to those that you suggest.  
  
    ```xml
    <SUGGESTEDVALUES for="userGroupName" not="userGroupName" expanditems="true | false" filteritems="excludegroups">  
          <GLOBALLIST name="globalListName" />  
          <LISTITEM value="Name1" />  
          <LISTITEM value="Name2" />  
          <LISTITEM value="Name3" />  
    . . .   
    </SUGGESTEDVALUES>  
  
    ```  
  
 For each of these elements, you can specify one or more of the attributes that the following table describes:  
  
|Attribute|Description|  
|---------------|-----------------|  
|`for`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule applies. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example: *Domain*\\*UserID*|  
|`not`|Optional. Specifies the name of a user or group in Team Foundation to whom the rule does not apply. Valid names consist of a string of text that contains between 1 and 255 characters.<br /><br /> Pattern value: ^[^\\\\]+\\\\[^\\\\]+$<br /><br /> Pattern value example: *Domain*\\*UserID*|  
|`expanditems`|Optional. Specifies whether a group identified in the **LISTITEM** element should be expanded to include subordinate groups in the list. The default value is `true`.|  
|`filteritems`|Optional. Specifies that the list includes only the members of groups, not group names. The only valid value of this attribute is `excludegroups`.|  
  
 For more information, see [Expand list items and exclude groups from lists](expand-list-items-and-exclude-groups-from-lists.md).  
  
 
> [!NOTE]    
>For the Hosted XML process model, the following limits are placed on global list import: 
>- Total of 64 global lists
>- Total of 512 items per list
>- Approximately 10K items can be defined total within all global lists specified across all WITs. 


##  <a name="GLOBALLIST"></a> Syntax structure for GLOBALLIST and LISTITEM elements  
 You can use the `GLOBALLIST` and `LISTITEM` elements to enumerate a list of items that can be updated globally or that are specific to a single field.  
  
-   You use **GLOBALLIST** to define a set of **LISTITEM** elements that is stored for a project collection and that all projects in that collection can use. **GLOBALLIST** is a required child element of the **GLOBALLISTS** element and an optional child element of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements. You can define a global list within a work item definition, a global list definition, or a global workflow.  
  
    ```xml
    <GLOBALLIST name="globalListName">  
          <LISTITEM value="Name1" />  
          <LISTITEM value="Name2" />  
          <LISTITEM value="Name3" />  
    . . .   
    </GLOBALLIST>   
    ```  
  
     *globalListName*: A string of text that contains between 1 and 255 characters.  
  
    > [!IMPORTANT]
    >  If you define a global list in an XML file that defines a type of work item, you must give the list a unique name. Otherwise, you might overwrite an existing list that was defined for the collection.  
  
-   You use **LISTITEM** to enumerate a set of values. **LISTITEM** is a required child element of **GLOBALLIST** and an optional child element of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements.  
  
    ```xml
    <LISTITEM value="listName" />  
    ```  
  
     *listName*: A string of text that contains between 1 and 255 characters.  
  
##  <a name="Allow"></a> Allow an existing value  
 You can use the `ALLOWEXISTINGVALUE` element to allow a field to maintain existing values, after you specify a pick list of items by using the `ALLOWEDVALUES` element. If you do not specify the `ALLOWEXISTINGVALUE` element, you force the user, at edit time, to specify one of the current valid values for that field. The `ALLOWEXISTINGVALUE` element modifies only those elements in the same block.  
  
```xml
<ALLOWEXISTINGVALUE />  
  
```  
  
 You specify this element under the **FIELD** (Workflow) element to apply it to the rules that are defined for the field. This application includes the rules that the **STATE**, **TRANSITION**, **DEFAULTREASON**, and **REASON** elements of the field specify. You specify this element under the **STATE** element to apply it not only to the rules that are defined in the state for the field but also to the rules that are defined for the field for all transitions into the state.  
  
 You specify this element under the **TRANSITION** element to apply it not only to the rules that are defined in the transition for the field but also to the rules that are defined for the field in the **REASON** and **DEFAULTREASON** elements.  
  
## Specify a list  
 Field lists are composed of individual list items. Each field list must contain at least one item.  
  
> [!NOTE]  
> Global lists must not include project-scoped groups because they are not scoped to a project.  
  
 To specify items in a field list, use the `<LISTITEM value="">` element. You can specify a string, a user name, or a group name.  
  
```xml
<LISTITEM value="Emergency"/>  
<LISTITEM value="Major"/>  
<LISTITEM value="Minor"/>  
<LISTITEM value="Domain\joe"/>  
<LISTITEM value="[Global]\GlobalGroup" />  
<LISTITEM value="[Project]\ProjectGroup" />  
```  
  
> [!NOTE]  
>  At run time, items within a list appear alphabetically based on the language of the server that is running Visual Studio Team Foundation Server.  
  
##  <a name="Allowed"></a> Specify a set of allowed values  
 In this example, the Customer Severity field can have any one of three values: Emergency, Major, and Minor. The field is defined as required with a default value of Minor. At run time, users can specify one of the values in a drop-down list.  
  
```xml
<FIELD refname="System.Title" name="Title" type="String">  
<HELPTEXT>Provide a brief description of the work item</HELPTEXT>  
<REQUIRED/>  
</FIELD>  
<FIELD refname="MyCorp.CusSeverity" name="Customer Severity" type="String">  
<HELPTEXT>Indicate the severity of the problem</HELPTEXT>  
       <ALLOWEDVALUES>  
         <LISTITEM value="Emergency">  
         <LISTITEM value="Major">  
         <LISTITEM value="Minor">  
       </ALLOWEDVALUES>  
<DEFAULT from="value" value="Minor"/>  
</FIELD>  
```  
  
<a name="Dependent"></a> 
##  Define dependent pick lists  
 You can define a pick list that is active only when its parent conditional clause is true. In the following example, two sets of picks list are defined for My Field. At run time,  only one list appears based on whether Requirements is assigned to the `MyCompany.MyTeam.Discipline` field.  
  
> [!NOTE]  
>  The **WHEN** and **WHENNOT** rules in this example can also apply to other rules to specify when those rules should be evaluated. For more information, see [WHEN, WHENNOT, WHENCHANGED, and WHENNOTCHANGED XML elements](assign-conditional-based-values-and-rules.md).  
  
```xml
<FIELD name="My Field" refname="MyCompany.MyProcess.MyField" type="String" reportable="dimension">  
  <WHEN field="MyCompany.MyTeam.Discipline" value="Requirements">
    <ALLOWEDVALUES>
      <LISTITEM value="Planning" />
      <LISTITEM value="Review" />
    </ALLOWEDVALUES>
  </WHEN>
  <WHENNOT field=" MyCompany.MyTeam.Discipline" value="Requirements">
    <ALLOWEDVALUES>
      <LISTITEM value="Process Management" />
      <LISTITEM value="Planning" />
      <LISTITEM value="Review" />
    </ALLOWEDVALUES>
  </WHENNOT>  
</FIELD>  
```  
  
## Related articles

-  [Apply a field rule](apply-rule-work-item-field.md)
-  [Modify a field or add a custom field](../add-modify-field.md)  
-  [Customize a process for import (Hosted XML)](../../organizations/settings/work/import-process/customize-process.md)
-  [Manage global lists for work item types](../witadmin/manage-global-lists-for-work-item-types.md)
-  [Index to XML elements](xml-element-reference.md)   