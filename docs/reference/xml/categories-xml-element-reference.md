---
title: Categories XML element reference 
titleSuffix: TFS
description: Default work item type categories used by Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: d4b02c7c-a7ac-4c7a-b4c5-cbf9af74d489
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 02/14/2017
---

# Categories XML element reference

[!INCLUDE [temp](../../_shared/version-tfs-all-versions.md)]

You use the `CATEGORIES` element to group work item types (WITs). [Use categories to group work item types](use-categories-to-group-work-item-types.md) provides a description of each of the default categories used by Team Foundation Server (TFS).  
  
## Syntax  
  
> [!div class="tabbedCodeSnippets"]
```XML
<CATEGORIES>  
      <CATEGORY name="category display name" refname="category reference name">  
      <DEFAULTWORKITEMTYPE name="work item type reference name" />  
      <WORKITEMTYPE name="work item type reference name" />  
      </CATEGORY>  
</CATEGORIES>  
```  
  
## Attributes and elements  
  
|Element|Attribute|Description|  
|-------------|---------------|-----------------|  
|`CATEGORIES`||Required element within the XML categories file.<br /><br /> Container element for specifying one or more `CATEGORY` elements that are defined for a project.|  
|`CATEGORY`||Required `CATEGORIES` child element.<br /><br /> Specifies a named category group that contains one default `DEFAULTWORKITEMTYPE` element and zero or more `WORKITEMTYPE` elements.|  
||`name`|Required `CATEGORY` attribute.<br /><br /> The attribute type is `typelib:FriendlyName`.<br /><br /> Specifies the display name of the category. Must be between 1 to 254 characters and unique within the project.|  
||`refname`|Required `CATEGORY` attribute.<br /><br /> The attribute type is `typelib:ReferenceName`.<br /><br /> Specify a name no longer than 70 Unicode characters that uses alphanumeric, underscore, and hyphen characters. The reference name must contain at least one period (.), but no period can appear at the start or end of a name. Also, the reference name cannot start with a number or an underscore, and it cannot have multiple consecutive hyphens, such as (--).<br /><br /> Do not specify a name that overlaps with the reserved System. *XXX* and Microsoft. *XXX* namespaces. See [Naming restrictions, Work item tracking objects](../../organizations/settings/naming-restrictions.md).|  
|`DEFAULTWORKITEMTYPE`||Required `CATEGORY` element.<br /><br /> Specifies a work item type to be tagged as belonging to the named category and to be used as the default type for the category.|  
||`name`|Required `DEFAULTWORKITEMTYPE` attribute.<br /><br /> The attribute type is `WorkItemTypeRef`.<br /><br /> Specifies the reference name of a valid work item type for the project that will be used as the default type for the category.|  
|`WORKITEMTYPE`||Optional `CATEGORY` element.<br /><br /> Specifies a work item type to be tagged as belonging to the named category.|  
||`name`|Required `WORKITEMTYPE` attribute.<br /><br /> The attribute type is `WorkItemTypeRef`.<br /><br /> Specifies the reference name of a valid work item type for the project that will belong to the named category.|  
  
## Remarks  
 `CATEGORIES` is the root element of the categories schema.  
  
 A category is defined within the `CATEGORIES` set of `CATEGORY` elements that is stored and used by a project. Each `CATEGORIES` element must have at least one `CATEGORY` element defined.  
  
 A category cannot be empty. Each `CATEGORY` element must have at least one `DEFAULTWORKITEMTYPE` or `WORKITEMTYPE` element defined.  
  
 Each category has a friendly name and a reference name that must be unique within the project. Each category friendly name must meet the following requirements:  
  
-   Names can have up to 254 Unicode characters.    
-   Names must not be empty.    
-   Names cannot have leading or trailing white spaces.    
-   Names cannot contain backslash (\\) characters.   
-   Names cannot contain two consecutive white spaces.  
  
 Category friendly names are not localized and cannot be made into a token, whereas the names for work item types are localized and can be made into a token.  
  
## Agile tools, category requirements, and restrictions  
 When assigning WITs to categories, consider the following operational notes:  
  
-   To use the [backlog](http://msdn.microsoft.com/70a01e94-2dc9-4090-823c-71ee8e156e74) and [task](http://msdn.microsoft.com/f13e32ae-fe77-421a-b524-43b6bcd1a0f3) boards, you must assign at least one WIT to the Requirements Category and one WIT to the Task Category.  
  
-   You cannot assign the same WIT to both the Requirements Category and to the Task Category.   
-   If you include more than one WIT in the Requirements Category or the Task Category, the type assigned to the `DEFAULTWORKITEMTYPE` element appears as the default type on the Agile backlog and board pages.   
-   WITs that belong to a category which defines a backlog in the ProcessConfiguration file must have start, closing, and at least one intermediate  workflow state napped to a valid metastate as described in [Process Configuration XML element reference](process-configuration-xml-element.md).   
-   WITs that you assign to the Bug Category can be configured to [show up on backlogs and boards for each team](http://msdn.microsoft.com/49b374e0-1700-4650-bacf-759e7eee4580). You set the default behavior by [defining the property for BugsBehavior in the ProcessConfiguration file](process-configuration-xml-element.md).  
  
## Example  
 The following example lists the default categories XML file for the Scrum process template.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<?xml version="1.0" encoding="utf-8"?>  
<cat:CATEGORIES xmlns:cat="http://schemas.microsoft.com/VisualStudio/2008/workitemtracking/categories">  
  <!-- Usage: for resilience in Test system. Even if WITs have different name, they can be referred to by the category -->  
  <CATEGORY name="Bug Category" refname="Microsoft.BugCategory">  
    <DEFAULTWORKITEMTYPE name="Bug" />  
  </CATEGORY>  
  <CATEGORY name="Epic Category" refname="Microsoft.EpicCategory">  
    <DEFAULTWORKITEMTYPE name="Epic" />  
  </CATEGORY>  
  <CATEGORY name="Feature Category" refname="Microsoft.FeatureCategory">  
    <DEFAULTWORKITEMTYPE name="Feature" />  
  </CATEGORY>  
  <CATEGORY name="Requirement Category" refname="Microsoft.RequirementCategory">  
    <DEFAULTWORKITEMTYPE name="Product Backlog Item" />  
    <WORKITEMTYPE name="Bug" />  
  </CATEGORY>  
  <CATEGORY name="Test Case Category" refname="Microsoft.TestCaseCategory">  
    <DEFAULTWORKITEMTYPE name="Test Case" />  
  </CATEGORY>  
  <CATEGORY name="Shared Step Category" refname="Microsoft.SharedStepCategory">  
    <DEFAULTWORKITEMTYPE name="Shared Steps" />  
  </CATEGORY>  
   <CATEGORY name="Shared Parameter Category" refname="Microsoft.SharedParameterCategory">  
    <DEFAULTWORKITEMTYPE name="Shared Parameter" />  
  </CATEGORY>  
  <CATEGORY name="Code Review Request Category" refname="Microsoft.CodeReviewRequestCategory">  
    <DEFAULTWORKITEMTYPE name="Code Review Request" />  
  </CATEGORY>  
  <CATEGORY name="Code Review Response Category" refname="Microsoft.CodeReviewResponseCategory">  
    <DEFAULTWORKITEMTYPE name="Code Review Response" />  
  </CATEGORY>  
  <CATEGORY name="Feedback Request Category" refname="Microsoft.FeedbackRequestCategory">  
    <DEFAULTWORKITEMTYPE name="Feedback Request" />  
  </CATEGORY>  
  <CATEGORY name="Feedback Response Category" refname="Microsoft.FeedbackResponseCategory">  
    <DEFAULTWORKITEMTYPE name="Feedback Response" />  
  </CATEGORY>  
  <CATEGORY name="Test Plan Category" refname="Microsoft.TestPlanCategory">  
    <DEFAULTWORKITEMTYPE name="Test Plan" />  
  </CATEGORY>  
  <CATEGORY name="Test Suite Category" refname="Microsoft.TestSuiteCategory">  
    <DEFAULTWORKITEMTYPE name="Test Suite" />  
  </CATEGORY>  
  <CATEGORY name="Task Category" refname="Microsoft.TaskCategory">  
    <DEFAULTWORKITEMTYPE name="Task" />  
  </CATEGORY>  
  <CATEGORY name="Hidden Types Category" refname="Microsoft.HiddenCategory">  
    <DEFAULTWORKITEMTYPE name="Code Review Request" />  
    <WORKITEMTYPE name="Code Review Response" />  
    <WORKITEMTYPE name="Feedback Request" />  
    <WORKITEMTYPE name="Feedback Response" />  
    <WORKITEMTYPE name="Shared Steps" />  
    <WORKITEMTYPE name="Shared Parameter" />  
    <WORKITEMTYPE name="Test Plan" />  
    <WORKITEMTYPE name="Test Suite" />  
  </CATEGORY>  
</cat:CATEGORIES>  
```  
  
## Related articles 
- [Customize your work tracking experience](../customize-work.md)
- [Change the workflow for a work item type](change-workflow-wit.md)  
- [ProcessConfiguration XML element reference](process-configuration-xml-element.md)  
- [Use categories to group work item types](use-categories-to-group-work-item-types.md)