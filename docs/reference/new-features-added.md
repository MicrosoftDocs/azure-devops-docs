---
title: New features enabled with upgrade
titleSuffix: TFS
description: Features that you can enable through the Configure Features Wizard after you've upgraded the application tier server for Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 1A7B7A18-457F-4AFF-9151-FCF13B850907  
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
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
> <b>Feature availability: </b>This topic applies only to projects defined on an on-premises Team Foundation Server (TFS). Projects defined on Azure DevOps Services [update automatically with each service upgrade](/azure/devops/release-notes/index).

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
<p>Adds the <strong>WebLayout</strong> section within the <strong>FORM</strong> section of all work item type (WIT) definitions. This section supports the <a href="process/new-work-item-experience.md" data-raw-source="[new work tracking experience in the web portal](process/new-work-item-experience.md)">new work tracking experience in the web portal</a>. It includes the <strong>SystemControls</strong> section and the new <strong>LinksControlOptions</strong> for managing link relationships. To learn more, see <a href="xml/weblayout-xml-elements.md" data-raw-source="[WebLayout and Control elements](xml/weblayout-xml-elements.md)">WebLayout and Control elements</a> and <a href="xml/linkscontroloptions-xml-elements.md" data-raw-source="[LinksControlOptions XML elements (Web form)](xml/linkscontroloptions-xml-elements.md)">LinksControlOptions XML elements (Web form)</a>.</p>
<p><strong>Note</strong>: When you upgrade an on-premises TFS to TFS 2017, the new web form is automatically available when you add projects to a collection. (You don&#39;t have to run the Configure Feature Wizard.) For existing projects, an admin is required to <a href="manage-new-form-rollout.md" data-raw-source="[enable the new form](manage-new-form-rollout.md)">enable the new form</a>. The reason the new form isn&#39;t automatically enabled for existing projects is to prevent overwriting customizations made to existing work item types.</p>
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
Adds the Code Review Request and Code Review Response WITs and categories to the project. These items support <a href="../repos/tfvc/get-code-reviewed-vs.md" data-raw-source="[code review requests and responses from the My Work page in Team Explorer](../repos/tfvc/get-code-reviewed-vs.md)">code review requests and responses from the My Work page in Team Explorer</a>. My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed.<br /> 
To manually add them to a project, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>.<br/></td>
<td>
TFS 2012
</td>
</tr>
<tr>
<td>
My Work
</td>
<td>
Supports your ability to <a href="https://msdn.microsoft.com/library/ms245462.aspx#my_work" data-raw-source="[develop code and manage pending changes](https://msdn.microsoft.com/library/ms245462.aspx#my_work)">develop code and manage pending changes</a> from the My Work page in Team Explorer. My Work only appears when you have Visual Studio Premium or Visual Studio Ultimate installed.<br /> 
Adds the metastate-to-workflow state mapping in ProcessConfiguration for the Bug Category. If you need to manually update the bug workflow states and metastates, see <a href="../repos/tfvc/develop-code-manage-pending-changes.md" data-raw-source="[Support bug update status using My Work](../repos/tfvc/develop-code-manage-pending-changes.md)">Support bug update status using My Work</a>.<br/></td>
<td>
TFS 2012
</td>
</tr>

<tr>
<td>
Feedback
</td>
<td>
Adds the Feedback Request and Feedback Response WITs and categories to the project. These items support <a href="../project/feedback/get-feedback.md" data-raw-source="[feedback requests and responses](../project/feedback/get-feedback.md)">feedback requests and responses</a>. <br/>
To manually add them to a project, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>. 
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
Adds or updates process configuration that supports using the Agile tools: <a href="../boards/backlogs/create-your-backlog.md" data-raw-source="[product backlog](../boards/backlogs/create-your-backlog.md)">product backlog</a>, <a href="../boards/sprints//assign-work-sprint.md" data-raw-source="[plan sprints](../boards/sprints//assign-work-sprint.md)">plan sprints</a>, <a href="../boards/boards/kanban-basics.md" data-raw-source="[Kanban board](../boards/boards/kanban-basics.md)">Kanban board</a>, and <a href="../boards/sprints//define-sprints.md" data-raw-source="[more](../boards/sprints//define-sprints.md)">more</a>.<br/>

Agile tools depend on the WITs, categories, and process configuration definitions that are made.  Definitions are interdependent. <br/>

See <a href="xml/process-configuration-xml-element.md" data-raw-source="[ProcessConfiguration XML element reference](xml/process-configuration-xml-element.md)">ProcessConfiguration XML element reference</a> to learn more about defining the process configuration for your project.<br/></td>
<td>
TFS 2012
</td>
</tr>

<tr>
<td>
Storyboarding
</td>
<td>
Adds the Storyboards control and tab to requirement WIT for the project--such as Product backlog item for Scrum, User Story for Agile, and Requirement for CMMI. The Storyboards control <a href="../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md" data-raw-source="[supports linking storyboards to the work item as well as launching the Storyboarding](../boards/backlogs/office/storyboard-your-ideas-using-powerpoint.md)">supports linking storyboards to the work item as well as launching the Storyboarding</a>. <br/>
To manually add the tab to a WIT, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>. 
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
For first time updates, adds the Feature and Epic WIT and categories to the project and modifies the process configuration to support portfolio backlogs. These features enable teams to <a href="../organizations/settings/select-backlog-navigation-levels.md" data-raw-source="[select the portfolio backlogs they work with to organize their backlogs](../organizations/settings/select-backlog-navigation-levels.md)">select the portfolio backlogs they work with to organize their backlogs</a>. <br/>

<blockquote style="font-size: 13px"><b>Note: </b>If you have previously updated your project to add the Feature WIT and portfolio backlog, then you&#39;ll need to add the Epic WIT, category, and portfolio backlog manually. If your project doesn&#39;t have the Epic WIT, you can <a href="add-portfolio-backlogs.md" data-raw-source="[add it manually](add-portfolio-backlogs.md)">add it manually</a>.    </blockquote>

To manually add Feature and Epics portfolio backlogs to a project, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>. 

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
Adds the Shared Parameter WIT and category to the project. You use Shared Parameter work items to <a href="../test/repeat-test-with-different-data.md" data-raw-source="[run tests with different data](../test/repeat-test-with-different-data.md)">run tests with different data</a>.<br/> 
To manually add them to a project, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>. 
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
Adds the Test Plan and Test Suite WITs and categories to the project. These items support managing and customizing test plans and test suites similar to other WITs. See also <a href="../test/create-a-test-plan.md" data-raw-source="[Create a test plan](../test/create-a-test-plan.md)">Create a test plan</a>. <br/>
To learn more about how this feature gets enabled, see <a href="#test-management" data-raw-source="[Test Plan and Test Suite features](#test-management)">Test Plan and Test Suite features</a>.<br/></td>
<td>
TFS 2013.3
</td>
</tr>

<tr>
<td>
Bug Behavior
</td>
<td>
Adds the required fields to the Bug WIT definition so that they can be treated like requirements or like tasks. Teams can configure this option as described in <a href="../organizations/settings/show-bugs-on-backlog.md" data-raw-source="[Show bugs on backlogs and boards feature](../organizations/settings/show-bugs-on-backlog.md)">Show bugs on backlogs and boards feature</a>.<br/>

If you need to manually add them to a project, see <a href="add-features-manually.md" data-raw-source="[Add features manually](add-features-manually.md)">Add features manually</a>.<br/></td>
<td>
TFS 2015
</td>
</tr>

</tbody>
</table>

## Related articles 

Not all new features require feature enablement. 


<a id="test-management" >   </a>
### Test Plan and Test Suite features  
The Test Plan and Test Suite WITs are added when you run the TFS Upgrade Wizard. They aren't enabled through the Configure Feature wizard. They support customization of test plans and test suites

<p>The enhancements support:</p>
  <ul>
    <li>
      <p>Test plans and test suites are now work item types (WITs). You can add fields, change the workflow, and <a href="add-modify-wit.md" data-raw-source="[customize them like any other work item type](add-modify-wit.md)">customize them like any other work item type</a>. </p>
    </li>
    <li>
      <p>The area path security model now contains permissions to <b>Manage test suites</b>. The <b>Manage test plans</b> permissions has been re-scoped to manage only test plans. Previously it covered permission management of both test plans and test suites.</p>
    </li>
    <li>
      <p>The History field for test-related artifacts now provides a consolidated view of changes made to work item fields as well as changes to related artifacts such as test points and test configurations. A new field, the Test Suite Audit field, available in the test suite work item form, captures and displays these related artifact changes in the work item history.</p>
    </li>
  </ul>
  <p>The server upgrade automatically converts existing test plans and test suites to WITs and migrates test data and links. If it encounters a problem, a warning message appears in the server log. To learn more, see <a href="xml/update-a-team-project-manually-to-support-test-management.md" data-raw-source="[Update a project manually to support test management](xml/update-a-team-project-manually-to-support-test-management.md)">Update a project manually to support test management</a>.</p>
  <p>To learn about changes introduced to Test Manager and the web portal, see <a href="../test/create-a-test-plan.md" data-raw-source="[Create a test plan](../test/create-a-test-plan.md)">Create a test plan</a>.</p>

