---
title: Link types reference 
titleSuffix: Azure Boards
description: Reference guide to all link types defined for Azure DevOps and Team Foundation Server 
ms.technology: devops-agile
ms.assetid: 219717a0-de6e-4f70-8558-54f813f82507
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 07/09/2020
---


# Link type reference 

[!INCLUDE [temp](../includes/version-all.md)]

<a id="link-type-guidance"></a>

Different link types are used to manage the different relationships that you can make among work items or between work items and other artifacts, such as builds, commits, pull requests, and more. 

You can link work items to other work items or artifacts using the following link types.

::: moniker range="azure-devops"

- [**Work link types**](#work-link-types): links work items including select test case management work items
- [**Hyperlink**](#hyperlink): connects a work item to any URL or network share
- [**External link types**](#external-link-types): connects a work item to an external object, such as a code object, build, or wiki page
- [**Remote work link types**](#remote-work-link-types): connects work items that are defined in different organizations
- [**GitHub link types**](#github-link-types): connects a work item to a GitHub repository commit, issue, or pull request.


A specific field maintains a count of links for the first four link types, such as <em>Related Link Count</em>, <em>Hyperlink Count</em>, <em>External Link Count</em>, and <em>Remote Link Count</em>.  

::: moniker-end 

::: moniker range=">= azure-devops-2019 < azure-devops"  

- [**Work link types**](#work-link-types): links work items including select test case management work items
- [**Hyperlink**](#hyperlink): connects a work item to any URL or network share
- [**External link types**](#external-link-types): connects a work item to an external object, such as a code object, build, or wiki page
- [**GitHub link types**](#github-link-types): connects a work item to a GitHub repository commit or pull request.     


A specific field maintains a count of links for the first three link types, such as <em>Related Link Count</em>, <em>Hyperlink Count</em>, and <em>External Link Count</em>.  

::: moniker-end 


::: moniker range="<= tfs-2018"  

- [**Work link types**](#work-link-types): links work items including select test case management work items
- [**Hyperlink**](#hyperlink): connects a work item to any URL or network share
- [**External link types**](#external-link-types): connects a work item to an external object, such as a code object, build, or storyboard.   

A specific field maintains a count of links for each of these link types, such as <em>Related Link Count</em>, <em>Hyperlink Count</em>, and <em>External Link Count</em>.  

::: moniker-end 

Link types you use to link work items are subject to certain restrictions based on their topology. Use the guidance provided in the following tables to choose which link type to use based on the types of queries and reports you'll want to create.  To learn more about the different topologies, see [Link type topologies and restrictions](../../reference/xml/link-type-element-reference.md#topology).


<a id="work-link-types">  </a>

## Work link types

Work link types are system-defined, process-defined, or user-defined (custom). The links listed in the following table are system defined. 

Each work link type defines the link labels, topology type, and restrictions that are used when links between work items are constructed. For example, the parent-child link type defines two labels (Parent and Child), supports a hierarchical or tree topology, and prevents circular references from being created between work items. 

![Work item link types, conceptual image](media/link-type-reference/linkscontrol-work-item-link-types.png)

A work item's [*Related Link Count*](linking-attachments.md#related-link-count) corresponds to the sum of all links defined with a work link type.

::: moniker range=">= tfs-2017 < azure-devops"  

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
<td><strong>Affects-Affected by</strong><br/>(CMMI only)<br/><br/><img src="media/link-work-items-support-traceability/affects-cmmi.png" alt="Affects link type image"/> 
<img src="media/link-work-items-support-traceability/affected-by-cmmi.png" alt="Affected by link type image"/> 
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
<td><strong>Child-Parent</strong><br/>
<img src="media/link-work-items-support-traceability/child-tree-forward.png" alt="Child link type image"/><br/>
<img src="media/link-work-items-support-traceability/parent-tree-reverse.png" alt="Parent link type image"/> 
</td>
<td><p>System.LinkTypes.Hierarchy-Forward<br/>
System.LinkTypes.Hierarchy-Reverse</p>
<p>Topology type: Tree<br/>
Link category: System-defined</p></td>
<td>
Use this directional link to create one-to-many relationships between a single parent to one or more child items. Use to organize work item within a hierarchy. You can quickly create this hierarchy among backlog items using the <a href="../backlogs/organize-backlog.md" data-raw-source="[mapping function](../backlogs/organize-backlog.md)">mapping function</a> or among backlog items and tasks using the <a href="../sprints/assign-work-sprint.md" data-raw-source="[sprint backlog](../sprints/assign-work-sprint.md)">sprint backlog</a> or <a href="../sprints/task-board.md" data-raw-source="[Taskboard](../sprints/task-board.md)">Taskboard</a>.
<p>Typical uses include:</p> 
<ul>
<li><p>Maintain task summary relationships. Parent-child links are created for summary tasks and their subordinate tasks.</p></li><li><p>Link tasks to PBIs, user stories, or requirements. Supports Backlog Overview, Stories Overview, and Requirements Overview reports.</p></li></ul>Restrictions and recommendations:<ul><li><p>Use Excel to bulk edit both work items and parent-child links. See <a href="../backlogs/office/bulk-add-modify-work-items-excel.md" data-raw-source="[Bulk add or modify work items with Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)">Bulk add or modify work items with Excel</a>.</p></li><li><p>A work item can have only one Parent. A parent work item can have many children.</p></li><li><p>Only use parent-child links to link work items in the same project. This action is recommended if you plan to use Excel to modify or update work item data.</p></li></ul> </td>
</tr>
<tr>
<td><strong>Duplicate-Duplicate of</strong> <sup>1</sup><br/> 
<img src="media/link-work-items-support-traceability/duplicate-tree-forward.png" alt="Duplicate of tree forward."/> 
<img src="media/link-work-items-support-traceability/duplicate-of-tree-reverse.png" alt="Duplicate of tree reverse."/> 
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
<td><strong>Referenced By-References</strong><br/>
<img src="media/link-work-items-support-traceability/tested-by-dependency-forward.png" alt="Tested by link type image"/> 
<img src="media/link-work-items-support-traceability/tests-dependency-reverse.png" alt="Tests link type image"/> 
</td>
<td><p>Microsoft.VSTS.TestCase.<br/>SharedParameterReferencedBy</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Use to link test cases to shared parameters. Use to link Test Cases to Shared Parameters to support the ability to <a href="../../test/repeat-test-with-different-data.md" data-raw-source="[repeat a test with different data](../../test/repeat-test-with-different-data.md)">repeat a test with different data</a>. In general, you wouldn&#39;t add this link type to a scoped links control.  To learn more, see <a href="../../test/repeat-test-with-different-data.md" data-raw-source="[Repeat a test with different data](../../test/repeat-test-with-different-data.md)">Repeat a test with different data</a>. </p>
</td>
</tr>
</tr>
<tr>
<td><strong>Related</strong><br/>
<img src="media/link-work-items-support-traceability/related-network.png" alt="Related link type image"/> 
</td>
<td><p>System.LinkTypes.Related</p>
<p>Topology type: Network<br/>
Link category: System-defined</p></td>
<td>Use this non-directional link to create links between any set of work items. Use to link work items that are at the same level, such as two user stories that define features that overlap one another. The Related link type creates simple relationships with few restrictions. 
<ul><li><p>Relate work items that are at the same level, such as two user stories that define features that overlap one another.</p></li><li><p>Link work items that are defined in different projects and managed by different teams.</p></li><li><p>Find and view work items and their related work items in a two-tiered view.</p></li><li><p>Create simple relationships with few restrictions.</p></li></ul></td>
</tr>
<tr>
<td><strong>Successor-Predecessor</strong><br/>
<img src="media/link-work-items-support-traceability/successor-dependency-forward.png" alt="Successor dependency, forward."/> 
<img src="media/link-work-items-support-traceability/predecessor-dependency-reverse.png" alt="Predecessor dependency, reverse."/> 
</td>
<td><p>System.LinkTypes.Dependency</p>
<p>Topology type: Dependency<br/>
Link category: System-defined</p>
<p>Choose <strong>Predecessor</strong> link type when linking to a work item that should be completed <em>prior</em> to the work item you are linking from. Choose <strong>Successor</strong> link type when linking to a work item that should be completed <em>after</em> to the work item you are linking from.</p>
</td>
<td><p>Use this directional link to create links between any set of work items, but not ones that would create closed loops. Use to track tasks that must be completed before others can be started. When you plan work using Microsoft Project, linked tasks are represented as predecessor-successor links in Azure Boards. Typically used to track work that must be completed prior to beginning work on predecessor items. </p>
<ul><li><p>Track tasks that must be completed before others can be started. When you plan work using Project, linked tasks are represented as predecessor-successor links in TFS.</p></li><li><p>Supports one-to-many relationships.</p></li><li><p>Find and view predecessor work items and their successor work items in a two-tiered, direct links query view.</p></li></ul>Restrictions and recommendations:<ul><li><p>An error appears when you attempt to create links that define circular relationships.</p></li><li><p>Create predecessor-successor links only to work items that are within the same project.<br />
You can create predecessor-successor links between work items that are defined in different projects. However, if you export a query to Excel or Project, only those work items that are defined for the project for which the query is defined are imported.</p></li></ul> </td>
</tr>
<tr>
<td><strong>Tested by-Tests</strong><br/> 
<img src="media/link-work-items-support-traceability/tested-by-dependency-forward.png" alt="Tested by link type image"/> 
<img src="media/link-work-items-support-traceability/tests-dependency-reverse.png" alt="Tests link type image"/> 
</td>
<td><p>Microsoft.VSTS.Common.TestedBy-Forward<br/>
Microsoft.VSTS.Common.TestedBy-Reverse</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Link test cases to work items, such as bugs, user stories, requirements, and product backlog items. Use to track test cases that test user stories (Agile), product backlog items (Scrum), or requirements (CMMI). Can also link to other work item types such as bugs, issues, or tasks. For on-premises Azure DevOps, there are several SQL reports that depend on these links. See <a href="../../report/admin/review-team-activities-for-useful-reports.md#monitor-progress" data-raw-source="[Review team activities to support useful reports](../../report/admin/review-team-activities-for-useful-reports.md#monitor-progress)">Review team activities to support useful reports</a>.</p>
</td>
</tr>
<tr>
<td><strong>Test Case-Shared Steps</strong><br/>
<img src="media/link-work-items-support-traceability/tested-by-dependency-forward.png" alt="Tested by link type image"/> 
<img src="media/link-work-items-support-traceability/tests-dependency-reverse.png" alt="Tests link type image"/> 
</td>
<td><p>Microsoft.VSTS.TestCase.<br/>SharedStepReferencedBy</p>
<p>Topology type: Dependency<br/>
Link category: Process-defined</p></td>
<td>
<p>Use to link test cases with shared steps. You <a href="/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases" data-raw-source="[share steps between test cases](/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases)">share steps between test cases</a> to avoid having to create multiple entries of the same sequence of steps. To learn more, see <a href="/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases" data-raw-source="[Share steps between test cases](/previous-versions/azure/devops/test/mtm/share-steps-between-test-cases)">Share steps between test cases</a>.</p>
</td>
</tr>
</tbody>
</table>

**Notes:**
1. Available from TFS 2017 and later versions. 


<a id="hyperlink">  </a>

## Hyperlink type

There is one link type that tracks the number of hyperlinks&mdash;[*Hyperlink Count*](linking-attachments.md#hyper-link-count)&mdash; added to a work item. A hyperlink can link a work item to any URL. 

> [!div class="mx-imgBorder"]  
> ![Hyperlink, conceptual image](media/link-type-reference/hyperlink.png) 

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
<td>Used to link a work item to a URL. Note that <strong>Workitem Hyperlink</strong> is the name of this link type in the <a href="/rest/api/azure/devops/wit/artifact%20link%20types/list" data-raw-source="[Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list)">Artifact Link Types API</a>. </td>
</tr>
</tbody>
</table>




<a id="external-link-types">  </a>

## External link types

External link types are system-defined link types. They support linking work items to other objects as shown in the following image. A work item's [*External Link Count*](linking-attachments.md#external-link-count) corresponds to the sum of all links defined with a external link type. 

> [!div class="mx-imgBorder"]  
> ![External link types, conceptual image](media/link-type-reference/linkscontrol-external-link-types.png) 

::: moniker range="azure-devops"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. 
::: moniker-end  

::: moniker range=">= tfs-2017 < azure-devops"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. Also, you can use specify one of these link types to scope a links control using the [**ExternalLinksFilter** XML element](../../reference/xml/linkscontroloptions-xml-elements.md). 
::: moniker-end  

::: moniker range=">= tfs-2013 <= tfs-2015"  
The following table describes the external link types you can choose when adding a link type from a work item or test case. Also, you can use specify one of these link types to scope a links control using the [**ExternalLinksFilter** XML element](../../reference/xml/linkscontroloptions-elements.md). 
::: moniker-end   

:::row:::
   :::column span="":::
      **Link name**
   :::column-end:::
   :::column span="":::
      **Tool supported**
   :::column-end:::
   :::column span="":::
      **Artifact type**
   :::column-end:::
   :::column span="":::
      **Usage**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Branch
   :::column-end:::
   :::column span="":::
      Git
   :::column-end:::
   :::column span="":::
      Branch
   :::column-end:::
   :::column span="":::
      Used to link a work item to a branch.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Pipelines/Build
   :::column-end:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      Used to link a work item to a build.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Changeset (or Fixed in Changeset)
   :::column-end:::
   :::column span="":::
      VersionControl
   :::column-end:::
   :::column span="":::
      Changeset
   :::column-end:::
   :::column span="":::
      Used to link a work item to a changeset. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Commit (or Fixed in Commit)
   :::column-end:::
   :::column span="":::
      Git
   :::column-end:::
   :::column span="":::
      Commit
   :::column-end:::
   :::column span="":::
      Used to link a work item to a commit.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Found in build
   :::column-end:::
   :::column span="":::
      Pipelines/Build
   :::column-end:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      Used to link a work item to a build.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Integrated in build
   :::column-end:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      Build pipeline
   :::column-end:::
   :::column span="":::
      Used to link a work item to a build.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Integrated in release environment
   :::column-end:::
   :::column span="":::
      Release
   :::column-end:::
   :::column span="":::
      Release pipeline
   :::column-end:::
   :::column span="":::
      Used to link a release to a work item. The system creates a link of this type when a user enables the <strong>Report deployment status to Work</strong> option for a release definition. To learn how to set this option, see [Release pipelines, How do I integrate and report release status?](../../pipelines/release/index.md#how-do-i-integrate-and-report-release-status) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Model Link
   :::column-end:::
   :::column span="":::
      >ArchitectureTools
   :::column-end:::
   :::column span="":::
      ModelLink
   :::column-end:::
   :::column span="":::
      (Not supported within the web portal) Used to link a work item to a diagram&mdash;such as an Activity, Component, Layer, Use Case, or other diagram&mdash;stored within the system. You can link diagrams to work items only from the Visual Studio client. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Pull Request
   :::column-end:::
   :::column span="":::
      Git
   :::column-end:::
   :::column span="":::
      PullRequestId
   :::column-end:::
   :::column span="":::
      Used to link a work item to a pull request. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Result attachment  
   :::column-end:::
   :::column span="":::
      Test Management
   :::column-end:::
   :::column span="":::
      TcmResultAttachment
   :::column-end:::
   :::column span="":::
      Used to link a work item to an attachment associated with a test result. These links appear when you associate a work item with a test result from <strong>Test</strong> or Microsoft Test Manager. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Source Code File<
   :::column-end:::
   :::column span="":::
      VersionControl 
   :::column-end:::
   :::column span="":::
      LatestItemVersion
   :::column-end:::
   :::column span="":::
      Used to link a work item to a file under Team Foundation version control (TFVC).   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Storyboard
   :::column-end:::
   :::column span="":::
      Requirements
   :::column-end:::
   :::column span="":::
      Storyboard
   :::column-end:::
   :::column span="":::
      Used to link a work item to a PowerPoint file on a network. For details, see [Storyboard your ideas using PowerPoint](../backlogs/office/storyboard-your-ideas-using-powerpoint.md#link-storyboard).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Tag
   :::column-end:::
   :::column span="":::
      Git
   :::column-end:::
   :::column span="":::
      Tag
   :::column-end:::
   :::column span="":::
      Used to link a work item to a tag that&#39;s been defined for a git commit or git repository. See <a href="../../repos/git/command-prompt.md" data-raw-source="[Work from the Git command prompt](../../repos/git/command-prompt.md)">Work from the Git command prompt</a> for more information.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Test Result
   :::column-end:::
   :::column span="":::
      Test Management
   :::column-end:::
   :::column span="":::
      TcmResult
   :::column-end:::
   :::column span="":::
      Used to link a work item to a test result. These links appear when you associate a work item with a test result from <strong>Test</strong> or Microsoft Test Manager.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Versioned item
   :::column-end:::
   :::column span="":::
      VersionControl 
   :::column-end:::
   :::column span="":::
      LatestItemVersion
   :::column-end:::
   :::column span="":::
      Used to link a work item to a file or changeset defined within a TFVC repository. Note that **Source Code File** is the name of this link type in the [Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list).   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Wiki
   :::column-end:::
   :::column span="":::
      Wiki
   :::column-end:::
   :::column span="":::
      Wiki
   :::column-end:::
   :::column span="":::
      Used to link a work item to a wiki page. Supported for TFS 2018.2 and later versions.
   :::column-end:::
:::row-end:::



<a id="github-link-types">  </a>

::: moniker range=">= azure-devops-2019"

## GitHub link types

GitHub link types are system-defined link types. They support linking work items to GitHub objects as shown in the following image.  

::: moniker-end

::: moniker range=">= azure-devops-2020"

> [!div class="mx-imgBorder"]  
> ![GitHub link types, conceptual image](media/link-type-reference/linkscontrol-github-link-types.png)  

::: moniker-end

::: moniker range="azure-devops-2019"

> [!div class="mx-imgBorder"]  
> ![GitHub link types, conceptual image](media/link-type-reference/linkscontrol-github-link-types-onprem.png) 

::: moniker-end

::: moniker range=">= azure-devops-2019"

> [!IMPORTANT]  
> You can only link to GitHub artifacts whose repositories you have connected to Azure Boards. To create that connection, see [Connect Azure Boards to GitHub](../github/connect-to-github.md). To learn more about linking to GitHub artifacts, see [Link GitHub commits, pull requests, and issues to work items](../github/link-to-from-github.md).

The following table describes the GitHub link types you can choose when adding a link type from a work item. 

:::row:::
   :::column span="":::
      **Link name**
   :::column-end:::
   :::column span="":::
      **Artifact type**
   :::column-end:::
   :::column span="":::
      **Usage**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      GitHub Commit
   :::column-end:::
   :::column span="":::
      GitHub repository commit
   :::column-end:::
   :::column span="":::
      Used to link a work item to a GitHub commit.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      GitHub Issue
   :::column-end:::
   :::column span="":::
      GitHub repository issue
   :::column-end:::
   :::column span="":::
      Used to link a work item to a GitHub issue.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="":::
      GitHub Pull Request
   :::column-end:::
   :::column span="":::
      GitHub repository pull request
   :::column-end:::
   :::column span="":::
      Used to link a work item to a GitHub pull request.
   :::column-end:::
:::row-end:::
 
::: moniker-end

::: moniker range="azure-devops"   

<a id= "remote-work-link-types" />

## Remote work link types

Remote work link types are system-defined link types that support linking work items defined in different organizations. Organizations must be managed by the same Azure Active Directory.  

A work item's [*Remote Link Count*](linking-attachments.md#remote-link-count) corresponds to the sum of all links defined with a remote work link type. 


:::row:::
   :::column span="":::
      **Name**
   :::column-end:::
   :::column span="":::
      **Reference name**
   :::column-end:::
   :::column span="":::
      **Usage**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      **Consumes From-Produced For**  
      (Dependency topology)
      ![Consumes From topology conceptual image](media/link-work-items-support-traceability/affected-by-cmmi.png)
      ![Produced For topology conceptual image](media/link-work-items-support-traceability/affects-cmmi.png)
   :::column-end:::
   :::column span="":::
      System.LinkTypes.Remote.Dependency-Forward  
      System.LinkTypes.Remote.Dependency-Reverse  
      Topology type: Dependency  
      Link category: System-defined  
   :::column-end:::
   :::column span="":::
      Use this directional link to create links between work items that have dependencies and are defined in different organizations. Organizations must be managed by the same Azure Active Directory. Typically used to track change requests made to requirements.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      **Remote Related**  
      ![Remote Related topology image](media/link-work-items-support-traceability/related-network.png)
   :::column-end:::
   :::column span="":::
      System.LinkTypes.Remote.Related  
      Topology type: Network  
      Link category: System-defined  
   :::column-end:::
   :::column span="":::
      Use this non-directional link to create links between work items defined in different organizations. Organizations must be managed by the same Azure Active Directory.
   :::column-end:::
:::row-end:::


::: moniker-end  

::: moniker range="< azure-devops" 

## Custom link types

You can create custom link types; export and import definitions of link types; and delete, activate, deactivate, and reactivate types of links. See the following topics:  
- [Link type element reference](../../reference/xml/link-type-element-reference.md) 
- [Manage link types (witadmin)](../../reference/witadmin/manage-link-types.md) 

::: moniker-end



## List link types

To get a list of link types, you can use one of the supported command line tools. 

::: moniker range=">= azure-devops-2020" 

### az boards work-item relation list-type  

You can list link types supported by your organization with the [az boards work-item relationlist-type](/cli/azure/boards/work-item/relation#ext-azure-devops-az-boards-work-item-relation-list-type) command or the [Work Item Relation Types - List](/rest/api/azure/devops/wit/work%20item%20relation%20types/list) REST API command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md). 

```azurecli
az boards work-item relation list-type [--org]
```

#### Optional parameters

- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.


#### Example

The following command lists the work item link types in table format that are defined for the fabrikam organization. For additional formats, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).  

```azurecli
az boards work-item relation list-type --org fabrikam --output table
Name                  ReferenceName                                                Enabled    Usage
--------------------  -----------------------------------------------------------  ---------  ------------
Produces For          System.LinkTypes.Remote.Dependency-Forward                   True       workItemLink
Consumes From         System.LinkTypes.Remote.Dependency-Reverse                   True       workItemLink
Duplicate             System.LinkTypes.Duplicate-Forward                           True       workItemLink
Duplicate Of          System.LinkTypes.Duplicate-Reverse                           True       workItemLink
Referenced By         Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Forward  True       workItemLink
References            Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Reverse  True       workItemLink
Tested By             Microsoft.VSTS.Common.TestedBy-Forward                       True       workItemLink
Tests                 Microsoft.VSTS.Common.TestedBy-Reverse                       True       workItemLink
Test Case             Microsoft.VSTS.TestCase.SharedStepReferencedBy-Forward       True       workItemLink
Shared Steps          Microsoft.VSTS.TestCase.SharedStepReferencedBy-Reverse       True       workItemLink
Successor             System.LinkTypes.Dependency-Forward                          True       workItemLink
Predecessor           System.LinkTypes.Dependency-Reverse                          True       workItemLink
Child                 System.LinkTypes.Hierarchy-Forward                           True       workItemLink
Parent                System.LinkTypes.Hierarchy-Reverse                           True       workItemLink
Related               System.LinkTypes.Related                                     True       workItemLink
Remote Related        System.LinkTypes.Remote.Related                              True       workItemLink
Attached File         AttachedFile                                                 True       resourceLink
Hyperlink             Hyperlink                                                    True       resourceLink
Artifact Link         ArtifactLink                                                 True       resourceLink
```

The default json format provides additional information about the attributes defined for the link types. For example, the information for the link types *Produces For* and *Consumes From* are listed as follows. 

```output
  {
    "attributes": {
      "acyclic": true,
      "directional": true,
      "editable": false,
      "enabled": true,
      "isForward": true,
      "oppositeEndReferenceName": "System.LinkTypes.Remote.Dependency-Reverse",
      "remote": true,
      "singleTarget": true,
      "topology": "dependency",
      "usage": "workItemLink"
    },
    "name": "Produces For",
    "referenceName": "System.LinkTypes.Remote.Dependency-Forward",
    "url": "https://dev.azure.com/mseng/_apis/wit/workItemRelationTypes/System.LinkTypes.Remote.Dependency-Forward"
  },
  {
    "attributes": {
      "acyclic": true,
      "directional": true,
      "editable": false,
      "enabled": true,
      "isForward": false,
      "oppositeEndReferenceName": "System.LinkTypes.Remote.Dependency-Forward",
      "remote": true,
      "singleTarget": true,
      "topology": "dependency",
      "usage": "workItemLink"
    },
    "name": "Consumes From",
    "referenceName": "System.LinkTypes.Remote.Dependency-Reverse",
    "url": "https://dev.azure.com/mseng/_apis/wit/workItemRelationTypes/System.LinkTypes.Remote.Dependency-Reverse"
  },

```

::: moniker-end

::: moniker range="< azure-devops" 

### witadmin listlinktypes 

You can list link types supported for your project collection using the [**witadmin listlinktypes**](../../reference/witadmin/manage-link-types.md) command line tool or the [Work Item Relation Types - List](/rest/api/azure/devops/wit/work%20item%20relation%20types/list) REST API command. 

Here we list the link types for the fabrikam-sever default collection: 

```CLI
C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer>witadmin listlinktypes /collection:http://fabrikam-server/DefaultCollection

Reference Name: Microsoft.VSTS.TestCase.SharedParameterReferencedBy
Names: Referenced By, References
Topology: Dependency
Is Active: True

Reference Name: Microsoft.VSTS.Common.TestedBy
Names: Tested By, Tests
Topology: Dependency
Is Active: True

Reference Name: Microsoft.VSTS.TestCase.SharedStepReferencedBy
Names: Test Case, Shared Steps
Topology: Dependency
Is Active: True

Reference Name: System.LinkTypes.Duplicate
Names: Duplicate, Duplicate Of
Topology: Tree
Is Active: True

Reference Name: System.LinkTypes.Dependency
Names: Successor, Predecessor
Topology: Dependency
Is Active: True

Reference Name: System.LinkTypes.Hierarchy
Names: Child, Parent
Topology: Tree
Is Active: True

Reference Name: System.LinkTypes.Related
Name: Related
Topology: Network
Is Active: True

```

::: moniker-end

### Link type attributes

The following table provides descriptions for each of the link type attributes returned by **Azure Boards** CLI or the REST API.  


:::row:::
   :::column span="":::
      **Attribute**
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Names, `name`
   :::column-end:::
   :::column span="2":::
      Specifies the friendly name assigned to the link type(s). Directional links are defined in pairs, therefore  include a forward and reverse name. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      Reference name, `referenceName`
   :::column-end:::
   :::column span="2":::
      Specifies the name assigned to the link type or link type pair.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `acyclic`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type allows or (`true`) or restricts (`false`) circular relationships. For example, tree type links restrict circular relationships. For more information, see [LinkTypes elements reference](../../reference/xml/link-type-element-reference.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `directional`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type is directional (`true`) or not (`false`).  Directional link types are defined in pairs with a forward and reverse component. For more information, see [LinkTypes elements reference](../../reference/xml/link-type-element-reference.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `editable`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type is editable (`true`) or not (`false`). You can only add and edit custom link types for on-premises deployments using [**witadmin** Manage link type](../../reference/witadmin/manage-link-types.md) command line tool. System link types always have `editable=false`.  
:::row-end:::
:::row:::
   :::column span="":::
      Is Active, `enabled`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type is active (`true`) or not (`false`). You can only custom link types for on-premises deployments using the [**witadmin** Manage link type](../../reference/witadmin/manage-link-types.md) command line tool. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `isForward`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type specifies the forward link  (`true`) or not (`False`) within a link type pair.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `oppositeEndReferenceName`
   :::column-end:::
   :::column span="2":::
      Specifies the reference name of the link type that defines the link in the opposite direction of a link type pair. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `remote`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type supports linking to a remore work item  (`true`) or not (`False`). Link types with `remote=false` require that the target work item resides in the same organization or collection as the origin work item.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `singleTarget`
   :::column-end:::
   :::column span="2":::
      Indicates whether the link type allows for more than one target (`false`) or is restricted to a single target (`true`).  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `topology`
   :::column-end:::
   :::column span="2":::
      Specifies the topology type&mdash; dependency`, `network`, and `tree`. For descriptions, see [Link type topologies and restrictions](../../reference/xml/link-type-element-reference.md#topology). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `usage`
   :::column-end:::
   :::column span="2":::
      Specifies the usage type&mdash;resourceLink or `workItemLink`. The workItemLink` value indicates a link type that links two work items. The `resourceLink` value indicates a link type used to link a work item to a resource, such as a URL or attachment.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      `url`
   :::column-end:::
   :::column span="2":::
      Lists the attributes of the link type in json format.  
   :::column-end:::
:::row-end:::

## Related articles

- [Link work items to track dependencies](link-work-items-support-traceability.md)    
- [Add link to multiple work items](../backlogs/add-link.md)  
- [Query FAQs](query-faqs.yml)
- [Track dependencies using Delivery Plans](../plans/track-dependencies.md)
- [Use mapping to link backlog items to features and epics](../backlogs/organize-backlog.md)
- [Bulk modify links using Excel](../backlogs/office/bulk-add-modify-work-items-excel.md)  
- [Link type topologies and restrictions](../../reference/xml/link-type-element-reference.md#topology)
- [Artifact Link Types API](/rest/api/azure/devops/wit/artifact%20link%20types/list)
