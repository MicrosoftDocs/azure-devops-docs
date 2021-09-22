---
title: Expand list items and exclude groups from lists
titleSuffix: TFS
description: Examples for expanding pick list items and restricting items using expanditems and filteritems attributes - Team Foundation Server (TFS)
ms.technology: devops-agile
ms.custom: process
ms.assetid: 860a4118-f155-4c6b-9d80-d8a72a8b219f
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops' 
ms.date: 05/10/2017
---

# Expand list items and exclude groups from lists

[!INCLUDE [temp](../../includes/customization-phase-0-and-1-plus-version-header.md)]

You can expand and filter lists by using the `expanditems` and `filteritems` attributes. You can apply these attributes to these list type elements: `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES`.  
  
To better understand how these attributes are used to populate a field's drop-down menu, review the examples provided below.  

<a name="ExpandListsAndGroups"></a> 
  
##  Expand lists and groups  
 You can assign the values `true` and `false` to `expanditems`; its value is `true` by default. When `expanditems` has the value of `true`, list items that represent groups or global lists are expanded recursively. A group's subgroups are expanded; the subgroups of those subgroups are also expanded, and continues in this pattern. After expansion, list items that represented groups include both groups and users as list item values. If `expanditems` is set to `false`, no group or global list expansion is performed.  

<a name="FilterListsAndGroups"></a> 
  
##  Exclude groups  
 You can assign only the value `excludegroups` to the `filteritems` attribute. When this attribute appears, all the list items are evaluated and any groups are removed. Use the `filteritems` attribute to show only users, not groups.  

<a name="ContentsOfListsAndGroups"></a> 
  
##  Contents of lists and groups used in the examples  
 The examples provided in this topic use the following values:  
  
:::row:::
   :::column span="1":::
   **Group name and list**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   
   [Project]\Business Analysts  
    
   - JayHamlin
   - PilarAckerman
   - ReshmaPatel
    
   :::column-end:::
   :::column span="1":::    
   A project group that contains the names of three business analyst team members.  

   > [!NOTE]  
   > Use the literal prefix [Project] instead of using the actual name of the project.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   
   Example1\MyReports  
    
   - Development
   - devuser
   - Test
   - Test user
   - Program Management
   - pmuser
   - juser
    
   :::column-end:::
   :::column span="1":::
    
   A project group that contains one team member, juser, and three subgroups, where each subgroup contains the name of one team member.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   
   Example1\MyReports  
    
   - UserOne
   - UserTwo
   - UserThree
   - MyRemotes
   - UserFour
   - UserFive
    
   :::column-end:::
   :::column span="1":::
   
   A project group that contains the names of three team members and one subgroup which contains the names of two team members.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   
   BoolValues
    
   - true
   - false
    
   :::column-end:::
   :::column span="1":::
   
   A global list with two entries.

   :::column-end:::
:::row-end:::

## Example: Expand lists and exclude groups

In this example, the field contains a string value, a group, and a global list. At the time it is run, the list is expanded and groups are excluded.

:::row:::
   :::column span="1":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop down list values**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   

   ```
   <ALLOWEDVALUES expanditems="true" filteritems="excludegroups"> 
      <LISTITEM value="string" /> 
      <LISTITEM value="[Project]\Business Analysts" />  
      <GLOBALLIST name="BoolValues" /> 
   ```
   :::column-end:::
   :::column span="1":::
    
   - string
   - true
   - false
   - JayHamlin
   - PilarAckerman
   - ReshmaPatel    
   :::column-end:::
:::row-end:::

<a id="Example2"></a>
## Example: Expand lists and groups and do not filter

In this example, the field contains a string value, two groups, and a global list. At the time it is run the list is expanded and groups are not excluded.

:::row:::
   :::column span="1":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop-down list values**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   

   ```
   <ALLOWEDVALUES expanditems="true">
      <LISTITEM value="string" />
      <LISTITEM value="Example1\MyReports"/>
      <LISTITEM value="Example1\MyTeam" />
      <GLOBALLIST name="BoolValues" />
   </ALLOWEDVALUES> 
   ```
   :::column-end:::
   :::column span="1":::
    
   - string
   - true
   - false
   - juser
   - juser2
   - devuser
   - testuser
   - pmuser
   - Development
   - Test
   - Program Management    
   :::column-end:::
:::row-end:::

## Example: Do not expand lists or groups, and do not filter

In this example, the field contains a string value, two groups, and a global list. At run time, the list is not expanded and groups are not filtered out. This means that group names are displayed, but not the users within those groups.

> [!NOTE]    
> The global list name and contents are not displayed.

:::row:::
   :::column span="1":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop-down list values**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   

   ```
   <ALLOWEDVALUES expanditems="false">
      <LISTITEM value="string" />
      <LISTITEM value="Example1\MyReports"/>
      <LISTITEM value="Example1\MyTeam" />
      <GLOBALLIST name="BoolValues" />
   </ALLOWEDVALUES> 
   ```
   :::column-end:::
   :::column span="1":::
    
   - string
   - MyTeam
   - MyReports
    
   :::column-end:::
:::row-end:::

## Example: Expand lists and exclude groups and global lists
In this example, the field contains a string value, one group, and a global list. At run time, the list is expanded and groups are filtered out.

> [!NOTE]    
> *MyTeam* is a group that is excluded and not expanded, and *BoolValue*s is a global list, so neither one is expanded or shown.

:::row:::
   :::column span="1":::   
   **Example**
   :::column-end:::
   :::column span="1":::   
   **Drop-down list values**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   
   ```
   <ALLOWEDVALUES expanditems="true" filteritems="excludegroups">
      <LISTITEM value="string" />
      <LISTITEM value="Example\MyTeam" />
      <GLOBALLIST name="BoolValues" />
   </ALLOWEDVALUES> 
   ```
   :::column-end:::
   :::column span="1":::
   
   String
   :::column-end:::
:::row-end:::
  
## Related articles 
-  [ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES XML elements](define-pick-lists.md)   
-  [GLOBALLIST XML element reference](define-global-lists.md)   
-  [Rules and rule evaluation](../../organizations/settings/work/rule-reference.md)