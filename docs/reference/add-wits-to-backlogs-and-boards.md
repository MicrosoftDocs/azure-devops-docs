---
title: Add work item types to backlogs and boards   
titleSuffix: Azure DevOps & TFS
description: Add work item types to customize your tracking capabilities on product backlogs and Kanban, Scrum, Sprint, and task boards in Azure DevOps Services & Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: f3e42cd4-912b-4fff-a6f2-cf584edc782a
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 12/15/2017  
---

# Add a work item type to a backlog and board

[!INCLUDE [temp](../_shared/version-header-hosted-plus-tfs.md)]


> [!IMPORTANT]  
> This topic applies to project customization for Hosted XML and On-premises XML process models. For the Inheritance process model, see [Customize your backlogs or boards for a process](../organizations/settings/work/customize-process.md). 
>
> For an overview of process models, see [Customize your work tracking experience](customize-work.md).   

To satisfy other business processes, your team may want to track additional work item types (WITs) as requirements or as tasks. This way, you can add them and track them within the product and sprint backlogs or Kanban and task boards. 

For example, you may want to track different types of requirements based on their target customer, or different types of bugs based on their source. Here the Fabrikam Fiber team has added the Service App WIT to track work that supports their customer service team.   

![Add a custom WIT, e.g., Service App, to the Requirement Category to track it like a requirement](_img/ALM_AWB_Intro.png)

> [!TIP]  
>If all you want to do is add bugs to your backlogs and boards, see [Show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md) to make your team's selection. If you want to add another WIT and portfolio backlog, see [Add a portfolio backlog level](add-portfolio-backlogs.md).</p>


To add a WIT to track as requirements, tasks, or as bugs perform the corresponding steps:  
- [Add a WIT to track as requirements](#wits-as-requirements)
- [Add a WIT to track as tasks](#wits-as-tasks)
- [Add a WIT to the Bug Category](#wits-as-bugs)

> [!NOTE]    
>We recommend that you add a WIT to one and only one of the following categories: Requirement Category, Task Category, or Bug Category. The system prevents you from adding the same WIT to both the Requirement Category and Task Category. WITs that you add to the Bug Category will follow the [bug behavior set for the team](../organizations/settings/show-bugs-on-backlog.md). 

<a id="first-steps">  </a>
## First steps

### Hosted XML process model customization sequence  
> [!NOTE]    
>Use the following guidance if you customize your process through import/export of definition files. Otherwise, if you customize your process through the admin UI, see [Add or modify a custom work item type for a process](../organizations/settings/work/customize-process-wit.md).

You'll make your changes to your process definition files, and then import that process to either update existing projects or use the process to create a project. 

- If you aren't the organization owner or a member of the Project Collection Administrator's group, [get added](../organizations/security/set-project-collection-level-permissions.md). 
- [Export the process you want to update](../organizations/settings/work/import-process/import-process.md) 
-  If you're new to customizing a process, read [Customize a process for import](../organizations/settings/work/import-process/customize-process.md).


### On-premises XML process model customization sequence 
You'll first export your work tracking definition files, update them, and then import them to your project.  
-  If you aren't a member of the Project Administrator or Project Collection Administrator's group, [get added](../organizations/security/set-project-collection-level-permissions.md). 
-  Update your project to [enable the latest features](configure-features-after-upgrade.md)
-  [Export the following objects from your project](#import-export): 
	- WIT you want to add to backlogs and boards (if you haven't created it, [do that now](https://msdn.microsoft.com/library/ms404855.aspx))
	- [Categories definition](xml/apply-rule-work-item-field.md#apply-or-ignore-rules-based-on-user-or-group)  
	- ProcessConfiguration  
-  If you're new to customizing work tracking objects, familiarize yourself with the following resources:  
	- [Add or modify a field](add-modify-field.md)  
	- [Add or modify a work item type](add-modify-wit.md)  
	- [ProcessConfiguration XML reference](xml/process-configuration-xml-element.md). 


<a id="wits-as-requirements">  </a>
## Add a WIT to track it like a requirement   

WITs that you add to the Requirement Category show up on the product backlog and Kanban board. You must make sure that the WIT definition contains required fields to support the Agile planning tools.  


1.	Export your process (Hosted XML) or your definition files (On-premises XML) as indicated in [First steps](#first-steps).
2.	Edit the WIT definition to support planning tools. 
	<table>
	<tbody valign="top">
	<tr>
	<th>Customize</th>
	<th>Syntax to add or update</th>
	</tr>
	<tr>
	<td>
	Stack rank field (Agile, CMMI)
	</td>
	<td><pre><code>
	&lt;FIELD name="Stack Rank" refname="Microsoft.VSTS.Common.StackRank" type="Double" reportable="dimension"/&gt;     
	   &lt;HELPTEXT>Work first on items with lower-valued stack rank. Set in triage. 
	   &lt;/HELPTEXT/&gt;      
	&lt;/FIELD/&gt; 
	</code></pre></td>
	</tr>

	<tr>
	<td>
	Backlog priority field (Scrum)
	</td>
	<td><pre><code>
	&lt;FIELD name="Backlog Priority" refname="Microsoft.VSTS.Common.BacklogPriority" type="Double" reportable="detail" /&gt; 
	</code></pre></td>
	</tr>

	<tr>
	<td>
	Value Area field  
	</td>
	<td><pre><code>
	&lt;FIELD name="Value Area" refname="Microsoft.VSTS.Common.ValueArea" type="String"&gt; 
	   &lt;REQUIRED /&gt;   
	   &lt;ALLOWEDVALUES&gt;   
	      &lt;LISTITEM value="Architectural" /&gt;  
	      &lt;LISTITEM value="Business" /&gt;  
	      &lt;/ALLOWEDVALUES&gt;  
	   &lt;DEFAULT from="value" value="Business" /&gt; 
	   &lt;HELPTEXT>Business = delivers value to a user or another system; Architectural = work to support other stories or components  
	   &lt;/HELPTEXT&gt;   
	   &lt;/FIELD&gt; 
	</code></pre></td>
	</tr>
	<tr>
	<td>
	Requirement Type field (CMMI)
	</td>
	<td><pre><code>
	&lt;FIELD name="Requirement Type" refname="Microsoft.VSTS.CMMI.RequirementType" type="String" reportable="dimension"&gt;  
	   &lt;REQUIRED /&gt;  
	   &lt;ALLOWEDVALUES&gt;  
	      &lt;LISTITEM value="Scenario" /&gt;  
	      &lt;LISTITEM value="Quality of Service" /&gt;  
	      &lt;LISTITEM value="Functional" /&gt;  
	      &lt;LISTITEM value="Operational" /&gt;  
	      &lt;LISTITEM value="Interface" /&gt;  
	      &lt;LISTITEM value="Security" /&gt;  
	      &lt;LISTITEM value="Safety" /&gt;  
	      &lt;LISTITEM value="Business Objective" /&gt;  
	      &lt;LISTITEM value="Feature" /&gt;  
	   &lt;/ALLOWEDVALUES&gt;  
	   &lt;DEFAULT from="value" value="Functional" /&gt;  
	&lt;/FIELD&gt;  
	</code></pre></td>
	</tr>
	<tr>
	<td>
	`WORKFLOW` section
	</td>
	<td>
	<p>Update or verify the `WORKFLOW` section as follows: </p>
	<ul>
	<li>Agile, User Story: Add transitions from `Active` to `Removed` and `Resolved` to `Removed`; remove rules that populate  `Activated By` and `Activated Date` fields when state=`Resolved`  </li>
	<li>Scrum, Product backlog item: Add transition from `Committed` to `Removed` </li>
	</ul>
	<p>If you've customized the `WORKFLOW`, make sure to define the required state-to-metastate mappings in the [ProcessConfiguration `RequirementBacklog` section](add-features-manually.md#update-processconfiguration). </p>
	</td>
	</tr>
	<tr>
	<td>
	`FORM` section
	</td>
	<td>
	<p>Add or verify the following fields have been added to the ```FORM``` section: </p>
	<ul>
	<li>Agile:<pre><code>
	&lt;Control FieldName="Microsoft.VSTS.Scheduling.StoryPoints" Type="FieldControl" Label="Story Points" LabelPosition="Left" /&gt;  
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt;
	</code></pre> 
	</li>
	<li>CMMI:<pre><code>
	&lt;Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.Size" Label="Size" LabelPosition="Left" /&gt;
	&lt;Control Type="FieldControl" FieldName="Microsoft.VSTS.CMMI.RequirementType" Label="Type" LabelPosition="Left" /&gt; 
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt;
	</code></pre> 
	</li>
		<li>Scrum:<pre><code>
	&lt;Control FieldName="Microsoft.VSTS.Scheduling.Effort" Type="FieldControl" Label="Effort" LabelPosition="Left" /&gt;  
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt; 
	</code></pre>  
	</li>
	</ul>
	</td>
	</tr>
	</tbody>
	</table>  

4.	Edit the Categories definition. Add the WIT to the Requirement category. Here we add Service App.  

	```xml
	 <CATEGORY name="Requirement Category" refname="Microsoft.RequirementCategory">
	    <DEFAULTWORKITEMTYPE name="User Story" />
	    <WORKITEMTYPE name="Service App" />
	 </CATEGORY>
	```

4.	Update or verify ProcessConfiguration definition: ```RequirementBacklog``` section for the WIT you're adding. Specifically, make sure that the following conditions are met:
	<ul>
	<li>Map the start of each workflow state to ```type="Proposed"``` </li>
	<li>Map each intermediate workflow state you want to have show up on the Kanban board to ```type="InProgress"``` </li>
	<li>Map the end of each workflow state to ```type="Complete"``` </li>
	<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
	</ul>
	For example, add the Pending workflow state:  
	```xml
	<States>    
	      <State value="New" type="Proposed" />  
	      <State value="Active" type="InProgress" />  
	      <State value="Pending" type="InProgress" />  
	      <State value="Resolved" type="InProgress" />  
	      <State value="Closed" type="Complete" />  
	</States>   
	```
5.	Add the WIT color definition to the ProcessConfiguration ```WorkItemColors``` section. For example:   
	```xml
	<WorkItemColor primary="FF33CC33" secondary="FFD6F5D6" name="Service App" />
	```  

6.	Update your project:  
	- **Hosted XML:**  [Import your process](../organizations/settings/work/import-process/import-process.md).  
	- **On-premises XML:**  [Import the definition files you updated](#import-export) in this order:  
		a. WIT 
		b. Categories  
		c. ProcessConfiguration  




<a id="wits-as-tasks">  </a>
## Add a WIT to track it like a task   

WITs that you add to the Task Category show up on the sprint backlogs and task boards. The WIT you add must specify required fields to support the Agile planning tools.  

1.	Export your process (Hosted XML) or your definition files (On-premises XML) as indicated in [First steps](#first-steps).
2.	Edit the WIT definition to support planning tools. 
	<table>
	<tbody valign="top">
	<tr>
	<th>Customize</th>
	<th>Syntax to add or update</th>
	</tr>
	<tr>
	<td>
	Stack rank field(Agile, CMMI)
	</td>
	<td><pre><code>
	&lt;FIELD name="Stack Rank" refname="Microsoft.VSTS.Common.StackRank" type="Double" reportable="dimension"&gt;   
	   &lt;HELPTEXT>Work first on items with lower-valued stack rank. Set in triage.  
	   &lt;/HELPTEXT&gt;   
	&lt;/FIELD&gt;	
	</code></pre> </td>
	</tr>
	<tr>
	<td>
	Backlog priority field (Scrum)
	</td>
	<td><pre><code>
	&lt;FIELD name="Backlog Priority" refname="Microsoft.VSTS.Common.BacklogPriority" type="Double" reportable="detail" /&gt;   
	</code></pre> </td>
	</tr>
	<tr>
	<td>
	Activity field (Agile, Scrum)
	</td>
	<td><pre><code>
	&lt;FIELD name="Activity" refname="Microsoft.VSTS.Common.Activity" type="String" reportable="dimension"&gt; 
	   &ltHELPTEXT&gt;Type of work involved&lt/HELPTEXT&gt; 
	   &lt;SUGGESTEDVALUES&gt;  
	      &lt;LISTITEM value="Development" /&gt;    
	      &lt;LISTITEM value="Testing" /&gt;    
	      &lt;LISTITEM value="Requirements" /&gt;    
	      &lt;LISTITEM value="Design" /&gt;    
	      &lt;LISTITEM value="Deployment" /&gt;    
	      &lt;LISTITEM value="Documentation" /&gt;    
	   &lt;/SUGGESTEDVALUES&gt;    
	&lt;/FIELD&gt;    
	</code></pre> </td>
	</tr>
	<tr>
	<td>
	Discipline field (CMMI)
	</td>
	<td><pre><code>
	&lt;FIELD name="Discipline" refname="Microsoft.VSTS.Common.Discipline" type="String" reportable="dimension"&gt;  
	   &lt;ALLOWEDVALUES&gt;  
	      &lt;LISTITEM value="Analysis" /&gt;    
	      &lt;LISTITEM value="User Experience" /&gt;    
	      &lt;LISTITEM value="User Education" /&gt;    
	      &lt;LISTITEM value="Development" /&gt;    
	      &lt;LISTITEM value="Test" /&gt;    
	   &lt;/ALLOWEDVALUES&gt;    
	&lt;/FIELD&gt;    
	</code></pre> </td>
	</tr>
	<tr>
	<td>
	Remaining Work field (all) 
	</td>
	<td><pre><code>
	&lt;FIELD name="Remaining Work" refname="Microsoft.VSTS.Scheduling.RemainingWork" type="Double" reportable="measure" formula="sum"&gt;    
	   &lt;HELPTEXT&gt;    
	   An estimate of the work remaining to complete the task (in person hours)  
	   &lt;/HELPTEXT&gt;
	&lt;/FIELD&gt;    
	</code></pre> </td>
	</tr>
	<tr>
	<tr>
	<td>
	Additional scheduling fields (Agile, CMMI)
	</td>
	<td><pre><code>
	&lt;FIELD name="Original Estimate" refname="Microsoft.VSTS.Scheduling.OriginalEstimate" type="Double" reportable="measure" formula="sum"&gt;    
	&lt;HELPTEXT&gt; The original estimate of work required to complete the task (in person hours)&lt;/HELPTEXT&gt;    
	&lt;/FIELD&gt;    
	&lt;FIELD name="Remaining Work" refname="Microsoft.VSTS.Scheduling.RemainingWork" type="Double" reportable="measure" formula="sum"&gt;    
	   &lt;HELPTEXT&gt;An estimate of the work remaining to complete the task (in person hours)
	   &lt;/HELPTEXT&gt;    
	&lt;/FIELD&gt;    
	&lt;FIELD name="Completed Work" refname="Microsoft.VSTS.Scheduling.CompletedWork" type="Double" reportable="measure" formula="sum"&gt;    
	   &lt;HELPTEXT&gt;    
	       The work that has been completed for this task (in person hours)  
	   &lt;HELPTEXT&gt;    
	&lt;/FIELD&gt;    
	&lt;FIELD name="Start Date" refname="Microsoft.VSTS.Scheduling.StartDate" type="DateTime" reportable="dimension" /&gt;    
	&lt;FIELD name="Finish Date" refname="Microsoft.VSTS.Scheduling.FinishDate" type="DateTime" reportable="dimension" /&gt;    
	</code></pre> </td>
	</tr>
	<td>
	```WORKFLOW``` section
	</td>
	<td>
	<p>Update or verify the ```WORKFLOW``` section as follows: </p>
	<ul>
	<li>Agile, User Story: Add transitions from `Active` to `Removed` and `Resolved` to `Removed`; remove rules that populate  `Activated By` and `Activated Date` fields when state=`Resolved`  </li>
	<li>Scrum, Product backlog item: Add transition from `Committed` to `Removed` </li>
	</ul>
	<p>If you've customized the `WORKFLOW`, make sure to define the required state-to-metastate mappings in the [ProcessConfiguration `TestBacklog` section](add-features-manually.md#update-processconfiguration). </p>
	</td>
	</tr>
	<tr>
	<td>
	`FORM` section
	</td>
	<td>
	<p>Add or verify the following fields have been added to the `FORM` section: </p>
	<ul>
	<li>Agile:<pre><code>
	&lt;Control FieldName="Microsoft.VSTS.Scheduling.StoryPoints" Type="FieldControl" Label="Story Points" LabelPosition="Left" /&gt;    
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt;    
	</code></pre></li>
	<li>CMMI:<pre><code>
	&lt;Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.Size" Label="Size" LabelPosition="Left" /&gt;    
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt;    
	</code></pre></li>
    <li>Scrum:<pre><code>
	&lt;Control FieldName="Microsoft.VSTS.Scheduling.Effort" Type="FieldControl" Label="Effort" LabelPosition="Left" /&gt;    
	&lt;Control FieldName="Microsoft.VSTS.Common.ValueArea" Type="FieldControl" Label="Value area" LabelPosition="Left" /&gt;    
	</code></pre></li>
	</ul>
	</td>
	</tr>
	</tbody>
	</table>  

3.	Edit the Categories definition. Add the WIT to the Task category. Here we add Service Task.  

	```xml
	 <CATEGORY name="Task Category" refname="Microsoft.TaskCategory">
	    <DEFAULTWORKITEMTYPE name="Task" />
	    <WORKITEMTYPE name="Service Task" />
	 </CATEGORY>
	```

4.	Update or verify ProcessConfiguration definition: ```TaskBacklog``` section for the WIT you're adding.  

	Specifically, make sure that the following conditions are met:
	<ul>
	<li>Map the start of each workflow state to ```type="Proposed"``` </li>
	<li>Map each intermediate workflow state you want to have show up on the task board to ```type="InProgress"``` </li>
	<li>Map the end of each workflow state to ```type="Complete"``` </li>
	<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
	</ul>
	For example, add the Blocked workflow state:
	```xml
    <States>  
        <State value="New" type="Proposed" />  
        <State value="Active" type="InProgress" />  
        <State value="Blocked" type="InProgress" />  
        <State value="Resolved" type="InProgress" />  
        <State value="Closed" type="Complete" />  
    </States>  
	```
5.	Add the WIT color definition to the ProcessConfiguration ```WorkItemColors``` section. For example:  
	```xml
	<WorkItemColor primary="FFF2CB1D" secondary="FFF6F5D2" name="Service Task" />
	```

6.	Update your project:  
	- **Hosted XML:**  [Import your process](../organizations/settings/work/import-process/import-process.md).  
	- **On-premises XML:**  [Import the definition files you updated](#import-export) in this order:  
		a. WIT  
		b. Categories   
		c. ProcessConfiguration  

1. Confirm that you can add the WIT to the task board. Open the task board page, or refresh the page if it's already open.  
	You should be able to select either Task or Service Task as a linked work item to a user story.  
	![Task board with Service Task work item type added](_img/ALM_AWB_AddTaskConfirm.png)  

	On the task board, drag the work item to update its status. You'll notice that you can't drag an item to a column for which the state isn't valid. For example, you can't drag Task to the Blocked state, or a Task into a resolved state. If you want to use these states, then add them to the workflow definition for the corresponding WIT definition. 


<a id="wits-as-bugs">  </a>
## Add a WIT to the Bug Category  

WITs that you add to the Bug Category will be treated based on the [team setting](../organizations/settings/show-bugs-on-backlog.md). Because these WITs may be treated either as requirements or tasks, they must meet Agile planning tool requirements for both requirements and tasks.  
1.	Export your process (Hosted XML) or your definition files (On-premises XML) as indicated in [First steps](#first-steps).
2.	Edit the WIT definition to support planning tools by meeting the conditions listed for Step 2 of [Add a WIT to track as requirements](#wits-as-requirements) and [Add a WIT to track as tasks](#wits-as-tasks).  

3.	Edit the Categories definition. Add the WIT to the Bug Category. Here we add two WITs.  

	```xml
	 <CATEGORY name="Bug Category" refname="Microsoft.BugCategory">  
	    <DEFAULTWORKITEMTYPE name="Bug" />  
	    <WORKITEMTYPE name="Service Bug" />  
	    <WORKITEMTYPE name="Feedback" />  
	 </CATEGORY>
	```

4.	Update or verify ProcessConfiguration definition: ```BugWorkItems``` section for the WIT you're adding.  

	Specifically, make sure that the following conditions are met:
	<ul>
	<li>Map the start of each workflow state to ```type="Proposed"``` </li>
	<li>Map each intermediate workflow state you want to have show up on the Kanban or task board to ```type="InProgress"``` </li>
	<li>Map the end of each workflow state to ```type="Complete"``` </li>
	<li>Make sure that you have only one State mapped to ```type="Complete"```</li>
	</ul>
	For example, add the Investigate workflow state:  
	```xml
    <States>  
      <State value="New" type="Proposed" />  
      <State value="Active" type="InProgress" />  
      <State value="Investigate" type="InProgress" />  
      <State value="Resolved" type="InProgress" />  
      <State value="Closed" type="Complete" />  
    </States>  
	```
5.	Add the WIT color definition to the ProcessConfiguration ```WorkItemColors``` section. For example:  
	```xml
	<WorkItemColor primary="FFF2CB1D" secondary="FFF6F5D2" name="Service Bug" />  
	<WorkItemColor primary="FFFF00FF" secondary="FFFFCCFF" name="Feedback" />  
	```

6.	Update your project:  
	- **Hosted XML:**  [Import your process](../organizations/settings/work/import-process/import-process.md).  
	- **On-premises XML:**  [Import the definition files you updated](#import-export) in this order:  
		a. WIT  
		b. Categories   
		c. ProcessConfiguration  
7.	[Choose your team setting](../organizations/settings/show-bugs-on-backlog.md).  

8. Confirm that the WIT appears on the backlogs and boards as expected and that you can add it through the backlogs as expected.  


<a id="import-export">  </a>
## Import and export definition files (On-premises XML) 
Use the **witadmin** commands to import and export definition files. For details, see [witAdmin: Customize and manage objects for tracking work](witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md).   

[!INCLUDE [temp](../_shared/process-editor.md)]  

[!INCLUDE [temp](../_shared/witadmin-run-tool-example.md)] 

0.	Enter the ```witadmin``` command, substituting your data for the arguments that are shown. For example, to import a WIT:   

	```witadmin importwitd /collection:CollectionURL /p:"ProjectName" /f:"DirectoryPath\WITDefinitionFile.xml"```

		For *CollectionURL* specify the URL of a project collection and for *ProjectName* specify the name of a project defined within the collection. You must specify the URL in the following format: ```http://ServerName:Port/VirtualDirectoryName/CollectionName```.  

		For *DirectoryPath*, specify the path to the ```WorkItem Tracking/TypeDefinitions``` folder that holds the process template that you downloaded. The directory path must follow this structure: ```Drive:\TemplateFolder\WorkItem Tracking\TypeDefinitions```.

	For  example,  import the ServiceApp WIT:

	```witadmin importwitd /collection:"http://MyServer:8080/tfs/DefaultCollection"/p:MyProject /f:"DirectoryPath/ServiceApp.xml"``` 

Use these commands to export and import WITs, categories, and process configuration: 

	witadmin exportwitd /collection:CollectionURL /p:"ProjectName" /n:TypeName /f:"DirectoryPath\WITDefinitionFile.xml"  
	witadmin importwitd /collection:CollectionURL /p:"ProjectName" /f:"DirectoryPath\WITDefinitionFile.xml"  
	witadmin exportcategories /collection:"CollectionURL" /p:"ProjectName" /f:"DirectoryPath/categories.xml"  
	witadmin importcategories /collection:"CollectionURL" /p:"ProjectName" /f:"DirectoryPath/categories.xml"   
	witadmin exportprocessconfig /collection:"CollectionURL" /p:"ProjectName" /f:"DirectoryPath/ProcessConfiguration.xml"  
	witadmin importprocessconfig /collection:"CollectionURL" /p:"ProjectName" /f:"DirectoryPath/ProcessConfiguration.xml"  

## Related articles  
We've just shown how to add another WIT to your backlogs or boards. However, if you want to add another WIT to act as a portfolio backlog, see [Add portfolio backlogs](add-portfolio-backlogs.md).

See [Customize your work tracking experience](customize-work.md) for an overview of all the options available for customizing work tracking objects. 

To learn how hierarchical or nested elements are displayed on a backlog or board, see [How backlogs and boards display hierarchical (nested) items](../boards/backlogs/resolve-backlog-reorder-issues.md).
