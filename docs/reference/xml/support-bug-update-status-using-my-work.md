---
title: Support bug update status using My Work 
titleSuffix: TFS
description: Update the ProcessConfiguration bug category states to support code review requests working from Visual Studio   
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 355d8fb4-d8fa-49ad-b1a2-7baaec3556cc
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 01/20/2017
---


# Support bug update status using My Work  

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)] 

With My Work in Team Explorer you can conduct and respond to code reviews. If you have customized the workflow states for work item types (WITs) that you use to track bugs, you may need to update the process configuration state-to-metastate mappings. **My Work** uses these mappings to update the bug state as developers update the bug status using My Work. **My Work** allows developers to manage their work in progress, suspend and resume work, and request code reviews. See [Day in the life of a Developer: Suspend work, fix a bug, and conduct a code review](../../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md).  
  
 You specify all the WITs that you use to track bugs in the definition for the Bug Category, and you define state-to-metastates mappings in the ProcessConfiguration. Changes that you make to the definition files apply for all teams that work in the project that you customize.  
  
 **Requirements**  
  
-   To access **My Work**, you must use Team Foundation Version Control (TFVC) for your source control.   
  
-   To run the **witadmin** command-line tool, you must be a member of the **Team Foundation Administrators** group or a member of the **Project Administrators** group for the project. For more information, see [Add an administrator](../../organizations/security/set-project-collection-level-permissions.md).  
  
<a name="default"></a> 
##Default metastate assignments made to workflow states for bugs  
 The following table lists the default metastates assigned to the bug workflow states for the Agile and CMMI process templates.  You only need to assign a metastate to a workflow state that you want to show up on the task board or for My Work to recognize. The default assignments include the typical workflow progression from **Active** or **Proposed** to **Closed**. If your bugs contain workflow states outside this progression, such as a Removed state, then you exclude those states in your metastate assignments.  
  
**Agile**  
 
> [!div class="tabbedCodeSnippets"]
```XML
<BugWorkItems category="Microsoft.BugCategory">
    <States>
       <State value="Active" type="InProgress" />
       <State value="Resolved" type="Resolved" />
       <State value="Closed" type="Complete" />
    </States>
</BugWorkItems>
```

**CMMI**
> [!div class="tabbedCodeSnippets"]
```XML
<BugWorkItems category="Microsoft.BugCategory">
    <States>
       <State value="Proposed" type="Proposed" />
       <State value="Active" type="InProgress" />
       <State value="Resolved" type="Resolved" />
       <State value="Closed" type="Complete" />
    </States>
</BugWorkItems>
``` 
  
<a name="add"></a> 

##Add WITs to the Bug category  
You add WITs to a category by updating the [Categories definition file](categories-xml-element-reference.md) and importing it to your project. Follow the [customization sequence](../customize-work.md) that matches your process model. 
 
0.  Open the categories file in Notepad and locate the `CATEGORY` element for the `"Bug Category"`.  
  
0.  To add a new type of work item, add a `WORKITEMTYPE` element that specifies the reference name of a work item type that you want to add.  
  
     For example, the following syntax adds the work item type of "Performance Bug" to the bug category.  
  
	> [!div class="tabbedCodeSnippets"]
	```XML
    <CATEGORY name="Bug Category" refname="Microsoft.BugCategory">  
          <DEFAULTWORKITEMTYPE name="Bug" />  
          <WORKITEMTYPE name="Performance Bug" />  
    </CATEGORY>  
    ```  
  
0.  Import the modified definition file.  
 
    ```  
    witadmin importcategories /collection:CollectionURL /p:ProjectName /f:"DirectoryPath\categories.xml"  
    ```  
  


<a name="assign"></a> 
##Assign metastates to workflow states defined for bugs  
 You assign metastates to the workflow states of bugs within the `BugWorkItems` element in the definition for ProcessConfiguration. Follow the [customization sequence](../customize-work.md) that matches your process model. 
   
0.  Open ProcessConfigurations in Notepad and locate the `BugWorkItems` element.  
  
3.  Update the values assigned to the `State` elements to match the values used in the workflow for the types of work items that you use to track bugs.  
  
0.  (Optional) To add another state that is present within the workflow, specify another `State` element that maps to the workflow state of the work item type included within the Bug Category.  
  
     For example, the following syntax adds the state value of `"Investigating"`, to `"inProgress"`.  
  
	> [!div class="tabbedCodeSnippets"]
	```XML 
    <BugWorkItems category="Microsoft.BugCategory">  
          <States>  
          <State value="Active" type="InProgress" />  
          <State value="Investigating" type="InProgress" />  
          <State value="Resolved" type="Resolved" />  
          <State value="Closed" type="Complete" />  
          </States>  
    </BugWorkItems>  
    ```  
  
    > [!IMPORTANT]  
    > You must specify a value for the `State` element that corresponds to a valid workflow state. A valid workflow state is one that has been defined for a work item type that is included in Bug Category for your project. Also, you must assign a metastate type within the Agile or Bug group, that is `Proposed`, `InProgress`, `Resolved`, or `Complete`.  
  
0.  Import the modified definition file.  


 
## Related articles
-  [ProcessConfiguration](process-configuration-xml-element.md)   
-  [Use categories to group work item types](use-categories-to-group-work-item-types.md)
-  [Import and export process configuration](../witadmin/witadmin-import-export-process-configuration.md)
-  [Import and export categories](../witadmin/witadmin-import-export-categories.md)