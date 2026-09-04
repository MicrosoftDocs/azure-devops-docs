---
title: Manage test failure types in Azure Test Plans
description: Learn how to assign failure types to failed test results and manage custom failure-type values for your Azure DevOps project.
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ai-usage: ai-assisted
ms.topic: how-to
ms.author: pliaros
author: raviLiftr
monikerRange: 'azure-devops'
ms.date: 08/14/2026
ms.update-cycle: 1095-days
---

# Manage test failure type

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

Use failure types to categorize failed test results, such as **Regression issue** or **Known issue**. Assign a built-in failure type from the Test Run Hub, or use the Test Results REST API to manage custom values for your project.

## Prerequisites

[!INCLUDE [prerequisites](includes/prerequisites.md)] 

## Assign a failure type

Failure type categorization is available for failed test results.

1. In your Azure DevOps project, select **Test Plans** > **Runs**.
1. Select the test run that contains the failed result.
1. In the test case results list, select the failed test case.
1. In **Analysis**, select a value from **Failure type**. You can also assign an analysis owner, select a resolution, and enter a comment.
1. Select **Save**.

   :::image type="content" source="media/test-runs/analysis.png" alt-text="Screenshot of Analysis with the Failure type, Resolution, and Comment fields." lightbox="media/test-runs/analysis.png":::

For more information about result details and analysis, see [Manage test runs in Azure DevOps Test Plans](test-runs.md#analysis-information).
  
## Manage custom failure types

Use the Test Results REST API to create, delete, or list custom failure types for a project:

- [Create a test failure type](/rest/api/azure/devops/testresults/testfailuretype/create)
- [Delete a test failure type](/rest/api/azure/devops/testresults/testfailuretype/delete)
- [List test failure types](/rest/api/azure/devops/testresults/testfailuretype/list)
