---
title: Update a process template
titleSuffix: TFS  
description: Update a process template to support customizing work tracking for Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 09A88E62-F887-4139-923E-FACE6D759F92  
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 02/26/2018
---

# Update a customized process template to access new features

[!INCLUDE [temp](../_shared/version-header-tfs-only.md)]

> [!IMPORTANT]  
>This topic applies only to projects defined on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index). To update a project that uses the Hosted XML process, see [Import process](../organizations/settings/work/import-process/import-process.md).

When the Configure Features wizard can't update your project, it's because your project was created from a process template other than those TFS provides, or you've customized your project in ways that conflict with its ability to apply the updates. In these situations, you have these options to update your existing projects: 


* **Option A**: Add features to your customized process template, and then run the Configure Features wizard 

	Do steps: ![Step 1](../boards/_img/icons/ProcGuid_1.png), ![Step 2](../boards/_img/icons/ProcGuid_2.png), ![Step 4](../boards/_img/icons/ProcGuid_4.png), and ![Step 5](../boards/_img/icons/ProcGuid_5.png)

	Choose this option when you have made extensive customizations to your process template. 

* **Option B**: Apply your customizations to the latest process template, and then run the Configure Features wizard

	Do steps: ![Step 1](../boards/_img/icons/ProcGuid_1.png), ![Step 3](../boards/_img/icons/ProcGuid_3.png), ![Step 4](../boards/_img/icons/ProcGuid_4.png), and ![Step 5](../boards/_img/icons/ProcGuid_5.png)

	Choose this option when you have made very few customizations to your process template. 

* **Option C**: [Manually update your project to add features](add-features-manually.md)

	Choose this option when you've made customizations to your project that aren't present in any of your process templates.

* **Option D**: Programmatically update many projects. First, choose **Option A** or **Option B** to update your customized process template. Then, batch update all projects defined for a project collection using the following information and resources: [How to Configure Features for dozens of projects](http://blogs.msdn.com/b/visualstudioalm/archive/2012/05/31/how-to-configure-features-for-dozens-of-team-projects.aspx) and [Features4tfs CodePlex solution](https://features4tfs.codeplex.com/).

	Choose this option when you have dozens of projects that were created from the same process template.

><b>Tip: </b>Review [Changes made to process templates](../boards/work-items/guidance/changes-to-process-templates.md) to learn about changes made to the default process templates to enable new features. 

## 1. Download the latest process template

![Step 1](../boards/_img/icons/ProcGuid_1.png) You will copy or add files from the folder of the latest version of process template that you download to the corresponding folder containing your customized process template definitions. 

1. If you're updating a process template based on a version earlier than MSF 6.0 or Visual Studio Scrum 2.0, first apply the updates provided in the [2012 version of this topic](https://msdn.microsoft.com/library/ms194972%28v=vs.110%29.aspx).

	You can check the **ProcessTemplate.xml** file for version information. 

1. If you haven't upgraded your application-tier server to the TFS version that contains the features you want, do that now. [Get the download](https://visualstudio.microsoft.com/downloads) and [Upgrade Team Foundation Server](/azure/devops/server/upgrade/get-started). 

1. If you aren't a member of the Project Collection Administrators group, [get added](../organizations/security/set-project-collection-level-permissions.md). You need the **Manage process template permission** set to Allow to download and manage process templates.

1. After TFS has been upgraded, [download the latest process template from TFS](../boards/work-items/guidance/manage-process-templates.md) and choose the process template that most closely matches the one used to create your project. 

	To download or upload process templates, you must connect to TFS 2015 from either Visual Studio 2015 or Team Explorer 2015.

1. Copy the process template to a new folder where you'll apply your customizations (Option B), or copy XML definitions to add new features to your existing process template (Option C).

##2. Add features to your customized process template (Option A)
 
![Step 2](../boards/_img/icons/ProcGuid_2.png) Update your customized process template by adding or updating the WITs, Categories, and ProcessConfiguration as described in [Add features using a manual update process](add-features-manually.md). Instead of using **witadmin** to export and import definition files, simply make the changes directly to your process template files.
 
Copy or add files from the folder of the latest version of process template that you download to the corresponding folder containing your customized process template definitions. 

Review [Changes made to process templates](../boards/work-items/guidance/changes-to-process-templates.md) to learn about all the changes made to the default process templates to enable new features. 

###Add a WIT to a process template  

Perform the following steps for each WIT that you add to your process template. This example shows how to add the Epic WIT to your process template.  
 
1. Copy the **Epic.xml** file from the **WorkItem Tracking/TypeDefinitions** folder to the corresponding folder of your customized process template. 

1. Add the ```Epic Category``` to the **Categories** file located in the **WorkItem Tracking** folder.

	```xml
  <CATEGORY name="Epic Category" refname="Microsoft.EpicCategory">
    <DEFAULTWORKITEMTYPE name="Epic" />
  </CATEGORY>
	```

1. Open the **WorkItems** plug-in file located in the **WorkItem Tracking** folder. 

	1. Add a task for uploading the Feature work item type to the ```<WORKITEMTYPES>``` section.

	```xml
	<WORKITEMTYPE fileName="WorkItem Tracking\TypeDefinitions\Epic.xml" />
	```

1. Copy the ProcessConfiguration file from the **WorkItem Tracking/Process** folder of the downloaded process template to your customized template folder in the same location. 

	Incorporate any customizations that you made to your ProcessConfiguration definition. For more information, see [Process Configuration XML Reference](xml/process-configuration-xml-element.md).


## 3. Apply your customizations to the process template (Option B)

![Step 3](../boards/_img/icons/ProcGuid_3.png) With this option, you apply customizations you've made to your project or process template to the latest process template that most closely matches the template used to create your project. 


1. Apply the customizations that you've made to the new process template folder:
	* Apply customizations you've made to the default work item type (WIT) definitions. This could include additions of fields or modifications to the workflow or form. 
	
	* Add custom WITs to the work tracking folder, and update the **WorkItems** definition file as needed. See [Add type definitions for work items to a process template](process-templates/add-wit-definitions-process-template.md).
	
		If you want to use a customized WIT that contains the same name as those in the default process template, then make sure that you swap out the WIT definition files. If you want to use a customized WIT with a different name than that provided in the default process template, then you'll need to modify the categories and process configuration definition files prior to import to reflect the different naming.
		
	* Apply customizations to the **Categories** definition file. 

	* Apply customizations to the **ProcessConfiguration** definition file. Check that the WITs that you want are represented in the correct categories and that all workflow states are mapped to metastates.
	
	* Copy any additional process template files that you've customized to the appropriate process template folder. For a complete list of process template files and information about customizing them, see [Overview of process template files](process-templates/overview-process-template-files.md).

1. Review your changes against this checklist to make sure that you have applied all the required customizations:
	<table>
	<tbody valign="top">
	<tr>
		<th width="15%">Customization
		</th>
		<th width="25%">Update or verify the WIT definition
		</th>
		<th width="60%">Update or verify the process configuration definition
		</th>
	</tr>
	<tr>
		<td>
			<p>Add a WIT to the Requirement Category </p>
			<p>(A WIT can belong to the Requirement Category or the Task Category, but not both.)</p>
		</td>
		<td>
			<p>To include the following fields: </p>
			<ul>
				<li>
					<p>The field value assigned to ```type=Order``` in the process configuration file (Backlog Priority in Scrum, Stack Rank in Agile or CMMI)</p>
				</li>
				<li>
					<p>The field value assigned to ```type=Effort``` in the process configuration file (Effort (Scrum), Story Points (Agile), or Size (CMMI))</p>
				</li>
				<li>
					<p>The Area path or the field value assigned to ```type=Team``` in the process configuration file. </p>
				</li>
				<li>
					<p>All fields that are included in the ```AddPanel``` section of the process configuration file (fields must be defined within the ```FIELDS``` section but don't have to be included within the ```FORM``` section.</p>
				</li>
			</ul>
		</td>
		<td>
			<p>To contain the necessary metastate mappings under the ```RequirementBacklog``` section: </p>
			<ul>
				<li>
					<p>Map the initial states of each WIT in the Requirement Category to ```type="Proposed"``` </p>
				</li>
				<li>
					<p>Map each intermediate workflow state you want to have show up on the Kanban board to ```type="InProgress"``` </p>
				</li>
				<li>
					<p>Map the end of each workflow state to ```type="Complete"``` </p>
					<p>You can have more than one State mapped to ``` type="Complete"```</p>
				</li>
			</ul>
			<p>To contain an entry to define the color codes associated with the WIT. For example: </p>
			<p>```<WorkItemColor primary="FF009CCC" secondary="FFD6ECF2" name="Product Backlog Item" />```</p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Change the workflow of a WIT in the Requirement Category</p>
		</td>
		<td>
			<p>N/A</p>
		</td>
		<td>
			<p>To contain the necessary metastate mappings as described above for adding a WIT to the Requirement Category. </p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Add a WIT to the Task Category</p>
		</td>
		<td>
			<p>To include the following fields:</p>
			<ul>
				<li>
					<p>The field value assigned to ```type=Order``` in the process configuration file (Backlog Priority in Scrum, Stack Rank in Agile or CMMI)</p>
				</li>
				<li>
					<p>The field value assigned to ```type=Activity``` in the process configuration file (Activity (Scrum or Agile) or Discipline (CMMI) ) </p>
				</li>
				<li>
					<p>Area path or the field value assigned to ```type=Team``` in the process configuration file </p>
				</li>
				<li>
					<p>The field value assigned to ```type=RemainingWork``` in the process configuration file (Remaining Work)</p>
				</li>
				<li>
					<p>(Optional) Original Work and Completed Work (Agile and CMMI only) </p>
				</li>
			</ul>
		</td>
		<td>
			<p>To contain the necessary metastate mappings under the ```TaskBacklog``` section: </p>
			<ul>
				<li>
					<p>Map the initial states of each WIT in the Task Category to ```type="Proposed"``` </p>
				</li>
				<li>
					<p>Map each intermediate workflow state that you want to have show up on the task board to ```type="InProgress"``` </p>
				</li>
				<li>
					<p>Map the end of each workflow state to ```type="Complete"``` </p>
					<p>You can have more than one State mapped to ``` type="Complete"```</p>
				</li>
			</ul>
			<p>To contain an entry to define the color codes associated with the WIT. For example: </p>
			<p>```<WorkItemColor primary="FFF2CB1D" secondary="FFF6F5D2" name="Task" />```</p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Change the workflow of a WIT in the Task Category</p>
		</td>
		<td>
			<p>N/A</p>
		</td>
		<td>
			<p>To contain the necessary metastate mappings as described above for adding a WIT to the Task Category. </p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Add a WIT to the Bug Category or change the workflow of a WIT in the Bug Category (Agile and CMMI only)  </p>
		</td>
		<td>
			<p>To support the team configurable setting to [show bugs on backlogs and boards](../organizations/settings/show-bugs-on-backlog.md), include the following fields:</p>
			<ul>
				<li>
					<p>The field value assigned to ```type=Order``` in the process configuration file (Backlog Priority in Scrum, Stack Rank in Agile or CMMI)</p>
				</li>
				<li>
					<p>The field value assigned to ```type=Effort``` in the process configuration file (Effort (Scrum), Story Points (Agile), or Size (CMMI))</p>
				</li>
				<li>
					<p>The field value assigned to ```type=Activity``` in the process configuration file (Activity (Scrum or Agile) or Discipline (CMMI) ) </p>
				</li>
				<li>
					<p>Area path or the field value assigned to ```type=Team``` in the process configuration file </p>
				</li>
				<li>
					<p>The field value assigned to ```type=RemainingWork``` in the process configuration file (Remaining Work)</p>
				</li>
				<li>
					<p>(Optional) Original Work and Completed Work (Agile and CMMI only) </p>
				</li>
			</ul>
		</td>
		<td>
			<p>To contain the necessary metastate mappings under the ```BugWorkItems``` section: </p>
			<ul>
				<li>
					<p>Map the initial state of each WIT in the Bug Category to ``` type="Proposed"```</p>
				</li>
				<li>
					<p>Map each intermediate workflow state you want to have show up on the Kanban Board or for My Work to ``` type="InProgress"```</p>
				</li>
				<li>
					<p>Map the end of each workflow state ``` type="Complete"```</p>
					<p>You can have more than one State mapped to ```type="Complete"```</p>
				</li>
			</ul>
			<p>To learn more, see <a href="https://msdn.microsoft.com/library/hh739067.aspx">Support bug update status using My Work</a>.</p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Remove a WIT from the Requirement Category or Task Category</p>
		</td>
		<td>
			<p>N/A</p>
		</td>
		<td>
			<p>To remove any metastate mappings that are only associated with that WIT</p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Remove a WIT </p>
		</td>
		<td>
			<p>Remove the WIT from the categories file</p>
		</td>
		<td>
			<p>To remove any metastate mappings that are only associated with the WIT that you removed and the ```WorkItemColor``` element that defines the color codes for the WIT you removed.</p>
		</td>
	</tr>
	<tr>
		<td>
			<p>Rename a WIT</p>
		</td>
		<td>
			<p>Update the categories file with the new names</p>
		</td>
		<td>
			<p>Update the process configuration file with the new names</p>
		</td>
	</tr>
	</tbody>
	</table>


## 4. Rename and upload the process template to TFS

![Step 4](../boards/_img/icons/ProcGuid_4.png) For the Configure Features wizard to select the latest version of a process template, you must update the version statement to differentiate your updated process template ```version``` from previous versions. 

1. Open the **ProcessTemplate** plug-in file located in the top folder. 

1. Update the name to reflect the version changes you've made. For example:

	```xml
	<name>MyCompany Custom Scrum </name>
	```

1. Update the code snippet after the ```description``` element. Increase the minor version to reflect that you've made updates to the existing process template and change the guid in the version to distinguish it from the default TFS process template. 

	Your choice of code snippet is based on the template category that you are updating:

	<table>
		<tbody>
			<tr>
				<th>
					Category
				</th>
				<th>
					Version statement
				</th>
			</tr>
			<tr>
				<td>
					Agile
				</td>
				<td>
					```
					<version type="ADCC42AB-9882-485E-A3ED-7678F01F66BC" major="14" minor="1"/>
					```
				</td>
			</tr>
			<tr>
				<td>
					CMMI
				</td>
				<td>
					```
					<version type="27450541-8E31-4150-9947-DC59F998FC01" major="14" minor="1"/>
					```
				</td>
			</tr>
			<tr>
				<td>
					Scrum
				</td>
				<td>
					```
					<version type="6B724908-EF14-45CF-84F8-768B5384DA45" major="14" minor="1"/>
					```
				</td>
			</tr>
		</tbody>
	</table>

	The Configure Features wizard uses the ```version``` statement to determine which process template within a category is the latest version and automatically selects that version. 
	
	If the ```version``` statement isn't present, the Configure Features wizard can't select the process template for updating a project. Also, if more than one process template has been uploaded that specifies the same highest version number, then none of these process templates can be selected for updating a project.
1. [Upload the process template](../boards/work-items/guidance/manage-process-templates.md).

	To verify your changes, create a test project. See [create a project](../organizations/projects/create-project.md).

## 5. Run the Configure Features wizard

![Step 5](../boards/_img/icons/ProcGuid_5.png) When you've verified that the process template supports your customizations, run the [Configure Features wizard  to update your existing projects](configure-features-after-upgrade.md). 

1.	Verify the features you want work as expected by exercising them as described in the following topics: 
	<table>
	<tbody valign="top" width="85%">
	<tr>
	<th width="15%">
	Feature
	</th>
	<th width="75%">
	Changes
	</th>
	</tr>
	<tr>
	<td>
	Code Review
	</td>
	<td>
	 [Request a code review from the My Work page in Team Explorer]../../repos/tfvc/get-code-reviewed-vs.md). My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed. 
	</td>
	</tr>
	<tr>
	<td>
	My Work
	</td>
	<td>
	[Develop code and manage pending changes](../repos/tfvc/develop-code-manage-pending-changes.md) from the My Work page in Team Explorer. My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed. 
	</td>
	</tr>
	<tr>
	<td>
	Feedback
	</td>
	<td>[Request feedback](../project/feedback/get-feedback.md). <br/>
	</td>
	</tr>
	<tr>
	<td>
	Planning Tools
	</td>
	<td>
	 [Create your backlog](../boards/backlogs/create-your-backlog.md), [plan a sprint](../boards/sprints//assign-work-sprint.md), [work with the Kanban board](../boards/boards/kanban-basics.md), and [more](../boards/sprints//define-sprints.md). 
	</td>
	</tr>
	<tr>
	<td>
	Storyboarding
	</td>
	<td>[Launch Storyboarding or link a storyboard to a work item](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md).
	</td>
	</tr>
	<tr>
	<td>
	Portfolio Backlogs
	</td>
	<td>[Select the portfolio backlogs they work with to organize their backlogs](../organizations/settings/select-backlog-navigation-levels.md). 
	</td>
	</tr>
	<tr>
	<td>
	Shared Parameters
	</td>
	<td>
	You use Shared Parameter work items to [run tests with different data](../test/repeat-test-with-different-data.md).   
	</td>
	</tr>
	<tr>
	<td>
	Test Plan and Test Suite
	</td>
	<td>[Plan and execute manual tests using the web portal](https://msdn.microsoft.com/library/dd380763.aspx). 
	</td>
	</tr>
	<tr>
	<td>
	Bug Behavior
	</td>
	<td>
	Configure the option as described in [Show bugs on backlogs and boards feature](../organizations/settings/show-bugs-on-backlog.md).
	</td>
	</tr>
	</tbody>
	</table> 

2.	Apply [additional configuration options](additional-configuration-options.md) based on those features of interest.

##Related update notes

Keep these tips in mind when modifying process template files:
* See [Overview of process template files](process-templates/overview-process-template-files.md) for information about each folder and file contained within the interdependent set of files.
* Don't remove a file or a task from the set unless you know what the file is and that you will have no use for it. 
* To locate the customizations that you have made, you can perform a diff operation on comparable files that exist in the two templates. However, you could receive some false positives because the sequence of element definitions might have changed between two versions.
* You can search for the **dependency** element across all plug-in files to learn what tasks depend on other tasks that are being completed. For example, Microsoft Test Manager and Lab Management require the SharedSteps and TestCase work item types, the SharedSteps and TestedBy links types, and categories. See [Define dependencies for task groups and tasks in plug-in files](https://msdn.microsoft.com/library/ms243800.aspx).

You can learn more about each process template definition files from these resources:

* [Customize a process template](process-templates/customize-process.md)
* [All WITD XML Elements Reference](xml/all-witd-xml-elements-reference.md)
* [Categories XML Element Reference](https://msdn.microsoft.com/library/dd286631.aspx)
* [Process Configuration XML Element Reference](xml/process-configuration-xml-element.md)

You can post a question or search for answers to your update questions in one of these forums: [Team Foundation Server - work tracking](http://social.msdn.microsoft.com/Forums/tfsworkitemtracking/threads) or [the web portal](http://go.microsoft.com/fwlink/?LinkId=257843).



<a name="how_works"></a>

### Customizations that interfere with smooth updates 

What types of customizations stop the Configure Features wizard from being able to update a project?
 
The following changes made to a process template can interfere with the Configure Features wizard's ability to run:

* Renamed or removed WITs that belong to the Requirement Category or Task Category. 
* Renamed states or customized workflow states defined for WITs that belong to the Requirement Category or Task Category. Metastates define how planning tools treat each workflow state. At least one workflow state must map to the **InProgress** and to the **Completed** metastates
* Removal of fields defined for WITs that belong to the Requirement Category or Task Category. These fields are defined in the ProcessConfiguration definition file and include the fields used to manage backlog priority, effort, task activity or discipline, and remaining work. 

To learn more, see [Process configuration XML element reference](xml/process-configuration-xml-element.md).  
 
###Add portfolio backlog levels

You can add up to five portfolio backlogs total. This includes the Feature and Epic portfolio backlogs. You can add this to a custom process template or after your project is updated. To get started, see [Add a portfolio backlog](add-portfolio-backlogs.md).  

###Rename a work item type 

Use **witadmin renamewitd** command to change the name, and then update the Categories definition file. To learn more, see [Add or modify a work item type](add-modify-wit.md).  
 
