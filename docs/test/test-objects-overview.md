---
title: Test objects and terms
titleSuffix: Azure Test Plans
description: Understand the different test objects and terms that support manual or automated testing.
ms.technology: devops-test
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2015'
ms.date: 09/15/2021
---


# Test objects and terms

Read this article to gain an understanding of the objects and terms used in manual and exploratory testing. 


<a name="testplans"></a>

## Test-specific work item types 

To support manual and automated testing, you add and group three main types of test-specific work item types: **Test Plans**, **Test Suites**, and **Test Cases**. To support sharing of various test steps and test parameters, you define **Shared Steps** and **Shared Parameters**. These objects are stored in the work tracking data store as specific types of work items. 


![Test management work item types](../boards/work-items/guidance/media/ALM_PT_WITS_TestExperience.png)

The following table describes the work item types used to support the Azure DevOps test experience. Test-specific work items link together using the link types shown in the previous image.  
 
 
:::row:::
   :::column span="1":::
     **Work item type**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
     **Test plans**
   :::column-end:::
   :::column span="3":::
      Are used to group test suites and individual test cases. To define a test plan, see [Create test plans and test suites](create-a-test-plan.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test suite**
   :::column-end:::
   :::column span="3":::
      Group test cases into separate testing scenarios within a single test plan. Grouping test cases makes it easier to see which scenarios are complete. When creating a test suite, you can specify one of three types: 
      - **Static test suites**: Used to group test cases under a single test suite. 
      - [**Requirement-based suites**](create-a-test-plan.md#backlog): Select one or more requirements from a query which are then linked to the test suite. 
      - [**Query-based suites**](reference-qa.md#query-based-suites): Select one or more test cases which are then linked to the test suite.    
      > [!TIP]
      > The [**Test Suite Type**](../boards/queries/build-test-integration.md) read-only field indicates the type of suite selected. To add test suites, see [Create test plans and test suites](create-a-test-plan.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test cases**
   :::column-end:::
   :::column span="3":::
      Define the steps used to test code or an app for deployment. Define test cases to ensure your code works correctly, has no errors, and meets business and customer requirements. You can add individual test cases to a test plan without creating a test suite. More than one test suite or test plan can refer to a test case. You can effectively reuse test cases without needing to copy or clone them for each suite or plan. There are two types of test cases: 
      - [**Manual**](create-test-cases.md): Test cases that define different steps that you run using Test Runner or other supported client. 
      - [**Automated**](run-automated-tests-from-test-hub.md): Test cases that are designed to run within an Azure Pipeline or 
      > [!TIP]
      > You can create a test case that automatically links to a requirement&mdash;User Story ([Agile](../boards/work-items/guidance/agile-process.md)), Product Backlog Item ([Scrum](../boards/work-items/guidance/scrum-process.md)), Requirement ([CMMI](../boards/work-items/guidance/cmmi-process.md)), or Issue ([Basic](../boards/get-started/plan-track-work.md))&mdash;when you create a test from the Kanban board. To learn more, see [Add, run, and update inline tests](../boards/boards/add-run-update-tests.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Shared steps**
   :::column-end:::
   :::column span="3":::
      Use to share steps between multiple test cases. For example, log-in and verify steps for signing into an application are steps that can be shared across a number of test cases. To learn how, see [Share steps between test cases](share-steps-between-test-cases.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Shared parameters**
   :::column-end:::
   :::column span="3":::
      Use to specify different parameters for executing test a test step within a test case. To learn how, see [Repeat a test with different data](repeat-test-with-different-data.md). 
   :::column-end:::
:::row-end:::
---

## Common fields to all test-specific work item types 

The following fields and tabs appear in most work items. Each tab is used to track specific information, such as :::image type="icon" source="../boards/backlogs/media/icon-history-tab-wi.png" border="false"::: history, :::image type="icon" source="../boards/backlogs/media/icon-links-tab-wi.png" border="false"::: links, or :::image type="icon" source="../boards/backlogs/media/icon-attachments-tab-wi.png" border="false"::: attachments. These three tabs provide a history of changes, view of linked work items, and ability to view and attach files.  

The only required field for all work item types is **Title**. When the work item is saved, the system assigns it a unique **ID**. The form highlights required field in yellow. For information about test-related fields, see [Query based on build and test integration fields](../boards/queries/build-test-integration.md). For all other fields, see [Work item field index](../boards/work-items/guidance/work-item-field.md). 

  
 
:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Usage**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Title](../boards/queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Enter a description of 255 characters or less. You can always modify the title later.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Assigned To](../boards/queries/query-by-workflow-changes.md)
   :::column-end:::
   :::column span="3":::
      Assign the work item to the team member responsible for performing the work. Depending on the context you are working in, the drop-down menu lists only team members or contributors to the project.
      > [!NOTE]  
      > You can only assign work to a single user. If you need to assign work to more than one user, add a work item for each user and distinguish the work to be done by title and description. The Assigned To field only accepts user accounts that have been [added to a project or team](../organizations/security/add-users-team-project.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [State](../boards/queries/query-by-workflow-changes.md)
   :::column-end:::
   :::column span="3":::
      When the work item is created, the State defaults to the first state in the workflow. As work progresses, update it to reflect the current status. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Reason](../boards/queries/query-by-workflow-changes.md)
   :::column-end:::
   :::column span="3":::
      Use the default first. Update it when you change state as need. Each State is associated with a default reason. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Area (Path)](../boards/queries/query-by-area-iteration-path.md)
   :::column-end:::
   :::column span="3":::
      Choose the area path associated with the product or team, or leave blank until assigned during a planning meeting. To change the dropdown list of areas, see [Define area paths and assign to a team](../organizations/settings/set-area-paths.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Iteration (Path)](../boards/queries/query-by-workflow-changes.md)
   :::column-end:::
   :::column span="3":::
      Choose the sprint or iteration in which the work is to be completed, or leave it blank and assign it later during a planning meeting. To change the drop-down list of iterations, see [Define iteration paths and configure team iterations](../organizations/settings/set-iteration-paths-sprints.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      [Description](../boards/queries/titles-ids-descriptions.md)
   :::column-end:::
   :::column span="3":::
      Provide enough detail to create shared understanding of scope and support estimation efforts. Focus on the user, what they want to accomplish, and why. Don't describe how to develop the product. Do provide sufficient details so that your team can write tasks and test cases to implement the item.
   :::column-end:::
:::row-end:::
---


## Common controls to all test-specific work item types 

Several controls appear in several test-specific work items as described in the following table. If these controls are not of interest, you can hide them from the work item form layout as described in [Add and manage fields (Inheritance process)](../organizations/settings/work/customize-process-field.md#hide-a-field-or-custom-control).

 
:::row:::
   :::column span="":::
      **Control**
   :::column-end:::
   :::column span="3":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
       **Deployment**
   :::column-end:::
   :::column span="3":::
       Provides insight into whether a feature or user story has been deployed and to what stage. You gain visual insight into the status of a work item as it is deployed to different release environments as well as quick navigation to each release stage and run.
       This control is available from **Test Plans**, **Test Suites**, and **Test Cases**. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      **Development**
   :::column-end:::
   :::column span="3":::
       Records all Git development processes that support completion of the work item. It is typically used to [drive Git development from a requirement](../boards/backlogs/connect-work-items-to-git-dev-ops.md). This control supports traceability, providing visibility into all the branches, commits, pull requests, and builds related to the work item.
       This control is available from **Test Plans**, **Test Suites**, and **Test Cases**. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      **Related Work**
   :::column-end:::
   :::column span="3":::
       Control used in **Test Plans**, **Test Suites**, and **Test Cases** to show or link to other work items such as requirements and bugs, usually through the **Related** link type. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::
      **Test Cases**
   :::column-end:::
   :::column span="3":::
       Control used in **Shared Steps** and **Shared Parameters** work items to indicate or link to **Test Cases**. 
   :::column-end:::
:::row-end:::
---

## Customize test-specific work item types

For the Inherited process, you can customize test plans, test suites, and test cases. For the On-premises XML process, you can customize all test-specific work item types. To learn more, see [Customize work tracking objects to support your team's processes](../reference/customize-work.md). 
 
## Permissions required to modify work items 

There are a number of permissions that control select features for viewing, modifying, or deleting work items. These include those listed in the following table.

::: moniker range=">= azure-devops-2019"
> [!NOTE]   
> The **Change work item type** permission doesn't apply to test-specific work items. Even if you choose this feature from the work item form, changing the work item type is disallowed. 
::: moniker-end


:::row:::
   :::column span="2":::
      **Permission** 
   :::column-end:::
   :::column span="1":::
     **Level**
   :::column-end:::
   :::column span="2":::
     **Task**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **View test runs**  
      **Create test runs**  
      **Delete test runs** 
   :::column-end:::
   :::column span="1":::
     Project-level
   :::column-end:::
   :::column span="2":::
      To view, create, or delete test runs, you must be granted the corresponding permission.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Manage test configurations**  
      **Manage test environments**  
   :::column-end:::
   :::column span="1":::
     Project-level
   :::column-end:::
   :::column span="2":::
      Manage test configurations or test environments, you must be granted the corresponding permission. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Create tag definition**  
   :::column-end:::
   :::column span="1":::
     Project-level
   :::column-end:::
   :::column span="2":::
     Add new tags to test-based work items.
   :::column-end:::
:::row-end:::
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="2":::
      **Delete and restore work items**  
   :::column-end:::
   :::column span="1":::
     Project-level
   :::column-end:::
   :::column span="2":::
     Delete test-specific work items and restore them from the Recycle bin.
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="2":::
      **Permanently delete work items**  
   :::column-end:::
   :::column span="1":::
     Project-level
   :::column-end:::
   :::column span="2":::
     Permanently delete test-specific work items from the data store.
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="2":::
      **View work items in this node**  
      **Edit work items in this node**   
   :::column-end:::
   :::column span="1":::
     Area Path
   :::column-end:::
   :::column span="2":::
     View or add or modify test plans, test suites, test cases, or other test-based work item types requires the corresponding permission.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Manage test plans**  
   :::column-end:::
   :::column span="1":::
     Area Path
   :::column-end:::
   :::column span="2":::
      Modify test plan properties such as test run and test outcome settings.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="2":::
      **Manage test plans**  
   :::column-end:::
   :::column span="1":::
     Area Path
   :::column-end:::
   :::column span="2":::
     Create and delete test suites; add, and remove test cases from test suites; change test configurations associated with test suites; and modify a test suite hierarchy (move a test suite).
   :::column-end:::
:::row-end:::


To learn more about setting these permissions, see [Set permissions and access for testing](../organizations/security/set-permissions-access-test.md) and [Set permissions at the project- or collection-level](../organizations/security/set-project-collection-level-permissions.md). 

## Export, import, and bulk update of test-specific work items 

As with other work items, you can bulk edit test-specific work items. To learn more, see the following articles:  

::: moniker range=">= azure-devops-2020"
- [Bulk modify work items](../boards/backlogs/bulk-modify-work-items.md). 
- [Navigate Test Plans, Test suites context menu options](navigate-test-plans.md#test-suites-context-menu-options)
::: moniker-end

::: moniker range="< azure-devops-2020"
- [Bulk modify work items](../boards/backlogs/bulk-modify-work-items.md). 
- [FAQs for manual testing, Can I export the test plan to share or review offline](reference-qa.md#q-can-i-export-the-test-plan-to-share-or-review-offline)
::: moniker-end

## Test terms 

The following table describes several terms used in manual and exploratory testing. 
 

:::row:::
   :::column span="1":::
     **Term**
   :::column-end:::
   :::column span="3":::
      **Definition**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
     **Configuration**
   :::column-end:::
   :::column span="3":::
      Specifies the unique environment used to test an application or code. To define a test configuration, you first define the configuration variables, and then define the test configuration. For details, see [Test different configurations](test-different-configurations.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Configuration variable**
   :::column-end:::
   :::column span="3":::
      Specifies a single aspect of a test environment such as an operating system, processing power, web browser, or other variation. For details, see [Test different configurations](test-different-configurations.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Outcome** 
   :::column-end:::
   :::column span="3":::
      Outcome of a test point as marked by the tester upon executing the test. Valid options are: 
      - **Active** (Unspecified)
      - **Pass Test**
      - **Fail Test**
      - **Block Test**
      - **Not Applicable**  
      ---
      To learn more, see [Repeat a test with different data](repeat-test-with-different-data.md). Note that pipeline test outcomes differ as described in [About pipeline tests](../pipelines/test/test-glossary.md). 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test points**
   :::column-end:::
   :::column span="3":::
      Test cases by themselves are not executable. When you add a test case to a test suite then test point(s) are generated. A test point is a unique combination of test case, test suite, configuration, and tester. For example, if you have a test case named Test login functionality and you add two configurations for the *Edge* and *Chrome* browsers, you have two test points. You can execute or run each of these test points. On execution, test results are generated. Through the test results view, or execution history, you can see all executions of a test point. The latest execution for the test point is what you see in the Execute tab.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test run settings**
   :::column-end:::
   :::column span="3":::
      Dialog used to associate test plans with a build or release pipelines.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Test outcome settings**
   :::column-end:::
   :::column span="3":::
      Dialog used to choose how test outcomes in multiple suites under the same test plans should be configured.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
     **Traceability**
   :::column-end:::
   :::column span="3":::
      Ability to trace test results with the requirements and bugs that they are linked to.  
   :::column-end:::
:::row-end:::
  

## Related articles

- [Exploratory and manual testing scenarios and capabilities](overview.md)  
- [Navigate Test Plans](navigate-test-plans.md)
- [About pipeline tests](../pipelines/test/test-glossary.md) 