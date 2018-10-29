---
title: Build and test integration queries
titleSuffix: Azure Boards and TFS 
description: Track work by creating queries based on build and test integration fields in Azure Boards and Team Foundation Server (TFS)
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 6e162a82-c98b-4c94-862c-addcdcbc182d
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: sample
ms.date: 04/14/2017  
---


# Query based on build and test integration fields

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Build and test integration work item fields support the following actions:  
-   Associate bugs with the builds where they were found or fixed  
-   Query for bugs associated with a build 
-   Mark test cases as either manual or automated, and store information to support automated test cases  
-   For test cases and shared steps, define the action and validation steps and the data that are used to perform tests.

<!--- include information on limits of querying by test case -->  

 
### Useful filters 
<table width="100%">
<tbody valign="top">
<tr>
<th width="50%">Filter for</th>
<th width="50%">Include these query clauses</th>
</tr>
<tr>
<td>Automated test cases
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ = _ Test Case```  
```And Automation Status _ = _ Automated```  
</td>
</tr>

<tr>
<td>Query-based test suites
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ = _ Test Suite```  
```And Test Suite Type _ = _ Query Based```  
</td>
</tr>


<tr>
<td>Requirement-based test suites
</td>
<td>
&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;```Work Item Type _ = _ Test Suite```  
```And Test Suite Type _ = _ Requirement Based```  
</td>
</tr>

</tbody>
</table>  

## Lid="linked-bugs"/>
##List bugs and the test cases that test them

Open a new query, set the query type to Work items and direct links. Filter for bugs in the top-level and add the filter for Test Cases in the linked work items filter. 

<img src="_img/query-build-integration-bugs-linked-test-cases.png" alt="List bugs and the test cases that test them" style="border: 2px solid #C3C3C3;" />

> [!NOTE]    
>You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases. These items aren't linked together using parent-child link types. You can [view the hierarchy through the **Test>Test Plans** page](../../test/create-a-test-plan.md). 

## Build and test data fields  

The following table describes the fields that are defined in one or more of the test WITs. For information about data types and field attributes, see [Define and modify work item fields](../../reference/xml/define-modify-work-item-fields.md).

To customize a field or pick list, see [Add or modify a field to support queries, reports, and workflow](../../reference/add-modify-field.md).


<table width="100%">
<thead>
<tr>
  <th width="17%">Field name</th>
  <th width="66%">Description</th>
  <th width="17%">Work item type</th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p>Automation Status<sup> 1</sup></p></td>
<td><p>The status of a test case. You can specify the following values:</p>
<ul>
<li><p><strong>Automated</strong></p></li>
<li><p><strong>Not Automated</strong></p></li>
<li><p><strong>Planned</strong></p></li>
</ul>
<p>To run automated tests, see [Automate a test case in Microsoft Test Manager](https://msdn.microsoft.com/library/dd380741.aspx).</p>
<p>Reference name=Microsoft.VSTS.TCM.AutomationStatus, Data type=String</p>
</td>
<td>Test Case</td>

</tr>
<tr>
<td><p>Found In<sup> 2</sup></p></td>
<td><p>Product build number, also known as a revision, in which a bug was found.</p>
<p>Reference name=Microsoft.VSTS.Build.FoundIn, Data type=String</p>
<blockquote>
**Note:** You can also use the **Found in build** link type to link a work item to a build. This link type is available from VSTS and only work with the current build processes (not XAML builds).   
</blockquote>
</td>
<td>Bug</td>

</tr>
<tr>
<td><p>Integration Build<sup> 2</sup></p></td>
<td><p>Product build number that incorporates the code or fixes a bug.</p>
<p>Reference name=Microsoft.VSTS.Build.IntegrationBuild, Data type=String</p>
<blockquote>
**Note:** You can also use the **Integrated in build** link type to link a work item to a build. This link type is available from VSTS and only work with the current build processes (not XAML builds).  
</blockquote>
</td>
<td>All</td>
</tr>

<tr>
<td><p>Issue</p></td>
<td><p>Indicates that the Shared Steps is associated with an expected result. Allowed values are <strong>Yes</strong> and <strong>No</strong>. </p>
<p>Reference name=Microsoft.VSTS.Common.Issue, Data type=String</p></td>
<td>Shared Steps</td>
</tr>
<tr>
<td><p>Parameters<sup> 3</sup></p></td>
<td><p>Contains the parameters to use when running a manual test. </p>
<p>Microsoft.VSTS.TCM.Parameters, Data type=HTML</p></td>
<td>Shared Parameters, Shared Steps, Test Case</td>
</tr>
<tr>
<td><p>Steps</p></td>
<td><p>The action and validation steps that are required to perform the test.</p>
<p>Microsoft.VSTS.TCM.Steps, Data type=TestStepsControl</p></td>
<td>Shared Steps, Test Case</td>
</tr>
<tr>
<td><p>System Info</p></td>
<td><p>Information about the software and system configuration that is relevant to the test.</p>
<p>Microsoft.VSTS.TCM.SystemInfo, Data type=HTML</p></td>
<td>Bug, Feedback Response</td>
</tr>
<tr>
  <td>
Repro Steps (or Steps to reproduce) 
  </td>
  <td>
    <p>The steps that are required to reproduce unexpected behavior. Capture enough information so that other team members can understand the full impact of the problem as well as whether they have fixed the bug. This includes actions taken to find or reproduce the bug and expected behavior.
</p> 
	<p>Reference name=Microsoft.VSTS.TCM.ReproSteps, Data type=HTML</p>
  </td>
<td>Bug</td>
</tr>

<tr>
<td><p>Test Suite Type<sup> 1,4</sup></p></td>
<td><p>The test suite category. Allowed values are:</p>
<ul>
<li><p><strong>Query Based</strong>: Use to group together test cases that have a particular characteristic - for example, all the tests that have Priority=1. The suite will automatically include every test case that is returned by the query that you define.</p></li>
<li><p><strong>Static</strong>: Use to group together test cases designed to track the test status of backlog items. Each test case that you add to a requirement-based test suite is automatically linked to the backlog item.</p></li>
<li><p><strong>Requirement Based</strong>: Use to group together test cases with any characteristics or test suites.</p></li>
</ul>
<p>For more information, see [Create a test plan](../../test/create-a-test-plan.md).</p> 

	<p>Reference name=Microsoft.VSTS.TCM.TestSuiteType, Data type=String</p>
  </td>
<td><p>Test Suite</p></td>
</tr>
</tbody>
</table>

**Notes**  
1.  Do not customize the pick list for these fields. The system accepts only those values listed.  
2.  By adding a `GLOBALLIST` element to the `FIELD` definition, you can provide a drop-down menu of builds that users can choose from. To learn how, see [Fields that support integration with test, build, and version control](https://msdn.microsoft.com/library/ms194965.aspx).  
3.  Requires TFS 2013.2 or TFS 2013.3 to be installed on the application-tier server and existing projects to be updated to support Shared Parameters. To learn more, see Configure features after a TFS upgrade.  
4.  Requires TFS 2013.3 to be installed on the application-tier server and existing projects to be updated to support Test Plan and Test Suite.

## Additional fields

The following fields do not appear on work item forms, but these fields are tracked for test cases or test suites. You can use some of these fields to filter queries and create reports. (None of these fields are added to the data warehouse nor indexed.) 



<table width="100%">
<thead>
<tr>
  <th width="17%">Field name</th>
  <th width="66%">Description</th>
  <th width="17%">Work item type</th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><p>Automated Test Storage</p></td>
<td><p>The assembly that contains the test that automates the test case.</p>
	<p>Reference name=Microsoft.VSTS.TCM.AutomatedTestStorage, Data type=String</p></td>
<td><p>Test Case</p></td>
</tr>
<tr>
<td><p>Automated Test Type</p></td>
<td><p>The type of test that automates the test case.</p>
<p>Reference name=Microsoft.VSTS.TCM.AutomatedTestType, Data type=String</p>
</td>
<td>Test Case</td>
</tr>

<tr>
<td><p>AutomatedTestId</p></td>
<td><p>The ID of the test that automates the test case. </p>
<p>Reference name=Microsoft.VSTS.TCM.AutomatedTestId, Data type=String</p></td>
<td>Test Case</td>

</tr>
<tr>
<td><p>AutomatedTestName</p></td>
<td><p>The name of the test that is used to automate the test case.</p>
<p>Reference name=Microsoft.VSTS.TCM.AutomatedTestName, Data type=String</p></td>
<td><p>Test Case</p></td>

</tr>
<tr>
<td><p>LocalDataSource</p></td>
<td><p>The local data source that supports the test. </p>
<p>Reference name=Microsoft.VSTS.TCM.LocalDataSource, Data type=HTML</p></td>
<td><p>Test Case</p></td>
 
</tr>
<tr>
<td><p>Query Text</p></td>
<td><p>Field used to capture the query defined for a Query-based suite type.</p>
<p>Reference name=Microsoft.VSTS.TCM.QueryText, Data type=PlainText</p></td>
<td><p>Test Suite</p></td>
</tr>
<tr>
<td><p>Test Suite Audit <sup> 1</sup></p></td>
<td><p>Tracks additional operations performed when modifying a test suite, for example: adding tests to a test suite or changing configurations. This field can be viewed through the History tab or through a separate query. There will be a consolidated history view, including changes performed to work items field and changes resulting from related artifacts such as test points and configurations.</p>
<p>Reference name=Microsoft.VSTS.TCM.TestSuiteAudit, Data type=PlainText</p></td>
<td>Test Suite</td>
</tr>

<tr>
<td><p>Test Suite Type ID <sup>1, 2</sup></p></td>
<td><p>A system assigned value that corresponds to the test suite category and only applicable to test suites. Assigned values are:</p>
<ul>
<li><p><strong>1</strong> (Static)</p></li>
<li><p><strong>2</strong> (Query-based)</p></li>
<li><p><strong>3</strong> (Requirement- based)</p></li>
</ul>
<p>Reference name=Microsoft.VSTS.TCM.TestSuiteTypeId, Data type=Integer</p></td>
<td>Test Suite</td>
</tr>
</tbody>
</table>

**Notes**  
1.  Requires TFS 2013.3 to be installed on the application-tier server and existing projects to be updated to support Test Plan and Test Suite.  
2.  Do not customize the pick list for these fields. The system accepts only those values listed.

## Related articles

- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md) 
- [Linking, traceability, and managing dependencies](link-work-items-support-traceability.md)  
- [Link and attachment queries](linking-attachments.md)

::: moniker range="tfs-2013"  
### Availability of test work item types 

Test Manager and the test work item types (WITs) use the following fields to track test plans, progress, and results. The availability of the WITs is based on the version of TFS installed on your application-tier. To learn more about using these WITs, see [Create a test plan](../../test/create-a-test-plan.md).

|TFS 2013.0|TFS 2013.2|TFS 2013.3 and later versions|
|---|---|---|
|<ul><li>Bug</li><li>Shared Steps</li><li>Test Case</li></ul>|<ul><li>Bug</li><li>Shared Parameters</li><li>Shared Steps</li><li>Test Case</li></ul>|<ul><li>Bug</li><li>Shared Parameters</li><li>Shared Steps</li><li>Test Case</li><li>Test Plan</li><li>Test Suite</li></ul>|

To learn more about upgrading an existing project to get WITs that your project currently doesn't have, see [Configure features after an upgrade](../../reference/configure-features-after-upgrade.md).

::: moniker-end  