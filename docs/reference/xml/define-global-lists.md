---
title: Define global lists 
titleSuffix: Azure DevOps & TFS
description: Syntax and usage for the GLOBALLIST elements for defining pick lists used across several projects and work item types  
ms.technology: devops-agile
ms.custom: process
ms.assetid: b113865c-c68f-48fa-a467-4a94a8445078
ms.author: kaelli
author: KathrynEE
monikerRange: '< azure-devops'
ms.date: 05/23/2017
---


# Define global lists  

[!INCLUDE [temp](../../includes/version-tfs-all-versions.md)]

> [!IMPORTANT]  
> This article applies to project customization for Hosted XML and On-premises XML process models. Hosted XML customization supports adding and updating global lists with a process update. To learn more, see [Process template customization differences](../../organizations/settings/work/import-process/differences.md).
>
>The Inheritance process model doesn't support global lists. For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  

By using global lists, you can minimize the work that is required to update a list that appears in the definitions of several work item types (WITs). Global lists are pick lists that you can include within one or more fields and WIT definitions. 

You can share list items among several WITs for a collection by including the list items in one or more `GLOBALLIST` elements.  

 As you define WITs, you might find that some fields share the same values. Frequently, you can share across several WITs and even across several projects. Some of these values, such as the build number of nightly builds, change frequently, which requires an administrator to frequently update these lists in many locations. Global lists can be especially useful when a list must be derived from an external system. For example, suppose a company maintains a separate customer database. When you file a bug that a customer discovered, the customer's name is entered into a custom `Found By Customer` field.  

 You can manage global lists for a collection as an XML file that you can list, import, export, and delete. The name of each global list can have up to 254 Unicode characters and must be unique within a collection.  

> [!NOTE]    
>There are no system-defined nor predefined global lists specified in the default processes or process templates provides.  

**Requirements**  

For the project collection where the global lists are defined, you must have the following permissions set:  

- To export or list global lists, you must be a member of the **Project Collection Valid Users** group or have your **View collection-level information** permission set to **Allow**.  

- To import global lists, you must be a member of the **Project  Collection Administrators** security group.  

To add or modify a global list, use the **witadmin** command-line tool to import and export the definition for global lists. See [Manage global lists](../witadmin/manage-global-lists-for-work-item-types.md). To use a global list, add it to the `FIELD` definition within a work item type. See [All FIELD elements](field-definition-element-reference.md).  

<a name="add-manage"></a>   
##  Add and manage global lists  

A global list is a set of `LISTITEM` elements that is stored and used globally by all projects in a collection. Global lists are useful for fields that are defined within several types of work items, such as Operating System, Found in Build, and Fixed in Build.  

You can define one or more global lists and their items by using one of the following methods in the following ways based on the process model you use:
- Within a WIT XML definition that you add to a project or process template (Hosted XML and On-premises XML)
- Within a global list XML definition file that you import to a project collection (On-premises XML)
- Within a [global workflow XML definition file](global-workflow-xml-element-reference.md) that you import to a project collection (On-premises XML). 


> [!NOTE]    
>For the Hosted XML process model, the following limits are placed on global list import: 
>- Total of 64 global lists
>- Total of 512 items per list
>- Approximately 10K items can be defined total within all global lists specified across all WITs. 


<a name="SyntaxDefine"></a> 

## Syntax structure  

The following table describes the **GLOBALLIST** and **LISTITEM** elements. You can use these elements to enumerate a list of values that is presented to the user as a pick list or drop-down menu of items.  

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
   **GLOBALLIST**

   :::column-end:::
   :::column span="1":::
   Defines a set of **LISTITEM** elements that are stored for a collection and that all projects in a collection can use.


   ```
   <GLOBALLIST name="globalListName">  
   <LISTITEM> . . . </LISTITEM>  
   </GLOBALLIST>
   ```
   *globalListName*: A string of text that contains between 1 and 255 characters. 

   **GLOBALLIST** is a required child element of the **GLOBALLISTS** element and an optional child element of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements. For more information, see [ALLOWEDVALUES, SUGGESTEDVALUES, and PROHIBITEDVALUES XML elements](define-pick-lists.md).
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **LISTITEM**

   :::column-end:::
   :::column span="1":::
   Defines a valid list value. Global lists must not include project-scoped groups because they are not scoped to a project.

   ```
   <LISTITEM value="Name" />
   ```

   **LISTITEM** is a required child element of **GLOBALLIST** and an optional child element of the `ALLOWEDVALUES`, `SUGGESTEDVALUES`, and `PROHIBITEDVALUES` elements.
   :::column-end:::
:::row-end:::

<a name="SyntaxWITD"></a> 

## Sample global list  

 By adding the following syntax, you can define a global list within an XML definition file for a type of work item or a global workflow:  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <GLOBALLISTS>  
>        <GLOBALLIST name="name of global list">  
>           <LISTITEM value="List item 1" />  
>           <LISTITEM value="List item 2" />  
>           <LISTITEM value="List item 3" />  
>           <LISTITEM value="List item 4" />  
>           . . .  
>           <LISTITEM value="List item n" />  
>        </GLOBALLIST>  
> </GLOBALLISTS>  
> ```  

 By using the following syntax, you can reference a global list within an XML definition file for a type of work item:  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <GLOBALLISTS>  
>       <GLOBALLIST name=" name of global list 1" />  
>       <GLOBALLIST name=" name of global list 2" />  
>       . . .  
>       <GLOBALLIST name=" name of global list n" />  
> </GLOBALLISTS>  
> ```  

For information about the structure and location of definition files for types of work items or global workflow, see [All WITD elements](all-witd-xml-elements-reference.md) or [GLOBALWORKFLOW](global-workflow-xml-element-reference.md), respectively.  

<a name="project-collection"></a>   
## Sample global list maintained for a project collection  

To add a global list to a project collection, you can import the following syntax by using the **witadmin importgloballist** command:  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <gl:GLOBALLISTS xmlns:gl="http://schemas.microsoft.com/VisualStudio/2008/workitemtracking/globallists">  
>        <GLOBALLIST name="NameOfGlobalList">  
>        <LISTITEM value="ListItem1" />  
>        <LISTITEM value="ListItem2" />  
>        <LISTITEM value="ListItem3" />  
>        <LISTITEM value="ListItem4" />  
>   . . .  
>        <LISTITEM value="ListItemN" />  
>        </GLOBALLIST>  
> </gl:GLOBALLISTS>  
> ```  

 A global list cannot be empty. Each `GLOBALLIST` element must have at least one `LISTITEM` element defined.  

## Related articles

- [Manage global lists](../witadmin/manage-global-lists-for-work-item-types.md)   
- [Customize work tracking](../customize-work.md)

### Are any global lists auto-populated with data?  
Yes for on-premises TFS. The global list named **Builds**.*TeamProjectName* gets appended each time a build is run. Over time, the list can become very long. Best practice is to routinely remove unused items from the list.  

To learn more about using this list, see [Query based on build and test integration fields](../../boards/queries/build-test-integration.md).  


