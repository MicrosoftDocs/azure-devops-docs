---
title: Build and test integration queries
titleSuffix: Azure DevOps
description: Learn how to track work by creating queries based on build and test integration fields in Azure Boards.
ms.service: azure-devops-boards
ms.custom: cross-service  
ms.assetid: 6e162a82-c98b-4c94-862c-addcdcbc182d
ms.author: chcomley
author: chcomley
ms.topic: example-scenario
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
---


# Create a query based on build and test integration fields

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use work item fields that support build and test integration to improve traceability, analyze quality trends, and automate test-related workflows. Typical scenarios include:

- Associate bugs with the specific builds where they were discovered or resolved.
- Query bugs by build to identify trends and prioritize fixes.
- Mark test cases as Manual or Automated and track automation metadata.
- Define action and validation steps for test cases and shared steps so teams can run and verify tests reliably.

This article explains how to use these fields and offers sample queries and tips.

## Prerequisites

| Area | Permission / role | What it allows |
|---|---|---|
| Project-level | Contributors | Create and edit queries. |
| Project-level | Readers | View queries (can't create or edit). |
| Project-level | Project Administrators | Full control over project settings, including queries. |
| Test artifacts | Manage Test Plans | Create, edit, and delete test plans. |
| Test artifacts | Manage Test Suites | Create, edit, and delete test suites. |
| Test artifacts | Edit work items in this node | Add or edit test-specific work items such as test cases and test suites. |

> [!NOTE]
> - Some test permissions are scoped at the test plan or area node; project administrators can assign these permissions.
> - To run or automate queries across projects, ensure you have the required cross-project permissions or use a service account with the appropriate access.

## Supported operators and macros

Most build and test integration fields use String, PlainText, or HTML data types. Use the following operators and macros when you specify query clauses for text or rich-text fields.

:::row:::
   :::column span="1":::
   **Data type**
   :::column-end:::
   :::column span="3":::
   **Supported operators and macros**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
    **Rich-text (HTML)** and  
    **Multi-line text (PlainText)**
   :::column-end:::
   :::column span="3":::
   `Contains Words`, `Does Not Contain Words`, `Is Empty`, `Is Not Empty`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **Single-line text (String)**
   :::column-end:::
   :::column span="3":::
   `= , <> , > , < , >= , <= , =[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]`, `Contains`, `Does Not Contain`, `In`, `Not In`, `In Group`, `Not In Group`, `Was Ever`.  
   **Macros**: `[Any]` (valid with **Work Item Type**); `@Project` (valid with **Team Project**). The system defaults to the current project when appropriate. See [Query across projects](using-queries.md) for cross-project examples.
   :::column-end:::
:::row-end:::

## Useful filters

:::row:::
   :::column span="1":::
   **Filter for**
   :::column-end:::
   :::column span="1":::
   **Include these query clauses**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Automated test cases
   :::column-end:::
   :::column span="1":::
   `Work Item Type = Test Case`  AND `Automation Status = Automated`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Query-based test suites
   :::column-end:::
   :::column span="1":::
   `Work Item Type = Test Suite`  AND `Test Suite Type = Query Based`
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Requirement-based test suites
   :::column-end:::
   :::column span="1":::
   `Work Item Type = Test Suite`  AND `Test Suite Type = Requirement Based`
   :::column-end:::
:::row-end:::

<a id="linked-bugs"></a>

## List bugs and the test cases that test them

Create a new query, set the query type to Work items and direct links. Filter for bugs at the top level and add a linked work items filter for Test Cases.

![Screenshot that shows bugs and their linked test cases.](media/query-build-integration-bugs-linked-test-cases.png)

> [!NOTE]    
> You can't construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases because those artifacts aren't connected by parent-child link types. To view that hierarchy, open the **Test > Test Plans** page (see [Create a test plan](../../test/create-a-test-plan.md)).

<a id="fields"></a>

## Build and test data fields

The following table describes fields that appear in one or more test-related work item types. For information about data types and field attributes, see [Work item fields and attributes](../work-items/work-item-fields.md).

To customize a field or picklist, see [Add or modify a field to support queries, reports, and workflow](../../reference/add-modify-field.md).

:::row:::
     :::column span="1":::
   **Field name**
   :::column-end:::
     :::column span="2":::
   **Description**
   :::column-end:::
     :::column span="1":::
   **Work item type**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
   Automation Status<sup>1</sup>
   :::column-end:::
   :::column span="2":::
   The status of a test case. Values: **Automated**, **Not Automated**, **Planned**. To run automated tests, see [Run automated tests from test plans](../../test/run-automated-tests-from-test-hub.md).  
   Reference name=`Microsoft.VSTS.TCM.AutomationStatus`, Data type=String
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Found In<sup>2</sup>
   :::column-end:::
   :::column span="2":::
   Product build number (revision) in which a bug was found. Reference name=`Microsoft.VSTS.Build.FoundIn`, Data type=String.  
   > [!NOTE]  
   > Use the **Found in build** link type to link a work item to a build. This link type works with current build processes (Azure Pipelines and classic build definitions); it does not apply to legacy XAML builds.
   :::column-end:::
   :::column span="1":::
   Bug
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Integration Build<sup>2</sup>
   :::column-end:::
   :::column span="2":::
   Product build number that incorporates the fix. Reference name=`Microsoft.VSTS.Build.IntegrationBuild`, Data type=String.  
   > [!NOTE]  
   > Use the **Integrated in build** link type to link a work item to a build. This link type works with current build processes (Azure Pipelines and classic build definitions); it does not apply to legacy XAML builds.
   :::column-end:::
   :::column span="1":::
   All
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Issue
   :::column-end:::
   :::column span="2":::
   Indicates whether Shared Steps are associated with an expected result. Allowed values: **Yes**, **No**. Reference name=`Microsoft.VSTS.Common.Issue`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Shared Steps
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Parameters
   :::column-end:::
   :::column span="2":::
   Contains parameters used when running a manual test. Reference name=`Microsoft.VSTS.TCM.Parameters`, Data type=HTML.
   :::column-end:::
   :::column span="1":::
   Shared Parameters, Shared Steps, Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Steps
   :::column-end:::
   :::column span="2":::
   Action and validation steps required to run the test. Reference name=`Microsoft.VSTS.TCM.Steps`, Data type=HTML.
   :::column-end:::
   :::column span="1":::
   Shared Steps, Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   System Info
   :::column-end:::
   :::column span="2":::
   System and environment information relevant to the test. Reference name=`Microsoft.VSTS.TCM.SystemInfo`, Data type=HTML.
   :::column-end:::
   :::column span="1":::
   Bug, Feedback Response
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Repro Steps (Steps to reproduce)
   :::column-end:::
     :::column span="2":::
   Steps needed to reproduce unexpected behavior. Capture enough information for others to reproduce and validate fixes. Reference name=`Microsoft.VSTS.TCM.ReproSteps`, Data type=HTML.
   :::column-end:::
   :::column span="1":::
   Bug
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Test Suite Type<sup>1</sup>
   :::column-end:::
   :::column span="2":::
   Category of test suite. Allowed values: **Query Based**, **Requirement Based**, **Static**. For more, see [Create a test plan](../../test/create-a-test-plan.md). Reference name=`Microsoft.VSTS.TCM.TestSuiteType`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::

> [!NOTE]  
> 1. Do not customize the pick list for these fields — the system and integrations expect the values listed.  
> 2. By adding a `GLOBALLIST` element to a `FIELD` definition, you can provide a drop-down menu of builds. See [Builds and global list autopopulation](#global-list).

## Other fields

The following fields don't appear on work item forms but are tracked for test cases or test suites. You can use some of them to filter queries and create reports. (These fields aren't added to the data warehouse nor indexed.)

:::row:::
     :::column span="1":::
   **Field name**
   :::column-end:::
     :::column span="2":::
   **Description**
   :::column-end:::
     :::column span="1":::
   **Work item type**
   :::column-end:::
:::row-end:::
--- 
:::row:::
   :::column span="1":::
   Automated Test Storage
   :::column-end:::
   :::column span="2":::
   The assembly that contains the test that automates the test case. Reference name=`Microsoft.VSTS.TCM.AutomatedTestStorage`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Automated Test Type
   :::column-end:::
   :::column span="2":::
   The type of test that automates the test case. Reference name=`Microsoft.VSTS.TCM.AutomatedTestType`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   AutomatedTestId
   :::column-end:::
   :::column span="2":::
   The ID of the automated test. Reference name=`Microsoft.VSTS.TCM.AutomatedTestId`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   AutomatedTestName
   :::column-end:::
   :::column span="2":::
   The name of the automated test. Reference name=`Microsoft.VSTS.TCM.AutomatedTestName`, Data type=String.
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   LocalDataSource
   :::column-end:::
   :::column span="2":::
   The local data source used by the test. Reference name=`Microsoft.VSTS.TCM.LocalDataSource`, Data type=HTML.
   :::column-end:::
   :::column span="1":::
   Test Case
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Query Text
   :::column-end:::
   :::column span="2":::
   Field used to capture the query defined for a Query-based suite type. Reference name=`Microsoft.VSTS.TCM.QueryText`, Data type=PlainText.
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Test Suite Audit
   :::column-end:::
   :::column span="2":::
   Tracks operations when modifying a test suite (for example, adding tests or changing configurations). Viewable through the History tab or a query. Reference name=`Microsoft.VSTS.TCM.TestSuiteAudit`, Data type=PlainText.
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Test Suite Type ID <sup>1</sup>
   :::column-end:::
   :::column span="2":::
   System-assigned value that corresponds to the test suite category: **1** (Static), **2** (Query-based), **3** (Requirement-based). Reference name=`Microsoft.VSTS.TCM.TestSuiteTypeId`, Data type=Integer.
   :::column-end:::
   :::column span="1":::
   Test Suite
   :::column-end:::
:::row-end:::


> [!NOTE]  
> 1. Do not customize the pick list for these fields — the system and integrations expect the values listed.

<a id="tf-build"></a>

### Fields that integrate with Team Foundation Build and Azure Pipelines

Team Foundation Build is the on-premises build system used with older Azure DevOps Server releases. Azure Pipelines provides cloud-hosted build and pipeline features in Azure DevOps Services. Both systems integrate build metadata with work items when builds run and when work items are resolved in builds.

The two fields commonly used for build integration are **Found In** and **Integration Build**. When present in a WIT definition, they let a build system associate work items with the relevant build numbers.

You can add these fields to a WIT definition:

> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD name="Found In" refname="Microsoft.VSTS.Build.FoundIn" type="String" reportable="dimension">
>     <HELPTEXT>Product build number (revision) in which this item was found</HELPTEXT>
>         <SUGGESTEDVALUES>
>           <LISTITEM value="&lt;None&gt;" />
>         </SUGGESTEDVALUES>
> </FIELD>
> <FIELD name="Integration Build" refname="Microsoft.VSTS.Build.IntegrationBuild" type="String" reportable="dimension">
>     <HELPTEXT>Product build number this bug was fixed in</HELPTEXT>
>         <SUGGESTEDVALUES>
>           <LISTITEM value="&lt;None&gt;" />
>         </SUGGESTEDVALUES>
> </FIELD>
> ```

When the **Found In** field exists in a WIT definition, a compatible build process can create a work item when a build fails, and set **Found In** to the build number. When **Integration Build** exists, a compatible build process can update work items that were resolved by a build with the corresponding build number.

<a id="global-list"></a>

### Builds and global list autopopulation

The first time you queue a build for a project using Team Foundation Build or Azure Pipelines, the system creates a global list named `Build - <ProjectName>`. Each build run adds a `LISTITEM` entry for that build. The global list uses the project display name and can be referenced in a `GLOBALLIST` element in a `FIELD` definition to provide a drop-down of builds.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD name="Found In" refname="Microsoft.VSTS.Build.FoundIn" type="String" reportable="dimension">
>     <HELPTEXT>Product build number (revision) in which this item was found</HELPTEXT>
>         <SUGGESTEDVALUES>
>           <LISTITEM value="&lt;None&gt;" />
>         </SUGGESTEDVALUES>
>         <SUGGESTEDVALUES expanditems="true" filteritems="excludegroups">
>           <GLOBALLIST name="Builds - TeamProjectName" />
>         </SUGGESTEDVALUES>
> </FIELD>
> ```

### Fields that integrate with Test Plans

Test Plans can create a bug or another work item when a test fails. When you add a work item this way, the test system captures environment details and reproduction steps in the **System Info** and **Repro Steps** fields.

> [!div class="tabbedCodeSnippets"]
> ```XML
> <FIELD name="System Info" refname="Microsoft.VSTS.TCM.SystemInfo" type="HTML" />
> <FIELD name="Repro Steps" refname="Microsoft.VSTS.TCM.ReproSteps" type="HTML" />
> ```

### Fields that integrate with Team Foundation Version Control (TFVC)

TFVC supports associating or resolving work items during check-in. When you link a work item from the check-in window and the action is supported, TFVC applies the configured state transition to the work item.

> [!NOTE]
> When you use the **Checkin** action, set appropriate *from* and *to* states for the transition you expect.

For more information, see [Automate field assignments based on State, Transition, or Reason](/previous-versions/azure/devops/reference/xml/automate-field-assignments-state-transition-reason).

## Limitations

Key limitations when querying by test case:

- Hierarchical views: You can’t construct a query that shows a hierarchical view of Test Plans, Test Suites, and Test Cases because those artifacts aren't connected by parent-child link types.
- Query-based test suites: Query-based suites include every test case returned by the query; ensure your query is precise to avoid unintended inclusions.
- Field limitations: Some detailed execution results aren't available as standard fields and might require custom reporting or API usage.
- Performance and rate limits: Azure DevOps enforces request and resource limits; nonoptimized queries or excessive API calls can cause delays or throttling.
- Test case linking: Test cases don’t automatically link to other work items in a way that supports complex hierarchical queries.

## Related content

- [Work item field index](../work-items/guidance/work-item-field.md)  
- [Drive Git development from a work item](../backlogs/connect-work-items-to-git-dev-ops.md) 
- [Link work items to other objects](../backlogs/add-link.md)  
- [Link and attachment queries](linking-attachments.md)
