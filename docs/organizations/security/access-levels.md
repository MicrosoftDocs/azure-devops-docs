---
title: What are access levels? What access levels are supported?
titleSuffix: Azure DevOps
description: Understand how access levels are used to grant or restrict access to web portal features through stakeholder, basic, basic + Test Plans, or VS Enterprise access levels 
ms.technology: devops-security
ms.prod: devops
ms.assetid: E2C63C7B-6273-41D7-BD14-BFB340DF8D65
ms.topic: conceptual
ms.manager: jillfra
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 06/25/2019
---


# About access levels

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Access levels grant or restrict access to select web portal features. This is in addition to permissions granted through security groups which provide or restrict specific tasks. Access levels enable administrators to provide their user base access to the features they need and only pay for those features. 

[!INCLUDE [temp](../../_shared/version-selector-minimize.md)]

When you add a user or group to a team or project, they're automatically granted access to those features supported by the default access level and those supported by the security group to which they are added. Most users can access most features by being assigned to the **Basic** access level and **Contributors** security group. For a simplified overview of the permissions assigned to the most common groups&#151;**Readers**, **Contributors**, and **Project Administrators**&#151;as well as the **Stakeholder** access group, see [Permissions and access](permissions-access.md).  

::: moniker range="azure-devops"  
To add user accounts or groups to specific access levels, see [Manage users and access](../accounts/add-organization-users.md). Make sure to set each user's access level based on what you've purchased for that user.
::: moniker-end  

::: moniker range="<= azure-devops-2019"  
To add user accounts or groups to specific access levels, see [Change access levels](change-access-levels.md). Make sure to set each user's access level based on what you've purchased for that user. 
::: moniker-end  

## Supported access levels

Assign users or groups of users to one of the following access levels:

::: moniker range="azure-devops"

- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a Visual Studio Professional or MSDN Platforms subscription, and to users for whom you are paying for Basic + Test Plans access in an organization.
- **Basic + Test Plans**: Provides access to all features included in Basic, as well as Azure Test Plans. Assign to users with an Azure DevOps Server CAL or Visual Studio Professional subscription, and to users for whom you're paying for Basic access in an organization.
- **Visual Studio subscription**: Assign to users who already have a Visual Studio subscription. The system automatically recognizes the user's subscription&mdash;Visual Studio Enterprise, Visual Studio Professional, Visual Studio Test Professional, or MSDN Platform&mdash;and enables any other features that are included in their subscription level. If you assign Basic or Stakeholder, they also receive their Visual Studio subscription benefits upon sign-in.

The following table indicates those features available for each supported access level. Visual Studio Test Professional and MSDN Platform subscriptions grant access to the same features as Visual Studio Enterprise. 

<table>
<tr valign="bottom">
<th width="50%">Feature</th>
<th width="12%">Stakeholder</th>
<th width="15%">Basic &<br/>Visual Studio Professional</th>
<th width="15%">Basic + Test Plans &<br/>Visual Studio Enterprise</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left"><strong><a href="../settings/about-settings.md" data-raw-source="[Administer organization](../settings/about-settings.md)">Administer organization</a></strong><br/>Can configure resources when also added to a security group or role: team administrator, Project Administrator, or Project Collection Administrator</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced backlog and sprint planning tools</strong><br/>Includes full access to all <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlog](../../boards/backlogs/backlogs-overview.md)">backlog</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint planning](../../boards/sprints/scrum-overview.md)">sprint planning</a> tools</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced home page</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[access to projects, work items, and pull requests defined across projects you work in](../../project/navigation/work-across-projects.md)">access to projects, work items, and pull requests defined across projects you work in</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Advanced portfolio management</strong><br/>Includes full access to define features and epics from a portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlog](../../boards/backlogs/define-features-epics.md)">backlog</a> or <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban board](../../boards/boards/kanban-epics-features-stories.md)">Kanban board</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Agile boards</strong><br/>Includes limited access to <a href="../../boards/boards/kanban-quickstart.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-quickstart.md)">Kanban boards</a>. Stakeholders can&#39;t add work items, can&#39;t drag-and-drop work items to update status, and can&#39;t update fields displayed on cards. 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Agile Portfolio Management</strong><br/>Includes limited access to portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlogs](../../boards/backlogs/define-features-epics.md)">backlogs</a> and <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-epics-features-stories.md)">Kanban boards</a>. Stakeholders can&#39;t change the backlog priority order, and can&#39;t assign items to an iteration, use the mapping pane, or exercise forecasting. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Analyze test results and manage machine groups</strong><br/>Includes <a href="../../test/track-test-status.md" data-raw-source="[tracking test status](../../test/track-test-status.md)">tracking test status</a> and <a href="../../test/test-different-configurations.md" data-raw-source="[testing different configurations](../../test/test-different-configurations.md)">testing different configurations</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../artifacts/overview.md" data-raw-source="[Artifacts](../../artifacts/overview.md)">Artifacts</a></strong><br/>Includes full access to all <strong>Azure Artifacts</strong> features (previously referred to as package management), up to 2GB free</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Author Release Pipelines and Manage Releases</strong><br/>Includes defining <a href="../../pipelines/release/index.md" data-raw-source="[release pipelines](../../pipelines/release/index.md)">release pipelines</a> and <a href="../../pipelines/release/define-multistage-release-process.md" data-raw-source="[multi-stage continuous deployment (CD) pipelines](../../pipelines/release/define-multistage-release-process.md)">multi-stage continuous deployment (CD) pipelines</a>, and <a href="../../pipelines/release/deploy-using-approvals.md" data-raw-source="[using approvals and gates to control deployments](../../pipelines/release/deploy-using-approvals.md)">using approvals and gates to control deployments</a>; when the <a href="provide-stakeholder-pipeline-access.md" data-raw-source="[**Free access to Pipelines Preview** feature is enabled](provide-stakeholder-pipeline-access.md)"><strong>Free access to Pipelines Preview</strong> feature is enabled</a>, Stakeholders gain access to all <strong>Azure Pipelines</strong> features. 
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Basic backlog and sprint planning tools</strong><br/>Includes limited access to add and modify items on <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlogs](../../boards/backlogs/backlogs-overview.md)">backlogs</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint backlogs and taskboards](../../boards/sprints/scrum-overview.md)">sprint backlogs and taskboards</a>. Stakeholders can&#39;t assign items to an iteration, use the mapping pane, or forecasting.
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Build</strong><br/>Includes full access to all features to <a href="../../pipelines/overview.md" data-raw-source="[manage continuous integration and continuous delivery of software](../../pipelines/overview.md)">manage continuous integration and continuous delivery of software</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>


<tr>
<td align="left"><strong>Chart Authoring</strong><br/>Can create work tracking <a href="../../report/dashboards/charts.md" data-raw-source="[query charts](../../report/dashboards/charts.md)">query charts</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Chart Viewing</strong><br/>Can only view work tracking query charts. Stakeholders can&#39;t view query charts from the Queries page, however can view them when added to a dashboard.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Code</strong><br/>Includes full access to all features to manage code using <a href="../../repos/git/overview.md" data-raw-source="[Git repositories](../../repos/git/overview.md)">Git repositories</a>or using <a href="../../repos/tfvc/overview.md" data-raw-source="[Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md)">Team Foundation Version Control (TFVC)</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../boards/plans/review-team-plans.md" data-raw-source="[Delivery Plans](../../boards/plans/review-team-plans.md)">Delivery Plans</a></strong><br/>Includes full access to add and view Delivery plans.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../project/feedback/get-feedback.md" data-raw-source="[Request and Manage Feedback](../../project/feedback/get-feedback.md)">Request and Manage Feedback</a></strong><br/>Includes full access to request and manage feedback on working software. </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Standard Features</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[working across projects](../../project/navigation/work-across-projects.md)">working across projects</a>, <a href="../../report/dashboards.md" data-raw-source="[View dashboards](../../report/dashboards.md)">View dashboards</a>, <a href="../../project/wiki/filter-print-wiki.md" data-raw-source="[View wikis](../../project/wiki/filter-print-wiki.md)">View wikis</a>, <a href="../../notifications/manage-personal-notifications.md" data-raw-source="[Manage personal notifications](../../notifications/manage-personal-notifications.md)">Manage personal notifications</a>. Stakeholders can&#39;t view markdown README files defined for repositories and can only
read wiki pages. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Test services in build and release</strong><br/>Includes <a href="../../pipelines/languages/dotnet-core.md#run-your-tests" data-raw-source="[running unit tests with your builds](../../pipelines/languages/dotnet-core.md#run-your-tests)">running unit tests with your builds</a>, <a href="../../pipelines/test/review-continuous-test-results-after-build.md" data-raw-source="[reviewing](../../pipelines/test/review-continuous-test-results-after-build.md)">reviewing</a> and <a href="../../pipelines/test/test-analytics.md" data-raw-source="[analyzing](../../pipelines/test/test-analytics.md)">analyzing</a> test results
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Test summary access to Stakeholder license</strong><br/>Includes <a href="../../test/user-acceptance-testing.md" data-raw-source="[performing user acceptance testing](../../test/user-acceptance-testing.md)">performing user acceptance testing</a> and <a href="../../test/request-stakeholder-feedback.md" data-raw-source="[requesting Stakeholder feedback using the Test &amp; Feedback extension](../../test/request-stakeholder-feedback.md)">requesting Stakeholder feedback using the Test &amp; Feedback extension</a></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View My Work Items</strong><br/> Access to <a href="../../boards/work-items/about-work-items.md" data-raw-source="[add and modify work items](../../boards/work-items/about-work-items.md)">add and modify work items</a>, <a href="../../boards/work-items/follow-work-items.md" data-raw-source="[follow work items](../../boards/work-items/follow-work-items.md)">follow work items</a>, <a href="../../boards/queries/view-run-query.md" data-raw-source="[view and create queries](../../boards/queries/view-run-query.md)">view and create queries</a>, and <a href="../../project/feedback/give-feedback.md" data-raw-source="[submit, view, and change feedback responses](../../project/feedback/give-feedback.md)">submit, view, and change feedback responses</a>. Stakeholders can only assign existing tags to work items (can&#39;t add new tags) and can only save queries under My Queries (can&#39;t save under Shared Queries). 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View Releases and Manage Approvals</strong><br/>Includes <a href="../../pipelines/release/approvals/index.md" data-raw-source="[viewing releases](../../pipelines/release/approvals/index.md)">viewing releases</a> and <a href="../../pipelines/release/approvals/index.md" data-raw-source="[approving releases](../../pipelines/release/approvals/index.md)">approving releases</a>; when the <a href="provide-stakeholder-pipeline-access.md" data-raw-source="[**Free access to Pipelines Preview** feature is enabled](provide-stakeholder-pipeline-access.md)"><strong>Free access to Pipelines Preview</strong> feature is enabled</a>, Stakeholders gain access to all <strong>Azure Pipelines</strong> features.</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Case Management</strong><br/>Includes <a href="../../test/create-a-test-plan.md" data-raw-source="[adding test plans and test suites](../../test/create-a-test-plan.md)">adding test plans and test suites</a>, <a href="../../test/create-test-cases.md" data-raw-source="[creating manual test cases](../../test/create-test-cases.md)">creating manual test cases</a>, and <a href="../../boards/backlogs/delete-test-artifacts.md" data-raw-source="[deleting test artifacts](../../boards/backlogs/delete-test-artifacts.md)">deleting test artifacts</a> </td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Execution</strong><br/> Includes running <a href="../../test/run-manual-tests.md" data-raw-source="[manual](../../test/run-manual-tests.md)">manual</a> and <a href="../../test/run-automated-tests-from-test-hub.md" data-raw-source="[automated tests](../../test/run-automated-tests-from-test-hub.md)">automated tests</a>
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<!---
<tr>
<td align="left"><strong>Microsoft published Azure DevOps Extensions</strong></td>
<td> </td>
<td> </td>
<td> </td>
<td>

![checkmark](/azure/devops/_img/icons/checkmark.png)

</td>
</tr>
-->


</tbody>
</table>

::: moniker-end    


::: moniker range="azure-devops-2019"
- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign  to users with an Azure DevOps Server CAL, with a Visual Studio Professional subscription, and to users for whom you're paying for Basic access in an organization.
- **Basic + Test Plans**: Provides access for users who have a monthly Test Manager subscription, Visual Studio Test Professional, or MSDN Platforms subscription. 
- **VS Enterprise**: Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.


The following table indicates those features available for each supported access level. 

<table>
<tr valign="bottom">
<th width="46%">Feature</th>
<th width="12%">Stakeholder</th>
<th width="9%">Basic</th>
<th width="15%">Basic + Test Plans &<br/>VS Enterprise</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left"><strong><a href="../settings/about-settings.md" data-raw-source="[Administer organization](../settings/about-settings.md)">Administer organization</a></strong><br/>Can configure resources when also added to a security group or role: team administrator, Project Administrator, or Project Collection Administrator</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Advanced backlog and sprint planning tools</strong><br/>Includes full access to all <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlog](../../boards/backlogs/backlogs-overview.md)">backlog</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint planning](../../boards/sprints/scrum-overview.md)">sprint planning</a> tools</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced home page</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[access to projects, work items, and pull requests defined across projects you work in](../../project/navigation/work-across-projects.md)">access to projects, work items, and pull requests defined across projects you work in</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Advanced portfolio management</strong><br/>Includes full access to defining features and epics from a portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlog](../../boards/backlogs/define-features-epics.md)">backlog</a> or <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban board](../../boards/boards/kanban-epics-features-stories.md)">Kanban board</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Agile boards</strong><br/>Includes limited access to <a href="../../boards/boards/kanban-quickstart.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-quickstart.md)">Kanban boards</a>. Stakeholders can&#39;t add work items, can&#39;t drag-and-drop work items to update status, and can&#39;t update fields displayed on cards. 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Agile Portfolio Management</strong><br/>Includes limited access to portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlogs](../../boards/backlogs/define-features-epics.md)">backlogs</a> and <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-epics-features-stories.md)">Kanban boards</a>. Stakeholders can&#39;t change the backlog priority order, and can&#39;t assign items to an iteration, use the mapping pane, or exercise forecasting. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Analyze test results and manage machine groups</strong><br/>Includes <a href="../../test/track-test-status.md" data-raw-source="[tracking test status](../../test/track-test-status.md)">tracking test status</a> and <a href="../../test/test-different-configurations.md" data-raw-source="[testing different configurations](../../test/test-different-configurations.md)">testing different configurations</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../artifacts/overview.md" data-raw-source="[Artifacts](../../artifacts/overview.md)">Artifacts</a></strong><br/>Includes full access to all <strong>Azure Artifacts</strong> features (also referred to as package management), up to 2GB free</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Author Release Pipelines and Manage Releases</strong><br/>Includes defining <a href="../../pipelines/release/index.md" data-raw-source="[release pipelines](../../pipelines/release/index.md)">release pipelines</a> and <a href="../../pipelines/release/define-multistage-release-process.md" data-raw-source="[multi-stage continuous deployment (CD) pipelines](../../pipelines/release/define-multistage-release-process.md)">multi-stage continuous deployment (CD) pipelines</a>, and <a href="../../pipelines/release/deploy-using-approvals.md" data-raw-source="[using approvals and gates to control deployments](../../pipelines/release/deploy-using-approvals.md)">using approvals and gates to control deployments</a> 
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Basic backlog and sprint planning tools</strong><br/>Includes limited access to add and modify items on <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlogs](../../boards/backlogs/backlogs-overview.md)">backlogs</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint backlogs and taskboards](../../boards/sprints/scrum-overview.md)">sprint backlogs and taskboards</a>. Stakeholders can&#39;t assign items to an iteration, use the mapping pane, or forecasting.
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Build</strong><br/>Includes full access to all features to<a href="../../pipelines/overview.md" data-raw-source="[manage continuous integration and continuous delivery of software](../../pipelines/overview.md)">manage continuous integration and continuous delivery of software</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>


<tr>
<td align="left"><strong>Chart Authoring</strong><br/>Can create work tracking <a href="../../report/dashboards/charts.md" data-raw-source="[query charts](../../report/dashboards/charts.md)">query charts</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Chart Viewing</strong><br/>Can only view work tracking query charts; Stakeholders can&#39;t view query charts from the Queries page, however can view them when added to a dashboard.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Code</strong><br/>Includes full access to all features to manage code using <a href="../../repos/git/overview.md" data-raw-source="[Git repositories](../../repos/git/overview.md)">Git repositories</a> or using <a href="../../repos/tfvc/overview.md" data-raw-source="[Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md)">Team Foundation Version Control (TFVC)</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../boards/plans/review-team-plans.md" data-raw-source="[Delivery Plans](../../boards/plans/review-team-plans.md)">Delivery Plans</a></strong><br/>Includes full access to add and view Delivery plans.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../project/feedback/get-feedback.md" data-raw-source="[Request and Manage Feedback](../../project/feedback/get-feedback.md)">Request and Manage Feedback</a></strong><br/>Includes full access to request and manage feedback on working software. </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Standard Features</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[working across projects](../../project/navigation/work-across-projects.md)">working across projects</a>, <a href="../../report/dashboards.md" data-raw-source="[View dashboards](../../report/dashboards.md)">View dashboards</a>, <a href="../../project/wiki/filter-print-wiki.md" data-raw-source="[View wikis](../../project/wiki/filter-print-wiki.md)">View wikis</a>, <a href="../../notifications/manage-personal-notifications.md" data-raw-source="[Manage personal notifications](../../notifications/manage-personal-notifications.md)">Manage personal notifications</a>; Stakeholders can&#39;t view markdown README files defined for repositories and can only
read wiki pages. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Test services in build and release</strong><br/>Includes <a href="../../pipelines/languages/dotnet-core.md#run-your-tests" data-raw-source="[running unit tests with your builds](../../pipelines/languages/dotnet-core.md#run-your-tests)">running unit tests with your builds</a>, <a href="../../pipelines/test/review-continuous-test-results-after-build.md" data-raw-source="[reviewing](../../pipelines/test/review-continuous-test-results-after-build.md)">reviewing</a> and <a href="../../pipelines/test/test-analytics.md" data-raw-source="[analyzing](../../pipelines/test/test-analytics.md)">analyzing</a> test results
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Test summary access to Stakeholder license</strong><br/>Includes <a href="../../test/user-acceptance-testing.md" data-raw-source="[performing user acceptance testing](../../test/user-acceptance-testing.md)">performing user acceptance testing</a> and <a href="../../test/request-stakeholder-feedback.md" data-raw-source="[requesting Stakeholder feedback using the Test &amp; Feedback extension](../../test/request-stakeholder-feedback.md)">requesting Stakeholder feedback using the Test &amp; Feedback extension</a></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View My Work Items</strong><br/>Includes limited access to <a href="../../boards/work-items/about-work-items.md" data-raw-source="[add and modify work items](../../boards/work-items/about-work-items.md)">add and modify work items</a>, <a href="../../boards/work-items/follow-work-items.md" data-raw-source="[follow work items](../../boards/work-items/follow-work-items.md)">follow work items</a>, <a href="../../boards/queries/view-run-query.md" data-raw-source="[view and create queries](../../boards/queries/view-run-query.md)">view and create queries</a>, and <a href="../../project/feedback/give-feedback.md" data-raw-source="[submit, view, and change feedback responses](../../project/feedback/give-feedback.md)">submit, view, and change feedback responses</a>. Stakeholders can only assign existing tags to work items (can&#39;t add new tags) and can only save queries under My Queries (can&#39;t save under Shared Queries). 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View Releases and Manage Approvals</strong><br/>Includes <a href="../../pipelines/release/approvals/index.md" data-raw-source="[viewing releases](../../pipelines/release/approvals/index.md)">viewing releases</a> and <a href="../../pipelines/release/approvals/index.md" data-raw-source="[approving releases](../../pipelines/release/approvals/index.md)">approving releases</a></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Case Management</strong><br/>Includes <a href="../../test/create-a-test-plan.md" data-raw-source="[adding test plans and test suites](../../test/create-a-test-plan.md)">adding test plans and test suites</a>, <a href="../../test/create-test-cases.md" data-raw-source="[creating manual test cases](../../test/create-test-cases.md)">creating manual test cases</a>, and <a href="../../boards/backlogs/delete-test-artifacts.md" data-raw-source="[deleting test artifacts](../../boards/backlogs/delete-test-artifacts.md)">deleting test artifacts</a> </td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Execution</strong><br/> Includes running <a href="../../test/run-manual-tests.md" data-raw-source="[manual](../../test/run-manual-tests.md)">manual</a> and <a href="../../test/run-automated-tests-from-test-hub.md" data-raw-source="[automated tests](../../test/run-automated-tests-from-test-hub.md)">automated tests</a>
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Microsoft published Azure DevOps Extensions</strong></td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>



</tbody>
</table>

::: moniker-end    
 

::: moniker range="tfs-2018"
- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a CAL or with a Visual Studio Professional subscription. 
- **Advanced** (legacy access level, deprecated in Azure DevOps Server 2019): Provides access to premium features. Only assign to users with a subscription to MSDN Platforms or Visual Studio Test Professional.
- **VS Enterprise**: Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.


::: moniker-end    

::: moniker range="tfs-2017"
- **Stakeholder**: Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- **Basic**: Provides access to most features. Assign to users with a CAL or with a Visual Studio subscription. 
- **Advanced** (TFS 2017): Provides access to premium features. Only assign to users with a subscription to MSDN Platforms or Visual Studio Test Professional.
- **VS Enterprise** (TFS 2017.1 and later versions): Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise.


::: moniker-end

::: moniker range="tfs-2017 || tfs-2018"

The following table indicates those features available for each supported access level. 

<table>
<tr valign="bottom">
<th width="66%">Feature</th>
<th width="10%">Stakeholder</th>
<th width="8%">Basic</th>
<th width="16%">Advanced &<br/>VS Enterprise</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left"><strong><a href="../settings/about-settings.md" data-raw-source="[Administer organization](../settings/about-settings.md)">Administer organization</a></strong><br/>Can configure resources when also added to a security group or role: team administrator, Project Administrator, or Project Collection Administrator</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Advanced backlog and sprint planning tools</strong><br/>Includes full access to all <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlog](../../boards/backlogs/backlogs-overview.md)">backlog</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint planning](../../boards/sprints/scrum-overview.md)">sprint planning</a> tools</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced home page</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[access to projects, work items, and pull requests defined across projects you work in](../../project/navigation/work-across-projects.md)">access to projects, work items, and pull requests defined across projects you work in</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Advanced portfolio management</strong><br/>Includes full access to defining features and epics from a portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlog](../../boards/backlogs/define-features-epics.md)">backlog</a> or <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban board](../../boards/boards/kanban-epics-features-stories.md)">Kanban board</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Agile boards</strong><br/>Includes limited access to <a href="../../boards/boards/kanban-quickstart.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-quickstart.md)">Kanban boards</a>. Stakeholders can&#39;t add work items, can&#39;t drag-and-drop work items to update status, and can&#39;t update fields displayed on cards. 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Agile Portfolio Management</strong><br/>Includes limited access to portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlogs](../../boards/backlogs/define-features-epics.md)">backlogs</a> and <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-epics-features-stories.md)">Kanban boards</a>. Stakeholders can&#39;t change the backlog priority order, and can&#39;t assign items to an iteration, use the mapping pane, or exercise forecasting. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Analyze test results and manage machine groups</strong><br/>Includes <a href="../../test/track-test-status.md" data-raw-source="[tracking test status](../../test/track-test-status.md)">tracking test status</a> and <a href="../../test/test-different-configurations.md" data-raw-source="[testing different configurations](../../test/test-different-configurations.md)">testing different configurations</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>


<tr>
<td align="left"><strong><a href="../../artifacts/overview.md" data-raw-source="[Artifacts](../../artifacts/overview.md)">Artifacts</a></strong><br/>Includes full access to all <strong>Azure Artifacts</strong> features (also referred to as package management), up to 2GB free</td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Author Release Pipelines and Manage Releases</strong><br/>Includes defining <a href="../../pipelines/release/index.md" data-raw-source="[release pipelines](../../pipelines/release/index.md)">release pipelines</a> and <a href="../../pipelines/release/define-multistage-release-process.md" data-raw-source="[multi-stage continuous deployment (CD) pipelines](../../pipelines/release/define-multistage-release-process.md)">multi-stage continuous deployment (CD) pipelines</a>, and <a href="../../pipelines/release/deploy-using-approvals.md" data-raw-source="[using approvals and gates to control deployments](../../pipelines/release/deploy-using-approvals.md)">using approvals and gates to control deployments</a> 
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Basic backlog and sprint planning tools</strong><br/>Includes limited access to add and modify items on <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlogs](../../boards/backlogs/backlogs-overview.md)">backlogs</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint backlogs and taskboards](../../boards/sprints/scrum-overview.md)">sprint backlogs and taskboards</a>. Stakeholders can&#39;t assign items to an iteration, use the mapping pane, or forecasting.
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Build</strong><br/>Includes full access to all features to<a href="../../pipelines/overview.md" data-raw-source="[manage continuous integration and continuous delivery of software](../../pipelines/overview.md)">manage continuous integration and continuous delivery of software</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>


<tr>
<td align="left"><strong>Chart Authoring</strong><br/>Can create work tracking <a href="../../report/dashboards/charts.md" data-raw-source="[query charts](../../report/dashboards/charts.md)">query charts</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Chart Viewing</strong><br/>Can only view work tracking query charts; Stakeholders can&#39;t view query charts from the Queries page, however can view them when added to a dashboard.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Code</strong><br/>Includes full access to all features to manage code using <a href="../../repos/git/overview.md" data-raw-source="[Git repositories](../../repos/git/overview.md)">Git repositories</a>or using <a href="../../repos/tfvc/overview.md" data-raw-source="[Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md)">Team Foundation Version Control (TFVC)</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../boards/plans/review-team-plans.md" data-raw-source="[Delivery Plans](../../boards/plans/review-team-plans.md)">Delivery Plans</a></strong><br/>Includes full access to add and view Delivery plans.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../project/feedback/get-feedback.md" data-raw-source="[Request and Manage Feedback](../../project/feedback/get-feedback.md)">Request and Manage Feedback</a></strong><br/>Includes full access to request and manage feedback on working software. </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Standard Features</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[working across projects](../../project/navigation/work-across-projects.md)">working across projects</a>, <a href="../../report/dashboards.md" data-raw-source="[View dashboards](../../report/dashboards.md)">View dashboards</a>, <a href="../../project/wiki/filter-print-wiki.md" data-raw-source="[View wikis](../../project/wiki/filter-print-wiki.md)">View wikis</a>, <a href="../../notifications/manage-personal-notifications.md" data-raw-source="[Manage personal notifications](../../notifications/manage-personal-notifications.md)">Manage personal notifications</a>. Stakeholders can&#39;t view markdown README files defined for repositories and can only.
read wiki pages. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../notifications/collaborate-in-a-team-room.md" data-raw-source="[Team rooms](../../notifications/collaborate-in-a-team-room.md)">Team rooms</a></strong><br/>Requires TFS 2017 or earlier versions. Deprecated for TFS 2018 and later versions.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Test summary access to Stakeholder license</strong><br/>Includes <a href="../../test/user-acceptance-testing.md" data-raw-source="[performing user acceptance testing](../../test/user-acceptance-testing.md)">performing user acceptance testing</a> and <a href="../../test/request-stakeholder-feedback.md" data-raw-source="[requesting Stakeholder feedback using the Test &amp; Feedback extension](../../test/request-stakeholder-feedback.md)">requesting Stakeholder feedback using the Test &amp; Feedback extension</a></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View My Work Items</strong><br/>Includes limited access to <a href="../../boards/work-items/about-work-items.md" data-raw-source="[add and modify work items](../../boards/work-items/about-work-items.md)">add and modify work items</a>, <a href="../../boards/work-items/follow-work-items.md" data-raw-source="[follow work items](../../boards/work-items/follow-work-items.md)">follow work items</a>, <a href="../../boards/queries/view-run-query.md" data-raw-source="[view and create queries](../../boards/queries/view-run-query.md)">view and create queries</a>, and <a href="../../project/feedback/give-feedback.md" data-raw-source="[submit, view, and change feedback responses](../../project/feedback/give-feedback.md)">submit, view, and change feedback responses</a>. Stakeholders can only assign existing tags to work items (can&#39;t add new tags) and can only save queries under My Queries (can&#39;t save under Shared Queries).
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View Releases and Manage Approvals</strong><br/>Includes <a href="../../pipelines/release/approvals/index.md" data-raw-source="[viewing releases](../../pipelines/release/approvals/index.md)">viewing releases</a> and <a href="../../pipelines/release/approvals/index.md" data-raw-source="[approving releases](../../pipelines/release/approvals/index.md)">approving releases</a></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Case Management</strong><br/>Includes <a href="../../test/create-a-test-plan.md" data-raw-source="[adding test plans and test suites](../../test/create-a-test-plan.md)">adding test plans and test suites</a>, <a href="../../test/create-test-cases.md" data-raw-source="[creating manual test cases](../../test/create-test-cases.md)">creating manual test cases</a>, and <a href="../../boards/backlogs/delete-test-artifacts.md" data-raw-source="[deleting test artifacts](../../boards/backlogs/delete-test-artifacts.md)">deleting test artifacts</a> </td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Web-based Test Execution</strong><br/> Includes running <a href="../../test/run-manual-tests.md" data-raw-source="[manual](../../test/run-manual-tests.md)">manual</a> and <a href="../../test/run-automated-tests-from-test-hub.md" data-raw-source="[automated tests](../../test/run-automated-tests-from-test-hub.md)">automated tests</a>
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
</tbody>
</table>

::: moniker-end  

::: moniker range="<= tfs-2015"
- <strong>Stakeholder/Limited</strong>:  Provides partial access, can be assigned to unlimited users for free. Assign to users with no license or subscriptions who need access to a limited set of features.
- <strong>Basic/Standard</strong>: Provides access to most features. Assign to users with a CAL or with a Visual Studio subscription.
- <strong>Advanced/Full</strong>: Provides access to premium features. Assign to users with a subscription to Visual Studio Enterprise, Visual Studio Test Professional or MSDN Platforms.

The following table indicates those features available for each supported access level.

<table>
<tr valign="bottom">
<th width="64%">Feature</th>
<th width="12%">Stakeholder (Limited)</th>
<th width="12%">Basic (Standard)</th>
<th width="12%">Advanced (Full)</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left"><strong><a href="../settings/about-settings.md" data-raw-source="[Administer organization](../settings/about-settings.md)">Administer organization</a></strong><br/>Can configure resources when also added to a security group or role: team administrator, Project Administrator, or Project Collection Administrator</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced backlog and sprint planning tools</strong><br/>Includes full access to all <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlog](../../boards/backlogs/backlogs-overview.md)">backlog</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint planning](../../boards/sprints/scrum-overview.md)">sprint planning</a> features.</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Advanced home page</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[access to projects, work items, and pull requests defined across projects you work in](../../project/navigation/work-across-projects.md)">access to projects, work items, and pull requests defined across projects you work in</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Agile boards</strong><br/>Includes limited access to <a href="../../boards/boards/kanban-quickstart.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-quickstart.md)">Kanban boards</a>. Stakeholders can&#39;t add work items and can&#39;t drag-and-drop work items to update status. 
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>
<tr>
<td align="left"><strong>Agile Portfolio Management</strong><br/>Includes full access to portfolio <a href="../../boards/backlogs/define-features-epics.md" data-raw-source="[backlogs](../../boards/backlogs/define-features-epics.md)">backlogs</a> and <a href="../../boards/boards/kanban-epics-features-stories.md" data-raw-source="[Kanban boards](../../boards/boards/kanban-epics-features-stories.md)">Kanban boards</a></td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Basic backlog and sprint planning tools</strong><br/>Includes limited access to add and modify items on <a href="../../boards/backlogs/backlogs-overview.md" data-raw-source="[backlogs](../../boards/backlogs/backlogs-overview.md)">backlogs</a> and <a href="../../boards/sprints/scrum-overview.md" data-raw-source="[sprint backlogs and taskboards](../../boards/sprints/scrum-overview.md)">sprint backlogs and taskboards</a>. Stakeholders can&#39;t assign items to an iteration, use the mapping pane, or forecasting.
</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Build</strong><br/>Includes full access to all features to <a href="../../pipelines/overview.md" data-raw-source="[manage continuous integration and continuous delivery of software](../../pipelines/overview.md)">manage continuous integration and continuous delivery of software</a> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Chart Authoring</strong><br/>Can create work tracking <a href="../../report/dashboards/charts.md" data-raw-source="[query charts](../../report/dashboards/charts.md)">query charts</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Chart Viewing</strong><br/>Can only view work tracking query charts</td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Code</strong><br/>Includes full access to all features to manage code using <a href="../../repos/git/overview.md" data-raw-source="[Git repositories](../../repos/git/overview.md)">Git repositories</a>or using <a href="../../repos/tfvc/overview.md" data-raw-source="[Team Foundation Version Control (TFVC)](../../repos/tfvc/overview.md)">Team Foundation Version Control (TFVC)</a></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../project/feedback/get-feedback.md" data-raw-source="[Request and Manage Feedback](../../project/feedback/get-feedback.md)">Request and Manage Feedback</a></strong><br/>Includes full access to request and manage feedback on working software. </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>Standard Features</strong><br/>Includes <a href="../../project/navigation/work-across-projects.md" data-raw-source="[working across projects](../../project/navigation/work-across-projects.md)">working across projects</a>, <a href="../../report/dashboards.md" data-raw-source="[viewing dashboards](../../report/dashboards.md)">viewing dashboards</a>, and <a href="../../notifications/manage-personal-notifications.md" data-raw-source="[managing personal notifications](../../notifications/manage-personal-notifications.md)">managing personal notifications</a>; Stakeholders have no access to repositories. </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong><a href="../../notifications/collaborate-in-a-team-room.md" data-raw-source="[Team rooms](../../notifications/collaborate-in-a-team-room.md)">Team rooms</a></strong></td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

<tr>
<td align="left"><strong>View My Work Items</strong><br/>Includes limited access to <a href="../../boards/work-items/about-work-items.md" data-raw-source="[add and modify work items](../../boards/work-items/about-work-items.md)">add and modify work items</a>, <a href="../../boards/work-items/follow-work-items.md" data-raw-source="[follow work items](../../boards/work-items/follow-work-items.md)">follow work items</a>, <a href="../../boards/queries/view-run-query.md" data-raw-source="[view and create queries](../../boards/queries/view-run-query.md)">view and create queries</a>, and <a href="../../project/feedback/give-feedback.md" data-raw-source="[submit, view, and change feedback responses](../../project/feedback/give-feedback.md)">submit, view, and change feedback responses</a>. Stakeholders can only assign existing tags to work items (can&#39;t add new tags) and can only save queries under My Queries (can&#39;t save under Shared Queries).
</td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>


<tr>
<td align="left"><strong>Web-based Test Management</strong><br/>Includes adding and executing <a href="../../test/create-a-test-plan.md" data-raw-source="[test plans and test suites](../../test/create-a-test-plan.md)">test plans and test suites</a> and <a href="../../test/create-test-cases.md" data-raw-source="[manual test cases](../../test/create-test-cases.md)">manual test cases</a>, and deleting <a href="../../boards/backlogs/delete-test-artifacts.md" data-raw-source="[test artifacts](../../boards/backlogs/delete-test-artifacts.md)">test artifacts</a> </td>
<td> </td>
<td> </td>
<td><img src="/azure/devops/_img/icons/checkmark.png" alt="checkmark"/></td>
</tr>

</tbody>
</table>

::: moniker-end    
 


<a id="stakeholder-access">  </a>
<a id="feature-access">  </a>

## Stakeholder access

With Stakeholder access, users can create and modify work items and create and save queries. They have limited access to many of the Azure Boards features. They also can view and approve release pipelines and perform administrative tasks when granted administrative permissions or added to an administrative group. 
 
To get started as a Stakeholder, see [Get started as a Stakeholder](get-started-stakeholder.md).


::: moniker range="azure-devops"

### Public versus private feature access

Stakeholder access grants access to features differently depending on whether you're working from a private or a public project. To learn more about public projects, see [What is a public project?](../public/about-public-projects.md).  

> [!div class="mx-tdBreakAll"]  
> | Service, application, or setting | Private project | Public project|
> |------------|-----------------|---------------|
> |<strong>Dashboards</strong> | Partial access | Full access | 
> |<strong>Wiki</strong>  | Partial access | Full access | 
> |<strong>Boards</strong>  | Partial access | Full access | 
> |<strong>Repos</strong> | No access | Full access | 
> |<strong>Pipelines</strong>  | Full access | Full access | 
> |<strong>Test Plans</strong>  | No access | No access | 
> |<strong>Notifications</strong>  | Full access | Full access | 
> |<strong>Semantic search</strong> | Full access | Full access | 
> |<strong>Project settings</strong>  | Partial access | Partial access | 
> |<strong>Organization settings</strong>  | Partial access | Partial access | 

::: moniker-end




### Features not available to users with Stakeholder access 

If a Stakeholder needs access to one or more of the following features&mdash;which support the daily work of product owners, team leads, developers, testers, and project administrators&mdash;you need to grant them <strong>Basic</strong> access.  

::: moniker range="azure-devops"

#### For Private projects:

- Change the priority of an item within a backlog  
- Delete work items or move work items to another project
- Create shared queries, view charts, and modify the home page  
- View Delivery Plans (a Marketplace extension)    
- Access the full set of features under <strong>Pipelines</strong>, <strong>Repos</strong> or <strong>Test Plans</strong>.  

#### For Public projects:

- View Delivery Plans (a Marketplace extension)    
- Access the full set of features under <strong>Repos</strong> or <strong>Test Plans</strong>.

::: moniker-end


::: moniker range="azure-devops-2019"

- Change the priority of an item within a backlog  
- Delete work items or move work items to another project
- Create shared queries, view charts, and modify the home page  
- View Delivery Plans (a Marketplace extension)
- Access the full set of features under <strong>Pipelines</strong>, <strong>Repos</strong> or <strong>Test Plans</strong>.  

::: moniker-end


::: moniker range="tfs-2018"
- Change the priority of an item within a backlog
- Delete work items 
- Create shared queries, view charts, and modify the home page  
- View Delivery Plans (a Marketplace extension)    
- Access the full set of features under <strong>Code</strong>, <strong>Build and Release</strong> or <strong>Test</strong>.  
::: moniker-end

::: moniker range="<= tfs-2017"

- Change the priority of an item within a backlog
- Delete work items 
- Create shared queries, view charts, and modify the home page  
- View Delivery Plans (a Marketplace extension)
- Access the full set of features provided under <strong>Code</strong>, <strong>Build and Release</strong> or <strong>Test</strong>
- Participate in team rooms, which capture interactive, detailed conversations about the project.  

::: moniker-end

> [!NOTE]
> Stakeholders that choose a feature that's not available to them  receive an error message indicating that they don't have permissions to complete the task.

<a id="basic" />



::: moniker range="azure-devops"

## Visual Studio subscription access

Visual Studio subscribers are entitled to **Visual Studio subscription** features as a subscriber benefit. When you add those users, be sure to assign them the **Visual Studio subscription** access level. 

The system automatically recognizes their subscription and enables any other features that are included, based on their subscription level.

::: moniker-end  

::: moniker range=">= tfs-2017 <= azure-devops-2019"

## VS Enterprise access

Visual Studio Enterprise subscribers are entitled to **VS Enterprise** access as a subscriber benefit. When you add those users, be sure to assign them the **VS Enterprise** access level. 

With VS Enterprise access, users have access to any fee-based, Marketplace extension published by Microsoft Marketplace extension published by Microsoft that is included for active Visual Studio Enterprise subscribers. 

::: moniker-end

::: moniker range="tfs-2017"  

For TFS 2017.2 and later versions, assign **VS Enterprise** to those users for whom you've purchased Visual Studio Enterprise. These include a TFS CAL plus the rights to access VS Enterprise features. (For users with MSDN Platforms subscriptions or Test Professional, assign the Basic access level and the Test Manager extension for Azure Test Plans.) To learn more, see [Assign paid extension access to users](../../marketplace/how-to/assign-paid-extension-access.md). For example, for users with Visual Studio Test Professional or Visual Studio Enterprise, assign them [access to the Test Manager extension for Azure Test Plans](../../marketplace/how-to/assign-paid-extension-access.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

## Advanced access

Users assigned Advanced access can manage test cases when you have [purchased the Test Manager extension](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) for Azure Test Plans and assigned to the user accounts to gain full access to [Web-based test case management tools](../../test/create-a-test-plan.md).

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

Users assigned Advanced access have all the Basic features, plus [web-based test case management tools](../../test/create-a-test-plan.md). You can [buy monthly access](../billing/buy-access-tfs-test-hub.md#buy-monthly-access-to-azure-test-plans) or add users who already have a Visual Studio Test Professional with MSDN or MSDN Platforms subscription. 
 
::: moniker-end



::: moniker range="tfs-2017"

For TFS 2017 and earlier versions, you should assign the **Advanced** level to those users for whom you've purchased the full Test feature set. Here are the purchasing options:  
- Higher-level Visual Studio subscriptions: Visual Studio Test Professional, Visual Studio Enterprise, or MSDN Platforms subscriptions.
These include a TFS CAL plus the rights to access the full set of Test features.  
- A paid Azure DevOps user (which includes a TFS CAL) plus the [Test Manager extension](../billing/buy-basic-plus-test-plans.md). 

For TFS 2017.2, Assign **Advanced** access to those users for whom you've purchased MSDN Platforms or Visual Studio Test Professional subscriptions. These include a TFS CAL plus the rights to access Test Manager. To learn more, see [Get extensions for TFS, Assign paid extension access to users](../../marketplace/how-to/assign-paid-extension-access.md).
	

> [!NOTE]   
> With TFS 2017.1, the Advanced access level was temporarily disabled. Updating to TFS 2017.2 re-enables it. If you are on TFS 2017.1 and have users with Visual Studio Test Professional or MSDN Platforms subscriptions, you should assign them Basic access. In addition, you need to open **Users** for the project collections in which they are a member and [assign them the Test Manager extension for Azure Test Plans](../../marketplace/assign-paid-extensions.md). To learn more, see [Buy access to TFS or TFS Test](../../billing/buy-access-tfs-test-hub.md). 

::: moniker-end

<!--- This section will change based on RC2 or RTW 

Removed sections per Harish Kumar Agarwal, "adds no value" 06/05/2019 chcomley

<a id="test-manager"  >  </a>

::: moniker range=">= azure-devops-2019"

## Test Plans, load testing, and Marketplace extensions

Full access to **Test Plans** and load testing features requires **VS Enterprise** or **Basic + Test Plans** access. Visual Studio Test Professional, plus the test features in the web portal, are managed through Azure DevOps, Azure billing services, and purchase of Test Manager extension for Azure Test Plans from the Marketplace.  

To learn more, see [Start free trials for paid Azure DevOps Services features and extensions](../billing/try-additional-features-vs.md). 

::: moniker-end

::: moniker range=">=tfs-2015 <= tfs-2018"

## Test features and Marketplace extensions

Full access to **Test** features requires **Advanced** (TFS 2017 or earlier versions) or **VS Enterprise** (TFS 2017.1 or later version) access. Visual Studio Test Professional plus the test features in the web portal are managed through Azure DevOps, Azure billing services, and purchase of the Test Manager extension for Azure Test Plans.  

To learn how to grant access to an extension, see [Get extensions for TFS](../../marketplace/get-tfs-extensions.md).  

::: moniker-end

-->


::: moniker range="<= azure-devops-2019"

## What features are available to users who are added to two different access levels?

If a user belongs to a group that has **Basic** access and another group that has **VS Enterprise** access, the user has access to all features available through **VS Enterprise**, which is a superset of **Basic**.

## Service account access

Azure DevOps Server [service accounts](/tfs/tfs-server/admin/service-accounts-dependencies-tfs) are added to the default access level. If you make Stakeholder the default access level, you must add the service accounts to Basic or Advanced/VS Enterprise access.  

Service accounts don't require a CAL or other purchase.  

::: moniker-end

## Related articles  

::: moniker range="azure-devops"

- [Free access to Pipelines Preview](provide-stakeholder-pipeline-access.md)
- [Manage users and access](../accounts/add-organization-users.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access](permissions-access.md)


::: moniker-end


::: moniker range="<= azure-devops-2019"

- [Change access levels](change-access-levels.md)
- [Export a list of users and their access levels](export-users-audit-log.md)
- [Default permissions and access](permissions-access.md)
- [Compare features between plans](https://azure.microsoft.com/services/devops/compare-features/)

::: moniker-end

