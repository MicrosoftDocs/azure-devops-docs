---
title: Manage test failure type
description: Learn about managing failure type in Azure Test Plans. You can add, remove or edit the default test failure types.
ms.assetid: 
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: ravikum
author: raviLiftr
monikerRange: 'azure-devops'
ms.date: 08/25/2023
---

# Manage test failure type

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Azure Test Plans provides the functionality to customize the failure types of any test case beyond the default values. A **failure type** is an artifact that helps to mark test case failures into defined categories such as **regression issue** or **known issue**. While this categorization of failure types is helpful, users might want to add their own custom failure type beyond the default values. This creates a more customized experience for specific user needs in the Azure DevOps project. This article walks through the steps of defining a custom failure type using the new REST API provided. 

## How to view the default failure types

Failure type categorization is part of the post-test run experience in Azure Test Plans. This feature is only applicable to test cases that have been marked as **Failed**. To mark a test failure using the default failure type, follow the below steps:

1. Navigate to Azure Test Plans from your Azure DevOps project. Open a Test suite containing test cases or create a new test case inside a suite.

   :::image type="content" source="media/manage-test-failure-type/azure-test-plan-navigation.png" alt-text="Screenshot of navigating to the Azure Test plans from the navigation menu.":::

2. Navigate to Execute tab of the given test suite.

   :::image type="content" source="media/manage-test-failure-type/execute-tab-with-active-test-cases.png" alt-text="Screenshot of execute tab view with active test cases.":::

3. Mark a test case as **Failed**. This creates a new test run for against the test case.

   :::image type="content" source="media/manage-test-failure-type/execute-tab-in-test-suite.png" alt-text="Screenshot of execute tab view inside a test suite.":::

4. Goto **Runs** blade from the Test Plans menu. Click on the respective test run from the list shown. 

   :::image type="content" source="media/manage-test-failure-type/list-of-all-test-runs.png" alt-text="Screenshot of list of all test runs.":::

5. **Run Summary** tab is shown by default. Click on **Test results** tab.

   :::image type="content" source="media/manage-test-failure-type/run-summary-tab-test-run.png" alt-text="Screenshot of run summary tab test run.":::

6. Click on **Update Analysis** and a dialog box appears. Users can choose the failure type for the test case from the dropdown menu. Refer to the screenshot for the failure type values shown by default.

   :::image type="content" source="media/manage-test-failure-type/view-default-failure-types.png" alt-text="Screenshot of view default failure types.":::
  
## Add custom values for Failure Type

A new set of REST APIs has been provided for seamless management of failure types in Azure Test Plans. Users can add new failure types, delete existing ones and view the list of failure types for a given project.
Follow the instructions provided in the links below to explore the various APIs.

* [Create a new test failure type](/rest/api/azure/devops/testresults/testfailuretype/create)
* [Delete a test failure type with specified failureTypeId](/rest/api/azure/devops/testresults/testfailuretype/delete)
* [Get the list of test failure types](/rest/api/azure/devops/testresults/testfailuretype/list)
