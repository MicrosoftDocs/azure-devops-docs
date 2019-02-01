---
title: Manually add features after an upgrade 
titleSuffix: TFS
description: Manually update an existing project to access new features after upgrading Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 21AB0EE7-FB48-43E6-89EA-EC438C5D4F21
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops-2019'
ms.date: 11/27/2018  
---

# Add updates to projects manually  

**TFS 2017 | TFS 2015 | TFS 2013**

> [!IMPORTANT]  
> This article applies only to projects defined on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index). 
>
>For an overview of customization options, see [Customize your work tracking experience](customize-work.md)

You can update projects that were created in earlier versions of Team Foundation Server (TFS) to use new features added with the upgrade to TFS. These new features are delivered through new work item type definitions or updates to the process configuration. You should update projects by using the [Configure Features wizard](configure-features-after-upgrade.md). However, if the wizard is unable to add a feature, you can add it manually.  

> [!NOTE]     
> If you're upgrading a project that was based on a Microsoft Solutions Framework (MSF) version 4.2 process template, follow the procedures provided in [Update a project based on a MSF v4.2 process template](xml/update-a-team-project-v4-dot-2-process-template.md). If you have several projects you need to update, see [apply updates programmatically](configure-features-after-upgrade.md#program-updates).


## Update a project 
Prior to manually adding or editing a work tracking object, first [download the latest process template](#download-latest-pt). You'll use the definition files from the process template that most closely matches your existing project. 

Several features, such as Code Review and Feedback, simply require importing WITs from the process template that you download, and updating the Categories and ProcessConfiguration file. Other features, however, may require more extensive changes depending on the customizations you've made to your project.  

> [!NOTE]    
>Follow the links for each step to detail procedures provide later in this topic. 


<table>
<tbody valign="top">
<tr>
<th width="18%">
Feature
</th>
<th width="82%">
Steps to manually add a new feature
</th>
</tr>

<tr>
<td>
Code Review
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit):  Code Review Request and Code Review Response </li>
<li>[Update Categories](#update-categories): 
<ul>
<li>Add the Code Review Request and Code Review Response Categories </li>
<li>Add the Code Review Request and Code Review Response Categories to the Hidden Types Category</li>
</ul>
</li>
<li>[Update ProcessConfiguration](#update-processconfig): Add work item colors for Code Review Request and Code Review Response</li>
<li>To verify, [create a code review request](https://msdn.microsoft.com/library/hh474795.aspx).</li>
</ol>

</td>
</tr>


<tr>
<td>
My Work
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit):  Code Review Request and Code Review Response </li>
<li>[Update Categories](#update-categories): Verify Bugs Category is present and contains the Bug WITs you use to track bugs.</li>
<li>[Update ProcessConfiguration](#update-processconfig): Add the ```BugWorkItems``` section and verify or add custom state-to-metastate mappings to the ```BugWorkItems``` section</li>
<li>To verify, [check in a code fix and check that the bug state automatically updates](https://msdn.microsoft.com/library/hh474795.aspx#bug_investigate).</li>
</ol>
<blockquote style="font-size: 13px">**Note:** If you use other WITs to support bug tracking or you've customized the workflow for the WITs you include in the Bug Category, see [Support bug update status using My Work](xml/support-bug-update-status-using-my-work.md).</blockquote>
</td>
</tr>
<tr>
<td>
Feedback
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit): Add the Feedback Request and Feedback Response WITs </li>
<li>[Update Categories](#update-categories): 
<ul>
<li>Add the Feedback Request and Feedback Response Categories </li>
<li>Add the Feedback Request and Feedback Response Categories to the Hidden Types Category</li>
</ul>
</li>
<li>[Update ProcessConfiguration](#update-processconfig) : 
<ul>
<li>Add the Feedback Request and Feedback Response Categories </li>
<li>Add ```TypeField``` field mappings to support Feedback </li>
<li>Add work item colors for Feedback Request and Feedback Response to ProcessConfiguration</li>
</ul>
</li>
<li>To verify, [create a feedback request](../project/feedback/get-feedback.md).  </li>
</ol>

</td>
</tr>

<tr>
<td>
Planning Tools
</td>
<td>

<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Edit WITs](#edit-wit):  
<ul>
<li>Add fields that support planning tools to WITs that you include for the Requirement Category, Task Category, and Bug Category  </li>
<li>Edit the workflow of WITs that you include for the Requirement Category, Task Category, and Bug Category to support any-to-any transitions; add Removed state if not present. <br/>
If you're upgrading a project that was based on version 5.0 of the Microsoft Solutions Framework (MSF) Agile process template, follow the procedures provided in [Update the workflow for agile projects](xml/update-the-workflow-for-agile-team-projects.md).  </li>
</ul>
</li>
<li>[Update Categories](#update-categories): 
<ul>
<li>Add Categories if not present</li>
<li>Add custom WITs to the Requirement Category and Task Category</li>
</ul>
</li>
<li>[Update ProcessConfiguration](#update-processconfig): 
<ul>
<li>Add ProcessConfiguration if not present. </li>
<li>Add ```RequirementBacklog``` and ```TaskBacklog``` if not present. </li>
<li>Verify or update the metastate mappings for the Requirement Category, Task Category, and Bug Category </li>
<li>Add ```TypeField``` field mappings to support planning tools </li>
<li>Add work item colors for those WITs that you include in the Requirement Category, Task Category, and Bug Category </li>
</ul>
</li>
<li>To verify, [start creating your backlog](../boards/backlogs/create-your-backlog.md).  </li>
</ol>
</td>
</tr>
<tr>
<td>
Storyboarding
</td>
<td>
<ol>
<li>[Edit WITs](#edit-wit): Add  ```StoryboardsControl``` to the ```FORM``` section of those WITs you include in the Requirement Category; for example, add it to the User Story (Agile), Requirement (CMMI), or Product backlog item (Scrum)  </li>
<li>To verify, [open Storyboarding from the WIT you updated](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md).  </li>
</ol>
</td>
</tr>
<tr>
<td>
Portfolio Backlogs
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit): Add the Feature and Epic WITs </li>
<li>[Update Categories](#update-categories): Add the Feature and Epic Categories</li>
<li>[Update ProcessConfiguration](#update-processconfig): 
<ul>
<li>Add ```PortfolioBacklogs``` section  </li>
<li>Add work item colors for Feature and Epic to ProcessConfiguration </li>
<li>Add the ```HiddenBacklogs``` property to ProcessConfiguration </li>
</ul>
</li>
<li>To verify, [add some features and epics](../boards/backlogs/organize-backlog.md).</li>
</ol>
<blockquote><b>Note:</b> To add additional portfolio backlogs or further customize your portfolio backlogs, see [Add a portfolio backlog level](add-portfolio-backlogs.md).</blockquote>
</td>
</tr>
<tr>
<td>
Shared Parameters
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit):  Add the Shared Parameter WIT  </li> 
<li>[Update Categories](#update-categories): 
<ul>
<li>Add the Shared Parameter Category </li>
<li>Add the Shared Parameter Category  to the Hidden Types Category</li>
</ul>
</li>
<li>[Update ProcessConfiguration](#update-processconfig): Add a work item color for the Shared Parameter to ProcessConfiguration</li>
<li>[Verify that you can add a shared parameter set or convert to shared parameters](../test/repeat-test-with-different-data.md). </li>
</ol>
</td>
</tr>
<tr>
<td>
Test Plan and Test Suite
</td>
<td>
<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Import WITs](#import-wit): Test Plan and Test Suite </li>
<li>[Update Categories](#update-categories): 
<ul>
<li>Add the Test Plan and Test Suite Categories </li>
<li>Add the Test Plan and Test Suite Categories to the Hidden Types Category</li>
</ul>
</li>
<li>[Run the TfsConfig TCM](#run-tfsconfig): Migrate existing test plans and suites to work item based test plans and suites.</li>
<li>To verify, [create a test plan using the web portal](https://msdn.microsoft.com/library/dd380763.aspx) </li>
</ol> 
</td>
</tr>

<tr>
<td>
Bug Behavior
</td>
<td>

<ol>
<li>[Download the latest process template](#download-latest-pt): Get the definitions you need to import or update</li>
<li>[Edit WITs](#edit-wit):  
<ul>
	<li>Agile Bug:
	<ul>
	<li> Add fields: ```Activity```, ```Story Points```, ```Original Work```, ```Completed Work```, ```Remaining Work```, ```Severity```, and ```Value Area```  </li>
	<li>Add  ```New``` state and corresponding workflow transitions</li>
	<li>Add field rules to copy or set defaults during state transitions </li>
	<li>Add ```Fixed and verified``` as a Resolved Reason </li>
	</ul>
	</li>

	<li>CMMI Bug:
	<ul>
	<li> Add fields: ```Size```, ```Discipline```, ```Original Work```, ```Completed Work```, and ```Value Area```   </li>
	<li>Add  ```New``` state and corresponding workflow transitions</li>
	</ul>
	</li>


	<li>Scrum Bug:  
	<ul>
	<li>Add fields: ```Activity```, ```Remaining Work```, ```Priority```, and ```Value Area```</li>
	<li>Add rule to zero out ```Remaining Work``` when ```State=Done```</li>
	</ul>
	</li>
</ul>
</li>
<li>[Edit ProcessConfiguration](#edit-processconfig): Add the ```BugsBehavior``` property  </li>
<li>To verify, [go to the team settings admin page to choose how the team tracks bugs](../organizations/settings/show-bugs-on-backlog.md).</li>
</ol>

</td>
</tr>

</tbody>
</table>

<a id="download-latest-pt">   </a>  

## Get the latest version of the most compatible process template  

The quickest way to make many of these updates is to copy definition files from the latest process template and import them to your project.   

> [!IMPORTANT]  
> If you are connecting to Azure DevOps Services, you can't export a process template. Instead, you customize your work tracking experience using the inheritance process. For details, see [Process customization and inherited processes](../organizations/settings/work/inheritance-process-model.md).

1.	Open the same version of Visual Studio or Team Explorer as the on-premises TFS that you connect to. For example, if you connect to a TFS 2017 instance, you must connect from Visual Studio 2017, Visual Studio Community 2017, or Visual Studio Team Explorer 2017.  

	You can always download a free version of Visual Studio and Team Explorer from the [Visual Studio download site](https://visualstudio.microsoft.com/downloads/).

	If you aren't a member of the Project Collection Administrators group, [get added as one](../organizations/security/set-project-collection-level-permissions.md). 

2.	Open the Process Template Manager from the **Team>Team Project Collection Settings** menu. 

	 ![Open Process Template Manager](../boards/work-items/guidance/_img/open-process-template-manager.png)

	You'll see a list of each process template that has been uploaded to the project collection.  

	 ![Select process template to work with](../boards/work-items/guidance/_img/process-template-manager.png)

	The **Upload**, **Download**, **Make Default**, and **Delete** buttons are disabled when you don't have the necessary permissions to manage process templates. 
 
3.	Download the process template to a local computer, select a folder where the process template will be downloaded. 

	Choose the process that corresponds to the one you used previously to create your project. For example, if you're updating a project based on the Scrum process template, then select **Scrum**. Note that all version numbers have been removed from the process templates. If you don't see Agile, CMMI, or Scrum, then you need to [update TFS](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs). 
 
You can determine which process template to select based on the [work item types defined for your existing project](../boards/work-items/guidance/manage-process-templates.md#wit_correlation).

To learn more about managing process templates, see, [Upload or download a process template](../boards/work-items/guidance/manage-process-templates.md).

<a id="import-wit">   </a>

## Import a WIT 

[!INCLUDE [temp](../_shared/witadmin-run-tool-example.md)]	

0.	Enter the ```witadmin importwitd``` command, substituting your data for the arguments that are shown.   

	```witadmin importwitd /collection:CollectionURL /p:"ProjectName" /f:"DirectoryPath\WITDefinitionFile.xml"```

		For *CollectionURL* specify the URL of a project collection and for *ProjectName* specify the name of a project defined within the collection. You must specify the URL in the following format: ```http://ServerName:Port/VirtualDirectoryName/CollectionName```.  

		For *DirectoryPath*, specify the path to the ```WorkItem Tracking/TypeDefinitions``` folder that holds the process template that you downloaded. The directory path must follow this structure: ```Drive:\TemplateFolder\WorkItem Tracking\TypeDefinitions```.

	For  example,  import the Feedback Request WIT:

	```witadmin importwitd /collection:"http://MyServer:8080/tfs/DefaultCollection"/p:MyProject /f:"C:\MyTemplates\WorkItem Tracking\TypeDefinitions\FeedbackRequest.xml"``` 

Here's a checklist of WITs to import to support new features:   
-	**Portfolio Backlogs**: Epic and Feature
-	**Code Review**: Code Review Request and Code Review Response
-	**Feedback**: Feedback Request and Feedback Response 
-	**Shared Parameters**: Shared Parameters
-	**Test Plan and Test Suite**:  Test Plan and Test Suite 

<a id="edit-wit">   </a>

## Edit a WIT  
Depending on the customizations that you've made and the features you want to enable, you may need to update one or more WIT definition files. If you haven't customized a WIT, simply import the latest version. Otherwise, you can copy XML syntax from the WIT files you've downloaded from the latest process template. 

1.	Export the WITs that you have defined for the corresponding category.  

	```witadmin exportwitd /collection:CollectionURL /p:ProjectName /n:TypeName [/f:FileName]```

2.	Make the updates required to support your project and add new features.  
	
	Here's a checklist of updates to make:
	<table>
	<tbody valign="top"> 
	<tr>
	<th>Feature supported</th>
	<th>WIT Category</th>
	<th>Edits to make</th>
	</tr>
	<tr>
	<td>Planning Tools</td>
	<td>Requirement Category</td>
	<td>
	<p>For those WITs that you include in the Requirement Category, add or verify that the following fields are defined in the ```FIELDS``` section: </p>
	<ul>
	<li>Agile: Stack Rank<sup> 1</sup>, User Story, Area Path, Priority, Acceptance Criteria, and Value Area </li>
	<li>CMMI: Stack Rank<sup> 1</sup>, Size, Area Path, and Value Area </li>
	<li>Scrum: Backlog Priority<sup> 1</sup>, Effort, Area Path, and Value Area 
	<p>The fields you enter must correspond to the field values assigned in the ProcessConfiguration file for ```type=Order```, ```type=Effort```, and ```type=Team```. </p></li>
	<li>All fields that are included in the ```RequirementBacklog``` -```AddPanel``` section of the ProcessConfiguration file  </li>
	<li>(Optional: All fields that are included in the ```RequirementBacklog``` -```AddPanel``` section of the ProcessConfiguration file  </li>
	<li>All fields that are included in the ```RequirementBacklog``` -```AddPanel``` section of the ProcessConfiguration file  </li>
	</ul>
	<p>Update or verify the ```WORKFLOW``` section as follows: </p>
	<ul>
	<li>Agile, User Story: Add transitions from ```Active``` to ```Removed``` and ```Resolved``` to ```Removed```; remove rules that populate  ```Activated By``` and ```Activated Date``` fields when state=```Resolved```  </li>
	<li>Scrum, Product backlog item: Add transition from ```Committed``` to ```Removed``` </li>
	</ul>
	<p>If you've customized the ```WORKFLOW```, make sure to define the required state-to-metastate mappings in the [ProcessConfiguration ```RequirementBacklog``` section](#edit-processconfig). </p>
	</td>
	</tr>
	<tr>
	<td>Planning Tools and Bug Behavior</td>
	<td>Bug Category</td>
	<td>
	<p>For Bug or those WITs that you include in the Bug Category,  add or verify that the following fields are defined in the ```FIELDS``` section: </p>
	<ul>
	<li>Agile: Stack Rank<sup> 1</sup>, User Story, Activity, Area Path, Remaining Work, Original Work and Completed Work</li>
	<li>CMMI: Stack Rank<sup> 1</sup>, Size, Area Path, Discipline, Remaining Work, Original Work and Completed Work</li>
	<li>Scrum: Backlog Priority<sup> 1</sup>, Effort, Activity, Area Path, and Remaining Work
	<p>The fields you enter must correspond to the field values assigned in the ProcessConfiguration file for ```type=Order```, ```type=Effort```,  ```type=Team```, ```type=Activity```, and ```type=RemainingWork```. </p></li>
	<li>All fields that are included in the ```BugWorkItems``` - ```AddPanel``` section of the ProcessConfiguration file</li>
	</ul>
	<p>Update or verify that the ```WORKFLOW``` section supports the following:</p>
	<ul>
	<li>Agile: ```New``` and ```Removed``` states and transitions from ```New``` and ```Removed``` to all other states </li>
	<li>CMMI: Stack Rank<sup> 1</sup>, Size, Area Path, Discipline, Remaining Work, Original Work and Completed Work</li>
	<li>Scrum: Backlog Priority<sup> 1</sup>, Effort, Activity, Area Path, and Remaining Work
	<p>The fields you enter must correspond to the field values assigned in the ProcessConfiguration file for ```type=Order```, ```type=Effort```,  ```type=Team```, ```type=Activity```, and ```type=RemainingWork```. </p></li>
	<li>All fields that are included in the ```BugWorkItems``` - ```AddPanel``` section of the ProcessConfiguration file</li>
	</ul>
	<p>If you've customized the ```WORKFLOW```, make sure to define the required state-to-metastate mappings in the [ProcessConfiguration ```BugWorkItems``` section](#edit-processconfig). </p>
	</td>
	</tr>
	<tr>
	<td>Planning Tools</td>
	<td>Task Category</td>
	<td>
	<p>For Task or those WITs that you include in the Task Category,  add or verify that the following fields are defined in the ```FIELDS``` section: </p>
	<ul>
	<li>Agile: Stack Rank<sup> 1</sup>, User Story, Activity, Area Path, Remaining Work, Original Work and Completed Work</li>
	<li>CMMI: Stack Rank<sup> 1</sup>, Size, Area Path, Discipline, Remaining Work, Original Work and Completed Work</li>
	<li>Scrum: Backlog Priority<sup> 1</sup>, Effort, Activity, Area Path, and Remaining Work
	<p>The fields you enter must correspond to the field values assigned in the ProcessConfiguration file for ```type=Order```, ```type=Effort```,  ```type=Team```, ```type=Activity```, and ```type=RemainingWork```. </p></li>
	<li>All fields that are included in the ```TaskBacklog``` -```AddPanel``` section of the ProcessConfiguration file  </li>
	</ul>
	<p>Add a rule to the ```WORKFLOW``` section to empty the Remaining Work field when the ```State=Closed``` or ```State=Done```. For example:  </p>
	```<STATE value="Closed">  ```  
	&nbsp;&nbsp;&nbsp;```<FIELDS>  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` <FIELD refname="Microsoft.VSTS.Common.ClosedDate">  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<REQUIRED />  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```</FIELD>  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<FIELD refname="Microsoft.VSTS.Scheduling.RemainingWork">  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` <EMPTY />  ```  
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` </FIELD>  ```  
	&nbsp;&nbsp;&nbsp;```</FIELDS>  ```  
	```</STATE>  ```  
<p>If you've customized the ```WORKFLOW```, make sure to define the required state-to-metastate mappings in the [ProcessConfiguration ```TaskBacklog``` section](#edit-processconfig). </p></td>
</tr>
	<tr>
	<td>Portfolio Backlog</td>
	<td>Feature Category</td>
	<td>
	<p>Update the Feature WIT: </p>
	<ul>
	<li>Add the following fields to the ```FIELDS``` and ```FORM``` sections: Time Criticality, Effort, and Value Area</li>
	<li>Add the ID to the ```FORM``` section </li>
	<li>Add a Transition from ```Active``` to ```Removed``` in the ```WORKFLOW``` section</li>
	</ul>
</td>
</tr>
</tbody>
</table>
<sup>1</sup>  Don't add the Backlog Priority or Stack Rank fields to the ```FORM``` section. These fields support ordering of backlog items and aren't meant to be set manually. 

3.	Import your WIT file.  
	```witadmin importwitd /collection:CollectionURL [/p:Project] /f:FileName "```  



<a id="update-categories">   </a>  

## Update Categories  

> [!TIP]  
> See also [Use categories to group work items](xml/use-categories-to-group-work-item-types.md) and [Import and export categories](witadmin/witadmin-import-export-categories.md).  

1.	Export your categories file. 

	```witadmin exportcategories /collection:CollectionURL /p:ProjectName /f:"DirectoryPath\categories.xml"```

	If you don't have a categories file, then copy the one from a default process template. Categories were introduced with TFS 2012 to more easily manage multiple work item types (WITs) as a group. 

2.	Make the updates required to support your project and add new features. 
	Here's a checklist of categories to import to add or verify to support new features:   

	-	**Code Review**: Code Review Request Category and Code Review Response Category
	-	**Feedback**: Feedback Request Category and Feedback Response Category
	-	**Planning Tools**: Requirement Category, Task Category, Bug Category, and Hidden Types Category
	-	**Shared Parameters**: Shared Parameters Category
	-	**Portfolio Backlogs**: Epic Category and Feature Category
	-	**Test Plan and Test Suite**:  Test Plan Category and Test Suite Category 

	If you use custom WITs to support requirements or tasks, then you'll want to add or modify the Requirement Category and Task Category. For example, Fabrikam Fiber uses the following definitions to support their requirement tracking: 
```xml
	 <CATEGORY name="Requirement Category" refname="Microsoft.RequirementCategory">
	    <DEFAULTWORKITEMTYPE name="Customer App" />
	    <WORKITEMTYPE name="Service App" />
	 </CATEGORY>
```

3.	Import your categories file.
 
	```witadmin importcategories /collection:CollectionURL /p:ProjectName /f:"DirectoryPath\categories.xml"```


> **Additional resources:** [Use categories to group work items](xml/use-categories-to-group-work-item-types.md), [Import and export categories](witadmin/witadmin-import-export-categories.md)

<a id="update-processconfig">   </a>
<a id="edit-processconfig">   </a>

## Update ProcessConfiguration 

Agile planning tools and Portfolio Backlogs depend on the WITs, categories, and process configuration definitions that are made. These definitions are interdependent. Always add new WITs, update categories, and then update the ProcessConfiguration in that order.  

<ol>
<li>Export your ProcessConfiguration file. <br/>

```witadmin exportprocessconfig /collection:CollectionURL /p:ProjectName /f:FileName```<br/>

<p>If you don't have a ProcessConfiguration file, then copy the one from a default process template. ProcessConfiguration was introduced with TFS 2013 and replaced the CommonConfiguration and AgileConfiguration files.</p>
</li>
<li>Make the updates required to support your project and add new features. If you've customized the workflow for WITs defined in the Requirement, Task, Bug, Epic, or Feature categories, review [Process configuration, Map workflow states to metastates](xml/process-configuration-xml-element.md#map).  <br/>

<p>Here's a checklist of updates to make:</p>
<table>
<tbody valign="top" width="100%"> 
<tr>
<th width="20%">Feature supported</th>
<th width="15%">Section </th>
<th width="65%">Edits to make</th>
</tr>
<tr>
<td>Planning Tools</td>
<td>```RequirementBacklog```</td>
<td>
Verify or update the state-to-metastate mappings for each WIT in the Requirement Category: <br/>
<ul>
<li>Map the start of each workflow state to ```type="Proposed"``` </li>
<li>Map each intermediate workflow state you want to have show up on the Kanban board to ```type="InProgress"``` </li>
<li>Map the end of each workflow state to ```type="Complete"``` </li>
<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
</ul>
For example:  <br/>
&nbsp;&nbsp;&nbsp;```<States>  ```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<State value="New" type="Proposed" />  ```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<State value="Active" type="InProgress" />  ```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<State value="Resolved" type="InProgress" />  ```  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```<State value="Closed" type="Complete" />  ```  
&nbsp;&nbsp;&nbsp;```</States>  ```  
</td>
</tr>
<tr>
<td>Planning Tools</td>
<td>```TaskBacklog```</td>
<td>
Verify or update the state-to-metastate mappings for  each WIT in the Task Category: <br/>
<ul>
<li>Map the start of each workflow state to ```type="Proposed"``` </li>
<li>Map each intermediate workflow state you want to have show up on the Kanban board to ```type="InProgress"``` </li>
<li>Map the end of each workflow state to ```type="Complete"``` </li>
<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
</ul>
</td>
</tr>
<tr>
<td>Planning Tools</td>
<td>```BugWorkItems```</td>
<td>
<p>Verify or update the state-to-metastate mappings for each WIT in the Bug Category: </p>
<ul>
<li>Map the start of each workflow state to ```type="Proposed"``` </li>
<li>Map each intermediate workflow state you want to have show up on the Kanban board to ```type="InProgress"``` </li>
<li>Map the end of each workflow state to ```type="Complete"``` </li>
<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
</ul>
</td>
</tr>
<tr>
<td>Portfolio Backlogs</td>
<td>```PortfolioBacklogs```</td>
<td>
Add PortfolioBacklogs section and verify the following:
<ul>
<li>Each intermediate portfolio backlog specifies the next level portfolio backlog as its parent </li>
<li>The top  portfolio backlog doesn't specify a parent portfolio backlog </li>
</ul> 
For example:<br/>
```<PortfolioBacklog category="Microsoft.FeatureCategory" pluralName="Features" singularName="Feature" parent="Microsoft.EpicCategory" workItemCountLimit="1000">``` <br/>
```. . . ``` <br/>
```</PortfolioBacklog>``` <br/>
</td>
</tr>
<tr>
<td>Planning Tools</td>
<td>```WorkItemColors```</td>
<td>
Add primary and secondary HEX colors for each WIT defined for the project. For example: 
```    <WorkItemColor primary="FF009CCC" secondary="FFD6ECF2" name="User Story" />  ```  
```    <WorkItemColor primary="FF773B93" secondary="FFEEE2F2" name="Feature" />  ```  
```    <WorkItemColor primary="FFFF7B00" secondary="FFFFD7B5" name="Epic" />  ```  
</td>
</tr>
<tr>
<td>Planning Tools and Feedback</td>
<td>```TypeFields```</td>
<td>
<p>Make sure that the fields specified for each ```TypeField``` map to those in use for the WITs defined for the Requirement Category, Task Category, and Bug Category.<sup>1</sup>  For example: </p>
```    <TypeField refname="System.AreaPath" type="Team" />  ```  
```    <TypeField refname="Microsoft.VSTS.Scheduling.RemainingWork" type="RemainingWork" format="{0} h" />  ```  
```    <TypeField refname="Microsoft.VSTS.Common.StackRank" type="Order" />  ```   
<br/>
</td>
</tr>
<tr>
<td>Portfolio Backlogs and Bug Behavior</td>
<td>```Properties```</td>
<td>
Add the ```Properties``` section.  For example: <br/>
```<Properties>    ```  
&nbsp;&nbsp;&nbsp;```<Property name="BugsBehavior" value="AsTasks" />  ```  
&nbsp;&nbsp;&nbsp;```<Property name="HiddenBacklogs" value="Microsoft.EpicCategory" />  ```  
```</Properties>  ```  

<br/>
</td>
</tr>
</tbody>
</table>
<p><sup>1</sup> Don't modify the ```TypeFieldValues``` for the ```Microsoft.VSTS.Feedback.ApplicationType```. </p>
</li>
<li>Import your ProcessConfiguration file.<br/>
```witadmin importprocessconfig /collection:CollectionURL /p:ProjectName /f:FileName```<br/>
</li>
</ol>

> [!TIP]  
>See also [ProcessConfiguration XML element reference](xml/process-configuration-xml-element.md). 


<a id="run-tfsconfig">   </a>
 
## Migrate existing test plans and suites

Migrate existing test plans and suites to work item based test plans and suites.  

1.	Open a Command Prompt window on the TFS application-tier server. For example:   
	```cd %programfiles%\TFS 14.0\Tools```

2.	Run the ```TfsConfig TCM``` command.
	```TFSConfig TCM /upgradeTestPlans /CollectionName:CollectionName /TeamProject:TeamProjectName```

	For example:

	```TFSConfig TCM /upgradeTestPlans /CollectionName:"Fabrikam Fiber Collection" /TeamProject:"Fabrikam Fiber"```

3.	Respond to the questions that appear.
	```
	Logging sent to file C:\ProgramData\Microsoft\Team Foundation\Server Configuration\Logs\TPC_UPG_AT_0515_143821.log
	Microsoft (R) TfsConfig - Team Foundation Server Configuration Tool
	Copyright (c) Microsoft Corporation. All rights reserved.
	 
	Command: tcm
	Microsoft (R) TfsConfig - Team Foundation Server Configuration Tool
	Copyright (c) Microsoft Corporation. All rights reserved.
	 
	In order to upgrade the test plans, you have to complete the following steps:
	1. Import the test plan work item definition into the project. Have you complete
	d this step? (Yes/No) Yes
	2. Import the test plan category into the project. Have you completed this step?
	(Yes/No) Yes
	
	Test plan migration job successfully scheduled.
	```
4.	If you're migrating a large quantity of test plans and test suites, you can run the following command to monitor the progress of data migration.

	```TFSConfig TCM /upgradeStatus /collectionName:CollectionName /TeamProject:TeamProjectName```

After a successful data migration, all test management data should be available for use. For more information about this utility, go here.

## Review and verify access to new features
After you update your project manually, you have access to the latest features. However, you still might want to make some additional configurations or customizations to support your work tracking needs. 

See [Additional configuration options](additional-configuration-options.md) for information on how to verify or activate each feature. 


## Related articles 
You can learn more about the objects used to track work and support Agile tools from these topics:  

- [Choose a process](../boards/work-items/guidance/choose-process.md) 
- [Customize your work tracking experience](customize-work.md)
- [Customize a process template](process-templates/customize-process.md) 
- [Overview of process template files](process-templates/overview-process-template-files.md)
 
If you need to rename a WIT, use **witadmin renamewitd** command to change the name, and then update the Categories definition file. See [Add or modify a work item type](add-modify-wit.md).
