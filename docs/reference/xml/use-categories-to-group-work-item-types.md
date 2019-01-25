---
title: Use categories to group work item types 
titleSuffix: TFS
description: Generate flexible reports, and support increased integration across projects using categories 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 2fc6c411-89a9-4af5-8dd3-b2d4c2ecf540
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 04/04/2017
---

# Use categories to group work item types

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

By using categories, you can generate flexible reports, and support increased integration across projects. You can more easily manage multiple work item types (WITs) as a group as well as WITs that are named differently. Also, you can use the **In Group** query operator to filter a list of work items based on the category to which they belong.  
  
Categories associate one or more WITs as belonging to the same category. The [Agile tools](../../organizations/settings/about-teams-and-settings.md) rely on the default category definitions, many of which specify a single WIT per category.  
  
Here's an example of the feature and bug category entries within the Categories XML definition file:  
  
```xml
<CATEGORY name="Bug Category" refname="Microsoft.BugCategory">  
    <DEFAULTWORKITEMTYPE name="Bug" />  
  </CATEGORY>  
  <CATEGORY name="Feature Category" refname="Microsoft.FeatureCategory">  
    <DEFAULTWORKITEMTYPE name="Feature" />  
  </CATEGORY>  
```  
  
You use categories to accomplish the following operations:  
  
-   To add WITs to appear on the backlog page, you add them to the Requirement Category. To add WITs to appear on the task board page, add them to the Task Category. See [Add bugs to the task board or backlog](../add-wits-to-backlogs-and-boards.md).  
  
-   To add WITs that you use in similar ways that the Bug type is used, add them to the Bug Category. See [Support bug update status using My Work](support-bug-update-status-using-my-work.md).  
  
-   To support portfolio backlogs. A category is defined for each WIT that supports a portfolio backlog, such as the Feature Category and Epic Category. See [Add a backlog to Agile portfolio management](../add-portfolio-backlogs.md).  
  
-   To prevent users from creating WITs that should be created through a form or a tool, and not manually, add them to the [Hidden Types Category](#hiddentypes).  
  
-   To query for different WITs that have different names based on locale, assign them to the same category and use the **In Group** operator.  
  
<a name="process"></a> 
##Default categories and process configuration  
 Process configuration references the default categories defined for a project. Here are the default categories that are defined in the [default process template](../../boards/work-items/guidance/choose-process.md):  
  
-   Bug Category    
-   Code Review Request Category and Code Review Response Category    
-   Epic Category (Controls which WITs appear on the Epic portfolio backlog and Kanban board)    
-   Feature Category (Controls which WITs appear on the Feature portfolio backlog and Kanban board)   
-   Feedback Request Category and Feedback Response Category   
-   Requirement Category (Controls which WITs appear on the product backlog, sprint backlogs, and Kanban board)   
-   Shared Step Category    
-   Shared Parameter Category    
-   Task Category (Controls which WITs appear on the task board)    
-   Test Case Category    
-   Test Plan Category    
-   Test Suite Category  
-   Hidden Types Category  
  
Most of these categories are self-explanatory, and mostly contain one WIT within the category. The exception to this rule is the Hidden Types Category.  
  
If you have created WITs that act in similar ways and you want to treat them in similar ways as those defined by the above categories, then you will want to add them to the category. For example, if you have defined one or more types of bugs, then you might want to add those types to the Bug Category. In this way, the process configuration will automatically treat these bug types as they do the standard bug WIT. Or, you can customize the Requirement Category to include two or more WITs which will then appear on the product backlog.  
  
<a name="hiddentypes"></a> 
###Hidden Types category  
 The Hidden Types Category specifies the set of WITs that you do not want users to create manually. By default this set includes:  
  
-   [Code Review Request and Code Review Response](../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md )    
-   [Feedback Request and Feedback Response](../../project/feedback/get-feedback.md)    
-   [Shared Steps and Shared Parameter](../../test/create-test-cases.md)    
-   [Test Plan and Test Suite](../../test/create-a-test-plan.md)  
  
### Process configuration  
Process configuration defines the layout and fields used in the display of the product backlog,  sprint backlogs, and portfolio backlogs. You view these pages through the web portal. Process configuration uses categories to [configure and customize these functions](process-configuration-xml-element.md). Also, note the following restrictions:  
  
-   To use the backlog and task boards, you must assign at least one WIT to the Requirement Category and one WIT to the Task Category.    
-   You cannot assign the same WIT to both the Requirement Category and to the Task Category.    
-   If you include more than one WIT in the Requirement Category or the Task Category, the type assigned to the `DEFAULTWORKITEMTYPE` element appears as the default type on the Agile backlog and board pages.  
  
-   For all WITs that you assign to a category that is referenced in the ProcessConfiguration file, you must assign the workflow states to a valid metastate as described in [Process Configuration XML element reference](process-configuration-xml-element.md).  
  
## Related articles 
- [Categories XML element reference](categories-xml-element-reference.md)  
- [Import and export categories](../witadmin/witadmin-import-export-categories.md)
- [Visual Studio TFS forum for Project Management and Work item tracking](http://social.msdn.microsoft.com/Forums/vstudio/home?forum=tfsworkitemtracking).
  
### Category names 
Each category has a friendly name and a reference name that must be unique within the project. For more information, see [Categories XML element reference](categories-xml-element-reference.md).  
  
### Add or remove a category 
To modify the categories defined for a project and the On-premises XML process model, you export the XML definition file, make changes, and then import it using the **witadmin** command line tool. See [Import and export categories](../witadmin/witadmin-import-export-categories.md). We recommend that you don't remove any of the  categories defined for the default process templates.  

The system overwrites the categories file upon import.  
  
### Add a WIT to only one category 
WITs that you add to the Requirement Category or the Task Category must belong to one or the other, but not both. To learn more, see [Add bugs to the task board or backlog](../add-wits-to-backlogs-and-boards.md).  
  
For WITs that you add to the Bug Category, you can add it to the Bug Category as well as others.  

<a name="query"></a>   
###  Filter a query based on a category 
 **A:** Yes. Use the **In Group** operator along with the **Work Item Type** field. For example, the following filter criteria will return all work items that are in the current project, assigned to the team member, and defined as belonging to the Bug Category:  
  
|**And/Or**|**Field**|**Operator**|**Value**|  
|-----------------|---------------|------------------|---------------|  
||**Team Project**|**=**|**@Project**|  
|And|**Assigned To**|**=**|**@Me**|  
|And|**Work Item Type**|**In Group**|**Bug Category**|  
