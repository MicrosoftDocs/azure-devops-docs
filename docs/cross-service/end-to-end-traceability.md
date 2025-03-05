---
title: End-to-end traceability
titleSuffix: Azure DevOps
description: Overview of the tools and features that support traceability from requirements to deployment.    
ms.subservice: azure-devops-cross-service
ms.custom: cross-service, cross-project
ms.topic: overview
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 03/05/2025
---
 

# About end-to-end traceability 

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Azure DevOps supports end-to-end traceability by linking various objects in your development process, such as work items, branches, commits, pull requests, builds, and releases. You can use built-in reports and Analytics to monitor traceability in real time.

This article provides an overview of how Azure DevOps enables and supports traceability, with links to more detailed information.

## Traceability and linking 

You can track the code changes, builds, and releases that are [linked to a work item](../boards/backlogs/add-link.md) throughout the development lifecycle. This way, your team can see the audit trail of how the work was done or how a bug was fixed by looking at the changes in the code base.

The link types used for Git repositories are *Build*, *Found in build*, *Integrated in build*, *Branch*, *Commit*, *Pull Request*, and *Integrated in release stage*.

:::image type="content" source="media/traceability/concept-build-release-links.png" alt-text="Graphic showing how work items, builds, and releases get linked.":::

## Create a branch and pull request from a work item

- **Branch:** You can create a branch from a work item by opening the work item card menu on the product board or by selecting **Create a branch** in the work item form. The branch is automatically linked to the work item with the *Branch* link type.

   :::image type="content" source="media/traceability/board-card-menu-new-branch.png" alt-text="Screenshot shows board card with highlighted New branch selection.":::

- **Pull request:** Once the code changes are done in the new branch, developers can create a pull request from the work item. Using the board and the work item to drive software development encourages developers to add comments as they work, documenting the changes and the reasons behind them. This way, the work item becomes a rich source of information and history for the code changes.

   :::image type="content" source="media/traceability/work-item-form-pull-request.png" alt-text="Screenshot shows highlighted selection, Create a pull request, in the work item form.":::
 
## Add and run tests from work items

Link a test to a set of requirements and validate that the application works as expected. From the board, you can add tests to the work item. Then, you can run your new tests from the board and set the test status. 

Test integration with the board makes it easy for teams to get started with manual testing and then take advantage of the full testing capabilities provided by Azure Test Plans. The board shows the test added to support the requirement when test cases are created from the board or when requirement-based test suites are created under Test Plans.

:::image type="content" source="media/traceability/board-card-menu-add-test.png" alt-text="Screenshot shows highlighted Add test selection made from board card.":::

### Manual and automated testing

You can [run automated tests](../boards/boards/add-run-update-tests.md) in a pipeline or on demand. You can also [link them to test cases](../test/associate-automated-test-with-test-case.md) in a test plan and run them from Test Plans. This way, you can track the quality of your requirements with automated tests, which is called *planned testing*.

## Deploy changes into production
 
After you define a pipeline to build and release the code changes, you can track the deployment of the work item requirement to each release stage. From the work item form, you can quickly open the links to builds and releases from the **Deployment** and **Development** sections. 

When you open the work item form, the stages the requirement is deployed to display. You can drill down for greater details with the dropdown menu. 

- **Development** section: Open branches, commits, or pull requests linked to the work item.
- **Deployment** section: Find release information for work items associated with a Git commit that's part of a build being released.

For more information, see [About kanban boards](../boards/boards/kanban-overview.md).

#### Release view

The following image illustrates the multiple environments that the release is targeting which the selected work item is associated with. 

> [!div class="mx-imgBorder"]  
> ![Example showing multiple environments that the release is targeting.](/azure/devops/boards/work-items/media/deployments-control/releases-stages-1.png)

#### Release settings 

Manage your display options from the release settings. The work item deployment control shows you how the releases that are linked to your work items are progressing. You can see the release status for work items that have commits in the build and for release pipelines that you set up to send deployment information to Azure Boards.  

![Screenshot of Release pipeline Options>Integrations settings.](media/traceability/release-pipeline-options.png) 

## Requirements Traceability Matrix

Requirements traceability provides teams with insights into indicators such as the quality of requirements or readiness to ship requirements. A fundamental aspect of requirements traceability is the association of requirements to test cases, bugs, and code changes.

The Requirements Traceability Matrix (RTM) ensures that all requirements defined for a system are tested in the test protocols. For more information about the Requirements Traceability Matrix, see [Requirements traceability](../pipelines/test/requirements-traceability.md).

### Requirements traceability reports

Requirements traceability reports are a way of showing how different phases of a development process are related and documented. They help teams to measure the quality and completeness of their requirements, and to assess their readiness for delivery. They also help to track the code changes, tests, bugs, and deployments that are linked to the requirements.

![Screenshot of the Requirements quality widget.](/azure/devops/pipelines/test/media/requirements-traceability/requirements-quality-widget.png) 

### Bug traceability

You can see the bug and the test result together in the **Tests** tab, in the same context. The **Work Items** tab also shows any requirements that are linked to the test result.

For information about bug and source traceability, see [Requirements traceability](../pipelines/test/requirements-traceability.md).

### Source traceability 

Based on the build or release pipeline, you can choose the timeline or pipeline view to see the committed code changes. You can analyze the code changes to identify the potential root cause of the test failure.

![Screenshot of source traceability.](/azure/devops/pipelines/test/media/requirements-traceability/view-code-commits.png)

## Test Analytics

For more information about Test Analytics for builds and releases, tracking the quality of requirements, and test failures, see [Test Analytics](../pipelines/test/test-analytics.md).

## Related articles 

- [Learn about requirements traceability](../pipelines/test/requirements-traceability.md)
- [View requirements tracking sample report](../report/powerbi/sample-stories-overview.md)
- [Link work items to other objects](../boards/backlogs/add-link.md)
- [Configure pipelines to support work tracking](../pipelines/integrations/configure-pipelines-work-tracking.md?toc=/azure/devops/boards/toc.json&bc=/azure/devops/boards/breadcrumb/toc.json)
- [Associate automated tests with test cases](../test/associate-automated-test-with-test-case.md)
