---
title: Link types reference 
titleSuffix: Azure Boards
description: Reference guide to all link types defined for Azure DevOps and Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 219717a0-de6e-4f70-8558-54f813f82507
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '>= tfs-2013'
ms.date: 11/19/2018
---


# Link type reference 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

<a id="link-type-guidance"></a>

::: moniker range="azure-devops"
Four link types are supported. A specific field maintains a count of links for each of these link types. 

- [**Work link types**](#work-link-types) support creating relationships among work items including select test case management work items
- [**Remote work link types**](#remote-work-link-types) support creating relationships among work items that are defined in different organizations
- [**Hyperlink**](#hyperlink) supports linking a work item to any URL or network share
- [**External link types**](#external-link-types) supports connecting a work item to an external object, such as a code object, build, or wiki page.   

::: moniker-end 

::: moniker range="<= azure-devops-2019"  
Three link types are supported. A specific field maintains a count of links for each of these link types. 

- [**Work link types**](#work-link-types) support creating relationships among work items including select test case management work items
- [**Hyperlink**](#hyperlink) supports linking a work item to any URL or network share
- [**External link types**](#external-link-types) supports connecting a work item to an external object, such as a code object, build, or storyboard.   

::: moniker-end 

Link types you use to link work items are subject to certain restrictions based on their topology. Use the guidance provided in the following tables to choose which link type to use based on the types of queries and reports you'll want to create.  To learn more about the different topologies, see [Link type topologies and restrictions](../../reference/xml/link-type-element-reference.md#topology).


<a id="work-link-types">  </a>
## Work link types

Work link types are system-defined, process-defined, or user-defined (custom). The links listed in the following table are system defined. 

Each work link type defines the link labels, topology type, and restrictions that are used when links between work items are constructed. For example, the parent-child link type defines two labels (Parent and Child), supports a hierarchical or tree topology, and prevents circular references from being created between work items. 

![Work item link types, conceptual image](_img/link-type-reference/linkscontrol-work-item-link-types.png)


A work item's [*Related Link Count*](linking-attachments.md#related-link-count) corresponds to the sum of all links defined with a work link type.

::: moniker range=">= tfs-2017 <= azure-devops-2019"  
The following table describes the work item link types you can specify to scope a links control using the [**WorkItemLinksFilter** XML element](../../reference/xml/linkscontroloptions-xml-elements.md). 
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"  
The following table describes the work item link types you can specify to scope a links control using the [**WorkItemLinksFilter** XML element](../../reference/xml/linkscontroloptions-elements.md). 

::: moniker-end  

<table>
<tbody valign="top">
<tr>
<th width="20%">Name</th>
<th width="17%">Reference name</th>
<th width="63%">Usage</th>
</tr>
<tr>
<td>**Affects-Affected by**<br/>(CMMI only)<br/>  
![Affects link type image](_img/link-work-items-support-traceability/affects-cmmi.png) 
![Affected by link type image](_img/link-work-items-support-traceability/affected-by-cmmi.png) 
</td>
<td><p>Microsoft.VSTS.Common.Affects-Forward<br/>
Microsoft.VSTS.Common.Affects-Reverse</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p>
</td>
<td>
<p>Use this directional link to create links between any set of work items, but not ones that would create closed loops. Typically used to track change requests made to requirements.</p>
Restrictions and recommendations:
<ul>
<li><p>You can link a change request to only one requirement using Affects. You can link requirements to as many child change requests as needed using Affected by.</p>
</li>
<li><p>Only use Affects-Affected by links to link work items in the same project. This action is recommended if you plan to use Excel or Project to modify or update work item data.</p></li>
</ul> </td>
</tr>

<tr>
<td>**Child-Parent**<br/>
![Child link type image](_img/link-work-items-support-traceability/child-tree-forward.png)<br/>
![Parent link type image](_img/link-work-items-support-traceability/parent-tree-reverse.png) 
</td>
<td><p>System.LinkTypes.Hierarchy-Forward<br/>
System.LinkTypes.Hierarchy-Reverse</p>
<p>Topology type: Tree<br/>
Link category: System-defined</p></td>
<td>
Use this directional link to create one-to-many relationships between a single parent to one or more child items. Use to organize work item within a hierarchy. You can quickly create this hierarchy among backlog items using the [mapping function](../backlogs/organize-backlog.md) or among backlog items and tasks using the [sprint backlog](../sprints/assign-work-sprint.md) or [task board](../sprints/task-board.md).
<p>Typical uses include:</p> 
<ul>
<li><p>Create a work breakdown structure (WBS). See [Schedule tasks and assign resources using Microsoft Project](../backlogs/office/create-your-backlog-tasks-using-project.md).</p></li><li><p>Map backlog items to portfolio backlog items. Mapping items automatically creates parent-child links between the items. To learn about mapping, see [Organize your backlog](../backlogs/organize-backlog.md).</p></li><li><p>Maintain task summary relationships. Parent-child links are created for summary tasks and their subordinate tasks.</p></li><li><p>Link tasks to PBIs, user stories, or requirements. Supports Backlog Overview, Stories Overview, and Requirements Overview reports.</p></li></ul>Restrictions and recommendations:<ul><li><p>Use Excel to bulk edit both work items and parent-child links. See [Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md).</p></li><li><p>A work item can have only one Parent. A parent work item can have many children.</p></li><li><p>Only use parent-child links to link work items in the same project. This action is recommended if you plan to use Excel or Project to modify or update work item data.</p></li></ul> </td>
</tr>


<tr>
<td>**Duplicate-Duplicate of** <sup>1</sup><br/> 
![Duplicate link type image](_img/link-work-items-support-traceability/duplicate-tree-forward.png) 
![Duplicate of link type image](_img/link-work-items-support-traceability/duplicate-of-tree-reverse.png) 
</td>
<td><p>System.LinkTypes.Duplicate-Forward<br/>
System.LinkTypes.Duplicate-Reverse</p>
<p>Topology type: Tree<br/>
Link category: System-defined</p>
</td>
<td>
<p>Use this directional link to create one-to-many relationships between a single parent to one or more child items. Use to track tasks, bugs, or other work items which are duplicates of one another.  </p>
<p>Restrictions and recommendations:</p>
<ul><li><p>A work item can have only one Duplicate. </p></li><li><p>Only use Duplicate/Duplicate Of links to link work items in the same project. This action is recommended if you plan to use Excel or Project to modify or update work item data.</p></li></ul> </td>
</tr>

<tr>
<td>**Referenced By-References**<br/>
![Tested by link type image](_img/link-work-items-support-traceability/tested-by-dependency-forward.png) 
![Tests link type image](_img/link-work-items-support-traceability/tests-dependency-reverse.png) 
</td>
<td><p>Microsoft.VSTS.TestCase.<br/>SharedParameterReferencedBy</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Use to link test cases to shared parameters. Use to link Test Cases to Shared Parameters to support the ability to [repeat a test with different data](../../test/repeat-test-with-different-data.md). In general, you wouldn't add this link type to a scoped links control.  To learn more, see [Repeat a test with different data](../../test/repeat-test-with-different-data.md). </p>
</td>
</tr>

</tr>
<tr>
<td>**Related**<br/>
![Related link type image](_img/link-work-items-support-traceability/related-network.png) 
</td>
<td><p>System.LinkTypes.Related</p>
<p>Topology type: Network<br/>
Link category: System-defined</p></td>
<td>Use this non-directional link to create links between any set of work items. Use to link work items that are at the same level, such as two user stories that define features that overlap one another. The Related link type creates simple relationships with few restrictions. 

<ul><li><p>Relate work items that are at the same level, such as two user stories that define features that overlap one another.</p></li><li><p>Link work items that are defined in different projects and managed by different teams.</p></li><li><p>Find and view work items and their related work items in a two-tiered view.</p></li><li><p>Create simple relationships with few restrictions.</p></li></ul></td>
</tr>

<tr>
<td>**Successor-Predecessor**<br/>
![Duplicate link type image](_img/link-work-items-support-traceability/successor-dependency-forward.png) 
![Duplicate of link type image](_img/link-work-items-support-traceability/predecessor-dependency-reverse.png) 
</td>
<td><p>System.LinkTypes.Dependency</p>
<p>Topology type: Dependency<br/>
Link category: System-defined</p></td>
<td><p>Use this directional link to create links between any set of work items, but not ones that would create closed loops. Use to track tasks that must be completed before others can be started. When you plan work using Project, linked tasks are represented as predecessor-successor links in Azure Boards. Typically used to track work that must be completed prior to beginning work on predecessor items. </p>
<ul><li><p>Track tasks that must be completed before others can be started. When you plan work using Project, linked tasks are represented as predecessor-successor links in TFS.</p></li><li><p>Supports one-to-many relationships.</p></li><li><p>Find and view predecessor work items and their successor work items in a two-tiered, direct links query view.</p></li></ul>Restrictions and recommendations:<ul><li><p>An error appears when you attempt to create links that define circular relationships.</p></li><li><p>Create predecessor-successor links only to work items that are within the same project.<br />
You can create predecessor-successor links between work items that are defined in different projects. However, if you export a query to Excel or Project, only those work items that are defined for the project for which the query is defined are imported into the Team Foundation client.</p></li></ul> </td>
</tr>

<tr>
<td>**Tested by-Tests**<br/> 
![Tested by link type image](_img/link-work-items-support-traceability/tested-by-dependency-forward.png) 
![Tests link type image](_img/link-work-items-support-traceability/tests-dependency-reverse.png) 
</td>
<td><p>Microsoft.VSTS.Common.TestedBy-Forward<br/>
Microsoft.VSTS.Common.TestedBy-Reverse</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Link test cases to work items, such as bugs, user stories, requirements, and product backlog items. Use to track test cases that test user stories (Agile), product backlog items (Scrum), or requirements (CMMI). Can also link to other work item types such as bugs, issues, or tasks. For on-premises TFS, there are several SQL reports that depend on these links. See [Review team activities to support useful reports](../../report/admin/review-team-activities-for-useful-reports.md#monitor-progress)</p>
</td>
</tr>

<tr>
<td>**Test Case-Shared Steps**<br/>
![Tested by link type image](_img/link-work-items-support-traceability/tested-by-dependency-forward.png) 
![Tests link type image](_img/link-work-items-support-traceability/tests-dependency-reverse.png) 
</td>
<td><p>Microsoft.VSTS.TestCase.<br/>SharedStepReferencedBy</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Use to link test cases with shared steps. You [share steps between test cases](../../test/mtm/share-steps-between-test-cases.md) to avoid having to create multiple entries of the same sequence of steps.To learn more, see [Share steps between test cases](../../test/mtm/share-steps-between-test-cases.md).</p>
</td>
</tr>

</tbody>
</table>

**Notes:**
1. Available from TFS 2017 and later versions. 



::: moniker range="azure-devops"   

<a id= "remote-work-link-types" />
## Remote work link types

Remote work link types are system-defined link types that support linking work items defined in different organizations. Organizations must be managed by the same Azure Active Directory.  

A work item's [*Remote Link Count*](linking-attachments.md#remote-link-count) corresponds to the sum of all links defined with a remote work link type. 

<table width="100%"> 
<tbody valign="top">

<tr>
<th width="20%">Name</th>
<th width="17%">Reference name</th>
<th width="63%">Usage</th>
</tr>
<tr>
<td>**Consumes From-Produced For**<br/>(Dependency topology)<br/>  
![Consumes From topology image](_img/link-work-items-support-traceability/affected-by-cmmi.png)
![Produced For topology image](_img/link-work-items-support-traceability/affects-cmmi.png)  
</td>
<td><p>Microsoft.VSTS.Common.ProducedFor.Forward<br/>
Microsoft.VSTS.Common.ConsumesFrom.Reverse</p>
<p>Topology type: Dependency<br/>
Link category: System-defined</p>
</td>
<td>
<p>Use this directional link to create links between work items that have dependencies and are defined in different organizations. Organizations must be managed by the same Azure Active Directory. Typically used to track change requests made to requirements.</p>
 </td>
</tr>

<tr>
<td>**Remote Related**<br/>
![Remote Related topology image](_img/link-work-items-support-traceability/related-network.png) 
</td>
<td><p>System.LinkTypes.RemoteRelated</p>
<p>Topology type: Network<br/>
Link category: System-defined</p>
</td>

<td>Use this non-directional link to create links between work items defined in different organizations. Organizations must be managed by the same Azure Active Directory.   
</td>
</tr>


</tbody>
</table>


::: moniker-end  

<a id="hyperlink">  </a>
## Hyperlink type

There is one link type that tracks the number of hyperlinks&mdash;[*Hyperlink Count*](linking-attachments.md#hyper-link-count)&mdash; added to a work item. A hyperlink can link a work item to any URL. 

> [!div class="mx-imgBorder"]  
> ![Hyperlink, conceptual image](_img/link-type-reference/hyperlink.png) 


<table width="100%"> 
<tbody valign="top">
<tr>
<th width="15%">Link name</th>
<th width="12%">Tool supported</th>
<th width="12%">Artifact type</th>
<th width="60%">Usage</th>
</tr>

<tr>
<td>Hyperlink</td>
<td>Work item tracking</td>
<td>Hyperlink</td>
<td>Used to link a work item to a URL. Note that **Workitem Hyperlink** is the name of this link type in the [Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list). </td>
</tr>


</tbody>
</table>

<a id="external-link-types">  </a>
## External link types

External link types are system-defined link types. They support linking work items to other objects as shown in the following image. A work item's [*External Link Count*](linking-attachments.md#external-link-count) corresponds to the sum of all links defined with a external link type. 

> [!div class="mx-imgBorder"]  
> ![External link types, conceptual image](_img/link-type-reference/linkscontrol-external-link-types.png) 

::: moniker range="azure-devops"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. 
::: moniker-end  

::: moniker range=">= tfs-2017 <= azure-devops-2019"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. Also, you can use specify one of these link types to scope a links control using the [**ExternalLinksFilter** XML element](../../reference/xml/linkscontroloptions-xml-elements.md). 
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. Also, you can use specify one of these link types to scope a links control using the [**ExternalLinksFilter** XML element](../../reference/xml/linkscontroloptions-elements.md). 
::: moniker-end   


<table width="100%"> 
<tbody valign="top">
<tr>
<th width="15%">Link name</th>
<th width="12%">Tool supported</th>
<th width="12%">Artifact type</th>
<th width="60%">Usage</th>
</tr>

<tr>
<td>Branch</td>
<td>Git</td>
<td>Branch</td>
<td>Used to link a work item to a branch.</td>
</tr>

<tr>
<td>Build</td>
<td>Build</td>
<td>Build</td>
<td>Used to link a work item to a build.</td>
</tr>

<tr>
<td>Changeset (or Fixed in Changeset)</td>
<td>VersionControl</td>
<td>Changeset</td>
<td>Used to link a work item to a changeset. </td>
</tr>

<tr>
<td>Commit (or Fixed in Commit)</td>
<td>Git</td>
<td>Commit</td>
<td>Used to link a work item to a commit.</td>
</tr>

<tr>
<td>Found in build</td>
<td>Build</td>
<td>Build</td>
<td>Used to link a work item to a build.</td>
</tr>

<tr>
<td>Integrated in build</td>
<td>Build</td>
<td>Build</td>
<td>Used to link a work item to a build.</td>
</tr>

<tr>
<td>Pull Request</td>
<td>Git</td>
<td>PullRequestId</td>
<td>Used to link a work item to a pull request. </td>
</tr>

<tr>
<td>Model Link</td>
<td>ArchitectureTools</td>
<td>ModelLink</td>
<td>(Not supported within the web portal) Used to link a work item to a diagram&mdash;such as an Activity, Component, Layer, Use Case, or other diagram&mdash;stored within the system. You can link diagrams to work items only from the Visual Studio client. </td>
</tr>

<tr>
<td>Result attachment   </td>
<td>Test Management</td>
<td>TcmResultAttachment</td>
<td>Used to link a work item to an attachment associated with a test result. These links appear when you associate a work item with a test result from **Test** or Microsoft Test Manager. </td>
</tr>

<tr>
<td>Source Code File</td>
<td>VersionControl </td>
<td>LatestItemVersion</td>
<td>Used to link a work item to a file on a network. See [Storyboard your ideas using PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md#link-storyboard) for details.  </td>
</tr>

<tr>
<td>Storyboard</td>
<td>Requirements</td>
<td>Storyboard</td>
<td>Used to link a work item to a file on a network. See [Storyboard your ideas using PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md#link-storyboard) for details.  </td>
</tr>

<tr>
<td>Tag</td>
<td>Git</td>
<td>Tag</td>
<td>Used to link a work item to a tag that's been defined for a git commit or git repository. See [Work from the Git command prompt](../../repos/git/command-prompt.md) for more information. </td>
</tr>
<tr>
<td>Test Result </td>
<td>Test Management</td>
<td>TcmResult</td>
<td>Used to link a work item to a test result. These links appear when you associate a work item with a test result from **Test** or Microsoft Test Manager.    </td>
</tr>

<tr>
<td>Versioned item</td>
<td>VersionControl </td>
<td>LatestItemVersion</td>
<td>Used to link a work item to a file or changeset defined within a TFVC repository. Note that **Source Code File** is the name of this link type in the [Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list).   </td>
</tr>

<tr>
<td>Wiki</td>
<td>Wiki</td>
<td>Wiki</td>
<td>Used to link a work item to a wiki page. Supported for TFS 2018.2 and later versions.</td>
</tr>

</tbody>
</table>

::: moniker range="<= azure-devops-2019" 
## Custom link types

You can create custom link types; export and import definitions of link types; and delete, activate, deactivate, and reactivate types of links. See the following topics:  
- [Link type element reference](../../reference/xml/link-type-element-reference.md) 
- [Manage link types (witadmin)](../../reference/witadmin/manage-link-types.md) 

::: moniker-end


## Related articles
- [Link work items to track dependencies](link-work-items-support-traceability.md)    
- [Add link to multiple work items](../backlogs/add-link.md)  
- [Use mapping to link backlog items to features and epics](../backlogs/organize-backlog.md)
- [Bulk modify links using Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)  
- [Link type topologies and restrictions](../../reference/xml/link-type-element-reference.md#topology)
- [Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list)

