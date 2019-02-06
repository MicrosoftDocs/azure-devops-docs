---
title: New features enabled with upgrade
titleSuffix: TFS
description: Features that you can enable through the Configure Features Wizard after you've upgraded the application tier server for Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 1A7B7A18-457F-4AFF-9151-FCF13B850907  
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= azure-devops-2019'
ms.date: 04/05/2017
---

<!---
Supports the following FWLINK: Learn more about these configuration changes: http://go.microsoft.com/fwlink/?LinkID=242985 - 
-->

# New features added through feature enablement 

<b>TFS 2017 | TFS 2015 | TFS 2013</b>  

> [!NOTE]    
<b>Feature availability: </b>This topic applies only to projects defined on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index).
  
The Configure Features Wizard detects which features have and haven't been configured. Most new features include additions or changes to work item types (WITs), categories, or process configuration. New features are introduced with different updates to Team Foundation Server (TFS).  


<table>
<tbody valign="top">
<tr>
<th width="18%">
Feature
</th>
<th width="70%">
Changes
</th>
<th width="12%">
Update
</th>
</tr>
<tr>
<td>
New web form
</td>
<td>
<p>Adds the **WebLayout** section within the **FORM** section of all work item type (WIT) definitions. This section supports the [new work tracking experience in the web portal](process/new-work-item-experience.md). It includes the **SystemControls** section and the new **LinksControlOptions** for managing link relationships. To learn more, see [WebLayout and Control elements](xml/weblayout-xml-elements.md) and [LinksControlOptions XML elements (Web form)](xml/linkscontroloptions-xml-elements.md).</p>
<p>**Note**: When you upgrade an on-premises TFS to TFS 2017, the new web form is automatically available when you add projects to a collection. (You don't have to run the Configure Feature Wizard.) For existing projects, an admin is required to [enable the new form](manage-new-form-rollout.md). The reason the new form isn't automatically enabled for existing projects is to prevent overwriting customizations made to existing work item types.</p>
</td>
<td>
TFS 2017
</td>
</tr>
<tr>
<td>
Code Review
</td>
<td>
Adds the Code Review Request and Code Review Response WITs and categories to the project. These items support [code review requests and responses from the My Work page in Team Explorer](../repos/tfvc/get-code-reviewed-vs.md). My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed.<br /> 
To manually add them to a project, see [Add features manually](add-features-manually.md).   
</td>
<td>
TFS 2012
</td>
</tr>
<tr>
<td>
My Work
</td>
<td>
Supports your ability to [develop code and manage pending changes](https://msdn.microsoft.com/library/ms245462.aspx#my_work) from the My Work page in Team Explorer. My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed.<br /> 
Adds the metastate-to-workflow state mapping in ProcessConfiguration for the Bug Category. If you need to manually update the bug workflow states and metastates, see [Support bug update status using My Work](../repos/tfvc/develop-code-manage-pending-changes.md).   
</td>
<td>
TFS 2012
</td>
</tr>

<tr>
<td>
Feedback
</td>
<td>
Adds the Feedback Request and Feedback Response WITs and categories to the project. These items support [feedback requests and responses](../project/feedback/get-feedback.md). <br/>
To manually add them to a project, see [Add features manually](add-features-manually.md). 
</td>
<td>
TFS 2012
</td>
</tr>

<tr>
<td>
Planning Tools
</td>
<td>
Adds or updates process configuration that supports using the Agile tools: [product backlog](../boards/backlogs/create-your-backlog.md), [plan sprints](../boards/sprints//assign-work-sprint.md), [Kanban board](../boards/boards/kanban-basics.md), and [more](../boards/sprints//define-sprints.md).<br/>

Agile tools depend on the WITs, categories, and process configuration definitions that are made.  Definitions are interdependent. <br/>

See [ProcessConfiguration XML element reference](xml/process-configuration-xml-element.md) to learn more about defining the process configuration for your project.  
</td>
<td>
TFS 2012
</td>
</tr>

<tr>
<td>
Storyboarding
</td>
<td>
Adds the Storyboards control and tab to requirement WIT for the project--such as Product backlog item for Scrum, User Story for Agile, and Requirement for CMMI. The Storyboards control [supports linking storyboards to the work item as well as launching the Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md). <br/>
To manually add the tab to a WIT, see [Add features manually](add-features-manually.md). 
</td>
<td>
TFS 2012
</td>
</tr>
 

<tr>
<td>
Portfolio Backlogs
</td>
<td>
For first time updates, adds the Feature and Epic WIT and categories to the project and modifies the process configuration to support portfolio backlogs. These features enable teams to [select the portfolio backlogs they work with to organize their backlogs](../organizations/settings/select-backlog-navigation-levels.md). <br/>

<blockquote style="font-size: 13px"><b>Note: </b>If you have previously updated your project to add the Feature WIT and portfolio backlog, then you'll need to add the Epic WIT, category, and portfolio backlog manually. If your project doesn't have the Epic WIT, you can [add it manually](add-portfolio-backlogs.md).    </blockquote>

To manually add Feature and Epics portfolio backlogs to a project, see [Add features manually](add-features-manually.md). 

</td>
<td>
TFS 2013, TFS 2015
</td>
</tr>


<tr>
<td>
Shared Parameters
</td>
<td>
Adds the Shared Parameter WIT and category to the project. You use Shared Parameter work items to [run tests with different data](../test/repeat-test-with-different-data.md).<br/> 
To manually add them to a project, see [Add features manually](add-features-manually.md). 
</td>
<td>
TFS 2013.2
</td>
</tr>


<tr>
<td>
Test Plan and Test Suite
</td>
<td>
Adds the Test Plan and Test Suite WITs and categories to the project. These items support managing and customizing test plans and test suites similar to other WITs. See also [Create a test plan](../test/create-a-test-plan.md). <br/>
To learn more about how this feature gets enabled, see [Test Plan and Test Suite features](#test-management).   
</td>
<td>
TFS 2013.3
</td>
</tr>

<tr>
<td>
Bug Behavior
</td>
<td>
Adds the required fields to the Bug WIT definition so that they can be treated like requirements or like tasks. Teams can configure this option as described in [Show bugs on backlogs and boards feature](../organizations/settings/show-bugs-on-backlog.md).<br/>

If you need to manually add them to a project, see [Add features manually](add-features-manually.md).  
</td>
<td>
TFS 2015
</td>
</tr>

</tbody>
</table>

## Related articles 

Not all new features require feature enablement. 


<a id="test-management" >   </a>
###Test Plan and Test Suite features  
The Test Plan and Test Suite WITs are added when you run the TFS Upgrade Wizard. They aren't enabled through the Configure Feature wizard. They support customization of test plans and test suites

<p>The enhancements support:</p>
  <ul>
    <li>
      <p>Test plans and test suites are now work item types (WITs). You can add fields, change the workflow, and [customize them like any other work item type](add-modify-wit.md). </p>
    </li>
    <li>
      <p>The area path security model now contains permissions to <b>Manage test suites</b>. The <b>Manage test plans</b> permissions has been re-scoped to manage only test plans. Previously it covered permission management of both test plans and test suites.</p>
    </li>
    <li>
      <p>The History field for test-related artifacts now provides a consolidated view of changes made to work item fields as well as changes to related artifacts such as test points and test configurations. A new field, the Test Suite Audit field, available in the test suite work item form, captures and displays these related artifact changes in the work item history.</p>
    </li>
  </ul>
  <p>The server upgrade automatically converts existing test plans and test suites to WITs and migrates test data and links. If it encounters a problem, a warning message appears in the server log. To learn more, see [Update a project manually to support test management](xml/update-a-team-project-manually-to-support-test-management.md).</p>
  <p>To learn about changes introduced to Test Manager and the web portal, see [Create a test plan](../test/create-a-test-plan.md).</p>

