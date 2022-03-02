---
title: Expand list items and exclude groups from lists
titleSuffix: Azure DevOps
description: Examples for expanding pick list items and restricting items using attributes 
ms.technology: devops-agile
ms.custom: process
ms.assetid: 860a4118-f155-4c6b-9d80-d8a72a8b219f
ms.author: kaelli
author: KathrynEE
ms.topic: example-scenario
monikerRange: '< azure-devops' 
ms.date: 03/02/2022
---

# Expand list items and exclude groups from lists

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

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
   :::column span="2":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::   
   [Project]\Business Analysts  
   - Chuck Reinhart
   - Christie Church
   - Raisa Pokrovskaya
   :::column-end:::
   :::column span="2":::    
   A project group that contains the names of three business analyst team members.  

   > [!NOTE]  
   > Use the literal prefix [Project] instead of using the actual name of the project.

   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   
   Example1\MyReports  
    
   - Development
   - dev user
   - Test
   - Test user
   - Program Management
   - pm user
   - juser
    
   :::column-end:::
   :::column span="2":::
   A project group that contains one team member, juser, and three subgroups, where each subgroup contains the name of one team member.
   :::column-end:::  
:::row-end:::  
:::row:::  
   :::column span="1":::  
   Example1\MyReports  
   - User One
   - User Two
   - User Three
   - My Remotes
   - User Four
   - User Five
   :::column-end:::  
   :::column span="2":::  
   A project group that contains the names of three team members and one subgroup, which contains the names of two team members.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::  
   BoolValues
   - true
   - false
   :::column-end:::
   :::column span="2":::  
   A global list with two entries.
   :::column-end:::
:::row-end:::

## Example: Expand lists and exclude groups

In this example, the field contains a string value, a group, and a global list. At the time the work item is displayed, the list is expanded and groups are excluded.  

:::row:::
   :::column span="2":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop down list values**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::   
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
   - Francis Totten
   - Helena Petersen
   - Jia-hao Tseng   
   :::column-end:::
:::row-end:::

<a id="Example2"></a>

## Example: Expand lists and groups and don't filter

In this example, the field contains a string value, two groups, and a global list. At the time the work item is displayed, the list is expanded and groups aren't excluded.

:::row:::
   :::column span="2":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop-down list values**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::   
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

## Example: Don't expand lists or groups, and don't filter

In this example, the field contains a string value, two groups, and a global list. At run time, the list is not expanded and groups aren't filtered out. When lists aren't expanded, group names are displayed, but not the users within those groups.

> [!NOTE]    
> The global list name and contents aren't displayed.

:::row:::
   :::column span="2":::
   **Example**
   :::column-end:::
   :::column span="1":::
   **Drop-down list values**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::   

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
   :::column span="2":::   
   **Example**
   :::column-end:::
   :::column span="1":::   
   **Drop-down list values**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::   
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